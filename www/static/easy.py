from __javascript__ import jQuery
from __javascript__ import  object_list, console, confirm
j = jQuery
# Create a simple widget class
class ObjectRowWidget(object):
    def __init__(self, as_json):
        # Add some initial HTML code
        self.data = data = dict(as_json)
        for k,v in data.items():
            setattr(self, k, v)
        for req in ['edit_form_url', 'details_url']:
            if not hasattr(self, req):
                setattr(self, req, '/not_implemented')
        self.redraw()
    def redraw(self):
        self.div = j('<div>').addClass('object_row')
        self.bottom_panel = j('<div>')
        self.bottom_panel.addClass('bottom_panel clear hidden')
        self.div.html()
        self.div.append(self.name_label())
        self.div.append(self.control_links())
        self.div.append(self.bottom_panel)
        self.div.tabs()
    def control_link(self, html):
        return j('<li>').html(html)
    def control_links(self):
        ul = j('<ul>')
        ul.append(self.details_button())
        ul.append(self.edit_button())
        ul.append(self.delete_button())
        return ul
    def addToList(self, target, show=True):
        self.parent = j(target)
        if show: self.parent.append(self.div)
    def name_label(self):
        return j('<span>').addClass('name').html(self.nickname)
    def details_button(self):
        self.details_button_a = j('<a>').addClass('details')
        self.details_button_a.html('Details').attr('href',self.details())
        self.details_button = self.control_link(self.details_button_a)
        return self.details_button
    def edit_button(self):
        self.edit_button_a = j('<a>').addClass('edit')
        self.edit_button_a.html('Edit').attr('href', self.edit_form())
        self.edit_button = self.control_link(self.edit_button_a)
        return self.edit_button
    def delete_button(self):
        self.delete_button_a = j('<a>').addClass('delete').html('Delete')
        self.delete_button = self.control_link(self.delete_button_a)
        j(self.delete_button).bind('click', self.confirm_delete)
        return self.delete_button
    def confirm_delete(self, e):
        if not confirm('Are you sure you want to delete this?'):
            e.preventDefault()
    def template(self, tgt):
        for k in ['id',]:
            return tgt.replace('{%s}'%k, self.data.get(k, ''))
    def details(self):
        return self.template(self.details_url)
    def edit_form(self):
        return self.template(self.edit_form_url)

class RouteRowWidget(ObjectRowWidget):
    def __init__(self, *args, **kwargs):
        self.edit_form_url = '/route_form_partial/{id}'
        self.graphs_url = '/route_graphs_partial/{id}'
        self.details_url = '/route_details_partial/{id}'
        super(RouteRowWidget, self).__init__(*args, **kwargs)
    def control_links(self):
        ul = super(RouteRowWidget,self).control_links()
        li = self.graphs_button()
        li.insertBefore(self.edit_button)
        return ul
    def graphs_button(self):
        self.graphs_button_a = j('<a>').addClass('graphs')
        self.graphs_button_a.html('Graphs').attr('href',
                self.template(self.graphs_url))
        self.graphs_button = self.control_link(self.graphs_button_a)
        return self.graphs_button
# Install our widget
def loaded(event):
    j('.object_list').html('')
    for obj in list(object_list):
        RouteRowWidget(obj).addToList('.object_list')
         
j(loaded)
