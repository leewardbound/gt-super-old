from easy import ObjectRowWidget, j, row_types
from __javascript__ import object_list, object_type, console

class RuleSetRowWidget(ObjectRowWidget):
    def __init__(self, *args, **kwargs):
        self.edit_form_url = '/edit_route/{id}'
        self.graphs_url = '/route_graphs_partial/{id}'
        self.details_contents = """Clicks Today: {clicks_today}
        <br />Link: <a href="{link}">{link}</a> """
        self.delete_url = '/delete_route/{id}'
        super(RuleSetRowWidget, self).__init__(*args, **kwargs)
        self.button_funcs.insert(2,self.rules_button)
    def rules_button(self):
        return self.UITab('rules', 
                href=self.template('/edit_route_rules/{id}'),
                display_name='Rules')

global row_types
row_types['ruleset'] = RuleSetRowWidget
