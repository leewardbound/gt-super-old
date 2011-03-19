from django.core.paginator import Paginator, InvalidPage, EmptyPage
from django.http import Http404
from django.shortcuts import render_to_response, redirect
from django.template.context import RequestContext

def form_view_data(req, model_class, form_class, user=None, 
        id=None, instance=None, **kwargs):
    data = req.POST if req.POST else None
    user = user if user else req.user
    kwargs['user'] = user
    new = True
    if id or instance:
        new = False
        if not instance: instance = model_class.g404(user=user, pk=id)
        else: instance = instance
    form = form_class(data, instance=instance, **kwargs)
    saved = False
    if req.POST and form.is_valid():
        instance = form.save()
        saved = True
        form = form_class(None, instance=instance, **kwargs)
    errors = form.errors
    out = { 'form': form,
            'posted_data': data,
            'instance': instance,
            'id': instance.id if instance else None,
            'new': new,
            'saved': saved,
            'errors': errors}
    return out

def form_page(req, model_class, form_class, 
        redirect_to=False, id=None, instance=None, template=None, **kwargs):
    data = form_view_data(req,model_class,form_class, 
            id=id, instance=instance, **kwargs)
    template = template or 'form_partial.html'
    if data['saved'] and redirect_to:
        return redirect(redirect_to.format(id=data['id']))
    return render_to_response(template, data,
            context_instance=RequestContext(req))

def user_form_page(req, model_class, form_class, *args, **kwargs):
    if not 'user' in kwargs: kwargs['user'] = req.user
    return form_page(req, model_class, form_class, *args, **kwargs)

def user_object_detail(req, qs, template='object_detail.html',
        relation='user', extra_context=None):
    obj = qs.g404(**{relation: req.user})
    data = {'object': obj, 'obj': obj, 'id': obj.id}
    if extra_context: data = dict(data, **extra_context)
    return render_to_response(template, data,
            context_instance=RequestContext(req))

def user_object_list(req, queryset, per_page=25, template='object_list.html',
        allow_empty=True, allow_override_per_page=True, relation='user',
        extra_context=None):
    user_qs = queryset.f(**{relation: req.user})
    if not allow_empty and user_qs.count() == 0:
        raise Http404
    try: page = int(req.GET.get('page', '1'))
    except ValueError: page = 1
    try: 
        if allow_override_per_page: per_page = int(req.GET['per_page'])
    except: pass

    paginator = Paginator(user_qs, per_page) 
    try: objects = paginator.page(page)
    except (EmptyPage, InvalidPage): objects = paginator.page(1)

    data = {"objects": objects}
    if extra_context: data = dict(data, **extra_context)

    objects.modelname = ''
    return render_to_response(template, data,
            context_instance=RequestContext(req))
