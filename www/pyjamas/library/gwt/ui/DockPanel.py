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
from pyjamas import Factory
from pyjamas import DOM

from pyjamas.ui.CellPanel import CellPanel
from pyjamas.ui import HasHorizontalAlignment
from pyjamas.ui import HasVerticalAlignment

class DockPanelTmpRow:
    center = 0
    tr = None

class LayoutData:
    def __init__(self, direction):
        self.direction = direction
        self.hAlign = "left"
        self.height = ""
        self.td = None
        self.vAlign = "top"
        self.width = ""


class DockPanel(CellPanel):

    CENTER = "center"
    EAST = "east"
    NORTH = "north"
    SOUTH = "south"
    WEST = "west"

    elem_props = [
           ("height", "Cell Height", "CellHeight", str, None),
           ("width", "Cell Width", "CellWidth", str, None),
           ("halign", "Cell Horizontal Alignment",
                      "CellHorizontalAlignment", None, "left"),
           ("valign", "Cell Vertical Alignment",
                      "CellVerticalAlignment", None, "top"),
                 ]

    def _getElementProps(self):
        return CellPanel._getElementProps() + self.elem_props

    def __init__(self, **kwargs):

        self.center = None
        self.dock_children = [] # cannot use self.children

        CellPanel.__init__(self, **kwargs)

    def add(self, widget, direction):
        if direction == self.CENTER:
            if self.center is not None:
                raise Exception("Only one CENTER widget may be added")
            self.center = widget

        layout = LayoutData(direction)
        widget.setLayoutData(layout)
        self.setCellHorizontalAlignment(widget, self.horzAlign)
        self.setCellVerticalAlignment(widget, self.vertAlign)

        self.dock_children.append(widget)
        self.realizeTable(widget)

    # next three functions are part of the standard Builder API for panels
    def addIndexedItem(self, index, item):
        self.add(item, index[1])

    def getWidgetIndex(self, widget):
        index = self.dock_children.index(widget)
        direction = self.getWidgetDirection(widget)
        return (index, direction)

    def getIndexedChild(self, index):
        index, direction = index
        return self.dock_children[index]

    def getWidgetDirection(self, widget):
        if widget.getParent() != self:
            return None
        return widget.getLayoutData().direction

    def __len__(self):
        return len(self.dock_children)

    def __iter__(self):
        return self.dock_children.__iter__()

    def remove(self, widget):
        if widget == self.center:
            self.center = None

        ret = CellPanel.remove(self, widget)
        if ret:
            self.dock_children.remove(widget)
            self.realizeTable(None)
        return ret

    def setCellHeight(self, widget, height):
        data = widget.getLayoutData()
        data.height = height
        if data.td is not None:
            DOM.setStyleAttribute(data.td, "height", data.height)

    def setCellHorizontalAlignment(self, widget, align):
        data = widget.getLayoutData()
        data.hAlign = align
        if data.td is not None:
            DOM.setAttribute(data.td, "align", data.hAlign)

    def setCellVerticalAlignment(self, widget, align):
        data = widget.getLayoutData()
        data.vAlign = align
        if data.td is not None:
            DOM.setStyleAttribute(data.td, "verticalAlign", data.vAlign)

    def setCellWidth(self, widget, width):
        data = widget.getLayoutData()
        data.width = width
        if data.td is not None:
            DOM.setStyleAttribute(data.td, "width", data.width)

    def realizeTable(self, beingAdded):
        bodyElement = self.getBody()

        while DOM.getChildCount(bodyElement) > 0:
            DOM.removeChild(bodyElement, DOM.getChild(bodyElement, 0))

        rowCount = 1
        colCount = 1
        for child in self.dock_children:
            dir = child.getLayoutData().direction
            if dir == self.NORTH or dir == self.SOUTH:
                rowCount += 1
            elif dir == self.EAST or dir == self.WEST:
                colCount += 1

        rows = []
        for i in range(rowCount):
            rows.append(DockPanelTmpRow())
            rows[i].tr = DOM.createTR()
            DOM.appendChild(bodyElement, rows[i].tr)

        westCol = 0
        eastCol = colCount - 1
        northRow = 0
        southRow = rowCount - 1
        centerTd = None

        for child in self.dock_children:
            layout = child.getLayoutData()

            td = DOM.createTD()
            layout.td = td
            DOM.setAttribute(layout.td, "align", layout.hAlign)
            DOM.setStyleAttribute(layout.td, "verticalAlign", layout.vAlign)
            DOM.setAttribute(layout.td, "width", layout.width)
            DOM.setAttribute(layout.td, "height", layout.height)

            if layout.direction == self.NORTH:
                DOM.insertChild(rows[northRow].tr, td, rows[northRow].center)
                self.appendAndMaybeAdopt(td, child.getElement(), beingAdded)
                DOM.setIntAttribute(td, "colSpan", eastCol - westCol + 1)
                northRow += 1
            elif layout.direction == self.SOUTH:
                DOM.insertChild(rows[southRow].tr, td, rows[southRow].center)
                self.appendAndMaybeAdopt(td, child.getElement(), beingAdded)
                DOM.setIntAttribute(td, "colSpan", eastCol - westCol + 1)
                southRow -= 1
            elif layout.direction == self.WEST:
                row = rows[northRow]
                DOM.insertChild(row.tr, td, row.center)
                row.center += 1
                self.appendAndMaybeAdopt(td, child.getElement(), beingAdded)
                DOM.setIntAttribute(td, "rowSpan", southRow - northRow + 1)
                westCol += 1
            elif layout.direction == self.EAST:
                row = rows[northRow]
                DOM.insertChild(row.tr, td, row.center)
                self.appendAndMaybeAdopt(td, child.getElement(), beingAdded)
                DOM.setIntAttribute(td, "rowSpan", southRow - northRow + 1)
                eastCol -= 1
            elif layout.direction == self.CENTER:
                centerTd = td

        if self.center is not None:
            row = rows[northRow]
            DOM.insertChild(row.tr, centerTd, row.center)
            self.appendAndMaybeAdopt(centerTd, self.center.getElement(), beingAdded)

    def appendAndMaybeAdopt(self, parent, child, beingAdded):
        if beingAdded is not None:
            if DOM.compare(child, beingAdded.getElement()):
                CellPanel.add(self, beingAdded, parent)
                return
        DOM.appendChild(parent, child)

Factory.registerClass('pyjamas.ui.DockPanel', 'DockPanel', DockPanel)

