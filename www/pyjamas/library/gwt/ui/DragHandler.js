/* start module: gwt.ui.DragHandler */
$pyjs.loaded_modules['gwt.ui.DragHandler'] = function (__mod_name__) {
	if($pyjs.loaded_modules['gwt.ui.DragHandler'].__was_initialized__) return $pyjs.loaded_modules['gwt.ui.DragHandler'];
	if(typeof $pyjs.loaded_modules['gwt.ui'] == 'undefined' || !$pyjs.loaded_modules['gwt.ui'].__was_initialized__) $p['___import___']('gwt.ui', null);
	var $m = $pyjs.loaded_modules["gwt.ui.DragHandler"];
	$m.__repr__ = function() { return "<module: gwt.ui.DragHandler>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'gwt.ui.DragHandler';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['gwt.ui']['DragHandler'] = $pyjs.loaded_modules['gwt.ui.DragHandler'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'gwt.ui', null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'gwt.ui', null, false);
	$m['DRAG_EVENTS'] = $p['list'](['dragstart', 'drag', 'dragend']);
	$m['fireDragEvent'] = function(listeners, event) {
		var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,$iter3_array,$iter3_nextval,$iter3_iter,$iter2_idx,$iter1_iter,listener,$iter3_idx,$iter1_array,$iter3_type,etype,$iter2_type,$iter2_array,$iter1_idx;
		etype = $m['DOM']['eventGetType'](event);
		if ($p['bool']($p['op_eq'](etype, 'dragstart'))) {
			$iter1_iter = listeners;
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
				listener = $iter1_nextval.$nextval;
				listener['onDragStart'](event);
			}
			return true;
		}
		else if ($p['bool']($p['op_eq'](etype, 'drag'))) {
			$iter2_iter = listeners;
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
				listener = $iter2_nextval.$nextval;
				listener['onDrag'](event);
			}
			return true;
		}
		else if ($p['bool']($p['op_eq'](etype, 'dragend'))) {
			$iter3_iter = listeners;
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
				listener = $iter3_nextval.$nextval;
				listener['onDragEnd'](event);
			}
			return true;
		}
		return false;
	};
	$m['fireDragEvent'].__name__ = 'fireDragEvent';

	$m['fireDragEvent'].__bind_type__ = 0;
	$m['fireDragEvent'].__args__ = [null,null,['listeners'],['event']];
	$m['DragHandler'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.ui.DragHandler';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr1,$attr2;
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_dragListeners', $p['list']([])) : $p['setattr'](self, '_dragListeners', $p['list']([]));
			self['sinkEvents']((($attr1=($attr2=$m['Event'])['DRAGEVENTS']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
						$p['getattr']($attr2, 'DRAGEVENTS'):
						$m['Event']['DRAGEVENTS']));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onBrowserEvent', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $attr3,$attr4,event_type;
			event_type = $m['DOM']['eventGetType'](event);
			if ($p['bool']($m['DRAG_EVENTS'].__contains__(event_type))) {
				return $m['fireDragEvent']((($attr3=($attr4=self)['_dragListeners']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
							$p['getattr']($attr4, '_dragListeners'):
							self['_dragListeners']), event);
			}
			return false;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		$method = $pyjs__bind_method2('addDragListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['_dragListeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['addDragListener'] = $method;
		$method = $pyjs__bind_method2('removeDragListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['_dragListeners']['remove'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['removeDragListener'] = $method;
		$method = $pyjs__bind_method2('onDragStart', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragStart'] = $method;
		$method = $pyjs__bind_method2('onDrag', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDrag'] = $method;
		$method = $pyjs__bind_method2('onDragEnd', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragEnd'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('DragHandler', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end gwt.ui.DragHandler */


/* end module: gwt.ui.DragHandler */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.ui.Event', 'pyjamas.ui']
*/
