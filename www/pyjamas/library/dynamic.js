/* start module: dynamic */
$pyjs.loaded_modules['dynamic'] = function (__mod_name__) {
	if($pyjs.loaded_modules['dynamic'].__was_initialized__) return $pyjs.loaded_modules['dynamic'];
	var $m = $pyjs.loaded_modules["dynamic"];
	$m.__repr__ = function() { return "<module: dynamic>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'dynamic';
	$m.__name__ = __mod_name__;


	$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
	$m['sys'] = $p['___import___']('sys', null);
	;
	$m['AjaxError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'dynamic';
		var $bases = new Array($p['RuntimeError']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('AjaxError', $p['tuple']($bases), $data);
	})();
	$m['createHttpRequest'] = function() {
		var res,$pyjs_try_err;
		if ($p['bool'](typeof $wnd.XMLHttpRequest != 'undefined')) {
			return new XMLHttpRequest();
		}
		try {
			res = new ActiveXObject("Msxml2.XMLHTTP");
			return res;
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
			if (true) {
			}
		}
		return null;
	};
	$m['createHttpRequest'].__name__ = 'createHttpRequest';

	$m['createHttpRequest'].__bind_type__ = 0;
	$m['createHttpRequest'].__args__ = [null,null];
	$m['load'] = function(url, onreadystatechange, on_load_fn, async) {
		if (typeof onreadystatechange == 'undefined') onreadystatechange=arguments.callee.__args__[3][1];
		if (typeof on_load_fn == 'undefined') on_load_fn=arguments.callee.__args__[4][1];
		if (typeof async == 'undefined') async=arguments.callee.__args__[5][1];
		var $or5,$attr20,req,$pyjs_try_err,$attr9,$or4,$or6,$or3,$and3,$and4,$attr19,$attr18,$attr15,$attr14,$attr17,$attr16,$attr11,$attr10,$attr13,$attr12,$add2,$add1;
		;
		$wnd.__is_instance__ && typeof $wnd.__setattr__ == 'function' ? $wnd.__setattr__('status', $p['__op_add']($add1='Loading ',$add2=url)) : $p['setattr']($wnd, 'status', $p['__op_add']($add1='Loading ',$add2=url));
		req = $m['createHttpRequest']();
		if ($p['bool']((onreadystatechange === null))) {
			onreadystatechange = function(evnt) {
				var $attr8,$or1,$add4,$or2,$attr1,$and1,$and2,$attr2,$attr5,$attr4,$attr7,$attr6,$add3,str,$attr3;
				if ($p['bool'](($p['bool']($and1=$p['op_eq']((($attr1=($attr2=req)['readyState']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
							$p['getattr']($attr2, 'readyState'):
							req['readyState']), 4))?($p['bool']($or1=$p['op_eq']((($attr3=($attr4=req)['status']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
							$p['getattr']($attr4, 'status'):
							req['status']), 200))?$or1:$p['op_eq']((($attr5=($attr6=req)['status']) == null || (($attr6.__is_instance__) && typeof $attr5 == 'function') || (typeof $attr5['__get__'] == 'function')?
							$p['getattr']($attr6, 'status'):
							req['status']), 0)):$and1))) {
					str = (($attr7=($attr8=req)['responseText']) == null || (($attr8.__is_instance__) && typeof $attr7 == 'function') || (typeof $attr7['__get__'] == 'function')?
								$p['getattr']($attr8, 'responseText'):
								req['responseText']);
					$wnd.__is_instance__ && typeof $wnd.__setattr__ == 'function' ? $wnd.__setattr__('status', $p['__op_add']($add3='Loaded ',$add4=url)) : $p['setattr']($wnd, 'status', $p['__op_add']($add3='Loaded ',$add4=url));
					if ($p['bool'](!$p['bool']((on_load_fn === null)))) {
						on_load_fn(evnt, req);
					}
				}
				return null;
			};
			onreadystatechange.__name__ = 'onreadystatechange';

			onreadystatechange.__bind_type__ = 0;
			onreadystatechange.__args__ = [null,null,['evnt']];
		}
req.onreadystatechange = onreadystatechange;
		req['open']('GET', url, async);
		try {
			req['send'](null);
			if ($p['bool'](async)) {
				return null;
			}
			while ($p['bool'](true)) {
				if ($p['bool'](($p['bool']($or3=$p['op_eq']((($attr9=($attr10=req)['status']) == null || (($attr10.__is_instance__) && typeof $attr9 == 'function') || (typeof $attr9['__get__'] == 'function')?
							$p['getattr']($attr10, 'status'):
							req['status']), 200))?$or3:($p['bool']($and3=$p['op_eq']((($attr11=($attr12=req)['status']) == null || (($attr12.__is_instance__) && typeof $attr11 == 'function') || (typeof $attr11['__get__'] == 'function')?
							$p['getattr']($attr12, 'status'):
							req['status']), 0))?(($attr13=($attr14=req)['responseText']) == null || (($attr14.__is_instance__) && typeof $attr13 == 'function') || (typeof $attr13['__get__'] == 'function')?
							$p['getattr']($attr14, 'responseText'):
							req['responseText']):$and3)))) {
					if ($p['bool'](!$p['bool']((on_load_fn === null)))) {
						on_load_fn(null, req);
					}
					return req;
				}
				if ($p['bool'](($p['bool']($or5=!$p['op_eq']((($attr15=($attr16=req)['status']) == null || (($attr16.__is_instance__) && typeof $attr15 == 'function') || (typeof $attr15['__get__'] == 'function')?
							$p['getattr']($attr16, 'status'):
							req['status']), 0))?$or5:!$p['op_eq']((($attr17=($attr18=req)['responseText']) == null || (($attr18.__is_instance__) && typeof $attr17 == 'function') || (typeof $attr17['__get__'] == 'function')?
							$p['getattr']($attr18, 'responseText'):
							req['responseText']), '')))) {
					break;
				}
			}
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
			if (true) {
			}
		}
		throw ($m['AjaxError']('Synchronous error', (($attr19=($attr20=req)['status']) == null || (($attr20.__is_instance__) && typeof $attr19 == 'function') || (typeof $attr19['__get__'] == 'function')?
					$p['getattr']($attr20, 'status'):
					req['status'])));
		return null;
	};
	$m['load'].__name__ = 'load';

	$m['load'].__bind_type__ = 0;
	$m['load'].__args__ = [null,null,['url'],['onreadystatechange', null],['on_load_fn', null],['async', false]];
	$m['inject'] = function(values, namespace, names) {
		if (typeof namespace == 'undefined') namespace=arguments.callee.__args__[3][1];
		if (typeof names == 'undefined') names=arguments.callee.__args__[4][1];
		var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,$iter1_idx,k,$iter1_iter,$iter2_idx,v,$iter2_type,$iter2_array,$iter1_array;
		if ($p['bool']((namespace === null))) {
			namespace = $pyjs.global_namespace;
		}
		values = $p['dict'](values);
		if ($p['bool']((names === null))) {
			$iter1_iter = values;
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
				k = $iter1_nextval.$nextval;
				v = values.__getitem__(k);
namespace[k] = v;
			}
		}
		else {
			$iter2_iter = names;
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
				k = $iter2_nextval.$nextval;
				v = values.__getitem__(k);
namespace[k] = v;
			}
		}
		return null;
	};
	$m['inject'].__name__ = 'inject';

	$m['inject'].__bind_type__ = 0;
	$m['inject'].__args__ = [null,null,['values'],['namespace', null],['names', null]];
	$m['activate_css'] = function(targetnode) {
		var $iter3_idx,LC,$iter3_type,$attr21,$iter3_nextval,scriptnodes,$attr22,$attr23,$attr24,$iter3_iter,$iter3_array,fileref,sn;
		scriptnodes = $p['list'](targetnode['getElementsByTagName']('link'));
		$iter3_iter = $p['range']($p['len'](scriptnodes));
		$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
		while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
			LC = $iter3_nextval.$nextval;
			sn = scriptnodes.__getitem__(LC);
			sn['parentNode']['removeChild'](sn);
			fileref = $m['DOM']['createElement']('link');
			if ($p['bool']((typeof hassattr == "undefined"?$m.hassattr:hassattr)(sn, 'href'))) {
				fileref.__is_instance__ && typeof fileref.__setattr__ == 'function' ? fileref.__setattr__('href', (($attr21=($attr22=sn)['href']) == null || (($attr22.__is_instance__) && typeof $attr21 == 'function') || (typeof $attr21['__get__'] == 'function')?
							$p['getattr']($attr22, 'href'):
							sn['href'])) : $p['setattr'](fileref, 'href', (($attr21=($attr22=sn)['href']) == null || (($attr22.__is_instance__) && typeof $attr21 == 'function') || (typeof $attr21['__get__'] == 'function')?
							$p['getattr']($attr22, 'href'):
							sn['href']));
			}
			else {
				fileref.__is_instance__ && typeof fileref.__setattr__ == 'function' ? fileref.__setattr__('text', (($attr23=($attr24=sn)['text']) == null || (($attr24.__is_instance__) && typeof $attr23 == 'function') || (typeof $attr23['__get__'] == 'function')?
							$p['getattr']($attr24, 'text'):
							sn['text'])) : $p['setattr'](fileref, 'text', (($attr23=($attr24=sn)['text']) == null || (($attr24.__is_instance__) && typeof $attr23 == 'function') || (typeof $attr23['__get__'] == 'function')?
							$p['getattr']($attr24, 'text'):
							sn['text']));
			}
			fileref.__is_instance__ && typeof fileref.__setattr__ == 'function' ? fileref.__setattr__('rel', 'stylesheet') : $p['setattr'](fileref, 'rel', 'stylesheet');
			fileref.__is_instance__ && typeof fileref.__setattr__ == 'function' ? fileref.__setattr__('type', 'text/css') : $p['setattr'](fileref, 'type', 'text/css');
			$doc['getElementsByTagName']('head')['item'](0)['appendChild'](fileref);
		}
		return null;
	};
	$m['activate_css'].__name__ = 'activate_css';

	$m['activate_css'].__bind_type__ = 0;
	$m['activate_css'].__args__ = [null,null,['targetnode']];
	$m['activate_javascript'] = function(txt) {
		var fileref;
		fileref = $m['DOM']['createElement']('script');
		fileref.__is_instance__ && typeof fileref.__setattr__ == 'function' ? fileref.__setattr__('text', txt) : $p['setattr'](fileref, 'text', txt);
		fileref.__is_instance__ && typeof fileref.__setattr__ == 'function' ? fileref.__setattr__('type', 'text/javascript') : $p['setattr'](fileref, 'type', 'text/javascript');
		fileref.__is_instance__ && typeof fileref.__setattr__ == 'function' ? fileref.__setattr__('language', 'javascript') : $p['setattr'](fileref, 'language', 'javascript');
		fileref = fileref['cloneNode'](true);
		$doc['getElementsByTagName']('head')['item'](0)['appendChild'](fileref);
		return null;
	};
	$m['activate_javascript'].__name__ = 'activate_javascript';

	$m['activate_javascript'].__bind_type__ = 0;
	$m['activate_javascript'].__args__ = [null,null,['txt']];
	$m['eval'] = function(str) {

		return eval(str);
	};
	$m['eval'].__name__ = 'eval';

	$m['eval'].__bind_type__ = 0;
	$m['eval'].__args__ = [null,null,['str']];
	$m['ajax_eval'] = function(url, on_load_fn, async) {
		var onready;
		;
		onready = function(evnt, req) {
			var str,$attr25,$attr26;
			str = (($attr25=($attr26=req)['responseText']) == null || (($attr26.__is_instance__) && typeof $attr25 == 'function') || (typeof $attr25['__get__'] == 'function')?
						$p['getattr']($attr26, 'responseText'):
						req['responseText']);
			$m['activate_javascript'](str);
			if ($p['bool'](!$p['bool']((on_load_fn === null)))) {
				on_load_fn();
			}
			return null;
		};
		onready.__name__ = 'onready';

		onready.__bind_type__ = 0;
		onready.__args__ = [null,null,['evnt'],['req']];
		$m['load'](url, null, onready, async);
		return null;
	};
	$m['ajax_eval'].__name__ = 'ajax_eval';

	$m['ajax_eval'].__bind_type__ = 0;
	$m['ajax_eval'].__args__ = [null,null,['url'],['on_load_fn'],['async']];
	$m['__imported__'] = $p['dict']([]);
	$m['ajax_import'] = function(url, namespace, names) {
		if (typeof namespace == 'undefined') namespace=arguments.callee.__args__[3][1];
		if (typeof names == 'undefined') names=arguments.callee.__args__[4][1];
		var e,name,script,$iter4_nextval,req,module,$iter4_idx,$attr28,name_getter,$pyjs_try_err,$iter4_type,$attr27,$iter4_array,$attr29,$attr30,$iter4_iter;
		;
		if ($p['bool']($m['__imported__']['has_key'](url))) {
			module = $m['__imported__'].__getitem__(url);
		}
		else {
			req = $m['load'](url, null, null, false);
			module = null;
			name_getter = $p['list']([]);
			if ($p['bool']((names === null))) {
				names = $p['list']([]);
			}
			$iter4_iter = names;
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval).$nextval) != 'undefined') {
				name = $iter4_nextval.$nextval;
				name_getter['append']($p['sprintf']('$pyjs$moduleObject[\x27%s\x27] = %s\x3B', $p['tuple']([name, name])));
			}
			script = $p['sprintf']('(function ( ) {\x0A$pyjs$moduleObject={}\x3B\x0A%s\x3B\x0A%s\x0Areturn $pyjs$moduleObject\x3B\x0A})()\x3B', $p['tuple']([(($attr27=($attr28=req)['responseText']) == null || (($attr28.__is_instance__) && typeof $attr27 == 'function') || (typeof $attr27['__get__'] == 'function')?
						$p['getattr']($attr28, 'responseText'):
						req['responseText']), '\x0A'['join'](name_getter)]));
			try {
				module = $m['eval'](script);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
					e = $m['sys']['exc_info']();
					throw ($m['AjaxError']($p['sprintf']('Error in %s: %s', $p['tuple']([url, (($attr29=($attr30=e)['message']) == null || (($attr30.__is_instance__) && typeof $attr29 == 'function') || (typeof $attr29['__get__'] == 'function')?
								$p['getattr']($attr30, 'message'):
								e['message'])]))));
				}
			}
			$m['__imported__'].__setitem__(url, module);
		}
		$m['inject'](module, namespace, names);
		return null;
	};
	$m['ajax_import'].__name__ = 'ajax_import';

	$m['ajax_import'].__bind_type__ = 0;
	$m['ajax_import'].__args__ = [null,null,['url'],['namespace', null],['names', null]];
	$m['load_script'] = function(url, onload, async) {
		var e,onload_fn,$add6,$add5;
		$wnd.__is_instance__ && typeof $wnd.__setattr__ == 'function' ? $wnd.__setattr__('status', $p['__op_add']($add5='Loading ',$add6=url)) : $p['setattr']($wnd, 'status', $p['__op_add']($add5='Loading ',$add6=url));
		onload_fn = function() {
			var $add8,$add7;
			wnd.__is_instance__ && typeof wnd.__setattr__ == 'function' ? wnd.__setattr__('status', $p['__op_add']($add7='Loaded ',$add8=url)) : $p['setattr'](wnd, 'status', $p['__op_add']($add7='Loaded ',$add8=url));
			if ($p['bool'](!$p['bool']((onload === null)))) {
				$m['eval'](onload);
			}
			return true;
		};
		onload_fn.__name__ = 'onload_fn';

		onload_fn.__bind_type__ = 0;
		onload_fn.__args__ = [null,null];
		e = $m['DOM']['createElement']('script');
		e.__is_instance__ && typeof e.__setattr__ == 'function' ? e.__setattr__('src', url) : $p['setattr'](e, 'src', url);
		e.__is_instance__ && typeof e.__setattr__ == 'function' ? e.__setattr__('type', 'text/javascript') : $p['setattr'](e, 'type', 'text/javascript');
		e.__is_instance__ && typeof e.__setattr__ == 'function' ? e.__setattr__('language', 'javascript') : $p['setattr'](e, 'language', 'javascript');
		e.__is_instance__ && typeof e.__setattr__ == 'function' ? e.__setattr__('defer', async) : $p['setattr'](e, 'defer', async);
		e.__is_instance__ && typeof e.__setattr__ == 'function' ? e.__setattr__('onload', onload_fn) : $p['setattr'](e, 'onload', onload_fn);
		$doc['getElementsByTagName']('head').__getitem__(0)['appendChild'](e);
		return null;
	};
	$m['load_script'].__name__ = 'load_script';

	$m['load_script'].__bind_type__ = 0;
	$m['load_script'].__args__ = [null,null,['url'],['onload'],['async']];
	$m['running_timeout'] = 0;
	$m['timeout_idname'] = null;
	$m['timeout_url'] = null;
	$m['timeout_on_load_fn'] = null;
	$m['redo_timeout'] = null;
	$m['timeout_id'] = null;
	$m['ajax_dlink_refresh'] = function(idname, url, on_load_fn, timeout) {

		$m['timeout_idname'] = idname;
		$m['timeout_url'] = url;
		$m['timeout_on_load_fn'] = on_load_fn;
		$m['redo_timeout'] = timeout;
		if ($p['bool'](($p['cmp']($m['running_timeout'], 0) == 1))) {
			return null;
		}
		$m['timeout_id'] = setTimeout((typeof do_ajax_dlink_refresh == "undefined"?$m.do_ajax_dlink_refresh:do_ajax_dlink_refresh), timeout);
		$m['running_timeout'] = 1;
		return null;
	};
	$m['ajax_dlink_refresh'].__name__ = 'ajax_dlink_refresh';

	$m['ajax_dlink_refresh'].__bind_type__ = 0;
	$m['ajax_dlink_refresh'].__args__ = [null,null,['idname'],['url'],['on_load_fn'],['timeout']];
	$m['do_ajax_dlink_refresh'] = function() {

		if ($p['bool']($p['op_eq']((typeof ajax_dlink == "undefined"?$m.ajax_dlink:ajax_dlink)($m['timeout_idname'], $m['timeout_url'], $m['timeout_on_load_fn']), 0))) {
			$m['timeout_id'] = null;
			$m['running_timeout'] = 0;
			return null;
		}
		$m['timeout_id'] = null;
		$m['running_timeout'] = 0;
		$m['ajax_dlink_refresh']($m['timeout_idname'], $m['timeout_url'], $m['timeout_on_load_fn'], $m['redo_timeout']);
		return null;
	};
	$m['do_ajax_dlink_refresh'].__name__ = 'do_ajax_dlink_refresh';

	$m['do_ajax_dlink_refresh'].__bind_type__ = 0;
	$m['do_ajax_dlink_refresh'].__args__ = [null,null];
	$m['ajax_dlink'] = function(idname, url, on_load_fn) {
		var body,$attr32,$attr31,xhtoj,onreadystatechange;
		body = (($attr31=($attr32=$doc)['body']) == null || (($attr32.__is_instance__) && typeof $attr31 == 'function') || (typeof $attr31['__get__'] == 'function')?
					$p['getattr']($attr32, 'body'):
					$doc['body']);
		if ($p['bool']($m['timeout_id'])) {
			clearTimeout($m['timeout_id']);
		}
		onreadystatechange = function() {
			var txt,$attr40,jsnode,$attr33,$attr37,$attr36,$attr35,$attr34,$attr39,$attr38;
			if ($p['bool']($p['op_eq']((($attr33=($attr34=$m.xhtoj)['readyState']) == null || (($attr34.__is_instance__) && typeof $attr33 == 'function') || (typeof $attr33['__get__'] == 'function')?
						$p['getattr']($attr34, 'readyState'):
						$m.xhtoj['readyState']), 4))) {
				jsnode = 0;
				if ($p['bool']($p['op_eq']((($attr35=($attr36=$m.xhtoj)['status']) == null || (($attr36.__is_instance__) && typeof $attr35 == 'function') || (typeof $attr35['__get__'] == 'function')?
							$p['getattr']($attr36, 'status'):
							$m.xhtoj['status']), 200))) {
					txt = (($attr37=($attr38=$m.xhtoj)['responseText']) == null || (($attr38.__is_instance__) && typeof $attr37 == 'function') || (typeof $attr37['__get__'] == 'function')?
								$p['getattr']($attr38, 'responseText'):
								$m.xhtoj['responseText']);
					jsnode = null;
					if ($p['bool'](idname)) {
						jsnode = $m['DOM']['getElementById'](idname);
					}
					if ($p['bool']((jsnode === null))) {
						jsnode = $m['DOM']['createElement']('script');
					}
					$m['activate_javascript'](txt);
					if ($p['bool'](!$p['bool']((on_load_fn === null)))) {
						$wnd['alert'](on_load_fn);
						(typeof test_fn == "undefined"?$m.test_fn:test_fn)();
					}
					return 1;
				}
				else {
					jsnode = $m['DOM']['getElementById'](idname);
					if ($p['bool'](!$p['bool']((jsnode === null)))) {
						jsnode.__is_instance__ && typeof jsnode.__setattr__ == 'function' ? jsnode.__setattr__('innerHTML', (($attr39=($attr40=$m.xhtoj)['status']) == null || (($attr40.__is_instance__) && typeof $attr39 == 'function') || (typeof $attr39['__get__'] == 'function')?
									$p['getattr']($attr40, 'status'):
									$m.xhtoj['status'])) : $p['setattr'](jsnode, 'innerHTML', (($attr39=($attr40=$m.xhtoj)['status']) == null || (($attr40.__is_instance__) && typeof $attr39 == 'function') || (typeof $attr39['__get__'] == 'function')?
									$p['getattr']($attr40, 'status'):
									$m.xhtoj['status']));
					}
				}
			}
			return null;
		};
		onreadystatechange.__name__ = 'onreadystatechange';

		onreadystatechange.__bind_type__ = 0;
		onreadystatechange.__args__ = [null,null];
		xhtoj = $m['createHttpRequest']();
		xhtoj.__is_instance__ && typeof xhtoj.__setattr__ == 'function' ? xhtoj.__setattr__('onreadystatechange', onreadystatechange) : $p['setattr'](xhtoj, 'onreadystatechange', onreadystatechange);
		xhtoj['open']('GET', url, true);
		xhtoj['send']('');
		return 0;
	};
	$m['ajax_dlink'].__name__ = 'ajax_dlink';

	$m['ajax_dlink'].__bind_type__ = 0;
	$m['ajax_dlink'].__args__ = [null,null,['idname'],['url'],['on_load_fn']];
	return this;
}; /* end dynamic */


/* end module: dynamic */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'sys']
*/
