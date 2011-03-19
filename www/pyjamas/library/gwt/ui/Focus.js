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

		elem['blur']();
		return null;
	};
	$m['blur'].__name__ = 'blur';

	$m['blur'].__bind_type__ = 0;
	$m['blur'].__args__ = [null,null,['elem']];
	$m['createFocusable'] = function() {
		var e;
		e = $m['DOM']['createDiv']();
		e.__is_instance__ && typeof e.__setattr__ == 'function' ? e.__setattr__('tabIndex', 0) : $p['setattr'](e, 'tabIndex', 0);
		return e;
	};
	$m['createFocusable'].__name__ = 'createFocusable';

	$m['createFocusable'].__bind_type__ = 0;
	$m['createFocusable'].__args__ = [null,null];
	$m['focus'] = function(elem) {

		elem['focus']();
		return null;
	};
	$m['focus'].__name__ = 'focus';

	$m['focus'].__bind_type__ = 0;
	$m['focus'].__args__ = [null,null,['elem']];
	$m['getTabIndex'] = function(elem) {
		var $attr1,$attr2;
		return (($attr1=($attr2=elem)['tabIndex']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
					$p['getattr']($attr2, 'tabIndex'):
					elem['tabIndex']);
	};
	$m['getTabIndex'].__name__ = 'getTabIndex';

	$m['getTabIndex'].__bind_type__ = 0;
	$m['getTabIndex'].__args__ = [null,null,['elem']];
	$m['setAccessKey'] = function(elem, key) {

		elem.__is_instance__ && typeof elem.__setattr__ == 'function' ? elem.__setattr__('accessKey', key) : $p['setattr'](elem, 'accessKey', key);
		return null;
	};
	$m['setAccessKey'].__name__ = 'setAccessKey';

	$m['setAccessKey'].__bind_type__ = 0;
	$m['setAccessKey'].__args__ = [null,null,['elem'],['key']];
	$m['setTabIndex'] = function(elem, index) {

		elem.__is_instance__ && typeof elem.__setattr__ == 'function' ? elem.__setattr__('tabIndex', index) : $p['setattr'](elem, 'tabIndex', index);
		return null;
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
