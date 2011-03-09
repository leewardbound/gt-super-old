from django.conf.urls.defaults import *
urlpatterns = patterns("",
        url(r"(?P<id>[\d\w]+)", 'apps.route.views.route')
        )
