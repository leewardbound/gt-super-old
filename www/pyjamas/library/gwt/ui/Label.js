/* start module: gwt.ui.Label */
$pyjs.loaded_modules['gwt.ui.Label'] = function (__mod_name__) {
	if($pyjs.loaded_modules['gwt.ui.Label'].__was_initialized__) return $pyjs.loaded_modules['gwt.ui.Label'];
	if(typeof $pyjs.loaded_modules['gwt.ui'] == 'undefined' || !$pyjs.loaded_modules['gwt.ui'].__was_initialized__) $p['___import___']('gwt.ui', null);
	var $m = $pyjs.loaded_modules["gwt.ui.Label"];
	$m.__repr__ = function() { return "<module: gwt.ui.Label>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'gwt.ui.Label';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['gwt.ui']['Label'] = $pyjs.loaded_modules['gwt.ui.Label'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'gwt.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'gwt.ui', null, false);
	$m['InnerText'] = $p['___import___']('pyjamas.ui.InnerText.InnerText', 'gwt.ui', null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'gwt.ui', null, false);
	$m['MouseHandler'] = $p['___import___']('pyjamas.ui.MouseListener.MouseHandler', 'gwt.ui', null, false);
	$m['ClickHandler'] = $p['___import___']('pyjamas.ui.ClickListener.ClickHandler', 'gwt.ui', null, false);
	$m['Label'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.ui.Label';
		$cls_definition['_props'] = $p['list']([$p['tuple'](['label', 'Label', 'Text', null]), $p['tuple'](['wordwrap', 'Word Wrap', 'WordWrap', null]), $p['tuple'](['horzAlign', 'Horizontal Alignment', 'HorizontalAlignment', null])]);
		$method = $pyjs__bind_method2('__init__', function(text, wordWrap) {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				text = arguments[1];
				wordWrap = arguments[2];
				var kwargs = arguments.length >= 4 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof wordWrap != 'undefined') {
					if (wordWrap !== null && typeof wordWrap['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = wordWrap;
						wordWrap = arguments[3];
					}
				} else 				if (typeof text != 'undefined') {
					if (text !== null && typeof text['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = text;
						text = arguments[3];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[3];
					}
				} else {
				}
			}
			if (typeof text == 'undefined') text=arguments.callee.__args__[3][1];
			if (typeof wordWrap == 'undefined') wordWrap=arguments.callee.__args__[4][1];
			var $or1,$or2;
			kwargs.__setitem__('StyleName', kwargs['get']('StyleName', 'gwt-Label'));
			kwargs.__setitem__('WordWrap', kwargs['get']('WordWrap', wordWrap));
			kwargs.__setitem__('HorizontalAlignment', kwargs['get']('HorizontalAlignment', ''));
			if ($p['bool'](text)) {
				kwargs.__setitem__('Text', text);
			}
			self['setElement'](($p['bool']($or1=kwargs['pop']('Element', null))?$or1:$m['DOM']['createDiv']()));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('horzAlign', '') : $p['setattr'](self, 'horzAlign', '');
			$pyjs_kwargs_call($m['Widget'], '__init__', null, kwargs, [{}, self]);
			$m['MouseHandler']['__init__'](self);
			$m['ClickHandler']['__init__'](self);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['text', null],['wordWrap', true]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_getProps', function() {
    var self = this.prototype;
			var $attr1,$attr2,$add2,$add3,$add1,$add4;
			return $p['__op_add']($add3=$p['__op_add']($add1=$m['Widget']['_getProps'](),$add2=$m['InnerText']['_getProps']()),$add4=(($attr1=($attr2=self)['_props']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
						$p['getattr']($attr2, '_props'):
						self['_props']));
		}
	, 2, [null,null,['self']]);
		$cls_definition['_getProps'] = $method;
		$method = $pyjs__bind_method2('getHorizontalAlignment', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr3,$attr4;
			return (($attr3=($attr4=self)['horzAlign']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
						$p['getattr']($attr4, 'horzAlign'):
						self['horzAlign']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHorizontalAlignment'] = $method;
		$method = $pyjs__bind_method2('getWordWrap', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var ws;
			ws = $m['DOM']['getStyleAttribute'](self['getElement'](), 'whiteSpace');
			return !$p['op_eq'](ws, 'nowrap');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getWordWrap'] = $method;
		$method = $pyjs__bind_method2('setHorizontalAlignment', function(align) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				align = arguments[1];
			}

			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('horzAlign', align) : $p['setattr'](self, 'horzAlign', align);
			$m['DOM']['setStyleAttribute'](self['getElement'](), 'textAlign', align);
			return null;
		}
	, 1, [null,null,['self'],['align']]);
		$cls_definition['setHorizontalAlignment'] = $method;
		$method = $pyjs__bind_method2('setWordWrap', function(wrap) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				wrap = arguments[1];
			}
			var $or4,style,$or3,$and1,$and2;
			style = ($p['bool']($or3=($p['bool']($and1=wrap)?'normal':$and1))?$or3:'nowrap');
			$m['DOM']['setStyleAttribute'](self['getElement'](), 'whiteSpace', style);
			return null;
		}
	, 1, [null,null,['self'],['wrap']]);
		$cls_definition['setWordWrap'] = $method;
		var $bases = new Array($m['Widget'],$m['MouseHandler'],$m['ClickHandler'],$m['InnerText']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Label', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.Label', 'Label', $m['Label']);
	return this;
}; /* end gwt.ui.Label */


/* end module: gwt.ui.Label */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.InnerText.InnerText', 'pyjamas.ui', 'pyjamas.ui.InnerText', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui.Widget', 'pyjamas.ui.MouseListener.MouseHandler', 'pyjamas.ui.MouseListener', 'pyjamas.ui.ClickListener.ClickHandler', 'pyjamas.ui.ClickListener']
*/
