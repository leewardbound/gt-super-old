from django import forms
from contrib.easy.forms import *
from models import RuleSet, Rule
from uni_form.helpers import FormHelper, Submit, Reset

class RuleForm(EasyForm):
    value = forms.CharField(widget=forms.TextInput(attrs={'size':8}))
    redirect_to = forms.CharField(widget=forms.TextInput(attrs={'size':8}))
    def __init__(self, data, ruleset=None, *args, **kwargs):
        super(RuleForm, self).__init__(data, *args, **kwargs)
        self.ruleset = ruleset
    def save(self, *args, **kwargs):
        old_commit = kwargs.get('commit', True)
        new_kwargs = dict(**kwargs)
        new_kwargs['commit'] = False
        to_return = super(RuleForm, self).save(*args,**new_kwargs)
        self.instance.ruleset = self.ruleset
        if old_commit: self.instance.save()
        return self.instance
    class Meta:
        model = Rule
        exclude = ('ruleset',)


class RuleSetForm(UserForm):
    if_all_rules_fail_redirect_to = forms.CharField(
            max_length=2048,
            initial="http://google.com")
    short_url_stub = forms.CharField(max_length=20, required=False)
    class Meta:
        model = RuleSet
        exclude = ('id', 'user')
