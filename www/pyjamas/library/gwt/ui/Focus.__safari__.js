/* start module: gwt.ui.Focus */
$pyjs.loaded_modules['gwt.ui.Focus'] = function (__mod_name__) {
	if($pyjs.loaded_modules['gwt.ui.Focus'].__was_initialized__) return $pyjs.loaded_modules['gwt.ui.Focus'];
	if(typeof $pyjs.loaded_modules['gwt.ui'] == 'undefined' || !$pyjs.loaded_modules['gwt.ui'].__was_initialized__) $p['___import___']('gwt.ui', null);
	var $m = $pyjs.loaded_modules["gwt.ui.Focus"];
	$m.__repr__ = function() { return "<module: gwt.ui.Focus>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'gwt.ui.Focus';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['gwt.ui']['Focus'] = $pyjs.loaded_modules['gwt.ui.Focus'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'gwt.ui', null, false);
	$m['blur'] = function(elem) {


    // Attempts to blur elements from within an event callback will
    // generally be unsuccessful, so we invoke blur() from outside of
    // the callback.
    $wnd.setTimeout(function() {
                                   elem.firstChild.blur();
                    },
                    0);
    
	};
	$m['blur'].__name__ = 'blur';

	$m['blur'].__bind_type__ = 0;
	$m['blur'].__args__ = [null,null,['elem']];
	$m['createFocusable'] = function() {


    var div = $doc.createElement('div');
    var input = $doc.createElement('input');
    input.type = 'text';
    input.style.opacity = 0;
    input.style.zIndex = -1;
    input.style.width = '1px';
    input.style.height = '1px';
    input.style.overflow = 'hidden';
    input.style.position = 'absolute';

    input.addEventListener( 'blur',
                        function(evt)
                        {
                            if (this.parentNode.onblur)
                                this.parentNode.onblur(evt);
                        },
                        false);

    input.addEventListener( 'focus',
                    function(evt)
                    {
                        if (this.parentNode.onfocus)
                            this.parentNode.onfocus(evt);
                    },
                    false);

    div.addEventListener(
                        'mousedown',
                        function(evt) { this.firstChild.focus(); },
                        false);

    div.appendChild(input);
    return div;
    
	};
	$m['createFocusable'].__name__ = 'createFocusable';

	$m['createFocusable'].__bind_type__ = 0;
	$m['createFocusable'].__args__ = [null,null];
	$m['focus'] = function(elem) {


    // Attempts to focus elements from within an event callback will
    // generally be unsuccessful, so we invoke focus() from outside of
    // the callback.
    $wnd.setTimeout(function() {
                                   elem.firstChild.focus();
                    },
                    0);
    
	};
	$m['focus'].__name__ = 'focus';

	$m['focus'].__bind_type__ = 0;
	$m['focus'].__args__ = [null,null,['elem']];
	$m['getTabIndex'] = function(elem) {


    return elem.firstChild.tabIndex;
    
	};
	$m['getTabIndex'].__name__ = 'getTabIndex';

	$m['getTabIndex'].__bind_type__ = 0;
	$m['getTabIndex'].__args__ = [null,null,['elem']];
	$m['setAccessKey'] = function(elem, key) {


    if (elem.firstChild != null) elem.firstChild.accessKey = key;
    
	};
	$m['setAccessKey'].__name__ = 'setAccessKey';

	$m['setAccessKey'].__bind_type__ = 0;
	$m['setAccessKey'].__args__ = [null,null,['elem'],['key']];
	$m['setTabIndex'] = function(elem, index) {


    if (elem.firstChild != null) elem.firstChild.tabIndex = index;
    
	};
	$m['setTabIndex'].__name__ = 'setTabIndex';

	$m['setTabIndex'].__bind_type__ = 0;
	$m['setTabIndex'].__args__ = [null,null,['elem'],['index']];
	$m['FocusMixin'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.ui.Focus';
		$method = $pyjs__bind_method2('getTabIndex', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['getTabIndex'](self['getElement']());
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTabIndex'] = $method;
		$method = $pyjs__bind_method2('setAccessKey', function(key) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}

			$m['setAccessKey'](self['getElement'](), key);
			return null;
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['setAccessKey'] = $method;
		$method = $pyjs__bind_method2('setFocus', function(focused) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				focused = arguments[1];
			}

			if ($p['bool'](focused)) {
				$m['focus'](self['getElement']());
			}
			else {
				$m['blur'](self['getElement']());
			}
			return null;
		}
	, 1, [null,null,['self'],['focused']]);
		$cls_definition['setFocus'] = $method;
		$method = $pyjs__bind_method2('setTabIndex', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			$m['setTabIndex'](self['getElement'](), index);
			return null;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['setTabIndex'] = $method;
		$method = $pyjs__bind_method2('isEnabled', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $pyjs_try_err;
			try {
				return !$p['bool']($m['DOM']['getBooleanAttribute'](self['getElement'](), 'disabled'));
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
					return true;
				} else if (($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
					return true;
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['isEnabled'] = $method;
		$method = $pyjs__bind_method2('setEnabled', function(enabled) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				enabled = arguments[1];
			}

			$m['DOM']['setBooleanAttribute'](self['getElement'](), 'disabled', !$p['bool'](enabled));
			return null;
		}
	, 1, [null,null,['self'],['enabled']]);
		$cls_definition['setEnabled'] = $method;
		$method = $pyjs__bind_method2('isReadonly', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $pyjs_try_err;
			try {
				return !$p['bool']($m['DOM']['getBooleanAttribute'](self['getElement'](), 'readOnly'));
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['TypeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['TypeError'])) {
					return true;
				} else if (($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
					return true;
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['isReadonly'] = $method;
		$method = $pyjs__bind_method2('setReadonly', function(readonly) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				readonly = arguments[1];
			}

			$m['DOM']['setBooleanAttribute'](self['getElement'](), 'readOnly', readonly);
			return null;
		}
	, 1, [null,null,['self'],['readonly']]);
		$cls_definition['setReadonly'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('FocusMixin', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end gwt.ui.Focus */


/* end module: gwt.ui.Focus */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas']
*/
