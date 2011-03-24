from __javascript__ import jQuery
from __javascript__ import  object_list, console, confirm
from __pyjamas__ import toJSObjects
j = jQuery # Create a simple widget class
class ObjectRowWidget(object):
    def __init__(self, as_json):
        # Add some initial HTML code
        self.data = data = dict(as_json)
        self.div = j('<div>').addClass('object_row')
        self.button_funcs = [self.details_button, self.graphs_button,
                self.edit_button,self.delete_button]
        for k,v in data.items():
            setattr(self, k, v)
    def render(self):
        self.div.empty()
        self.bottom_panel = j('<div>')
        self.bottom_panel.addClass('bottom_panel')
        self.div.html()
        self.div.append(self.name_label())
        self.div.append(self.tab_div())
        return self.div
    def control_link(self, html):
        return j('<li>').html(html)
    def tab_div(self):
        ul = j('<ul>')
        self.tab_div = j('<div>').append(ul)
        for b in self.button_funcs:
            ul.append(b())
        self.tab_div.tabs()
        return self.tab_div
    def name_label(self):
        return j('<span>').addClass('name').html(self.nickname)
    def UITab(self, name, href=None, contents=None, display_name=None):
        button = j('<a>').html(display_name or name)
        button.attr('href', href or '#%s'%name)
        setattr(self, '%s_button'%name, button)
        if not href and contents:
            div = j('<div>').html(contents).attr('id', name)
            setattr(self, '%s_panel', div)
            self.tab_div.append(div)
        return self.control_link(button)
    def details_button(self):
        opts = { 'display_name': 'Details'}
        opts['href'] = self.get_template('details_url')
        opts['contents'] = self.get_template('details_contents')
        if not 'href' in opts and not 'contents' in opts: return None
        return self.UITab('details', **opts)
    def edit_button(self):
        opts = { 'display_name': 'Edit' }
        opts['href'] = self.get_template('edit_form_url')
        opts['contents'] = self.get_template('edit_form_contents')
        if not (hasattr(self, 'edit_form_url') or 
                hasattr(self, 'edit_form_contents')):
            return None
        return self.UITab('edit', **opts)
    def graphs_button(self):
        opts = { 'display_name': 'Graphs' }
        opts['href'] = self.get_template('graphs_url')
        opts['contents'] = self.get_template('graphs_data')
        if not (hasattr(self, 'graphs_url') or hasattr(self, 'graphs_data')):
            return None
        return self.UITab('graphs', **opts)
    def delete_button(self):
        if not hasattr(self, 'delete_url'): return None
        self.delete_button = j('<a>').html('Delete')
        self.delete_button.attr('href', 
                self.get_template('delete_url') or '#')
        self.delete_button.bind('click', self.confirm_delete)
        self.delete_button.addClass('delete')
        return self.delete_button
    def confirm_delete(self, e):
        if not confirm('Are you sure you want to delete this?'):
            e.preventDefault()
    def template(self, tgt):
        for k,v in self.data.items():
            tgt = tgt.replace('{%s}'%k, v)
        return tgt
    def get_template(self, tgt):
        if hasattr(self, tgt): return self.template(getattr(self, tgt))
        return None

# Map row types
global row_types
row_types = {}
def row_type_map(klass):
    global row_types
    if not klass in row_types: return ObjectRowWidget
    return row_types.get(klass, ObjectRowWidget)

# Install our widget
def loaded(event):
    for klass, objects in dict(object_list).items():
        klass_row_type = row_type_map(klass)
        div = j('div.%s.object_list'%klass)
        div.html('')
        for obj in list(objects):
            row = klass_row_type(obj)
            row.render()
            div.append(row.div)
j(loaded)

popup_obj = j('<div>')
def popup(data):
    global popup_obj
    popup_obj.html(data);
    popup_obj.dialog(toJSObjects({ 'width': 500 }));

# Event handlers
def construct(event):
    def ajax_modal(event):
        event.preventDefault()
        href = j(event.currentTarget).attr('href')
        def ajax_complete(data, status, xhr):
            popup(data)
        j.get(href, '', ajax_complete)
    j('.ajax').die('click')
    j('.ajax').live('click', ajax_modal)
    j('div.button').button()

j(construct)

