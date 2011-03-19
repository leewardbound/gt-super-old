/* start module: gwt.Window */
$pyjs.loaded_modules['gwt.Window'] = function (__mod_name__) {
	if($pyjs.loaded_modules['gwt.Window'].__was_initialized__) return $pyjs.loaded_modules['gwt.Window'];
	if(typeof $pyjs.loaded_modules['gwt'] == 'undefined' || !$pyjs.loaded_modules['gwt'].__was_initialized__) $p['___import___']('gwt', null);
	var $m = $pyjs.loaded_modules["gwt.Window"];
	$m.__repr__ = function() { return "<module: gwt.Window>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'gwt.Window';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['gwt']['Window'] = $pyjs.loaded_modules['gwt.Window'];


	$m['closingListeners'] = $p['list']([]);
	$m['resizeListeners'] = $p['list']([]);
	$m['Location'] = $p['___import___']('pyjamas.Location', 'gwt', null, false);
	$m['init_listeners'] = function() {

		if ($p['bool'](!$p['bool']($m['closingListeners']))) {
			$m['closingListeners'] = $p['list']([]);
		}
		if ($p['bool'](!$p['bool']($m['resizeListeners']))) {
			$m['resizeListeners'] = $p['list']([]);
		}
		return null;
	};
	$m['init_listeners'].__name__ = 'init_listeners';

	$m['init_listeners'].__bind_type__ = 0;
	$m['init_listeners'].__args__ = [null,null];
	$m['addWindowCloseListener'] = function(listener) {

		$m['closingListeners']['append'](listener);
		return null;
	};
	$m['addWindowCloseListener'].__name__ = 'addWindowCloseListener';

	$m['addWindowCloseListener'].__bind_type__ = 0;
	$m['addWindowCloseListener'].__args__ = [null,null,['listener']];
	$m['addWindowResizeListener'] = function(listener) {

		$m['resizeListeners']['append'](listener);
		return null;
	};
	$m['addWindowResizeListener'].__name__ = 'addWindowResizeListener';

	$m['addWindowResizeListener'].__bind_type__ = 0;
	$m['addWindowResizeListener'].__args__ = [null,null,['listener']];
	$m['removeWindowCloseListener'] = function(listener) {

		$m['closingListeners']['remove'](listener);
		return null;
	};
	$m['removeWindowCloseListener'].__name__ = 'removeWindowCloseListener';

	$m['removeWindowCloseListener'].__bind_type__ = 0;
	$m['removeWindowCloseListener'].__args__ = [null,null,['listener']];
	$m['removeWindowResizeListener'] = function(listener) {

		$m['resizeListeners']['remove'](listener);
		return null;
	};
	$m['removeWindowResizeListener'].__name__ = 'removeWindowResizeListener';

	$m['removeWindowResizeListener'].__bind_type__ = 0;
	$m['removeWindowResizeListener'].__args__ = [null,null,['listener']];
	$m['alert'] = function(msg) {

		$wnd['alert'](msg);
		return null;
	};
	$m['alert'].__name__ = 'alert';

	$m['alert'].__bind_type__ = 0;
	$m['alert'].__args__ = [null,null,['msg']];
	$m['confirm'] = function(msg) {

		return $wnd['confirm'](msg);
	};
	$m['confirm'].__name__ = 'confirm';

	$m['confirm'].__bind_type__ = 0;
	$m['confirm'].__args__ = [null,null,['msg']];
	$m['prompt'] = function(msg, defaultReply) {
		if (typeof defaultReply == 'undefined') defaultReply=arguments.callee.__args__[3][1];

		return $wnd['prompt'](msg, defaultReply);
	};
	$m['prompt'].__name__ = 'prompt';

	$m['prompt'].__bind_type__ = 0;
	$m['prompt'].__args__ = [null,null,['msg'],['defaultReply', '']];
	$m['enableScrolling'] = function(enable) {
		var $and1,$and2,$or1,$or2;
		$doc['body']['style'].__is_instance__ && typeof $doc['body']['style'].__setattr__ == 'function' ? $doc['body']['style'].__setattr__('overflow', ($p['bool']($or1=($p['bool']($and1=enable)?'auto':$and1))?$or1:'hidden')) : $p['setattr']($doc['body']['style'], 'overflow', ($p['bool']($or1=($p['bool']($and1=enable)?'auto':$and1))?$or1:'hidden'));
		return null;
	};
	$m['enableScrolling'].__name__ = 'enableScrolling';

	$m['enableScrolling'].__bind_type__ = 0;
	$m['enableScrolling'].__args__ = [null,null,['enable']];
	$m['scrollBy'] = function(x, y) {

		$wnd['scrollBy'](x, y);
		return null;
	};
	$m['scrollBy'].__name__ = 'scrollBy';

	$m['scrollBy'].__bind_type__ = 0;
	$m['scrollBy'].__args__ = [null,null,['x'],['y']];
	$m['scroll'] = function(x, y) {

		$wnd['scroll'](x, y);
		return null;
	};
	$m['scroll'].__name__ = 'scroll';

	$m['scroll'].__bind_type__ = 0;
	$m['scroll'].__args__ = [null,null,['x'],['y']];
	$m['getClientHeight'] = function() {

		return $wnd.innerHeight;
	};
	$m['getClientHeight'].__name__ = 'getClientHeight';

	$m['getClientHeight'].__bind_type__ = 0;
	$m['getClientHeight'].__args__ = [null,null];
	$m['getClientWidth'] = function() {

		return $wnd.innerWidth;
	};
	$m['getClientWidth'].__name__ = 'getClientWidth';

	$m['getClientWidth'].__bind_type__ = 0;
	$m['getClientWidth'].__args__ = [null,null];
	$m['getScrollLeft'] = function() {
		var $attr1,$attr2;
		return (($attr1=($attr2=$m.getDocumentRoot())['scrollLeft']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
					$p['getattr']($attr2, 'scrollLeft'):
					$m.getDocumentRoot()['scrollLeft']);
		return null;
	};
	$m['getScrollLeft'].__name__ = 'getScrollLeft';

	$m['getScrollLeft'].__bind_type__ = 0;
	$m['getScrollLeft'].__args__ = [null,null];
	$m['getScrollTop'] = function() {
		var $attr3,$attr4;
		return (($attr3=($attr4=$m.getDocumentRoot())['scrollTop']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
					$p['getattr']($attr4, 'scrollTop'):
					$m.getDocumentRoot()['scrollTop']);
		return null;
	};
	$m['getScrollTop'].__name__ = 'getScrollTop';

	$m['getScrollTop'].__bind_type__ = 0;
	$m['getScrollTop'].__args__ = [null,null];
	$m['getDocumentRoot'] = function() {
		var $attr9,$attr8,$attr5,$attr7,$attr6,$attr10;
		if ($p['bool']($p['op_eq']((($attr5=($attr6=$doc)['compatMode']) == null || (($attr6.__is_instance__) && typeof $attr5 == 'function') || (typeof $attr5['__get__'] == 'function')?
					$p['getattr']($attr6, 'compatMode'):
					$doc['compatMode']), 'CSS1Compat'))) {
			return (($attr7=($attr8=$doc)['documentElement']) == null || (($attr8.__is_instance__) && typeof $attr7 == 'function') || (typeof $attr7['__get__'] == 'function')?
						$p['getattr']($attr8, 'documentElement'):
						$doc['documentElement']);
		}
		return (($attr9=($attr10=$doc)['body']) == null || (($attr10.__is_instance__) && typeof $attr9 == 'function') || (typeof $attr9['__get__'] == 'function')?
					$p['getattr']($attr10, 'body'):
					$doc['body']);
	};
	$m['getDocumentRoot'].__name__ = 'getDocumentRoot';

	$m['getDocumentRoot'].__bind_type__ = 0;
	$m['getDocumentRoot'].__args__ = [null,null];
	$m['setLocation'] = function(url) {
		var w;
		w = $wnd;
		w.__is_instance__ && typeof w.__setattr__ == 'function' ? w.__setattr__('location', url) : $p['setattr'](w, 'location', url);
		return null;
	};
	$m['setLocation'].__name__ = 'setLocation';

	$m['setLocation'].__bind_type__ = 0;
	$m['setLocation'].__args__ = [null,null,['url']];
	$m['location'] = null;
	$m['getLocation'] = function() {
		var $attr11,$attr12;
		if ($p['bool'](!$p['bool']($m['location']))) {
			$m['location'] = $m['Location']['Location']((($attr11=($attr12=$wnd)['location']) == null || (($attr12.__is_instance__) && typeof $attr11 == 'function') || (typeof $attr11['__get__'] == 'function')?
						$p['getattr']($attr12, 'location'):
						$wnd['location']));
		}
		return $m['location'];
	};
	$m['getLocation'].__name__ = 'getLocation';

	$m['getLocation'].__bind_type__ = 0;
	$m['getLocation'].__args__ = [null,null];
	$m['getTitle'] = function() {

		return $doc.title;
	};
	$m['getTitle'].__name__ = 'getTitle';

	$m['getTitle'].__bind_type__ = 0;
	$m['getTitle'].__args__ = [null,null];
	$m['open'] = function(url, name, features) {

		$wnd['open'](url, name, features);
		return null;
	};
	$m['open'].__name__ = 'open';

	$m['open'].__bind_type__ = 0;
	$m['open'].__args__ = [null,null,['url'],['name'],['features']];
	$m['setMargin'] = function(size) {

		$doc['body']['style'].__is_instance__ && typeof $doc['body']['style'].__setattr__ == 'function' ? $doc['body']['style'].__setattr__('margin', size) : $p['setattr']($doc['body']['style'], 'margin', size);
		return null;
	};
	$m['setMargin'].__name__ = 'setMargin';

	$m['setMargin'].__bind_type__ = 0;
	$m['setMargin'].__args__ = [null,null,['size']];
	$m['setTitle'] = function(title) {
		var d;
		d = $doc;
		d.__is_instance__ && typeof d.__setattr__ == 'function' ? d.__setattr__('title', title) : $p['setattr'](d, 'title', title);
		return null;
	};
	$m['setTitle'].__name__ = 'setTitle';

	$m['setTitle'].__bind_type__ = 0;
	$m['setTitle'].__args__ = [null,null,['title']];
	$m['setOnError'] = function(onError) {

		if ($p['bool'](!$p['bool']($p['callable'](onError)))) {
			throw ($p['TypeError']('object is not callable'));
		}
    $wnd.onerror=function(msg, url, linenumber){
        return onError(msg, url, linenumber);
    }
    
	};
	$m['setOnError'].__name__ = 'setOnError';

	$m['setOnError'].__bind_type__ = 0;
	$m['setOnError'].__args__ = [null,null,['onError']];
	$m['onError'] = function(msg, url, linenumber) {
		var tracestr,dialog;
		dialog = $doc['createElement']('div');
		dialog.__is_instance__ && typeof dialog.__setattr__ == 'function' ? dialog.__setattr__('className', 'errordialog') : $p['setattr'](dialog, 'className', 'errordialog');
		tracestr = $m.sys['trackstackstr']($pyjs.trackstack.slice(0,-1));
		tracestr = tracestr['$$replace']('\x0A', '\x3Cbr /\x3E\x0A\x26nbsp\x3B\x26nbsp\x3B\x26nbsp\x3B');
		dialog.__is_instance__ && typeof dialog.__setattr__ == 'function' ? dialog.__setattr__('innerHTML', $p['sprintf']('\x26nbsp\x3B\x3Cb style=\x22color:red\x22\x3EJavaScript Error: \x3C/b\x3E\x0A%s at line number %d. Please inform webmaster.\x0A\x3Cbr /\x3E\x26nbsp\x3B\x26nbsp\x3B\x26nbsp\x3B%s\x0A', $p['tuple']([msg, linenumber, tracestr]))) : $p['setattr'](dialog, 'innerHTML', $p['sprintf']('\x26nbsp\x3B\x3Cb style=\x22color:red\x22\x3EJavaScript Error: \x3C/b\x3E\x0A%s at line number %d. Please inform webmaster.\x0A\x3Cbr /\x3E\x26nbsp\x3B\x26nbsp\x3B\x26nbsp\x3B%s\x0A', $p['tuple']([msg, linenumber, tracestr])));
		$doc['body']['appendChild'](dialog);
		return true;
	};
	$m['onError'].__name__ = 'onError';

	$m['onError'].__bind_type__ = 0;
	$m['onError'].__args__ = [null,null,['msg'],['url'],['linenumber']];
	$m['onClosed'] = function() {

		(typeof fireClosedImpl == "undefined"?$m.fireClosedImpl:fireClosedImpl)();
		return null;
	};
	$m['onClosed'].__name__ = 'onClosed';

	$m['onClosed'].__bind_type__ = 0;
	$m['onClosed'].__args__ = [null,null];
	$m['onClosing'] = function() {

		(typeof fireClosingImpl == "undefined"?$m.fireClosingImpl:fireClosingImpl)();
		return null;
	};
	$m['onClosing'].__name__ = 'onClosing';

	$m['onClosing'].__bind_type__ = 0;
	$m['onClosing'].__args__ = [null,null];
	$m['onResize'] = function() {

		(typeof fireResizedImpl == "undefined"?$m.fireResizedImpl:fireResizedImpl)();
		return null;
	};
	$m['onResize'].__name__ = 'onResize';

	$m['onResize'].__bind_type__ = 0;
	$m['onResize'].__args__ = [null,null];
	$m['fireClosedAndCatch'] = function(handler) {

 		return null;
	};
	$m['fireClosedAndCatch'].__name__ = 'fireClosedAndCatch';

	$m['fireClosedAndCatch'].__bind_type__ = 0;
	$m['fireClosedAndCatch'].__args__ = [null,null,['handler']];
	$m['fireClosedImpl'] = function() {
		var $iter1_nextval,$iter1_type,$iter1_iter,listener,$iter1_array,$iter1_idx;
		$iter1_iter = $m['closingListeners'];
		$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
		while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
			listener = $iter1_nextval.$nextval;
			listener['onWindowClosed']();
		}
		return null;
	};
	$m['fireClosedImpl'].__name__ = 'fireClosedImpl';

	$m['fireClosedImpl'].__bind_type__ = 0;
	$m['fireClosedImpl'].__args__ = [null,null];
	$m['fireClosingAndCatch'] = function(handler) {

 		return null;
	};
	$m['fireClosingAndCatch'].__name__ = 'fireClosingAndCatch';

	$m['fireClosingAndCatch'].__bind_type__ = 0;
	$m['fireClosingAndCatch'].__args__ = [null,null,['handler']];
	$m['resize'] = function(width, height) {

		$wnd['resizeTo'](width, height);
		return null;
	};
	$m['resize'].__name__ = 'resize';

	$m['resize'].__bind_type__ = 0;
	$m['resize'].__args__ = [null,null,['width'],['height']];
	$m['resizeBy'] = function(width, height) {

		$wnd['resizeBy'](width, height);
		return null;
	};
	$m['resizeBy'].__name__ = 'resizeBy';

	$m['resizeBy'].__bind_type__ = 0;
	$m['resizeBy'].__args__ = [null,null,['width'],['height']];
	$m['fireClosingImpl'] = function() {
		var $iter2_nextval,$iter2_type,$iter2_iter,ret,listener,$iter2_idx,msg,$iter2_array;
		ret = null;
		$iter2_iter = $m['closingListeners'];
		$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
		while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
			listener = $iter2_nextval.$nextval;
			msg = listener['onWindowClosing']();
			if ($p['bool']((ret === null))) {
				ret = msg;
			}
		}
		return ret;
	};
	$m['fireClosingImpl'].__name__ = 'fireClosingImpl';

	$m['fireClosingImpl'].__bind_type__ = 0;
	$m['fireClosingImpl'].__args__ = [null,null];
	$m['fireResizedAndCatch'] = function(handler) {

 		return null;
	};
	$m['fireResizedAndCatch'].__name__ = 'fireResizedAndCatch';

	$m['fireResizedAndCatch'].__bind_type__ = 0;
	$m['fireResizedAndCatch'].__args__ = [null,null,['handler']];
	$m['fireResizedImpl'] = function() {
		var $iter3_idx,$iter3_nextval,$iter3_type,listener,$iter3_iter,$iter3_array;
		$iter3_iter = $m['resizeListeners'];
		$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
		while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
			listener = $iter3_nextval.$nextval;
			listener['onWindowResized']($m['getClientWidth'](), $m['getClientHeight']());
		}
		return null;
	};
	$m['fireResizedImpl'].__name__ = 'fireResizedImpl';

	$m['fireResizedImpl'].__bind_type__ = 0;
	$m['fireResizedImpl'].__args__ = [null,null];
	$m['init'] = function() {

		$m['sys'] = $p['___import___']('sys', 'gwt');
		$m['init_listeners']();

    $wnd.__pygwt_initHandlers(
        function() {
            $m['onResize']();
        },
        function() {
            return $m['onClosing']();
        },
        function() {
            $m['onClosed']();
            /*$wnd.onresize = null;
            $wnd.onbeforeclose = null;
            $wnd.onclose = null;*/
        }
    );
    
		$m['setOnError']($m['onError']);
		return null;
	};
	$m['init'].__name__ = 'init';

	$m['init'].__bind_type__ = 0;
	$m['init'].__args__ = [null,null];
	$m['init']();
	return this;
}; /* end gwt.Window */


/* end module: gwt.Window */


/*
PYJS_DEPS: ['pyjamas.Location', 'pyjamas', 'sys']
*/
