# This is the settings.py file used when the URL is /route/
# So that unnecessary components aren't loaded,
# and routing is fast fast fast

import os.path
import posixpath
import pinax

PINAX_ROOT = os.path.abspath(os.path.dirname(pinax.__file__))
PROJECT_ROOT = os.path.abspath(os.path.dirname(__file__))

PINAX_THEME = "default"

DEBUG = False
TEMPLATE_DEBUG = DEBUG

SITE_NAME = 'Globetrotter'


INTERNAL_IPS = [
    "127.0.0.1",
]

ADMINS = [
    # ("Your Name", "your_email@domain.com"),
]

MANAGERS = ADMINS
CACHE_BACKEND = 'redis_cache.cache://localhost:6379'
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3", # Add "postgresql_psycopg2", "postgresql", "mysql", "sqlite3" or "oracle".
        "NAME": "dev.db",                       # Or path to database file if using sqlite3.
        "USER": "",                             # Not used with sqlite3.
        "PASSWORD": "",                         # Not used with sqlite3.
        "HOST": "",                             # Set to empty string for localhost. Not used with sqlite3.
        "PORT": "",                             # Set to empty string for default. Not used with sqlite3.
    }
}

TIME_ZONE = "US/Eastern"

LANGUAGE_CODE = "en-us"

SITE_ID = 1
SITE_NAME = "Globetrotter"

USE_I18N = False

MEDIA_ROOT = os.path.join(PROJECT_ROOT, "media")
MEDIA_URL = "/media/"

STATIC_ROOT = os.path.join(PROJECT_ROOT, "static")
STATIC_URL = "/static/"
STATICFILES_DIRS = [
    os.path.join(PROJECT_ROOT, "media"),
    os.path.join(PINAX_ROOT, "media", PINAX_THEME),
]


# URL prefix for admin media -- CSS, JavaScript and images. Make sure to use a
# trailing slash.
# Examples: "http://foo.com/media/", "/media/".
ADMIN_MEDIA_PREFIX = posixpath.join(STATIC_URL, "admin/")

# Make this unique, and don't share it with anybody.
SECRET_KEY = "m90*3%%=a4qsfko@^lc9sj-+3$s2#ft)q2xp^uc@_xujvr=^-7"

# List of callables that know how to import templates from various sources.
TEMPLATE_LOADERS = [
    "django.template.loaders.filesystem.load_template_source",
    "django.template.loaders.app_directories.load_template_source",
]

MIDDLEWARE_CLASSES = [
    "django.middleware.common.CommonMiddleware",
]

ROOT_URLCONF = "www.apps.route.urls"

TEMPLATE_DIRS = [
    os.path.join(PROJECT_ROOT, "templates"),
    os.path.join(PINAX_ROOT, "templates", PINAX_THEME),
]

TEMPLATE_CONTEXT_PROCESSORS = [
    "django.core.context_processors.media",
    "django.core.context_processors.request",
    
    "pinax.core.context_processors.pinax_settings",
    
]

INSTALLED_APPS = [
    "timezones",
    "django_extensions",
    "apps.route",
]
AUTHENTICATED_EXEMPT_URLS = [
    r"^/route/",
]

try: from local_settings import *
except ImportError: pass

SERVE_MEDIA = DEBUG
import pygeoip
GEO_DRIVER = pygeoip.GeoIP(os.path.join(PROJECT_ROOT, 'GeoIP.dat'))
