/* start module: math */
$pyjs.loaded_modules['math'] = function (__mod_name__) {
	if($pyjs.loaded_modules['math'].__was_initialized__) return $pyjs.loaded_modules['math'];
	var $m = $pyjs.loaded_modules["math"];
	$m.__repr__ = function() { return "<module: math>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'math';
	$m.__name__ = __mod_name__;



$m.ceil = Math.ceil;
$m.fabs = Math.abs;
$m.floor = Math.floor;
$m.exp = Math.exp;
$m.log = Math.log;
$m.pow = Math.pow;
$m.sqrt = Math.sqrt;
$m.cos = Math.cos;
$m.sin = Math.sin;
$m.tan = Math.tan;
$m.acos = Math.acos;
$m.asin = Math.asin;
$m.atan = Math.atan;
$m.atan2 = Math.atan2;
$m.pi = Math.PI;
$m.e = Math.E;
$m.__log10__ = Math.LN10;

	$m['__log2__'] = (typeof log == "undefined"?$m.log:log)(2);
	$m['fsum'] = function(x) {
		var $iter2_nextval,$iter2_type,$iter2_iter,i,sum,$iter2_idx,$add2,xx,$add1,$iter2_array;
		xx = function(){
			var $iter1_nextval,$iter1_type,i,$iter1_iter,$listcomp1,$iter1_array,v,$iter1_idx;
	$listcomp1 = $p['list']();
		$iter1_iter = $p['enumerate'](x);
		$iter1_nextval=$p['__iter_prepare']($iter1_iter,true);
		while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
			i = $iter1_nextval.$nextval.__array[0];
			v = $iter1_nextval.$nextval.__array[1];
			$listcomp1['append']($p['tuple']([(typeof fabs == "undefined"?$m.fabs:fabs)(v), i]));
		}

	return $listcomp1;}();
		xx['sort']();
		sum = 0;
		$iter2_iter = xx;
		$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
		while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
			i = $iter2_nextval.$nextval;
			sum = $p['__op_add']($add1=sum,$add2=x.__getitem__(i.__getitem__(1)));
		}
		return sum;
	};
	$m['fsum'].__name__ = 'fsum';

	$m['fsum'].__bind_type__ = 0;
	$m['fsum'].__args__ = [null,null,['x']];
	$m['frexp'] = function(x) {
		var e,$pow2,$pow1,m,$add3,$add4,$div3,$div2,$div1,$div4;
		if ($p['bool']($p['op_eq'](x, 0))) {
			return $p['tuple']([0.0, 0]);
		}
		e = $p['__op_add']($add3=$p['float_int']((typeof ($div1=(typeof log == "undefined"?$m.log:log)($p['abs'](x)))==typeof ($div2=$m['__log2__']) && typeof $div1=='number' && $div2 !== 0?
			$div1/$div2:
			$p['op_div']($div1,$div2))),$add4=1);
		m = (typeof ($div3=x)==typeof ($div4=(typeof ($pow1=2.0)==typeof ($pow2=e) && typeof $pow1=='number'?
			Math.pow($pow1,$pow2):
			$p['op_pow']($pow1,$pow2))) && typeof $div3=='number' && $div4 !== 0?
			$div3/$div4:
			$p['op_div']($div3,$div4));
		return $p['tuple']([m, e]);
	};
	$m['frexp'].__name__ = 'frexp';

	$m['frexp'].__bind_type__ = 0;
	$m['frexp'].__args__ = [null,null,['x']];
	$m['ldexp'] = function(x, i) {
		var $pow4,$pow3,$mul2,$mul1;
		return (typeof ($mul1=x)==typeof ($mul2=(typeof ($pow3=2)==typeof ($pow4=i) && typeof $pow3=='number'?
			Math.pow($pow3,$pow4):
			$p['op_pow']($pow3,$pow4))) && typeof $mul1=='number'?
			$mul1*$mul2:
			$p['op_mul']($mul1,$mul2));
	};
	$m['ldexp'].__name__ = 'ldexp';

	$m['ldexp'].__bind_type__ = 0;
	$m['ldexp'].__args__ = [null,null,['x'],['i']];
	$m['log10'] = function(arg) {
		var $div5,$div6;
		return (typeof ($div5=(typeof log == "undefined"?$m.log:log)(arg))==typeof ($div6=(typeof __log10__ == "undefined"?$m.__log10__:__log10__)) && typeof $div5=='number' && $div6 !== 0?
			$div5/$div6:
			$p['op_div']($div5,$div6));
	};
	$m['log10'].__name__ = 'log10';

	$m['log10'].__bind_type__ = 0;
	$m['log10'].__args__ = [null,null,['arg']];
	$m['degrees'] = function(x) {
		var $div8,$mul4,$mul3,$div7;
		return (typeof ($div7=(typeof ($mul3=x)==typeof ($mul4=180) && typeof $mul3=='number'?
			$mul3*$mul4:
			$p['op_mul']($mul3,$mul4)))==typeof ($div8=(typeof pi == "undefined"?$m.pi:pi)) && typeof $div7=='number' && $div8 !== 0?
			$div7/$div8:
			$p['op_div']($div7,$div8));
	};
	$m['degrees'].__name__ = 'degrees';

	$m['degrees'].__bind_type__ = 0;
	$m['degrees'].__args__ = [null,null,['x']];
	$m['radians'] = function(x) {
		var $mul5,$div9,$div10,$mul6;
		return (typeof ($div9=(typeof ($mul5=x)==typeof ($mul6=(typeof pi == "undefined"?$m.pi:pi)) && typeof $mul5=='number'?
			$mul5*$mul6:
			$p['op_mul']($mul5,$mul6)))==typeof ($div10=180) && typeof $div9=='number' && $div10 !== 0?
			$div9/$div10:
			$p['op_div']($div9,$div10));
	};
	$m['radians'].__name__ = 'radians';

	$m['radians'].__bind_type__ = 0;
	$m['radians'].__args__ = [null,null,['x']];
	return this;
}; /* end math */


/* end module: math */


