from django import forms
from models import RuleSet

class RuleSetForm(forms.ModelForm):
    class Meta:
        model = RuleSet
