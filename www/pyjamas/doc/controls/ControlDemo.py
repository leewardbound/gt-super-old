""" ControlDemo Example
"""
from pyjamas.ui import RootPanel, Label
from pyjamas.Controls import VerticalDemoSlider

class ControlDemo:
    def onModuleLoad(self):
        b = VerticalDemoSlider(0, 100)
        RootPanel().add(b)

        b.setWidth("20px")
        b.setHeight("100px")

        b.addControlValueListener(self)
        self.label = Label("Not set yet")
        RootPanel().add(self.label)

    def onControlValueChanged(self, slider, old_value, new_value):
        self.label.setText("Value: %d" % int(new_value))

