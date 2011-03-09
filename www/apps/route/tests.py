"""
This file demonstrates two different styles of tests (one doctest and one
unittest). These will both pass when you run "manage.py test".

Replace these with more appropriate tests for your application.
"""

from django.test import TestCase
from models import Rule, RuleSet

is_us_uk_rule = {'key': 'country', 'match_type': 'in', 'value': 'us,uk'}
is_the_ip_rule = {'key': 'ip', 'match_type': 'eq', 'value': '76.176.195.107'}
is_goog_referer_rule = {'key': 'referer', 'match_type': 'regex',
                'value': '(google|gmail)'}
is_one_in_a_hundred_rule = {'key': 'random', 'match_type': 'eq', 'value': '14'}
class RouteTest(TestCase):
    def test_rule_matching(self):
        """
        Tests that a basic geo route sends traffic correctly
        """
        test = lambda t,n,o,h: self.failUnlessEqual(
                t, Rule.check_matching(n,o,h))
        test(True, '5', 'eq', '5')
        test(True, '5', 'neq', '4')
        test(False, '5', 'eq', '1')
        test(True, 'asdf', 'regex', 'asd[fg]')
        test(False, '123', 'nregex', '\d+')
        test(True, '5', 'gt', '1')
        test(False, '6', 'lt', '3')
        test(True, '1', 'in', '1,2,3')
        test(False, '5', 'nin', '4,5,6')
    def test_rule_passing(self):
        test = lambda t,obj,vis: self.failUnlessEqual(
                t, Rule.passes(obj,vis))
        test(True, is_us_uk_rule,
                {'ip': '76.176.195.107'})
        test(True, is_the_ip_rule,
                {'ip': '76.176.195.107'})
        test(False, is_goog_referer_rule,
                {'referer': 'yahoo.com'})
        test(True, is_one_in_a_hundred_rule,
                {'ip': '76.176.195.107'} # random is seeded on IP
                )
    def test_rule_set(self):
        test = lambda t,rules,vis: self.failUnlessEqual(
            t, RuleSet.evaluate_rules(rules,vis))
        test(is_us_uk_rule,
                [is_goog_referer_rule,is_us_uk_rule,],
                {'ip': '76.176.195.107', 'referer': 'yahoo.com'})
