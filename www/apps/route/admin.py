from django.contrib import admin
from ordered_model.admin import OrderedModelAdmin
from models import Rule, RuleSet


class RuleAdmin(OrderedModelAdmin):
    list_display = ('key', 'match_type',
        'value', 'move_up_down_links')

class RuleInline(admin.TabularInline):
    model = Rule
    extra = 1
    fields = ('key', 'match_type', 'value', 'redirect_to')

class RuleSetAdmin(admin.ModelAdmin):
    pass


admin.site.register(Rule, RuleAdmin)
admin.site.register(RuleSet, RuleSetAdmin)
