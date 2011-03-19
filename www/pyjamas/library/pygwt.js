/* start module: pygwt */
$pyjs.loaded_modules['pygwt'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pygwt'].__was_initialized__) return $pyjs.loaded_modules['pygwt'];
	var $m = $pyjs.loaded_modules["pygwt"];
	$m.__repr__ = function() { return "<module: pygwt>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pygwt';
	$m.__name__ = __mod_name__;


	$m['sNextHashId'] = 0;
	$m['getNextHashId'] = function() {
		var $add2,$add1;
		$m['sNextHashId'] = $p['__op_add']($add1=$m['sNextHashId'],$add2=1);
		return $m['sNextHashId'];
	};
	$m['getNextHashId'].__name__ = 'getNextHashId';

	$m['getNextHashId'].__bind_type__ = 0;
	$m['getNextHashId'].__args__ = [null,null];
	$m['getHashCode'] = function(o) {


    return (o == null) ? 0 :
        (o.$H ? o.$H : (o.$H = pygwt_getNextHashId()))
    
	};
	$m['getHashCode'].__name__ = 'getHashCode';

	$m['getHashCode'].__bind_type__ = 0;
	$m['getHashCode'].__args__ = [null,null,['o']];
	$m['getModuleName'] = function() {
		var sys,$attr1,$attr2,os,mod_name;
		os = $p['___import___']('os', null);
		sys = $p['___import___']('sys', null);
		mod_name = (($attr1=($attr2=sys)['argv']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
					$p['getattr']($attr2, 'argv'):
					sys['argv']).__getitem__(0);
		mod_name = os['path']['$$split'](mod_name).__getitem__(1);
		mod_name = os['path']['spliext'](mod_name).__getitem__(0);
		return mod_name;
	};
	$m['getModuleName'].__name__ = 'getModuleName';

	$m['getModuleName'].__bind_type__ = 0;
	$m['getModuleName'].__args__ = [null,null];
	$m['getModuleBaseURL'] = function() {
		var i,$add3,s,$add4;
		s = $m.get_main_frame()['getUri']();
		i = s['find']('#');
		if ($p['bool'](!$p['op_eq'](i, (typeof ($usub1=1)=='number'?
			-$usub1:
			$p['op_usub']($usub1))))) {
			s = $p['slice'](s, 0, i);
		}
		i = s['find']('?');
		if ($p['bool'](!$p['op_eq'](i, (typeof ($usub2=1)=='number'?
			-$usub2:
			$p['op_usub']($usub2))))) {
			s = $p['slice'](s, 0, i);
		}
		i = s['rfind']('/');
		if ($p['bool'](!$p['op_eq'](i, (typeof ($usub3=1)=='number'?
			-$usub3:
			$p['op_usub']($usub3))))) {
			s = $p['slice'](s, 0, i);
		}
		if ($p['bool'](($p['cmp']($p['len'](s), 0) == 1))) {
			return $p['__op_add']($add3=s,$add4='/');
		}
		return '';
	};
	$m['getModuleBaseURL'].__name__ = 'getModuleBaseURL';

	$m['getModuleBaseURL'].__bind_type__ = 0;
	$m['getModuleBaseURL'].__args__ = [null,null];
	return this;
}; /* end pygwt */


/* end module: pygwt */


/*
PYJS_DEPS: ['os', 'sys']
*/
