/* start module: gwt.ui.VerticalPanel */
$pyjs.loaded_modules['gwt.ui.VerticalPanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['gwt.ui.VerticalPanel'].__was_initialized__) return $pyjs.loaded_modules['gwt.ui.VerticalPanel'];
	if(typeof $pyjs.loaded_modules['gwt.ui'] == 'undefined' || !$pyjs.loaded_modules['gwt.ui'].__was_initialized__) $p['___import___']('gwt.ui', null);
	var $m = $pyjs.loaded_modules["gwt.ui.VerticalPanel"];
	$m.__repr__ = function() { return "<module: gwt.ui.VerticalPanel>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'gwt.ui.VerticalPanel';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['gwt.ui']['VerticalPanel'] = $pyjs.loaded_modules['gwt.ui.VerticalPanel'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'gwt.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'gwt.ui', null, false);
	$m['CellPanel'] = $p['___import___']('pyjamas.ui.CellPanel.CellPanel', 'gwt.ui', null, false);
	$m['HasHorizontalAlignment'] = $p['___import___']('pyjamas.ui.HasHorizontalAlignment', 'gwt.ui', null, false);
	$m['HasVerticalAlignment'] = $p['___import___']('pyjamas.ui.HasVerticalAlignment', 'gwt.ui', null, false);
	$m['VerticalPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.ui.VerticalPanel';
		$method = $pyjs__bind_method2('insert', function(widget, beforeIndex) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				beforeIndex = arguments[2];
			}
			var $attr1,$attr2,tr,$attr4,td,$attr3;
			widget['removeFromParent']();
			tr = $m['DOM']['createTR']();
			td = $m['DOM']['createTD']();
			$m['DOM']['insertChild'](self['getBody'](), tr, beforeIndex);
			$m['DOM']['appendChild'](tr, td);
			$m['CellPanel']['insert'](self, widget, td, beforeIndex);
			self['setCellHorizontalAlignment'](widget, (($attr1=($attr2=self)['horzAlign']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
						$p['getattr']($attr2, 'horzAlign'):
						self['horzAlign']));
			self['setCellVerticalAlignment'](widget, (($attr3=($attr4=self)['vertAlign']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
						$p['getattr']($attr4, 'vertAlign'):
						self['vertAlign']));
			return null;
		}
	, 1, [null,null,['self'],['widget'],['beforeIndex']]);
		$cls_definition['insert'] = $method;
		$method = $pyjs__bind_method2('remove', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}
			var td,tr;
			if ($p['bool']($p['isinstance'](widget, $p['float_int']))) {
				widget = self['getWidget'](widget);
			}
			if ($p['bool'](!$p['op_eq'](widget['getParent'](), self))) {
				return false;
			}
			td = $m['DOM']['getParent'](widget['getElement']());
			tr = $m['DOM']['getParent'](td);
			$m['DOM']['removeChild'](self['getBody'](), tr);
			$m['CellPanel']['remove'](self, widget);
			return true;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['remove'] = $method;
		var $bases = new Array($m['CellPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('VerticalPanel', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.VerticalPanel', 'VerticalPanel', $m['VerticalPanel']);
	return this;
}; /* end gwt.ui.VerticalPanel */


/* end module: gwt.ui.VerticalPanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.CellPanel.CellPanel', 'pyjamas.ui', 'pyjamas.ui.CellPanel', 'pyjamas.ui.HasHorizontalAlignment', 'pyjamas.ui.HasVerticalAlignment']
*/
