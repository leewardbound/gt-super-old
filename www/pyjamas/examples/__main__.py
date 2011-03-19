#!/usr/bin/env python
# -*- coding: utf-8 -*-


import os
import sys
import subprocess

from _examples import util


head = os.path.dirname(__file__)
examples = [
    example
    for example in os.listdir(head)
        if os.path.isfile(os.path.join(head, example, '__main__.py'))
            and not example.startswith('_')
]

env = os.environ.copy()
# Not ready yet
#env['PYJS_OPT_PROXYINSTALL'] = '1'
if 'PYJS_BIN_PYTHON' not in env:
    env['PYJS_BIN_PYTHON'] = util._find_python()
if 'PYJS_DIR_PYJAMAS' not in env:
    env.update(dict([
        ('PYJS_' + k, v)
        for k, v in util._process_pyjamas(head).items()
    ]))

for example in examples:
    header = '\n' + '( Building {0} )'.format(example.upper()).center(69, '-') + '\n\n'
    sys.stdout.write(header)
    sys.stdout.flush()
    e = subprocess.Popen([env['PYJS_BIN_PYTHON'], os.path.join(head, example)] + sys.argv[1:], env=env)
    e.wait()

complete = [
    '\n' + '( Pyjs )'.center(69, '-') + '\n',
    '  Complete! View examples via:',
    '  # cd {0}'.format(head),
    '  # {0} -m SimpleHTTPServer'.format(env['PYJS_BIN_PYTHON']),
    '  http://localhost:8000',
    '\n' + '( Pyjs )'.center(69, '-') + '\n\n',
]

sys.stdout.write('\n'.join(complete))
