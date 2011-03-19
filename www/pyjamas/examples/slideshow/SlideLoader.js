/* start module: SlideLoader */
$pyjs.loaded_modules['SlideLoader'] = function (__mod_name__) {
	if($pyjs.loaded_modules['SlideLoader'].__was_initialized__) return $pyjs.loaded_modules['SlideLoader'];
	var $m = $pyjs.loaded_modules["SlideLoader"];
	$m.__repr__ = function() { return "<module: SlideLoader>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'SlideLoader';
	$m.__name__ = __mod_name__;


	$m['SlideListLoader'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'SlideLoader';
		$method = $pyjs__bind_method2('__init__', function(panel) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				panel = arguments[1];
			}

			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('panel', panel) : $p['setattr'](self, 'panel', panel);
			return null;
		}
	, 1, [null,null,['self'],['panel']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onCompletion', function(text) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}
			var $iter1_nextval,$iter1_type,l,$iter1_iter,$iter1_array,res,$iter1_idx;
			res = $p['list']([]);
			$iter1_iter = text['$$split']('\x0A');
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
				l = $iter1_nextval.$nextval;
				if ($p['bool'](!$p['bool'](l))) {
					continue;
				}
				l = l['$$split'](':');
				if ($p['bool'](!$p['op_eq']($p['len'](l), 2))) {
					continue;
				}
				res['append']($p['list']([l.__getitem__(0)['strip'](), l.__getitem__(1)['strip']()]));
			}
			self['panel']['setSlides'](res);
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['onCompletion'] = $method;
		$method = $pyjs__bind_method2('onError', function(text, code) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
				code = arguments[2];
			}

			self['panel']['onError'](text, code);
			return null;
		}
	, 1, [null,null,['self'],['text'],['code']]);
		$cls_definition['onError'] = $method;
		$method = $pyjs__bind_method2('onTimeout', function(text) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}

			self['panel']['onTimeout'](text);
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['onTimeout'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('SlideListLoader', $p['tuple']($bases), $data);
	})();
	$m['SlideLoader'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'SlideLoader';
		$method = $pyjs__bind_method2('__init__', function(panel) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				panel = arguments[1];
			}

			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('panel', panel) : $p['setattr'](self, 'panel', panel);
			return null;
		}
	, 1, [null,null,['self'],['panel']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onCompletion', function(text) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}

			self['panel']['setSlide'](text);
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['onCompletion'] = $method;
		$method = $pyjs__bind_method2('onError', function(text, code) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
				code = arguments[2];
			}

			self['panel']['onError'](text, code);
			return null;
		}
	, 1, [null,null,['self'],['text'],['code']]);
		$cls_definition['onError'] = $method;
		$method = $pyjs__bind_method2('onTimeout', function(text) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}

			self['panel']['onTimeout'](text);
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['onTimeout'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('SlideLoader', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end SlideLoader */


/* end module: SlideLoader */


