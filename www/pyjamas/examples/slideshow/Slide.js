/* start module: Slide */
$pyjs.loaded_modules['Slide'] = function (__mod_name__) {
	if($pyjs.loaded_modules['Slide'].__was_initialized__) return $pyjs.loaded_modules['Slide'];
	var $m = $pyjs.loaded_modules["Slide"];
	$m.__repr__ = function() { return "<module: Slide>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Slide';
	$m.__name__ = __mod_name__;


	$m['Sink'] = $p['___import___']('Sink.Sink', null, null, false);
	$m['SinkInfo'] = $p['___import___']('Sink.SinkInfo', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['SlideLoader'] = $p['___import___']('SlideLoader.SlideLoader', null, null, false);
	$m['HTTPRequest'] = $p['___import___']('pyjamas.HTTPRequest.HTTPRequest', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['esc'] = function(txt) {

		return txt;
	};
	$m['esc'].__name__ = 'esc';

	$m['esc'].__bind_type__ = 0;
	$m['esc'].__args__ = [null,null,['txt']];
	$m['urlmap'] = function(txt) {
		var $iter1_iter,$or1,end,$add3,$iter1_array,$sub2,$sub1,$add7,$iter1_nextval,$or3,$or2,c,$iter1_type,idx,i,beg,$add2,url,$add1,$add6,$iter1_idx,$add4,$add5,$add8;
		idx = txt['find']('http://');
		if ($p['bool']($p['op_eq'](idx, (typeof ($usub1=1)=='number'?
			-$usub1:
			$p['op_usub']($usub1))))) {
			return $m['esc'](txt);
		}
		$iter1_iter = $p['range'](idx, $p['len'](txt));
		$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
		while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
			i = $iter1_nextval.$nextval;
			c = txt.__getitem__(i);
			if ($p['bool'](($p['bool']($or1=$p['op_eq'](c, ' '))?$or1:($p['bool']($or2=$p['op_eq'](c, '\x0A'))?$or2:$p['op_eq'](c, '\x09'))))) {
				i = $p['__op_sub']($sub1=i,$sub2=1);
				break;
			}
		}
		i = $p['__op_add']($add1=i,$add2=1);
		beg = $p['slice'](txt, 0, idx);
		if ($p['bool']($p['op_eq'](i, $p['len'](txt)))) {
			url = $p['slice'](txt, idx, null);
			end = '';
		}
		else {
			url = $p['slice'](txt, idx, i);
			end = $p['slice'](txt, i, null);
		}
		txt = $p['__op_add']($add3=$m['esc'](beg),$add4=$p['sprintf']('\x3Ca href=\x27%s\x27\x3E', url));
		txt = $p['__op_add']($add7=txt,$add8=$p['__op_add']($add5=$p['sprintf']('%s\x3C/a\x3E', $m['esc'](url)),$add6=$m['urlmap'](end)));
		return txt;
	};
	$m['urlmap'].__name__ = 'urlmap';

	$m['urlmap'].__bind_type__ = 0;
	$m['urlmap'].__args__ = [null,null,['txt']];
	$m['ts'] = function(txt) {
		var $iter2_nextval,$iter2_type,$iter2_iter,l,$iter2_idx,r,line,$iter2_array;
		l = txt['$$split']('\x0A');
		r = $p['list']([]);
		$iter2_iter = l;
		$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
		while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
			line = $iter2_nextval.$nextval;
			r['append']($m['urlmap'](line));
		}
		return '\x3Cbr /\x3E'['join'](r);
	};
	$m['ts'].__name__ = 'ts';

	$m['ts'].__bind_type__ = 0;
	$m['ts'].__args__ = [null,null,['txt']];
	$m['Slide'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'Slide';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr1,text,$attr2;
			$m['Sink']['__init__'](self);
			text = '\x3Cdiv class=\x27infoProse\x27\x3EThis is the Kitchen Sink sample.  ';
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('vp', $m['VerticalPanel']()) : $p['setattr'](self, 'vp', $m['VerticalPanel']());
			self['initWidget']((($attr1=($attr2=self)['vp']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
						$p['getattr']($attr2, 'vp'):
						self['vp']));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('loaded', false) : $p['setattr'](self, 'loaded', false);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onShow', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr3,name,$attr4;
			if ($p['bool']((($attr3=($attr4=self)['loaded']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
						$p['getattr']($attr4, 'loaded'):
						self['loaded']))) {
				return null;
			}
			name = self['$$name']['$$replace'](' ', '_');
			name = name['lower']();
			$m['HTTPRequest']()['asyncGet']($p['sprintf']('%s.txt', name), $m['SlideLoader'](self));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onShow'] = $method;
		$method = $pyjs__bind_method2('setSlide', function(text) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}
			var ul_stack1,$iter3_type,txt,line,$add23,$iter3_idx,ul_line,$add21,ul_stack2,$add22,$add25,$add24,$add26,add,$iter3_iter,$and8,$and9,doing_code,$and1,$and2,$and3,$and4,$and5,$and6,$and7,$add14,$add15,$add16,$add17,$add10,$add11,$add12,$iter3_array,ul_line2,$add18,$add19,$and10,$and11,$add13,$add20,$add9,$iter3_nextval;
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('loaded', true) : $p['setattr'](self, 'loaded', true);
			ul_stack1 = 0;
			ul_stack2 = 0;
			doing_code = 0;
			txt = '';
			text = $p['__op_add']($add9=text,$add10='\x0A');
			$iter3_iter = text['$$split']('\x0A');
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
				line = $iter3_nextval.$nextval;
				if ($p['bool'](doing_code)) {
					if ($p['bool']($p['op_eq'](line, '}}'))) {
						doing_code = 0;
						line = '\x3C/pre\x3E';
						txt = $p['__op_add']($add11=txt,$add12=line);
						self['vp']['add']($m['HTML'](txt));
						txt = '';
						continue;
					}
					if ($p['bool'](line)) {
						txt = $p['__op_add']($add13=txt,$add14=line);
					}
					txt = $p['__op_add']($add15=txt,$add16='\x0A');
					continue;
				}
				line = line['strip']();
				ul_line = false;
				ul_line2 = false;
				add = false;
				if ($p['bool'](!$p['bool'](line))) {
					line = '\x26nbsp\x3B';
				}
				else if ($p['bool']($p['op_eq']($p['slice'](line, 0, 2), '{{'))) {
					doing_code = 1;
					if ($p['bool'](($p['cmp']($p['len'](line), 2) == 1))) {
						line = $p['sprintf']('\x3Cpre class=\x27slide_code\x27\x3E%s', $p['slice'](line, 2, null));
					}
					else {
						line = '\x3Cpre class=\x27slide_code\x27\x3E';
					}
				}
				else if ($p['bool'](($p['bool']($and1=$p['op_eq']($p['slice'](line, 0, 2), '= '))?$p['op_eq']($p['slice'](line, (typeof ($usub2=2)=='number'?
					-$usub2:
					$p['op_usub']($usub2)), null), ' ='):$and1))) {
					line = $p['sprintf']('\x3Ch1 class=\x27slide_heading1\x27\x3E%s\x3C/h1\x3E', $p['slice'](line, 2, (typeof ($usub3=2)=='number'?
						-$usub3:
						$p['op_usub']($usub3))));
				}
				else if ($p['bool'](($p['bool']($and3=$p['op_eq']($p['slice'](line, 0, 3), '== '))?$p['op_eq']($p['slice'](line, (typeof ($usub4=3)=='number'?
					-$usub4:
					$p['op_usub']($usub4)), null), ' =='):$and3))) {
					line = $p['sprintf']('\x3Ch2 class=\x27slide_heading2\x3E%s\x3C/h2\x3E', $p['slice'](line, 3, (typeof ($usub5=3)=='number'?
						-$usub5:
						$p['op_usub']($usub5))));
				}
				else if ($p['bool']($p['op_eq']($p['slice'](line, 0, 2), '* '))) {
					if ($p['bool'](!$p['bool'](ul_stack1))) {
						txt = $p['__op_add']($add17=txt,$add18='\x3Cul class=\x27slide_list1\x27\x3E\x0A');
					}
					line = $p['sprintf']('\x3Cli class=\x27slide_listitem1\x27/\x3E%s\x0A', $m['ts']($p['slice'](line, 2, null)));
					ul_stack1 = true;
					ul_line = true;
				}
				else if ($p['bool']($p['op_eq']($p['slice'](line, 0, 3), '** '))) {
					if ($p['bool'](!$p['bool'](ul_stack2))) {
						txt = $p['__op_add']($add19=txt,$add20='\x3Cul class=\x27slide_list2\x27\x3E\x0A');
					}
					line = $p['sprintf']('\x3Cli class=\x27slide_listitem2\x27/\x3E%s\x0A', $m['ts']($p['slice'](line, 2, null)));
					ul_stack2 = true;
					ul_line2 = true;
					ul_line = true;
				}
				else {
					if ($p['bool'](!$p['bool'](doing_code))) {
						line = $p['sprintf']('\x3Cp class=\x27slide_para\x27\x3E%s\x3C/p\x3E', line);
					}
				}
				if ($p['bool'](($p['bool']($and5=ul_stack2)?!$p['bool'](ul_line2):$and5))) {
					ul_stack2 = false;
					txt = $p['__op_add']($add21=txt,$add22='\x3C/ul\x3E\x0A');
				}
				if ($p['bool'](($p['bool']($and7=ul_stack1)?!$p['bool'](ul_line):$and7))) {
					ul_stack1 = false;
					txt = $p['__op_add']($add23=txt,$add24='\x3C/ul\x3E\x0A');
				}
				if ($p['bool'](($p['bool']($and9=!$p['bool'](ul_stack2))?($p['bool']($and10=!$p['bool'](ul_stack1))?!$p['bool'](doing_code):$and10):$and9))) {
					add = true;
				}
				txt = $p['__op_add']($add25=txt,$add26=line);
				if ($p['bool'](add)) {
					self['vp']['add']($m['HTML'](txt));
					txt = '';
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['setSlide'] = $method;
		$method = $pyjs__bind_method2('onError', function(text, code) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
				code = arguments[2];
			}
			var $attr5,$attr6;
			self['vp']['clear']();
			self['vp']['add']($m['HTML']($p['sprintf']('TODO: Slide \x27%s\x27 not loaded', (($attr5=($attr6=self)['$$name']) == null || (($attr6.__is_instance__) && typeof $attr5 == 'function') || (typeof $attr5['__get__'] == 'function')?
						$p['getattr']($attr6, '$$name'):
						self['$$name']))));
			self['vp']['add']($m['HTML'](text));
			self['vp']['add']($m['HTML'](code));
			return null;
		}
	, 1, [null,null,['self'],['text'],['code']]);
		$cls_definition['onError'] = $method;
		var $bases = new Array($m['Sink']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Slide', $p['tuple']($bases), $data);
	})();
	$m['init'] = function(name, desc) {

		return $m['SinkInfo'](name, desc, $m['Slide']);
	};
	$m['init'].__name__ = 'init';

	$m['init'].__bind_type__ = 0;
	$m['init'].__args__ = [null,null,['name'],['desc']];
	return this;
}; /* end Slide */


/* end module: Slide */


/*
PYJS_DEPS: ['Sink.Sink', 'Sink', 'Sink.SinkInfo', 'pyjamas.ui.HTML.HTML', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.HTML', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'SlideLoader.SlideLoader', 'SlideLoader', 'pyjamas.HTTPRequest.HTTPRequest', 'pyjamas.HTTPRequest', 'pyjamas.Window']
*/
