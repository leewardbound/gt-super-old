activate_this = "/www/globetrotter/env/bin/activate_this.py"
execfile(activate_this, dict(__file__=activate_this))
import os, sys
sys.path.append('/www/')
sys.path.append('/www/globetrotter')
sys.path.append('/www/globetrotter/www')
sys.path.append('/www/globetrotter/www/apps')
os.chdir('/www/globetrotter/www')
os.environ['DJANGO_SETTINGS_MODULE'] = 'www.highperformance_settings'

import django.core.handlers.wsgi

application = django.core.handlers.wsgi.WSGIHandler()

