/* start module: gwt.ui.CellPanel */
$pyjs.loaded_modules['gwt.ui.CellPanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['gwt.ui.CellPanel'].__was_initialized__) return $pyjs.loaded_modules['gwt.ui.CellPanel'];
	if(typeof $pyjs.loaded_modules['gwt.ui'] == 'undefined' || !$pyjs.loaded_modules['gwt.ui'].__was_initialized__) $p['___import___']('gwt.ui', null);
	var $m = $pyjs.loaded_modules["gwt.ui.CellPanel"];
	$m.__repr__ = function() { return "<module: gwt.ui.CellPanel>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'gwt.ui.CellPanel';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['gwt.ui']['CellPanel'] = $pyjs.loaded_modules['gwt.ui.CellPanel'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'gwt.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'gwt.ui', null, false);
	$m['ComplexPanel'] = $p['___import___']('pyjamas.ui.ComplexPanel.ComplexPanel', 'gwt.ui', null, false);
	$m['HasHorizontalAlignment'] = $p['___import___']('pyjamas.ui.HasHorizontalAlignment', 'gwt.ui', null, false);
	$m['HasVerticalAlignment'] = $p['___import___']('pyjamas.ui.HasVerticalAlignment', 'gwt.ui', null, false);
	$m['CellPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.ui.CellPanel';
		$cls_definition['_props'] = $p['list']([$p['tuple'](['horzAlign', 'Horizontal alignment', 'HorizontalAlignment', null]), $p['tuple'](['vertAlign', 'Vertical alignment', 'VerticalAlignment', null]), $p['tuple'](['border', 'Border width', 'BorderWidth', $p['float_int']]), $p['tuple'](['spacing', 'Spacing', 'Spacing', null]), $p['tuple'](['padding', 'Padding', 'Padding', null])]);
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
			var $attr9,$attr8,$or1,$or2,$attr1,$attr2,$attr5,$attr4,$attr7,element,fc,$attr10,$attr6,$attr3;
			kwargs.__setitem__('Spacing', kwargs['get']('Spacing', 0));
			kwargs.__setitem__('Padding', kwargs['get']('Padding', 0));
			kwargs.__setitem__('HorizontalAlignment', kwargs['get']('HorizontalAlignment', (($attr1=($attr2=$m['HasHorizontalAlignment'])['ALIGN_LEFT']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
						$p['getattr']($attr2, 'ALIGN_LEFT'):
						$m['HasHorizontalAlignment']['ALIGN_LEFT'])));
			kwargs.__setitem__('VerticalAlignment', kwargs['get']('VerticalAlignment', (($attr3=($attr4=$m['HasVerticalAlignment'])['ALIGN_TOP']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
						$p['getattr']($attr4, 'ALIGN_TOP'):
						$m['HasVerticalAlignment']['ALIGN_TOP'])));
			element = ($p['bool']($or1=kwargs['pop']('Element', null))?$or1:$m['DOM']['createTable']());
			fc = $m['DOM']['getFirstChild'](element);
			if ($p['bool'](fc)) {
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('body', fc) : $p['setattr'](self, 'body', fc);
			}
			else {
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('body', $m['DOM']['createTBody']()) : $p['setattr'](self, 'body', $m['DOM']['createTBody']());
			}
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('table', element) : $p['setattr'](self, 'table', element);
			self['setElement']((($attr5=($attr6=self)['table']) == null || (($attr6.__is_instance__) && typeof $attr5 == 'function') || (typeof $attr5['__get__'] == 'function')?
						$p['getattr']($attr6, 'table'):
						self['table']));
			$m['DOM']['appendChild']((($attr7=($attr8=self)['table']) == null || (($attr8.__is_instance__) && typeof $attr7 == 'function') || (typeof $attr7['__get__'] == 'function')?
						$p['getattr']($attr8, 'table'):
						self['table']), (($attr9=($attr10=self)['body']) == null || (($attr10.__is_instance__) && typeof $attr9 == 'function') || (typeof $attr9['__get__'] == 'function')?
						$p['getattr']($attr10, 'body'):
						self['body']));
			$pyjs_kwargs_call($m['ComplexPanel'], '__init__', null, kwargs, [{}, self]);
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_getProps', function() {
    var self = this.prototype;
			var $add2,$add1,$attr11,$attr12;
			return $p['__op_add']($add1=$m['ComplexPanel']['_getProps'](),$add2=(($attr11=($attr12=self)['_props']) == null || (($attr12.__is_instance__) && typeof $attr11 == 'function') || (typeof $attr11['__get__'] == 'function')?
						$p['getattr']($attr12, '_props'):
						self['_props']));
		}
	, 2, [null,null,['self']]);
		$cls_definition['_getProps'] = $method;
		$method = $pyjs__bind_method2('getTable', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr14,$attr13;
			return (($attr13=($attr14=self)['table']) == null || (($attr14.__is_instance__) && typeof $attr13 == 'function') || (typeof $attr13['__get__'] == 'function')?
						$p['getattr']($attr14, 'table'):
						self['table']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTable'] = $method;
		$method = $pyjs__bind_method2('getBody', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr15,$attr16;
			return (($attr15=($attr16=self)['body']) == null || (($attr16.__is_instance__) && typeof $attr15 == 'function') || (typeof $attr15['__get__'] == 'function')?
						$p['getattr']($attr16, 'body'):
						self['body']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getBody'] = $method;
		$method = $pyjs__bind_method2('getBorderWidth', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr17,$attr18;
			return $m['DOM']['getAttribute']((($attr17=($attr18=self)['table']) == null || (($attr18.__is_instance__) && typeof $attr17 == 'function') || (typeof $attr17['__get__'] == 'function')?
						$p['getattr']($attr18, 'table'):
						self['table']), 'border');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getBorderWidth'] = $method;
		$method = $pyjs__bind_method2('getCellHeight', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}
			var td;
			td = $m['DOM']['getParent'](widget['getElement']());
			return $m['DOM']['getAttribute'](td, 'height');
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['getCellHeight'] = $method;
		$method = $pyjs__bind_method2('getCellWidth', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}
			var td;
			td = $m['DOM']['getParent'](widget['getElement']());
			return $m['DOM']['getAttribute'](td, 'width');
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['getCellWidth'] = $method;
		$method = $pyjs__bind_method2('getSpacing', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr20,$attr19;
			return (($attr19=($attr20=self)['spacing']) == null || (($attr20.__is_instance__) && typeof $attr19 == 'function') || (typeof $attr19['__get__'] == 'function')?
						$p['getattr']($attr20, 'spacing'):
						self['spacing']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getSpacing'] = $method;
		$method = $pyjs__bind_method2('getPadding', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr21,$attr22;
			return (($attr21=($attr22=self)['padding']) == null || (($attr22.__is_instance__) && typeof $attr21 == 'function') || (typeof $attr21['__get__'] == 'function')?
						$p['getattr']($attr22, 'padding'):
						self['padding']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getPadding'] = $method;
		$method = $pyjs__bind_method2('getCellHorizontalAlignment', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}
			var td;
			td = self['getWidgetTd'](widget);
			if ($p['bool']((td === null))) {
				return null;
			}
			return $m['DOM']['getAttribute'](td, 'align');
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['getCellHorizontalAlignment'] = $method;
		$method = $pyjs__bind_method2('getCellVerticalAlignment', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}
			var td;
			td = self['getWidgetTd'](widget);
			if ($p['bool']((td === null))) {
				return null;
			}
			return $m['DOM']['getStyleAttribute'](td, 'verticalAlign');
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['getCellVerticalAlignment'] = $method;
		$method = $pyjs__bind_method2('getWidgetTd', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}

			if ($p['bool'](!$p['op_eq'](widget['getParent'](), self))) {
				return null;
			}
			return $m['DOM']['getParent'](widget['getElement']());
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['getWidgetTd'] = $method;
		$method = $pyjs__bind_method2('setBorderWidth', function(width) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
			}
			var $attr23,$attr24,$attr25,$attr26;
			if ($p['bool']((width === null))) {
				$m['DOM']['setAttribute']((($attr23=($attr24=self)['table']) == null || (($attr24.__is_instance__) && typeof $attr23 == 'function') || (typeof $attr23['__get__'] == 'function')?
							$p['getattr']($attr24, 'table'):
							self['table']), 'border', null);
			}
			else {
				$m['DOM']['setAttribute']((($attr25=($attr26=self)['table']) == null || (($attr26.__is_instance__) && typeof $attr25 == 'function') || (typeof $attr25['__get__'] == 'function')?
							$p['getattr']($attr26, 'table'):
							self['table']), 'border', $p['str'](width));
			}
			return null;
		}
	, 1, [null,null,['self'],['width']]);
		$cls_definition['setBorderWidth'] = $method;
		$method = $pyjs__bind_method2('setCellHeight', function(widget, height) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				height = arguments[2];
			}
			var td;
			td = $m['DOM']['getParent'](widget['getElement']());
			if ($p['bool']((height === null))) {
				$m['DOM']['removeAttribute'](td, 'height');
			}
			else {
				$m['DOM']['setAttribute'](td, 'height', $p['str'](height));
			}
			return null;
		}
	, 1, [null,null,['self'],['widget'],['height']]);
		$cls_definition['setCellHeight'] = $method;
		$method = $pyjs__bind_method2('setCellHorizontalAlignment', function(widget, align) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				align = arguments[2];
			}
			var td;
			td = self['getWidgetTd'](widget);
			if ($p['bool']((td !== null))) {
				if ($p['bool']((align === null))) {
					$m['DOM']['removeAttribute'](td, 'align');
				}
				else {
					$m['DOM']['setAttribute'](td, 'align', align);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['widget'],['align']]);
		$cls_definition['setCellHorizontalAlignment'] = $method;
		$method = $pyjs__bind_method2('setCellVerticalAlignment', function(widget, align) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				align = arguments[2];
			}
			var td;
			td = self['getWidgetTd'](widget);
			if ($p['bool']((td !== null))) {
				if ($p['bool']((align === null))) {
					$m['DOM']['setStyleAttribute'](td, 'verticalAlign', '');
				}
				else {
					$m['DOM']['setStyleAttribute'](td, 'verticalAlign', align);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['widget'],['align']]);
		$cls_definition['setCellVerticalAlignment'] = $method;
		$method = $pyjs__bind_method2('setCellWidth', function(widget, width) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				width = arguments[2];
			}
			var td;
			td = $m['DOM']['getParent'](widget['getElement']());
			if ($p['bool']((width === null))) {
				$m['DOM']['removeAttribute'](td, 'width');
			}
			else {
				$m['DOM']['setAttribute'](td, 'width', $p['str'](width));
			}
			return null;
		}
	, 1, [null,null,['self'],['widget'],['width']]);
		$cls_definition['setCellWidth'] = $method;
		$method = $pyjs__bind_method2('setSpacing', function(spacing) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				spacing = arguments[1];
			}
			var $attr30,$attr27,$attr28,$attr29;
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('spacing', spacing) : $p['setattr'](self, 'spacing', spacing);
			if ($p['bool']((spacing === null))) {
				$m['DOM']['removeAttribute']((($attr27=($attr28=self)['table']) == null || (($attr28.__is_instance__) && typeof $attr27 == 'function') || (typeof $attr27['__get__'] == 'function')?
							$p['getattr']($attr28, 'table'):
							self['table']), 'cellSpacing');
			}
			else {
				$m['DOM']['setAttribute']((($attr29=($attr30=self)['table']) == null || (($attr30.__is_instance__) && typeof $attr29 == 'function') || (typeof $attr29['__get__'] == 'function')?
							$p['getattr']($attr30, 'table'):
							self['table']), 'cellSpacing', $p['str'](spacing));
			}
			return null;
		}
	, 1, [null,null,['self'],['spacing']]);
		$cls_definition['setSpacing'] = $method;
		$method = $pyjs__bind_method2('setPadding', function(padding) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				padding = arguments[1];
			}
			var $attr33,$attr32,$attr31,$attr34;
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('padding', padding) : $p['setattr'](self, 'padding', padding);
			if ($p['bool']((padding === null))) {
				$m['DOM']['removeAttribute']((($attr31=($attr32=self)['table']) == null || (($attr32.__is_instance__) && typeof $attr31 == 'function') || (typeof $attr31['__get__'] == 'function')?
							$p['getattr']($attr32, 'table'):
							self['table']), 'cellPadding');
			}
			else {
				$m['DOM']['setAttribute']((($attr33=($attr34=self)['table']) == null || (($attr34.__is_instance__) && typeof $attr33 == 'function') || (typeof $attr33['__get__'] == 'function')?
							$p['getattr']($attr34, 'table'):
							self['table']), 'cellPadding', $p['str'](padding));
			}
			return null;
		}
	, 1, [null,null,['self'],['padding']]);
		$cls_definition['setPadding'] = $method;
		$method = $pyjs__bind_method2('setHorizontalAlignment', function(align) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				align = arguments[1];
			}

			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('horzAlign', align) : $p['setattr'](self, 'horzAlign', align);
			return null;
		}
	, 1, [null,null,['self'],['align']]);
		$cls_definition['setHorizontalAlignment'] = $method;
		$method = $pyjs__bind_method2('setVerticalAlignment', function(align) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				align = arguments[1];
			}

			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('vertAlign', align) : $p['setattr'](self, 'vertAlign', align);
			return null;
		}
	, 1, [null,null,['self'],['align']]);
		$cls_definition['setVerticalAlignment'] = $method;
		$method = $pyjs__bind_method2('getHorizontalAlignment', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr36,$attr35;
			return (($attr35=($attr36=self)['horzAlign']) == null || (($attr36.__is_instance__) && typeof $attr35 == 'function') || (typeof $attr35['__get__'] == 'function')?
						$p['getattr']($attr36, 'horzAlign'):
						self['horzAlign']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHorizontalAlignment'] = $method;
		$method = $pyjs__bind_method2('getVerticalAlignment', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr38,$attr37;
			return (($attr37=($attr38=self)['vertAlign']) == null || (($attr38.__is_instance__) && typeof $attr37 == 'function') || (typeof $attr37['__get__'] == 'function')?
						$p['getattr']($attr38, 'vertAlign'):
						self['vertAlign']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getVerticalAlignment'] = $method;
		var $bases = new Array($m['ComplexPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('CellPanel', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.CellPanel', 'CellPanel', $m['CellPanel']);
	return this;
}; /* end gwt.ui.CellPanel */


/* end module: gwt.ui.CellPanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.ComplexPanel.ComplexPanel', 'pyjamas.ui', 'pyjamas.ui.ComplexPanel', 'pyjamas.ui.HasHorizontalAlignment', 'pyjamas.ui.HasVerticalAlignment']
*/
