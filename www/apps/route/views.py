from django.shortcuts import render_to_response, redirect, get_object_or_404
from django.template.context import RequestContext
from django.http import HttpResponse
from contrib.easy.views import *
from contrib.easy.views.json import *
from models import RuleSet, Rule
from forms import RuleSetForm, RuleForm

def route(req, id):
    rs = RuleSet.cached_find_ruleset(id)
    visitor = {'ip': req.META.get('REMOTE_ADDR', '0.0.0.0'),
            'referer': req.META.get('HTTP_REFERER', ''),
            'params': req.META.get('QUERY_STRING', ''),
            }
    if not rs: return HttpResponse('Route Not Found')
    return redirect(RuleSet.evaluate_visitor(rs, visitor))

def homepage(req):
    return user_object_list(req, RuleSet.a(),
            extra_context={
                'add_link':'/route_form_partial/',
                'add_link_text':'Add a route',
                'header': 'My Routes',
                'subheader': 'Just get started',
                })

def add_rule(req, id):
    ruleset = RuleSet.g404(user=req.user, id=id)
    return form_page(req, Rule, RuleForm, ruleset=ruleset,
            form_action='/add_rule/%s'%id,
            redirect_to='/')

def delete_route(req, id):
    RuleSet.g404(user=req.user, id=id).delete()
    return redirect('/')

def edit_route_rules(req, id):
    return user_object_detail(req, RuleSet.f(id=id),
        template="ruleset_rules_partial.html")

def edit_route_partial(req, id=False):
    return user_form_page(req, RuleSet, RuleSetForm,
            form_action='/edit_route/{id}',
            id=id, redirect_to='/')
def route_details_partial(req, id):
    return user_object_detail(req, RuleSet.f(id=id),
            template='route_details_partial.html')
def route_graphs_partial(req, id):
    return user_object_detail(req, RuleSet.f(id=id),
            template='route_graphs_partial.html')
