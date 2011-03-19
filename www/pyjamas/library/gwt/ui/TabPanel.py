# Copyright 2006 James Tauber and contributors
# Copyright (C) 2009 Luke Kenneth Casson Leighton <lkcl@lkcl.net>
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
from pyjamas import DOM
from pyjamas import Factory
from __pyjamas__ import console

from pyjamas.ui.Composite import Composite
from pyjamas.ui.DeckPanel import DeckPanel
from pyjamas.ui.VerticalPanel import VerticalPanel
from pyjamas.ui.Panel import PanelBase
from pyjamas.ui.TabBar import TabBar

class TabPanel(PanelBase, Composite):
    def __init__(self, tabBar=None, **kwargs):
        self.children = [] # TODO: can self.children be used instead?
        self.tab_names = {} 
        self.deck = kwargs.pop('Deck', None)
        if self.deck is None:
            self.deck = DeckPanel(StyleName="gwt-TabPanelBottom")
        if tabBar is None:
            self.tabBar = TabBar()
        else:
            self.tabBar = tabBar
        self.tabListeners = []

        # this is awkward: VerticalPanel is the composite,
        # so we get the element here, and pass it in to VerticalPanel.
        element = kwargs.pop('Element', None)

        panel = VerticalPanel(Element=element)
        panel.add(self.tabBar)
        if self.deck.getParent() is None:
            panel.add(self.deck)
            panel.setCellHeight(self.deck, "100%")
        self.tabBar.setWidth("100%")
        self.tabBar.addTabListener(self)

        kwargs['StyleName'] = kwargs.get('StyleName', "gwt-TabPanel")

        PanelBase.__init__(self)
        Composite.__init__(self, panel, **kwargs)

    def add(self, widget, tabText=None, asHTML=False, name=None):
        """ tabText=None now means insert a spacer, pushed out at 100%
            width so that any subsequent tabs added will be pushed to
            the right hand side.

            name refers to an optional name (string) where the tab can
            be removed by name, if desired, using TabBar.remove.
        """
        self.insert(widget, tabText, asHTML, self.getWidgetCount(), name)

    def addTabListener(self, listener):
        self.tabListeners.append(listener)

    def getDeckPanel(self):
        return self.deck

    def getTabBar(self):
        return self.tabBar

    def insert(self, widget, tabText, asHTML=False, beforeIndex=None,
                                      name=None):
        if beforeIndex is None:
            beforeIndex = asHTML
            asHTML = False

        self.children.insert(beforeIndex, widget)
        if name is not None:
            self.tab_names[name] = widget
        self.tabBar.insertTab(tabText, asHTML, beforeIndex)
        self.deck.insert(widget, beforeIndex)

    def onBeforeTabSelected(self, sender, tabIndex):
        for listener in self.tabListeners:
            if not listener.onBeforeTabSelected(sender, tabIndex):
                return False
        return True

    def onTabSelected(self, sender, tabIndex):
        self.deck.showWidget(tabIndex)
        for listener in self.tabListeners:
            listener.onTabSelected(sender, tabIndex)

    def remove(self, widget):
        """ widget to remove can be by integer, a widget in the panel,
            or by name (string).  if by name, the name has to be one
            which was given to add or insert
        """
        if isinstance(widget, basestring):
            widget = self.tab_names[widget]
        elif isinstance(widget, int):
            widget = self.getWidget(widget)

        for (k, w) in self.tab_names.items():
            if widget == w:
                self.tab_names.pop(k)
                break

        index = self.getWidgetIndex(widget)
        if index == -1:
            return False

        self.children.remove(widget)
        self.tabBar.removeTab(index)
        self.deck.remove(widget)
        return True

    def removeTabListener(self, listener):
        self.tabListeners.remove(listener)

    def selectTab(self, index):
        """ manual tab selection. tab can be selected:
             * by index,
             * by tab name (matching TabPanel.insert name arg if given)
             * or by widget.
        """
        if isinstance(index, basestring):
            index = self.tab_names[index]
        if not isinstance(index, int):
            index = self.getWidgetIndex(index)

        self.tabBar.selectTab(index)

Factory.registerClass('pyjamas.ui.TabPanel', 'TabPanel', TabPanel)

