from django.db import models
from ordered_model.models import OrderedModel
from apps.models import *

RULE_TYPES = (
        ('ip', 'IP'),
        ('referer', 'Referer URL'),
        ('country', 'Country'),
        ('param', '&gtsub= Parameter'),
    )
MATCH_TYPES = (
        ('eq', '= (EQUALS)'),
        ('neq', '!= (NOT EQUALS)'),
        ('regex', '~= (REGEX)'),
        ('nregex', '!~= (NOT REGEX)'),
        ('gt', '> (GREATER THAN)'),
        ('lt', '< (LESS THAN)'),
        ('in', 'in (Any,of,comma,seperated)'),
        ('nin', 'not in (Any,of,comma,seperated)'),
        )


class RuleSet(user_owned_model):
    nickname = models.CharField(max_length=128)
    short_url_stub = models.CharField(max_length=20, default="", blank=True)
    then_redirect_to = models.URLField(verify_exists=False, max_length=1024)
    def __unicode__(self): return self.nickname
    
class Rule(OrderedModel):
    key = models.CharField(max_length=32, choices=RULE_TYPES)
    match_type = models.CharField(max_length=32, choices=MATCH_TYPES)
    value = models.CharField(max_length=1024, default="")
    redirect_to = models.URLField(verify_exists=False, max_length=1024)
    and_pass_subids = models.BooleanField(default=True)
    ruleset = models.ForeignKey(RuleSet)
    class Meta:
        ordering = ('ruleset', 'order')
