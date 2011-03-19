/* start module: gwt.log */
$pyjs.loaded_modules['gwt.log'] = function (__mod_name__) {
	if($pyjs.loaded_modules['gwt.log'].__was_initialized__) return $pyjs.loaded_modules['gwt.log'];
	if(typeof $pyjs.loaded_modules['gwt'] == 'undefined' || !$pyjs.loaded_modules['gwt'].__was_initialized__) $p['___import___']('gwt', null);
	var $m = $pyjs.loaded_modules["gwt.log"];
	$m.__repr__ = function() { return "<module: gwt.log>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'gwt.log';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['gwt']['log'] = $pyjs.loaded_modules['gwt.log'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'gwt', null, false);
	$m['getBodyElement'] = function() {
		var $attr1,$attr2;
		return (($attr1=($attr2=$doc)['body']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
					$p['getattr']($attr2, 'body'):
					$doc['body']);
	};
	$m['getBodyElement'].__name__ = 'getBodyElement';

	$m['getBodyElement'].__bind_type__ = 0;
	$m['getBodyElement'].__args__ = [null,null];
	$m['write'] = function(text) {
		var $add2,$add1;
		(typeof add_elem == "undefined"?$m.add_elem:add_elem)();
		text = text['$$replace']('\x0A', '\x3Cbr /\x3E\x0A');
		$m['data'] = $p['__op_add']($add1=$m['data'],$add2=text);
		$m['DOM']['setInnerHTML']((typeof element == "undefined"?$m.element:element), $m['data']);
		return null;
	};
	$m['write'].__name__ = 'write';

	$m['write'].__bind_type__ = 0;
	$m['write'].__args__ = [null,null,['text']];
	$m['writebr'] = function(text) {
		var $add4,$add3;
		$m['write']($p['__op_add']($add3=text,$add4='\x0A'));
		return null;
	};
	$m['writebr'].__name__ = 'writebr';

	$m['writebr'].__bind_type__ = 0;
	$m['writebr'].__args__ = [null,null,['text']];
	$m['data'] = '';
	$m['element'] = null;
	$m['add_elem'] = function() {

		if ($p['bool'](($m['element'] !== null))) {
			return null;
		}
		$m['element'] = $m['DOM']['createDiv']();
		$m['DOM']['appendChild']($m['getBodyElement'](), $m['element']);
		return null;
	};
	$m['add_elem'].__name__ = 'add_elem';

	$m['add_elem'].__bind_type__ = 0;
	$m['add_elem'].__args__ = [null,null];
	return this;
}; /* end gwt.log */


/* end module: gwt.log */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas']
*/
