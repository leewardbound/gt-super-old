# Copyright (C) 2009, 2010, Luke Kenneth Casson Leighton <lkcl@lkcl.net>
# Copyright (C) 2010, Sujan Shakya <suzan.shakya@gmail.com>

import os
import sys
import time
import shutil
from pyjs import linker
from pyjs import translator
from pyjs import util
from cStringIO import StringIO
from optparse import OptionParser
import pyjs
import re
import traceback
try:
    from hashlib import md5
except:
    from md5 import md5

AVAILABLE_PLATFORMS = ('IE6', 'Opera', 'OldMoz', 'Safari', 'Mozilla')

if pyjs.pyjspth is None:
    BOILERPLATE_PATH = os.path.join(os.path.dirname(__file__), 'boilerplate')
else:
    BOILERPLATE_PATH = os.path.join(pyjs.pyjspth, 'pyjs', 'src','pyjs', 'boilerplate')

APP_HTML_TEMPLATE = """\
<html>
<!-- auto-generated html - you should consider editing and
adapting this to suit your requirements
-->
<head>
<meta name="pygwt:module" content="%(modulename)s">
%(css)s
<title>%(title)s</title>
</head>
<body bgcolor="white">
<script language="javascript" src="%(bootstrap_file)s"></script>
<iframe id='__pygwt_historyFrame' style='width:0;height:0;border:0'></iframe>
</body>
</html>
"""

