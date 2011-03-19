/* start module: gwt.HTTPRequest */
$pyjs.loaded_modules['gwt.HTTPRequest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['gwt.HTTPRequest'].__was_initialized__) return $pyjs.loaded_modules['gwt.HTTPRequest'];
	if(typeof $pyjs.loaded_modules['gwt'] == 'undefined' || !$pyjs.loaded_modules['gwt'].__was_initialized__) $p['___import___']('gwt', null);
	var $m = $pyjs.loaded_modules["gwt.HTTPRequest"];
	$m.__repr__ = function() { return "<module: gwt.HTTPRequest>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'gwt.HTTPRequest';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['gwt']['HTTPRequest'] = $pyjs.loaded_modules['gwt.HTTPRequest'];
	var $attr1,$attr2;

	$m['pyjd'] = $p['___import___']('pyjd', 'gwt');
	$m['pygwt'] = $p['___import___']('pygwt', 'gwt');
	if ($p['bool']((($attr1=($attr2=$m['pyjd'])['is_desktop']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
				$p['getattr']($attr2, 'is_desktop'):
				$m['pyjd']['is_desktop']))) {
	}
	$m['sys'] = $p['___import___']('sys', 'gwt');
	$m['handlers'] = $p['dict']([]);
	$m['XULrunnerHackCallback'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.HTTPRequest';
		$method = $pyjs__bind_method2('__init__', function(htr, mode, user, pwd, url, postData, handler, return_xml, content_type, headers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				htr = arguments[1];
				mode = arguments[2];
				user = arguments[3];
				pwd = arguments[4];
				url = arguments[5];
				postData = arguments[6];
				handler = arguments[7];
				return_xml = arguments[8];
				content_type = arguments[9];
				headers = arguments[10];
			}
			if (typeof postData == 'undefined') postData=arguments.callee.__args__[8][1];
			if (typeof handler == 'undefined') handler=arguments.callee.__args__[9][1];
			if (typeof return_xml == 'undefined') return_xml=arguments.callee.__args__[10][1];
			if (typeof content_type == 'undefined') content_type=arguments.callee.__args__[11][1];
			if (typeof headers == 'undefined') headers=arguments.callee.__args__[12][1];

 			return null;
		}
	, 1, [null,null,['self'],['htr'],['mode'],['user'],['pwd'],['url'],['postData', null],['handler', null],['return_xml', false],['content_type', null],['headers', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('callback', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr9,$attr8,$attr5,$attr4,$attr7,$attr6,$attr20,$attr15,$attr19,$attr18,$attr10,$attr14,$attr17,$attr16,$attr11,$attr3,$attr13,$attr12;
			return self['htr']['asyncImpl']((($attr3=($attr4=self)['mode']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
						$p['getattr']($attr4, 'mode'):
						self['mode']), (($attr5=($attr6=self)['user']) == null || (($attr6.__is_instance__) && typeof $attr5 == 'function') || (typeof $attr5['__get__'] == 'function')?
						$p['getattr']($attr6, 'user'):
						self['user']), (($attr7=($attr8=self)['pwd']) == null || (($attr8.__is_instance__) && typeof $attr7 == 'function') || (typeof $attr7['__get__'] == 'function')?
						$p['getattr']($attr8, 'pwd'):
						self['pwd']), (($attr9=($attr10=self)['url']) == null || (($attr10.__is_instance__) && typeof $attr9 == 'function') || (typeof $attr9['__get__'] == 'function')?
						$p['getattr']($attr10, 'url'):
						self['url']), (($attr11=($attr12=self)['postData']) == null || (($attr12.__is_instance__) && typeof $attr11 == 'function') || (typeof $attr11['__get__'] == 'function')?
						$p['getattr']($attr12, 'postData'):
						self['postData']), (($attr13=($attr14=self)['handler']) == null || (($attr14.__is_instance__) && typeof $attr13 == 'function') || (typeof $attr13['__get__'] == 'function')?
						$p['getattr']($attr14, 'handler'):
						self['handler']), (($attr15=($attr16=self)['return_xml']) == null || (($attr16.__is_instance__) && typeof $attr15 == 'function') || (typeof $attr15['__get__'] == 'function')?
						$p['getattr']($attr16, 'return_xml'):
						self['return_xml']), (($attr17=($attr18=self)['content_type']) == null || (($attr18.__is_instance__) && typeof $attr17 == 'function') || (typeof $attr17['__get__'] == 'function')?
						$p['getattr']($attr18, 'content_type'):
						self['content_type']), (($attr19=($attr20=self)['headers']) == null || (($attr20.__is_instance__) && typeof $attr19 == 'function') || (typeof $attr19['__get__'] == 'function')?
						$p['getattr']($attr20, 'headers'):
						self['headers']));
		}
	, 1, [null,null,['self']]);
		$cls_definition['callback'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('XULrunnerHackCallback', $p['tuple']($bases), $data);
	})();
	$m['HTTPRequest'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'gwt.HTTPRequest';
		$method = $pyjs__bind_method2('asyncGet', function(url, handler, returnxml, content_type, headers, user, pwd) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				url = arguments[1];
				handler = arguments[2];
				returnxml = arguments[3];
				content_type = arguments[4];
				headers = arguments[5];
				user = arguments[6];
				pwd = arguments[7];
			}
			if (typeof returnxml == 'undefined') returnxml=arguments.callee.__args__[5][1];
			if (typeof content_type == 'undefined') content_type=arguments.callee.__args__[6][1];
			if (typeof headers == 'undefined') headers=arguments.callee.__args__[7][1];
			if (typeof user == 'undefined') user=arguments.callee.__args__[8][1];
			if (typeof pwd == 'undefined') pwd=arguments.callee.__args__[9][1];
			var postData;
			postData = null;
			if ($p['bool'](!$p['bool']($p['hasattr'](handler, 'onCompletion')))) {
				throw ($p['RuntimeError']('Invalid call to asyncGet: handler is not a valid request handler'));
			}
			self['asyncImpl']('GET', user, pwd, url, postData, handler, returnxml, content_type, headers);
			return null;
		}
	, 1, [null,null,['self'],['url'],['handler'],['returnxml', false],['content_type', null],['headers', null],['user', null],['pwd', null]]);
		$cls_definition['asyncGet'] = $method;
		$method = $pyjs__bind_method2('asyncPost', function(url, postData, handler, returnxml, content_type, headers, user, pwd) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				url = arguments[1];
				postData = arguments[2];
				handler = arguments[3];
				returnxml = arguments[4];
				content_type = arguments[5];
				headers = arguments[6];
				user = arguments[7];
				pwd = arguments[8];
			}
			if (typeof returnxml == 'undefined') returnxml=arguments.callee.__args__[6][1];
			if (typeof content_type == 'undefined') content_type=arguments.callee.__args__[7][1];
			if (typeof headers == 'undefined') headers=arguments.callee.__args__[8][1];
			if (typeof user == 'undefined') user=arguments.callee.__args__[9][1];
			if (typeof pwd == 'undefined') pwd=arguments.callee.__args__[10][1];

			if ($p['bool'](!$p['bool']($p['hasattr'](handler, 'onCompletion')))) {
				throw ($p['RuntimeError']('Invalid call to asyncPost: handler is not a valid request handler'));
			}
			return self['asyncImpl']('POST', user, pwd, url, postData, handler, returnxml, content_type, headers);
		}
	, 1, [null,null,['self'],['url'],['postData'],['handler'],['returnxml', false],['content_type', null],['headers', null],['user', null],['pwd', null]]);
		$cls_definition['asyncPost'] = $method;
		$method = $pyjs__bind_method2('asyncDelete', function(url, handler, returnxml, content_type, headers, user, pwd) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				url = arguments[1];
				handler = arguments[2];
				returnxml = arguments[3];
				content_type = arguments[4];
				headers = arguments[5];
				user = arguments[6];
				pwd = arguments[7];
			}
			if (typeof returnxml == 'undefined') returnxml=arguments.callee.__args__[5][1];
			if (typeof content_type == 'undefined') content_type=arguments.callee.__args__[6][1];
			if (typeof headers == 'undefined') headers=arguments.callee.__args__[7][1];
			if (typeof user == 'undefined') user=arguments.callee.__args__[8][1];
			if (typeof pwd == 'undefined') pwd=arguments.callee.__args__[9][1];
			var postData;
			postData = null;
			if ($p['bool'](!$p['bool']($p['hasattr'](handler, 'onCompletion')))) {
				throw ($p['RuntimeError']('Invalid call to asyncDelete: handler is not a valid request handler'));
			}
			return self['asyncImpl']('DELETE', user, pwd, url, postData, handler, returnxml, content_type, headers);
		}
	, 1, [null,null,['self'],['url'],['handler'],['returnxml', false],['content_type', null],['headers', null],['user', null],['pwd', null]]);
		$cls_definition['asyncDelete'] = $method;
		$method = $pyjs__bind_method2('asyncPut', function(url, postData, handler, returnxml, content_type, headers, user, pwd) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				url = arguments[1];
				postData = arguments[2];
				handler = arguments[3];
				returnxml = arguments[4];
				content_type = arguments[5];
				headers = arguments[6];
				user = arguments[7];
				pwd = arguments[8];
			}
			if (typeof returnxml == 'undefined') returnxml=arguments.callee.__args__[6][1];
			if (typeof content_type == 'undefined') content_type=arguments.callee.__args__[7][1];
			if (typeof headers == 'undefined') headers=arguments.callee.__args__[8][1];
			if (typeof user == 'undefined') user=arguments.callee.__args__[9][1];
			if (typeof pwd == 'undefined') pwd=arguments.callee.__args__[10][1];

			if ($p['bool'](!$p['bool']($p['hasattr'](handler, 'onCompletion')))) {
				throw ($p['RuntimeError']('Invalid call to asyncPut: handler is not a valid request handler'));
			}
			return self['asyncImpl']('PUT', user, pwd, url, postData, handler, returnxml, content_type, headers);
		}
	, 1, [null,null,['self'],['url'],['postData'],['handler'],['returnxml', false],['content_type', null],['headers', null],['user', null],['pwd', null]]);
		$cls_definition['asyncPut'] = $method;
		$method = $pyjs__bind_method2('createXmlHTTPRequest', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['doCreateXmlHTTPRequest']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['createXmlHTTPRequest'] = $method;
		$method = $pyjs__bind_method2('doCreateXmlHTTPRequest', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m.get_main_frame()['getXmlHttpRequest']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['doCreateXmlHTTPRequest'] = $method;
		$method = $pyjs__bind_method2('onLoad', function(sender, event, ignorearg) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				event = arguments[2];
				ignorearg = arguments[3];
			}
			var status,localHandler,xmlHttp,$or2,handler,$attr21,$attr22,$attr23,$attr24,$attr25,$attr26,responseText,$or1;
			xmlHttp = (($attr21=($attr22=event)['target']) == null || (($attr22.__is_instance__) && typeof $attr21 == 'function') || (typeof $attr21['__get__'] == 'function')?
						$p['getattr']($attr22, 'target'):
						event['target']);
			localHandler = $m['handlers']['get'](xmlHttp);
			$m['handlers'].__delitem__(xmlHttp);
			responseText = (($attr23=($attr24=xmlHttp)['responseText']) == null || (($attr24.__is_instance__) && typeof $attr23 == 'function') || (typeof $attr23['__get__'] == 'function')?
						$p['getattr']($attr24, 'responseText'):
						xmlHttp['responseText']);
			status = (($attr25=($attr26=xmlHttp)['status']) == null || (($attr26.__is_instance__) && typeof $attr25 == 'function') || (typeof $attr25['__get__'] == 'function')?
						$p['getattr']($attr26, 'status'):
						xmlHttp['status']);
			handler = null;
			xmlHttp = null;
			if ($p['bool']($p['op_eq'](status, 0))) {
				$p['printFunc'](['HACK ALERT! webkit wrapper returns 0 not 200!'], 1);
			}
			if ($p['bool'](($p['bool']($or1=$p['op_eq'](status, 200))?$or1:$p['op_eq'](status, 0)))) {
				localHandler['onCompletion'](responseText);
			}
			else {
				localHandler['onError'](responseText, status);
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['event'],['ignorearg']]);
		$cls_definition['onLoad'] = $method;
		$method = $pyjs__bind_method2('onReadyStateChange', function(xmlHttp, event, ignorearg) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				xmlHttp = arguments[1];
				event = arguments[2];
				ignorearg = arguments[3];
			}
			var status,$or4,localHandler,$or3,handler,$attr32,$attr31,$pyjs_try_err,responseText,$attr27,$attr28,$attr29,$attr30;
			try {
				xmlHttp = $m.get_main_frame()['gobject_wrap'](xmlHttp);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
				}
			}
			if ($p['bool'](!$p['op_eq']((($attr27=($attr28=xmlHttp)['readyState']) == null || (($attr28.__is_instance__) && typeof $attr27 == 'function') || (typeof $attr27['__get__'] == 'function')?
						$p['getattr']($attr28, 'readyState'):
						xmlHttp['readyState']), 4))) {
				return null;
			}
			localHandler = $m['handlers']['get'](xmlHttp);
			$m['handlers'].__delitem__(xmlHttp);
			responseText = (($attr29=($attr30=xmlHttp)['responseText']) == null || (($attr30.__is_instance__) && typeof $attr29 == 'function') || (typeof $attr29['__get__'] == 'function')?
						$p['getattr']($attr30, 'responseText'):
						xmlHttp['responseText']);
			status = (($attr31=($attr32=xmlHttp)['status']) == null || (($attr32.__is_instance__) && typeof $attr31 == 'function') || (typeof $attr31['__get__'] == 'function')?
						$p['getattr']($attr32, 'status'):
						xmlHttp['status']);
			handler = null;
			xmlHttp = null;
			if ($p['bool']($p['op_eq'](status, 0))) {
				$p['printFunc'](['HACK ALERT! webkit wrapper returns 0 not 200!'], 1);
			}
			if ($p['bool'](($p['bool']($or3=$p['op_eq'](status, 200))?$or3:$p['op_eq'](status, 0)))) {
				localHandler['onCompletion'](responseText);
			}
			else {
				localHandler['onError'](responseText, status);
			}
			return null;
		}
	, 1, [null,null,['self'],['xmlHttp'],['event'],['ignorearg']]);
		$cls_definition['onReadyStateChange'] = $method;
		$method = $pyjs__bind_method2('_convertUrlToAbsolute', function(url) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				url = arguments[1];
			}
			var $add4,sep,$and1,$and3,uri,$add2,$add3,$add1,$add6,slash,$add5,$and2;
			uri = $m['pygwt']['getModuleBaseURL']();
			if ($p['bool']($p['op_eq'](url.__getitem__(0), '/'))) {
				sep = uri['find']('://');
				if ($p['bool'](!$p['bool'](uri['startswith']('file://')))) {
					slash = uri['find']('/', $p['__op_add']($add1=sep,$add2=3));
					if ($p['bool'](($p['cmp'](slash, 0) == 1))) {
						uri = $p['slice'](uri, 0, slash);
					}
				}
				return $p['sprintf']('%s%s', $p['tuple']([uri, url]));
			}
			else {
				if ($p['bool'](($p['bool']($and1=!$p['op_eq']($p['slice'](url, 0, 7), 'file://'))?($p['bool']($and2=!$p['op_eq']($p['slice'](url, 0, 7), 'http://'))?!$p['op_eq']($p['slice'](url, 0, 8), 'https://'):$and2):$and1))) {
					slash = uri['rfind']('/');
					return $p['__op_add']($add5=$p['slice'](uri, 0, $p['__op_add']($add3=slash,$add4=1)),$add6=url);
				}
			}
			return url;
		}
	, 1, [null,null,['self'],['url']]);
		$cls_definition['_convertUrlToAbsolute'] = $method;
		$method = $pyjs__bind_method2('asyncImpl', function(method, user, pwd, url, postData, handler, returnxml, content_type, headers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				method = arguments[1];
				user = arguments[2];
				pwd = arguments[3];
				url = arguments[4];
				postData = arguments[5];
				handler = arguments[6];
				returnxml = arguments[7];
				content_type = arguments[8];
				headers = arguments[9];
			}
			if (typeof returnxml == 'undefined') returnxml=arguments.callee.__args__[9][1];
			if (typeof content_type == 'undefined') content_type=arguments.callee.__args__[10][1];
			if (typeof headers == 'undefined') headers=arguments.callee.__args__[11][1];
			var hval,$iter1_iter,$attr46,$attr44,$attr45,$attr42,$attr43,$attr40,$attr41,res,base64,$iter1_array,$or5,$or7,$or6,$iter1_nextval,$and4,$and5,$and6,$or8,$attr33,$attr37,$attr35,$attr34,$attr39,$attr38,mf,xmlHttp,$iter1_type,h,$iter1_idx,$attr36;
			if ($p['bool']((headers === null))) {
				headers = $p['dict']([]);
			}
			if ($p['bool'](($p['bool']($and4=user)?($p['bool']($and5=pwd)?!$p['bool'](headers.__contains__('Authorization')):$and5):$and4))) {
				base64 = $p['___import___']('base64', 'gwt');
				headers.__setitem__('Authorization', $p['sprintf']('Basic %s', base64['b64encode']($p['sprintf']('%s:%s', $p['tuple']([user, pwd])))));
			}
			mf = (typeof get_main_frame == "undefined"?$m.get_main_frame:get_main_frame)();
			if ($p['bool']((content_type !== null))) {
				headers.__setitem__('Content-Type', content_type);
			}
			if ($p['bool'](!$p['bool'](headers.__contains__('Content-Type')))) {
				if ($p['bool'](returnxml)) {
					headers.__setitem__('Content-Type', 'application/xml\x3B charset=utf-8');
				}
				else {
					headers.__setitem__('Content-Type', 'text/plain\x3B charset=utf-8');
				}
			}
			xmlHttp = self['doCreateXmlHTTPRequest']();
			url = self['_convertUrlToAbsolute'](url);
			if ($p['bool']($p['op_eq']((($attr33=($attr34=mf)['platform']) == null || (($attr34.__is_instance__) && typeof $attr33 == 'function') || (typeof $attr33['__get__'] == 'function')?
						$p['getattr']($attr34, 'platform'):
						mf['platform']), 'webkit'))) {
				mf['_addXMLHttpRequestEventListener'](xmlHttp, 'readystatechange', (($attr35=($attr36=self)['onReadyStateChange']) == null || (($attr36.__is_instance__) && typeof $attr35 == 'function') || (typeof $attr35['__get__'] == 'function')?
							$p['getattr']($attr36, 'onReadyStateChange'):
							self['onReadyStateChange']));
			}
			else if ($p['bool']($p['op_eq']((($attr37=($attr38=mf)['platform']) == null || (($attr38.__is_instance__) && typeof $attr37 == 'function') || (typeof $attr37['__get__'] == 'function')?
						$p['getattr']($attr38, 'platform'):
						mf['platform']), 'mshtml'))) {
				mf['_addXMLHttpRequestEventListener'](xmlHttp, 'onreadystatechange', (($attr39=($attr40=self)['onReadyStateChange']) == null || (($attr40.__is_instance__) && typeof $attr39 == 'function') || (typeof $attr39['__get__'] == 'function')?
							$p['getattr']($attr40, 'onReadyStateChange'):
							self['onReadyStateChange']));
			}
			else {
				mf['_addXMLHttpRequestEventListener'](xmlHttp, 'load', (($attr41=($attr42=self)['onLoad']) == null || (($attr42.__is_instance__) && typeof $attr41 == 'function') || (typeof $attr41['__get__'] == 'function')?
							$p['getattr']($attr42, 'onLoad'):
							self['onLoad']));
			}
			if ($p['bool'](($p['bool']($or5=$p['op_eq']((($attr43=($attr44=mf)['platform']) == null || (($attr44.__is_instance__) && typeof $attr43 == 'function') || (typeof $attr43['__get__'] == 'function')?
						$p['getattr']($attr44, 'platform'):
						mf['platform']), 'webkit'))?$or5:$p['op_eq']((($attr45=($attr46=mf)['platform']) == null || (($attr46.__is_instance__) && typeof $attr45 == 'function') || (typeof $attr45['__get__'] == 'function')?
						$p['getattr']($attr46, 'platform'):
						mf['platform']), 'mshtml')))) {
				xmlHttp['open'](method, url, true, '', '');
			}
			else {
				res = xmlHttp['open'](method, url);
			}
			$iter1_iter = headers;
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
				h = $iter1_nextval.$nextval;
				if ($p['bool']($p['isinstance'](headers.__getitem__(h), $p['basestring']))) {
					xmlHttp['setRequestHeader'](h, headers.__getitem__(h));
				}
				else {
					hval = '\x3B'['join'](function(){
						var $iter2_nextval,$iter2_type,$iter2_iter,i,$listcomp1,$iter2_idx,$iter2_array;
	$listcomp1 = $p['list']();
					$iter2_iter = headers.__getitem__(h);
					$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
					while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
						i = $iter2_nextval.$nextval;
						$listcomp1['append']($p['str'](i));
					}

	return $listcomp1;}());
					xmlHttp['setRequestHeader'](h, hval);
				}
			}
			$m['handlers'].__setitem__(xmlHttp, handler);
			xmlHttp['send'](($p['bool']($or7=postData)?$or7:''));
			return true;
			handler = null;
			xmlHttp = null;
			$m.localHandler['onError']($p['str']((typeof e == "undefined"?$m.e:e)));
			return false;
		}
	, 1, [null,null,['self'],['method'],['user'],['pwd'],['url'],['postData'],['handler'],['returnxml', false],['content_type', null],['headers', null]]);
		$cls_definition['asyncImpl'] = $method;
		var $bases = new Array(pyjslib.object);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('HTTPRequest', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end gwt.HTTPRequest */


/* end module: gwt.HTTPRequest */


/*
PYJS_DEPS: ['pyjd', 'pygwt', 'sys', 'base64']
*/
