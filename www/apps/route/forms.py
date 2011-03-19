from django import forms
from contrib.easy.forms import *
from models import RuleSet, Rule
from uni_form.helpers import FormHelper, Submit, Reset

class RuleForm(forms.ModelForm):
    value = forms.CharField(widget=forms.TextInput(attrs={'size':8}))
    redirect_to = forms.CharField(widget=forms.TextInput(attrs={'size':8}))
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

    def is_valid(self, *args, **kwargs):
        this_is_valid = super(RuleSetForm, self).is_valid(*args, **kwargs)
        subform_errors = []
        for subform in self.rule_forms_set.forms:
            if not subform.is_valid() and len(subform.errors):
                subform_errors += [subform,]
        return this_is_valid and not len(subform_errors)

    def save(self, *args, **kwargs):
        new_kwargs = dict([i for i in kwargs.iteritems()])
        new_kwargs['commit'] = False
        save_this = super(RuleSetForm, self).save(*args, **new_kwargs)
        if not save_this: return False
        if kwargs.get('commit', True):
            save_this.save()
        return save_this

    def __init__(self, *args, **kwargs):
        super(RuleSetForm, self).__init__(*args,**kwargs)
        self.factory = forms.models.inlineformset_factory(RuleSet, Rule,
            form=RuleForm)
        data = kwargs.get('data', None)
        tfk = 'rule_set-TOTAL_FORMS'
        if data and not tfk in data:
            data[tfk] = len([(k,v) for k,v in data.iteritems() 
                if '-id' in k])
            data['rule_set-INITIAL_FORMS'] = 0
            data['rule_set-MAX_NUM_FORMS'] = 0
        self.rule_forms_set = self.factory(
                instance=kwargs.get('instance', None),
                data=data)
        for f in self.rule_forms_set.forms:
            f.helper = FormHelper()
            f.helper.form_class = 'rule'
