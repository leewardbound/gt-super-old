/* start module: gwt.EventController */
$pyjs.loaded_modules['gwt.EventController'] = function (__mod_name__) {
	if($pyjs.loaded_modules['gwt.EventController'].__was_initialized__) return $pyjs.loaded_modules['gwt.EventController'];
	if(typeof $pyjs.loaded_modules['gwt'] == 'undefined' || !$pyjs.loaded_modules['gwt'].__was_initialized__) $p['___import___']('gwt', null);
	var $m = $pyjs.loaded_modules["gwt.EventController"];
	$m.__repr__ = function() { return "<module: gwt.EventController>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'gwt.EventController';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['gwt']['EventController'] = $pyjs.loaded_modules['gwt.EventController'];


	$m['EventGenerator'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.EventController';
		$method = $pyjs__bind_method2('_get_add_listener_func_name', function(ev) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ev = arguments[1];
			}
			var $add2,$add3,$add1,$add4;
			return $p['__op_add']($add3=$p['__op_add']($add1='add',$add2=ev),$add4='Listener');
		}
	, 1, [null,null,['self'],['ev']]);
		$cls_definition['_get_add_listener_func_name'] = $method;
		$method = $pyjs__bind_method2('_get_remove_listener_func_name', function(ev) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ev = arguments[1];
			}
			var $add6,$add7,$add5,$add8;
			return $p['__op_add']($add7=$p['__op_add']($add5='remove',$add6=ev),$add8='Listener');
		}
	, 1, [null,null,['self'],['ev']]);
		$cls_definition['_get_remove_listener_func_name'] = $method;
		$method = $pyjs__bind_method2('_get_dispatch_func_name', function(ev) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ev = arguments[1];
			}
			var $add9,$add10,$add11,$add12;
			return $p['__op_add']($add11=$p['__op_add']($add9='dispatch',$add10=ev),$add12='Event');
		}
	, 1, [null,null,['self'],['ev']]);
		$cls_definition['_get_dispatch_func_name'] = $method;
		$method = $pyjs__bind_method2('addListenedEvent', function(ev) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ev = arguments[1];
			}
			var attr_rem,el,$attr1,$attr2,$attr5,$attr4,attr_dsp,$attr3,attr_add,$attr6;
			el = $m['EventListener'](ev);
			attr_add = self['_get_add_listener_func_name'](ev);
			$p['setattr'](self, attr_add, (($attr1=($attr2=el)['add_listener']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
						$p['getattr']($attr2, 'add_listener'):
						el['add_listener']));
			attr_rem = self['_get_remove_listener_func_name'](ev);
			$p['setattr'](self, attr_rem, (($attr3=($attr4=el)['rem_listener']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
						$p['getattr']($attr4, 'rem_listener'):
						el['rem_listener']));
			attr_dsp = self['_get_dispatch_func_name'](ev);
			$p['setattr'](self, attr_dsp, (($attr5=($attr6=el)['dispatch']) == null || (($attr6.__is_instance__) && typeof $attr5 == 'function') || (typeof $attr5['__get__'] == 'function')?
						$p['getattr']($attr6, 'dispatch'):
						el['dispatch']));
			return null;
		}
	, 1, [null,null,['self'],['ev']]);
		$cls_definition['addListenedEvent'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('EventGenerator', $p['tuple']($bases), $data);
	})();
	$m['EventListener'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.EventController';
		$method = $pyjs__bind_method2('__init__', function(ev) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ev = arguments[1];
			}

			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('ev', ev) : $p['setattr'](self, 'ev', ev);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('listeners', $p['list']([])) : $p['setattr'](self, 'listeners', $p['list']([]));
			return null;
		}
	, 1, [null,null,['self'],['ev']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('add_listener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['listeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['add_listener'] = $method;
		$method = $pyjs__bind_method2('rem_listener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['listeners']['remove'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['rem_listener'] = $method;
		$method = $pyjs__bind_method2('dispatch', function() {
			if (this.__is_instance__ === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));

			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length));

			}
			var $attr8,$iter1_nextval,$iter1_type,listener,$attr7,$iter1_iter,$add14,$iter1_array,$add13,ev,$iter1_idx;
			ev = $p['__op_add']($add13='on',$add14=(($attr7=($attr8=self)['ev']) == null || (($attr8.__is_instance__) && typeof $attr7 == 'function') || (typeof $attr7['__get__'] == 'function')?
						$p['getattr']($attr8, 'ev'):
						self['ev']));
			$iter1_iter = self['listeners'];
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
				listener = $iter1_nextval.$nextval;
				if ($p['bool']($p['hasattr'](listener, ev))) {
					$pyjs_kwargs_call(null, $p['getattr'](listener, ev), args, null, [{}]);
				}
				else {
					$pyjs_kwargs_call(null, listener, args, null, [{}]);
				}
			}
			return null;
		}
	, 1, ['args',null,['self']]);
		$cls_definition['dispatch'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('EventListener', $p['tuple']($bases), $data);
	})();
	$m['Handler'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.EventController';
		$method = $pyjs__bind_method2('__init__', function(parent, event_type) {
			if (this.__is_instance__ === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length-1));

				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				parent = arguments[1];
				event_type = arguments[2];
				var args = $p['tuple']($pyjs_array_slice.call(arguments,3,arguments.length-1));

				var kwargs = arguments.length >= 4 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof event_type != 'undefined') {
					if (event_type !== null && typeof event_type['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = event_type;
						event_type = arguments[3];
					}
				} else 				if (typeof parent != 'undefined') {
					if (parent !== null && typeof parent['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = parent;
						parent = arguments[3];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[3];
					}
				} else {
				}
			}
			var $attr9,add_listener_fnname,del_listener_fnname,listener,on_event_name,$attr14,$attr11,$attr10,$attr13,$attr12;
			if ($p['bool']((parent === null))) {
				parent = self;
			}
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('parent', parent) : $p['setattr'](self, 'parent', parent);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('event_type', event_type) : $p['setattr'](self, 'event_type', event_type);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('listeners', $p['dict']([])) : $p['setattr'](self, 'listeners', $p['dict']([]));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('callback_fnname', $p['sprintf']('on%s', event_type)) : $p['setattr'](self, 'callback_fnname', $p['sprintf']('on%s', event_type));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('extra_args', args) : $p['setattr'](self, 'extra_args', args);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('extra_kwargs', kwargs) : $p['setattr'](self, 'extra_kwargs', kwargs);
			add_listener_fnname = $p['sprintf']('add%sListener', event_type);
			del_listener_fnname = $p['sprintf']('remove%sListener', event_type);
			listener = $p['sprintf']('_%sListeners', event_type);
			on_event_name = $p['sprintf']('on%sEvent', event_type);
			$p['setattr'](parent, listener, self);
			$p['setattr'](parent, add_listener_fnname, (($attr9=($attr10=self)['addListener']) == null || (($attr10.__is_instance__) && typeof $attr9 == 'function') || (typeof $attr9['__get__'] == 'function')?
						$p['getattr']($attr10, 'addListener'):
						self['addListener']));
			$p['setattr'](parent, del_listener_fnname, (($attr11=($attr12=self)['removeListener']) == null || (($attr12.__is_instance__) && typeof $attr11 == 'function') || (typeof $attr11['__get__'] == 'function')?
						$p['getattr']($attr12, 'removeListener'):
						self['removeListener']));
			$p['setattr'](parent, on_event_name, (($attr13=($attr14=self)['onEvent']) == null || (($attr14.__is_instance__) && typeof $attr13 == 'function') || (typeof $attr13['__get__'] == 'function')?
						$p['getattr']($attr14, 'onEvent'):
						self['onEvent']));
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['parent'],['event_type']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('addListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				listener = arguments[1];
				var args = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length-1));

				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof listener != 'undefined') {
					if (listener !== null && typeof listener['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = listener;
						listener = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			var $or4,$or1,$or3,$or2,$add15,$add16,$attr20,$attr19,$attr18,$attr15,$attr17,$attr16;
			args = ($p['bool']($or1=args)?$or1:$p['tuple']([]));
			kwargs = ($p['bool']($or3=kwargs)?$or3:$p['dict']([]));
			args = $p['__op_add']($add15=(($attr15=($attr16=self)['extra_args']) == null || (($attr16.__is_instance__) && typeof $attr15 == 'function') || (typeof $attr15['__get__'] == 'function')?
						$p['getattr']($attr16, 'extra_args'):
						self['extra_args']),$add16=args);
			kwargs['update']((($attr17=($attr18=self)['extra_kwargs']) == null || (($attr18.__is_instance__) && typeof $attr17 == 'function') || (typeof $attr17['__get__'] == 'function')?
						$p['getattr']($attr18, 'extra_kwargs'):
						self['extra_kwargs']));
			(($attr19=($attr20=self)['listeners']) == null || (($attr20.__is_instance__) && typeof $attr19 == 'function') || (typeof $attr19['__get__'] == 'function')?
						$p['getattr']($attr20, 'listeners'):
						self['listeners']).__setitem__(listener, $p['tuple']([args, kwargs]));
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['listener']]);
		$cls_definition['addListener'] = $method;
		$method = $pyjs__bind_method2('removeListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['listeners']['pop'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['removeListener'] = $method;
		$method = $pyjs__bind_method2('onEvent', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
				var eventargs = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length));

			} else {
				var self = arguments[0];
				sender = arguments[1];
				var eventargs = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length));

			}
			var $iter2_nextval,$iter2_type,$iter2_iter,$add20,args,$attr22,listener,$attr21,$iter2_idx,$add17,fn,kwargs,$add18,$add19,$iter2_array;
			$iter2_iter = self['listeners']['items']();
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,true);
			while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
				listener = $iter2_nextval.$nextval.__array[0];
				args = $iter2_nextval.$nextval.__array[1];
				fn = $p['getattr'](listener, (($attr21=($attr22=self)['callback_fnname']) == null || (($attr22.__is_instance__) && typeof $attr21 == 'function') || (typeof $attr21['__get__'] == 'function')?
							$p['getattr']($attr22, 'callback_fnname'):
							self['callback_fnname']), listener);
				var $tupleassign1 = args;
				args = $tupleassign1.__getitem__(0);
				kwargs = $tupleassign1.__getitem__(1);
				args = $p['__op_add']($add19=$p['__op_add']($add17=$p['tuple']([sender]),$add18=args),$add20=eventargs);
				$pyjs_kwargs_call(null, fn, args, kwargs, [{}]);
			}
			return null;
		}
	, 1, ['eventargs',null,['self'],['sender']]);
		$cls_definition['onEvent'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Handler', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end gwt.EventController */


/* end module: gwt.EventController */


