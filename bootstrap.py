import os, subprocess
if "VIRTUAL_ENV" not in os.environ:
  virtualenv = None
else:
  virtualenv = os.environ["VIRTUAL_ENV"]
file_path = os.path.dirname(__file__)
req_file = os.path.join(os.path.abspath(file_path), "requirements/project.txt")
pip_cmd = ["pip", "install",]
if virtualenv: pip_cmd += ["-E", virtualenv,]
pip_cmd += ["--requirement",req_file]
print ' '.join(pip_cmd)
subprocess.call(pip_cmd)
  
subprocess.call(["easy_install"] +
        open('requirements/easy_install.txt').readlines())
