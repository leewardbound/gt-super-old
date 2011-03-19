/* start module: gwt.History */
$pyjs.loaded_modules['gwt.History'] = function (__mod_name__) {
	if($pyjs.loaded_modules['gwt.History'].__was_initialized__) return $pyjs.loaded_modules['gwt.History'];
	if(typeof $pyjs.loaded_modules['gwt'] == 'undefined' || !$pyjs.loaded_modules['gwt'].__was_initialized__) $p['___import___']('gwt', null);
	var $m = $pyjs.loaded_modules["gwt.History"];
	$m.__repr__ = function() { return "<module: gwt.History>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'gwt.History';
	$m.__name__ = __mod_name__;
	$pyjs.loaded_modules['gwt']['History'] = $pyjs.loaded_modules['gwt.History'];
	var $attr1,$attr2;

	$m['pyjd'] = $p['___import___']('pyjd', 'gwt');
	if ($p['bool']((($attr1=($attr2=$m['pyjd'])['is_desktop']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
				$p['getattr']($attr2, 'is_desktop'):
				$m['pyjd']['is_desktop']))) {
	}
	$m['historyToken'] = '';
	$m['historyListeners'] = $p['list']([]);
	$m['addHistoryListener'] = function(listener) {

		$m['historyListeners']['append'](listener);
		return null;
	};
	$m['addHistoryListener'].__name__ = 'addHistoryListener';

	$m['addHistoryListener'].__bind_type__ = 0;
	$m['addHistoryListener'].__args__ = [null,null,['listener']];
	$m['back'] = function() {


    $wnd.history.back();
    
	};
	$m['back'].__name__ = 'back';

	$m['back'].__bind_type__ = 0;
	$m['back'].__args__ = [null,null];
	$m['forward'] = function() {


    $wnd.history.forward();
    
	};
	$m['forward'].__name__ = 'forward';

	$m['forward'].__bind_type__ = 0;
	$m['forward'].__args__ = [null,null];
	$m['getToken'] = function() {


    return $wnd.__historyToken;
    
	};
	$m['getToken'].__name__ = 'getToken';

	$m['getToken'].__bind_type__ = 0;
	$m['getToken'].__args__ = [null,null];
	$m['newItem'] = function(historyToken) {


    // Safari gets into a weird state (issue 2905) when setting the hash
    // component of the url to an empty string, but works fine as long as you
    // at least add a '#' to the end of the url. So we get around this by
    // recreating the url, rather than just setting location.hash.

    $wnd.location = $wnd.location.href.split('#')[0] + '#' +
                   encodeURI(historyToken).replace("#", "%23");

    
	};
	$m['newItem'].__name__ = 'newItem';

	$m['newItem'].__bind_type__ = 0;
	$m['newItem'].__args__ = [null,null,['historyToken']];
	$m['onHistoryChanged'] = function(historyToken) {

		(typeof fireHistoryChangedImpl == "undefined"?$m.fireHistoryChangedImpl:fireHistoryChangedImpl)(historyToken);
		return null;
	};
	$m['onHistoryChanged'].__name__ = 'onHistoryChanged';

	$m['onHistoryChanged'].__bind_type__ = 0;
	$m['onHistoryChanged'].__args__ = [null,null,['historyToken']];
	$m['fireHistoryChangedAndCatch'] = function() {

 		return null;
	};
	$m['fireHistoryChangedAndCatch'].__name__ = 'fireHistoryChangedAndCatch';

	$m['fireHistoryChangedAndCatch'].__bind_type__ = 0;
	$m['fireHistoryChangedAndCatch'].__args__ = [null,null];
	$m['fireHistoryChangedImpl'] = function(historyToken) {
		var $iter1_nextval,$iter1_type,$iter1_iter,listener,$iter1_array,$iter1_idx;
		$iter1_iter = $m['historyListeners'];
		$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
		while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
			listener = $iter1_nextval.$nextval;
			listener['onHistoryChanged'](historyToken);
		}
		return null;
	};
	$m['fireHistoryChangedImpl'].__name__ = 'fireHistoryChangedImpl';

	$m['fireHistoryChangedImpl'].__bind_type__ = 0;
	$m['fireHistoryChangedImpl'].__args__ = [null,null,['historyToken']];
	$m['removeHistoryListener'] = function(listener) {

		$m['historyListeners']['remove'](listener);
		return null;
	};
	$m['removeHistoryListener'].__name__ = 'removeHistoryListener';

	$m['removeHistoryListener'].__bind_type__ = 0;
	$m['removeHistoryListener'].__args__ = [null,null,['listener']];
	$m['init'] = function() {


    // Check for existence of the history frame.
    var historyFrame = $doc.getElementById('__pygwt_historyFrame');
    if (!historyFrame)
        return false;

    // Get the initial token from the url's hash component.
    var hash = $wnd.location.hash;
    if (hash.length > 0)
        $wnd.__historyToken = decodeURI(hash.substring(1)).replace("%23", "#");
    else
        $wnd.__historyToken = '';

    // Initialize the history iframe.  If '__historyToken' already exists, then
    // we're probably backing into the app, so _don't_ set the iframe's location.
    var tokenElement = null;
    if (historyFrame.contentWindow) {
        var doc = historyFrame.contentWindow.document;
        tokenElement = doc ? doc.getElementById('__historyToken') : null;
    }

    if (tokenElement)
        $wnd.__historyToken = tokenElement.value;
    else
        historyFrame.src = 'history.html?' + encodeURI($wnd.__historyToken).replace("#", "%23");

    // Create the timer that checks the browser's url hash every 1/4 s.
    $wnd.__checkHistory = function() {
        var token = '', hash = $wnd.location.hash;
        if (hash.length > 0)
            token = decodeURI(hash.substring(1)).replace("%23", "#");

        if (token != $wnd.__historyToken) {
            $wnd.__historyToken = token;

            $m['newItem'](token);
            $m['onHistoryChanged'](token);
        }

        $wnd.setTimeout('__checkHistory()', 250);
    };

    // Kick off the timer.
    $wnd.__checkHistory();

    return true;
    
	};
	$m['init'].__name__ = 'init';

	$m['init'].__bind_type__ = 0;
	$m['init'].__args__ = [null,null];
	$m['init']();
	return this;
}; /* end gwt.History */


/* end module: gwt.History */


/*
PYJS_DEPS: ['pyjd']
*/
