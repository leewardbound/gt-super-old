from django.shortcuts import render_to_response, redirect, get_object_or_404
from django.template.context import RequestContext
from django.http import HttpResponse
from contrib.easy.views import *
from contrib.easy.views.json import *
from models import RuleSet
from forms import RuleSetForm

def route(req, id):
    rs = RuleSet.cached_find_ruleset(id)
    visitor = {'ip': req.META.get('REMOTE_ADDR', '0.0.0.0'),
            'referer': req.META.get('HTTP_REFERER', ''),
            'params': req.META.get('QUERY_STRING', ''),
            }
    if not rs: return HttpResponse('Ruleset Not Found')
    return redirect(RuleSet.evaluate_visitor(rs, visitor))

def homepage(req):
    return user_object_list(req, RuleSet.a(), template='homepage.html')

def edit_route(req, id=False):
    return user_form_page(req, RuleSet, RuleSetForm,
            id=id, redirect_to='/')

def route_form_partial(req, id=False):
    return user_form_page(req, RuleSet, RuleSetForm,
            form_action='/edit_route/{id}',
            id=id, redirect_to='/')
def route_details_partial(req, id):
    return user_object_detail(req, RuleSet.f(id=id),
            template='route_details_partial.html')
def route_graphs_partial(req, id):
    return user_object_detail(req, RuleSet.f(id=id),
            template='route_graphs_partial.html')
