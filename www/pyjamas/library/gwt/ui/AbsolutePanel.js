/* start module: gwt.ui.AbsolutePanel */
$pyjs.loaded_modules['gwt.ui.AbsolutePanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['gwt.ui.AbsolutePanel'].__was_initialized__) return $pyjs.loaded_modules['gwt.ui.AbsolutePanel'];
	if(typeof $pyjs.loaded_modules['gwt.ui'] == 'undefined' || !$pyjs.loaded_modules['gwt.ui'].__was_initialized__) $p['___import___']('gwt.ui', null);
	var $m = $pyjs.loaded_modules["gwt.ui.AbsolutePanel"];
	$m.__repr__ = function() { return "<module: gwt.ui.AbsolutePanel>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'gwt.ui.AbsolutePanel';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['gwt.ui']['AbsolutePanel'] = $pyjs.loaded_modules['gwt.ui.AbsolutePanel'];


	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'gwt.ui', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'gwt.ui', null, false);
	$m['ComplexPanel'] = $p['___import___']('pyjamas.ui.ComplexPanel.ComplexPanel', 'gwt.ui', null, false);
	$m['AbsolutePanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.ui.AbsolutePanel';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
				var ka = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof ka != 'object' || ka.__name__ != 'dict' || typeof ka.$pyjs_is_kwarg == 'undefined') {
					var ka = arguments[arguments.length+1];
				} else {
					delete ka['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var ka = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof ka != 'object' || ka.__name__ != 'dict' || typeof ka.$pyjs_is_kwarg == 'undefined') {
					ka = arguments[arguments.length+1];
				} else {
					delete ka['$pyjs_is_kwarg'];
				}
			}
			if (typeof ka == 'undefined') {
				ka = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						ka = self;
						self = arguments[1];
					}
				} else {
				}
			}
			var element,$or1,$or2;
			element = ($p['bool']($or1=ka['pop']('Element', null))?$or1:$m['DOM']['createDiv']());
			self['setElement'](element);
			$m['DOM']['setStyleAttribute'](element, 'position', 'relative');
			$m['DOM']['setStyleAttribute'](element, 'overflow', 'hidden');
			$pyjs_kwargs_call($m['ComplexPanel'], '__init__', null, ka, [{}, self]);
			return null;
		}
	, 1, [null,['ka'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('add', function(widget, left, top) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				left = arguments[2];
				top = arguments[3];
			}
			if (typeof left == 'undefined') left=arguments.callee.__args__[4][1];
			if (typeof top == 'undefined') top=arguments.callee.__args__[5][1];

			$m['ComplexPanel']['add'](self, widget, self['getElement']());
			if ($p['bool']((left !== null))) {
				self['setWidgetPosition'](widget, left, top);
			}
			return null;
		}
	, 1, [null,null,['self'],['widget'],['left', null],['top', null]]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('setWidgetPosition', function(widget, left, top) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				left = arguments[2];
				top = arguments[3];
			}
			var h,$and2,$and1;
			self['checkWidgetParent'](widget);
			h = widget['getElement']();
			if ($p['bool'](($p['bool']($and1=$p['op_eq'](left, (typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1))))?$p['op_eq'](top, (typeof ($usub2=1)=='number'?
				-$usub2:
				$p['op_usub']($usub2))):$and1))) {
				$m['DOM']['setStyleAttribute'](h, 'left', '');
				$m['DOM']['setStyleAttribute'](h, 'top', '');
				$m['DOM']['setStyleAttribute'](h, 'position', 'static');
			}
			else {
				$m['DOM']['setStyleAttribute'](h, 'position', 'absolute');
				$m['DOM']['setStyleAttribute'](h, 'left', $p['sprintf']('%dpx', left));
				$m['DOM']['setStyleAttribute'](h, 'top', $p['sprintf']('%dpx', top));
			}
			return null;
		}
	, 1, [null,null,['self'],['widget'],['left'],['top']]);
		$cls_definition['setWidgetPosition'] = $method;
		$method = $pyjs__bind_method2('getWidgetLeft', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}

			self['checkWidgetParent'](widget);
			return $m['DOM']['getIntAttribute'](widget['getElement'](), 'offsetLeft');
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['getWidgetLeft'] = $method;
		$method = $pyjs__bind_method2('getWidgetTop', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}

			self['checkWidgetParent'](widget);
			return $m['DOM']['getIntAttribute'](widget['getElement'](), 'offsetTop');
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['getWidgetTop'] = $method;
		$method = $pyjs__bind_method2('checkWidgetParent', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}

			if ($p['bool'](!$p['op_eq'](widget['getParent'](), self))) {
				throw ($p['Exception']('Widget must be a child of this panel.'));
			}
			return null;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['checkWidgetParent'] = $method;
		var $bases = new Array($m['ComplexPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('AbsolutePanel', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.AbsolutePanel', 'AbsolutePanel', $m['AbsolutePanel']);
	return this;
}; /* end gwt.ui.AbsolutePanel */


/* end module: gwt.ui.AbsolutePanel */


/*
PYJS_DEPS: ['pyjamas.Factory', 'pyjamas', 'pyjamas.DOM', 'pyjamas.ui.ComplexPanel.ComplexPanel', 'pyjamas.ui', 'pyjamas.ui.ComplexPanel']
*/
