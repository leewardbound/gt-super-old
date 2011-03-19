/* start module: sys */
var sys;
$pyjs.loaded_modules['sys'] = function (__mod_name__) {
	if($pyjs.loaded_modules['sys'].__was_initialized__) return $pyjs.loaded_modules['sys'];
	var $m = sys = $pyjs.loaded_modules["sys"];
	$m.__repr__ = function() { return "<module: sys>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'sys';
	$m.__name__ = __mod_name__;


	$m['overrides'] = null;
	$m['loadpath'] = null;
	$m['stacktrace'] = null;
	$m['appname'] = null;
	$m['version_info'] = $p['tuple']([2, 5, 0, 'pyjamas', 0]);
	$m['setloadpath'] = function(lp) {

		$m['loadpath'] = lp;
		return null;
	};
	$m['setloadpath'].__name__ = 'setloadpath';

	$m['setloadpath'].__bind_type__ = 0;
	$m['setloadpath'].__args__ = [null,null,['lp']];
	$m['setappname'] = function(an) {

		$m['appname'] = an;
		return null;
	};
	$m['setappname'].__name__ = 'setappname';

	$m['setappname'].__bind_type__ = 0;
	$m['setappname'].__args__ = [null,null,['an']];
	$m['getloadpath'] = function() {

		return $m['loadpath'];
	};
	$m['getloadpath'].__name__ = 'getloadpath';

	$m['getloadpath'].__bind_type__ = 0;
	$m['getloadpath'].__args__ = [null,null];
	$m['addoverride'] = function(module_name, path) {

		$m['overrides'].__setitem__(module_name, path);
		return null;
	};
	$m['addoverride'].__name__ = 'addoverride';

	$m['addoverride'].__bind_type__ = 0;
	$m['addoverride'].__args__ = [null,null,['module_name'],['path']];
	$m['exc_info'] = function() {
		var $attr9,$attr8,le,$attr1,$and1,$attr3,$attr2,$attr5,$attr4,$attr7,$attr6,start,$attr10,$sub2,$sub1,tb,$and2,cls;
		le = $pyjs.__last_exception__;
		if ($p['bool'](!$p['bool'](le))) {
			return $p['tuple']([null, null, null]);
		}
		if ($p['bool'](!$p['bool']($p['hasattr']((($attr1=($attr2=le)['error']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
					$p['getattr']($attr2, 'error'):
					le['error']), '__class__')))) {
			cls = null;
		}
		else {
			cls = (($attr3=($attr4=le['error'])['__class__']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
						$p['getattr']($attr4, '__class__'):
						le['error']['__class__']);
		}
		tb = $pyjs.__last_exception_stack__;
		if ($p['bool'](tb)) {
			start = (($attr5=($attr6=tb)['start']) == null || (($attr6.__is_instance__) && typeof $attr5 == 'function') || (typeof $attr5['__get__'] == 'function')?
						$p['getattr']($attr6, 'start'):
						tb['start']);
			while ($p['bool'](($p['bool']($and1=tb)?($p['cmp'](start, 0) == 1):$and1))) {
				tb = (($attr7=($attr8=tb)['tb_next']) == null || (($attr8.__is_instance__) && typeof $attr7 == 'function') || (typeof $attr7['__get__'] == 'function')?
							$p['getattr']($attr8, 'tb_next'):
							tb['tb_next']);
				start = $p['__op_sub']($sub1=start,$sub2=1);
			}
		}
		return $p['tuple']([cls, (($attr9=($attr10=le)['error']) == null || (($attr10.__is_instance__) && typeof $attr9 == 'function') || (typeof $attr9['__get__'] == 'function')?
					$p['getattr']($attr10, 'error'):
					le['error']), tb]);
	};
	$m['exc_info'].__name__ = 'exc_info';

	$m['exc_info'].__bind_type__ = 0;
	$m['exc_info'].__args__ = [null,null];
	$m['exc_clear'] = function() {

$pyjs.__last_exception_stack__ = $pyjs.__last_exception__ = null;
	};
	$m['exc_clear'].__name__ = 'exc_clear';

	$m['exc_clear'].__bind_type__ = 0;
	$m['exc_clear'].__args__ = [null,null];
sys._exception_from_trackstack = function (trackstack, start) {
    if (typeof start == 'undefined') {
      start = 0;
    }
    var exception_stack = null;
    var top = null;
    for (var needle=0; needle < $pyjs.trackstack.length; needle++) {
        var t = new Object();
        for (var p in $pyjs.trackstack[needle]) {
            t[p] = $pyjs.trackstack[needle][p];
        }
        if (typeof $pyjs.loaded_modules[t.module].__track_lines__ != 'undefined') {
          var f_globals = $p['dict']();
          for (var name in $pyjs.loaded_modules[t.module]) {
            f_globals.__setitem__(name, $pyjs.loaded_modules[t.module][name]);
          }
          t.tb_frame = {f_globals: f_globals};
        }
        if (exception_stack == null) {
            exception_stack = top = t;
        } else {
          top.tb_next = t;
        }
        top = t;
    }
    top.tb_next = null;
    exception_stack.start = start;
    return exception_stack;
};
sys.save_exception_stack = function (start) {
    if ($pyjs.__active_exception_stack__) {
        $pyjs.__active_exception_stack__.start = start;
        return $pyjs.__active_exception_stack__;
    }
    $pyjs.__active_exception_stack__ = sys._exception_from_trackstack($pyjs.trackstack, start);
    return $pyjs.__active_exception_stack__;
};
	$m['trackstacklist'] = function(stack, limit) {
		if (typeof stack == 'undefined') stack=arguments.callee.__args__[2][1];
		if (typeof limit == 'undefined') limit=arguments.callee.__args__[3][1];
		var pyjslib,$sub4,$sub3,$and3,$and4,stackstrings,$add2,$attr15,$add1,msg,$attr14,$attr16,$attr11,$attr13,$attr12;
		if ($p['bool']((stack === null))) {
			stack = $pyjs.__active_exception_stack__;
		}
		else {
			pyjslib = $p['___import___']('pyjslib', null);
			if ($p['bool'](pyjslib['isArray'](stack))) {
				stack = (typeof _exception_from_trackstack == "undefined"?$m._exception_from_trackstack:_exception_from_trackstack)(stack);
			}
		}
		if ($p['bool']((stack === null))) {
			return '';
		}
		stackstrings = $p['list']([]);
		msg = '';
		if ($p['bool']((limit === null))) {
			limit = (typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1));
		}
		while ($p['bool'](($p['bool']($and3=stack)?limit:$and3))) {
msg = $pyjs.loaded_modules[stack.module]['__track_lines__'][stack['lineno']];
if (typeof msg == 'undefined') msg = null;
			if ($p['bool'](msg)) {
				stackstrings['append']($p['__op_add']($add1=msg,$add2='\x0A'));
			}
			else {
				stackstrings['append']($p['sprintf']('%s.py, line %d\x0A', $p['tuple']([(($attr11=($attr12=stack)['module']) == null || (($attr12.__is_instance__) && typeof $attr11 == 'function') || (typeof $attr11['__get__'] == 'function')?
							$p['getattr']($attr12, 'module'):
							stack['module']), (($attr13=($attr14=stack)['lineno']) == null || (($attr14.__is_instance__) && typeof $attr13 == 'function') || (typeof $attr13['__get__'] == 'function')?
							$p['getattr']($attr14, 'lineno'):
							stack['lineno'])])));
			}
			stack = (($attr15=($attr16=stack)['tb_next']) == null || (($attr16.__is_instance__) && typeof $attr15 == 'function') || (typeof $attr15['__get__'] == 'function')?
						$p['getattr']($attr16, 'tb_next'):
						stack['tb_next']);
			limit = $p['__op_sub']($sub3=limit,$sub4=1);
		}
		return stackstrings;
	};
	$m['trackstacklist'].__name__ = 'trackstacklist';

	$m['trackstacklist'].__bind_type__ = 0;
	$m['trackstacklist'].__args__ = [null,null,['stack', null],['limit', null]];
	$m['trackstackstr'] = function(stack, limit) {
		if (typeof stack == 'undefined') stack=arguments.callee.__args__[2][1];
		if (typeof limit == 'undefined') limit=arguments.callee.__args__[3][1];
		var stackstrings;
		stackstrings = $pyjs_kwargs_call(null, $m['trackstacklist'], null, null, [{limit:limit}, stack]);
		return ''['join'](stackstrings);
	};
	$m['trackstackstr'].__name__ = 'trackstackstr';

	$m['trackstackstr'].__bind_type__ = 0;
	$m['trackstackstr'].__args__ = [null,null,['stack', null],['limit', null]];
	$m['_get_traceback_list'] = function(err, tb, limit) {
		if (typeof tb == 'undefined') tb=arguments.callee.__args__[3][1];
		if (typeof limit == 'undefined') limit=arguments.callee.__args__[4][1];
		var $add3,$pyjs_try_err,$add4,msg;
		msg = $p['list']([$p['__op_add']($add3=$p['str'](err),$add4='\x0A'), 'Traceback:\x0A']);
		try {
			msg['extend']($pyjs_kwargs_call(null, $m['trackstacklist'], null, null, [{limit:limit}, tb]));
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
			if (true) {
			}
		}
		return msg;
	};
	$m['_get_traceback_list'].__name__ = '_get_traceback_list';

	$m['_get_traceback_list'].__bind_type__ = 0;
	$m['_get_traceback_list'].__args__ = [null,null,['err'],['tb', null],['limit', null]];
	$m['_get_traceback'] = function(err, tb, limit) {
		if (typeof tb == 'undefined') tb=arguments.callee.__args__[3][1];
		if (typeof limit == 'undefined') limit=arguments.callee.__args__[4][1];

		return ''['join']($pyjs_kwargs_call(null, $m['_get_traceback_list'], null, null, [{limit:limit}, err, tb]));
	};
	$m['_get_traceback'].__name__ = '_get_traceback';

	$m['_get_traceback'].__bind_type__ = 0;
	$m['_get_traceback'].__args__ = [null,null,['err'],['tb', null],['limit', null]];
	$m['platform'] = $pyjs.platform;
	$m['byteorder'] = 'little';
	$m['maxint'] = 2147483647;
	$m['_StdStream'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'sys';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('content', '') : $p['setattr'](self, 'content', '');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('flush', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

$p._print_to_console(self.content)
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('content', '') : $p['setattr'](self, 'content', '');
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['flush'] = $method;
		$method = $pyjs__bind_method2('write', function(output) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				output = arguments[1];
			}
			var $add6,$attr18,$add5,$attr17;
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('content', $p['__op_add']($add5=(($attr17=($attr18=self)['content']) == null || (($attr18.__is_instance__) && typeof $attr17 == 'function') || (typeof $attr17['__get__'] == 'function')?
						$p['getattr']($attr18, 'content'):
						self['content']),$add6=output)) : $p['setattr'](self, 'content', $p['__op_add']($add5=(($attr17=($attr18=self)['content']) == null || (($attr18.__is_instance__) && typeof $attr17 == 'function') || (typeof $attr17['__get__'] == 'function')?
						$p['getattr']($attr18, 'content'):
						self['content']),$add6=output));
			if ($p['bool'](self['content']['endswith']('\x0A'))) {
				self['flush']();
			}
			return null;
		}
	, 1, [null,null,['self'],['output']]);
		$cls_definition['write'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('_StdStream', $p['tuple']($bases), $data);
	})();
	$m['stdout'] = $m['_StdStream']();
	$m['stderr'] = $m['_StdStream']();
	return this;
}; /* end sys */


/* end module: sys */


/*
PYJS_DEPS: ['pyjslib']
*/
