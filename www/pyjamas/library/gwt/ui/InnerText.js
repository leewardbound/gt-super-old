/* start module: gwt.ui.InnerText */
$pyjs.loaded_modules['gwt.ui.InnerText'] = function (__mod_name__) {
	if($pyjs.loaded_modules['gwt.ui.InnerText'].__was_initialized__) return $pyjs.loaded_modules['gwt.ui.InnerText'];
	if(typeof $pyjs.loaded_modules['gwt.ui'] == 'undefined' || !$pyjs.loaded_modules['gwt.ui'].__was_initialized__) $p['___import___']('gwt.ui', null);
	var $m = $pyjs.loaded_modules["gwt.ui.InnerText"];
	$m.__repr__ = function() { return "<module: gwt.ui.InnerText>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'gwt.ui.InnerText';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['gwt.ui']['InnerText'] = $pyjs.loaded_modules['gwt.ui.InnerText'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'gwt.ui', null, false);
	$m['InnerText'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.ui.InnerText';
		$cls_definition['_props'] = $p['list']([$p['tuple'](['label', 'Text', 'Text', null])]);
		$method = $pyjs__bind_method2('_getProps', function() {
    var self = this.prototype;
			var $attr1,$attr2;
			return (($attr1=($attr2=self)['_props']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
						$p['getattr']($attr2, '_props'):
						self['_props']);
		}
	, 2, [null,null,['self']]);
		$cls_definition['_getProps'] = $method;
		$method = $pyjs__bind_method2('setText', function(text) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}

			$m['DOM']['setInnerText'](self['getElement'](), text);
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['setText'] = $method;
		$method = $pyjs__bind_method2('getText', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getInnerText'](self['getElement']());
		}
	, 1, [null,null,['self']]);
		$cls_definition['getText'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('InnerText', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end gwt.ui.InnerText */


/* end module: gwt.ui.InnerText */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas']
*/
