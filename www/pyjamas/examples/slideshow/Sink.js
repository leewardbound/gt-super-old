/* start module: Sink */
$pyjs.loaded_modules['Sink'] = function (__mod_name__) {
	if($pyjs.loaded_modules['Sink'].__was_initialized__) return $pyjs.loaded_modules['Sink'];
	var $m = $pyjs.loaded_modules["Sink"];
	$m.__repr__ = function() { return "<module: Sink>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Sink';
	$m.__name__ = __mod_name__;


	$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', null, null, false);
	$m['Sink'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'Sink';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['Composite']['__init__'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onHide', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onHide'] = $method;
		$method = $pyjs__bind_method2('onShow', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onShow'] = $method;
		$method = $pyjs__bind_method2('baseURL', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return '';
		}
	, 1, [null,null,['self']]);
		$cls_definition['baseURL'] = $method;
		var $bases = new Array($m['Composite']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Sink', $p['tuple']($bases), $data);
	})();
	$m['SinkInfo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'Sink';
		$method = $pyjs__bind_method2('__init__', function(name, desc, object_type) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				desc = arguments[2];
				object_type = arguments[3];
			}

			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('$$name', name) : $p['setattr'](self, '$$name', name);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('description', desc) : $p['setattr'](self, 'description', desc);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('object_type', object_type) : $p['setattr'](self, 'object_type', object_type);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('instance', null) : $p['setattr'](self, 'instance', null);
			return null;
		}
	, 1, [null,null,['self'],['name'],['desc'],['object_type']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('createInstance', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr1,$attr2,obj;
			obj = self['object_type']();
			obj.__is_instance__ && typeof obj.__setattr__ == 'function' ? obj.__setattr__('$$name', (($attr1=($attr2=self)['$$name']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
						$p['getattr']($attr2, '$$name'):
						self['$$name'])) : $p['setattr'](obj, '$$name', (($attr1=($attr2=self)['$$name']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
						$p['getattr']($attr2, '$$name'):
						self['$$name']));
			return obj;
		}
	, 1, [null,null,['self']]);
		$cls_definition['createInstance'] = $method;
		$method = $pyjs__bind_method2('getDescription', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr3,$attr4;
			return (($attr3=($attr4=self)['description']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
						$p['getattr']($attr4, 'description'):
						self['description']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getDescription'] = $method;
		$method = $pyjs__bind_method2('getInstance', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr8,$attr5,$attr7,$attr6;
			if ($p['bool']($p['op_eq']((($attr5=($attr6=self)['instance']) == null || (($attr6.__is_instance__) && typeof $attr5 == 'function') || (typeof $attr5['__get__'] == 'function')?
						$p['getattr']($attr6, 'instance'):
						self['instance']), null))) {
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('instance', self['createInstance']()) : $p['setattr'](self, 'instance', self['createInstance']());
			}
			return (($attr7=($attr8=self)['instance']) == null || (($attr8.__is_instance__) && typeof $attr7 == 'function') || (typeof $attr7['__get__'] == 'function')?
						$p['getattr']($attr8, 'instance'):
						self['instance']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getInstance'] = $method;
		$method = $pyjs__bind_method2('getName', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr9,$attr10;
			return (($attr9=($attr10=self)['$$name']) == null || (($attr10.__is_instance__) && typeof $attr9 == 'function') || (typeof $attr9['__get__'] == 'function')?
						$p['getattr']($attr10, '$$name'):
						self['$$name']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getName'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('SinkInfo', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end Sink */


/* end module: Sink */


/*
PYJS_DEPS: ['pyjamas.ui.Composite.Composite', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Composite']
*/
