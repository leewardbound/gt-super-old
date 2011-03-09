from django.contrib.auth.decorators import login_required
from django.shortcuts import render_to_response, redirect, get_object_or_404
from django.template.context import RequestContext
from django.http import HttpResponse
from models import RuleSet

def route(req, id):
    rs = RuleSet.cached_find_ruleset(id)
    visitor = {'ip': req.META['REMOTE_ADDR']}
    if not rs: return HttpResponse('Ruleset Not Found')
    return redirect(RuleSet.evaluate_visitor(rs, visitor))
    



@login_required
def homepage(req):
    data = {'new_ruleset_form': RuleSet.form_for(req) }
    return render_to_response('homepage.html', data, 
            context_instance=RequestContext(req))

@login_required
def edit_route(req, id=False):
    if id:
        inst = get_object_or_404(RuleSet, pk=id)
        form = RuleSet.form_for(req, instance=inst)
    else: 
        form = RuleSet.form_for(req)
    error = False
    if req.method == 'POST':
        if form.is_valid() and form.save():
            return redirect('/')
        else:
            error = True
    data = {'new_ruleset_form': form, 'error': error}
    return render_to_response('edit_route.html', data, 
            context_instance=RequestContext(req))