class BrowserLinker(linker.BaseLinker):

    # parents are specified in most-specific last
    platform_parents = {
        'mozilla':['browser'],
        'ie6':['browser'],
        'safari':['browser'],
        'oldmoz':['browser'],
        'opera':['browser'],
        }

    def __init__(self, *args, **kwargs):
        self.multi_file = kwargs.pop('multi_file', False)
        self.cache_buster = kwargs.pop('cache_buster', False)
        self.bootstrap_file = kwargs.pop('bootstrap_file', 'bootstrap.js')
        self.public_folder = kwargs.pop('public_folder', 'public')
        self.runtime_options = kwargs.pop('runtime_options', [])
        super(BrowserLinker, self).__init__(*args, **kwargs)

    def visit_start(self):
        super(BrowserLinker, self).visit_start()
        self.boilerplate_path = None
        self.early_static_app_libs.append('_pyjs.js')
        #self.js_libs.append('_pyjs.js')
        self.merged_public = set()
        self.app_files = {}
        self.renamed_libs = {}

    def visit_end_platform(self, platform):
        if not platform:
            return
        if self.cache_buster:
            # rename the files to their hashed equivalents
            renamed = []
            for p in self.done[platform]:
                if p in self.renamed_libs:
                    new_p = self.renamed_libs[p]
                else:
                    f = open(p)
                    md5sum = md5(f.read()).hexdigest()
                    f.close()
                    name, ext = os.path.splitext(p)
                    new_p = name + '.' + md5sum + ext
                    # if we are keeping all intermediate files
                    if self.keep_lib_files:
                        # copy the file to it's hashed equivalent
                        shutil.copyfile(p, new_p)
                    else:   # keep new file only
                        # clean out any previous version of the hashed file
                        if os.access(new_p, os.F_OK):
                            os.unlink(new_p)
                        os.rename(p, new_p)
                    self.renamed_libs[p] = new_p
                renamed.append(new_p)
            self.done[platform] = renamed
        self.app_files[platform] = self._generate_app_file(platform)

    def visit_end(self):
        html_output_filename = os.path.join(self.output, self.top_module + '.html')
        if not os.path.exists(html_output_filename):
            # autogenerate
            self._create_app_html(html_output_filename)
        self._create_nocache_html()
        if not self.keep_lib_files:
            for fname in self.remove_files:
                if fname.find(self.output) == 0:
                    os.unlink(fname)

    def merge_resources(self, dir_name):
        if not dir_name in self.merged_public:
            public_folder = os.path.join(dir_name, self.public_folder)
            if os.path.exists(public_folder) and os.path.isdir(public_folder):
                util.copytree_exists(public_folder,
                                     self.output)
                self.merged_public.add(dir_name)
        for libs in [self.js_libs, self.dynamic_js_libs,
                     self.static_js_libs, self.early_static_js_libs, self.late_static_js_libs]:
            for lib in libs:
                if not lib in self.merged_public:
                    for path in self.path:
                        if os.path.exists(lib) and os.path.isfile(lib):
                            util.copy_exists(lib, os.path.join(self.output, os.path.basename(lib)))
                            self.merged_public.add(lib)
                            break

    def find_boilerplate(self, name):
        if not self.top_module_path:
            raise RuntimeError('Top module not found %r' % self.top_module)
        if not self.boilerplate_path:
            self.boilerplate_path = [BOILERPLATE_PATH]
            module_bp_path = os.path.join(
                os.path.dirname(self.top_module_path), 'boilerplate')
            if os.path.isdir(module_bp_path):
                self.boilerplate_path.insert(0, module_bp_path)
        for p in self.boilerplate_path:
            bp =  os.path.join(p, name)
            if os.path.exists(bp):
                return bp
        raise RuntimeError("Boilerplate not found %r" % name)

    def read_boilerplate(self, name):
        f = file(self.find_boilerplate(name))
        res = f.read()
        f.close()
        return res

    def unique_list_values(self, lst):
        keys = {}
        for k in lst:
            keys[k] = 1
        return keys.keys()

    def _generate_app_file(self, platform):
        # TODO: cache busting
        template = self.read_boilerplate('all.cache.html')
        name_parts = [self.top_module, platform, 'cache.html']
        done = self.done[platform]
        len_ouput_dir = len(self.output)+1

        app_name = self.top_module
        platform_name = platform.lower()
        dynamic = 0,
        app_headers = ''
        available_modules = self.unique_list_values(self.visited_modules[platform])
        early_static_app_libs = [] + self.early_static_app_libs
        static_app_libs = []
        dynamic_app_libs = []
        dynamic_js_libs = [] + self.dynamic_js_libs
        static_js_libs = [] + self.static_js_libs
        early_static_js_libs = [] + self.early_static_js_libs
        late_static_js_libs = [] + self.late_static_js_libs
        dynamic_modules = []
        not_unlinked_modules = [re.compile(m[1:]) for m in self.unlinked_modules if m[0] == '!']
        for m in ['pyjslib', 'sys', 'dynamic', 'pyjamas', 'pyjamas.DOM']:
            not_unlinked_modules.append(re.compile('^%s$' % m))
        unlinked_modules = [re.compile(m) for m in self.unlinked_modules if m[0] != '!' and m not in not_unlinked_modules]

        def static_code(libs, msg = None):
            code = []
            for lib in libs:
                fname = lib
                if not os.path.isfile(fname):
                    fname = os.path.join(self.output, lib)
                if not os.path.isfile(fname):
                    raise RuntimeError('File not found %r' % lib)
                if fname[len_ouput_dir:] == self.output:
                    name = fname[len_ouput_dir:]
                else:
                    name = os.path.basename(lib)
                code.append("""<script type="text/javascript"><!--""")
                if not msg is None:
                    code.append("/* start %s: %s */" % (msg, name))
                f = file(fname)
                code.append(f.read())
                if not msg is None:
                    code.append("/* end %s */" % (name,))
                code.append("""--></script>""")
                self.remove_files[fname] = True
                fname = fname.split('.')
                if fname[-2] == '__%s__' % platform_name:
                    del fname[-2]
                    fname = '.'.join(fname)
                    if os.path.isfile(fname):
                        self.remove_files[fname] = True
            return "\n".join(code)

        def js_modname(path):
            return 'js@'+os.path.basename(path)+'.'+md5(path).hexdigest()

        def skip_unlinked(lst):
            new_lst = []
            pltfrm = '__%s__' % platform_name
            for path in lst:
                fname = os.path.basename(path).rpartition(pyjs.MOD_SUFFIX)[0]
                frags = fname.split('.')
                # TODO: do not combine module chunks until we write the file
                if self.cache_buster and len(frags[-1])==32 and len(frags[-1].strip('0123456789abcdef'))==0:
                    frags.pop()
                if frags[-1] == pltfrm:
                    frags.pop()
                fname = '.'.join(frags)
                in_not_unlinked_modules = False
                for m in not_unlinked_modules:
                    if m.match(fname):
                        in_not_unlinked_modules = True
                        new_lst.append(path)
                        break
                if not in_not_unlinked_modules:
                    in_unlinked_modules = False
                    for m in unlinked_modules:
                        if m.match(fname):
                            in_unlinked_modules = True
                            if fname in available_modules:
                                available_modules.remove(fname)
                    if not in_unlinked_modules:
                        new_lst.append(path)
            return new_lst

        if self.multi_file:
            dynamic_js_libs = self.unique_list_values(dynamic_js_libs + [m for m in list(self.js_libs) if not m in static_js_libs])
            dynamic_app_libs = self.unique_list_values([m for m in done if not m in early_static_app_libs])
        else:
            static_js_libs = self.unique_list_values(static_js_libs + [m for m in list(self.js_libs) if not m in dynamic_js_libs])
            static_app_libs = self.unique_list_values([m for m in done if not m in early_static_app_libs])

        dynamic_js_libs = skip_unlinked(dynamic_js_libs)
        dynamic_app_libs = skip_unlinked(dynamic_app_libs)
        static_js_libs = skip_unlinked(static_js_libs)
        static_app_libs = skip_unlinked(static_app_libs)
        
        dynamic_modules = self.unique_list_values(available_modules + [js_modname(lib) for lib in dynamic_js_libs])
        available_modules = self.unique_list_values(available_modules + early_static_app_libs + dynamic_modules)
        if len(dynamic_modules) > 0:
            dynamic_modules = "['" + "','".join(dynamic_modules) + "']"
        else:
            dynamic_modules = "[]"
        appscript = "<script><!--\n$wnd.__pygwt_modController.init($pyjs.appname, window)\n$wnd.__pygwt_modController.load($pyjs.appname, [\n'%s'\n])\n--></script>"
        jsscript = """<script type="text/javascript" src="%(path)s" onload="$pyjs.script_onload('%(modname)s')" onreadystatechange="$pyjs.script_onreadystate('%(modname)s')"></script>"""
        dynamic_app_libs = appscript % "',\n'".join([lib[len_ouput_dir:] for lib in dynamic_app_libs])
        dynamic_js_libs = '\n'.join([jsscript % {'path': lib, 'modname': js_modname(lib)} for lib in dynamic_js_libs])
        early_static_app_libs = static_code(early_static_app_libs)
        static_app_libs = static_code(static_app_libs)
        early_static_js_libs = static_code(early_static_js_libs, "javascript lib")
        static_js_libs = static_code(static_js_libs, "javascript lib")
        late_static_js_libs = static_code(late_static_js_libs, "javascript lib")

        setoptions = "\n".join([("$pyjs.options['%s'] = %s;" % (n, v)).lower() for n,v in self.runtime_options])

        file_contents = template % locals()
        if self.cache_buster:
            md5sum = md5(file_contents).hexdigest()
            name_parts.insert(2, md5sum)
        out_path = os.path.join(self.output, '.'.join((name_parts)))

        out_file = file(out_path, 'w')
        out_file.write(file_contents)
        out_file.close()
        return out_path

    def _create_nocache_html(self):
        # nocache
        template = self.read_boilerplate('home.nocache.html')
        out_path = os.path.join(self.output, self.top_module + ".nocache.html")
        select_tmpl = """O(["true","%s"],"%s");\n"""
        script_selectors = StringIO()
        for platform in self.platforms:
            cache_html = os.path.basename(self.app_files[platform])
            sel = select_tmpl % (platform, cache_html)
            script_selectors.write(sel)
        out_file = file(out_path, 'w')
        out_file.write(template % dict(
            app_name = self.top_module,
            script_selectors = script_selectors.getvalue()
            ))
        out_file.close()

    def _create_app_html(self, file_name):
        """ Checks if a base HTML-file is available in the PyJamas
        output directory.
        If the HTML-file isn't available, it will be created.

        If a CSS-file with the same name is available
        in the output directory, a reference to this CSS-file
        is included.

        If no CSS-file is found, this function will look for a special
        CSS-file in the output directory, with the name
        "pyjamas_default.css", and if found it will be referenced
        in the generated HTML-file.
        """

        # if html file in output directory exists, leave it alone.
        if os.path.exists(file_name):
            return 0
        if os.path.exists(
            os.path.join(self.output, self.top_module + '.css' )):
            css = "<link rel='stylesheet' href='" + self.top_module + ".css'>"
        elif os.path.exists(
            os.path.join(self.output, 'pyjamas_default.css' )):
            css = "<link rel='stylesheet' href='pyjamas_default.css'>"
        else:
            css = ''

        title = 'PyJamas Auto-Generated HTML file ' + self.top_module

        base_html = APP_HTML_TEMPLATE % {'modulename': self.top_module,
                                         'title': title, 'css': css,
                                         'bootstrap_file': self.bootstrap_file,
                                        }

        fh = open (file_name, 'w')
        fh.write  (base_html)
        fh.close  ()
        return 1

