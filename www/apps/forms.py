from django import forms
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
class UserOwnedForm(forms.ModelForm):
    def __init__(self, user, *args, **kwargs):
        self.user_instance = user
        super(UserOwnedForm, self).__init__(*args,**kwargs)

    def save(self, *args, **kwargs):
        new_kwargs = dict([i for i in kwargs.iteritems()])
        new_kwargs['commit'] = False
        obj = super(UserOwnedForm, self).save(*args, **new_kwargs)
        obj.user = self.user_instance
        if kwargs.get('commit', True):
            obj.save()
        return obj
