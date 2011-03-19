/* start module: Slideshow */
$pyjs.loaded_modules['Slideshow'] = function (__mod_name__) {
	if($pyjs.loaded_modules['Slideshow'].__was_initialized__) return $pyjs.loaded_modules['Slideshow'];
	var $m = $pyjs.loaded_modules["Slideshow"];
	$m.__repr__ = function() { return "<module: Slideshow>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Slideshow';
	$m.__name__ = __mod_name__;


	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', null, null, false);
	$m['DockPanel'] = $p['___import___']('pyjamas.ui.DockPanel.DockPanel', null, null, false);
	$m['HasAlignment'] = $p['___import___']('pyjamas.ui.HasAlignment', null, null, false);
	$m['Hyperlink'] = $p['___import___']('pyjamas.ui.Hyperlink.Hyperlink', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['ScrollPanel'] = $p['___import___']('pyjamas.ui.ScrollPanel.ScrollPanel', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['SinkList'] = $p['___import___']('SinkList.SinkList', null, null, false);
	$m['History'] = $p['___import___']('pyjamas.History', null, null, false);
	$m['Slide'] = $p['___import___']('Slide', null);
	$m['HTTPRequest'] = $p['___import___']('pyjamas.HTTPRequest.HTTPRequest', null, null, false);
	$m['SlideListLoader'] = $p['___import___']('SlideLoader.SlideListLoader', null, null, false);
	$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', null, null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
	$m['Slideshow'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'Slideshow';
		$method = $pyjs__bind_method2('onHistoryChanged', function(token) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				token = arguments[1];
			}
			var info;
			info = self['sink_list']['find'](token);
			if ($p['bool'](info)) {
				self['show'](info, false);
			}
			else {
				self['showInfo']();
			}
			return null;
		}
	, 1, [null,null,['self'],['token']]);
		$cls_definition['onHistoryChanged'] = $method;
		$method = $pyjs__bind_method2('onModuleLoad', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var height,vp,$sub2,$sub1,$attr9,$attr8,$attr1,$attr3,$attr2,$attr5,$attr4,$attr7,$attr6,$attr19,$attr18,$attr15,$attr14,$attr17,$attr16,$attr11,$attr10,$attr13,$attr12,$attr20;
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('curInfo', '') : $p['setattr'](self, 'curInfo', '');
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('curSink', null) : $p['setattr'](self, 'curSink', null);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('description', $m['HTML']()) : $p['setattr'](self, 'description', $m['HTML']());
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('sink_list', $m['SinkList']()) : $p['setattr'](self, 'sink_list', $m['SinkList']());
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('panel', $m['DockPanel']()) : $p['setattr'](self, 'panel', $m['DockPanel']());
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('b', $m['Button']('load', self)) : $p['setattr'](self, 'b', $m['Button']('load', self));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('sinkContainer', $m['DockPanel']()) : $p['setattr'](self, 'sinkContainer', $m['DockPanel']());
			self['sinkContainer']['setStyleName']('ks-Sink');
			height = $m['Window']['getClientHeight']();
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('sp', $m['ScrollPanel']((($attr1=($attr2=self)['sinkContainer']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
						$p['getattr']($attr2, 'sinkContainer'):
						self['sinkContainer']))) : $p['setattr'](self, 'sp', $m['ScrollPanel']((($attr1=($attr2=self)['sinkContainer']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
						$p['getattr']($attr2, 'sinkContainer'):
						self['sinkContainer'])));
			self['sp']['setWidth']('100%');
			self['sp']['setHeight']($p['sprintf']('%dpx', $p['__op_sub']($sub1=height,$sub2=110)));
			vp = $m['VerticalPanel']();
			vp['setWidth']('100%');
			vp['setHeight']('100%');
			vp['add']((($attr3=($attr4=self)['description']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
						$p['getattr']($attr4, 'description'):
						self['description']));
			vp['add']((($attr5=($attr6=self)['sp']) == null || (($attr6.__is_instance__) && typeof $attr5 == 'function') || (typeof $attr5['__get__'] == 'function')?
						$p['getattr']($attr6, 'sp'):
						self['sp']));
			self['description']['setStyleName']('ks-Intro');
			self['panel']['add']((($attr7=($attr8=self)['sink_list']) == null || (($attr8.__is_instance__) && typeof $attr7 == 'function') || (typeof $attr7['__get__'] == 'function')?
						$p['getattr']($attr8, 'sink_list'):
						self['sink_list']), (($attr9=($attr10=$m['DockPanel'])['WEST']) == null || (($attr10.__is_instance__) && typeof $attr9 == 'function') || (typeof $attr9['__get__'] == 'function')?
						$p['getattr']($attr10, 'WEST'):
						$m['DockPanel']['WEST']));
			self['panel']['add'](vp, (($attr11=($attr12=$m['DockPanel'])['CENTER']) == null || (($attr12.__is_instance__) && typeof $attr11 == 'function') || (typeof $attr11['__get__'] == 'function')?
						$p['getattr']($attr12, 'CENTER'):
						$m['DockPanel']['CENTER']));
			self['panel']['setCellVerticalAlignment']((($attr13=($attr14=self)['sink_list']) == null || (($attr14.__is_instance__) && typeof $attr13 == 'function') || (typeof $attr13['__get__'] == 'function')?
						$p['getattr']($attr14, 'sink_list'):
						self['sink_list']), (($attr15=($attr16=$m['HasAlignment'])['ALIGN_TOP']) == null || (($attr16.__is_instance__) && typeof $attr15 == 'function') || (typeof $attr15['__get__'] == 'function')?
						$p['getattr']($attr16, 'ALIGN_TOP'):
						$m['HasAlignment']['ALIGN_TOP']));
			self['panel']['setCellWidth'](vp, '100%');
			self['panel']['setCellHeight'](vp, '100%');
			$m['Window']['addWindowResizeListener'](self);
			$m['History']['addHistoryListener'](self);
			$m['RootPanel']()['add']((($attr17=($attr18=self)['panel']) == null || (($attr18.__is_instance__) && typeof $attr17 == 'function') || (typeof $attr17['__get__'] == 'function')?
						$p['getattr']($attr18, 'panel'):
						self['panel']));
			$m['RootPanel']()['add']((($attr19=($attr20=self)['b']) == null || (($attr20.__is_instance__) && typeof $attr19 == 'function') || (typeof $attr19['__get__'] == 'function')?
						$p['getattr']($attr20, 'b'):
						self['b']));
			self['loadSinks']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onModuleLoad'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			self['loadSinks']();
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClick'] = $method;
		$method = $pyjs__bind_method2('onTimer', function(tid) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tid = arguments[1];
			}

			self['loadSinks']();
			return null;
		}
	, 1, [null,null,['self'],['tid']]);
		$cls_definition['onTimer'] = $method;
		$method = $pyjs__bind_method2('onWindowResized', function(width, height) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				height = arguments[2];
			}
			var $sub3,$sub4;
			self['sink_list']['resize'](width, height);
			self['sp']['setHeight']($p['sprintf']('%dpx', $p['__op_sub']($sub3=height,$sub4=110)));
			return null;
		}
	, 1, [null,null,['self'],['width'],['height']]);
		$cls_definition['onWindowResized'] = $method;
		$method = $pyjs__bind_method2('show', function(info, affectHistory) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				info = arguments[1];
				affectHistory = arguments[2];
			}
			var $attr35,$attr32,$attr34,$attr31,$attr33,$attr21,$attr22,$attr23,$attr24,$attr25,$attr26,$attr27,$attr28,$attr29,$attr30,$attr38,$attr37,$attr36;
			if ($p['bool']($p['op_eq'](info, (($attr21=($attr22=self)['curInfo']) == null || (($attr22.__is_instance__) && typeof $attr21 == 'function') || (typeof $attr21['__get__'] == 'function')?
						$p['getattr']($attr22, 'curInfo'):
						self['curInfo'])))) {
				return null;
			}
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('curInfo', info) : $p['setattr'](self, 'curInfo', info);
			if ($p['bool'](!$p['op_eq']((($attr23=($attr24=self)['curSink']) == null || (($attr24.__is_instance__) && typeof $attr23 == 'function') || (typeof $attr23['__get__'] == 'function')?
						$p['getattr']($attr24, 'curSink'):
						self['curSink']), null))) {
				self['curSink']['onHide']();
				self['sinkContainer']['remove']((($attr25=($attr26=self)['curSink']) == null || (($attr26.__is_instance__) && typeof $attr25 == 'function') || (typeof $attr25['__get__'] == 'function')?
							$p['getattr']($attr26, 'curSink'):
							self['curSink']));
			}
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('curSink', info['getInstance']()) : $p['setattr'](self, 'curSink', info['getInstance']());
			self['sink_list']['setSinkSelection'](info['getName']());
			self['description']['setHTML'](info['getDescription']());
			if ($p['bool'](affectHistory)) {
				$m['History']['newItem'](info['getName']());
			}
			self['sinkContainer']['add']((($attr27=($attr28=self)['curSink']) == null || (($attr28.__is_instance__) && typeof $attr27 == 'function') || (typeof $attr27['__get__'] == 'function')?
						$p['getattr']($attr28, 'curSink'):
						self['curSink']), (($attr29=($attr30=$m['DockPanel'])['CENTER']) == null || (($attr30.__is_instance__) && typeof $attr29 == 'function') || (typeof $attr29['__get__'] == 'function')?
						$p['getattr']($attr30, 'CENTER'):
						$m['DockPanel']['CENTER']));
			self['sinkContainer']['setCellWidth']((($attr31=($attr32=self)['curSink']) == null || (($attr32.__is_instance__) && typeof $attr31 == 'function') || (typeof $attr31['__get__'] == 'function')?
						$p['getattr']($attr32, 'curSink'):
						self['curSink']), '100%');
			self['sinkContainer']['setCellHeight']((($attr33=($attr34=self)['curSink']) == null || (($attr34.__is_instance__) && typeof $attr33 == 'function') || (typeof $attr33['__get__'] == 'function')?
						$p['getattr']($attr34, 'curSink'):
						self['curSink']), '100%');
			self['sinkContainer']['setCellVerticalAlignment']((($attr35=($attr36=self)['curSink']) == null || (($attr36.__is_instance__) && typeof $attr35 == 'function') || (typeof $attr35['__get__'] == 'function')?
						$p['getattr']($attr36, 'curSink'):
						self['curSink']), (($attr37=($attr38=$m['HasAlignment'])['ALIGN_TOP']) == null || (($attr38.__is_instance__) && typeof $attr37 == 'function') || (typeof $attr37['__get__'] == 'function')?
						$p['getattr']($attr38, 'ALIGN_TOP'):
						$m['HasAlignment']['ALIGN_TOP']));
			self['curSink']['onShow']();
			return null;
		}
	, 1, [null,null,['self'],['info'],['affectHistory']]);
		$cls_definition['show'] = $method;
		$method = $pyjs__bind_method2('loadSinks', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['HTTPRequest']()['asyncGet']('slides.txt', $m['SlideListLoader'](self));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['loadSinks'] = $method;
		$method = $pyjs__bind_method2('setSlides', function(slides) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				slides = arguments[1];
			}
			var $iter1_nextval,$iter1_type,name,l,$iter1_iter,$iter1_array,initToken,desc,$iter1_idx;
			$iter1_iter = slides;
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
				l = $iter1_nextval.$nextval;
				name = l.__getitem__(0);
				desc = l.__getitem__(1);
				self['sink_list']['addSink']($m['Slide']['init'](name, desc));
			}
			initToken = $m['History']['getToken']();
			if ($p['bool']($p['len'](initToken))) {
				self['onHistoryChanged'](initToken);
			}
			else {
				self['showInfo']();
			}
			return null;
		}
	, 1, [null,null,['self'],['slides']]);
		$cls_definition['setSlides'] = $method;
		$method = $pyjs__bind_method2('showInfo', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr39,$attr40;
			self['show']((($attr39=($attr40=self['sink_list'])['sinks']) == null || (($attr40.__is_instance__) && typeof $attr39 == 'function') || (typeof $attr39['__get__'] == 'function')?
						$p['getattr']($attr40, 'sinks'):
						self['sink_list']['sinks']).__getitem__(0), false);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['showInfo'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('Slideshow', $p['tuple']($bases), $data);
	})();
	if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m.__name__:__name__), '__main__'))) {
		$m['pyjd']['setup']('http://127.0.0.1/examples/slideshow/public/Slideshow.html');
		$m['app'] = $m['Slideshow']();
		$m['app']['onModuleLoad']();
		$m['pyjd']['run']();
	}
	return this;
}; /* end Slideshow */


/* end module: Slideshow */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.Button.Button', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.Button', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.DockPanel.DockPanel', 'pyjamas.ui.DockPanel', 'pyjamas.ui.HasAlignment', 'pyjamas.ui.Hyperlink.Hyperlink', 'pyjamas.ui.Hyperlink', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.ScrollPanel.ScrollPanel', 'pyjamas.ui.ScrollPanel', 'pyjamas.Window', 'SinkList.SinkList', 'SinkList', 'pyjamas.History', 'Slide', 'pyjamas.HTTPRequest.HTTPRequest', 'pyjamas.HTTPRequest', 'SlideLoader.SlideListLoader', 'SlideLoader', 'pyjamas.Timer.Timer', 'pyjamas.Timer', 'pyjamas.DOM']
*/
