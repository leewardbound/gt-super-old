/* start module: gwt.ui */
$pyjs.loaded_modules['gwt.ui'] = function (__mod_name__) {
	if($pyjs.loaded_modules['gwt.ui'].__was_initialized__) return $pyjs.loaded_modules['gwt.ui'];
	if(typeof $pyjs.loaded_modules['gwt'] == 'undefined' || !$pyjs.loaded_modules['gwt'].__was_initialized__) $p['___import___']('gwt', null);
	var $m = $pyjs.loaded_modules["gwt.ui"];
	$m.__repr__ = function() { return "<module: gwt.ui>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'gwt.ui';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['gwt']['ui'] = $pyjs.loaded_modules['gwt.ui'];


	$m['HasHorizontalAlignment'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.ui';
		$cls_definition['ALIGN_LEFT'] = 'left';
		$cls_definition['ALIGN_CENTER'] = 'center';
		$cls_definition['ALIGN_RIGHT'] = 'right';
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('HasHorizontalAlignment', $p['tuple']($bases), $data);
	})();
	$m['HasVerticalAlignment'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.ui';
		$cls_definition['ALIGN_TOP'] = 'top';
		$cls_definition['ALIGN_MIDDLE'] = 'middle';
		$cls_definition['ALIGN_BOTTOM'] = 'bottom';
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('HasVerticalAlignment', $p['tuple']($bases), $data);
	})();
	$m['HasAlignment'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.ui';
		$cls_definition['ALIGN_BOTTOM'] = 'bottom';
		$cls_definition['ALIGN_MIDDLE'] = 'middle';
		$cls_definition['ALIGN_TOP'] = 'top';
		$cls_definition['ALIGN_CENTER'] = 'center';
		$cls_definition['ALIGN_LEFT'] = 'left';
		$cls_definition['ALIGN_RIGHT'] = 'right';
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('HasAlignment', $p['tuple']($bases), $data);
	})();
	$m['PROP_NAME'] = 0;
	$m['PROP_DESC'] = 1;
	$m['PROP_FNAM'] = 2;
	$m['PROP_TYPE'] = 3;
	$m['ELPROP_NAME'] = 0;
	$m['ELPROP_DESC'] = 1;
	$m['ELPROP_FNAM'] = 2;
	$m['ELPROP_TYPE'] = 3;
	$m['ELPROP_DFLT'] = 4;
	$m['get_list_columns'] = function(props, cols) {
		var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,res,idx,$iter1_iter,p,$iter2_idx,r,$iter1_array,$iter2_type,$iter2_array,$iter1_idx;
		res = $p['list']([]);
		$iter1_iter = props;
		$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
		while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
			p = $iter1_nextval.$nextval;
			r = $p['tuple']([]);
			$iter2_iter = cols;
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
				idx = $iter2_nextval.$nextval;
				r['append'](p.__getitem__(idx));
			}
			res['append'](r);
		}
		return res;
	};
	$m['get_list_columns'].__name__ = 'get_list_columns';

	$m['get_list_columns'].__bind_type__ = 0;
	$m['get_list_columns'].__args__ = [null,null,['props'],['cols']];
	$m['get_prop_widget_function_names'] = function(props) {

		return $m['get_list_columns'](props, $p['tuple']([$m['PROP_FNAM']]));
	};
	$m['get_prop_widget_function_names'].__name__ = 'get_prop_widget_function_names';

	$m['get_prop_widget_function_names'].__bind_type__ = 0;
	$m['get_prop_widget_function_names'].__args__ = [null,null,['props']];
	$m['Applier'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.ui';
		$cls_definition['_props'] = $p['list']([]);
		$cls_definition['_elem_props'] = $p['list']([]);
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[1];
					}
				} else {
				}
			}

			$pyjs_kwargs_call(self, 'applyValues', null, kwargs, [{}]);
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('applyValues', function() {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[1];
					}
				} else {
				}
			}
			var $iter3_idx,args,$iter3_type,prop,$iter3_iter,$iter3_array,$iter3_nextval,fn;
			$iter3_iter = kwargs['items']();
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,true);
			while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
				prop = $iter3_nextval.$nextval.__array[0];
				args = $iter3_nextval.$nextval.__array[1];
				fn = $p['getattr'](self, $p['sprintf']('set%s', prop), null);
				if ($p['bool'](!$p['bool'](fn))) {
					throw ($p['Exception']($p['sprintf']('setter function for %s does not exist', prop)));
				}
				args = kwargs.__getitem__(prop);
				if ($p['bool']($p['isinstance'](args, $p['tuple']))) {
					$pyjs_kwargs_call(null, fn, args, null, [{}]);
				}
				else {
					fn(args);
				}
			}
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['applyValues'] = $method;
		$method = $pyjs__bind_method2('retrieveValues', function() {
			if (this.__is_instance__ === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));

			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length));

			}
			var res,prop,$iter4_idx,$iter4_type,$iter4_nextval,$iter4_array,$iter4_iter,fn;
			res = $p['dict']([]);
			$iter4_iter = args;
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval).$nextval) != 'undefined') {
				prop = $iter4_nextval.$nextval;
				fn = $p['getattr'](self, $p['sprintf']('get%s', prop), null);
				if ($p['bool'](!$p['bool'](fn))) {
					throw ($p['Exception']($p['sprintf']('getter function for %s does not exist', prop)));
				}
				res.__setitem__(prop, fn());
			}
			return res;
		}
	, 1, ['args',null,['self']]);
		$cls_definition['retrieveValues'] = $method;
		$method = $pyjs__bind_method2('_getProps', function() {
    var self = this.prototype;
			var $attr1,$attr2;
			return (($attr1=($attr2=self)['_props']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
						$p['getattr']($attr2, '_props'):
						self['_props']);
		}
	, 2, [null,null,['self']]);
		$cls_definition['_getProps'] = $method;
		$method = $pyjs__bind_method2('_getElementProps', function() {
    var self = this.prototype;
			var $attr3,$attr4;
			return (($attr3=($attr4=self)['_elem_props']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
						$p['getattr']($attr4, '_elem_props'):
						self['_elem_props']);
		}
	, 2, [null,null,['self']]);
		$cls_definition['_getElementProps'] = $method;
		$method = $pyjs__bind_method2('setDefaults', function(defaults) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				defaults = arguments[1];
			}
			var $iter5_nextval,$iter5_array,p,$iter5_iter,$iter5_idx,$iter5_type,divs;
			divs = self['retrieveValues']((typeof wnames == "undefined"?$m.wnames:wnames));
			$iter5_iter = $m['get_prop_widget_function_names'](self['_getProps']());
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval).$nextval) != 'undefined') {
				p = $iter5_nextval.$nextval;
				defaults.__setitem__(p.__getitem__($m['PROP_NAME']), divs.__getitem__(p.__getitem__($m['PROP_FNAM'])));
			}
			return null;
		}
	, 1, [null,null,['self'],['defaults']]);
		$cls_definition['setDefaults'] = $method;
		$method = $pyjs__bind_method2('updateInstance', function(app_context) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				app_context = arguments[1];
			}
			var val,$iter6_idx,$iter6_type,convert_to_type,args,p,$iter6_array,$iter6_iter,$iter6_nextval;
			args = $p['dict']([]);
			$iter6_iter = self['_getProps']();
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval).$nextval) != 'undefined') {
				p = $iter6_nextval.$nextval;
				val = app_context['getAppProperty'](p.__getitem__(0));
				convert_to_type = p.__getitem__($m['PROP_TYPE']);
				if ($p['bool'](convert_to_type)) {
					val = ($p['bool'](val)? (convert_to_type(val)) : (null));
				}
				args.__setitem__(p.__getitem__($m['PROP_FNAM']), val);
			}
			$pyjs_kwargs_call(self, 'applyValues', null, args, [{}]);
			return null;
		}
	, 1, [null,null,['self'],['app_context']]);
		$cls_definition['updateInstance'] = $method;
		$method = $pyjs__bind_method2('setElementProperties', function(context, elemProps) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				context = arguments[1];
				elemProps = arguments[2];
			}
			var $iter7_array,val,$iter7_nextval,convert_to_type,$iter7_iter,args,p,$iter7_idx,$iter7_type;
			args = $p['dict']([]);
			$iter7_iter = self['_getElementProps']();
			$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
			while (typeof($p['__wrapped_next']($iter7_nextval).$nextval) != 'undefined') {
				p = $iter7_nextval.$nextval;
				if ($p['bool'](elemProps['has_key'](p))) {
					val = elemProps.__getitem__(p);
					convert_to_type = p.__getitem__($m['ELPROP_TYPE']);
					if ($p['bool'](convert_to_type)) {
						val = ($p['bool'](val)? (convert_to_type(val)) : (null));
					}
				}
				else {
					val = p.__getitem__($m['ELPROP_DFLT']);
					if ($p['bool']((val === null))) {
						continue;
					}
				}
				args.__setitem__(p.__getitem__($m['ELPROP_FNAM']), $p['tuple']([context, val]));
			}
			$pyjs_kwargs_call(self, 'applyValues', null, args, [{}]);
			return null;
		}
	, 1, [null,null,['self'],['context'],['elemProps']]);
		$cls_definition['setElementProperties'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Applier', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end gwt.ui */


/* end module: gwt.ui */


