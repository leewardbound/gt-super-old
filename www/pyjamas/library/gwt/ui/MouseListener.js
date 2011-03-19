/* start module: gwt.ui.MouseListener */
$pyjs.loaded_modules['gwt.ui.MouseListener'] = function (__mod_name__) {
	if($pyjs.loaded_modules['gwt.ui.MouseListener'].__was_initialized__) return $pyjs.loaded_modules['gwt.ui.MouseListener'];
	if(typeof $pyjs.loaded_modules['gwt.ui'] == 'undefined' || !$pyjs.loaded_modules['gwt.ui'].__was_initialized__) $p['___import___']('gwt.ui', null);
	var $m = $pyjs.loaded_modules["gwt.ui.MouseListener"];
	$m.__repr__ = function() { return "<module: gwt.ui.MouseListener>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'gwt.ui.MouseListener';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['gwt.ui']['MouseListener'] = $pyjs.loaded_modules['gwt.ui.MouseListener'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'gwt.ui', null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'gwt.ui', null, false);
	$m['Handler'] = $p['___import___']('pyjamas.EventController.Handler', 'gwt.ui', null, false);
	$m['fireMouseEvent'] = function(listeners, sender, event) {
		var $iter5_nextval,$iter5_array,$iter3_array,$iter1_iter,$iter5_iter,to_element,$iter4_type,$iter5_type,$iter2_type,$iter4_iter,$iter4_array,$iter3_idx,$iter2_iter,$iter3_nextval,$iter3_iter,$iter5_idx,etype,$sub2,$sub1,$iter1_array,$iter1_nextval,from_element,listener,$sub3,$iter2_idx,$iter3_type,$iter1_type,$iter2_nextval,$iter4_nextval,$iter4_idx,$iter1_idx,y,x,$sub4,$iter2_array;
		x = $p['__op_sub']($sub1=$m['DOM']['eventGetClientX'](event),$sub2=$m['DOM']['getAbsoluteLeft'](sender['getElement']()));
		y = $p['__op_sub']($sub3=$m['DOM']['eventGetClientY'](event),$sub4=$m['DOM']['getAbsoluteTop'](sender['getElement']()));
		etype = $m['DOM']['eventGetType'](event);
		if ($p['bool']($p['op_eq'](etype, 'mousedown'))) {
			$iter1_iter = listeners;
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
				listener = $iter1_nextval.$nextval;
				listener['onMouseDown'](sender, x, y);
			}
			return true;
		}
		else if ($p['bool']($p['op_eq'](etype, 'mouseup'))) {
			$iter2_iter = listeners;
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
				listener = $iter2_nextval.$nextval;
				listener['onMouseUp'](sender, x, y);
			}
			return true;
		}
		else if ($p['bool']($p['op_eq'](etype, 'mousemove'))) {
			$iter3_iter = listeners;
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
				listener = $iter3_nextval.$nextval;
				listener['onMouseMove'](sender, x, y);
			}
			return true;
		}
		else if ($p['bool']($p['op_eq'](etype, 'mouseover'))) {
			from_element = $m['DOM']['eventGetFromElement'](event);
			if ($p['bool'](!$p['bool']($m['DOM']['isOrHasChild'](sender['getElement'](), from_element)))) {
				$iter4_iter = listeners;
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval).$nextval) != 'undefined') {
					listener = $iter4_nextval.$nextval;
					listener['onMouseEnter'](sender);
				}
			}
			return true;
		}
		else if ($p['bool']($p['op_eq'](etype, 'mouseout'))) {
			to_element = $m['DOM']['eventGetToElement'](event);
			if ($p['bool'](!$p['bool']($m['DOM']['isOrHasChild'](sender['getElement'](), to_element)))) {
				$iter5_iter = listeners;
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval).$nextval) != 'undefined') {
					listener = $iter5_nextval.$nextval;
					listener['onMouseLeave'](sender);
				}
			}
			return true;
		}
		return false;
	};
	$m['fireMouseEvent'].__name__ = 'fireMouseEvent';

	$m['fireMouseEvent'].__bind_type__ = 0;
	$m['fireMouseEvent'].__args__ = [null,null,['listeners'],['sender'],['event']];
	$m['MOUSE_EVENTS'] = $p['list'](['mousedown', 'mouseup', 'mousemove', 'mouseover', 'mouseout']);
	$m['MouseHandler'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.ui.MouseListener';
		$method = $pyjs__bind_method2('__init__', function(preventDefault) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				preventDefault = arguments[1];
			}
			if (typeof preventDefault == 'undefined') preventDefault=arguments.callee.__args__[3][1];
			var $attr1,$attr2;
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_mouseListeners', $p['list']([])) : $p['setattr'](self, '_mouseListeners', $p['list']([]));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_mousePreventDefault', preventDefault) : $p['setattr'](self, '_mousePreventDefault', preventDefault);
			self['sinkEvents']((($attr1=($attr2=$m['Event'])['MOUSEEVENTS']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
						$p['getattr']($attr2, 'MOUSEEVENTS'):
						$m['Event']['MOUSEEVENTS']));
			return null;
		}
	, 1, [null,null,['self'],['preventDefault', false]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onBrowserEvent', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $attr3,$attr5,$attr4,$attr6,etype;
			etype = $m['DOM']['eventGetType'](event);
			if ($p['bool']($m['MOUSE_EVENTS'].__contains__(etype))) {
				if ($p['bool']((($attr3=($attr4=self)['_mousePreventDefault']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
							$p['getattr']($attr4, '_mousePreventDefault'):
							self['_mousePreventDefault']))) {
					$m['DOM']['eventPreventDefault'](event);
				}
				return $m['fireMouseEvent']((($attr5=($attr6=self)['_mouseListeners']) == null || (($attr6.__is_instance__) && typeof $attr5 == 'function') || (typeof $attr5['__get__'] == 'function')?
							$p['getattr']($attr6, '_mouseListeners'):
							self['_mouseListeners']), self, event);
			}
			return false;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		$method = $pyjs__bind_method2('addMouseListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['_mouseListeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['addMouseListener'] = $method;
		$method = $pyjs__bind_method2('removeMouseListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['_mouseListeners']['remove'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['removeMouseListener'] = $method;
		$method = $pyjs__bind_method2('onMouseMove', function(sender, x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseMove'] = $method;
		$method = $pyjs__bind_method2('onMouseDown', function(sender, x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseDown'] = $method;
		$method = $pyjs__bind_method2('onMouseUp', function(sender, x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseUp'] = $method;
		$method = $pyjs__bind_method2('onMouseEnter', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onMouseEnter'] = $method;
		$method = $pyjs__bind_method2('onMouseLeave', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onMouseLeave'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('MouseHandler', $p['tuple']($bases), $data);
	})();
	$m['MouseWheelHandler'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.ui.MouseListener';
		$method = $pyjs__bind_method2('__init__', function(preventDefault) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				preventDefault = arguments[1];
			}
			if (typeof preventDefault == 'undefined') preventDefault=arguments.callee.__args__[3][1];
			var $attr8,$attr7;
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_mouseWheelListeners', $p['list']([])) : $p['setattr'](self, '_mouseWheelListeners', $p['list']([]));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_mouseWheelPreventDefault', preventDefault) : $p['setattr'](self, '_mouseWheelPreventDefault', preventDefault);
			self['sinkEvents']((($attr7=($attr8=$m['Event'])['ONMOUSEWHEEL']) == null || (($attr8.__is_instance__) && typeof $attr7 == 'function') || (typeof $attr7['__get__'] == 'function')?
						$p['getattr']($attr8, 'ONMOUSEWHEEL'):
						$m['Event']['ONMOUSEWHEEL']));
			return null;
		}
	, 1, [null,null,['self'],['preventDefault', false]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onBrowserEvent', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $attr9,$iter6_idx,$iter6_type,$attr10,listener,$iter6_array,etype,velocity,$iter6_iter,$iter6_nextval;
			etype = $m['DOM']['eventGetType'](event);
			if ($p['bool']($p['op_eq'](etype, 'mousewheel'))) {
				if ($p['bool']((($attr9=($attr10=self)['_mouseWheelPreventDefault']) == null || (($attr10.__is_instance__) && typeof $attr9 == 'function') || (typeof $attr9['__get__'] == 'function')?
							$p['getattr']($attr10, '_mouseWheelPreventDefault'):
							self['_mouseWheelPreventDefault']))) {
					$m['DOM']['eventPreventDefault'](event);
				}
				velocity = $m['DOM']['eventGetMouseWheelVelocityY'](event);
				$iter6_iter = self['_mouseWheelListeners'];
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval).$nextval) != 'undefined') {
					listener = $iter6_nextval.$nextval;
					listener['onMouseWheel'](self, velocity);
				}
				return true;
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		$method = $pyjs__bind_method2('addMouseWheelListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['_mouseWheelListeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['addMouseWheelListener'] = $method;
		$method = $pyjs__bind_method2('removeMouseWheelListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['_mouseWheelListeners']['remove'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['removeMouseWheelListener'] = $method;
		$method = $pyjs__bind_method2('onMouseWheel', function(sender, velocity) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				velocity = arguments[2];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender'],['velocity']]);
		$cls_definition['onMouseWheel'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('MouseWheelHandler', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end gwt.ui.MouseListener */


/* end module: gwt.ui.MouseListener */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.ui.Event', 'pyjamas.ui', 'pyjamas.EventController.Handler', 'pyjamas.EventController']
*/
