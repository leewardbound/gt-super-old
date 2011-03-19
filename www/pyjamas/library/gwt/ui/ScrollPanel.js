/* start module: gwt.ui.ScrollPanel */
$pyjs.loaded_modules['gwt.ui.ScrollPanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['gwt.ui.ScrollPanel'].__was_initialized__) return $pyjs.loaded_modules['gwt.ui.ScrollPanel'];
	if(typeof $pyjs.loaded_modules['gwt.ui'] == 'undefined' || !$pyjs.loaded_modules['gwt.ui'].__was_initialized__) $p['___import___']('gwt.ui', null);
	var $m = $pyjs.loaded_modules["gwt.ui.ScrollPanel"];
	$m.__repr__ = function() { return "<module: gwt.ui.ScrollPanel>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'gwt.ui.ScrollPanel';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['gwt.ui']['ScrollPanel'] = $pyjs.loaded_modules['gwt.ui.ScrollPanel'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'gwt.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'gwt.ui', null, false);
	$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', 'gwt.ui', null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'gwt.ui', null, false);
	$m['ScrollPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.ui.ScrollPanel';
		$cls_definition['_props'] = $p['list']([$p['tuple'](['always', 'Always show scroll bars', 'AlwaysShowScrollBars', null]), $p['tuple'](['position', 'Vertical Scroll Position', 'ScrollPosition', null]), $p['tuple'](['horizPos', 'Horizontal Scroll Position', 'HorizontalScrollPosition', null])]);
		$method = $pyjs__bind_method2('__init__', function(child) {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				child = arguments[1];
				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof child != 'undefined') {
					if (child !== null && typeof child['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = child;
						child = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			if (typeof child == 'undefined') child=arguments.callee.__args__[3][1];
			var $attr1,$attr2;
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('scrollListeners', $p['list']([])) : $p['setattr'](self, 'scrollListeners', $p['list']([]));
			if ($p['bool']((child !== null))) {
				kwargs.__setitem__('Widget', child);
			}
			if ($p['bool'](!$p['bool'](kwargs['has_key']('AlwaysShowScrollBars')))) {
				kwargs.__setitem__('AlwaysShowScrollBars', false);
			}
			$pyjs_kwargs_call($m['SimplePanel'], '__init__', null, kwargs, [{}, self]);
			self['sinkEvents']((($attr1=($attr2=$m['Event'])['ONSCROLL']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
						$p['getattr']($attr2, 'ONSCROLL'):
						$m['Event']['ONSCROLL']));
			return null;
		}
	, 1, [null,['kwargs'],['self'],['child', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_getProps', function() {
    var self = this.prototype;
			var $add2,$add1,$attr3,$attr4;
			return $p['__op_add']($add1=$m['SimplePanel']['_getProps'](),$add2=(($attr3=($attr4=self)['_props']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
						$p['getattr']($attr4, '_props'):
						self['_props']));
		}
	, 2, [null,null,['self']]);
		$cls_definition['_getProps'] = $method;
		$method = $pyjs__bind_method2('addIndexedItem', function(index, item) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				item = arguments[2];
			}

			self['setWidget'](item);
			return null;
		}
	, 1, [null,null,['self'],['index'],['item']]);
		$cls_definition['addIndexedItem'] = $method;
		$method = $pyjs__bind_method2('getWidgetIndex', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			return 0;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['getWidgetIndex'] = $method;
		$method = $pyjs__bind_method2('getIndexedChild', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			return self['getWidget']();
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['getIndexedChild'] = $method;
		$method = $pyjs__bind_method2('addScrollListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['scrollListeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['addScrollListener'] = $method;
		$method = $pyjs__bind_method2('ensureVisible', function(item) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
			}
			var scroll,element;
			scroll = self['getElement']();
			element = item['getElement']();
			self['ensureVisibleImpl'](scroll, element);
			return null;
		}
	, 1, [null,null,['self'],['item']]);
		$cls_definition['ensureVisible'] = $method;
		$method = $pyjs__bind_method2('getScrollPosition', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getIntAttribute'](self['getElement'](), 'scrollTop');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getScrollPosition'] = $method;
		$method = $pyjs__bind_method2('getHorizontalScrollPosition', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getIntAttribute'](self['getElement'](), 'scrollLeft');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHorizontalScrollPosition'] = $method;
		$method = $pyjs__bind_method2('onBrowserEvent', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $iter1_nextval,$iter1_type,$iter1_iter,listener,$iter1_array,type,$iter1_idx;
			type = $m['DOM']['eventGetType'](event);
			if ($p['bool']($p['op_eq'](type, 'scroll'))) {
				$iter1_iter = self['scrollListeners'];
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
					listener = $iter1_nextval.$nextval;
					listener['onScroll'](self, self['getHorizontalScrollPosition'](), self['getScrollPosition']());
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		$method = $pyjs__bind_method2('removeScrollListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['scrollListeners']['remove'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['removeScrollListener'] = $method;
		$method = $pyjs__bind_method2('setAlwaysShowScrollBars', function(alwaysShow) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				alwaysShow = arguments[1];
			}
			var style;
			if ($p['bool'](alwaysShow)) {
				style = 'scroll';
			}
			else {
				style = 'auto';
			}
			$m['DOM']['setStyleAttribute'](self['getElement'](), 'overflow', style);
			return null;
		}
	, 1, [null,null,['self'],['alwaysShow']]);
		$cls_definition['setAlwaysShowScrollBars'] = $method;
		$method = $pyjs__bind_method2('setScrollPosition', function(position) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				position = arguments[1];
			}

			$m['DOM']['setIntAttribute'](self['getElement'](), 'scrollTop', position);
			return null;
		}
	, 1, [null,null,['self'],['position']]);
		$cls_definition['setScrollPosition'] = $method;
		$method = $pyjs__bind_method2('setHorizontalScrollPosition', function(position) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				position = arguments[1];
			}

			$m['DOM']['setIntAttribute'](self['getElement'](), 'scrollLeft', position);
			return null;
		}
	, 1, [null,null,['self'],['position']]);
		$cls_definition['setHorizontalScrollPosition'] = $method;
		$method = $pyjs__bind_method2('ensureVisibleImpl', function(scroll, e) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				scroll = arguments[1];
				e = arguments[2];
			}
			var $attr9,$attr8,$div2,realOffset,$and1,$attr5,$attr7,$attr6,item,$and2,$add4,$attr10,$sub2,$sub1,$div1,$add3;
			if ($p['bool'](!$p['bool'](e))) {
				return null;
			}
			item = e;
			realOffset = 0;
			while ($p['bool'](($p['bool']($and1=item)?!$p['op_eq'](item, scroll):$and1))) {
				realOffset = $p['__op_add']($add3=realOffset,$add4=(($attr5=($attr6=item)['offsetTop']) == null || (($attr6.__is_instance__) && typeof $attr5 == 'function') || (typeof $attr5['__get__'] == 'function')?
							$p['getattr']($attr6, 'offsetTop'):
							item['offsetTop']));
				item = (($attr7=($attr8=item)['offsetParent']) == null || (($attr8.__is_instance__) && typeof $attr7 == 'function') || (typeof $attr7['__get__'] == 'function')?
							$p['getattr']($attr8, 'offsetParent'):
							item['offsetParent']);
			}
			scroll.__is_instance__ && typeof scroll.__setattr__ == 'function' ? scroll.__setattr__('scrollTop', $p['__op_sub']($sub1=realOffset,$sub2=(typeof ($div1=(($attr9=($attr10=scroll)['offsetHeight']) == null || (($attr10.__is_instance__) && typeof $attr9 == 'function') || (typeof $attr9['__get__'] == 'function')?
						$p['getattr']($attr10, 'offsetHeight'):
						scroll['offsetHeight']))==typeof ($div2=2) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2)))) : $p['setattr'](scroll, 'scrollTop', $p['__op_sub']($sub1=realOffset,$sub2=(typeof ($div1=(($attr9=($attr10=scroll)['offsetHeight']) == null || (($attr10.__is_instance__) && typeof $attr9 == 'function') || (typeof $attr9['__get__'] == 'function')?
						$p['getattr']($attr10, 'offsetHeight'):
						scroll['offsetHeight']))==typeof ($div2=2) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2))));
			return null;
		}
	, 1, [null,null,['self'],['scroll'],['e']]);
		$cls_definition['ensureVisibleImpl'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ScrollPanel', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.ScrollPanel', 'ScrollPanel', $m['ScrollPanel']);
	return this;
}; /* end gwt.ui.ScrollPanel */


/* end module: gwt.ui.ScrollPanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui', 'pyjamas.ui.SimplePanel', 'pyjamas.ui.Event']
*/
