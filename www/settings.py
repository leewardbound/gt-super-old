# -*- coding: utf-8 -*-
# Django settings for intranet project.

import os.path
import posixpath
import pinax

PINAX_ROOT = os.path.abspath(os.path.dirname(pinax.__file__))
PROJECT_ROOT = os.path.abspath(os.path.dirname(__file__))

PINAX_THEME = "default"

DEBUG = True
DEVELOP = False
SERVE_MEDIA = True
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
        "ENGINE": "django.db.backends.mysql", # Add "postgresql_psycopg2", "postgresql", "mysql", "sqlite3" or "oracle".
        "NAME": "globetrotter",                       # Or path to database file if using sqlite3.
        "USER": "globetrotter",                             # Not used with sqlite3.
        "PASSWORD": "globetrotter",                         # Not used with sqlite3.
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

DEV_MEDIA_URL = '/compiled-media/'
PRODUCTION_MEDIA_URL = '/compiled-media/'

GLOBAL_MEDIA_DIRS = (os.path.join(os.path.dirname(__file__), 'static'),)

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
    'mediagenerator.middleware.MediaMiddleware',
    "django.middleware.common.CommonMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "groups.middleware.GroupAwareMiddleware",
    "pinax.apps.account.middleware.LocaleMiddleware",
    "pinax.apps.account.middleware.AuthenticatedMiddleware",
    "pagination.middleware.PaginationMiddleware",
    "pinax.middleware.security.HideSensistiveFieldsMiddleware",
    "debug_toolbar.middleware.DebugToolbarMiddleware",
]

ROOT_URLCONF = "www.urls"

TEMPLATE_DIRS = [
    os.path.join(PROJECT_ROOT, "templates"),
    os.path.join(PINAX_ROOT, "templates", PINAX_THEME),
]

TEMPLATE_CONTEXT_PROCESSORS = [
    "django.core.context_processors.auth",
    "django.core.context_processors.debug",
    "django.core.context_processors.i18n",
    "django.core.context_processors.media",
    "django.core.context_processors.request",
    "django.contrib.messages.context_processors.messages",
    
    "staticfiles.context_processors.static_url",
    
    "pinax.core.context_processors.pinax_settings",
    
    "pinax.apps.account.context_processors.account",
    
    "notification.context_processors.notification",
    "announcements.context_processors.site_wide_announcements",
]

INSTALLED_APPS = [
    # Django
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.sites",
    "django.contrib.messages",
    "django.contrib.humanize",
    "django.contrib.markup",
    
    "pinax.templatetags",
    
    # external
    "notification",
    'mediagenerator',
    "emailconfirmation",
    "staticfiles",
    "debug_toolbar",
    "uni_form",
    "django_openid",
    "ajax_validation",
    "timezones",
    "announcements",
    "pagination",
    "django_markup",
    "django_filters",
    "django_extensions",
    
    # Pinax
    "pinax.apps.account",
    "pinax.apps.signup_codes",
    
    # project
    "contrib.easy",
    "profiles",
    "apps.route",
]

FIXTURE_DIRS = [
    os.path.join(PROJECT_ROOT, "fixtures"),
]

MESSAGE_STORAGE = "django.contrib.messages.storage.session.SessionStorage"

ABSOLUTE_URL_OVERRIDES = {
    "auth.user": lambda o: "/profiles/profile/%s/" % o.username,
}

MARKUP_FILTER_FALLBACK = "none"
MARKUP_CHOICES = [
    ("restructuredtext", u"reStructuredText"),
    ("textile", u"Textile"),
    ("markdown", u"Markdown"),
    ("creole", u"Creole"),
]



AUTH_PROFILE_MODULE = "profiles.Profile"
NOTIFICATION_LANGUAGE_MODULE = "account.Account"

ACCOUNT_OPEN_SIGNUP = False
ACCOUNT_REQUIRED_EMAIL = False
ACCOUNT_EMAIL_VERIFICATION = False
ACCOUNT_EMAIL_AUTHENTICATION = False
ACCOUNT_UNIQUE_EMAIL = EMAIL_CONFIRMATION_UNIQUE_EMAIL = False

AUTHENTICATION_BACKENDS = [
    "pinax.apps.account.auth_backends.AuthenticationBackend",
]

LOGIN_URL = "/account/login/" # @@@ any way this can be a url name?
LOGIN_REDIRECT_URLNAME = "home"

EMAIL_CONFIRMATION_DAYS = 2
EMAIL_DEBUG = DEBUG

AUTHENTICATED_EXEMPT_URLS = [
    r"^/route/",
    r"^/account/signup/$",
    r"^/account/password_reset",
    r"^/account/confirm_email",
    r"^/__debug__",
]

DEBUG_TOOLBAR_CONFIG = {
    "INTERCEPT_REDIRECTS": False,
}

from assets import *
# local_settings.py can be used to override environment-specific settings
# like database and email that differ between development and production.
try: from local_settings import *
except ImportError: pass

import pygeoip
GEO_DRIVER = pygeoip.GeoIP(os.path.join(PROJECT_ROOT, 'GeoIP.dat'))
MEDIA_DEV_MODE = DEVELOP
