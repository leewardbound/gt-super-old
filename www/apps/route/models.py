from django.db import models
from django.shortcuts import get_object_or_404
from django.conf import settings
from ordered_model.models import OrderedModel
from contrib.random_hashes import randHash8
from contrib.easy.models import *
import datetime

RULE_TYPES = (
        ('ip', 'IP'),
        ('referer', 'Referer URL'),
        ('country', 'Country'),
        ('param', 'URL Parameter'),
        ('hour', 'Current hour [24h format]'),
        ('random', 'Random N % of your traffic'),
    )
MATCH_TYPES = (
        ('eq', '= (EQUALS)'),
        ('neq', '!= (NOT EQUALS)'),
        ('regex', '~= (REGEX)'),
        ('nregex', '!~= (NOT REGEX)'),
        ('gt', '> (GREATER THAN)'),
        ('lt', '< (LESS THAN)'),
        ('in', 'in (Any,of,these)'),
        ('nin', 'not in (None,of,these)'),
        ('file', 'on page at URL'),
        ('nfile', 'not on page at URL'),
        )


class RuleSet(user_owned_model):
    nickname = models.CharField(max_length=128, unique=True)
    short_url_stub = models.CharField(max_length=20, default=randHash8, unique=True)
    if_all_rules_fail_redirect_to = models.URLField(verify_exists=False, max_length=1024)
    and_pass_subids = models.BooleanField(default=False)
    def __unicode__(self): return self.nickname
    def url_stub_for(self):
        if len(self.short_url_stub):
            return self.short_url_stub
        else: return self.id
    def url(self):
        try:
            return 'http://%s/route/%s'%(settings.HOST_URL, self.url_stub_for())
        except: return '/route/%s'%self.url_stub_for()
    def to_json(self):
        import json
        return json.dumps({
        'id': self.id,
        'user_id': self.user.id,
        'nickname': self.nickname,
        'clicks_today': self.clicks_today(),
        'link': self.url(),
        'short_url_stub': self.short_url_stub,
        'if_all_rules_fail_redirect_to': self.if_all_rules_fail_redirect_to, 
        'and_pass_subids': self.and_pass_subids,
        'rules': [r.to_json() for r in self.rule_set.all() if len(r.value)] })

    @staticmethod
    def nickname_key(name_or_id):
        return 'RuleSet_%s'%name_or_id

    @staticmethod
    def find_ruleset(name_or_id):
        find = RuleSet.f(short_url_stub=name_or_id)
        if find.count() > 0:
            return find[0]
        find = RuleSet.f(pk=name_or_id)
        if find.count() > 0:
            return find[0]
        else: 
            return False

    @staticmethod
    def cached_find_ruleset(name_or_id):
        import json
        from django.core.cache import cache
        key = RuleSet.nickname_key(name_or_id)
        if not cache.get(key):
            rs = RuleSet.find_ruleset(name_or_id)
            if not rs:
                cache.set(key, 'empty', 10)
                return False
            else:
                cache.set(key, rs.to_json(), 10)
        try: return json.loads(cache.get(key))
        except: return False

    @staticmethod
    def evaluate_rules(rules, visitor):
        import json
        for rule in rules:
            rule = json.loads(rule)
            if Rule.passes(rule, visitor):
                return rule
        return False

    @staticmethod
    def evaluate_visitor(ruleset, visitor):
        rule = RuleSet.evaluate_rules(ruleset['rules'], visitor)
        default = ruleset.get('if_all_rules_fail_redirect_to', 'about:blank')
        RuleSet.increment_clicks(ruleset['id'])
        if not rule:
            RuleSet.increment_clicks(ruleset['id'], False, 0)
            if ruleset['and_pass_subids']: 
                return RuleSet.pass_subids(default, visitor)
            else: return default
        else:
            RuleSet.increment_clicks(ruleset['id'], False, rule['id'])
            target = rule.get('redirect_to', default)
            if 'http' not in target: target = default
            if rule.get('and_pass_subids', False):
                return RuleSet.pass_subids(target, visitor)
            else:
                return target
                        
    @staticmethod
    def pass_subids(url, visitor):
        return '%s?&%s'%(url, visitor['params']) if visitor['params'] else url
    
    @staticmethod
    def clicks_key(ruleset_id, day=False, segment_id=False):
        if segment_id is False: segment = ''
        else: segment = 'seg_%s_'%segment_id
        if not day:
            day = datetime.date.today()
        return ('ruleset_clicks_%s_%s%s'%(day.strftime('%Y_%m_%d')
          ,segment,ruleset_id)).replace('-','_')

    @staticmethod
    def clicks_for(ruleset_id, day=False, segment_id=False):
        from django.core.cache import cache
        key = RuleSet.clicks_key(ruleset_id, day, segment_id)
        return int(cache.get(key, 0))

    @staticmethod
    def increment_clicks(ruleset_id, day=False, segment_id=False):
        from django.core.cache import cache
        key = RuleSet.clicks_key(ruleset_id, day, segment_id)
        if not cache.get(key): cache.set(key, 0)
        i = cache.incr(key, 1)
        cache.expire(key, 60*60*24*7)
        return i

    def clicks_today(self):
        return RuleSet.clicks_for(self.id)
    def last_seven_days(self):
        from datetime import datetime, timedelta
        from contrib.date import datetimeIterator
        today = datetime.now()
        week_ago= today - timedelta(days=7)
        return [
                [[str(d.date()), RuleSet.clicks_for(self.id, d.date(), seg)]
            for d in datetimeIterator(from_date=week_ago, to_date=today)]
                for seg in [r.id for r in self.rule_set.all()[:10]]+[0,]
                ]
    
