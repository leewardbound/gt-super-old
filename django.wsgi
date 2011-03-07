activate_this = "/www/wasp/env/bin/activate_this.py"
execfile(activate_this, dict(__file__=activate_this))
import os, sys
sys.path.append('/www/')
sys.path.append('/www/wasp')
os.environ['DJANGO_SETTINGS_MODULE'] = 'wasp.settings'

import django.core.handlers.wsgi

application = django.core.handlers.wsgi.WSGIHandler()

