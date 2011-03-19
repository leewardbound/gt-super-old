/* start module: gwt.ui.Hyperlink */
$pyjs.loaded_modules['gwt.ui.Hyperlink'] = function (__mod_name__) {
	if($pyjs.loaded_modules['gwt.ui.Hyperlink'].__was_initialized__) return $pyjs.loaded_modules['gwt.ui.Hyperlink'];
	if(typeof $pyjs.loaded_modules['gwt.ui'] == 'undefined' || !$pyjs.loaded_modules['gwt.ui'].__was_initialized__) $p['___import___']('gwt.ui', null);
	var $m = $pyjs.loaded_modules["gwt.ui.Hyperlink"];
	$m.__repr__ = function() { return "<module: gwt.ui.Hyperlink>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'gwt.ui.Hyperlink';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['gwt.ui']['Hyperlink'] = $pyjs.loaded_modules['gwt.ui.Hyperlink'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'gwt.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'gwt.ui', null, false);
	$m['History'] = $p['___import___']('pyjamas.History', 'gwt.ui', null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'gwt.ui', null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'gwt.ui', null, false);
	$m['ClickHandler'] = $p['___import___']('pyjamas.ui.ClickListener.ClickHandler', 'gwt.ui', null, false);
	$m['Hyperlink'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.ui.Hyperlink';
		$method = $pyjs__bind_method2('__init__', function(text, asHTML, Element) {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 4 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				text = arguments[1];
				asHTML = arguments[2];
				Element = arguments[3];
				var kwargs = arguments.length >= 5 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof Element != 'undefined') {
					if (Element !== null && typeof Element['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = Element;
						Element = arguments[4];
					}
				} else 				if (typeof asHTML != 'undefined') {
					if (asHTML !== null && typeof asHTML['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = asHTML;
						asHTML = arguments[4];
					}
				} else 				if (typeof text != 'undefined') {
					if (text !== null && typeof text['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = text;
						text = arguments[4];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[4];
					}
				} else {
				}
			}
			if (typeof text == 'undefined') text=arguments.callee.__args__[3][1];
			if (typeof asHTML == 'undefined') asHTML=arguments.callee.__args__[4][1];
			if (typeof Element == 'undefined') Element=arguments.callee.__args__[5][1];
			var $attr1,$attr2;
			if ($p['bool']((Element === null))) {
				Element = $m['DOM']['createDiv']();
			}
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('anchorElem', $m['DOM']['createAnchor']()) : $p['setattr'](self, 'anchorElem', $m['DOM']['createAnchor']());
			self['setElement'](Element);
			$m['DOM']['appendChild'](self['getElement'](), (($attr1=($attr2=self)['anchorElem']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
						$p['getattr']($attr2, 'anchorElem'):
						self['anchorElem']));
			if ($p['bool'](!$p['bool'](kwargs['has_key']('StyleName')))) {
				kwargs.__setitem__('StyleName', 'gwt-Hyperlink');
			}
			if ($p['bool'](text)) {
				if ($p['bool'](asHTML)) {
					kwargs.__setitem__('HTML', text);
				}
				else {
					kwargs.__setitem__('Text', text);
				}
			}
			if ($p['bool'](!$p['bool'](kwargs['has_key']('TargetHistoryToken')))) {
				kwargs.__setitem__('TargetHistoryToken', null);
			}
			$pyjs_kwargs_call($m['Widget'], '__init__', null, kwargs, [{}, self]);
			$m['ClickHandler']['__init__'](self);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['text', ''],['asHTML', false],['Element', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onBrowserEvent', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var event_type,$attr3,$attr5,$attr4,$attr6;
			$m['Widget']['onBrowserEvent'](self, event);
			event_type = $m['DOM']['eventGetType'](event);
			if ($p['bool']($p['op_eq'](event_type, 'click'))) {
				$m['DOM']['eventPreventDefault'](event);
				if ($p['bool'](((($attr3=($attr4=self)['targetHistoryToken']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
							$p['getattr']($attr4, 'targetHistoryToken'):
							self['targetHistoryToken']) !== null))) {
					$m['History']['newItem']((($attr5=($attr6=self)['targetHistoryToken']) == null || (($attr6.__is_instance__) && typeof $attr5 == 'function') || (typeof $attr5['__get__'] == 'function')?
								$p['getattr']($attr6, 'targetHistoryToken'):
								self['targetHistoryToken']));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		$method = $pyjs__bind_method2('getHTML', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr8,$attr7;
			return $m['DOM']['getInnerHTML']((($attr7=($attr8=self)['anchorElem']) == null || (($attr8.__is_instance__) && typeof $attr7 == 'function') || (typeof $attr7['__get__'] == 'function')?
						$p['getattr']($attr8, 'anchorElem'):
						self['anchorElem']));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHTML'] = $method;
		$method = $pyjs__bind_method2('setHTML', function(html) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				html = arguments[1];
			}
			var $attr9,$attr10;
			$m['DOM']['setInnerHTML']((($attr9=($attr10=self)['anchorElem']) == null || (($attr10.__is_instance__) && typeof $attr9 == 'function') || (typeof $attr9['__get__'] == 'function')?
						$p['getattr']($attr10, 'anchorElem'):
						self['anchorElem']), html);
			return null;
		}
	, 1, [null,null,['self'],['html']]);
		$cls_definition['setHTML'] = $method;
		$method = $pyjs__bind_method2('getText', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr11,$attr12;
			return $m['DOM']['getInnerText']((($attr11=($attr12=self)['anchorElem']) == null || (($attr12.__is_instance__) && typeof $attr11 == 'function') || (typeof $attr11['__get__'] == 'function')?
						$p['getattr']($attr12, 'anchorElem'):
						self['anchorElem']));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getText'] = $method;
		$method = $pyjs__bind_method2('setText', function(text) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}
			var $attr13,$attr14;
			$m['DOM']['setInnerText']((($attr13=($attr14=self)['anchorElem']) == null || (($attr14.__is_instance__) && typeof $attr13 == 'function') || (typeof $attr13['__get__'] == 'function')?
						$p['getattr']($attr14, 'anchorElem'):
						self['anchorElem']), text);
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['setText'] = $method;
		$method = $pyjs__bind_method2('getTargetHistoryToken', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr15,$attr16;
			return (($attr15=($attr16=self)['targetHistoryToken']) == null || (($attr16.__is_instance__) && typeof $attr15 == 'function') || (typeof $attr15['__get__'] == 'function')?
						$p['getattr']($attr16, 'targetHistoryToken'):
						self['targetHistoryToken']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTargetHistoryToken'] = $method;
		$method = $pyjs__bind_method2('setTargetHistoryToken', function(targetHistoryToken) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				targetHistoryToken = arguments[1];
			}
			var $add2,$add1,$attr18,$attr17;
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('targetHistoryToken', targetHistoryToken) : $p['setattr'](self, 'targetHistoryToken', targetHistoryToken);
			if ($p['bool']((targetHistoryToken === null))) {
				targetHistoryToken = '';
			}
			$m['DOM']['setAttribute']((($attr17=($attr18=self)['anchorElem']) == null || (($attr18.__is_instance__) && typeof $attr17 == 'function') || (typeof $attr17['__get__'] == 'function')?
						$p['getattr']($attr18, 'anchorElem'):
						self['anchorElem']), 'href', $p['__op_add']($add1='#',$add2=targetHistoryToken));
			return null;
		}
	, 1, [null,null,['self'],['targetHistoryToken']]);
		$cls_definition['setTargetHistoryToken'] = $method;
		var $bases = new Array($m['Widget'],$m['ClickHandler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Hyperlink', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.Hyperlink', 'Hyperlink', $m['Hyperlink']);
	return this;
}; /* end gwt.ui.Hyperlink */


/* end module: gwt.ui.Hyperlink */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.History', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui', 'pyjamas.ui.Widget', 'pyjamas.ui.Event', 'pyjamas.ui.ClickListener.ClickHandler', 'pyjamas.ui.ClickListener']
*/
