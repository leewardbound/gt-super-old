/* start module: os */
$pyjs.loaded_modules['os'] = function (__mod_name__) {
	if($pyjs.loaded_modules['os'].__was_initialized__) return $pyjs.loaded_modules['os'];
	var $m = $pyjs.loaded_modules["os"];
	$m.__repr__ = function() { return "<module: os>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'os';
	$m.__name__ = __mod_name__;


	$m['urandom'] = function(n) {

		throw ($p['NotImplementedError']('/dev/urandom (or equivalent) not found'));
		return (typeof bs == "undefined"?$m.bs:bs);
	};
	$m['urandom'].__name__ = 'urandom';

	$m['urandom'].__bind_type__ = 0;
	$m['urandom'].__args__ = [null,null,['n']];
	return this;
}; /* end os */


/* end module: os */


