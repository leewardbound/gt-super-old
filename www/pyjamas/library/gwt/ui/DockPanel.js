/* start module: gwt.ui.DockPanel */
$pyjs.loaded_modules['gwt.ui.DockPanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['gwt.ui.DockPanel'].__was_initialized__) return $pyjs.loaded_modules['gwt.ui.DockPanel'];
	if(typeof $pyjs.loaded_modules['gwt.ui'] == 'undefined' || !$pyjs.loaded_modules['gwt.ui'].__was_initialized__) $p['___import___']('gwt.ui', null);
	var $m = $pyjs.loaded_modules["gwt.ui.DockPanel"];
	$m.__repr__ = function() { return "<module: gwt.ui.DockPanel>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'gwt.ui.DockPanel';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['gwt.ui']['DockPanel'] = $pyjs.loaded_modules['gwt.ui.DockPanel'];


	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'gwt.ui', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'gwt.ui', null, false);
	$m['CellPanel'] = $p['___import___']('pyjamas.ui.CellPanel.CellPanel', 'gwt.ui', null, false);
	$m['HasHorizontalAlignment'] = $p['___import___']('pyjamas.ui.HasHorizontalAlignment', 'gwt.ui', null, false);
	$m['HasVerticalAlignment'] = $p['___import___']('pyjamas.ui.HasVerticalAlignment', 'gwt.ui', null, false);
	$m['DockPanelTmpRow'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.ui.DockPanel';
		$cls_definition['center'] = 0;
		$cls_definition['tr'] = null;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('DockPanelTmpRow', $p['tuple']($bases), $data);
	})();
	$m['LayoutData'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.ui.DockPanel';
		$method = $pyjs__bind_method2('__init__', function(direction) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				direction = arguments[1];
			}

			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('direction', direction) : $p['setattr'](self, 'direction', direction);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('hAlign', 'left') : $p['setattr'](self, 'hAlign', 'left');
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('height', '') : $p['setattr'](self, 'height', '');
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('td', null) : $p['setattr'](self, 'td', null);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('vAlign', 'top') : $p['setattr'](self, 'vAlign', 'top');
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('width', '') : $p['setattr'](self, 'width', '');
			return null;
		}
	, 1, [null,null,['self'],['direction']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('LayoutData', $p['tuple']($bases), $data);
	})();
	$m['DockPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.ui.DockPanel';
		$cls_definition['CENTER'] = 'center';
		$cls_definition['EAST'] = 'east';
		$cls_definition['NORTH'] = 'north';
		$cls_definition['SOUTH'] = 'south';
		$cls_definition['WEST'] = 'west';
		$cls_definition['elem_props'] = $p['list']([$p['tuple'](['height', 'Cell Height', 'CellHeight', $p['str'], null]), $p['tuple'](['width', 'Cell Width', 'CellWidth', $p['str'], null]), $p['tuple'](['halign', 'Cell Horizontal Alignment', 'CellHorizontalAlignment', null, 'left']), $p['tuple'](['valign', 'Cell Vertical Alignment', 'CellVerticalAlignment', null, 'top'])]);
		$method = $pyjs__bind_method2('_getElementProps', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr1,$add2,$attr2,$add1;
			return $p['__op_add']($add1=$m['CellPanel']['_getElementProps'](),$add2=(($attr1=($attr2=self)['elem_props']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
						$p['getattr']($attr2, 'elem_props'):
						self['elem_props']));
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getElementProps'] = $method;
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

			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('center', null) : $p['setattr'](self, 'center', null);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('dock_children', $p['list']([])) : $p['setattr'](self, 'dock_children', $p['list']([]));
			$pyjs_kwargs_call($m['CellPanel'], '__init__', null, kwargs, [{}, self]);
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('add', function(widget, direction) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				direction = arguments[2];
			}
			var $attr9,$attr8,layout,$attr3,$attr5,$attr7,$attr4,$attr10,$attr6;
			if ($p['bool']($p['op_eq'](direction, (($attr3=($attr4=self)['CENTER']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
						$p['getattr']($attr4, 'CENTER'):
						self['CENTER'])))) {
				if ($p['bool'](((($attr5=($attr6=self)['center']) == null || (($attr6.__is_instance__) && typeof $attr5 == 'function') || (typeof $attr5['__get__'] == 'function')?
							$p['getattr']($attr6, 'center'):
							self['center']) !== null))) {
					throw ($p['Exception']('Only one CENTER widget may be added'));
				}
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('center', widget) : $p['setattr'](self, 'center', widget);
			}
			layout = $m['LayoutData'](direction);
			widget['setLayoutData'](layout);
			self['setCellHorizontalAlignment'](widget, (($attr7=($attr8=self)['horzAlign']) == null || (($attr8.__is_instance__) && typeof $attr7 == 'function') || (typeof $attr7['__get__'] == 'function')?
						$p['getattr']($attr8, 'horzAlign'):
						self['horzAlign']));
			self['setCellVerticalAlignment'](widget, (($attr9=($attr10=self)['vertAlign']) == null || (($attr10.__is_instance__) && typeof $attr9 == 'function') || (typeof $attr9['__get__'] == 'function')?
						$p['getattr']($attr10, 'vertAlign'):
						self['vertAlign']));
			self['dock_children']['append'](widget);
			self['realizeTable'](widget);
			return null;
		}
	, 1, [null,null,['self'],['widget'],['direction']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('addIndexedItem', function(index, item) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				item = arguments[2];
			}

			self['add'](item, index.__getitem__(1));
			return null;
		}
	, 1, [null,null,['self'],['index'],['item']]);
		$cls_definition['addIndexedItem'] = $method;
		$method = $pyjs__bind_method2('getWidgetIndex', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}
			var index,direction;
			index = self['dock_children']['index'](widget);
			direction = self['getWidgetDirection'](widget);
			return $p['tuple']([index, direction]);
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['getWidgetIndex'] = $method;
		$method = $pyjs__bind_method2('getIndexedChild', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var $attr11,direction,$attr12;
			var $tupleassign1 = index;
			index = $tupleassign1.__getitem__(0);
			direction = $tupleassign1.__getitem__(1);
			return (($attr11=($attr12=self)['dock_children']) == null || (($attr12.__is_instance__) && typeof $attr11 == 'function') || (typeof $attr11['__get__'] == 'function')?
						$p['getattr']($attr12, 'dock_children'):
						self['dock_children']).__getitem__(index);
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['getIndexedChild'] = $method;
		$method = $pyjs__bind_method2('getWidgetDirection', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}
			var $attr14,$attr13;
			if ($p['bool'](!$p['op_eq'](widget['getParent'](), self))) {
				return null;
			}
			return (($attr13=($attr14=widget['getLayoutData']())['direction']) == null || (($attr14.__is_instance__) && typeof $attr13 == 'function') || (typeof $attr13['__get__'] == 'function')?
						$p['getattr']($attr14, 'direction'):
						widget['getLayoutData']()['direction']);
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['getWidgetDirection'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr15,$attr16;
			return $p['len']((($attr15=($attr16=self)['dock_children']) == null || (($attr16.__is_instance__) && typeof $attr15 == 'function') || (typeof $attr15['__get__'] == 'function')?
						$p['getattr']($attr16, 'dock_children'):
						self['dock_children']));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['dock_children']['__iter__']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('remove', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}
			var $attr17,ret,$attr18;
			if ($p['bool']($p['op_eq'](widget, (($attr17=($attr18=self)['center']) == null || (($attr18.__is_instance__) && typeof $attr17 == 'function') || (typeof $attr17['__get__'] == 'function')?
						$p['getattr']($attr18, 'center'):
						self['center'])))) {
				self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('center', null) : $p['setattr'](self, 'center', null);
			}
			ret = $m['CellPanel']['remove'](self, widget);
			if ($p['bool'](ret)) {
				self['dock_children']['remove'](widget);
				self['realizeTable'](null);
			}
			return ret;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('setCellHeight', function(widget, height) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				height = arguments[2];
			}
			var $attr20,$attr21,$attr22,$attr23,$attr19,$attr24,data;
			data = widget['getLayoutData']();
			data.__is_instance__ && typeof data.__setattr__ == 'function' ? data.__setattr__('height', height) : $p['setattr'](data, 'height', height);
			if ($p['bool'](((($attr19=($attr20=data)['td']) == null || (($attr20.__is_instance__) && typeof $attr19 == 'function') || (typeof $attr19['__get__'] == 'function')?
						$p['getattr']($attr20, 'td'):
						data['td']) !== null))) {
				$m['DOM']['setStyleAttribute']((($attr21=($attr22=data)['td']) == null || (($attr22.__is_instance__) && typeof $attr21 == 'function') || (typeof $attr21['__get__'] == 'function')?
							$p['getattr']($attr22, 'td'):
							data['td']), 'height', (($attr23=($attr24=data)['height']) == null || (($attr24.__is_instance__) && typeof $attr23 == 'function') || (typeof $attr23['__get__'] == 'function')?
							$p['getattr']($attr24, 'height'):
							data['height']));
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
			var $attr30,$attr25,$attr26,$attr27,$attr28,$attr29,data;
			data = widget['getLayoutData']();
			data.__is_instance__ && typeof data.__setattr__ == 'function' ? data.__setattr__('hAlign', align) : $p['setattr'](data, 'hAlign', align);
			if ($p['bool'](((($attr25=($attr26=data)['td']) == null || (($attr26.__is_instance__) && typeof $attr25 == 'function') || (typeof $attr25['__get__'] == 'function')?
						$p['getattr']($attr26, 'td'):
						data['td']) !== null))) {
				$m['DOM']['setAttribute']((($attr27=($attr28=data)['td']) == null || (($attr28.__is_instance__) && typeof $attr27 == 'function') || (typeof $attr27['__get__'] == 'function')?
							$p['getattr']($attr28, 'td'):
							data['td']), 'align', (($attr29=($attr30=data)['hAlign']) == null || (($attr30.__is_instance__) && typeof $attr29 == 'function') || (typeof $attr29['__get__'] == 'function')?
							$p['getattr']($attr30, 'hAlign'):
							data['hAlign']));
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
			var $attr33,$attr32,$attr31,$attr36,$attr35,$attr34,data;
			data = widget['getLayoutData']();
			data.__is_instance__ && typeof data.__setattr__ == 'function' ? data.__setattr__('vAlign', align) : $p['setattr'](data, 'vAlign', align);
			if ($p['bool'](((($attr31=($attr32=data)['td']) == null || (($attr32.__is_instance__) && typeof $attr31 == 'function') || (typeof $attr31['__get__'] == 'function')?
						$p['getattr']($attr32, 'td'):
						data['td']) !== null))) {
				$m['DOM']['setStyleAttribute']((($attr33=($attr34=data)['td']) == null || (($attr34.__is_instance__) && typeof $attr33 == 'function') || (typeof $attr33['__get__'] == 'function')?
							$p['getattr']($attr34, 'td'):
							data['td']), 'verticalAlign', (($attr35=($attr36=data)['vAlign']) == null || (($attr36.__is_instance__) && typeof $attr35 == 'function') || (typeof $attr35['__get__'] == 'function')?
							$p['getattr']($attr36, 'vAlign'):
							data['vAlign']));
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
			var $attr37,$attr40,$attr41,$attr42,$attr39,$attr38,data;
			data = widget['getLayoutData']();
			data.__is_instance__ && typeof data.__setattr__ == 'function' ? data.__setattr__('width', width) : $p['setattr'](data, 'width', width);
			if ($p['bool'](((($attr37=($attr38=data)['td']) == null || (($attr38.__is_instance__) && typeof $attr37 == 'function') || (typeof $attr37['__get__'] == 'function')?
						$p['getattr']($attr38, 'td'):
						data['td']) !== null))) {
				$m['DOM']['setStyleAttribute']((($attr39=($attr40=data)['td']) == null || (($attr40.__is_instance__) && typeof $attr39 == 'function') || (typeof $attr39['__get__'] == 'function')?
							$p['getattr']($attr40, 'td'):
							data['td']), 'width', (($attr41=($attr42=data)['width']) == null || (($attr42.__is_instance__) && typeof $attr41 == 'function') || (typeof $attr41['__get__'] == 'function')?
							$p['getattr']($attr42, 'width'):
							data['width']));
			}
			return null;
		}
	, 1, [null,null,['self'],['widget'],['width']]);
		$cls_definition['setCellWidth'] = $method;
		$method = $pyjs__bind_method2('realizeTable', function(beingAdded) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				beingAdded = arguments[1];
			}
			var $iter1_iter,row,$attr82,$attr83,$attr80,$attr81,layout,$attr87,$attr84,$attr85,$attr88,$attr89,$attr106,$attr107,$attr104,$attr105,$attr102,$iter3_iter,$attr100,$attr101,td,$attr108,$attr109,$iter2_type,eastCol,$attr79,$attr78,$attr77,$attr76,$attr75,$attr74,$attr73,$attr72,$attr71,$attr70,$attr111,$attr110,$attr113,dir,$attr112,$attr114,$attr68,$attr69,$iter2_iter,bodyElement,$attr64,$attr65,$attr66,$attr67,$attr60,$attr61,$attr62,$attr63,$iter1_idx,$iter1_nextval,$sub13,$sub12,$sub11,$sub10,$sub16,$sub15,$sub14,$attr86,$attr59,$attr58,$add15,$attr51,$attr50,$attr53,$attr52,$attr55,$attr54,$attr57,$attr56,$iter2_array,westCol,$iter3_array,$attr46,$attr47,$attr44,$attr45,$attr43,$attr48,$attr49,rows,$iter3_nextval,$iter1_array,$attr103,$add13,$iter2_idx,child,$attr90,$iter2_nextval,northRow,$add3,colCount,$add6,$add7,$add4,$add5,$add8,$add9,$attr98,centerTd,$iter3_idx,$add20,$sub9,$sub8,$sub3,$sub2,$sub1,$sub7,$sub6,$sub5,$sub4,$or4,$or1,$or3,$or2,$add14,rowCount,$add16,$add17,$add10,$add11,$add12,$iter3_type,$add18,$add19,$attr95,$attr94,$attr97,$attr96,$attr91,$iter1_type,$attr93,$attr92,i,$attr99,southRow;
			bodyElement = self['getBody']();
			while ($p['bool'](($p['cmp']($m['DOM']['getChildCount'](bodyElement), 0) == 1))) {
				$m['DOM']['removeChild'](bodyElement, $m['DOM']['getChild'](bodyElement, 0));
			}
			rowCount = 1;
			colCount = 1;
			$iter1_iter = self['dock_children'];
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
				child = $iter1_nextval.$nextval;
				dir = (($attr43=($attr44=child['getLayoutData']())['direction']) == null || (($attr44.__is_instance__) && typeof $attr43 == 'function') || (typeof $attr43['__get__'] == 'function')?
							$p['getattr']($attr44, 'direction'):
							child['getLayoutData']()['direction']);
				if ($p['bool'](($p['bool']($or1=$p['op_eq'](dir, (($attr45=($attr46=self)['NORTH']) == null || (($attr46.__is_instance__) && typeof $attr45 == 'function') || (typeof $attr45['__get__'] == 'function')?
							$p['getattr']($attr46, 'NORTH'):
							self['NORTH'])))?$or1:$p['op_eq'](dir, (($attr47=($attr48=self)['SOUTH']) == null || (($attr48.__is_instance__) && typeof $attr47 == 'function') || (typeof $attr47['__get__'] == 'function')?
							$p['getattr']($attr48, 'SOUTH'):
							self['SOUTH']))))) {
					rowCount = $p['__op_add']($add3=rowCount,$add4=1);
				}
				else if ($p['bool'](($p['bool']($or3=$p['op_eq'](dir, (($attr49=($attr50=self)['EAST']) == null || (($attr50.__is_instance__) && typeof $attr49 == 'function') || (typeof $attr49['__get__'] == 'function')?
							$p['getattr']($attr50, 'EAST'):
							self['EAST'])))?$or3:$p['op_eq'](dir, (($attr51=($attr52=self)['WEST']) == null || (($attr52.__is_instance__) && typeof $attr51 == 'function') || (typeof $attr51['__get__'] == 'function')?
							$p['getattr']($attr52, 'WEST'):
							self['WEST']))))) {
					colCount = $p['__op_add']($add5=colCount,$add6=1);
				}
			}
			rows = $p['list']([]);
			$iter2_iter = $p['range'](rowCount);
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
				i = $iter2_nextval.$nextval;
				rows['append']($m['DockPanelTmpRow']());
				rows.__getitem__(i).__is_instance__ && typeof rows.__getitem__(i).__setattr__ == 'function' ? rows.__getitem__(i).__setattr__('tr', $m['DOM']['createTR']()) : $p['setattr'](rows.__getitem__(i), 'tr', $m['DOM']['createTR']());
				$m['DOM']['appendChild'](bodyElement, (($attr53=($attr54=rows.__getitem__(i))['tr']) == null || (($attr54.__is_instance__) && typeof $attr53 == 'function') || (typeof $attr53['__get__'] == 'function')?
							$p['getattr']($attr54, 'tr'):
							rows.__getitem__(i)['tr']));
			}
			westCol = 0;
			eastCol = $p['__op_sub']($sub1=colCount,$sub2=1);
			northRow = 0;
			southRow = $p['__op_sub']($sub3=rowCount,$sub4=1);
			centerTd = null;
			$iter3_iter = self['dock_children'];
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
				child = $iter3_nextval.$nextval;
				layout = child['getLayoutData']();
				td = $m['DOM']['createTD']();
				layout.__is_instance__ && typeof layout.__setattr__ == 'function' ? layout.__setattr__('td', td) : $p['setattr'](layout, 'td', td);
				$m['DOM']['setAttribute']((($attr55=($attr56=layout)['td']) == null || (($attr56.__is_instance__) && typeof $attr55 == 'function') || (typeof $attr55['__get__'] == 'function')?
							$p['getattr']($attr56, 'td'):
							layout['td']), 'align', (($attr57=($attr58=layout)['hAlign']) == null || (($attr58.__is_instance__) && typeof $attr57 == 'function') || (typeof $attr57['__get__'] == 'function')?
							$p['getattr']($attr58, 'hAlign'):
							layout['hAlign']));
				$m['DOM']['setStyleAttribute']((($attr59=($attr60=layout)['td']) == null || (($attr60.__is_instance__) && typeof $attr59 == 'function') || (typeof $attr59['__get__'] == 'function')?
							$p['getattr']($attr60, 'td'):
							layout['td']), 'verticalAlign', (($attr61=($attr62=layout)['vAlign']) == null || (($attr62.__is_instance__) && typeof $attr61 == 'function') || (typeof $attr61['__get__'] == 'function')?
							$p['getattr']($attr62, 'vAlign'):
							layout['vAlign']));
				$m['DOM']['setAttribute']((($attr63=($attr64=layout)['td']) == null || (($attr64.__is_instance__) && typeof $attr63 == 'function') || (typeof $attr63['__get__'] == 'function')?
							$p['getattr']($attr64, 'td'):
							layout['td']), 'width', (($attr65=($attr66=layout)['width']) == null || (($attr66.__is_instance__) && typeof $attr65 == 'function') || (typeof $attr65['__get__'] == 'function')?
							$p['getattr']($attr66, 'width'):
							layout['width']));
				$m['DOM']['setAttribute']((($attr67=($attr68=layout)['td']) == null || (($attr68.__is_instance__) && typeof $attr67 == 'function') || (typeof $attr67['__get__'] == 'function')?
							$p['getattr']($attr68, 'td'):
							layout['td']), 'height', (($attr69=($attr70=layout)['height']) == null || (($attr70.__is_instance__) && typeof $attr69 == 'function') || (typeof $attr69['__get__'] == 'function')?
							$p['getattr']($attr70, 'height'):
							layout['height']));
				if ($p['bool']($p['op_eq']((($attr71=($attr72=layout)['direction']) == null || (($attr72.__is_instance__) && typeof $attr71 == 'function') || (typeof $attr71['__get__'] == 'function')?
							$p['getattr']($attr72, 'direction'):
							layout['direction']), (($attr73=($attr74=self)['NORTH']) == null || (($attr74.__is_instance__) && typeof $attr73 == 'function') || (typeof $attr73['__get__'] == 'function')?
							$p['getattr']($attr74, 'NORTH'):
							self['NORTH'])))) {
					$m['DOM']['insertChild']((($attr75=($attr76=rows.__getitem__(northRow))['tr']) == null || (($attr76.__is_instance__) && typeof $attr75 == 'function') || (typeof $attr75['__get__'] == 'function')?
								$p['getattr']($attr76, 'tr'):
								rows.__getitem__(northRow)['tr']), td, (($attr77=($attr78=rows.__getitem__(northRow))['center']) == null || (($attr78.__is_instance__) && typeof $attr77 == 'function') || (typeof $attr77['__get__'] == 'function')?
								$p['getattr']($attr78, 'center'):
								rows.__getitem__(northRow)['center']));
					self['appendAndMaybeAdopt'](td, child['getElement'](), beingAdded);
					$m['DOM']['setIntAttribute'](td, 'colSpan', $p['__op_add']($add7=$p['__op_sub']($sub5=eastCol,$sub6=westCol),$add8=1));
					northRow = $p['__op_add']($add9=northRow,$add10=1);
				}
				else if ($p['bool']($p['op_eq']((($attr79=($attr80=layout)['direction']) == null || (($attr80.__is_instance__) && typeof $attr79 == 'function') || (typeof $attr79['__get__'] == 'function')?
							$p['getattr']($attr80, 'direction'):
							layout['direction']), (($attr81=($attr82=self)['SOUTH']) == null || (($attr82.__is_instance__) && typeof $attr81 == 'function') || (typeof $attr81['__get__'] == 'function')?
							$p['getattr']($attr82, 'SOUTH'):
							self['SOUTH'])))) {
					$m['DOM']['insertChild']((($attr83=($attr84=rows.__getitem__(southRow))['tr']) == null || (($attr84.__is_instance__) && typeof $attr83 == 'function') || (typeof $attr83['__get__'] == 'function')?
								$p['getattr']($attr84, 'tr'):
								rows.__getitem__(southRow)['tr']), td, (($attr85=($attr86=rows.__getitem__(southRow))['center']) == null || (($attr86.__is_instance__) && typeof $attr85 == 'function') || (typeof $attr85['__get__'] == 'function')?
								$p['getattr']($attr86, 'center'):
								rows.__getitem__(southRow)['center']));
					self['appendAndMaybeAdopt'](td, child['getElement'](), beingAdded);
					$m['DOM']['setIntAttribute'](td, 'colSpan', $p['__op_add']($add11=$p['__op_sub']($sub7=eastCol,$sub8=westCol),$add12=1));
					southRow = $p['__op_sub']($sub9=southRow,$sub10=1);
				}
				else if ($p['bool']($p['op_eq']((($attr87=($attr88=layout)['direction']) == null || (($attr88.__is_instance__) && typeof $attr87 == 'function') || (typeof $attr87['__get__'] == 'function')?
							$p['getattr']($attr88, 'direction'):
							layout['direction']), (($attr89=($attr90=self)['WEST']) == null || (($attr90.__is_instance__) && typeof $attr89 == 'function') || (typeof $attr89['__get__'] == 'function')?
							$p['getattr']($attr90, 'WEST'):
							self['WEST'])))) {
					row = rows.__getitem__(northRow);
					$m['DOM']['insertChild']((($attr91=($attr92=row)['tr']) == null || (($attr92.__is_instance__) && typeof $attr91 == 'function') || (typeof $attr91['__get__'] == 'function')?
								$p['getattr']($attr92, 'tr'):
								row['tr']), td, (($attr93=($attr94=row)['center']) == null || (($attr94.__is_instance__) && typeof $attr93 == 'function') || (typeof $attr93['__get__'] == 'function')?
								$p['getattr']($attr94, 'center'):
								row['center']));
					row.__is_instance__ && typeof row.__setattr__ == 'function' ? row.__setattr__('center', $p['__op_add']($add13=(($attr95=($attr96=row)['center']) == null || (($attr96.__is_instance__) && typeof $attr95 == 'function') || (typeof $attr95['__get__'] == 'function')?
								$p['getattr']($attr96, 'center'):
								row['center']),$add14=1)) : $p['setattr'](row, 'center', $p['__op_add']($add13=(($attr95=($attr96=row)['center']) == null || (($attr96.__is_instance__) && typeof $attr95 == 'function') || (typeof $attr95['__get__'] == 'function')?
								$p['getattr']($attr96, 'center'):
								row['center']),$add14=1));
					self['appendAndMaybeAdopt'](td, child['getElement'](), beingAdded);
					$m['DOM']['setIntAttribute'](td, 'rowSpan', $p['__op_add']($add15=$p['__op_sub']($sub11=southRow,$sub12=northRow),$add16=1));
					westCol = $p['__op_add']($add17=westCol,$add18=1);
				}
				else if ($p['bool']($p['op_eq']((($attr97=($attr98=layout)['direction']) == null || (($attr98.__is_instance__) && typeof $attr97 == 'function') || (typeof $attr97['__get__'] == 'function')?
							$p['getattr']($attr98, 'direction'):
							layout['direction']), (($attr99=($attr100=self)['EAST']) == null || (($attr100.__is_instance__) && typeof $attr99 == 'function') || (typeof $attr99['__get__'] == 'function')?
							$p['getattr']($attr100, 'EAST'):
							self['EAST'])))) {
					row = rows.__getitem__(northRow);
					$m['DOM']['insertChild']((($attr101=($attr102=row)['tr']) == null || (($attr102.__is_instance__) && typeof $attr101 == 'function') || (typeof $attr101['__get__'] == 'function')?
								$p['getattr']($attr102, 'tr'):
								row['tr']), td, (($attr103=($attr104=row)['center']) == null || (($attr104.__is_instance__) && typeof $attr103 == 'function') || (typeof $attr103['__get__'] == 'function')?
								$p['getattr']($attr104, 'center'):
								row['center']));
					self['appendAndMaybeAdopt'](td, child['getElement'](), beingAdded);
					$m['DOM']['setIntAttribute'](td, 'rowSpan', $p['__op_add']($add19=$p['__op_sub']($sub13=southRow,$sub14=northRow),$add20=1));
					eastCol = $p['__op_sub']($sub15=eastCol,$sub16=1);
				}
				else if ($p['bool']($p['op_eq']((($attr105=($attr106=layout)['direction']) == null || (($attr106.__is_instance__) && typeof $attr105 == 'function') || (typeof $attr105['__get__'] == 'function')?
							$p['getattr']($attr106, 'direction'):
							layout['direction']), (($attr107=($attr108=self)['CENTER']) == null || (($attr108.__is_instance__) && typeof $attr107 == 'function') || (typeof $attr107['__get__'] == 'function')?
							$p['getattr']($attr108, 'CENTER'):
							self['CENTER'])))) {
					centerTd = td;
				}
			}
			if ($p['bool'](((($attr109=($attr110=self)['center']) == null || (($attr110.__is_instance__) && typeof $attr109 == 'function') || (typeof $attr109['__get__'] == 'function')?
						$p['getattr']($attr110, 'center'):
						self['center']) !== null))) {
				row = rows.__getitem__(northRow);
				$m['DOM']['insertChild']((($attr111=($attr112=row)['tr']) == null || (($attr112.__is_instance__) && typeof $attr111 == 'function') || (typeof $attr111['__get__'] == 'function')?
							$p['getattr']($attr112, 'tr'):
							row['tr']), centerTd, (($attr113=($attr114=row)['center']) == null || (($attr114.__is_instance__) && typeof $attr113 == 'function') || (typeof $attr113['__get__'] == 'function')?
							$p['getattr']($attr114, 'center'):
							row['center']));
				self['appendAndMaybeAdopt'](centerTd, self['center']['getElement'](), beingAdded);
			}
			return null;
		}
	, 1, [null,null,['self'],['beingAdded']]);
		$cls_definition['realizeTable'] = $method;
		$method = $pyjs__bind_method2('appendAndMaybeAdopt', function(parent, child, beingAdded) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				parent = arguments[1];
				child = arguments[2];
				beingAdded = arguments[3];
			}

			if ($p['bool']((beingAdded !== null))) {
				if ($p['bool']($m['DOM']['compare'](child, beingAdded['getElement']()))) {
					$m['CellPanel']['add'](self, beingAdded, parent);
					return null;
				}
			}
			$m['DOM']['appendChild'](parent, child);
			return null;
		}
	, 1, [null,null,['self'],['parent'],['child'],['beingAdded']]);
		$cls_definition['appendAndMaybeAdopt'] = $method;
		var $bases = new Array($m['CellPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('DockPanel', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.DockPanel', 'DockPanel', $m['DockPanel']);
	return this;
}; /* end gwt.ui.DockPanel */


/* end module: gwt.ui.DockPanel */


/*
PYJS_DEPS: ['pyjamas.Factory', 'pyjamas', 'pyjamas.DOM', 'pyjamas.ui.CellPanel.CellPanel', 'pyjamas.ui', 'pyjamas.ui.CellPanel', 'pyjamas.ui.HasHorizontalAlignment', 'pyjamas.ui.HasVerticalAlignment']
*/
