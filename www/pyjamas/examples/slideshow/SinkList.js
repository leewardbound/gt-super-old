/* start module: SinkList */
$pyjs.loaded_modules['SinkList'] = function (__mod_name__) {
	if($pyjs.loaded_modules['SinkList'].__was_initialized__) return $pyjs.loaded_modules['SinkList'];
	var $m = $pyjs.loaded_modules["SinkList"];
	$m.__repr__ = function() { return "<module: SinkList>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'SinkList';
	$m.__name__ = __mod_name__;


	$m['Composite'] = $p['___import___']('pyjamas.ui.Composite.Composite', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['Hyperlink'] = $p['___import___']('pyjamas.ui.Hyperlink.Hyperlink', null, null, false);
	$m['ScrollPanel'] = $p['___import___']('pyjamas.ui.ScrollPanel.ScrollPanel', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['SinkList'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'SinkList';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr1,$attr2,$attr3,$attr4;
			$m['Composite']['__init__'](self);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('vp_list', $m['VerticalPanel']()) : $p['setattr'](self, 'vp_list', $m['VerticalPanel']());
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('sinks', $p['list']([])) : $p['setattr'](self, 'sinks', $p['list']([]));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('selectedSink', (typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1))) : $p['setattr'](self, 'selectedSink', (typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1)));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('sp', $m['ScrollPanel']((($attr1=($attr2=self)['vp_list']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
						$p['getattr']($attr2, 'vp_list'):
						self['vp_list']))) : $p['setattr'](self, 'sp', $m['ScrollPanel']((($attr1=($attr2=self)['vp_list']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
						$p['getattr']($attr2, 'vp_list'):
						self['vp_list'])));
			self['sp']['setWidth']('14em');
			self['initWidget']((($attr3=($attr4=self)['sp']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
						$p['getattr']($attr4, 'sp'):
						self['sp']));
			self['setStyleName']('ks-List');
			self['resize']($m['Window']['getClientWidth'](), $m['Window']['getClientHeight']());
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('resize', function(width, height) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				height = arguments[2];
			}
			var $sub1,$sub2;
			self['sp']['setHeight']($p['sprintf']('%dpx', $p['__op_sub']($sub1=height,$sub2=70)));
			return null;
		}
	, 1, [null,null,['self'],['width'],['height']]);
		$cls_definition['resize'] = $method;
		$method = $pyjs__bind_method2('addSink', function(info) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				info = arguments[1];
			}
			var link,name;
			name = info['getName']();
			link = $pyjs_kwargs_call(null, $m['Hyperlink'], null, null, [{TargetHistoryToken:name}, name, false]);
			link['setStyleName']('ks-SinkItem');
			self['vp_list']['add'](link);
			self['sinks']['append'](info);
			return null;
		}
	, 1, [null,null,['self'],['info']]);
		$cls_definition['addSink'] = $method;
		$method = $pyjs__bind_method2('find', function(sinkName) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sinkName = arguments[1];
			}
			var info,$iter1_nextval,$iter1_type,$iter1_iter,$iter1_array,$iter1_idx;
			$iter1_iter = self['sinks'];
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
				info = $iter1_nextval.$nextval;
				if ($p['bool']($p['op_eq'](info['getName'](), sinkName))) {
					return info;
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['sinkName']]);
		$cls_definition['find'] = $method;
		$method = $pyjs__bind_method2('setSinkSelection', function(name) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
			}
			var $attr9,$attr8,widget,$iter2_nextval,$iter2_type,$iter2_iter,i,$attr5,$attr7,$attr6,$iter2_idx,info,$attr13,$attr14,$attr11,$attr10,$iter2_array,$attr12;
			if ($p['bool'](!$p['op_eq']((($attr5=($attr6=self)['selectedSink']) == null || (($attr6.__is_instance__) && typeof $attr5 == 'function') || (typeof $attr5['__get__'] == 'function')?
						$p['getattr']($attr6, 'selectedSink'):
						self['selectedSink']), (typeof ($usub2=1)=='number'?
				-$usub2:
				$p['op_usub']($usub2))))) {
				self['vp_list']['getWidget']((($attr7=($attr8=self)['selectedSink']) == null || (($attr8.__is_instance__) && typeof $attr7 == 'function') || (typeof $attr7['__get__'] == 'function')?
							$p['getattr']($attr8, 'selectedSink'):
							self['selectedSink']))['removeStyleName']('ks-SinkItem-selected');
			}
			$iter2_iter = $p['range']($p['len']((($attr9=($attr10=self)['sinks']) == null || (($attr10.__is_instance__) && typeof $attr9 == 'function') || (typeof $attr9['__get__'] == 'function')?
						$p['getattr']($attr10, 'sinks'):
						self['sinks'])));
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
				i = $iter2_nextval.$nextval;
				info = (($attr11=($attr12=self)['sinks']) == null || (($attr12.__is_instance__) && typeof $attr11 == 'function') || (typeof $attr11['__get__'] == 'function')?
							$p['getattr']($attr12, 'sinks'):
							self['sinks']).__getitem__(i);
				if ($p['bool']($p['op_eq'](info['getName'](), name))) {
					self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('selectedSink', i) : $p['setattr'](self, 'selectedSink', i);
					widget = self['vp_list']['getWidget']((($attr13=($attr14=self)['selectedSink']) == null || (($attr14.__is_instance__) && typeof $attr13 == 'function') || (typeof $attr13['__get__'] == 'function')?
								$p['getattr']($attr14, 'selectedSink'):
								self['selectedSink']));
					widget['addStyleName']('ks-SinkItem-selected');
					return null;
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['name']]);
		$cls_definition['setSinkSelection'] = $method;
		var $bases = new Array($m['Composite']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('SinkList', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end SinkList */


/* end module: SinkList */


/*
PYJS_DEPS: ['pyjamas.ui.Composite.Composite', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Composite', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.Hyperlink.Hyperlink', 'pyjamas.ui.Hyperlink', 'pyjamas.ui.ScrollPanel.ScrollPanel', 'pyjamas.ui.ScrollPanel', 'pyjamas.Window']
*/