MODIFIED_TIME = {}

def is_modified(path):
    current_mtime = os.path.getmtime(path)
    if current_mtime == MODIFIED_TIME.get(path):
        return False
    else:
        MODIFIED_TIME[path] = current_mtime
        print('mtime changed for %s.' % path)
        return True

def serve(path):
    print("\nMonitoring file modifications in %s ..." % \
           os.path.abspath(os.curdir))

def build(top_module, pyjs, options, app_platforms,
          runtime_options, args):
    print "Building :", top_module
    print "PYJSPATH :", '\n    '.join(['['] + [p for p in pyjs.path]) + '\n]'
    translator_arguments=dict(
        debug=options.debug,
        print_statements = options.print_statements,
        function_argument_checking=options.function_argument_checking,
        attribute_checking=options.attribute_checking,
        bound_methods=options.bound_methods,
        descriptors=options.descriptors,
        source_tracking=options.source_tracking,
        stupid_mode=options.stupid_mode,
        line_tracking=options.line_tracking,
        store_source=options.store_source,
        inline_code = options.inline_code,
        operator_funcs = options.operator_funcs,
        number_classes = options.number_classes,
        list_imports=options.list_imports,
    )

    if options.internal_ast:
        translator_arguments['internal_ast'] = True

    l = BrowserLinker(args,
                      output=options.output,
                      platforms=app_platforms,
                      path=pyjs.path,
                      js_libs=options.js_includes,
                      unlinked_modules=options.unlinked_modules,
                      keep_lib_files=options.keep_lib_files,
                      compile_inplace=options.compile_inplace,
                      translator_arguments=translator_arguments,
                      multi_file=options.multi_file,
                      cache_buster=options.cache_buster,
                      bootstrap_file=options.bootstrap_file,
                      public_folder=options.public_folder,
                      runtime_options=runtime_options,
                      list_imports=options.list_imports,
                     )
    l()

    if not options.list_imports:
        print "Built to :", os.path.abspath(options.output)
        return
    print "Dependencies"
    for f, deps in l.dependencies.items():
        print "%s\n%s" % (f, '\n'.join(map(lambda x: "\t%s" % x, deps)))
    print
    print "Visited Modules"
    for plat, deps in l.visited_modules.items():
        print "%s\n%s" % (plat, '\n'.join(map(lambda x: "\t%s" % x, deps)))
    print


