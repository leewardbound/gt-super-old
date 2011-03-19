/* start module: gwt.ui.DropHandler */
$pyjs.loaded_modules['gwt.ui.DropHandler'] = function (__mod_name__) {
	if($pyjs.loaded_modules['gwt.ui.DropHandler'].__was_initialized__) return $pyjs.loaded_modules['gwt.ui.DropHandler'];
	if(typeof $pyjs.loaded_modules['gwt.ui'] == 'undefined' || !$pyjs.loaded_modules['gwt.ui'].__was_initialized__) $p['___import___']('gwt.ui', null);
	var $m = $pyjs.loaded_modules["gwt.ui.DropHandler"];
	$m.__repr__ = function() { return "<module: gwt.ui.DropHandler>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'gwt.ui.DropHandler';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['gwt.ui']['DropHandler'] = $pyjs.loaded_modules['gwt.ui.DropHandler'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'gwt.ui', null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'gwt.ui', null, false);
	$m['DROP_EVENTS'] = $p['list'](['dragenter', 'dragover', 'dragleave', 'drop']);
	$m['fireDropEvent'] = function(listeners, event) {
		var $iter3_type,$iter1_iter,$iter4_type,$iter2_type,$iter4_iter,$iter3_idx,$iter2_iter,$iter3_nextval,$iter3_iter,etype,$iter1_array,$iter1_nextval,listener,$iter2_idx,$iter3_array,$iter2_nextval,$iter1_type,$iter4_nextval,$iter4_idx,$iter1_idx,$iter4_array,$iter2_array;
		etype = $m['DOM']['eventGetType'](event);
		if ($p['bool']($p['op_eq'](etype, 'dragenter'))) {
			$iter1_iter = listeners;
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
				listener = $iter1_nextval.$nextval;
				listener['onDragEnter'](event);
			}
			return true;
		}
		else if ($p['bool']($p['op_eq'](etype, 'dragover'))) {
			$iter2_iter = listeners;
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
				listener = $iter2_nextval.$nextval;
				listener['onDragOver'](event);
			}
			return true;
		}
		else if ($p['bool']($p['op_eq'](etype, 'dragleave'))) {
			$iter3_iter = listeners;
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
				listener = $iter3_nextval.$nextval;
				listener['onDragLeave'](event);
			}
			return true;
		}
		else if ($p['bool']($p['op_eq'](etype, 'drop'))) {
			$iter4_iter = listeners;
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval).$nextval) != 'undefined') {
				listener = $iter4_nextval.$nextval;
				listener['onDrop'](event);
			}
			return true;
		}
		return false;
	};
	$m['fireDropEvent'].__name__ = 'fireDropEvent';

	$m['fireDropEvent'].__bind_type__ = 0;
	$m['fireDropEvent'].__args__ = [null,null,['listeners'],['event']];
	$m['DropHandler'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.ui.DropHandler';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr1,$attr2;
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('_dropListeners', $p['list']([])) : $p['setattr'](self, '_dropListeners', $p['list']([]));
			self['sinkEvents']((($attr1=($attr2=$m['Event'])['DROPEVENTS']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
						$p['getattr']($attr2, 'DROPEVENTS'):
						$m['Event']['DROPEVENTS']));
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
			if ($p['bool']($m['DROP_EVENTS'].__contains__(event_type))) {
				return $m['fireDropEvent']((($attr3=($attr4=self)['_dropListeners']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
							$p['getattr']($attr4, '_dropListeners'):
							self['_dropListeners']), event);
			}
			return false;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		$method = $pyjs__bind_method2('addDropListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['_dropListeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['addDropListener'] = $method;
		$method = $pyjs__bind_method2('removeDropListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['_dropListeners']['remove'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['removeDropListener'] = $method;
		$method = $pyjs__bind_method2('onDragEnter', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragEnter'] = $method;
		$method = $pyjs__bind_method2('onDragOver', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragOver'] = $method;
		$method = $pyjs__bind_method2('onDragLeave', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragLeave'] = $method;
		$method = $pyjs__bind_method2('onDrop', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDrop'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('DropHandler', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end gwt.ui.DropHandler */


/* end module: gwt.ui.DropHandler */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.ui.Event', 'pyjamas.ui']
*/
