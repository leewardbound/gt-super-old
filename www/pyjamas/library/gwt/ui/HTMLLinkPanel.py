from pyjamas.ui.HTMLPanel import HTMLPanel
from pyjamas.ui.Hyperlink import Hyperlink

from pyjamas import Window
from pyjamas import DOM

class HTMLLinkPanel(HTMLPanel):
    def __init__(self, html="", **kwargs):
        self.hyperlinks = []
        HTMLPanel.__init__(self, html, **kwargs)

    def setHTML(self, html):
        self._clear_hyperlinks()
        HTMLPanel.setHTML(self, html)

    def _clear_hyperlinks(self):
        while self.hyperlinks:
            hl = self.hyperlinks.pop()
            el = hl.getElement()
            parent = DOM.getParent(el)
            if parent is not None:
                parent.removeChild(el)
            hl.setParent(None)

    def replaceLinks(self, tagname="a", use_page_href=True):
        """ replaces <tag href="#pagename">sometext</tag> with:
            Hyperlink("sometext", "pagename").  Hyperlinks use
            the History module so the notification will come
            in on an onHistoryChanged.
        """
        self._clear_hyperlinks()
        tags = self.findTags(tagname)
        pageloc = Window.getLocation()
        pagehref = pageloc.getPageHref()
        for el in tags:
            href = el.href
            l = href.split("#")
            if len(l) != 2:
                continue
            if use_page_href and not l[0].startswith(pagehref):
                continue
            token = l[1]
            if not token:
                continue
            html = DOM.getInnerHTML(el)
            parent = DOM.getParent(el)
            index = DOM.getChildIndex(parent, el)
            hl = Hyperlink(TargetHistoryToken=token,
                           HTML=html,
                           Element=DOM.createSpan())
            DOM.insertChild(parent, hl.getElement(), index)
            parent.removeChild(el)

            self.children.insert(index, hl)
            hl.setParent(self)
            self.hyperlinks.append(hl)