class Rule(OrderedModel):
    key = models.CharField(max_length=32, choices=RULE_TYPES)
    match_type = models.CharField(max_length=32, choices=MATCH_TYPES)
    value = models.CharField(max_length=1024, default="")
    redirect_to = models.URLField(verify_exists=False, max_length=1024)
    and_pass_subids = models.BooleanField(default=True)
    ruleset = models.ForeignKey(RuleSet)
    class Meta:
        ordering = ('ruleset', 'order')
    def __unicode__(self):
        return ' '.join([
            self.get_key_display(), self.get_match_type_display(),
            self.value])

    def to_json(self):
        import json
        return json.dumps({
            'id': self.id,
            'key': self.key,
            'match_type': self.match_type,
            'value': self.value,
            'redirect_to': self.redirect_to,
            'and_pass_subids': self.and_pass_subids,
            'ruleset': self.ruleset_id })

    @staticmethod
    def passes(obj, visitor):
        if obj['key'] == 'country':
            country = settings.GEO_DRIVER.country_code_by_addr(visitor['ip'])
            if visitor['ip'] == '127.0.0.1': country = 'US'
            return Rule.check_matching(country,
                    obj['match_type'],
                    obj['value'].upper()
                    )
        if obj['key'] == 'ip':
            return Rule.check_matching(visitor['ip'],
                    obj['match_type'],
                    obj['value'])
        if obj['key'] == 'referer':
            return Rule.check_matching(visitor['referer'],
                    obj['match_type'],
                    obj['value'])
        if obj['key'] == 'param':
            return Rule.check_matching(visitor['params'],
                    obj['match_type'],
                    obj['value'])
        if obj['key'] == 'hour':
            return Rule.check_matching(datetime.datetime.now().strftime(
                '%H'), obj['match_type'], obj['value'])
        if obj['key'] == 'random':
            import md5
            v= Rule.check_matching(
                    str(int(md5.new(visitor['ip']).hexdigest(),16)%100+1),
                    obj['match_type'], obj['value'])
            return v
        return True
    @staticmethod
    def check_matching(needle, operator, haystack):
        n,o,h = needle, operator, haystack # shorthand
        if o == 'eq': return n == h
        if o == 'neq': return n != h
        if o == 'regex':
            import re
            try: return bool(re.match(h, n))
            except: return False
        if o == 'nregex':
            import re
            try: return not bool(re.match(h, n))
            except: return False
        if o == 'gt':
            try: return int(n) > int(h)
            except: return False
        if o == 'lt':
            try: return int(n) < int(h)
            except: return False
        if o == 'in': return n in map(lambda s:s.strip(), h.split(','))
        if o == 'nin': return not n in map(lambda s:s.strip(), h.split(','))
        if o == 'file': return Rule.in_file(h.strip(), n)
        if o == 'nfile': return not Rule.in_file(h.strip(), n)
        return False
    @staticmethod
    def in_file(url, key):
        return key in Rule.cached_file(url)
    @staticmethod
    def cached_file(url):
        import json, hashlib
        from django.core.cache import cache
        m = hashlib.md5(url).hexdigest()
        key_name = 'remote_file_%s'%m
        old_cached_value = cache.get(key_name)
        if not old_cached_value:
            import urllib2
            downloaded = urllib2.urlopen(url).read()
            cache.set(key_name, downloaded, 3600)
        return (old_cached_value or downloaded)
