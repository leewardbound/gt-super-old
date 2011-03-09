from django import forms
from apps.forms import UserOwnedForm
from models import RuleSet

class RuleSetForm(UserOwnedForm):
    if_all_rules_fail_redirect_to = forms.CharField(
            max_length=2048,
            initial="http://google.com")
    short_url_stub = forms.CharField(max_length=20, required=False)
    class Meta:
        model = RuleSet
        exclude = ('id', 'user')