def build_script():
    usage = """
    usage: %prog [options] <application module name>

    This is the command line builder for the pyjamas project, which can
    be used to build Ajax applications from Python.
    For more information, see the website at http://pyjs.org/
    """
    global app_platforms
    parser = OptionParser(usage = usage)
    # TODO: compile options
    translator.add_compile_options(parser)
    linker.add_linker_options(parser)
    parser.add_option("-P", "--platforms", dest="platforms",
        help="platforms to build for, comma-separated")
    parser.add_option("-l", "--log-level", dest="log_level",
                      default=None,
                      type="int",
                      help="The python log level as an int")
    parser.add_option(
        "-m", "--multi-file", dest="multi_file",
        default=False,
        action="store_true",
        help="Include each module via a script-tag instead of writing"
              " the whole code into the main cache.html file")

    parser.add_option("-A", "--auto-build", dest="auto_build",
                      default=False,
                      action="store_true",
                      help="Runs continuous re-builds on file changes")

    parser.add_option("-i", "--list-imports", dest="list_imports",
                      default=False,
                      action="store_true",
                      help="List import dependencies (without compiling)")

    parser.add_option(
        "-c", "--cache-buster", action="store_true",
        dest="cache_buster",
        default=False,
        help="Enable browser cache-busting (MD5 hash added to output filenames)",
        )

    parser.add_option(
        "--bootstrap-file", 
        dest="bootstrap_file",
        help="Specify the bootstrap code. (Used when application html file is generated)."
        )

    parser.add_option(
        "--public-folder",
        dest="public_folder",
        help="Specifiy the public folder. (Contents copied into the output dir, see -o)."
        )

    parser.add_option(
        "--dynamic",
        dest="unlinked_modules",
        action="append",
        help="regular expression for modules that will not be linked and thus loaded dynamically"
        )

    parser.add_option(
        "--no-compile-inplace", dest="compile_inplace",
        action="store_false",
        help="Store all js compiled files in output/lib"
        )

    parser.add_option(
        "--no-keep-lib-files", dest="keep_lib_files",
        action="store_false",
        help="Deletes the js compiled files after linking"
        )

    parser.add_option(
        "--compile-inplace", dest="compile_inplace",
        default=True,
        action="store_true",
        help="Store js compiled files in the same place as the python source"
        )

    parser.add_option(
        "--keep-lib-files", dest="keep_lib_files",
        default=True,
        action="store_true",
        help="Keep the js compiled files"
        )

    parser.set_defaults(output="output",
                        js_includes=[],
                        js_static_includes=[],
                        library_dirs=[],
                        platforms=(','.join(AVAILABLE_PLATFORMS)),
                        bootstrap_file="bootstrap.js",
                        public_folder="public",
                        unlinked_modules=[],
                        )
    options, _args = parser.parse_args()
    args = []
    for a in _args:
        if a.lower().endswith('.py'):
            args.append(a[:-3])
        else:
            args.append(a)

    if options.log_level is not None:
        import logging
        logging.basicConfig(level=options.log_level)
    if len(args) < 1:
        parser.error("incorrect number of arguments")

    top_module = args[0]
    for d in options.library_dirs:
        pyjs.path.append(os.path.abspath(d))

    if options.platforms:
       app_platforms = options.platforms.lower().split(',')

    if options.multi_file and options.compile_inplace:
        options.compile_inplace = False

    runtime_options = []
    runtime_options.append(("arg_ignore", options.function_argument_checking))
    runtime_options.append(("arg_count", options.function_argument_checking))
    runtime_options.append(("arg_is_instance", options.function_argument_checking))
    runtime_options.append(("arg_instance_type", options.function_argument_checking))
    runtime_options.append(("arg_kwarg_dup", options.function_argument_checking))
    runtime_options.append(("arg_kwarg_unexpected_keyword", options.function_argument_checking))
    runtime_options.append(("arg_kwarg_multiple_values", options.function_argument_checking))
    runtime_options.append(("dynamic_loading", (len(options.unlinked_modules)>0)))

    build(top_module, pyjs, options, app_platforms,
          runtime_options, args)

    if not options.auto_build:
        sys.exit(0)

    # autobuild starts here: loops round the current directory file structure
    # looking for file modifications.  extra files in the public folder are
    # copied to output, verbatim (without a recompile) but changes to python
    # files result in a recompile with the exact same compile options.

    first_loop = True

    public_dir = options.public_folder
    output_dir = options.output

    serve(top_module)

    while True:
        for root, dirs, files in os.walk('.'):
            if root[2:].startswith(output_dir):
                continue
            if root[2:].startswith(public_dir):
                for filename in files:
                    file_path = os.path.join(root, filename)
                    if is_modified(file_path) and not first_loop:
                        dest_path = output_dir
                        dest_path += file_path.split(public_dir, 1)[1]
                        dest_dir = os.path.dirname(dest_path)
                        if not os.path.exists(dest_dir):
                            os.makedirs(dest_dir)
                        print('Copying %s to %s' % (file_path, dest_path))
                        shutil.copy(file_path, dest_path)
            else:
                for filename in files:
                    if os.path.splitext(filename)[1] in ('.py',):
                        file_path = os.path.join(root, filename)
                        if is_modified(file_path) and not first_loop:
                            try:
                              build(top_module, pyjs, options,
                                    app_platforms, runtime_options, args)
                            except Exception:
                              traceback.print_exception(*sys.exc_info())
                            break
        first_loop = False
        time.sleep(1)

