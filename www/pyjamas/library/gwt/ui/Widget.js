/* start module: gwt.ui.Widget */
$pyjs.loaded_modules['gwt.ui.Widget'] = function (__mod_name__) {
	if($pyjs.loaded_modules['gwt.ui.Widget'].__was_initialized__) return $pyjs.loaded_modules['gwt.ui.Widget'];
	if(typeof $pyjs.loaded_modules['gwt.ui'] == 'undefined' || !$pyjs.loaded_modules['gwt.ui'].__was_initialized__) $p['___import___']('gwt.ui', null);
	var $m = $pyjs.loaded_modules["gwt.ui.Widget"];
	$m.__repr__ = function() { return "<module: gwt.ui.Widget>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'gwt.ui.Widget';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['gwt.ui']['Widget'] = $pyjs.loaded_modules['gwt.ui.Widget'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'gwt.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'gwt.ui', null, false);
	$m['log'] = $p['___import___']('pyjamas.log', 'gwt.ui', null, false);
	$m['UIObject'] = $p['___import___']('pyjamas.ui.UIObject.UIObject', 'gwt.ui', null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'gwt.ui', null, false);
	$m['ClickHandler'] = $p['___import___']('pyjamas.ui.ClickListener.ClickHandler', 'gwt.ui', null, false);
	$m['FocusHandler'] = $p['___import___']('pyjamas.ui.FocusListener.FocusHandler', 'gwt.ui', null, false);
	$m['KeyboardHandler'] = $p['___import___']('pyjamas.ui.KeyboardListener.KeyboardHandler', 'gwt.ui', null, false);
	$m['MouseHandler'] = $p['___import___']('pyjamas.ui.MouseListener.MouseHandler', 'gwt.ui', null, false);
	$m['MouseWheelHandler'] = $p['___import___']('pyjamas.ui.MouseListener.MouseWheelHandler', 'gwt.ui', null, false);
	$m['DragHandler'] = $p['___import___']('pyjamas.ui.DragHandler.DragHandler', 'gwt.ui', null, false);
	$m['DropHandler'] = $p['___import___']('pyjamas.ui.DropHandler.DropHandler', 'gwt.ui', null, false);
	$m['Widget'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.ui.Widget';
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

			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('attached', false) : $p['setattr'](self, 'attached', false);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('parent', null) : $p['setattr'](self, 'parent', null);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('layoutData', null) : $p['setattr'](self, 'layoutData', null);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('contextMenu', null) : $p['setattr'](self, 'contextMenu', null);
			$pyjs_kwargs_call($m['UIObject'], '__init__', null, kwargs, [{}, self]);
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getLayoutData', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr1,$attr2;
			return (($attr1=($attr2=self)['layoutData']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
						$p['getattr']($attr2, 'layoutData'):
						self['layoutData']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getLayoutData'] = $method;
		$method = $pyjs__bind_method2('getParent', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr3,$attr4;
			return (($attr3=($attr4=self)['parent']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
						$p['getattr']($attr4, 'parent'):
						self['parent']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getParent'] = $method;
		$method = $pyjs__bind_method2('isAttached', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr5,$attr6;
			return (($attr5=($attr6=self)['attached']) == null || (($attr6.__is_instance__) && typeof $attr5 == 'function') || (typeof $attr5['__get__'] == 'function')?
						$p['getattr']($attr6, 'attached'):
						self['attached']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['isAttached'] = $method;
		$method = $pyjs__bind_method2('setContextMenu', function(menu) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				menu = arguments[1];
			}
			var $attr9,$attr8,$attr7,$attr10;
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('contextMenu', menu) : $p['setattr'](self, 'contextMenu', menu);
			if ($p['bool']((menu !== null))) {
				self['sinkEvents']((($attr7=($attr8=$m['Event'])['ONCONTEXTMENU']) == null || (($attr8.__is_instance__) && typeof $attr7 == 'function') || (typeof $attr7['__get__'] == 'function')?
							$p['getattr']($attr8, 'ONCONTEXTMENU'):
							$m['Event']['ONCONTEXTMENU']));
			}
			else {
				self['unsinkEvents']((($attr9=($attr10=$m['Event'])['ONCONTEXTMENU']) == null || (($attr10.__is_instance__) && typeof $attr9 == 'function') || (typeof $attr9['__get__'] == 'function')?
							$p['getattr']($attr10, 'ONCONTEXTMENU'):
							$m['Event']['ONCONTEXTMENU']));
			}
			return null;
		}
	, 1, [null,null,['self'],['menu']]);
		$cls_definition['setContextMenu'] = $method;
		$method = $pyjs__bind_method2('onBrowserEvent', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var type,$attr11,$attr12;
			if ($p['bool']($p['hasattr'](self, '_clickListeners'))) {
				$m['ClickHandler']['onBrowserEvent'](self, event);
			}
			if ($p['bool']($p['hasattr'](self, '_keyboardListeners'))) {
				$m['KeyboardHandler']['onBrowserEvent'](self, event);
			}
			if ($p['bool']($p['hasattr'](self, '_mouseListeners'))) {
				$m['MouseHandler']['onBrowserEvent'](self, event);
			}
			if ($p['bool']($p['hasattr'](self, '_mouseWheelListeners'))) {
				$m['MouseWheelHandler']['onBrowserEvent'](self, event);
			}
			if ($p['bool']($p['hasattr'](self, '_focusListeners'))) {
				$m['FocusHandler']['onBrowserEvent'](self, event);
			}
			if ($p['bool']($p['hasattr'](self, '_dragListeners'))) {
				$m['DragHandler']['onBrowserEvent'](self, event);
			}
			if ($p['bool']($p['hasattr'](self, '_dropListeners'))) {
				$m['DropHandler']['onBrowserEvent'](self, event);
			}
			if ($p['bool'](((($attr11=($attr12=self)['contextMenu']) == null || (($attr12.__is_instance__) && typeof $attr11 == 'function') || (typeof $attr11['__get__'] == 'function')?
						$p['getattr']($attr12, 'contextMenu'):
						self['contextMenu']) === null))) {
				return true;
			}
			type = $m['DOM']['eventGetType'](event);
			if ($p['bool']($p['op_eq'](type, 'contextmenu'))) {
				$m['DOM']['eventCancelBubble'](event, true);
				$m['DOM']['eventPreventDefault'](event);
				self['contextMenu']['onContextMenu'](self);
				return false;
			}
			return true;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		$method = $pyjs__bind_method2('onLoad', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onLoad'] = $method;
		$method = $pyjs__bind_method2('doDetachChildren', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['doDetachChildren'] = $method;
		$method = $pyjs__bind_method2('doAttachChildren', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['doAttachChildren'] = $method;
		$method = $pyjs__bind_method2('onAttach', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool'](self['isAttached']())) {
				return null;
			}
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('attached', true) : $p['setattr'](self, 'attached', true);
			$m['DOM']['setEventListener'](self['getElement'](), self);
			self['doAttachChildren']();
			self['onLoad']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onAttach'] = $method;
		$method = $pyjs__bind_method2('onDetach', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool'](!$p['bool'](self['isAttached']()))) {
				return null;
			}
			self['doDetachChildren']();
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('attached', false) : $p['setattr'](self, 'attached', false);
			$m['DOM']['setEventListener'](self['getElement'](), null);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onDetach'] = $method;
		$method = $pyjs__bind_method2('setLayoutData', function(layoutData) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				layoutData = arguments[1];
			}

			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('layoutData', layoutData) : $p['setattr'](self, 'layoutData', layoutData);
			return null;
		}
	, 1, [null,null,['self'],['layoutData']]);
		$cls_definition['setLayoutData'] = $method;
		$method = $pyjs__bind_method2('setParent', function(parent) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				parent = arguments[1];
			}
			var oldparent,$and1,$attr18,$attr15,$attr14,$attr17,$attr16,$and2,$attr13;
			oldparent = (($attr13=($attr14=self)['parent']) == null || (($attr14.__is_instance__) && typeof $attr13 == 'function') || (typeof $attr13['__get__'] == 'function')?
						$p['getattr']($attr14, 'parent'):
						self['parent']);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('parent', parent) : $p['setattr'](self, 'parent', parent);
			if ($p['bool']((parent === null))) {
				if ($p['bool'](($p['bool']($and1=(oldparent !== null))?(($attr15=($attr16=oldparent)['attached']) == null || (($attr16.__is_instance__) && typeof $attr15 == 'function') || (typeof $attr15['__get__'] == 'function')?
							$p['getattr']($attr16, 'attached'):
							oldparent['attached']):$and1))) {
					self['onDetach']();
				}
			}
			else if ($p['bool']((($attr17=($attr18=parent)['attached']) == null || (($attr18.__is_instance__) && typeof $attr17 == 'function') || (typeof $attr17['__get__'] == 'function')?
						$p['getattr']($attr18, 'attached'):
						parent['attached']))) {
				self['onAttach']();
			}
			return null;
		}
	, 1, [null,null,['self'],['parent']]);
		$cls_definition['setParent'] = $method;
		$method = $pyjs__bind_method2('removeFromParent', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr20,$attr19;
			if ($p['bool']($p['hasattr']((($attr19=($attr20=self)['parent']) == null || (($attr20.__is_instance__) && typeof $attr19 == 'function') || (typeof $attr19['__get__'] == 'function')?
						$p['getattr']($attr20, 'parent'):
						self['parent']), 'remove'))) {
				self['parent']['remove'](self);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['removeFromParent'] = $method;
		$method = $pyjs__bind_method2('getID', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getAttribute'](self['getElement'](), 'id');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getID'] = $method;
		$method = $pyjs__bind_method2('setID', function(id) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				id = arguments[1];
			}

			$m['DOM']['setAttribute'](self['getElement'](), 'id', id);
			return null;
		}
	, 1, [null,null,['self'],['id']]);
		$cls_definition['setID'] = $method;
		var $bases = new Array($m['UIObject']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Widget', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.Widget', 'Widget', $m['Widget']);
	return this;
}; /* end gwt.ui.Widget */


/* end module: gwt.ui.Widget */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.log', 'pyjamas.ui.UIObject.UIObject', 'pyjamas.ui', 'pyjamas.ui.UIObject', 'pyjamas.ui.Event', 'pyjamas.ui.ClickListener.ClickHandler', 'pyjamas.ui.ClickListener', 'pyjamas.ui.FocusListener.FocusHandler', 'pyjamas.ui.FocusListener', 'pyjamas.ui.KeyboardListener.KeyboardHandler', 'pyjamas.ui.KeyboardListener', 'pyjamas.ui.MouseListener.MouseHandler', 'pyjamas.ui.MouseListener', 'pyjamas.ui.MouseListener.MouseWheelHandler', 'pyjamas.ui.DragHandler.DragHandler', 'pyjamas.ui.DragHandler', 'pyjamas.ui.DropHandler.DropHandler', 'pyjamas.ui.DropHandler']
*/
