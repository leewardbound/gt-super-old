def init():
    mf = get_main_frame()
    mf._addWindowEventListener("click", browser_event_cb)
    mf._addWindowEventListener("change", browser_event_cb)
    mf._addWindowEventListener("mouseout", browser_event_cb)
    mf._addWindowEventListener("mousedown", browser_event_cb)
    mf._addWindowEventListener("mouseup", browser_event_cb)
    mf._addWindowEventListener("resize", browser_event_cb)
    mf._addWindowEventListener("keyup", browser_event_cb)
    mf._addWindowEventListener("keydown", browser_event_cb)
    mf._addWindowEventListener("keypress", browser_event_cb)

    cb = get_main_frame()._timer_callback_workaround
    global hack_timer_workaround_bug_button
    mf._hack_timer_workaround_bug_button = createButton()
    mf.addEventListener(mf._hack_timer_workaround_bug_button, "click", cb)
    mf._addWindowEventListener("DOMMouseScroll", browser_event_cb)

def getAbsoluteLeft(elem):
    left = elem.getBoundingClientRect().left
    return left + elem.ownerDocument.body.scrollLeft

def getAbsoluteTop(elem):
    top = elem.getBoundingClientRect().top
    return top + elem.ownerDocument.body.scrollTop

def eventGetButton(evt):
    if evt.button == 0:
        return Event.BUTTON_LEFT
    if evt.button == 1:
        return Event.BUTTON_MIDDLE
    if evt.button == 2:
        return Event.BUTTON_RIGHT
    return evt.button

def sinkEventsMozilla(element, bits):
    return
    mf = get_main_frame()
    if (bits & 0x40000):
        print "add scroll", element
        mf.addEventListener(element, "DOMMouseScroll", _dispatchEvent)

def eventGetMouseWheelVelocityY(evt):
    return evt.detail or 0.0

