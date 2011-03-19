/* start module: gwt.ui.UIObject */
$pyjs.loaded_modules['gwt.ui.UIObject'] = function (__mod_name__) {
	if($pyjs.loaded_modules['gwt.ui.UIObject'].__was_initialized__) return $pyjs.loaded_modules['gwt.ui.UIObject'];
	if(typeof $pyjs.loaded_modules['gwt.ui'] == 'undefined' || !$pyjs.loaded_modules['gwt.ui'].__was_initialized__) $p['___import___']('gwt.ui', null);
	var $m = $pyjs.loaded_modules["gwt.ui.UIObject"];
	$m.__repr__ = function() { return "<module: gwt.ui.UIObject>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'gwt.ui.UIObject';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['gwt.ui']['UIObject'] = $pyjs.loaded_modules['gwt.ui.UIObject'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'gwt.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'gwt.ui', null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', 'gwt.ui', null, false);
	$m['Applier'] = $p['___import___']('pyjamas.ui.Applier', 'gwt.ui', null, false);
	$m['setStyleName'] = function(element, style, add) {
		var lastPos,end,$sub3,$sub2,$sub1,$and2,$sub4,$or4,begin,$or1,$or3,$or2,$and1,oldStyle,$add10,$add11,$add12,last,idx,$add2,$add3,$add1,$add6,$add7,$add4,$add5,$add8,$add9;
		oldStyle = $m['DOM']['getAttribute'](element, 'className');
		if ($p['bool']((oldStyle === null))) {
			oldStyle = '';
		}
		idx = oldStyle['find'](style);
		lastPos = $p['len'](oldStyle);
		while ($p['bool'](!$p['op_eq'](idx, (typeof ($usub1=1)=='number'?
			-$usub1:
			$p['op_usub']($usub1))))) {
			if ($p['bool'](($p['bool']($or1=$p['op_eq'](idx, 0))?$or1:$p['op_eq'](oldStyle.__getitem__($p['__op_sub']($sub1=idx,$sub2=1)), ' ')))) {
				last = $p['__op_add']($add1=idx,$add2=$p['len'](style));
				if ($p['bool'](($p['bool']($or3=$p['op_eq'](last, lastPos))?$or3:($p['bool']($and1=($p['cmp'](last, lastPos) == -1))?$p['op_eq'](oldStyle.__getitem__(last), ' '):$and1)))) {
					break;
				}
			}
			idx = oldStyle['find'](style, $p['__op_add']($add3=idx,$add4=1));
		}
		if ($p['bool'](add)) {
			if ($p['bool']($p['op_eq'](idx, (typeof ($usub2=1)=='number'?
				-$usub2:
				$p['op_usub']($usub2))))) {
				$m['DOM']['setAttribute'](element, 'className', $p['__op_add']($add7=$p['__op_add']($add5=oldStyle,$add6=' '),$add8=style));
			}
		}
		else {
			if ($p['bool'](!$p['op_eq'](idx, (typeof ($usub3=1)=='number'?
				-$usub3:
				$p['op_usub']($usub3))))) {
				if ($p['bool']($p['op_eq'](idx, 0))) {
					begin = '';
				}
				else {
					begin = $p['slice'](oldStyle, 0, $p['__op_sub']($sub3=idx,$sub4=1));
				}
				end = $p['slice'](oldStyle, $p['__op_add']($add9=idx,$add10=$p['len'](style)), null);
				$m['DOM']['setAttribute'](element, 'className', $p['__op_add']($add11=begin,$add12=end));
			}
		}
		return null;
	};
	$m['setStyleName'].__name__ = 'setStyleName';

	$m['setStyleName'].__bind_type__ = 0;
	$m['setStyleName'].__args__ = [null,null,['element'],['style'],['add']];
	$m['UIObject'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.ui.UIObject';
		$cls_definition['_props'] = $p['list']([$p['tuple'](['visible', 'Visibility', 'Visible', null]), $p['tuple'](['stylename', 'Style name', 'StyleName', null]), $p['tuple'](['width', 'Width', 'Width', null]), $p['tuple'](['height', 'Height', 'Height', null]), $p['tuple'](['size', 'Size', 'Size', null]), $p['tuple'](['title', 'Title', 'Title', null]), $p['tuple'](['zindex', 'Z Index', 'zIndex', null])]);
		$method = $pyjs__bind_method2('_getProps', function() {
    var self = this.prototype;
			var $attr1,$add14,$attr2,$add13;
			return $p['__op_add']($add13=$m['Applier']['_getProps'](),$add14=(($attr1=($attr2=self)['_props']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
						$p['getattr']($attr2, '_props'):
						self['_props']));
		}
	, 2, [null,null,['self']]);
		$cls_definition['_getProps'] = $method;
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

			$pyjs_kwargs_call($m['Applier'], '__init__', null, kwargs, [{}, self]);
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getAbsoluteLeft', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getAbsoluteLeft'](self['getElement']());
		}
	, 1, [null,null,['self']]);
		$cls_definition['getAbsoluteLeft'] = $method;
		$method = $pyjs__bind_method2('getAbsoluteTop', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['DOM']['getAbsoluteTop'](self['getElement']());
		}
	, 1, [null,null,['self']]);
		$cls_definition['getAbsoluteTop'] = $method;
		$method = $pyjs__bind_method2('getElement', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr3,$attr4;
			return (($attr3=($attr4=self)['element']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
						$p['getattr']($attr4, 'element'):
						self['element']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getElement'] = $method;
		$method = $pyjs__bind_method2('getOffsetHeight', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr5,$attr6;
			return $m['DOM']['getIntAttribute']((($attr5=($attr6=self)['element']) == null || (($attr6.__is_instance__) && typeof $attr5 == 'function') || (typeof $attr5['__get__'] == 'function')?
						$p['getattr']($attr6, 'element'):
						self['element']), 'offsetHeight');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getOffsetHeight'] = $method;
		$method = $pyjs__bind_method2('getOffsetWidth', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr8,$attr7;
			return $m['DOM']['getIntAttribute']((($attr7=($attr8=self)['element']) == null || (($attr8.__is_instance__) && typeof $attr7 == 'function') || (typeof $attr7['__get__'] == 'function')?
						$p['getattr']($attr8, 'element'):
						self['element']), 'offsetWidth');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getOffsetWidth'] = $method;
		$method = $pyjs__bind_method2('getStyleName', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr9,$attr10;
			return $m['DOM']['getAttribute']((($attr9=($attr10=self)['element']) == null || (($attr10.__is_instance__) && typeof $attr9 == 'function') || (typeof $attr9['__get__'] == 'function')?
						$p['getattr']($attr10, 'element'):
						self['element']), 'className');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getStyleName'] = $method;
		$method = $pyjs__bind_method2('getStylePrimaryName', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var fullClassName;
			fullClassName = self['getStyleName']();
			if ($p['bool'](fullClassName)) {
				return fullClassName['$$split']().__getitem__(0);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getStylePrimaryName'] = $method;
		$method = $pyjs__bind_method2('getStyleAttribute', function(attribute) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				attribute = arguments[1];
			}
			var el,$iter1_nextval,$iter1_type,$iter1_idx,$iter1_iter,result,attr,$iter1_array;
			if ($p['bool']($p['isinstance'](attribute, $p['basestring']))) {
				return $m['DOM']['getStyleAttribute'](self['getElement'](), attribute);
			}
			el = self['getElement']();
			result = $p['dict']([]);
			$iter1_iter = attribute;
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
				attr = $iter1_nextval.$nextval;
				result.__setitem__(attr, $m['DOM']['getStyleAttribute'](el, attr));
			}
			return result;
		}
	, 1, [null,null,['self'],['attribute']]);
		$cls_definition['getStyleAttribute'] = $method;
		$method = $pyjs__bind_method2('getTitle', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr11,$attr12;
			return $m['DOM']['getAttribute']((($attr11=($attr12=self)['element']) == null || (($attr12.__is_instance__) && typeof $attr11 == 'function') || (typeof $attr11['__get__'] == 'function')?
						$p['getattr']($attr12, 'element'):
						self['element']), 'title');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTitle'] = $method;
		$method = $pyjs__bind_method2('setElement', function(element) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
			}

			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('element', element) : $p['setattr'](self, 'element', element);
			return null;
		}
	, 1, [null,null,['self'],['element']]);
		$cls_definition['setElement'] = $method;
		$method = $pyjs__bind_method2('setHeight', function(height) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				height = arguments[1];
			}
			var $attr14,$attr13;
			if ($p['bool']((height === null))) {
				height = '';
			}
			$m['DOM']['setStyleAttribute']((($attr13=($attr14=self)['element']) == null || (($attr14.__is_instance__) && typeof $attr13 == 'function') || (typeof $attr13['__get__'] == 'function')?
						$p['getattr']($attr14, 'element'):
						self['element']), 'height', $p['str'](height));
			return null;
		}
	, 1, [null,null,['self'],['height']]);
		$cls_definition['setHeight'] = $method;
		$method = $pyjs__bind_method2('getHeight', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr15,$attr16;
			return $m['DOM']['getStyleAttribute']((($attr15=($attr16=self)['element']) == null || (($attr16.__is_instance__) && typeof $attr15 == 'function') || (typeof $attr15['__get__'] == 'function')?
						$p['getattr']($attr16, 'element'):
						self['element']), 'height');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHeight'] = $method;
		$method = $pyjs__bind_method2('setPixelSize', function(width, height) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				height = arguments[2];
			}

			if ($p['bool'](((($p['cmp'](width, 0))|1) == 1))) {
				self['setWidth']($p['sprintf']('%dpx', width));
			}
			if ($p['bool'](((($p['cmp'](height, 0))|1) == 1))) {
				self['setHeight']($p['sprintf']('%dpx', height));
			}
			return null;
		}
	, 1, [null,null,['self'],['width'],['height']]);
		$cls_definition['setPixelSize'] = $method;
		$method = $pyjs__bind_method2('setSize', function(width, height) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				height = arguments[2];
			}

			self['setWidth'](width);
			self['setHeight'](height);
			return null;
		}
	, 1, [null,null,['self'],['width'],['height']]);
		$cls_definition['setSize'] = $method;
		$method = $pyjs__bind_method2('addStyleName', function(style) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				style = arguments[1];
			}
			var $attr17,$attr18;
			self['setStyleName']((($attr17=($attr18=self)['element']) == null || (($attr18.__is_instance__) && typeof $attr17 == 'function') || (typeof $attr17['__get__'] == 'function')?
						$p['getattr']($attr18, 'element'):
						self['element']), style, true);
			return null;
		}
	, 1, [null,null,['self'],['style']]);
		$cls_definition['addStyleName'] = $method;
		$method = $pyjs__bind_method2('addStyleDependentName', function(styleSuffix) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				styleSuffix = arguments[1];
			}
			var $add15,$add16,$add17,$add18;
			self['addStyleName']($p['__op_add']($add17=$p['__op_add']($add15=self['getStylePrimaryName'](),$add16='-'),$add18=styleSuffix));
			return null;
		}
	, 1, [null,null,['self'],['styleSuffix']]);
		$cls_definition['addStyleDependentName'] = $method;
		$method = $pyjs__bind_method2('removeStyleName', function(style) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				style = arguments[1];
			}
			var $attr20,$attr19;
			self['setStyleName']((($attr19=($attr20=self)['element']) == null || (($attr20.__is_instance__) && typeof $attr19 == 'function') || (typeof $attr19['__get__'] == 'function')?
						$p['getattr']($attr20, 'element'):
						self['element']), style, false);
			return null;
		}
	, 1, [null,null,['self'],['style']]);
		$cls_definition['removeStyleName'] = $method;
		$method = $pyjs__bind_method2('removeStyleDependentName', function(styleSuffix) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				styleSuffix = arguments[1];
			}
			var $add21,$add20,$add22,$add19;
			self['removeStyleName']($p['__op_add']($add21=$p['__op_add']($add19=self['getStylePrimaryName'](),$add20='-'),$add22=styleSuffix));
			return null;
		}
	, 1, [null,null,['self'],['styleSuffix']]);
		$cls_definition['removeStyleDependentName'] = $method;
		$method = $pyjs__bind_method2('setStyleName', function(element, style, add) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
				style = arguments[2];
				add = arguments[3];
			}
			if (typeof style == 'undefined') style=arguments.callee.__args__[4][1];
			if (typeof add == 'undefined') add=arguments.callee.__args__[5][1];
			var $attr22,$attr21;
			if ($p['bool']((style !== null))) {
				$m['setStyleName'](element, style, add);
				return null;
			}
			style = element;
			$m['DOM']['setAttribute']((($attr21=($attr22=self)['element']) == null || (($attr22.__is_instance__) && typeof $attr21 == 'function') || (typeof $attr21['__get__'] == 'function')?
						$p['getattr']($attr22, 'element'):
						self['element']), 'className', style);
			return null;
		}
	, 1, [null,null,['self'],['element'],['style', null],['add', true]]);
		$cls_definition['setStyleName'] = $method;
		$method = $pyjs__bind_method2('setStyleAttribute', function(attribute, value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				attribute = arguments[1];
				value = arguments[2];
			}
			if (typeof value == 'undefined') value=arguments.callee.__args__[4][1];
			var el,$iter2_nextval,$iter2_type,attr,$iter2_iter,$iter2_idx,val,$iter2_array;
			if ($p['bool']((value !== null))) {
				$m['DOM']['setStyleAttribute'](self['getElement'](), attribute, value);
				return null;
			}
			el = self['getElement']();
			$iter2_iter = attribute['items']();
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,true);
			while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
				attr = $iter2_nextval.$nextval.__array[0];
				val = $iter2_nextval.$nextval.__array[1];
				$m['DOM']['setStyleAttribute'](el, attr, val);
			}
			return null;
		}
	, 1, [null,null,['self'],['attribute'],['value', null]]);
		$cls_definition['setStyleAttribute'] = $method;
		$method = $pyjs__bind_method2('setTitle', function(title) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				title = arguments[1];
			}
			var $attr23,$attr24;
			$m['DOM']['setAttribute']((($attr23=($attr24=self)['element']) == null || (($attr24.__is_instance__) && typeof $attr23 == 'function') || (typeof $attr23['__get__'] == 'function')?
						$p['getattr']($attr24, 'element'):
						self['element']), 'title', title);
			return null;
		}
	, 1, [null,null,['self'],['title']]);
		$cls_definition['setTitle'] = $method;
		$method = $pyjs__bind_method2('setWidth', function(width) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
			}
			var $attr25,$attr26;
			if ($p['bool']((width === null))) {
				width = '';
			}
			$m['DOM']['setStyleAttribute']((($attr25=($attr26=self)['element']) == null || (($attr26.__is_instance__) && typeof $attr25 == 'function') || (typeof $attr25['__get__'] == 'function')?
						$p['getattr']($attr26, 'element'):
						self['element']), 'width', $p['str'](width));
			return null;
		}
	, 1, [null,null,['self'],['width']]);
		$cls_definition['setWidth'] = $method;
		$method = $pyjs__bind_method2('getWidth', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr28,$attr27;
			return $m['DOM']['getStyleAttribute']((($attr27=($attr28=self)['element']) == null || (($attr28.__is_instance__) && typeof $attr27 == 'function') || (typeof $attr27['__get__'] == 'function')?
						$p['getattr']($attr28, 'element'):
						self['element']), 'width');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getWidth'] = $method;
		$method = $pyjs__bind_method2('sinkEvents', function(eventBitsToAdd) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				eventBitsToAdd = arguments[1];
			}
			var $attr29,$attr30;
			if ($p['bool']((($attr29=($attr30=self)['element']) == null || (($attr30.__is_instance__) && typeof $attr29 == 'function') || (typeof $attr29['__get__'] == 'function')?
						$p['getattr']($attr30, 'element'):
						self['element']))) {
				$m['DOM']['sinkEvents'](self['getElement'](), (eventBitsToAdd)|($m['DOM']['getEventsSunk'](self['getElement']())));
			}
			return null;
		}
	, 1, [null,null,['self'],['eventBitsToAdd']]);
		$cls_definition['sinkEvents'] = $method;
		$method = $pyjs__bind_method2('setzIndex', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var $attr31,$attr32;
			$m['DOM']['setIntStyleAttribute']((($attr31=($attr32=self)['element']) == null || (($attr32.__is_instance__) && typeof $attr31 == 'function') || (typeof $attr31['__get__'] == 'function')?
						$p['getattr']($attr32, 'element'):
						self['element']), 'zIndex', index);
			return null;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['setzIndex'] = $method;
		$method = $pyjs__bind_method2('isVisible', function(element) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
			}
			if (typeof element == 'undefined') element=arguments.callee.__args__[3][1];

			return self['getVisible'](element);
		}
	, 1, [null,null,['self'],['element', null]]);
		$cls_definition['isVisible'] = $method;
		$method = $pyjs__bind_method2('getVisible', function(element) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
			}
			if (typeof element == 'undefined') element=arguments.callee.__args__[3][1];
			var $attr33,$pyjs_try_err,$attr36,$attr35,$attr34;
			if ($p['bool'](!$p['bool'](element))) {
				element = (($attr33=($attr34=self)['element']) == null || (($attr34.__is_instance__) && typeof $attr33 == 'function') || (typeof $attr33['__get__'] == 'function')?
							$p['getattr']($attr34, 'element'):
							self['element']);
			}
			try {
				return !$p['op_eq']((($attr35=($attr36=element['style'])['display']) == null || (($attr36.__is_instance__) && typeof $attr35 == 'function') || (typeof $attr35['__get__'] == 'function')?
							$p['getattr']($attr36, 'display'):
							element['style']['display']), 'none');
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $p['AttributeError'].__name__)||$p['_isinstance']($pyjs_try_err,$p['AttributeError'])) {
					return true;
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self'],['element', null]]);
		$cls_definition['getVisible'] = $method;
		$method = $pyjs__bind_method2('setVisible', function(element, visible) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
				visible = arguments[2];
			}
			if (typeof visible == 'undefined') visible=arguments.callee.__args__[4][1];
			var $attr38,$attr37;
			if ($p['bool']((visible === null))) {
				visible = element;
				element = (($attr37=($attr38=self)['element']) == null || (($attr38.__is_instance__) && typeof $attr37 == 'function') || (typeof $attr37['__get__'] == 'function')?
							$p['getattr']($attr38, 'element'):
							self['element']);
			}
			if ($p['bool'](visible)) {
				$m['DOM']['setStyleAttribute'](element, 'display', '');
			}
			else {
				$m['DOM']['setStyleAttribute'](element, 'display', 'none');
			}
			return null;
		}
	, 1, [null,null,['self'],['element'],['visible', null]]);
		$cls_definition['setVisible'] = $method;
		$method = $pyjs__bind_method2('unsinkEvents', function(eventBitsToRemove) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				eventBitsToRemove = arguments[1];
			}

			$m['DOM']['sinkEvents'](self['getElement'](), (~(eventBitsToRemove))&($m['DOM']['getEventsSunk'](self['getElement']())));
			return null;
		}
	, 1, [null,null,['self'],['eventBitsToRemove']]);
		$cls_definition['unsinkEvents'] = $method;
		var $bases = new Array($m['Applier']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('UIObject', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.UIObject', 'UIObject', $m['UIObject']);
	return this;
}; /* end gwt.ui.UIObject */


/* end module: gwt.ui.UIObject */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.Window', 'pyjamas.ui.Applier', 'pyjamas.ui']
*/
