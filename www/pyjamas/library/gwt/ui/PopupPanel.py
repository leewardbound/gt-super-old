# Copyright 2006 James Tauber and contributors
# Copyright (C) 2009, 2010 Luke Kenneth Casson Leighton <lkcl@lkcl.net>
# Copyright (C) 2010 Serge Tarkovski <serge.tarkovski@gmail.com>
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
from pyjamas import Window
from pyjamas import Factory
from __pyjamas__ import JS, doc
from pyjamas.ui.SimplePanel import SimplePanel
from pyjamas.ui.RootPanel import RootPanel
from pyjamas.ui import MouseListener
from pyjamas.ui import KeyboardListener


class PopupPanel(SimplePanel):

    _props = [("modal", "Modal", "Modal", None),
            ]

    def __init__(self, autoHide=False, modal=True, **kwargs):

        self.popupListeners = []
        self.showing = False
        self.autoHide = autoHide
        self.glass = None
        kwargs['Modal'] = kwargs.get('Modal', modal)

        if kwargs.has_key('Element'):
            element = kwargs.pop('Element')
        else:
            element = self.createElement()
        DOM.setStyleAttribute(element, "position", "absolute")

        SimplePanel.__init__(self, element, **kwargs)

    @classmethod
    def _getProps(self):
        return SimplePanel._getProps() + self._props

    def addPopupListener(self, listener):
        self.popupListeners.append(listener)

    def getPopupLeft(self):
        return DOM.getIntAttribute(self.getElement(), "offsetLeft")

    def getPopupTop(self):
        return DOM.getIntAttribute(self.getElement(), "offsetTop")

    # PopupImpl.createElement
    def createElement(self):
        return DOM.createDiv()

    def hide(self, autoClosed=False):
        if not self.showing:
            return
        self.showing = False

        if self.glass:
            self.hideGlass()

        DOM.removeEventPreview(self)

        self.rootpanel.remove(self)
        self.onHideImpl(self.getElement())
        for listener in self.popupListeners:
            if hasattr(listener, 'onPopupClosed'):
                listener.onPopupClosed(self, autoClosed)
            else:
                listener(self, autoClosed)

    def setModal(self, modal):
        self.modal = modal

    def getModal(self):
        return self.isModal()

    def isModal(self):
        """ deprecated - please use getModal
        """
        return self.modal

    def _event_targets_popup(self, event):
        target = DOM.eventGetTarget(event)
        return target and DOM.isOrHasChild(self.getElement(), target)

    def onEventPreview(self, event):
        etype = DOM.eventGetType(event)
        if etype == "keydown":
            return (    self.onKeyDownPreview(
                            DOM.eventGetKeyCode(event),
                            KeyboardListener.getKeyboardModifiers(event)
                            )
                    and (not self.modal or self._event_targets_popup(event))
                   )
        elif etype == "keyup":
            return (    self.onKeyUpPreview(
                            DOM.eventGetKeyCode(event),
                            KeyboardListener.getKeyboardModifiers(event)
                            )
                    and (not self.modal or self._event_targets_popup(event))
                   )
        elif etype == "keypress":
            return (    self.onKeyPressPreview(
                            DOM.eventGetKeyCode(event),
                            KeyboardListener.getKeyboardModifiers(event)
                            )
                    and (not self.modal or self._event_targets_popup(event))
                   )
        elif (   etype == "mousedown"
              or etype == "blur"
             ):
            if DOM.getCaptureElement() is not None:
                return True
            if self.autoHide and not self._event_targets_popup(event):
                self.hide(True)
                return True
        elif (   etype == "mouseup"
              or etype == "click"
              or etype == "mousemove"
              or type == "dblclick"
             ):
            if DOM.getCaptureElement() is not None:
                return True
        return not self.modal or self._event_targets_popup(event)

    def onKeyDownPreview(self, key, modifiers):
        return True

    def onKeyPressPreview(self, key, modifiers):
        return True

    def onKeyUpPreview(self, key, modifiers):
        return True

    # PopupImpl.onHide
    def onHideImpl(self, popup):
        pass

    # PopupImpl.onShow
    def onShowImpl(self, popup):
        pass

    def removePopupListener(self, listener):
        self.popupListeners.remove(listener)

    def setPopupPosition(self, left, top):
        if isinstance(left, basestring):
            if left.endswith('%'):
                left = int(left[:-1])
                left = int(left * Window.getClientWidth() / 100)
            elif left.lower().endswith('px'):
                left = int(left[:-2])
        if isinstance(top, basestring):
            if top.lower().endswith('%'):
                top = int(top[:-1])
                top = int(top * Window.getClientHeight() / 100)
            elif top.endswith('px'):
                top = int(top[:-2])

        left = max(left, 0)
        top = max(top, 0)

        # Account for the difference between absolute position and the
        # body's positioning context.
        left -= DOM.getBodyOffsetLeft()
        top -= DOM.getBodyOffsetTop()

        element = self.getElement()
        DOM.setStyleAttribute(element, "left", "%dpx" % left)
        DOM.setStyleAttribute(element, "top", "%dpx" % top)

    def isGlassEnabled(self):
        return self.glass is not None

    def setGlassEnabled(self, enabled):
        if enabled:
            if self.glass is None:
                self.glass = DOM.createDiv()
                self.setGlassStyleName()
        elif self.glass is not None:
            self.hideGlass()

    def getGlassElement(self):
        return self.glass

    def setGlassStyleName(self, style="gwt-PopupPanelGlass"):
        if self.glass:
            DOM.setAttribute(self.glass, "className", style)

    def getGlassStyleName(self):
        if self.glass:
            return DOM.setAttribute(self.glass, "className")

    def setGlassPosition(self):
        top = Window.getScrollTop()
        left = Window.getScrollLeft()
        height = Window.getClientHeight()
        width = Window.getClientWidth()

        DOM.setStyleAttribute(self.glass, "position", "absolute")
        DOM.setStyleAttribute(self.glass, "left", "%s" % \
                              left if left == 0 else "%spx" % left)
        DOM.setStyleAttribute(self.glass, "top", "%s" % \
                              top if top == 0 else "%spx" % top)
        DOM.setStyleAttribute(self.glass, "height", "%spx" % (top + height))
        DOM.setStyleAttribute(self.glass, "width", "%spx" % (left + width))

    def showGlass(self):
        Window.enableScrolling(False)
        self.setGlassPosition()
        doc().body.appendChild(self.glass)
        Window.addWindowResizeListener(self)

    def hideGlass(self):
        Window.removeWindowResizeListener(self)
        doc().body.removeChild(self.glass)
        Window.enableScrolling(True)

    def onWindowResized(self, width, height):
        self.setGlassPosition()

    def centerBox(self):
        self_width = self.getOffsetWidth()
        self_height = self.getOffsetHeight()

        height = Window.getClientHeight()
        width = Window.getClientWidth()

        center_x = int(width) / 2
        center_y = int(height) / 2

        self_top  = center_y - (int(self_height) / 2)
        self_left = center_x - (int(self_width)  / 2)

        self.setPopupPosition(self_left, self_top)

    def center(self):
        self.centerBox()
        self.show()

    def add(self, widget):
        self.setWidget(widget)

    def show(self):
        if self.showing:
            return

        self.showing = True

        if self.glass:
            self.showGlass()

        DOM.addEventPreview(self)

        self.rootpanel.add(self)
        self.onShowImpl(self.getElement())

Factory.registerClass('gwt.ui.PopupPanel', 'PopupPanel', PopupPanel)
