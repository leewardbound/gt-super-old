import os, subprocess
if "VIRTUAL_ENV" not in os.environ:
    print "You must be in a virtualenv to do this"
    exit()
else:
    virtualenv = os.environ["VIRTUAL_ENV"]
file_path = os.path.dirname(__file__)
subprocess.call(["pip", "install", "-E", virtualenv, "--requirement",
    os.path.join(file_path, "requirements/project.txt")])
subprocess.call(["easy_install"] +
        open('requirements/easy_install.txt').readlines())
