/* start module: gwt.DOM */
$pyjs.loaded_modules['gwt.DOM'] = function (__mod_name__) {
	if($pyjs.loaded_modules['gwt.DOM'].__was_initialized__) return $pyjs.loaded_modules['gwt.DOM'];
	if(typeof $pyjs.loaded_modules['gwt'] == 'undefined' || !$pyjs.loaded_modules['gwt'].__was_initialized__) $p['___import___']('gwt', null);
	var $m = $pyjs.loaded_modules["gwt.DOM"];
	$m.__repr__ = function() { return "<module: gwt.DOM>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'gwt.DOM';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['gwt']['DOM'] = $pyjs.loaded_modules['gwt.DOM'];
	var $attr2,$attr1,$attr250,$attr249;

	$m['pyjd'] = $p['___import___']('pyjd', 'gwt');
	if ($p['bool']((($attr1=($attr2=$m['pyjd'])['is_desktop']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
				$p['getattr']($attr2, 'is_desktop'):
				$m['pyjd']['is_desktop']))) {
		$m['onResize'] = $p['___import___']('pyjamas.Window.onResize', 'gwt', null, false);
		$m['onClosing'] = $p['___import___']('pyjamas.Window.onClosing', 'gwt', null, false);
		$m['onClosed'] = $p['___import___']('pyjamas.Window.onClosed', 'gwt', null, false);
		$m['currentEvent'] = null;
	}
	$m['sCaptureElem'] = null;
	$m['sEventPreviewStack'] = $p['list']([]);
	$m['listeners'] = $p['dict']([]);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'gwt', null, false);
	$m['ONBLUR'] = $p['___import___']('pyjamas.ui.Event.ONBLUR', 'gwt', null, false);
	$m['ONCHANGE'] = $p['___import___']('pyjamas.ui.Event.ONCHANGE', 'gwt', null, false);
	$m['ONCLICK'] = $p['___import___']('pyjamas.ui.Event.ONCLICK', 'gwt', null, false);
	$m['ONCONTEXTMENU'] = $p['___import___']('pyjamas.ui.Event.ONCONTEXTMENU', 'gwt', null, false);
	$m['ONDBLCLICK'] = $p['___import___']('pyjamas.ui.Event.ONDBLCLICK', 'gwt', null, false);
	$m['ONERROR'] = $p['___import___']('pyjamas.ui.Event.ONERROR', 'gwt', null, false);
	$m['ONFOCUS'] = $p['___import___']('pyjamas.ui.Event.ONFOCUS', 'gwt', null, false);
	$m['ONKEYDOWN'] = $p['___import___']('pyjamas.ui.Event.ONKEYDOWN', 'gwt', null, false);
	$m['ONKEYPRESS'] = $p['___import___']('pyjamas.ui.Event.ONKEYPRESS', 'gwt', null, false);
	$m['ONKEYUP'] = $p['___import___']('pyjamas.ui.Event.ONKEYUP', 'gwt', null, false);
	$m['ONLOAD'] = $p['___import___']('pyjamas.ui.Event.ONLOAD', 'gwt', null, false);
	$m['ONLOSECAPTURE'] = $p['___import___']('pyjamas.ui.Event.ONLOSECAPTURE', 'gwt', null, false);
	$m['ONMOUSEDOWN'] = $p['___import___']('pyjamas.ui.Event.ONMOUSEDOWN', 'gwt', null, false);
	$m['ONMOUSEMOVE'] = $p['___import___']('pyjamas.ui.Event.ONMOUSEMOVE', 'gwt', null, false);
	$m['ONMOUSEOUT'] = $p['___import___']('pyjamas.ui.Event.ONMOUSEOUT', 'gwt', null, false);
	$m['ONMOUSEOVER'] = $p['___import___']('pyjamas.ui.Event.ONMOUSEOVER', 'gwt', null, false);
	$m['ONMOUSEUP'] = $p['___import___']('pyjamas.ui.Event.ONMOUSEUP', 'gwt', null, false);
	$m['ONSCROLL'] = $p['___import___']('pyjamas.ui.Event.ONSCROLL', 'gwt', null, false);
	$m['ONINPUT'] = $p['___import___']('pyjamas.ui.Event.ONINPUT', 'gwt', null, false);
	$m['get_listener'] = function(item) {
		var $attr3,$attr4,ret;
		if ($p['bool']((item === null))) {
			return null;
		}
		if ($p['bool']($p['hasattr'](item, '__instance__'))) {
			ret = $m['listeners']['get']((($attr3=($attr4=item)['__instance__']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
						$p['getattr']($attr4, '__instance__'):
						item['__instance__']));
		}
		else {
			ret = $m['listeners']['get']($p['hash'](item));
		}
		return ret;
	};
	$m['get_listener'].__name__ = 'get_listener';

	$m['get_listener'].__bind_type__ = 0;
	$m['get_listener'].__args__ = [null,null,['item']];
	$m['set_listener'] = function(item, listener) {
		var $attr5,$attr6;
		if ($p['bool']($p['hasattr'](item, '__instance__'))) {
			$m['listeners'].__setitem__((($attr5=($attr6=item)['__instance__']) == null || (($attr6.__is_instance__) && typeof $attr5 == 'function') || (typeof $attr5['__get__'] == 'function')?
						$p['getattr']($attr6, '__instance__'):
						item['__instance__']), listener);
		}
		else if ($p['bool']((listener === null))) {
			$m['listeners']['pop']($p['hash'](item));
		}
		else {
			$m['listeners'].__setitem__($p['hash'](item), listener);
		}
		return null;
	};
	$m['set_listener'].__name__ = 'set_listener';

	$m['set_listener'].__bind_type__ = 0;
	$m['set_listener'].__args__ = [null,null,['item'],['listener']];
	$m['hack_timer_workaround_bug_button'] = null;
	$m['init'] = function() {
		var mf;
		mf = (typeof get_main_frame == "undefined"?$m.get_main_frame:get_main_frame)();
		mf['_addWindowEventListener']('click', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
		mf['_addWindowEventListener']('change', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
		mf['_addWindowEventListener']('mouseout', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
		mf['_addWindowEventListener']('mousedown', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
		mf['_addWindowEventListener']('mouseup', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
		mf['_addWindowEventListener']('resize', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
		mf['_addWindowEventListener']('keyup', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
		mf['_addWindowEventListener']('keydown', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
		mf['_addWindowEventListener']('keypress', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
		mf['_addWindowEventListener']('mousewheel', (typeof browser_event_cb == "undefined"?$m.browser_event_cb:browser_event_cb));
		return null;
	};
	$m['init'].__name__ = 'init';

	$m['init'].__bind_type__ = 0;
	$m['init'].__args__ = [null,null];
	$m['_init_testing'] = function() {
		var body;
		body = $doc['getElementsByTagName']('body').__getitem__(0);
		$m.mf['_addEventListener'](body, 'click', (typeof cb == "undefined"?$m.cb:cb));
		$m.mf['_addEventListener'](body, 'change', (typeof cb == "undefined"?$m.cb:cb));
		$m.mf['_addEventListener'](body, 'mouseout', (typeof cb == "undefined"?$m.cb:cb));
		$m.mf['_addEventListener'](body, 'mousedown', (typeof cb == "undefined"?$m.cb:cb));
		$m.mf['_addEventListener'](body, 'mouseup', (typeof cb == "undefined"?$m.cb:cb));
		$m.mf['_addEventListener'](body, 'mousemove', (typeof cb == "undefined"?$m.cb:cb));
		$m.mf['_addEventListener'](body, 'resize', (typeof cb == "undefined"?$m.cb:cb));
		$m.mf['_addEventListener'](body, 'keyup', (typeof cb == "undefined"?$m.cb:cb));
		$m.mf['_addEventListener'](body, 'keydown', (typeof cb == "undefined"?$m.cb:cb));
		$m.mf['_addEventListener'](body, 'keypress', (typeof cb == "undefined"?$m.cb:cb));
		return null;
	};
	$m['_init_testing'].__name__ = '_init_testing';

	$m['_init_testing'].__bind_type__ = 0;
	$m['_init_testing'].__args__ = [null,null];
	$m['_dispatchWindowEvent'] = function(sender, evt, useCap) {

 		return null;
	};
	$m['_dispatchWindowEvent'].__name__ = '_dispatchWindowEvent';

	$m['_dispatchWindowEvent'].__bind_type__ = 0;
	$m['_dispatchWindowEvent'].__args__ = [null,null,['sender'],['evt'],['useCap']];
	$m['_dispatchEvent'] = function(sender, evt, useCap) {
		var $attr8,$and3,$and1,$and2,cap,curElem,$and4,$attr7,$and5,listener,$pyjs_try_err,$and6;
		if ($p['bool']((evt === null))) {
			evt = (($attr7=($attr8=$wnd)['event']) == null || (($attr8.__is_instance__) && typeof $attr7 == 'function') || (typeof $attr7['__get__'] == 'function')?
						$p['getattr']($attr8, 'event'):
						$wnd['event']);
		}
		else {
			try {
				sender = $m.get_main_frame()['gobject_wrap'](sender);
				evt = $m.get_main_frame()['gobject_wrap'](evt);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
				}
			}
		}
		listener = null;
		curElem = sender;
		cap = (typeof getCaptureElement == "undefined"?$m.getCaptureElement:getCaptureElement)();
		listener = $m['get_listener'](cap);
		if ($p['bool'](($p['bool']($and1=cap)?(listener !== null):$and1))) {
			(typeof dispatchEvent == "undefined"?$m.dispatchEvent:dispatchEvent)(evt, cap, listener);
			evt['stopPropagation']();
			return null;
		}
		while ($p['bool'](($p['bool']($and3=curElem)?($m['get_listener'](curElem) === null):$and3))) {
			curElem = (typeof getParent == "undefined"?$m.getParent:getParent)(curElem);
		}
		if ($p['bool'](($p['bool']($and5=curElem)?!$p['op_eq']((typeof getNodeType == "undefined"?$m.getNodeType:getNodeType)(curElem), 1):$and5))) {
			curElem = null;
		}
		listener = $m['get_listener'](curElem);
		if ($p['bool']((listener !== null))) {
			(typeof dispatchEvent == "undefined"?$m.dispatchEvent:dispatchEvent)(evt, curElem, listener);
		}
		return null;
	};
	$m['_dispatchEvent'].__name__ = '_dispatchEvent';

	$m['_dispatchEvent'].__bind_type__ = 0;
	$m['_dispatchEvent'].__args__ = [null,null,['sender'],['evt'],['useCap']];
	$m['_dispatchCapturedMouseEvent'] = function(evt) {
		var listener,$and8,cap,$and7;
		if ($p['bool'](!$p['bool']((typeof _dispatchCapturedEvent == "undefined"?$m._dispatchCapturedEvent:_dispatchCapturedEvent)(evt)))) {
			return null;
		}
		cap = (typeof getCaptureElement == "undefined"?$m.getCaptureElement:getCaptureElement)();
		listener = $m['get_listener'](cap);
		if ($p['bool'](($p['bool']($and7=cap)?(listener !== null):$and7))) {
			(typeof dispatchEvent == "undefined"?$m.dispatchEvent:dispatchEvent)(evt, cap, listener);
			evt['stopPropagation']();
		}
		return null;
	};
	$m['_dispatchCapturedMouseEvent'].__name__ = '_dispatchCapturedMouseEvent';

	$m['_dispatchCapturedMouseEvent'].__bind_type__ = 0;
	$m['_dispatchCapturedMouseEvent'].__args__ = [null,null,['evt']];
	$m['_dispatchCapturedMouseoutEvent'] = function(evt) {
		var listener,lcEvent,cap;
		cap = (typeof getCaptureElement == "undefined"?$m.getCaptureElement:getCaptureElement)();
		if ($p['bool']((cap === null))) {
			return null;
		}
		if ($p['bool']((typeof eventGetToElement == "undefined"?$m.eventGetToElement:eventGetToElement)(evt))) {
			return null;
		}
		(typeof setCapture == "undefined"?$m.setCapture:setCapture)(null);
		listener = $m['get_listener'](cap);
		if ($p['bool']((listener === null))) {
			return null;
		}
		lcEvent = $doc['createEvent']('UIEvent');
		lcEvent['initUIEvent']('losecapture', false, false, $wnd, 0);
		(typeof dispatchEvent == "undefined"?$m.dispatchEvent:dispatchEvent)(lcEvent, cap, listener);
		return null;
	};
	$m['_dispatchCapturedMouseoutEvent'].__name__ = '_dispatchCapturedMouseoutEvent';

	$m['_dispatchCapturedMouseoutEvent'].__bind_type__ = 0;
	$m['_dispatchCapturedMouseoutEvent'].__args__ = [null,null,['evt']];
	$m['browser_event_cb'] = function(view, event, from_window) {
		var $attr9,$or4,$or1,$or3,$or2,$pyjs_try_err,et,$attr10;
		if ($p['bool']((event === null))) {
			event = (($attr9=($attr10=$wnd)['event']) == null || (($attr10.__is_instance__) && typeof $attr9 == 'function') || (typeof $attr9['__get__'] == 'function')?
						$p['getattr']($attr10, 'event'):
						$wnd['event']);
		}
		else {
			try {
				event = $m.get_main_frame()['gobject_wrap'](event);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
				}
			}
		}
		et = (typeof eventGetType == "undefined"?$m.eventGetType:eventGetType)(event);
		if ($p['bool']($p['op_eq'](et, 'resize'))) {
			$m['onResize']();
			return null;
		}
		if ($p['bool']($p['op_eq'](et, 'mouseout'))) {
			$m['_dispatchCapturedMouseoutEvent'](event);
		}
		if ($p['bool'](($p['bool']($or1=$p['op_eq'](et, 'keyup'))?$or1:($p['bool']($or2=$p['op_eq'](et, 'keydown'))?$or2:($p['bool']($or3=$p['op_eq'](et, 'keypress'))?$or3:$p['op_eq'](et, 'change')))))) {
			return (typeof _dispatchCapturedEvent == "undefined"?$m._dispatchCapturedEvent:_dispatchCapturedEvent)(event);
		}
		else {
			return $m['_dispatchCapturedMouseEvent'](event);
		}
		return null;
	};
	$m['browser_event_cb'].__name__ = 'browser_event_cb';

	$m['browser_event_cb'].__bind_type__ = 0;
	$m['browser_event_cb'].__args__ = [null,null,['view'],['event'],['from_window']];
	$m['_dispatchCapturedEvent'] = function(event) {

		if ($p['bool'](!$p['bool']((typeof previewEvent == "undefined"?$m.previewEvent:previewEvent)(event)))) {
			event['stopPropagation']();
			(typeof eventPreventDefault == "undefined"?$m.eventPreventDefault:eventPreventDefault)(event);
			return false;
		}
		return true;
	};
	$m['_dispatchCapturedEvent'].__name__ = '_dispatchCapturedEvent';

	$m['_dispatchCapturedEvent'].__bind_type__ = 0;
	$m['_dispatchCapturedEvent'].__args__ = [null,null,['event']];
	$m['addEventPreview'] = function(preview) {

		$m['sEventPreviewStack']['append'](preview);
		return null;
	};
	$m['addEventPreview'].__name__ = 'addEventPreview';

	$m['addEventPreview'].__bind_type__ = 0;
	$m['addEventPreview'].__args__ = [null,null,['preview']];
	$m['appendChild'] = function(parent, child) {

		parent['appendChild'](child);
		return null;
	};
	$m['appendChild'].__name__ = 'appendChild';

	$m['appendChild'].__bind_type__ = 0;
	$m['appendChild'].__args__ = [null,null,['parent'],['child']];
	$m['removeChild'] = function(parent, child) {

		parent['removeChild'](child);
		return null;
	};
	$m['removeChild'].__name__ = 'removeChild';

	$m['removeChild'].__bind_type__ = 0;
	$m['removeChild'].__args__ = [null,null,['parent'],['child']];
	$m['replaceChild'] = function(parent, newChild, oldChild) {

		parent['replaceChild'](newChild, oldChild);
		return null;
	};
	$m['replaceChild'].__name__ = 'replaceChild';

	$m['replaceChild'].__bind_type__ = 0;
	$m['replaceChild'].__args__ = [null,null,['parent'],['newChild'],['oldChild']];
	$m['buttonClick'] = function(element) {
		var evt;
		evt = $doc['createEvent']('MouseEvents');
		evt['initMouseEvent']('click', true, true, $wnd, 1, 0, 0, 0, 0, false, false, false, false, 0, element);
		element['dispatchEvent'](evt);
		return null;
	};
	$m['buttonClick'].__name__ = 'buttonClick';

	$m['buttonClick'].__bind_type__ = 0;
	$m['buttonClick'].__args__ = [null,null,['element']];
	$m['compare'] = function(elem1, elem2) {

		if ($p['bool']($p['hasattr'](elem1, 'isSameNode'))) {
			return elem1['isSameNode'](elem2);
		}
		return $p['op_eq'](elem1, elem2);
	};
	$m['compare'].__name__ = 'compare';

	$m['compare'].__bind_type__ = 0;
	$m['compare'].__args__ = [null,null,['elem1'],['elem2']];
	$m['createAnchor'] = function() {

		return (typeof createElement == "undefined"?$m.createElement:createElement)('A');
	};
	$m['createAnchor'].__name__ = 'createAnchor';

	$m['createAnchor'].__bind_type__ = 0;
	$m['createAnchor'].__args__ = [null,null];
	$m['createButton'] = function() {

		return (typeof createElement == "undefined"?$m.createElement:createElement)('button');
	};
	$m['createButton'].__name__ = 'createButton';

	$m['createButton'].__bind_type__ = 0;
	$m['createButton'].__args__ = [null,null];
	$m['createCol'] = function() {

		return (typeof createElement == "undefined"?$m.createElement:createElement)('col');
	};
	$m['createCol'].__name__ = 'createCol';

	$m['createCol'].__bind_type__ = 0;
	$m['createCol'].__args__ = [null,null];
	$m['createDiv'] = function() {

		return (typeof createElement == "undefined"?$m.createElement:createElement)('div');
	};
	$m['createDiv'].__name__ = 'createDiv';

	$m['createDiv'].__bind_type__ = 0;
	$m['createDiv'].__args__ = [null,null];
	$m['createElement'] = function(tag) {

		return $doc['createElement'](tag);
	};
	$m['createElement'].__name__ = 'createElement';

	$m['createElement'].__bind_type__ = 0;
	$m['createElement'].__args__ = [null,null,['tag']];
	$m['createFieldSet'] = function() {

		return $m['createElement']('fieldset');
	};
	$m['createFieldSet'].__name__ = 'createFieldSet';

	$m['createFieldSet'].__bind_type__ = 0;
	$m['createFieldSet'].__args__ = [null,null];
	$m['createForm'] = function() {

		return $m['createElement']('form');
	};
	$m['createForm'].__name__ = 'createForm';

	$m['createForm'].__bind_type__ = 0;
	$m['createForm'].__args__ = [null,null];
	$m['createIFrame'] = function() {

		return $m['createElement']('iframe');
	};
	$m['createIFrame'].__name__ = 'createIFrame';

	$m['createIFrame'].__bind_type__ = 0;
	$m['createIFrame'].__args__ = [null,null];
	$m['createImg'] = function() {

		return $m['createElement']('img');
	};
	$m['createImg'].__name__ = 'createImg';

	$m['createImg'].__bind_type__ = 0;
	$m['createImg'].__args__ = [null,null];
	$m['createInputCheck'] = function() {

		return (typeof createInputElement == "undefined"?$m.createInputElement:createInputElement)('checkbox');
	};
	$m['createInputCheck'].__name__ = 'createInputCheck';

	$m['createInputCheck'].__bind_type__ = 0;
	$m['createInputCheck'].__args__ = [null,null];
	$m['createInputElement'] = function(elementType) {
		var e;
		e = $m['createElement']('input');
		e.__is_instance__ && typeof e.__setattr__ == 'function' ? e.__setattr__('type', elementType) : $p['setattr'](e, 'type', elementType);
		return e;
	};
	$m['createInputElement'].__name__ = 'createInputElement';

	$m['createInputElement'].__bind_type__ = 0;
	$m['createInputElement'].__args__ = [null,null,['elementType']];
	$m['createInputPassword'] = function() {

		return $m['createInputElement']('password');
	};
	$m['createInputPassword'].__name__ = 'createInputPassword';

	$m['createInputPassword'].__bind_type__ = 0;
	$m['createInputPassword'].__args__ = [null,null];
	$m['createInputRadio'] = function(group) {
		var e;
		e = $m['createInputElement']('radio');
		e.__is_instance__ && typeof e.__setattr__ == 'function' ? e.__setattr__('$$name', group) : $p['setattr'](e, '$$name', group);
		return e;
	};
	$m['createInputRadio'].__name__ = 'createInputRadio';

	$m['createInputRadio'].__bind_type__ = 0;
	$m['createInputRadio'].__args__ = [null,null,['group']];
	$m['createInputText'] = function() {

		return $m['createInputElement']('text');
	};
	$m['createInputText'].__name__ = 'createInputText';

	$m['createInputText'].__bind_type__ = 0;
	$m['createInputText'].__args__ = [null,null];
	$m['createLabel'] = function() {

		return $m['createElement']('label');
	};
	$m['createLabel'].__name__ = 'createLabel';

	$m['createLabel'].__bind_type__ = 0;
	$m['createLabel'].__args__ = [null,null];
	$m['createLegend'] = function() {

		return $m['createElement']('legend');
	};
	$m['createLegend'].__name__ = 'createLegend';

	$m['createLegend'].__bind_type__ = 0;
	$m['createLegend'].__args__ = [null,null];
	$m['createOptions'] = function() {

		return $m['createElement']('options');
	};
	$m['createOptions'].__name__ = 'createOptions';

	$m['createOptions'].__bind_type__ = 0;
	$m['createOptions'].__args__ = [null,null];
	$m['createSelect'] = function() {

		return $m['createElement']('select');
	};
	$m['createSelect'].__name__ = 'createSelect';

	$m['createSelect'].__bind_type__ = 0;
	$m['createSelect'].__args__ = [null,null];
	$m['createSpan'] = function() {

		return $m['createElement']('span');
	};
	$m['createSpan'].__name__ = 'createSpan';

	$m['createSpan'].__bind_type__ = 0;
	$m['createSpan'].__args__ = [null,null];
	$m['createTable'] = function() {

		return $m['createElement']('table');
	};
	$m['createTable'].__name__ = 'createTable';

	$m['createTable'].__bind_type__ = 0;
	$m['createTable'].__args__ = [null,null];
	$m['createTBody'] = function() {

		return $m['createElement']('tbody');
	};
	$m['createTBody'].__name__ = 'createTBody';

	$m['createTBody'].__bind_type__ = 0;
	$m['createTBody'].__args__ = [null,null];
	$m['createTD'] = function() {

		return $m['createElement']('td');
	};
	$m['createTD'].__name__ = 'createTD';

	$m['createTD'].__bind_type__ = 0;
	$m['createTD'].__args__ = [null,null];
	$m['createTextArea'] = function() {

		return $m['createElement']('textarea');
	};
	$m['createTextArea'].__name__ = 'createTextArea';

	$m['createTextArea'].__bind_type__ = 0;
	$m['createTextArea'].__args__ = [null,null];
	$m['createTH'] = function() {

		return $m['createElement']('th');
	};
	$m['createTH'].__name__ = 'createTH';

	$m['createTH'].__bind_type__ = 0;
	$m['createTH'].__args__ = [null,null];
	$m['createTR'] = function() {

		return $m['createElement']('tr');
	};
	$m['createTR'].__name__ = 'createTR';

	$m['createTR'].__bind_type__ = 0;
	$m['createTR'].__args__ = [null,null];
	$m['eventStopPropagation'] = function(evt) {

		evt['stopPropagation']();
		return null;
	};
	$m['eventStopPropagation'].__name__ = 'eventStopPropagation';

	$m['eventStopPropagation'].__bind_type__ = 0;
	$m['eventStopPropagation'].__args__ = [null,null,['evt']];
	$m['eventCancelBubble'] = function(evt, cancel) {

		evt.__is_instance__ && typeof evt.__setattr__ == 'function' ? evt.__setattr__('cancelBubble', cancel) : $p['setattr'](evt, 'cancelBubble', cancel);
		return null;
	};
	$m['eventCancelBubble'].__name__ = 'eventCancelBubble';

	$m['eventCancelBubble'].__bind_type__ = 0;
	$m['eventCancelBubble'].__args__ = [null,null,['evt'],['cancel']];
	$m['eventGetAltKey'] = function(evt) {
		var $attr11,$attr12;
		return (($attr11=($attr12=evt)['altKey']) == null || (($attr12.__is_instance__) && typeof $attr11 == 'function') || (typeof $attr11['__get__'] == 'function')?
					$p['getattr']($attr12, 'altKey'):
					evt['altKey']);
	};
	$m['eventGetAltKey'].__name__ = 'eventGetAltKey';

	$m['eventGetAltKey'].__bind_type__ = 0;
	$m['eventGetAltKey'].__args__ = [null,null,['evt']];
	$m['eventGetButton'] = function(evt) {
		var $attr14,$attr13;
		return (($attr13=($attr14=evt)['button']) == null || (($attr14.__is_instance__) && typeof $attr13 == 'function') || (typeof $attr13['__get__'] == 'function')?
					$p['getattr']($attr14, 'button'):
					evt['button']);
	};
	$m['eventGetButton'].__name__ = 'eventGetButton';

	$m['eventGetButton'].__bind_type__ = 0;
	$m['eventGetButton'].__args__ = [null,null,['evt']];
	$m['eventGetClientX'] = function(evt) {
		var $attr15,$attr16;
		return (($attr15=($attr16=evt)['clientX']) == null || (($attr16.__is_instance__) && typeof $attr15 == 'function') || (typeof $attr15['__get__'] == 'function')?
					$p['getattr']($attr16, 'clientX'):
					evt['clientX']);
	};
	$m['eventGetClientX'].__name__ = 'eventGetClientX';

	$m['eventGetClientX'].__bind_type__ = 0;
	$m['eventGetClientX'].__args__ = [null,null,['evt']];
	$m['eventGetClientY'] = function(evt) {
		var $attr17,$attr18;
		return (($attr17=($attr18=evt)['clientY']) == null || (($attr18.__is_instance__) && typeof $attr17 == 'function') || (typeof $attr17['__get__'] == 'function')?
					$p['getattr']($attr18, 'clientY'):
					evt['clientY']);
	};
	$m['eventGetClientY'].__name__ = 'eventGetClientY';

	$m['eventGetClientY'].__bind_type__ = 0;
	$m['eventGetClientY'].__args__ = [null,null,['evt']];
	$m['eventGetCtrlKey'] = function(evt) {
		var $attr20,$attr19;
		return (($attr19=($attr20=evt)['ctrlKey']) == null || (($attr20.__is_instance__) && typeof $attr19 == 'function') || (typeof $attr19['__get__'] == 'function')?
					$p['getattr']($attr20, 'ctrlKey'):
					evt['ctrlKey']);
	};
	$m['eventGetCtrlKey'].__name__ = 'eventGetCtrlKey';

	$m['eventGetCtrlKey'].__bind_type__ = 0;
	$m['eventGetCtrlKey'].__args__ = [null,null,['evt']];
	$m['eventGetFromElement'] = function(evt) {
		var $attr21,$attr22,$pyjs_try_err;
		try {
			return (($attr21=($attr22=evt)['fromElement']) == null || (($attr22.__is_instance__) && typeof $attr21 == 'function') || (typeof $attr21['__get__'] == 'function')?
						$p['getattr']($attr22, 'fromElement'):
						evt['fromElement']);
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
			if (true) {
				return null;
			}
		}
		return null;
	};
	$m['eventGetFromElement'].__name__ = 'eventGetFromElement';

	$m['eventGetFromElement'].__bind_type__ = 0;
	$m['eventGetFromElement'].__args__ = [null,null,['evt']];
	$m['eventGetKeyCode'] = function(evt) {
		var $or5,$or7,$or6,$attr23,$attr24,$attr25,$attr26;
		return ($p['bool']($or5=(($attr23=($attr24=evt)['which']) == null || (($attr24.__is_instance__) && typeof $attr23 == 'function') || (typeof $attr23['__get__'] == 'function')?
					$p['getattr']($attr24, 'which'):
					evt['which']))?$or5:($p['bool']($or6=(($attr25=($attr26=evt)['keyCode']) == null || (($attr26.__is_instance__) && typeof $attr25 == 'function') || (typeof $attr25['__get__'] == 'function')?
					$p['getattr']($attr26, 'keyCode'):
					evt['keyCode']))?$or6:0));
	};
	$m['eventGetKeyCode'].__name__ = 'eventGetKeyCode';

	$m['eventGetKeyCode'].__bind_type__ = 0;
	$m['eventGetKeyCode'].__args__ = [null,null,['evt']];
	$m['eventGetRepeat'] = function(evt) {
		var $attr28,$attr27;
		return (($attr27=($attr28=evt)['repeat']) == null || (($attr28.__is_instance__) && typeof $attr27 == 'function') || (typeof $attr27['__get__'] == 'function')?
					$p['getattr']($attr28, 'repeat'):
					evt['repeat']);
	};
	$m['eventGetRepeat'].__name__ = 'eventGetRepeat';

	$m['eventGetRepeat'].__bind_type__ = 0;
	$m['eventGetRepeat'].__args__ = [null,null,['evt']];
	$m['eventGetScreenX'] = function(evt) {
		var $attr29,$attr30;
		return (($attr29=($attr30=evt)['screenX']) == null || (($attr30.__is_instance__) && typeof $attr29 == 'function') || (typeof $attr29['__get__'] == 'function')?
					$p['getattr']($attr30, 'screenX'):
					evt['screenX']);
	};
	$m['eventGetScreenX'].__name__ = 'eventGetScreenX';

	$m['eventGetScreenX'].__bind_type__ = 0;
	$m['eventGetScreenX'].__args__ = [null,null,['evt']];
	$m['eventGetScreenY'] = function(evt) {
		var $attr32,$attr31;
		return (($attr31=($attr32=evt)['screenY']) == null || (($attr32.__is_instance__) && typeof $attr31 == 'function') || (typeof $attr31['__get__'] == 'function')?
					$p['getattr']($attr32, 'screenY'):
					evt['screenY']);
	};
	$m['eventGetScreenY'].__name__ = 'eventGetScreenY';

	$m['eventGetScreenY'].__bind_type__ = 0;
	$m['eventGetScreenY'].__args__ = [null,null,['evt']];
	$m['eventGetShiftKey'] = function(evt) {
		var $attr33,$attr34;
		return (($attr33=($attr34=evt)['shiftKey']) == null || (($attr34.__is_instance__) && typeof $attr33 == 'function') || (typeof $attr33['__get__'] == 'function')?
					$p['getattr']($attr34, 'shiftKey'):
					evt['shiftKey']);
	};
	$m['eventGetShiftKey'].__name__ = 'eventGetShiftKey';

	$m['eventGetShiftKey'].__bind_type__ = 0;
	$m['eventGetShiftKey'].__args__ = [null,null,['evt']];
	$m['eventGetCurrentTarget'] = function(event) {
		var $attr35,$attr36;
		return (($attr35=($attr36=event)['currentTarget']) == null || (($attr36.__is_instance__) && typeof $attr35 == 'function') || (typeof $attr35['__get__'] == 'function')?
					$p['getattr']($attr36, 'currentTarget'):
					event['currentTarget']);
	};
	$m['eventGetCurrentTarget'].__name__ = 'eventGetCurrentTarget';

	$m['eventGetCurrentTarget'].__bind_type__ = 0;
	$m['eventGetCurrentTarget'].__args__ = [null,null,['event']];
	$m['eventGetTarget'] = function(event) {
		var $attr38,$attr37;
		return (($attr37=($attr38=event)['target']) == null || (($attr38.__is_instance__) && typeof $attr37 == 'function') || (typeof $attr37['__get__'] == 'function')?
					$p['getattr']($attr38, 'target'):
					event['target']);
	};
	$m['eventGetTarget'].__name__ = 'eventGetTarget';

	$m['eventGetTarget'].__bind_type__ = 0;
	$m['eventGetTarget'].__args__ = [null,null,['event']];
	$m['eventGetToElement'] = function(evt) {
		var $attr42,$attr40,$attr41,$attr39,type;
		type = (typeof eventGetType == "undefined"?$m.eventGetType:eventGetType)(evt);
		if ($p['bool']($p['op_eq'](type, 'mouseout'))) {
			return (($attr39=($attr40=evt)['relatedTarget']) == null || (($attr40.__is_instance__) && typeof $attr39 == 'function') || (typeof $attr39['__get__'] == 'function')?
						$p['getattr']($attr40, 'relatedTarget'):
						evt['relatedTarget']);
		}
		else if ($p['bool']($p['op_eq'](type, 'mouseover'))) {
			return (($attr41=($attr42=evt)['target']) == null || (($attr42.__is_instance__) && typeof $attr41 == 'function') || (typeof $attr41['__get__'] == 'function')?
						$p['getattr']($attr42, 'target'):
						evt['target']);
		}
		return null;
	};
	$m['eventGetToElement'].__name__ = 'eventGetToElement';

	$m['eventGetToElement'].__bind_type__ = 0;
	$m['eventGetToElement'].__args__ = [null,null,['evt']];
	$m['eventGetType'] = function(event) {
		var $attr44,$attr43;
		return (($attr43=($attr44=event)['type']) == null || (($attr44.__is_instance__) && typeof $attr43 == 'function') || (typeof $attr43['__get__'] == 'function')?
					$p['getattr']($attr44, 'type'):
					event['type']);
	};
	$m['eventGetType'].__name__ = 'eventGetType';

	$m['eventGetType'].__bind_type__ = 0;
	$m['eventGetType'].__args__ = [null,null,['event']];
	$m['eventGetTypeInt'] = function(event) {
		var $attr46,$attr45;
		return $m['Event']['eventmap']['get']($p['str']((($attr45=($attr46=event)['type']) == null || (($attr46.__is_instance__) && typeof $attr45 == 'function') || (typeof $attr45['__get__'] == 'function')?
					$p['getattr']($attr46, 'type'):
					event['type'])), 0);
	};
	$m['eventGetTypeInt'].__name__ = 'eventGetTypeInt';

	$m['eventGetTypeInt'].__bind_type__ = 0;
	$m['eventGetTypeInt'].__args__ = [null,null,['event']];
	$m['eventGetTypeString'] = function(event) {

		return $m['eventGetType'](event);
	};
	$m['eventGetTypeString'].__name__ = 'eventGetTypeString';

	$m['eventGetTypeString'].__bind_type__ = 0;
	$m['eventGetTypeString'].__args__ = [null,null,['event']];
	$m['eventPreventDefault'] = function(evt) {

		evt['preventDefault']();
		return null;
	};
	$m['eventPreventDefault'].__name__ = 'eventPreventDefault';

	$m['eventPreventDefault'].__bind_type__ = 0;
	$m['eventPreventDefault'].__args__ = [null,null,['evt']];
	$m['eventSetKeyCode'] = function(evt, key) {

		evt.__is_instance__ && typeof evt.__setattr__ == 'function' ? evt.__setattr__('keyCode', key) : $p['setattr'](evt, 'keyCode', key);
		return null;
	};
	$m['eventSetKeyCode'].__name__ = 'eventSetKeyCode';

	$m['eventSetKeyCode'].__bind_type__ = 0;
	$m['eventSetKeyCode'].__args__ = [null,null,['evt'],['key']];
	$m['eventToString'] = function(evt) {

		return evt['toString']();
	};
	$m['eventToString'].__name__ = 'eventToString';

	$m['eventToString'].__bind_type__ = 0;
	$m['eventToString'].__args__ = [null,null,['evt']];
	$m['iframeGetSrc'] = function(elem) {
		var $attr47,$attr48;
		return (($attr47=($attr48=elem)['src']) == null || (($attr48.__is_instance__) && typeof $attr47 == 'function') || (typeof $attr47['__get__'] == 'function')?
					$p['getattr']($attr48, 'src'):
					elem['src']);
	};
	$m['iframeGetSrc'].__name__ = 'iframeGetSrc';

	$m['iframeGetSrc'].__bind_type__ = 0;
	$m['iframeGetSrc'].__args__ = [null,null,['elem']];
	$m['getAbsoluteLeft'] = function(elem) {
		var $attr59,$attr58,curr,$sub4,$attr60,$attr51,$attr50,$attr53,$attr52,$attr55,$attr57,$attr54,$add2,$add1,$attr56,$sub3,$sub2,$sub1,left,$attr49;
		left = 0;
		curr = elem;
		while ($p['bool']((($attr49=($attr50=curr)['offsetParent']) == null || (($attr50.__is_instance__) && typeof $attr49 == 'function') || (typeof $attr49['__get__'] == 'function')?
					$p['getattr']($attr50, 'offsetParent'):
					curr['offsetParent']))) {
			left = $p['__op_sub']($sub1=left,$sub2=(($attr51=($attr52=curr)['scrollLeft']) == null || (($attr52.__is_instance__) && typeof $attr51 == 'function') || (typeof $attr51['__get__'] == 'function')?
						$p['getattr']($attr52, 'scrollLeft'):
						curr['scrollLeft']));
			curr = (($attr53=($attr54=curr)['parentNode']) == null || (($attr54.__is_instance__) && typeof $attr53 == 'function') || (typeof $attr53['__get__'] == 'function')?
						$p['getattr']($attr54, 'parentNode'):
						curr['parentNode']);
		}
		while ($p['bool'](elem)) {
			left = $p['__op_add']($add1=left,$add2=$p['__op_sub']($sub3=(($attr55=($attr56=elem)['offsetLeft']) == null || (($attr56.__is_instance__) && typeof $attr55 == 'function') || (typeof $attr55['__get__'] == 'function')?
						$p['getattr']($attr56, 'offsetLeft'):
						elem['offsetLeft']),$sub4=(($attr57=($attr58=elem)['scrollLeft']) == null || (($attr58.__is_instance__) && typeof $attr57 == 'function') || (typeof $attr57['__get__'] == 'function')?
						$p['getattr']($attr58, 'scrollLeft'):
						elem['scrollLeft'])));
			elem = (($attr59=($attr60=elem)['offsetParent']) == null || (($attr60.__is_instance__) && typeof $attr59 == 'function') || (typeof $attr59['__get__'] == 'function')?
						$p['getattr']($attr60, 'offsetParent'):
						elem['offsetParent']);
		}
		return left;
	};
	$m['getAbsoluteLeft'].__name__ = 'getAbsoluteLeft';

	$m['getAbsoluteLeft'].__bind_type__ = 0;
	$m['getAbsoluteLeft'].__args__ = [null,null,['elem']];
	$m['getAbsoluteTop'] = function(elem) {
		var curr,$attr69,$add3,$attr64,$attr65,top,$attr67,$attr62,$attr63,$attr61,$sub8,$attr71,$add4,$attr66,$attr68,$attr70,$sub7,$sub6,$sub5,$attr72;
		top = 0;
		curr = elem;
		while ($p['bool']((($attr61=($attr62=curr)['offsetParent']) == null || (($attr62.__is_instance__) && typeof $attr61 == 'function') || (typeof $attr61['__get__'] == 'function')?
					$p['getattr']($attr62, 'offsetParent'):
					curr['offsetParent']))) {
			top = $p['__op_sub']($sub5=top,$sub6=(($attr63=($attr64=curr)['scrollTop']) == null || (($attr64.__is_instance__) && typeof $attr63 == 'function') || (typeof $attr63['__get__'] == 'function')?
						$p['getattr']($attr64, 'scrollTop'):
						curr['scrollTop']));
			curr = (($attr65=($attr66=curr)['parentNode']) == null || (($attr66.__is_instance__) && typeof $attr65 == 'function') || (typeof $attr65['__get__'] == 'function')?
						$p['getattr']($attr66, 'parentNode'):
						curr['parentNode']);
		}
		while ($p['bool'](elem)) {
			top = $p['__op_add']($add3=top,$add4=$p['__op_sub']($sub7=(($attr67=($attr68=elem)['offsetTop']) == null || (($attr68.__is_instance__) && typeof $attr67 == 'function') || (typeof $attr67['__get__'] == 'function')?
						$p['getattr']($attr68, 'offsetTop'):
						elem['offsetTop']),$sub8=(($attr69=($attr70=elem)['scrollTop']) == null || (($attr70.__is_instance__) && typeof $attr69 == 'function') || (typeof $attr69['__get__'] == 'function')?
						$p['getattr']($attr70, 'scrollTop'):
						elem['scrollTop'])));
			elem = (($attr71=($attr72=elem)['offsetParent']) == null || (($attr72.__is_instance__) && typeof $attr71 == 'function') || (typeof $attr71['__get__'] == 'function')?
						$p['getattr']($attr72, 'offsetParent'):
						elem['offsetParent']);
		}
		return top;
	};
	$m['getAbsoluteTop'].__name__ = 'getAbsoluteTop';

	$m['getAbsoluteTop'].__bind_type__ = 0;
	$m['getAbsoluteTop'].__args__ = [null,null,['elem']];
	$m['getAttribute'] = function(elem, attr) {

		attr = $p['getattr'](elem, attr);
		if ($p['bool']((attr === null))) {
			return null;
		}
		return $p['str'](attr);
	};
	$m['getAttribute'].__name__ = 'getAttribute';

	$m['getAttribute'].__bind_type__ = 0;
	$m['getAttribute'].__args__ = [null,null,['elem'],['attr']];
	$m['getElemAttribute'] = function(elem, attr) {
		var mf;
		mf = (typeof get_main_frame == "undefined"?$m.get_main_frame:get_main_frame)();
		if ($p['bool'](!$p['bool'](elem['hasAttribute'](attr)))) {
			return $p['str']($p['getattr'](elem, mf['mash_attrib'](attr)));
		}
		return $p['str'](elem['getAttribute'](attr));
	};
	$m['getElemAttribute'].__name__ = 'getElemAttribute';

	$m['getElemAttribute'].__bind_type__ = 0;
	$m['getElemAttribute'].__args__ = [null,null,['elem'],['attr']];
	$m['getBooleanAttribute'] = function(elem, attr) {
		var mf;
		mf = (typeof get_main_frame == "undefined"?$m.get_main_frame:get_main_frame)();
		return $p['bool']($p['getattr'](elem, mf['mash_attrib'](attr)));
	};
	$m['getBooleanAttribute'].__name__ = 'getBooleanAttribute';

	$m['getBooleanAttribute'].__bind_type__ = 0;
	$m['getBooleanAttribute'].__args__ = [null,null,['elem'],['attr']];
	$m['getBooleanElemAttribute'] = function(elem, attr) {

		if ($p['bool'](!$p['bool'](elem['hasAttribute'](attr)))) {
			return null;
		}
		return $p['bool'](elem['getAttribute'](attr));
	};
	$m['getBooleanElemAttribute'].__name__ = 'getBooleanElemAttribute';

	$m['getBooleanElemAttribute'].__bind_type__ = 0;
	$m['getBooleanElemAttribute'].__args__ = [null,null,['elem'],['attr']];
	$m['getCaptureElement'] = function() {

		return $m['sCaptureElem'];
	};
	$m['getCaptureElement'].__name__ = 'getCaptureElement';

	$m['getCaptureElement'].__bind_type__ = 0;
	$m['getCaptureElement'].__args__ = [null,null];
	$m['getChild'] = function(elem, index) {
		var count,$attr78,$attr77,$attr76,$attr75,$attr74,$attr73,next,$add5,$add6,child;
		count = 0;
		child = (($attr73=($attr74=elem)['firstChild']) == null || (($attr74.__is_instance__) && typeof $attr73 == 'function') || (typeof $attr73['__get__'] == 'function')?
					$p['getattr']($attr74, 'firstChild'):
					elem['firstChild']);
		while ($p['bool'](child)) {
			next = (($attr75=($attr76=child)['nextSibling']) == null || (($attr76.__is_instance__) && typeof $attr75 == 'function') || (typeof $attr75['__get__'] == 'function')?
						$p['getattr']($attr76, 'nextSibling'):
						child['nextSibling']);
			if ($p['bool']($p['op_eq']((($attr77=($attr78=child)['nodeType']) == null || (($attr78.__is_instance__) && typeof $attr77 == 'function') || (typeof $attr77['__get__'] == 'function')?
						$p['getattr']($attr78, 'nodeType'):
						child['nodeType']), 1))) {
				if ($p['bool']($p['op_eq'](index, count))) {
					return child;
				}
				count = $p['__op_add']($add5=count,$add6=1);
			}
			child = next;
		}
		return null;
	};
	$m['getChild'].__name__ = 'getChild';

	$m['getChild'].__bind_type__ = 0;
	$m['getChild'].__args__ = [null,null,['elem'],['index']];
	$m['getChildCount'] = function(elem) {
		var count,$attr82,$attr80,$attr81,$attr84,$attr79,$attr83,$add7,child,$add8;
		count = 0;
		child = (($attr79=($attr80=elem)['firstChild']) == null || (($attr80.__is_instance__) && typeof $attr79 == 'function') || (typeof $attr79['__get__'] == 'function')?
					$p['getattr']($attr80, 'firstChild'):
					elem['firstChild']);
		while ($p['bool'](child)) {
			if ($p['bool']($p['op_eq']((($attr81=($attr82=child)['nodeType']) == null || (($attr82.__is_instance__) && typeof $attr81 == 'function') || (typeof $attr81['__get__'] == 'function')?
						$p['getattr']($attr82, 'nodeType'):
						child['nodeType']), 1))) {
				count = $p['__op_add']($add7=count,$add8=1);
			}
			child = (($attr83=($attr84=child)['nextSibling']) == null || (($attr84.__is_instance__) && typeof $attr83 == 'function') || (typeof $attr83['__get__'] == 'function')?
						$p['getattr']($attr84, 'nextSibling'):
						child['nextSibling']);
		}
		return count;
	};
	$m['getChildCount'].__name__ = 'getChildCount';

	$m['getChildCount'].__bind_type__ = 0;
	$m['getChildCount'].__args__ = [null,null,['elem']];
	$m['getChildIndex'] = function(parent, toFind) {
		var count,$attr86,$attr87,$attr85,$attr88,$attr89,child,$add10,$add9,$attr90;
		count = 0;
		child = (($attr85=($attr86=parent)['firstChild']) == null || (($attr86.__is_instance__) && typeof $attr85 == 'function') || (typeof $attr85['__get__'] == 'function')?
					$p['getattr']($attr86, 'firstChild'):
					parent['firstChild']);
		while ($p['bool'](child)) {
			if ($p['bool']($p['op_eq'](child, toFind))) {
				return count;
			}
			if ($p['bool']($p['op_eq']((($attr87=($attr88=child)['nodeType']) == null || (($attr88.__is_instance__) && typeof $attr87 == 'function') || (typeof $attr87['__get__'] == 'function')?
						$p['getattr']($attr88, 'nodeType'):
						child['nodeType']), 1))) {
				count = $p['__op_add']($add9=count,$add10=1);
			}
			child = (($attr89=($attr90=child)['nextSibling']) == null || (($attr90.__is_instance__) && typeof $attr89 == 'function') || (typeof $attr89['__get__'] == 'function')?
						$p['getattr']($attr90, 'nextSibling'):
						child['nextSibling']);
		}
		return (typeof ($usub1=1)=='number'?
			-$usub1:
			$p['op_usub']($usub1));
	};
	$m['getChildIndex'].__name__ = 'getChildIndex';

	$m['getChildIndex'].__bind_type__ = 0;
	$m['getChildIndex'].__args__ = [null,null,['parent'],['toFind']];
	$m['getElementById'] = function(id) {

		return $doc['getElementById'](id);
	};
	$m['getElementById'].__name__ = 'getElementById';

	$m['getElementById'].__bind_type__ = 0;
	$m['getElementById'].__args__ = [null,null,['id']];
	$m['getEventListener'] = function(element) {

		return $m['get_listener'](element);
	};
	$m['getEventListener'].__name__ = 'getEventListener';

	$m['getEventListener'].__bind_type__ = 0;
	$m['getEventListener'].__args__ = [null,null,['element']];
	$m['eventbitsmap'] = $p['dict']([]);
	$m['getEventsSunk'] = function(element) {

		return $m['eventbitsmap']['get'](element, 0);
	};
	$m['getEventsSunk'].__name__ = 'getEventsSunk';

	$m['getEventsSunk'].__bind_type__ = 0;
	$m['getEventsSunk'].__args__ = [null,null,['element']];
	$m['getFirstChild'] = function(elem) {
		var $attr95,$and9,$attr96,$attr91,$attr93,$attr92,$and12,$and10,$and11,child,$attr94;
		child = ($p['bool']($and9=elem)?(($attr91=($attr92=elem)['firstChild']) == null || (($attr92.__is_instance__) && typeof $attr91 == 'function') || (typeof $attr91['__get__'] == 'function')?
					$p['getattr']($attr92, 'firstChild'):
					elem['firstChild']):$and9);
		while ($p['bool'](($p['bool']($and11=child)?!$p['op_eq']((($attr93=($attr94=child)['nodeType']) == null || (($attr94.__is_instance__) && typeof $attr93 == 'function') || (typeof $attr93['__get__'] == 'function')?
					$p['getattr']($attr94, 'nodeType'):
					child['nodeType']), 1):$and11))) {
			child = (($attr95=($attr96=child)['nextSibling']) == null || (($attr96.__is_instance__) && typeof $attr95 == 'function') || (typeof $attr95['__get__'] == 'function')?
						$p['getattr']($attr96, 'nextSibling'):
						child['nextSibling']);
		}
		return child;
	};
	$m['getFirstChild'].__name__ = 'getFirstChild';

	$m['getFirstChild'].__bind_type__ = 0;
	$m['getFirstChild'].__args__ = [null,null,['elem']];
	$m['getInnerHTML'] = function(element) {
		var $attr97,$attr100,$attr99,$attr98,$and13,$pyjs_try_err,$and16,$and14,$and15;
		try {
			return ($p['bool']($and13=element)?(($attr97=($attr98=element)['innerHtml']) == null || (($attr98.__is_instance__) && typeof $attr97 == 'function') || (typeof $attr97['__get__'] == 'function')?
						$p['getattr']($attr98, 'innerHtml'):
						element['innerHtml']):$and13);
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
			if (true) {
				return ($p['bool']($and15=element)?(($attr99=($attr100=element)['innerHTML']) == null || (($attr100.__is_instance__) && typeof $attr99 == 'function') || (typeof $attr99['__get__'] == 'function')?
							$p['getattr']($attr100, 'innerHTML'):
							element['innerHTML']):$and15);
			}
		}
		return null;
	};
	$m['getInnerHTML'].__name__ = 'getInnerHTML';

	$m['getInnerHTML'].__bind_type__ = 0;
	$m['getInnerHTML'].__args__ = [null,null,['element']];
	$m['getInnerText'] = function(element) {
		var $add14,$attr110,text,$attr101,$add13,$attr106,$attr107,$attr104,$attr105,$attr102,$attr103,$add12,child,$attr109,$attr108,$add11;
		text = '';
		child = (($attr101=($attr102=element)['firstChild']) == null || (($attr102.__is_instance__) && typeof $attr101 == 'function') || (typeof $attr101['__get__'] == 'function')?
					$p['getattr']($attr102, 'firstChild'):
					element['firstChild']);
		while ($p['bool'](child)) {
			if ($p['bool']($p['op_eq']((($attr103=($attr104=child)['nodeType']) == null || (($attr104.__is_instance__) && typeof $attr103 == 'function') || (typeof $attr103['__get__'] == 'function')?
						$p['getattr']($attr104, 'nodeType'):
						child['nodeType']), 1))) {
				text = $p['__op_add']($add11=text,$add12=$m['getInnerText'](child));
			}
			else if ($p['bool']((($attr105=($attr106=child)['nodeValue']) == null || (($attr106.__is_instance__) && typeof $attr105 == 'function') || (typeof $attr105['__get__'] == 'function')?
						$p['getattr']($attr106, 'nodeValue'):
						child['nodeValue']))) {
				text = $p['__op_add']($add13=text,$add14=(($attr107=($attr108=child)['nodeValue']) == null || (($attr108.__is_instance__) && typeof $attr107 == 'function') || (typeof $attr107['__get__'] == 'function')?
							$p['getattr']($attr108, 'nodeValue'):
							child['nodeValue']));
			}
			child = (($attr109=($attr110=child)['nextSibling']) == null || (($attr110.__is_instance__) && typeof $attr109 == 'function') || (typeof $attr109['__get__'] == 'function')?
						$p['getattr']($attr110, 'nextSibling'):
						child['nextSibling']);
		}
		return text;
	};
	$m['getInnerText'].__name__ = 'getInnerText';

	$m['getInnerText'].__bind_type__ = 0;
	$m['getInnerText'].__args__ = [null,null,['element']];
	$m['getIntAttribute'] = function(elem, attr) {

		return $p['float_int']($p['getattr'](elem, attr));
	};
	$m['getIntAttribute'].__name__ = 'getIntAttribute';

	$m['getIntAttribute'].__bind_type__ = 0;
	$m['getIntAttribute'].__args__ = [null,null,['elem'],['attr']];
	$m['getIntElemAttribute'] = function(elem, attr) {

		if ($p['bool'](!$p['bool'](elem['hasAttribute'](attr)))) {
			return null;
		}
		return $p['float_int'](elem['getAttribute'](attr));
	};
	$m['getIntElemAttribute'].__name__ = 'getIntElemAttribute';

	$m['getIntElemAttribute'].__bind_type__ = 0;
	$m['getIntElemAttribute'].__args__ = [null,null,['elem'],['attr']];
	$m['getIntStyleAttribute'] = function(elem, attr) {
		var $attr111,$attr112;
		return $m['getIntAttribute']((($attr111=($attr112=elem)['style']) == null || (($attr112.__is_instance__) && typeof $attr111 == 'function') || (typeof $attr111['__get__'] == 'function')?
					$p['getattr']($attr112, 'style'):
					elem['style']), attr);
	};
	$m['getIntStyleAttribute'].__name__ = 'getIntStyleAttribute';

	$m['getIntStyleAttribute'].__bind_type__ = 0;
	$m['getIntStyleAttribute'].__args__ = [null,null,['elem'],['attr']];
	$m['getNextSibling'] = function(elem) {
		var $attr118,$attr113,$attr115,$attr117,$attr114,sib,$and17,$and18,$attr116;
		sib = (($attr113=($attr114=elem)['nextSibling']) == null || (($attr114.__is_instance__) && typeof $attr113 == 'function') || (typeof $attr113['__get__'] == 'function')?
					$p['getattr']($attr114, 'nextSibling'):
					elem['nextSibling']);
		while ($p['bool'](($p['bool']($and17=sib)?!$p['op_eq']((($attr115=($attr116=sib)['nodeType']) == null || (($attr116.__is_instance__) && typeof $attr115 == 'function') || (typeof $attr115['__get__'] == 'function')?
					$p['getattr']($attr116, 'nodeType'):
					sib['nodeType']), 1):$and17))) {
			sib = (($attr117=($attr118=sib)['nextSibling']) == null || (($attr118.__is_instance__) && typeof $attr117 == 'function') || (typeof $attr117['__get__'] == 'function')?
						$p['getattr']($attr118, 'nextSibling'):
						sib['nextSibling']);
		}
		return sib;
	};
	$m['getNextSibling'].__name__ = 'getNextSibling';

	$m['getNextSibling'].__bind_type__ = 0;
	$m['getNextSibling'].__args__ = [null,null,['elem']];
	$m['getNodeType'] = function(elem) {
		var $attr119,$attr120;
		return (($attr119=($attr120=elem)['nodeType']) == null || (($attr120.__is_instance__) && typeof $attr119 == 'function') || (typeof $attr119['__get__'] == 'function')?
					$p['getattr']($attr120, 'nodeType'):
					elem['nodeType']);
	};
	$m['getNodeType'].__name__ = 'getNodeType';

	$m['getNodeType'].__bind_type__ = 0;
	$m['getNodeType'].__args__ = [null,null,['elem']];
	$m['getParent'] = function(elem) {
		var $attr121,$attr122,parent;
		parent = (($attr121=($attr122=elem)['parentNode']) == null || (($attr122.__is_instance__) && typeof $attr121 == 'function') || (typeof $attr121['__get__'] == 'function')?
					$p['getattr']($attr122, 'parentNode'):
					elem['parentNode']);
		if ($p['bool']((parent === null))) {
			return null;
		}
		if ($p['bool'](!$p['op_eq']($m['getNodeType'](parent), 1))) {
			return null;
		}
		return parent;
	};
	$m['getParent'].__name__ = 'getParent';

	$m['getParent'].__bind_type__ = 0;
	$m['getParent'].__args__ = [null,null,['elem']];
	$m['getStyleAttribute'] = function(elem, attr) {
		var $attr123,$pyjs_try_err,$attr124,$attr125,$attr126;
		try {
			if ($p['bool']($p['hasattr']((($attr123=($attr124=elem)['style']) == null || (($attr124.__is_instance__) && typeof $attr123 == 'function') || (typeof $attr123['__get__'] == 'function')?
						$p['getattr']($attr124, 'style'):
						elem['style']), 'getProperty'))) {
				return elem['style']['getProperty']((typeof mash_name_for_glib == "undefined"?$m.mash_name_for_glib:mash_name_for_glib)(attr));
			}
			return elem['style']['getAttribute'](attr);
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
			if (($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
				return $p['getattr']((($attr125=($attr126=elem)['style']) == null || (($attr126.__is_instance__) && typeof $attr125 == 'function') || (typeof $attr125['__get__'] == 'function')?
							$p['getattr']($attr126, 'style'):
							elem['style']), attr, null);
			} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
		}
		return null;
	};
	$m['getStyleAttribute'].__name__ = 'getStyleAttribute';

	$m['getStyleAttribute'].__bind_type__ = 0;
	$m['getStyleAttribute'].__args__ = [null,null,['elem'],['attr']];
	$m['insertChild'] = function(parent, toAdd, index) {
		var count,$attr132,child,$attr131,$add15,$add16,$attr130,$attr127,$attr128,$attr129,before;
		count = 0;
		child = (($attr127=($attr128=parent)['firstChild']) == null || (($attr128.__is_instance__) && typeof $attr127 == 'function') || (typeof $attr127['__get__'] == 'function')?
					$p['getattr']($attr128, 'firstChild'):
					parent['firstChild']);
		before = null;
		while ($p['bool'](child)) {
			if ($p['bool']($p['op_eq']((($attr129=($attr130=child)['nodeType']) == null || (($attr130.__is_instance__) && typeof $attr129 == 'function') || (typeof $attr129['__get__'] == 'function')?
						$p['getattr']($attr130, 'nodeType'):
						child['nodeType']), 1))) {
				if ($p['bool']($p['op_eq'](count, index))) {
					before = child;
					break;
				}
				count = $p['__op_add']($add15=count,$add16=1);
			}
			child = (($attr131=($attr132=child)['nextSibling']) == null || (($attr132.__is_instance__) && typeof $attr131 == 'function') || (typeof $attr131['__get__'] == 'function')?
						$p['getattr']($attr132, 'nextSibling'):
						child['nextSibling']);
		}
		if ($p['bool']((before === null))) {
			parent['appendChild'](toAdd);
		}
		else {
			parent['insertBefore'](toAdd, before);
		}
		return null;
	};
	$m['insertChild'].__name__ = 'insertChild';

	$m['insertChild'].__bind_type__ = 0;
	$m['insertChild'].__args__ = [null,null,['parent'],['toAdd'],['index']];
	$m['IterChildrenClass'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.DOM';
		$method = $pyjs__bind_method2('__init__', function(elem) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				elem = arguments[1];
			}
			var $attr133,$attr134;
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('parent', elem) : $p['setattr'](self, 'parent', elem);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('child', (($attr133=($attr134=elem)['firstChild']) == null || (($attr134.__is_instance__) && typeof $attr133 == 'function') || (typeof $attr133['__get__'] == 'function')?
						$p['getattr']($attr134, 'firstChild'):
						elem['firstChild'])) : $p['setattr'](self, 'child', (($attr133=($attr134=elem)['firstChild']) == null || (($attr134.__is_instance__) && typeof $attr133 == 'function') || (typeof $attr133['__get__'] == 'function')?
						$p['getattr']($attr134, 'firstChild'):
						elem['firstChild']));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('lastChild', null) : $p['setattr'](self, 'lastChild', null);
			return null;
		}
	, 1, [null,null,['self'],['elem']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('next', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr142,$attr140,$attr141,$attr137,$attr136,$attr135,$attr139,$attr138;
			if ($p['bool'](!$p['bool']((($attr135=($attr136=self)['child']) == null || (($attr136.__is_instance__) && typeof $attr135 == 'function') || (typeof $attr135['__get__'] == 'function')?
						$p['getattr']($attr136, 'child'):
						self['child'])))) {
				throw ($p['StopIteration']);
			}
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('lastChild', (($attr137=($attr138=self)['child']) == null || (($attr138.__is_instance__) && typeof $attr137 == 'function') || (typeof $attr137['__get__'] == 'function')?
						$p['getattr']($attr138, 'child'):
						self['child'])) : $p['setattr'](self, 'lastChild', (($attr137=($attr138=self)['child']) == null || (($attr138.__is_instance__) && typeof $attr137 == 'function') || (typeof $attr137['__get__'] == 'function')?
						$p['getattr']($attr138, 'child'):
						self['child']));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('child', $m['getNextSibling']((($attr139=($attr140=self)['child']) == null || (($attr140.__is_instance__) && typeof $attr139 == 'function') || (typeof $attr139['__get__'] == 'function')?
						$p['getattr']($attr140, 'child'):
						self['child']))) : $p['setattr'](self, 'child', $m['getNextSibling']((($attr139=($attr140=self)['child']) == null || (($attr140.__is_instance__) && typeof $attr139 == 'function') || (typeof $attr139['__get__'] == 'function')?
						$p['getattr']($attr140, 'child'):
						self['child'])));
			return (($attr141=($attr142=self)['lastChild']) == null || (($attr142.__is_instance__) && typeof $attr141 == 'function') || (typeof $attr141['__get__'] == 'function')?
						$p['getattr']($attr142, 'lastChild'):
						self['lastChild']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['next'] = $method;
		$method = $pyjs__bind_method2('remove', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr143,$attr144;
			self['parent']['removeChild']((($attr143=($attr144=self)['lastChild']) == null || (($attr144.__is_instance__) && typeof $attr143 == 'function') || (typeof $attr143['__get__'] == 'function')?
						$p['getattr']($attr144, 'lastChild'):
						self['lastChild']));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('IterChildrenClass', $p['tuple']($bases), $data);
	})();
	$m['iterChildren'] = function(elem) {

		return $m['IterChildrenClass'](elem);
	};
	$m['iterChildren'].__name__ = 'iterChildren';

	$m['iterChildren'].__bind_type__ = 0;
	$m['iterChildren'].__args__ = [null,null,['elem']];
	$m['IterWalkChildren'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.DOM';
		$method = $pyjs__bind_method2('__init__', function(elem) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				elem = arguments[1];
			}

			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('parent', elem) : $p['setattr'](self, 'parent', elem);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('child', $m['getFirstChild'](elem)) : $p['setattr'](self, 'child', $m['getFirstChild'](elem));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('lastChild', null) : $p['setattr'](self, 'lastChild', null);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('stack', $p['list']([])) : $p['setattr'](self, 'stack', $p['list']([]));
			return null;
		}
	, 1, [null,null,['self'],['elem']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('next', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr155,$attr154,$attr157,$attr152,$attr146,$attr147,$attr153,$attr145,$attr159,$attr149,nextSibling,$attr158,firstChild,$attr160,$attr156,$attr151,$attr148,$attr150;
			if ($p['bool'](!$p['bool']((($attr145=($attr146=self)['child']) == null || (($attr146.__is_instance__) && typeof $attr145 == 'function') || (typeof $attr145['__get__'] == 'function')?
						$p['getattr']($attr146, 'child'):
						self['child'])))) {
				throw ($p['StopIteration']);
			}
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('lastChild', (($attr147=($attr148=self)['child']) == null || (($attr148.__is_instance__) && typeof $attr147 == 'function') || (typeof $attr147['__get__'] == 'function')?
						$p['getattr']($attr148, 'child'):
						self['child'])) : $p['setattr'](self, 'lastChild', (($attr147=($attr148=self)['child']) == null || (($attr148.__is_instance__) && typeof $attr147 == 'function') || (typeof $attr147['__get__'] == 'function')?
						$p['getattr']($attr148, 'child'):
						self['child']));
			firstChild = $m['getFirstChild']((($attr149=($attr150=self)['child']) == null || (($attr150.__is_instance__) && typeof $attr149 == 'function') || (typeof $attr149['__get__'] == 'function')?
						$p['getattr']($attr150, 'child'):
						self['child']));
			nextSibling = $m['getNextSibling']((($attr151=($attr152=self)['child']) == null || (($attr152.__is_instance__) && typeof $attr151 == 'function') || (typeof $attr151['__get__'] == 'function')?
						$p['getattr']($attr152, 'child'):
						self['child']));
			if ($p['bool']((firstChild !== null))) {
				if ($p['bool']((nextSibling !== null))) {
					self['stack']['append']($p['tuple']([nextSibling, (($attr153=($attr154=self)['parent']) == null || (($attr154.__is_instance__) && typeof $attr153 == 'function') || (typeof $attr153['__get__'] == 'function')?
								$p['getattr']($attr154, 'parent'):
								self['parent'])]));
				}
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('parent', (($attr155=($attr156=self)['child']) == null || (($attr156.__is_instance__) && typeof $attr155 == 'function') || (typeof $attr155['__get__'] == 'function')?
							$p['getattr']($attr156, 'child'):
							self['child'])) : $p['setattr'](self, 'parent', (($attr155=($attr156=self)['child']) == null || (($attr156.__is_instance__) && typeof $attr155 == 'function') || (typeof $attr155['__get__'] == 'function')?
							$p['getattr']($attr156, 'child'):
							self['child']));
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('child', firstChild) : $p['setattr'](self, 'child', firstChild);
			}
			else if ($p['bool']((nextSibling !== null))) {
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('child', nextSibling) : $p['setattr'](self, 'child', nextSibling);
			}
			else if ($p['bool'](($p['cmp']($p['len']((($attr157=($attr158=self)['stack']) == null || (($attr158.__is_instance__) && typeof $attr157 == 'function') || (typeof $attr157['__get__'] == 'function')?
						$p['getattr']($attr158, 'stack'):
						self['stack'])), 0) == 1))) {
				var $tupleassign1 = self['stack']['pop']();
				self.child = $tupleassign1.__getitem__(0);
				self.parent = $tupleassign1.__getitem__(1);
			}
			else {
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('child', null) : $p['setattr'](self, 'child', null);
			}
			return (($attr159=($attr160=self)['lastChild']) == null || (($attr160.__is_instance__) && typeof $attr159 == 'function') || (typeof $attr159['__get__'] == 'function')?
						$p['getattr']($attr160, 'lastChild'):
						self['lastChild']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['next'] = $method;
		$method = $pyjs__bind_method2('remove', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr161,$attr162;
			self['parent']['removeChild']((($attr161=($attr162=self)['lastChild']) == null || (($attr162.__is_instance__) && typeof $attr161 == 'function') || (typeof $attr161['__get__'] == 'function')?
						$p['getattr']($attr162, 'lastChild'):
						self['lastChild']));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('IterWalkChildren', $p['tuple']($bases), $data);
	})();
	$m['walkChildren'] = function(elem) {

		return $m['IterWalkChildren'](elem);
	};
	$m['walkChildren'].__name__ = 'walkChildren';

	$m['walkChildren'].__bind_type__ = 0;
	$m['walkChildren'].__args__ = [null,null,['elem']];
	$m['isOrHasChild'] = function(parent, child) {
		var $attr164,$attr165,$attr166,$attr163;
		while ($p['bool'](child)) {
			if ($p['bool']($m['compare'](parent, child))) {
				return true;
			}
			child = (($attr163=($attr164=child)['parentNode']) == null || (($attr164.__is_instance__) && typeof $attr163 == 'function') || (typeof $attr163['__get__'] == 'function')?
						$p['getattr']($attr164, 'parentNode'):
						child['parentNode']);
			if ($p['bool'](!$p['bool'](child))) {
				return false;
			}
			if ($p['bool'](!$p['op_eq']((($attr165=($attr166=child)['nodeType']) == null || (($attr166.__is_instance__) && typeof $attr165 == 'function') || (typeof $attr165['__get__'] == 'function')?
						$p['getattr']($attr166, 'nodeType'):
						child['nodeType']), 1))) {
				child = null;
			}
		}
		return false;
	};
	$m['isOrHasChild'].__name__ = 'isOrHasChild';

	$m['isOrHasChild'].__bind_type__ = 0;
	$m['isOrHasChild'].__args__ = [null,null,['parent'],['child']];
	$m['releaseCapture'] = function(elem) {
		var $and19,$and20;
		if ($p['bool'](($p['bool']($and19=$m['sCaptureElem'])?$m['compare'](elem, $m['sCaptureElem']):$and19))) {
			$m['sCaptureElem'] = null;
		}
		return null;
	};
	$m['releaseCapture'].__name__ = 'releaseCapture';

	$m['releaseCapture'].__bind_type__ = 0;
	$m['releaseCapture'].__args__ = [null,null,['elem']];
	$m['removeEventPreview'] = function(preview) {

		$m['sEventPreviewStack']['remove'](preview);
		return null;
	};
	$m['removeEventPreview'].__name__ = 'removeEventPreview';

	$m['removeEventPreview'].__bind_type__ = 0;
	$m['removeEventPreview'].__args__ = [null,null,['preview']];
	$m['getOffsetHeight'] = function(elem) {
		var $attr167,$attr168;
		return (($attr167=($attr168=elem)['offsetHeight']) == null || (($attr168.__is_instance__) && typeof $attr167 == 'function') || (typeof $attr167['__get__'] == 'function')?
					$p['getattr']($attr168, 'offsetHeight'):
					elem['offsetHeight']);
	};
	$m['getOffsetHeight'].__name__ = 'getOffsetHeight';

	$m['getOffsetHeight'].__bind_type__ = 0;
	$m['getOffsetHeight'].__args__ = [null,null,['elem']];
	$m['getOffsetWidth'] = function(elem) {
		var $attr170,$attr169;
		return (($attr169=($attr170=elem)['offsetWidth']) == null || (($attr170.__is_instance__) && typeof $attr169 == 'function') || (typeof $attr169['__get__'] == 'function')?
					$p['getattr']($attr170, 'offsetWidth'):
					elem['offsetWidth']);
	};
	$m['getOffsetWidth'].__name__ = 'getOffsetWidth';

	$m['getOffsetWidth'].__bind_type__ = 0;
	$m['getOffsetWidth'].__args__ = [null,null,['elem']];
	$m['scrollIntoView'] = function(elem) {
		var $attr191,$attr190,$attr193,$attr192,$attr195,$attr194,$attr197,$attr196,$attr199,$attr198,$sub20,$sub21,cur,offsetLeft,$sub23,$attr218,$attr219,$attr212,$attr213,$attr210,$attr211,$attr216,$attr217,$attr214,$attr215,$sub22,$and23,$and22,$and21,$and25,$and24,$attr221,$attr220,$attr209,$attr208,offsetTop,$attr205,$attr204,$attr207,$attr206,$attr201,$attr200,$attr203,$attr202,$sub19,$sub18,$sub13,$sub12,$sub11,$sub10,$sub17,$sub16,$sub15,$sub14,$attr229,$attr228,$attr179,$attr178,$attr177,$attr176,$attr175,$attr174,$attr173,$attr172,$attr171,height,top,width,$sub24,$add32,$add30,$add31,$attr234,$attr230,$attr231,$attr232,$attr233,$attr182,$add29,$add28,$add21,$add20,$attr183,$add22,$add25,$add24,$add27,$add26,$sub9,$attr227,$attr226,$attr225,$attr224,$attr223,$attr222,$attr188,$attr189,$attr186,$attr187,$attr184,$attr185,$or9,$or8,$attr180,$attr181,$add17,$add18,$add19,$add23,left;
		left = (($attr171=($attr172=elem)['offsetLeft']) == null || (($attr172.__is_instance__) && typeof $attr171 == 'function') || (typeof $attr171['__get__'] == 'function')?
					$p['getattr']($attr172, 'offsetLeft'):
					elem['offsetLeft']);
		top = (($attr173=($attr174=elem)['offsetTop']) == null || (($attr174.__is_instance__) && typeof $attr173 == 'function') || (typeof $attr173['__get__'] == 'function')?
					$p['getattr']($attr174, 'offsetTop'):
					elem['offsetTop']);
		width = (($attr175=($attr176=elem)['offsetWidth']) == null || (($attr176.__is_instance__) && typeof $attr175 == 'function') || (typeof $attr175['__get__'] == 'function')?
					$p['getattr']($attr176, 'offsetWidth'):
					elem['offsetWidth']);
		height = (($attr177=($attr178=elem)['offsetHeight']) == null || (($attr178.__is_instance__) && typeof $attr177 == 'function') || (typeof $attr177['__get__'] == 'function')?
					$p['getattr']($attr178, 'offsetHeight'):
					elem['offsetHeight']);
		if ($p['bool'](!$p['op_eq']((($attr179=($attr180=elem)['parentNode']) == null || (($attr180.__is_instance__) && typeof $attr179 == 'function') || (typeof $attr179['__get__'] == 'function')?
					$p['getattr']($attr180, 'parentNode'):
					elem['parentNode']), (($attr181=($attr182=elem)['offsetParent']) == null || (($attr182.__is_instance__) && typeof $attr181 == 'function') || (typeof $attr181['__get__'] == 'function')?
					$p['getattr']($attr182, 'offsetParent'):
					elem['offsetParent'])))) {
			left = $p['__op_sub']($sub9=left,$sub10=(($attr183=($attr184=elem['parentNode'])['offsetLeft']) == null || (($attr184.__is_instance__) && typeof $attr183 == 'function') || (typeof $attr183['__get__'] == 'function')?
						$p['getattr']($attr184, 'offsetLeft'):
						elem['parentNode']['offsetLeft']));
			top = $p['__op_sub']($sub11=top,$sub12=(($attr185=($attr186=elem['parentNode'])['offsetTop']) == null || (($attr186.__is_instance__) && typeof $attr185 == 'function') || (typeof $attr185['__get__'] == 'function')?
						$p['getattr']($attr186, 'offsetTop'):
						elem['parentNode']['offsetTop']));
		}
		cur = (($attr187=($attr188=elem)['parentNode']) == null || (($attr188.__is_instance__) && typeof $attr187 == 'function') || (typeof $attr187['__get__'] == 'function')?
					$p['getattr']($attr188, 'parentNode'):
					elem['parentNode']);
		while ($p['bool'](($p['bool']($and21=cur)?$p['op_eq']((($attr189=($attr190=cur)['nodeType']) == null || (($attr190.__is_instance__) && typeof $attr189 == 'function') || (typeof $attr189['__get__'] == 'function')?
					$p['getattr']($attr190, 'nodeType'):
					cur['nodeType']), 1):$and21))) {
			if ($p['bool'](($p['bool']($and23=$p['hasattr'](cur, 'style'))?($p['bool']($and24=$p['hasattr']((($attr191=($attr192=cur)['style']) == null || (($attr192.__is_instance__) && typeof $attr191 == 'function') || (typeof $attr191['__get__'] == 'function')?
						$p['getattr']($attr192, 'style'):
						cur['style']), 'overflow'))?($p['bool']($or8=$p['op_eq']((($attr193=($attr194=cur['style'])['overflow']) == null || (($attr194.__is_instance__) && typeof $attr193 == 'function') || (typeof $attr193['__get__'] == 'function')?
						$p['getattr']($attr194, 'overflow'):
						cur['style']['overflow']), 'auto'))?$or8:$p['op_eq']((($attr195=($attr196=cur['style'])['overflow']) == null || (($attr196.__is_instance__) && typeof $attr195 == 'function') || (typeof $attr195['__get__'] == 'function')?
						$p['getattr']($attr196, 'overflow'):
						cur['style']['overflow']), 'scroll')):$and24):$and23))) {
				if ($p['bool'](($p['cmp'](left, (($attr197=($attr198=cur)['scrollLeft']) == null || (($attr198.__is_instance__) && typeof $attr197 == 'function') || (typeof $attr197['__get__'] == 'function')?
							$p['getattr']($attr198, 'scrollLeft'):
							cur['scrollLeft'])) == -1))) {
					cur.__is_instance__ && typeof cur.__setattr__ == 'function' ? cur.__setattr__('scrollLeft', left) : $p['setattr'](cur, 'scrollLeft', left);
				}
				if ($p['bool'](($p['cmp']($p['__op_add']($add17=left,$add18=width), $p['__op_add']($add19=(($attr199=($attr200=cur)['scrollLeft']) == null || (($attr200.__is_instance__) && typeof $attr199 == 'function') || (typeof $attr199['__get__'] == 'function')?
							$p['getattr']($attr200, 'scrollLeft'):
							cur['scrollLeft']),$add20=(($attr201=($attr202=cur)['clientWidth']) == null || (($attr202.__is_instance__) && typeof $attr201 == 'function') || (typeof $attr201['__get__'] == 'function')?
							$p['getattr']($attr202, 'clientWidth'):
							cur['clientWidth']))) == 1))) {
					cur.__is_instance__ && typeof cur.__setattr__ == 'function' ? cur.__setattr__('scrollLeft', $p['__op_sub']($sub13=$p['__op_add']($add21=left,$add22=width),$sub14=(($attr203=($attr204=cur)['clientWidth']) == null || (($attr204.__is_instance__) && typeof $attr203 == 'function') || (typeof $attr203['__get__'] == 'function')?
								$p['getattr']($attr204, 'clientWidth'):
								cur['clientWidth']))) : $p['setattr'](cur, 'scrollLeft', $p['__op_sub']($sub13=$p['__op_add']($add21=left,$add22=width),$sub14=(($attr203=($attr204=cur)['clientWidth']) == null || (($attr204.__is_instance__) && typeof $attr203 == 'function') || (typeof $attr203['__get__'] == 'function')?
								$p['getattr']($attr204, 'clientWidth'):
								cur['clientWidth'])));
				}
				if ($p['bool'](($p['cmp'](top, (($attr205=($attr206=cur)['scrollTop']) == null || (($attr206.__is_instance__) && typeof $attr205 == 'function') || (typeof $attr205['__get__'] == 'function')?
							$p['getattr']($attr206, 'scrollTop'):
							cur['scrollTop'])) == -1))) {
					cur.__is_instance__ && typeof cur.__setattr__ == 'function' ? cur.__setattr__('scrollTop', top) : $p['setattr'](cur, 'scrollTop', top);
				}
				if ($p['bool'](($p['cmp']($p['__op_add']($add23=top,$add24=height), $p['__op_add']($add25=(($attr207=($attr208=cur)['scrollTop']) == null || (($attr208.__is_instance__) && typeof $attr207 == 'function') || (typeof $attr207['__get__'] == 'function')?
							$p['getattr']($attr208, 'scrollTop'):
							cur['scrollTop']),$add26=(($attr209=($attr210=cur)['clientHeight']) == null || (($attr210.__is_instance__) && typeof $attr209 == 'function') || (typeof $attr209['__get__'] == 'function')?
							$p['getattr']($attr210, 'clientHeight'):
							cur['clientHeight']))) == 1))) {
					cur.__is_instance__ && typeof cur.__setattr__ == 'function' ? cur.__setattr__('scrollTop', $p['__op_sub']($sub15=$p['__op_add']($add27=top,$add28=height),$sub16=(($attr211=($attr212=cur)['clientHeight']) == null || (($attr212.__is_instance__) && typeof $attr211 == 'function') || (typeof $attr211['__get__'] == 'function')?
								$p['getattr']($attr212, 'clientHeight'):
								cur['clientHeight']))) : $p['setattr'](cur, 'scrollTop', $p['__op_sub']($sub15=$p['__op_add']($add27=top,$add28=height),$sub16=(($attr211=($attr212=cur)['clientHeight']) == null || (($attr212.__is_instance__) && typeof $attr211 == 'function') || (typeof $attr211['__get__'] == 'function')?
								$p['getattr']($attr212, 'clientHeight'):
								cur['clientHeight'])));
				}
			}
			offsetLeft = (($attr213=($attr214=cur)['offsetLeft']) == null || (($attr214.__is_instance__) && typeof $attr213 == 'function') || (typeof $attr213['__get__'] == 'function')?
						$p['getattr']($attr214, 'offsetLeft'):
						cur['offsetLeft']);
			offsetTop = (($attr215=($attr216=cur)['offsetTop']) == null || (($attr216.__is_instance__) && typeof $attr215 == 'function') || (typeof $attr215['__get__'] == 'function')?
						$p['getattr']($attr216, 'offsetTop'):
						cur['offsetTop']);
			if ($p['bool'](!$p['op_eq']((($attr217=($attr218=cur)['parentNode']) == null || (($attr218.__is_instance__) && typeof $attr217 == 'function') || (typeof $attr217['__get__'] == 'function')?
						$p['getattr']($attr218, 'parentNode'):
						cur['parentNode']), (($attr219=($attr220=cur)['offsetParent']) == null || (($attr220.__is_instance__) && typeof $attr219 == 'function') || (typeof $attr219['__get__'] == 'function')?
						$p['getattr']($attr220, 'offsetParent'):
						cur['offsetParent'])))) {
				if ($p['bool']($p['hasattr']((($attr221=($attr222=cur)['parentNode']) == null || (($attr222.__is_instance__) && typeof $attr221 == 'function') || (typeof $attr221['__get__'] == 'function')?
							$p['getattr']($attr222, 'parentNode'):
							cur['parentNode']), 'offsetLeft'))) {
					offsetLeft = $p['__op_sub']($sub17=offsetLeft,$sub18=(($attr223=($attr224=cur['parentNode'])['offsetLeft']) == null || (($attr224.__is_instance__) && typeof $attr223 == 'function') || (typeof $attr223['__get__'] == 'function')?
								$p['getattr']($attr224, 'offsetLeft'):
								cur['parentNode']['offsetLeft']));
				}
				if ($p['bool']($p['hasattr']((($attr225=($attr226=cur)['parentNode']) == null || (($attr226.__is_instance__) && typeof $attr225 == 'function') || (typeof $attr225['__get__'] == 'function')?
							$p['getattr']($attr226, 'parentNode'):
							cur['parentNode']), 'offsetTop'))) {
					offsetTop = $p['__op_sub']($sub19=offsetTop,$sub20=(($attr227=($attr228=cur['parentNode'])['offsetTop']) == null || (($attr228.__is_instance__) && typeof $attr227 == 'function') || (typeof $attr227['__get__'] == 'function')?
								$p['getattr']($attr228, 'offsetTop'):
								cur['parentNode']['offsetTop']));
				}
			}
			left = $p['__op_add']($add29=left,$add30=$p['__op_sub']($sub21=offsetLeft,$sub22=(($attr229=($attr230=cur)['scrollLeft']) == null || (($attr230.__is_instance__) && typeof $attr229 == 'function') || (typeof $attr229['__get__'] == 'function')?
						$p['getattr']($attr230, 'scrollLeft'):
						cur['scrollLeft'])));
			top = $p['__op_add']($add31=top,$add32=$p['__op_sub']($sub23=offsetTop,$sub24=(($attr231=($attr232=cur)['scrollTop']) == null || (($attr232.__is_instance__) && typeof $attr231 == 'function') || (typeof $attr231['__get__'] == 'function')?
						$p['getattr']($attr232, 'scrollTop'):
						cur['scrollTop'])));
			cur = (($attr233=($attr234=cur)['parentNode']) == null || (($attr234.__is_instance__) && typeof $attr233 == 'function') || (typeof $attr233['__get__'] == 'function')?
						$p['getattr']($attr234, 'parentNode'):
						cur['parentNode']);
		}
		return null;
	};
	$m['scrollIntoView'].__name__ = 'scrollIntoView';

	$m['scrollIntoView'].__bind_type__ = 0;
	$m['scrollIntoView'].__args__ = [null,null,['elem']];
	$m['mash_name_for_glib'] = function(name, joiner) {
		if (typeof joiner == 'undefined') joiner=arguments.callee.__args__[3][1];
		var c,$add35,$iter1_nextval,$iter1_idx,res,$add36,$add37,$add34,$iter1_iter,$iter1_array,$add33,$add38,$iter1_type;
		res = '';
		$iter1_iter = name;
		$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
		while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
			c = $iter1_nextval.$nextval;
			if ($p['bool'](c['isupper']())) {
				res = $p['__op_add']($add35=res,$add36=$p['__op_add']($add33=joiner,$add34=c['lower']()));
			}
			else {
				res = $p['__op_add']($add37=res,$add38=c);
			}
		}
		return res;
	};
	$m['mash_name_for_glib'].__name__ = 'mash_name_for_glib';

	$m['mash_name_for_glib'].__bind_type__ = 0;
	$m['mash_name_for_glib'].__args__ = [null,null,['name'],['joiner', '-']];
	$m['removeAttribute'] = function(element, attribute) {

		element['removeAttribute'](attribute);
		return null;
	};
	$m['removeAttribute'].__name__ = 'removeAttribute';

	$m['removeAttribute'].__bind_type__ = 0;
	$m['removeAttribute'].__args__ = [null,null,['element'],['attribute']];
	$m['setAttribute'] = function(element, attribute, value) {

		$p['setattr'](element, attribute, value);
		return null;
	};
	$m['setAttribute'].__name__ = 'setAttribute';

	$m['setAttribute'].__bind_type__ = 0;
	$m['setAttribute'].__args__ = [null,null,['element'],['attribute'],['value']];
	$m['setElemAttribute'] = function(element, attribute, value) {

		element['setAttribute'](attribute, value);
		return null;
	};
	$m['setElemAttribute'].__name__ = 'setElemAttribute';

	$m['setElemAttribute'].__bind_type__ = 0;
	$m['setElemAttribute'].__args__ = [null,null,['element'],['attribute'],['value']];
	$m['setBooleanAttribute'] = function(elem, attr, value) {
		var mf;
		mf = (typeof get_main_frame == "undefined"?$m.get_main_frame:get_main_frame)();
		$p['setattr'](elem, mf['mash_attrib'](attr), value);
		return null;
	};
	$m['setBooleanAttribute'].__name__ = 'setBooleanAttribute';

	$m['setBooleanAttribute'].__bind_type__ = 0;
	$m['setBooleanAttribute'].__args__ = [null,null,['elem'],['attr'],['value']];
	$m['setCapture'] = function(elem) {

		$m['sCaptureElem'] = elem;
		return null;
	};
	$m['setCapture'].__name__ = 'setCapture';

	$m['setCapture'].__bind_type__ = 0;
	$m['setCapture'].__args__ = [null,null,['elem']];
	$m['setEventListener'] = function(element, listener) {

		$m['set_listener'](element, listener);
		return null;
	};
	$m['setEventListener'].__name__ = 'setEventListener';

	$m['setEventListener'].__bind_type__ = 0;
	$m['setEventListener'].__args__ = [null,null,['element'],['listener']];
	$m['createTextNode'] = function(txt) {

		return $doc['createTextNode'](txt);
	};
	$m['createTextNode'].__name__ = 'createTextNode';

	$m['createTextNode'].__bind_type__ = 0;
	$m['createTextNode'].__args__ = [null,null,['txt']];
	$m['setInnerHTML'] = function(element, html) {
		var $pyjs_try_err;
		try {
			element.__is_instance__ && typeof element.__setattr__ == 'function' ? element.__setattr__('innerHtml', html) : $p['setattr'](element, 'innerHtml', html);
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
			if (true) {
				element.__is_instance__ && typeof element.__setattr__ == 'function' ? element.__setattr__('innerHTML', html) : $p['setattr'](element, 'innerHTML', html);
			}
		}
		return null;
	};
	$m['setInnerHTML'].__name__ = 'setInnerHTML';

	$m['setInnerHTML'].__bind_type__ = 0;
	$m['setInnerHTML'].__args__ = [null,null,['element'],['html']];
	$m['setInnerText'] = function(elem, text) {
		var $attr235,$attr236,$attr237,$attr238,$or11,$or10;
		while ($p['bool'](((($attr235=($attr236=elem)['firstChild']) == null || (($attr236.__is_instance__) && typeof $attr235 == 'function') || (typeof $attr235['__get__'] == 'function')?
					$p['getattr']($attr236, 'firstChild'):
					elem['firstChild']) !== null))) {
			elem['removeChild']((($attr237=($attr238=elem)['firstChild']) == null || (($attr238.__is_instance__) && typeof $attr237 == 'function') || (typeof $attr237['__get__'] == 'function')?
						$p['getattr']($attr238, 'firstChild'):
						elem['firstChild']));
		}
		elem['appendChild']($m['createTextNode'](($p['bool']($or10=text)?$or10:'')));
		return null;
	};
	$m['setInnerText'].__name__ = 'setInnerText';

	$m['setInnerText'].__bind_type__ = 0;
	$m['setInnerText'].__args__ = [null,null,['elem'],['text']];
	$m['setIntElemAttribute'] = function(elem, attr, value) {

		elem['setAttribute'](attr, $p['str'](value));
		return null;
	};
	$m['setIntElemAttribute'].__name__ = 'setIntElemAttribute';

	$m['setIntElemAttribute'].__bind_type__ = 0;
	$m['setIntElemAttribute'].__args__ = [null,null,['elem'],['attr'],['value']];
	$m['setIntAttribute'] = function(elem, attr, value) {

		$p['setattr'](elem, attr, $p['float_int'](value));
		return null;
	};
	$m['setIntAttribute'].__name__ = 'setIntAttribute';

	$m['setIntAttribute'].__bind_type__ = 0;
	$m['setIntAttribute'].__args__ = [null,null,['elem'],['attr'],['value']];
	$m['setIntStyleAttribute'] = function(elem, attr, value) {
		var $attr240,mf,$attr239;
		mf = (typeof get_main_frame == "undefined"?$m.get_main_frame:get_main_frame)();
		if ($p['bool']($p['hasattr']((($attr239=($attr240=elem)['style']) == null || (($attr240.__is_instance__) && typeof $attr239 == 'function') || (typeof $attr239['__get__'] == 'function')?
					$p['getattr']($attr240, 'style'):
					elem['style']), 'setProperty'))) {
			elem['style']['setProperty'](mf['mash_attrib'](attr), $p['str'](value), '');
		}
		else {
			elem['style']['setAttribute'](mf['mash_attrib'](attr), $p['str'](value), '');
		}
		return null;
	};
	$m['setIntStyleAttribute'].__name__ = 'setIntStyleAttribute';

	$m['setIntStyleAttribute'].__bind_type__ = 0;
	$m['setIntStyleAttribute'].__args__ = [null,null,['elem'],['attr'],['value']];
	$m['setOptionText'] = function(select, text, index) {
		var option;
		option = select['options']['item'](index);
		option.__is_instance__ && typeof option.__setattr__ == 'function' ? option.__setattr__('textContent', text) : $p['setattr'](option, 'textContent', text);
		return null;
	};
	$m['setOptionText'].__name__ = 'setOptionText';

	$m['setOptionText'].__bind_type__ = 0;
	$m['setOptionText'].__args__ = [null,null,['select'],['text'],['index']];
	$m['setStyleAttribute'] = function(element, name, value) {
		var $attr241,$attr242;
		if ($p['bool']($p['hasattr']((($attr241=($attr242=element)['style']) == null || (($attr242.__is_instance__) && typeof $attr241 == 'function') || (typeof $attr241['__get__'] == 'function')?
					$p['getattr']($attr242, 'style'):
					element['style']), 'setProperty'))) {
			element['style']['setProperty']($m['mash_name_for_glib'](name), value, '');
		}
		else {
			element['style']['setAttribute'](name, value, '');
		}
		return null;
	};
	$m['setStyleAttribute'].__name__ = 'setStyleAttribute';

	$m['setStyleAttribute'].__bind_type__ = 0;
	$m['setStyleAttribute'].__args__ = [null,null,['element'],['name'],['value']];
	$m['sinkEvents'] = function(element, bits) {
		var $attr243,mf,$attr245,$attr244,$iter2_iter,aev,event_name,cb,$attr246,mask,$iter2_idx,$iter2_nextval,$attr247,$attr248,$iter2_type,bit,$iter2_array;
		mask = ($m['getEventsSunk'](element))^(bits);
		$m['eventbitsmap'].__setitem__(element, bits);
		if ($p['bool'](!$p['bool'](mask))) {
			return null;
		}
		bits = mask;
		if ($p['bool'](!$p['bool'](bits))) {
			return null;
		}
		mf = (typeof get_main_frame == "undefined"?$m.get_main_frame:get_main_frame)();
		if ($p['bool']($p['hasattr'](mf, '_addEventListener'))) {
			aev = (($attr243=($attr244=mf)['_addEventListener']) == null || (($attr244.__is_instance__) && typeof $attr243 == 'function') || (typeof $attr243['__get__'] == 'function')?
						$p['getattr']($attr244, '_addEventListener'):
						mf['_addEventListener']);
		}
		else {
			aev = (($attr245=($attr246=mf)['addEventListener']) == null || (($attr246.__is_instance__) && typeof $attr245 == 'function') || (typeof $attr245['__get__'] == 'function')?
						$p['getattr']($attr246, 'addEventListener'):
						mf['addEventListener']);
		}
		cb = $m['_dispatchEvent'];
		(typeof sinkEventsMozilla == "undefined"?$m.sinkEventsMozilla:sinkEventsMozilla)(element, bits);
		bit = 1;
		while ($p['bool'](bits)) {
			if ($p['bool'](($p['cmp'](bit, bits) == 1))) {
				throw ($p['RuntimeError']('sinkEvents: bit outruns bits'));
			}
			if ($p['bool']((bits)&(bit))) {
				$iter2_iter = (($attr247=($attr248=$m['Event'])['eventbits']) == null || (($attr248.__is_instance__) && typeof $attr247 == 'function') || (typeof $attr247['__get__'] == 'function')?
							$p['getattr']($attr248, 'eventbits'):
							$m['Event']['eventbits']).__getitem__(bit).__getitem__(1);
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
					event_name = $iter2_nextval.$nextval;
					aev(element, event_name, cb);
				}
				bits ^= bit;
			}
			bit <<= 1;
		}
		return null;
	};
	$m['sinkEvents'].__name__ = 'sinkEvents';

	$m['sinkEvents'].__bind_type__ = 0;
	$m['sinkEvents'].__args__ = [null,null,['element'],['bits']];
	$m['sinkEventsMozilla'] = function(element, bits) {

 		return null;
	};
	$m['sinkEventsMozilla'].__name__ = 'sinkEventsMozilla';

	$m['sinkEventsMozilla'].__bind_type__ = 0;
	$m['sinkEventsMozilla'].__args__ = [null,null,['element'],['bits']];
	$m['toString'] = function(elem) {
		var outer,tempDiv,temp;
		temp = elem['cloneNode'](true);
		tempDiv = $m['createDiv']();
		tempDiv['appendChild'](temp);
		outer = $m['getInnerHTML'](tempDiv);
		$m['setInnerHTML'](temp, '');
		return outer;
	};
	$m['toString'].__name__ = 'toString';

	$m['toString'].__bind_type__ = 0;
	$m['toString'].__args__ = [null,null,['elem']];
	$m['dispatchEvent'] = function(event, element, listener) {

		(typeof dispatchEventImpl == "undefined"?$m.dispatchEventImpl:dispatchEventImpl)(event, element, listener);
		return null;
	};
	$m['dispatchEvent'].__name__ = 'dispatchEvent';

	$m['dispatchEvent'].__bind_type__ = 0;
	$m['dispatchEvent'].__args__ = [null,null,['event'],['element'],['listener']];
	$m['previewEvent'] = function(evt) {
		var preview,ret;
		if ($p['bool']($p['op_eq']($p['len']($m['sEventPreviewStack']), 0))) {
			return true;
		}
		preview = $m['sEventPreviewStack'].__getitem__((typeof ($usub2=1)=='number'?
			-$usub2:
			$p['op_usub']($usub2)));
		ret = preview['onEventPreview'](evt);
		if ($p['bool'](ret)) {
			return true;
		}
		if ($p['bool'](evt)) {
			$m['eventCancelBubble'](evt, true);
			$m['eventPreventDefault'](evt);
		}
		return ret;
	};
	$m['previewEvent'].__name__ = 'previewEvent';

	$m['previewEvent'].__bind_type__ = 0;
	$m['previewEvent'].__args__ = [null,null,['evt']];
	$m['dispatchEventAndCatch'] = function(evt, elem, listener, handler) {

 		return null;
	};
	$m['dispatchEventAndCatch'].__name__ = 'dispatchEventAndCatch';

	$m['dispatchEventAndCatch'].__bind_type__ = 0;
	$m['dispatchEventAndCatch'].__args__ = [null,null,['evt'],['elem'],['listener'],['handler']];
	$m['currentEvent'] = null;
	$m['dispatchEventImpl'] = function(event, element, listener) {
		var prevCurrentEvent;
		if ($p['bool']($p['op_eq'](element, $m['sCaptureElem']))) {
			if ($p['bool']($p['op_eq']($m['eventGetType'](event), 'losecapture'))) {
				$m['sCaptureElem'] = null;
			}
		}
		prevCurrentEvent = $m['currentEvent'];
		$m['currentEvent'] = event;
		listener['onBrowserEvent'](event);
		$m['currentEvent'] = prevCurrentEvent;
		return null;
	};
	$m['dispatchEventImpl'].__name__ = 'dispatchEventImpl';

	$m['dispatchEventImpl'].__bind_type__ = 0;
	$m['dispatchEventImpl'].__args__ = [null,null,['event'],['element'],['listener']];
	$m['eventGetCurrentEvent'] = function() {

		return $m['currentEvent'];
	};
	$m['eventGetCurrentEvent'].__name__ = 'eventGetCurrentEvent';

	$m['eventGetCurrentEvent'].__bind_type__ = 0;
	$m['eventGetCurrentEvent'].__args__ = [null,null];
	$m['insertListItem'] = function(select, item, value, index) {
		var option;
		option = $m['createElement']('OPTION');
		$m['setInnerText'](option, item);
		if ($p['bool']((value !== null))) {
			$m['setAttribute'](option, 'value', value);
		}
		if ($p['bool']($p['op_eq'](index, (typeof ($usub3=1)=='number'?
			-$usub3:
			$p['op_usub']($usub3))))) {
			$m['appendChild'](select, option);
		}
		else {
			$m['insertChild'](select, option, index);
		}
		return null;
	};
	$m['insertListItem'].__name__ = 'insertListItem';

	$m['insertListItem'].__bind_type__ = 0;
	$m['insertListItem'].__args__ = [null,null,['select'],['item'],['value'],['index']];
	$m['getBodyOffsetTop'] = function() {

		return 0;
	};
	$m['getBodyOffsetTop'].__name__ = 'getBodyOffsetTop';

	$m['getBodyOffsetTop'].__bind_type__ = 0;
	$m['getBodyOffsetTop'].__args__ = [null,null];
	$m['getBodyOffsetLeft'] = function() {

		return 0;
	};
	$m['getBodyOffsetLeft'].__name__ = 'getBodyOffsetLeft';

	$m['getBodyOffsetLeft'].__bind_type__ = 0;
	$m['getBodyOffsetLeft'].__args__ = [null,null];
	$m['eventGetMouseWheelVelocityY'] = function(evt) {

 		return null;
	};
	$m['eventGetMouseWheelVelocityY'].__name__ = 'eventGetMouseWheelVelocityY';

	$m['eventGetMouseWheelVelocityY'].__bind_type__ = 0;
	$m['eventGetMouseWheelVelocityY'].__args__ = [null,null,['evt']];
	if ($p['bool'](!$p['bool']((($attr249=($attr250=$m['pyjd'])['is_desktop']) == null || (($attr250.__is_instance__) && typeof $attr249 == 'function') || (typeof $attr249['__get__'] == 'function')?
				$p['getattr']($attr250, 'is_desktop'):
				$m['pyjd']['is_desktop'])))) {
		$m['init']();
	}
	return this;
}; /* end gwt.DOM */


/* end module: gwt.DOM */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.Window.onResize', 'pyjamas', 'pyjamas.Window', 'pyjamas.Window.onClosing', 'pyjamas.Window.onClosed', 'pyjamas.ui.Event', 'pyjamas.ui', 'pyjamas.ui.Event.ONBLUR', 'pyjamas.ui.Event.ONCHANGE', 'pyjamas.ui.Event.ONCLICK', 'pyjamas.ui.Event.ONCONTEXTMENU', 'pyjamas.ui.Event.ONDBLCLICK', 'pyjamas.ui.Event.ONERROR', 'pyjamas.ui.Event.ONFOCUS', 'pyjamas.ui.Event.ONKEYDOWN', 'pyjamas.ui.Event.ONKEYPRESS', 'pyjamas.ui.Event.ONKEYUP', 'pyjamas.ui.Event.ONLOAD', 'pyjamas.ui.Event.ONLOSECAPTURE', 'pyjamas.ui.Event.ONMOUSEDOWN', 'pyjamas.ui.Event.ONMOUSEMOVE', 'pyjamas.ui.Event.ONMOUSEOUT', 'pyjamas.ui.Event.ONMOUSEOVER', 'pyjamas.ui.Event.ONMOUSEUP', 'pyjamas.ui.Event.ONSCROLL', 'pyjamas.ui.Event.ONINPUT']
*/
