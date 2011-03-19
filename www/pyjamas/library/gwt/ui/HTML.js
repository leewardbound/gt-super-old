/* start module: gwt.ui.HTML */
$pyjs.loaded_modules['gwt.ui.HTML'] = function (__mod_name__) {
	if($pyjs.loaded_modules['gwt.ui.HTML'].__was_initialized__) return $pyjs.loaded_modules['gwt.ui.HTML'];
	if(typeof $pyjs.loaded_modules['gwt.ui'] == 'undefined' || !$pyjs.loaded_modules['gwt.ui'].__was_initialized__) $p['___import___']('gwt.ui', null);
	var $m = $pyjs.loaded_modules["gwt.ui.HTML"];
	$m.__repr__ = function() { return "<module: gwt.ui.HTML>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'gwt.ui.HTML';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['gwt.ui']['HTML'] = $pyjs.loaded_modules['gwt.ui.HTML'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'gwt.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'gwt.ui', null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', 'gwt.ui', null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'gwt.ui', null, false);
	$m['InnerHTML'] = $p['___import___']('pyjamas.ui.InnerHTML.InnerHTML', 'gwt.ui', null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'gwt.ui', null, false);
	$m['HTML'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.ui.HTML';
		$cls_definition['_props'] = $p['list']([$p['tuple'](['wordwrap', 'Word Wrap', 'WordWrap', null]), $p['tuple'](['horzAlign', 'Horizontal Alignment', 'HorizontalAlignment', null])]);
		$method = $pyjs__bind_method2('__init__', function(html, wordWrap) {
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
				html = arguments[1];
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
				} else 				if (typeof html != 'undefined') {
					if (html !== null && typeof html['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = html;
						html = arguments[3];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[3];
					}
				} else {
				}
			}
			if (typeof html == 'undefined') html=arguments.callee.__args__[3][1];
			if (typeof wordWrap == 'undefined') wordWrap=arguments.callee.__args__[4][1];
			var $attr1,$attr2,$attr4,$attr3;
			kwargs.__setitem__('StyleName', kwargs['get']('StyleName', 'gwt-HTML'));
			if ($p['bool'](html)) {
				kwargs.__setitem__('HTML', html);
			}
			$pyjs_kwargs_call($m['Label'], '__init__', null, kwargs, [{wordWrap:wordWrap}, self]);
			self['sinkEvents'](((($attr1=($attr2=$m['Event'])['ONCLICK']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
						$p['getattr']($attr2, 'ONCLICK'):
						$m['Event']['ONCLICK']))|((($attr3=($attr4=$m['Event'])['MOUSEEVENTS']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
						$p['getattr']($attr4, 'MOUSEEVENTS'):
						$m['Event']['MOUSEEVENTS'])));
			return null;
		}
	, 1, [null,['kwargs'],['self'],['html', null],['wordWrap', true]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_getProps', function() {
    var self = this.prototype;
			var $add2,$add1,$attr5,$attr6;
			return $p['__op_add']($add1=$m['Widget']['_getProps'](),$add2=(($attr5=($attr6=self)['_props']) == null || (($attr6.__is_instance__) && typeof $attr5 == 'function') || (typeof $attr5['__get__'] == 'function')?
						$p['getattr']($attr6, '_props'):
						self['_props']));
		}
	, 2, [null,null,['self']]);
		$cls_definition['_getProps'] = $method;
		$method = $pyjs__bind_method2('_setWeirdProps', function(props, builderstate) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				props = arguments[1];
				builderstate = arguments[2];
			}
			var txt;
			if ($p['bool'](props['has_key']('label'))) {
				props.__setitem__('text', props.__getitem__('label'));
				props.__delitem__('label');
			}
			if ($p['bool'](!$p['bool'](props['has_key']('text')))) {
				return null;
			}
			txt = props.__getitem__('text');
			if ($p['bool'](props['get']('html', false))) {
				self['setHTML'](txt);
			}
			else {
				self['setText'](txt);
			}
			return null;
		}
	, 1, [null,null,['self'],['props'],['builderstate']]);
		$cls_definition['_setWeirdProps'] = $method;
		var $bases = new Array($m['Label'],$m['InnerHTML']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('HTML', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.HTML', 'HTML', $m['HTML']);
	return this;
}; /* end gwt.ui.HTML */


/* end module: gwt.ui.HTML */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.Label.Label', 'pyjamas.ui', 'pyjamas.ui.Label', 'pyjamas.ui.Event', 'pyjamas.ui.InnerHTML.InnerHTML', 'pyjamas.ui.InnerHTML', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui.Widget']
*/
