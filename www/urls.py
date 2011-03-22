from django.conf import settings
from django.conf.urls.defaults import *
from django.views.generic.simple import direct_to_template

from django.contrib import admin
admin.autodiscover()

from pinax.apps.account.openid_consumer import PinaxConsumer
from apps import route

handler500 = "pinax.views.server_error"


urlpatterns = patterns("",
    url(r"^$", 'route.views.homepage', name="home"),

    url(r"^route/", include('route.urls')),
    url(r"^create_route$", 'route.views.edit_route_partial', name="create_route"),

    url(r"^edit_route/(?P<id>[\d\w]*)$", 'route.views.edit_route_partial',
        name="edit_route_partial"),
    url(r"^delete_route/(?P<id>[\d\w]*)$", 'route.views.delete_route',
        name="delete_route"),

    url(r"^add_rule/(?P<id>[\d\w]*)$", 'route.views.add_rule',
        name="add_rule"),

    url(r"^edit_route_rules/(?P<id>[\d\w]*)$",
        'route.views.edit_route_rules', name="edit_route_rules"),

    url(r"^route_graphs_partial/(?P<id>[\d\w]*)$", 
        'route.views.route_graphs_partial', name="route_graphs_partial"),

    url(r"^admin/invite_user/$", "pinax.apps.signup_codes.views.admin_invite_user", name="admin_invite_user"),
    url(r"^admin/", include(admin.site.urls)),
    url(r"^account/", include("pinax.apps.account.urls")),
    url(r"^openid/(.*)", PinaxConsumer()),
    url(r"^notices/", include("notification.urls")),
    url(r"^announcements/", include("announcements.urls")),
)

if settings.SERVE_MEDIA:
    urlpatterns += patterns("",
        url(r"", include("staticfiles.urls")),
    )
