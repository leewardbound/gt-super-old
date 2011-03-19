import pyjd # dummy in pyjs

from pyjamas.ui.TabBar import TabBar
from pyjamas.ui.TabPanel import TabPanel
from pyjamas.ui import HasAlignment
from pyjamas.ui.Image import Image
from pyjamas.ui.DockPanel import DockPanel
from pyjamas.ui import HasAlignment
from pyjamas.ui.VerticalPanel import VerticalPanel
from pyjamas.ui.RootPanel import RootPanel
from pyjamas.ui.HorizontalPanel import HorizontalPanel
from pyjamas.ui.HTML import HTML
from pyjamas.ui.Composite import Composite
#from pyjamas.ui import DecoratorPanel
from pyjamas.ui import MouseListener
from pyjamas.ui import Event
from pyjamas import Window
from pyjamas import DeferredCommand
from pyjamas.ui.DecoratorPanel import DecoratedTabPanel, DecoratorPanel
from pyjamas.ui.DecoratorPanel import DecoratorTitledPanel
from pyjamas.HTTPRequest import HTTPRequest
from PageLoader import PageListLoader, PageLoader
from pyjamas.ui.HTMLLinkPanel import HTMLLinkPanel
from pyjamas import History

#class PrettyTab(DecoratorPanel):
class PrettyTab(Composite):

    def __init__(self, text, imageUrl):

        DecoratorPanel.__init__(self, DecoratorPanel.DECORATE_ALL)
        p = HorizontalPanel()
        p.setSpacing(3)
        self.img = Image(imageUrl)
        self.txt = HTML(text)
        p.add(self.img)
        p.add(self.txt)

        self.add(p)

    def addClickListener(self, listener):

        self.img.addClickListener(listener)
        self.txt.addClickListener(listener)

class Tabs:

    def onModuleLoad(self):

        dock = DockPanel()
        self.header = HTML(Width="100%", Height="270px")
        self.footer = HTML(Width="100%")
        self.sidebar = HTML(Width="200px", Height="100%", StyleName="sidebar")
        self.fTabs = DecoratedTabPanel(Size=("100%", "100%"),
                                       StyleName="tabs")

        #dp = DecoratorTitledPanel("Tabs", "bluetitle", "bluetitleicon",
        #              ["bluetop", "bluetop2", "bluemiddle", "bluebottom"])
        #dp.add(self.fTabs)

        dock.add(self.header, DockPanel.NORTH)
        dock.add(self.footer, DockPanel.SOUTH)
        dock.add(self.sidebar, DockPanel.EAST)
        dock.add(self.fTabs, DockPanel.CENTER)
        dock.setCellVerticalAlignment(self.fTabs, HasAlignment.ALIGN_TOP)
        #dock.setCellHorizontalAlignment(self.fTabs, HasAlignment.ALIGN_CENTER)
        dock.setCellWidth(self.header, "100%")
        dock.setCellHeight(self.header, "270px")
        dock.setCellWidth(self.footer, "100%")
        dock.setCellWidth(self.sidebar, "200px")

        History.addHistoryListener(self)
        initToken = History.getToken()
        #print "initial token", initToken

        RootPanel().add(dock)
        self.dock = dock

        self.loadPageList()

        Window.addWindowResizeListener(self)

        DeferredCommand.add(self)

    def execute(self):
        self.onWindowResized(Window.getClientWidth(), Window.getClientHeight())

    def onWindowResized(self, width, height):

        tabwidth = "%dpx" % (width - 350)
        #width = "%dpx" % (width-20)
        #self.header.setWidth(width)
        #self.dock.setCellWidth(self.header, width)
        #self.footer.setWidth(width)
        #self.dock.setCellWidth(self.footer, width)
        self.fTabs.setWidth(tabwidth)
        self.dock.setCellWidth(self.fTabs, tabwidth)

    def createPage(self, title, purpose, text):

        if purpose == 'faq':
            self.faq_pages[title] = text
            if len(self.faq_pages) != len(self.faq_list):
                return
            faq = self.page_widgets['FAQ']
            for l in self.faq_list:
                question = l[0]
                answer = self.faq_pages[question]
                html = faq.getHTML()
                html += "<h3>%s</h3>\n" % question
                html += "\n%s\n\n" % answer
                faq.setHTML(html)
            html = "<div class='faq'>\n%s</div>\n" % html
            faq.setHTML(html)
            faq.replaceLinks(use_page_href=False)
            return

        if title == 'header':
            self.header.setHTML(text)
            return
        elif title == 'footer':
            self.footer.setHTML(text)
            return
        elif title == 'sidebar':
            self.sidebar.setHTML(text)
            return

        self.pages[title] = text
        if len(self.pages) != len(self.page_list):
            return
        self.page_widgets = {}
        self.tab_index = {}
        for (idx, l) in enumerate(self.page_list):
            title = l[0]
            text = self.pages[title]
            self.tab_index[title] = idx
            widget = HTMLLinkPanel(text)
            self.fTabs.add(widget, title, True)
            self.page_widgets[title] = widget
            if title == 'FAQ':
                HTTPRequest().asyncGet("faq/questions.txt",
                                       PageListLoader(self, "faq"))
            else:
                widget.replaceLinks(use_page_href=False)
        self.fTabs.selectTab(0)

    def onHistoryChanged(self, token):
        if self.pages.has_key(token):
            idx = self.tab_index[token]
            self.fTabs.selectTab(idx)
    def onError(self, text, code):
        print "LOAD ERROR(",code,"):",text

    def loadPageList(self):
        HTTPRequest().asyncGet("sidebar.html",
                                PageLoader(self, "sidebar", "contents"))
        HTTPRequest().asyncGet("header.html", 
                                PageLoader(self, "header", "contents"))
        HTTPRequest().asyncGet("footer.html", 
                                PageLoader(self, "footer", "contents"))
        HTTPRequest().asyncGet("contents.txt", 
                                PageListLoader(self, "contents"))

    def loadPages(self, pages, purpose):
        if purpose == 'contents':
            self.pages = {}
            self.page_list = pages
        elif purpose == 'faq':
            self.faq_pages = {}
            self.faq_list = pages

        for l in pages:
            title = l[0]
            desc = l[1]
            HTTPRequest().asyncGet(desc, PageLoader(self, title, purpose))


if __name__ == '__main__':
    pyjd.setup("./public/index.html")
    app = Tabs()
    app.onModuleLoad()
    pyjd.run()

