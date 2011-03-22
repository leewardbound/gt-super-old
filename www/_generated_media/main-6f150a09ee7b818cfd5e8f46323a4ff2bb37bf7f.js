/*!
 * jQuery JavaScript Library v1.5.1
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Wed Feb 23 13:55:29 2011 -0500
 */
(function(a,b){function cg(a){return d.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cd(a){if(!bZ[a]){var b=d("<"+a+">").appendTo("body"),c=b.css("display");b.remove();if(c==="none"||c==="")c="block";bZ[a]=c}return bZ[a]}function cc(a,b){var c={};d.each(cb.concat.apply([],cb.slice(0,b)),function(){c[this]=a});return c}function bY(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function bX(){try{return new a.XMLHttpRequest}catch(b){}}function bW(){d(a).unload(function(){for(var a in bU)bU[a](0,1)})}function bQ(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var e=a.dataTypes,f={},g,h,i=e.length,j,k=e[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h==="string"&&(f[h.toLowerCase()]=a.converters[h]);l=k,k=e[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=f[m]||f["* "+k];if(!n){p=b;for(o in f){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=f[j[1]+" "+k];if(p){o=f[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&d.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function bP(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function bO(a,b,c,e){if(d.isArray(b)&&b.length)d.each(b,function(b,f){c||bq.test(a)?e(a,f):bO(a+"["+(typeof f==="object"||d.isArray(f)?b:"")+"]",f,c,e)});else if(c||b==null||typeof b!=="object")e(a,b);else if(d.isArray(b)||d.isEmptyObject(b))e(a,"");else for(var f in b)bO(a+"["+f+"]",b[f],c,e)}function bN(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bH,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l==="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bN(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bN(a,c,d,e,"*",g));return l}function bM(a){return function(b,c){typeof b!=="string"&&(c=b,b="*");if(d.isFunction(c)){var e=b.toLowerCase().split(bB),f=0,g=e.length,h,i,j;for(;f<g;f++)h=e[f],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bo(a,b,c){var e=b==="width"?bi:bj,f=b==="width"?a.offsetWidth:a.offsetHeight;if(c==="border")return f;d.each(e,function(){c||(f-=parseFloat(d.css(a,"padding"+this))||0),c==="margin"?f+=parseFloat(d.css(a,"margin"+this))||0:f-=parseFloat(d.css(a,"border"+this+"Width"))||0});return f}function ba(a,b){b.src?d.ajax({url:b.src,async:!1,dataType:"script"}):d.globalEval(b.text||b.textContent||b.innerHTML||""),b.parentNode&&b.parentNode.removeChild(b)}function _(a){return"getElementsByTagName"in a?a.getElementsByTagName("*"):"querySelectorAll"in a?a.querySelectorAll("*"):[]}function $(a,b){if(b.nodeType===1){var c=b.nodeName.toLowerCase();b.clearAttributes(),b.mergeAttributes(a);if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(d.expando)}}function Z(a,b){if(b.nodeType===1&&d.hasData(a)){var c=d.expando,e=d.data(a),f=d.data(b,e);if(e=e[c]){var g=e.events;f=f[c]=d.extend({},e);if(g){delete f.handle,f.events={};for(var h in g)for(var i=0,j=g[h].length;i<j;i++)d.event.add(b,h+(g[h][i].namespace?".":"")+g[h][i].namespace,g[h][i],g[h][i].data)}}}}function Y(a,b){return d.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function O(a,b,c){if(d.isFunction(b))return d.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return d.grep(a,function(a,d){return a===b===c});if(typeof b==="string"){var e=d.grep(a,function(a){return a.nodeType===1});if(J.test(b))return d.filter(b,e,!c);b=d.filter(b,e)}return d.grep(a,function(a,e){return d.inArray(a,b)>=0===c})}function N(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function F(a,b){return(a&&a!=="*"?a+".":"")+b.replace(r,"`").replace(s,"&")}function E(a){var b,c,e,f,g,h,i,j,k,l,m,n,o,q=[],r=[],s=d._data(this,"events");if(a.liveFired!==this&&s&&s.live&&!a.target.disabled&&(!a.button||a.type!=="click")){a.namespace&&(n=new RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")),a.liveFired=this;var t=s.live.slice(0);for(i=0;i<t.length;i++)g=t[i],g.origType.replace(p,"")===a.type?r.push(g.selector):t.splice(i--,1);f=d(a.target).closest(r,a.currentTarget);for(j=0,k=f.length;j<k;j++){m=f[j];for(i=0;i<t.length;i++){g=t[i];if(m.selector===g.selector&&(!n||n.test(g.namespace))&&!m.elem.disabled){h=m.elem,e=null;if(g.preType==="mouseenter"||g.preType==="mouseleave")a.type=g.preType,e=d(a.relatedTarget).closest(g.selector)[0];(!e||e!==h)&&q.push({elem:h,handleObj:g,level:m.level})}}}for(j=0,k=q.length;j<k;j++){f=q[j];if(c&&f.level>c)break;a.currentTarget=f.elem,a.data=f.handleObj.data,a.handleObj=f.handleObj,o=f.handleObj.origHandler.apply(f.elem,arguments);if(o===!1||a.isPropagationStopped()){c=f.level,o===!1&&(b=!1);if(a.isImmediatePropagationStopped())break}}return b}}function C(a,c,e){var f=d.extend({},e[0]);f.type=a,f.originalEvent={},f.liveFired=b,d.event.handle.call(c,f),f.isDefaultPrevented()&&e[0].preventDefault()}function w(){return!0}function v(){return!1}function g(a){for(var b in a)if(b!=="toJSON")return!1;return!0}function f(a,c,f){if(f===b&&a.nodeType===1){f=a.getAttribute("data-"+c);if(typeof f==="string"){try{f=f==="true"?!0:f==="false"?!1:f==="null"?null:d.isNaN(f)?e.test(f)?d.parseJSON(f):f:parseFloat(f)}catch(g){}d.data(a,c,f)}else f=b}return f}var c=a.document,d=function(){function I(){if(!d.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(I,1);return}d.ready()}}var d=function(a,b){return new d.fn.init(a,b,g)},e=a.jQuery,f=a.$,g,h=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,i=/\S/,j=/^\s+/,k=/\s+$/,l=/\d/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=navigator.userAgent,w,x=!1,y,z="then done fail isResolved isRejected promise".split(" "),A,B=Object.prototype.toString,C=Object.prototype.hasOwnProperty,D=Array.prototype.push,E=Array.prototype.slice,F=String.prototype.trim,G=Array.prototype.indexOf,H={};d.fn=d.prototype={constructor:d,init:function(a,e,f){var g,i,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!e&&c.body){this.context=c,this[0]=c.body,this.selector="body",this.length=1;return this}if(typeof a==="string"){g=h.exec(a);if(!g||!g[1]&&e)return!e||e.jquery?(e||f).find(a):this.constructor(e).find(a);if(g[1]){e=e instanceof d?e[0]:e,k=e?e.ownerDocument||e:c,j=m.exec(a),j?d.isPlainObject(e)?(a=[c.createElement(j[1])],d.fn.attr.call(a,e,!0)):a=[k.createElement(j[1])]:(j=d.buildFragment([g[1]],[k]),a=(j.cacheable?d.clone(j.fragment):j.fragment).childNodes);return d.merge(this,a)}i=c.getElementById(g[2]);if(i&&i.parentNode){if(i.id!==g[2])return f.find(a);this.length=1,this[0]=i}this.context=c,this.selector=a;return this}if(d.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return d.makeArray(a,this)},selector:"",jquery:"1.5.1",length:0,size:function(){return this.length},toArray:function(){return E.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var e=this.constructor();d.isArray(a)?D.apply(e,a):d.merge(e,a),e.prevObject=this,e.context=this.context,b==="find"?e.selector=this.selector+(this.selector?" ":"")+c:b&&(e.selector=this.selector+"."+b+"("+c+")");return e},each:function(a,b){return d.each(this,a,b)},ready:function(a){d.bindReady(),y.done(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(E.apply(this,arguments),"slice",E.call(arguments).join(","))},map:function(a){return this.pushStack(d.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:D,sort:[].sort,splice:[].splice},d.fn.init.prototype=d.fn,d.extend=d.fn.extend=function(){var a,c,e,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i==="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!=="object"&&!d.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){e=i[c],f=a[c];if(i===f)continue;l&&f&&(d.isPlainObject(f)||(g=d.isArray(f)))?(g?(g=!1,h=e&&d.isArray(e)?e:[]):h=e&&d.isPlainObject(e)?e:{},i[c]=d.extend(l,h,f)):f!==b&&(i[c]=f)}return i},d.extend({noConflict:function(b){a.$=f,b&&(a.jQuery=e);return d},isReady:!1,readyWait:1,ready:function(a){a===!0&&d.readyWait--;if(!d.readyWait||a!==!0&&!d.isReady){if(!c.body)return setTimeout(d.ready,1);d.isReady=!0;if(a!==!0&&--d.readyWait>0)return;y.resolveWith(c,[d]),d.fn.trigger&&d(c).trigger("ready").unbind("ready")}},bindReady:function(){if(!x){x=!0;if(c.readyState==="complete")return setTimeout(d.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",A,!1),a.addEventListener("load",d.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",A),a.attachEvent("onload",d.ready);var b=!1;try{b=a.frameElement==null}catch(e){}c.documentElement.doScroll&&b&&I()}}},isFunction:function(a){return d.type(a)==="function"},isArray:Array.isArray||function(a){return d.type(a)==="array"},isWindow:function(a){return a&&typeof a==="object"&&"setInterval"in a},isNaN:function(a){return a==null||!l.test(a)||isNaN(a)},type:function(a){return a==null?String(a):H[B.call(a)]||"object"},isPlainObject:function(a){if(!a||d.type(a)!=="object"||a.nodeType||d.isWindow(a))return!1;if(a.constructor&&!C.call(a,"constructor")&&!C.call(a.constructor.prototype,"isPrototypeOf"))return!1;var c;for(c in a){}return c===b||C.call(a,c)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw a},parseJSON:function(b){if(typeof b!=="string"||!b)return null;b=d.trim(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return a.JSON&&a.JSON.parse?a.JSON.parse(b):(new Function("return "+b))();d.error("Invalid JSON: "+b)},parseXML:function(b,c,e){a.DOMParser?(e=new DOMParser,c=e.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b)),e=c.documentElement,(!e||!e.nodeName||e.nodeName==="parsererror")&&d.error("Invalid XML: "+b);return c},noop:function(){},globalEval:function(a){if(a&&i.test(a)){var b=c.head||c.getElementsByTagName("head")[0]||c.documentElement,e=c.createElement("script");d.support.scriptEval()?e.appendChild(c.createTextNode(a)):e.text=a,b.insertBefore(e,b.firstChild),b.removeChild(e)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,e){var f,g=0,h=a.length,i=h===b||d.isFunction(a);if(e){if(i){for(f in a)if(c.apply(a[f],e)===!1)break}else for(;g<h;)if(c.apply(a[g++],e)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(var j=a[0];g<h&&c.call(j,g,j)!==!1;j=a[++g]){}return a},trim:F?function(a){return a==null?"":F.call(a)}:function(a){return a==null?"":(a+"").replace(j,"").replace(k,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var e=d.type(a);a.length==null||e==="string"||e==="function"||e==="regexp"||d.isWindow(a)?D.call(c,a):d.merge(c,a)}return c},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var c=0,d=b.length;c<d;c++)if(b[c]===a)return c;return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length==="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,b,c){var d=[],e;for(var f=0,g=a.length;f<g;f++)e=b(a[f],f,c),e!=null&&(d[d.length]=e);return d.concat.apply([],d)},guid:1,proxy:function(a,c,e){arguments.length===2&&(typeof c==="string"?(e=a,a=e[c],c=b):c&&!d.isFunction(c)&&(e=c,c=b)),!c&&a&&(c=function(){return a.apply(e||this,arguments)}),a&&(c.guid=a.guid=a.guid||c.guid||d.guid++);return c},access:function(a,c,e,f,g,h){var i=a.length;if(typeof c==="object"){for(var j in c)d.access(a,j,c[j],f,g,e);return a}if(e!==b){f=!h&&f&&d.isFunction(e);for(var k=0;k<i;k++)g(a[k],c,f?e.call(a[k],k,g(a[k],c)):e,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},_Deferred:function(){var a=[],b,c,e,f={done:function(){if(!e){var c=arguments,g,h,i,j,k;b&&(k=b,b=0);for(g=0,h=c.length;g<h;g++)i=c[g],j=d.type(i),j==="array"?f.done.apply(f,i):j==="function"&&a.push(i);k&&f.resolveWith(k[0],k[1])}return this},resolveWith:function(d,f){if(!e&&!b&&!c){c=1;try{while(a[0])a.shift().apply(d,f)}catch(g){throw g}finally{b=[d,f],c=0}}return this},resolve:function(){f.resolveWith(d.isFunction(this.promise)?this.promise():this,arguments);return this},isResolved:function(){return c||b},cancel:function(){e=1,a=[];return this}};return f},Deferred:function(a){var b=d._Deferred(),c=d._Deferred(),e;d.extend(b,{then:function(a,c){b.done(a).fail(c);return this},fail:c.done,rejectWith:c.resolveWith,reject:c.resolve,isRejected:c.isResolved,promise:function(a){if(a==null){if(e)return e;e=a={}}var c=z.length;while(c--)a[z[c]]=b[z[c]];return a}}),b.done(c.cancel).fail(b.cancel),delete b.cancel,a&&a.call(b,b);return b},when:function(a){var b=arguments.length,c=b<=1&&a&&d.isFunction(a.promise)?a:d.Deferred(),e=c.promise();if(b>1){var f=E.call(arguments,0),g=b,h=function(a){return function(b){f[a]=arguments.length>1?E.call(arguments,0):b,--g||c.resolveWith(e,f)}};while(b--)a=f[b],a&&d.isFunction(a.promise)?a.promise().then(h(b),c.reject):--g;g||c.resolveWith(e,f)}else c!==a&&c.resolve(a);return e},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}d.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.subclass=this.subclass,a.fn.init=function b(b,c){c&&c instanceof d&&!(c instanceof a)&&(c=a(c));return d.fn.init.call(this,b,c,e)},a.fn.init.prototype=a.fn;var e=a(c);return a},browser:{}}),y=d._Deferred(),d.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){H["[object "+b+"]"]=b.toLowerCase()}),w=d.uaMatch(v),w.browser&&(d.browser[w.browser]=!0,d.browser.version=w.version),d.browser.webkit&&(d.browser.safari=!0),G&&(d.inArray=function(a,b){return G.call(b,a)}),i.test(" ")&&(j=/^[\s\xA0]+/,k=/[\s\xA0]+$/),g=d(c),c.addEventListener?A=function(){c.removeEventListener("DOMContentLoaded",A,!1),d.ready()}:c.attachEvent&&(A=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",A),d.ready())});return d}();(function(){d.support={};var b=c.createElement("div");b.style.display="none",b.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";var e=b.getElementsByTagName("*"),f=b.getElementsByTagName("a")[0],g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=b.getElementsByTagName("input")[0];if(e&&e.length&&f){d.support={leadingWhitespace:b.firstChild.nodeType===3,tbody:!b.getElementsByTagName("tbody").length,htmlSerialize:!!b.getElementsByTagName("link").length,style:/red/.test(f.getAttribute("style")),hrefNormalized:f.getAttribute("href")==="/a",opacity:/^0.55$/.test(f.style.opacity),cssFloat:!!f.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,deleteExpando:!0,optDisabled:!1,checkClone:!1,noCloneEvent:!0,noCloneChecked:!0,boxModel:null,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableHiddenOffsets:!0},i.checked=!0,d.support.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,d.support.optDisabled=!h.disabled;var j=null;d.support.scriptEval=function(){if(j===null){var b=c.documentElement,e=c.createElement("script"),f="script"+d.now();try{e.appendChild(c.createTextNode("window."+f+"=1;"))}catch(g){}b.insertBefore(e,b.firstChild),a[f]?(j=!0,delete a[f]):j=!1,b.removeChild(e),b=e=f=null}return j};try{delete b.test}catch(k){d.support.deleteExpando=!1}!b.addEventListener&&b.attachEvent&&b.fireEvent&&(b.attachEvent("onclick",function l(){d.support.noCloneEvent=!1,b.detachEvent("onclick",l)}),b.cloneNode(!0).fireEvent("onclick")),b=c.createElement("div"),b.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";var m=c.createDocumentFragment();m.appendChild(b.firstChild),d.support.checkClone=m.cloneNode(!0).cloneNode(!0).lastChild.checked,d(function(){var a=c.createElement("div"),b=c.getElementsByTagName("body")[0];if(b){a.style.width=a.style.paddingLeft="1px",b.appendChild(a),d.boxModel=d.support.boxModel=a.offsetWidth===2,"zoom"in a.style&&(a.style.display="inline",a.style.zoom=1,d.support.inlineBlockNeedsLayout=a.offsetWidth===2,a.style.display="",a.innerHTML="<div style='width:4px;'></div>",d.support.shrinkWrapBlocks=a.offsetWidth!==2),a.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";var e=a.getElementsByTagName("td");d.support.reliableHiddenOffsets=e[0].offsetHeight===0,e[0].style.display="",e[1].style.display="none",d.support.reliableHiddenOffsets=d.support.reliableHiddenOffsets&&e[0].offsetHeight===0,a.innerHTML="",b.removeChild(a).style.display="none",a=e=null}});var n=function(a){var b=c.createElement("div");a="on"+a;if(!b.attachEvent)return!0;var d=a in b;d||(b.setAttribute(a,"return;"),d=typeof b[a]==="function"),b=null;return d};d.support.submitBubbles=n("submit"),d.support.changeBubbles=n("change"),b=e=f=null}})();var e=/^(?:\{.*\}|\[.*\])$/;d.extend({cache:{},uuid:0,expando:"jQuery"+(d.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?d.cache[a[d.expando]]:a[d.expando];return!!a&&!g(a)},data:function(a,c,e,f){if(d.acceptData(a)){var g=d.expando,h=typeof c==="string",i,j=a.nodeType,k=j?d.cache:a,l=j?a[d.expando]:a[d.expando]&&d.expando;if((!l||f&&l&&!k[l][g])&&h&&e===b)return;l||(j?a[d.expando]=l=++d.uuid:l=d.expando),k[l]||(k[l]={},j||(k[l].toJSON=d.noop));if(typeof c==="object"||typeof c==="function")f?k[l][g]=d.extend(k[l][g],c):k[l]=d.extend(k[l],c);i=k[l],f&&(i[g]||(i[g]={}),i=i[g]),e!==b&&(i[c]=e);if(c==="events"&&!i[c])return i[g]&&i[g].events;return h?i[c]:i}},removeData:function(b,c,e){if(d.acceptData(b)){var f=d.expando,h=b.nodeType,i=h?d.cache:b,j=h?b[d.expando]:d.expando;if(!i[j])return;if(c){var k=e?i[j][f]:i[j];if(k){delete k[c];if(!g(k))return}}if(e){delete i[j][f];if(!g(i[j]))return}var l=i[j][f];d.support.deleteExpando||i!=a?delete i[j]:i[j]=null,l?(i[j]={},h||(i[j].toJSON=d.noop),i[j][f]=l):h&&(d.support.deleteExpando?delete b[d.expando]:b.removeAttribute?b.removeAttribute(d.expando):b[d.expando]=null)}},_data:function(a,b,c){return d.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=d.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),d.fn.extend({data:function(a,c){var e=null;if(typeof a==="undefined"){if(this.length){e=d.data(this[0]);if(this[0].nodeType===1){var g=this[0].attributes,h;for(var i=0,j=g.length;i<j;i++)h=g[i].name,h.indexOf("data-")===0&&(h=h.substr(5),f(this[0],h,e[h]))}}return e}if(typeof a==="object")return this.each(function(){d.data(this,a)});var k=a.split(".");k[1]=k[1]?"."+k[1]:"";if(c===b){e=this.triggerHandler("getData"+k[1]+"!",[k[0]]),e===b&&this.length&&(e=d.data(this[0],a),e=f(this[0],a,e));return e===b&&k[1]?this.data(k[0]):e}return this.each(function(){var b=d(this),e=[k[0],c];b.triggerHandler("setData"+k[1]+"!",e),d.data(this,a,c),b.triggerHandler("changeData"+k[1]+"!",e)})},removeData:function(a){return this.each(function(){d.removeData(this,a)})}}),d.extend({queue:function(a,b,c){if(a){b=(b||"fx")+"queue";var e=d._data(a,b);if(!c)return e||[];!e||d.isArray(c)?e=d._data(a,b,d.makeArray(c)):e.push(c);return e}},dequeue:function(a,b){b=b||"fx";var c=d.queue(a,b),e=c.shift();e==="inprogress"&&(e=c.shift()),e&&(b==="fx"&&c.unshift("inprogress"),e.call(a,function(){d.dequeue(a,b)})),c.length||d.removeData(a,b+"queue",!0)}}),d.fn.extend({queue:function(a,c){typeof a!=="string"&&(c=a,a="fx");if(c===b)return d.queue(this[0],a);return this.each(function(b){var e=d.queue(this,a,c);a==="fx"&&e[0]!=="inprogress"&&d.dequeue(this,a)})},dequeue:function(a){return this.each(function(){d.dequeue(this,a)})},delay:function(a,b){a=d.fx?d.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(){var c=this;setTimeout(function(){d.dequeue(c,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var h=/[\n\t\r]/g,i=/\s+/,j=/\r/g,k=/^(?:href|src|style)$/,l=/^(?:button|input)$/i,m=/^(?:button|input|object|select|textarea)$/i,n=/^a(?:rea)?$/i,o=/^(?:radio|checkbox)$/i;d.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"},d.fn.extend({attr:function(a,b){return d.access(this,a,b,!0,d.attr)},removeAttr:function(a,b){return this.each(function(){d.attr(this,a,""),this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.addClass(a.call(this,b,c.attr("class")))});if(a&&typeof a==="string"){var b=(a||"").split(i);for(var c=0,e=this.length;c<e;c++){var f=this[c];if(f.nodeType===1)if(f.className){var g=" "+f.className+" ",h=f.className;for(var j=0,k=b.length;j<k;j++)g.indexOf(" "+b[j]+" ")<0&&(h+=" "+b[j]);f.className=d.trim(h)}else f.className=a}}return this},removeClass:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.removeClass(a.call(this,b,c.attr("class")))});if(a&&typeof a==="string"||a===b){var c=(a||"").split(i);for(var e=0,f=this.length;e<f;e++){var g=this[e];if(g.nodeType===1&&g.className)if(a){var j=(" "+g.className+" ").replace(h," ");for(var k=0,l=c.length;k<l;k++)j=j.replace(" "+c[k]+" "," ");g.className=d.trim(j)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,e=typeof b==="boolean";if(d.isFunction(a))return this.each(function(c){var e=d(this);e.toggleClass(a.call(this,c,e.attr("class"),b),b)});return this.each(function(){if(c==="string"){var f,g=0,h=d(this),j=b,k=a.split(i);while(f=k[g++])j=e?j:!h.hasClass(f),h[j?"addClass":"removeClass"](f)}else if(c==="undefined"||c==="boolean")this.className&&d._data(this,"__className__",this.className),this.className=this.className||a===!1?"":d._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ";for(var c=0,d=this.length;c<d;c++)if((" "+this[c].className+" ").replace(h," ").indexOf(b)>-1)return!0;return!1},val:function(a){if(!arguments.length){var c=this[0];if(c){if(d.nodeName(c,"option")){var e=c.attributes.value;return!e||e.specified?c.value:c.text}if(d.nodeName(c,"select")){var f=c.selectedIndex,g=[],h=c.options,i=c.type==="select-one";if(f<0)return null;for(var k=i?f:0,l=i?f+1:h.length;k<l;k++){var m=h[k];if(m.selected&&(d.support.optDisabled?!m.disabled:m.getAttribute("disabled")===null)&&(!m.parentNode.disabled||!d.nodeName(m.parentNode,"optgroup"))){a=d(m).val();if(i)return a;g.push(a)}}if(i&&!g.length&&h.length)return d(h[f]).val();return g}if(o.test(c.type)&&!d.support.checkOn)return c.getAttribute("value")===null?"on":c.value;return(c.value||"").replace(j,"")}return b}var n=d.isFunction(a);return this.each(function(b){var c=d(this),e=a;if(this.nodeType===1){n&&(e=a.call(this,b,c.val())),e==null?e="":typeof e==="number"?e+="":d.isArray(e)&&(e=d.map(e,function(a){return a==null?"":a+""}));if(d.isArray(e)&&o.test(this.type))this.checked=d.inArray(c.val(),e)>=0;else if(d.nodeName(this,"select")){var f=d.makeArray(e);d("option",this).each(function(){this.selected=d.inArray(d(this).val(),f)>=0}),f.length||(this.selectedIndex=-1)}else this.value=e}})}}),d.extend({attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,e,f){if(!a||a.nodeType===3||a.nodeType===8||a.nodeType===2)return b;if(f&&c in d.attrFn)return d(a)[c](e);var g=a.nodeType!==1||!d.isXMLDoc(a),h=e!==b;c=g&&d.props[c]||c;if(a.nodeType===1){var i=k.test(c);if(c==="selected"&&!d.support.optSelected){var j=a.parentNode;j&&(j.selectedIndex,j.parentNode&&j.parentNode.selectedIndex)}if((c in a||a[c]!==b)&&g&&!i){h&&(c==="type"&&l.test(a.nodeName)&&a.parentNode&&d.error("type property can't be changed"),e===null?a.nodeType===1&&a.removeAttribute(c):a[c]=e);if(d.nodeName(a,"form")&&a.getAttributeNode(c))return a.getAttributeNode(c).nodeValue;if(c==="tabIndex"){var o=a.getAttributeNode("tabIndex");return o&&o.specified?o.value:m.test(a.nodeName)||n.test(a.nodeName)&&a.href?0:b}return a[c]}if(!d.support.style&&g&&c==="style"){h&&(a.style.cssText=""+e);return a.style.cssText}h&&a.setAttribute(c,""+e);if(!a.attributes[c]&&(a.hasAttribute&&!a.hasAttribute(c)))return b;var p=!d.support.hrefNormalized&&g&&i?a.getAttribute(c,2):a.getAttribute(c);return p===null?b:p}h&&(a[c]=e);return a[c]}});var p=/\.(.*)$/,q=/^(?:textarea|input|select)$/i,r=/\./g,s=/ /g,t=/[^\w\s.|`]/g,u=function(a){return a.replace(t,"\\$&")};d.event={add:function(c,e,f,g){if(c.nodeType!==3&&c.nodeType!==8){try{d.isWindow(c)&&(c!==a&&!c.frameElement)&&(c=a)}catch(h){}if(f===!1)f=v;else if(!f)return;var i,j;f.handler&&(i=f,f=i.handler),f.guid||(f.guid=d.guid++);var k=d._data(c);if(!k)return;var l=k.events,m=k.handle;l||(k.events=l={}),m||(k.handle=m=function(){return typeof d!=="undefined"&&!d.event.triggered?d.event.handle.apply(m.elem,arguments):b}),m.elem=c,e=e.split(" ");var n,o=0,p;while(n=e[o++]){j=i?d.extend({},i):{handler:f,data:g},n.indexOf(".")>-1?(p=n.split("."),n=p.shift(),j.namespace=p.slice(0).sort().join(".")):(p=[],j.namespace=""),j.type=n,j.guid||(j.guid=f.guid);var q=l[n],r=d.event.special[n]||{};if(!q){q=l[n]=[];if(!r.setup||r.setup.call(c,g,p,m)===!1)c.addEventListener?c.addEventListener(n,m,!1):c.attachEvent&&c.attachEvent("on"+n,m)}r.add&&(r.add.call(c,j),j.handler.guid||(j.handler.guid=f.guid)),q.push(j),d.event.global[n]=!0}c=null}},global:{},remove:function(a,c,e,f){if(a.nodeType!==3&&a.nodeType!==8){e===!1&&(e=v);var g,h,i,j,k=0,l,m,n,o,p,q,r,s=d.hasData(a)&&d._data(a),t=s&&s.events;if(!s||!t)return;c&&c.type&&(e=c.handler,c=c.type);if(!c||typeof c==="string"&&c.charAt(0)==="."){c=c||"";for(h in t)d.event.remove(a,h+c);return}c=c.split(" ");while(h=c[k++]){r=h,q=null,l=h.indexOf(".")<0,m=[],l||(m=h.split("."),h=m.shift(),n=new RegExp("(^|\\.)"+d.map(m.slice(0).sort(),u).join("\\.(?:.*\\.)?")+"(\\.|$)")),p=t[h];if(!p)continue;if(!e){for(j=0;j<p.length;j++){q=p[j];if(l||n.test(q.namespace))d.event.remove(a,r,q.handler,j),p.splice(j--,1)}continue}o=d.event.special[h]||{};for(j=f||0;j<p.length;j++){q=p[j];if(e.guid===q.guid){if(l||n.test(q.namespace))f==null&&p.splice(j--,1),o.remove&&o.remove.call(a,q);if(f!=null)break}}if(p.length===0||f!=null&&p.length===1)(!o.teardown||o.teardown.call(a,m)===!1)&&d.removeEvent(a,h,s.handle),g=null,delete t[h]}if(d.isEmptyObject(t)){var w=s.handle;w&&(w.elem=null),delete s.events,delete s.handle,d.isEmptyObject(s)&&d.removeData(a,b,!0)}}},trigger:function(a,c,e){var f=a.type||a,g=arguments[3];if(!g){a=typeof a==="object"?a[d.expando]?a:d.extend(d.Event(f),a):d.Event(f),f.indexOf("!")>=0&&(a.type=f=f.slice(0,-1),a.exclusive=!0),e||(a.stopPropagation(),d.event.global[f]&&d.each(d.cache,function(){var b=d.expando,e=this[b];e&&e.events&&e.events[f]&&d.event.trigger(a,c,e.handle.elem)}));if(!e||e.nodeType===3||e.nodeType===8)return b;a.result=b,a.target=e,c=d.makeArray(c),c.unshift(a)}a.currentTarget=e;var h=d._data(e,"handle");h&&h.apply(e,c);var i=e.parentNode||e.ownerDocument;try{e&&e.nodeName&&d.noData[e.nodeName.toLowerCase()]||e["on"+f]&&e["on"+f].apply(e,c)===!1&&(a.result=!1,a.preventDefault())}catch(j){}if(!a.isPropagationStopped()&&i)d.event.trigger(a,c,i,!0);else if(!a.isDefaultPrevented()){var k,l=a.target,m=f.replace(p,""),n=d.nodeName(l,"a")&&m==="click",o=d.event.special[m]||{};if((!o._default||o._default.call(e,a)===!1)&&!n&&!(l&&l.nodeName&&d.noData[l.nodeName.toLowerCase()])){try{l[m]&&(k=l["on"+m],k&&(l["on"+m]=null),d.event.triggered=!0,l[m]())}catch(q){}k&&(l["on"+m]=k),d.event.triggered=!1}}},handle:function(c){var e,f,g,h,i,j=[],k=d.makeArray(arguments);c=k[0]=d.event.fix(c||a.event),c.currentTarget=this,e=c.type.indexOf(".")<0&&!c.exclusive,e||(g=c.type.split("."),c.type=g.shift(),j=g.slice(0).sort(),h=new RegExp("(^|\\.)"+j.join("\\.(?:.*\\.)?")+"(\\.|$)")),c.namespace=c.namespace||j.join("."),i=d._data(this,"events"),f=(i||{})[c.type];if(i&&f){f=f.slice(0);for(var l=0,m=f.length;l<m;l++){var n=f[l];if(e||h.test(n.namespace)){c.handler=n.handler,c.data=n.data,c.handleObj=n;var o=n.handler.apply(this,k);o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()));if(c.isImmediatePropagationStopped())break}}}return c.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(a){if(a[d.expando])return a;var e=a;a=d.Event(e);for(var f=this.props.length,g;f;)g=this.props[--f],a[g]=e[g];a.target||(a.target=a.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),!a.relatedTarget&&a.fromElement&&(a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement);if(a.pageX==null&&a.clientX!=null){var h=c.documentElement,i=c.body;a.pageX=a.clientX+(h&&h.scrollLeft||i&&i.scrollLeft||0)-(h&&h.clientLeft||i&&i.clientLeft||0),a.pageY=a.clientY+(h&&h.scrollTop||i&&i.scrollTop||0)-(h&&h.clientTop||i&&i.clientTop||0)}a.which==null&&(a.charCode!=null||a.keyCode!=null)&&(a.which=a.charCode!=null?a.charCode:a.keyCode),!a.metaKey&&a.ctrlKey&&(a.metaKey=a.ctrlKey),!a.which&&a.button!==b&&(a.which=a.button&1?1:a.button&2?3:a.button&4?2:0);return a},guid:1e8,proxy:d.proxy,special:{ready:{setup:d.bindReady,teardown:d.noop},live:{add:function(a){d.event.add(this,F(a.origType,a.selector),d.extend({},a,{handler:E,guid:a.handler.guid}))},remove:function(a){d.event.remove(this,F(a.origType,a.selector),a)}},beforeunload:{setup:function(a,b,c){d.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}}},d.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},d.Event=function(a){if(!this.preventDefault)return new d.Event(a);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?w:v):this.type=a,this.timeStamp=d.now(),this[d.expando]=!0},d.Event.prototype={preventDefault:function(){this.isDefaultPrevented=w;var a=this.originalEvent;a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=w;var a=this.originalEvent;a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=w,this.stopPropagation()},isDefaultPrevented:v,isPropagationStopped:v,isImmediatePropagationStopped:v};var x=function(a){var b=a.relatedTarget;try{if(b!==c&&!b.parentNode)return;while(b&&b!==this)b=b.parentNode;b!==this&&(a.type=a.data,d.event.handle.apply(this,arguments))}catch(e){}},y=function(a){a.type=a.data,d.event.handle.apply(this,arguments)};d.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){d.event.special[a]={setup:function(c){d.event.add(this,b,c&&c.selector?y:x,a)},teardown:function(a){d.event.remove(this,b,a&&a.selector?y:x)}}}),d.support.submitBubbles||(d.event.special.submit={setup:function(a,b){if(this.nodeName&&this.nodeName.toLowerCase()!=="form")d.event.add(this,"click.specialSubmit",function(a){var b=a.target,c=b.type;(c==="submit"||c==="image")&&d(b).closest("form").length&&C("submit",this,arguments)}),d.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,c=b.type;(c==="text"||c==="password")&&d(b).closest("form").length&&a.keyCode===13&&C("submit",this,arguments)});else return!1},teardown:function(a){d.event.remove(this,".specialSubmit")}});if(!d.support.changeBubbles){var z,A=function(a){var b=a.type,c=a.value;b==="radio"||b==="checkbox"?c=a.checked:b==="select-multiple"?c=a.selectedIndex>-1?d.map(a.options,function(a){return a.selected}).join("-"):"":a.nodeName.toLowerCase()==="select"&&(c=a.selectedIndex);return c},B=function B(a){var c=a.target,e,f;if(q.test(c.nodeName)&&!c.readOnly){e=d._data(c,"_change_data"),f=A(c),(a.type!=="focusout"||c.type!=="radio")&&d._data(c,"_change_data",f);if(e===b||f===e)return;if(e!=null||f)a.type="change",a.liveFired=b,d.event.trigger(a,arguments[1],c)}};d.event.special.change={filters:{focusout:B,beforedeactivate:B,click:function(a){var b=a.target,c=b.type;(c==="radio"||c==="checkbox"||b.nodeName.toLowerCase()==="select")&&B.call(this,a)},keydown:function(a){var b=a.target,c=b.type;(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(c==="checkbox"||c==="radio")||c==="select-multiple")&&B.call(this,a)},beforeactivate:function(a){var b=a.target;d._data(b,"_change_data",A(b))}},setup:function(a,b){if(this.type==="file")return!1;for(var c in z)d.event.add(this,c+".specialChange",z[c]);return q.test(this.nodeName)},teardown:function(a){d.event.remove(this,".specialChange");return q.test(this.nodeName)}},z=d.event.special.change.filters,z.focus=z.beforeactivate}c.addEventListener&&d.each({focus:"focusin",blur:"focusout"},function(a,b){function c(a){a=d.event.fix(a),a.type=b;return d.event.handle.call(this,a)}d.event.special[b]={setup:function(){this.addEventListener(a,c,!0)},teardown:function(){this.removeEventListener(a,c,!0)}}}),d.each(["bind","one"],function(a,c){d.fn[c]=function(a,e,f){if(typeof a==="object"){for(var g in a)this[c](g,e,a[g],f);return this}if(d.isFunction(e)||e===!1)f=e,e=b;var h=c==="one"?d.proxy(f,function(a){d(this).unbind(a,h);return f.apply(this,arguments)}):f;if(a==="unload"&&c!=="one")this.one(a,e,f);else for(var i=0,j=this.length;i<j;i++)d.event.add(this[i],a,h,e);return this}}),d.fn.extend({unbind:function(a,b){if(typeof a!=="object"||a.preventDefault)for(var e=0,f=this.length;e<f;e++)d.event.remove(this[e],a,b);else for(var c in a)this.unbind(c,a[c]);return this},delegate:function(a,b,c,d){return this.live(b,c,d,a)},undelegate:function(a,b,c){return arguments.length===0?this.unbind("live"):this.die(b,null,c,a)},trigger:function(a,b){return this.each(function(){d.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){var c=d.Event(a);c.preventDefault(),c.stopPropagation(),d.event.trigger(c,b,this[0]);return c.result}},toggle:function(a){var b=arguments,c=1;while(c<b.length)d.proxy(a,b[c++]);return this.click(d.proxy(a,function(e){var f=(d._data(this,"lastToggle"+a.guid)||0)%c;d._data(this,"lastToggle"+a.guid,f+1),e.preventDefault();return b[f].apply(this,arguments)||!1}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var D={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};d.each(["live","die"],function(a,c){d.fn[c]=function(a,e,f,g){var h,i=0,j,k,l,m=g||this.selector,n=g?this:d(this.context);if(typeof a==="object"&&!a.preventDefault){for(var o in a)n[c](o,e,a[o],m);return this}d.isFunction(e)&&(f=e,e=b),a=(a||"").split(" ");while((h=a[i++])!=null){j=p.exec(h),k="",j&&(k=j[0],h=h.replace(p,""));if(h==="hover"){a.push("mouseenter"+k,"mouseleave"+k);continue}l=h,h==="focus"||h==="blur"?(a.push(D[h]+k),h=h+k):h=(D[h]||h)+k;if(c==="live")for(var q=0,r=n.length;q<r;q++)d.event.add(n[q],"live."+F(h,m),{data:e,selector:m,handler:f,origType:h,origHandler:f,preType:l});else n.unbind("live."+F(h,m),f)}return this}}),d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){d.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.bind(b,a,c):this.trigger(b)},d.attrFn&&(d.attrFn[b]=!0)}),function(){function u(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}if(i.nodeType===1){f||(i.sizcache=c,i.sizset=g);if(typeof b!=="string"){if(i===b){j=!0;break}}else if(k.filter(b,[i]).length>0){j=i;break}}i=i[a]}d[g]=j}}}function t(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}i.nodeType===1&&!f&&(i.sizcache=c,i.sizset=g);if(i.nodeName.toLowerCase()===b){j=i;break}i=i[a]}d[g]=j}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,e=0,f=Object.prototype.toString,g=!1,h=!0,i=/\\/g,j=/\W/;[0,0].sort(function(){h=!1;return 0});var k=function(b,d,e,g){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!=="string")return e;var i,j,n,o,q,r,s,t,u=!0,w=k.isXML(d),x=[],y=b;do{a.exec(""),i=a.exec(y);if(i){y=i[3],x.push(i[1]);if(i[2]){o=i[3];break}}}while(i);if(x.length>1&&m.exec(b))if(x.length===2&&l.relative[x[0]])j=v(x[0]+x[1],d);else{j=l.relative[x[0]]?[d]:k(x.shift(),d);while(x.length)b=x.shift(),l.relative[b]&&(b+=x.shift()),j=v(b,j)}else{!g&&x.length>1&&d.nodeType===9&&!w&&l.match.ID.test(x[0])&&!l.match.ID.test(x[x.length-1])&&(q=k.find(x.shift(),d,w),d=q.expr?k.filter(q.expr,q.set)[0]:q.set[0]);if(d){q=g?{expr:x.pop(),set:p(g)}:k.find(x.pop(),x.length===1&&(x[0]==="~"||x[0]==="+")&&d.parentNode?d.parentNode:d,w),j=q.expr?k.filter(q.expr,q.set):q.set,x.length>0?n=p(j):u=!1;while(x.length)r=x.pop(),s=r,l.relative[r]?s=x.pop():r="",s==null&&(s=d),l.relative[r](n,s,w)}else n=x=[]}n||(n=j),n||k.error(r||b);if(f.call(n)==="[object Array]")if(u)if(d&&d.nodeType===1)for(t=0;n[t]!=null;t++)n[t]&&(n[t]===!0||n[t].nodeType===1&&k.contains(d,n[t]))&&e.push(j[t]);else for(t=0;n[t]!=null;t++)n[t]&&n[t].nodeType===1&&e.push(j[t]);else e.push.apply(e,n);else p(n,e);o&&(k(o,h,e,g),k.uniqueSort(e));return e};k.uniqueSort=function(a){if(r){g=h,a.sort(r);if(g)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},k.matches=function(a,b){return k(a,null,null,b)},k.matchesSelector=function(a,b){return k(b,null,null,[a]).length>0},k.find=function(a,b,c){var d;if(!a)return[];for(var e=0,f=l.order.length;e<f;e++){var g,h=l.order[e];if(g=l.leftMatch[h].exec(a)){var j=g[1];g.splice(1,1);if(j.substr(j.length-1)!=="\\"){g[1]=(g[1]||"").replace(i,""),d=l.find[h](g,b,c);if(d!=null){a=a.replace(l.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!=="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},k.filter=function(a,c,d,e){var f,g,h=a,i=[],j=c,m=c&&c[0]&&k.isXML(c[0]);while(a&&c.length){for(var n in l.filter)if((f=l.leftMatch[n].exec(a))!=null&&f[2]){var o,p,q=l.filter[n],r=f[1];g=!1,f.splice(1,1);if(r.substr(r.length-1)==="\\")continue;j===i&&(i=[]);if(l.preFilter[n]){f=l.preFilter[n](f,j,d,i,e,m);if(f){if(f===!0)continue}else g=o=!0}if(f)for(var s=0;(p=j[s])!=null;s++)if(p){o=q(p,f,s,j);var t=e^!!o;d&&o!=null?t?g=!0:j[s]=!1:t&&(i.push(p),g=!0)}if(o!==b){d||(j=i),a=a.replace(l.match[n],"");if(!g)return[];break}}if(a===h)if(g==null)k.error(a);else break;h=a}return j},k.error=function(a){throw"Syntax error, unrecognized expression: "+a};var l=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b==="string",d=c&&!j.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1){}a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&k.filter(b,a,!0)},">":function(a,b){var c,d=typeof b==="string",e=0,f=a.length;if(d&&!j.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&k.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=u;typeof b==="string"&&!j.test(b)&&(b=b.toLowerCase(),d=b,g=t),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=u;typeof b==="string"&&!j.test(b)&&(b=b.toLowerCase(),d=b,g=t),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!=="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!=="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!=="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(i,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(i,"")},TAG:function(a,b){return a[1].replace(i,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||k.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&k.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(i,"");!f&&l.attrMap[g]&&(a[1]=l.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(i,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=k(b[3],null,null,c);else{var g=k.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(l.match.POS.test(b[0])||l.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!k(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){return"text"===a.getAttribute("type")},radio:function(a){return"radio"===a.type},checkbox:function(a){return"checkbox"===a.type},file:function(a){return"file"===a.type},password:function(a){return"password"===a.type},submit:function(a){return"submit"===a.type},image:function(a){return"image"===a.type},reset:function(a){return"reset"===a.type},button:function(a){return"button"===a.type||a.nodeName.toLowerCase()==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=l.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||k.getText([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}k.error(e)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case"only":case"first":while(d=d.previousSibling)if(d.nodeType===1)return!1;if(c==="first")return!0;d=a;case"last":while(d=d.nextSibling)if(d.nodeType===1)return!1;return!0;case"nth":var e=b[2],f=b[3];if(e===1&&f===0)return!0;var g=b[0],h=a.parentNode;if(h&&(h.sizcache!==g||!a.nodeIndex)){var i=0;for(d=h.firstChild;d;d=d.nextSibling)d.nodeType===1&&(d.nodeIndex=++i);h.sizcache=g}var j=a.nodeIndex-f;return e===0?j===0:j%e===0&&j/e>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=l.attrHandle[c]?l.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=l.setFilters[e];if(f)return f(a,c,b,d)}}},m=l.match.POS,n=function(a,b){return"\\"+(b-0+1)};for(var o in l.match)l.match[o]=new RegExp(l.match[o].source+/(?![^\[]*\])(?![^\(]*\))/.source),l.leftMatch[o]=new RegExp(/(^(?:.|\r|\n)*?)/.source+l.match[o].source.replace(/\\(\d+)/g,n));var p=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(q){p=function(a,b){var c=0,d=b||[];if(f.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length==="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var r,s;c.documentElement.compareDocumentPosition?r=function(a,b){if(a===b){g=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(r=function(a,b){var c,d,e=[],f=[],h=a.parentNode,i=b.parentNode,j=h;if(a===b){g=!0;return 0}if(h===i)return s(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return s(e[k],f[k]);return k===c?s(a,f[k],-1):s(e[k],b,1)},s=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),k.getText=function(a){var b="",c;for(var d=0;a[d];d++)c=a[d],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&&(b+=k.getText(c.childNodes));return b},function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(l.find.ID=function(a,c,d){if(typeof c.getElementById!=="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!=="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},l.filter.ID=function(a,b){var c=typeof a.getAttributeNode!=="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(l.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!=="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(l.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=k,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){k=function(b,e,f,g){e=e||c;if(!g&&!k.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return p(e.getElementsByTagName(b),f);if(h[2]&&l.find.CLASS&&e.getElementsByClassName)return p(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return p([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return p([],f);if(i.id===h[3])return p([i],f)}try{return p(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var m=e,n=e.getAttribute("id"),o=n||d,q=e.parentNode,r=/^\s*[+~]/.test(b);n?o=o.replace(/'/g,"\\$&"):e.setAttribute("id",o),r&&q&&(e=e.parentNode);try{if(!r||q)return p(e.querySelectorAll("[id='"+o+"'] "+b),f)}catch(s){}finally{n||m.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)k[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector,d=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(e){d=!0}b&&(k.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!k.isXML(a))try{if(d||!l.match.PSEUDO.test(c)&&!/!=/.test(c))return b.call(a,c)}catch(e){}return k(c,null,null,[a]).length>0})}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;l.order.splice(1,0,"CLASS"),l.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!=="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?k.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?k.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:k.contains=function(){return!1},k.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var v=function(a,b){var c,d=[],e="",f=b.nodeType?[b]:b;while(c=l.match.PSEUDO.exec(a))e+=c[0],a=a.replace(l.match.PSEUDO,"");a=l.relative[a]?a+"*":a;for(var g=0,h=f.length;g<h;g++)k(a,f[g],d);return k.filter(e,d)};d.find=k,d.expr=k.selectors,d.expr[":"]=d.expr.filters,d.unique=k.uniqueSort,d.text=k.getText,d.isXMLDoc=k.isXML,d.contains=k.contains}();var G=/Until$/,H=/^(?:parents|prevUntil|prevAll)/,I=/,/,J=/^.[^:#\[\.,]*$/,K=Array.prototype.slice,L=d.expr.match.POS,M={children:!0,contents:!0,next:!0,prev:!0};d.fn.extend({find:function(a){var b=this.pushStack("","find",a),c=0;for(var e=0,f=this.length;e<f;e++){c=b.length,d.find(a,this[e],b);if(e>0)for(var g=c;g<b.length;g++)for(var h=0;h<c;h++)if(b[h]===b[g]){b.splice(g--,1);break}}return b},has:function(a){var b=d(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(d.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(O(this,a,!1),"not",a)},filter:function(a){return this.pushStack(O(this,a,!0),"filter",a)},is:function(a){return!!a&&d.filter(a,this).length>0},closest:function(a,b){var c=[],e,f,g=this[0];if(d.isArray(a)){var h,i,j={},k=1;if(g&&a.length){for(e=0,f=a.length;e<f;e++)i=a[e],j[i]||(j[i]=d.expr.match.POS.test(i)?d(i,b||this.context):i);while(g&&g.ownerDocument&&g!==b){for(i in j)h=j[i],(h.jquery?h.index(g)>-1:d(g).is(h))&&c.push({selector:i,elem:g,level:k});g=g.parentNode,k++}}return c}var l=L.test(a)?d(a,b||this.context):null;for(e=0,f=this.length;e<f;e++){g=this[e];while(g){if(l?l.index(g)>-1:d.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b)break}}c=c.length>1?d.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a||typeof a==="string")return d.inArray(this[0],a?d(a):this.parent().children());return d.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a==="string"?d(a,b):d.makeArray(a),e=d.merge(this.get(),c);return this.pushStack(N(c[0])||N(e[0])?e:d.unique(e))},andSelf:function(){return this.add(this.prevObject)}}),d.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return d.dir(a,"parentNode")},parentsUntil:function(a,b,c){return d.dir(a,"parentNode",c)},next:function(a){return d.nth(a,2,"nextSibling")},prev:function(a){return d.nth(a,2,"previousSibling")},nextAll:function(a){return d.dir(a,"nextSibling")},prevAll:function(a){return d.dir(a,"previousSibling")},nextUntil:function(a,b,c){return d.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return d.dir(a,"previousSibling",c)},siblings:function(a){return d.sibling(a.parentNode.firstChild,a)},children:function(a){return d.sibling(a.firstChild)},contents:function(a){return d.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:d.makeArray(a.childNodes)}},function(a,b){d.fn[a]=function(c,e){var f=d.map(this,b,c),g=K.call(arguments);G.test(a)||(e=c),e&&typeof e==="string"&&(f=d.filter(e,f)),f=this.length>1&&!M[a]?d.unique(f):f,(this.length>1||I.test(e))&&H.test(a)&&(f=f.reverse());return this.pushStack(f,a,g.join(","))}}),d.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?d.find.matchesSelector(b[0],a)?[b[0]]:[]:d.find.matches(a,b)},dir:function(a,c,e){var f=[],g=a[c];while(g&&g.nodeType!==9&&(e===b||g.nodeType!==1||!d(g).is(e)))g.nodeType===1&&f.push(g),g=g[c];return f},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var P=/ jQuery\d+="(?:\d+|null)"/g,Q=/^\s+/,R=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,S=/<([\w:]+)/,T=/<tbody/i,U=/<|&#?\w+;/,V=/<(?:script|object|embed|option|style)/i,W=/checked\s*(?:[^=]|=\s*.checked.)/i,X={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};X.optgroup=X.option,X.tbody=X.tfoot=X.colgroup=X.caption=X.thead,X.th=X.td,d.support.htmlSerialize||(X._default=[1,"div<div>","</div>"]),d.fn.extend({text:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.text(a.call(this,b,c.text()))});if(typeof a!=="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return d.text(this)},wrapAll:function(a){if(d.isFunction(a))return this.each(function(b){d(this).wrapAll(a.call(this,b))});if(this[0]){var b=d(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(d.isFunction(a))return this.each(function(b){d(this).wrapInner(a.call(this,b))});return this.each(function(){var b=d(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){d(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){d.nodeName(this,"body")||d(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=d(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,d(arguments[0]).toArray());return a}},remove:function(a,b){for(var c=0,e;(e=this[c])!=null;c++)if(!a||d.filter(a,[e]).length)!b&&e.nodeType===1&&(d.cleanData(e.getElementsByTagName("*")),d.cleanData([e])),e.parentNode&&e.parentNode.removeChild(e);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&d.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return d.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(P,""):null;if(typeof a!=="string"||V.test(a)||!d.support.leadingWhitespace&&Q.test(a)||X[(S.exec(a)||["",""])[1].toLowerCase()])d.isFunction(a)?this.each(function(b){var c=d(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);else{a=a.replace(R,"<$1></$2>");try{for(var c=0,e=this.length;c<e;c++)this[c].nodeType===1&&(d.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(f){this.empty().append(a)}}return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(d.isFunction(a))return this.each(function(b){var c=d(this),e=c.html();c.replaceWith(a.call(this,b,e))});typeof a!=="string"&&(a=d(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;d(this).remove(),b?d(b).before(a):d(c).append(a)})}return this.pushStack(d(d.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,e){var f,g,h,i,j=a[0],k=[];if(!d.support.checkClone&&arguments.length===3&&typeof j==="string"&&W.test(j))return this.each(function(){d(this).domManip(a,c,e,!0)});if(d.isFunction(j))return this.each(function(f){var g=d(this);a[0]=j.call(this,f,c?g.html():b),g.domManip(a,c,e)});if(this[0]){i=j&&j.parentNode,d.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?f={fragment:i}:f=d.buildFragment(a,this,k),h=f.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&d.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)e.call(c?Y(this[l],g):this[l],f.cacheable||m>1&&l<n?d.clone(h,!0,!0):h)}k.length&&d.each(k,ba)}return this}}),d.buildFragment=function(a,b,e){var f,g,h,i=b&&b[0]?b[0].ownerDocument||b[0]:c;a.length===1&&typeof a[0]==="string"&&a[0].length<512&&i===c&&a[0].charAt(0)==="<"&&!V.test(a[0])&&(d.support.checkClone||!W.test(a[0]))&&(g=!0,h=d.fragments[a[0]],h&&(h!==1&&(f=h))),f||(f=i.createDocumentFragment(),d.clean(a,i,f,e)),g&&(d.fragments[a[0]]=h?f:1);return{fragment:f,cacheable:g}},d.fragments={},d.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){d.fn[a]=function(c){var e=[],f=d(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&f.length===1){f[b](this[0]);return this}for(var h=0,i=f.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();d(f[h])[b](j),e=e.concat(j)}return this.pushStack(e,a,f.selector)}}),d.extend({clone:function(a,b,c){var e=a.cloneNode(!0),f,g,h;if((!d.support.noCloneEvent||!d.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!d.isXMLDoc(a)){$(a,e),f=_(a),g=_(e);for(h=0;f[h];++h)$(f[h],g[h])}if(b){Z(a,e);if(c){f=_(a),g=_(e);for(h=0;f[h];++h)Z(f[h],g[h])}}return e},clean:function(a,b,e,f){b=b||c,typeof b.createElement==="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var g=[];for(var h=0,i;(i=a[h])!=null;h++){typeof i==="number"&&(i+="");if(!i)continue;if(typeof i!=="string"||U.test(i)){if(typeof i==="string"){i=i.replace(R,"<$1></$2>");var j=(S.exec(i)||["",""])[1].toLowerCase(),k=X[j]||X._default,l=k[0],m=b.createElement("div");m.innerHTML=k[1]+i+k[2];while(l--)m=m.lastChild;if(!d.support.tbody){var n=T.test(i),o=j==="table"&&!n?m.firstChild&&m.firstChild.childNodes:k[1]==="<table>"&&!n?m.childNodes:[];for(var p=o.length-1;p>=0;--p)d.nodeName(o[p],"tbody")&&!o[p].childNodes.length&&o[p].parentNode.removeChild(o[p])}!d.support.leadingWhitespace&&Q.test(i)&&m.insertBefore(b.createTextNode(Q.exec(i)[0]),m.firstChild),i=m.childNodes}}else i=b.createTextNode(i);i.nodeType?g.push(i):g=d.merge(g,i)}if(e)for(h=0;g[h];h++)!f||!d.nodeName(g[h],"script")||g[h].type&&g[h].type.toLowerCase()!=="text/javascript"?(g[h].nodeType===1&&g.splice.apply(g,[h+1,0].concat(d.makeArray(g[h].getElementsByTagName("script")))),e.appendChild(g[h])):f.push(g[h].parentNode?g[h].parentNode.removeChild(g[h]):g[h]);return g},cleanData:function(a){var b,c,e=d.cache,f=d.expando,g=d.event.special,h=d.support.deleteExpando;for(var i=0,j;(j=a[i])!=null;i++){if(j.nodeName&&d.noData[j.nodeName.toLowerCase()])continue;c=j[d.expando];if(c){b=e[c]&&e[c][f];if(b&&b.events){for(var k in b.events)g[k]?d.event.remove(j,k):d.removeEvent(j,k,b.handle);b.handle&&(b.handle.elem=null)}h?delete j[d.expando]:j.removeAttribute&&j.removeAttribute(d.expando),delete e[c]}}}});var bb=/alpha\([^)]*\)/i,bc=/opacity=([^)]*)/,bd=/-([a-z])/ig,be=/([A-Z])/g,bf=/^-?\d+(?:px)?$/i,bg=/^-?\d/,bh={position:"absolute",visibility:"hidden",display:"block"},bi=["Left","Right"],bj=["Top","Bottom"],bk,bl,bm,bn=function(a,b){return b.toUpperCase()};d.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return d.access(this,a,c,!0,function(a,c,e){return e!==b?d.style(a,c,e):d.css(a,c)})},d.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bk(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{zIndex:!0,fontWeight:!0,opacity:!0,zoom:!0,lineHeight:!0},cssProps:{"float":d.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,e,f){if(a&&a.nodeType!==3&&a.nodeType!==8&&a.style){var g,h=d.camelCase(c),i=a.style,j=d.cssHooks[h];c=d.cssProps[h]||h;if(e===b){if(j&&"get"in j&&(g=j.get(a,!1,f))!==b)return g;return i[c]}if(typeof e==="number"&&isNaN(e)||e==null)return;typeof e==="number"&&!d.cssNumber[h]&&(e+="px");if(!j||!("set"in j)||(e=j.set(a,e))!==b)try{i[c]=e}catch(k){}}},css:function(a,c,e){var f,g=d.camelCase(c),h=d.cssHooks[g];c=d.cssProps[g]||g;if(h&&"get"in h&&(f=h.get(a,!0,e))!==b)return f;if(bk)return bk(a,c,g)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]},camelCase:function(a){return a.replace(bd,bn)}}),d.curCSS=d.css,d.each(["height","width"],function(a,b){d.cssHooks[b]={get:function(a,c,e){var f;if(c){a.offsetWidth!==0?f=bo(a,b,e):d.swap(a,bh,function(){f=bo(a,b,e)});if(f<=0){f=bk(a,b,b),f==="0px"&&bm&&(f=bm(a,b,b));if(f!=null)return f===""||f==="auto"?"0px":f}if(f<0||f==null){f=a.style[b];return f===""||f==="auto"?"0px":f}return typeof f==="string"?f:f+"px"}},set:function(a,b){if(!bf.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),d.support.opacity||(d.cssHooks.opacity={get:function(a,b){return bc.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style;c.zoom=1;var e=d.isNaN(b)?"":"alpha(opacity="+b*100+")",f=c.filter||"";c.filter=bb.test(f)?f.replace(bb,e):c.filter+" "+e}}),c.defaultView&&c.defaultView.getComputedStyle&&(bl=function(a,c,e){var f,g,h;e=e.replace(be,"-$1").toLowerCase();if(!(g=a.ownerDocument.defaultView))return b;if(h=g.getComputedStyle(a,null))f=h.getPropertyValue(e),f===""&&!d.contains(a.ownerDocument.documentElement,a)&&(f=d.style(a,e));return f}),c.documentElement.currentStyle&&(bm=function(a,b){var c,d=a.currentStyle&&a.currentStyle[b],e=a.runtimeStyle&&a.runtimeStyle[b],f=a.style;!bf.test(d)&&bg.test(d)&&(c=f.left,e&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":d||0,d=f.pixelLeft+"px",f.left=c,e&&(a.runtimeStyle.left=e));return d===""?"auto":d}),bk=bl||bm,d.expr&&d.expr.filters&&(d.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!d.support.reliableHiddenOffsets&&(a.style.display||d.css(a,"display"))==="none"},d.expr.filters.visible=function(a){return!d.expr.filters.hidden(a)});var bp=/%20/g,bq=/\[\]$/,br=/\r?\n/g,bs=/#.*$/,bt=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bu=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bv=/(?:^file|^widget|\-extension):$/,bw=/^(?:GET|HEAD)$/,bx=/^\/\//,by=/\?/,bz=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bA=/^(?:select|textarea)/i,bB=/\s+/,bC=/([?&])_=[^&]*/,bD=/(^|\-)([a-z])/g,bE=function(a,b,c){return b+c.toUpperCase()},bF=/^([\w\+\.\-]+:)\/\/([^\/?#:]*)(?::(\d+))?/,bG=d.fn.load,bH={},bI={},bJ,bK;try{bJ=c.location.href}catch(bL){bJ=c.createElement("a"),bJ.href="",bJ=bJ.href}bK=bF.exec(bJ.toLowerCase()),d.fn.extend({load:function(a,c,e){if(typeof a!=="string"&&bG)return bG.apply(this,arguments);if(!this.length)return this;var f=a.indexOf(" ");if(f>=0){var g=a.slice(f,a.length);a=a.slice(0,f)}var h="GET";c&&(d.isFunction(c)?(e=c,c=b):typeof c==="object"&&(c=d.param(c,d.ajaxSettings.traditional),h="POST"));var i=this;d.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?d("<div>").append(c.replace(bz,"")).find(g):c)),e&&i.each(e,[c,b,a])}});return this},serialize:function(){return d.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?d.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bA.test(this.nodeName)||bu.test(this.type))}).map(function(a,b){var c=d(this).val();return c==null?null:d.isArray(c)?d.map(c,function(a,c){return{name:b.name,value:a.replace(br,"\r\n")}}):{name:b.name,value:c.replace(br,"\r\n")}}).get()}}),d.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){d.fn[b]=function(a){return this.bind(b,a)}}),d.each(["get","post"],function(a,c){d[c]=function(a,e,f,g){d.isFunction(e)&&(g=g||f,f=e,e=b);return d.ajax({type:c,url:a,data:e,success:f,dataType:g})}}),d.extend({getScript:function(a,c){return d.get(a,b,c,"script")},getJSON:function(a,b,c){return d.get(a,b,c,"json")},ajaxSetup:function(a,b){b?d.extend(!0,a,d.ajaxSettings,b):(b=a,a=d.extend(!0,d.ajaxSettings,b));for(var c in {context:1,url:1})c in b?a[c]=b[c]:c in d.ajaxSettings&&(a[c]=d.ajaxSettings[c]);return a},ajaxSettings:{url:bJ,isLocal:bv.test(bK[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":"*/*"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":d.parseJSON,"text xml":d.parseXML}},ajaxPrefilter:bM(bH),ajaxTransport:bM(bI),ajax:function(a,c){function v(a,c,l,n){if(r!==2){r=2,p&&clearTimeout(p),o=b,m=n||"",u.readyState=a?4:0;var q,t,v,w=l?bP(e,u,l):b,x,y;if(a>=200&&a<300||a===304){if(e.ifModified){if(x=u.getResponseHeader("Last-Modified"))d.lastModified[k]=x;if(y=u.getResponseHeader("Etag"))d.etag[k]=y}if(a===304)c="notmodified",q=!0;else try{t=bQ(e,w),c="success",q=!0}catch(z){c="parsererror",v=z}}else{v=c;if(!c||a)c="error",a<0&&(a=0)}u.status=a,u.statusText=c,q?h.resolveWith(f,[t,c,u]):h.rejectWith(f,[u,c,v]),u.statusCode(j),j=b,s&&g.trigger("ajax"+(q?"Success":"Error"),[u,e,q?t:v]),i.resolveWith(f,[u,c]),s&&(g.trigger("ajaxComplete",[u,e]),--d.active||d.event.trigger("ajaxStop"))}}typeof a==="object"&&(c=a,a=b),c=c||{};var e=d.ajaxSetup({},c),f=e.context||e,g=f!==e&&(f.nodeType||f instanceof d)?d(f):d.event,h=d.Deferred(),i=d._Deferred(),j=e.statusCode||{},k,l={},m,n,o,p,q,r=0,s,t,u={readyState:0,setRequestHeader:function(a,b){r||(l[a.toLowerCase().replace(bD,bE)]=b);return this},getAllResponseHeaders:function(){return r===2?m:null},getResponseHeader:function(a){var c;if(r===2){if(!n){n={};while(c=bt.exec(m))n[c[1].toLowerCase()]=c[2]}c=n[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){r||(e.mimeType=a);return this},abort:function(a){a=a||"abort",o&&o.abort(a),v(0,a);return this}};h.promise(u),u.success=u.done,u.error=u.fail,u.complete=i.done,u.statusCode=function(a){if(a){var b;if(r<2)for(b in a)j[b]=[j[b],a[b]];else b=a[u.status],u.then(b,b)}return this},e.url=((a||e.url)+"").replace(bs,"").replace(bx,bK[1]+"//"),e.dataTypes=d.trim(e.dataType||"*").toLowerCase().split(bB),e.crossDomain||(q=bF.exec(e.url.toLowerCase()),e.crossDomain=q&&(q[1]!=bK[1]||q[2]!=bK[2]||(q[3]||(q[1]==="http:"?80:443))!=(bK[3]||(bK[1]==="http:"?80:443)))),e.data&&e.processData&&typeof e.data!=="string"&&(e.data=d.param(e.data,e.traditional)),bN(bH,e,c,u);if(r===2)return!1;s=e.global,e.type=e.type.toUpperCase(),e.hasContent=!bw.test(e.type),s&&d.active++===0&&d.event.trigger("ajaxStart");if(!e.hasContent){e.data&&(e.url+=(by.test(e.url)?"&":"?")+e.data),k=e.url;if(e.cache===!1){var w=d.now(),x=e.url.replace(bC,"$1_="+w);e.url=x+(x===e.url?(by.test(e.url)?"&":"?")+"_="+w:"")}}if(e.data&&e.hasContent&&e.contentType!==!1||c.contentType)l["Content-Type"]=e.contentType;e.ifModified&&(k=k||e.url,d.lastModified[k]&&(l["If-Modified-Since"]=d.lastModified[k]),d.etag[k]&&(l["If-None-Match"]=d.etag[k])),l.Accept=e.dataTypes[0]&&e.accepts[e.dataTypes[0]]?e.accepts[e.dataTypes[0]]+(e.dataTypes[0]!=="*"?", */*; q=0.01":""):e.accepts["*"];for(t in e.headers)u.setRequestHeader(t,e.headers[t]);if(e.beforeSend&&(e.beforeSend.call(f,u,e)===!1||r===2)){u.abort();return!1}for(t in {success:1,error:1,complete:1})u[t](e[t]);o=bN(bI,e,c,u);if(o){u.readyState=1,s&&g.trigger("ajaxSend",[u,e]),e.async&&e.timeout>0&&(p=setTimeout(function(){u.abort("timeout")},e.timeout));try{r=1,o.send(l,v)}catch(y){status<2?v(-1,y):d.error(y)}}else v(-1,"No Transport");return u},param:function(a,c){var e=[],f=function(a,b){b=d.isFunction(b)?b():b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=d.ajaxSettings.traditional);if(d.isArray(a)||a.jquery&&!d.isPlainObject(a))d.each(a,function(){f(this.name,this.value)});else for(var g in a)bO(g,a[g],c,f);return e.join("&").replace(bp,"+")}}),d.extend({active:0,lastModified:{},etag:{}});var bR=d.now(),bS=/(\=)\?(&|$)|()\?\?()/i;d.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return d.expando+"_"+bR++}}),d.ajaxPrefilter("json jsonp",function(b,c,e){var f=typeof b.data==="string";if(b.dataTypes[0]==="jsonp"||c.jsonpCallback||c.jsonp!=null||b.jsonp!==!1&&(bS.test(b.url)||f&&bS.test(b.data))){var g,h=b.jsonpCallback=d.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2",m=function(){a[h]=i,g&&d.isFunction(i)&&a[h](g[0])};b.jsonp!==!1&&(j=j.replace(bS,l),b.url===j&&(f&&(k=k.replace(bS,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},e.then(m,m),b.converters["script json"]=function(){g||d.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),d.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){d.globalEval(a);return a}}}),d.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),d.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var bT=d.now(),bU,bV;d.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&bX()||bY()}:bX,bV=d.ajaxSettings.xhr(),d.support.ajax=!!bV,d.support.cors=bV&&"withCredentials"in bV,bV=b,d.support.ajax&&d.ajaxTransport(function(a){if(!a.crossDomain||d.support.cors){var c;return{send:function(e,f){var g=a.xhr(),h,i;a.username?g.open(a.type,a.url,a.async,a.username,a.password):g.open(a.type,a.url,a.async);if(a.xhrFields)for(i in a.xhrFields)g[i]=a.xhrFields[i];a.mimeType&&g.overrideMimeType&&g.overrideMimeType(a.mimeType),(!a.crossDomain||a.hasContent)&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(i in e)g.setRequestHeader(i,e[i])}catch(j){}g.send(a.hasContent&&a.data||null),c=function(e,i){var j,k,l,m,n;try{if(c&&(i||g.readyState===4)){c=b,h&&(g.onreadystatechange=d.noop,delete bU[h]);if(i)g.readyState!==4&&g.abort();else{j=g.status,l=g.getAllResponseHeaders(),m={},n=g.responseXML,n&&n.documentElement&&(m.xml=n),m.text=g.responseText;try{k=g.statusText}catch(o){k=""}j||!a.isLocal||a.crossDomain?j===1223&&(j=204):j=m.text?200:404}}}catch(p){i||f(-1,p)}m&&f(j,k,m,l)},a.async&&g.readyState!==4?(bU||(bU={},bW()),h=bT++,g.onreadystatechange=bU[h]=c):c()},abort:function(){c&&c(0,1)}}}});var bZ={},b$=/^(?:toggle|show|hide)$/,b_=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,ca,cb=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];d.fn.extend({show:function(a,b,c){var e,f;if(a||a===0)return this.animate(cc("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)e=this[g],f=e.style.display,!d._data(e,"olddisplay")&&f==="none"&&(f=e.style.display=""),f===""&&d.css(e,"display")==="none"&&d._data(e,"olddisplay",cd(e.nodeName));for(g=0;g<h;g++){e=this[g],f=e.style.display;if(f===""||f==="none")e.style.display=d._data(e,"olddisplay")||""}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cc("hide",3),a,b,c);for(var e=0,f=this.length;e<f;e++){var g=d.css(this[e],"display");g!=="none"&&!d._data(this[e],"olddisplay")&&d._data(this[e],"olddisplay",g)}for(e=0;e<f;e++)this[e].style.display="none";return this},_toggle:d.fn.toggle,toggle:function(a,b,c){var e=typeof a==="boolean";d.isFunction(a)&&d.isFunction(b)?this._toggle.apply(this,arguments):a==null||e?this.each(function(){var b=e?a:d(this).is(":hidden");d(this)[b?"show":"hide"]()}):this.animate(cc("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,e){var f=d.speed(b,c,e);if(d.isEmptyObject(a))return this.each(f.complete);return this[f.queue===!1?"each":"queue"](function(){var b=d.extend({},f),c,e=this.nodeType===1,g=e&&d(this).is(":hidden"),h=this;for(c in a){var i=d.camelCase(c);c!==i&&(a[i]=a[c],delete a[c],c=i);if(a[c]==="hide"&&g||a[c]==="show"&&!g)return b.complete.call(this);if(e&&(c==="height"||c==="width")){b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];if(d.css(this,"display")==="inline"&&d.css(this,"float")==="none")if(d.support.inlineBlockNeedsLayout){var j=cd(this.nodeName);j==="inline"?this.style.display="inline-block":(this.style.display="inline",this.style.zoom=1)}else this.style.display="inline-block"}d.isArray(a[c])&&((b.specialEasing=b.specialEasing||{})[c]=a[c][1],a[c]=a[c][0])}b.overflow!=null&&(this.style.overflow="hidden"),b.curAnim=d.extend({},a),d.each(a,function(c,e){var f=new d.fx(h,b,c);if(b$.test(e))f[e==="toggle"?g?"show":"hide":e](a);else{var i=b_.exec(e),j=f.cur();if(i){var k=parseFloat(i[2]),l=i[3]||(d.cssNumber[c]?"":"px");l!=="px"&&(d.style(h,c,(k||1)+l),j=(k||1)/f.cur()*j,d.style(h,c,j+l)),i[1]&&(k=(i[1]==="-="?-1:1)*k+j),f.custom(j,k,l)}else f.custom(j,e,"")}});return!0})},stop:function(a,b){var c=d.timers;a&&this.queue([]),this.each(function(){for(var a=c.length-1;a>=0;a--)c[a].elem===this&&(b&&c[a](!0),c.splice(a,1))}),b||this.dequeue();return this}}),d.each({slideDown:cc("show",1),slideUp:cc("hide",1),slideToggle:cc("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){d.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),d.extend({speed:function(a,b,c){var e=a&&typeof a==="object"?d.extend({},a):{complete:c||!c&&b||d.isFunction(a)&&a,duration:a,easing:c&&b||b&&!d.isFunction(b)&&b};e.duration=d.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in d.fx.speeds?d.fx.speeds[e.duration]:d.fx.speeds._default,e.old=e.complete,e.complete=function(){e.queue!==!1&&d(this).dequeue(),d.isFunction(e.old)&&e.old.call(this)};return e},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig||(b.orig={})}}),d.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(d.fx.step[this.prop]||d.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=d.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,b,c){function g(a){return e.step(a)}var e=this,f=d.fx;this.startTime=d.now(),this.start=a,this.end=b,this.unit=c||this.unit||(d.cssNumber[this.prop]?"":"px"),this.now=this.start,this.pos=this.state=0,g.elem=this.elem,g()&&d.timers.push(g)&&!ca&&(ca=setInterval(f.tick,f.interval))},show:function(){this.options.orig[this.prop]=d.style(this.elem,this.prop),this.options.show=!0,this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),d(this.elem).show()},hide:function(){this.options.orig[this.prop]=d.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b=d.now(),c=!0;if(a||b>=this.options.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),this.options.curAnim[this.prop]=!0;for(var e in this.options.curAnim)this.options.curAnim[e]!==!0&&(c=!1);if(c){if(this.options.overflow!=null&&!d.support.shrinkWrapBlocks){var f=this.elem,g=this.options;d.each(["","X","Y"],function(a,b){f.style["overflow"+b]=g.overflow[a]})}this.options.hide&&d(this.elem).hide();if(this.options.hide||this.options.show)for(var h in this.options.curAnim)d.style(this.elem,h,this.options.orig[h]);this.options.complete.call(this.elem)}return!1}var i=b-this.startTime;this.state=i/this.options.duration;var j=this.options.specialEasing&&this.options.specialEasing[this.prop],k=this.options.easing||(d.easing.swing?"swing":"linear");this.pos=d.easing[j||k](this.state,i,0,1,this.options.duration),this.now=this.start+(this.end-this.start)*this.pos,this.update();return!0}},d.extend(d.fx,{tick:function(){var a=d.timers;for(var b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||d.fx.stop()},interval:13,stop:function(){clearInterval(ca),ca=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){d.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit:a.elem[a.prop]=a.now}}}),d.expr&&d.expr.filters&&(d.expr.filters.animated=function(a){return d.grep(d.timers,function(b){return a===b.elem}).length});var ce=/^t(?:able|d|h)$/i,cf=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?d.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){d.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return d.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(e){}var f=b.ownerDocument,g=f.documentElement;if(!c||!d.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=f.body,i=cg(f),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||d.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||d.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:d.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){d.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return d.offset.bodyOffset(b);d.offset.initialize();var c,e=b.offsetParent,f=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(d.offset.supportsFixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===e&&(l+=b.offsetTop,m+=b.offsetLeft,d.offset.doesNotAddBorder&&(!d.offset.doesAddBorderForTableAndCells||!ce.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),f=e,e=b.offsetParent),d.offset.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;d.offset.supportsFixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},d.offset={initialize:function(){var a=c.body,b=c.createElement("div"),e,f,g,h,i=parseFloat(d.css(a,"marginTop"))||0,j="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";d.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"}),b.innerHTML=j,a.insertBefore(b,a.firstChild),e=b.firstChild,f=e.firstChild,h=e.nextSibling.firstChild.firstChild,this.doesNotAddBorder=f.offsetTop!==5,this.doesAddBorderForTableAndCells=h.offsetTop===5,f.style.position="fixed",f.style.top="20px",this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15,f.style.position=f.style.top="",e.style.overflow="hidden",e.style.position="relative",this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5,this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==i,a.removeChild(b),a=b=e=f=g=h=null,d.offset.initialize=d.noop},bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;d.offset.initialize(),d.offset.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(d.css(a,"marginTop"))||0,c+=parseFloat(d.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var e=d.css(a,"position");e==="static"&&(a.style.position="relative");var f=d(a),g=f.offset(),h=d.css(a,"top"),i=d.css(a,"left"),j=e==="absolute"&&d.inArray("auto",[h,i])>-1,k={},l={},m,n;j&&(l=f.position()),m=j?l.top:parseInt(h,10)||0,n=j?l.left:parseInt(i,10)||0,d.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):f.css(k)}},d.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),e=cf.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(d.css(a,"marginTop"))||0,c.left-=parseFloat(d.css(a,"marginLeft"))||0,e.top+=parseFloat(d.css(b[0],"borderTopWidth"))||0,e.left+=parseFloat(d.css(b[0],"borderLeftWidth"))||0;return{top:c.top-e.top,left:c.left-e.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&(!cf.test(a.nodeName)&&d.css(a,"position")==="static"))a=a.offsetParent;return a})}}),d.each(["Left","Top"],function(a,c){var e="scroll"+c;d.fn[e]=function(c){var f=this[0],g;if(!f)return null;if(c!==b)return this.each(function(){g=cg(this),g?g.scrollTo(a?d(g).scrollLeft():c,a?c:d(g).scrollTop()):this[e]=c});g=cg(f);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:d.support.boxModel&&g.document.documentElement[e]||g.document.body[e]:f[e]}}),d.each(["Height","Width"],function(a,c){var e=c.toLowerCase();d.fn["inner"+c]=function(){return this[0]?parseFloat(d.css(this[0],e,"padding")):null},d.fn["outer"+c]=function(a){return this[0]?parseFloat(d.css(this[0],e,a?"margin":"border")):null},d.fn[e]=function(a){var f=this[0];if(!f)return a==null?null:this;if(d.isFunction(a))return this.each(function(b){var c=d(this);c[e](a.call(this,b,c[e]()))});if(d.isWindow(f)){var g=f.document.documentElement["client"+c];return f.document.compatMode==="CSS1Compat"&&g||f.document.body["client"+c]||g}if(f.nodeType===9)return Math.max(f.documentElement["client"+c],f.body["scroll"+c],f.documentElement["scroll"+c],f.body["offset"+c],f.documentElement["offset"+c]);if(a===b){var h=d.css(f,e),i=parseFloat(h);return d.isNaN(i)?h:i}return this.css(e,typeof a==="string"?a:a+"px")}}),a.jQuery=a.$=d})(window);

/*!
 * jQuery UI 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(c,j){function k(a){return!c(a).parents().andSelf().filter(function(){return c.curCSS(this,"visibility")==="hidden"||c.expr.filters.hidden(this)}).length}c.ui=c.ui||{};if(!c.ui.version){c.extend(c.ui,{version:"1.8.11",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,
NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});c.fn.extend({_focus:c.fn.focus,focus:function(a,b){return typeof a==="number"?this.each(function(){var d=this;setTimeout(function(){c(d).focus();b&&b.call(d)},a)}):this._focus.apply(this,arguments)},scrollParent:function(){var a;a=c.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(c.curCSS(this,
"position",1))&&/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!a.length?c(document):a},zIndex:function(a){if(a!==j)return this.css("zIndex",a);if(this.length){a=c(this[0]);for(var b;a.length&&a[0]!==document;){b=a.css("position");
if(b==="absolute"||b==="relative"||b==="fixed"){b=parseInt(a.css("zIndex"),10);if(!isNaN(b)&&b!==0)return b}a=a.parent()}}return 0},disableSelection:function(){return this.bind((c.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});c.each(["Width","Height"],function(a,b){function d(f,g,l,m){c.each(e,function(){g-=parseFloat(c.curCSS(f,"padding"+this,true))||0;if(l)g-=parseFloat(c.curCSS(f,
"border"+this+"Width",true))||0;if(m)g-=parseFloat(c.curCSS(f,"margin"+this,true))||0});return g}var e=b==="Width"?["Left","Right"]:["Top","Bottom"],h=b.toLowerCase(),i={innerWidth:c.fn.innerWidth,innerHeight:c.fn.innerHeight,outerWidth:c.fn.outerWidth,outerHeight:c.fn.outerHeight};c.fn["inner"+b]=function(f){if(f===j)return i["inner"+b].call(this);return this.each(function(){c(this).css(h,d(this,f)+"px")})};c.fn["outer"+b]=function(f,g){if(typeof f!=="number")return i["outer"+b].call(this,f);return this.each(function(){c(this).css(h,
d(this,f,true,g)+"px")})}});c.extend(c.expr[":"],{data:function(a,b,d){return!!c.data(a,d[3])},focusable:function(a){var b=a.nodeName.toLowerCase(),d=c.attr(a,"tabindex");if("area"===b){b=a.parentNode;d=b.name;if(!a.href||!d||b.nodeName.toLowerCase()!=="map")return false;a=c("img[usemap=#"+d+"]")[0];return!!a&&k(a)}return(/input|select|textarea|button|object/.test(b)?!a.disabled:"a"==b?a.href||!isNaN(d):!isNaN(d))&&k(a)},tabbable:function(a){var b=c.attr(a,"tabindex");return(isNaN(b)||b>=0)&&c(a).is(":focusable")}});
c(function(){var a=document.body,b=a.appendChild(b=document.createElement("div"));c.extend(b.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});c.support.minHeight=b.offsetHeight===100;c.support.selectstart="onselectstart"in b;a.removeChild(b).style.display="none"});c.extend(c.ui,{plugin:{add:function(a,b,d){a=c.ui[a].prototype;for(var e in d){a.plugins[e]=a.plugins[e]||[];a.plugins[e].push([b,d[e]])}},call:function(a,b,d){if((b=a.plugins[b])&&a.element[0].parentNode)for(var e=0;e<b.length;e++)a.options[b[e][0]]&&
b[e][1].apply(a.element,d)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(a,b){if(c(a).css("overflow")==="hidden")return false;b=b&&b==="left"?"scrollLeft":"scrollTop";var d=false;if(a[b]>0)return true;a[b]=1;d=a[b]>0;a[b]=0;return d},isOverAxis:function(a,b,d){return a>b&&a<b+d},isOver:function(a,b,d,e,h,i){return c.ui.isOverAxis(a,d,h)&&c.ui.isOverAxis(b,e,i)}})}})(jQuery);
;/*!
 * jQuery UI Widget 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(b,j){if(b.cleanData){var k=b.cleanData;b.cleanData=function(a){for(var c=0,d;(d=a[c])!=null;c++)b(d).triggerHandler("remove");k(a)}}else{var l=b.fn.remove;b.fn.remove=function(a,c){return this.each(function(){if(!c)if(!a||b.filter(a,[this]).length)b("*",this).add([this]).each(function(){b(this).triggerHandler("remove")});return l.call(b(this),a,c)})}}b.widget=function(a,c,d){var e=a.split(".")[0],f;a=a.split(".")[1];f=e+"-"+a;if(!d){d=c;c=b.Widget}b.expr[":"][f]=function(h){return!!b.data(h,
a)};b[e]=b[e]||{};b[e][a]=function(h,g){arguments.length&&this._createWidget(h,g)};c=new c;c.options=b.extend(true,{},c.options);b[e][a].prototype=b.extend(true,c,{namespace:e,widgetName:a,widgetEventPrefix:b[e][a].prototype.widgetEventPrefix||a,widgetBaseClass:f},d);b.widget.bridge(a,b[e][a])};b.widget.bridge=function(a,c){b.fn[a]=function(d){var e=typeof d==="string",f=Array.prototype.slice.call(arguments,1),h=this;d=!e&&f.length?b.extend.apply(null,[true,d].concat(f)):d;if(e&&d.charAt(0)==="_")return h;
e?this.each(function(){var g=b.data(this,a),i=g&&b.isFunction(g[d])?g[d].apply(g,f):g;if(i!==g&&i!==j){h=i;return false}}):this.each(function(){var g=b.data(this,a);g?g.option(d||{})._init():b.data(this,a,new c(d,this))});return h}};b.Widget=function(a,c){arguments.length&&this._createWidget(a,c)};b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(a,c){b.data(c,this.widgetName,this);this.element=b(c);this.options=b.extend(true,{},this.options,
this._getCreateOptions(),a);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return b.metadata&&b.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},
widget:function(){return this.element},option:function(a,c){var d=a;if(arguments.length===0)return b.extend({},this.options);if(typeof a==="string"){if(c===j)return this.options[a];d={};d[a]=c}this._setOptions(d);return this},_setOptions:function(a){var c=this;b.each(a,function(d,e){c._setOption(d,e)});return this},_setOption:function(a,c){this.options[a]=c;if(a==="disabled")this.widget()[c?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",c);return this},
enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(a,c,d){var e=this.options[a];c=b.Event(c);c.type=(a===this.widgetEventPrefix?a:this.widgetEventPrefix+a).toLowerCase();d=d||{};if(c.originalEvent){a=b.event.props.length;for(var f;a;){f=b.event.props[--a];c[f]=c.originalEvent[f]}}this.element.trigger(c,d);return!(b.isFunction(e)&&e.call(this.element[0],c,d)===false||c.isDefaultPrevented())}}})(jQuery);
;/*!
 * jQuery UI Mouse 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */
(function(b){b.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var a=this;this.element.bind("mousedown."+this.widgetName,function(c){return a._mouseDown(c)}).bind("click."+this.widgetName,function(c){if(true===b.data(c.target,a.widgetName+".preventClickEvent")){b.removeData(c.target,a.widgetName+".preventClickEvent");c.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(a){a.originalEvent=
a.originalEvent||{};if(!a.originalEvent.mouseHandled){this._mouseStarted&&this._mouseUp(a);this._mouseDownEvent=a;var c=this,e=a.which==1,f=typeof this.options.cancel=="string"?b(a.target).parents().add(a.target).filter(this.options.cancel).length:false;if(!e||f||!this._mouseCapture(a))return true;this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet)this._mouseDelayTimer=setTimeout(function(){c.mouseDelayMet=true},this.options.delay);if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a)){this._mouseStarted=
this._mouseStart(a)!==false;if(!this._mouseStarted){a.preventDefault();return true}}true===b.data(a.target,this.widgetName+".preventClickEvent")&&b.removeData(a.target,this.widgetName+".preventClickEvent");this._mouseMoveDelegate=function(d){return c._mouseMove(d)};this._mouseUpDelegate=function(d){return c._mouseUp(d)};b(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);a.preventDefault();return a.originalEvent.mouseHandled=
true}},_mouseMove:function(a){if(b.browser.msie&&!(document.documentMode>=9)&&!a.button)return this._mouseUp(a);if(this._mouseStarted){this._mouseDrag(a);return a.preventDefault()}if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a))(this._mouseStarted=this._mouseStart(this._mouseDownEvent,a)!==false)?this._mouseDrag(a):this._mouseUp(a);return!this._mouseStarted},_mouseUp:function(a){b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);
if(this._mouseStarted){this._mouseStarted=false;a.target==this._mouseDownEvent.target&&b.data(a.target,this.widgetName+".preventClickEvent",true);this._mouseStop(a)}return false},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}})})(jQuery);
;/*
 * jQuery UI Position 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Position
 */
(function(c){c.ui=c.ui||{};var n=/left|center|right/,o=/top|center|bottom/,t=c.fn.position,u=c.fn.offset;c.fn.position=function(b){if(!b||!b.of)return t.apply(this,arguments);b=c.extend({},b);var a=c(b.of),d=a[0],g=(b.collision||"flip").split(" "),e=b.offset?b.offset.split(" "):[0,0],h,k,j;if(d.nodeType===9){h=a.width();k=a.height();j={top:0,left:0}}else if(d.setTimeout){h=a.width();k=a.height();j={top:a.scrollTop(),left:a.scrollLeft()}}else if(d.preventDefault){b.at="left top";h=k=0;j={top:b.of.pageY,
left:b.of.pageX}}else{h=a.outerWidth();k=a.outerHeight();j=a.offset()}c.each(["my","at"],function(){var f=(b[this]||"").split(" ");if(f.length===1)f=n.test(f[0])?f.concat(["center"]):o.test(f[0])?["center"].concat(f):["center","center"];f[0]=n.test(f[0])?f[0]:"center";f[1]=o.test(f[1])?f[1]:"center";b[this]=f});if(g.length===1)g[1]=g[0];e[0]=parseInt(e[0],10)||0;if(e.length===1)e[1]=e[0];e[1]=parseInt(e[1],10)||0;if(b.at[0]==="right")j.left+=h;else if(b.at[0]==="center")j.left+=h/2;if(b.at[1]==="bottom")j.top+=
k;else if(b.at[1]==="center")j.top+=k/2;j.left+=e[0];j.top+=e[1];return this.each(function(){var f=c(this),l=f.outerWidth(),m=f.outerHeight(),p=parseInt(c.curCSS(this,"marginLeft",true))||0,q=parseInt(c.curCSS(this,"marginTop",true))||0,v=l+p+(parseInt(c.curCSS(this,"marginRight",true))||0),w=m+q+(parseInt(c.curCSS(this,"marginBottom",true))||0),i=c.extend({},j),r;if(b.my[0]==="right")i.left-=l;else if(b.my[0]==="center")i.left-=l/2;if(b.my[1]==="bottom")i.top-=m;else if(b.my[1]==="center")i.top-=
m/2;i.left=Math.round(i.left);i.top=Math.round(i.top);r={left:i.left-p,top:i.top-q};c.each(["left","top"],function(s,x){c.ui.position[g[s]]&&c.ui.position[g[s]][x](i,{targetWidth:h,targetHeight:k,elemWidth:l,elemHeight:m,collisionPosition:r,collisionWidth:v,collisionHeight:w,offset:e,my:b.my,at:b.at})});c.fn.bgiframe&&f.bgiframe();f.offset(c.extend(i,{using:b.using}))})};c.ui.position={fit:{left:function(b,a){var d=c(window);d=a.collisionPosition.left+a.collisionWidth-d.width()-d.scrollLeft();b.left=
d>0?b.left-d:Math.max(b.left-a.collisionPosition.left,b.left)},top:function(b,a){var d=c(window);d=a.collisionPosition.top+a.collisionHeight-d.height()-d.scrollTop();b.top=d>0?b.top-d:Math.max(b.top-a.collisionPosition.top,b.top)}},flip:{left:function(b,a){if(a.at[0]!=="center"){var d=c(window);d=a.collisionPosition.left+a.collisionWidth-d.width()-d.scrollLeft();var g=a.my[0]==="left"?-a.elemWidth:a.my[0]==="right"?a.elemWidth:0,e=a.at[0]==="left"?a.targetWidth:-a.targetWidth,h=-2*a.offset[0];b.left+=
a.collisionPosition.left<0?g+e+h:d>0?g+e+h:0}},top:function(b,a){if(a.at[1]!=="center"){var d=c(window);d=a.collisionPosition.top+a.collisionHeight-d.height()-d.scrollTop();var g=a.my[1]==="top"?-a.elemHeight:a.my[1]==="bottom"?a.elemHeight:0,e=a.at[1]==="top"?a.targetHeight:-a.targetHeight,h=-2*a.offset[1];b.top+=a.collisionPosition.top<0?g+e+h:d>0?g+e+h:0}}}};if(!c.offset.setOffset){c.offset.setOffset=function(b,a){if(/static/.test(c.curCSS(b,"position")))b.style.position="relative";var d=c(b),
g=d.offset(),e=parseInt(c.curCSS(b,"top",true),10)||0,h=parseInt(c.curCSS(b,"left",true),10)||0;g={top:a.top-g.top+e,left:a.left-g.left+h};"using"in a?a.using.call(b,g):d.css(g)};c.fn.offset=function(b){var a=this[0];if(!a||!a.ownerDocument)return null;if(b)return this.each(function(){c.offset.setOffset(this,b)});return u.call(this)}}})(jQuery);
;/*
 * jQuery UI Draggable 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(d){d.widget("ui.draggable",d.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){if(this.options.helper==
"original"&&!/^(?:r|a|f)/.test(this.element.css("position")))this.element[0].style.position="relative";this.options.addClasses&&this.element.addClass("ui-draggable");this.options.disabled&&this.element.addClass("ui-draggable-disabled");this._mouseInit()},destroy:function(){if(this.element.data("draggable")){this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy();return this}},_mouseCapture:function(a){var b=
this.options;if(this.helper||b.disabled||d(a.target).is(".ui-resizable-handle"))return false;this.handle=this._getHandle(a);if(!this.handle)return false;return true},_mouseStart:function(a){var b=this.options;this.helper=this._createHelper(a);this._cacheHelperProportions();if(d.ui.ddmanager)d.ui.ddmanager.current=this;this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.positionAbs=this.element.offset();this.offset={top:this.offset.top-
this.margins.top,left:this.offset.left-this.margins.left};d.extend(this.offset,{click:{left:a.pageX-this.offset.left,top:a.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this.position=this._generatePosition(a);this.originalPageX=a.pageX;this.originalPageY=a.pageY;b.cursorAt&&this._adjustOffsetFromHelper(b.cursorAt);b.containment&&this._setContainment();if(this._trigger("start",a)===false){this._clear();return false}this._cacheHelperProportions();
d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,a);this.helper.addClass("ui-draggable-dragging");this._mouseDrag(a,true);return true},_mouseDrag:function(a,b){this.position=this._generatePosition(a);this.positionAbs=this._convertPositionTo("absolute");if(!b){b=this._uiHash();if(this._trigger("drag",a,b)===false){this._mouseUp({});return false}this.position=b.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||
this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";d.ui.ddmanager&&d.ui.ddmanager.drag(this,a);return false},_mouseStop:function(a){var b=false;if(d.ui.ddmanager&&!this.options.dropBehaviour)b=d.ui.ddmanager.drop(this,a);if(this.dropped){b=this.dropped;this.dropped=false}if((!this.element[0]||!this.element[0].parentNode)&&this.options.helper=="original")return false;if(this.options.revert=="invalid"&&!b||this.options.revert=="valid"&&b||this.options.revert===true||d.isFunction(this.options.revert)&&
this.options.revert.call(this.element,b)){var c=this;d(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){c._trigger("stop",a)!==false&&c._clear()})}else this._trigger("stop",a)!==false&&this._clear();return false},cancel:function(){this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear();return this},_getHandle:function(a){var b=!this.options.handle||!d(this.options.handle,this.element).length?true:false;d(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==
a.target)b=true});return b},_createHelper:function(a){var b=this.options;a=d.isFunction(b.helper)?d(b.helper.apply(this.element[0],[a])):b.helper=="clone"?this.element.clone():this.element;a.parents("body").length||a.appendTo(b.appendTo=="parent"?this.element[0].parentNode:b.appendTo);a[0]!=this.element[0]&&!/(fixed|absolute)/.test(a.css("position"))&&a.css("position","absolute");return a},_adjustOffsetFromHelper:function(a){if(typeof a=="string")a=a.split(" ");if(d.isArray(a))a={left:+a[0],top:+a[1]||
0};if("left"in a)this.offset.click.left=a.left+this.margins.left;if("right"in a)this.offset.click.left=this.helperProportions.width-a.right+this.margins.left;if("top"in a)this.offset.click.top=a.top+this.margins.top;if("bottom"in a)this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var a=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],
this.offsetParent[0])){a.left+=this.scrollParent.scrollLeft();a.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&d.browser.msie)a={top:0,left:0};return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.element.position();return{top:a.top-
(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),
height:this.helper.outerHeight()}},_setContainment:function(){var a=this.options;if(a.containment=="parent")a.containment=this.helper[0].parentNode;if(a.containment=="document"||a.containment=="window")this.containment=[(a.containment=="document"?0:d(window).scrollLeft())-this.offset.relative.left-this.offset.parent.left,(a.containment=="document"?0:d(window).scrollTop())-this.offset.relative.top-this.offset.parent.top,(a.containment=="document"?0:d(window).scrollLeft())+d(a.containment=="document"?
document:window).width()-this.helperProportions.width-this.margins.left,(a.containment=="document"?0:d(window).scrollTop())+(d(a.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(a.containment)&&a.containment.constructor!=Array){var b=d(a.containment)[0];if(b){a=d(a.containment).offset();var c=d(b).css("overflow")!="hidden";this.containment=[a.left+(parseInt(d(b).css("borderLeftWidth"),
10)||0)+(parseInt(d(b).css("paddingLeft"),10)||0),a.top+(parseInt(d(b).css("borderTopWidth"),10)||0)+(parseInt(d(b).css("paddingTop"),10)||0),a.left+(c?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(d(b).css("borderLeftWidth"),10)||0)-(parseInt(d(b).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,a.top+(c?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(d(b).css("borderTopWidth"),10)||0)-(parseInt(d(b).css("paddingBottom"),
10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom]}}else if(a.containment.constructor==Array)this.containment=a.containment},_convertPositionTo:function(a,b){if(!b)b=this.position;a=a=="absolute"?1:-1;var c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(c[0].tagName);return{top:b.top+this.offset.relative.top*a+this.offset.parent.top*a-(d.browser.safari&&
d.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:c.scrollTop())*a),left:b.left+this.offset.relative.left*a+this.offset.parent.left*a-(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():f?0:c.scrollLeft())*a)}},_generatePosition:function(a){var b=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],
this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(c[0].tagName),e=a.pageX,g=a.pageY;if(this.originalPosition){if(this.containment){if(a.pageX-this.offset.click.left<this.containment[0])e=this.containment[0]+this.offset.click.left;if(a.pageY-this.offset.click.top<this.containment[1])g=this.containment[1]+this.offset.click.top;if(a.pageX-this.offset.click.left>this.containment[2])e=this.containment[2]+this.offset.click.left;if(a.pageY-this.offset.click.top>this.containment[3])g=
this.containment[3]+this.offset.click.top}if(b.grid){g=this.originalPageY+Math.round((g-this.originalPageY)/b.grid[1])*b.grid[1];g=this.containment?!(g-this.offset.click.top<this.containment[1]||g-this.offset.click.top>this.containment[3])?g:!(g-this.offset.click.top<this.containment[1])?g-b.grid[1]:g+b.grid[1]:g;e=this.originalPageX+Math.round((e-this.originalPageX)/b.grid[0])*b.grid[0];e=this.containment?!(e-this.offset.click.left<this.containment[0]||e-this.offset.click.left>this.containment[2])?
e:!(e-this.offset.click.left<this.containment[0])?e-b.grid[0]:e+b.grid[0]:e}}return{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:c.scrollTop()),left:e-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():
f?0:c.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove();this.helper=null;this.cancelHelperRemoval=false},_trigger:function(a,b,c){c=c||this._uiHash();d.ui.plugin.call(this,a,[b,c]);if(a=="drag")this.positionAbs=this._convertPositionTo("absolute");return d.Widget.prototype._trigger.call(this,a,b,c)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,
offset:this.positionAbs}}});d.extend(d.ui.draggable,{version:"1.8.11"});d.ui.plugin.add("draggable","connectToSortable",{start:function(a,b){var c=d(this).data("draggable"),f=c.options,e=d.extend({},b,{item:c.element});c.sortables=[];d(f.connectToSortable).each(function(){var g=d.data(this,"sortable");if(g&&!g.options.disabled){c.sortables.push({instance:g,shouldRevert:g.options.revert});g.refreshPositions();g._trigger("activate",a,e)}})},stop:function(a,b){var c=d(this).data("draggable"),f=d.extend({},
b,{item:c.element});d.each(c.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;c.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert)this.instance.options.revert=true;this.instance._mouseStop(a);this.instance.options.helper=this.instance.options._helper;c.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})}else{this.instance.cancelHelperRemoval=false;this.instance._trigger("deactivate",a,f)}})},drag:function(a,b){var c=
d(this).data("draggable"),f=this;d.each(c.sortables,function(){this.instance.positionAbs=c.positionAbs;this.instance.helperProportions=c.helperProportions;this.instance.offset.click=c.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=d(f).clone().appendTo(this.instance.element).data("sortable-item",true);this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return b.helper[0]};
a.target=this.instance.currentItem[0];this.instance._mouseCapture(a,true);this.instance._mouseStart(a,true,true);this.instance.offset.click.top=c.offset.click.top;this.instance.offset.click.left=c.offset.click.left;this.instance.offset.parent.left-=c.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=c.offset.parent.top-this.instance.offset.parent.top;c._trigger("toSortable",a);c.dropped=this.instance.element;c.currentItem=c.element;this.instance.fromOutside=c}this.instance.currentItem&&
this.instance._mouseDrag(a)}else if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",a,this.instance._uiHash(this.instance));this.instance._mouseStop(a,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();this.instance.placeholder&&this.instance.placeholder.remove();c._trigger("fromSortable",a);c.dropped=false}})}});d.ui.plugin.add("draggable","cursor",
{start:function(){var a=d("body"),b=d(this).data("draggable").options;if(a.css("cursor"))b._cursor=a.css("cursor");a.css("cursor",b.cursor)},stop:function(){var a=d(this).data("draggable").options;a._cursor&&d("body").css("cursor",a._cursor)}});d.ui.plugin.add("draggable","iframeFix",{start:function(){var a=d(this).data("draggable").options;d(a.iframeFix===true?"iframe":a.iframeFix).each(function(){d('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+
"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1E3}).css(d(this).offset()).appendTo("body")})},stop:function(){d("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)})}});d.ui.plugin.add("draggable","opacity",{start:function(a,b){a=d(b.helper);b=d(this).data("draggable").options;if(a.css("opacity"))b._opacity=a.css("opacity");a.css("opacity",b.opacity)},stop:function(a,b){a=d(this).data("draggable").options;a._opacity&&d(b.helper).css("opacity",
a._opacity)}});d.ui.plugin.add("draggable","scroll",{start:function(){var a=d(this).data("draggable");if(a.scrollParent[0]!=document&&a.scrollParent[0].tagName!="HTML")a.overflowOffset=a.scrollParent.offset()},drag:function(a){var b=d(this).data("draggable"),c=b.options,f=false;if(b.scrollParent[0]!=document&&b.scrollParent[0].tagName!="HTML"){if(!c.axis||c.axis!="x")if(b.overflowOffset.top+b.scrollParent[0].offsetHeight-a.pageY<c.scrollSensitivity)b.scrollParent[0].scrollTop=f=b.scrollParent[0].scrollTop+
c.scrollSpeed;else if(a.pageY-b.overflowOffset.top<c.scrollSensitivity)b.scrollParent[0].scrollTop=f=b.scrollParent[0].scrollTop-c.scrollSpeed;if(!c.axis||c.axis!="y")if(b.overflowOffset.left+b.scrollParent[0].offsetWidth-a.pageX<c.scrollSensitivity)b.scrollParent[0].scrollLeft=f=b.scrollParent[0].scrollLeft+c.scrollSpeed;else if(a.pageX-b.overflowOffset.left<c.scrollSensitivity)b.scrollParent[0].scrollLeft=f=b.scrollParent[0].scrollLeft-c.scrollSpeed}else{if(!c.axis||c.axis!="x")if(a.pageY-d(document).scrollTop()<
c.scrollSensitivity)f=d(document).scrollTop(d(document).scrollTop()-c.scrollSpeed);else if(d(window).height()-(a.pageY-d(document).scrollTop())<c.scrollSensitivity)f=d(document).scrollTop(d(document).scrollTop()+c.scrollSpeed);if(!c.axis||c.axis!="y")if(a.pageX-d(document).scrollLeft()<c.scrollSensitivity)f=d(document).scrollLeft(d(document).scrollLeft()-c.scrollSpeed);else if(d(window).width()-(a.pageX-d(document).scrollLeft())<c.scrollSensitivity)f=d(document).scrollLeft(d(document).scrollLeft()+
c.scrollSpeed)}f!==false&&d.ui.ddmanager&&!c.dropBehaviour&&d.ui.ddmanager.prepareOffsets(b,a)}});d.ui.plugin.add("draggable","snap",{start:function(){var a=d(this).data("draggable"),b=a.options;a.snapElements=[];d(b.snap.constructor!=String?b.snap.items||":data(draggable)":b.snap).each(function(){var c=d(this),f=c.offset();this!=a.element[0]&&a.snapElements.push({item:this,width:c.outerWidth(),height:c.outerHeight(),top:f.top,left:f.left})})},drag:function(a,b){for(var c=d(this).data("draggable"),
f=c.options,e=f.snapTolerance,g=b.offset.left,n=g+c.helperProportions.width,m=b.offset.top,o=m+c.helperProportions.height,h=c.snapElements.length-1;h>=0;h--){var i=c.snapElements[h].left,k=i+c.snapElements[h].width,j=c.snapElements[h].top,l=j+c.snapElements[h].height;if(i-e<g&&g<k+e&&j-e<m&&m<l+e||i-e<g&&g<k+e&&j-e<o&&o<l+e||i-e<n&&n<k+e&&j-e<m&&m<l+e||i-e<n&&n<k+e&&j-e<o&&o<l+e){if(f.snapMode!="inner"){var p=Math.abs(j-o)<=e,q=Math.abs(l-m)<=e,r=Math.abs(i-n)<=e,s=Math.abs(k-g)<=e;if(p)b.position.top=
c._convertPositionTo("relative",{top:j-c.helperProportions.height,left:0}).top-c.margins.top;if(q)b.position.top=c._convertPositionTo("relative",{top:l,left:0}).top-c.margins.top;if(r)b.position.left=c._convertPositionTo("relative",{top:0,left:i-c.helperProportions.width}).left-c.margins.left;if(s)b.position.left=c._convertPositionTo("relative",{top:0,left:k}).left-c.margins.left}var t=p||q||r||s;if(f.snapMode!="outer"){p=Math.abs(j-m)<=e;q=Math.abs(l-o)<=e;r=Math.abs(i-g)<=e;s=Math.abs(k-n)<=e;if(p)b.position.top=
c._convertPositionTo("relative",{top:j,left:0}).top-c.margins.top;if(q)b.position.top=c._convertPositionTo("relative",{top:l-c.helperProportions.height,left:0}).top-c.margins.top;if(r)b.position.left=c._convertPositionTo("relative",{top:0,left:i}).left-c.margins.left;if(s)b.position.left=c._convertPositionTo("relative",{top:0,left:k-c.helperProportions.width}).left-c.margins.left}if(!c.snapElements[h].snapping&&(p||q||r||s||t))c.options.snap.snap&&c.options.snap.snap.call(c.element,a,d.extend(c._uiHash(),
{snapItem:c.snapElements[h].item}));c.snapElements[h].snapping=p||q||r||s||t}else{c.snapElements[h].snapping&&c.options.snap.release&&c.options.snap.release.call(c.element,a,d.extend(c._uiHash(),{snapItem:c.snapElements[h].item}));c.snapElements[h].snapping=false}}}});d.ui.plugin.add("draggable","stack",{start:function(){var a=d(this).data("draggable").options;a=d.makeArray(d(a.stack)).sort(function(c,f){return(parseInt(d(c).css("zIndex"),10)||0)-(parseInt(d(f).css("zIndex"),10)||0)});if(a.length){var b=
parseInt(a[0].style.zIndex)||0;d(a).each(function(c){this.style.zIndex=b+c});this[0].style.zIndex=b+a.length}}});d.ui.plugin.add("draggable","zIndex",{start:function(a,b){a=d(b.helper);b=d(this).data("draggable").options;if(a.css("zIndex"))b._zIndex=a.css("zIndex");a.css("zIndex",b.zIndex)},stop:function(a,b){a=d(this).data("draggable").options;a._zIndex&&d(b.helper).css("zIndex",a._zIndex)}})})(jQuery);
;/*
 * jQuery UI Droppable 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Droppables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.mouse.js
 *	jquery.ui.draggable.js
 */
(function(d){d.widget("ui.droppable",{widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect"},_create:function(){var a=this.options,b=a.accept;this.isover=0;this.isout=1;this.accept=d.isFunction(b)?b:function(c){return c.is(b)};this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};d.ui.ddmanager.droppables[a.scope]=d.ui.ddmanager.droppables[a.scope]||[];d.ui.ddmanager.droppables[a.scope].push(this);
a.addClasses&&this.element.addClass("ui-droppable")},destroy:function(){for(var a=d.ui.ddmanager.droppables[this.options.scope],b=0;b<a.length;b++)a[b]==this&&a.splice(b,1);this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable");return this},_setOption:function(a,b){if(a=="accept")this.accept=d.isFunction(b)?b:function(c){return c.is(b)};d.Widget.prototype._setOption.apply(this,arguments)},_activate:function(a){var b=d.ui.ddmanager.current;this.options.activeClass&&
this.element.addClass(this.options.activeClass);b&&this._trigger("activate",a,this.ui(b))},_deactivate:function(a){var b=d.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass);b&&this._trigger("deactivate",a,this.ui(b))},_over:function(a){var b=d.ui.ddmanager.current;if(!(!b||(b.currentItem||b.element)[0]==this.element[0]))if(this.accept.call(this.element[0],b.currentItem||b.element)){this.options.hoverClass&&this.element.addClass(this.options.hoverClass);
this._trigger("over",a,this.ui(b))}},_out:function(a){var b=d.ui.ddmanager.current;if(!(!b||(b.currentItem||b.element)[0]==this.element[0]))if(this.accept.call(this.element[0],b.currentItem||b.element)){this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);this._trigger("out",a,this.ui(b))}},_drop:function(a,b){var c=b||d.ui.ddmanager.current;if(!c||(c.currentItem||c.element)[0]==this.element[0])return false;var e=false;this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var g=
d.data(this,"droppable");if(g.options.greedy&&!g.options.disabled&&g.options.scope==c.options.scope&&g.accept.call(g.element[0],c.currentItem||c.element)&&d.ui.intersect(c,d.extend(g,{offset:g.element.offset()}),g.options.tolerance)){e=true;return false}});if(e)return false;if(this.accept.call(this.element[0],c.currentItem||c.element)){this.options.activeClass&&this.element.removeClass(this.options.activeClass);this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);this._trigger("drop",
a,this.ui(c));return this.element}return false},ui:function(a){return{draggable:a.currentItem||a.element,helper:a.helper,position:a.position,offset:a.positionAbs}}});d.extend(d.ui.droppable,{version:"1.8.11"});d.ui.intersect=function(a,b,c){if(!b.offset)return false;var e=(a.positionAbs||a.position.absolute).left,g=e+a.helperProportions.width,f=(a.positionAbs||a.position.absolute).top,h=f+a.helperProportions.height,i=b.offset.left,k=i+b.proportions.width,j=b.offset.top,l=j+b.proportions.height;
switch(c){case "fit":return i<=e&&g<=k&&j<=f&&h<=l;case "intersect":return i<e+a.helperProportions.width/2&&g-a.helperProportions.width/2<k&&j<f+a.helperProportions.height/2&&h-a.helperProportions.height/2<l;case "pointer":return d.ui.isOver((a.positionAbs||a.position.absolute).top+(a.clickOffset||a.offset.click).top,(a.positionAbs||a.position.absolute).left+(a.clickOffset||a.offset.click).left,j,i,b.proportions.height,b.proportions.width);case "touch":return(f>=j&&f<=l||h>=j&&h<=l||f<j&&h>l)&&(e>=
i&&e<=k||g>=i&&g<=k||e<i&&g>k);default:return false}};d.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(a,b){var c=d.ui.ddmanager.droppables[a.options.scope]||[],e=b?b.type:null,g=(a.currentItem||a.element).find(":data(droppable)").andSelf(),f=0;a:for(;f<c.length;f++)if(!(c[f].options.disabled||a&&!c[f].accept.call(c[f].element[0],a.currentItem||a.element))){for(var h=0;h<g.length;h++)if(g[h]==c[f].element[0]){c[f].proportions.height=0;continue a}c[f].visible=c[f].element.css("display")!=
"none";if(c[f].visible){e=="mousedown"&&c[f]._activate.call(c[f],b);c[f].offset=c[f].element.offset();c[f].proportions={width:c[f].element[0].offsetWidth,height:c[f].element[0].offsetHeight}}}},drop:function(a,b){var c=false;d.each(d.ui.ddmanager.droppables[a.options.scope]||[],function(){if(this.options){if(!this.options.disabled&&this.visible&&d.ui.intersect(a,this,this.options.tolerance))c=c||this._drop.call(this,b);if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],a.currentItem||
a.element)){this.isout=1;this.isover=0;this._deactivate.call(this,b)}}});return c},drag:function(a,b){a.options.refreshPositions&&d.ui.ddmanager.prepareOffsets(a,b);d.each(d.ui.ddmanager.droppables[a.options.scope]||[],function(){if(!(this.options.disabled||this.greedyChild||!this.visible)){var c=d.ui.intersect(a,this,this.options.tolerance);if(c=!c&&this.isover==1?"isout":c&&this.isover==0?"isover":null){var e;if(this.options.greedy){var g=this.element.parents(":data(droppable):eq(0)");if(g.length){e=
d.data(g[0],"droppable");e.greedyChild=c=="isover"?1:0}}if(e&&c=="isover"){e.isover=0;e.isout=1;e._out.call(e,b)}this[c]=1;this[c=="isout"?"isover":"isout"]=0;this[c=="isover"?"_over":"_out"].call(this,b);if(e&&c=="isout"){e.isout=0;e.isover=1;e._over.call(e,b)}}}})}}})(jQuery);
;/*
 * jQuery UI Resizable 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Resizables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(e){e.widget("ui.resizable",e.ui.mouse,{widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1E3},_create:function(){var b=this,a=this.options;this.element.addClass("ui-resizable");e.extend(this,{_aspectRatio:!!a.aspectRatio,aspectRatio:a.aspectRatio,originalElement:this.element,
_proportionallyResizeElements:[],_helper:a.helper||a.ghost||a.animate?a.helper||"ui-resizable-helper":null});if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){/relative/.test(this.element.css("position"))&&e.browser.opera&&this.element.css({position:"relative",top:"auto",left:"auto"});this.element.wrap(e('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),
top:this.element.css("top"),left:this.element.css("left")}));this.element=this.element.parent().data("resizable",this.element.data("resizable"));this.elementIsWrapper=true;this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});this.originalResizeStyle=
this.originalElement.css("resize");this.originalElement.css("resize","none");this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));this.originalElement.css({margin:this.originalElement.css("margin")});this._proportionallyResize()}this.handles=a.handles||(!e(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",
nw:".ui-resizable-nw"});if(this.handles.constructor==String){if(this.handles=="all")this.handles="n,e,s,w,se,sw,ne,nw";var c=this.handles.split(",");this.handles={};for(var d=0;d<c.length;d++){var f=e.trim(c[d]),g=e('<div class="ui-resizable-handle '+("ui-resizable-"+f)+'"></div>');/sw|se|ne|nw/.test(f)&&g.css({zIndex:++a.zIndex});"se"==f&&g.addClass("ui-icon ui-icon-gripsmall-diagonal-se");this.handles[f]=".ui-resizable-"+f;this.element.append(g)}}this._renderAxis=function(h){h=h||this.element;for(var i in this.handles){if(this.handles[i].constructor==
String)this.handles[i]=e(this.handles[i],this.element).show();if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var j=e(this.handles[i],this.element),k=0;k=/sw|ne|nw|se|n|s/.test(i)?j.outerHeight():j.outerWidth();j=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join("");h.css(j,k);this._proportionallyResize()}e(this.handles[i])}};this._renderAxis(this.element);this._handles=e(".ui-resizable-handle",this.element).disableSelection();
this._handles.mouseover(function(){if(!b.resizing){if(this.className)var h=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);b.axis=h&&h[1]?h[1]:"se"}});if(a.autoHide){this._handles.hide();e(this.element).addClass("ui-resizable-autohide").hover(function(){e(this).removeClass("ui-resizable-autohide");b._handles.show()},function(){if(!b.resizing){e(this).addClass("ui-resizable-autohide");b._handles.hide()}})}this._mouseInit()},destroy:function(){this._mouseDestroy();var b=function(c){e(c).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};
if(this.elementIsWrapper){b(this.element);var a=this.element;a.after(this.originalElement.css({position:a.css("position"),width:a.outerWidth(),height:a.outerHeight(),top:a.css("top"),left:a.css("left")})).remove()}this.originalElement.css("resize",this.originalResizeStyle);b(this.originalElement);return this},_mouseCapture:function(b){var a=false;for(var c in this.handles)if(e(this.handles[c])[0]==b.target)a=true;return!this.options.disabled&&a},_mouseStart:function(b){var a=this.options,c=this.element.position(),
d=this.element;this.resizing=true;this.documentScroll={top:e(document).scrollTop(),left:e(document).scrollLeft()};if(d.is(".ui-draggable")||/absolute/.test(d.css("position")))d.css({position:"absolute",top:c.top,left:c.left});e.browser.opera&&/relative/.test(d.css("position"))&&d.css({position:"relative",top:"auto",left:"auto"});this._renderProxy();c=m(this.helper.css("left"));var f=m(this.helper.css("top"));if(a.containment){c+=e(a.containment).scrollLeft()||0;f+=e(a.containment).scrollTop()||0}this.offset=
this.helper.offset();this.position={left:c,top:f};this.size=this._helper?{width:d.outerWidth(),height:d.outerHeight()}:{width:d.width(),height:d.height()};this.originalSize=this._helper?{width:d.outerWidth(),height:d.outerHeight()}:{width:d.width(),height:d.height()};this.originalPosition={left:c,top:f};this.sizeDiff={width:d.outerWidth()-d.width(),height:d.outerHeight()-d.height()};this.originalMousePosition={left:b.pageX,top:b.pageY};this.aspectRatio=typeof a.aspectRatio=="number"?a.aspectRatio:
this.originalSize.width/this.originalSize.height||1;a=e(".ui-resizable-"+this.axis).css("cursor");e("body").css("cursor",a=="auto"?this.axis+"-resize":a);d.addClass("ui-resizable-resizing");this._propagate("start",b);return true},_mouseDrag:function(b){var a=this.helper,c=this.originalMousePosition,d=this._change[this.axis];if(!d)return false;c=d.apply(this,[b,b.pageX-c.left||0,b.pageY-c.top||0]);if(this._aspectRatio||b.shiftKey)c=this._updateRatio(c,b);c=this._respectSize(c,b);this._propagate("resize",
b);a.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"});!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize();this._updateCache(c);this._trigger("resize",b,this.ui());return false},_mouseStop:function(b){this.resizing=false;var a=this.options,c=this;if(this._helper){var d=this._proportionallyResizeElements,f=d.length&&/textarea/i.test(d[0].nodeName);d=f&&e.ui.hasScroll(d[0],"left")?0:c.sizeDiff.height;
f=f?0:c.sizeDiff.width;f={width:c.helper.width()-f,height:c.helper.height()-d};d=parseInt(c.element.css("left"),10)+(c.position.left-c.originalPosition.left)||null;var g=parseInt(c.element.css("top"),10)+(c.position.top-c.originalPosition.top)||null;a.animate||this.element.css(e.extend(f,{top:g,left:d}));c.helper.height(c.size.height);c.helper.width(c.size.width);this._helper&&!a.animate&&this._proportionallyResize()}e("body").css("cursor","auto");this.element.removeClass("ui-resizable-resizing");
this._propagate("stop",b);this._helper&&this.helper.remove();return false},_updateCache:function(b){this.offset=this.helper.offset();if(l(b.left))this.position.left=b.left;if(l(b.top))this.position.top=b.top;if(l(b.height))this.size.height=b.height;if(l(b.width))this.size.width=b.width},_updateRatio:function(b){var a=this.position,c=this.size,d=this.axis;if(b.height)b.width=c.height*this.aspectRatio;else if(b.width)b.height=c.width/this.aspectRatio;if(d=="sw"){b.left=a.left+(c.width-b.width);b.top=
null}if(d=="nw"){b.top=a.top+(c.height-b.height);b.left=a.left+(c.width-b.width)}return b},_respectSize:function(b){var a=this.options,c=this.axis,d=l(b.width)&&a.maxWidth&&a.maxWidth<b.width,f=l(b.height)&&a.maxHeight&&a.maxHeight<b.height,g=l(b.width)&&a.minWidth&&a.minWidth>b.width,h=l(b.height)&&a.minHeight&&a.minHeight>b.height;if(g)b.width=a.minWidth;if(h)b.height=a.minHeight;if(d)b.width=a.maxWidth;if(f)b.height=a.maxHeight;var i=this.originalPosition.left+this.originalSize.width,j=this.position.top+
this.size.height,k=/sw|nw|w/.test(c);c=/nw|ne|n/.test(c);if(g&&k)b.left=i-a.minWidth;if(d&&k)b.left=i-a.maxWidth;if(h&&c)b.top=j-a.minHeight;if(f&&c)b.top=j-a.maxHeight;if((a=!b.width&&!b.height)&&!b.left&&b.top)b.top=null;else if(a&&!b.top&&b.left)b.left=null;return b},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var b=this.helper||this.element,a=0;a<this._proportionallyResizeElements.length;a++){var c=this._proportionallyResizeElements[a];if(!this.borderDif){var d=
[c.css("borderTopWidth"),c.css("borderRightWidth"),c.css("borderBottomWidth"),c.css("borderLeftWidth")],f=[c.css("paddingTop"),c.css("paddingRight"),c.css("paddingBottom"),c.css("paddingLeft")];this.borderDif=e.map(d,function(g,h){g=parseInt(g,10)||0;h=parseInt(f[h],10)||0;return g+h})}e.browser.msie&&(e(b).is(":hidden")||e(b).parents(":hidden").length)||c.css({height:b.height()-this.borderDif[0]-this.borderDif[2]||0,width:b.width()-this.borderDif[1]-this.borderDif[3]||0})}},_renderProxy:function(){var b=
this.options;this.elementOffset=this.element.offset();if(this._helper){this.helper=this.helper||e('<div style="overflow:hidden;"></div>');var a=e.browser.msie&&e.browser.version<7,c=a?1:0;a=a?2:-1;this.helper.addClass(this._helper).css({width:this.element.outerWidth()+a,height:this.element.outerHeight()+a,position:"absolute",left:this.elementOffset.left-c+"px",top:this.elementOffset.top-c+"px",zIndex:++b.zIndex});this.helper.appendTo("body").disableSelection()}else this.helper=this.element},_change:{e:function(b,
a){return{width:this.originalSize.width+a}},w:function(b,a){return{left:this.originalPosition.left+a,width:this.originalSize.width-a}},n:function(b,a,c){return{top:this.originalPosition.top+c,height:this.originalSize.height-c}},s:function(b,a,c){return{height:this.originalSize.height+c}},se:function(b,a,c){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[b,a,c]))},sw:function(b,a,c){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[b,a,
c]))},ne:function(b,a,c){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[b,a,c]))},nw:function(b,a,c){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[b,a,c]))}},_propagate:function(b,a){e.ui.plugin.call(this,b,[a,this.ui()]);b!="resize"&&this._trigger(b,a,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,
originalPosition:this.originalPosition}}});e.extend(e.ui.resizable,{version:"1.8.11"});e.ui.plugin.add("resizable","alsoResize",{start:function(){var b=e(this).data("resizable").options,a=function(c){e(c).each(function(){var d=e(this);d.data("resizable-alsoresize",{width:parseInt(d.width(),10),height:parseInt(d.height(),10),left:parseInt(d.css("left"),10),top:parseInt(d.css("top"),10),position:d.css("position")})})};if(typeof b.alsoResize=="object"&&!b.alsoResize.parentNode)if(b.alsoResize.length){b.alsoResize=
b.alsoResize[0];a(b.alsoResize)}else e.each(b.alsoResize,function(c){a(c)});else a(b.alsoResize)},resize:function(b,a){var c=e(this).data("resizable");b=c.options;var d=c.originalSize,f=c.originalPosition,g={height:c.size.height-d.height||0,width:c.size.width-d.width||0,top:c.position.top-f.top||0,left:c.position.left-f.left||0},h=function(i,j){e(i).each(function(){var k=e(this),q=e(this).data("resizable-alsoresize"),p={},r=j&&j.length?j:k.parents(a.originalElement[0]).length?["width","height"]:["width",
"height","top","left"];e.each(r,function(n,o){if((n=(q[o]||0)+(g[o]||0))&&n>=0)p[o]=n||null});if(e.browser.opera&&/relative/.test(k.css("position"))){c._revertToRelativePosition=true;k.css({position:"absolute",top:"auto",left:"auto"})}k.css(p)})};typeof b.alsoResize=="object"&&!b.alsoResize.nodeType?e.each(b.alsoResize,function(i,j){h(i,j)}):h(b.alsoResize)},stop:function(){var b=e(this).data("resizable"),a=b.options,c=function(d){e(d).each(function(){var f=e(this);f.css({position:f.data("resizable-alsoresize").position})})};
if(b._revertToRelativePosition){b._revertToRelativePosition=false;typeof a.alsoResize=="object"&&!a.alsoResize.nodeType?e.each(a.alsoResize,function(d){c(d)}):c(a.alsoResize)}e(this).removeData("resizable-alsoresize")}});e.ui.plugin.add("resizable","animate",{stop:function(b){var a=e(this).data("resizable"),c=a.options,d=a._proportionallyResizeElements,f=d.length&&/textarea/i.test(d[0].nodeName),g=f&&e.ui.hasScroll(d[0],"left")?0:a.sizeDiff.height;f={width:a.size.width-(f?0:a.sizeDiff.width),height:a.size.height-
g};g=parseInt(a.element.css("left"),10)+(a.position.left-a.originalPosition.left)||null;var h=parseInt(a.element.css("top"),10)+(a.position.top-a.originalPosition.top)||null;a.element.animate(e.extend(f,h&&g?{top:h,left:g}:{}),{duration:c.animateDuration,easing:c.animateEasing,step:function(){var i={width:parseInt(a.element.css("width"),10),height:parseInt(a.element.css("height"),10),top:parseInt(a.element.css("top"),10),left:parseInt(a.element.css("left"),10)};d&&d.length&&e(d[0]).css({width:i.width,
height:i.height});a._updateCache(i);a._propagate("resize",b)}})}});e.ui.plugin.add("resizable","containment",{start:function(){var b=e(this).data("resizable"),a=b.element,c=b.options.containment;if(a=c instanceof e?c.get(0):/parent/.test(c)?a.parent().get(0):c){b.containerElement=e(a);if(/document/.test(c)||c==document){b.containerOffset={left:0,top:0};b.containerPosition={left:0,top:0};b.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}}else{var d=
e(a),f=[];e(["Top","Right","Left","Bottom"]).each(function(i,j){f[i]=m(d.css("padding"+j))});b.containerOffset=d.offset();b.containerPosition=d.position();b.containerSize={height:d.innerHeight()-f[3],width:d.innerWidth()-f[1]};c=b.containerOffset;var g=b.containerSize.height,h=b.containerSize.width;h=e.ui.hasScroll(a,"left")?a.scrollWidth:h;g=e.ui.hasScroll(a)?a.scrollHeight:g;b.parentData={element:a,left:c.left,top:c.top,width:h,height:g}}}},resize:function(b){var a=e(this).data("resizable"),c=a.options,
d=a.containerOffset,f=a.position;b=a._aspectRatio||b.shiftKey;var g={top:0,left:0},h=a.containerElement;if(h[0]!=document&&/static/.test(h.css("position")))g=d;if(f.left<(a._helper?d.left:0)){a.size.width+=a._helper?a.position.left-d.left:a.position.left-g.left;if(b)a.size.height=a.size.width/c.aspectRatio;a.position.left=c.helper?d.left:0}if(f.top<(a._helper?d.top:0)){a.size.height+=a._helper?a.position.top-d.top:a.position.top;if(b)a.size.width=a.size.height*c.aspectRatio;a.position.top=a._helper?
d.top:0}a.offset.left=a.parentData.left+a.position.left;a.offset.top=a.parentData.top+a.position.top;c=Math.abs((a._helper?a.offset.left-g.left:a.offset.left-g.left)+a.sizeDiff.width);d=Math.abs((a._helper?a.offset.top-g.top:a.offset.top-d.top)+a.sizeDiff.height);f=a.containerElement.get(0)==a.element.parent().get(0);g=/relative|absolute/.test(a.containerElement.css("position"));if(f&&g)c-=a.parentData.left;if(c+a.size.width>=a.parentData.width){a.size.width=a.parentData.width-c;if(b)a.size.height=
a.size.width/a.aspectRatio}if(d+a.size.height>=a.parentData.height){a.size.height=a.parentData.height-d;if(b)a.size.width=a.size.height*a.aspectRatio}},stop:function(){var b=e(this).data("resizable"),a=b.options,c=b.containerOffset,d=b.containerPosition,f=b.containerElement,g=e(b.helper),h=g.offset(),i=g.outerWidth()-b.sizeDiff.width;g=g.outerHeight()-b.sizeDiff.height;b._helper&&!a.animate&&/relative/.test(f.css("position"))&&e(this).css({left:h.left-d.left-c.left,width:i,height:g});b._helper&&!a.animate&&
/static/.test(f.css("position"))&&e(this).css({left:h.left-d.left-c.left,width:i,height:g})}});e.ui.plugin.add("resizable","ghost",{start:function(){var b=e(this).data("resizable"),a=b.options,c=b.size;b.ghost=b.originalElement.clone();b.ghost.css({opacity:0.25,display:"block",position:"relative",height:c.height,width:c.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof a.ghost=="string"?a.ghost:"");b.ghost.appendTo(b.helper)},resize:function(){var b=e(this).data("resizable");
b.ghost&&b.ghost.css({position:"relative",height:b.size.height,width:b.size.width})},stop:function(){var b=e(this).data("resizable");b.ghost&&b.helper&&b.helper.get(0).removeChild(b.ghost.get(0))}});e.ui.plugin.add("resizable","grid",{resize:function(){var b=e(this).data("resizable"),a=b.options,c=b.size,d=b.originalSize,f=b.originalPosition,g=b.axis;a.grid=typeof a.grid=="number"?[a.grid,a.grid]:a.grid;var h=Math.round((c.width-d.width)/(a.grid[0]||1))*(a.grid[0]||1);a=Math.round((c.height-d.height)/
(a.grid[1]||1))*(a.grid[1]||1);if(/^(se|s|e)$/.test(g)){b.size.width=d.width+h;b.size.height=d.height+a}else if(/^(ne)$/.test(g)){b.size.width=d.width+h;b.size.height=d.height+a;b.position.top=f.top-a}else{if(/^(sw)$/.test(g)){b.size.width=d.width+h;b.size.height=d.height+a}else{b.size.width=d.width+h;b.size.height=d.height+a;b.position.top=f.top-a}b.position.left=f.left-h}}});var m=function(b){return parseInt(b,10)||0},l=function(b){return!isNaN(parseInt(b,10))}})(jQuery);
;/*
 * jQuery UI Selectable 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Selectables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(e){e.widget("ui.selectable",e.ui.mouse,{options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch"},_create:function(){var c=this;this.element.addClass("ui-selectable");this.dragged=false;var f;this.refresh=function(){f=e(c.options.filter,c.element[0]);f.each(function(){var d=e(this),b=d.offset();e.data(this,"selectable-item",{element:this,$element:d,left:b.left,top:b.top,right:b.left+d.outerWidth(),bottom:b.top+d.outerHeight(),startselected:false,selected:d.hasClass("ui-selected"),
selecting:d.hasClass("ui-selecting"),unselecting:d.hasClass("ui-unselecting")})})};this.refresh();this.selectees=f.addClass("ui-selectee");this._mouseInit();this.helper=e("<div class='ui-selectable-helper'></div>")},destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable");this._mouseDestroy();return this},_mouseStart:function(c){var f=this;this.opos=[c.pageX,
c.pageY];if(!this.options.disabled){var d=this.options;this.selectees=e(d.filter,this.element[0]);this._trigger("start",c);e(d.appendTo).append(this.helper);this.helper.css({left:c.clientX,top:c.clientY,width:0,height:0});d.autoRefresh&&this.refresh();this.selectees.filter(".ui-selected").each(function(){var b=e.data(this,"selectable-item");b.startselected=true;if(!c.metaKey){b.$element.removeClass("ui-selected");b.selected=false;b.$element.addClass("ui-unselecting");b.unselecting=true;f._trigger("unselecting",
c,{unselecting:b.element})}});e(c.target).parents().andSelf().each(function(){var b=e.data(this,"selectable-item");if(b){var g=!c.metaKey||!b.$element.hasClass("ui-selected");b.$element.removeClass(g?"ui-unselecting":"ui-selected").addClass(g?"ui-selecting":"ui-unselecting");b.unselecting=!g;b.selecting=g;(b.selected=g)?f._trigger("selecting",c,{selecting:b.element}):f._trigger("unselecting",c,{unselecting:b.element});return false}})}},_mouseDrag:function(c){var f=this;this.dragged=true;if(!this.options.disabled){var d=
this.options,b=this.opos[0],g=this.opos[1],h=c.pageX,i=c.pageY;if(b>h){var j=h;h=b;b=j}if(g>i){j=i;i=g;g=j}this.helper.css({left:b,top:g,width:h-b,height:i-g});this.selectees.each(function(){var a=e.data(this,"selectable-item");if(!(!a||a.element==f.element[0])){var k=false;if(d.tolerance=="touch")k=!(a.left>h||a.right<b||a.top>i||a.bottom<g);else if(d.tolerance=="fit")k=a.left>b&&a.right<h&&a.top>g&&a.bottom<i;if(k){if(a.selected){a.$element.removeClass("ui-selected");a.selected=false}if(a.unselecting){a.$element.removeClass("ui-unselecting");
a.unselecting=false}if(!a.selecting){a.$element.addClass("ui-selecting");a.selecting=true;f._trigger("selecting",c,{selecting:a.element})}}else{if(a.selecting)if(c.metaKey&&a.startselected){a.$element.removeClass("ui-selecting");a.selecting=false;a.$element.addClass("ui-selected");a.selected=true}else{a.$element.removeClass("ui-selecting");a.selecting=false;if(a.startselected){a.$element.addClass("ui-unselecting");a.unselecting=true}f._trigger("unselecting",c,{unselecting:a.element})}if(a.selected)if(!c.metaKey&&
!a.startselected){a.$element.removeClass("ui-selected");a.selected=false;a.$element.addClass("ui-unselecting");a.unselecting=true;f._trigger("unselecting",c,{unselecting:a.element})}}}});return false}},_mouseStop:function(c){var f=this;this.dragged=false;e(".ui-unselecting",this.element[0]).each(function(){var d=e.data(this,"selectable-item");d.$element.removeClass("ui-unselecting");d.unselecting=false;d.startselected=false;f._trigger("unselected",c,{unselected:d.element})});e(".ui-selecting",this.element[0]).each(function(){var d=
e.data(this,"selectable-item");d.$element.removeClass("ui-selecting").addClass("ui-selected");d.selecting=false;d.selected=true;d.startselected=true;f._trigger("selected",c,{selected:d.element})});this._trigger("stop",c);this.helper.remove();return false}});e.extend(e.ui.selectable,{version:"1.8.11"})})(jQuery);
;/*
 * jQuery UI Sortable 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Sortables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(d){d.widget("ui.sortable",d.ui.mouse,{widgetEventPrefix:"sort",options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1E3},_create:function(){this.containerCache={};this.element.addClass("ui-sortable");
this.refresh();this.floating=this.items.length?/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):false;this.offset=this.element.offset();this._mouseInit()},destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable");this._mouseDestroy();for(var a=this.items.length-1;a>=0;a--)this.items[a].item.removeData("sortable-item");return this},_setOption:function(a,b){if(a==="disabled"){this.options[a]=
b;this.widget()[b?"addClass":"removeClass"]("ui-sortable-disabled")}else d.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(a,b){if(this.reverting)return false;if(this.options.disabled||this.options.type=="static")return false;this._refreshItems(a);var c=null,e=this;d(a.target).parents().each(function(){if(d.data(this,"sortable-item")==e){c=d(this);return false}});if(d.data(a.target,"sortable-item")==e)c=d(a.target);if(!c)return false;if(this.options.handle&&!b){var f=false;
d(this.options.handle,c).find("*").andSelf().each(function(){if(this==a.target)f=true});if(!f)return false}this.currentItem=c;this._removeCurrentsFromItems();return true},_mouseStart:function(a,b,c){b=this.options;var e=this;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(a);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-
this.margins.left};this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");d.extend(this.offset,{click:{left:a.pageX-this.offset.left,top:a.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this._generatePosition(a);this.originalPageX=a.pageX;this.originalPageY=a.pageY;b.cursorAt&&this._adjustOffsetFromHelper(b.cursorAt);this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};
this.helper[0]!=this.currentItem[0]&&this.currentItem.hide();this._createPlaceholder();b.containment&&this._setContainment();if(b.cursor){if(d("body").css("cursor"))this._storedCursor=d("body").css("cursor");d("body").css("cursor",b.cursor)}if(b.opacity){if(this.helper.css("opacity"))this._storedOpacity=this.helper.css("opacity");this.helper.css("opacity",b.opacity)}if(b.zIndex){if(this.helper.css("zIndex"))this._storedZIndex=this.helper.css("zIndex");this.helper.css("zIndex",b.zIndex)}if(this.scrollParent[0]!=
document&&this.scrollParent[0].tagName!="HTML")this.overflowOffset=this.scrollParent.offset();this._trigger("start",a,this._uiHash());this._preserveHelperProportions||this._cacheHelperProportions();if(!c)for(c=this.containers.length-1;c>=0;c--)this.containers[c]._trigger("activate",a,e._uiHash(this));if(d.ui.ddmanager)d.ui.ddmanager.current=this;d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,a);this.dragging=true;this.helper.addClass("ui-sortable-helper");this._mouseDrag(a);
return true},_mouseDrag:function(a){this.position=this._generatePosition(a);this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs)this.lastPositionAbs=this.positionAbs;if(this.options.scroll){var b=this.options,c=false;if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){if(this.overflowOffset.top+this.scrollParent[0].offsetHeight-a.pageY<b.scrollSensitivity)this.scrollParent[0].scrollTop=c=this.scrollParent[0].scrollTop+b.scrollSpeed;else if(a.pageY-this.overflowOffset.top<
b.scrollSensitivity)this.scrollParent[0].scrollTop=c=this.scrollParent[0].scrollTop-b.scrollSpeed;if(this.overflowOffset.left+this.scrollParent[0].offsetWidth-a.pageX<b.scrollSensitivity)this.scrollParent[0].scrollLeft=c=this.scrollParent[0].scrollLeft+b.scrollSpeed;else if(a.pageX-this.overflowOffset.left<b.scrollSensitivity)this.scrollParent[0].scrollLeft=c=this.scrollParent[0].scrollLeft-b.scrollSpeed}else{if(a.pageY-d(document).scrollTop()<b.scrollSensitivity)c=d(document).scrollTop(d(document).scrollTop()-
b.scrollSpeed);else if(d(window).height()-(a.pageY-d(document).scrollTop())<b.scrollSensitivity)c=d(document).scrollTop(d(document).scrollTop()+b.scrollSpeed);if(a.pageX-d(document).scrollLeft()<b.scrollSensitivity)c=d(document).scrollLeft(d(document).scrollLeft()-b.scrollSpeed);else if(d(window).width()-(a.pageX-d(document).scrollLeft())<b.scrollSensitivity)c=d(document).scrollLeft(d(document).scrollLeft()+b.scrollSpeed)}c!==false&&d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,
a)}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";for(b=this.items.length-1;b>=0;b--){c=this.items[b];var e=c.item[0],f=this._intersectsWithPointer(c);if(f)if(e!=this.currentItem[0]&&this.placeholder[f==1?"next":"prev"]()[0]!=e&&!d.ui.contains(this.placeholder[0],e)&&(this.options.type=="semi-dynamic"?!d.ui.contains(this.element[0],
e):true)){this.direction=f==1?"down":"up";if(this.options.tolerance=="pointer"||this._intersectsWithSides(c))this._rearrange(a,c);else break;this._trigger("change",a,this._uiHash());break}}this._contactContainers(a);d.ui.ddmanager&&d.ui.ddmanager.drag(this,a);this._trigger("sort",a,this._uiHash());this.lastPositionAbs=this.positionAbs;return false},_mouseStop:function(a,b){if(a){d.ui.ddmanager&&!this.options.dropBehaviour&&d.ui.ddmanager.drop(this,a);if(this.options.revert){var c=this;b=c.placeholder.offset();
c.reverting=true;d(this.helper).animate({left:b.left-this.offset.parent.left-c.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:b.top-this.offset.parent.top-c.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){c._clear(a)})}else this._clear(a,b);return false}},cancel:function(){var a=this;if(this.dragging){this._mouseUp({target:null});this.options.helper=="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):
this.currentItem.show();for(var b=this.containers.length-1;b>=0;b--){this.containers[b]._trigger("deactivate",null,a._uiHash(this));if(this.containers[b].containerCache.over){this.containers[b]._trigger("out",null,a._uiHash(this));this.containers[b].containerCache.over=0}}}if(this.placeholder){this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]);this.options.helper!="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove();d.extend(this,{helper:null,
dragging:false,reverting:false,_noFinalSort:null});this.domPosition.prev?d(this.domPosition.prev).after(this.currentItem):d(this.domPosition.parent).prepend(this.currentItem)}return this},serialize:function(a){var b=this._getItemsAsjQuery(a&&a.connected),c=[];a=a||{};d(b).each(function(){var e=(d(a.item||this).attr(a.attribute||"id")||"").match(a.expression||/(.+)[-=_](.+)/);if(e)c.push((a.key||e[1]+"[]")+"="+(a.key&&a.expression?e[1]:e[2]))});!c.length&&a.key&&c.push(a.key+"=");return c.join("&")},
toArray:function(a){var b=this._getItemsAsjQuery(a&&a.connected),c=[];a=a||{};b.each(function(){c.push(d(a.item||this).attr(a.attribute||"id")||"")});return c},_intersectsWith:function(a){var b=this.positionAbs.left,c=b+this.helperProportions.width,e=this.positionAbs.top,f=e+this.helperProportions.height,g=a.left,h=g+a.width,i=a.top,k=i+a.height,j=this.offset.click.top,l=this.offset.click.left;j=e+j>i&&e+j<k&&b+l>g&&b+l<h;return this.options.tolerance=="pointer"||this.options.forcePointerForContainers||
this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>a[this.floating?"width":"height"]?j:g<b+this.helperProportions.width/2&&c-this.helperProportions.width/2<h&&i<e+this.helperProportions.height/2&&f-this.helperProportions.height/2<k},_intersectsWithPointer:function(a){var b=d.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,a.top,a.height);a=d.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,a.left,a.width);b=b&&a;a=this._getDragVerticalDirection();
var c=this._getDragHorizontalDirection();if(!b)return false;return this.floating?c&&c=="right"||a=="down"?2:1:a&&(a=="down"?2:1)},_intersectsWithSides:function(a){var b=d.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,a.top+a.height/2,a.height);a=d.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,a.left+a.width/2,a.width);var c=this._getDragVerticalDirection(),e=this._getDragHorizontalDirection();return this.floating&&e?e=="right"&&a||e=="left"&&!a:c&&(c=="down"&&b||c=="up"&&!b)},
_getDragVerticalDirection:function(){var a=this.positionAbs.top-this.lastPositionAbs.top;return a!=0&&(a>0?"down":"up")},_getDragHorizontalDirection:function(){var a=this.positionAbs.left-this.lastPositionAbs.left;return a!=0&&(a>0?"right":"left")},refresh:function(a){this._refreshItems(a);this.refreshPositions();return this},_connectWith:function(){var a=this.options;return a.connectWith.constructor==String?[a.connectWith]:a.connectWith},_getItemsAsjQuery:function(a){var b=[],c=[],e=this._connectWith();
if(e&&a)for(a=e.length-1;a>=0;a--)for(var f=d(e[a]),g=f.length-1;g>=0;g--){var h=d.data(f[g],"sortable");if(h&&h!=this&&!h.options.disabled)c.push([d.isFunction(h.options.items)?h.options.items.call(h.element):d(h.options.items,h.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),h])}c.push([d.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):d(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),
this]);for(a=c.length-1;a>=0;a--)c[a][0].each(function(){b.push(this)});return d(b)},_removeCurrentsFromItems:function(){for(var a=this.currentItem.find(":data(sortable-item)"),b=0;b<this.items.length;b++)for(var c=0;c<a.length;c++)a[c]==this.items[b].item[0]&&this.items.splice(b,1)},_refreshItems:function(a){this.items=[];this.containers=[this];var b=this.items,c=[[d.isFunction(this.options.items)?this.options.items.call(this.element[0],a,{item:this.currentItem}):d(this.options.items,this.element),
this]],e=this._connectWith();if(e)for(var f=e.length-1;f>=0;f--)for(var g=d(e[f]),h=g.length-1;h>=0;h--){var i=d.data(g[h],"sortable");if(i&&i!=this&&!i.options.disabled){c.push([d.isFunction(i.options.items)?i.options.items.call(i.element[0],a,{item:this.currentItem}):d(i.options.items,i.element),i]);this.containers.push(i)}}for(f=c.length-1;f>=0;f--){a=c[f][1];e=c[f][0];h=0;for(g=e.length;h<g;h++){i=d(e[h]);i.data("sortable-item",a);b.push({item:i,instance:a,width:0,height:0,left:0,top:0})}}},refreshPositions:function(a){if(this.offsetParent&&
this.helper)this.offset.parent=this._getParentOffset();for(var b=this.items.length-1;b>=0;b--){var c=this.items[b],e=this.options.toleranceElement?d(this.options.toleranceElement,c.item):c.item;if(!a){c.width=e.outerWidth();c.height=e.outerHeight()}e=e.offset();c.left=e.left;c.top=e.top}if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(b=this.containers.length-1;b>=0;b--){e=this.containers[b].element.offset();this.containers[b].containerCache.left=
e.left;this.containers[b].containerCache.top=e.top;this.containers[b].containerCache.width=this.containers[b].element.outerWidth();this.containers[b].containerCache.height=this.containers[b].element.outerHeight()}return this},_createPlaceholder:function(a){var b=a||this,c=b.options;if(!c.placeholder||c.placeholder.constructor==String){var e=c.placeholder;c.placeholder={element:function(){var f=d(document.createElement(b.currentItem[0].nodeName)).addClass(e||b.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
if(!e)f.style.visibility="hidden";return f},update:function(f,g){if(!(e&&!c.forcePlaceholderSize)){g.height()||g.height(b.currentItem.innerHeight()-parseInt(b.currentItem.css("paddingTop")||0,10)-parseInt(b.currentItem.css("paddingBottom")||0,10));g.width()||g.width(b.currentItem.innerWidth()-parseInt(b.currentItem.css("paddingLeft")||0,10)-parseInt(b.currentItem.css("paddingRight")||0,10))}}}}b.placeholder=d(c.placeholder.element.call(b.element,b.currentItem));b.currentItem.after(b.placeholder);
c.placeholder.update(b,b.placeholder)},_contactContainers:function(a){for(var b=null,c=null,e=this.containers.length-1;e>=0;e--)if(!d.ui.contains(this.currentItem[0],this.containers[e].element[0]))if(this._intersectsWith(this.containers[e].containerCache)){if(!(b&&d.ui.contains(this.containers[e].element[0],b.element[0]))){b=this.containers[e];c=e}}else if(this.containers[e].containerCache.over){this.containers[e]._trigger("out",a,this._uiHash(this));this.containers[e].containerCache.over=0}if(b)if(this.containers.length===
1){this.containers[c]._trigger("over",a,this._uiHash(this));this.containers[c].containerCache.over=1}else if(this.currentContainer!=this.containers[c]){b=1E4;e=null;for(var f=this.positionAbs[this.containers[c].floating?"left":"top"],g=this.items.length-1;g>=0;g--)if(d.ui.contains(this.containers[c].element[0],this.items[g].item[0])){var h=this.items[g][this.containers[c].floating?"left":"top"];if(Math.abs(h-f)<b){b=Math.abs(h-f);e=this.items[g]}}if(e||this.options.dropOnEmpty){this.currentContainer=
this.containers[c];e?this._rearrange(a,e,null,true):this._rearrange(a,null,this.containers[c].element,true);this._trigger("change",a,this._uiHash());this.containers[c]._trigger("change",a,this._uiHash(this));this.options.placeholder.update(this.currentContainer,this.placeholder);this.containers[c]._trigger("over",a,this._uiHash(this));this.containers[c].containerCache.over=1}}},_createHelper:function(a){var b=this.options;a=d.isFunction(b.helper)?d(b.helper.apply(this.element[0],[a,this.currentItem])):
b.helper=="clone"?this.currentItem.clone():this.currentItem;a.parents("body").length||d(b.appendTo!="parent"?b.appendTo:this.currentItem[0].parentNode)[0].appendChild(a[0]);if(a[0]==this.currentItem[0])this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")};if(a[0].style.width==""||b.forceHelperSize)a.width(this.currentItem.width());if(a[0].style.height==
""||b.forceHelperSize)a.height(this.currentItem.height());return a},_adjustOffsetFromHelper:function(a){if(typeof a=="string")a=a.split(" ");if(d.isArray(a))a={left:+a[0],top:+a[1]||0};if("left"in a)this.offset.click.left=a.left+this.margins.left;if("right"in a)this.offset.click.left=this.helperProportions.width-a.right+this.margins.left;if("top"in a)this.offset.click.top=a.top+this.margins.top;if("bottom"in a)this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top},_getParentOffset:function(){this.offsetParent=
this.helper.offsetParent();var a=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0])){a.left+=this.scrollParent.scrollLeft();a.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&d.browser.msie)a={top:0,left:0};return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),
10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.currentItem.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions=
{width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var a=this.options;if(a.containment=="parent")a.containment=this.helper[0].parentNode;if(a.containment=="document"||a.containment=="window")this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,d(a.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(d(a.containment=="document"?document:window).height()||
document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(a.containment)){var b=d(a.containment)[0];a=d(a.containment).offset();var c=d(b).css("overflow")!="hidden";this.containment=[a.left+(parseInt(d(b).css("borderLeftWidth"),10)||0)+(parseInt(d(b).css("paddingLeft"),10)||0)-this.margins.left,a.top+(parseInt(d(b).css("borderTopWidth"),10)||0)+(parseInt(d(b).css("paddingTop"),10)||0)-this.margins.top,a.left+(c?Math.max(b.scrollWidth,
b.offsetWidth):b.offsetWidth)-(parseInt(d(b).css("borderLeftWidth"),10)||0)-(parseInt(d(b).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,a.top+(c?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(d(b).css("borderTopWidth"),10)||0)-(parseInt(d(b).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(a,b){if(!b)b=this.position;a=a=="absolute"?1:-1;var c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=
document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(c[0].tagName);return{top:b.top+this.offset.relative.top*a+this.offset.parent.top*a-(d.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:c.scrollTop())*a),left:b.left+this.offset.relative.left*a+this.offset.parent.left*a-(d.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():
e?0:c.scrollLeft())*a)}},_generatePosition:function(a){var b=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(c[0].tagName);if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0]))this.offset.relative=this._getRelativeOffset();var f=a.pageX,g=a.pageY;if(this.originalPosition){if(this.containment){if(a.pageX-
this.offset.click.left<this.containment[0])f=this.containment[0]+this.offset.click.left;if(a.pageY-this.offset.click.top<this.containment[1])g=this.containment[1]+this.offset.click.top;if(a.pageX-this.offset.click.left>this.containment[2])f=this.containment[2]+this.offset.click.left;if(a.pageY-this.offset.click.top>this.containment[3])g=this.containment[3]+this.offset.click.top}if(b.grid){g=this.originalPageY+Math.round((g-this.originalPageY)/b.grid[1])*b.grid[1];g=this.containment?!(g-this.offset.click.top<
this.containment[1]||g-this.offset.click.top>this.containment[3])?g:!(g-this.offset.click.top<this.containment[1])?g-b.grid[1]:g+b.grid[1]:g;f=this.originalPageX+Math.round((f-this.originalPageX)/b.grid[0])*b.grid[0];f=this.containment?!(f-this.offset.click.left<this.containment[0]||f-this.offset.click.left>this.containment[2])?f:!(f-this.offset.click.left<this.containment[0])?f-b.grid[0]:f+b.grid[0]:f}}return{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(d.browser.safari&&
this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:c.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(d.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:c.scrollLeft())}},_rearrange:function(a,b,c,e){c?c[0].appendChild(this.placeholder[0]):b.item[0].parentNode.insertBefore(this.placeholder[0],this.direction=="down"?b.item[0]:b.item[0].nextSibling);this.counter=
this.counter?++this.counter:1;var f=this,g=this.counter;window.setTimeout(function(){g==f.counter&&f.refreshPositions(!e)},0)},_clear:function(a,b){this.reverting=false;var c=[];!this._noFinalSort&&this.currentItem[0].parentNode&&this.placeholder.before(this.currentItem);this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var e in this._storedCSS)if(this._storedCSS[e]=="auto"||this._storedCSS[e]=="static")this._storedCSS[e]="";this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();
this.fromOutside&&!b&&c.push(function(f){this._trigger("receive",f,this._uiHash(this.fromOutside))});if((this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!b)c.push(function(f){this._trigger("update",f,this._uiHash())});if(!d.ui.contains(this.element[0],this.currentItem[0])){b||c.push(function(f){this._trigger("remove",f,this._uiHash())});for(e=this.containers.length-1;e>=0;e--)if(d.ui.contains(this.containers[e].element[0],
this.currentItem[0])&&!b){c.push(function(f){return function(g){f._trigger("receive",g,this._uiHash(this))}}.call(this,this.containers[e]));c.push(function(f){return function(g){f._trigger("update",g,this._uiHash(this))}}.call(this,this.containers[e]))}}for(e=this.containers.length-1;e>=0;e--){b||c.push(function(f){return function(g){f._trigger("deactivate",g,this._uiHash(this))}}.call(this,this.containers[e]));if(this.containers[e].containerCache.over){c.push(function(f){return function(g){f._trigger("out",
g,this._uiHash(this))}}.call(this,this.containers[e]));this.containers[e].containerCache.over=0}}this._storedCursor&&d("body").css("cursor",this._storedCursor);this._storedOpacity&&this.helper.css("opacity",this._storedOpacity);if(this._storedZIndex)this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex);this.dragging=false;if(this.cancelHelperRemoval){if(!b){this._trigger("beforeStop",a,this._uiHash());for(e=0;e<c.length;e++)c[e].call(this,a);this._trigger("stop",a,this._uiHash())}return false}b||
this._trigger("beforeStop",a,this._uiHash());this.placeholder[0].parentNode.removeChild(this.placeholder[0]);this.helper[0]!=this.currentItem[0]&&this.helper.remove();this.helper=null;if(!b){for(e=0;e<c.length;e++)c[e].call(this,a);this._trigger("stop",a,this._uiHash())}this.fromOutside=false;return true},_trigger:function(){d.Widget.prototype._trigger.apply(this,arguments)===false&&this.cancel()},_uiHash:function(a){var b=a||this;return{helper:b.helper,placeholder:b.placeholder||d([]),position:b.position,
originalPosition:b.originalPosition,offset:b.positionAbs,item:b.currentItem,sender:a?a.element:null}}});d.extend(d.ui.sortable,{version:"1.8.11"})})(jQuery);
;/*
 * jQuery UI Accordion 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Accordion
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function(c){c.widget("ui.accordion",{options:{active:0,animated:"slide",autoHeight:true,clearStyle:false,collapsible:false,event:"click",fillSpace:false,header:"> li > :first-child,> :not(li):even",icons:{header:"ui-icon-triangle-1-e",headerSelected:"ui-icon-triangle-1-s"},navigation:false,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase()}},_create:function(){var a=this,b=a.options;a.running=0;a.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix");
a.headers=a.element.find(b.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){b.disabled||c(this).addClass("ui-state-hover")}).bind("mouseleave.accordion",function(){b.disabled||c(this).removeClass("ui-state-hover")}).bind("focus.accordion",function(){b.disabled||c(this).addClass("ui-state-focus")}).bind("blur.accordion",function(){b.disabled||c(this).removeClass("ui-state-focus")});a.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");
if(b.navigation){var d=a.element.find("a").filter(b.navigationFilter).eq(0);if(d.length){var h=d.closest(".ui-accordion-header");a.active=h.length?h:d.closest(".ui-accordion-content").prev()}}a.active=a._findActive(a.active||b.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");a.active.next().addClass("ui-accordion-content-active");a._createIcons();a.resize();a.element.attr("role","tablist");a.headers.attr("role","tab").bind("keydown.accordion",
function(f){return a._keydown(f)}).next().attr("role","tabpanel");a.headers.not(a.active||"").attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).next().hide();a.active.length?a.active.attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}):a.headers.eq(0).attr("tabIndex",0);c.browser.safari||a.headers.find("a").attr("tabIndex",-1);b.event&&a.headers.bind(b.event.split(" ").join(".accordion ")+".accordion",function(f){a._clickHandler.call(a,f,this);f.preventDefault()})},_createIcons:function(){var a=
this.options;if(a.icons){c("<span></span>").addClass("ui-icon "+a.icons.header).prependTo(this.headers);this.active.children(".ui-icon").toggleClass(a.icons.header).toggleClass(a.icons.headerSelected);this.element.addClass("ui-accordion-icons")}},_destroyIcons:function(){this.headers.children(".ui-icon").remove();this.element.removeClass("ui-accordion-icons")},destroy:function(){var a=this.options;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex");
this.headers.find("a").removeAttr("tabIndex");this._destroyIcons();var b=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");if(a.autoHeight||a.fillHeight)b.css("height","");return c.Widget.prototype.destroy.call(this)},_setOption:function(a,b){c.Widget.prototype._setOption.apply(this,arguments);a=="active"&&this.activate(b);if(a=="icons"){this._destroyIcons();
b&&this._createIcons()}if(a=="disabled")this.headers.add(this.headers.next())[b?"addClass":"removeClass"]("ui-accordion-disabled ui-state-disabled")},_keydown:function(a){if(!(this.options.disabled||a.altKey||a.ctrlKey)){var b=c.ui.keyCode,d=this.headers.length,h=this.headers.index(a.target),f=false;switch(a.keyCode){case b.RIGHT:case b.DOWN:f=this.headers[(h+1)%d];break;case b.LEFT:case b.UP:f=this.headers[(h-1+d)%d];break;case b.SPACE:case b.ENTER:this._clickHandler({target:a.target},a.target);
a.preventDefault()}if(f){c(a.target).attr("tabIndex",-1);c(f).attr("tabIndex",0);f.focus();return false}return true}},resize:function(){var a=this.options,b;if(a.fillSpace){if(c.browser.msie){var d=this.element.parent().css("overflow");this.element.parent().css("overflow","hidden")}b=this.element.parent().height();c.browser.msie&&this.element.parent().css("overflow",d);this.headers.each(function(){b-=c(this).outerHeight(true)});this.headers.next().each(function(){c(this).height(Math.max(0,b-c(this).innerHeight()+
c(this).height()))}).css("overflow","auto")}else if(a.autoHeight){b=0;this.headers.next().each(function(){b=Math.max(b,c(this).height("").height())}).height(b)}return this},activate:function(a){this.options.active=a;a=this._findActive(a)[0];this._clickHandler({target:a},a);return this},_findActive:function(a){return a?typeof a==="number"?this.headers.filter(":eq("+a+")"):this.headers.not(this.headers.not(a)):a===false?c([]):this.headers.filter(":eq(0)")},_clickHandler:function(a,b){var d=this.options;
if(!d.disabled)if(a.target){a=c(a.currentTarget||b);b=a[0]===this.active[0];d.active=d.collapsible&&b?false:this.headers.index(a);if(!(this.running||!d.collapsible&&b)){var h=this.active;j=a.next();g=this.active.next();e={options:d,newHeader:b&&d.collapsible?c([]):a,oldHeader:this.active,newContent:b&&d.collapsible?c([]):j,oldContent:g};var f=this.headers.index(this.active[0])>this.headers.index(a[0]);this.active=b?c([]):a;this._toggle(j,g,e,b,f);h.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);
if(!b){a.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(d.icons.header).addClass(d.icons.headerSelected);a.next().addClass("ui-accordion-content-active")}}}else if(d.collapsible){this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);this.active.next().addClass("ui-accordion-content-active");var g=this.active.next(),
e={options:d,newHeader:c([]),oldHeader:d.active,newContent:c([]),oldContent:g},j=this.active=c([]);this._toggle(j,g,e)}},_toggle:function(a,b,d,h,f){var g=this,e=g.options;g.toShow=a;g.toHide=b;g.data=d;var j=function(){if(g)return g._completed.apply(g,arguments)};g._trigger("changestart",null,g.data);g.running=b.size()===0?a.size():b.size();if(e.animated){d={};d=e.collapsible&&h?{toShow:c([]),toHide:b,complete:j,down:f,autoHeight:e.autoHeight||e.fillSpace}:{toShow:a,toHide:b,complete:j,down:f,autoHeight:e.autoHeight||
e.fillSpace};if(!e.proxied)e.proxied=e.animated;if(!e.proxiedDuration)e.proxiedDuration=e.duration;e.animated=c.isFunction(e.proxied)?e.proxied(d):e.proxied;e.duration=c.isFunction(e.proxiedDuration)?e.proxiedDuration(d):e.proxiedDuration;h=c.ui.accordion.animations;var i=e.duration,k=e.animated;if(k&&!h[k]&&!c.easing[k])k="slide";h[k]||(h[k]=function(l){this.slide(l,{easing:k,duration:i||700})});h[k](d)}else{if(e.collapsible&&h)a.toggle();else{b.hide();a.show()}j(true)}b.prev().attr({"aria-expanded":"false",
"aria-selected":"false",tabIndex:-1}).blur();a.prev().attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}).focus()},_completed:function(a){this.running=a?0:--this.running;if(!this.running){this.options.clearStyle&&this.toShow.add(this.toHide).css({height:"",overflow:""});this.toHide.removeClass("ui-accordion-content-active");if(this.toHide.length)this.toHide.parent()[0].className=this.toHide.parent()[0].className;this._trigger("change",null,this.data)}}});c.extend(c.ui.accordion,{version:"1.8.11",
animations:{slide:function(a,b){a=c.extend({easing:"swing",duration:300},a,b);if(a.toHide.size())if(a.toShow.size()){var d=a.toShow.css("overflow"),h=0,f={},g={},e;b=a.toShow;e=b[0].style.width;b.width(parseInt(b.parent().width(),10)-parseInt(b.css("paddingLeft"),10)-parseInt(b.css("paddingRight"),10)-(parseInt(b.css("borderLeftWidth"),10)||0)-(parseInt(b.css("borderRightWidth"),10)||0));c.each(["height","paddingTop","paddingBottom"],function(j,i){g[i]="hide";j=(""+c.css(a.toShow[0],i)).match(/^([\d+-.]+)(.*)$/);
f[i]={value:j[1],unit:j[2]||"px"}});a.toShow.css({height:0,overflow:"hidden"}).show();a.toHide.filter(":hidden").each(a.complete).end().filter(":visible").animate(g,{step:function(j,i){if(i.prop=="height")h=i.end-i.start===0?0:(i.now-i.start)/(i.end-i.start);a.toShow[0].style[i.prop]=h*f[i.prop].value+f[i.prop].unit},duration:a.duration,easing:a.easing,complete:function(){a.autoHeight||a.toShow.css("height","");a.toShow.css({width:e,overflow:d});a.complete()}})}else a.toHide.animate({height:"hide",
paddingTop:"hide",paddingBottom:"hide"},a);else a.toShow.animate({height:"show",paddingTop:"show",paddingBottom:"show"},a)},bounceslide:function(a){this.slide(a,{easing:a.down?"easeOutBounce":"swing",duration:a.down?1E3:200})}}})})(jQuery);
;/*
 * jQuery UI Autocomplete 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Autocomplete
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.position.js
 */
(function(d){var e=0;d.widget("ui.autocomplete",{options:{appendTo:"body",autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null},pending:0,_create:function(){var a=this,b=this.element[0].ownerDocument,g;this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(c){if(!(a.options.disabled||a.element.attr("readonly"))){g=
false;var f=d.ui.keyCode;switch(c.keyCode){case f.PAGE_UP:a._move("previousPage",c);break;case f.PAGE_DOWN:a._move("nextPage",c);break;case f.UP:a._move("previous",c);c.preventDefault();break;case f.DOWN:a._move("next",c);c.preventDefault();break;case f.ENTER:case f.NUMPAD_ENTER:if(a.menu.active){g=true;c.preventDefault()}case f.TAB:if(!a.menu.active)return;a.menu.select(c);break;case f.ESCAPE:a.element.val(a.term);a.close(c);break;default:clearTimeout(a.searching);a.searching=setTimeout(function(){if(a.term!=
a.element.val()){a.selectedItem=null;a.search(null,c)}},a.options.delay);break}}}).bind("keypress.autocomplete",function(c){if(g){g=false;c.preventDefault()}}).bind("focus.autocomplete",function(){if(!a.options.disabled){a.selectedItem=null;a.previous=a.element.val()}}).bind("blur.autocomplete",function(c){if(!a.options.disabled){clearTimeout(a.searching);a.closing=setTimeout(function(){a.close(c);a._change(c)},150)}});this._initSource();this.response=function(){return a._response.apply(a,arguments)};
this.menu=d("<ul></ul>").addClass("ui-autocomplete").appendTo(d(this.options.appendTo||"body",b)[0]).mousedown(function(c){var f=a.menu.element[0];d(c.target).closest(".ui-menu-item").length||setTimeout(function(){d(document).one("mousedown",function(h){h.target!==a.element[0]&&h.target!==f&&!d.ui.contains(f,h.target)&&a.close()})},1);setTimeout(function(){clearTimeout(a.closing)},13)}).menu({focus:function(c,f){f=f.item.data("item.autocomplete");false!==a._trigger("focus",c,{item:f})&&/^key/.test(c.originalEvent.type)&&
a.element.val(f.value)},selected:function(c,f){var h=f.item.data("item.autocomplete"),i=a.previous;if(a.element[0]!==b.activeElement){a.element.focus();a.previous=i;setTimeout(function(){a.previous=i;a.selectedItem=h},1)}false!==a._trigger("select",c,{item:h})&&a.element.val(h.value);a.term=a.element.val();a.close(c);a.selectedItem=h},blur:function(){a.menu.element.is(":visible")&&a.element.val()!==a.term&&a.element.val(a.term)}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu");
d.fn.bgiframe&&this.menu.element.bgiframe()},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");this.menu.element.remove();d.Widget.prototype.destroy.call(this)},_setOption:function(a,b){d.Widget.prototype._setOption.apply(this,arguments);a==="source"&&this._initSource();if(a==="appendTo")this.menu.element.appendTo(d(b||"body",this.element[0].ownerDocument)[0]);a==="disabled"&&
b&&this.xhr&&this.xhr.abort()},_initSource:function(){var a=this,b,g;if(d.isArray(this.options.source)){b=this.options.source;this.source=function(c,f){f(d.ui.autocomplete.filter(b,c.term))}}else if(typeof this.options.source==="string"){g=this.options.source;this.source=function(c,f){a.xhr&&a.xhr.abort();a.xhr=d.ajax({url:g,data:c,dataType:"json",autocompleteRequest:++e,success:function(h){this.autocompleteRequest===e&&f(h)},error:function(){this.autocompleteRequest===e&&f([])}})}}else this.source=
this.options.source},search:function(a,b){a=a!=null?a:this.element.val();this.term=this.element.val();if(a.length<this.options.minLength)return this.close(b);clearTimeout(this.closing);if(this._trigger("search",b)!==false)return this._search(a)},_search:function(a){this.pending++;this.element.addClass("ui-autocomplete-loading");this.source({term:a},this.response)},_response:function(a){if(!this.options.disabled&&a&&a.length){a=this._normalize(a);this._suggest(a);this._trigger("open")}else this.close();
this.pending--;this.pending||this.element.removeClass("ui-autocomplete-loading")},close:function(a){clearTimeout(this.closing);if(this.menu.element.is(":visible")){this.menu.element.hide();this.menu.deactivate();this._trigger("close",a)}},_change:function(a){this.previous!==this.element.val()&&this._trigger("change",a,{item:this.selectedItem})},_normalize:function(a){if(a.length&&a[0].label&&a[0].value)return a;return d.map(a,function(b){if(typeof b==="string")return{label:b,value:b};return d.extend({label:b.label||
b.value,value:b.value||b.label},b)})},_suggest:function(a){var b=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(b,a);this.menu.deactivate();this.menu.refresh();b.show();this._resizeMenu();b.position(d.extend({of:this.element},this.options.position));this.options.autoFocus&&this.menu.next(new d.Event("mouseover"))},_resizeMenu:function(){var a=this.menu.element;a.outerWidth(Math.max(a.width("").outerWidth(),this.element.outerWidth()))},_renderMenu:function(a,b){var g=this;
d.each(b,function(c,f){g._renderItem(a,f)})},_renderItem:function(a,b){return d("<li></li>").data("item.autocomplete",b).append(d("<a></a>").text(b.label)).appendTo(a)},_move:function(a,b){if(this.menu.element.is(":visible"))if(this.menu.first()&&/^previous/.test(a)||this.menu.last()&&/^next/.test(a)){this.element.val(this.term);this.menu.deactivate()}else this.menu[a](b);else this.search(null,b)},widget:function(){return this.menu.element}});d.extend(d.ui.autocomplete,{escapeRegex:function(a){return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,
"\\$&")},filter:function(a,b){var g=new RegExp(d.ui.autocomplete.escapeRegex(b),"i");return d.grep(a,function(c){return g.test(c.label||c.value||c)})}})})(jQuery);
(function(d){d.widget("ui.menu",{_create:function(){var e=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(a){if(d(a.target).closest(".ui-menu-item a").length){a.preventDefault();e.select(a)}});this.refresh()},refresh:function(){var e=this;this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem").children("a").addClass("ui-corner-all").attr("tabindex",
-1).mouseenter(function(a){e.activate(a,d(this).parent())}).mouseleave(function(){e.deactivate()})},activate:function(e,a){this.deactivate();if(this.hasScroll()){var b=a.offset().top-this.element.offset().top,g=this.element.attr("scrollTop"),c=this.element.height();if(b<0)this.element.attr("scrollTop",g+b);else b>=c&&this.element.attr("scrollTop",g+b-c+a.height())}this.active=a.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end();this._trigger("focus",e,{item:a})},
deactivate:function(){if(this.active){this.active.children("a").removeClass("ui-state-hover").removeAttr("id");this._trigger("blur");this.active=null}},next:function(e){this.move("next",".ui-menu-item:first",e)},previous:function(e){this.move("prev",".ui-menu-item:last",e)},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},move:function(e,a,b){if(this.active){e=this.active[e+"All"](".ui-menu-item").eq(0);
e.length?this.activate(b,e):this.activate(b,this.element.children(a))}else this.activate(b,this.element.children(a))},nextPage:function(e){if(this.hasScroll())if(!this.active||this.last())this.activate(e,this.element.children(".ui-menu-item:first"));else{var a=this.active.offset().top,b=this.element.height(),g=this.element.children(".ui-menu-item").filter(function(){var c=d(this).offset().top-a-b+d(this).height();return c<10&&c>-10});g.length||(g=this.element.children(".ui-menu-item:last"));this.activate(e,
g)}else this.activate(e,this.element.children(".ui-menu-item").filter(!this.active||this.last()?":first":":last"))},previousPage:function(e){if(this.hasScroll())if(!this.active||this.first())this.activate(e,this.element.children(".ui-menu-item:last"));else{var a=this.active.offset().top,b=this.element.height();result=this.element.children(".ui-menu-item").filter(function(){var g=d(this).offset().top-a+b-d(this).height();return g<10&&g>-10});result.length||(result=this.element.children(".ui-menu-item:first"));
this.activate(e,result)}else this.activate(e,this.element.children(".ui-menu-item").filter(!this.active||this.first()?":last":":first"))},hasScroll:function(){return this.element.height()<this.element.attr("scrollHeight")},select:function(e){this._trigger("selected",e,{item:this.active})}})})(jQuery);
;/*
 * jQuery UI Button 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Button
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function(a){var g,i=function(b){a(":ui-button",b.target.form).each(function(){var c=a(this).data("button");setTimeout(function(){c.refresh()},1)})},h=function(b){var c=b.name,d=b.form,f=a([]);if(c)f=d?a(d).find("[name='"+c+"']"):a("[name='"+c+"']",b.ownerDocument).filter(function(){return!this.form});return f};a.widget("ui.button",{options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset.button").bind("reset.button",
i);if(typeof this.options.disabled!=="boolean")this.options.disabled=this.element.attr("disabled");this._determineButtonType();this.hasTitle=!!this.buttonElement.attr("title");var b=this,c=this.options,d=this.type==="checkbox"||this.type==="radio",f="ui-state-hover"+(!d?" ui-state-active":"");if(c.label===null)c.label=this.buttonElement.html();if(this.element.is(":disabled"))c.disabled=true;this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role","button").bind("mouseenter.button",
function(){if(!c.disabled){a(this).addClass("ui-state-hover");this===g&&a(this).addClass("ui-state-active")}}).bind("mouseleave.button",function(){c.disabled||a(this).removeClass(f)}).bind("focus.button",function(){a(this).addClass("ui-state-focus")}).bind("blur.button",function(){a(this).removeClass("ui-state-focus")});d&&this.element.bind("change.button",function(){b.refresh()});if(this.type==="checkbox")this.buttonElement.bind("click.button",function(){if(c.disabled)return false;a(this).toggleClass("ui-state-active");
b.buttonElement.attr("aria-pressed",b.element[0].checked)});else if(this.type==="radio")this.buttonElement.bind("click.button",function(){if(c.disabled)return false;a(this).addClass("ui-state-active");b.buttonElement.attr("aria-pressed",true);var e=b.element[0];h(e).not(e).map(function(){return a(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed",false)});else{this.buttonElement.bind("mousedown.button",function(){if(c.disabled)return false;a(this).addClass("ui-state-active");
g=this;a(document).one("mouseup",function(){g=null})}).bind("mouseup.button",function(){if(c.disabled)return false;a(this).removeClass("ui-state-active")}).bind("keydown.button",function(e){if(c.disabled)return false;if(e.keyCode==a.ui.keyCode.SPACE||e.keyCode==a.ui.keyCode.ENTER)a(this).addClass("ui-state-active")}).bind("keyup.button",function(){a(this).removeClass("ui-state-active")});this.buttonElement.is("a")&&this.buttonElement.keyup(function(e){e.keyCode===a.ui.keyCode.SPACE&&a(this).click()})}this._setOption("disabled",
c.disabled)},_determineButtonType:function(){this.type=this.element.is(":checkbox")?"checkbox":this.element.is(":radio")?"radio":this.element.is("input")?"input":"button";if(this.type==="checkbox"||this.type==="radio"){var b=this.element.parents().filter(":last"),c="label[for="+this.element.attr("id")+"]";this.buttonElement=b.find(c);if(!this.buttonElement.length){b=b.length?b.siblings():this.element.siblings();this.buttonElement=b.filter(c);if(!this.buttonElement.length)this.buttonElement=b.find(c)}this.element.addClass("ui-helper-hidden-accessible");
(b=this.element.is(":checked"))&&this.buttonElement.addClass("ui-state-active");this.buttonElement.attr("aria-pressed",b)}else this.buttonElement=this.element},widget:function(){return this.buttonElement},destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-hover ui-state-active  ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
this.hasTitle||this.buttonElement.removeAttr("title");a.Widget.prototype.destroy.call(this)},_setOption:function(b,c){a.Widget.prototype._setOption.apply(this,arguments);if(b==="disabled")c?this.element.attr("disabled",true):this.element.removeAttr("disabled");this._resetButton()},refresh:function(){var b=this.element.is(":disabled");b!==this.options.disabled&&this._setOption("disabled",b);if(this.type==="radio")h(this.element[0]).each(function(){a(this).is(":checked")?a(this).button("widget").addClass("ui-state-active").attr("aria-pressed",
true):a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed",false)});else if(this.type==="checkbox")this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed",true):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed",false)},_resetButton:function(){if(this.type==="input")this.options.label&&this.element.val(this.options.label);else{var b=this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"),
c=a("<span></span>").addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(),d=this.options.icons,f=d.primary&&d.secondary,e=[];if(d.primary||d.secondary){if(this.options.text)e.push("ui-button-text-icon"+(f?"s":d.primary?"-primary":"-secondary"));d.primary&&b.prepend("<span class='ui-button-icon-primary ui-icon "+d.primary+"'></span>");d.secondary&&b.append("<span class='ui-button-icon-secondary ui-icon "+d.secondary+"'></span>");if(!this.options.text){e.push(f?"ui-button-icons-only":
"ui-button-icon-only");this.hasTitle||b.attr("title",c)}}else e.push("ui-button-text-only");b.addClass(e.join(" "))}}});a.widget("ui.buttonset",{options:{items:":button, :submit, :reset, :checkbox, :radio, a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(b,c){b==="disabled"&&this.buttons.button("option",b,c);a.Widget.prototype._setOption.apply(this,arguments)},refresh:function(){this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass("ui-corner-left").end().filter(":last").addClass("ui-corner-right").end().end()},
destroy:function(){this.element.removeClass("ui-buttonset");this.buttons.map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy");a.Widget.prototype.destroy.call(this)}})})(jQuery);
;/*
 * jQuery UI Dialog 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Dialog
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *  jquery.ui.button.js
 *	jquery.ui.draggable.js
 *	jquery.ui.mouse.js
 *	jquery.ui.position.js
 *	jquery.ui.resizable.js
 */
(function(c,j){var k={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},l={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true};c.widget("ui.dialog",{options:{autoOpen:true,buttons:{},closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:false,maxWidth:false,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",collision:"fit",using:function(a){var b=c(this).css(a).offset().top;b<0&&
c(this).css("top",a.top-b)}},resizable:true,show:null,stack:true,title:"",width:300,zIndex:1E3},_create:function(){this.originalTitle=this.element.attr("title");if(typeof this.originalTitle!=="string")this.originalTitle="";this.options.title=this.options.title||this.originalTitle;var a=this,b=a.options,d=b.title||"&#160;",e=c.ui.dialog.getTitleId(a.element),g=(a.uiDialog=c("<div></div>")).appendTo(document.body).hide().addClass("ui-dialog ui-widget ui-widget-content ui-corner-all "+b.dialogClass).css({zIndex:b.zIndex}).attr("tabIndex",
-1).css("outline",0).keydown(function(i){if(b.closeOnEscape&&i.keyCode&&i.keyCode===c.ui.keyCode.ESCAPE){a.close(i);i.preventDefault()}}).attr({role:"dialog","aria-labelledby":e}).mousedown(function(i){a.moveToTop(false,i)});a.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(g);var f=(a.uiDialogTitlebar=c("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(g),h=c('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role",
"button").hover(function(){h.addClass("ui-state-hover")},function(){h.removeClass("ui-state-hover")}).focus(function(){h.addClass("ui-state-focus")}).blur(function(){h.removeClass("ui-state-focus")}).click(function(i){a.close(i);return false}).appendTo(f);(a.uiDialogTitlebarCloseText=c("<span></span>")).addClass("ui-icon ui-icon-closethick").text(b.closeText).appendTo(h);c("<span></span>").addClass("ui-dialog-title").attr("id",e).html(d).prependTo(f);if(c.isFunction(b.beforeclose)&&!c.isFunction(b.beforeClose))b.beforeClose=
b.beforeclose;f.find("*").add(f).disableSelection();b.draggable&&c.fn.draggable&&a._makeDraggable();b.resizable&&c.fn.resizable&&a._makeResizable();a._createButtons(b.buttons);a._isOpen=false;c.fn.bgiframe&&g.bgiframe()},_init:function(){this.options.autoOpen&&this.open()},destroy:function(){var a=this;a.overlay&&a.overlay.destroy();a.uiDialog.hide();a.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");a.uiDialog.remove();a.originalTitle&&
a.element.attr("title",a.originalTitle);return a},widget:function(){return this.uiDialog},close:function(a){var b=this,d,e;if(false!==b._trigger("beforeClose",a)){b.overlay&&b.overlay.destroy();b.uiDialog.unbind("keypress.ui-dialog");b._isOpen=false;if(b.options.hide)b.uiDialog.hide(b.options.hide,function(){b._trigger("close",a)});else{b.uiDialog.hide();b._trigger("close",a)}c.ui.dialog.overlay.resize();if(b.options.modal){d=0;c(".ui-dialog").each(function(){if(this!==b.uiDialog[0]){e=c(this).css("z-index");
isNaN(e)||(d=Math.max(d,e))}});c.ui.dialog.maxZ=d}return b}},isOpen:function(){return this._isOpen},moveToTop:function(a,b){var d=this,e=d.options;if(e.modal&&!a||!e.stack&&!e.modal)return d._trigger("focus",b);if(e.zIndex>c.ui.dialog.maxZ)c.ui.dialog.maxZ=e.zIndex;if(d.overlay){c.ui.dialog.maxZ+=1;d.overlay.$el.css("z-index",c.ui.dialog.overlay.maxZ=c.ui.dialog.maxZ)}a={scrollTop:d.element.attr("scrollTop"),scrollLeft:d.element.attr("scrollLeft")};c.ui.dialog.maxZ+=1;d.uiDialog.css("z-index",c.ui.dialog.maxZ);
d.element.attr(a);d._trigger("focus",b);return d},open:function(){if(!this._isOpen){var a=this,b=a.options,d=a.uiDialog;a.overlay=b.modal?new c.ui.dialog.overlay(a):null;a._size();a._position(b.position);d.show(b.show);a.moveToTop(true);b.modal&&d.bind("keypress.ui-dialog",function(e){if(e.keyCode===c.ui.keyCode.TAB){var g=c(":tabbable",this),f=g.filter(":first");g=g.filter(":last");if(e.target===g[0]&&!e.shiftKey){f.focus(1);return false}else if(e.target===f[0]&&e.shiftKey){g.focus(1);return false}}});
c(a.element.find(":tabbable").get().concat(d.find(".ui-dialog-buttonpane :tabbable").get().concat(d.get()))).eq(0).focus();a._isOpen=true;a._trigger("open");return a}},_createButtons:function(a){var b=this,d=false,e=c("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),g=c("<div></div>").addClass("ui-dialog-buttonset").appendTo(e);b.uiDialog.find(".ui-dialog-buttonpane").remove();typeof a==="object"&&a!==null&&c.each(a,function(){return!(d=true)});if(d){c.each(a,function(f,
h){h=c.isFunction(h)?{click:h,text:f}:h;f=c('<button type="button"></button>').attr(h,true).unbind("click").click(function(){h.click.apply(b.element[0],arguments)}).appendTo(g);c.fn.button&&f.button()});e.appendTo(b.uiDialog)}},_makeDraggable:function(){function a(f){return{position:f.position,offset:f.offset}}var b=this,d=b.options,e=c(document),g;b.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(f,h){g=
d.height==="auto"?"auto":c(this).height();c(this).height(c(this).height()).addClass("ui-dialog-dragging");b._trigger("dragStart",f,a(h))},drag:function(f,h){b._trigger("drag",f,a(h))},stop:function(f,h){d.position=[h.position.left-e.scrollLeft(),h.position.top-e.scrollTop()];c(this).removeClass("ui-dialog-dragging").height(g);b._trigger("dragStop",f,a(h));c.ui.dialog.overlay.resize()}})},_makeResizable:function(a){function b(f){return{originalPosition:f.originalPosition,originalSize:f.originalSize,
position:f.position,size:f.size}}a=a===j?this.options.resizable:a;var d=this,e=d.options,g=d.uiDialog.css("position");a=typeof a==="string"?a:"n,e,s,w,se,sw,ne,nw";d.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:d.element,maxWidth:e.maxWidth,maxHeight:e.maxHeight,minWidth:e.minWidth,minHeight:d._minHeight(),handles:a,start:function(f,h){c(this).addClass("ui-dialog-resizing");d._trigger("resizeStart",f,b(h))},resize:function(f,h){d._trigger("resize",f,b(h))},stop:function(f,
h){c(this).removeClass("ui-dialog-resizing");e.height=c(this).height();e.width=c(this).width();d._trigger("resizeStop",f,b(h));c.ui.dialog.overlay.resize()}}).css("position",g).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_minHeight:function(){var a=this.options;return a.height==="auto"?a.minHeight:Math.min(a.minHeight,a.height)},_position:function(a){var b=[],d=[0,0],e;if(a){if(typeof a==="string"||typeof a==="object"&&"0"in a){b=a.split?a.split(" "):[a[0],a[1]];if(b.length===
1)b[1]=b[0];c.each(["left","top"],function(g,f){if(+b[g]===b[g]){d[g]=b[g];b[g]=f}});a={my:b.join(" "),at:b.join(" "),offset:d.join(" ")}}a=c.extend({},c.ui.dialog.prototype.options.position,a)}else a=c.ui.dialog.prototype.options.position;(e=this.uiDialog.is(":visible"))||this.uiDialog.show();this.uiDialog.css({top:0,left:0}).position(c.extend({of:window},a));e||this.uiDialog.hide()},_setOptions:function(a){var b=this,d={},e=false;c.each(a,function(g,f){b._setOption(g,f);if(g in k)e=true;if(g in
l)d[g]=f});e&&this._size();this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option",d)},_setOption:function(a,b){var d=this,e=d.uiDialog;switch(a){case "beforeclose":a="beforeClose";break;case "buttons":d._createButtons(b);break;case "closeText":d.uiDialogTitlebarCloseText.text(""+b);break;case "dialogClass":e.removeClass(d.options.dialogClass).addClass("ui-dialog ui-widget ui-widget-content ui-corner-all "+b);break;case "disabled":b?e.addClass("ui-dialog-disabled"):e.removeClass("ui-dialog-disabled");
break;case "draggable":var g=e.is(":data(draggable)");g&&!b&&e.draggable("destroy");!g&&b&&d._makeDraggable();break;case "position":d._position(b);break;case "resizable":(g=e.is(":data(resizable)"))&&!b&&e.resizable("destroy");g&&typeof b==="string"&&e.resizable("option","handles",b);!g&&b!==false&&d._makeResizable(b);break;case "title":c(".ui-dialog-title",d.uiDialogTitlebar).html(""+(b||"&#160;"));break}c.Widget.prototype._setOption.apply(d,arguments)},_size:function(){var a=this.options,b,d,e=
this.uiDialog.is(":visible");this.element.show().css({width:"auto",minHeight:0,height:0});if(a.minWidth>a.width)a.width=a.minWidth;b=this.uiDialog.css({height:"auto",width:a.width}).height();d=Math.max(0,a.minHeight-b);if(a.height==="auto")if(c.support.minHeight)this.element.css({minHeight:d,height:"auto"});else{this.uiDialog.show();a=this.element.css("height","auto").height();e||this.uiDialog.hide();this.element.height(Math.max(a,d))}else this.element.height(Math.max(a.height-b,0));this.uiDialog.is(":data(resizable)")&&
this.uiDialog.resizable("option","minHeight",this._minHeight())}});c.extend(c.ui.dialog,{version:"1.8.11",uuid:0,maxZ:0,getTitleId:function(a){a=a.attr("id");if(!a){this.uuid+=1;a=this.uuid}return"ui-dialog-title-"+a},overlay:function(a){this.$el=c.ui.dialog.overlay.create(a)}});c.extend(c.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:c.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(a){return a+".dialog-overlay"}).join(" "),create:function(a){if(this.instances.length===
0){setTimeout(function(){c.ui.dialog.overlay.instances.length&&c(document).bind(c.ui.dialog.overlay.events,function(d){if(c(d.target).zIndex()<c.ui.dialog.overlay.maxZ)return false})},1);c(document).bind("keydown.dialog-overlay",function(d){if(a.options.closeOnEscape&&d.keyCode&&d.keyCode===c.ui.keyCode.ESCAPE){a.close(d);d.preventDefault()}});c(window).bind("resize.dialog-overlay",c.ui.dialog.overlay.resize)}var b=(this.oldInstances.pop()||c("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({width:this.width(),
height:this.height()});c.fn.bgiframe&&b.bgiframe();this.instances.push(b);return b},destroy:function(a){var b=c.inArray(a,this.instances);b!=-1&&this.oldInstances.push(this.instances.splice(b,1)[0]);this.instances.length===0&&c([document,window]).unbind(".dialog-overlay");a.remove();var d=0;c.each(this.instances,function(){d=Math.max(d,this.css("z-index"))});this.maxZ=d},height:function(){var a,b;if(c.browser.msie&&c.browser.version<7){a=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);
b=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);return a<b?c(window).height()+"px":a+"px"}else return c(document).height()+"px"},width:function(){var a,b;if(c.browser.msie&&c.browser.version<7){a=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);b=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);return a<b?c(window).width()+"px":a+"px"}else return c(document).width()+"px"},resize:function(){var a=c([]);c.each(c.ui.dialog.overlay.instances,
function(){a=a.add(this)});a.css({width:0,height:0}).css({width:c.ui.dialog.overlay.width(),height:c.ui.dialog.overlay.height()})}});c.extend(c.ui.dialog.overlay.prototype,{destroy:function(){c.ui.dialog.overlay.destroy(this.$el)}})})(jQuery);
;/*
 * jQuery UI Slider 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Slider
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(d){d.widget("ui.slider",d.ui.mouse,{widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null},_create:function(){var b=this,a=this.options;this._mouseSliding=this._keySliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all");a.disabled&&this.element.addClass("ui-slider-disabled ui-disabled");
this.range=d([]);if(a.range){if(a.range===true){this.range=d("<div></div>");if(!a.values)a.values=[this._valueMin(),this._valueMin()];if(a.values.length&&a.values.length!==2)a.values=[a.values[0],a.values[0]]}else this.range=d("<div></div>");this.range.appendTo(this.element).addClass("ui-slider-range");if(a.range==="min"||a.range==="max")this.range.addClass("ui-slider-range-"+a.range);this.range.addClass("ui-widget-header")}d(".ui-slider-handle",this.element).length===0&&d("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle");
if(a.values&&a.values.length)for(;d(".ui-slider-handle",this.element).length<a.values.length;)d("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle");this.handles=d(".ui-slider-handle",this.element).addClass("ui-state-default ui-corner-all");this.handle=this.handles.eq(0);this.handles.add(this.range).filter("a").click(function(c){c.preventDefault()}).hover(function(){a.disabled||d(this).addClass("ui-state-hover")},function(){d(this).removeClass("ui-state-hover")}).focus(function(){if(a.disabled)d(this).blur();
else{d(".ui-slider .ui-state-focus").removeClass("ui-state-focus");d(this).addClass("ui-state-focus")}}).blur(function(){d(this).removeClass("ui-state-focus")});this.handles.each(function(c){d(this).data("index.ui-slider-handle",c)});this.handles.keydown(function(c){var e=true,f=d(this).data("index.ui-slider-handle"),h,g,i;if(!b.options.disabled){switch(c.keyCode){case d.ui.keyCode.HOME:case d.ui.keyCode.END:case d.ui.keyCode.PAGE_UP:case d.ui.keyCode.PAGE_DOWN:case d.ui.keyCode.UP:case d.ui.keyCode.RIGHT:case d.ui.keyCode.DOWN:case d.ui.keyCode.LEFT:e=
false;if(!b._keySliding){b._keySliding=true;d(this).addClass("ui-state-active");h=b._start(c,f);if(h===false)return}break}i=b.options.step;h=b.options.values&&b.options.values.length?(g=b.values(f)):(g=b.value());switch(c.keyCode){case d.ui.keyCode.HOME:g=b._valueMin();break;case d.ui.keyCode.END:g=b._valueMax();break;case d.ui.keyCode.PAGE_UP:g=b._trimAlignValue(h+(b._valueMax()-b._valueMin())/5);break;case d.ui.keyCode.PAGE_DOWN:g=b._trimAlignValue(h-(b._valueMax()-b._valueMin())/5);break;case d.ui.keyCode.UP:case d.ui.keyCode.RIGHT:if(h===
b._valueMax())return;g=b._trimAlignValue(h+i);break;case d.ui.keyCode.DOWN:case d.ui.keyCode.LEFT:if(h===b._valueMin())return;g=b._trimAlignValue(h-i);break}b._slide(c,f,g);return e}}).keyup(function(c){var e=d(this).data("index.ui-slider-handle");if(b._keySliding){b._keySliding=false;b._stop(c,e);b._change(c,e);d(this).removeClass("ui-state-active")}});this._refreshValue();this._animateOff=false},destroy:function(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");
this._mouseDestroy();return this},_mouseCapture:function(b){var a=this.options,c,e,f,h,g;if(a.disabled)return false;this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();c=this._normValueFromMouse({x:b.pageX,y:b.pageY});e=this._valueMax()-this._valueMin()+1;h=this;this.handles.each(function(i){var j=Math.abs(c-h.values(i));if(e>j){e=j;f=d(this);g=i}});if(a.range===true&&this.values(1)===a.min){g+=1;f=d(this.handles[g])}if(this._start(b,
g)===false)return false;this._mouseSliding=true;h._handleIndex=g;f.addClass("ui-state-active").focus();a=f.offset();this._clickOffset=!d(b.target).parents().andSelf().is(".ui-slider-handle")?{left:0,top:0}:{left:b.pageX-a.left-f.width()/2,top:b.pageY-a.top-f.height()/2-(parseInt(f.css("borderTopWidth"),10)||0)-(parseInt(f.css("borderBottomWidth"),10)||0)+(parseInt(f.css("marginTop"),10)||0)};this.handles.hasClass("ui-state-hover")||this._slide(b,g,c);return this._animateOff=true},_mouseStart:function(){return true},
_mouseDrag:function(b){var a=this._normValueFromMouse({x:b.pageX,y:b.pageY});this._slide(b,this._handleIndex,a);return false},_mouseStop:function(b){this.handles.removeClass("ui-state-active");this._mouseSliding=false;this._stop(b,this._handleIndex);this._change(b,this._handleIndex);this._clickOffset=this._handleIndex=null;return this._animateOff=false},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(b){var a;
if(this.orientation==="horizontal"){a=this.elementSize.width;b=b.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{a=this.elementSize.height;b=b.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}a=b/a;if(a>1)a=1;if(a<0)a=0;if(this.orientation==="vertical")a=1-a;b=this._valueMax()-this._valueMin();return this._trimAlignValue(this._valueMin()+a*b)},_start:function(b,a){var c={handle:this.handles[a],value:this.value()};if(this.options.values&&this.options.values.length){c.value=
this.values(a);c.values=this.values()}return this._trigger("start",b,c)},_slide:function(b,a,c){var e;if(this.options.values&&this.options.values.length){e=this.values(a?0:1);if(this.options.values.length===2&&this.options.range===true&&(a===0&&c>e||a===1&&c<e))c=e;if(c!==this.values(a)){e=this.values();e[a]=c;b=this._trigger("slide",b,{handle:this.handles[a],value:c,values:e});this.values(a?0:1);b!==false&&this.values(a,c,true)}}else if(c!==this.value()){b=this._trigger("slide",b,{handle:this.handles[a],
value:c});b!==false&&this.value(c)}},_stop:function(b,a){var c={handle:this.handles[a],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(a);c.values=this.values()}this._trigger("stop",b,c)},_change:function(b,a){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[a],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(a);c.values=this.values()}this._trigger("change",b,c)}},value:function(b){if(arguments.length){this.options.value=
this._trimAlignValue(b);this._refreshValue();this._change(null,0)}return this._value()},values:function(b,a){var c,e,f;if(arguments.length>1){this.options.values[b]=this._trimAlignValue(a);this._refreshValue();this._change(null,b)}if(arguments.length)if(d.isArray(arguments[0])){c=this.options.values;e=arguments[0];for(f=0;f<c.length;f+=1){c[f]=this._trimAlignValue(e[f]);this._change(null,f)}this._refreshValue()}else return this.options.values&&this.options.values.length?this._values(b):this.value();
else return this._values()},_setOption:function(b,a){var c,e=0;if(d.isArray(this.options.values))e=this.options.values.length;d.Widget.prototype._setOption.apply(this,arguments);switch(b){case "disabled":if(a){this.handles.filter(".ui-state-focus").blur();this.handles.removeClass("ui-state-hover");this.handles.attr("disabled","disabled");this.element.addClass("ui-disabled")}else{this.handles.removeAttr("disabled");this.element.removeClass("ui-disabled")}break;case "orientation":this._detectOrientation();
this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();break;case "value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case "values":this._animateOff=true;this._refreshValue();for(c=0;c<e;c+=1)this._change(null,c);this._animateOff=false;break}},_value:function(){var b=this.options.value;return b=this._trimAlignValue(b)},_values:function(b){var a,c;if(arguments.length){a=this.options.values[b];
return a=this._trimAlignValue(a)}else{a=this.options.values.slice();for(c=0;c<a.length;c+=1)a[c]=this._trimAlignValue(a[c]);return a}},_trimAlignValue:function(b){if(b<=this._valueMin())return this._valueMin();if(b>=this._valueMax())return this._valueMax();var a=this.options.step>0?this.options.step:1,c=(b-this._valueMin())%a;alignValue=b-c;if(Math.abs(c)*2>=a)alignValue+=c>0?a:-a;return parseFloat(alignValue.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},
_refreshValue:function(){var b=this.options.range,a=this.options,c=this,e=!this._animateOff?a.animate:false,f,h={},g,i,j,l;if(this.options.values&&this.options.values.length)this.handles.each(function(k){f=(c.values(k)-c._valueMin())/(c._valueMax()-c._valueMin())*100;h[c.orientation==="horizontal"?"left":"bottom"]=f+"%";d(this).stop(1,1)[e?"animate":"css"](h,a.animate);if(c.options.range===true)if(c.orientation==="horizontal"){if(k===0)c.range.stop(1,1)[e?"animate":"css"]({left:f+"%"},a.animate);
if(k===1)c.range[e?"animate":"css"]({width:f-g+"%"},{queue:false,duration:a.animate})}else{if(k===0)c.range.stop(1,1)[e?"animate":"css"]({bottom:f+"%"},a.animate);if(k===1)c.range[e?"animate":"css"]({height:f-g+"%"},{queue:false,duration:a.animate})}g=f});else{i=this.value();j=this._valueMin();l=this._valueMax();f=l!==j?(i-j)/(l-j)*100:0;h[c.orientation==="horizontal"?"left":"bottom"]=f+"%";this.handle.stop(1,1)[e?"animate":"css"](h,a.animate);if(b==="min"&&this.orientation==="horizontal")this.range.stop(1,
1)[e?"animate":"css"]({width:f+"%"},a.animate);if(b==="max"&&this.orientation==="horizontal")this.range[e?"animate":"css"]({width:100-f+"%"},{queue:false,duration:a.animate});if(b==="min"&&this.orientation==="vertical")this.range.stop(1,1)[e?"animate":"css"]({height:f+"%"},a.animate);if(b==="max"&&this.orientation==="vertical")this.range[e?"animate":"css"]({height:100-f+"%"},{queue:false,duration:a.animate})}}});d.extend(d.ui.slider,{version:"1.8.11"})})(jQuery);
;/*
 * jQuery UI Tabs 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Tabs
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function(d,p){function u(){return++v}function w(){return++x}var v=0,x=0;d.widget("ui.tabs",{options:{add:null,ajaxOptions:null,cache:false,cookie:null,collapsible:false,disable:null,disabled:[],enable:null,event:"click",fx:null,idPrefix:"ui-tabs-",load:null,panelTemplate:"<div></div>",remove:null,select:null,show:null,spinner:"<em>Loading&#8230;</em>",tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},_create:function(){this._tabify(true)},_setOption:function(b,e){if(b=="selected")this.options.collapsible&&
e==this.options.selected||this.select(e);else{this.options[b]=e;this._tabify()}},_tabId:function(b){return b.title&&b.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF-]/g,"")||this.options.idPrefix+u()},_sanitizeSelector:function(b){return b.replace(/:/g,"\\:")},_cookie:function(){var b=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+w());return d.cookie.apply(null,[b].concat(d.makeArray(arguments)))},_ui:function(b,e){return{tab:b,panel:e,index:this.anchors.index(b)}},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var b=
d(this);b.html(b.data("label.tabs")).removeData("label.tabs")})},_tabify:function(b){function e(g,f){g.css("display","");!d.support.opacity&&f.opacity&&g[0].style.removeAttribute("filter")}var a=this,c=this.options,h=/^#.+/;this.list=this.element.find("ol,ul").eq(0);this.lis=d(" > li:has(a[href])",this.list);this.anchors=this.lis.map(function(){return d("a",this)[0]});this.panels=d([]);this.anchors.each(function(g,f){var i=d(f).attr("href"),l=i.split("#")[0],q;if(l&&(l===location.toString().split("#")[0]||
(q=d("base")[0])&&l===q.href)){i=f.hash;f.href=i}if(h.test(i))a.panels=a.panels.add(a.element.find(a._sanitizeSelector(i)));else if(i&&i!=="#"){d.data(f,"href.tabs",i);d.data(f,"load.tabs",i.replace(/#.*$/,""));i=a._tabId(f);f.href="#"+i;f=a.element.find("#"+i);if(!f.length){f=d(c.panelTemplate).attr("id",i).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(a.panels[g-1]||a.list);f.data("destroy.tabs",true)}a.panels=a.panels.add(f)}else c.disabled.push(g)});if(b){this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");
this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.lis.addClass("ui-state-default ui-corner-top");this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");if(c.selected===p){location.hash&&this.anchors.each(function(g,f){if(f.hash==location.hash){c.selected=g;return false}});if(typeof c.selected!=="number"&&c.cookie)c.selected=parseInt(a._cookie(),10);if(typeof c.selected!=="number"&&this.lis.filter(".ui-tabs-selected").length)c.selected=
this.lis.index(this.lis.filter(".ui-tabs-selected"));c.selected=c.selected||(this.lis.length?0:-1)}else if(c.selected===null)c.selected=-1;c.selected=c.selected>=0&&this.anchors[c.selected]||c.selected<0?c.selected:0;c.disabled=d.unique(c.disabled.concat(d.map(this.lis.filter(".ui-state-disabled"),function(g){return a.lis.index(g)}))).sort();d.inArray(c.selected,c.disabled)!=-1&&c.disabled.splice(d.inArray(c.selected,c.disabled),1);this.panels.addClass("ui-tabs-hide");this.lis.removeClass("ui-tabs-selected ui-state-active");
if(c.selected>=0&&this.anchors.length){a.element.find(a._sanitizeSelector(a.anchors[c.selected].hash)).removeClass("ui-tabs-hide");this.lis.eq(c.selected).addClass("ui-tabs-selected ui-state-active");a.element.queue("tabs",function(){a._trigger("show",null,a._ui(a.anchors[c.selected],a.element.find(a._sanitizeSelector(a.anchors[c.selected].hash))[0]))});this.load(c.selected)}d(window).bind("unload",function(){a.lis.add(a.anchors).unbind(".tabs");a.lis=a.anchors=a.panels=null})}else c.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"));
this.element[c.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible");c.cookie&&this._cookie(c.selected,c.cookie);b=0;for(var j;j=this.lis[b];b++)d(j)[d.inArray(b,c.disabled)!=-1&&!d(j).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled");c.cache===false&&this.anchors.removeData("cache.tabs");this.lis.add(this.anchors).unbind(".tabs");if(c.event!=="mouseover"){var k=function(g,f){f.is(":not(.ui-state-disabled)")&&f.addClass("ui-state-"+g)},n=function(g,f){f.removeClass("ui-state-"+
g)};this.lis.bind("mouseover.tabs",function(){k("hover",d(this))});this.lis.bind("mouseout.tabs",function(){n("hover",d(this))});this.anchors.bind("focus.tabs",function(){k("focus",d(this).closest("li"))});this.anchors.bind("blur.tabs",function(){n("focus",d(this).closest("li"))})}var m,o;if(c.fx)if(d.isArray(c.fx)){m=c.fx[0];o=c.fx[1]}else m=o=c.fx;var r=o?function(g,f){d(g).closest("li").addClass("ui-tabs-selected ui-state-active");f.hide().removeClass("ui-tabs-hide").animate(o,o.duration||"normal",
function(){e(f,o);a._trigger("show",null,a._ui(g,f[0]))})}:function(g,f){d(g).closest("li").addClass("ui-tabs-selected ui-state-active");f.removeClass("ui-tabs-hide");a._trigger("show",null,a._ui(g,f[0]))},s=m?function(g,f){f.animate(m,m.duration||"normal",function(){a.lis.removeClass("ui-tabs-selected ui-state-active");f.addClass("ui-tabs-hide");e(f,m);a.element.dequeue("tabs")})}:function(g,f){a.lis.removeClass("ui-tabs-selected ui-state-active");f.addClass("ui-tabs-hide");a.element.dequeue("tabs")};
this.anchors.bind(c.event+".tabs",function(){var g=this,f=d(g).closest("li"),i=a.panels.filter(":not(.ui-tabs-hide)"),l=a.element.find(a._sanitizeSelector(g.hash));if(f.hasClass("ui-tabs-selected")&&!c.collapsible||f.hasClass("ui-state-disabled")||f.hasClass("ui-state-processing")||a.panels.filter(":animated").length||a._trigger("select",null,a._ui(this,l[0]))===false){this.blur();return false}c.selected=a.anchors.index(this);a.abort();if(c.collapsible)if(f.hasClass("ui-tabs-selected")){c.selected=
-1;c.cookie&&a._cookie(c.selected,c.cookie);a.element.queue("tabs",function(){s(g,i)}).dequeue("tabs");this.blur();return false}else if(!i.length){c.cookie&&a._cookie(c.selected,c.cookie);a.element.queue("tabs",function(){r(g,l)});a.load(a.anchors.index(this));this.blur();return false}c.cookie&&a._cookie(c.selected,c.cookie);if(l.length){i.length&&a.element.queue("tabs",function(){s(g,i)});a.element.queue("tabs",function(){r(g,l)});a.load(a.anchors.index(this))}else throw"jQuery UI Tabs: Mismatching fragment identifier.";
d.browser.msie&&this.blur()});this.anchors.bind("click.tabs",function(){return false})},_getIndex:function(b){if(typeof b=="string")b=this.anchors.index(this.anchors.filter("[href$="+b+"]"));return b},destroy:function(){var b=this.options;this.abort();this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.anchors.each(function(){var e=
d.data(this,"href.tabs");if(e)this.href=e;var a=d(this).unbind(".tabs");d.each(["href","load","cache"],function(c,h){a.removeData(h+".tabs")})});this.lis.unbind(".tabs").add(this.panels).each(function(){d.data(this,"destroy.tabs")?d(this).remove():d(this).removeClass("ui-state-default ui-corner-top ui-tabs-selected ui-state-active ui-state-hover ui-state-focus ui-state-disabled ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide")});b.cookie&&this._cookie(null,b.cookie);return this},add:function(b,
e,a){if(a===p)a=this.anchors.length;var c=this,h=this.options;e=d(h.tabTemplate.replace(/#\{href\}/g,b).replace(/#\{label\}/g,e));b=!b.indexOf("#")?b.replace("#",""):this._tabId(d("a",e)[0]);e.addClass("ui-state-default ui-corner-top").data("destroy.tabs",true);var j=c.element.find("#"+b);j.length||(j=d(h.panelTemplate).attr("id",b).data("destroy.tabs",true));j.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");if(a>=this.lis.length){e.appendTo(this.list);j.appendTo(this.list[0].parentNode)}else{e.insertBefore(this.lis[a]);
j.insertBefore(this.panels[a])}h.disabled=d.map(h.disabled,function(k){return k>=a?++k:k});this._tabify();if(this.anchors.length==1){h.selected=0;e.addClass("ui-tabs-selected ui-state-active");j.removeClass("ui-tabs-hide");this.element.queue("tabs",function(){c._trigger("show",null,c._ui(c.anchors[0],c.panels[0]))});this.load(0)}this._trigger("add",null,this._ui(this.anchors[a],this.panels[a]));return this},remove:function(b){b=this._getIndex(b);var e=this.options,a=this.lis.eq(b).remove(),c=this.panels.eq(b).remove();
if(a.hasClass("ui-tabs-selected")&&this.anchors.length>1)this.select(b+(b+1<this.anchors.length?1:-1));e.disabled=d.map(d.grep(e.disabled,function(h){return h!=b}),function(h){return h>=b?--h:h});this._tabify();this._trigger("remove",null,this._ui(a.find("a")[0],c[0]));return this},enable:function(b){b=this._getIndex(b);var e=this.options;if(d.inArray(b,e.disabled)!=-1){this.lis.eq(b).removeClass("ui-state-disabled");e.disabled=d.grep(e.disabled,function(a){return a!=b});this._trigger("enable",null,
this._ui(this.anchors[b],this.panels[b]));return this}},disable:function(b){b=this._getIndex(b);var e=this.options;if(b!=e.selected){this.lis.eq(b).addClass("ui-state-disabled");e.disabled.push(b);e.disabled.sort();this._trigger("disable",null,this._ui(this.anchors[b],this.panels[b]))}return this},select:function(b){b=this._getIndex(b);if(b==-1)if(this.options.collapsible&&this.options.selected!=-1)b=this.options.selected;else return this;this.anchors.eq(b).trigger(this.options.event+".tabs");return this},
load:function(b){b=this._getIndex(b);var e=this,a=this.options,c=this.anchors.eq(b)[0],h=d.data(c,"load.tabs");this.abort();if(!h||this.element.queue("tabs").length!==0&&d.data(c,"cache.tabs"))this.element.dequeue("tabs");else{this.lis.eq(b).addClass("ui-state-processing");if(a.spinner){var j=d("span",c);j.data("label.tabs",j.html()).html(a.spinner)}this.xhr=d.ajax(d.extend({},a.ajaxOptions,{url:h,success:function(k,n){e.element.find(e._sanitizeSelector(c.hash)).html(k);e._cleanup();a.cache&&d.data(c,
"cache.tabs",true);e._trigger("load",null,e._ui(e.anchors[b],e.panels[b]));try{a.ajaxOptions.success(k,n)}catch(m){}},error:function(k,n){e._cleanup();e._trigger("load",null,e._ui(e.anchors[b],e.panels[b]));try{a.ajaxOptions.error(k,n,b,c)}catch(m){}}}));e.element.dequeue("tabs");return this}},abort:function(){this.element.queue([]);this.panels.stop(false,true);this.element.queue("tabs",this.element.queue("tabs").splice(-2,2));if(this.xhr){this.xhr.abort();delete this.xhr}this._cleanup();return this},
url:function(b,e){this.anchors.eq(b).removeData("cache.tabs").data("load.tabs",e);return this},length:function(){return this.anchors.length}});d.extend(d.ui.tabs,{version:"1.8.11"});d.extend(d.ui.tabs.prototype,{rotation:null,rotate:function(b,e){var a=this,c=this.options,h=a._rotate||(a._rotate=function(j){clearTimeout(a.rotation);a.rotation=setTimeout(function(){var k=c.selected;a.select(++k<a.anchors.length?k:0)},b);j&&j.stopPropagation()});e=a._unrotate||(a._unrotate=!e?function(j){j.clientX&&
a.rotate(null)}:function(){t=c.selected;h()});if(b){this.element.bind("tabsshow",h);this.anchors.bind(c.event+".tabs",e);h()}else{clearTimeout(a.rotation);this.element.unbind("tabsshow",h);this.anchors.unbind(c.event+".tabs",e);delete this._rotate;delete this._unrotate}return this}})})(jQuery);
;/*
 * jQuery UI Datepicker 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Datepicker
 *
 * Depends:
 *	jquery.ui.core.js
 */
(function(d,A){function K(){this.debug=false;this._curInst=null;this._keyEvent=false;this._disabledInputs=[];this._inDialog=this._datepickerShowing=false;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass="ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass=
"ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su",
"Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",
minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false};d.extend(this._defaults,this.regional[""]);this.dpDiv=d('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')}function F(a,b){d.extend(a,b);for(var c in b)if(b[c]==
null||b[c]==A)a[c]=b[c];return a}d.extend(d.ui,{datepicker:{version:"1.8.11"}});var y=(new Date).getTime();d.extend(K.prototype,{markerClassName:"hasDatepicker",log:function(){this.debug&&console.log.apply("",arguments)},_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(a){F(this._defaults,a||{});return this},_attachDatepicker:function(a,b){var c=null;for(var e in this._defaults){var f=a.getAttribute("date:"+e);if(f){c=c||{};try{c[e]=eval(f)}catch(h){c[e]=f}}}e=a.nodeName.toLowerCase();
f=e=="div"||e=="span";if(!a.id){this.uuid+=1;a.id="dp"+this.uuid}var i=this._newInst(d(a),f);i.settings=d.extend({},b||{},c||{});if(e=="input")this._connectDatepicker(a,i);else f&&this._inlineDatepicker(a,i)},_newInst:function(a,b){return{id:a[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1"),input:a,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:b,dpDiv:!b?this.dpDiv:d('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')}},
_connectDatepicker:function(a,b){var c=d(a);b.append=d([]);b.trigger=d([]);if(!c.hasClass(this.markerClassName)){this._attachments(c,b);c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(e,f,h){b.settings[f]=h}).bind("getData.datepicker",function(e,f){return this._get(b,f)});this._autoSize(b);d.data(a,"datepicker",b)}},_attachments:function(a,b){var c=this._get(b,"appendText"),e=this._get(b,"isRTL");b.append&&
b.append.remove();if(c){b.append=d('<span class="'+this._appendClass+'">'+c+"</span>");a[e?"before":"after"](b.append)}a.unbind("focus",this._showDatepicker);b.trigger&&b.trigger.remove();c=this._get(b,"showOn");if(c=="focus"||c=="both")a.focus(this._showDatepicker);if(c=="button"||c=="both"){c=this._get(b,"buttonText");var f=this._get(b,"buttonImage");b.trigger=d(this._get(b,"buttonImageOnly")?d("<img/>").addClass(this._triggerClass).attr({src:f,alt:c,title:c}):d('<button type="button"></button>').addClass(this._triggerClass).html(f==
""?c:d("<img/>").attr({src:f,alt:c,title:c})));a[e?"before":"after"](b.trigger);b.trigger.click(function(){d.datepicker._datepickerShowing&&d.datepicker._lastInput==a[0]?d.datepicker._hideDatepicker():d.datepicker._showDatepicker(a[0]);return false})}},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var b=new Date(2009,11,20),c=this._get(a,"dateFormat");if(c.match(/[DM]/)){var e=function(f){for(var h=0,i=0,g=0;g<f.length;g++)if(f[g].length>h){h=f[g].length;i=g}return i};b.setMonth(e(this._get(a,
c.match(/MM/)?"monthNames":"monthNamesShort")));b.setDate(e(this._get(a,c.match(/DD/)?"dayNames":"dayNamesShort"))+20-b.getDay())}a.input.attr("size",this._formatDate(a,b).length)}},_inlineDatepicker:function(a,b){var c=d(a);if(!c.hasClass(this.markerClassName)){c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker",function(e,f,h){b.settings[f]=h}).bind("getData.datepicker",function(e,f){return this._get(b,f)});d.data(a,"datepicker",b);this._setDate(b,this._getDefaultDate(b),
true);this._updateDatepicker(b);this._updateAlternate(b);b.dpDiv.show()}},_dialogDatepicker:function(a,b,c,e,f){a=this._dialogInst;if(!a){this.uuid+=1;this._dialogInput=d('<input type="text" id="'+("dp"+this.uuid)+'" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>');this._dialogInput.keydown(this._doKeyDown);d("body").append(this._dialogInput);a=this._dialogInst=this._newInst(this._dialogInput,false);a.settings={};d.data(this._dialogInput[0],"datepicker",a)}F(a.settings,e||{});
b=b&&b.constructor==Date?this._formatDate(a,b):b;this._dialogInput.val(b);this._pos=f?f.length?f:[f.pageX,f.pageY]:null;if(!this._pos)this._pos=[document.documentElement.clientWidth/2-100+(document.documentElement.scrollLeft||document.body.scrollLeft),document.documentElement.clientHeight/2-150+(document.documentElement.scrollTop||document.body.scrollTop)];this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px");a.settings.onSelect=c;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);
this._showDatepicker(this._dialogInput[0]);d.blockUI&&d.blockUI(this.dpDiv);d.data(this._dialogInput[0],"datepicker",a);return this},_destroyDatepicker:function(a){var b=d(a),c=d.data(a,"datepicker");if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();d.removeData(a,"datepicker");if(e=="input"){c.append.remove();c.trigger.remove();b.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",
this._doKeyUp)}else if(e=="div"||e=="span")b.removeClass(this.markerClassName).empty()}},_enableDatepicker:function(a){var b=d(a),c=d.data(a,"datepicker");if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();if(e=="input"){a.disabled=false;c.trigger.filter("button").each(function(){this.disabled=false}).end().filter("img").css({opacity:"1.0",cursor:""})}else if(e=="div"||e=="span")b.children("."+this._inlineClass).children().removeClass("ui-state-disabled");this._disabledInputs=d.map(this._disabledInputs,
function(f){return f==a?null:f})}},_disableDatepicker:function(a){var b=d(a),c=d.data(a,"datepicker");if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();if(e=="input"){a.disabled=true;c.trigger.filter("button").each(function(){this.disabled=true}).end().filter("img").css({opacity:"0.5",cursor:"default"})}else if(e=="div"||e=="span")b.children("."+this._inlineClass).children().addClass("ui-state-disabled");this._disabledInputs=d.map(this._disabledInputs,function(f){return f==a?null:
f});this._disabledInputs[this._disabledInputs.length]=a}},_isDisabledDatepicker:function(a){if(!a)return false;for(var b=0;b<this._disabledInputs.length;b++)if(this._disabledInputs[b]==a)return true;return false},_getInst:function(a){try{return d.data(a,"datepicker")}catch(b){throw"Missing instance data for this datepicker";}},_optionDatepicker:function(a,b,c){var e=this._getInst(a);if(arguments.length==2&&typeof b=="string")return b=="defaults"?d.extend({},d.datepicker._defaults):e?b=="all"?d.extend({},
e.settings):this._get(e,b):null;var f=b||{};if(typeof b=="string"){f={};f[b]=c}if(e){this._curInst==e&&this._hideDatepicker();var h=this._getDateDatepicker(a,true),i=this._getMinMaxDate(e,"min"),g=this._getMinMaxDate(e,"max");F(e.settings,f);if(i!==null&&f.dateFormat!==A&&f.minDate===A)e.settings.minDate=this._formatDate(e,i);if(g!==null&&f.dateFormat!==A&&f.maxDate===A)e.settings.maxDate=this._formatDate(e,g);this._attachments(d(a),e);this._autoSize(e);this._setDateDatepicker(a,h);this._updateDatepicker(e)}},
_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)},_refreshDatepicker:function(a){(a=this._getInst(a))&&this._updateDatepicker(a)},_setDateDatepicker:function(a,b){if(a=this._getInst(a)){this._setDate(a,b);this._updateDatepicker(a);this._updateAlternate(a)}},_getDateDatepicker:function(a,b){(a=this._getInst(a))&&!a.inline&&this._setDateFromField(a,b);return a?this._getDate(a):null},_doKeyDown:function(a){var b=d.datepicker._getInst(a.target),c=true,e=b.dpDiv.is(".ui-datepicker-rtl");
b._keyEvent=true;if(d.datepicker._datepickerShowing)switch(a.keyCode){case 9:d.datepicker._hideDatepicker();c=false;break;case 13:c=d("td."+d.datepicker._dayOverClass+":not(."+d.datepicker._currentClass+")",b.dpDiv);c[0]?d.datepicker._selectDay(a.target,b.selectedMonth,b.selectedYear,c[0]):d.datepicker._hideDatepicker();return false;case 27:d.datepicker._hideDatepicker();break;case 33:d.datepicker._adjustDate(a.target,a.ctrlKey?-d.datepicker._get(b,"stepBigMonths"):-d.datepicker._get(b,"stepMonths"),
"M");break;case 34:d.datepicker._adjustDate(a.target,a.ctrlKey?+d.datepicker._get(b,"stepBigMonths"):+d.datepicker._get(b,"stepMonths"),"M");break;case 35:if(a.ctrlKey||a.metaKey)d.datepicker._clearDate(a.target);c=a.ctrlKey||a.metaKey;break;case 36:if(a.ctrlKey||a.metaKey)d.datepicker._gotoToday(a.target);c=a.ctrlKey||a.metaKey;break;case 37:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,e?+1:-1,"D");c=a.ctrlKey||a.metaKey;if(a.originalEvent.altKey)d.datepicker._adjustDate(a.target,a.ctrlKey?
-d.datepicker._get(b,"stepBigMonths"):-d.datepicker._get(b,"stepMonths"),"M");break;case 38:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,-7,"D");c=a.ctrlKey||a.metaKey;break;case 39:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,e?-1:+1,"D");c=a.ctrlKey||a.metaKey;if(a.originalEvent.altKey)d.datepicker._adjustDate(a.target,a.ctrlKey?+d.datepicker._get(b,"stepBigMonths"):+d.datepicker._get(b,"stepMonths"),"M");break;case 40:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,
+7,"D");c=a.ctrlKey||a.metaKey;break;default:c=false}else if(a.keyCode==36&&a.ctrlKey)d.datepicker._showDatepicker(this);else c=false;if(c){a.preventDefault();a.stopPropagation()}},_doKeyPress:function(a){var b=d.datepicker._getInst(a.target);if(d.datepicker._get(b,"constrainInput")){b=d.datepicker._possibleChars(d.datepicker._get(b,"dateFormat"));var c=String.fromCharCode(a.charCode==A?a.keyCode:a.charCode);return a.ctrlKey||a.metaKey||c<" "||!b||b.indexOf(c)>-1}},_doKeyUp:function(a){a=d.datepicker._getInst(a.target);
if(a.input.val()!=a.lastVal)try{if(d.datepicker.parseDate(d.datepicker._get(a,"dateFormat"),a.input?a.input.val():null,d.datepicker._getFormatConfig(a))){d.datepicker._setDateFromField(a);d.datepicker._updateAlternate(a);d.datepicker._updateDatepicker(a)}}catch(b){d.datepicker.log(b)}return true},_showDatepicker:function(a){a=a.target||a;if(a.nodeName.toLowerCase()!="input")a=d("input",a.parentNode)[0];if(!(d.datepicker._isDisabledDatepicker(a)||d.datepicker._lastInput==a)){var b=d.datepicker._getInst(a);
d.datepicker._curInst&&d.datepicker._curInst!=b&&d.datepicker._curInst.dpDiv.stop(true,true);var c=d.datepicker._get(b,"beforeShow");F(b.settings,c?c.apply(a,[a,b]):{});b.lastVal=null;d.datepicker._lastInput=a;d.datepicker._setDateFromField(b);if(d.datepicker._inDialog)a.value="";if(!d.datepicker._pos){d.datepicker._pos=d.datepicker._findPos(a);d.datepicker._pos[1]+=a.offsetHeight}var e=false;d(a).parents().each(function(){e|=d(this).css("position")=="fixed";return!e});if(e&&d.browser.opera){d.datepicker._pos[0]-=
document.documentElement.scrollLeft;d.datepicker._pos[1]-=document.documentElement.scrollTop}c={left:d.datepicker._pos[0],top:d.datepicker._pos[1]};d.datepicker._pos=null;b.dpDiv.empty();b.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});d.datepicker._updateDatepicker(b);c=d.datepicker._checkOffset(b,c,e);b.dpDiv.css({position:d.datepicker._inDialog&&d.blockUI?"static":e?"fixed":"absolute",display:"none",left:c.left+"px",top:c.top+"px"});if(!b.inline){c=d.datepicker._get(b,"showAnim");
var f=d.datepicker._get(b,"duration"),h=function(){d.datepicker._datepickerShowing=true;var i=b.dpDiv.find("iframe.ui-datepicker-cover");if(i.length){var g=d.datepicker._getBorders(b.dpDiv);i.css({left:-g[0],top:-g[1],width:b.dpDiv.outerWidth(),height:b.dpDiv.outerHeight()})}};b.dpDiv.zIndex(d(a).zIndex()+1);d.effects&&d.effects[c]?b.dpDiv.show(c,d.datepicker._get(b,"showOptions"),f,h):b.dpDiv[c||"show"](c?f:null,h);if(!c||!f)h();b.input.is(":visible")&&!b.input.is(":disabled")&&b.input.focus();d.datepicker._curInst=
b}}},_updateDatepicker:function(a){var b=this,c=d.datepicker._getBorders(a.dpDiv);a.dpDiv.empty().append(this._generateHTML(a));var e=a.dpDiv.find("iframe.ui-datepicker-cover");e.length&&e.css({left:-c[0],top:-c[1],width:a.dpDiv.outerWidth(),height:a.dpDiv.outerHeight()});a.dpDiv.find("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a").bind("mouseout",function(){d(this).removeClass("ui-state-hover");this.className.indexOf("ui-datepicker-prev")!=-1&&d(this).removeClass("ui-datepicker-prev-hover");
this.className.indexOf("ui-datepicker-next")!=-1&&d(this).removeClass("ui-datepicker-next-hover")}).bind("mouseover",function(){if(!b._isDisabledDatepicker(a.inline?a.dpDiv.parent()[0]:a.input[0])){d(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");d(this).addClass("ui-state-hover");this.className.indexOf("ui-datepicker-prev")!=-1&&d(this).addClass("ui-datepicker-prev-hover");this.className.indexOf("ui-datepicker-next")!=-1&&d(this).addClass("ui-datepicker-next-hover")}}).end().find("."+
this._dayOverClass+" a").trigger("mouseover").end();c=this._getNumberOfMonths(a);e=c[1];e>1?a.dpDiv.addClass("ui-datepicker-multi-"+e).css("width",17*e+"em"):a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");a.dpDiv[(c[0]!=1||c[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi");a.dpDiv[(this._get(a,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");a==d.datepicker._curInst&&d.datepicker._datepickerShowing&&a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&
a.input[0]!=document.activeElement&&a.input.focus();if(a.yearshtml){var f=a.yearshtml;setTimeout(function(){f===a.yearshtml&&a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml);f=a.yearshtml=null},0)}},_getBorders:function(a){var b=function(c){return{thin:1,medium:2,thick:3}[c]||c};return[parseFloat(b(a.css("border-left-width"))),parseFloat(b(a.css("border-top-width")))]},_checkOffset:function(a,b,c){var e=a.dpDiv.outerWidth(),f=a.dpDiv.outerHeight(),h=a.input?a.input.outerWidth():
0,i=a.input?a.input.outerHeight():0,g=document.documentElement.clientWidth+d(document).scrollLeft(),j=document.documentElement.clientHeight+d(document).scrollTop();b.left-=this._get(a,"isRTL")?e-h:0;b.left-=c&&b.left==a.input.offset().left?d(document).scrollLeft():0;b.top-=c&&b.top==a.input.offset().top+i?d(document).scrollTop():0;b.left-=Math.min(b.left,b.left+e>g&&g>e?Math.abs(b.left+e-g):0);b.top-=Math.min(b.top,b.top+f>j&&j>f?Math.abs(f+i):0);return b},_findPos:function(a){for(var b=this._get(this._getInst(a),
"isRTL");a&&(a.type=="hidden"||a.nodeType!=1||d.expr.filters.hidden(a));)a=a[b?"previousSibling":"nextSibling"];a=d(a).offset();return[a.left,a.top]},_hideDatepicker:function(a){var b=this._curInst;if(!(!b||a&&b!=d.data(a,"datepicker")))if(this._datepickerShowing){a=this._get(b,"showAnim");var c=this._get(b,"duration"),e=function(){d.datepicker._tidyDialog(b);this._curInst=null};d.effects&&d.effects[a]?b.dpDiv.hide(a,d.datepicker._get(b,"showOptions"),c,e):b.dpDiv[a=="slideDown"?"slideUp":a=="fadeIn"?
"fadeOut":"hide"](a?c:null,e);a||e();if(a=this._get(b,"onClose"))a.apply(b.input?b.input[0]:null,[b.input?b.input.val():"",b]);this._datepickerShowing=false;this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});if(d.blockUI){d.unblockUI();d("body").append(this.dpDiv)}}this._inDialog=false}},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(a){if(d.datepicker._curInst){a=
d(a.target);a[0].id!=d.datepicker._mainDivId&&a.parents("#"+d.datepicker._mainDivId).length==0&&!a.hasClass(d.datepicker.markerClassName)&&!a.hasClass(d.datepicker._triggerClass)&&d.datepicker._datepickerShowing&&!(d.datepicker._inDialog&&d.blockUI)&&d.datepicker._hideDatepicker()}},_adjustDate:function(a,b,c){a=d(a);var e=this._getInst(a[0]);if(!this._isDisabledDatepicker(a[0])){this._adjustInstDate(e,b+(c=="M"?this._get(e,"showCurrentAtPos"):0),c);this._updateDatepicker(e)}},_gotoToday:function(a){a=
d(a);var b=this._getInst(a[0]);if(this._get(b,"gotoCurrent")&&b.currentDay){b.selectedDay=b.currentDay;b.drawMonth=b.selectedMonth=b.currentMonth;b.drawYear=b.selectedYear=b.currentYear}else{var c=new Date;b.selectedDay=c.getDate();b.drawMonth=b.selectedMonth=c.getMonth();b.drawYear=b.selectedYear=c.getFullYear()}this._notifyChange(b);this._adjustDate(a)},_selectMonthYear:function(a,b,c){a=d(a);var e=this._getInst(a[0]);e._selectingMonthYear=false;e["selected"+(c=="M"?"Month":"Year")]=e["draw"+(c==
"M"?"Month":"Year")]=parseInt(b.options[b.selectedIndex].value,10);this._notifyChange(e);this._adjustDate(a)},_clickMonthYear:function(a){var b=this._getInst(d(a)[0]);b.input&&b._selectingMonthYear&&setTimeout(function(){b.input.focus()},0);b._selectingMonthYear=!b._selectingMonthYear},_selectDay:function(a,b,c,e){var f=d(a);if(!(d(e).hasClass(this._unselectableClass)||this._isDisabledDatepicker(f[0]))){f=this._getInst(f[0]);f.selectedDay=f.currentDay=d("a",e).html();f.selectedMonth=f.currentMonth=
b;f.selectedYear=f.currentYear=c;this._selectDate(a,this._formatDate(f,f.currentDay,f.currentMonth,f.currentYear))}},_clearDate:function(a){a=d(a);this._getInst(a[0]);this._selectDate(a,"")},_selectDate:function(a,b){a=this._getInst(d(a)[0]);b=b!=null?b:this._formatDate(a);a.input&&a.input.val(b);this._updateAlternate(a);var c=this._get(a,"onSelect");if(c)c.apply(a.input?a.input[0]:null,[b,a]);else a.input&&a.input.trigger("change");if(a.inline)this._updateDatepicker(a);else{this._hideDatepicker();
this._lastInput=a.input[0];typeof a.input[0]!="object"&&a.input.focus();this._lastInput=null}},_updateAlternate:function(a){var b=this._get(a,"altField");if(b){var c=this._get(a,"altFormat")||this._get(a,"dateFormat"),e=this._getDate(a),f=this.formatDate(c,e,this._getFormatConfig(a));d(b).each(function(){d(this).val(f)})}},noWeekends:function(a){a=a.getDay();return[a>0&&a<6,""]},iso8601Week:function(a){a=new Date(a.getTime());a.setDate(a.getDate()+4-(a.getDay()||7));var b=a.getTime();a.setMonth(0);
a.setDate(1);return Math.floor(Math.round((b-a)/864E5)/7)+1},parseDate:function(a,b,c){if(a==null||b==null)throw"Invalid arguments";b=typeof b=="object"?b.toString():b+"";if(b=="")return null;var e=(c?c.shortYearCutoff:null)||this._defaults.shortYearCutoff;e=typeof e!="string"?e:(new Date).getFullYear()%100+parseInt(e,10);for(var f=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,h=(c?c.dayNames:null)||this._defaults.dayNames,i=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,g=(c?
c.monthNames:null)||this._defaults.monthNames,j=c=-1,l=-1,u=-1,k=false,o=function(p){(p=z+1<a.length&&a.charAt(z+1)==p)&&z++;return p},m=function(p){var v=o(p);p=new RegExp("^\\d{1,"+(p=="@"?14:p=="!"?20:p=="y"&&v?4:p=="o"?3:2)+"}");p=b.substring(s).match(p);if(!p)throw"Missing number at position "+s;s+=p[0].length;return parseInt(p[0],10)},n=function(p,v,H){p=o(p)?H:v;for(v=0;v<p.length;v++)if(b.substr(s,p[v].length).toLowerCase()==p[v].toLowerCase()){s+=p[v].length;return v+1}throw"Unknown name at position "+
s;},r=function(){if(b.charAt(s)!=a.charAt(z))throw"Unexpected literal at position "+s;s++},s=0,z=0;z<a.length;z++)if(k)if(a.charAt(z)=="'"&&!o("'"))k=false;else r();else switch(a.charAt(z)){case "d":l=m("d");break;case "D":n("D",f,h);break;case "o":u=m("o");break;case "m":j=m("m");break;case "M":j=n("M",i,g);break;case "y":c=m("y");break;case "@":var w=new Date(m("@"));c=w.getFullYear();j=w.getMonth()+1;l=w.getDate();break;case "!":w=new Date((m("!")-this._ticksTo1970)/1E4);c=w.getFullYear();j=w.getMonth()+
1;l=w.getDate();break;case "'":if(o("'"))r();else k=true;break;default:r()}if(c==-1)c=(new Date).getFullYear();else if(c<100)c+=(new Date).getFullYear()-(new Date).getFullYear()%100+(c<=e?0:-100);if(u>-1){j=1;l=u;do{e=this._getDaysInMonth(c,j-1);if(l<=e)break;j++;l-=e}while(1)}w=this._daylightSavingAdjust(new Date(c,j-1,l));if(w.getFullYear()!=c||w.getMonth()+1!=j||w.getDate()!=l)throw"Invalid date";return w},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",
RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*1E7,formatDate:function(a,b,c){if(!b)return"";var e=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,f=(c?c.dayNames:null)||this._defaults.dayNames,h=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort;c=(c?c.monthNames:null)||this._defaults.monthNames;var i=function(o){(o=k+1<a.length&&
a.charAt(k+1)==o)&&k++;return o},g=function(o,m,n){m=""+m;if(i(o))for(;m.length<n;)m="0"+m;return m},j=function(o,m,n,r){return i(o)?r[m]:n[m]},l="",u=false;if(b)for(var k=0;k<a.length;k++)if(u)if(a.charAt(k)=="'"&&!i("'"))u=false;else l+=a.charAt(k);else switch(a.charAt(k)){case "d":l+=g("d",b.getDate(),2);break;case "D":l+=j("D",b.getDay(),e,f);break;case "o":l+=g("o",(b.getTime()-(new Date(b.getFullYear(),0,0)).getTime())/864E5,3);break;case "m":l+=g("m",b.getMonth()+1,2);break;case "M":l+=j("M",
b.getMonth(),h,c);break;case "y":l+=i("y")?b.getFullYear():(b.getYear()%100<10?"0":"")+b.getYear()%100;break;case "@":l+=b.getTime();break;case "!":l+=b.getTime()*1E4+this._ticksTo1970;break;case "'":if(i("'"))l+="'";else u=true;break;default:l+=a.charAt(k)}return l},_possibleChars:function(a){for(var b="",c=false,e=function(h){(h=f+1<a.length&&a.charAt(f+1)==h)&&f++;return h},f=0;f<a.length;f++)if(c)if(a.charAt(f)=="'"&&!e("'"))c=false;else b+=a.charAt(f);else switch(a.charAt(f)){case "d":case "m":case "y":case "@":b+=
"0123456789";break;case "D":case "M":return null;case "'":if(e("'"))b+="'";else c=true;break;default:b+=a.charAt(f)}return b},_get:function(a,b){return a.settings[b]!==A?a.settings[b]:this._defaults[b]},_setDateFromField:function(a,b){if(a.input.val()!=a.lastVal){var c=this._get(a,"dateFormat"),e=a.lastVal=a.input?a.input.val():null,f,h;f=h=this._getDefaultDate(a);var i=this._getFormatConfig(a);try{f=this.parseDate(c,e,i)||h}catch(g){this.log(g);e=b?"":e}a.selectedDay=f.getDate();a.drawMonth=a.selectedMonth=
f.getMonth();a.drawYear=a.selectedYear=f.getFullYear();a.currentDay=e?f.getDate():0;a.currentMonth=e?f.getMonth():0;a.currentYear=e?f.getFullYear():0;this._adjustInstDate(a)}},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},_determineDate:function(a,b,c){var e=function(h){var i=new Date;i.setDate(i.getDate()+h);return i},f=function(h){try{return d.datepicker.parseDate(d.datepicker._get(a,"dateFormat"),h,d.datepicker._getFormatConfig(a))}catch(i){}var g=
(h.toLowerCase().match(/^c/)?d.datepicker._getDate(a):null)||new Date,j=g.getFullYear(),l=g.getMonth();g=g.getDate();for(var u=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,k=u.exec(h);k;){switch(k[2]||"d"){case "d":case "D":g+=parseInt(k[1],10);break;case "w":case "W":g+=parseInt(k[1],10)*7;break;case "m":case "M":l+=parseInt(k[1],10);g=Math.min(g,d.datepicker._getDaysInMonth(j,l));break;case "y":case "Y":j+=parseInt(k[1],10);g=Math.min(g,d.datepicker._getDaysInMonth(j,l));break}k=u.exec(h)}return new Date(j,
l,g)};if(b=(b=b==null||b===""?c:typeof b=="string"?f(b):typeof b=="number"?isNaN(b)?c:e(b):new Date(b.getTime()))&&b.toString()=="Invalid Date"?c:b){b.setHours(0);b.setMinutes(0);b.setSeconds(0);b.setMilliseconds(0)}return this._daylightSavingAdjust(b)},_daylightSavingAdjust:function(a){if(!a)return null;a.setHours(a.getHours()>12?a.getHours()+2:0);return a},_setDate:function(a,b,c){var e=!b,f=a.selectedMonth,h=a.selectedYear;b=this._restrictMinMax(a,this._determineDate(a,b,new Date));a.selectedDay=
a.currentDay=b.getDate();a.drawMonth=a.selectedMonth=a.currentMonth=b.getMonth();a.drawYear=a.selectedYear=a.currentYear=b.getFullYear();if((f!=a.selectedMonth||h!=a.selectedYear)&&!c)this._notifyChange(a);this._adjustInstDate(a);if(a.input)a.input.val(e?"":this._formatDate(a))},_getDate:function(a){return!a.currentYear||a.input&&a.input.val()==""?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay))},_generateHTML:function(a){var b=new Date;b=this._daylightSavingAdjust(new Date(b.getFullYear(),
b.getMonth(),b.getDate()));var c=this._get(a,"isRTL"),e=this._get(a,"showButtonPanel"),f=this._get(a,"hideIfNoPrevNext"),h=this._get(a,"navigationAsDateFormat"),i=this._getNumberOfMonths(a),g=this._get(a,"showCurrentAtPos"),j=this._get(a,"stepMonths"),l=i[0]!=1||i[1]!=1,u=this._daylightSavingAdjust(!a.currentDay?new Date(9999,9,9):new Date(a.currentYear,a.currentMonth,a.currentDay)),k=this._getMinMaxDate(a,"min"),o=this._getMinMaxDate(a,"max");g=a.drawMonth-g;var m=a.drawYear;if(g<0){g+=12;m--}if(o){var n=
this._daylightSavingAdjust(new Date(o.getFullYear(),o.getMonth()-i[0]*i[1]+1,o.getDate()));for(n=k&&n<k?k:n;this._daylightSavingAdjust(new Date(m,g,1))>n;){g--;if(g<0){g=11;m--}}}a.drawMonth=g;a.drawYear=m;n=this._get(a,"prevText");n=!h?n:this.formatDate(n,this._daylightSavingAdjust(new Date(m,g-j,1)),this._getFormatConfig(a));n=this._canAdjustMonth(a,-1,m,g)?'<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_'+y+".datepicker._adjustDate('#"+a.id+"', -"+j+", 'M');\" title=\""+n+'"><span class="ui-icon ui-icon-circle-triangle-'+
(c?"e":"w")+'">'+n+"</span></a>":f?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+n+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+n+"</span></a>";var r=this._get(a,"nextText");r=!h?r:this.formatDate(r,this._daylightSavingAdjust(new Date(m,g+j,1)),this._getFormatConfig(a));f=this._canAdjustMonth(a,+1,m,g)?'<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_'+y+".datepicker._adjustDate('#"+a.id+"', +"+j+", 'M');\" title=\""+r+'"><span class="ui-icon ui-icon-circle-triangle-'+
(c?"w":"e")+'">'+r+"</span></a>":f?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+r+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+r+"</span></a>";j=this._get(a,"currentText");r=this._get(a,"gotoCurrent")&&a.currentDay?u:b;j=!h?j:this.formatDate(j,r,this._getFormatConfig(a));h=!a.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_'+y+'.datepicker._hideDatepicker();">'+this._get(a,
"closeText")+"</button>":"";e=e?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(c?h:"")+(this._isInRange(a,r)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_'+y+".datepicker._gotoToday('#"+a.id+"');\">"+j+"</button>":"")+(c?"":h)+"</div>":"";h=parseInt(this._get(a,"firstDay"),10);h=isNaN(h)?0:h;j=this._get(a,"showWeek");r=this._get(a,"dayNames");this._get(a,"dayNamesShort");var s=this._get(a,"dayNamesMin"),z=
this._get(a,"monthNames"),w=this._get(a,"monthNamesShort"),p=this._get(a,"beforeShowDay"),v=this._get(a,"showOtherMonths"),H=this._get(a,"selectOtherMonths");this._get(a,"calculateWeek");for(var L=this._getDefaultDate(a),I="",D=0;D<i[0];D++){for(var M="",E=0;E<i[1];E++){var N=this._daylightSavingAdjust(new Date(m,g,a.selectedDay)),t=" ui-corner-all",x="";if(l){x+='<div class="ui-datepicker-group';if(i[1]>1)switch(E){case 0:x+=" ui-datepicker-group-first";t=" ui-corner-"+(c?"right":"left");break;case i[1]-
1:x+=" ui-datepicker-group-last";t=" ui-corner-"+(c?"left":"right");break;default:x+=" ui-datepicker-group-middle";t="";break}x+='">'}x+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+t+'">'+(/all|left/.test(t)&&D==0?c?f:n:"")+(/all|right/.test(t)&&D==0?c?n:f:"")+this._generateMonthYearHeader(a,g,m,k,o,D>0||E>0,z,w)+'</div><table class="ui-datepicker-calendar"><thead><tr>';var B=j?'<th class="ui-datepicker-week-col">'+this._get(a,"weekHeader")+"</th>":"";for(t=0;t<7;t++){var q=
(t+h)%7;B+="<th"+((t+h+6)%7>=5?' class="ui-datepicker-week-end"':"")+'><span title="'+r[q]+'">'+s[q]+"</span></th>"}x+=B+"</tr></thead><tbody>";B=this._getDaysInMonth(m,g);if(m==a.selectedYear&&g==a.selectedMonth)a.selectedDay=Math.min(a.selectedDay,B);t=(this._getFirstDayOfMonth(m,g)-h+7)%7;B=l?6:Math.ceil((t+B)/7);q=this._daylightSavingAdjust(new Date(m,g,1-t));for(var O=0;O<B;O++){x+="<tr>";var P=!j?"":'<td class="ui-datepicker-week-col">'+this._get(a,"calculateWeek")(q)+"</td>";for(t=0;t<7;t++){var G=
p?p.apply(a.input?a.input[0]:null,[q]):[true,""],C=q.getMonth()!=g,J=C&&!H||!G[0]||k&&q<k||o&&q>o;P+='<td class="'+((t+h+6)%7>=5?" ui-datepicker-week-end":"")+(C?" ui-datepicker-other-month":"")+(q.getTime()==N.getTime()&&g==a.selectedMonth&&a._keyEvent||L.getTime()==q.getTime()&&L.getTime()==N.getTime()?" "+this._dayOverClass:"")+(J?" "+this._unselectableClass+" ui-state-disabled":"")+(C&&!v?"":" "+G[1]+(q.getTime()==u.getTime()?" "+this._currentClass:"")+(q.getTime()==b.getTime()?" ui-datepicker-today":
""))+'"'+((!C||v)&&G[2]?' title="'+G[2]+'"':"")+(J?"":' onclick="DP_jQuery_'+y+".datepicker._selectDay('#"+a.id+"',"+q.getMonth()+","+q.getFullYear()+', this);return false;"')+">"+(C&&!v?"&#xa0;":J?'<span class="ui-state-default">'+q.getDate()+"</span>":'<a class="ui-state-default'+(q.getTime()==b.getTime()?" ui-state-highlight":"")+(q.getTime()==u.getTime()?" ui-state-active":"")+(C?" ui-priority-secondary":"")+'" href="#">'+q.getDate()+"</a>")+"</td>";q.setDate(q.getDate()+1);q=this._daylightSavingAdjust(q)}x+=
P+"</tr>"}g++;if(g>11){g=0;m++}x+="</tbody></table>"+(l?"</div>"+(i[0]>0&&E==i[1]-1?'<div class="ui-datepicker-row-break"></div>':""):"");M+=x}I+=M}I+=e+(d.browser.msie&&parseInt(d.browser.version,10)<7&&!a.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':"");a._keyEvent=false;return I},_generateMonthYearHeader:function(a,b,c,e,f,h,i,g){var j=this._get(a,"changeMonth"),l=this._get(a,"changeYear"),u=this._get(a,"showMonthAfterYear"),k='<div class="ui-datepicker-title">',
o="";if(h||!j)o+='<span class="ui-datepicker-month">'+i[b]+"</span>";else{i=e&&e.getFullYear()==c;var m=f&&f.getFullYear()==c;o+='<select class="ui-datepicker-month" onchange="DP_jQuery_'+y+".datepicker._selectMonthYear('#"+a.id+"', this, 'M');\" onclick=\"DP_jQuery_"+y+".datepicker._clickMonthYear('#"+a.id+"');\">";for(var n=0;n<12;n++)if((!i||n>=e.getMonth())&&(!m||n<=f.getMonth()))o+='<option value="'+n+'"'+(n==b?' selected="selected"':"")+">"+g[n]+"</option>";o+="</select>"}u||(k+=o+(h||!(j&&
l)?"&#xa0;":""));a.yearshtml="";if(h||!l)k+='<span class="ui-datepicker-year">'+c+"</span>";else{g=this._get(a,"yearRange").split(":");var r=(new Date).getFullYear();i=function(s){s=s.match(/c[+-].*/)?c+parseInt(s.substring(1),10):s.match(/[+-].*/)?r+parseInt(s,10):parseInt(s,10);return isNaN(s)?r:s};b=i(g[0]);g=Math.max(b,i(g[1]||""));b=e?Math.max(b,e.getFullYear()):b;g=f?Math.min(g,f.getFullYear()):g;for(a.yearshtml+='<select class="ui-datepicker-year" onchange="DP_jQuery_'+y+".datepicker._selectMonthYear('#"+
a.id+"', this, 'Y');\" onclick=\"DP_jQuery_"+y+".datepicker._clickMonthYear('#"+a.id+"');\">";b<=g;b++)a.yearshtml+='<option value="'+b+'"'+(b==c?' selected="selected"':"")+">"+b+"</option>";a.yearshtml+="</select>";if(d.browser.mozilla)k+='<select class="ui-datepicker-year"><option value="'+c+'" selected="selected">'+c+"</option></select>";else{k+=a.yearshtml;a.yearshtml=null}}k+=this._get(a,"yearSuffix");if(u)k+=(h||!(j&&l)?"&#xa0;":"")+o;k+="</div>";return k},_adjustInstDate:function(a,b,c){var e=
a.drawYear+(c=="Y"?b:0),f=a.drawMonth+(c=="M"?b:0);b=Math.min(a.selectedDay,this._getDaysInMonth(e,f))+(c=="D"?b:0);e=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(e,f,b)));a.selectedDay=e.getDate();a.drawMonth=a.selectedMonth=e.getMonth();a.drawYear=a.selectedYear=e.getFullYear();if(c=="M"||c=="Y")this._notifyChange(a)},_restrictMinMax:function(a,b){var c=this._getMinMaxDate(a,"min");a=this._getMinMaxDate(a,"max");b=c&&b<c?c:b;return b=a&&b>a?a:b},_notifyChange:function(a){var b=this._get(a,
"onChangeMonthYear");if(b)b.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},_getNumberOfMonths:function(a){a=this._get(a,"numberOfMonths");return a==null?[1,1]:typeof a=="number"?[1,a]:a},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)},_getDaysInMonth:function(a,b){return 32-this._daylightSavingAdjust(new Date(a,b,32)).getDate()},_getFirstDayOfMonth:function(a,b){return(new Date(a,b,1)).getDay()},_canAdjustMonth:function(a,b,c,e){var f=this._getNumberOfMonths(a);
c=this._daylightSavingAdjust(new Date(c,e+(b<0?b:f[0]*f[1]),1));b<0&&c.setDate(this._getDaysInMonth(c.getFullYear(),c.getMonth()));return this._isInRange(a,c)},_isInRange:function(a,b){var c=this._getMinMaxDate(a,"min");a=this._getMinMaxDate(a,"max");return(!c||b.getTime()>=c.getTime())&&(!a||b.getTime()<=a.getTime())},_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff");b=typeof b!="string"?b:(new Date).getFullYear()%100+parseInt(b,10);return{shortYearCutoff:b,dayNamesShort:this._get(a,
"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}},_formatDate:function(a,b,c,e){if(!b){a.currentDay=a.selectedDay;a.currentMonth=a.selectedMonth;a.currentYear=a.selectedYear}b=b?typeof b=="object"?b:this._daylightSavingAdjust(new Date(e,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),b,this._getFormatConfig(a))}});d.fn.datepicker=
function(a){if(!this.length)return this;if(!d.datepicker.initialized){d(document).mousedown(d.datepicker._checkExternalClick).find("body").append(d.datepicker.dpDiv);d.datepicker.initialized=true}var b=Array.prototype.slice.call(arguments,1);if(typeof a=="string"&&(a=="isDisabled"||a=="getDate"||a=="widget"))return d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,[this[0]].concat(b));if(a=="option"&&arguments.length==2&&typeof arguments[1]=="string")return d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,
[this[0]].concat(b));return this.each(function(){typeof a=="string"?d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,[this].concat(b)):d.datepicker._attachDatepicker(this,a)})};d.datepicker=new K;d.datepicker.initialized=false;d.datepicker.uuid=(new Date).getTime();d.datepicker.version="1.8.11";window["DP_jQuery_"+y]=d})(jQuery);
;/*
 * jQuery UI Progressbar 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Progressbar
 *
 * Depends:
 *   jquery.ui.core.js
 *   jquery.ui.widget.js
 */
(function(b,d){b.widget("ui.progressbar",{options:{value:0,max:100},min:0,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()});this.valueDiv=b("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);this.oldValue=this._value();this._refreshValue()},destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
this.valueDiv.remove();b.Widget.prototype.destroy.apply(this,arguments)},value:function(a){if(a===d)return this._value();this._setOption("value",a);return this},_setOption:function(a,c){if(a==="value"){this.options.value=c;this._refreshValue();this._value()===this.options.max&&this._trigger("complete")}b.Widget.prototype._setOption.apply(this,arguments)},_value:function(){var a=this.options.value;if(typeof a!=="number")a=0;return Math.min(this.options.max,Math.max(this.min,a))},_percentage:function(){return 100*
this._value()/this.options.max},_refreshValue:function(){var a=this.value(),c=this._percentage();if(this.oldValue!==a){this.oldValue=a;this._trigger("change")}this.valueDiv.toggleClass("ui-corner-right",a===this.options.max).width(c.toFixed(0)+"%");this.element.attr("aria-valuenow",a)}});b.extend(b.ui.progressbar,{version:"1.8.11"})})(jQuery);
;/*
 * jQuery UI Effects 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/
 */
jQuery.effects||function(f,j){function n(c){var a;if(c&&c.constructor==Array&&c.length==3)return c;if(a=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(c))return[parseInt(a[1],10),parseInt(a[2],10),parseInt(a[3],10)];if(a=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(c))return[parseFloat(a[1])*2.55,parseFloat(a[2])*2.55,parseFloat(a[3])*2.55];if(a=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(c))return[parseInt(a[1],
16),parseInt(a[2],16),parseInt(a[3],16)];if(a=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(c))return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)];if(/rgba\(0, 0, 0, 0\)/.exec(c))return o.transparent;return o[f.trim(c).toLowerCase()]}function s(c,a){var b;do{b=f.curCSS(c,a);if(b!=""&&b!="transparent"||f.nodeName(c,"body"))break;a="backgroundColor"}while(c=c.parentNode);return n(b)}function p(){var c=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,
a={},b,d;if(c&&c.length&&c[0]&&c[c[0]])for(var e=c.length;e--;){b=c[e];if(typeof c[b]=="string"){d=b.replace(/\-(\w)/g,function(g,h){return h.toUpperCase()});a[d]=c[b]}}else for(b in c)if(typeof c[b]==="string")a[b]=c[b];return a}function q(c){var a,b;for(a in c){b=c[a];if(b==null||f.isFunction(b)||a in t||/scrollbar/.test(a)||!/color/i.test(a)&&isNaN(parseFloat(b)))delete c[a]}return c}function u(c,a){var b={_:0},d;for(d in a)if(c[d]!=a[d])b[d]=a[d];return b}function k(c,a,b,d){if(typeof c=="object"){d=
a;b=null;a=c;c=a.effect}if(f.isFunction(a)){d=a;b=null;a={}}if(typeof a=="number"||f.fx.speeds[a]){d=b;b=a;a={}}if(f.isFunction(b)){d=b;b=null}a=a||{};b=b||a.duration;b=f.fx.off?0:typeof b=="number"?b:b in f.fx.speeds?f.fx.speeds[b]:f.fx.speeds._default;d=d||a.complete;return[c,a,b,d]}function m(c){if(!c||typeof c==="number"||f.fx.speeds[c])return true;if(typeof c==="string"&&!f.effects[c])return true;return false}f.effects={};f.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor",
"borderTopColor","borderColor","color","outlineColor"],function(c,a){f.fx.step[a]=function(b){if(!b.colorInit){b.start=s(b.elem,a);b.end=n(b.end);b.colorInit=true}b.elem.style[a]="rgb("+Math.max(Math.min(parseInt(b.pos*(b.end[0]-b.start[0])+b.start[0],10),255),0)+","+Math.max(Math.min(parseInt(b.pos*(b.end[1]-b.start[1])+b.start[1],10),255),0)+","+Math.max(Math.min(parseInt(b.pos*(b.end[2]-b.start[2])+b.start[2],10),255),0)+")"}});var o={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,
0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,
211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},r=["add","remove","toggle"],t={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};f.effects.animateClass=function(c,a,b,
d){if(f.isFunction(b)){d=b;b=null}return this.queue("fx",function(){var e=f(this),g=e.attr("style")||" ",h=q(p.call(this)),l,v=e.attr("className");f.each(r,function(w,i){c[i]&&e[i+"Class"](c[i])});l=q(p.call(this));e.attr("className",v);e.animate(u(h,l),a,b,function(){f.each(r,function(w,i){c[i]&&e[i+"Class"](c[i])});if(typeof e.attr("style")=="object"){e.attr("style").cssText="";e.attr("style").cssText=g}else e.attr("style",g);d&&d.apply(this,arguments)});h=f.queue(this);l=h.splice(h.length-1,1)[0];
h.splice(1,0,l);f.dequeue(this)})};f.fn.extend({_addClass:f.fn.addClass,addClass:function(c,a,b,d){return a?f.effects.animateClass.apply(this,[{add:c},a,b,d]):this._addClass(c)},_removeClass:f.fn.removeClass,removeClass:function(c,a,b,d){return a?f.effects.animateClass.apply(this,[{remove:c},a,b,d]):this._removeClass(c)},_toggleClass:f.fn.toggleClass,toggleClass:function(c,a,b,d,e){return typeof a=="boolean"||a===j?b?f.effects.animateClass.apply(this,[a?{add:c}:{remove:c},b,d,e]):this._toggleClass(c,
a):f.effects.animateClass.apply(this,[{toggle:c},a,b,d])},switchClass:function(c,a,b,d,e){return f.effects.animateClass.apply(this,[{add:a,remove:c},b,d,e])}});f.extend(f.effects,{version:"1.8.11",save:function(c,a){for(var b=0;b<a.length;b++)a[b]!==null&&c.data("ec.storage."+a[b],c[0].style[a[b]])},restore:function(c,a){for(var b=0;b<a.length;b++)a[b]!==null&&c.css(a[b],c.data("ec.storage."+a[b]))},setMode:function(c,a){if(a=="toggle")a=c.is(":hidden")?"show":"hide";return a},getBaseline:function(c,
a){var b;switch(c[0]){case "top":b=0;break;case "middle":b=0.5;break;case "bottom":b=1;break;default:b=c[0]/a.height}switch(c[1]){case "left":c=0;break;case "center":c=0.5;break;case "right":c=1;break;default:c=c[1]/a.width}return{x:c,y:b}},createWrapper:function(c){if(c.parent().is(".ui-effects-wrapper"))return c.parent();var a={width:c.outerWidth(true),height:c.outerHeight(true),"float":c.css("float")},b=f("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",
border:"none",margin:0,padding:0});c.wrap(b);b=c.parent();if(c.css("position")=="static"){b.css({position:"relative"});c.css({position:"relative"})}else{f.extend(a,{position:c.css("position"),zIndex:c.css("z-index")});f.each(["top","left","bottom","right"],function(d,e){a[e]=c.css(e);if(isNaN(parseInt(a[e],10)))a[e]="auto"});c.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}return b.css(a).show()},removeWrapper:function(c){if(c.parent().is(".ui-effects-wrapper"))return c.parent().replaceWith(c);
return c},setTransition:function(c,a,b,d){d=d||{};f.each(a,function(e,g){unit=c.cssUnit(g);if(unit[0]>0)d[g]=unit[0]*b+unit[1]});return d}});f.fn.extend({effect:function(c){var a=k.apply(this,arguments),b={options:a[1],duration:a[2],callback:a[3]};a=b.options.mode;var d=f.effects[c];if(f.fx.off||!d)return a?this[a](b.duration,b.callback):this.each(function(){b.callback&&b.callback.call(this)});return d.call(this,b)},_show:f.fn.show,show:function(c){if(m(c))return this._show.apply(this,arguments);
else{var a=k.apply(this,arguments);a[1].mode="show";return this.effect.apply(this,a)}},_hide:f.fn.hide,hide:function(c){if(m(c))return this._hide.apply(this,arguments);else{var a=k.apply(this,arguments);a[1].mode="hide";return this.effect.apply(this,a)}},__toggle:f.fn.toggle,toggle:function(c){if(m(c)||typeof c==="boolean"||f.isFunction(c))return this.__toggle.apply(this,arguments);else{var a=k.apply(this,arguments);a[1].mode="toggle";return this.effect.apply(this,a)}},cssUnit:function(c){var a=this.css(c),
b=[];f.each(["em","px","%","pt"],function(d,e){if(a.indexOf(e)>0)b=[parseFloat(a),e]});return b}});f.easing.jswing=f.easing.swing;f.extend(f.easing,{def:"easeOutQuad",swing:function(c,a,b,d,e){return f.easing[f.easing.def](c,a,b,d,e)},easeInQuad:function(c,a,b,d,e){return d*(a/=e)*a+b},easeOutQuad:function(c,a,b,d,e){return-d*(a/=e)*(a-2)+b},easeInOutQuad:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a+b;return-d/2*(--a*(a-2)-1)+b},easeInCubic:function(c,a,b,d,e){return d*(a/=e)*a*a+b},easeOutCubic:function(c,
a,b,d,e){return d*((a=a/e-1)*a*a+1)+b},easeInOutCubic:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a*a+b;return d/2*((a-=2)*a*a+2)+b},easeInQuart:function(c,a,b,d,e){return d*(a/=e)*a*a*a+b},easeOutQuart:function(c,a,b,d,e){return-d*((a=a/e-1)*a*a*a-1)+b},easeInOutQuart:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a*a*a+b;return-d/2*((a-=2)*a*a*a-2)+b},easeInQuint:function(c,a,b,d,e){return d*(a/=e)*a*a*a*a+b},easeOutQuint:function(c,a,b,d,e){return d*((a=a/e-1)*a*a*a*a+1)+b},easeInOutQuint:function(c,
a,b,d,e){if((a/=e/2)<1)return d/2*a*a*a*a*a+b;return d/2*((a-=2)*a*a*a*a+2)+b},easeInSine:function(c,a,b,d,e){return-d*Math.cos(a/e*(Math.PI/2))+d+b},easeOutSine:function(c,a,b,d,e){return d*Math.sin(a/e*(Math.PI/2))+b},easeInOutSine:function(c,a,b,d,e){return-d/2*(Math.cos(Math.PI*a/e)-1)+b},easeInExpo:function(c,a,b,d,e){return a==0?b:d*Math.pow(2,10*(a/e-1))+b},easeOutExpo:function(c,a,b,d,e){return a==e?b+d:d*(-Math.pow(2,-10*a/e)+1)+b},easeInOutExpo:function(c,a,b,d,e){if(a==0)return b;if(a==
e)return b+d;if((a/=e/2)<1)return d/2*Math.pow(2,10*(a-1))+b;return d/2*(-Math.pow(2,-10*--a)+2)+b},easeInCirc:function(c,a,b,d,e){return-d*(Math.sqrt(1-(a/=e)*a)-1)+b},easeOutCirc:function(c,a,b,d,e){return d*Math.sqrt(1-(a=a/e-1)*a)+b},easeInOutCirc:function(c,a,b,d,e){if((a/=e/2)<1)return-d/2*(Math.sqrt(1-a*a)-1)+b;return d/2*(Math.sqrt(1-(a-=2)*a)+1)+b},easeInElastic:function(c,a,b,d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e)==1)return b+d;g||(g=e*0.3);if(h<Math.abs(d)){h=d;c=g/4}else c=
g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g))+b},easeOutElastic:function(c,a,b,d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e)==1)return b+d;g||(g=e*0.3);if(h<Math.abs(d)){h=d;c=g/4}else c=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*a)*Math.sin((a*e-c)*2*Math.PI/g)+d+b},easeInOutElastic:function(c,a,b,d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e/2)==2)return b+d;g||(g=e*0.3*1.5);if(h<Math.abs(d)){h=d;c=g/4}else c=g/(2*Math.PI)*Math.asin(d/
h);if(a<1)return-0.5*h*Math.pow(2,10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g)+b;return h*Math.pow(2,-10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g)*0.5+d+b},easeInBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;return d*(a/=e)*a*((g+1)*a-g)+b},easeOutBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;return d*((a=a/e-1)*a*((g+1)*a+g)+1)+b},easeInOutBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;if((a/=e/2)<1)return d/2*a*a*(((g*=1.525)+1)*a-g)+b;return d/2*((a-=2)*a*(((g*=1.525)+1)*a+g)+2)+b},easeInBounce:function(c,
a,b,d,e){return d-f.easing.easeOutBounce(c,e-a,0,d,e)+b},easeOutBounce:function(c,a,b,d,e){return(a/=e)<1/2.75?d*7.5625*a*a+b:a<2/2.75?d*(7.5625*(a-=1.5/2.75)*a+0.75)+b:a<2.5/2.75?d*(7.5625*(a-=2.25/2.75)*a+0.9375)+b:d*(7.5625*(a-=2.625/2.75)*a+0.984375)+b},easeInOutBounce:function(c,a,b,d,e){if(a<e/2)return f.easing.easeInBounce(c,a*2,0,d,e)*0.5+b;return f.easing.easeOutBounce(c,a*2-e,0,d,e)*0.5+d*0.5+b}})}(jQuery);
;/*
 * jQuery UI Effects Blind 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Blind
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(b){b.effects.blind=function(c){return this.queue(function(){var a=b(this),g=["position","top","bottom","left","right"],f=b.effects.setMode(a,c.options.mode||"hide"),d=c.options.direction||"vertical";b.effects.save(a,g);a.show();var e=b.effects.createWrapper(a).css({overflow:"hidden"}),h=d=="vertical"?"height":"width";d=d=="vertical"?e.height():e.width();f=="show"&&e.css(h,0);var i={};i[h]=f=="show"?d:0;e.animate(i,c.duration,c.options.easing,function(){f=="hide"&&a.hide();b.effects.restore(a,
g);b.effects.removeWrapper(a);c.callback&&c.callback.apply(a[0],arguments);a.dequeue()})})}})(jQuery);
;/*
 * jQuery UI Effects Bounce 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Bounce
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(e){e.effects.bounce=function(b){return this.queue(function(){var a=e(this),l=["position","top","bottom","left","right"],h=e.effects.setMode(a,b.options.mode||"effect"),d=b.options.direction||"up",c=b.options.distance||20,m=b.options.times||5,i=b.duration||250;/show|hide/.test(h)&&l.push("opacity");e.effects.save(a,l);a.show();e.effects.createWrapper(a);var f=d=="up"||d=="down"?"top":"left";d=d=="up"||d=="left"?"pos":"neg";c=b.options.distance||(f=="top"?a.outerHeight({margin:true})/3:a.outerWidth({margin:true})/
3);if(h=="show")a.css("opacity",0).css(f,d=="pos"?-c:c);if(h=="hide")c/=m*2;h!="hide"&&m--;if(h=="show"){var g={opacity:1};g[f]=(d=="pos"?"+=":"-=")+c;a.animate(g,i/2,b.options.easing);c/=2;m--}for(g=0;g<m;g++){var j={},k={};j[f]=(d=="pos"?"-=":"+=")+c;k[f]=(d=="pos"?"+=":"-=")+c;a.animate(j,i/2,b.options.easing).animate(k,i/2,b.options.easing);c=h=="hide"?c*2:c/2}if(h=="hide"){g={opacity:0};g[f]=(d=="pos"?"-=":"+=")+c;a.animate(g,i/2,b.options.easing,function(){a.hide();e.effects.restore(a,l);e.effects.removeWrapper(a);
b.callback&&b.callback.apply(this,arguments)})}else{j={};k={};j[f]=(d=="pos"?"-=":"+=")+c;k[f]=(d=="pos"?"+=":"-=")+c;a.animate(j,i/2,b.options.easing).animate(k,i/2,b.options.easing,function(){e.effects.restore(a,l);e.effects.removeWrapper(a);b.callback&&b.callback.apply(this,arguments)})}a.queue("fx",function(){a.dequeue()});a.dequeue()})}})(jQuery);
;/*
 * jQuery UI Effects Clip 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Clip
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(b){b.effects.clip=function(e){return this.queue(function(){var a=b(this),i=["position","top","bottom","left","right","height","width"],f=b.effects.setMode(a,e.options.mode||"hide"),c=e.options.direction||"vertical";b.effects.save(a,i);a.show();var d=b.effects.createWrapper(a).css({overflow:"hidden"});d=a[0].tagName=="IMG"?d:a;var g={size:c=="vertical"?"height":"width",position:c=="vertical"?"top":"left"};c=c=="vertical"?d.height():d.width();if(f=="show"){d.css(g.size,0);d.css(g.position,
c/2)}var h={};h[g.size]=f=="show"?c:0;h[g.position]=f=="show"?0:c/2;d.animate(h,{queue:false,duration:e.duration,easing:e.options.easing,complete:function(){f=="hide"&&a.hide();b.effects.restore(a,i);b.effects.removeWrapper(a);e.callback&&e.callback.apply(a[0],arguments);a.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Drop 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Drop
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(c){c.effects.drop=function(d){return this.queue(function(){var a=c(this),h=["position","top","bottom","left","right","opacity"],e=c.effects.setMode(a,d.options.mode||"hide"),b=d.options.direction||"left";c.effects.save(a,h);a.show();c.effects.createWrapper(a);var f=b=="up"||b=="down"?"top":"left";b=b=="up"||b=="left"?"pos":"neg";var g=d.options.distance||(f=="top"?a.outerHeight({margin:true})/2:a.outerWidth({margin:true})/2);if(e=="show")a.css("opacity",0).css(f,b=="pos"?-g:g);var i={opacity:e==
"show"?1:0};i[f]=(e=="show"?b=="pos"?"+=":"-=":b=="pos"?"-=":"+=")+g;a.animate(i,{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){e=="hide"&&a.hide();c.effects.restore(a,h);c.effects.removeWrapper(a);d.callback&&d.callback.apply(this,arguments);a.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Explode 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Explode
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(j){j.effects.explode=function(a){return this.queue(function(){var c=a.options.pieces?Math.round(Math.sqrt(a.options.pieces)):3,d=a.options.pieces?Math.round(Math.sqrt(a.options.pieces)):3;a.options.mode=a.options.mode=="toggle"?j(this).is(":visible")?"hide":"show":a.options.mode;var b=j(this).show().css("visibility","hidden"),g=b.offset();g.top-=parseInt(b.css("marginTop"),10)||0;g.left-=parseInt(b.css("marginLeft"),10)||0;for(var h=b.outerWidth(true),i=b.outerHeight(true),e=0;e<c;e++)for(var f=
0;f<d;f++)b.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-f*(h/d),top:-e*(i/c)}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:h/d,height:i/c,left:g.left+f*(h/d)+(a.options.mode=="show"?(f-Math.floor(d/2))*(h/d):0),top:g.top+e*(i/c)+(a.options.mode=="show"?(e-Math.floor(c/2))*(i/c):0),opacity:a.options.mode=="show"?0:1}).animate({left:g.left+f*(h/d)+(a.options.mode=="show"?0:(f-Math.floor(d/2))*(h/d)),top:g.top+
e*(i/c)+(a.options.mode=="show"?0:(e-Math.floor(c/2))*(i/c)),opacity:a.options.mode=="show"?1:0},a.duration||500);setTimeout(function(){a.options.mode=="show"?b.css({visibility:"visible"}):b.css({visibility:"visible"}).hide();a.callback&&a.callback.apply(b[0]);b.dequeue();j("div.ui-effects-explode").remove()},a.duration||500)})}})(jQuery);
;/*
 * jQuery UI Effects Fade 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Fade
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(b){b.effects.fade=function(a){return this.queue(function(){var c=b(this),d=b.effects.setMode(c,a.options.mode||"hide");c.animate({opacity:d},{queue:false,duration:a.duration,easing:a.options.easing,complete:function(){a.callback&&a.callback.apply(this,arguments);c.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Fold 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Fold
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(c){c.effects.fold=function(a){return this.queue(function(){var b=c(this),j=["position","top","bottom","left","right"],d=c.effects.setMode(b,a.options.mode||"hide"),g=a.options.size||15,h=!!a.options.horizFirst,k=a.duration?a.duration/2:c.fx.speeds._default/2;c.effects.save(b,j);b.show();var e=c.effects.createWrapper(b).css({overflow:"hidden"}),f=d=="show"!=h,l=f?["width","height"]:["height","width"];f=f?[e.width(),e.height()]:[e.height(),e.width()];var i=/([0-9]+)%/.exec(g);if(i)g=parseInt(i[1],
10)/100*f[d=="hide"?0:1];if(d=="show")e.css(h?{height:0,width:g}:{height:g,width:0});h={};i={};h[l[0]]=d=="show"?f[0]:g;i[l[1]]=d=="show"?f[1]:0;e.animate(h,k,a.options.easing).animate(i,k,a.options.easing,function(){d=="hide"&&b.hide();c.effects.restore(b,j);c.effects.removeWrapper(b);a.callback&&a.callback.apply(b[0],arguments);b.dequeue()})})}})(jQuery);
;/*
 * jQuery UI Effects Highlight 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Highlight
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(b){b.effects.highlight=function(c){return this.queue(function(){var a=b(this),e=["backgroundImage","backgroundColor","opacity"],d=b.effects.setMode(a,c.options.mode||"show"),f={backgroundColor:a.css("backgroundColor")};if(d=="hide")f.opacity=0;b.effects.save(a,e);a.show().css({backgroundImage:"none",backgroundColor:c.options.color||"#ffff99"}).animate(f,{queue:false,duration:c.duration,easing:c.options.easing,complete:function(){d=="hide"&&a.hide();b.effects.restore(a,e);d=="show"&&!b.support.opacity&&
this.style.removeAttribute("filter");c.callback&&c.callback.apply(this,arguments);a.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Pulsate 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Pulsate
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(d){d.effects.pulsate=function(a){return this.queue(function(){var b=d(this),c=d.effects.setMode(b,a.options.mode||"show");times=(a.options.times||5)*2-1;duration=a.duration?a.duration/2:d.fx.speeds._default/2;isVisible=b.is(":visible");animateTo=0;if(!isVisible){b.css("opacity",0).show();animateTo=1}if(c=="hide"&&isVisible||c=="show"&&!isVisible)times--;for(c=0;c<times;c++){b.animate({opacity:animateTo},duration,a.options.easing);animateTo=(animateTo+1)%2}b.animate({opacity:animateTo},duration,
a.options.easing,function(){animateTo==0&&b.hide();a.callback&&a.callback.apply(this,arguments)});b.queue("fx",function(){b.dequeue()}).dequeue()})}})(jQuery);
;/*
 * jQuery UI Effects Scale 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Scale
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(c){c.effects.puff=function(b){return this.queue(function(){var a=c(this),e=c.effects.setMode(a,b.options.mode||"hide"),g=parseInt(b.options.percent,10)||150,h=g/100,i={height:a.height(),width:a.width()};c.extend(b.options,{fade:true,mode:e,percent:e=="hide"?g:100,from:e=="hide"?i:{height:i.height*h,width:i.width*h}});a.effect("scale",b.options,b.duration,b.callback);a.dequeue()})};c.effects.scale=function(b){return this.queue(function(){var a=c(this),e=c.extend(true,{},b.options),g=c.effects.setMode(a,
b.options.mode||"effect"),h=parseInt(b.options.percent,10)||(parseInt(b.options.percent,10)==0?0:g=="hide"?0:100),i=b.options.direction||"both",f=b.options.origin;if(g!="effect"){e.origin=f||["middle","center"];e.restore=true}f={height:a.height(),width:a.width()};a.from=b.options.from||(g=="show"?{height:0,width:0}:f);h={y:i!="horizontal"?h/100:1,x:i!="vertical"?h/100:1};a.to={height:f.height*h.y,width:f.width*h.x};if(b.options.fade){if(g=="show"){a.from.opacity=0;a.to.opacity=1}if(g=="hide"){a.from.opacity=
1;a.to.opacity=0}}e.from=a.from;e.to=a.to;e.mode=g;a.effect("size",e,b.duration,b.callback);a.dequeue()})};c.effects.size=function(b){return this.queue(function(){var a=c(this),e=["position","top","bottom","left","right","width","height","overflow","opacity"],g=["position","top","bottom","left","right","overflow","opacity"],h=["width","height","overflow"],i=["fontSize"],f=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],k=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],
p=c.effects.setMode(a,b.options.mode||"effect"),n=b.options.restore||false,m=b.options.scale||"both",l=b.options.origin,j={height:a.height(),width:a.width()};a.from=b.options.from||j;a.to=b.options.to||j;if(l){l=c.effects.getBaseline(l,j);a.from.top=(j.height-a.from.height)*l.y;a.from.left=(j.width-a.from.width)*l.x;a.to.top=(j.height-a.to.height)*l.y;a.to.left=(j.width-a.to.width)*l.x}var d={from:{y:a.from.height/j.height,x:a.from.width/j.width},to:{y:a.to.height/j.height,x:a.to.width/j.width}};
if(m=="box"||m=="both"){if(d.from.y!=d.to.y){e=e.concat(f);a.from=c.effects.setTransition(a,f,d.from.y,a.from);a.to=c.effects.setTransition(a,f,d.to.y,a.to)}if(d.from.x!=d.to.x){e=e.concat(k);a.from=c.effects.setTransition(a,k,d.from.x,a.from);a.to=c.effects.setTransition(a,k,d.to.x,a.to)}}if(m=="content"||m=="both")if(d.from.y!=d.to.y){e=e.concat(i);a.from=c.effects.setTransition(a,i,d.from.y,a.from);a.to=c.effects.setTransition(a,i,d.to.y,a.to)}c.effects.save(a,n?e:g);a.show();c.effects.createWrapper(a);
a.css("overflow","hidden").css(a.from);if(m=="content"||m=="both"){f=f.concat(["marginTop","marginBottom"]).concat(i);k=k.concat(["marginLeft","marginRight"]);h=e.concat(f).concat(k);a.find("*[width]").each(function(){child=c(this);n&&c.effects.save(child,h);var o={height:child.height(),width:child.width()};child.from={height:o.height*d.from.y,width:o.width*d.from.x};child.to={height:o.height*d.to.y,width:o.width*d.to.x};if(d.from.y!=d.to.y){child.from=c.effects.setTransition(child,f,d.from.y,child.from);
child.to=c.effects.setTransition(child,f,d.to.y,child.to)}if(d.from.x!=d.to.x){child.from=c.effects.setTransition(child,k,d.from.x,child.from);child.to=c.effects.setTransition(child,k,d.to.x,child.to)}child.css(child.from);child.animate(child.to,b.duration,b.options.easing,function(){n&&c.effects.restore(child,h)})})}a.animate(a.to,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){a.to.opacity===0&&a.css("opacity",a.from.opacity);p=="hide"&&a.hide();c.effects.restore(a,
n?e:g);c.effects.removeWrapper(a);b.callback&&b.callback.apply(this,arguments);a.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Shake 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Shake
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(d){d.effects.shake=function(a){return this.queue(function(){var b=d(this),j=["position","top","bottom","left","right"];d.effects.setMode(b,a.options.mode||"effect");var c=a.options.direction||"left",e=a.options.distance||20,l=a.options.times||3,f=a.duration||a.options.duration||140;d.effects.save(b,j);b.show();d.effects.createWrapper(b);var g=c=="up"||c=="down"?"top":"left",h=c=="up"||c=="left"?"pos":"neg";c={};var i={},k={};c[g]=(h=="pos"?"-=":"+=")+e;i[g]=(h=="pos"?"+=":"-=")+e*2;k[g]=
(h=="pos"?"-=":"+=")+e*2;b.animate(c,f,a.options.easing);for(e=1;e<l;e++)b.animate(i,f,a.options.easing).animate(k,f,a.options.easing);b.animate(i,f,a.options.easing).animate(c,f/2,a.options.easing,function(){d.effects.restore(b,j);d.effects.removeWrapper(b);a.callback&&a.callback.apply(this,arguments)});b.queue("fx",function(){b.dequeue()});b.dequeue()})}})(jQuery);
;/*
 * jQuery UI Effects Slide 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Slide
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(c){c.effects.slide=function(d){return this.queue(function(){var a=c(this),h=["position","top","bottom","left","right"],f=c.effects.setMode(a,d.options.mode||"show"),b=d.options.direction||"left";c.effects.save(a,h);a.show();c.effects.createWrapper(a).css({overflow:"hidden"});var g=b=="up"||b=="down"?"top":"left";b=b=="up"||b=="left"?"pos":"neg";var e=d.options.distance||(g=="top"?a.outerHeight({margin:true}):a.outerWidth({margin:true}));if(f=="show")a.css(g,b=="pos"?isNaN(e)?"-"+e:-e:e);
var i={};i[g]=(f=="show"?b=="pos"?"+=":"-=":b=="pos"?"-=":"+=")+e;a.animate(i,{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){f=="hide"&&a.hide();c.effects.restore(a,h);c.effects.removeWrapper(a);d.callback&&d.callback.apply(this,arguments);a.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Transfer 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Transfer
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(e){e.effects.transfer=function(a){return this.queue(function(){var b=e(this),c=e(a.options.to),d=c.offset();c={top:d.top,left:d.left,height:c.innerHeight(),width:c.innerWidth()};d=b.offset();var f=e('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(a.options.className).css({top:d.top,left:d.left,height:b.innerHeight(),width:b.innerWidth(),position:"absolute"}).animate(c,a.duration,a.options.easing,function(){f.remove();a.callback&&a.callback.apply(b[0],arguments);
b.dequeue()})})}})(jQuery);
;

function cloneMore(selector, type) {
    var newElement = $(selector).clone(true);
    var total = $('#id_' + type + '-TOTAL_FORMS').val();
    newElement.find(':input').each(function() {
        var name = $(this).attr('name').replace('-' + (total-1) + '-','-' + total + '-');
        var id = 'id_' + name;

        if ($(this).attr('type') != 'hidden') {
            $(this).val('');
        }
        $(this).attr({'name': name, 'id': id}).removeAttr('checked');
    });
    newElement.find('label').each(function() {
        var newFor = $(this).attr('for').replace('-' + (total-1) + '-','-' + total + '-');
        $(this).attr('for', newFor);
    });
    total++;
    $('#id_' + type + '-TOTAL_FORMS').val(total);
    $(selector).after(newElement);
}



var $wnd = window;
var $doc = window.document;
var $pyjs = new Object();
var $p = null;
$pyjs.platform = 'safari';
$pyjs.global_namespace = this;
$pyjs.__modules__ = {};
$pyjs.modules_hash = {};
$pyjs.loaded_modules = {};
$pyjs.options = new Object();
$pyjs.options.arg_ignore = true;
$pyjs.options.arg_count = true;
$pyjs.options.arg_is_instance = true;
$pyjs.options.arg_instance_type = false;
$pyjs.options.arg_kwarg_dup = true;
$pyjs.options.arg_kwarg_unexpected_keyword = true;
$pyjs.options.arg_kwarg_multiple_values = true;
$pyjs.options.dynamic_loading = false;
$pyjs.trackstack = [];
$pyjs.track = {module:'__main__', lineno: 1};
$pyjs.trackstack.push($pyjs.track);
$pyjs.__active_exception_stack__ = null;
$pyjs.__last_exception_stack__ = null;
$pyjs.__last_exception__ = null;
$pyjs.in_try_except = 0;

var $pyjs_array_slice = Array.prototype.slice;

function $pyjs_kwargs_call(obj, func, star_args, dstar_args, args)
{
    if (obj !== null) {
        func = obj[func];
    }

    // Merge dstar_args into args[0]
    if (dstar_args) {
        if (pyjslib.get_pyjs_classtype(dstar_args) != 'dict') {
            throw (pyjslib.TypeError(func.__name__ + "() arguments after ** must be a dictionary " + pyjslib.repr(dstar_args)));
        }
        var i;
        /* use of __iter__ and next is horrendously expensive,
           use direct access to dictionary instead
         */
        for (var keys in dstar_args.__object) {
            var k = dstar_args.__object[keys][0];
            var v = dstar_args.__object[keys][1];

            if (pyjslib.var_remap.indexOf(k) >= 0) {
                k = '$$' + k;
            }
            if ($pyjs.options.arg_kwarg_multiple_values && typeof args[0][k] !=
 'undefined') {
                $pyjs__exception_func_multiple_values(func.__name__, k);
             }
            args[0][k] = v; 
        }

    }

    // Append star_args to args
    if (star_args) {
        if (star_args === null || typeof star_args.__iter__ != 'function') {
            throw (pyjslib.TypeError(func.__name__ + "() arguments after * must be a sequence" + pyjslib.repr(star_args)));
        }
        if (star_args.__array != null && star_args.__array.constructor == Array) {
            args = args.concat(star_args.__array);
        } else {

            /* use of __iter__ and next is horrendously expensive,
               use __len__ and __getitem__ instead, if they exist.
             */
            var call_args = Array();

            if (typeof star_args.__array != 'undefined') {
                var a = star_args.__array;
                var n = a.length;
                for (var i = 0; i < n; i++) {
                    call_args[i] = a[i];
                }
            } else {
                var $iter = star_args.__iter__();
                if (typeof $iter.__array != 'undefined') {
                    var a = $iter.__array;
                    var n = a.length;
                    for (var i = 0; i < n; i++) {
                        call_args[i] = a[i];
                    }
                } else if (typeof $iter.$genfun == 'function') {
                    var v, i = 0;
                    while (typeof (v = $iter.next(true)) != 'undefined') {
                        call_args[i++] = v;
                    }
                } else {
                    var i = 0;
                    try {
                        while (true) {
                            call_args[i++]=$iter.next();
                        }
                    } catch (e) {
                        if (e.__name__ != 'StopIteration') {
                            throw e;
                        }
                    }
                }
            }
            args = args.concat(call_args);
        }
    }

    // Now convert args to call_args
    // args = __kwargs, arg1, arg2, ...
    // _args = arg1, arg2, arg3, ... [*args, [**kwargs]]
    var _args = [];

    // Get function/method arguments
    if (typeof func.__args__ != 'undefined') {
        var __args__ = func.__args__;
    } else {
        var __args__ = new Array(null, null);
    }

    var a, aname, _idx , idx, res;
    _idx = idx = 1;
    if (obj === null) {
        if (func.__is_instance__ === false) {
            // Skip first argument in __args__
            _idx ++;
        }
    } else {
        if (typeof obj.__is_instance__ == 'undefined' && typeof func.__is_instance__ != 'undefined' && func.__is_instance__ === false) {
            // Skip first argument in __args__
            _idx ++;
        } else if (func.__bind_type__ > 0 && func.__bind_type__ < 3) {
            if (typeof args[1] == 'undefined' || obj.__is_instance__ !== false || args[1].__is_instance__ !== true) {
                // Skip first argument in __args__
                _idx ++;
            }
        }
    }
    for (++_idx; _idx < __args__.length; _idx++, idx++) {
        aname = __args__[_idx][0];
        a = args[0][aname];
        if (typeof args[idx] == 'undefined') {
            _args.push(a);
            delete args[0][aname];
        } else {
            if (typeof a != 'undefined') $pyjs__exception_func_multiple_values(func.__name__, aname);
            _args.push(args[idx]);
        }
    }

    // Append the left-over args
    for (;idx < args.length;idx++) {
        if (typeof args[idx] != 'undefined') {
            _args.push(args[idx]);
        }
    }
    // Remove trailing undefineds
    while (_args.length > 0 && typeof _args[_args.length-1] == 'undefined') {
        _args.pop();
    }

    if (__args__[1] === null) {
        // Check for unexpected keyword
        for (var kwname in args[0]) {
            $pyjs__exception_func_unexpected_keyword(func.__name__, kwname);
        }
        return func.apply(obj, _args);
    }
    a = pyjslib.dict(args[0]);
    if (a.__len__() > 0) {
        a['$pyjs_is_kwarg'] = true;
        _args.push(a);
    }
    res = func.apply(obj, _args);
    delete a['$pyjs_is_kwarg'];
    return res;
}

function $pyjs__exception_func_param(func_name, minargs, maxargs, nargs) {
    if (minargs == maxargs) {
        switch (minargs) {
            case 0:
                var msg = func_name + "() takes no arguments (" + nargs + " given)";
                break;
            case 1:
                msg = func_name + "() takes exactly " + minargs + " argument (" + nargs + " given)";
                break;
            default:
                msg = func_name + "() takes exactly " + minargs + " arguments (" + nargs + " given)";
        };
    } else if (nargs > maxargs) {
        if (maxargs == 1) {
            msg  = func_name + "() takes at most " + maxargs + " argument (" + nargs + " given)";
        } else {
            msg = func_name + "() takes at most " + maxargs + " arguments (" + nargs + " given)";
        }
    } else if (nargs < minargs) {
        if (minargs == 1) {
            msg = func_name + "() takes at least " + minargs + " argument (" + nargs + " given)";
        } else {
            msg = func_name + "() takes at least " + minargs + " arguments (" + nargs + " given)";
        }
    } else {
        return;
    }
    if (typeof pyjslib.TypeError == 'function') {
        throw pyjslib.TypeError(String(msg));
    }
    throw msg;
}

function $pyjs__exception_func_multiple_values(func_name, key) {
    //throw func_name + "() got multiple values for keyword argument '" + key + "'";
    throw pyjslib.TypeError(String(func_name + "() got multiple values for keyword argument '" + key + "'"));
}

function $pyjs__exception_func_unexpected_keyword(func_name, key) {
    //throw func_name + "() got an unexpected keyword argument '" + key + "'";
    throw pyjslib.TypeError(String(func_name + "() got an unexpected keyword argument '" + key + "'"));
}

function $pyjs__exception_func_class_expected(func_name, class_name, instance) {
        if (typeof instance == 'undefined') {
            instance = 'nothing';
        } else if (instance.__is_instance__ == null) {
            instance = "'"+String(instance)+"'";
        } else {
            instance = String(instance);
        }
        //throw "unbound method "+func_name+"() must be called with "+class_name+" class as first argument (got "+instance+" instead)";
        throw pyjslib.TypeError(String("unbound method "+func_name+"() must be called with "+class_name+" class as first argument (got "+instance+" instead)"));
}

function $pyjs__exception_func_instance_expected(func_name, class_name, instance) {
        if (typeof instance == 'undefined') {
            instance = 'nothing';
        } else if (instance.__is_instance__ == null) {
            instance = "'"+String(instance)+"'";
        } else {
            instance = String(instance);
        }
        //throw "unbound method "+func_name+"() must be called with "+class_name+" instance as first argument (got "+instance+" instead)";
        throw pyjslib.TypeError(String("unbound method "+func_name+"() must be called with "+class_name+" instance as first argument (got "+instance+" instead)"));
}

function $pyjs__bind_method(klass, func_name, func, bind_type, args) {
    func.__class__ = klass;
    return $pyjs__bind_method2(func_name, func, bind_type, args);
}

function $pyjs__bind_method2(func_name, func, bind_type, args) {
    func.__name__ = func.func_name = func_name;
    func.__bind_type__ = bind_type;
    func.__args__ = args;
    func.prototype = func;
    return func;
}

function $pyjs__decorated_method(func_name, func, bind_type) {
    var helper = function (){
      var args;
      if (typeof func.__methoddecorator__ == "undefined")
      {
        // add explicit "self" into arguments
        args=[this];
        for (var i=0;i<arguments.length;i++)
          { args.push(arguments[i]); } // concat is not working :-S
      } else {
        args = arguments;
      }
      return func.apply(this, args);
    };

    helper.__name__ = helper.helper_name = func_name;
    helper.__bind_type__ = bind_type;
    helper.__methoddecorator__ = true;
    helper.prototype = helper;
    return helper;
}

function $pyjs__instancemethod(klass, func_name, func, bind_type, args) {
    var fn = function () {
        var _this = this;
        var argstart = 0;
        if (this.__is_instance__ !== true && arguments.length > 0) {
            _this = arguments[0];
            argstart = 1;
        }
        var args = [_this].concat($pyjs_array_slice.call(arguments, argstart));
        if ($pyjs.options.arg_is_instance) {
            if (_this.__is_instance__ === true) {
                if ($pyjs.options.arg_instance_type) return func.apply(this, args);
                for (var c in _this.__mro__) {
                    var cls = _this.__mro__[c];
                    if (cls == klass) {
                        return func.apply(this, args);
                    }
                }
            }
            $pyjs__exception_func_instance_expected(func_name, klass.__name__, _this);
        }
        return func.apply(this, args);
    };
    func.__name__ = func.func_name = func_name;
    func.__bind_type__ = bind_type;
    func.__args__ = args;
    func.__class__ = klass;
    return fn;
}

function $pyjs__staticmethod(klass, func_name, func, bind_type, args) {
    func.__name__ = func.func_name = func_name;
    func.__bind_type__ = bind_type;
    func.__args__ = args;
    func.__class__ = klass;
    return func;
}

function $pyjs__classmethod(klass, func_name, func, bind_type, args) {
    var fn = function () {
        if ($pyjs.options.arg_is_instance && this.__is_instance__ !== true && this.__is_instance__ !== false) $pyjs__exception_func_instance_expected(func_name, klass.__name__);
        var args = [this.prototype].concat($pyjs_array_slice.call(arguments));
        return func.apply(this, args);
    };
    func.__name__ = func.func_name = func_name;
    func.__bind_type__ = bind_type;
    func.__args__ = args;
    func.__class__ = klass;
    return fn;
}

function $pyjs__subclasses__(cls_obj) {
    return cls_obj.__sub_classes__;
}

function $pyjs__mro_merge(seqs) {
    var res = new Array();
    var i = 0;
    var cand = null;
    function resolve_error(candidates) {
        //throw "Cannot create a consistent method resolution order (MRO) for bases " + candidates[0].__name__ + ", "+ candidates[1].__name__;
        throw (pyjslib.TypeError("Cannot create a consistent method resolution order (MRO) for bases " + candidates[0].__name__ + ", "+ candidates[1].__name__));
    }
    for (;;) {
        var nonemptyseqs = new Array();
        for (var j = 0; j < seqs.length; j++) {
            if (seqs[j].length > 0) nonemptyseqs.push(seqs[j]);
        }
        if (nonemptyseqs.length == 0) return res;
        i++;
        var candidates = new Array();
        for (var j = 0; j < nonemptyseqs.length; j++) {
            cand = nonemptyseqs[j][0];
            candidates.push(cand);
            var nothead = new Array();
            for (var k = 0; k < nonemptyseqs.length; k++) {
                for (var m = 1; m < nonemptyseqs[k].length; m++) {
                    if (cand === nonemptyseqs[k][m]) {
                        nothead.push(nonemptyseqs[k]);
                    }
                }
            }
            if (nothead.length != 0)
                cand = null; // reject candidate
            else
                break;
        }
        if (cand == null) {
            resolve_error(candidates);
        }
        res.push(cand);
        for (var j = 0; j < nonemptyseqs.length; j++) {
            if (nonemptyseqs[j][0] === cand) {
                nonemptyseqs[j].shift();
            }
        }
    }
}

function $pyjs__class_instance(class_name, module_name) {
    if (typeof module_name == 'undefined') module_name = typeof __mod_name__ == 'undefined' ? '__main__' : __mod_name__;
    var cls_fn = function(){
        var args, instance;
        if (cls_fn.__number__ !== null) {
            instance = cls_fn.__new__.apply(null, [cls_fn, arguments[0]]);
            args = arguments;
        } else {
            args = [cls_fn];
            for (var i=0; i<arguments.length; i++) {
                args.push(arguments[i]);
            }
            var kwargs = null;
            if (arguments.length >= 1) {
                var maybe_kwargs = args[args.length-1];
                if (maybe_kwargs && typeof maybe_kwargs == 'object' && maybe_kwargs.__name__ == 'dict' && typeof maybe_kwargs.$pyjs_is_kwarg != 'undefined') {
                    kwargs = maybe_kwargs.copy();
                    kwargs.$pyjs_is_kwarg = true;
                }
            }
            instance = cls_fn.__new__.apply(null, args);
            if (kwargs != null) {
                args.shift();
                args[args.length-1] = kwargs;
            } else {
                args = arguments;
            }
        }
        if (typeof instance.__init__ == 'function' && !instance.__init__.__$pyjs_autogenerated__ /* && pyjslib['isinstance'](instance, cls_fn) */) {
            if (instance.__init__.apply(instance, args) != null) {
                //throw '__init__() should return None';
                throw pyjslib.TypeError('__init__() should return None');
            }
        }
        return instance;
    };
    cls_fn.__name__ = class_name;
    cls_fn.__module__ = module_name;
    cls_fn.__class__ = pyjslib['type'];
    cls_fn.toString = function() { return this.__str__();};
    return cls_fn;
}

function $pyjs__class_function(cls_fn, prop, bases) {
    if (typeof cls_fn != 'function') throw "compiler error? $pyjs__class_function: typeof cls_fn != 'function'";
    var class_name = cls_fn.__name__;
    var class_module = cls_fn.__module__;
    cls_fn.__number__ = null;
    var base_mro_list = new Array();
    for (var i = 0; i < bases.length; i++) {
        if (bases[i].__mro__ != null) {
            base_mro_list.push(new Array().concat(bases[i].__mro__));
        } else if (typeof bases[i].__class__ == 'function') {
            base_mro_list.push(new Array().concat([bases[i].__class__]));
        } else if (typeof bases[i].prototype == 'function') {
            base_mro_list.push(new Array().concat([bases[i].prototype]));
        }
    }
    var __mro__ = $pyjs__mro_merge(base_mro_list);

    for (var b = __mro__.length-1; b >= 0; b--) {
        var base = __mro__[b];
        for (var p in base) cls_fn[p] = base[p];
    }
    for (var p in prop) cls_fn[p] = prop[p];

    if (cls_fn['__new__'] == null) {
      cls_fn['__new__'] = $pyjs__bind_method(cls_fn, '__new__', function(cls) {
        if (cls.__init__.__$pyjs_autogenerated__ && $pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
        var instance = function () {};
        instance.prototype = arguments[0].prototype;
        instance = new instance();
        instance.__class__ = instance.prototype;
        instance.__dict__ = instance;
        instance.__is_instance__ = true;
        return instance;
      }, 1, ['cls']);
    }
    if (cls_fn['__init__'] == null) {
      cls_fn['__init__'] = $pyjs__bind_method(cls_fn, '__init__', function () {
        if (this.__is_instance__ === true) {
            var self = this;
            if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
        } else {
            var self = arguments[0];
            if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
            if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
        }
        if ($pyjs.options.arg_instance_type) {
            if (arguments.callee !== arguments.callee.__class__[arguments.callee.__name__]) {
                if (!pyjslib._isinstance(self, arguments.callee.__class__.slice(1))) {
                    $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
                }
            }
        }
      }, 1, ['self']);
      cls_fn['__init__'].__$pyjs_autogenerated__ = true;
    }
    cls_fn.__name__ = class_name;
    cls_fn.__module__ = class_module;
    //cls_fn.__mro__ = pyjslib.list(new Array(cls_fn).concat(__mro__));
    cls_fn.__mro__ = new Array(cls_fn).concat(__mro__);
    cls_fn.prototype = cls_fn;
    cls_fn.__dict__ = cls_fn;
    cls_fn.__is_instance__ = false;
    cls_fn.__super_classes__ = bases;
    cls_fn.__sub_classes__ = new Array();
    for (var i = 0; i < bases.length; i++) {
        if (typeof bases[i].__sub_classes__ == 'array') {
            bases[i].__sub_classes__.push(cls_fn);
        } else {
            bases[i].__sub_classes__ = new Array();
            bases[i].__sub_classes__.push(cls_fn);
        }
    }
    cls_fn.__args__ = cls_fn.__init__.__args__;
    return cls_fn;
}

/* creates a class, derived from bases, with methods and variables */
function $pyjs_type(clsname, bases, methods)
{
    var cls_instance = $pyjs__class_instance(clsname, methods['__module__']);
    var obj = new Object;
    for (var i in methods) {
        if (typeof methods[i] == 'function' && typeof methods[i].__class__ == 'undefined') {
            if (methods[i].__bind_type__ > 0) {
                methods[i].__class__ = cls_instance;
                obj[i] = methods[i];
            } else {
                obj[i] = $pyjs__instancemethod(cls_instance, i, methods[i], methods[i].__bind_type__, methods[i].__args__);
            }
        } else {
            obj[i] = methods[i];
        }
    }
    return $pyjs__class_function(cls_instance, obj, bases);
}


function $pyjs_varargs_handler(args, start, has_kwargs)
{
    var end;
    if (has_kwargs) {
        end = args.length-1;
        start = start - 1;
    } else {
        end = args.length;
    }
    pyjslib['tuple']($pyjs_array_slice.call(args, start, end));
}

function $pyjs_get_vararg_and_kwarg($l, args, kwargname, varargname,
                                    argcount, maxargs, minargs, maxargscheck)
{
    if (kwargname !== null) { /* if node.kwargs: */
        $l[kwargname] = args.length >= maxargs ? args[args.length-1] :
                                                  args[args.length];
        if (typeof $l[kwargname] != 'object' ||
            $l[kwargname].__name__ != 'dict' ||
            typeof $l[kwargname].$pyjs_is_kwarg == 'undefined') {
            if (varargname !== null) { /* if node.varargs: */
                if (typeof $l.kwargs != 'undefined') {
                    $l[varargname].__array.push($l[kwargname]);
                }
            }
            $l[kwargname] = args[args.length+1];
        } else {
            delete $l[kwargname].$pyjs_is_kwarg;
        }
    }
    /* TODO: if options.function_argument_checking */
    /*
    if self.function_argument_checking:
    if ($pyjs.options.arg_count && argcount) {
        $pyjs__exception_func_param(args.callee.__name__,
                                    minargs, maxargscheck, args.length+1);
    }
     */
}

/* creates local variables as an array based on method parameter specification
   and the caller's arguments (in args).
   this function mirrors exactly what Translator._instance_method_init
   produces (it has to).

   when generating code to call this function, defaults_count is passed in
   because otherwise it is necessary to count the callee __args__ list
   items [['arg1'], ['arg2', 'a default value']] and that would be a pain,
   repeated tons of times.

 */
function $pyjs_instance_method_get(inst, args,
                                    defaults_count, /* convenience */
                                    has_varargs, has_kwargs)
{
    /* TODO: pass these in, to save time */
    var callee_args = args.callee.__args__;
    var varargname = callee_args[0]; 
    var kwargname = callee_args[1]; 
    var arg_names = callee_args.slice(2); 

    console.debug(inst.__name__ + " " + args.callee.__name__ + " isinst " + inst.__is_instance__ + " hva " + has_varargs + " hkwa " + has_kwargs + " va " + varargname + " kw " + kwargname + " al " + arg_names.length);

    var $l = {};
    var end;
    var maxargs1 = arg_names.length - 1; /* for __is_instance__ === false */
    var maxargs2 = arg_names.length; /* for __is_instance__ === true */
    var maxargs1check = maxargs1;
    var maxargs2check = maxargs2;
    var minargs1 = maxargs1 - defaults_count;
    var minargs2 = maxargs2 - defaults_count;
    var argcount1;
    var argcount2;

    if (has_kwargs) {
        maxargs1 = maxargs1 + 1;
        maxargs2 = maxargs2 + 1;
    }
    /* for __instance__ === false */
    if (has_varargs) {
        argcount1 = args.length < minargs1;
        maxargs1check = null;
    } else if (minargs1 == maxargs1) {
        argcount1 = args.length != minargs1;
    } else {
        argcount1 = args.length < minargs1 || args.length > maxargs1;
    }
    /* for __instance__ === true */
    if (has_varargs) {
        argcount2 = args.length < minargs2;
        maxargs2check = null;
    } else if (minargs2 == maxargs2) {
        argcount2 = args.length != minargs2;
    } else {
        argcount2 = args.length < minargs2 || args.length > maxargs2;
    }

    if (inst.__is_instance__ === true) {

        $l['self'] = inst;

        if (varargname !== null) { /* if node.varargs: */
            /* self._varargs_handler(varargname, maxargs1) */
            $l[varargname] = $pyjs_varargs_handler(args, maxargs1, has_kwargs);
        }

        $pyjs_get_vararg_and_kwarg($l, args, kwargname, varargname, argcount1,
                                   maxargs1, minargs2, maxargs2check);
        for (i = 1; i < arg_names.length; i++)
        {
            var arg_name = arg_names[i][0];
            $l[arg_name] = args[i-1];
        }
    } else {

        if (arg_names.length > 0)
        {
            $l['self'] = args[0];
        }

        if (varargname !== null) { /* if node.varargs: */
            /* self._varargs_handler(varargname, maxargs1) */
            $l[varargname] = $pyjs_varargs_handler(args, maxargs2, has_kwargs);
        }

        $pyjs_get_vararg_and_kwarg($l, args, kwargname, varargname, argcount1,
                                   maxargs2, minargs2, maxargs2check);
        for (i = 1; i < arg_names.length; i++)
        {
            var arg_name = arg_names[i][0];
            $l[arg_name] = args[i];
        }
    }

    var res = '';
    for (i = 0; i < arg_names.length; i++)
    {
        var arg_name = arg_names[i][0];
        res = res + arg_name + " ";
    }

    console.debug("arg names " + res);

    /* TODO: function arg checking */
    /*
        if arg_names and self.function_argument_checking:
            self.w( """\
if ($pyjs.options.arg_instance_type) {
\tif (%(self)s.prototype.__md5__ !== '%(__md5__)s') {
\t\tif (!@{{_isinstance}}(%(self)s, arguments['callee']['__class__'])) {
\t\t\t$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], %(self)s);
\t\t}
\t}
}\
""" % {'self': arg_names[0], '__md5__': current_klass.__md5__}, output=output)
    */
    $pyjs_default_args_handler($l, args, defaults_count, 
                                    has_varargs, has_kwargs);

    var i = 0;
    var res = '';
    for (var k in $l) {
        res = res + k + " ";
    }
    console.debug("arg keys " + res);
    return $l;
}

function $pyjsdf(arg, alternate)
{
    //console.debug("pyjsdf " + arg + " default " + alternate);
    if (typeof arg == 'undefined') {
        return alternate;
    }
    return arg;
}

/* this function mirrors _default_args_handler
 */
function $pyjs_default_args_handler($l, args, defaults_count, 
                                    has_varargs, has_kwargs)
{
    /* TODO: pass these in, to save time */
    var callee_args = args.callee.__args__;
    var varargname = callee_args[0]; 
    var kwargname = callee_args[1]; 
    var arg_names = callee_args.slice(2); 

    if (has_kwargs
        && kwargname !== null
        && typeof $l[kwargname] == 'undefined')
    {
        /*
            # This is necessary when **kwargs in function definition
            # and the call didn't pass the pyjs_kwargs_call().
            # See libtest testKwArgsInherit
            # This is not completely safe: if the last element in arguments 
            # is an dict and the corresponding argument shoud be a dict and 
            # the kwargs should be empty, the kwargs gets incorrectly the 
            # dict and the argument becomes undefined.
            # E.g.
            # def fn(a = {}, **kwargs): pass
            # fn({'a':1}) -> a gets undefined and kwargs gets {'a':1}
        */
        $l[kwargname] = pyjslib['__empty_dict']();
        for (var i = arg_names.length-1; i >= 0; --i)
        {
            var arg_name = arg_names[i][0];
            if (typeof $l[arg_name] != 'undefined')
            {
                if($l[arg_name] !== null
                   && typeof $l[arg_name].$pyjs_is_kwarg != 'undefined')
                {
                    $l[kwargname] = $l[arg_name];
                    $l[arg_name] = args[i];
                    break;
                }
            }
        }
    }
    var default_pos = arg_names.length - defaults_count;
    console.debug("default_pos " + default_pos + " count " + defaults_count);
    for (var i = 0; i < defaults_count; i++)
    {
        var default_name = arg_names[default_pos][0];
        console.debug("default_name " + default_name);
        default_pos++;
        if (typeof $l[default_name] == 'undefined')
        {
            $l[default_name] = callee_args[default_pos+1][1];
        }
    }
}



/* start module: dynamic */
$pyjs.loaded_modules['dynamic'] = function (__mod_name__) {
	if($pyjs.loaded_modules['dynamic'].__was_initialized__) return $pyjs.loaded_modules['dynamic'];
	var $m = $pyjs.loaded_modules["dynamic"];
	$m.__repr__ = function() { return "<module: dynamic>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'dynamic';
	$m.__name__ = __mod_name__;


 	return this;
}; /* end dynamic */


/* end module: dynamic */




/* start module: easy */
$pyjs.loaded_modules['easy'] = function (__mod_name__) {
	if($pyjs.loaded_modules['easy'].__was_initialized__) return $pyjs.loaded_modules['easy'];
	var $m = $pyjs.loaded_modules["easy"];
	$m.__repr__ = function() { return "<module: easy>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'easy';
	$m.__name__ = __mod_name__;


	$m['j'] = jQuery;
	$m['ObjectRowWidget'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'easy';
		$method = $pyjs__bind_method2('__init__', function(as_json) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				as_json = arguments[1];
			}
			var $attr8,$iter1_nextval,$iter1_type,$attr1,$attr2,$attr5,$attr4,$attr7,$attr6,$assign1,$iter1_array,v,k,$iter1_iter,data,$attr3,$iter1_idx;
			$assign1 = $p['dict'](as_json);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('data', $assign1) : $p['setattr'](self, 'data', $assign1);
			data = $assign1;
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('div', $m['j']('\x3Cdiv\x3E')['addClass']('object_row')) : $p['setattr'](self, 'div', $m['j']('\x3Cdiv\x3E')['addClass']('object_row'));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('button_funcs', $p['list']([(($attr1=($attr2=self)['details_button']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
						$p['getattr']($attr2, 'details_button'):
						self['details_button']), (($attr3=($attr4=self)['graphs_button']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
						$p['getattr']($attr4, 'graphs_button'):
						self['graphs_button']), (($attr5=($attr6=self)['edit_button']) == null || (($attr6.__is_instance__) && typeof $attr5 == 'function') || (typeof $attr5['__get__'] == 'function')?
						$p['getattr']($attr6, 'edit_button'):
						self['edit_button']), (($attr7=($attr8=self)['delete_button']) == null || (($attr8.__is_instance__) && typeof $attr7 == 'function') || (typeof $attr7['__get__'] == 'function')?
						$p['getattr']($attr8, 'delete_button'):
						self['delete_button'])])) : $p['setattr'](self, 'button_funcs', $p['list']([(($attr1=($attr2=self)['details_button']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
						$p['getattr']($attr2, 'details_button'):
						self['details_button']), (($attr3=($attr4=self)['graphs_button']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
						$p['getattr']($attr4, 'graphs_button'):
						self['graphs_button']), (($attr5=($attr6=self)['edit_button']) == null || (($attr6.__is_instance__) && typeof $attr5 == 'function') || (typeof $attr5['__get__'] == 'function')?
						$p['getattr']($attr6, 'edit_button'):
						self['edit_button']), (($attr7=($attr8=self)['delete_button']) == null || (($attr8.__is_instance__) && typeof $attr7 == 'function') || (typeof $attr7['__get__'] == 'function')?
						$p['getattr']($attr8, 'delete_button'):
						self['delete_button'])]));
			$iter1_iter = data['items']();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,true);
			while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
				k = $iter1_nextval.$nextval.__array[0];
				v = $iter1_nextval.$nextval.__array[1];
				$p['setattr'](self, k, v);
			}
			return null;
		}
	, 1, [null,null,['self'],['as_json']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('render', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr9,$attr10;
			self['div']['empty']();
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('bottom_panel', $m['j']('\x3Cdiv\x3E')) : $p['setattr'](self, 'bottom_panel', $m['j']('\x3Cdiv\x3E'));
			self['bottom_panel']['addClass']('bottom_panel');
			self['div']['html']();
			self['div']['append'](self['name_label']());
			self['div']['append'](self['tab_div']());
			return (($attr9=($attr10=self)['div']) == null || (($attr10.__is_instance__) && typeof $attr9 == 'function') || (typeof $attr9['__get__'] == 'function')?
						$p['getattr']($attr10, 'div'):
						self['div']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['render'] = $method;
		$method = $pyjs__bind_method2('control_link', function(html) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				html = arguments[1];
			}

			return $m['j']('\x3Cli\x3E')['html'](html);
		}
	, 1, [null,null,['self'],['html']]);
		$cls_definition['control_link'] = $method;
		$method = $pyjs__bind_method2('tab_div', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter2_nextval,$iter2_type,$iter2_iter,ul,$iter2_idx,b,$attr11,$iter2_array,$attr12;
			ul = $m['j']('\x3Cul\x3E');
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('tab_div', $m['j']('\x3Cdiv\x3E')['append'](ul)) : $p['setattr'](self, 'tab_div', $m['j']('\x3Cdiv\x3E')['append'](ul));
			$iter2_iter = self['button_funcs'];
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
				b = $iter2_nextval.$nextval;
				ul['append'](b());
			}
			self['tab_div']['tabs']();
			return (($attr11=($attr12=self)['tab_div']) == null || (($attr12.__is_instance__) && typeof $attr11 == 'function') || (typeof $attr11['__get__'] == 'function')?
						$p['getattr']($attr12, 'tab_div'):
						self['tab_div']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['tab_div'] = $method;
		$method = $pyjs__bind_method2('name_label', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr14,$attr13;
			return $m['j']('\x3Cspan\x3E')['addClass']('name')['html']((($attr13=($attr14=self)['nickname']) == null || (($attr14.__is_instance__) && typeof $attr13 == 'function') || (typeof $attr13['__get__'] == 'function')?
						$p['getattr']($attr14, 'nickname'):
						self['nickname']));
		}
	, 1, [null,null,['self']]);
		$cls_definition['name_label'] = $method;
		$method = $pyjs__bind_method2('UITab', function(name, href, contents, display_name) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				href = arguments[2];
				contents = arguments[3];
				display_name = arguments[4];
			}
			if (typeof href == 'undefined') href=arguments.callee.__args__[4][1];
			if (typeof contents == 'undefined') contents=arguments.callee.__args__[5][1];
			if (typeof display_name == 'undefined') display_name=arguments.callee.__args__[6][1];
			var $or4,$or1,$or3,$or2,$and1,$and2,div,button;
			button = $m['j']('\x3Ca\x3E')['html'](($p['bool']($or1=display_name)?$or1:name));
			button['attr']('href', ($p['bool']($or3=href)?$or3:$p['sprintf']('#%s', name)));
			$p['setattr'](self, $p['sprintf']('%s_button', name), button);
			if ($p['bool'](($p['bool']($and1=!$p['bool'](href))?contents:$and1))) {
				div = $m['j']('\x3Cdiv\x3E')['html'](contents)['attr']('id', name);
				$p['setattr'](self, '%s_panel', div);
				self['tab_div']['append'](div);
			}
			return self['control_link'](button);
		}
	, 1, [null,null,['self'],['name'],['href', null],['contents', null],['display_name', null]]);
		$cls_definition['UITab'] = $method;
		$method = $pyjs__bind_method2('details_button', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $and3,$and4,opts;
			opts = $p['dict']([['display_name', 'Details']]);
			opts.__setitem__('href', self['get_template']('details_url'));
			opts.__setitem__('contents', self['get_template']('details_contents'));
			if ($p['bool'](($p['bool']($and3=!$p['bool'](opts.__contains__('href')))?!$p['bool'](opts.__contains__('contents')):$and3))) {
				return null;
			}
			return $pyjs_kwargs_call(self, 'UITab', null, opts, [{}, 'details']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['details_button'] = $method;
		$method = $pyjs__bind_method2('edit_button', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $and6,$and5,opts;
			opts = $p['dict']([['display_name', 'Edit']]);
			opts.__setitem__('href', self['get_template']('edit_form_url'));
			opts.__setitem__('contents', self['get_template']('edit_form_contents'));
			if ($p['bool'](($p['bool']($and5=!$p['bool'](opts.__contains__('href')))?!$p['bool'](opts.__contains__('contents')):$and5))) {
				return null;
			}
			return $pyjs_kwargs_call(self, 'UITab', null, opts, [{}, 'edit']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['edit_button'] = $method;
		$method = $pyjs__bind_method2('graphs_button', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $and8,opts,$and7;
			opts = $p['dict']([['display_name', 'Graphs']]);
			opts.__setitem__('href', self['get_template']('graphs_url'));
			opts.__setitem__('contents', self['get_template']('graphs_data'));
			if ($p['bool'](($p['bool']($and7=!$p['bool'](opts.__contains__('href')))?!$p['bool'](opts.__contains__('contents')):$and7))) {
				return null;
			}
			return $pyjs_kwargs_call(self, 'UITab', null, opts, [{}, 'graphs']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['graphs_button'] = $method;
		$method = $pyjs__bind_method2('delete_button', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $or5,$or6,$attr18,$attr15,$attr17,$attr16;
			if ($p['bool'](!$p['bool']($p['hasattr'](self, 'delete_url')))) {
				return null;
			}
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('delete_button', $m['j']('\x3Ca\x3E')['html']('Delete')) : $p['setattr'](self, 'delete_button', $m['j']('\x3Ca\x3E')['html']('Delete'));
			self['delete_button']['attr']('href', ($p['bool']($or5=self['get_template']('delete_url'))?$or5:'#'));
			self['delete_button']['bind']('click', (($attr15=($attr16=self)['confirm_delete']) == null || (($attr16.__is_instance__) && typeof $attr15 == 'function') || (typeof $attr15['__get__'] == 'function')?
						$p['getattr']($attr16, 'confirm_delete'):
						self['confirm_delete']));
			self['delete_button']['addClass']('delete');
			return (($attr17=($attr18=self)['delete_button']) == null || (($attr18.__is_instance__) && typeof $attr17 == 'function') || (typeof $attr17['__get__'] == 'function')?
						$p['getattr']($attr18, 'delete_button'):
						self['delete_button']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['delete_button'] = $method;
		$method = $pyjs__bind_method2('confirm_delete', function(e) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				e = arguments[1];
			}

			if ($p['bool'](!$p['bool'](confirm('Are you sure you want to delete this?')))) {
				e['preventDefault']();
			}
			return null;
		}
	, 1, [null,null,['self'],['e']]);
		$cls_definition['confirm_delete'] = $method;
		$method = $pyjs__bind_method2('template', function(tgt) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tgt = arguments[1];
			}
			var $iter3_idx,$iter3_type,v,$iter3_iter,$iter3_array,k,$iter3_nextval;
			$iter3_iter = self['data']['items']();
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,true);
			while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
				k = $iter3_nextval.$nextval.__array[0];
				v = $iter3_nextval.$nextval.__array[1];
				tgt = tgt['$$replace']($p['sprintf']('{%s}', k), v);
			}
			return tgt;
		}
	, 1, [null,null,['self'],['tgt']]);
		$cls_definition['template'] = $method;
		$method = $pyjs__bind_method2('get_template', function(tgt) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tgt = arguments[1];
			}

			if ($p['bool']($p['hasattr'](self, tgt))) {
				return self['template']($p['getattr'](self, tgt));
			}
			return null;
		}
	, 1, [null,null,['self'],['tgt']]);
		$cls_definition['get_template'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ObjectRowWidget', $p['tuple']($bases), $data);
	})();
	$m['row_types'] = $p['dict']([]);
	$m['row_type_map'] = function(klass) {

		if ($p['bool'](!$p['bool']($m['row_types'].__contains__(klass)))) {
			return $m['ObjectRowWidget'];
		}
		return $m['row_types']['get'](klass, $m['ObjectRowWidget']);
	};
	$m['row_type_map'].__name__ = 'row_type_map';

	$m['row_type_map'].__bind_type__ = 0;
	$m['row_type_map'].__args__ = [null,null,['klass']];
	$m['loaded'] = function(event) {
		var $iter5_nextval,$attr20,$iter5_idx,$iter5_iter,div,$iter4_nextval,obj,$iter4_idx,objects,$attr19,klass,$iter4_type,$iter5_array,$iter4_array,$iter5_type,klass_row_type,$iter4_iter,row;
		$iter4_iter = $p['dict'](object_list)['items']();
		$iter4_nextval=$p['__iter_prepare']($iter4_iter,true);
		while (typeof($p['__wrapped_next']($iter4_nextval).$nextval) != 'undefined') {
			klass = $iter4_nextval.$nextval.__array[0];
			objects = $iter4_nextval.$nextval.__array[1];
			klass_row_type = $m['row_type_map'](klass);
			div = $m['j']($p['sprintf']('div.%s.object_list', klass));
			div['html']('');
			$iter5_iter = $p['list'](objects);
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval).$nextval) != 'undefined') {
				obj = $iter5_nextval.$nextval;
				row = klass_row_type(obj);
				row['render']();
				div['append']((($attr19=($attr20=row)['div']) == null || (($attr20.__is_instance__) && typeof $attr19 == 'function') || (typeof $attr19['__get__'] == 'function')?
							$p['getattr']($attr20, 'div'):
							row['div']));
			}
		}
		return null;
	};
	$m['loaded'].__name__ = 'loaded';

	$m['loaded'].__bind_type__ = 0;
	$m['loaded'].__args__ = [null,null,['event']];
	$m['j']($m['loaded']);
	$m['popup_obj'] = $m['j']('\x3Cdiv\x3E');
	$m['popup'] = function(data) {

		$m['popup_obj']['html'](data);
		$m['popup_obj']['dialog']($p['toJSObjects']($p['dict']([['width', 500]])));
		return null;
	};
	$m['popup'].__name__ = 'popup';

	$m['popup'].__bind_type__ = 0;
	$m['popup'].__args__ = [null,null,['data']];
	$m['handlers'] = function(event) {
		var ajax_modal;
		ajax_modal = function(event) {
			var $attr21,$attr22,href,ajax_complete;
			event['preventDefault']();
			href = $m['j']((($attr21=($attr22=event)['target']) == null || (($attr22.__is_instance__) && typeof $attr21 == 'function') || (typeof $attr21['__get__'] == 'function')?
						$p['getattr']($attr22, 'target'):
						event['target']))['attr']('href');
			ajax_complete = function(data, status, xhr) {

				$m['popup'](data);
				return null;
			};
			ajax_complete.__name__ = 'ajax_complete';

			ajax_complete.__bind_type__ = 0;
			ajax_complete.__args__ = [null,null,['data'],['status'],['xhr']];
			$m['j']['get'](href, '', ajax_complete);
			return null;
		};
		ajax_modal.__name__ = 'ajax_modal';

		ajax_modal.__bind_type__ = 0;
		ajax_modal.__args__ = [null,null,['event']];
		$m['j']('a.ajax')['die']('click');
		$m['j']('a.ajax')['live']('click', ajax_modal);
		return null;
	};
	$m['handlers'].__name__ = 'handlers';

	$m['handlers'].__bind_type__ = 0;
	$m['handlers'].__args__ = [null,null,['event']];
	$m['j']($m['handlers']);
	return this;
}; /* end easy */


/* end module: easy */




/* start module: pyjslib */
var pyjslib;
$pyjs.loaded_modules['pyjslib'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjslib'].__was_initialized__) return $pyjs.loaded_modules['pyjslib'];
	var $m = pyjslib = $pyjs.loaded_modules["pyjslib"];
	$m.__repr__ = function() { return "<module: pyjslib>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjslib';
	$m.__name__ = __mod_name__;
	var $add1,$add3,$add2,$add6,$add4,$add5;
	;
	$m['platform'] = $pyjs.platform;
	$m['sys'] = null;
	$m['dynamic'] = null;

var $max_float_int = 1;
for (var i = 0; i < 1000; i++) {
    $max_float_int *= 2;
    if ($max_float_int + 1 == $max_float_int) {
        break;
    }
}
$max_int = 0x7fffffff;
$min_int = -0x80000000;

	$m['_handle_exception'] = function(err) {
    $pyjs.loaded_modules['sys'].save_exception_stack();

    if (!$pyjs.in_try_except) {
        var $pyjs_msg = $pyjs.loaded_modules['sys']._get_traceback(err);
        $pyjs.__active_exception_stack__ = null;
        $p['printFunc']([$pyjs_msg], true);
        $p['debugReport']($pyjs_msg);
    }
    throw err;
};
;
	$m['_create_class'] = function(clsname, bases, methods) {
		if (typeof bases == 'undefined') bases=arguments.callee.__args__[3][1];
		if (typeof methods == 'undefined') methods=arguments.callee.__args__[4][1];
		var $and1,$and2,$and3,main_base;
		if ($p['bool'](($p['bool']($and1=bases)?($p['bool']($and2=$p['hasattr'](bases.__getitem__(0), '__class__'))?$p['hasattr'](bases.__getitem__(0), '__new__'):$and2):$and1))) {
			main_base = bases.__getitem__(0);
			return main_base['__class__'](clsname, bases, methods);
		}
		return $p['type'](clsname, bases, methods);
	};
	$m['_create_class'].__name__ = '_create_class';

	$m['_create_class'].__bind_type__ = 0;
	$m['_create_class'].__args__ = [null,null,['clsname'],['bases', null],['methods', null]];
	$m['type'] = function(clsname, bases, methods) {
		if (typeof bases == 'undefined') bases=arguments.callee.__args__[3][1];
		if (typeof methods == 'undefined') methods=arguments.callee.__args__[4][1];
		var $iter1_nextval,$iter1_idx,$attr1,k,$attr2,$and4,$and5,$iter1_iter,mth,$iter1_array,$iter1_type;
		if ($p['bool'](($p['bool']($and4=(bases === null))?(methods === null):$and4))) {
			if ($p['bool']($p['isinstance'](clsname, $p['str']))) {
				return $p['str'];
			}
			if ($p['bool']($p['isinstance'](clsname, $p['bool']))) {
				return $p['bool'];
			}
			if ($p['bool']($p['hasattr'](clsname, '__class__'))) {
				return clsname['__class__'];
			}
			if ($p['bool']($p['isinstance'](clsname, $p['float_int']))) {
				return $p['float_int'];
			}
			if ($p['bool']($p['isinstance'](clsname, $p['float']))) {
				return $p['float'];
			}
			if ($p['bool'](typeof clsname == 'number')) {
				return $p['float'];
			}
			throw ($p['ValueError']($p['sprintf']('Cannot determine type for %r', clsname)));
		}
 var mths = {}; 
		if ($p['bool'](methods)) {
			$iter1_iter = methods['keys']();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
				k = $iter1_nextval.$nextval;
				mth = methods.__getitem__(k);
 mths[k] = mth; 
			}
		}
 var bss = null; 
		if ($p['bool'](bases)) {
bss = bases.__array;
		}
 return $pyjs_type(clsname, bss, mths); 
	};
	$m['type'].__name__ = 'type';

	$m['type'].__bind_type__ = 0;
	$m['type'].__args__ = [null,null,['clsname'],['bases', null],['methods', null]];
	$m['object'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'aaa62c5b0e27e4991970af910c700151';
		$method = $pyjs__bind_method2('__str__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

return (self.__is_instance__ === true ? "instance of " : "class ") + (self.__module__?self.__module__ + "." : "") + self.__name__;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$method = $pyjs__bind_method2('__setattr__', function(name, value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				value = arguments[2];
			}


        if (typeof name != 'string') {
            throw $p['TypeError']("attribute name must be string");
        }
        if (attrib_remap.indexOf(name) >= 0) {
            name = '$$' + name;
        }
        if (typeof self[name] != 'undefined'
            && self.__is_instance__
            && self[name] !== null
            && typeof self[name].__set__ == 'function') {
            self[name].__set__(self, value);
        } else {
            self[name] = value;
        }
        
		}
	, 1, [null,null,['self'],['name'],['value']]);
		$cls_definition['__setattr__'] = $method;
		var $bases = new Array();
		return $pyjs_type('object', $bases, $cls_definition);
	})();
	$m['basestring'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'e4d86062b41a007e59927cf97efd2d47';
		var $bases = new Array($m['object']);
		return $pyjs_type('basestring', $bases, $cls_definition);
	})();
	$m['op_is'] = function(a, b) {


    if (a === b) return true;
    if (a !== null && b !== null) {
        switch ((a.__number__ << 8) | b.__number__) {
            case 0x0101:
                return a == b;
            case 0x0202:
                return a.__v == b.__v;
            case 0x0404:
                return a.__cmp__(b) == 0;
        }
    }
    return false;

	};
	$m['op_is'].__name__ = 'op_is';

	$m['op_is'].__bind_type__ = 0;
	$m['op_is'].__args__ = [null,null,['a'],['b']];
	$m['op_eq'] = function(a, b) {


    if (a === null) {
        if (b === null) return true;
        return false;
    }
    if (b === null) {
        return false;
    }
    if (a === b) {
        if (a.__is_instance__ === false && 
            b.__is_instance__ === false) {
            return true;
        }
    }
    switch ((a.__number__ << 8) | b.__number__) {
        case 0x0101:
        case 0x0401:
            return a == b;
        case 0x0102:
            return a == b.__v;
        case 0x0201:
            return a.__v == b;
        case 0x0202:
            return a.__v == b.__v;
        case 0x0104:
        case 0x0204:
            a = new $p['float_int'](a.valueOf());
        case 0x0404:
            return a.__cmp__(b) == 0;
        case 0x0402:
            return a.__cmp__(new $p['float_int'](b.valueOf())) == 0;
    }
    if (typeof a == 'object' || typeof a == 'function') {
        if (typeof a.__eq__ == 'function') {
            if (typeof b.__eq__ != 'function') {
                return false;
            }
            if (a.__eq__ === b.__eq__) {
                return a.__eq__(b);
            }
            if ($p['_isinstance'](a, b)) {
                return a.__eq__(b);
            }
            return false;
        }
        if (typeof a.__cmp__ == 'function') {
            if (typeof b.__cmp__ != 'function') {
                return false;
            }
            if (a.__cmp__ === b.__cmp__) {
                return a.__cmp__(b) == 0;
            }
            if ($p['_isinstance'](a, b)) {
                return a.__cmp__(b) == 0;
            }
            return false;
        }
    } else if (typeof b == 'object' || typeof b == 'function') {
        if (typeof b.__eq__ == 'function') {
            if ($p['_isinstance'](a, b)) {
                return b.__eq__(a);
            }
            return false;
        }
        if (typeof b.__cmp__ == 'function') {
            // typeof bXXX.__cmp__ != 'function'
            // aXXX.__cmp__ !== bXXX.__cmp__
            if ($p['_isinstance'](a, b)) {
                return b.__cmp__(a) == 0;
            }
            return false;
        }
    }
    return a == b;
    
	};
	$m['op_eq'].__name__ = 'op_eq';

	$m['op_eq'].__bind_type__ = 0;
	$m['op_eq'].__args__ = [null,null,['a'],['b']];
	$m['op_uadd'] = function(v) {


    switch (v.__number__) {
        case 0x01:
        case 0x02:
        case 0x04:
            return v;
    }
    if (v!== null) {
        if (typeof v['__pos__'] == 'function') return v.__pos__();
    }

		throw ($p['TypeError']($p['sprintf']('bad operand type for unary +: \x27%r\x27', v)));
		return null;
	};
	$m['op_uadd'].__name__ = 'op_uadd';

	$m['op_uadd'].__bind_type__ = 0;
	$m['op_uadd'].__args__ = [null,null,['v']];
	$m['op_usub'] = function(v) {


    switch (v.__number__) {
        case 0x01:
            return -v;
        case 0x02:
            return new $p['float_int'](-v);
    }
    if (v!== null) {
        if (typeof v['__neg__'] == 'function') return v.__neg__();
    }

		throw ($p['TypeError']($p['sprintf']('bad operand type for unary -: \x27%r\x27', v)));
		return null;
	};
	$m['op_usub'].__name__ = 'op_usub';

	$m['op_usub'].__bind_type__ = 0;
	$m['op_usub'].__args__ = [null,null,['v']];
	$m['__op_add'] = function(x, y) {


        return (typeof (x)==typeof (y) && 
                (typeof x=='number'||typeof x=='string')?
                x+y:
                $p['op_add'](x,y));
    
	};
	$m['__op_add'].__name__ = '__op_add';

	$m['__op_add'].__bind_type__ = 0;
	$m['__op_add'].__args__ = [null,null,['x'],['y']];
	$m['op_add'] = function(x, y) {


    if (x!== null && y!== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                return x+ y;
            case 0x0102:
                return x+ y.__v;
            case 0x0201:
                return x.__v + y;
            case 0x0202:
                return new $p['float_int'](x.__v + y.__v);
            case 0x0204:
                return (new $p['float_int'](x.__v)).__add(y);
            case 0x0402:
                return x.__add(new $p['float_int'](y.__v));
            case 0x0404:
                return x.__add(y);
        }
        if (!x.__number__) {
            if (typeof x== 'string' && typeof y== 'string') return x+ y;
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && $p['isinstance'](x, y)
                && typeof x['__add__'] == 'function')
                return y.__add__(x);
            if (typeof x['__add__'] == 'function') return x.__add__(y);
        }
        if (!y.__number__ && typeof y['__radd__'] == 'function') return y.__radd__(x);
    }

		throw ($p['TypeError']($p['sprintf']('unsupported operand type(s) for +: \x27%r\x27, \x27%r\x27', $p['tuple']([x, y]))));
		return null;
	};
	$m['op_add'].__name__ = 'op_add';

	$m['op_add'].__bind_type__ = 0;
	$m['op_add'].__args__ = [null,null,['x'],['y']];
	$m['__op_sub'] = function(x, y) {


        return (typeof (x)==typeof (y) && 
                (typeof x=='number'||typeof x=='string')?
                x-y:
                $p['op_sub'](x,y));
    
	};
	$m['__op_sub'].__name__ = '__op_sub';

	$m['__op_sub'].__bind_type__ = 0;
	$m['__op_sub'].__args__ = [null,null,['x'],['y']];
	$m['op_sub'] = function(x, y) {


    if (x!== null && y!== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                return x- y;
            case 0x0102:
                return x- y.__v;
            case 0x0201:
                return x.__v - y;
            case 0x0202:
                return new $p['float_int'](x.__v - y.__v);
            case 0x0204:
                return (new $p['float_int'](x.__v)).__sub(y);
            case 0x0402:
                return x.__sub(new $p['float_int'](y.__v));
            case 0x0404:
                return x.__sub(y);
        }
        if (!x.__number__) {
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && $p['isinstance'](x, y)
                && typeof x['__sub__'] == 'function')
                return y.__sub__(x);
            if (typeof x['__sub__'] == 'function') return x.__sub__(y);
        }
        if (!y.__number__ && typeof y['__rsub__'] == 'function') return y.__rsub__(x);
    }

		throw ($p['TypeError']($p['sprintf']('unsupported operand type(s) for -: \x27%r\x27, \x27%r\x27', $p['tuple']([x, y]))));
		return null;
	};
	$m['op_sub'].__name__ = 'op_sub';

	$m['op_sub'].__bind_type__ = 0;
	$m['op_sub'].__args__ = [null,null,['x'],['y']];
	$m['op_floordiv'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return Math.floor(x / y);
            case 0x0102:
                if (y.__v == 0) throw $p['ZeroDivisionError']('float divmod()');
                return Math.floor(x / y.__v);
            case 0x0201:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return Math.floor(x.__v / y);
            case 0x0202:
                if (y.__v == 0) throw $p['ZeroDivisionError']('integer division or modulo by zero');
                return new $p['float_int'](Math.floor(x.__v / y.__v));
            case 0x0204:
                return (new $p['float_int'](x.__v)).__floordiv(y);
            case 0x0402:
                return x.__floordiv(new $p['float_int'](y.__v));
            case 0x0404:
                return x.__floordiv(y);
        }
        if (!x.__number__) {
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && $p['isinstance'](x, y)
                && typeof x['__floordiv__'] == 'function')
                return y.__floordiv__(x);
            if (typeof x['__floordiv__'] == 'function') return x.__floordiv__(y);
        }
        if (!y.__number__ && typeof y['__rfloordiv__'] == 'function') return y.__rfloordiv__(x);
    }

		throw ($p['TypeError']($p['sprintf']('unsupported operand type(s) for //: \x27%r\x27, \x27%r\x27', $p['tuple']([x, y]))));
		return null;
	};
	$m['op_floordiv'].__name__ = 'op_floordiv';

	$m['op_floordiv'].__bind_type__ = 0;
	$m['op_floordiv'].__args__ = [null,null,['x'],['y']];
	$m['op_div'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return x / y;
            case 0x0102:
                if (y.__v == 0) throw $p['ZeroDivisionError']('float divmod()');
                return x / y.__v;
            case 0x0201:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return x.__v / y;
            case 0x0202:
                if (y.__v == 0) throw $p['ZeroDivisionError']('float divmod()');
                return new $p['float_int'](x.__v / y.__v);
            case 0x0204:
                return (new $p['float_int'](x.__v)).__div(y);
            case 0x0402:
                return x.__div(new $p['float_int'](y.__v));
            case 0x0404:
                return x.__div(y);
        }
        if (!x.__number__) {
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && $p['isinstance'](x, y)
                && typeof x['__div__'] == 'function')
                return y.__div__(x);
            if (typeof x['__div__'] == 'function') return x.__div__(y);
        }
        if (!y.__number__ && typeof y['__rdiv__'] == 'function') return y.__rdiv__(x);
    }

		throw ($p['TypeError']($p['sprintf']('unsupported operand type(s) for /: \x27%r\x27, \x27%r\x27', $p['tuple']([x, y]))));
		return null;
	};
	$m['op_div'].__name__ = 'op_div';

	$m['op_div'].__bind_type__ = 0;
	$m['op_div'].__args__ = [null,null,['x'],['y']];
	$m['op_truediv'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
            case 0x0204:
            case 0x0402:
            case 0x0404:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return x / y;
            case 0x0102:
                if (y.__v == 0) throw $p['ZeroDivisionError']('float divmod()');
                return x / y.__v;
            case 0x0201:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return x.__v / y;
            case 0x0202:
                if (y.__v == 0) throw $p['ZeroDivisionError']('float divmod()');
                return x.__v / y.__v;
        }
        if (!x.__number__) {
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && $p['isinstance'](x, y)
                && typeof x['__truediv__'] == 'function')
                return y.__truediv__(x);
            if (typeof x['__truediv__'] == 'function') return x.__truediv__(y);
        }
        if (!y.__number__ && typeof y['__rtruediv__'] == 'function') return y.__rtruediv__(x);
    }

		throw ($p['TypeError']($p['sprintf']('unsupported operand type(s) for /: \x27%r\x27, \x27%r\x27', $p['tuple']([x, y]))));
		return null;
	};
	$m['op_truediv'].__name__ = 'op_truediv';

	$m['op_truediv'].__bind_type__ = 0;
	$m['op_truediv'].__args__ = [null,null,['x'],['y']];
	$m['op_mul'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                return x * y;
            case 0x0102:
                return x * y.__v;
            case 0x0201:
                return x.__v * y;
            case 0x0202:
                return new $p['float_int'](x.__v * y.__v);
            case 0x0204:
                return (new $p['float_int'](x.__v)).__mul(y);
            case 0x0402:
                return x.__mul(new $p['float_int'](y.__v));
            case 0x0404:
                return x.__mul(y);
        }
        if (!x.__number__) {
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && $p['isinstance'](x, y)
                && typeof x['__mul__'] == 'function')
                return y.__mul__(x);
            if (typeof x['__mul__'] == 'function') return x.__mul__(y);
        }
        if (!y.__number__ && typeof y['__rmul__'] == 'function') return y.__rmul__(x);
    }

		throw ($p['TypeError']($p['sprintf']('unsupported operand type(s) for *: \x27%r\x27, \x27%r\x27', $p['tuple']([x, y]))));
		return null;
	};
	$m['op_mul'].__name__ = 'op_mul';

	$m['op_mul'].__bind_type__ = 0;
	$m['op_mul'].__args__ = [null,null,['x'],['y']];
	$m['op_mod'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                var v = x % y;
                return (v < 0 && y > 0 ? v + y : v);
            case 0x0102:
                if (y.__v == 0) throw $p['ZeroDivisionError']('float divmod()');
                var v = x % y.__v;
                return (v < 0 && y.__v > 0 ? v + y.__v : v);
            case 0x0201:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                var v = x.__v % y;
                return (v < 0 && y.__v > 0 ? v + y.__v : v);
            case 0x0202:
                if (y.__v == 0) throw $p['ZeroDivisionError']('integer division or modulo by zero');
                var v = x.__v % y.__v;
                return new $p['float_int'](v < 0 && y.__v > 0 ? v + y.__v : v);
            case 0x0204:
                return (new $p['float_int'](x.__v)).__mod(y);
            case 0x0402:
                return x.__mod(new $p['float_int'](y.__v));
            case 0x0404:
                return x.__mod(y);
        }
        if (typeof x == 'string') {
            return $p['sprintf'](x, y);
        }
        if (!x.__number__) {
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && $p['isinstance'](x, y)
                && typeof x['__mod__'] == 'function')
                return y.__mod__(x);
            if (typeof x['__mod__'] == 'function') return x.__mod__(y);
        }
        if (!y.__number__ && typeof y['__rmod__'] == 'function') return y.__rmod__(x);
    }

		throw ($p['TypeError']($p['sprintf']('unsupported operand type(s) for %: \x27%r\x27, \x27%r\x27', $p['tuple']([x, y]))));
		return null;
	};
	$m['op_mod'].__name__ = 'op_mod';

	$m['op_mod'].__bind_type__ = 0;
	$m['op_mod'].__args__ = [null,null,['x'],['y']];
	$m['op_pow'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return Math.pow(x, y);
            case 0x0102:
                if (y.__v == 0) throw $p['ZeroDivisionError']('float divmod()');
                return Math.pow(x,y.__v);
            case 0x0201:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return Math.pow(x.__v,y);
            case 0x0202:
                return x.__pow__(y);
            case 0x0204:
                return (new $p['float_int'](x.__v)).__pow(y);
            case 0x0402:
                return x.__pow(new $p['float_int'](y.__v));
            case 0x0404:
                return x.__pow(y);
        }
        if (!x.__number__) {
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && $p['isinstance'](x, y)
                && typeof x['__pow__'] == 'function')
                return y.__pow__(x);
            if (typeof x['__pow__'] == 'function') return x.__pow__(y);
        }
        if (!y.__number__ && typeof y['__rpow__'] == 'function') return y.__rpow__(x);
    }

		throw ($p['TypeError']($p['sprintf']('unsupported operand type(s) for %: \x27%r\x27, \x27%r\x27', $p['tuple']([x, y]))));
		return null;
	};
	$m['op_pow'].__name__ = 'op_pow';

	$m['op_pow'].__bind_type__ = 0;
	$m['op_pow'].__args__ = [null,null,['x'],['y']];
	$m['op_invert'] = function(v) {


    if (v !== null) {
        if (typeof v['__invert__'] == 'function') return v.__invert__();
    }

		throw ($p['TypeError']($p['sprintf']('bad operand type for unary -: \x27%r\x27', v)));
		return null;
	};
	$m['op_invert'].__name__ = 'op_invert';

	$m['op_invert'].__bind_type__ = 0;
	$m['op_invert'].__args__ = [null,null,['v']];
	$m['op_bitshiftleft'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0202:
                return x.__lshift__(y);
            case 0x0204:
                return y.__rlshift__(x);
            case 0x0402:
                return x.__lshift(y.__v);
            case 0x0404:
                return x.__lshift(y.valueOf());
        }
        if (typeof x['__lshift__'] == 'function') {
            var v = x.__lshift__(y);
            if (v !== $p['NotImplemented']) return v;
        }
        if (typeof y['__rlshift__'] != 'undefined') return y.__rlshift__(x);
    }

		throw ($p['TypeError']($p['sprintf']('unsupported operand type(s) for \x3C\x3C: \x27%r\x27, \x27%r\x27', $p['tuple']([x, y]))));
		return null;
	};
	$m['op_bitshiftleft'].__name__ = 'op_bitshiftleft';

	$m['op_bitshiftleft'].__bind_type__ = 0;
	$m['op_bitshiftleft'].__args__ = [null,null,['x'],['y']];
	$m['op_bitshiftright'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0202:
                return x.__rshift__(y);
            case 0x0204:
                return y.__rrshift__(x);
            case 0x0402:
                return x.__rshift(y.__v);
            case 0x0404:
                return x.__rshift(y.valueOf());
        }
        if (typeof x['__rshift__'] == 'function') {
            var v = x.__rshift__(y);
            if (v !== $p['NotImplemented']) return v;
        }
        if (typeof y['__rrshift__'] != 'undefined') return y.__rrshift__(x);
    }

		throw ($p['TypeError']($p['sprintf']('unsupported operand type(s) for \x3E\x3E: \x27%r\x27, \x27%r\x27', $p['tuple']([x, y]))));
		return null;
	};
	$m['op_bitshiftright'].__name__ = 'op_bitshiftright';

	$m['op_bitshiftright'].__bind_type__ = 0;
	$m['op_bitshiftright'].__args__ = [null,null,['x'],['y']];
	$m['op_bitand2'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0202:
                return x.__and__(y);
            case 0x0204:
                return y.__and(new $p['float_int'](x));
            case 0x0402:
                return x.__and(new $p['float_int'](y.__v));
            case 0x0404:
                return x.__and(y);
        }
        if (typeof x['__and__'] == 'function') {
            var v = x.__and__(y);
            if (v !== $p['NotImplemented']) return v;
        }
        if (typeof y['__rand__'] != 'undefined') return y.__rand__(x);
    }

		throw ($p['TypeError']($p['sprintf']('unsupported operand type(s) for \x26: \x27%r\x27, \x27%r\x27', $p['tuple']([x, y]))));
		return null;
	};
	$m['op_bitand2'].__name__ = 'op_bitand2';

	$m['op_bitand2'].__bind_type__ = 0;
	$m['op_bitand2'].__args__ = [null,null,['x'],['y']];
	$m['op_bitand'] = function (args) {
    var a;
    if (args[0] !== null && args[1] !== null && args.length > 1) {
        var res, r;
        res = args[0];
        for (i = 1; i < args.length; i++) {
            if (typeof res['__and__'] == 'function') {
                r = res;
                res = res.__and__(args[i]);
                if (res === $p['NotImplemented'] && typeof args[i]['__rand__'] == 'function') {
                    res = args[i].__rand__(r);
                }
            } else if (typeof args[i]['__rand__'] == 'function') {
                res = args[i].__rand__(res);
            } else {
                res = null;
                break;
            }
            if (res === $p['NotImplemented']) {
                res = null;
                break;
            }
        }
        if (res !== null) {
            return res;
        }
    }
;
	throw ($p['TypeError']($m['__op_add']($add1='unsupported operand type(s) for \x26: ',$add2=', '['join'](function(){
		var a,$iter2_nextval,$iter2_type,$iter2_iter,$listcomp1,$iter2_idx,$iter2_array;
	$listcomp1 = $p['list']();
	$iter2_iter = $p['list']((typeof args == "undefined"?$m.args:args));
	$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
	while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
		a = $iter2_nextval.$nextval;
		$listcomp1['append']($p['repr'](a));
	}

	return $listcomp1;}()))));

};

	$m['op_bitxor2'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0202:
                return x.__xor__(y);
            case 0x0204:
                return y.__xor(new $p['float_int'](x));
            case 0x0402:
                return x.__xor(new $p['float_int'](y.__v));
            case 0x0404:
                return x.__xor(y);
        }
        if (typeof x['__xor__'] == 'function') {
            var v = x.__xor__(y);
            if (v !== $p['NotImplemented']) return v;
        }
        if (typeof y['__rxor__'] != 'undefined') return y.__rxor__(x);
    }

		throw ($p['TypeError']($p['sprintf']('unsupported operand type(s) for ^: \x27%r\x27, \x27%r\x27', $p['tuple']([x, y]))));
		return null;
	};
	$m['op_bitxor2'].__name__ = 'op_bitxor2';

	$m['op_bitxor2'].__bind_type__ = 0;
	$m['op_bitxor2'].__args__ = [null,null,['x'],['y']];
	$m['op_bitxor'] = function (args) {
    var a;
    if (args[0] !== null && args[1] !== null && args.length > 1) {
        var res, r;
        res = args[0];
        for (i = 1; i < args.length; i++) {
            if (typeof res['__xor__'] == 'function') {
                r = res;
                res = res.__xor__(args[i]);
                if (res === $p['NotImplemented'] && typeof args[i]['__rxor__'] == 'function') {
                    res = args[i].__rxor__(r);
                }
            } else if (typeof args[i]['__rxor__'] == 'function') {
                res = args[i].__rxor__(res);
            } else {
                res = null;
                break;
            }
            if (res === $p['NotImplemented']) {
                res = null;
                break;
            }
        }
        if (res !== null) {
            return res;
        }
    }
;
	throw ($p['TypeError']($m['__op_add']($add3='unsupported operand type(s) for ^: ',$add4=', '['join'](function(){
		var a,$iter3_idx,$iter3_nextval,$iter3_type,$listcomp2,$iter3_iter,$iter3_array;
	$listcomp2 = $p['list']();
	$iter3_iter = $m.args;
	$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
	while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
		a = $iter3_nextval.$nextval;
		$listcomp2['append']($p['repr'](a));
	}

	return $listcomp2;}()))));

};

	$m['op_bitor2'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0202:
                return x.__or__(y);
            case 0x0204:
                return y.__or(new $p['float_int'](x));
            case 0x0402:
                return x.__or(new $p['float_int'](y.__v));
            case 0x0404:
                return x.__or(y);
        }
        if (typeof x['__or__'] == 'function') {
            var v = x.__or__(y);
            if (v !== $p['NotImplemented']) return v;
        }
        if (typeof y['__ror__'] != 'undefined') {
            return y.__ror__(x);
        }
    }

		throw ($p['TypeError']($p['sprintf']('unsupported operand type(s) for |: \x27%r\x27, \x27%r\x27', $p['tuple']([x, y]))));
		return null;
	};
	$m['op_bitor2'].__name__ = 'op_bitor2';

	$m['op_bitor2'].__bind_type__ = 0;
	$m['op_bitor2'].__args__ = [null,null,['x'],['y']];
	$m['op_bitor'] = function (args) {
    var a;
    if (args[0] !== null && args[1] !== null && args.length > 1) {
        var res, r;
        res = args[0];
        for (i = 1; i < args.length; i++) {
            if (typeof res['__or__'] == 'function') {
                r = res;
                res = res.__or__(args[i]);
                if (res === $p['NotImplemented'] && typeof args[i]['__ror__'] == 'function') {
                    res = args[i].__ror__(r);
                }
            } else if (typeof args[i]['__ror__'] == 'function') {
                res = args[i].__ror__(res);
            } else {
                res = null;
                break;
            }
            if (res === $p['NotImplemented']) {
                res = null;
                break;
            }
        }
        if (res !== null) {
            return res;
        }
    }
;
	throw ($p['TypeError']($m['__op_add']($add5='unsupported operand type(s) for |: ',$add6=', '['join'](function(){
		var a,$iter4_nextval,$iter4_idx,$listcomp3,$iter4_type,$iter4_array,$iter4_iter;
	$listcomp3 = $p['list']();
	$iter4_iter = $m.args;
	$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
	while (typeof($p['__wrapped_next']($iter4_nextval).$nextval) != 'undefined') {
		a = $iter4_nextval.$nextval;
		$listcomp3['append']($p['repr'](a));
	}

	return $listcomp3;}()))));

};

	$m['___import___'] = function(path, context, module_name, get_base) {
		if (typeof module_name == 'undefined') module_name=arguments.callee.__args__[4][1];
		if (typeof get_base == 'undefined') get_base=arguments.callee.__args__[5][1];
		var $and8,$and14,$and9,parentName,module,$attr20,$attr21,$attr14,$attr23,$attr24,$attr25,$and15,is_module_object,$attr18,in_context,$and11,$attr16,$attr26,$attr11,$and6,$attr7,$attr22,objName,$sub2,$sub1,$and16,$attr9,$attr8,contextTopName,$attr3,$attr5,$attr4,inContextTopName,$attr6,sys,$add15,$add16,$add17,$add10,$add11,$add12,$add13,$attr15,$attr17,$and7,$add18,$attr10,$attr13,$attr12,importName,$add14,$and13,path_parts,topName,$and10,$and12,depth,inContextImportName,inContextParentName,$add7,$and17,$add8,$add9,$attr19,save_track_module;
		save_track_module = $pyjs.track.module;
		sys = $pyjs.loaded_modules['sys'];
		if ($p['bool'](sys.__was_initialized__ != true)) {
			module = $pyjs.loaded_modules[path];
			module();
$pyjs.track.module = save_track_module;
			if ($p['bool']($m['op_eq'](path, 'sys'))) {
				module.modules = $p['dict']($p['dict']([['pyjslib', (typeof pyjslib == "undefined"?$m.pyjslib:pyjslib)], ['sys', module]]));
			}
			return module;
		}
		importName = path;
		is_module_object = false;
		path_parts = path['__split']('.');
		depth = path_parts['length'];
		topName = path_parts[0];
		objName = path_parts[path_parts.length-1];
		parentName = path_parts['slice'](0, $m['__op_sub']($sub1=path_parts['length'],$sub2=1))['join']('.');
		if ($p['bool']((context === null))) {
			in_context = false;
		}
		else {
			in_context = true;
			inContextImportName = $m['__op_add']($add9=$m['__op_add']($add7=context,$add8='.'),$add10=importName);
			if ($p['bool'](!$p['bool'](parentName))) {
				inContextParentName = context;
			}
			else {
				inContextParentName = $m['__op_add']($add13=$m['__op_add']($add11=context,$add12='.'),$add14=parentName);
			}
			inContextTopName = $m['__op_add']($add17=$m['__op_add']($add15=context,$add16='.'),$add18=topName);
			contextTopName = context.__split('.')[0];
			if ($p['bool'](($p['bool']($and6=($p['cmp'](depth, 1) == 1))?sys['modules']['has_key'](inContextParentName):$and6))) {
				module = sys['modules'].__getitem__(inContextParentName);
				if ($p['bool'](typeof module[objName] != 'undefined')) {
					if ($p['bool'](get_base)) {
						return $pyjs.loaded_modules[inContextTopName];
					}
					return module[objName];
				}
			}
			else if ($p['bool'](sys['modules']['has_key'](inContextImportName))) {
				if ($p['bool'](get_base)) {
					return $pyjs.loaded_modules[inContextTopName];
				}
				return sys['modules'].__getitem__(inContextImportName);
			}
			else if ($p['bool'](($p['bool']($and8=($p['cmp'](depth, 1) == 1))?typeof (module = $pyjs.loaded_modules[inContextParentName]) != 'undefined':$and8))) {
				sys['modules'].__setitem__(inContextParentName, module);
module.__was_initialized__ = false;
				module(null);
$pyjs.track.module = save_track_module;
				if ($p['bool'](typeof module[objName] != 'undefined')) {
					if ($p['bool'](get_base)) {
						return $pyjs.loaded_modules[inContextTopName];
					}
					return module[objName];
				}
			}
			if ($p['bool'](sys['modules']['has_key'](inContextImportName))) {
				if ($p['bool'](get_base)) {
					return $pyjs.loaded_modules[inContextTopName];
				}
				return sys['modules'].__getitem__(inContextImportName);
			}
			if ($p['bool'](typeof (module = $pyjs.loaded_modules[inContextImportName]) != 'undefined')) {
				sys['modules'].__setitem__(inContextImportName, module);
module.__was_initialized__ = false;
				module(module_name);
$pyjs.track.module = save_track_module;
				if ($p['bool'](get_base)) {
					return $pyjs.loaded_modules[inContextTopName];
				}
				return module;
			}
			if ($p['bool'](!$p['bool'](sys['modules']['has_key'](inContextTopName)))) {
				if ($p['bool'](typeof (module = $pyjs.loaded_modules[inContextTopName]) != 'function')) {
					in_context = false;
					if ($p['bool']($pyjs.options.dynamic_loading)) {
						module = (typeof __dynamic_load__ == "undefined"?$m.__dynamic_load__:__dynamic_load__)(inContextTopName);
						if ($p['bool'](typeof module == 'function')) {
							in_context = true;
							if ($p['bool']($m['op_eq'](depth, 1))) {
								module(module_name);
$pyjs.track.module = save_track_module;
								return module;
							}
							else {
								module(null);
								if ($p['bool'](($p['bool']($and10=$m['op_eq'](depth, 2))?typeof module[objName] != 'undefined':$and10))) {
									if ($p['bool'](get_base)) {
										return $pyjs.loaded_modules[inContextTopName];
									}
									return module[objName];
								}
							}
						}
					}
				}
			}
			if ($p['bool'](in_context)) {
				importName = inContextImportName;
				parentName = inContextParentName;
				topName = inContextTopName;
			}
		}
		if ($p['bool'](!$p['bool'](in_context))) {
			if ($p['bool'](($p['bool']($and12=parentName)?sys['modules']['has_key'](parentName):$and12))) {
				module = sys['modules'].__getitem__(parentName);
				if ($p['bool'](typeof module[objName] != 'undefined')) {
					if ($p['bool'](get_base)) {
						return $pyjs.loaded_modules[topName];
					}
					return module[objName];
				}
			}
			else if ($p['bool'](sys['modules']['has_key'](importName))) {
				if ($p['bool'](get_base)) {
					return $pyjs.loaded_modules[topName];
				}
				return sys['modules'].__getitem__(importName);
			}
			else if ($p['bool'](($p['bool']($and14=parentName)?typeof (module = $pyjs.loaded_modules[parentName]) != 'undefined':$and14))) {
				sys['modules'].__setitem__(parentName, module);
module.__was_initialized__ = false;
				module(null);
$pyjs.track.module = save_track_module;
				if ($p['bool'](typeof module[objName] != 'undefined')) {
					if ($p['bool'](get_base)) {
						return $pyjs.loaded_modules[topName];
					}
					return module[objName];
				}
			}
			if ($p['bool'](sys['modules']['has_key'](importName))) {
				if ($p['bool'](get_base)) {
					return $pyjs.loaded_modules[topName];
				}
				return sys['modules'].__getitem__(importName);
			}
			if ($p['bool'](typeof (module = $pyjs.loaded_modules[importName]) != 'undefined')) {
				sys['modules'].__setitem__(importName, module);
				if ($p['bool'](($p['bool']($and16=!$m['op_eq'](importName, 'pyjslib'))?!$m['op_eq'](importName, 'sys'):$and16))) {
module.__was_initialized__ = false;
				}
				module(module_name);
$pyjs.track.module = save_track_module;
				if ($p['bool'](get_base)) {
					return $pyjs.loaded_modules[topName];
				}
				return module;
			}
		}
		if ($p['bool']($pyjs.options.dynamic_loading)) {
			module = (typeof __dynamic_load__ == "undefined"?$m.__dynamic_load__:__dynamic_load__)(importName);
			if ($p['bool'](typeof module== 'function')) {
				module(module_name);
$pyjs.track.module = save_track_module;
				if ($p['bool'](get_base)) {
					return $pyjs.loaded_modules[topName];
				}
				return module;
			}
		}
		throw ($p['ImportError']($p['sprintf']('No module named %s, %s in context %s', $p['tuple']([importName, path, context]))));
		return null;
	};
	$m['___import___'].__name__ = '___import___';

	$m['___import___'].__bind_type__ = 0;
	$m['___import___'].__args__ = [null,null,['path'],['context'],['module_name', null],['get_base', true]];
	$m['__dynamic_load__'] = function(importName) {
		var $add28,$add30,$or1,$or3,$or2,$add21,$add20,$add23,$add22,$add25,$add24,module,$add26,$add29,$pyjs_try_err,$add27,$add19;
		;
		module = $pyjs.loaded_modules[importName];
		if ($p['bool'](($p['bool']($or1=($m['sys'] === null))?$or1:($p['bool']($or2=($m['dynamic'] === null))?$or2:$m['__nondynamic_modules__']['has_key'](importName))))) {
			return module;
		}
		if ($p['bool'](typeof module== 'undefined')) {
			try {
				$m['dynamic']['ajax_import']($m['__op_add']($add25=$m['__op_add']($add23=$m['__op_add']($add21=$m['__op_add']($add19='lib/',$add20=importName),$add22='.__'),$add24=$m['platform']),$add26='__.js'));
				module = $pyjs.loaded_modules[importName];
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
				}
			}
		}
		if ($p['bool'](typeof module== 'undefined')) {
			try {
				$m['dynamic']['ajax_import']($m['__op_add']($add29=$m['__op_add']($add27='lib/',$add28=importName),$add30='.js'));
				module = $pyjs.loaded_modules[importName];
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
				}
			}
			if ($p['bool'](typeof module== 'undefined')) {
				$m['__nondynamic_modules__'].__setitem__(importName, 1.0);
			}
		}
		return module;
	};
	$m['__dynamic_load__'].__name__ = '__dynamic_load__';

	$m['__dynamic_load__'].__bind_type__ = 0;
	$m['__dynamic_load__'].__args__ = [null,null,['importName']];
	$m['BaseException'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '21bc68e523c5d29b1a76cb5696af5c74';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));

			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length));

			}

			self.args = args;
			return null;
		}
	, 1, ['args',null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			return self['args']['__getitem__'](index);
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method2('toString', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add32,$add33,$add31,$add34,$attr27,$attr28;
			return $m['__op_add']($add33=$m['__op_add']($add31=self['__name__'],$add32=': '),$add34=self['__str__']());
		}
	, 1, [null,null,['self']]);
		$cls_definition['toString'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr33,$attr32,$attr31,$attr30,$attr36,$attr35,$attr34,$attr29;
			if ($p['bool'](($p['len'](self['args']) === 0))) {
				return '';
			}
			else if ($p['bool'](($p['len'](self['args']) === 1))) {
				return $p['str'](self['args'].__getitem__(0));
			}
			return $p['repr'](self['args']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add36,$add35,$attr37,$attr40,$attr41,$attr42,$attr39,$attr38;
			if ($p['bool']($p['callable'](self))) {
				return $p['sprintf']('\x3Ctype \x27%s\x27\x3E', self['__name__']);
			}
			return $m['__op_add']($add35=self['__name__'],$add36=$p['repr'](self['args']));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		var $bases = new Array(pyjslib.object);
		return $pyjs_type('BaseException', $bases, $cls_definition);
	})();
	$m['KeyboardInterrupt'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'a7abcff68949c3a285e3338a247ea592';
		var $bases = new Array($m['BaseException']);
		return $pyjs_type('KeyboardInterrupt', $bases, $cls_definition);
	})();
	$m['Exception'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '34ff37a8b89aac789cd40f06fb0c8058';
		var $bases = new Array($m['BaseException']);
		return $pyjs_type('Exception', $bases, $cls_definition);
	})();
	$m['StandardError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '50e14b35f31937bacdbc674f2f93764a';
		var $bases = new Array($m['Exception']);
		return $pyjs_type('StandardError', $bases, $cls_definition);
	})();
	$m['AssertionError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '975fd34b43b9afa9314bc2b15db623ad';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('AssertionError', $bases, $cls_definition);
	})();
	$m['GeneratorExit'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'b379eda31cf5ea38ea21c189d3434e46';
		var $bases = new Array($m['Exception']);
		return $pyjs_type('GeneratorExit', $bases, $cls_definition);
	})();
	$m['TypeError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '0ffe3389a494dd691f8f0a6c104a69ab';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('TypeError', $bases, $cls_definition);
	})();
	$m['AttributeError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'c6b5501f1dffb3c1effe0793e329e0e3';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('AttributeError', $bases, $cls_definition);
	})();
	$m['NameError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '82ea70b6c2840956603a48365ac4a4ee';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('NameError', $bases, $cls_definition);
	})();
	$m['ValueError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '228a8a474d5b574b4a7a253fe4564eaa';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('ValueError', $bases, $cls_definition);
	})();
	$m['ImportError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '82f6b7e63c89e1e76ab0f1b697ed5f92';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('ImportError', $bases, $cls_definition);
	})();
	$m['LookupError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '4176b70d50487f6fe91e6d5908c16f82';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('LookupError', $bases, $cls_definition);
	})();
	$m['RuntimeError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '6a4668082833c52e5d709133d5819053';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('RuntimeError', $bases, $cls_definition);
	})();
	$m['ArithmeticError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '559ae956d62d16745bb7bed704eef8ac';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('ArithmeticError', $bases, $cls_definition);
	})();
	$m['KeyError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '4f2aa0597758ae72ff1081455b4d4810';
		$method = $pyjs__bind_method2('__str__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr50,$attr46,$attr47,$attr44,$attr45,$attr43,$attr48,$attr49;
			if ($p['bool'](($p['len'](self['args']) === 0))) {
				return '';
			}
			else if ($p['bool'](($p['len'](self['args']) === 1))) {
				return $p['repr'](self['args'].__getitem__(0));
			}
			return $p['repr'](self['args']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		var $bases = new Array($m['LookupError']);
		return $pyjs_type('KeyError', $bases, $cls_definition);
	})();
	$m['IndexError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '1e436254d757ac537fe40a5f2cf83386';
		var $bases = new Array($m['LookupError']);
		return $pyjs_type('IndexError', $bases, $cls_definition);
	})();
	$m['NotImplementedError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '161cbcffc4508820d0821b5d31cb2c13';
		var $bases = new Array($m['RuntimeError']);
		return $pyjs_type('NotImplementedError', $bases, $cls_definition);
	})();
	$m['ZeroDivisionError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'fa87740b499217b38099934604c8aa39';
		var $bases = new Array($m['ArithmeticError']);
		return $pyjs_type('ZeroDivisionError', $bases, $cls_definition);
	})();
	$m['OverflowError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '08ecc73f8948598feb6f46d1c4144d8d';
		var $bases = new Array($m['ArithmeticError']);
		return $pyjs_type('OverflowError', $bases, $cls_definition);
	})();
	$m['UndefinedValueError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '7359cf8929321766acaab360f2c72264';
		var $bases = new Array($m['ValueError']);
		return $pyjs_type('UndefinedValueError', $bases, $cls_definition);
	})();
	$m['init'] = function() {


$p['_errorMapping'] = function(err) {
    if (err instanceof(ReferenceError) || err instanceof(TypeError)) {
        var message = '';
        try {
            message = err.message;
        } catch ( e) {
        }
        return $m['AttributeError'](message);
    }
    return err;
};


$p['TryElse'] = function () { };
$p['TryElse'].prototype = new Error();
$p['TryElse'].__name__ = 'TryElse';


$p['StopIteration'] = function () { };
$p['StopIteration'].prototype = new Error();
$p['StopIteration'].__name__ = 'StopIteration';


String.prototype.rfind = function(sub, start, end) {
    var pos;
    if (typeof start != 'undefined') {
        /* *sigh* - python rfind goes *RIGHT*, NOT left */
        pos = this.substring(start).lastIndexOf(sub);
        if (pos == -1) {
            return -1;
        }
        pos += start;
    }
    else {
        pos=this.lastIndexOf(sub, start);
    }
    if (typeof end == 'undefined') return pos;

    if (pos + sub.length>end) return -1;
    return pos;
};

String.prototype.find = function(sub, start, end) {
    var pos=this.indexOf(sub, start);
    if (typeof end == 'undefined') return pos;

    if (pos + sub.length>end) return -1;
    return pos;
};

String.prototype.count = function(sub, start, end) {
    var pos, count = 0, n = sub.length;
    if (typeof start == 'undefined') start = 0;
    if (typeof end == 'undefined') end = this.length;
    while (start < end) {
        pos = this.find(sub, start, end);
        if (pos < 0) break;
        count ++;
        start = pos + n;
    }
    return count;
}

String.prototype.join = function(data) {
    var text="";

    if (data.constructor === Array) {
        return data.join(this);
    } else if (typeof data.__iter__ == 'function') {
        if (typeof data.__array == 'object') {
            return data.__array.join(this);
        }
        var iter=data.__iter__();
        if (typeof iter.__array == 'object') {
            return iter.__array.join(this);
        }
        data = [];
        var item, i = 0;
        if (typeof iter.$genfunc == 'function') {
            while (typeof (item=iter.next(true)) != 'undefined') {
                data[i++] = item;
            }
        } else {
            try {
                while (true) {
                    data[i++] = iter.next();
                }
            }
            catch (e) {
                if (e.__name__ != 'StopIteration') throw e;
            }
        }
        return data.join(this);
    }

    return text;
};

String.prototype.isdigit = function() {
    return (this.match(/^\d+$/g) !== null);
};

String.prototype.isalnum = function() {
    return (this.match(/^[a-zA-Z\d]+$/g) !== null);
};

String.prototype.isalpha = function() {
    return (this.match(/^[a-zA-Z]+$/g) !== null);
};

String.prototype.isupper = function() {
    return (this.match(/[a-z]/g) === null);
};

String.prototype.__replace=String.prototype.replace;

String.prototype.$$replace = function(old, replace, count) {
    var do_max=false;
    var start=0;
    var new_str="";
    var pos=0;

    if (typeof old != 'string') return this.__replace(old, replace);
    if (typeof count != 'undefined') do_max=true;

    while (start<this.length) {
        if (do_max && !count--) break;

        pos=this.indexOf(old, start);
        if (pos<0) break;

        new_str+=this.substring(start, pos) + replace;
        start=pos+old.length;
    }
    if (start<this.length) new_str+=this.substring(start);

    return new_str;
};

String.prototype.__contains__ = function(s){
    return this.indexOf(s)>=0;
};

String.prototype.__split = String.prototype.split;

String.prototype.$$split = function(sep, maxsplit) {
    var items=$p['list']();
    var do_max=false;
    var subject=this;
    var start=0;
    var pos=0;

    if (sep === null || typeof sep == 'undefined') {
        sep=" ";
        if (subject.length == 0) {
            return items;
        }
        subject=subject.strip();
        subject=subject.$$replace(/\s+/g, sep);
    }
    else if (typeof maxsplit != 'undefined') do_max=true;

    if (subject.length == 0) {
        items.__array.push('');
        return items;
    }

    while (start<subject.length) {
        if (do_max && !maxsplit--) break;

        pos=subject.indexOf(sep, start);
        if (pos<0) break;

        items.__array.push(subject.substring(start, pos));
        start=pos+sep.length;
    }
    if (start<=subject.length) items.__array.push(subject.substring(start));

    return items;
};

String.prototype.rsplit = function(sep, maxsplit) {
    var items=$p['list']();
    var do_max=false;
    var subject=this;
    var pos=0;

    if (sep === null || typeof sep == 'undefined') {
        sep=" ";
        if (subject.length == 0) {
            return items;
        }
        subject=subject.strip();
        subject=subject.$$replace(/\s+/g, sep);
    }
    else if (typeof maxsplit != 'undefined') do_max=true;

    if (subject.length == 0) {
        items.__array.push('');
        return items;
    }

    while (subject.length > 0) {
        if (do_max && !maxsplit--) break;

        pos=subject.lastIndexOf(sep);
        if (pos<0) break;

        items.__array.push(subject.substr(pos+sep.lenght));
        subject = subject.substr(0, pos);
    }
    if (subject.length > 0) items.__array.push(subject);
    items.__array.reverse()

    return items;
};

if (typeof "a"[0] == 'undefined' ) {
    // IE: cannot do "abc"[idx]
    String.prototype.__iter__ = function() {
        var i = 0;
        var s = this;
        return {
            'next': function(noStop) {
                if (i >= s.length) {
                    if (noStop === true) {
                        return;
                    }
                    throw $p['StopIteration'];
                }
                return s.charAt(i++);
            },
            '__iter__': function() {
                return this;
            }
        };
    };
} else {
    String.prototype.__iter__ = function() {
        var i = 0;
        var s = this;
        return {
            '__array': this,
            'next': function(noStop) {
                if (i >= s.length) {
                    if (noStop === true) {
                        return;
                    }
                    throw $p['StopIteration'];
                }
                return s.charAt(i++);
            },
            '__iter__': function() {
                return this;
            }
        };
    };
}

String.prototype.strip = function(chars) {
    return this.lstrip(chars).rstrip(chars);
};

String.prototype.lstrip = function(chars) {
    if (typeof chars == 'undefined') return this.$$replace(/^\s+/, "");
    if (chars.length == 0) return this;
    return this.$$replace(new RegExp("^[" + chars + "]+"), "");
};

String.prototype.rstrip = function(chars) {
    if (typeof chars == 'undefined') return this.$$replace(/\s+$/, "");
    if (chars.length == 0) return this;
    return this.$$replace(new RegExp("[" + chars + "]+$"), "");
};

String.prototype.startswith = function(prefix, start, end) {
    // FIXME: accept tuples as suffix (since 2.5)
    if (typeof start == 'undefined') start = 0;
    if (typeof end == 'undefined') end = this.length;

    if ((end - start) < prefix.length) return false;
    if (this.substr(start, prefix.length) == prefix) return true;
    return false;
};

String.prototype.endswith = function(suffix, start, end) {
    // FIXME: accept tuples as suffix (since 2.5)
    if (typeof start == 'undefined') start = 0;
    if (typeof end == 'undefined') end = this.length;

    if ((end - start) < suffix.length) return false;
    if (this.substr(end - suffix.length, suffix.length) == suffix) return true;
    return false;
};

String.prototype.ljust = function(width, fillchar) {
    switch (width.__number__) {
        case 0x02:
        case 0x04:
            width = width.valueOf();
            break;
        case 0x01:
            if (Math.floor(width) == width) break;
        default:
            throw $m['TypeError']("an integer is required (got '" + width + "')");
    }
    if (typeof fillchar == 'undefined') fillchar = ' ';
    if (typeof(fillchar) != 'string' ||
        fillchar.length != 1) {
        throw $m['TypeError']("ljust() argument 2 must be char, not " + typeof(fillchar));
    }
    if (this.length >= width) return this;
    return this + new Array(width+1 - this.length).join(fillchar);
};

String.prototype.rjust = function(width, fillchar) {
    switch (width.__number__) {
        case 0x02:
        case 0x04:
            width = width.valueOf();
            break;
        case 0x01:
            if (Math.floor(width) == width) break;
        default:
            throw $m['TypeError']("an integer is required (got '" + width + "')");
    }
    if (typeof fillchar == 'undefined') fillchar = ' ';
    if (typeof(fillchar) != 'string' ||
        fillchar.length != 1) {
        throw $m['TypeError']("rjust() argument 2 must be char, not " + typeof(fillchar));
    }
    if (this.length >= width) return this;
    return new Array(width + 1 - this.length).join(fillchar) + this;
};

String.prototype.center = function(width, fillchar) {
    switch (width.__number__) {
        case 0x02:
        case 0x04:
            width = width.valueOf();
            break;
        case 0x01:
            if (Math.floor(width) == width) break;
        default:
            throw $m['TypeError']("an integer is required (got '" + width + "')");
    }
    if (typeof fillchar == 'undefined') fillchar = ' ';
    if (typeof(fillchar) != 'string' ||
        fillchar.length != 1) {
        throw $m['TypeError']("center() argument 2 must be char, not " + typeof(fillchar));
    }
    if (this.length >= width) return this;
    var padlen = width - this.length;
    var right = Math.ceil(padlen / 2);
    var left = padlen - right;
    return new Array(left+1).join(fillchar) + this + new Array(right+1).join(fillchar);
};

String.prototype.__getslice__ = function(lower, upper) {
    if (lower === null) {
        lower = 0;
    } else if (lower < 0) {
        lower = this.length + lower;
    }
    if (upper === null) {
        upper=this.length;
    } else if (upper < 0) {
       upper = this.length + upper;
    }
    return this.substring(lower, upper);
};

String.prototype.__getitem__ = function(idx) {
    if (idx < 0) idx += this.length;
    if (idx < 0 || idx > this.length) {
        throw $m['IndexError']("string index out of range");
    }
    return this.charAt(idx);
};

String.prototype.__setitem__ = function(idx, val) {
    throw $m['TypeError']("'str' object does not support item assignment");
};

String.prototype.upper = String.prototype.toUpperCase;
String.prototype.lower = String.prototype.toLowerCase;

String.prototype.zfill = function(width) {
    return this.rjust(width, '0');
};

String.prototype.__add__ = function(y) {
    if (typeof y != "string") {
        throw $m['TypeError']("cannot concatenate 'str' and non-str objects");
    }
    return this + y;
};

String.prototype.__mul__ = function(y) {
    switch (y.__number__) {
        case 0x02:
        case 0x04:
            y = y.valueOf();
            break;
        case 0x01:
            if (Math.floor(y) == y) break;
        default:
            throw $m['TypeError']("can't multiply sequence by non-int of type 'str'");
    }
    var s = '';
    while (y-- > 0) {
        s += this;
    }
    return s;
};
String.prototype.__rmul__ = String.prototype.__mul__;
String.prototype.__number__ = null;
String.prototype.__name__ = 'str';
String.prototype.__class__ = String.prototype;
String.prototype.__is_instance__ = null;
String.prototype.__str__ = function () {
    if (typeof this == 'function') return "<type '" + this.__name__ + "'>";
    return this.toString();
};
String.prototype.__repr__ = function () {
    if (typeof this == 'function') return "<type '" + this.__name__ + "'>";
    return "'" + this.toString() + "'";
};
String.prototype.__mro__ = [$m['basestring']];


Boolean.prototype.__number__ = 0x01;
Boolean.prototype.__name__ = 'bool';
Boolean.prototype.__class__ = Boolean.prototype;
Boolean.prototype.__is_instance__ = null;
Boolean.prototype.__str__= function () {
    if (typeof this == 'function') return "<type '" + this.__name__ + "'>";
    if (this == true) return "True";
    return "False";
};
Boolean.prototype.__repr__ = Boolean.prototype.__str__;
Boolean.prototype.__and__ = function (y) {
    return this & y.valueOf();
};
Boolean.prototype.__or__ = function (y) {
    return this | y.valueOf();
};
Boolean.prototype.__xor__ = function (y) {
    return this ^ y.valueOf();
};


if (typeof Array.prototype.indexOf != 'function') {
    Array.prototype.indexOf = function(elt /*, from*/) {
        var len = this.length >>> 0;

        var from = Number(arguments[1]) || 0;
        from = (from < 0)
                ? Math.ceil(from)
                : Math.floor(from);
        if (from < 0)
            from += len;

        for (; from < len; from++) {
            if (from in this &&
                this[from] === elt)
                return from;
        }
        return -1;
    };
};


RegExp.prototype.Exec = function(pat) {
    var m = this.exec(pat);
    if (m !== null) {
        var len = m.length >>> 0;
        for (var i = 0; i < len; i++) {
            if (typeof(m[i]) == 'undefined')
                m[i] = null;
        }
    }
    return m;
};


$p['abs'] = Math.abs;

	};
	$m['init'].__name__ = 'init';

	$m['init'].__bind_type__ = 0;
	$m['init'].__args__ = [null,null];
	$m['Class'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'c32f34f1c0aa12101dbf52c95944ffe4';
		$method = $pyjs__bind_method2('__init__', function(name) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
			}

			self.$$name = name;
			return null;
		}
	, 1, [null,null,['self'],['name']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__str___', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr51,$attr52;
			return self['$$name'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str___'] = $method;
		var $bases = new Array(pyjslib.object);
		return $pyjs_type('Class', $bases, $cls_definition);
	})();
	$m['open'] = function(fname, mode) {
		if (typeof mode == 'undefined') mode=arguments.callee.__args__[3][1];

		throw ($m['NotImplementedError']('open is not implemented in browsers'));
		return null;
	};
	$m['open'].__name__ = 'open';

	$m['open'].__bind_type__ = 0;
	$m['open'].__args__ = [null,null,['fname'],['mode', 'r']];
	$m['cmp'] = function(a, b) {
    if (typeof a == typeof b) {
        switch (typeof a) {
            case 'number':
            case 'string':
            case 'boolean':
                return a == b ? 0 : (a < b ? -1 : 1);
        }
        if (a === b) return 0;
    }
    if (a === null) {
        if (b === null) return 0;
        return -1;
    }
    if (b === null) {
        return 1;
    }

    switch ((a.__number__ << 8)|b.__number__) {
        case 0x0202:
            a = a.__v;
            b = b.__v;
        case 0x0101:
            return a == b ? 0 : (a < b ? -1 : 1);
        case 0x0100:
        case 0x0200:
        case 0x0400:
            if (typeof b.__cmp__ == 'function') {
                return -b.__cmp__(a);
            }
            return -1;
        case 0x0001:
        case 0x0002:
        case 0x0004:
            if (typeof a.__cmp__ == 'function') {
                return a.__cmp__(b);
            }
            return 1;
        case 0x0102:
            return -b.__cmp__(new $p['float_int'](a));
        case 0x0104:
            return -b.__cmp__(new $p['float_int'](a));
        case 0x0201:
            return a.__cmp__(new $p['float_int'](b));
        case 0x0401:
            return a.__cmp__(new $p['float_int'](b));
        case 0x0204:
            return -b.__cmp__(new $p['float_int'](a));
        case 0x0402:
            return a.__cmp__(new $p['float_int'](b));
        case 0x0404:
            return a.__cmp__(b);
    }

    if (typeof a.__class__ == typeof b.__class__ && typeof a.__class__ == 'function') {
        if (a.__class__.__name__ < b.__class__.__name__) {
            return -1;
        }
        if (a.__class__.__name__ > b.__class__.__name__) {
            return 1;
        }
    }

    if ((typeof a == 'object' || typeof a == 'function') && typeof a.__cmp__ == 'function') {
        return a.__cmp__(b);
    } else if ((typeof b == 'object' || typeof b == 'function') && typeof b.__cmp__ == 'function') {
        return -b.__cmp__(a);
    }
    if (a == b) return 0;
    if (a > b) return 1;
    return -1;
};
    ;
	$m['__cmp'] = $m['cmp'];
	$m['bool'] = function(v) {


    switch (v) {
        case null:
        case false:
        case 0:
        case '':
            return false;
    }
    if (typeof v == 'object') {
        if (typeof v.__nonzero__ == 'function'){
            return v.__nonzero__();
        } else if (typeof v.__len__ == 'function'){
            return v.__len__() > 0;
        }
    }
    return true;
    
	};
	$m['bool'].__name__ = 'bool';

	$m['bool'].__bind_type__ = 0;
	$m['bool'].__args__ = [null,null,['v']];
	$m['float'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'c99d1bad464af532c9b7f905d8bf0745';
		$cls_definition['__number__'] = 0x01;
		$method = $pyjs__bind_method2('__new__', function(self, num) {


        if (typeof num == 'string') {
            num = num.lstrip();
            if (num === "") {
                throw $m['ValueError']("empty string for float()");
            }
        }
        var v = Number(num);
        if (isNaN(v)) {
            throw $m['ValueError']("invalid literal for float(): " + num);
        }
        return v;

		}
	, 3, [null,null,['self'],['num']]);
		$cls_definition['__new__'] = $method;
		var $bases = new Array(pyjslib.object);
		return $pyjs_type('float', $bases, $cls_definition);
	})();

Number.prototype.__number__ = 0x01;
Number.prototype.__name__ = 'float';
Number.prototype.__init__ = function (value, radix) {
    return null;
};

Number.prototype.__str__ = function () {
    if (typeof this == 'function') return "<type '" + this.__name__ + "'>";
    return this.toString();
};

Number.prototype.__repr__ = function () {
    if (typeof this == 'function') return "<type '" + this.__name__ + "'>";
    return this.toString();
};

Number.prototype.__nonzero__ = function () {
    return this != 0;
};

Number.prototype.__cmp__ = function (y) {
    return this < y? -1 : (this == y ? 0 : 1);
};

Number.prototype.__hash__ = function () {
    return this;
};

Number.prototype.__oct__ = function () {
    return '0'+this.toString(8);
};

Number.prototype.__hex__ = function () {
    return '0x'+this.toString(16);
};

Number.prototype.__pos__ = function () {
    return this;
};

Number.prototype.__neg__ = function () {
    return -this;
};

Number.prototype.__abs__ = function () {
    if (this >= 0) return this;
    return -this;
};

Number.prototype.__add__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    return this + y;
};

Number.prototype.__radd__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    return y + this;
};

Number.prototype.__sub__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    return this - y;
};

Number.prototype.__rsub__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    return y - this;
};

Number.prototype.__floordiv__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    if (y == 0) throw $m['ZeroDivisionError']('float divmod()');
    return Math.floor(this / y);
};

Number.prototype.__rfloordiv__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    if (this == 0) throw $m['ZeroDivisionError']('float divmod');
    return Math.floor(y / this);
};

Number.prototype.__div__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    if (y == 0) throw $m['ZeroDivisionError']('float division');
    return this / y;
};

Number.prototype.__rdiv__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    if (this == 0) throw $m['ZeroDivisionError']('float division');
    return y / this;
};

Number.prototype.__mul__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    return this * y;
};

Number.prototype.__rmul__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    return y * this;
};

Number.prototype.__mod__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    if (y == 0) throw $m['ZeroDivisionError']('float modulo');
    return this % y;
};

Number.prototype.__rmod__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    if (this == 0) throw $m['ZeroDivisionError']('float modulo');
    return y % this;
};

Number.prototype.__pow__ = function (y, z) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    if (typeof z == 'undefined' || z == null) {
        return Math.pow(this, y);
    }
    if (!z.__number__ || isNaN(z = z.valueOf())) return $p['NotImplemented'];
    return Math.pow(this, y) % z;
};

	$m['float_int'] = function(value, radix) {
		if (typeof radix == 'undefined') radix=arguments.callee.__args__[3][1];


    var v;
    if (typeof value['__int__'] != 'undefined') {
        return value['__int__']();
    }
    if (value.__number__) {
        if (radix !== null) {
            throw $m['TypeError']("int() can't convert non-string with explicit base");
        }
        v = value.valueOf();
        if (v > 0) {
            v = Math.floor(v);
        } else {
            v = Math.ceil(v);
        }
    } else if (typeof value == 'string') {
        if (radix === null) {
            radix = 10;
        }
        value = value.lstrip();
        switch (value[value.length-1]) {
            case 'l':
            case 'L':
                v = value.slice(0, value.length-2);
                break;
            default:
                v = value;
        }
        if (v.match($radix_regex[radix]) === null) {
            v = NaN;
        } else {
            v = parseInt(v, radix);
        }
    } else {
        throw $m['TypeError']("TypeError: int() argument must be a string or a number");
    }
    if (isNaN(v) || !isFinite(v)) {
        throw $m['ValueError']("invalid literal for int() with base " + radix + ": '" + value + "'");
    }
    return v;

	};
	$m['float_int'].__name__ = 'float_int';

	$m['float_int'].__bind_type__ = 0;
	$m['float_int'].__args__ = [null,null,['value'],['radix', null]];

var $radix_regex = [
    /^$/i,              //  0
    /^$/i,              //  1
    /^ *[01]+ *$/i,     //  2
    /^ *[0-2]+ *$/i,    //  3
    /^ *[0-3]+ *$/i,    //  4
    /^ *[0-4]+ *$/i,    //  5
    /^ *[0-5]+ *$/i,    //  6
    /^ *[0-6]+ *$/i,    //  7
    /^ *[0-7]+ *$/i,    //  8
    /^ *[0-8]+ *$/i,    //  9
    /^ *[0-9]+ *$/i,    // 10
    /^ *[0-9a]+ *$/i,   // 11
    /^ *[0-9ab]+ *$/i,  // 12
    /^ *[0-9a-c]+ *$/i, // 13
    /^ *[0-9a-d]+ *$/i, // 14
    /^ *[0-9a-e]+ *$/i, // 15
    /^ *[0-9a-f]+ *$/i, // 16
    /^ *[0-9a-g]+ *$/i, // 17
    /^ *[0-9a-h]+ *$/i, // 18
    /^ *[0-9a-i]+ *$/i, // 19
    /^ *[0-9a-j]+ *$/i, // 20
    /^ *[0-9a-k]+ *$/i, // 21
    /^ *[0-9a-l]+ *$/i, // 22
    /^ *[0-9a-m]+ *$/i, // 23
    /^ *[0-9a-n]+ *$/i, // 24
    /^ *[0-9a-o]+ *$/i, // 25
    /^ *[0-9a-p]+ *$/i, // 26
    /^ *[0-9a-q]+ *$/i, // 27
    /^ *[0-9a-r]+ *$/i, // 28
    /^ *[0-9a-s]+ *$/i, // 29
    /^ *[0-9a-t]+ *$/i, // 30
    /^ *[0-9a-u]+ *$/i, // 31
    /^ *[0-9a-v]+ *$/i, // 32
    /^ *[0-9a-w]+ *$/i, // 33
    /^ *[0-9a-x]+ *$/i, // 34
    /^ *[0-9a-y]+ *$/i, // 35
    /^ *[0-9a-z]+ *$/i, // 36
];

(function(){
    /* XXX do not convert to $p['float_int'] - this is correct */
    var $int = pyjslib['int'] = function (value, radix) {
        var v, i;
        if (typeof radix == 'undefined' || radix === null) {
            if (typeof value == 'undefined') {
                throw $m['TypeError']("int() takes at least 1 argument");
            }
            if (typeof value['__int__'] != 'undefined') {
                return value['__int__']();
            }
            switch (value.__number__) {
                case 0x01:
                    value = value > 0 ? Math.floor(value) : Math.ceil(value);
                    break;
                case 0x02:
                    return value;
                case 0x04:
                    v = value.valueOf();
                    if (!($min_int <= v && v <= $max_int))
                        return value;
            }
            radix = null;
        }
        if (typeof this != 'object' || this.__number__ != 0x02) return new $int(value, radix);
        if (value.__number__) {
            if (radix !== null) throw $m['TypeError']("int() can't convert non-string with explicit base");
            v = value.valueOf();
        } else if (typeof value == 'string') {
            if (radix === null) {
                radix = 10;
            }
            if (value.match($radix_regex[radix]) === null) {
                value = value.lstrip();
                v = NaN;
            } else {
                v = parseInt(value, radix);
            }
        } else {
            throw $m['TypeError']("TypeError: int() argument must be a string or a number");
        }
        if (isNaN(v) || !isFinite(v)) {
            throw $m['ValueError']("invalid literal for int() with base " + radix + ": '" + value + "'");
        }
        if ($min_int <= v && v <= $max_int) {
            this.__v = v;
            return this;
        }
        return new pyjslib['long'](v);
    };
    $int.__init__ = function () {};
    $int.__number__ = 0x02;
    $int.__v = 0;
    $int.__name__ = 'int';
    $int.prototype = $int;
    $int.__class__ = $int;

    $int.toExponential = function (fractionDigits) {
        return (typeof fractionDigits == 'undefined' || fractionDigits === null) ? this.__v.toExponential() : this.__v.toExponential(fractionDigits);
    };

    $int.toFixed = function (digits) {
        return (typeof digits == 'undefined' || digits === null) ? this.__v.toFixed() : this.__v.toFixed(digits);
    };

    $int.toLocaleString = function () {
        return this.__v.toLocaleString();
    };

    $int.toPrecision = function (precision) {
        return (typeof precision == 'undefined' || precision === null) ? this.__v.toPrecision() : this.__v.toPrecision(precision);
    };

    $int.toString = function (radix) {
        return (typeof radix == 'undefined' || radix === null) ? this.__v.toString() : this.__v.toString(radix);
    };

    $int.valueOf = function () {
        return this.__v.valueOf();
    };

    $int.__str__ = function () {
        if (typeof this == 'function') return "<type '" + this.__name__ + "'>";
        if (this.__number__ == 0x02) return this.__v.toString();
        return this.toString();
    };

    $int.__repr__ = function () {
        if (typeof this == 'function') return "<type '" + this.__name__ + "'>";
        if (this.__number__ == 0x02) return this.__v.toString();
        return this.toString();
    };

    $int.__nonzero__ = function () {
        return this.__v != 0;
    };

    $int.__cmp__ = function (y) {
        return this.__v < y? -1 : (this.__v == y ? 0 : 1);
    };

    $int.__hash__ = function () {
        return this.__v;
    };

    $int.__invert__ = function () {
        return new $int(~this.__v);
    };

    $int.__lshift__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        if (y < 32) {
            var v = this.__v << y;
            if (v > this.__v) {
                return new $int(v);
            }
        }
        return new $p['float_int'](this.__v).__lshift__(y);
    };

    $int.__rlshift__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        if (this.__v < 32) {
            var v = y << this.__v;
            if (v > this.__v) {
                return new $int(v);
            }
        }
        return new $p['float_int'](y).__lshift__(this.__v);
    };

    $int.__rshift__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        return new $int(this.__v >> y);
    };

    $int.__rrshift__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        return new $int(y >> this.__v);
    };

    $int.__and__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        return new $int(this.__v & y);
    };

    $int.__rand__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        return new $int(y & this.__v);
    };

    $int.__xor__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        return new $int(this.__v ^ y);
    };

    $int.__rxor__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        return new $int(y ^ this.__v);
    };

    $int.__or__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        return new $int(this.__v | y);
    };

    $int.__ror__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        return new $int(y | this.__v);
    };

    $int.__oct__ = function () {
        return '0x'+this.__v.toString(8);
    };

    $int.__hex__ = function () {
        return '0x'+this.__v.toString(16);
    };

    $int.__pos__ = function () {
        return this;
    };

    $int.__neg__ = function () {
        return new $int(-this.__v);
    };

    $int.__abs__ = function () {
        if (this.__v >= 0) return this;
        return new $int(-this.__v);
    };

    $int.__add__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        var v = this.__v + y;
        if ($min_int <= v && v <= $max_int) {
            return new $int(v);
        }
        if (-$max_float_int < v && v < $max_float_int) {
            return new $p['float_int'](v);
        }
        return new $p['float_int'](this.__v).__add__(new $p['float_int'](y));
    };

    $int.__radd__ = $int.__add__;

    $int.__sub__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        var v = this.__v - y;
        if ($min_int <= v && v <= $max_int) {
            return new $int(v);
        }
        if (-$max_float_int < v && v < $max_float_int) {
            return new $p['float_int'](v);
        }
        return new $p['float_int'](this.__v).__sub__(new $p['float_int'](y));
    };

    $int.__rsub__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        var v = y -this.__v;
        if ($min_int <= v && v <= $max_int) {
            return new $int(v);
        }
        if (-$max_float_int < v && v < $max_float_int) {
            return new $p['float_int'](v);
        }
        return new $p['float_int'](y).__sub__(new $p['float_int'](this.__v));
    };

    $int.__floordiv__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        if (y == 0) throw $m['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(Math.floor(this.__v / y));
    };

    $int.__rfloordiv__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        if (this.__v == 0) throw $m['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(Math.floor(y / this.__v));
    };

    $int.__div__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        if (y == 0) throw $m['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(this.__v / y);
    };

    $int.__rdiv__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        if (this.__v == 0) throw $m['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(y / this.__v);
    };

    $int.__mul__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        var v = this.__v * y;
        if ($min_int <= v && v <= $max_int) {
            return new $int(v);
        }
        if (-$max_float_int < v && v < $max_float_int) {
            return new $p['float_int'](v);
        }
        return new $p['float_int'](this.__v).__mul__(new $p['float_int'](y));
    };

    $int.__rmul__ = $int.__mul__;

    $int.__mod__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        if (y == 0) throw $m['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(this.__v % y);
    };

    $int.__rmod__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        if (this.__v == 0) throw $m['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(y % this.__v);
    };

    $int.__pow__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        var v = Math.pow(this.__v, y);
        if ($min_int <= v && v <= $max_int) {
            return new $int(v);
        }
        if (-$max_float_int < v && v < $max_float_int) {
            return new $p['float_int'](v);
        }
        return new $p['float_int'](this.__v).__pow__(new $p['float_int'](y));
    };
})();


(function(){

    var $log2 = Math.log(2);
    var $DigitValue = [
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            0,  1,  2,  3,  4,  5,  6,  7,  8,  9,  37, 37, 37, 37, 37, 37,
            37, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
            25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 37, 37, 37, 37,
            37, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
            25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37
    ];
    var $log_base_PyLong_BASE = new Array();
    var $convwidth_base = new Array();
    var $convmultmax_base = new Array();
    for (var i = 0; i < 37; i++) {
        $log_base_PyLong_BASE[i] = $convwidth_base[i] = $convmultmax_base[i] = 0;
    }
    var $cdigit = '0123456789abcdefghijklmnopqrstuvwxyz';


    var PyLong_SHIFT = 15;
    var PyLong_MASK = 0x7fff;
    var PyLong_BASE = 0x8000;

    var KARATSUBA_CUTOFF = 70;
    var KARATSUBA_SQUARE_CUTOFF = (2 * KARATSUBA_CUTOFF);

    var FIVEARY_CUTOFF = 8;

    function array_eq(a, b, n) {
        for (var i = 0 ; i < n; i++) {
            if (a[i] != b[i])
                return false;
        }
        return true;
    }

    function long_normalize(v) {
        var j = v.ob_size < 0 ? -v.ob_size:v.ob_size;
        var i = j;
        while (i > 0 && v.ob_digit[i-1] == 0) {
            i--;
        }
        if (i != j) {
            v.ob_size = v.ob_size < 0 ? -i:i;
        }
        return v;
    }

    function AsScaledDouble(vv) {
        var multiplier = PyLong_BASE; // 1L << PyLong_SHIFT == 1 << 15
        var neg, i, x, nbitsneeded;

        if (vv.ob_size < 0) {
            i = -vv.ob_size;
            neg = true;
        } else if (vv.ob_size > 0) {
            i = vv.ob_size;
            neg = false;
        } else {
            return [0.0, 0];
        }
        --i;
        x = vv.ob_digit[i];
        nbitsneeded = 56;
        while (i > 0 && nbitsneeded > 0) {
            --i;
            x = x * multiplier + vv.ob_digit[i];
            nbitsneeded -= PyLong_SHIFT;
        }
        if (neg) {
            return [-x, i];
        }
        return [x, i];
    }

    function v_iadd(x, m, y, n) {
        var i, carry = 0;
        for (i = 0; i < n; ++i) {
                carry += x[i] + y[i];
                x[i] = carry & PyLong_MASK;
                carry >>= PyLong_SHIFT;
        }
        for (; carry && i < m; ++i) {
                carry += x[i];
                x[i] = carry & PyLong_MASK;
                carry >>= PyLong_SHIFT;
        }
        return carry;
    }

    function v_isub(x, m, y, n) {
        var i, borrow = 0;
        for (i = 0; i < n; ++i) {
                borrow = x[i] - y[i] - borrow;
                x[i] = borrow & PyLong_MASK;
                borrow >>= PyLong_SHIFT;
                borrow &= 1;
        }
        for (; borrow && i < m; ++i) {
                borrow = x[i] - borrow;
                x[i] = borrow & PyLong_MASK;
                borrow >>= PyLong_SHIFT;
                borrow &= 1;
        }
        return borrow;
    }

    //function mul1(a, n) {
    //    return muladd1(a, n, 0);
    //}

    function muladd1(z, a, n, extra) {
        var size_a = a.ob_size < 0 ? -a.ob_size : a.ob_size;
        var carry = extra, i;

        for (i = 0; i < size_a; ++i) {
                carry += a.ob_digit[i] * n;
                z.ob_digit[i] = carry & PyLong_MASK;
                carry >>= PyLong_SHIFT;
        }
        z.ob_digit[i] = carry;
        z.ob_size = i + 1;
        return long_normalize(z);
    }

    function inplace_divrem1(pout, pin, pout_idx, pin_idx, size, n) {
        var rem = 0, hi = 0;
        pin_idx += size;
        pout_idx += size;
        while (pin_idx > pin.length) {
            --size;
            --pin_idx;
            pout[--pout_idx] = 0;
        }
        while (--size >= 0) {
            rem = (rem << PyLong_SHIFT) + pin[--pin_idx];
            pout[--pout_idx] = hi = Math.floor(rem / n);
            rem -= hi * n;
        }
        return [rem, pout_idx, pin_idx];
    }

    function divrem1(a, n, prem) {
        var size = a.ob_size < 0 ? -a.ob_size : a.ob_size;
        var z = new $long(0);

        prem[0] = inplace_divrem1(z.ob_digit, a.ob_digit, 0, 0, size, n)[0];
        z.ob_size = size;
        return long_normalize(z);
    }

    function Format(aa, base, addL, newstyle, noBase) {
        var text, str, p, i, bits, sz, rem, sign = '';
        var c_0 = "0".charCodeAt(0);
        var c_a = "a".charCodeAt(0);
        base = base.valueOf();

        if (aa.ob_size == 0) {
            if (addL) {
                text = "0L";
            } else {
                text = "0";
            }
        } else {
            if (aa.ob_size < 0) {
                sign = '-';
                size_a = -aa.ob_size;
            } else {
                size_a = aa.ob_size;
            }
            i = base;
            bits = 0;
            while (i > 1) {
                ++bits;
                i >>>= 1;
            }
            i = addL ? 6 : 5;
            j = size_a * PyLong_SHIFT + bits - 1;
            sz = Math.floor(i + j / bits);
            if (j / PyLong_SHIFT < size_a || sz < i) {
                throw $m['OverflowError']("long is too large to format");
            }
            str = new Array();
            p = sz;
            if (addL) str[--p] = 'L';
            if ((base & (base - 1)) == 0) {
                var accum = 0, accumbits = 0, basebits = 1;
                i = base;
                while ((i >>>= 1) > 1) ++basebits;
                for (i = 0; i < size_a; ++i) {
                    accum |= aa.ob_digit[i] << accumbits;
                    accumbits += PyLong_SHIFT;
                    while (1) {
                        var cdigit = accum & (base - 1);
                        str[--p] = $cdigit.charAt(cdigit);
                        accumbits -= basebits;
                        accum >>>= basebits;
                        if (i < size_a-1) {
                            if (accumbits < basebits) break;
                        } else if (accum <= 0) break;
                    }
                }
                text = str.join("");
            } else {
                // Not 0, and base not a power of 2.
                var scratch, pin, scratch_idx, pin_idx;
                var powbase = base, power = 1, size = size_a;
               
                while (1) {
                    var newpow = powbase * base;
                    if (newpow >>> PyLong_SHIFT)  /* doesn't fit in a digit */
                        break;
                    powbase = newpow;
                    ++power;
                }
                scratch = aa.ob_digit.slice(0);
                pin = aa.ob_digit;
                scratch_idx = pin_idx = 0;
                do {
                        var ntostore = power;
                        rem = inplace_divrem1(scratch, pin, scratch_idx, pin_idx, size, powbase);
                        scratch_idx = rem[1];
                        rem = rem[0];
                        pin = scratch;
                        pin_idx = 0;
                        if (pin[size - 1] == 0) {
                            --size;
                        }
                        do {
                            var nextrem = Math.floor(rem / base);
                            str[--p] = $cdigit.charAt(rem - nextrem * base);
                            rem = nextrem;
                            --ntostore;
                        } while (ntostore && (size || rem));
                } while (size !=0);
                text = str.slice(p).join("");
            }
            text = text.lstrip('0');
            if (text == "" || text == "L") text = "0" + text;
        }
        if (noBase !== false) {
            switch (base) {
                case 10:
                    break;
                case 2:
                    text = '0b' + text;
                    break;
                case 8:
                    text = (newstyle ? '0o':(aa.ob_size ? '0': '')) + text;
                    break;
                case 16:
                    text = '0x' + text;
                    break;
                default:
                    text = base + '#' + text;
                    break;
            }
        }
        return sign + text;
    }

    function long_divrem(a, b, pdiv, prem) {
        var size_a = a.ob_size < 0 ? -a.ob_size : a.ob_size;
        var size_b = b.ob_size < 0 ? -b.ob_size : b.ob_size;
        var z = null;

        if (size_b == 0) {
            throw $m['ZeroDivisionError']("long division or modulo by zero");
        }
        if (size_a < size_b ||
            (size_a == size_b &&
             a.ob_digit[size_a-1] < b.ob_digit[size_b-1])) {
                // |a| < |b|
                pdiv.ob_size = 0;
                prem.ob_digit = a.ob_digit.slice(0);
                prem.ob_size = a.ob_size;
                return 0;
        }
        if (size_b == 1) {
                rem = [0];
                prem.ob_digit = [0];
                prem.ob_size = 1;
                z = divrem1(a, b.ob_digit[0], prem.ob_digit);
                prem = long_normalize(prem);
        }
        else {
                z = x_divrem(a, b, prem);
        }
        if (z === null) {
            pdiv.ob_size = 0;
        } else {
            pdiv.ob_digit = z.ob_digit.slice(0);
            pdiv.ob_size = z.ob_size;
        }
        if ((a.ob_size < 0) != (b.ob_size < 0))
                pdiv.ob_size = -(pdiv.ob_size);
        if (a.ob_size < 0 && prem.ob_size != 0)
                prem.ob_size = -prem.ob_size;
        return 0;
    }

    function x_divrem(v1, w1, prem) {
        var size_w = w1.ob_size < 0 ? -w1.ob_size : w1.ob_size;
        var d = Math.floor(PyLong_BASE / (w1.ob_digit[size_w-1] + 1));
        var v = muladd1($x_divrem_v, v1, d, 0);
        var w = muladd1($x_divrem_w, w1, d, 0);
        var a, j, k;
        var size_v = v.ob_size < 0 ? -v.ob_size : v.ob_size;
        k = size_v - size_w;
        a = new $long(0);
        a.ob_size = k + 1;

        for (j = size_v; k >= 0; --j, --k) {
            var vj = (j >= size_v) ? 0 : v.ob_digit[j];
            var carry = 0;
            var q, i;

            if (vj == w.ob_digit[size_w-1])
                q = PyLong_MASK;
            else
                q = Math.floor(((vj << PyLong_SHIFT) + v.ob_digit[j-1]) /
                        w.ob_digit[size_w-1]);

            while (w.ob_digit[size_w-2]*q >
                    ((
                        (vj << PyLong_SHIFT)
                        + v.ob_digit[j-1]
                        - q*w.ob_digit[size_w-1]
                                                ) << PyLong_SHIFT)
                    + v.ob_digit[j-2])
                --q;

            for (i = 0; i < size_w && i+k < size_v; ++i) {
                var z = w.ob_digit[i] * q;
                var zz = z >>> PyLong_SHIFT;
                carry += v.ob_digit[i+k] - z
                        + (zz << PyLong_SHIFT);
                v.ob_digit[i+k] = carry & PyLong_MASK;
                // carry = Py_ARITHMETIC_RIGHT_SHIFT(BASE_TWODIGITS_TYPE, carry, PyLong_SHIFT);
                carry >>= PyLong_SHIFT;
                carry -= zz;
            }

            if (i+k < size_v) {
                carry += v.ob_digit[i+k];
                v.ob_digit[i+k] = 0;
            }

            if (carry == 0)
                a.ob_digit[k] = q;
            else {
                a.ob_digit[k] = q-1;
                carry = 0;
                for (i = 0; i < size_w && i+k < size_v; ++i) {
                    carry += v.ob_digit[i+k] + w.ob_digit[i];
                    v.ob_digit[i+k] = carry & PyLong_MASK;
                    // carry = Py_ARITHMETIC_RIGHT_SHIFT( BASE_TWODIGITS_TYPE, carry, PyLong_SHIFT);
                    carry >>= PyLong_SHIFT;
                }
            }
        } /* for j, k */

        i = divrem1(v, d, prem);
        prem.ob_digit = i.ob_digit.slice(0);
        prem.ob_size = i.ob_size;
        return long_normalize(a);
    }

    function x_add(a, b) {
        var size_a = a.ob_size < 0 ? -a.ob_size : a.ob_size;
        var size_b = b.ob_size < 0 ? -b.ob_size : b.ob_size;
        var z = new $long(0);
        var i;
        var carry = 0;

        if (size_a < size_b) {
            var temp = a;
            a = b;
            b = temp;
            temp = size_a;
            size_a = size_b;
            size_b = temp;
        }
        for (i = 0; i < size_b; ++i) {
                carry += a.ob_digit[i] + b.ob_digit[i];
                z.ob_digit[i] = carry & PyLong_MASK;
                carry >>>= PyLong_SHIFT;
        }
        for (; i < size_a; ++i) {
                carry += a.ob_digit[i];
                z.ob_digit[i] = carry & PyLong_MASK;
                carry >>>= PyLong_SHIFT;
        }
        z.ob_digit[i] = carry;
        z.ob_size = i+1;
        return long_normalize(z);
    }

    function x_sub(a, b) {
        var size_a = a.ob_size < 0 ? -a.ob_size : a.ob_size;
        var size_b = b.ob_size < 0 ? -b.ob_size : b.ob_size;
        var z = new $long(0);
        var i;
        var borrow = 0;
        var sign = 1;

        if (size_a < size_b) {
            var temp = a;
            a = b;
            b = temp;
            temp = size_a;
            size_a = size_b;
            size_b = temp;
            sign = -1;
        } else if (size_a == size_b) {
            i = size_a;
            while (--i >= 0 && a.ob_digit[i] == b.ob_digit[i])
                ;
            if (i < 0)
                return z;
            if (a.ob_digit[i] < b.ob_digit[i]) {
                var temp = a;
                a = b;
                b = temp;
                temp = size_a;
                size_a = size_b;
                size_b = temp;
                sign = -1;
            }
            size_a = size_b = i+1;
        }
        for (i = 0; i < size_b; ++i) {
                borrow = a.ob_digit[i] - b.ob_digit[i] - borrow;
                z.ob_digit[i] = borrow & PyLong_MASK;
                borrow >>>= PyLong_SHIFT;
                borrow &= 1;
        }
        for (; i < size_a; ++i) {
                borrow = a.ob_digit[i] - borrow;
                z.ob_digit[i] = borrow & PyLong_MASK;
                borrow >>>= PyLong_SHIFT;
                borrow &= 1;
        }
        z.ob_size = i;
        if (sign < 0)
            z.ob_size = -(z.ob_size);
        return long_normalize(z);
    }

    function x_mul(a, b) {
        var size_a = a.ob_size < 0 ? -a.ob_size : a.ob_size;
        var size_b = b.ob_size < 0 ? -b.ob_size : b.ob_size;
        var z = new $long(0);
        var i, s;

        z.ob_size = size_a + size_b;
        for (i = 0; i < z.ob_size; i++) {
            z.ob_digit[i] = 0;
        }
        if (size_a == size_b && array_eq(a.ob_digit, b.ob_digit, size_a)) {
            // Efficient squaring per HAC, Algorithm 14.16:
            for (i = 0; i < size_a; ++i) {
                var carry;
                var f = a.ob_digit[i];
                var pz = (i << 1);
                var pa = i + 1;
                var paend = size_a;

                carry = z.ob_digit[pz] + f * f;
                z.ob_digit[pz++] = carry & PyLong_MASK;
                carry >>>= PyLong_SHIFT;

                f <<= 1;
                while (pa < paend) {
                    carry += z.ob_digit[pz] + a.ob_digit[pa++] * f;
                    z.ob_digit[pz++] = carry & PyLong_MASK;
                    carry >>>= PyLong_SHIFT;
                }
                if (carry) {
                    carry += z.ob_digit[pz];
                    z.ob_digit[pz++] = carry & PyLong_MASK;
                    carry >>>= PyLong_SHIFT;
                }
                if (carry) {
                    z.ob_digit[pz] += carry & PyLong_MASK;
                }
            }
        }
        else {  // a is not the same as b -- gradeschool long mult
            for (i = 0; i < size_a; ++i) {
                var carry = 0;
                var f = a.ob_digit[i];
                var pz = i;
                var pb = 0;
                var pbend = size_b;

                while (pb < pbend) {
                    carry += z.ob_digit[pz] + b.ob_digit[pb++] * f;
                    z.ob_digit[pz++] = carry & PyLong_MASK;
                    carry >>>= PyLong_SHIFT;
                }
                if (carry) {
                    z.ob_digit[pz] += carry & PyLong_MASK;
                }
            }
        }
        z.ob_size = z.ob_digit.length;
        return long_normalize(z);
    }

    function l_divmod(v, w, pdiv, pmod) {
        var div = $l_divmod_div, 
            mod = $l_divmod_mod; 

        if (long_divrem(v, w, div, mod) < 0)
                return -1;
        if (pdiv == null && pmod == null) return 0;

        if ((mod.ob_size < 0 && w.ob_size > 0) ||
            (mod.ob_size > 0 && w.ob_size < 0)) {
                mod = mod.__add__(w);
                div = div.__sub__($const_long_1);
        }
        if (pdiv !== null) {
            pdiv.ob_digit = div.ob_digit.slice(0);
            pdiv.ob_size = div.ob_size;
        }
        if (pmod !== null) {
            pmod.ob_digit = mod.ob_digit.slice(0);
            pmod.ob_size = mod.ob_size;
        }
        return 0;
    }



    /* XXX do not convert to $p['float_int'] - this is correct */
    var $long = pyjslib['long'] = function(value, radix) {
        var v, i;
        if (!radix || radix.valueOf() == 0) {
            if (typeof value == 'undefined') {
                throw $m['TypeError']("long() takes at least 1 argument");
            }
            switch (value.__number__) {
                case 0x01:
                    value = value > 0 ? Math.floor(value) : Math.ceil(value);
                    break;
                case 0x02:
                    break;
                case 0x04:
                    return value;
            }
            radix = null;
        }
        if (typeof this != 'object' || this.__number__ != 0x04) return new $long(value, radix);

        v = value;
        this.ob_size = 0;
        this.ob_digit = new Array();
        if (v.__number__) {
            if (radix) {
                throw $m['TypeError']("long() can't convert non-string with explicit base");
            }
            if (v.__number__ == 0x04) {
                var size = v.ob_size < 0 ? -v.ob_size:v.ob_size;
                for (var i = 0; i < size; i++) {
                    this.ob_digit[i] = v.ob_digit[i];
                }
                this.ob_size = v.ob_size;
                return this;
            }
            if (v.__number__ == 0x02) {
                var neg = false;
                var ndig = 0;
                v = v.valueOf();

                if (v < 0) {
                    v = -v;
                    neg = true;
                }
                // Count the number of Python digits.
                var t = v;
                while (t) {
                    this.ob_digit[ndig] = t & PyLong_MASK;
                    t >>>= PyLong_SHIFT;
                    ++ndig;
                }
                this.ob_size = neg ? -ndig : ndig;
                return this;
            }
            if (v.__number__ == 0x01) {
                var ndig, frac, expo, bits;
                var neg = false;

                if (isNaN(v)) {
                    throw $m['ValueError']('cannot convert float NaN to integer');
                }
                if (!isFinite(v)) {
                    throw $m['OverflowError']('cannot convert float infinity to integer');
                }
                if (v == 0) {
                    this.ob_digit[0] = 0;
                    this.ob_size = 0;
                    return this;
                }
                if (v < 0) {
                    v = -v;
                    neg = true;
                }
                // frac = frexp(dval, &expo); // dval = frac*2**expo; 0.0 <= frac < 1.0
                if (v == 0) {
                    frac = 0;
                    expo = 0;
                } else {
                    expo = Math.log(v)/$log2;
                    expo = (expo < 0 ? Math.ceil(expo):Math.floor(expo)) + 1;
                    frac = v / Math.pow(2.0, expo);
                }
                if (expo <= 0) {
                    return this;
                }
                ndig = Math.floor((expo-1) / PyLong_SHIFT) + 1;
                // ldexp(a,b) == a * (2**b)
                frac = frac * Math.pow(2.0, ((expo-1) % PyLong_SHIFT) + 1);
                for (var i = ndig; --i >= 0;) {
                    bits = Math.floor(frac);
                    this.ob_digit[i] = bits;
                    frac -= bits;
                    frac = frac * Math.pow(2.0, PyLong_SHIFT);
                }
                this.ob_size = neg ? -ndig : ndig;
                return this;
            }
            throw $m['ValueError']('cannot convert ' + $p['repr']($m.value) + 'to integer');
        } else if (typeof v == 'string') {
            var nchars;
            var text = value.lstrip();
            var i = 0;
            var neg = false;

            switch (text.charAt(0)) {
                case '-':
                    neg = true;
                case '+':
                    text = text.slice(1).lstrip();
            }

            if (!radix) {
                if (text == '0' || text.charAt(0) != '0') {
                    radix = 10;
                } else {
                    switch (text.charAt(1)) {
                        case 'x':
                        case 'X':
                            radix = 16;
                            break;
                        case 'o':
                        case 'O':
                            radix = 8;
                            break;
                        case 'b':
                        case 'B':
                            radix = 2;
                            break;
                        default:
                            radix = 8;
                            break;
                    }
                }
            } else if (radix < 1 || radix > 36) {
                throw $m['ValueError']("long() arg 2 must be >= 2 and <= 36");
            }
            if (text.charAt(0) == '0' && text.length > 1) {
                switch (text.charAt(1)) {
                    case 'x':
                    case 'X':
                        if (radix == 16) text = text.slice(2);
                        break;
                    case 'o':
                    case 'O':
                        if (radix == 8) text = text.slice(2);
                        break;
                    case 'b':
                    case 'B':
                        if (radix == 2) text = text.slice(2);
                        break;

                }
            }
            if ((radix & (radix - 1)) == 0) {
                // binary base: 2, 4, 8, ...
                var n, bits_per_char, accum, bits_in_accum, k, pdigit;
                var p = 0;

                n = radix;
                for (bits_per_char = -1; n; ++bits_per_char) {
                    n >>>= 1;
                }
                n = 0;
                while ($DigitValue[text.charCodeAt(p)] < radix) {
                    p++;
                }
                nchars = p;
                n = p * bits_per_char + PyLong_SHIFT-1; //14 = PyLong_SHIFT - 1
                if (n / bits_per_char < p) {
                    throw $m['ValueError']("long string too large to convert");
                }
                this.ob_size = n = Math.floor(n/PyLong_SHIFT);
                for (var i = 0; i < n; i++) {
                    this.ob_digit[i] = 0;
                }
                // Read string from right, and fill in long from left
                accum = 0;
                bits_in_accum = 0;
                pdigit = 0;
                while (--p >= 0) {
                    k = $DigitValue[text.charCodeAt(p)];
                    accum |= k << bits_in_accum;
                    bits_in_accum += bits_per_char;
                    if (bits_in_accum >= PyLong_SHIFT) {
                        this.ob_digit[pdigit] = accum & PyLong_MASK;
                        pdigit++;
                        accum >>>= PyLong_SHIFT;
                        bits_in_accum -= PyLong_SHIFT;
                    }
                }
                if (bits_in_accum) {
                    this.ob_digit[pdigit++] = accum;
                }
                while (pdigit < n) {
                    this.ob_digit[pdigit++] = 0;
                }
                long_normalize(this);
            } else {
                // Non-binary bases (such as radix == 10)
                var c, i, convwidth, convmultmax, convmult, pz, pzstop, scan, size_z;

                if ($log_base_PyLong_BASE[radix] == 0.0) {
                    var i = 1;
                    var convmax = radix;
                    $log_base_PyLong_BASE[radix] = Math.log(radix) / Math.log(PyLong_BASE);
                    while (1) {
                        var next = convmax * radix;
                        if (next > PyLong_BASE) break;
                        convmax = next;
                        ++i;
                    }
                    $convmultmax_base[radix] = convmax;
                    $convwidth_base[radix] = i;
                }
                scan = 0;
                while ($DigitValue[text.charCodeAt(scan)] < radix)
                    ++scan;
                nchars = scan;
                size_z = scan * $log_base_PyLong_BASE[radix] + 1;
                for (var i = 0; i < size_z; i ++) {
                    this.ob_digit[i] = 0;
                }
                this.ob_size = 0;
                convwidth = $convwidth_base[radix];
                convmultmax = $convmultmax_base[radix];
                for (var str = 0; str < scan;) {
                    c = $DigitValue[text.charCodeAt(str++)];
                    for (i = 1; i < convwidth && str != scan; ++i, ++str) {
                        c = c * radix + $DigitValue[text.charCodeAt(str)];
                    }
                    convmult = convmultmax;
                    if (i != convwidth) {
                        convmult = radix;
                        for ( ; i > 1; --i) convmult *= radix;
                    }
                    pz = 0;
                    pzstop = this.ob_size;
                    for (; pz < pzstop; ++pz) {
                        c += this.ob_digit[pz] * convmult;
                        this.ob_digit[pz] = c & PyLong_MASK;
                        c >>>= PyLong_SHIFT;
                    }
                    if (c) {
                        if (this.ob_size < size_z) {
                            this.ob_digit[pz] = c;
                            this.ob_size++;
                        } else {
                            this.ob_digit[this.ob_size] = c;
                        }
                    }
                }
            }
            text = text.slice(nchars);
            if (neg) this.ob_size = -this.ob_size;
            if (text.charAt(0) == 'l' || text.charAt(0) == 'L') text = text.slice(1);
            text = text.lstrip();
            if (text.length === 0) {
                return this;
            }
            throw $m['ValueError']("invalid literal for long() with base " +
                                     radix + ": " + value);
        } else {
            throw $m['TypeError']("TypeError: long() argument must be a string or a number");
        }
        if (isNaN(v) || !isFinite(v)) {
            throw $m['ValueError']("invalid literal for long() with base " + radix + ": '" + v + "'");
        }
        return this;
    };
    $long.__init__ = function () {};
    $long.__number__ = 0x04;
    $long.__name__ = 'long';
    $long.prototype = $long;
    $long.__class__ = $long;
    $long.ob_size = 0;

    $long.toExponential = function (fractionDigits) {
        return (typeof fractionDigits == 'undefined' || fractionDigits === null) ? this.__v.toExponential() : this.__v.toExponential(fractionDigits);
    };

    $long.toFixed = function (digits) {
        return (typeof digits == 'undefined' || digits === null) ? this.__v.toFixed() : this.__v.toFixed(digits);
    };

    $long.toLocaleString = function () {
        return this.__v.toLocaleString();
    };

    $long.toPrecision = function (precision) {
        return (typeof precision == 'undefined' || precision === null) ? this.__v.toPrecision() : this.__v.toPrecision(precision);
    };

    $long.toString = function (radix) {
        return (typeof radix == 'undefined' || radix === null) ? Format(this, 10, false, false) : Format(this, radix, false, false, false);
    };

    $long.valueOf = function() {
        var x, v;
        x = AsScaledDouble(this);
        // ldexp(a,b) == a * (2**b)
        v = x[0] * Math.pow(2.0, x[1] * PyLong_SHIFT);
        if (!isFinite(v)) {
            throw $m['OverflowError']('long int too large to convert to float');
        }
        return v;
    };

    $long.__str__ = function () {
        if (typeof this == 'function') return "<type '" + this.__name__ + "'>";
        return Format(this, 10, false, false);
    };

    $long.__repr__ = function () {
        if (typeof this == 'function') return "<type '" + this.__name__ + "'>";
        return Format(this, 10, true, false);
    };

    $long.__nonzero__ = function () {
        return this.ob_size != 0;
    };

    $long.__cmp__ = function (b) {
        var sign;
 
        if (this.ob_size != b.ob_size) {
            if (this.ob_size < b.ob_size) return -1;
            return 1;
        }
        var i = this.ob_size < 0 ? - this.ob_size : this.ob_size;
        while (--i >= 0 && this.ob_digit[i] == b.ob_digit[i])
            ;
        if (i < 0) return 0;
        if (this.ob_digit[i] < b.ob_digit[i]) {
            if (this.ob_size < 0) return 1;
            return -1;
        }
        if (this.ob_size < 0) return -1;
        return 1;
    };

    $long.__hash__ = function () {
        var s = this.__str__();
        var v = this.valueOf();
        if (v.toString() == s) {
            return v;
        }
        return s;
    };

    $long.__invert__ = function () {
        var x = this.__add__($const_long_1);
        x.ob_size = -x.ob_size;
        return x;
    };

    $long.__neg__ = function () {
        var x = new $long(0);
        x.ob_digit = this.ob_digit.slice(0);
        x.ob_size = -this.ob_size;
        return x;
    };

    $long.__abs__ = function () {
        if (this.ob_size >= 0) return this;
        var x = new $long(0);
        x.ob_digit = this.ob_digit.slice(0);
        x.ob_size = -x.ob_size;
        return x;
    };

    $long.__lshift = function (y) {
        var a, z, wordshift, remshift, oldsize, newsize, 
            accum, i, j;
        if (y < 0) {
            throw $m['ValueError']('negative shift count');
        }
        if (y >= $max_float_int) {
            throw $m['ValueError']('outrageous left shift count');
        }
        a = this;

        wordshift = Math.floor(y / PyLong_SHIFT);
        remshift  = y - wordshift * PyLong_SHIFT;

        oldsize = a.ob_size < 0 ? -a.ob_size : a.ob_size;
        newsize = oldsize + wordshift;
        if (remshift) ++newsize;
        z = new $long(0);
        z.ob_size = a.ob_size < 0 ? -newsize : newsize;
        for (i = 0; i < wordshift; i++) {
            z.ob_digit[i] = 0;
        }
        accum = 0;
        for (i = wordshift, j = 0; j < oldsize; i++, j++) {
            accum |= a.ob_digit[j] << remshift;
            z.ob_digit[i] = accum & PyLong_MASK;
            accum >>>= PyLong_SHIFT;
        }
        if (remshift) {
            z.ob_digit[newsize-1] = accum;
        }
        z = long_normalize(z);
        return z;
    };

    $long.__lshift__ = function (y) {
        switch (y.__number__) {
            case 0x01:
                if (y == Math.floor(y)) return this.__lshift(y);
                break;
            case 0x02:
                return this.__lshift(y.__v);
            case 0x04:
                y = y.valueOf();
                return this.__lshift(y);
        }
        return $p['NotImplemented'];
    };

    $long.__rlshift__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return (new $long(y.__v)).__lshift(this.valueOf());
            case 0x04:
                return y.__lshift(this.valueOf());
        }
        return $p['NotImplemented'];
    };

    $long.__rshift = function (y) {
        var a, z, size, wordshift, newsize, loshift, hishift,
            lomask, himask, i, j;
        if (y.__number__ != 0x01) {
            y = y.valueOf();
        } else {
            if (y != Math.floor(y)) {
                throw $m['TypeError']("unsupported operand type(s) for >>: 'long' and 'float'");
            }
        }
        if (y < 0) {
            throw $m['ValueError']('negative shift count');
        }
        if (y >= $max_float_int) {
            throw $m['ValueError']('shift count too big');
        }
        a = this;
        size = this.ob_size;
        if (this.ob_size < 0) {
            size = -size;
            a = this.__add__($const_long_1);
            a.ob_size = -a.ob_size;
        }

        wordshift = Math.floor(y / PyLong_SHIFT);
        newsize = size - wordshift;
        if (newsize <= 0) {
            z = $const_long_0;
        } else {
            loshift = y % PyLong_SHIFT;
            hishift = PyLong_SHIFT - loshift;
            lomask = (1 << hishift) - 1;
            himask = PyLong_MASK ^ lomask;
            z = new $long(0);
            z.ob_size = a.ob_size < 0 ? -newsize : newsize;
            for (i = 0, j = wordshift; i < newsize; i++, j++) {
                z.ob_digit[i] = (a.ob_digit[j] >>> loshift) & lomask;
                if (i+1 < newsize) {
                    z.ob_digit[i] |=
                      (a.ob_digit[j+1] << hishift) & himask;
                }
            }
            z = long_normalize(z);
        }

        if (this.ob_size < 0) {
            z = z.__add__($const_long_1);
            z.ob_size = -z.ob_size;
        }
        return z;
    };

    $long.__rshift__ = function (y) {
        switch (y.__number__) {
            case 0x01:
                if (y == Math.floor(y)) return this.__rshift(y);
                break;
            case 0x02:
                return this.__rshift(y.__v);
            case 0x04:
                y = y.valueOf();
                return this.__rshift(y);
        }
        return $p['NotImplemented'];
    };

    $long.__rrshift__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return (new $long(y.__v)).__rshift(this.valueOf());
            case 0x04:
                return y.__rshift(this.valueOf());
        }
        return $p['NotImplemented'];
    };

    $long.__and = function (b) {
        var a, maska, maskb, negz, size_a, size_b, size_z,
            i, z, diga, digb, v, op;

        a = this;

        if (a.ob_size < 0) {
            a = a.__invert__();
            maska = PyLong_MASK;
        } else {
            maska = 0;
        }
        if (b.ob_size < 0) {
            b = b.__invert__();
            maskb = PyLong_MASK;
        } else {
            maskb = 0;
        }
        negz = 0;


            op = '&';
            if (maska && maskb) {
                op = '|';
                maska ^= PyLong_MASK;
                maskb ^= PyLong_MASK;
                negz = -1;
            }


        size_a = a.ob_size;
        size_b = b.ob_size;
        size_z = op == '&'
                    ? (maska
                        ? size_b
                        : (maskb ? size_a : (size_a < size_b ? size_a : size_b)))
                    : (size_a > size_b ? size_a : size_b);
        z = new $long(0);
        z.ob_size = size_z;

        switch (op) {
            case '&':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga & digb;
                }
                break;
            case '|':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga | digb;
                }
                break;
            case '^':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga ^ digb;
                }
                break;
        }
        z = long_normalize(z);
        if (negz == 0) {
            return z;
        }
        return z.__invert__();
    };

    $long.__and__ = function (y) {
        switch (y.__number__) {
            case 0x01:
                if (y == Math.floor(y)) return this.__and(new $long(y));
                break;
            case 0x02:
                return this.__and(new $long(y.__v));
            case 0x04:
                return this.__and(y);
        }
        return $p['NotImplemented'];
    };

    $long.__rand__ = $long.__and__;

    $long.__xor = function (b) {
        var a,maska, maskb, negz, size_a, size_b, size_z,
            i, z, diga, digb, v, op;

        a = this;

        if (a.ob_size < 0) {
            a = a.__invert__();
            maska = PyLong_MASK;
        } else {
            maska = 0;
        }
        if (b.ob_size < 0) {
            b = b.__invert__();
            maskb = PyLong_MASK;
        } else {
            maskb = 0;
        }
        negz = 0;


            op = '^';
            if (maska != maskb) {
                maska ^= PyLong_MASK;
                negz = -1;
            }


        size_a = a.ob_size;
        size_b = b.ob_size;
        size_z = op == '&'
                    ? (maska
                        ? size_b
                        : (maskb ? size_a : (size_a < size_b ? size_a : size_b)))
                    : (size_a > size_b ? size_a : size_b);
        z = new $long(0);
        z.ob_size = size_z;

        switch (op) {
            case '&':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga & digb;
                }
                break;
            case '|':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga | digb;
                }
                break;
            case '^':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga ^ digb;
                }
                break;
        }
        z = long_normalize(z);
        if (negz == 0) {
            return z;
        }
        return z.__invert__();
    };

    $long.__xor__ = function (y) {
        switch (y.__number__) {
            case 0x01:
                if (y == Math.floor(y)) return this.__xor(new $long(y));
                break;
            case 0x02:
                return this.__xor(new $long(y.__v));
            case 0x04:
                return this.__xor(y);
        }
        return $p['NotImplemented'];
    };

    $long.__rxor__ = $long.__xor__;

    $long.__or = function (b) {
        var a, maska, maskb, negz, size_a, size_b, size_z,
            i, z, diga, digb, v, op;

        a = this;

        if (a.ob_size < 0) {
            a = a.__invert__();
            maska = PyLong_MASK;
        } else {
            maska = 0;
        }
        if (b.ob_size < 0) {
            b = b.__invert__();
            maskb = PyLong_MASK;
        } else {
            maskb = 0;
        }
        negz = 0;


            op = '|';
            if (maska || maskb) {
                op = '&';
                maska ^= PyLong_MASK;
                maskb ^= PyLong_MASK;
                negz = -1;
            }


        size_a = a.ob_size;
        size_b = b.ob_size;
        size_z = op == '&'
                    ? (maska
                        ? size_b
                        : (maskb ? size_a : (size_a < size_b ? size_a : size_b)))
                    : (size_a > size_b ? size_a : size_b);
        z = new $long(0);
        z.ob_size = size_z;

        switch (op) {
            case '&':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga & digb;
                }
                break;
            case '|':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga | digb;
                }
                break;
            case '^':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga ^ digb;
                }
                break;
        }
        z = long_normalize(z);
        if (negz == 0) {
            return z;
        }
        return z.__invert__();
    };

    $long.__or__ = function (y) {
        switch (y.__number__) {
            case 0x01:
                if (y == Math.floor(y)) return this.__or(new $long(y));
                break;
            case 0x02:
                return this.__or(new $long(y.__v));
            case 0x04:
                return this.__or(y);
        }
        return $p['NotImplemented'];
    };

    $long.__ror__ = $long.__or__;

    $long.__oct__ = function () {
        return Format(this, 8, true, false);
    };

    $long.__hex__ = function () {
        return Format(this, 16, true, false);
    };

    $long.__add = function (b) {
        var a = this, z;
        if (a.ob_size < 0) {
            if (b.ob_size < 0) {
                z = x_add(a, b);
                z.ob_size = -(z.ob_size);
            }
            else {
                z = x_sub(b, a);
            }
        }
        else {
            z = b.ob_size < 0 ? x_sub(a, b) : x_add(a, b);
        }
        return z;
    };

    $long.__add__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return this.__add(new $long(y.__v));
            case 0x04:
                return this.__add(y);
        }
        return $p['NotImplemented'];
    };

    $long.__radd__ = $long.__add__;

    $long.__sub = function (b) {
        var a = this, z;
        if (a.ob_size < 0) {
            z = b.ob_size < 0 ? x_sub(a, b) : x_add(a, b);
            z.ob_size = -(z.ob_size);
        }
        else {
            z = b.ob_size < 0 ?  x_add(a, b) : x_sub(a, b);
        }
        return z;
    };

    $long.__sub__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return this.__sub(new $long(y.__v));
            case 0x04:
                return this.__sub(y);
        }
        return $p['NotImplemented'];
    };

    $long.__rsub__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return (new $long(y.__v)).__sub(this);
            case 0x04:
                return y.__sub(this);
        }
        return $p['NotImplemented'];
    };

    $long.__mul = function (b) {
        //var z = k_mul(a, b);
        var z = x_mul(this, b);
        if ((this.ob_size ^ b.ob_size) < 0)
            z.ob_size = -(z.ob_size);
        return z;
    };

    $long.__mul__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return this.__mul(new $long(y.__v));
            case 0x04:
                return this.__mul(y);
        }
        return $p['NotImplemented'];
    };

    $long.__rmul__ = $long.__mul__;

    $long.__div = function (b) {
        var div = new $long(0);
        l_divmod(this, b, div, null);
        return div;
    };

    $long.__div__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return this.__sub(new $long(y.__v));
            case 0x04:
                return this.__sub(y);
        }
        return $p['NotImplemented'];
    };

    $long.__rdiv__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return (new $long(y.__v)).__div(this);
            case 0x04:
                return y.__div(this);
        }
        return $p['NotImplemented'];
    };

    $long.__mod = function (b) {
        var mod = new $long(0);
        l_divmod(this, b, null, mod);
        return mod;
    };

    $long.__mod__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return this.__mod(new $long(y.__v));
            case 0x04:
                return this.__mod(y);
        }
        return $p['NotImplemented'];
    };

    $long.__rmod__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return (new $long(y.__v)).__mod(this);
            case 0x04:
                return y.__mod(this);
        }
        return $p['NotImplemented'];
    };

    $long.__divmod = function (b) {
        var div = new $long(0);
        var mod = new $long(0);
        l_divmod(this, b, div, mod);
        return $p['tuple']([div, mod]);
    };

    $long.__divmod__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return this.__divmod(new $long(y.__v));
            case 0x04:
                return this.__divmod(y);
        }
        return $p['NotImplemented'];
    };

    $long.__rdivmod__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return (new $long(y.__v)).__divmod(this);
            case 0x04:
                return y.__divmod(this);
        }
        return $p['NotImplemented'];
    };

    $long.__floordiv = function (b) {
        var div = new $long(0);
        l_divmod(this, b, div, null);
        return div;
    };

    $long.__floordiv__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return this.__floordiv(new $long(y.__v));
            case 0x04:
                return this.__floordiv(y);
        }
        return $p['NotImplemented'];
    };

    $long.__rfloordiv__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return (new $long(y.__v)).__floordiv(this);
            case 0x04:
                return y.__floordiv(this);
        }
        return $p['NotImplemented'];
    };

    $long.__pow = function (w, x) {
        var v = this;
        var a, b, c, negativeOutput = 0, z, i, j, k, temp, bi;
        var table = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                     0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

        a = this;
        b = w.__number__ == 0x04 ? w : new $long(w);
        if (x === null || typeof x == 'undefined') {
            c = null;
        } else {
            c = x.__number__ == 0x04 ? x : new $long(x);
        }

        if (b.ob_size < 0) {
            if (c !== null) {
                throw $m['TypeError']("pow() 2nd argument cannot be negative when 3rd argument specified");
            }
            return Math.pow(v.valueOf(), w.valueOf());
        }

        if (c !== null) {
            if (c.ob_size == 0) {
                throw $m['ValueError']("pow() 3rd argument cannot be 0");
            }
            if (c.ob_size < 0) {
                negativeOutput = 1;
                temp = $pow_temp_c;
                temp.ob_digit = c.ob_digit.slice(0);
                temp.ob_size = -c.ob_size;
                c = temp;
            }
            if (c.ob_size == 1 && c.ob_digit[0] == 1) {
                return $const_long_0;
            }
            if (a.ob_size < 0) {
                temp = $pow_temp_a;
                l_divmod(a, c, null, temp);
                a = temp;
            }
        }
        z = new $long(1);
        temp = $pow_temp_z;
        if (b.ob_size <= FIVEARY_CUTOFF) {
            for (i = b.ob_size - 1; i >= 0; --i) {
                bi = b.ob_digit[i];
                for (j = 1 << (PyLong_SHIFT-1); j != 0; j >>>= 1) {
                    z = z.__mul(z);
                    if (c !== null) {
                        l_divmod(z, c, null, temp);
                        z.ob_digit = temp.ob_digit.slice(0);
                        z.ob_size = temp.ob_size;
                    }
                    if (bi & j) {
                        z = z.__mul(a);
                        if (c !== null) {
                            l_divmod(z, c, null, temp);
                            z.ob_digit = temp.ob_digit.slice(0);
                            z.ob_size = temp.ob_size;
                        }
                    }
                }
            }
        } else {
            table[0] = z;
            for (i = 1; i < 32; ++i) {
                table[i] = table[i-1].__mul(a);
                if (c !== null) {
                    l_divmod(table[i], c, null, temp);
                    table[i].ob_digit = temp.ob_digit.slice(0);
                    table[i].ob_size = temp.ob_size;
                }
            }
            for (i = b.ob_size - 1; i >= 0; --i) {
                bi = b.ob_digit[i];
                for (j = PyLong_SHIFT - 5; j >= 0; j -= 5) {
                    var index = (bi >>> j) & 0x1f;
                    for (k = 0; k < 5; ++k) {
                        z = z.__mul(z);
                        if (c !== null) {
                            l_divmod(z, c, null, temp);
                            z.ob_digit = temp.ob_digit.slice(0);
                            z.ob_size = temp.ob_size;
                        }
                    }
                    if (index) {
                        z = z.__mul(table[index]);
                        if (c !== null) {
                            l_divmod(z, c, null, temp);
                            z.ob_digit = temp.ob_digit.slice(0);
                            z.ob_size = temp.ob_size;
                        }
                    }
                }
            }
        }

        if ((c !== null) && negativeOutput && 
            (z.ob_size != 0) && (c.ob_size != 0)) {
            z = z.__sub__(c);
        }
        return z;
    };

    $long.__pow__ = function (y, z) {
        switch (y.__number__) {
            case 0x02:
                if (typeof z == 'undefined')
                    return this.__pow(new $long(y.__v), null);
                switch (z.__number) {
                    case 0x02:
                        return this.__pow(new $long(y.__v), new $long(z));
                    case 0x04:
                        return this.__pow(new $long(y.__v), z);
                }
                break;
            case 0x04:
                if (typeof z == 'undefined')
                    return this.__pow(y, null);
                switch (z.__number) {
                    case 0x02:
                        return this.__pow(y, new $long(z));
                    case 0x04:
                        return this.__pow(y, z);
                }
                break;
        }
        return $p['NotImplemented'];
    };


    var $const_long_0 = new $long(0),
        $const_long_1 = new $long(1);
    // Since javascript is single threaded:
    var $l_divmod_div = new $long(0),
        $l_divmod_mod = new $long(0),
        $x_divrem_v = new $long(0),
        $x_divrem_w = new $long(0),
        $pow_temp_a = new $long(0),
        $pow_temp_c = new $long(0),
        $pow_temp_z = new $long(0);
})();

	var attrib_remap = $m.attrib_remap = ['apply', 'break', 'call', 'case', 'catch', 'class', 'comment', 'const', 'constructor', 'continue', 'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally', 'for', 'function', 'if', 'import', 'in', 'label', 'name', 'new', 'prototype', 'replace', 'return', 'split', 'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while', 'with'];
	var var_remap = $m.var_remap = ['arguments', 'break', 'case', 'catch', 'char', 'class', 'comment', 'const', 'continue', 'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'final', 'finally', 'for', 'function', 'if', 'import', 'in', 'label', 'new', 'return', 'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while', 'with'];

	$m['NotImplementedType'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '9258a484d750bde802497a5914f531b5';
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return '\x3Ctype \x27NotImplementedType\x27\x3E';
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['__repr__']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$method = $pyjs__bind_method2('toString', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['__repr__']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toString'] = $method;
		var $bases = new Array($m['object']);
		return $pyjs_type('NotImplementedType', $bases, $cls_definition);
	})();
	$m['NotImplemented'] = $m['NotImplementedType']();

var $iter_array = function (l) {
    this.__array = l;
    this.i = -1;
};
$iter_array.prototype.next = function (noStop) {
    if (++this.i == this.__array.length) {
        if (noStop === true) {
            return;
        }
        throw $p['StopIteration'];
    }
    return this.__array[this.i];
};
$iter_array.prototype.__iter__ = function ( ) {
    return this;
};
var $reversed_iter_array = function (l) {
    this.___array = l;
    this.i = l.length;
};
$reversed_iter_array.prototype.next = function (noStop) {
    if (--this.i == -1) {
        if (noStop === true) {
            return;
        }
        throw $p['StopIteration'];
    }
    return this.___array[this.i];
};
$reversed_iter_array.prototype.__iter__ = function ( ) {
    return this;
};
//$reversed_iter_array.prototype.$genfunc = $reversed_iter_array.prototype.next;
var $enumerate_array = function (l) {
    this.array = l;
    this.i = -1;
    this.tuple = 
	$p['tuple']($p['list']([0, '']));

    this.tl = this.tuple.__array;
};
$enumerate_array.prototype.next = function (noStop, reuseTuple) {
    if (++this.i == this.array.length) {
        if (noStop === true) {
            return;
        }
        throw $p['StopIteration'];
    }
    this.tl[1] = this.array[this.i];
    if (this.tl[0].__number__ == 0x01) {
        this.tl[0] = this.i;
    } else {
        this.tl[0] = new $p['float_int'](this.i);
    }
    return reuseTuple === true ? this.tuple : $p['tuple'](this.tl);
};
$enumerate_array.prototype.__iter__ = function ( ) {
    return this;
};
$enumerate_array.prototype.$genfunc = $enumerate_array.prototype.next;

	$m['list'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'b5295eaccd33e9f6ae71377c3f67bbca';
		$method = $pyjs__bind_method2('__init__', function(data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}
			if (typeof data == 'undefined') data=arguments.callee.__args__[3][1];


        if (data === null) {
            throw $m['TypeError']("'NoneType' is not iterable");
        }
        if (data.constructor === Array) {
            self.__array = data.slice();
            return null;
        }
        if (typeof data.__iter__ == 'function') {
            if (typeof data.__array == 'object') {
                self.__array = data.__array.slice();
                return null;
            }
            var iter = data.__iter__();
            if (typeof iter.__array == 'object') {
                self.__array = iter.__array.slice();
                return null;
            }
            data = [];
            var item, i = 0;
            if (typeof iter.$genfunc == 'function') {
                while (typeof (item=iter.next(true)) != 'undefined') {
                    data[i++] = item;
                }
            } else {
                try {
                    while (true) {
                        data[i++] = iter.next();
                    }
                }
                catch (e) {
                    if (e.__name__ != 'StopIteration') throw e;
                }
            }
            self.__array = data;
            return null;
        }
        throw $m['TypeError']("'" + $p['repr'](data) + "' is not iterable");
        
		}
	, 1, [null,null,['self'],['data', []]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__hash__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			throw ($m['TypeError']('list objects are unhashable'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method2('append', function(item) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
			}

self.__array[self.__array.length] = item;
		}
	, 1, [null,null,['self'],['item']]);
		$cls_definition['append'] = $method;
		$method = $pyjs__bind_method2('extend', function(data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}


        if (data === null) {
            throw $m['TypeError']("'NoneType' is not iterable");
        }
        if (data.constructor === Array) {
        } else if (typeof data.__iter__ == 'function') {
            if (typeof data.__array == 'object') {
                data = data.__array;
            } else {
                var iter = data.__iter__();
                if (typeof iter.__array == 'object') {
                    data = iter.__array;
                }
                data = [];
                var item, i = 0;
                if (typeof iter.$genfunc == 'function') {
                    while (typeof (item=iter.next(true)) != 'undefined') {
                        data[i++] = item;
                    }
                } else {
                    try {
                        while (true) {
                            data[i++] = iter.next();
                        }
                    }
                    catch (e) {
                        if (e.__name__ != 'StopIteration') throw e;
                    }
                }
            }
        } else {
            throw $m['TypeError']("'" + $p['repr'](data) + "' is not iterable");
        }
        var l = self.__array;
        var j = self.__array.length;
        var n = data.length, i = 0;
        while (i < n) {
            l[j++] = data[i++];
        }
        
		}
	, 1, [null,null,['self'],['data']]);
		$cls_definition['extend'] = $method;
		$method = $pyjs__bind_method2('remove', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}


        var index=self.index(value);
        if (index<0) {
            throw $m['ValueError']("list.remove(x): x not in list");
        }
        self.__array.splice(index, 1);
        return true;
        
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('index', function(value, _start) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
				_start = arguments[2];
			}
			if (typeof _start == 'undefined') _start=arguments.callee.__args__[4][1];


        var start = _start.valueOf();
        /* if (typeof valueXXX == 'number' || typeof valueXXX == 'string') {
            start = selfXXX.__array.indexOf(valueXXX, start);
            if (start >= 0)
                return start;
        } else */ {
            var len = self.__array.length >>> 0;

            start = (start < 0)
                    ? Math.ceil(start)
                    : Math.floor(start);
            if (start < 0)
                start += len;

            for (; start < len; start++) {
                if ( /*start in selfXXX.__array && */
                    $m['cmp'](self.__array[start], value) == 0)
                    return start;
            }
        }
        
			throw ($m['ValueError']('list.index(x): x not in list'));
			return null;
		}
	, 1, [null,null,['self'],['value'],['_start', 0]]);
		$cls_definition['index'] = $method;
		$method = $pyjs__bind_method2('insert', function(index, value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				value = arguments[2];
			}

    var a = self.__array; self.__array=a.slice(0, index).concat(value, a.slice(index));
		}
	, 1, [null,null,['self'],['index'],['value']]);
		$cls_definition['insert'] = $method;
		$method = $pyjs__bind_method2('pop', function(_index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				_index = arguments[1];
			}
			if (typeof _index == 'undefined') _index=arguments.callee.__args__[3][1];


        var index = _index.valueOf();
        if (index<0) index += self.__array.length;
        if (index < 0 || index >= self.__array.length) {
            if (self.__array.length == 0) {
                throw $m['IndexError']("pop from empty list");
            }
            throw $m['IndexError']("pop index out of range");
        }
        var a = self.__array[index];
        self.__array.splice(index, 1);
        return a;
        
		}
	, 1, [null,null,['self'],['_index', (typeof ($usub1=1)=='number'?
			-$usub1:
			$m['op_usub']($usub1))]]);
		$cls_definition['pop'] = $method;
		$method = $pyjs__bind_method2('__cmp__', function(l) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				l = arguments[1];
			}

			if ($p['bool'](!$p['bool']($p['isinstance'](l, $m['list'])))) {
				return (typeof ($usub2=1)=='number'?
					-$usub2:
					$m['op_usub']($usub2));
			}

        var n1 = self.__array.length,
            n2 = l.__array.length,
            a1 = self.__array,
            a2 = l.__array,
            n, c;
        n = (n1 < n2 ? n1 : n2);
        for (var i = 0; i < n; i++) {
            c = $m['cmp'](a1[i], a2[i]);
            if (c) return c;
        }
        if (n1 < n2) return -1;
        if (n1 > n2) return 1;
        return 0;
		}
	, 1, [null,null,['self'],['l']]);
		$cls_definition['__cmp__'] = $method;
		$method = $pyjs__bind_method2('__getslice__', function(lower, upper) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				lower = arguments[1];
				upper = arguments[2];
			}


        if (upper==null)
            return $m['list'](self.__array.slice(lower));
        return $m['list'](self.__array.slice(lower, upper));
        
		}
	, 1, [null,null,['self'],['lower'],['upper']]);
		$cls_definition['__getslice__'] = $method;
		$method = $pyjs__bind_method2('__delslice__', function(_lower, upper) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				_lower = arguments[1];
				upper = arguments[2];
			}


        var lower = _lower;
        var n = upper - lower;
        if (upper==null) {
            n =  self.__array.length;
        }
        if (!lower) lower = 0;
        if (n > 0) self.__array.splice(lower, n);
        
			return null;
		}
	, 1, [null,null,['self'],['_lower'],['upper']]);
		$cls_definition['__delslice__'] = $method;
		$method = $pyjs__bind_method2('__setslice__', function(lower, upper, data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				lower = arguments[1];
				upper = arguments[2];
				data = arguments[3];
			}
			var tail;
			self['__delslice__'](lower, upper);
			tail = self['__getslice__'](lower, null);
			self['__delslice__'](lower, null);
			self['extend'](data);
			self['extend'](tail);
			return null;
		}
	, 1, [null,null,['self'],['lower'],['upper'],['data']]);
		$cls_definition['__setslice__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(_index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				_index = arguments[1];
			}


        var index = _index.valueOf();
        if (index < 0) index += self.__array.length;
        if (index < 0 || index >= self.__array.length) {
            throw $m['IndexError']("list index out of range");
        }
        return self.__array[index];
        
		}
	, 1, [null,null,['self'],['_index']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method2('__setitem__', function(_index, value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				_index = arguments[1];
				value = arguments[2];
			}


        var index = _index.valueOf();
        if (index < 0) index += self.__array.length;
        if (index < 0 || index >= self.__array.length) {
            throw $m['IndexError']("list assignment index out of range");
        }
        self.__array[index]=value;
        
		}
	, 1, [null,null,['self'],['_index'],['value']]);
		$cls_definition['__setitem__'] = $method;
		$method = $pyjs__bind_method2('__delitem__', function(_index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				_index = arguments[1];
			}


        var index = _index.valueOf();
        if (index < 0) index += self.__array.length;
        if (index < 0 || index >= self.__array.length) {
            throw $m['IndexError']("list assignment index out of range");
        }
        self.__array.splice(index, 1);
        
		}
	, 1, [null,null,['self'],['_index']]);
		$cls_definition['__delitem__'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self.__array.length;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('__contains__', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}
			var $pyjs_try_err;
			try {
				self['index'](value);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $m['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$m['ValueError'])) {
					return false;
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			return true;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['__contains__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return new $iter_array(self.__array);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('__reversed__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return new $reversed_iter_array(self.__array);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__reversed__'] = $method;
		$method = $pyjs__bind_method2('__enumerate__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return new $enumerate_array(self.__array);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__enumerate__'] = $method;
		$method = $pyjs__bind_method2('reverse', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

    self.__array.reverse();
		}
	, 1, [null,null,['self']]);
		$cls_definition['reverse'] = $method;
		$method = $pyjs__bind_method2('sort', function(cmp, key, reverse) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cmp = arguments[1];
				key = arguments[2];
				reverse = arguments[3];
			}
			if (typeof cmp == 'undefined') cmp=arguments.callee.__args__[3][1];
			if (typeof key == 'undefined') key=arguments.callee.__args__[4][1];
			if (typeof reverse == 'undefined') reverse=arguments.callee.__args__[5][1];
			var thisSort1,thisSort2,$and18,$and19,thisSort3;
			if ($p['bool']((cmp === null))) {
				cmp = $m['__cmp'];
			}
			if ($p['bool'](($p['bool']($and18=key)?reverse:$and18))) {
				thisSort1 = function(a, b) {

					return (typeof ($usub3=cmp(key(a), key(b)))=='number'?
						-$usub3:
						$m['op_usub']($usub3));
				};
				thisSort1.__name__ = 'thisSort1';

				thisSort1.__bind_type__ = 0;
				thisSort1.__args__ = [null,null,['a'],['b']];
				self['__array']['sort'](thisSort1);
			}
			else if ($p['bool'](key)) {
				thisSort2 = function(a, b) {

					return cmp(key(a), key(b));
				};
				thisSort2.__name__ = 'thisSort2';

				thisSort2.__bind_type__ = 0;
				thisSort2.__args__ = [null,null,['a'],['b']];
				self['__array']['sort'](thisSort2);
			}
			else if ($p['bool'](reverse)) {
				thisSort3 = function(a, b) {

					return (typeof ($usub4=cmp(a, b))=='number'?
						-$usub4:
						$m['op_usub']($usub4));
				};
				thisSort3.__name__ = 'thisSort3';

				thisSort3.__bind_type__ = 0;
				thisSort3.__args__ = [null,null,['a'],['b']];
				self['__array']['sort'](thisSort3);
			}
			else {
				self['__array']['sort'](cmp);
			}
			return null;
		}
	, 1, [null,null,['self'],['cmp', null],['key', null],['reverse', false]]);
		$cls_definition['sort'] = $method;
		$method = $pyjs__bind_method2('getArray', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr53,$attr54;
			return self['__array'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getArray'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr55,$attr56;
			if ($p['bool']($p['callable'](self))) {
				return $p['sprintf']('\x3Ctype \x27%s\x27\x3E', self['__name__']);
			}

        var s = "[";
        for (var i=0; i < self.__array.length; i++) {
            s += $p['repr'](self.__array[i]);
            if (i < self.__array.length - 1)
                s += ", ";
        }
        s += "]";
        return s;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__add__', function(y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				y = arguments[1];
			}
			var $attr58,$attr57;
			if ($p['bool'](!$p['bool']($p['isinstance'](y, self)))) {
				throw ($m['TypeError']('can only concatenate list to list'));
			}
			return $m['list'](self['__array']['concat'](y['__array']));
		}
	, 1, [null,null,['self'],['y']]);
		$cls_definition['__add__'] = $method;
		$method = $pyjs__bind_method2('__mul__', function(n) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				n = arguments[1];
			}
			var a,$attr59,$attr60,$sub3,$sub4;
			if ($p['bool'](!$p['bool'](n !== null && n.__number__ && (n.__number__ != 0x01 || isFinite(n))))) {
				throw ($m['TypeError']('can\x27t multiply sequence by non-int'));
			}
			a = $p['list']([]);
			while ($p['bool'](n)) {
				n = $m['__op_sub']($sub3=n,$sub4=1);
				a['extend'](self['__array']);
			}
			return a;
		}
	, 1, [null,null,['self'],['n']]);
		$cls_definition['__mul__'] = $method;
		$method = $pyjs__bind_method2('__rmul__', function(n) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				n = arguments[1];
			}

			return self['__mul__'](n);
		}
	, 1, [null,null,['self'],['n']]);
		$cls_definition['__rmul__'] = $method;
		var $bases = new Array(pyjslib.object);
		return $pyjs_type('list', $bases, $cls_definition);
	})();
$m['list'].__str__ = $m['list'].__repr__;
$m['list'].toString = $m['list'].__str__;
	$m['tuple'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'c8b4e78c51e255494b81a1f73b29a00e';
		$method = $pyjs__bind_method2('__init__', function(data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}
			if (typeof data == 'undefined') data=arguments.callee.__args__[3][1];


        if (data === null) {
            throw $m['TypeError']("'NoneType' is not iterable");
        }
        if (data.constructor === Array) {
            self.__array = data.slice();
            return null;
        }
        if (typeof data.__iter__ == 'function') {
            if (typeof data.__array == 'object') {
                self.__array = data.__array.slice();
                return null;
            }
            var iter = data.__iter__();
            if (typeof iter.__array == 'object') {
                self.__array = iter.__array.slice();
                return null;
            }
            data = [];
            var item, i = 0;
            if (typeof iter.$genfunc == 'function') {
                while (typeof (item=iter.next(true)) != 'undefined') {
                    data[i++] = item;
                }
            } else {
                try {
                    while (true) {
                        data[i++] = iter.next();
                    }
                }
                catch (e) {
                    if (e.__name__ != 'StopIteration') throw e;
                }
            }
            self.__array = data;
            return null;
        }
        throw $m['TypeError']("'" + $p['repr'](data) + "' is not iterable");
        
		}
	, 1, [null,null,['self'],['data', []]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__hash__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add38,$attr61,$attr62,$add37;
			return $m['__op_add']($add37='$tuple$',$add38=$p['str'](self['__array']));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method2('__cmp__', function(l) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				l = arguments[1];
			}

			if ($p['bool'](!$p['bool']($p['isinstance'](l, $m['tuple'])))) {
				return 1;
			}

        var n1 = self.__array.length,
            n2 = l.__array.length,
            a1 = self.__array,
            a2 = l.__array,
            n, c;
        n = (n1 < n2 ? n1 : n2);
        for (var i = 0; i < n; i++) {
            c = $m['cmp'](a1[i], a2[i]);
            if (c) return c;
        }
        if (n1 < n2) return -1;
        if (n1 > n2) return 1;
        return 0;
		}
	, 1, [null,null,['self'],['l']]);
		$cls_definition['__cmp__'] = $method;
		$method = $pyjs__bind_method2('__getslice__', function(lower, upper) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				lower = arguments[1];
				upper = arguments[2];
			}


        if (upper==null) return $m['tuple'](self.__array.slice(lower));
        return $m['tuple'](self.__array.slice(lower, upper));
        
		}
	, 1, [null,null,['self'],['lower'],['upper']]);
		$cls_definition['__getslice__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(_index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				_index = arguments[1];
			}


        var index = _index.valueOf();
        if (index < 0) index += self.__array.length;
        if (index < 0 || index >= self.__array.length) {
            throw $m['IndexError']("tuple index out of range");
        }
        return self.__array[index];
        
		}
	, 1, [null,null,['self'],['_index']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self.__array.length;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('__contains__', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			return self.__array.indexOf(value)>=0;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['__contains__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return new $iter_array(self.__array);

        var i = 0;
        var l = self.__array;
        return {
            'next': function() {
                if (i >= l.length) {
                    throw $p['StopIteration'];
                }
                return l[i++];
            },
            '__iter__': function() {
                return this;
            }
        };
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('__enumerate__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return new $enumerate_array(self.__array);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__enumerate__'] = $method;
		$method = $pyjs__bind_method2('getArray', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr64,$attr63;
			return self['__array'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getArray'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr65,$attr66;
			if ($p['bool']($p['callable'](self))) {
				return $p['sprintf']('\x3Ctype \x27%s\x27\x3E', self['__name__']);
			}

        var s = "(";
        for (var i=0; i < self.__array.length; i++) {
            s += $p['repr'](self.__array[i]);
            if (i < self.__array.length - 1)
                s += ", ";
        }
        if (self.__array.length == 1)
            s += ",";
        s += ")";
        return s;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__add__', function(y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				y = arguments[1];
			}
			var $attr67,$attr68;
			if ($p['bool'](!$p['bool']($p['isinstance'](y, self)))) {
				throw ($m['TypeError']('can only concatenate tuple to tuple'));
			}
			return $m['tuple'](self['__array']['concat'](y['__array']));
		}
	, 1, [null,null,['self'],['y']]);
		$cls_definition['__add__'] = $method;
		$method = $pyjs__bind_method2('__mul__', function(n) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				n = arguments[1];
			}
			var a,$attr69,$attr70,$sub6,$sub5;
			if ($p['bool'](!$p['bool'](n !== null && n.__number__ && (n.__number__ != 0x01 || isFinite(n))))) {
				throw ($m['TypeError']('can\x27t multiply sequence by non-int'));
			}
			a = $p['list']([]);
			while ($p['bool'](n)) {
				n = $m['__op_sub']($sub5=n,$sub6=1);
				a['extend'](self['__array']);
			}
			return a;
		}
	, 1, [null,null,['self'],['n']]);
		$cls_definition['__mul__'] = $method;
		$method = $pyjs__bind_method2('__rmul__', function(n) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				n = arguments[1];
			}

			return self['__mul__'](n);
		}
	, 1, [null,null,['self'],['n']]);
		$cls_definition['__rmul__'] = $method;
		var $bases = new Array(pyjslib.object);
		return $pyjs_type('tuple', $bases, $cls_definition);
	})();
$m['tuple'].__str__ = $m['tuple'].__repr__;
$m['tuple'].toString = $m['tuple'].__str__;
	$m['dict'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '81eece7f3bf81fd2882b68c88d68cf25';
		$method = $pyjs__bind_method2('__init__', function(seq) {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				seq = arguments[1];
				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof seq != 'undefined') {
					if (seq !== null && typeof seq['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = seq;
						seq = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			if (typeof seq == 'undefined') seq=arguments.callee.__args__[3][1];
			var init;
			self.__object = {};
			init = function(_data) {


        var item, i, n, sKey;
        var data = _data;
        //selfXXX.__object = {};

        if (data === null) {
            throw $m['TypeError']("'NoneType' is not iterable");
        }
        if (data.constructor === Array) {
        } else if (typeof data.__object == 'object') {
            data = data.__object;
            for (sKey in data) {
                self.__object[sKey] = data[sKey].slice();
            }
            return null;
        } else if (typeof data.__iter__ == 'function') {
            if (typeof data.__array == 'object') {
                data = data.__array;
            } else {
                var iter = data.__iter__();
                if (typeof iter.__array == 'object') {
                    data = iter.__array;
                }
                data = [];
                var item, i = 0;
                if (typeof iter.$genfunc == 'function') {
                    while (typeof (item=iter.next(true)) != 'undefined') {
                        data[i++] = item;
                    }
                } else {
                    try {
                        while (true) {
                            data[i++] = iter.next();
                        }
                    }
                    catch (e) {
                        if (e.__name__ != 'StopIteration') throw e;
                    }
                }
            }
        } else if (typeof data == 'object' || typeof data == 'function') {
            for (var key in data) {
                var _key = key;
                if (key.substring(0,2) == '$$') {
                    // handle back mapping of name
                    // d = dict(comment='value')
                    // comment will be in the object as $$comment
                    _key = key.substring(2);
                    if (var_remap.indexOf(_key) < 0) {
                        _key = key;
                    }
                }
                self.__object['$'+_key] = [_key, data[key]];
            }
            return null;
        } else {
            throw $m['TypeError']("'" + $p['repr'](data) + "' is not iterable");
        }
        // Assume uniform array content...
        if ((n = data.length) == 0) {
            return null;
        }
        i = 0;
        if (data[0].constructor === Array) {
            while (i < n) {
                item = data[i++];
                key = item[0];
                sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:$p['__hash'](key))));
                self.__object[sKey] = [key, item[1]];
            }
            return null;
        }
        if (typeof data[0].__array != 'undefined') {
            while (i < n) {
                item = data[i++].__array;
                key = item[0];
                sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:$p['__hash'](key))));
                self.__object[sKey] = [key, item[1]];
            }
            return null;
        }
        i = -1;
        var key;
        while (++i < n) {
            key = data[i].__getitem__(0);
            sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:$p['__hash'](key))));
            self.__object[sKey] = [key, data[i].__getitem__(1)];
        }
        return null;
        
			};
			init.__name__ = 'init';

			init.__bind_type__ = 0;
			init.__args__ = [null,null,['_data']];
			init(seq);
			if ($p['bool'](kwargs)) {
				init(kwargs);
			}
			return null;
		}
	, 1, [null,['kwargs'],['self'],['seq', []]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__hash__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			throw ($m['TypeError']('dict objects are unhashable'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method2('__setitem__', function(key, value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
				value = arguments[2];
			}


        if (typeof value == 'undefined') {
            throw $m['ValueError']("Value for key '" + key + "' is undefined");
        }
        var sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:$p['__hash'](key))));
        self.__object[sKey] = [key, value];
        
		}
	, 1, [null,null,['self'],['key'],['value']]);
		$cls_definition['__setitem__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(key) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}


        var sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:$p['__hash'](key))));
        var value=self.__object[sKey];
        if (typeof value == 'undefined'){
            throw $m['KeyError'](key);
        }
        return value[1];
        
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method2('__hash__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			throw ($m['TypeError']('dict objects are unhashable'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method2('__nonzero__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        for (var i in self.__object){
            return true;
        }
        return false;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__nonzero__'] = $method;
		$method = $pyjs__bind_method2('__cmp__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if ($p['bool'](!$p['bool']($p['isinstance'](other, $m['dict'])))) {
				throw ($m['TypeError']('dict.__cmp__(x,y) requires y to be a \x27dict\x27'));
			}

        var self_sKeys = new Array(),
            other_sKeys = new Array(),
            selfLen = 0,
            otherLen = 0,
            selfObj = self.__object,
            otherObj = other.__object;
        for (sKey in selfObj) {
           self_sKeys[selfLen++] = sKey;
        }
        for (sKey in otherObj) {
           other_sKeys[otherLen++] = sKey;
        }
        if (selfLen < otherLen) {
            return -1;
        }
        if (selfLen > otherLen) {
            return 1;
        }
        self_sKeys.sort();
        other_sKeys.sort();
        var c, sKey;
        for (var idx = 0; idx < selfLen; idx++) {
            c = $m['cmp'](selfObj[sKey = self_sKeys[idx]][0], otherObj[other_sKeys[idx]][0]);
            if (c != 0) {
                return c;
            }
            c = $m['cmp'](selfObj[sKey][1], otherObj[sKey][1]);
            if (c != 0) {
                return c;
            }
        }
        return 0;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__cmp__'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var size;
			size = 0;

        for (var i in self.__object) size++;
        
			return size;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('__delitem__', function(key) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}


        var sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:$p['__hash'](key))));
        delete self.__object[sKey];
        
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['__delitem__'] = $method;
		$method = $pyjs__bind_method2('__contains__', function(key) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}


        var sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:$p['__hash'](key))));
        return typeof self.__object[sKey] == 'undefined' ? false : true;
        
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['__contains__'] = $method;
		$method = $pyjs__bind_method2('keys', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var keys=$m['list'](),
            selfObj = self.__object,
            __array = keys.__array,
            i = 0;
        for (var sKey in self.__object) {
            __array[i++] = selfObj[sKey][0];
        }
        return keys;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['keys'] = $method;
		$method = $pyjs__bind_method2('fromkeys', function(iterable, v) {
			if (typeof v == 'undefined') v=arguments.callee.__args__[3][1];
			var $iter5_nextval,$iter5_idx,d,i,$iter5_array,$iter5_iter,$iter5_type;
			d = $p['dict']([]);
			$iter5_iter = iterable;
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval).$nextval) != 'undefined') {
				i = $iter5_nextval.$nextval;
				d.__setitem__(i, v);
			}
			return d;
		}
	, 3, [null,null,['iterable'],['v', null]]);
		$cls_definition['fromkeys'] = $method;
		$method = $pyjs__bind_method2('values', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var values=$m['list']();
        var i = 0;
        for (var key in self.__object) {
            values.__array[i++] = self.__object[key][1];
        }
        return values;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['values'] = $method;
		$method = $pyjs__bind_method2('items', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var items = $m['list']();
        var i = 0;
        for (var key in self.__object) {
          var kv = self.__object[key];
          items.__array[i++] = $m['list'](kv);
          }
          return items;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['items'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var keys = new Array();
        var i = 0;
        for (var key in self.__object) {
            keys[i++] = self.__object[key][0];
        }
        return new $iter_array(keys);

		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('__enumerate__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var keys = new Array();
        var i = 0;
        for (var key in self.__object) {
            keys[i++] = self.__object[key][0];
        }
        return new $enumerate_array(keys);

		}
	, 1, [null,null,['self']]);
		$cls_definition['__enumerate__'] = $method;
		$method = $pyjs__bind_method2('itervalues', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['values']()['__iter__']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['itervalues'] = $method;
		$method = $pyjs__bind_method2('iteritems', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['items']()['__iter__']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['iteritems'] = $method;
		$method = $pyjs__bind_method2('setdefault', function(key, default_value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
				default_value = arguments[2];
			}


        var sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:$p['__hash'](key))));
        return typeof self.__object[sKey] == 'undefined' ? (self.__object[sKey]=[key, default_value])[1] : self.__object[sKey][1];

		}
	, 1, [null,null,['self'],['key'],['default_value']]);
		$cls_definition['setdefault'] = $method;
		$method = $pyjs__bind_method2('get', function(key, default_value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
				default_value = arguments[2];
			}
			if (typeof default_value == 'undefined') default_value=arguments.callee.__args__[4][1];


        var empty = true;
        for (var sKey in self.__object) {
            empty = false;
            break;
        }
        if (empty) return default_value;
        var sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:$p['__hash'](key))));
        return typeof self.__object[sKey] == 'undefined' ? default_value : self.__object[sKey][1];

		}
	, 1, [null,null,['self'],['key'],['default_value', null]]);
		$cls_definition['get'] = $method;
		$method = $pyjs__bind_method2('update', function() {
			if (this.__is_instance__ === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length-1));

				var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
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
			var $iter6_type,$iter8_iter,$iter6_iter,$iter6_nextval,$iter9_iter,$iter9_nextval,$iter9_idx,$iter7_type,$iter9_type,$iter8_idx,$iter6_idx,$iter7_iter,$iter8_type,$iter6_array,$iter8_nextval,$iter7_idx,d,$iter7_nextval,k,$iter7_array,$iter8_array,v,$iter9_array;
			if ($p['bool'](args)) {
				if ($p['bool'](($m['cmp']($p['len'](args), 1) == 1))) {
					throw ($m['TypeError']($p['sprintf']('update expected at most 1 arguments, got %d', $p['len'](args))));
				}
				d = args.__getitem__(0);
				if ($p['bool']($p['hasattr'](d, 'iteritems'))) {
					$iter6_iter = d['iteritems']();
					$iter6_nextval=$p['__iter_prepare']($iter6_iter,true);
					while (typeof($p['__wrapped_next']($iter6_nextval).$nextval) != 'undefined') {
						k = $iter6_nextval.$nextval.__array[0];
						v = $iter6_nextval.$nextval.__array[1];
						self.__setitem__(k, v);
					}
				}
				else if ($p['bool']($p['hasattr'](d, 'keys'))) {
					$iter7_iter = d;
					$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
					while (typeof($p['__wrapped_next']($iter7_nextval).$nextval) != 'undefined') {
						k = $iter7_nextval.$nextval;
						self.__setitem__(k, d.__getitem__(k));
					}
				}
				else {
					$iter8_iter = d;
					$iter8_nextval=$p['__iter_prepare']($iter8_iter,true);
					while (typeof($p['__wrapped_next']($iter8_nextval).$nextval) != 'undefined') {
						k = $iter8_nextval.$nextval.__array[0];
						v = $iter8_nextval.$nextval.__array[1];
						self.__setitem__(k, v);
					}
				}
			}
			if ($p['bool'](kwargs)) {
				$iter9_iter = kwargs['iteritems']();
				$iter9_nextval=$p['__iter_prepare']($iter9_iter,true);
				while (typeof($p['__wrapped_next']($iter9_nextval).$nextval) != 'undefined') {
					k = $iter9_nextval.$nextval.__array[0];
					v = $iter9_nextval.$nextval.__array[1];
					self.__setitem__(k, v);
				}
			}
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['update'] = $method;
		$method = $pyjs__bind_method2('pop', function(k) {
			if (this.__is_instance__ === true) {
				var self = this;
				var d = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length));

			} else {
				var self = arguments[0];
				k = arguments[1];
				var d = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length));

			}
			var $add39,res,$add40,$pyjs_try_err;
			if ($p['bool'](($m['cmp']($p['len'](d), 1) == 1))) {
				throw ($m['TypeError']($p['sprintf']('pop expected at most 2 arguments, got %s', $m['__op_add']($add39=1,$add40=$p['len'](d)))));
			}
			try {
				res = self.__getitem__(k);
				self.__delitem__(k);
				return res;
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $m['KeyError'].__name__)||$p['_isinstance']($pyjs_try_err,$m['KeyError'])) {
					if ($p['bool'](d)) {
						return d.__getitem__(0);
					}
					else {
						throw ($pyjs.__last_exception__?
							$pyjs.__last_exception__.error:
							$m['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, ['d',null,['self'],['k']]);
		$cls_definition['pop'] = $method;
		$method = $pyjs__bind_method2('popitem', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter10_nextval,$iter10_array,v,$iter10_type,k,$iter10_iter,$iter10_idx;
			$iter10_iter = self['iteritems']();
			$iter10_nextval=$p['__iter_prepare']($iter10_iter,true);
			while (typeof($p['__wrapped_next']($iter10_nextval).$nextval) != 'undefined') {
				k = $iter10_nextval.$nextval.__array[0];
				v = $iter10_nextval.$nextval.__array[1];
				return $p['tuple']([k, v]);
			}
			throw ($m['KeyError']('popitem(): dictionary is empty'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['popitem'] = $method;
		$method = $pyjs__bind_method2('getObject', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr72,$attr71;
			return self['__object'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getObject'] = $method;
		$method = $pyjs__bind_method2('copy', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['dict'](self['items']());
		}
	, 1, [null,null,['self']]);
		$cls_definition['copy'] = $method;
		$method = $pyjs__bind_method2('clear', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.__object = {};
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr74,$attr73;
			if ($p['bool']($p['callable'](self))) {
				return $p['sprintf']('\x3Ctype \x27%s\x27\x3E', self['__name__']);
			}

        var keys = new Array();
        for (var key in self.__object)
            keys.push(key);

        var s = "{";
        for (var i=0; i<keys.length; i++) {
            var v = self.__object[keys[i]];
            s += $p['repr'](v[0]) + ": " + $p['repr'](v[1]);
            if (i < keys.length-1)
                s += ", ";
        }
        s += "}";
        return s;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('toString', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['__repr__']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['toString'] = $method;
		var $bases = new Array(pyjslib.object);
		return $pyjs_type('dict', $bases, $cls_definition);
	})();
$m['dict'].has_key = $m['dict'].__contains__;
$m['dict'].iterkeys = $m['dict'].__iter__;
$m['dict'].__str__ = $m['dict'].__repr__;
	$m['__empty_dict'] = function() {


    var dict__init__ = $m['dict'].__init__;
    var d;
    $m['dict'].__init__ = function() {
        this.__object = {};
    };
    d = $m['dict']();
    d.__init__ = $m['dict'].__init__ = dict__init__;
    return d;

	};
	$m['__empty_dict'].__name__ = '__empty_dict';

	$m['__empty_dict'].__bind_type__ = 0;
	$m['__empty_dict'].__args__ = [null,null];
	$m['set'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'a4cceb26857aee2c31337e719ba44c32';
		$method = $pyjs__bind_method2('__init__', function(_data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				_data = arguments[1];
			}
			if (typeof _data == 'undefined') _data=arguments.callee.__args__[3][1];

			if ($p['bool']((_data === null))) {
var data = [];
			}
			else {
var data = _data;
			}
			if ($p['bool']((typeof isSet == "undefined"?$m.isSet:isSet)(_data))) {

            self.__object = {};
            var selfObj = self.__object,
                dataObj = data.__object;
            for (var sVal in dataObj) {
                selfObj[sVal] = dataObj[sVal];
            }
            return null;
			}

        var item, 
            i, 
            n,
            selfObj = self.__object = {};

        if (data.constructor === Array) { 
        // data is already an Array.
        // We deal with the Array of data after this if block.
          } 
          
          // We may have some other set-like thing with __object
          else if (typeof data.__object == 'object') {
            var dataObj = data.__object;
            for (var sKey in dataObj) {
                selfObj[sKey] = dataObj[sKey];
            }
            return null;
          } 
          
          // Something with an __iter__ method
          else if (typeof data.__iter__ == 'function') {
          
            // It has an __array member to iterate over. Make that our data.
            if (typeof data.__array == 'object') {
                data = data.__array;
                } 
            else {
                // Several ways to deal with the __iter__ method
                var iter = data.__iter__();
                // iter has an __array member that's an array. Use that.
                if (typeof iter.__array == 'object') {
                    data = iter.__array;
                }
                var data = [];
                var item, i = 0;
                // iter has a .$genfunc
                if (typeof iter.$genfunc == 'function') {
                    while (typeof (item=iter.next(true)) != 'undefined') {
                        data[i++] = item;
                    }
                } else {
                // actually use the object's __iter__ method
                    try {
                        while (true) {
                            data[i++] = iter.next();
                        }
                    }
                    catch (e) {
                        if (e.__name__ != 'StopIteration') throw e;
                    }
                }
            }
          // Check undefined first so isIteratable can do check for __iter__.
        } else if (!($p['isUndefined']($m.data)) && $m.isIteratable($m.data))
            {
            for (var item in $m.data) {
                selfObj[$p['__hash'](item)] = item;
            }
            return null;
        } else {
            throw $m['TypeError']("'" + $p['repr'](data) + "' is not iterable");
        }
        // Assume uniform array content...
        if ((n = data.length) == 0) {
            return null;
        }
        i = n-1;
        do {
            item = data[i];
            selfObj[$p['__hash'](item)] = item;
        }
        while (i--);
        return null;
        
		}
	, 1, [null,null,['self'],['_data', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__cmp__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m.isSet:isSet)(other)))) {
				return 2;
			}

        var selfObj = self.__object,
            otherObj = other.__object,
            selfMismatch = false,
            otherMismatch = false;
        if (selfObj === otherObj) {
            throw $m['TypeError']("Set operations must use two sets.");
            }
        for (var sVal in selfObj) {
            if (!(sVal in otherObj)) {
                selfMismatch = true;
                break;
            }
        }
        for (var sVal in otherObj) {
            if (!(sVal in selfObj)) {
                otherMismatch = true;
                break;
            }
        }
        if (selfMismatch && otherMismatch) return 2;
        if (selfMismatch) return 1;
        if (otherMismatch) return -1;
        return 0;

		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__cmp__'] = $method;
		$method = $pyjs__bind_method2('__contains__', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			if ($p['bool']($m['op_eq']((typeof isSet == "undefined"?$m.isSet:isSet)(value), 1))) {

            var hashes = new Array(), 
                obj = self.__object, 
                i = 0;
            for (var v in obj) {
                hashes[i++] = v;
            }
            hashes.sort();
            var h = hashes.join("|");
            return (h in obj);

			}
return $p['__hash'](value) in self.__object;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['__contains__'] = $method;
		$method = $pyjs__bind_method2('__hash__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			throw ($m['TypeError']('set objects are unhashable'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var items = new Array(),
            i = 0, 
            obj = self.__object;
        for (var key in obj) {
            items[i++] = obj[key];
        }
        return new $iter_array(items);
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var size;
			size = 0.0;

        for (var i in self.__object) size++;
        
			return size;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr76,$attr75;
			if ($p['bool']($p['callable'](self))) {
				return $p['sprintf']('\x3Ctype \x27%s\x27\x3E', self['__name__']);
			}

        var values = new Array();
        var i = 0,
            obj = self.__object,
            s = self.__name__ + "([";
        for (var sVal in obj) {
            values[i++] = $p['repr'](obj[sVal]);
        }
        s += values.join(", ");
        s += "])";
        return s;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__and__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m.isSet:isSet)(other)))) {
				return $m['NotImplemented'];
			}
			return self['intersection'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__and__'] = $method;
		$method = $pyjs__bind_method2('__or__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m.isSet:isSet)(other)))) {
				return $m['NotImplemented'];
			}
			return self['union'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__or__'] = $method;
		$method = $pyjs__bind_method2('__xor__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m.isSet:isSet)(other)))) {
				return $m['NotImplemented'];
			}
			return self['symmetric_difference'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__xor__'] = $method;
		$method = $pyjs__bind_method2('__sub__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m.isSet:isSet)(other)))) {
				return $m['NotImplemented'];
			}
			return self['difference'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__sub__'] = $method;
		$method = $pyjs__bind_method2('add', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

self.__object[$p['hash'](value)] = value;
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('clear', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

self.__object = {};
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('copy', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var new_set;
			new_set = $m['set']();

        var obj = new_set.__object,
            selfObj = self.__object;
        for (var sVal in selfObj) {
            obj[sVal] = selfObj[sVal];
        }

			return new_set;
		}
	, 1, [null,null,['self']]);
		$cls_definition['copy'] = $method;
		$method = $pyjs__bind_method2('difference', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var new_set;
			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m.isSet:isSet)(other)))) {
				other = $p['frozenset'](other);
			}
			new_set = $m['set']();

        var obj = new_set.__object,
            selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            if (!(sVal in otherObj)) {
                obj[sVal] = selfObj[sVal];
            }
        }

			return new_set;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['difference'] = $method;
		$method = $pyjs__bind_method2('difference_update', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m.isSet:isSet)(other)))) {
				other = $p['frozenset'](other);
			}

        var selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in otherObj) {
            if (sVal in selfObj) {
                delete selfObj[sVal];
            }
        }

			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['difference_update'] = $method;
		$method = $pyjs__bind_method2('discard', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			if ($p['bool']($m['op_eq']((typeof isSet == "undefined"?$m.isSet:isSet)(value), 1))) {
				value = $p['frozenset'](value);
			}
delete self.__object[$p['hash'](value)];
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['discard'] = $method;
		$method = $pyjs__bind_method2('intersection', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var new_set;
			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m.isSet:isSet)(other)))) {
				other = $p['frozenset'](other);
			}
			new_set = $m['set']();

        var obj = new_set.__object,
            selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            if (sVal in otherObj) {
                obj[sVal] = selfObj[sVal];
            }
        }

			return new_set;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['intersection'] = $method;
		$method = $pyjs__bind_method2('intersection_update', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m.isSet:isSet)(other)))) {
				other = $p['frozenset'](other);
			}

        var selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            if (!(sVal in otherObj)) {
                delete selfObj[sVal];
            }
        }

			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['intersection_update'] = $method;
		$method = $pyjs__bind_method2('isdisjoint', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m.isSet:isSet)(other)))) {
				other = $p['frozenset'](other);
			}

        var selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            if (typeof otherObj[sVal] != 'undefined') {
                return false;
            }
        }
        for (var sVal in otherObj) {
            if (typeof selfObj[sVal] != 'undefined') {
                return false;
            }
        }

			return true;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['isdisjoint'] = $method;
		$method = $pyjs__bind_method2('issubset', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m.isSet:isSet)(other)))) {
				other = $p['frozenset'](other);
			}
			return self.__cmp__(other) < 0;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['issubset'] = $method;
		$method = $pyjs__bind_method2('issuperset', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m.isSet:isSet)(other)))) {
				other = $p['frozenset'](other);
			}
			return (self.__cmp__(other)|1) == 1;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['issuperset'] = $method;
		$method = $pyjs__bind_method2('pop', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        for (var sVal in self.__object) {
            var value = self.__object[sVal];
            delete self.__object[sVal];
            return value;
        }
        
			throw ($m['KeyError']('pop from an empty set'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['pop'] = $method;
		$method = $pyjs__bind_method2('remove', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}
			var val;
			if ($p['bool']($m['op_eq']((typeof isSet == "undefined"?$m.isSet:isSet)(value), 1))) {
				val = $p['frozenset'](value);
			}
			else {
				val = value;
			}

        var h = $p['hash'](val);
        if (!(h in self.__object)) {
            throw $m['KeyError'](value);
        }
        delete self.__object[h];
        
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('symmetric_difference', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var new_set;
			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m.isSet:isSet)(other)))) {
				other = $p['frozenset'](other);
			}
			new_set = $m['set']();

        var obj = new_set.__object,
            selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            if (typeof otherObj[sVal] == 'undefined') {
                obj[sVal] = selfObj[sVal];
            }
        }
        for (var sVal in otherObj) {
            if (typeof selfObj[sVal] == 'undefined') {
                obj[sVal] = otherObj[sVal];
            }
        }

			return new_set;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['symmetric_difference'] = $method;
		$method = $pyjs__bind_method2('symmetric_difference_update', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m.isSet:isSet)(other)))) {
				other = $p['frozenset'](other);
			}

        var obj = new Object(),
            selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            if (typeof otherObj[sVal] == 'undefined') {
                obj[sVal] = selfObj[sVal];
            }
        }
        for (var sVal in otherObj) {
            if (typeof selfObj[sVal] == 'undefined') {
                obj[sVal] = otherObj[sVal];
            }
        }
        self.__object = obj;

			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['symmetric_difference_update'] = $method;
		$method = $pyjs__bind_method2('union', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var new_set;
			new_set = $m['set']();
			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m.isSet:isSet)(other)))) {
				other = $p['frozenset'](other);
			}

        var obj = new_set.__object,
            selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            obj[sVal] = selfObj[sVal];
        }
        for (var sVal in otherObj) {
            if (!(sVal in selfObj)) {
                obj[sVal] = otherObj[sVal];
            }
        }

			return new_set;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['union'] = $method;
		$method = $pyjs__bind_method2('update', function(data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m.isSet:isSet)(data)))) {
				data = $p['frozenset'](data);
			}

        var selfObj = self.__object,
            dataObj = data.__object;
        for (var sVal in dataObj) {
            if (!(sVal in selfObj)) {
                selfObj[sVal] = dataObj[sVal];
            }
        }
        
			return null;
		}
	, 1, [null,null,['self'],['data']]);
		$cls_definition['update'] = $method;
		var $bases = new Array($m['object']);
		return $pyjs_type('set', $bases, $cls_definition);
	})();
$m['set']['__str__'] = $m['set']['__repr__'];
$m['set']['toString'] = $m['set']['__repr__'];
	$m['frozenset'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'd356c70ef2b767c7d555a1255c80f5d3';
		$method = $pyjs__bind_method2('__init__', function(_data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				_data = arguments[1];
			}
			if (typeof _data == 'undefined') _data=arguments.callee.__args__[3][1];

			if ($p['bool']((!('__object' in self)))) {
				$m['set']['__init__'](self, _data);
			}
			return null;
		}
	, 1, [null,null,['self'],['_data', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__hash__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var hashes = new Array(), obj = self.__object, i = 0;
        for (var v in obj) {
            hashes[i++] = v;
        }
        hashes.sort();
        return (self.$H = hashes.join("|"));

		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method2('add', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			throw ($m['AttributeError']('frozenset is immutable'));
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('clear', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			throw ($m['AttributeError']('frozenset is immutable'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('difference_update', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			throw ($m['AttributeError']('frozenset is immutable'));
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['difference_update'] = $method;
		$method = $pyjs__bind_method2('discard', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			throw ($m['AttributeError']('frozenset is immutable'));
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['discard'] = $method;
		$method = $pyjs__bind_method2('intersection_update', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			throw ($m['AttributeError']('frozenset is immutable'));
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['intersection_update'] = $method;
		$method = $pyjs__bind_method2('pop', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			throw ($m['AttributeError']('frozenset is immutable'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['pop'] = $method;
		$method = $pyjs__bind_method2('symmetric_difference_update', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			throw ($m['AttributeError']('frozenset is immutable'));
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['symmetric_difference_update'] = $method;
		var $bases = new Array($m['set']);
		return $pyjs_type('frozenset', $bases, $cls_definition);
	})();
$m['frozenset']['__str__'] = $m['frozenset']['__repr__'];
$m['frozenset']['toString'] = $m['frozenset']['__repr__'];
	$m['property'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '4001fec5d3f433b2f2313188a800cb63';
		$method = $pyjs__bind_method2('__init__', function(fget, fset, fdel, doc) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				fget = arguments[1];
				fset = arguments[2];
				fdel = arguments[3];
				doc = arguments[4];
			}
			if (typeof fget == 'undefined') fget=arguments.callee.__args__[3][1];
			if (typeof fset == 'undefined') fset=arguments.callee.__args__[4][1];
			if (typeof fdel == 'undefined') fdel=arguments.callee.__args__[5][1];
			if (typeof doc == 'undefined') doc=arguments.callee.__args__[6][1];
			var $or5,$or4,$attr78,$attr77;
			self.fget = fget;
			self.fset = fset;
			self.fdel = fdel;
			if ($p['bool'](($p['bool']($or4=!$p['bool']((doc === null)))?$or4:!$p['bool']($p['hasattr'](fget, '__doc__'))))) {
				self.__doc__ = doc;
			}
			else {
				self.__doc__ = fget['__doc__'];
			}
			return null;
		}
	, 1, [null,null,['self'],['fget', null],['fset', null],['fdel', null],['doc', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__get__', function(obj, objtype) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
				objtype = arguments[2];
			}
			if (typeof objtype == 'undefined') objtype=arguments.callee.__args__[4][1];
			var $attr80,$attr79;
			if ($p['bool']((obj === null))) {
				return self;
			}
			if ($p['bool']((self['fget'] === null))) {

				var $pyjs__raise_expr1 = $m['AttributeError'];
				var $pyjs__raise_expr2 = 'unreadable attribute';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw $m['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			return self['fget'](obj);
		}
	, 1, [null,null,['self'],['obj'],['objtype', null]]);
		$cls_definition['__get__'] = $method;
		$method = $pyjs__bind_method2('__set__', function(obj, value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
				value = arguments[2];
			}
			var $attr82,$attr81;
			if ($p['bool']((self['fset'] === null))) {

				var $pyjs__raise_expr1 = $m['AttributeError'];
				var $pyjs__raise_expr2 = 'can\x27t set attribute';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw $m['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			self['fset'](obj, value);
			return null;
		}
	, 1, [null,null,['self'],['obj'],['value']]);
		$cls_definition['__set__'] = $method;
		$method = $pyjs__bind_method2('__delete__', function(obj) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
			}
			var $attr83,$attr84;
			if ($p['bool']((self['fdel'] === null))) {

				var $pyjs__raise_expr1 = $m['AttributeError'];
				var $pyjs__raise_expr2 = 'can\x27t delete attribute';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw $m['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			self['fdel'](obj);
			return null;
		}
	, 1, [null,null,['self'],['obj']]);
		$cls_definition['__delete__'] = $method;
		$method = $pyjs__bind_method2('setter', function(fset) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				fset = arguments[1];
			}

			self.fset = fset;
			return self;
		}
	, 1, [null,null,['self'],['fset']]);
		$cls_definition['setter'] = $method;
		$method = $pyjs__bind_method2('deleter', function(fdel) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				fdel = arguments[1];
			}

			self.fdel = fdel;
			return self;
		}
	, 1, [null,null,['self'],['fdel']]);
		$cls_definition['deleter'] = $method;
		var $bases = new Array($m['object']);
		return $pyjs_type('property', $bases, $cls_definition);
	})();
	$m['staticmethod'] = function(func) {


    var fnwrap = function() {
        return func.apply(null,$pyjs_array_slice.call(arguments));
    };
    fnwrap.__name__ = func.__name__;
    fnwrap.__args__ = func.__args__;
    fnwrap.__bind_type__ = 3;
    return fnwrap;
    
	};
	$m['staticmethod'].__name__ = 'staticmethod';

	$m['staticmethod'].__bind_type__ = 0;
	$m['staticmethod'].__args__ = [null,null,['func']];
	$m['$$super'] = function(typ, object_or_type) {
		if (typeof object_or_type == 'undefined') object_or_type=arguments.callee.__args__[3][1];
		var i;
		if ($p['bool'](!$p['bool']((typeof _issubtype == "undefined"?$m._issubtype:_issubtype)(object_or_type, typ)))) {
			i = (typeof _issubtype == "undefined"?$m._issubtype:_issubtype)(object_or_type, typ);
			throw ($m['TypeError']('super(type, obj): obj must be an instance or subtype of type'));
		}

    var type_ = typ
    if (typeof type_.__mro__ == 'undefined') {
        type_ = type_.__class__;
    }
    var fn = $pyjs_type('super', type_.__mro__.slice(1), {});
    fn.__new__ = fn.__mro__[1].__new__;
    fn.__init__ = fn.__mro__[1].__init__;
    if (object_or_type.__is_instance__ === false) {
        return fn;
    }
    var obj = new Object();
    function wrapper(obj, name) {
        var fnwrap = function() {
            return obj[name].apply(object_or_type,
                                   $pyjs_array_slice.call(arguments));
        };
        fnwrap.__name__ = name;
        fnwrap.__args__ = obj[name].__args__;
        fnwrap.__bind_type__ = obj[name].__bind_type__;
        return fnwrap;
    }
    for (var m in fn) {
        if (typeof fn[m] == 'function') {
            obj[m] = wrapper(fn, m);
        }
    }
    obj.__is_instance__ = object_or_type.__is_instance__;
    return obj;
    
	};
	$m['$$super'].__name__ = 'super';

	$m['$$super'].__bind_type__ = 0;
	$m['$$super'].__args__ = [null,null,['typ'],['object_or_type', null]];
	$m['xrange'] = function(start, stop, step) {
		if (typeof stop == 'undefined') stop=arguments.callee.__args__[3][1];
		if (typeof step == 'undefined') step=arguments.callee.__args__[4][1];
		var rval,$attr86,$attr87,$attr85,$attr88,$attr89,$assign1,nval,$attr90;
		if ($p['bool']((stop === null))) {
			stop = start;
			start = 0;
		}
		if ($p['bool'](!$p['bool'](start!== null && start.__number__ && (start.__number__ != 0x01 || isFinite(start))))) {
			throw ($m['TypeError']($p['sprintf']('xrange() integer start argument expected, got %s', start['__class__']['__name__'])));
		}
		if ($p['bool'](!$p['bool'](stop!== null && stop.__number__ && (stop.__number__ != 0x01 || isFinite(stop))))) {
			throw ($m['TypeError']($p['sprintf']('xrange() integer end argument expected, got %s', stop['__class__']['__name__'])));
		}
		if ($p['bool'](!$p['bool'](step!== null && step.__number__ && (step.__number__ != 0x01 || isFinite(step))))) {
			throw ($m['TypeError']($p['sprintf']('xrange() integer step argument expected, got %s', step['__class__']['__name__'])));
		}
		$assign1 = start;
		rval = $assign1;
		nval = $assign1;

    var nstep = (stop-start)/step;
    nstep = nstep < 0 ? Math.ceil(nstep) : Math.floor(nstep);
    if ((stop-start) % step) {
        nstep++;
    }
    var _stop = start+ nstep * step;
    if (nstep <= 0) nval = _stop;
    var x = {
        'next': function(noStop) {
            if (nval == _stop) {
                if (noStop === true) {
                    return;
                }
                throw $p['StopIteration'];
            }
            rval = nval;
            nval += step;

		return rval;

        },
        '$genfunc': function() {
            return this.next(true);
        },
        '__iter__': function() {
            return this;
        },
        '__reversed__': function() {
            return $m['xrange'](_stop-step, start-step, -step);
        },
        'toString': function() {
            var s = "xrange(";
            if (start!= 0) {
                s += start+ ", ";
            }
            s += _stop;
            if (step!= 1) {
                s += ", " + step;
            }
            return s + ")";
        },
        '__repr__': function() {
            return "'" + this.toString() + "'";
        }
    };
    x['__str__'] = x.toString;
    return x;
    
	};
	$m['xrange'].__name__ = 'xrange';

	$m['xrange'].__bind_type__ = 0;
	$m['xrange'].__args__ = [null,null,['start'],['stop', null],['step', 1]];
	$m['range'] = function(start, stop, step) {
		if (typeof stop == 'undefined') stop=arguments.callee.__args__[3][1];
		if (typeof step == 'undefined') step=arguments.callee.__args__[4][1];
		var $attr95,$attr94,$attr96,$attr91,$attr93,$attr92,i,items;
		if ($p['bool']((stop === null))) {
			stop = start;
			start = 0;
		}
		i = start;
		if ($p['bool'](!$p['bool'](start!== null && start.__number__ && (start.__number__ != 0x01 || isFinite(start))))) {
			throw ($m['TypeError']($p['sprintf']('xrange() integer start argument expected, got %s', start['__class__']['__name__'])));
		}
		if ($p['bool'](!$p['bool'](stop!== null && stop.__number__ && (stop.__number__ != 0x01 || isFinite(stop))))) {
			throw ($m['TypeError']($p['sprintf']('xrange() integer end argument expected, got %s', stop['__class__']['__name__'])));
		}
		if ($p['bool'](!$p['bool'](step!== null && step.__number__ && (step.__number__ != 0x01 || isFinite(step))))) {
			throw ($m['TypeError']($p['sprintf']('xrange() integer step argument expected, got %s', step['__class__']['__name__'])));
		}
		items = new Array();

    var nstep = (stop-start)/step;
    nstep = nstep < 0 ? Math.ceil(nstep) : Math.floor(nstep);
    if ((stop-start) % step) {
        nstep++;
    }
    var _stop = start+ nstep * step;
    if (nstep <= 0) i= _stop;
    for (; i!= _stop; i+= step) {

		items['push'](i);
}
		return $m['list'](items);
	};
	$m['range'].__name__ = 'range';

	$m['range'].__bind_type__ = 0;
	$m['range'].__args__ = [null,null,['start'],['stop', null],['step', 1]];
	$m['slice'] = function(object, lower, upper) {


    if (object=== null) {
        return null;
    }
    if (typeof object.__getslice__ == 'function') {
        return object.__getslice__(lower, upper);
    }
    if (object.slice == 'function')
        return object.slice(lower, upper);

    return null;
    
	};
	$m['slice'].__name__ = 'slice';

	$m['slice'].__bind_type__ = 0;
	$m['slice'].__args__ = [null,null,['object'],['lower'],['upper']];
	$m['__delslice'] = function(object, lower, upper) {


    if (typeof object.__delslice__ == 'function') {
        return object.__delslice__(lower, upper);
    }
    if (object.__getslice__ == 'function'
      && object.__delitem__ == 'function') {
        if (upper== null) {
            upper= $p['len'](object);
        }
        for (var i = lower; i < upper; i++) {
            object.__delitem__(i);
        }
        return null;
    }
    throw $m['TypeError']('object does not support item deletion');
    return null;
    
	};
	$m['__delslice'].__name__ = '__delslice';

	$m['__delslice'].__bind_type__ = 0;
	$m['__delslice'].__args__ = [null,null,['object'],['lower'],['upper']];
	$m['__setslice'] = function(object, lower, upper, value) {


    if (typeof object.__setslice__ == 'function') {
        return object.__setslice__(lower, upper, value);
    }
    throw $m['TypeError']('object does not support __setslice__');
    return null;
    
	};
	$m['__setslice'].__name__ = '__setslice';

	$m['__setslice'].__bind_type__ = 0;
	$m['__setslice'].__args__ = [null,null,['object'],['lower'],['upper'],['value']];
	$m['str'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '734bef219c278bb3941dc34193e08964';
		$method = $pyjs__bind_method2('__new__', function(self, text) {
			if (typeof text == 'undefined') text=arguments.callee.__args__[3][1];


        if (text==='') {
            return text;
        }
        if (text===null) {
            return 'None';
        }
        if (typeof text=='boolean') {
            if (text) return 'True';
            return 'False';
        }
        if ($p['hasattr'](text,'__str__')) {
            return text.__str__();
        }
        return String(text);

		}
	, 3, [null,null,['self'],['text', '']]);
		$cls_definition['__new__'] = $method;
		var $bases = new Array($m['basestring']);
		return $pyjs_type('str', $bases, $cls_definition);
	})();
	$m['ord'] = function(x) {
		var $and21,$and20;
		if ($p['bool'](($p['bool']($and20=typeof x== 'string')?($p['len'](x) === 1):$and20))) {
			return x['charCodeAt'](0);
		}
		else {
throw $m['TypeError']("ord() expected string of length 1");
		}
		return null;
	};
	$m['ord'].__name__ = 'ord';

	$m['ord'].__bind_type__ = 0;
	$m['ord'].__args__ = [null,null,['x']];
	$m['chr'] = function(x) {


        return String.fromCharCode(x);
    
	};
	$m['chr'].__name__ = 'chr';

	$m['chr'].__bind_type__ = 0;
	$m['chr'].__args__ = [null,null,['x']];
	$m['is_basetype'] = function(x) {


       var t = typeof(x);
       return t == 'boolean' ||
       t == 'function' ||
       t == 'number' ||
       t == 'string' ||
       t == 'undefined';
    
	};
	$m['is_basetype'].__name__ = 'is_basetype';

	$m['is_basetype'].__bind_type__ = 0;
	$m['is_basetype'].__args__ = [null,null,['x']];
	$m['get_pyjs_classtype'] = function(x) {


        if (x!== null && typeof x.__is_instance__ == 'boolean') {
            var src = x.__name__;
            return src;
        }
        return null;
    
	};
	$m['get_pyjs_classtype'].__name__ = 'get_pyjs_classtype';

	$m['get_pyjs_classtype'].__bind_type__ = 0;
	$m['get_pyjs_classtype'].__args__ = [null,null,['x']];
	$m['repr'] = function(x) {


       if (x=== null)
           return "None";

       var t = typeof(x);

       if (t == "undefined")
           return "undefined";

       if (t == "boolean") {
           if (x) return "True";
           return "False";
       }

       if (t == "number")
           return x.toString();

       if (t == "string") {
           if (x.indexOf("'") == -1)
               return "'" + x+ "'";
           if (x.indexOf('"') == -1)
               return '"' + x+ '"';
           var s = x.$$replace(new RegExp('"', "g"), '\\"');
           return '"' + s + '"';
       }


		if ($p['bool']($p['hasattr'](x, '__repr__'))) {
			if ($p['bool']($p['callable'](x))) {
				return x['__repr__'](x);
			}
			return x['__repr__']();
		}

       if (t == "function")
           return "<function " + x.toString() + ">";

       // If we get here, x is an object.  See if it's a Pyjamas class.

       if (!$p['hasattr'](x, "__init__"))
           return "<" + x.toString() + ">";

       // Handle the common Pyjamas data types.

       var constructor = "UNKNOWN";

       constructor = $m['get_pyjs_classtype'](x);

        //alert("repr constructor: " + constructor);

       // If we get here, the class isn't one we know -> return the class name.
       // Note that we replace underscores with dots so that the name will
       // (hopefully!) look like the original Python name.
       // (XXX this was for pyjamas 0.4 but may come back in an optimised mode)

       //var s = constructor.$$replace(new RegExp('_', "g"), '.');
       return "<" + constructor + " object>";
    
	};
	$m['repr'].__name__ = 'repr';

	$m['repr'].__bind_type__ = 0;
	$m['repr'].__args__ = [null,null,['x']];
	$m['len'] = function(object) {
		var v;
		v = 0;

    if (typeof object== 'undefined') {
        throw $m['UndefinedValueError']("obj");
    }
    if (object=== null) 
        return v;
    else if (typeof object.__array != 'undefined') 
        v = object.__array.length;
    else if (typeof object.__len__ == 'function') 
        v = object.__len__();
    else if (typeof object.length != 'undefined')
        v = object.length;
    else throw $m['TypeError']("object has no len()");
    if (v.__number__ & 0x06) return v;
    
		return v;
	};
	$m['len'].__name__ = 'len';

	$m['len'].__bind_type__ = 0;
	$m['len'].__args__ = [null,null,['object']];
	$m['isinstance'] = function(object_, classinfo) {
		var ci,$iter11_iter,$iter11_type,$iter11_array,$iter11_nextval,$iter11_idx;

    if (typeof object_== 'undefined') {
        return false;
    }
    if (object_== null) {
        if (classinfo== null) {
            return true;
        }
        return false;
    }
    switch (classinfo.__name__) {
        case 'float':
            return typeof object_== 'number' && object_.__number__ == 0x01 && isFinite(object_);
        case 'int':
        case 'float_int':
            if (object_!== null
                && object_.__number__) {
                if (object_.__number__ == 0x02) {
                    return true;
                }
                if (isFinite(object_) && 
                    Math.ceil(object_) == object_) {
                    return true;
                }
            }
            return false;
        case 'basestring':
        case 'str':
            return typeof object_== 'string';
        case 'bool':
            return typeof object_== 'boolean';
        case 'long':
            return object_.__number__ == 0x04;
    }
    if (typeof object_!= 'object' && typeof object_!= 'function') {
        return false;
    }

		if ($p['bool']($p['_isinstance'](classinfo, $m['tuple']))) {
			if ($p['bool']($p['_isinstance'](object_, $m['tuple']))) {
				return true;
			}
			$iter11_iter = classinfo;
			$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
			while (typeof($p['__wrapped_next']($iter11_nextval).$nextval) != 'undefined') {
				ci = $iter11_nextval.$nextval;
				if ($p['bool']($m['isinstance'](object_, ci))) {
					return true;
				}
			}
			return false;
		}
		else {
			return $p['_isinstance'](object_, classinfo);
		}
		return null;
	};
	$m['isinstance'].__name__ = 'isinstance';

	$m['isinstance'].__bind_type__ = 0;
	$m['isinstance'].__args__ = [null,null,['object_'],['classinfo']];
	$m['_isinstance'] = function(object_, classinfo) {


    if (   object_.__is_instance__ !== true 
        || classinfo.__is_instance__ === null) {
        return false;
    }
    var __mro__ = object_.__mro__;
    var n = __mro__.length;
    if (classinfo.__is_instance__ === false) {
        while (--n >= 0) {
            if (object_.__mro__[n] === classinfo.prototype) {
                return true;
            }
        }
        return false;
    }
    while (--n >= 0) {
        if (object_.__mro__[n] === classinfo.__class__) return true;
    }
    return false;
    
	};
	$m['_isinstance'].__name__ = '_isinstance';

	$m['_isinstance'].__bind_type__ = 0;
	$m['_isinstance'].__args__ = [null,null,['object_'],['classinfo']];
	$m['issubclass'] = function(class_, classinfo) {
		var ci,$iter12_type,$iter12_array,$iter12_iter,$iter12_idx,$iter12_nextval;
		if ($p['bool']( typeof class_ == 'undefined' || class_ === null || class_.__is_instance__ !== false )) {
			throw ($m['TypeError']('arg 1 must be a class'));
		}
		if ($p['bool']($m['isinstance'](classinfo, $m['tuple']))) {
			$iter12_iter = classinfo;
			$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
			while (typeof($p['__wrapped_next']($iter12_nextval).$nextval) != 'undefined') {
				ci = $iter12_nextval.$nextval;
				if ($p['bool']($m['issubclass'](class_, ci))) {
					return true;
				}
			}
			return false;
		}
		else {
			if ($p['bool']( typeof classinfo == 'undefined' || classinfo.__is_instance__ !== false )) {
				throw ($m['TypeError']('arg 2 must be a class or tuple of classes'));
			}
			return (typeof _issubtype == "undefined"?$m._issubtype:_issubtype)(class_, classinfo);
		}
		return null;
	};
	$m['issubclass'].__name__ = 'issubclass';

	$m['issubclass'].__bind_type__ = 0;
	$m['issubclass'].__args__ = [null,null,['class_'],['classinfo']];
	$m['_issubtype'] = function(object_, classinfo) {


    if (   object_.__is_instance__ === null 
        || classinfo.__is_instance__ === null) {
        return false;
    }
    var __mro__ = object_.__mro__;
    var n = __mro__.length;
    if (classinfo.__is_instance__ === false) {
        while (--n >= 0) {
            if (object_.__mro__[n] === classinfo.prototype) {
                return true;
            }
        }
        return false;
    }
    while (--n >= 0) {
        if (object_.__mro__[n] === classinfo.__class__) return true;
    }
    return false;
    
	};
	$m['_issubtype'].__name__ = '_issubtype';

	$m['_issubtype'].__bind_type__ = 0;
	$m['_issubtype'].__args__ = [null,null,['object_'],['classinfo']];
	$m['__getattr_check'] = function(attr, attr_left, attr_right, attrstr, bound_methods, descriptors, attribute_checking, source_tracking) {

 		return null;
	};
	$m['__getattr_check'].__name__ = '__getattr_check';

	$m['__getattr_check'].__bind_type__ = 0;
	$m['__getattr_check'].__args__ = [null,null,['attr'],['attr_left'],['attr_right'],['attrstr'],['bound_methods'],['descriptors'],['attribute_checking'],['source_tracking']];
	$m['getattr'] = function(obj, name, default_value) {
		if (typeof default_value == 'undefined') default_value=arguments.callee.__args__[4][1];


    if (obj=== null || typeof obj== 'undefined') {
        if (arguments.length != 3 || typeof obj== 'undefined') {
            throw $m['AttributeError']("'" + $m['repr'](obj) + "' has no attribute '" + name+ "'");
        }
        return default_value;
    }
    var mapped_name = name;
    if (typeof obj[name] == 'undefined') {
        mapped_name = '$$' + name;
        if (typeof obj[mapped_name] == 'undefined' || attrib_remap.indexOf(name) < 0) {
            if (arguments.length != 3) {
                throw $m['AttributeError']("'" + $m['repr'](obj) + "' has no attribute '" + name+ "'");
            }
            return default_value;
        }
    }
    var method = obj[mapped_name];
    if (method === null) return method;

    if (typeof method.__get__ == 'function') {
        if (obj.__is_instance__) {
            return method.__get__(obj, obj.__class__);
        }
        return method.__get__(null, obj.__class__);
    }
    if (   typeof method != 'function'
        || typeof method.__is_instance__ != 'undefined'
        || obj.__is_instance__ !== true
        || name== '__class__') {
        return obj[mapped_name];
    }

    var fnwrap = function() {
        return method.apply(obj,$pyjs_array_slice.call(arguments));
    };
    fnwrap.__name__ = name;
    fnwrap.__args__ = obj[mapped_name].__args__;
    fnwrap.__class__ = obj.__class__;
    fnwrap.__doc__ = method.__doc__ || '';
    fnwrap.__bind_type__ = obj[mapped_name].__bind_type__;
    if (typeof obj[mapped_name].__is_instance__ != 'undefined') {
        fnwrap.__is_instance__ = obj[mapped_name].__is_instance__;
    } else {
        fnwrap.__is_instance__ = false;
    }
    return fnwrap;
    
	};
	$m['getattr'].__name__ = 'getattr';

	$m['getattr'].__bind_type__ = 0;
	$m['getattr'].__args__ = [null,null,['obj'],['name'],['default_value', null]];
	$m['_del'] = function(obj) {


    if (typeof obj.__delete__ == 'function') {
        obj.__delete__(obj);
    } else {
        delete obj;
    }
    
	};
	$m['_del'].__name__ = '_del';

	$m['_del'].__bind_type__ = 0;
	$m['_del'].__args__ = [null,null,['obj']];
	$m['delattr'] = function(obj, name) {


    if (typeof obj== 'undefined') {
        throw $m['UndefinedValueError']("obj");
    }
    if (typeof name!= 'string') {
        throw $m['TypeError']("attribute name must be string");
    }
    if (obj.__is_instance__ && typeof obj.__delattr__ == 'function') {
        obj.__delattr__(name);
        return;
    }
    var mapped_name = attrib_remap.indexOf(name) < 0 ? name: 
                        '$$'+name;
    if (   obj!== null
        && (typeof obj== 'object' || typeof obj== 'function')
        && (typeof(obj[mapped_name]) != "undefined")
        &&(typeof(obj[mapped_name]) != "function") ){
        if (obj.__is_instance__
            && typeof obj[mapped_name].__delete__ == 'function') {
            obj[mapped_name].__delete__(obj);
        } else {
            delete obj[mapped_name];
        }
        return;
    }
    if (obj=== null) {
        throw $m['AttributeError']("'NoneType' object"+
                                  "has no attribute '"+name+"'");
    }
    if (typeof obj!= 'object' && typeof obj== 'function') {
       throw $m['AttributeError']("'"+typeof(obj)+
                                 "' object has no attribute '"+name+"'");
    }
    throw $m['AttributeError'](obj.__name__+
                              " instance has no attribute '"+ name+"'");
    
	};
	$m['delattr'].__name__ = 'delattr';

	$m['delattr'].__bind_type__ = 0;
	$m['delattr'].__args__ = [null,null,['obj'],['name']];
	$m['setattr'] = function(obj, name, value) {


    if (typeof obj== 'undefined') {
        throw $m['UndefinedValueError']("obj");
    }
    if (typeof name!= 'string') {
        throw $m['TypeError']("attribute name must be string");
    }
    if (obj.__is_instance__ && typeof obj.__setattr__ == 'function') {
        obj.__setattr__(name, value)
        return;
    }
    if (attrib_remap.indexOf(name) >= 0) {
        name= '$$' + name;
    }
    if (   typeof obj[name] != 'undefined'
        && obj.__is_instance__
        && obj[name] !== null
        && typeof obj[name].__set__ == 'function') {
        obj[name].__set__(obj, value);
    } else {
        obj[name] = value;
    }
    
	};
	$m['setattr'].__name__ = 'setattr';

	$m['setattr'].__bind_type__ = 0;
	$m['setattr'].__args__ = [null,null,['obj'],['name'],['value']];
	$m['hasattr'] = function(obj, name) {


    if (typeof obj== 'undefined') {
        throw $m['UndefinedValueError']("obj");
    }
    if (typeof name != 'string') {
        throw $m['TypeError']("attribute name must be string");
    }
    if (obj=== null) return false;
    if (typeof obj[name] == 'undefined' && (
            typeof obj['$$'+name] == 'undefined' ||
            attrib_remap.indexOf(name) < 0)
      ) {
        return false;
    }
    //if (obj!= 'object' && typeof obj!= 'function')
    //    return false;
    return true;
    
	};
	$m['hasattr'].__name__ = 'hasattr';

	$m['hasattr'].__bind_type__ = 0;
	$m['hasattr'].__args__ = [null,null,['obj'],['name']];
	$m['dir'] = function(obj) {


    if (typeof obj== 'undefined') {
        throw $m['UndefinedValueError']("obj");
    }
    var properties=$m['list']();
    for (var property in obj) properties.append(property);
    return properties;
    
	};
	$m['dir'].__name__ = 'dir';

	$m['dir'].__bind_type__ = 0;
	$m['dir'].__args__ = [null,null,['obj']];
	$m['filter'] = function(obj, method, sequence) {
		if (typeof sequence == 'undefined') sequence=arguments.callee.__args__[4][1];
		var $iter14_array,$iter13_iter,items,$iter13_type,item,$iter14_type,$iter13_array,$iter14_iter,$iter13_nextval,$iter14_nextval,$iter14_idx,$iter13_idx;
		items = $p['list']([]);
		if ($p['bool']((sequence === null))) {
			sequence = method;
			method = obj;
			$iter13_iter = sequence;
			$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
			while (typeof($p['__wrapped_next']($iter13_nextval).$nextval) != 'undefined') {
				item = $iter13_nextval.$nextval;
				if ($p['bool'](method(item))) {
					items['append'](item);
				}
			}
		}
		else {
			$iter14_iter = sequence;
			$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
			while (typeof($p['__wrapped_next']($iter14_nextval).$nextval) != 'undefined') {
				item = $iter14_nextval.$nextval;
				if ($p['bool'](method['$$call'](obj, item))) {
					items['append'](item);
				}
			}
		}
		return items;
	};
	$m['filter'].__name__ = 'filter';

	$m['filter'].__bind_type__ = 0;
	$m['filter'].__args__ = [null,null,['obj'],['method'],['sequence', null]];
	$m['map'] = function(obj, method, sequence) {
		if (typeof sequence == 'undefined') sequence=arguments.callee.__args__[4][1];
		var $iter16_array,$iter15_iter,$iter16_type,items,$iter15_array,$iter15_idx,$iter16_idx,item,$iter15_nextval,$iter15_type,$iter16_nextval,$iter16_iter;
		items = $p['list']([]);
		if ($p['bool']((sequence === null))) {
			sequence = method;
			method = obj;
			$iter15_iter = sequence;
			$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
			while (typeof($p['__wrapped_next']($iter15_nextval).$nextval) != 'undefined') {
				item = $iter15_nextval.$nextval;
				items['append'](method(item));
			}
		}
		else {
			$iter16_iter = sequence;
			$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
			while (typeof($p['__wrapped_next']($iter16_nextval).$nextval) != 'undefined') {
				item = $iter16_nextval.$nextval;
				items['append'](method['$$call'](obj, item));
			}
		}
		return items;
	};
	$m['map'].__name__ = 'map';

	$m['map'].__bind_type__ = 0;
	$m['map'].__args__ = [null,null,['obj'],['method'],['sequence', null]];
	$m['reduce'] = function(func, iterable, initializer) {
		if (typeof initializer == 'undefined') initializer=arguments.callee.__args__[4][1];
		var $iter17_nextval,$iter17_iter,emtpy,$iter17_array,$pyjs_try_err,value,$iter17_idx,$iter17_type;
		try {
			iterable = $p['iter'](iterable);
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
			if (true) {

				var $pyjs__raise_expr1 = $m['TypeError'];
				var $pyjs__raise_expr2 = 'reduce() arg 2 must support iteration';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw $m['TypeError']('instance exception may not have a separate value');
				}
				if ($m['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
		}
		emtpy = true;
		$iter17_iter = iterable;
		$iter17_nextval=$p['__iter_prepare']($iter17_iter,false);
		while (typeof($p['__wrapped_next']($iter17_nextval).$nextval) != 'undefined') {
			value = $iter17_nextval.$nextval;
			emtpy = false;
			if ($p['bool'](typeof initializer== 'undefined')) {
				initializer = value;
			}
			else {
				initializer = func(initializer, value);
			}
		}
		if ($p['bool']((typeof empty == "undefined"?$m.empty:empty))) {
			if ($p['bool'](typeof initializer== 'undefined')) {

				var $pyjs__raise_expr1 = $m['TypeError'];
				var $pyjs__raise_expr2 = 'reduce() of empty sequence with no initial value';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw $m['TypeError']('instance exception may not have a separate value');
				}
				if ($m['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			return initializer;
		}
		return initializer;
	};
	$m['reduce'].__name__ = 'reduce';

	$m['reduce'].__bind_type__ = 0;
	$m['reduce'].__args__ = [null,null,['func'],['iterable'],['initializer', (function(){return;})()]];
	$m['zip'] = function() {
		var iterables = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));

		var i,$add42,$add41,n,lst,$pyjs_try_err,t;
		n = $m['len'](iterables);
		if ($p['bool']($m['op_eq'](n, 0))) {
			return $p['list']([]);
		}
		lst = $p['list']([]);
		iterables = function(){
			var $iter18_type,$iter18_iter,$iter18_array,i,$iter18_idx,$listcomp4,$iter18_nextval;
	$listcomp4 = $p['list']();
		$iter18_iter = iterables;
		$iter18_nextval=$p['__iter_prepare']($iter18_iter,false);
		while (typeof($p['__wrapped_next']($iter18_nextval).$nextval) != 'undefined') {
			i = $iter18_nextval.$nextval;
			$listcomp4['append']($p['iter'](i));
		}

	return $listcomp4;}();
		try {
			while ($p['bool'](true)) {
				t = $p['list']([]);
				i = 0;
				while ($p['bool'](($m['cmp'](i, n) == -1))) {
					t['append'](iterables.__getitem__(i)['next']());
					i = $m['__op_add']($add41=i,$add42=1);
				}
				lst['append']($m['tuple'](t));
			}
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
			if (($pyjs_try_err_name == $p['StopIteration'].__name__)||$m['_isinstance']($pyjs_try_err,$p['StopIteration'])) {
			} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
		}
		return lst;
	};
	$m['zip'].__name__ = 'zip';

	$m['zip'].__bind_type__ = 0;
	$m['zip'].__args__ = ['iterables',null];
	$m['sorted'] = function(iterable, cmp, key, reverse) {
		if (typeof cmp == 'undefined') cmp=arguments.callee.__args__[3][1];
		if (typeof key == 'undefined') key=arguments.callee.__args__[4][1];
		if (typeof reverse == 'undefined') reverse=arguments.callee.__args__[5][1];
		var lst;
		lst = $m['list'](iterable);
		lst['sort'](cmp, key, reverse);
		return lst;
	};
	$m['sorted'].__name__ = 'sorted';

	$m['sorted'].__bind_type__ = 0;
	$m['sorted'].__args__ = [null,null,['iterable'],['cmp', null],['key', null],['reverse', false]];
	$m['reversed'] = function(iterable) {
		var l,$pyjs_try_err,v,$and23,$and22;
		if ($p['bool']($m['hasattr'](iterable, '__reversed__'))) {
			return iterable['__reversed__']();
		}
		if ($p['bool'](($p['bool']($and22=$m['hasattr'](iterable, '__len__'))?$m['hasattr'](iterable, '__getitem__'):$and22))) {
			if ($p['bool']($m['op_eq']($m['len'](iterable), 0))) {
				l = $p['list']([]);
				return l['__iter__']();
			}
			try {
				v = iterable.__getitem__(0);
				return (typeof _reversed == "undefined"?$m._reversed:_reversed)(iterable);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
				}
			}
		}
		throw ($m['TypeError']('argument to reversed() must be a sequence'));
		return null;
	};
	$m['reversed'].__name__ = 'reversed';

	$m['reversed'].__bind_type__ = 0;
	$m['reversed'].__args__ = [null,null,['iterable']];
	$m['_reversed'] = function(iterable) {
		var i,$sub10,$sub9,$sub8,$sub7;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
		var $generator = function () {};
		$generator['next'] = function (noStop) {
		
			var $res;
			$yield_value = $exc = null;
			try {
				$res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res == 'undefined') {
					if (noStop === true) {
						$generator_state[0] = -1;
						return;
					}
					throw $p['StopIteration'];
				}
			} catch (e) {
		
				$is_executing=false;
				$generator_state[0] = -1;
				if (noStop === true && e === $p['StopIteration']) {
					return;
				}
				throw e;
			}
			return $res;
		};
		$generator['__iter__'] = function () {return $generator;};
		$generator['send'] = function ($val) {
		
			$yield_value = $val;
			$exc = null;
			try {
				var $res = $generator['$genfunc']();
				if (typeof $res == 'undefined') throw $p['StopIteration'];
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw e;
			}
			$is_executing=false;
			return $res;
		};
		$generator['$$throw'] = function ($exc_type, $exc_value) {
		
			$yield_value = null;
			$exc=(typeof $exc_value == 'undefined'?$exc_type():$exc_type($exc_value));
			try {
				var $res = $generator['$genfunc']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw (e);
			}
			$is_executing=false;
			return $res;
		};
		$generator['close'] = function () {
		
			$yield_value = null;
			$exc=$m['GeneratorExit'];
			try {
				var $res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res != 'undefined') throw $m['RuntimeError']('generator ignored GeneratorExit');
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				if (e.__name__ == 'StopIteration' || e.__name__ == 'GeneratorExit') return null;
				throw (e);
			}
			return null;
		};
		$generator['$genfunc'] = function () {
			var $yielding = false;
			if ($is_executing) throw $m['ValueError']('generator already executing');
			$is_executing = true;
		
			if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
				for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
				if (typeof $exc != 'undefined' && $exc !== null) {
					$yielding = null;
					$generator_state[0] = -1;
					throw $exc;
				}
				i = $m['len'](iterable);
				$generator_state[0]=1;
			}
			if ($generator_state[0] == 1) {
				$generator_state.splice(1, $generator_state.length-1);
				$generator_state[0]=2;
			}
			if ($generator_state[0] == 2) {
				for (;($generator_state[1] > 0)||($p['bool'](($m['cmp'](i, 0) == 1)));$generator_state[1] = 0) {
					if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
						for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
						i = $m['__op_sub']($sub9=i,$sub10=1);
						$yield_value = iterable.__getitem__(i);
						$yielding = true;
						$generator_state[1] = 1;
						return $yield_value;
						$generator_state[1]=1;
					}
					if ($generator_state[1] == 1) {
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[1] = -1;
							throw $exc;
						}
						$generator_state[1]=2;
					}
					if ($generator_state[1] == 2) {
					}
				}
				$generator_state[0]=3;
			}
			if ($generator_state[0] == 3) {
				$generator_state[0]=4;
			}
			if ($generator_state[0] == 4) {
			}

			return;
		};
		return $generator;
	};
	$m['_reversed'].__name__ = '_reversed';

	$m['_reversed'].__bind_type__ = 0;
	$m['_reversed'].__args__ = [null,null,['iterable']];
	$m['enumerate'] = function(seq) {


    if (typeof seq.__enumerate__ == 'function') {
        return seq.__enumerate__();
    }

		return (typeof _enumerate == "undefined"?$m._enumerate:_enumerate)(seq);
	};
	$m['enumerate'].__name__ = 'enumerate';

	$m['enumerate'].__bind_type__ = 0;
	$m['enumerate'].__args__ = [null,null,['seq']];
	$m['_enumerate'] = function(sequence) {
		var $iter20_iter,$iter20_nextval,$iter19_idx,$iter20_idx,$add46,$add45,$add44,$add43,$iter19_array,$iter19_iter,$iter19_nextval,$iter19_type,nextIndex,item,$iter20_type,$iter20_array;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
		var $generator = function () {};
		$generator['next'] = function (noStop) {
		
			var $res;
			$yield_value = $exc = null;
			try {
				$res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res == 'undefined') {
					if (noStop === true) {
						$generator_state[0] = -1;
						return;
					}
					throw $p['StopIteration'];
				}
			} catch (e) {
		
				$is_executing=false;
				$generator_state[0] = -1;
				if (noStop === true && e === $p['StopIteration']) {
					return;
				}
				throw e;
			}
			return $res;
		};
		$generator['__iter__'] = function () {return $generator;};
		$generator['send'] = function ($val) {
		
			$yield_value = $val;
			$exc = null;
			try {
				var $res = $generator['$genfunc']();
				if (typeof $res == 'undefined') throw $p['StopIteration'];
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw e;
			}
			$is_executing=false;
			return $res;
		};
		$generator['$$throw'] = function ($exc_type, $exc_value) {
		
			$yield_value = null;
			$exc=(typeof $exc_value == 'undefined'?$exc_type():$exc_type($exc_value));
			try {
				var $res = $generator['$genfunc']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw (e);
			}
			$is_executing=false;
			return $res;
		};
		$generator['close'] = function () {
		
			$yield_value = null;
			$exc=$m['GeneratorExit'];
			try {
				var $res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res != 'undefined') throw $m['RuntimeError']('generator ignored GeneratorExit');
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				if (e.__name__ == 'StopIteration' || e.__name__ == 'GeneratorExit') return null;
				throw (e);
			}
			return null;
		};
		$generator['$genfunc'] = function () {
			var $yielding = false;
			if ($is_executing) throw $m['ValueError']('generator already executing');
			$is_executing = true;
		
			if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
				for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
				if (typeof $exc != 'undefined' && $exc !== null) {
					$yielding = null;
					$generator_state[0] = -1;
					throw $exc;
				}
				nextIndex = 0;
				$iter20_iter = sequence;
				$iter20_nextval=$p['__iter_prepare']($iter20_iter,false);
				$generator_state[0]=1;
			}
			if ($generator_state[0] == 1) {
				$generator_state[1] = 0;
				$generator_state[0]=2;
			}
			if ($generator_state[0] == 2) {
				for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter20_nextval).$nextval) != 'undefined');$generator_state[1] = 0) {
					if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
						for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
						item = $iter20_nextval.$nextval;
						$yield_value = $p['tuple']([nextIndex, item]);
						$yielding = true;
						$generator_state[1] = 1;
						return $yield_value;
						$generator_state[1]=1;
					}
					if ($generator_state[1] == 1) {
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[1] = -1;
							throw $exc;
						}
						nextIndex = $m['__op_add']($add45=nextIndex,$add46=1);
						$generator_state[1]=2;
					}
					if ($generator_state[1] == 2) {
					}
				}
				$generator_state[0]=3;
			}
			if ($generator_state[0] == 3) {
				$generator_state[0]=4;
			}
			if ($generator_state[0] == 4) {
			}

			return;
		};
		return $generator;
	};
	$m['_enumerate'].__name__ = '_enumerate';

	$m['_enumerate'].__bind_type__ = 0;
	$m['_enumerate'].__args__ = [null,null,['sequence']];
	$m['iter'] = function(iterable, sentinel) {
		if (typeof sentinel == 'undefined') sentinel=arguments.callee.__args__[3][1];

		if ($p['bool']((sentinel === null))) {
			if ($p['bool']((typeof isIteratable == "undefined"?$m.isIteratable:isIteratable)(iterable))) {
				return iterable['__iter__']();
			}
			if ($p['bool']($m['hasattr'](iterable, '__getitem__'))) {
				return (typeof _iter_getitem == "undefined"?$m._iter_getitem:_iter_getitem)(iterable);
			}
			throw ($m['TypeError']('object is not iterable'));
		}
		if ($p['bool']((typeof isFunction == "undefined"?$m.isFunction:isFunction)(iterable))) {
			return (typeof _iter_callable == "undefined"?$m._iter_callable:_iter_callable)(iterable, sentinel);
		}
		throw ($m['TypeError']('iter(v, w): v must be callable'));
		return null;
	};
	$m['iter'].__name__ = 'iter';

	$m['iter'].__bind_type__ = 0;
	$m['iter'].__args__ = [null,null,['iterable'],['sentinel', null]];
	$m['_iter_getitem'] = function(object) {
		var $add50,$add49,$add48,i,$add47,$pyjs_try_err;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
		var $generator = function () {};
		$generator['next'] = function (noStop) {
		
			var $res;
			$yield_value = $exc = null;
			try {
				$res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res == 'undefined') {
					if (noStop === true) {
						$generator_state[0] = -1;
						return;
					}
					throw $p['StopIteration'];
				}
			} catch (e) {
		
				$is_executing=false;
				$generator_state[0] = -1;
				if (noStop === true && e === $p['StopIteration']) {
					return;
				}
				throw e;
			}
			return $res;
		};
		$generator['__iter__'] = function () {return $generator;};
		$generator['send'] = function ($val) {
		
			$yield_value = $val;
			$exc = null;
			try {
				var $res = $generator['$genfunc']();
				if (typeof $res == 'undefined') throw $p['StopIteration'];
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw e;
			}
			$is_executing=false;
			return $res;
		};
		$generator['$$throw'] = function ($exc_type, $exc_value) {
		
			$yield_value = null;
			$exc=(typeof $exc_value == 'undefined'?$exc_type():$exc_type($exc_value));
			try {
				var $res = $generator['$genfunc']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw (e);
			}
			$is_executing=false;
			return $res;
		};
		$generator['close'] = function () {
		
			$yield_value = null;
			$exc=$m['GeneratorExit'];
			try {
				var $res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res != 'undefined') throw $m['RuntimeError']('generator ignored GeneratorExit');
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				if (e.__name__ == 'StopIteration' || e.__name__ == 'GeneratorExit') return null;
				throw (e);
			}
			return null;
		};
		$generator['$genfunc'] = function () {
			var $yielding = false;
			if ($is_executing) throw $m['ValueError']('generator already executing');
			$is_executing = true;
		
			if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
				for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
				if (typeof $exc != 'undefined' && $exc !== null) {
					$yielding = null;
					$generator_state[0] = -1;
					throw $exc;
				}
				i = 0;
				$generator_state[0]=1;
			}
			if ($generator_state[0] == 1) {
				try {
					if (typeof $generator_exc[0] != 'undefined' && $generator_exc[0] !== null) throw $generator_exc[0];
					if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
						for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
						$generator_exc[0] = null;
						$generator_state[1]=1;
					}
					if ($generator_state[1] == 1) {
						$generator_state[1]=2;
					}
					if ($generator_state[1] == 2) {
						$generator_state.splice(2, $generator_state.length-2);
						$generator_state[1]=3;
					}
					if ($generator_state[1] == 3) {
						for (;($generator_state[2] > 0)||($p['bool'](true));$generator_state[2] = 0) {
							if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
								for (var $i = 2 ; $i < ($generator_state.length<4?4:$generator_state.length); $i++) $generator_state[$i]=0;
								$yield_value = object.__getitem__(i);
								$yielding = true;
								$generator_state[2] = 1;
								return $yield_value;
								$generator_state[2]=1;
							}
							if ($generator_state[2] == 1) {
								if (typeof $exc != 'undefined' && $exc !== null) {
									$yielding = null;
									$generator_state[2] = -1;
									throw $exc;
								}
								i = $m['__op_add']($add49=i,$add50=1);
								$generator_state[2]=2;
							}
							if ($generator_state[2] == 2) {
							}
						}
						$generator_state[1]=4;
					}
					if ($generator_state[1] == 4) {
						$generator_state[1]=5;
					}
					if ($generator_state[1] == 5) {
						$generator_state[1]=6;
					}
					if ($generator_state[1] == 6) {
					}
				} catch($pyjs_try_err) {
					$generator_exc[0] = $pyjs_try_err;
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (($pyjs_try_err_name == $m['IndexError'].__name__)||$m['_isinstance']($pyjs_try_err,$m['IndexError'])) {
						if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
							for (var $i = 3 ; $i < ($generator_state.length<5?5:$generator_state.length); $i++) $generator_state[$i]=0;
							$generator_state[3]=1;
						}
						if ($generator_state[3] == 1) {
						}
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$generator_exc[0] = null;
				for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
				$generator_state[0]=2;
			}
			if ($generator_state[0] == 2) {
				$generator_state[0]=3;
			}
			if ($generator_state[0] == 3) {
			}

			return;
		};
		return $generator;
	};
	$m['_iter_getitem'].__name__ = '_iter_getitem';

	$m['_iter_getitem'].__bind_type__ = 0;
	$m['_iter_getitem'].__args__ = [null,null,['object']];
	$m['_iter_callable'] = function(callable, sentinel) {
		var nextval;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
		var $generator = function () {};
		$generator['next'] = function (noStop) {
		
			var $res;
			$yield_value = $exc = null;
			try {
				$res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res == 'undefined') {
					if (noStop === true) {
						$generator_state[0] = -1;
						return;
					}
					throw $p['StopIteration'];
				}
			} catch (e) {
		
				$is_executing=false;
				$generator_state[0] = -1;
				if (noStop === true && e === $p['StopIteration']) {
					return;
				}
				throw e;
			}
			return $res;
		};
		$generator['__iter__'] = function () {return $generator;};
		$generator['send'] = function ($val) {
		
			$yield_value = $val;
			$exc = null;
			try {
				var $res = $generator['$genfunc']();
				if (typeof $res == 'undefined') throw $p['StopIteration'];
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw e;
			}
			$is_executing=false;
			return $res;
		};
		$generator['$$throw'] = function ($exc_type, $exc_value) {
		
			$yield_value = null;
			$exc=(typeof $exc_value == 'undefined'?$exc_type():$exc_type($exc_value));
			try {
				var $res = $generator['$genfunc']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw (e);
			}
			$is_executing=false;
			return $res;
		};
		$generator['close'] = function () {
		
			$yield_value = null;
			$exc=$m['GeneratorExit'];
			try {
				var $res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res != 'undefined') throw $m['RuntimeError']('generator ignored GeneratorExit');
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				if (e.__name__ == 'StopIteration' || e.__name__ == 'GeneratorExit') return null;
				throw (e);
			}
			return null;
		};
		$generator['$genfunc'] = function () {
			var $yielding = false;
			if ($is_executing) throw $m['ValueError']('generator already executing');
			$is_executing = true;
		
			if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
				for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
				if (typeof $exc != 'undefined' && $exc !== null) {
					$yielding = null;
					$generator_state[0] = -1;
					throw $exc;
				}
				$generator_state[0]=1;
			}
			if ($generator_state[0] == 1) {
				$generator_state.splice(1, $generator_state.length-1);
				$generator_state[0]=2;
			}
			if ($generator_state[0] == 2) {
				for (;($generator_state[1] > 0)||($p['bool'](true));$generator_state[1] = 0) {
					if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
						for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
						nextval = callable();
						if ($p['bool']($m['op_eq'](nextval, sentinel))) {
							break;
						}
						$yield_value = nextval;
						$yielding = true;
						$generator_state[1] = 1;
						return $yield_value;
						$generator_state[1]=1;
					}
					if ($generator_state[1] == 1) {
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[1] = -1;
							throw $exc;
						}
						$generator_state[1]=2;
					}
					if ($generator_state[1] == 2) {
					}
				}
				$generator_state[0]=3;
			}
			if ($generator_state[0] == 3) {
				$generator_state[0]=4;
			}
			if ($generator_state[0] == 4) {
			}

			return;
		};
		return $generator;
	};
	$m['_iter_callable'].__name__ = '_iter_callable';

	$m['_iter_callable'].__bind_type__ = 0;
	$m['_iter_callable'].__args__ = [null,null,['callable'],['sentinel']];
	$m['min'] = function() {
		var sequence = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));

		var $iter21_idx,$iter21_nextval,minValue,$iter21_type,item,$iter21_iter,$iter21_array;
		if ($p['bool']($m['op_eq']($m['len'](sequence), 1))) {
			sequence = sequence.__getitem__(0);
		}
		minValue = null;
		$iter21_iter = sequence;
		$iter21_nextval=$p['__iter_prepare']($iter21_iter,false);
		while (typeof($p['__wrapped_next']($iter21_nextval).$nextval) != 'undefined') {
			item = $iter21_nextval.$nextval;
			if ($p['bool']((minValue === null))) {
				minValue = item;
			}
			else if ($p['bool']($m['op_eq']($m['cmp'](item, minValue), (typeof ($usub5=1)=='number'?
				-$usub5:
				$m['op_usub']($usub5))))) {
				minValue = item;
			}
		}
		return minValue;
	};
	$m['min'].__name__ = 'min';

	$m['min'].__bind_type__ = 0;
	$m['min'].__args__ = ['sequence',null];
	$m['max'] = function() {
		var sequence = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));

		var $iter22_array,$iter22_nextval,maxValue,$iter22_idx,item,$iter22_type,$iter22_iter;
		if ($p['bool']($m['op_eq']($m['len'](sequence), 1))) {
			sequence = sequence.__getitem__(0);
		}
		maxValue = null;
		$iter22_iter = sequence;
		$iter22_nextval=$p['__iter_prepare']($iter22_iter,false);
		while (typeof($p['__wrapped_next']($iter22_nextval).$nextval) != 'undefined') {
			item = $iter22_nextval.$nextval;
			if ($p['bool']((maxValue === null))) {
				maxValue = item;
			}
			else if ($p['bool']($m['op_eq']($m['cmp'](item, maxValue), 1))) {
				maxValue = item;
			}
		}
		return maxValue;
	};
	$m['max'].__name__ = 'max';

	$m['max'].__bind_type__ = 0;
	$m['max'].__args__ = ['sequence',null];
	$m['sum'] = function(iterable, start) {
		if (typeof start == 'undefined') start=arguments.callee.__args__[3][1];
		var $add51,$iter23_type,$iter23_nextval,$iter23_iter,i,$add52,$iter23_array,$iter23_idx;
		if ($p['bool']((start === null))) {
			start = 0;
		}
		$iter23_iter = iterable;
		$iter23_nextval=$p['__iter_prepare']($iter23_iter,false);
		while (typeof($p['__wrapped_next']($iter23_nextval).$nextval) != 'undefined') {
			i = $iter23_nextval.$nextval;
			start = $m['__op_add']($add51=start,$add52=i);
		}
		return start;
	};
	$m['sum'].__name__ = 'sum';

	$m['sum'].__bind_type__ = 0;
	$m['sum'].__args__ = [null,null,['iterable'],['start', null]];
$p['next_hash_id'] = 0;
	if ($p['bool'](typeof 'a'[0] == 'undefined')) {
$p['__hash'] = function(obj) {
        switch (obj.constructor) {
            case String:
            case Number:
            case Date:
                return '$'+obj;
        }
        if (typeof obj.__hash__ == 'function') return obj.__hash__();
        if (typeof obj.nodeType != 'number') {
            try {
            obj.$H = ++$p['next_hash_id'];
            } catch (e) {
                return obj;
            }
            return $p['next_hash_id'];
            return obj.$H = ++$p['next_hash_id'];
        }
        if (typeof obj.setAttribute == 'undefined') {
            return obj;
        }
        var $H;
        if ($H = obj.getAttribute('$H')) {
            return $H;
        }
        obj.setAttribute('$H', ++$p['next_hash_id']);
        return $p['next_hash_id'];
    };
        
$p['hash'] = function(obj) {
        if (obj === null) return null;

        if (typeof obj.$H != 'undefined') return obj.$H;
        if (typeof obj == 'string' || obj.__number__) return '$'+obj;
        switch (obj.constructor) {
            case String:
            case Number:
            case Date:
                return '$'+obj;
        }
        if (typeof obj.__hash__ == 'function') return obj.__hash__();
        if (typeof obj.nodeType != 'number') {
            try {
            obj.$H = ++$p['next_hash_id'];
            } catch (e) {
                return obj;
            }
            return $p['next_hash_id'];
            return obj.$H = ++$p['next_hash_id'];
        }
        if (typeof obj.setAttribute == 'undefined') {
            return obj;
        }
        var $H;
        if ($H = obj.getAttribute('$H')) {
            return $H;
        }
        obj.setAttribute('$H', ++$p['next_hash_id']);
        return $p['next_hash_id'];
    };
        
	}
	else {
$p['__hash'] = function(obj) {
        switch (obj.constructor) {
            case String:
            case Number:
            case Date:
                return '$'+obj;
        }
        if (typeof obj.__hash__ == 'function') return obj.__hash__();
        obj.$H = ++$p['next_hash_id'];
        return obj.$H;
    };
        
$p['hash'] = function(obj) {
        if (obj === null) return null;

        if (typeof obj.$H != 'undefined') return obj.$H;
        if (typeof obj == 'string' || obj.__number__) return '$'+obj;
        switch (obj.constructor) {
            case String:
            case Number:
            case Date:
                return '$'+obj;
        }
        if (typeof obj.__hash__ == 'function') return obj.__hash__();
        obj.$H = ++$p['next_hash_id'];
        return obj.$H;
    };
        
	}
	$m['isObject'] = function(a) {


    return (a!== null && (typeof a== 'object')) || typeof a== 'function';
    
	};
	$m['isObject'].__name__ = 'isObject';

	$m['isObject'].__bind_type__ = 0;
	$m['isObject'].__args__ = [null,null,['a']];
	$m['isFunction'] = function(a) {


    return typeof a== 'function';
    
	};
	$m['isFunction'].__name__ = 'isFunction';

	$m['isFunction'].__bind_type__ = 0;
	$m['isFunction'].__args__ = [null,null,['a']];
	$m['callable'] = $m['isFunction'];
	$m['isString'] = function(a) {


    return typeof a== 'string';
    
	};
	$m['isString'].__name__ = 'isString';

	$m['isString'].__bind_type__ = 0;
	$m['isString'].__args__ = [null,null,['a']];
	$m['isNull'] = function(a) {


    return typeof a== 'object' && !a;
    
	};
	$m['isNull'].__name__ = 'isNull';

	$m['isNull'].__bind_type__ = 0;
	$m['isNull'].__args__ = [null,null,['a']];
	$m['isArray'] = function(a) {


    return $m['isObject'](a) && a.constructor === Array;
    
	};
	$m['isArray'].__name__ = 'isArray';

	$m['isArray'].__bind_type__ = 0;
	$m['isArray'].__args__ = [null,null,['a']];
	$m['isUndefined'] = function(a) {


    return typeof a== 'undefined';
    
	};
	$m['isUndefined'].__name__ = 'isUndefined';

	$m['isUndefined'].__bind_type__ = 0;
	$m['isUndefined'].__args__ = [null,null,['a']];
	$m['isIteratable'] = function(a) {


    if (a=== null) return false;
    return typeof a.__iter__ == 'function';
    
	};
	$m['isIteratable'].__name__ = 'isIteratable';

	$m['isIteratable'].__bind_type__ = 0;
	$m['isIteratable'].__args__ = [null,null,['a']];
	$m['isNumber'] = function(a) {


    return a!== null && a.__number__ && 
           (a.__number__ != 0x01 || isFinite(a));
    
	};
	$m['isNumber'].__name__ = 'isNumber';

	$m['isNumber'].__bind_type__ = 0;
	$m['isNumber'].__args__ = [null,null,['a']];
	$m['isInteger'] = function(a) {


    switch (a.__number__) {
        case 0x01:
            if (a != Math.floor(a)) break;
        case 0x02:
        case 0x04:
            return true;
    }
    return false;

	};
	$m['isInteger'].__name__ = 'isInteger';

	$m['isInteger'].__bind_type__ = 0;
	$m['isInteger'].__args__ = [null,null,['a']];
	$m['isSet'] = function(a) {


    if (a=== null) return false;
    if (typeof a.__object == 'undefined') return false;
    var a_mro = a.__mro__;
    switch (a_mro[a_mro.length-2].__md5__) {
        case $m['set'].__md5__:
            return 1;
        case $m['frozenset'].__md5__:
            return 2;
    }
    return false;

	};
	$m['isSet'].__name__ = 'isSet';

	$m['isSet'].__bind_type__ = 0;
	$m['isSet'].__args__ = [null,null,['a']];
	$m['toJSObjects'] = function(x) {
		var $attr97,$attr99,$attr98,$attr100;
		if ($p['bool']($m['isArray'](x))) {

        var result = [];
        for(var k=0; k < x.length; k++) {
           var v = x[k];
           var tv = $m['toJSObjects'](v);
           result.push(tv);
        }
        return result;
        
		}
		if ($p['bool']($m['isObject'](x))) {
			if ($p['bool'](x['__number__'])) {
				return x['valueOf']();
			}
			else if ($p['bool']($m['isinstance'](x, $m['dict']))) {

            var o = x.getObject();
            var result = {};
            for (var i in o) {
               result[o[i][0].toString()] = $m['toJSObjects'](o[i][1]);
            }
            return result;
            
			}
			else if ($p['bool']($m['isinstance'](x, $m['list']))) {
				return $m['toJSObjects'](x['__array']);
			}
			else if ($p['bool']($m['hasattr'](x, '__class__'))) {
				return x;
			}
		}
		if ($p['bool']($m['isObject'](x))) {

        var result = {};
        for(var k in x) {
            var v = x[k];
            var tv = $m['toJSObjects'](v);
            result[k] = tv;
            }
            return result;
         
		}
		if ($p['bool']($m['isString'](x))) {
			return $m['str'](x);
		}
		return x;
	};
	$m['toJSObjects'].__name__ = 'toJSObjects';

	$m['toJSObjects'].__bind_type__ = 0;
	$m['toJSObjects'].__args__ = [null,null,['x']];
	$m['sprintf'] = function(strng, args) {


    var re_dict = /([^%]*)%[(]([^)]+)[)]([#0\x20\x2B-]*)(\d+)?(\.\d+)?[hlL]?(.)((.|\n)*)/;
    var re_list = /([^%]*)%([#0\x20\x2B-]*)(\*|(\d+))?(\.\d+)?[hlL]?(.)((.|\n)*)/;
    var re_exp = /(.*)([+-])(.*)/;

    var argidx = 0;
    var nargs = 0;
    var result = [];
    var remainder = strng;

    function formatarg(flags, minlen, precision, conversion, param) {
        var subst = '';
        var numeric = true;
        var left_padding = 1;
        var padchar = ' ';
        if (minlen === null || minlen == 0 || !minlen) {
            minlen=0;
        } else {
            minlen = parseInt(minlen);
        }
        if (!precision) {
            precision = null;
        } else {
            precision = parseInt(precision.substr(1));
        }
        if (flags.indexOf('-') >= 0) {
            left_padding = 0;
        }
        switch (conversion) {
            case '%':
                numeric = false;
                subst = '%';
                break;
            case 'c':
                numeric = false;
                subst = String.fromCharCode(parseInt(param));
                break;
            case 'd':
            case 'i':
            case 'u':
                subst = '' + parseInt(param);
                break;
            case 'e':
                if (precision === null) {
                    precision = 6;
                }
                subst = re_exp.exec(String(param.toExponential(precision)));
                if (subst[3].length == 1) {
                    subst = subst[1] + subst[2] + '0' + subst[3];
                } else {
                    subst = subst[1] + subst[2] + subst[3];
                }
                break;
            case 'E':
                if (precision === null) {
                    precision = 6;
                }
                subst = re_exp.exec(String(param.toExponential(precision)).toUpperCase());
                if (subst[3].length == 1) {
                    subst = subst[1] + subst[2] + '0' + subst[3];
                } else {
                    subst = subst[1] + subst[2] + subst[3];
                }
                break;
            case 'f':
                if (precision === null) {
                    precision = 6;
                }
                subst = String(parseFloat(param).toFixed(precision));
                break;
            case 'F':
                if (precision === null) {
                    precision = 6;
                }
                subst = String(parseFloat(param).toFixed(precision)).toUpperCase();
                break;
            case 'g':
                if (precision === null && flags.indexOf('#') >= 0) {
                    precision = 6;
                }
                if (param >= 1E6 || param < 1E-5) {
                    subst = String(precision == null ? param.toExponential() : param.toExponential().toPrecision(precision));
                } else {
                    subst = String(precision == null ? parseFloat(param) : parseFloat(param).toPrecision(precision));
                }
                break;
            case 'G':
                if (precision === null && flags.indexOf('#') >= 0) {
                    precision = 6;
                }
                if (param >= 1E6 || param < 1E-5) {
                    subst = String(precision == null ? param.toExponential() : param.toExponential().toPrecision(precision)).toUpperCase();
                } else {
                    subst = String(precision == null ? parseFloat(param) : parseFloat(param).toPrecision(precision)).toUpperCase().toUpperCase();
                }
                break;
            case 'r':
                numeric = false;
                subst = $m['repr'](param);
                break;
            case 's':
                numeric = false;
                subst = $m['str'](param);
                break;
            case 'o':
                param = $p['float_int'](param);
                subst = param.toString(8);
                if (subst != '0' && flags.indexOf('#') >= 0) {
                    subst = '0' + subst;
                }
                break;
            case 'x':
                param = $p['float_int'](param);
                subst = param.toString(16);
                if (flags.indexOf('#') >= 0) {
                    if (left_padding) {
                        subst = subst.rjust(minlen - 2, '0');
                    }
                    subst = '0x' + subst;
                }
                break;
            case 'X':
                param = $p['float_int'](param);
                subst = param.toString(16).toUpperCase();
                if (flags.indexOf('#') >= 0) {
                    if (left_padding) {
                        subst = subst.rjust(minlen - 2, '0');
                    }
                    subst = '0x' + subst;
                }
                break;
            default:
                throw $m['ValueError']("unsupported format character '" + conversion + "' ("+$p['hex'](conversion.charCodeAt(0))+") at index " + (strng.length - remainder.length - 1));
        }
        if (minlen && subst.length < minlen) {
            if (numeric && left_padding && flags.indexOf('0') >= 0) {
                padchar = '0';
            }
            subst = left_padding ? subst.rjust(minlen, padchar) : subst.ljust(minlen, padchar);
        }
        return subst;
    }

    function sprintf_list(strng, args) {
        var a, left, flags, precision, conversion, minlen, param,
            __array = result;
        while (remainder) {
            a = re_list.exec(remainder);
            if (a === null) {
                __array[__array.length] = remainder;
                break;
            }
            left = a[1]; flags = a[2];
            minlen = a[3]; precision = a[5]; conversion = a[6];
            remainder = a[7];
            if (typeof minlen == 'undefined') minlen = null;
            if (typeof precision == 'undefined') precision = null;
            if (typeof conversion == 'undefined') conversion = null;
            __array[__array.length] = left;
            if (minlen == '*') {
                if (argidx == nargs) {
                    throw $m['TypeError']("not enough arguments for format string");
                }
                minlen = args.__getitem__(argidx++);
                switch (minlen.__number__) {
                    case 0x02:
                    case 0x04:
                        break;
                    case 0x01:
                        if (minlen == Math.floor(minlen)) {
                            break;
                        }
                    default:
                        throw $m['TypeError']('* wants int');
                }
            }
            if (conversion != '%') {
                if (argidx == nargs) {
                    throw $m['TypeError']("not enough arguments for format string");
                }
                param = args.__getitem__(argidx++);
            }
            __array[__array.length] = formatarg(flags, minlen, precision, conversion, param);
        }
    }

    function sprintf_dict(strng, args) {
        var a = null,
            left = null,
            flags = null,
            precision = null,
            conversion = null,
            minlen = null,
            minlen_type = null,
            key = null,
            arg = args,
            param,
            __array = result;

        argidx++;
        while (remainder) {
            a = re_dict.exec(remainder);
            if (a === null) {
                __array[__array.length] = remainder;
                break;
            }
            left = a[1]; key = a[2]; flags = a[3];
            minlen = a[4]; precision = a[5]; conversion = a[6];
            remainder = a[7];
            if (typeof minlen == 'undefined') minlen = null;
            if (typeof precision == 'undefined') precision = null;
            if (typeof conversion == 'undefined') conversion = null;
            __array[__array.length] = left;
            param = arg.__getitem__(key);
            __array[__array.length] = formatarg(flags, minlen, precision, conversion, param);
        }
    }

    var constructor = args === null ? 'NoneType' : (args.__md5__ == $m['tuple'].__md5__ ? 'tuple': (args.__md5__ == $m['dict'].__md5__ ? 'dict': 'Other'));
    if (strng.indexOf("%(") >= 0) {
        if (re_dict.exec(strng) !== null) {
            if (constructor != "dict") {
                throw $m['TypeError']("format requires a mapping");
            }
            sprintf_dict(strng, args);
            return result.join("");
        }
    }
    if (constructor != "tuple") {
        args = $m['tuple']([args]);
    }
    nargs = args.__array.length;
    sprintf_list(strng, args);
    if (argidx != nargs) {
        throw $m['TypeError']('not all arguments converted during string formatting');
    }
    return result.join("");

	};
	$m['sprintf'].__name__ = 'sprintf';

	$m['sprintf'].__bind_type__ = 0;
	$m['sprintf'].__args__ = [null,null,['strng'],['args']];
	$m['debugReport'] = function(msg) {


    alert(msg);
    
	};
	$m['debugReport'].__name__ = 'debugReport';

	$m['debugReport'].__bind_type__ = 0;
	$m['debugReport'].__args__ = [null,null,['msg']];

var $printFunc = null;
if (   typeof $wnd.console != 'undefined'
    && typeof $wnd.console.debug == 'function') {
    $printFunc = function(s) {
        $wnd.console.debug(s);
    };
} else if (   typeof $wnd.opera != 'undefined'
           && typeof $wnd.opera.postError == 'function') {
    $printFunc = function(s) {
        $wnd.opera.postError(s);
    };
} else if ( typeof console != 'undefined') {
    if (   typeof console.log == 'function'
        || typeof console.log == 'object') {
        $printFunc = function(s){
            console.log(s);
        };
    }
}

	$m['_print_to_console'] = function(s) {


    if ($printFunc === null) return null;
    $printFunc(s);
    
	};
	$m['_print_to_console'].__name__ = '_print_to_console';

	$m['_print_to_console'].__bind_type__ = 0;
	$m['_print_to_console'].__args__ = [null,null,['s']];
	$m['printFunc'] = function(objs, newline) {


    var s = "";
    for(var i=0; i < objs.length; i++) {
        if(s != "") s += " ";
        s += objs[i];
    }
    if (newline) {
      s += '\n';
    }
    $m['sys'].stdout.write(s);
    
	};
	$m['printFunc'].__name__ = 'printFunc';

	$m['printFunc'].__bind_type__ = 0;
	$m['printFunc'].__args__ = [null,null,['objs'],['newline']];
	$m['pow'] = function(x, y, z) {
		if (typeof z == 'undefined') z=arguments.callee.__args__[4][1];
		var p,$mod1,$mod2;
		p = null;
p = Math.pow(x, y);
		if ($p['bool']((z === null))) {
			return $m['float'](p);
		}
		return $m['float']((typeof ($mod1=p)==typeof ($mod2=z) && typeof $mod1=='number'?
			(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
			$m['op_mod']($mod1,$mod2)));
	};
	$m['pow'].__name__ = 'pow';

	$m['pow'].__bind_type__ = 0;
	$m['pow'].__args__ = [null,null,['x'],['y'],['z', null]];
	$m['hex'] = function(x) {


    if (typeof x == 'number') {
        if (Math.floor(x) == x) {
            return '0x' + x.toString(16);
        }
    } else {
        switch (x.__number__) {
            case 0x02:
                return '0x' + x.__v.toString(16);
            case 0x04:
                return x.__hex__();
        }
    }

		throw ($m['TypeError']('hex() argument can\x27t be converted to hex'));
		return null;
	};
	$m['hex'].__name__ = 'hex';

	$m['hex'].__bind_type__ = 0;
	$m['hex'].__args__ = [null,null,['x']];
	$m['oct'] = function(x) {


    if (typeof x == 'number') {
        if (Math.floor(x) == x) {
            return x == 0 ? '0': '0' + x.toString(8);
        }
    } else {
        switch (x.__number__) {
            case 0x02:
                return x.__v == 0 ? '0': '0' + x.__v.toString(8);
            case 0x04:
                return x.__oct__();
        }
    }

		throw ($m['TypeError']('oct() argument can\x27t be converted to oct'));
		return null;
	};
	$m['oct'].__name__ = 'oct';

	$m['oct'].__bind_type__ = 0;
	$m['oct'].__args__ = [null,null,['x']];
	$m['round'] = function(x, n) {
		if (typeof n == 'undefined') n=arguments.callee.__args__[3][1];
		var r;
		n = $m['pow'](10, n);
		r = null;
r = Math.round(n*x)/n;
		return $m['float'](r);
	};
	$m['round'].__name__ = 'round';

	$m['round'].__bind_type__ = 0;
	$m['round'].__args__ = [null,null,['x'],['n', 0]];
	$m['divmod'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                if (y == 0) throw $m['ZeroDivisionError']('float divmod()');
                var f = Math.floor(x / y);
                return $m['tuple']([f, x - f * y]);
            case 0x0102:
                if (y.__v == 0) throw $m['ZeroDivisionError']('float divmod()');
                var f = Math.floor(x / y.__v);
                return $m['tuple']([f, x - f * y.__v]);
            case 0x0201:
                if (y == 0) throw $m['ZeroDivisionError']('float divmod()');
                var f = Math.floor(x.__v / y);
                return $m['tuple']([f, x.__v - f * y]);
            case 0x0202:
                if (y.__v == 0) throw $m['ZeroDivisionError']('integer division or modulo by zero');
                var f = Math.floor(x.__v / y.__v);
                return $m['tuple']([new $p['float_int'](f), new $p['float_int'](x.__v - f * y.__v)]);
            case 0x0204:
                return y.__rdivmod__(new $p['float_int'](x.__v));
            case 0x0402:
                return x.__divmod__(new $p['float_int'](y.__v));
            case 0x0404:
                return x.__divmod__(y);
        }
        if (!x.__number__) {
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && $m['isinstance'](x, y)
                && typeof x['__divmod__'] == 'function')
                return y.__divmod__(x);
            if (typeof x['__divmod__'] == 'function') return x.__divmod__(y);
        }
        if (!y.__number__ && typeof y['__rdivmod__'] == 'function') return y.__rdivmod__(x);
    }

		throw ($m['TypeError']($m['sprintf']('unsupported operand type(s) for divmod(): \x27%r\x27, \x27%r\x27', $p['tuple']([x, y]))));
		return null;
	};
	$m['divmod'].__name__ = 'divmod';

	$m['divmod'].__bind_type__ = 0;
	$m['divmod'].__args__ = [null,null,['x'],['y']];
	$m['all'] = function(iterable) {
		var $iter24_idx,$iter24_type,$iter24_array,$iter24_nextval,element,$iter24_iter;
		$iter24_iter = iterable;
		$iter24_nextval=$p['__iter_prepare']($iter24_iter,false);
		while (typeof($p['__wrapped_next']($iter24_nextval).$nextval) != 'undefined') {
			element = $iter24_nextval.$nextval;
			if ($p['bool'](!$p['bool'](element))) {
				return false;
			}
		}
		return true;
	};
	$m['all'].__name__ = 'all';

	$m['all'].__bind_type__ = 0;
	$m['all'].__args__ = [null,null,['iterable']];
	$m['any'] = function(iterable) {
		var $iter25_nextval,$iter25_array,$iter25_iter,element,$iter25_idx,$iter25_type;
		$iter25_iter = iterable;
		$iter25_nextval=$p['__iter_prepare']($iter25_iter,false);
		while (typeof($p['__wrapped_next']($iter25_nextval).$nextval) != 'undefined') {
			element = $iter25_nextval.$nextval;
			if ($p['bool'](element)) {
				return true;
			}
		}
		return false;
	};
	$m['any'].__name__ = 'any';

	$m['any'].__bind_type__ = 0;
	$m['any'].__args__ = [null,null,['iterable']];
	$m['__iter_prepare'] = function(iter, reuse_tuple) {
    var it = {};
    it.$iter = iter;
    it.$loopvar = 0;
    it.$reuse_tuple = reuse_tuple;
    if (typeof (it.$arr = iter.__array) != 'undefined') {
        it.$gentype = 0;
    } else {
        it.$iter = iter.__iter__();
        it.$gentype = typeof (it.$arr = iter.__array) != 'undefined'? 0 : (typeof iter.$genfunc == 'function'? 1 : -1);
    }
    return it;
};
	$m['__wrapped_next'] = function(it) {
    var iterator = it.$iter;
    it.$nextval = it.$gentype?(it.$gentype > 0?
        iterator.next(true,it.$reuse_tuple):$p['wrapped_next'](iterator)
                              ) : it.$arr[it.$loopvar++];
    return it;
};
	$m['wrapped_next'] = function (iter) {
    try {
        var res = iter.next();
    } catch (e) {
        if (e === $p['StopIteration']) {
            return;
        }
        throw e;
    }
    return res;
};
	$m['init']();
	$m['__nondynamic_modules__'] = $p['dict']([]);
	$m['__import__'] = function(name, globals, locals, fromlist, level) {
		if (typeof globals == 'undefined') globals=arguments.callee.__args__[3][1];
		if (typeof locals == 'undefined') locals=arguments.callee.__args__[4][1];
		if (typeof fromlist == 'undefined') fromlist=arguments.callee.__args__[5][1];
		if (typeof level == 'undefined') level=arguments.callee.__args__[6][1];
		var $add53,$add54,module,$and25,$and24;
		module = $m['___import___'](name, null);
		if ($p['bool'](($p['bool']($and24=!$p['bool']((module === null)))?$m['hasattr'](module, '__was_initialized__'):$and24))) {
			return module;
		}
		throw ($m['ImportError']($m['__op_add']($add53='No module named ',$add54=name)));
		return null;
	};
	$m['__import__'].__name__ = '__import__';

	$m['__import__'].__bind_type__ = 0;
	$m['__import__'].__args__ = [null,null,['name'],['globals', $p['dict']([])],['locals', $p['dict']([])],['fromlist', $p['list']([])],['level', (typeof ($usub6=1)=='number'?
		-$usub6:
		$m['op_usub']($usub6))]];
	$m['sys'] = $m['___import___']('sys', null);
	$m['dynamic'] = $m['___import___']('dynamic', null);
	return this;
}; /* end pyjslib */


/* end module: pyjslib */


/*
PYJS_DEPS: ['sys', 'dynamic']
*/


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




$p = $pyjs.loaded_modules["pyjslib"];
$p('pyjslib');
$pyjs.__modules__.pyjslib = $p['pyjslib']


pyjslib.___import___("easy", null, "__main__");

var $wnd = window;
var $doc = window.document;
var $pyjs = new Object();
var $p = null;
$pyjs.platform = 'safari';
$pyjs.global_namespace = this;
$pyjs.__modules__ = {};
$pyjs.modules_hash = {};
$pyjs.loaded_modules = {};
$pyjs.options = new Object();
$pyjs.options.arg_ignore = true;
$pyjs.options.arg_count = true;
$pyjs.options.arg_is_instance = true;
$pyjs.options.arg_instance_type = false;
$pyjs.options.arg_kwarg_dup = true;
$pyjs.options.arg_kwarg_unexpected_keyword = true;
$pyjs.options.arg_kwarg_multiple_values = true;
$pyjs.options.dynamic_loading = false;
$pyjs.trackstack = [];
$pyjs.track = {module:'__main__', lineno: 1};
$pyjs.trackstack.push($pyjs.track);
$pyjs.__active_exception_stack__ = null;
$pyjs.__last_exception_stack__ = null;
$pyjs.__last_exception__ = null;
$pyjs.in_try_except = 0;

var $pyjs_array_slice = Array.prototype.slice;

function $pyjs_kwargs_call(obj, func, star_args, dstar_args, args)
{
    if (obj !== null) {
        func = obj[func];
    }

    // Merge dstar_args into args[0]
    if (dstar_args) {
        if (pyjslib.get_pyjs_classtype(dstar_args) != 'dict') {
            throw (pyjslib.TypeError(func.__name__ + "() arguments after ** must be a dictionary " + pyjslib.repr(dstar_args)));
        }
        var i;
        /* use of __iter__ and next is horrendously expensive,
           use direct access to dictionary instead
         */
        for (var keys in dstar_args.__object) {
            var k = dstar_args.__object[keys][0];
            var v = dstar_args.__object[keys][1];

            if (pyjslib.var_remap.indexOf(k) >= 0) {
                k = '$$' + k;
            }
            if ($pyjs.options.arg_kwarg_multiple_values && typeof args[0][k] !=
 'undefined') {
                $pyjs__exception_func_multiple_values(func.__name__, k);
             }
            args[0][k] = v; 
        }

    }

    // Append star_args to args
    if (star_args) {
        if (star_args === null || typeof star_args.__iter__ != 'function') {
            throw (pyjslib.TypeError(func.__name__ + "() arguments after * must be a sequence" + pyjslib.repr(star_args)));
        }
        if (star_args.__array != null && star_args.__array.constructor == Array) {
            args = args.concat(star_args.__array);
        } else {

            /* use of __iter__ and next is horrendously expensive,
               use __len__ and __getitem__ instead, if they exist.
             */
            var call_args = Array();

            if (typeof star_args.__array != 'undefined') {
                var a = star_args.__array;
                var n = a.length;
                for (var i = 0; i < n; i++) {
                    call_args[i] = a[i];
                }
            } else {
                var $iter = star_args.__iter__();
                if (typeof $iter.__array != 'undefined') {
                    var a = $iter.__array;
                    var n = a.length;
                    for (var i = 0; i < n; i++) {
                        call_args[i] = a[i];
                    }
                } else if (typeof $iter.$genfun == 'function') {
                    var v, i = 0;
                    while (typeof (v = $iter.next(true)) != 'undefined') {
                        call_args[i++] = v;
                    }
                } else {
                    var i = 0;
                    try {
                        while (true) {
                            call_args[i++]=$iter.next();
                        }
                    } catch (e) {
                        if (e.__name__ != 'StopIteration') {
                            throw e;
                        }
                    }
                }
            }
            args = args.concat(call_args);
        }
    }

    // Now convert args to call_args
    // args = __kwargs, arg1, arg2, ...
    // _args = arg1, arg2, arg3, ... [*args, [**kwargs]]
    var _args = [];

    // Get function/method arguments
    if (typeof func.__args__ != 'undefined') {
        var __args__ = func.__args__;
    } else {
        var __args__ = new Array(null, null);
    }

    var a, aname, _idx , idx, res;
    _idx = idx = 1;
    if (obj === null) {
        if (func.__is_instance__ === false) {
            // Skip first argument in __args__
            _idx ++;
        }
    } else {
        if (typeof obj.__is_instance__ == 'undefined' && typeof func.__is_instance__ != 'undefined' && func.__is_instance__ === false) {
            // Skip first argument in __args__
            _idx ++;
        } else if (func.__bind_type__ > 0 && func.__bind_type__ < 3) {
            if (typeof args[1] == 'undefined' || obj.__is_instance__ !== false || args[1].__is_instance__ !== true) {
                // Skip first argument in __args__
                _idx ++;
            }
        }
    }
    for (++_idx; _idx < __args__.length; _idx++, idx++) {
        aname = __args__[_idx][0];
        a = args[0][aname];
        if (typeof args[idx] == 'undefined') {
            _args.push(a);
            delete args[0][aname];
        } else {
            if (typeof a != 'undefined') $pyjs__exception_func_multiple_values(func.__name__, aname);
            _args.push(args[idx]);
        }
    }

    // Append the left-over args
    for (;idx < args.length;idx++) {
        if (typeof args[idx] != 'undefined') {
            _args.push(args[idx]);
        }
    }
    // Remove trailing undefineds
    while (_args.length > 0 && typeof _args[_args.length-1] == 'undefined') {
        _args.pop();
    }

    if (__args__[1] === null) {
        // Check for unexpected keyword
        for (var kwname in args[0]) {
            $pyjs__exception_func_unexpected_keyword(func.__name__, kwname);
        }
        return func.apply(obj, _args);
    }
    a = pyjslib.dict(args[0]);
    if (a.__len__() > 0) {
        a['$pyjs_is_kwarg'] = true;
        _args.push(a);
    }
    res = func.apply(obj, _args);
    delete a['$pyjs_is_kwarg'];
    return res;
}

function $pyjs__exception_func_param(func_name, minargs, maxargs, nargs) {
    if (minargs == maxargs) {
        switch (minargs) {
            case 0:
                var msg = func_name + "() takes no arguments (" + nargs + " given)";
                break;
            case 1:
                msg = func_name + "() takes exactly " + minargs + " argument (" + nargs + " given)";
                break;
            default:
                msg = func_name + "() takes exactly " + minargs + " arguments (" + nargs + " given)";
        };
    } else if (nargs > maxargs) {
        if (maxargs == 1) {
            msg  = func_name + "() takes at most " + maxargs + " argument (" + nargs + " given)";
        } else {
            msg = func_name + "() takes at most " + maxargs + " arguments (" + nargs + " given)";
        }
    } else if (nargs < minargs) {
        if (minargs == 1) {
            msg = func_name + "() takes at least " + minargs + " argument (" + nargs + " given)";
        } else {
            msg = func_name + "() takes at least " + minargs + " arguments (" + nargs + " given)";
        }
    } else {
        return;
    }
    if (typeof pyjslib.TypeError == 'function') {
        throw pyjslib.TypeError(String(msg));
    }
    throw msg;
}

function $pyjs__exception_func_multiple_values(func_name, key) {
    //throw func_name + "() got multiple values for keyword argument '" + key + "'";
    throw pyjslib.TypeError(String(func_name + "() got multiple values for keyword argument '" + key + "'"));
}

function $pyjs__exception_func_unexpected_keyword(func_name, key) {
    //throw func_name + "() got an unexpected keyword argument '" + key + "'";
    throw pyjslib.TypeError(String(func_name + "() got an unexpected keyword argument '" + key + "'"));
}

function $pyjs__exception_func_class_expected(func_name, class_name, instance) {
        if (typeof instance == 'undefined') {
            instance = 'nothing';
        } else if (instance.__is_instance__ == null) {
            instance = "'"+String(instance)+"'";
        } else {
            instance = String(instance);
        }
        //throw "unbound method "+func_name+"() must be called with "+class_name+" class as first argument (got "+instance+" instead)";
        throw pyjslib.TypeError(String("unbound method "+func_name+"() must be called with "+class_name+" class as first argument (got "+instance+" instead)"));
}

function $pyjs__exception_func_instance_expected(func_name, class_name, instance) {
        if (typeof instance == 'undefined') {
            instance = 'nothing';
        } else if (instance.__is_instance__ == null) {
            instance = "'"+String(instance)+"'";
        } else {
            instance = String(instance);
        }
        //throw "unbound method "+func_name+"() must be called with "+class_name+" instance as first argument (got "+instance+" instead)";
        throw pyjslib.TypeError(String("unbound method "+func_name+"() must be called with "+class_name+" instance as first argument (got "+instance+" instead)"));
}

function $pyjs__bind_method(klass, func_name, func, bind_type, args) {
    func.__class__ = klass;
    return $pyjs__bind_method2(func_name, func, bind_type, args);
}

function $pyjs__bind_method2(func_name, func, bind_type, args) {
    func.__name__ = func.func_name = func_name;
    func.__bind_type__ = bind_type;
    func.__args__ = args;
    func.prototype = func;
    return func;
}

function $pyjs__decorated_method(func_name, func, bind_type) {
    var helper = function (){
      var args;
      if (typeof func.__methoddecorator__ == "undefined")
      {
        // add explicit "self" into arguments
        args=[this];
        for (var i=0;i<arguments.length;i++)
          { args.push(arguments[i]); } // concat is not working :-S
      } else {
        args = arguments;
      }
      return func.apply(this, args);
    };

    helper.__name__ = helper.helper_name = func_name;
    helper.__bind_type__ = bind_type;
    helper.__methoddecorator__ = true;
    helper.prototype = helper;
    return helper;
}

function $pyjs__instancemethod(klass, func_name, func, bind_type, args) {
    var fn = function () {
        var _this = this;
        var argstart = 0;
        if (this.__is_instance__ !== true && arguments.length > 0) {
            _this = arguments[0];
            argstart = 1;
        }
        var args = [_this].concat($pyjs_array_slice.call(arguments, argstart));
        if ($pyjs.options.arg_is_instance) {
            if (_this.__is_instance__ === true) {
                if ($pyjs.options.arg_instance_type) return func.apply(this, args);
                for (var c in _this.__mro__) {
                    var cls = _this.__mro__[c];
                    if (cls == klass) {
                        return func.apply(this, args);
                    }
                }
            }
            $pyjs__exception_func_instance_expected(func_name, klass.__name__, _this);
        }
        return func.apply(this, args);
    };
    func.__name__ = func.func_name = func_name;
    func.__bind_type__ = bind_type;
    func.__args__ = args;
    func.__class__ = klass;
    return fn;
}

function $pyjs__staticmethod(klass, func_name, func, bind_type, args) {
    func.__name__ = func.func_name = func_name;
    func.__bind_type__ = bind_type;
    func.__args__ = args;
    func.__class__ = klass;
    return func;
}

function $pyjs__classmethod(klass, func_name, func, bind_type, args) {
    var fn = function () {
        if ($pyjs.options.arg_is_instance && this.__is_instance__ !== true && this.__is_instance__ !== false) $pyjs__exception_func_instance_expected(func_name, klass.__name__);
        var args = [this.prototype].concat($pyjs_array_slice.call(arguments));
        return func.apply(this, args);
    };
    func.__name__ = func.func_name = func_name;
    func.__bind_type__ = bind_type;
    func.__args__ = args;
    func.__class__ = klass;
    return fn;
}

function $pyjs__subclasses__(cls_obj) {
    return cls_obj.__sub_classes__;
}

function $pyjs__mro_merge(seqs) {
    var res = new Array();
    var i = 0;
    var cand = null;
    function resolve_error(candidates) {
        //throw "Cannot create a consistent method resolution order (MRO) for bases " + candidates[0].__name__ + ", "+ candidates[1].__name__;
        throw (pyjslib.TypeError("Cannot create a consistent method resolution order (MRO) for bases " + candidates[0].__name__ + ", "+ candidates[1].__name__));
    }
    for (;;) {
        var nonemptyseqs = new Array();
        for (var j = 0; j < seqs.length; j++) {
            if (seqs[j].length > 0) nonemptyseqs.push(seqs[j]);
        }
        if (nonemptyseqs.length == 0) return res;
        i++;
        var candidates = new Array();
        for (var j = 0; j < nonemptyseqs.length; j++) {
            cand = nonemptyseqs[j][0];
            candidates.push(cand);
            var nothead = new Array();
            for (var k = 0; k < nonemptyseqs.length; k++) {
                for (var m = 1; m < nonemptyseqs[k].length; m++) {
                    if (cand === nonemptyseqs[k][m]) {
                        nothead.push(nonemptyseqs[k]);
                    }
                }
            }
            if (nothead.length != 0)
                cand = null; // reject candidate
            else
                break;
        }
        if (cand == null) {
            resolve_error(candidates);
        }
        res.push(cand);
        for (var j = 0; j < nonemptyseqs.length; j++) {
            if (nonemptyseqs[j][0] === cand) {
                nonemptyseqs[j].shift();
            }
        }
    }
}

function $pyjs__class_instance(class_name, module_name) {
    if (typeof module_name == 'undefined') module_name = typeof __mod_name__ == 'undefined' ? '__main__' : __mod_name__;
    var cls_fn = function(){
        var args, instance;
        if (cls_fn.__number__ !== null) {
            instance = cls_fn.__new__.apply(null, [cls_fn, arguments[0]]);
            args = arguments;
        } else {
            args = [cls_fn];
            for (var i=0; i<arguments.length; i++) {
                args.push(arguments[i]);
            }
            var kwargs = null;
            if (arguments.length >= 1) {
                var maybe_kwargs = args[args.length-1];
                if (maybe_kwargs && typeof maybe_kwargs == 'object' && maybe_kwargs.__name__ == 'dict' && typeof maybe_kwargs.$pyjs_is_kwarg != 'undefined') {
                    kwargs = maybe_kwargs.copy();
                    kwargs.$pyjs_is_kwarg = true;
                }
            }
            instance = cls_fn.__new__.apply(null, args);
            if (kwargs != null) {
                args.shift();
                args[args.length-1] = kwargs;
            } else {
                args = arguments;
            }
        }
        if (typeof instance.__init__ == 'function' && !instance.__init__.__$pyjs_autogenerated__ /* && pyjslib['isinstance'](instance, cls_fn) */) {
            if (instance.__init__.apply(instance, args) != null) {
                //throw '__init__() should return None';
                throw pyjslib.TypeError('__init__() should return None');
            }
        }
        return instance;
    };
    cls_fn.__name__ = class_name;
    cls_fn.__module__ = module_name;
    cls_fn.__class__ = pyjslib['type'];
    cls_fn.toString = function() { return this.__str__();};
    return cls_fn;
}

function $pyjs__class_function(cls_fn, prop, bases) {
    if (typeof cls_fn != 'function') throw "compiler error? $pyjs__class_function: typeof cls_fn != 'function'";
    var class_name = cls_fn.__name__;
    var class_module = cls_fn.__module__;
    cls_fn.__number__ = null;
    var base_mro_list = new Array();
    for (var i = 0; i < bases.length; i++) {
        if (bases[i].__mro__ != null) {
            base_mro_list.push(new Array().concat(bases[i].__mro__));
        } else if (typeof bases[i].__class__ == 'function') {
            base_mro_list.push(new Array().concat([bases[i].__class__]));
        } else if (typeof bases[i].prototype == 'function') {
            base_mro_list.push(new Array().concat([bases[i].prototype]));
        }
    }
    var __mro__ = $pyjs__mro_merge(base_mro_list);

    for (var b = __mro__.length-1; b >= 0; b--) {
        var base = __mro__[b];
        for (var p in base) cls_fn[p] = base[p];
    }
    for (var p in prop) cls_fn[p] = prop[p];

    if (cls_fn['__new__'] == null) {
      cls_fn['__new__'] = $pyjs__bind_method(cls_fn, '__new__', function(cls) {
        if (cls.__init__.__$pyjs_autogenerated__ && $pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
        var instance = function () {};
        instance.prototype = arguments[0].prototype;
        instance = new instance();
        instance.__class__ = instance.prototype;
        instance.__dict__ = instance;
        instance.__is_instance__ = true;
        return instance;
      }, 1, ['cls']);
    }
    if (cls_fn['__init__'] == null) {
      cls_fn['__init__'] = $pyjs__bind_method(cls_fn, '__init__', function () {
        if (this.__is_instance__ === true) {
            var self = this;
            if ($pyjs.options.arg_count && arguments.length != 0) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length+1);
        } else {
            var self = arguments[0];
            if ($pyjs.options.arg_is_instance && self.__is_instance__ !== true) $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
            if ($pyjs.options.arg_count && arguments.length != 1) $pyjs__exception_func_param(arguments.callee.__name__, 1, 1, arguments.length);
        }
        if ($pyjs.options.arg_instance_type) {
            if (arguments.callee !== arguments.callee.__class__[arguments.callee.__name__]) {
                if (!pyjslib._isinstance(self, arguments.callee.__class__.slice(1))) {
                    $pyjs__exception_func_instance_expected(arguments.callee.__name__, arguments.callee.__class__.__name__, self);
                }
            }
        }
      }, 1, ['self']);
      cls_fn['__init__'].__$pyjs_autogenerated__ = true;
    }
    cls_fn.__name__ = class_name;
    cls_fn.__module__ = class_module;
    //cls_fn.__mro__ = pyjslib.list(new Array(cls_fn).concat(__mro__));
    cls_fn.__mro__ = new Array(cls_fn).concat(__mro__);
    cls_fn.prototype = cls_fn;
    cls_fn.__dict__ = cls_fn;
    cls_fn.__is_instance__ = false;
    cls_fn.__super_classes__ = bases;
    cls_fn.__sub_classes__ = new Array();
    for (var i = 0; i < bases.length; i++) {
        if (typeof bases[i].__sub_classes__ == 'array') {
            bases[i].__sub_classes__.push(cls_fn);
        } else {
            bases[i].__sub_classes__ = new Array();
            bases[i].__sub_classes__.push(cls_fn);
        }
    }
    cls_fn.__args__ = cls_fn.__init__.__args__;
    return cls_fn;
}

/* creates a class, derived from bases, with methods and variables */
function $pyjs_type(clsname, bases, methods)
{
    var cls_instance = $pyjs__class_instance(clsname, methods['__module__']);
    var obj = new Object;
    for (var i in methods) {
        if (typeof methods[i] == 'function' && typeof methods[i].__class__ == 'undefined') {
            if (methods[i].__bind_type__ > 0) {
                methods[i].__class__ = cls_instance;
                obj[i] = methods[i];
            } else {
                obj[i] = $pyjs__instancemethod(cls_instance, i, methods[i], methods[i].__bind_type__, methods[i].__args__);
            }
        } else {
            obj[i] = methods[i];
        }
    }
    return $pyjs__class_function(cls_instance, obj, bases);
}


function $pyjs_varargs_handler(args, start, has_kwargs)
{
    var end;
    if (has_kwargs) {
        end = args.length-1;
        start = start - 1;
    } else {
        end = args.length;
    }
    pyjslib['tuple']($pyjs_array_slice.call(args, start, end));
}

function $pyjs_get_vararg_and_kwarg($l, args, kwargname, varargname,
                                    argcount, maxargs, minargs, maxargscheck)
{
    if (kwargname !== null) { /* if node.kwargs: */
        $l[kwargname] = args.length >= maxargs ? args[args.length-1] :
                                                  args[args.length];
        if (typeof $l[kwargname] != 'object' ||
            $l[kwargname].__name__ != 'dict' ||
            typeof $l[kwargname].$pyjs_is_kwarg == 'undefined') {
            if (varargname !== null) { /* if node.varargs: */
                if (typeof $l.kwargs != 'undefined') {
                    $l[varargname].__array.push($l[kwargname]);
                }
            }
            $l[kwargname] = args[args.length+1];
        } else {
            delete $l[kwargname].$pyjs_is_kwarg;
        }
    }
    /* TODO: if options.function_argument_checking */
    /*
    if self.function_argument_checking:
    if ($pyjs.options.arg_count && argcount) {
        $pyjs__exception_func_param(args.callee.__name__,
                                    minargs, maxargscheck, args.length+1);
    }
     */
}

/* creates local variables as an array based on method parameter specification
   and the caller's arguments (in args).
   this function mirrors exactly what Translator._instance_method_init
   produces (it has to).

   when generating code to call this function, defaults_count is passed in
   because otherwise it is necessary to count the callee __args__ list
   items [['arg1'], ['arg2', 'a default value']] and that would be a pain,
   repeated tons of times.

 */
function $pyjs_instance_method_get(inst, args,
                                    defaults_count, /* convenience */
                                    has_varargs, has_kwargs)
{
    /* TODO: pass these in, to save time */
    var callee_args = args.callee.__args__;
    var varargname = callee_args[0]; 
    var kwargname = callee_args[1]; 
    var arg_names = callee_args.slice(2); 

    console.debug(inst.__name__ + " " + args.callee.__name__ + " isinst " + inst.__is_instance__ + " hva " + has_varargs + " hkwa " + has_kwargs + " va " + varargname + " kw " + kwargname + " al " + arg_names.length);

    var $l = {};
    var end;
    var maxargs1 = arg_names.length - 1; /* for __is_instance__ === false */
    var maxargs2 = arg_names.length; /* for __is_instance__ === true */
    var maxargs1check = maxargs1;
    var maxargs2check = maxargs2;
    var minargs1 = maxargs1 - defaults_count;
    var minargs2 = maxargs2 - defaults_count;
    var argcount1;
    var argcount2;

    if (has_kwargs) {
        maxargs1 = maxargs1 + 1;
        maxargs2 = maxargs2 + 1;
    }
    /* for __instance__ === false */
    if (has_varargs) {
        argcount1 = args.length < minargs1;
        maxargs1check = null;
    } else if (minargs1 == maxargs1) {
        argcount1 = args.length != minargs1;
    } else {
        argcount1 = args.length < minargs1 || args.length > maxargs1;
    }
    /* for __instance__ === true */
    if (has_varargs) {
        argcount2 = args.length < minargs2;
        maxargs2check = null;
    } else if (minargs2 == maxargs2) {
        argcount2 = args.length != minargs2;
    } else {
        argcount2 = args.length < minargs2 || args.length > maxargs2;
    }

    if (inst.__is_instance__ === true) {

        $l['self'] = inst;

        if (varargname !== null) { /* if node.varargs: */
            /* self._varargs_handler(varargname, maxargs1) */
            $l[varargname] = $pyjs_varargs_handler(args, maxargs1, has_kwargs);
        }

        $pyjs_get_vararg_and_kwarg($l, args, kwargname, varargname, argcount1,
                                   maxargs1, minargs2, maxargs2check);
        for (i = 1; i < arg_names.length; i++)
        {
            var arg_name = arg_names[i][0];
            $l[arg_name] = args[i-1];
        }
    } else {

        if (arg_names.length > 0)
        {
            $l['self'] = args[0];
        }

        if (varargname !== null) { /* if node.varargs: */
            /* self._varargs_handler(varargname, maxargs1) */
            $l[varargname] = $pyjs_varargs_handler(args, maxargs2, has_kwargs);
        }

        $pyjs_get_vararg_and_kwarg($l, args, kwargname, varargname, argcount1,
                                   maxargs2, minargs2, maxargs2check);
        for (i = 1; i < arg_names.length; i++)
        {
            var arg_name = arg_names[i][0];
            $l[arg_name] = args[i];
        }
    }

    var res = '';
    for (i = 0; i < arg_names.length; i++)
    {
        var arg_name = arg_names[i][0];
        res = res + arg_name + " ";
    }

    console.debug("arg names " + res);

    /* TODO: function arg checking */
    /*
        if arg_names and self.function_argument_checking:
            self.w( """\
if ($pyjs.options.arg_instance_type) {
\tif (%(self)s.prototype.__md5__ !== '%(__md5__)s') {
\t\tif (!@{{_isinstance}}(%(self)s, arguments['callee']['__class__'])) {
\t\t\t$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], %(self)s);
\t\t}
\t}
}\
""" % {'self': arg_names[0], '__md5__': current_klass.__md5__}, output=output)
    */
    $pyjs_default_args_handler($l, args, defaults_count, 
                                    has_varargs, has_kwargs);

    var i = 0;
    var res = '';
    for (var k in $l) {
        res = res + k + " ";
    }
    console.debug("arg keys " + res);
    return $l;
}

function $pyjsdf(arg, alternate)
{
    //console.debug("pyjsdf " + arg + " default " + alternate);
    if (typeof arg == 'undefined') {
        return alternate;
    }
    return arg;
}

/* this function mirrors _default_args_handler
 */
function $pyjs_default_args_handler($l, args, defaults_count, 
                                    has_varargs, has_kwargs)
{
    /* TODO: pass these in, to save time */
    var callee_args = args.callee.__args__;
    var varargname = callee_args[0]; 
    var kwargname = callee_args[1]; 
    var arg_names = callee_args.slice(2); 

    if (has_kwargs
        && kwargname !== null
        && typeof $l[kwargname] == 'undefined')
    {
        /*
            # This is necessary when **kwargs in function definition
            # and the call didn't pass the pyjs_kwargs_call().
            # See libtest testKwArgsInherit
            # This is not completely safe: if the last element in arguments 
            # is an dict and the corresponding argument shoud be a dict and 
            # the kwargs should be empty, the kwargs gets incorrectly the 
            # dict and the argument becomes undefined.
            # E.g.
            # def fn(a = {}, **kwargs): pass
            # fn({'a':1}) -> a gets undefined and kwargs gets {'a':1}
        */
        $l[kwargname] = pyjslib['__empty_dict']();
        for (var i = arg_names.length-1; i >= 0; --i)
        {
            var arg_name = arg_names[i][0];
            if (typeof $l[arg_name] != 'undefined')
            {
                if($l[arg_name] !== null
                   && typeof $l[arg_name].$pyjs_is_kwarg != 'undefined')
                {
                    $l[kwargname] = $l[arg_name];
                    $l[arg_name] = args[i];
                    break;
                }
            }
        }
    }
    var default_pos = arg_names.length - defaults_count;
    console.debug("default_pos " + default_pos + " count " + defaults_count);
    for (var i = 0; i < defaults_count; i++)
    {
        var default_name = arg_names[default_pos][0];
        console.debug("default_name " + default_name);
        default_pos++;
        if (typeof $l[default_name] == 'undefined')
        {
            $l[default_name] = callee_args[default_pos+1][1];
        }
    }
}



/* start module: dynamic */
$pyjs.loaded_modules['dynamic'] = function (__mod_name__) {
	if($pyjs.loaded_modules['dynamic'].__was_initialized__) return $pyjs.loaded_modules['dynamic'];
	var $m = $pyjs.loaded_modules["dynamic"];
	$m.__repr__ = function() { return "<module: dynamic>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'dynamic';
	$m.__name__ = __mod_name__;


 	return this;
}; /* end dynamic */


/* end module: dynamic */




/* start module: easy */
$pyjs.loaded_modules['easy'] = function (__mod_name__) {
	if($pyjs.loaded_modules['easy'].__was_initialized__) return $pyjs.loaded_modules['easy'];
	var $m = $pyjs.loaded_modules["easy"];
	$m.__repr__ = function() { return "<module: easy>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'easy';
	$m.__name__ = __mod_name__;


	$m['j'] = jQuery;
	$m['ObjectRowWidget'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'easy';
		$method = $pyjs__bind_method2('__init__', function(as_json) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				as_json = arguments[1];
			}
			var $attr8,$iter1_nextval,$iter1_type,$attr1,$attr2,$attr5,$attr4,$attr7,$attr6,$assign1,$iter1_array,v,k,$iter1_iter,data,$attr3,$iter1_idx;
			$assign1 = $p['dict'](as_json);
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('data', $assign1) : $p['setattr'](self, 'data', $assign1);
			data = $assign1;
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('div', $m['j']('\x3Cdiv\x3E')['addClass']('object_row')) : $p['setattr'](self, 'div', $m['j']('\x3Cdiv\x3E')['addClass']('object_row'));
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('button_funcs', $p['list']([(($attr1=($attr2=self)['details_button']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
						$p['getattr']($attr2, 'details_button'):
						self['details_button']), (($attr3=($attr4=self)['graphs_button']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
						$p['getattr']($attr4, 'graphs_button'):
						self['graphs_button']), (($attr5=($attr6=self)['edit_button']) == null || (($attr6.__is_instance__) && typeof $attr5 == 'function') || (typeof $attr5['__get__'] == 'function')?
						$p['getattr']($attr6, 'edit_button'):
						self['edit_button']), (($attr7=($attr8=self)['delete_button']) == null || (($attr8.__is_instance__) && typeof $attr7 == 'function') || (typeof $attr7['__get__'] == 'function')?
						$p['getattr']($attr8, 'delete_button'):
						self['delete_button'])])) : $p['setattr'](self, 'button_funcs', $p['list']([(($attr1=($attr2=self)['details_button']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
						$p['getattr']($attr2, 'details_button'):
						self['details_button']), (($attr3=($attr4=self)['graphs_button']) == null || (($attr4.__is_instance__) && typeof $attr3 == 'function') || (typeof $attr3['__get__'] == 'function')?
						$p['getattr']($attr4, 'graphs_button'):
						self['graphs_button']), (($attr5=($attr6=self)['edit_button']) == null || (($attr6.__is_instance__) && typeof $attr5 == 'function') || (typeof $attr5['__get__'] == 'function')?
						$p['getattr']($attr6, 'edit_button'):
						self['edit_button']), (($attr7=($attr8=self)['delete_button']) == null || (($attr8.__is_instance__) && typeof $attr7 == 'function') || (typeof $attr7['__get__'] == 'function')?
						$p['getattr']($attr8, 'delete_button'):
						self['delete_button'])]));
			$iter1_iter = data['items']();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,true);
			while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
				k = $iter1_nextval.$nextval.__array[0];
				v = $iter1_nextval.$nextval.__array[1];
				$p['setattr'](self, k, v);
			}
			return null;
		}
	, 1, [null,null,['self'],['as_json']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('render', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr9,$attr10;
			self['div']['empty']();
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('bottom_panel', $m['j']('\x3Cdiv\x3E')) : $p['setattr'](self, 'bottom_panel', $m['j']('\x3Cdiv\x3E'));
			self['bottom_panel']['addClass']('bottom_panel');
			self['div']['html']();
			self['div']['append'](self['name_label']());
			self['div']['append'](self['tab_div']());
			return (($attr9=($attr10=self)['div']) == null || (($attr10.__is_instance__) && typeof $attr9 == 'function') || (typeof $attr9['__get__'] == 'function')?
						$p['getattr']($attr10, 'div'):
						self['div']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['render'] = $method;
		$method = $pyjs__bind_method2('control_link', function(html) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				html = arguments[1];
			}

			return $m['j']('\x3Cli\x3E')['html'](html);
		}
	, 1, [null,null,['self'],['html']]);
		$cls_definition['control_link'] = $method;
		$method = $pyjs__bind_method2('tab_div', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter2_nextval,$iter2_type,$iter2_iter,ul,$iter2_idx,b,$attr11,$iter2_array,$attr12;
			ul = $m['j']('\x3Cul\x3E');
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('tab_div', $m['j']('\x3Cdiv\x3E')['append'](ul)) : $p['setattr'](self, 'tab_div', $m['j']('\x3Cdiv\x3E')['append'](ul));
			$iter2_iter = self['button_funcs'];
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
				b = $iter2_nextval.$nextval;
				ul['append'](b());
			}
			self['tab_div']['tabs']();
			return (($attr11=($attr12=self)['tab_div']) == null || (($attr12.__is_instance__) && typeof $attr11 == 'function') || (typeof $attr11['__get__'] == 'function')?
						$p['getattr']($attr12, 'tab_div'):
						self['tab_div']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['tab_div'] = $method;
		$method = $pyjs__bind_method2('name_label', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr14,$attr13;
			return $m['j']('\x3Cspan\x3E')['addClass']('name')['html']((($attr13=($attr14=self)['nickname']) == null || (($attr14.__is_instance__) && typeof $attr13 == 'function') || (typeof $attr13['__get__'] == 'function')?
						$p['getattr']($attr14, 'nickname'):
						self['nickname']));
		}
	, 1, [null,null,['self']]);
		$cls_definition['name_label'] = $method;
		$method = $pyjs__bind_method2('UITab', function(name, href, contents, display_name) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				href = arguments[2];
				contents = arguments[3];
				display_name = arguments[4];
			}
			if (typeof href == 'undefined') href=arguments.callee.__args__[4][1];
			if (typeof contents == 'undefined') contents=arguments.callee.__args__[5][1];
			if (typeof display_name == 'undefined') display_name=arguments.callee.__args__[6][1];
			var $or4,$or1,$or3,$or2,$and1,$and2,div,button;
			button = $m['j']('\x3Ca\x3E')['html'](($p['bool']($or1=display_name)?$or1:name));
			button['attr']('href', ($p['bool']($or3=href)?$or3:$p['sprintf']('#%s', name)));
			$p['setattr'](self, $p['sprintf']('%s_button', name), button);
			if ($p['bool'](($p['bool']($and1=!$p['bool'](href))?contents:$and1))) {
				div = $m['j']('\x3Cdiv\x3E')['html'](contents)['attr']('id', name);
				$p['setattr'](self, '%s_panel', div);
				self['tab_div']['append'](div);
			}
			return self['control_link'](button);
		}
	, 1, [null,null,['self'],['name'],['href', null],['contents', null],['display_name', null]]);
		$cls_definition['UITab'] = $method;
		$method = $pyjs__bind_method2('details_button', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $and3,$and4,opts;
			opts = $p['dict']([['display_name', 'Details']]);
			opts.__setitem__('href', self['get_template']('details_url'));
			opts.__setitem__('contents', self['get_template']('details_contents'));
			if ($p['bool'](($p['bool']($and3=!$p['bool'](opts.__contains__('href')))?!$p['bool'](opts.__contains__('contents')):$and3))) {
				return null;
			}
			return $pyjs_kwargs_call(self, 'UITab', null, opts, [{}, 'details']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['details_button'] = $method;
		$method = $pyjs__bind_method2('edit_button', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $and6,$and5,opts;
			opts = $p['dict']([['display_name', 'Edit']]);
			opts.__setitem__('href', self['get_template']('edit_form_url'));
			opts.__setitem__('contents', self['get_template']('edit_form_contents'));
			if ($p['bool'](($p['bool']($and5=!$p['bool'](opts.__contains__('href')))?!$p['bool'](opts.__contains__('contents')):$and5))) {
				return null;
			}
			return $pyjs_kwargs_call(self, 'UITab', null, opts, [{}, 'edit']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['edit_button'] = $method;
		$method = $pyjs__bind_method2('graphs_button', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $and8,opts,$and7;
			opts = $p['dict']([['display_name', 'Graphs']]);
			opts.__setitem__('href', self['get_template']('graphs_url'));
			opts.__setitem__('contents', self['get_template']('graphs_data'));
			if ($p['bool'](($p['bool']($and7=!$p['bool'](opts.__contains__('href')))?!$p['bool'](opts.__contains__('contents')):$and7))) {
				return null;
			}
			return $pyjs_kwargs_call(self, 'UITab', null, opts, [{}, 'graphs']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['graphs_button'] = $method;
		$method = $pyjs__bind_method2('delete_button', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $or5,$or6,$attr18,$attr15,$attr17,$attr16;
			if ($p['bool'](!$p['bool']($p['hasattr'](self, 'delete_url')))) {
				return null;
			}
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('delete_button', $m['j']('\x3Ca\x3E')['html']('Delete')) : $p['setattr'](self, 'delete_button', $m['j']('\x3Ca\x3E')['html']('Delete'));
			self['delete_button']['attr']('href', ($p['bool']($or5=self['get_template']('delete_url'))?$or5:'#'));
			self['delete_button']['bind']('click', (($attr15=($attr16=self)['confirm_delete']) == null || (($attr16.__is_instance__) && typeof $attr15 == 'function') || (typeof $attr15['__get__'] == 'function')?
						$p['getattr']($attr16, 'confirm_delete'):
						self['confirm_delete']));
			self['delete_button']['addClass']('delete');
			return (($attr17=($attr18=self)['delete_button']) == null || (($attr18.__is_instance__) && typeof $attr17 == 'function') || (typeof $attr17['__get__'] == 'function')?
						$p['getattr']($attr18, 'delete_button'):
						self['delete_button']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['delete_button'] = $method;
		$method = $pyjs__bind_method2('confirm_delete', function(e) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				e = arguments[1];
			}

			if ($p['bool'](!$p['bool'](confirm('Are you sure you want to delete this?')))) {
				e['preventDefault']();
			}
			return null;
		}
	, 1, [null,null,['self'],['e']]);
		$cls_definition['confirm_delete'] = $method;
		$method = $pyjs__bind_method2('template', function(tgt) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tgt = arguments[1];
			}
			var $iter3_idx,$iter3_type,v,$iter3_iter,$iter3_array,k,$iter3_nextval;
			$iter3_iter = self['data']['items']();
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,true);
			while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
				k = $iter3_nextval.$nextval.__array[0];
				v = $iter3_nextval.$nextval.__array[1];
				tgt = tgt['$$replace']($p['sprintf']('{%s}', k), v);
			}
			return tgt;
		}
	, 1, [null,null,['self'],['tgt']]);
		$cls_definition['template'] = $method;
		$method = $pyjs__bind_method2('get_template', function(tgt) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tgt = arguments[1];
			}

			if ($p['bool']($p['hasattr'](self, tgt))) {
				return self['template']($p['getattr'](self, tgt));
			}
			return null;
		}
	, 1, [null,null,['self'],['tgt']]);
		$cls_definition['get_template'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('ObjectRowWidget', $p['tuple']($bases), $data);
	})();
	$m['row_types'] = $p['dict']([]);
	$m['row_type_map'] = function(klass) {

		if ($p['bool'](!$p['bool']($m['row_types'].__contains__(klass)))) {
			return $m['ObjectRowWidget'];
		}
		return $m['row_types']['get'](klass, $m['ObjectRowWidget']);
	};
	$m['row_type_map'].__name__ = 'row_type_map';

	$m['row_type_map'].__bind_type__ = 0;
	$m['row_type_map'].__args__ = [null,null,['klass']];
	$m['loaded'] = function(event) {
		var $iter5_nextval,$attr20,$iter5_idx,$iter5_iter,div,$iter4_nextval,obj,$iter4_idx,objects,$attr19,klass,$iter4_type,$iter5_array,$iter4_array,$iter5_type,klass_row_type,$iter4_iter,row;
		$iter4_iter = $p['dict'](object_list)['items']();
		$iter4_nextval=$p['__iter_prepare']($iter4_iter,true);
		while (typeof($p['__wrapped_next']($iter4_nextval).$nextval) != 'undefined') {
			klass = $iter4_nextval.$nextval.__array[0];
			objects = $iter4_nextval.$nextval.__array[1];
			klass_row_type = $m['row_type_map'](klass);
			div = $m['j']($p['sprintf']('div.%s.object_list', klass));
			div['html']('');
			$iter5_iter = $p['list'](objects);
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval).$nextval) != 'undefined') {
				obj = $iter5_nextval.$nextval;
				row = klass_row_type(obj);
				row['render']();
				div['append']((($attr19=($attr20=row)['div']) == null || (($attr20.__is_instance__) && typeof $attr19 == 'function') || (typeof $attr19['__get__'] == 'function')?
							$p['getattr']($attr20, 'div'):
							row['div']));
			}
		}
		return null;
	};
	$m['loaded'].__name__ = 'loaded';

	$m['loaded'].__bind_type__ = 0;
	$m['loaded'].__args__ = [null,null,['event']];
	$m['j']($m['loaded']);
	$m['popup_obj'] = $m['j']('\x3Cdiv\x3E');
	$m['popup'] = function(data) {

		$m['popup_obj']['html'](data);
		$m['popup_obj']['dialog']($p['toJSObjects']($p['dict']([['width', 500]])));
		return null;
	};
	$m['popup'].__name__ = 'popup';

	$m['popup'].__bind_type__ = 0;
	$m['popup'].__args__ = [null,null,['data']];
	$m['handlers'] = function(event) {
		var ajax_modal;
		ajax_modal = function(event) {
			var $attr21,$attr22,href,ajax_complete;
			event['preventDefault']();
			href = $m['j']((($attr21=($attr22=event)['target']) == null || (($attr22.__is_instance__) && typeof $attr21 == 'function') || (typeof $attr21['__get__'] == 'function')?
						$p['getattr']($attr22, 'target'):
						event['target']))['attr']('href');
			ajax_complete = function(data, status, xhr) {

				$m['popup'](data);
				return null;
			};
			ajax_complete.__name__ = 'ajax_complete';

			ajax_complete.__bind_type__ = 0;
			ajax_complete.__args__ = [null,null,['data'],['status'],['xhr']];
			$m['j']['get'](href, '', ajax_complete);
			return null;
		};
		ajax_modal.__name__ = 'ajax_modal';

		ajax_modal.__bind_type__ = 0;
		ajax_modal.__args__ = [null,null,['event']];
		$m['j']('a.ajax')['die']('click');
		$m['j']('a.ajax')['live']('click', ajax_modal);
		return null;
	};
	$m['handlers'].__name__ = 'handlers';

	$m['handlers'].__bind_type__ = 0;
	$m['handlers'].__args__ = [null,null,['event']];
	$m['j']($m['handlers']);
	return this;
}; /* end easy */


/* end module: easy */




/* start module: pyjslib */
var pyjslib;
$pyjs.loaded_modules['pyjslib'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjslib'].__was_initialized__) return $pyjs.loaded_modules['pyjslib'];
	var $m = pyjslib = $pyjs.loaded_modules["pyjslib"];
	$m.__repr__ = function() { return "<module: pyjslib>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjslib';
	$m.__name__ = __mod_name__;
	var $add1,$add3,$add2,$add6,$add4,$add5;
	;
	$m['platform'] = $pyjs.platform;
	$m['sys'] = null;
	$m['dynamic'] = null;

var $max_float_int = 1;
for (var i = 0; i < 1000; i++) {
    $max_float_int *= 2;
    if ($max_float_int + 1 == $max_float_int) {
        break;
    }
}
$max_int = 0x7fffffff;
$min_int = -0x80000000;

	$m['_handle_exception'] = function(err) {
    $pyjs.loaded_modules['sys'].save_exception_stack();

    if (!$pyjs.in_try_except) {
        var $pyjs_msg = $pyjs.loaded_modules['sys']._get_traceback(err);
        $pyjs.__active_exception_stack__ = null;
        $p['printFunc']([$pyjs_msg], true);
        $p['debugReport']($pyjs_msg);
    }
    throw err;
};
;
	$m['_create_class'] = function(clsname, bases, methods) {
		if (typeof bases == 'undefined') bases=arguments.callee.__args__[3][1];
		if (typeof methods == 'undefined') methods=arguments.callee.__args__[4][1];
		var $and1,$and2,$and3,main_base;
		if ($p['bool'](($p['bool']($and1=bases)?($p['bool']($and2=$p['hasattr'](bases.__getitem__(0), '__class__'))?$p['hasattr'](bases.__getitem__(0), '__new__'):$and2):$and1))) {
			main_base = bases.__getitem__(0);
			return main_base['__class__'](clsname, bases, methods);
		}
		return $p['type'](clsname, bases, methods);
	};
	$m['_create_class'].__name__ = '_create_class';

	$m['_create_class'].__bind_type__ = 0;
	$m['_create_class'].__args__ = [null,null,['clsname'],['bases', null],['methods', null]];
	$m['type'] = function(clsname, bases, methods) {
		if (typeof bases == 'undefined') bases=arguments.callee.__args__[3][1];
		if (typeof methods == 'undefined') methods=arguments.callee.__args__[4][1];
		var $iter1_nextval,$iter1_idx,$attr1,k,$attr2,$and4,$and5,$iter1_iter,mth,$iter1_array,$iter1_type;
		if ($p['bool'](($p['bool']($and4=(bases === null))?(methods === null):$and4))) {
			if ($p['bool']($p['isinstance'](clsname, $p['str']))) {
				return $p['str'];
			}
			if ($p['bool']($p['isinstance'](clsname, $p['bool']))) {
				return $p['bool'];
			}
			if ($p['bool']($p['hasattr'](clsname, '__class__'))) {
				return clsname['__class__'];
			}
			if ($p['bool']($p['isinstance'](clsname, $p['float_int']))) {
				return $p['float_int'];
			}
			if ($p['bool']($p['isinstance'](clsname, $p['float']))) {
				return $p['float'];
			}
			if ($p['bool'](typeof clsname == 'number')) {
				return $p['float'];
			}
			throw ($p['ValueError']($p['sprintf']('Cannot determine type for %r', clsname)));
		}
 var mths = {}; 
		if ($p['bool'](methods)) {
			$iter1_iter = methods['keys']();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval).$nextval) != 'undefined') {
				k = $iter1_nextval.$nextval;
				mth = methods.__getitem__(k);
 mths[k] = mth; 
			}
		}
 var bss = null; 
		if ($p['bool'](bases)) {
bss = bases.__array;
		}
 return $pyjs_type(clsname, bss, mths); 
	};
	$m['type'].__name__ = 'type';

	$m['type'].__bind_type__ = 0;
	$m['type'].__args__ = [null,null,['clsname'],['bases', null],['methods', null]];
	$m['object'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'aaa62c5b0e27e4991970af910c700151';
		$method = $pyjs__bind_method2('__str__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

return (self.__is_instance__ === true ? "instance of " : "class ") + (self.__module__?self.__module__ + "." : "") + self.__name__;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$method = $pyjs__bind_method2('__setattr__', function(name, value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				value = arguments[2];
			}


        if (typeof name != 'string') {
            throw $p['TypeError']("attribute name must be string");
        }
        if (attrib_remap.indexOf(name) >= 0) {
            name = '$$' + name;
        }
        if (typeof self[name] != 'undefined'
            && self.__is_instance__
            && self[name] !== null
            && typeof self[name].__set__ == 'function') {
            self[name].__set__(self, value);
        } else {
            self[name] = value;
        }
        
		}
	, 1, [null,null,['self'],['name'],['value']]);
		$cls_definition['__setattr__'] = $method;
		var $bases = new Array();
		return $pyjs_type('object', $bases, $cls_definition);
	})();
	$m['basestring'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'e4d86062b41a007e59927cf97efd2d47';
		var $bases = new Array($m['object']);
		return $pyjs_type('basestring', $bases, $cls_definition);
	})();
	$m['op_is'] = function(a, b) {


    if (a === b) return true;
    if (a !== null && b !== null) {
        switch ((a.__number__ << 8) | b.__number__) {
            case 0x0101:
                return a == b;
            case 0x0202:
                return a.__v == b.__v;
            case 0x0404:
                return a.__cmp__(b) == 0;
        }
    }
    return false;

	};
	$m['op_is'].__name__ = 'op_is';

	$m['op_is'].__bind_type__ = 0;
	$m['op_is'].__args__ = [null,null,['a'],['b']];
	$m['op_eq'] = function(a, b) {


    if (a === null) {
        if (b === null) return true;
        return false;
    }
    if (b === null) {
        return false;
    }
    if (a === b) {
        if (a.__is_instance__ === false && 
            b.__is_instance__ === false) {
            return true;
        }
    }
    switch ((a.__number__ << 8) | b.__number__) {
        case 0x0101:
        case 0x0401:
            return a == b;
        case 0x0102:
            return a == b.__v;
        case 0x0201:
            return a.__v == b;
        case 0x0202:
            return a.__v == b.__v;
        case 0x0104:
        case 0x0204:
            a = new $p['float_int'](a.valueOf());
        case 0x0404:
            return a.__cmp__(b) == 0;
        case 0x0402:
            return a.__cmp__(new $p['float_int'](b.valueOf())) == 0;
    }
    if (typeof a == 'object' || typeof a == 'function') {
        if (typeof a.__eq__ == 'function') {
            if (typeof b.__eq__ != 'function') {
                return false;
            }
            if (a.__eq__ === b.__eq__) {
                return a.__eq__(b);
            }
            if ($p['_isinstance'](a, b)) {
                return a.__eq__(b);
            }
            return false;
        }
        if (typeof a.__cmp__ == 'function') {
            if (typeof b.__cmp__ != 'function') {
                return false;
            }
            if (a.__cmp__ === b.__cmp__) {
                return a.__cmp__(b) == 0;
            }
            if ($p['_isinstance'](a, b)) {
                return a.__cmp__(b) == 0;
            }
            return false;
        }
    } else if (typeof b == 'object' || typeof b == 'function') {
        if (typeof b.__eq__ == 'function') {
            if ($p['_isinstance'](a, b)) {
                return b.__eq__(a);
            }
            return false;
        }
        if (typeof b.__cmp__ == 'function') {
            // typeof bXXX.__cmp__ != 'function'
            // aXXX.__cmp__ !== bXXX.__cmp__
            if ($p['_isinstance'](a, b)) {
                return b.__cmp__(a) == 0;
            }
            return false;
        }
    }
    return a == b;
    
	};
	$m['op_eq'].__name__ = 'op_eq';

	$m['op_eq'].__bind_type__ = 0;
	$m['op_eq'].__args__ = [null,null,['a'],['b']];
	$m['op_uadd'] = function(v) {


    switch (v.__number__) {
        case 0x01:
        case 0x02:
        case 0x04:
            return v;
    }
    if (v!== null) {
        if (typeof v['__pos__'] == 'function') return v.__pos__();
    }

		throw ($p['TypeError']($p['sprintf']('bad operand type for unary +: \x27%r\x27', v)));
		return null;
	};
	$m['op_uadd'].__name__ = 'op_uadd';

	$m['op_uadd'].__bind_type__ = 0;
	$m['op_uadd'].__args__ = [null,null,['v']];
	$m['op_usub'] = function(v) {


    switch (v.__number__) {
        case 0x01:
            return -v;
        case 0x02:
            return new $p['float_int'](-v);
    }
    if (v!== null) {
        if (typeof v['__neg__'] == 'function') return v.__neg__();
    }

		throw ($p['TypeError']($p['sprintf']('bad operand type for unary -: \x27%r\x27', v)));
		return null;
	};
	$m['op_usub'].__name__ = 'op_usub';

	$m['op_usub'].__bind_type__ = 0;
	$m['op_usub'].__args__ = [null,null,['v']];
	$m['__op_add'] = function(x, y) {


        return (typeof (x)==typeof (y) && 
                (typeof x=='number'||typeof x=='string')?
                x+y:
                $p['op_add'](x,y));
    
	};
	$m['__op_add'].__name__ = '__op_add';

	$m['__op_add'].__bind_type__ = 0;
	$m['__op_add'].__args__ = [null,null,['x'],['y']];
	$m['op_add'] = function(x, y) {


    if (x!== null && y!== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                return x+ y;
            case 0x0102:
                return x+ y.__v;
            case 0x0201:
                return x.__v + y;
            case 0x0202:
                return new $p['float_int'](x.__v + y.__v);
            case 0x0204:
                return (new $p['float_int'](x.__v)).__add(y);
            case 0x0402:
                return x.__add(new $p['float_int'](y.__v));
            case 0x0404:
                return x.__add(y);
        }
        if (!x.__number__) {
            if (typeof x== 'string' && typeof y== 'string') return x+ y;
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && $p['isinstance'](x, y)
                && typeof x['__add__'] == 'function')
                return y.__add__(x);
            if (typeof x['__add__'] == 'function') return x.__add__(y);
        }
        if (!y.__number__ && typeof y['__radd__'] == 'function') return y.__radd__(x);
    }

		throw ($p['TypeError']($p['sprintf']('unsupported operand type(s) for +: \x27%r\x27, \x27%r\x27', $p['tuple']([x, y]))));
		return null;
	};
	$m['op_add'].__name__ = 'op_add';

	$m['op_add'].__bind_type__ = 0;
	$m['op_add'].__args__ = [null,null,['x'],['y']];
	$m['__op_sub'] = function(x, y) {


        return (typeof (x)==typeof (y) && 
                (typeof x=='number'||typeof x=='string')?
                x-y:
                $p['op_sub'](x,y));
    
	};
	$m['__op_sub'].__name__ = '__op_sub';

	$m['__op_sub'].__bind_type__ = 0;
	$m['__op_sub'].__args__ = [null,null,['x'],['y']];
	$m['op_sub'] = function(x, y) {


    if (x!== null && y!== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                return x- y;
            case 0x0102:
                return x- y.__v;
            case 0x0201:
                return x.__v - y;
            case 0x0202:
                return new $p['float_int'](x.__v - y.__v);
            case 0x0204:
                return (new $p['float_int'](x.__v)).__sub(y);
            case 0x0402:
                return x.__sub(new $p['float_int'](y.__v));
            case 0x0404:
                return x.__sub(y);
        }
        if (!x.__number__) {
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && $p['isinstance'](x, y)
                && typeof x['__sub__'] == 'function')
                return y.__sub__(x);
            if (typeof x['__sub__'] == 'function') return x.__sub__(y);
        }
        if (!y.__number__ && typeof y['__rsub__'] == 'function') return y.__rsub__(x);
    }

		throw ($p['TypeError']($p['sprintf']('unsupported operand type(s) for -: \x27%r\x27, \x27%r\x27', $p['tuple']([x, y]))));
		return null;
	};
	$m['op_sub'].__name__ = 'op_sub';

	$m['op_sub'].__bind_type__ = 0;
	$m['op_sub'].__args__ = [null,null,['x'],['y']];
	$m['op_floordiv'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return Math.floor(x / y);
            case 0x0102:
                if (y.__v == 0) throw $p['ZeroDivisionError']('float divmod()');
                return Math.floor(x / y.__v);
            case 0x0201:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return Math.floor(x.__v / y);
            case 0x0202:
                if (y.__v == 0) throw $p['ZeroDivisionError']('integer division or modulo by zero');
                return new $p['float_int'](Math.floor(x.__v / y.__v));
            case 0x0204:
                return (new $p['float_int'](x.__v)).__floordiv(y);
            case 0x0402:
                return x.__floordiv(new $p['float_int'](y.__v));
            case 0x0404:
                return x.__floordiv(y);
        }
        if (!x.__number__) {
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && $p['isinstance'](x, y)
                && typeof x['__floordiv__'] == 'function')
                return y.__floordiv__(x);
            if (typeof x['__floordiv__'] == 'function') return x.__floordiv__(y);
        }
        if (!y.__number__ && typeof y['__rfloordiv__'] == 'function') return y.__rfloordiv__(x);
    }

		throw ($p['TypeError']($p['sprintf']('unsupported operand type(s) for //: \x27%r\x27, \x27%r\x27', $p['tuple']([x, y]))));
		return null;
	};
	$m['op_floordiv'].__name__ = 'op_floordiv';

	$m['op_floordiv'].__bind_type__ = 0;
	$m['op_floordiv'].__args__ = [null,null,['x'],['y']];
	$m['op_div'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return x / y;
            case 0x0102:
                if (y.__v == 0) throw $p['ZeroDivisionError']('float divmod()');
                return x / y.__v;
            case 0x0201:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return x.__v / y;
            case 0x0202:
                if (y.__v == 0) throw $p['ZeroDivisionError']('float divmod()');
                return new $p['float_int'](x.__v / y.__v);
            case 0x0204:
                return (new $p['float_int'](x.__v)).__div(y);
            case 0x0402:
                return x.__div(new $p['float_int'](y.__v));
            case 0x0404:
                return x.__div(y);
        }
        if (!x.__number__) {
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && $p['isinstance'](x, y)
                && typeof x['__div__'] == 'function')
                return y.__div__(x);
            if (typeof x['__div__'] == 'function') return x.__div__(y);
        }
        if (!y.__number__ && typeof y['__rdiv__'] == 'function') return y.__rdiv__(x);
    }

		throw ($p['TypeError']($p['sprintf']('unsupported operand type(s) for /: \x27%r\x27, \x27%r\x27', $p['tuple']([x, y]))));
		return null;
	};
	$m['op_div'].__name__ = 'op_div';

	$m['op_div'].__bind_type__ = 0;
	$m['op_div'].__args__ = [null,null,['x'],['y']];
	$m['op_truediv'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
            case 0x0204:
            case 0x0402:
            case 0x0404:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return x / y;
            case 0x0102:
                if (y.__v == 0) throw $p['ZeroDivisionError']('float divmod()');
                return x / y.__v;
            case 0x0201:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return x.__v / y;
            case 0x0202:
                if (y.__v == 0) throw $p['ZeroDivisionError']('float divmod()');
                return x.__v / y.__v;
        }
        if (!x.__number__) {
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && $p['isinstance'](x, y)
                && typeof x['__truediv__'] == 'function')
                return y.__truediv__(x);
            if (typeof x['__truediv__'] == 'function') return x.__truediv__(y);
        }
        if (!y.__number__ && typeof y['__rtruediv__'] == 'function') return y.__rtruediv__(x);
    }

		throw ($p['TypeError']($p['sprintf']('unsupported operand type(s) for /: \x27%r\x27, \x27%r\x27', $p['tuple']([x, y]))));
		return null;
	};
	$m['op_truediv'].__name__ = 'op_truediv';

	$m['op_truediv'].__bind_type__ = 0;
	$m['op_truediv'].__args__ = [null,null,['x'],['y']];
	$m['op_mul'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                return x * y;
            case 0x0102:
                return x * y.__v;
            case 0x0201:
                return x.__v * y;
            case 0x0202:
                return new $p['float_int'](x.__v * y.__v);
            case 0x0204:
                return (new $p['float_int'](x.__v)).__mul(y);
            case 0x0402:
                return x.__mul(new $p['float_int'](y.__v));
            case 0x0404:
                return x.__mul(y);
        }
        if (!x.__number__) {
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && $p['isinstance'](x, y)
                && typeof x['__mul__'] == 'function')
                return y.__mul__(x);
            if (typeof x['__mul__'] == 'function') return x.__mul__(y);
        }
        if (!y.__number__ && typeof y['__rmul__'] == 'function') return y.__rmul__(x);
    }

		throw ($p['TypeError']($p['sprintf']('unsupported operand type(s) for *: \x27%r\x27, \x27%r\x27', $p['tuple']([x, y]))));
		return null;
	};
	$m['op_mul'].__name__ = 'op_mul';

	$m['op_mul'].__bind_type__ = 0;
	$m['op_mul'].__args__ = [null,null,['x'],['y']];
	$m['op_mod'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                var v = x % y;
                return (v < 0 && y > 0 ? v + y : v);
            case 0x0102:
                if (y.__v == 0) throw $p['ZeroDivisionError']('float divmod()');
                var v = x % y.__v;
                return (v < 0 && y.__v > 0 ? v + y.__v : v);
            case 0x0201:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                var v = x.__v % y;
                return (v < 0 && y.__v > 0 ? v + y.__v : v);
            case 0x0202:
                if (y.__v == 0) throw $p['ZeroDivisionError']('integer division or modulo by zero');
                var v = x.__v % y.__v;
                return new $p['float_int'](v < 0 && y.__v > 0 ? v + y.__v : v);
            case 0x0204:
                return (new $p['float_int'](x.__v)).__mod(y);
            case 0x0402:
                return x.__mod(new $p['float_int'](y.__v));
            case 0x0404:
                return x.__mod(y);
        }
        if (typeof x == 'string') {
            return $p['sprintf'](x, y);
        }
        if (!x.__number__) {
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && $p['isinstance'](x, y)
                && typeof x['__mod__'] == 'function')
                return y.__mod__(x);
            if (typeof x['__mod__'] == 'function') return x.__mod__(y);
        }
        if (!y.__number__ && typeof y['__rmod__'] == 'function') return y.__rmod__(x);
    }

		throw ($p['TypeError']($p['sprintf']('unsupported operand type(s) for %: \x27%r\x27, \x27%r\x27', $p['tuple']([x, y]))));
		return null;
	};
	$m['op_mod'].__name__ = 'op_mod';

	$m['op_mod'].__bind_type__ = 0;
	$m['op_mod'].__args__ = [null,null,['x'],['y']];
	$m['op_pow'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return Math.pow(x, y);
            case 0x0102:
                if (y.__v == 0) throw $p['ZeroDivisionError']('float divmod()');
                return Math.pow(x,y.__v);
            case 0x0201:
                if (y == 0) throw $p['ZeroDivisionError']('float divmod()');
                return Math.pow(x.__v,y);
            case 0x0202:
                return x.__pow__(y);
            case 0x0204:
                return (new $p['float_int'](x.__v)).__pow(y);
            case 0x0402:
                return x.__pow(new $p['float_int'](y.__v));
            case 0x0404:
                return x.__pow(y);
        }
        if (!x.__number__) {
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && $p['isinstance'](x, y)
                && typeof x['__pow__'] == 'function')
                return y.__pow__(x);
            if (typeof x['__pow__'] == 'function') return x.__pow__(y);
        }
        if (!y.__number__ && typeof y['__rpow__'] == 'function') return y.__rpow__(x);
    }

		throw ($p['TypeError']($p['sprintf']('unsupported operand type(s) for %: \x27%r\x27, \x27%r\x27', $p['tuple']([x, y]))));
		return null;
	};
	$m['op_pow'].__name__ = 'op_pow';

	$m['op_pow'].__bind_type__ = 0;
	$m['op_pow'].__args__ = [null,null,['x'],['y']];
	$m['op_invert'] = function(v) {


    if (v !== null) {
        if (typeof v['__invert__'] == 'function') return v.__invert__();
    }

		throw ($p['TypeError']($p['sprintf']('bad operand type for unary -: \x27%r\x27', v)));
		return null;
	};
	$m['op_invert'].__name__ = 'op_invert';

	$m['op_invert'].__bind_type__ = 0;
	$m['op_invert'].__args__ = [null,null,['v']];
	$m['op_bitshiftleft'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0202:
                return x.__lshift__(y);
            case 0x0204:
                return y.__rlshift__(x);
            case 0x0402:
                return x.__lshift(y.__v);
            case 0x0404:
                return x.__lshift(y.valueOf());
        }
        if (typeof x['__lshift__'] == 'function') {
            var v = x.__lshift__(y);
            if (v !== $p['NotImplemented']) return v;
        }
        if (typeof y['__rlshift__'] != 'undefined') return y.__rlshift__(x);
    }

		throw ($p['TypeError']($p['sprintf']('unsupported operand type(s) for \x3C\x3C: \x27%r\x27, \x27%r\x27', $p['tuple']([x, y]))));
		return null;
	};
	$m['op_bitshiftleft'].__name__ = 'op_bitshiftleft';

	$m['op_bitshiftleft'].__bind_type__ = 0;
	$m['op_bitshiftleft'].__args__ = [null,null,['x'],['y']];
	$m['op_bitshiftright'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0202:
                return x.__rshift__(y);
            case 0x0204:
                return y.__rrshift__(x);
            case 0x0402:
                return x.__rshift(y.__v);
            case 0x0404:
                return x.__rshift(y.valueOf());
        }
        if (typeof x['__rshift__'] == 'function') {
            var v = x.__rshift__(y);
            if (v !== $p['NotImplemented']) return v;
        }
        if (typeof y['__rrshift__'] != 'undefined') return y.__rrshift__(x);
    }

		throw ($p['TypeError']($p['sprintf']('unsupported operand type(s) for \x3E\x3E: \x27%r\x27, \x27%r\x27', $p['tuple']([x, y]))));
		return null;
	};
	$m['op_bitshiftright'].__name__ = 'op_bitshiftright';

	$m['op_bitshiftright'].__bind_type__ = 0;
	$m['op_bitshiftright'].__args__ = [null,null,['x'],['y']];
	$m['op_bitand2'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0202:
                return x.__and__(y);
            case 0x0204:
                return y.__and(new $p['float_int'](x));
            case 0x0402:
                return x.__and(new $p['float_int'](y.__v));
            case 0x0404:
                return x.__and(y);
        }
        if (typeof x['__and__'] == 'function') {
            var v = x.__and__(y);
            if (v !== $p['NotImplemented']) return v;
        }
        if (typeof y['__rand__'] != 'undefined') return y.__rand__(x);
    }

		throw ($p['TypeError']($p['sprintf']('unsupported operand type(s) for \x26: \x27%r\x27, \x27%r\x27', $p['tuple']([x, y]))));
		return null;
	};
	$m['op_bitand2'].__name__ = 'op_bitand2';

	$m['op_bitand2'].__bind_type__ = 0;
	$m['op_bitand2'].__args__ = [null,null,['x'],['y']];
	$m['op_bitand'] = function (args) {
    var a;
    if (args[0] !== null && args[1] !== null && args.length > 1) {
        var res, r;
        res = args[0];
        for (i = 1; i < args.length; i++) {
            if (typeof res['__and__'] == 'function') {
                r = res;
                res = res.__and__(args[i]);
                if (res === $p['NotImplemented'] && typeof args[i]['__rand__'] == 'function') {
                    res = args[i].__rand__(r);
                }
            } else if (typeof args[i]['__rand__'] == 'function') {
                res = args[i].__rand__(res);
            } else {
                res = null;
                break;
            }
            if (res === $p['NotImplemented']) {
                res = null;
                break;
            }
        }
        if (res !== null) {
            return res;
        }
    }
;
	throw ($p['TypeError']($m['__op_add']($add1='unsupported operand type(s) for \x26: ',$add2=', '['join'](function(){
		var a,$iter2_nextval,$iter2_type,$iter2_iter,$listcomp1,$iter2_idx,$iter2_array;
	$listcomp1 = $p['list']();
	$iter2_iter = $p['list']((typeof args == "undefined"?$m.args:args));
	$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
	while (typeof($p['__wrapped_next']($iter2_nextval).$nextval) != 'undefined') {
		a = $iter2_nextval.$nextval;
		$listcomp1['append']($p['repr'](a));
	}

	return $listcomp1;}()))));

};

	$m['op_bitxor2'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0202:
                return x.__xor__(y);
            case 0x0204:
                return y.__xor(new $p['float_int'](x));
            case 0x0402:
                return x.__xor(new $p['float_int'](y.__v));
            case 0x0404:
                return x.__xor(y);
        }
        if (typeof x['__xor__'] == 'function') {
            var v = x.__xor__(y);
            if (v !== $p['NotImplemented']) return v;
        }
        if (typeof y['__rxor__'] != 'undefined') return y.__rxor__(x);
    }

		throw ($p['TypeError']($p['sprintf']('unsupported operand type(s) for ^: \x27%r\x27, \x27%r\x27', $p['tuple']([x, y]))));
		return null;
	};
	$m['op_bitxor2'].__name__ = 'op_bitxor2';

	$m['op_bitxor2'].__bind_type__ = 0;
	$m['op_bitxor2'].__args__ = [null,null,['x'],['y']];
	$m['op_bitxor'] = function (args) {
    var a;
    if (args[0] !== null && args[1] !== null && args.length > 1) {
        var res, r;
        res = args[0];
        for (i = 1; i < args.length; i++) {
            if (typeof res['__xor__'] == 'function') {
                r = res;
                res = res.__xor__(args[i]);
                if (res === $p['NotImplemented'] && typeof args[i]['__rxor__'] == 'function') {
                    res = args[i].__rxor__(r);
                }
            } else if (typeof args[i]['__rxor__'] == 'function') {
                res = args[i].__rxor__(res);
            } else {
                res = null;
                break;
            }
            if (res === $p['NotImplemented']) {
                res = null;
                break;
            }
        }
        if (res !== null) {
            return res;
        }
    }
;
	throw ($p['TypeError']($m['__op_add']($add3='unsupported operand type(s) for ^: ',$add4=', '['join'](function(){
		var a,$iter3_idx,$iter3_nextval,$iter3_type,$listcomp2,$iter3_iter,$iter3_array;
	$listcomp2 = $p['list']();
	$iter3_iter = $m.args;
	$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
	while (typeof($p['__wrapped_next']($iter3_nextval).$nextval) != 'undefined') {
		a = $iter3_nextval.$nextval;
		$listcomp2['append']($p['repr'](a));
	}

	return $listcomp2;}()))));

};

	$m['op_bitor2'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0202:
                return x.__or__(y);
            case 0x0204:
                return y.__or(new $p['float_int'](x));
            case 0x0402:
                return x.__or(new $p['float_int'](y.__v));
            case 0x0404:
                return x.__or(y);
        }
        if (typeof x['__or__'] == 'function') {
            var v = x.__or__(y);
            if (v !== $p['NotImplemented']) return v;
        }
        if (typeof y['__ror__'] != 'undefined') {
            return y.__ror__(x);
        }
    }

		throw ($p['TypeError']($p['sprintf']('unsupported operand type(s) for |: \x27%r\x27, \x27%r\x27', $p['tuple']([x, y]))));
		return null;
	};
	$m['op_bitor2'].__name__ = 'op_bitor2';

	$m['op_bitor2'].__bind_type__ = 0;
	$m['op_bitor2'].__args__ = [null,null,['x'],['y']];
	$m['op_bitor'] = function (args) {
    var a;
    if (args[0] !== null && args[1] !== null && args.length > 1) {
        var res, r;
        res = args[0];
        for (i = 1; i < args.length; i++) {
            if (typeof res['__or__'] == 'function') {
                r = res;
                res = res.__or__(args[i]);
                if (res === $p['NotImplemented'] && typeof args[i]['__ror__'] == 'function') {
                    res = args[i].__ror__(r);
                }
            } else if (typeof args[i]['__ror__'] == 'function') {
                res = args[i].__ror__(res);
            } else {
                res = null;
                break;
            }
            if (res === $p['NotImplemented']) {
                res = null;
                break;
            }
        }
        if (res !== null) {
            return res;
        }
    }
;
	throw ($p['TypeError']($m['__op_add']($add5='unsupported operand type(s) for |: ',$add6=', '['join'](function(){
		var a,$iter4_nextval,$iter4_idx,$listcomp3,$iter4_type,$iter4_array,$iter4_iter;
	$listcomp3 = $p['list']();
	$iter4_iter = $m.args;
	$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
	while (typeof($p['__wrapped_next']($iter4_nextval).$nextval) != 'undefined') {
		a = $iter4_nextval.$nextval;
		$listcomp3['append']($p['repr'](a));
	}

	return $listcomp3;}()))));

};

	$m['___import___'] = function(path, context, module_name, get_base) {
		if (typeof module_name == 'undefined') module_name=arguments.callee.__args__[4][1];
		if (typeof get_base == 'undefined') get_base=arguments.callee.__args__[5][1];
		var $and8,$and14,$and9,parentName,module,$attr20,$attr21,$attr14,$attr23,$attr24,$attr25,$and15,is_module_object,$attr18,in_context,$and11,$attr16,$attr26,$attr11,$and6,$attr7,$attr22,objName,$sub2,$sub1,$and16,$attr9,$attr8,contextTopName,$attr3,$attr5,$attr4,inContextTopName,$attr6,sys,$add15,$add16,$add17,$add10,$add11,$add12,$add13,$attr15,$attr17,$and7,$add18,$attr10,$attr13,$attr12,importName,$add14,$and13,path_parts,topName,$and10,$and12,depth,inContextImportName,inContextParentName,$add7,$and17,$add8,$add9,$attr19,save_track_module;
		save_track_module = $pyjs.track.module;
		sys = $pyjs.loaded_modules['sys'];
		if ($p['bool'](sys.__was_initialized__ != true)) {
			module = $pyjs.loaded_modules[path];
			module();
$pyjs.track.module = save_track_module;
			if ($p['bool']($m['op_eq'](path, 'sys'))) {
				module.modules = $p['dict']($p['dict']([['pyjslib', (typeof pyjslib == "undefined"?$m.pyjslib:pyjslib)], ['sys', module]]));
			}
			return module;
		}
		importName = path;
		is_module_object = false;
		path_parts = path['__split']('.');
		depth = path_parts['length'];
		topName = path_parts[0];
		objName = path_parts[path_parts.length-1];
		parentName = path_parts['slice'](0, $m['__op_sub']($sub1=path_parts['length'],$sub2=1))['join']('.');
		if ($p['bool']((context === null))) {
			in_context = false;
		}
		else {
			in_context = true;
			inContextImportName = $m['__op_add']($add9=$m['__op_add']($add7=context,$add8='.'),$add10=importName);
			if ($p['bool'](!$p['bool'](parentName))) {
				inContextParentName = context;
			}
			else {
				inContextParentName = $m['__op_add']($add13=$m['__op_add']($add11=context,$add12='.'),$add14=parentName);
			}
			inContextTopName = $m['__op_add']($add17=$m['__op_add']($add15=context,$add16='.'),$add18=topName);
			contextTopName = context.__split('.')[0];
			if ($p['bool'](($p['bool']($and6=($p['cmp'](depth, 1) == 1))?sys['modules']['has_key'](inContextParentName):$and6))) {
				module = sys['modules'].__getitem__(inContextParentName);
				if ($p['bool'](typeof module[objName] != 'undefined')) {
					if ($p['bool'](get_base)) {
						return $pyjs.loaded_modules[inContextTopName];
					}
					return module[objName];
				}
			}
			else if ($p['bool'](sys['modules']['has_key'](inContextImportName))) {
				if ($p['bool'](get_base)) {
					return $pyjs.loaded_modules[inContextTopName];
				}
				return sys['modules'].__getitem__(inContextImportName);
			}
			else if ($p['bool'](($p['bool']($and8=($p['cmp'](depth, 1) == 1))?typeof (module = $pyjs.loaded_modules[inContextParentName]) != 'undefined':$and8))) {
				sys['modules'].__setitem__(inContextParentName, module);
module.__was_initialized__ = false;
				module(null);
$pyjs.track.module = save_track_module;
				if ($p['bool'](typeof module[objName] != 'undefined')) {
					if ($p['bool'](get_base)) {
						return $pyjs.loaded_modules[inContextTopName];
					}
					return module[objName];
				}
			}
			if ($p['bool'](sys['modules']['has_key'](inContextImportName))) {
				if ($p['bool'](get_base)) {
					return $pyjs.loaded_modules[inContextTopName];
				}
				return sys['modules'].__getitem__(inContextImportName);
			}
			if ($p['bool'](typeof (module = $pyjs.loaded_modules[inContextImportName]) != 'undefined')) {
				sys['modules'].__setitem__(inContextImportName, module);
module.__was_initialized__ = false;
				module(module_name);
$pyjs.track.module = save_track_module;
				if ($p['bool'](get_base)) {
					return $pyjs.loaded_modules[inContextTopName];
				}
				return module;
			}
			if ($p['bool'](!$p['bool'](sys['modules']['has_key'](inContextTopName)))) {
				if ($p['bool'](typeof (module = $pyjs.loaded_modules[inContextTopName]) != 'function')) {
					in_context = false;
					if ($p['bool']($pyjs.options.dynamic_loading)) {
						module = (typeof __dynamic_load__ == "undefined"?$m.__dynamic_load__:__dynamic_load__)(inContextTopName);
						if ($p['bool'](typeof module == 'function')) {
							in_context = true;
							if ($p['bool']($m['op_eq'](depth, 1))) {
								module(module_name);
$pyjs.track.module = save_track_module;
								return module;
							}
							else {
								module(null);
								if ($p['bool'](($p['bool']($and10=$m['op_eq'](depth, 2))?typeof module[objName] != 'undefined':$and10))) {
									if ($p['bool'](get_base)) {
										return $pyjs.loaded_modules[inContextTopName];
									}
									return module[objName];
								}
							}
						}
					}
				}
			}
			if ($p['bool'](in_context)) {
				importName = inContextImportName;
				parentName = inContextParentName;
				topName = inContextTopName;
			}
		}
		if ($p['bool'](!$p['bool'](in_context))) {
			if ($p['bool'](($p['bool']($and12=parentName)?sys['modules']['has_key'](parentName):$and12))) {
				module = sys['modules'].__getitem__(parentName);
				if ($p['bool'](typeof module[objName] != 'undefined')) {
					if ($p['bool'](get_base)) {
						return $pyjs.loaded_modules[topName];
					}
					return module[objName];
				}
			}
			else if ($p['bool'](sys['modules']['has_key'](importName))) {
				if ($p['bool'](get_base)) {
					return $pyjs.loaded_modules[topName];
				}
				return sys['modules'].__getitem__(importName);
			}
			else if ($p['bool'](($p['bool']($and14=parentName)?typeof (module = $pyjs.loaded_modules[parentName]) != 'undefined':$and14))) {
				sys['modules'].__setitem__(parentName, module);
module.__was_initialized__ = false;
				module(null);
$pyjs.track.module = save_track_module;
				if ($p['bool'](typeof module[objName] != 'undefined')) {
					if ($p['bool'](get_base)) {
						return $pyjs.loaded_modules[topName];
					}
					return module[objName];
				}
			}
			if ($p['bool'](sys['modules']['has_key'](importName))) {
				if ($p['bool'](get_base)) {
					return $pyjs.loaded_modules[topName];
				}
				return sys['modules'].__getitem__(importName);
			}
			if ($p['bool'](typeof (module = $pyjs.loaded_modules[importName]) != 'undefined')) {
				sys['modules'].__setitem__(importName, module);
				if ($p['bool'](($p['bool']($and16=!$m['op_eq'](importName, 'pyjslib'))?!$m['op_eq'](importName, 'sys'):$and16))) {
module.__was_initialized__ = false;
				}
				module(module_name);
$pyjs.track.module = save_track_module;
				if ($p['bool'](get_base)) {
					return $pyjs.loaded_modules[topName];
				}
				return module;
			}
		}
		if ($p['bool']($pyjs.options.dynamic_loading)) {
			module = (typeof __dynamic_load__ == "undefined"?$m.__dynamic_load__:__dynamic_load__)(importName);
			if ($p['bool'](typeof module== 'function')) {
				module(module_name);
$pyjs.track.module = save_track_module;
				if ($p['bool'](get_base)) {
					return $pyjs.loaded_modules[topName];
				}
				return module;
			}
		}
		throw ($p['ImportError']($p['sprintf']('No module named %s, %s in context %s', $p['tuple']([importName, path, context]))));
		return null;
	};
	$m['___import___'].__name__ = '___import___';

	$m['___import___'].__bind_type__ = 0;
	$m['___import___'].__args__ = [null,null,['path'],['context'],['module_name', null],['get_base', true]];
	$m['__dynamic_load__'] = function(importName) {
		var $add28,$add30,$or1,$or3,$or2,$add21,$add20,$add23,$add22,$add25,$add24,module,$add26,$add29,$pyjs_try_err,$add27,$add19;
		;
		module = $pyjs.loaded_modules[importName];
		if ($p['bool'](($p['bool']($or1=($m['sys'] === null))?$or1:($p['bool']($or2=($m['dynamic'] === null))?$or2:$m['__nondynamic_modules__']['has_key'](importName))))) {
			return module;
		}
		if ($p['bool'](typeof module== 'undefined')) {
			try {
				$m['dynamic']['ajax_import']($m['__op_add']($add25=$m['__op_add']($add23=$m['__op_add']($add21=$m['__op_add']($add19='lib/',$add20=importName),$add22='.__'),$add24=$m['platform']),$add26='__.js'));
				module = $pyjs.loaded_modules[importName];
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
				}
			}
		}
		if ($p['bool'](typeof module== 'undefined')) {
			try {
				$m['dynamic']['ajax_import']($m['__op_add']($add29=$m['__op_add']($add27='lib/',$add28=importName),$add30='.js'));
				module = $pyjs.loaded_modules[importName];
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
				}
			}
			if ($p['bool'](typeof module== 'undefined')) {
				$m['__nondynamic_modules__'].__setitem__(importName, 1.0);
			}
		}
		return module;
	};
	$m['__dynamic_load__'].__name__ = '__dynamic_load__';

	$m['__dynamic_load__'].__bind_type__ = 0;
	$m['__dynamic_load__'].__args__ = [null,null,['importName']];
	$m['BaseException'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '21bc68e523c5d29b1a76cb5696af5c74';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));

			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length));

			}

			self.args = args;
			return null;
		}
	, 1, ['args',null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			return self['args']['__getitem__'](index);
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method2('toString', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add32,$add33,$add31,$add34,$attr27,$attr28;
			return $m['__op_add']($add33=$m['__op_add']($add31=self['__name__'],$add32=': '),$add34=self['__str__']());
		}
	, 1, [null,null,['self']]);
		$cls_definition['toString'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr33,$attr32,$attr31,$attr30,$attr36,$attr35,$attr34,$attr29;
			if ($p['bool'](($p['len'](self['args']) === 0))) {
				return '';
			}
			else if ($p['bool'](($p['len'](self['args']) === 1))) {
				return $p['str'](self['args'].__getitem__(0));
			}
			return $p['repr'](self['args']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add36,$add35,$attr37,$attr40,$attr41,$attr42,$attr39,$attr38;
			if ($p['bool']($p['callable'](self))) {
				return $p['sprintf']('\x3Ctype \x27%s\x27\x3E', self['__name__']);
			}
			return $m['__op_add']($add35=self['__name__'],$add36=$p['repr'](self['args']));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		var $bases = new Array(pyjslib.object);
		return $pyjs_type('BaseException', $bases, $cls_definition);
	})();
	$m['KeyboardInterrupt'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'a7abcff68949c3a285e3338a247ea592';
		var $bases = new Array($m['BaseException']);
		return $pyjs_type('KeyboardInterrupt', $bases, $cls_definition);
	})();
	$m['Exception'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '34ff37a8b89aac789cd40f06fb0c8058';
		var $bases = new Array($m['BaseException']);
		return $pyjs_type('Exception', $bases, $cls_definition);
	})();
	$m['StandardError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '50e14b35f31937bacdbc674f2f93764a';
		var $bases = new Array($m['Exception']);
		return $pyjs_type('StandardError', $bases, $cls_definition);
	})();
	$m['AssertionError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '975fd34b43b9afa9314bc2b15db623ad';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('AssertionError', $bases, $cls_definition);
	})();
	$m['GeneratorExit'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'b379eda31cf5ea38ea21c189d3434e46';
		var $bases = new Array($m['Exception']);
		return $pyjs_type('GeneratorExit', $bases, $cls_definition);
	})();
	$m['TypeError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '0ffe3389a494dd691f8f0a6c104a69ab';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('TypeError', $bases, $cls_definition);
	})();
	$m['AttributeError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'c6b5501f1dffb3c1effe0793e329e0e3';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('AttributeError', $bases, $cls_definition);
	})();
	$m['NameError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '82ea70b6c2840956603a48365ac4a4ee';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('NameError', $bases, $cls_definition);
	})();
	$m['ValueError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '228a8a474d5b574b4a7a253fe4564eaa';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('ValueError', $bases, $cls_definition);
	})();
	$m['ImportError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '82f6b7e63c89e1e76ab0f1b697ed5f92';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('ImportError', $bases, $cls_definition);
	})();
	$m['LookupError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '4176b70d50487f6fe91e6d5908c16f82';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('LookupError', $bases, $cls_definition);
	})();
	$m['RuntimeError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '6a4668082833c52e5d709133d5819053';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('RuntimeError', $bases, $cls_definition);
	})();
	$m['ArithmeticError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '559ae956d62d16745bb7bed704eef8ac';
		var $bases = new Array($m['StandardError']);
		return $pyjs_type('ArithmeticError', $bases, $cls_definition);
	})();
	$m['KeyError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '4f2aa0597758ae72ff1081455b4d4810';
		$method = $pyjs__bind_method2('__str__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr50,$attr46,$attr47,$attr44,$attr45,$attr43,$attr48,$attr49;
			if ($p['bool'](($p['len'](self['args']) === 0))) {
				return '';
			}
			else if ($p['bool'](($p['len'](self['args']) === 1))) {
				return $p['repr'](self['args'].__getitem__(0));
			}
			return $p['repr'](self['args']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		var $bases = new Array($m['LookupError']);
		return $pyjs_type('KeyError', $bases, $cls_definition);
	})();
	$m['IndexError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '1e436254d757ac537fe40a5f2cf83386';
		var $bases = new Array($m['LookupError']);
		return $pyjs_type('IndexError', $bases, $cls_definition);
	})();
	$m['NotImplementedError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '161cbcffc4508820d0821b5d31cb2c13';
		var $bases = new Array($m['RuntimeError']);
		return $pyjs_type('NotImplementedError', $bases, $cls_definition);
	})();
	$m['ZeroDivisionError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'fa87740b499217b38099934604c8aa39';
		var $bases = new Array($m['ArithmeticError']);
		return $pyjs_type('ZeroDivisionError', $bases, $cls_definition);
	})();
	$m['OverflowError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '08ecc73f8948598feb6f46d1c4144d8d';
		var $bases = new Array($m['ArithmeticError']);
		return $pyjs_type('OverflowError', $bases, $cls_definition);
	})();
	$m['UndefinedValueError'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '7359cf8929321766acaab360f2c72264';
		var $bases = new Array($m['ValueError']);
		return $pyjs_type('UndefinedValueError', $bases, $cls_definition);
	})();
	$m['init'] = function() {


$p['_errorMapping'] = function(err) {
    if (err instanceof(ReferenceError) || err instanceof(TypeError)) {
        var message = '';
        try {
            message = err.message;
        } catch ( e) {
        }
        return $m['AttributeError'](message);
    }
    return err;
};


$p['TryElse'] = function () { };
$p['TryElse'].prototype = new Error();
$p['TryElse'].__name__ = 'TryElse';


$p['StopIteration'] = function () { };
$p['StopIteration'].prototype = new Error();
$p['StopIteration'].__name__ = 'StopIteration';


String.prototype.rfind = function(sub, start, end) {
    var pos;
    if (typeof start != 'undefined') {
        /* *sigh* - python rfind goes *RIGHT*, NOT left */
        pos = this.substring(start).lastIndexOf(sub);
        if (pos == -1) {
            return -1;
        }
        pos += start;
    }
    else {
        pos=this.lastIndexOf(sub, start);
    }
    if (typeof end == 'undefined') return pos;

    if (pos + sub.length>end) return -1;
    return pos;
};

String.prototype.find = function(sub, start, end) {
    var pos=this.indexOf(sub, start);
    if (typeof end == 'undefined') return pos;

    if (pos + sub.length>end) return -1;
    return pos;
};

String.prototype.count = function(sub, start, end) {
    var pos, count = 0, n = sub.length;
    if (typeof start == 'undefined') start = 0;
    if (typeof end == 'undefined') end = this.length;
    while (start < end) {
        pos = this.find(sub, start, end);
        if (pos < 0) break;
        count ++;
        start = pos + n;
    }
    return count;
}

String.prototype.join = function(data) {
    var text="";

    if (data.constructor === Array) {
        return data.join(this);
    } else if (typeof data.__iter__ == 'function') {
        if (typeof data.__array == 'object') {
            return data.__array.join(this);
        }
        var iter=data.__iter__();
        if (typeof iter.__array == 'object') {
            return iter.__array.join(this);
        }
        data = [];
        var item, i = 0;
        if (typeof iter.$genfunc == 'function') {
            while (typeof (item=iter.next(true)) != 'undefined') {
                data[i++] = item;
            }
        } else {
            try {
                while (true) {
                    data[i++] = iter.next();
                }
            }
            catch (e) {
                if (e.__name__ != 'StopIteration') throw e;
            }
        }
        return data.join(this);
    }

    return text;
};

String.prototype.isdigit = function() {
    return (this.match(/^\d+$/g) !== null);
};

String.prototype.isalnum = function() {
    return (this.match(/^[a-zA-Z\d]+$/g) !== null);
};

String.prototype.isalpha = function() {
    return (this.match(/^[a-zA-Z]+$/g) !== null);
};

String.prototype.isupper = function() {
    return (this.match(/[a-z]/g) === null);
};

String.prototype.__replace=String.prototype.replace;

String.prototype.$$replace = function(old, replace, count) {
    var do_max=false;
    var start=0;
    var new_str="";
    var pos=0;

    if (typeof old != 'string') return this.__replace(old, replace);
    if (typeof count != 'undefined') do_max=true;

    while (start<this.length) {
        if (do_max && !count--) break;

        pos=this.indexOf(old, start);
        if (pos<0) break;

        new_str+=this.substring(start, pos) + replace;
        start=pos+old.length;
    }
    if (start<this.length) new_str+=this.substring(start);

    return new_str;
};

String.prototype.__contains__ = function(s){
    return this.indexOf(s)>=0;
};

String.prototype.__split = String.prototype.split;

String.prototype.$$split = function(sep, maxsplit) {
    var items=$p['list']();
    var do_max=false;
    var subject=this;
    var start=0;
    var pos=0;

    if (sep === null || typeof sep == 'undefined') {
        sep=" ";
        if (subject.length == 0) {
            return items;
        }
        subject=subject.strip();
        subject=subject.$$replace(/\s+/g, sep);
    }
    else if (typeof maxsplit != 'undefined') do_max=true;

    if (subject.length == 0) {
        items.__array.push('');
        return items;
    }

    while (start<subject.length) {
        if (do_max && !maxsplit--) break;

        pos=subject.indexOf(sep, start);
        if (pos<0) break;

        items.__array.push(subject.substring(start, pos));
        start=pos+sep.length;
    }
    if (start<=subject.length) items.__array.push(subject.substring(start));

    return items;
};

String.prototype.rsplit = function(sep, maxsplit) {
    var items=$p['list']();
    var do_max=false;
    var subject=this;
    var pos=0;

    if (sep === null || typeof sep == 'undefined') {
        sep=" ";
        if (subject.length == 0) {
            return items;
        }
        subject=subject.strip();
        subject=subject.$$replace(/\s+/g, sep);
    }
    else if (typeof maxsplit != 'undefined') do_max=true;

    if (subject.length == 0) {
        items.__array.push('');
        return items;
    }

    while (subject.length > 0) {
        if (do_max && !maxsplit--) break;

        pos=subject.lastIndexOf(sep);
        if (pos<0) break;

        items.__array.push(subject.substr(pos+sep.lenght));
        subject = subject.substr(0, pos);
    }
    if (subject.length > 0) items.__array.push(subject);
    items.__array.reverse()

    return items;
};

if (typeof "a"[0] == 'undefined' ) {
    // IE: cannot do "abc"[idx]
    String.prototype.__iter__ = function() {
        var i = 0;
        var s = this;
        return {
            'next': function(noStop) {
                if (i >= s.length) {
                    if (noStop === true) {
                        return;
                    }
                    throw $p['StopIteration'];
                }
                return s.charAt(i++);
            },
            '__iter__': function() {
                return this;
            }
        };
    };
} else {
    String.prototype.__iter__ = function() {
        var i = 0;
        var s = this;
        return {
            '__array': this,
            'next': function(noStop) {
                if (i >= s.length) {
                    if (noStop === true) {
                        return;
                    }
                    throw $p['StopIteration'];
                }
                return s.charAt(i++);
            },
            '__iter__': function() {
                return this;
            }
        };
    };
}

String.prototype.strip = function(chars) {
    return this.lstrip(chars).rstrip(chars);
};

String.prototype.lstrip = function(chars) {
    if (typeof chars == 'undefined') return this.$$replace(/^\s+/, "");
    if (chars.length == 0) return this;
    return this.$$replace(new RegExp("^[" + chars + "]+"), "");
};

String.prototype.rstrip = function(chars) {
    if (typeof chars == 'undefined') return this.$$replace(/\s+$/, "");
    if (chars.length == 0) return this;
    return this.$$replace(new RegExp("[" + chars + "]+$"), "");
};

String.prototype.startswith = function(prefix, start, end) {
    // FIXME: accept tuples as suffix (since 2.5)
    if (typeof start == 'undefined') start = 0;
    if (typeof end == 'undefined') end = this.length;

    if ((end - start) < prefix.length) return false;
    if (this.substr(start, prefix.length) == prefix) return true;
    return false;
};

String.prototype.endswith = function(suffix, start, end) {
    // FIXME: accept tuples as suffix (since 2.5)
    if (typeof start == 'undefined') start = 0;
    if (typeof end == 'undefined') end = this.length;

    if ((end - start) < suffix.length) return false;
    if (this.substr(end - suffix.length, suffix.length) == suffix) return true;
    return false;
};

String.prototype.ljust = function(width, fillchar) {
    switch (width.__number__) {
        case 0x02:
        case 0x04:
            width = width.valueOf();
            break;
        case 0x01:
            if (Math.floor(width) == width) break;
        default:
            throw $m['TypeError']("an integer is required (got '" + width + "')");
    }
    if (typeof fillchar == 'undefined') fillchar = ' ';
    if (typeof(fillchar) != 'string' ||
        fillchar.length != 1) {
        throw $m['TypeError']("ljust() argument 2 must be char, not " + typeof(fillchar));
    }
    if (this.length >= width) return this;
    return this + new Array(width+1 - this.length).join(fillchar);
};

String.prototype.rjust = function(width, fillchar) {
    switch (width.__number__) {
        case 0x02:
        case 0x04:
            width = width.valueOf();
            break;
        case 0x01:
            if (Math.floor(width) == width) break;
        default:
            throw $m['TypeError']("an integer is required (got '" + width + "')");
    }
    if (typeof fillchar == 'undefined') fillchar = ' ';
    if (typeof(fillchar) != 'string' ||
        fillchar.length != 1) {
        throw $m['TypeError']("rjust() argument 2 must be char, not " + typeof(fillchar));
    }
    if (this.length >= width) return this;
    return new Array(width + 1 - this.length).join(fillchar) + this;
};

String.prototype.center = function(width, fillchar) {
    switch (width.__number__) {
        case 0x02:
        case 0x04:
            width = width.valueOf();
            break;
        case 0x01:
            if (Math.floor(width) == width) break;
        default:
            throw $m['TypeError']("an integer is required (got '" + width + "')");
    }
    if (typeof fillchar == 'undefined') fillchar = ' ';
    if (typeof(fillchar) != 'string' ||
        fillchar.length != 1) {
        throw $m['TypeError']("center() argument 2 must be char, not " + typeof(fillchar));
    }
    if (this.length >= width) return this;
    var padlen = width - this.length;
    var right = Math.ceil(padlen / 2);
    var left = padlen - right;
    return new Array(left+1).join(fillchar) + this + new Array(right+1).join(fillchar);
};

String.prototype.__getslice__ = function(lower, upper) {
    if (lower === null) {
        lower = 0;
    } else if (lower < 0) {
        lower = this.length + lower;
    }
    if (upper === null) {
        upper=this.length;
    } else if (upper < 0) {
       upper = this.length + upper;
    }
    return this.substring(lower, upper);
};

String.prototype.__getitem__ = function(idx) {
    if (idx < 0) idx += this.length;
    if (idx < 0 || idx > this.length) {
        throw $m['IndexError']("string index out of range");
    }
    return this.charAt(idx);
};

String.prototype.__setitem__ = function(idx, val) {
    throw $m['TypeError']("'str' object does not support item assignment");
};

String.prototype.upper = String.prototype.toUpperCase;
String.prototype.lower = String.prototype.toLowerCase;

String.prototype.zfill = function(width) {
    return this.rjust(width, '0');
};

String.prototype.__add__ = function(y) {
    if (typeof y != "string") {
        throw $m['TypeError']("cannot concatenate 'str' and non-str objects");
    }
    return this + y;
};

String.prototype.__mul__ = function(y) {
    switch (y.__number__) {
        case 0x02:
        case 0x04:
            y = y.valueOf();
            break;
        case 0x01:
            if (Math.floor(y) == y) break;
        default:
            throw $m['TypeError']("can't multiply sequence by non-int of type 'str'");
    }
    var s = '';
    while (y-- > 0) {
        s += this;
    }
    return s;
};
String.prototype.__rmul__ = String.prototype.__mul__;
String.prototype.__number__ = null;
String.prototype.__name__ = 'str';
String.prototype.__class__ = String.prototype;
String.prototype.__is_instance__ = null;
String.prototype.__str__ = function () {
    if (typeof this == 'function') return "<type '" + this.__name__ + "'>";
    return this.toString();
};
String.prototype.__repr__ = function () {
    if (typeof this == 'function') return "<type '" + this.__name__ + "'>";
    return "'" + this.toString() + "'";
};
String.prototype.__mro__ = [$m['basestring']];


Boolean.prototype.__number__ = 0x01;
Boolean.prototype.__name__ = 'bool';
Boolean.prototype.__class__ = Boolean.prototype;
Boolean.prototype.__is_instance__ = null;
Boolean.prototype.__str__= function () {
    if (typeof this == 'function') return "<type '" + this.__name__ + "'>";
    if (this == true) return "True";
    return "False";
};
Boolean.prototype.__repr__ = Boolean.prototype.__str__;
Boolean.prototype.__and__ = function (y) {
    return this & y.valueOf();
};
Boolean.prototype.__or__ = function (y) {
    return this | y.valueOf();
};
Boolean.prototype.__xor__ = function (y) {
    return this ^ y.valueOf();
};


if (typeof Array.prototype.indexOf != 'function') {
    Array.prototype.indexOf = function(elt /*, from*/) {
        var len = this.length >>> 0;

        var from = Number(arguments[1]) || 0;
        from = (from < 0)
                ? Math.ceil(from)
                : Math.floor(from);
        if (from < 0)
            from += len;

        for (; from < len; from++) {
            if (from in this &&
                this[from] === elt)
                return from;
        }
        return -1;
    };
};


RegExp.prototype.Exec = function(pat) {
    var m = this.exec(pat);
    if (m !== null) {
        var len = m.length >>> 0;
        for (var i = 0; i < len; i++) {
            if (typeof(m[i]) == 'undefined')
                m[i] = null;
        }
    }
    return m;
};


$p['abs'] = Math.abs;

	};
	$m['init'].__name__ = 'init';

	$m['init'].__bind_type__ = 0;
	$m['init'].__args__ = [null,null];
	$m['Class'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'c32f34f1c0aa12101dbf52c95944ffe4';
		$method = $pyjs__bind_method2('__init__', function(name) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
			}

			self.$$name = name;
			return null;
		}
	, 1, [null,null,['self'],['name']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__str___', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr51,$attr52;
			return self['$$name'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str___'] = $method;
		var $bases = new Array(pyjslib.object);
		return $pyjs_type('Class', $bases, $cls_definition);
	})();
	$m['open'] = function(fname, mode) {
		if (typeof mode == 'undefined') mode=arguments.callee.__args__[3][1];

		throw ($m['NotImplementedError']('open is not implemented in browsers'));
		return null;
	};
	$m['open'].__name__ = 'open';

	$m['open'].__bind_type__ = 0;
	$m['open'].__args__ = [null,null,['fname'],['mode', 'r']];
	$m['cmp'] = function(a, b) {
    if (typeof a == typeof b) {
        switch (typeof a) {
            case 'number':
            case 'string':
            case 'boolean':
                return a == b ? 0 : (a < b ? -1 : 1);
        }
        if (a === b) return 0;
    }
    if (a === null) {
        if (b === null) return 0;
        return -1;
    }
    if (b === null) {
        return 1;
    }

    switch ((a.__number__ << 8)|b.__number__) {
        case 0x0202:
            a = a.__v;
            b = b.__v;
        case 0x0101:
            return a == b ? 0 : (a < b ? -1 : 1);
        case 0x0100:
        case 0x0200:
        case 0x0400:
            if (typeof b.__cmp__ == 'function') {
                return -b.__cmp__(a);
            }
            return -1;
        case 0x0001:
        case 0x0002:
        case 0x0004:
            if (typeof a.__cmp__ == 'function') {
                return a.__cmp__(b);
            }
            return 1;
        case 0x0102:
            return -b.__cmp__(new $p['float_int'](a));
        case 0x0104:
            return -b.__cmp__(new $p['float_int'](a));
        case 0x0201:
            return a.__cmp__(new $p['float_int'](b));
        case 0x0401:
            return a.__cmp__(new $p['float_int'](b));
        case 0x0204:
            return -b.__cmp__(new $p['float_int'](a));
        case 0x0402:
            return a.__cmp__(new $p['float_int'](b));
        case 0x0404:
            return a.__cmp__(b);
    }

    if (typeof a.__class__ == typeof b.__class__ && typeof a.__class__ == 'function') {
        if (a.__class__.__name__ < b.__class__.__name__) {
            return -1;
        }
        if (a.__class__.__name__ > b.__class__.__name__) {
            return 1;
        }
    }

    if ((typeof a == 'object' || typeof a == 'function') && typeof a.__cmp__ == 'function') {
        return a.__cmp__(b);
    } else if ((typeof b == 'object' || typeof b == 'function') && typeof b.__cmp__ == 'function') {
        return -b.__cmp__(a);
    }
    if (a == b) return 0;
    if (a > b) return 1;
    return -1;
};
    ;
	$m['__cmp'] = $m['cmp'];
	$m['bool'] = function(v) {


    switch (v) {
        case null:
        case false:
        case 0:
        case '':
            return false;
    }
    if (typeof v == 'object') {
        if (typeof v.__nonzero__ == 'function'){
            return v.__nonzero__();
        } else if (typeof v.__len__ == 'function'){
            return v.__len__() > 0;
        }
    }
    return true;
    
	};
	$m['bool'].__name__ = 'bool';

	$m['bool'].__bind_type__ = 0;
	$m['bool'].__args__ = [null,null,['v']];
	$m['float'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'c99d1bad464af532c9b7f905d8bf0745';
		$cls_definition['__number__'] = 0x01;
		$method = $pyjs__bind_method2('__new__', function(self, num) {


        if (typeof num == 'string') {
            num = num.lstrip();
            if (num === "") {
                throw $m['ValueError']("empty string for float()");
            }
        }
        var v = Number(num);
        if (isNaN(v)) {
            throw $m['ValueError']("invalid literal for float(): " + num);
        }
        return v;

		}
	, 3, [null,null,['self'],['num']]);
		$cls_definition['__new__'] = $method;
		var $bases = new Array(pyjslib.object);
		return $pyjs_type('float', $bases, $cls_definition);
	})();

Number.prototype.__number__ = 0x01;
Number.prototype.__name__ = 'float';
Number.prototype.__init__ = function (value, radix) {
    return null;
};

Number.prototype.__str__ = function () {
    if (typeof this == 'function') return "<type '" + this.__name__ + "'>";
    return this.toString();
};

Number.prototype.__repr__ = function () {
    if (typeof this == 'function') return "<type '" + this.__name__ + "'>";
    return this.toString();
};

Number.prototype.__nonzero__ = function () {
    return this != 0;
};

Number.prototype.__cmp__ = function (y) {
    return this < y? -1 : (this == y ? 0 : 1);
};

Number.prototype.__hash__ = function () {
    return this;
};

Number.prototype.__oct__ = function () {
    return '0'+this.toString(8);
};

Number.prototype.__hex__ = function () {
    return '0x'+this.toString(16);
};

Number.prototype.__pos__ = function () {
    return this;
};

Number.prototype.__neg__ = function () {
    return -this;
};

Number.prototype.__abs__ = function () {
    if (this >= 0) return this;
    return -this;
};

Number.prototype.__add__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    return this + y;
};

Number.prototype.__radd__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    return y + this;
};

Number.prototype.__sub__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    return this - y;
};

Number.prototype.__rsub__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    return y - this;
};

Number.prototype.__floordiv__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    if (y == 0) throw $m['ZeroDivisionError']('float divmod()');
    return Math.floor(this / y);
};

Number.prototype.__rfloordiv__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    if (this == 0) throw $m['ZeroDivisionError']('float divmod');
    return Math.floor(y / this);
};

Number.prototype.__div__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    if (y == 0) throw $m['ZeroDivisionError']('float division');
    return this / y;
};

Number.prototype.__rdiv__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    if (this == 0) throw $m['ZeroDivisionError']('float division');
    return y / this;
};

Number.prototype.__mul__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    return this * y;
};

Number.prototype.__rmul__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    return y * this;
};

Number.prototype.__mod__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    if (y == 0) throw $m['ZeroDivisionError']('float modulo');
    return this % y;
};

Number.prototype.__rmod__ = function (y) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    if (this == 0) throw $m['ZeroDivisionError']('float modulo');
    return y % this;
};

Number.prototype.__pow__ = function (y, z) {
    if (!y.__number__ || isNaN(y = y.valueOf())) return $p['NotImplemented'];
    if (typeof z == 'undefined' || z == null) {
        return Math.pow(this, y);
    }
    if (!z.__number__ || isNaN(z = z.valueOf())) return $p['NotImplemented'];
    return Math.pow(this, y) % z;
};

	$m['float_int'] = function(value, radix) {
		if (typeof radix == 'undefined') radix=arguments.callee.__args__[3][1];


    var v;
    if (typeof value['__int__'] != 'undefined') {
        return value['__int__']();
    }
    if (value.__number__) {
        if (radix !== null) {
            throw $m['TypeError']("int() can't convert non-string with explicit base");
        }
        v = value.valueOf();
        if (v > 0) {
            v = Math.floor(v);
        } else {
            v = Math.ceil(v);
        }
    } else if (typeof value == 'string') {
        if (radix === null) {
            radix = 10;
        }
        value = value.lstrip();
        switch (value[value.length-1]) {
            case 'l':
            case 'L':
                v = value.slice(0, value.length-2);
                break;
            default:
                v = value;
        }
        if (v.match($radix_regex[radix]) === null) {
            v = NaN;
        } else {
            v = parseInt(v, radix);
        }
    } else {
        throw $m['TypeError']("TypeError: int() argument must be a string or a number");
    }
    if (isNaN(v) || !isFinite(v)) {
        throw $m['ValueError']("invalid literal for int() with base " + radix + ": '" + value + "'");
    }
    return v;

	};
	$m['float_int'].__name__ = 'float_int';

	$m['float_int'].__bind_type__ = 0;
	$m['float_int'].__args__ = [null,null,['value'],['radix', null]];

var $radix_regex = [
    /^$/i,              //  0
    /^$/i,              //  1
    /^ *[01]+ *$/i,     //  2
    /^ *[0-2]+ *$/i,    //  3
    /^ *[0-3]+ *$/i,    //  4
    /^ *[0-4]+ *$/i,    //  5
    /^ *[0-5]+ *$/i,    //  6
    /^ *[0-6]+ *$/i,    //  7
    /^ *[0-7]+ *$/i,    //  8
    /^ *[0-8]+ *$/i,    //  9
    /^ *[0-9]+ *$/i,    // 10
    /^ *[0-9a]+ *$/i,   // 11
    /^ *[0-9ab]+ *$/i,  // 12
    /^ *[0-9a-c]+ *$/i, // 13
    /^ *[0-9a-d]+ *$/i, // 14
    /^ *[0-9a-e]+ *$/i, // 15
    /^ *[0-9a-f]+ *$/i, // 16
    /^ *[0-9a-g]+ *$/i, // 17
    /^ *[0-9a-h]+ *$/i, // 18
    /^ *[0-9a-i]+ *$/i, // 19
    /^ *[0-9a-j]+ *$/i, // 20
    /^ *[0-9a-k]+ *$/i, // 21
    /^ *[0-9a-l]+ *$/i, // 22
    /^ *[0-9a-m]+ *$/i, // 23
    /^ *[0-9a-n]+ *$/i, // 24
    /^ *[0-9a-o]+ *$/i, // 25
    /^ *[0-9a-p]+ *$/i, // 26
    /^ *[0-9a-q]+ *$/i, // 27
    /^ *[0-9a-r]+ *$/i, // 28
    /^ *[0-9a-s]+ *$/i, // 29
    /^ *[0-9a-t]+ *$/i, // 30
    /^ *[0-9a-u]+ *$/i, // 31
    /^ *[0-9a-v]+ *$/i, // 32
    /^ *[0-9a-w]+ *$/i, // 33
    /^ *[0-9a-x]+ *$/i, // 34
    /^ *[0-9a-y]+ *$/i, // 35
    /^ *[0-9a-z]+ *$/i, // 36
];

(function(){
    /* XXX do not convert to $p['float_int'] - this is correct */
    var $int = pyjslib['int'] = function (value, radix) {
        var v, i;
        if (typeof radix == 'undefined' || radix === null) {
            if (typeof value == 'undefined') {
                throw $m['TypeError']("int() takes at least 1 argument");
            }
            if (typeof value['__int__'] != 'undefined') {
                return value['__int__']();
            }
            switch (value.__number__) {
                case 0x01:
                    value = value > 0 ? Math.floor(value) : Math.ceil(value);
                    break;
                case 0x02:
                    return value;
                case 0x04:
                    v = value.valueOf();
                    if (!($min_int <= v && v <= $max_int))
                        return value;
            }
            radix = null;
        }
        if (typeof this != 'object' || this.__number__ != 0x02) return new $int(value, radix);
        if (value.__number__) {
            if (radix !== null) throw $m['TypeError']("int() can't convert non-string with explicit base");
            v = value.valueOf();
        } else if (typeof value == 'string') {
            if (radix === null) {
                radix = 10;
            }
            if (value.match($radix_regex[radix]) === null) {
                value = value.lstrip();
                v = NaN;
            } else {
                v = parseInt(value, radix);
            }
        } else {
            throw $m['TypeError']("TypeError: int() argument must be a string or a number");
        }
        if (isNaN(v) || !isFinite(v)) {
            throw $m['ValueError']("invalid literal for int() with base " + radix + ": '" + value + "'");
        }
        if ($min_int <= v && v <= $max_int) {
            this.__v = v;
            return this;
        }
        return new pyjslib['long'](v);
    };
    $int.__init__ = function () {};
    $int.__number__ = 0x02;
    $int.__v = 0;
    $int.__name__ = 'int';
    $int.prototype = $int;
    $int.__class__ = $int;

    $int.toExponential = function (fractionDigits) {
        return (typeof fractionDigits == 'undefined' || fractionDigits === null) ? this.__v.toExponential() : this.__v.toExponential(fractionDigits);
    };

    $int.toFixed = function (digits) {
        return (typeof digits == 'undefined' || digits === null) ? this.__v.toFixed() : this.__v.toFixed(digits);
    };

    $int.toLocaleString = function () {
        return this.__v.toLocaleString();
    };

    $int.toPrecision = function (precision) {
        return (typeof precision == 'undefined' || precision === null) ? this.__v.toPrecision() : this.__v.toPrecision(precision);
    };

    $int.toString = function (radix) {
        return (typeof radix == 'undefined' || radix === null) ? this.__v.toString() : this.__v.toString(radix);
    };

    $int.valueOf = function () {
        return this.__v.valueOf();
    };

    $int.__str__ = function () {
        if (typeof this == 'function') return "<type '" + this.__name__ + "'>";
        if (this.__number__ == 0x02) return this.__v.toString();
        return this.toString();
    };

    $int.__repr__ = function () {
        if (typeof this == 'function') return "<type '" + this.__name__ + "'>";
        if (this.__number__ == 0x02) return this.__v.toString();
        return this.toString();
    };

    $int.__nonzero__ = function () {
        return this.__v != 0;
    };

    $int.__cmp__ = function (y) {
        return this.__v < y? -1 : (this.__v == y ? 0 : 1);
    };

    $int.__hash__ = function () {
        return this.__v;
    };

    $int.__invert__ = function () {
        return new $int(~this.__v);
    };

    $int.__lshift__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        if (y < 32) {
            var v = this.__v << y;
            if (v > this.__v) {
                return new $int(v);
            }
        }
        return new $p['float_int'](this.__v).__lshift__(y);
    };

    $int.__rlshift__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        if (this.__v < 32) {
            var v = y << this.__v;
            if (v > this.__v) {
                return new $int(v);
            }
        }
        return new $p['float_int'](y).__lshift__(this.__v);
    };

    $int.__rshift__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        return new $int(this.__v >> y);
    };

    $int.__rrshift__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        return new $int(y >> this.__v);
    };

    $int.__and__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        return new $int(this.__v & y);
    };

    $int.__rand__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        return new $int(y & this.__v);
    };

    $int.__xor__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        return new $int(this.__v ^ y);
    };

    $int.__rxor__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        return new $int(y ^ this.__v);
    };

    $int.__or__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        return new $int(this.__v | y);
    };

    $int.__ror__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        return new $int(y | this.__v);
    };

    $int.__oct__ = function () {
        return '0x'+this.__v.toString(8);
    };

    $int.__hex__ = function () {
        return '0x'+this.__v.toString(16);
    };

    $int.__pos__ = function () {
        return this;
    };

    $int.__neg__ = function () {
        return new $int(-this.__v);
    };

    $int.__abs__ = function () {
        if (this.__v >= 0) return this;
        return new $int(-this.__v);
    };

    $int.__add__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        var v = this.__v + y;
        if ($min_int <= v && v <= $max_int) {
            return new $int(v);
        }
        if (-$max_float_int < v && v < $max_float_int) {
            return new $p['float_int'](v);
        }
        return new $p['float_int'](this.__v).__add__(new $p['float_int'](y));
    };

    $int.__radd__ = $int.__add__;

    $int.__sub__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        var v = this.__v - y;
        if ($min_int <= v && v <= $max_int) {
            return new $int(v);
        }
        if (-$max_float_int < v && v < $max_float_int) {
            return new $p['float_int'](v);
        }
        return new $p['float_int'](this.__v).__sub__(new $p['float_int'](y));
    };

    $int.__rsub__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        var v = y -this.__v;
        if ($min_int <= v && v <= $max_int) {
            return new $int(v);
        }
        if (-$max_float_int < v && v < $max_float_int) {
            return new $p['float_int'](v);
        }
        return new $p['float_int'](y).__sub__(new $p['float_int'](this.__v));
    };

    $int.__floordiv__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        if (y == 0) throw $m['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(Math.floor(this.__v / y));
    };

    $int.__rfloordiv__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        if (this.__v == 0) throw $m['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(Math.floor(y / this.__v));
    };

    $int.__div__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        if (y == 0) throw $m['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(this.__v / y);
    };

    $int.__rdiv__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        if (this.__v == 0) throw $m['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(y / this.__v);
    };

    $int.__mul__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        var v = this.__v * y;
        if ($min_int <= v && v <= $max_int) {
            return new $int(v);
        }
        if (-$max_float_int < v && v < $max_float_int) {
            return new $p['float_int'](v);
        }
        return new $p['float_int'](this.__v).__mul__(new $p['float_int'](y));
    };

    $int.__rmul__ = $int.__mul__;

    $int.__mod__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        if (y == 0) throw $m['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(this.__v % y);
    };

    $int.__rmod__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        if (this.__v == 0) throw $m['ZeroDivisionError']('integer division or modulo by zero');
        return new $int(y % this.__v);
    };

    $int.__pow__ = function (y) {
        if (y.__number__ != 0x02) return $p['NotImplemented'];
        y = y.__v;
        var v = Math.pow(this.__v, y);
        if ($min_int <= v && v <= $max_int) {
            return new $int(v);
        }
        if (-$max_float_int < v && v < $max_float_int) {
            return new $p['float_int'](v);
        }
        return new $p['float_int'](this.__v).__pow__(new $p['float_int'](y));
    };
})();


(function(){

    var $log2 = Math.log(2);
    var $DigitValue = [
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            0,  1,  2,  3,  4,  5,  6,  7,  8,  9,  37, 37, 37, 37, 37, 37,
            37, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
            25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 37, 37, 37, 37,
            37, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
            25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37,
            37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37
    ];
    var $log_base_PyLong_BASE = new Array();
    var $convwidth_base = new Array();
    var $convmultmax_base = new Array();
    for (var i = 0; i < 37; i++) {
        $log_base_PyLong_BASE[i] = $convwidth_base[i] = $convmultmax_base[i] = 0;
    }
    var $cdigit = '0123456789abcdefghijklmnopqrstuvwxyz';


    var PyLong_SHIFT = 15;
    var PyLong_MASK = 0x7fff;
    var PyLong_BASE = 0x8000;

    var KARATSUBA_CUTOFF = 70;
    var KARATSUBA_SQUARE_CUTOFF = (2 * KARATSUBA_CUTOFF);

    var FIVEARY_CUTOFF = 8;

    function array_eq(a, b, n) {
        for (var i = 0 ; i < n; i++) {
            if (a[i] != b[i])
                return false;
        }
        return true;
    }

    function long_normalize(v) {
        var j = v.ob_size < 0 ? -v.ob_size:v.ob_size;
        var i = j;
        while (i > 0 && v.ob_digit[i-1] == 0) {
            i--;
        }
        if (i != j) {
            v.ob_size = v.ob_size < 0 ? -i:i;
        }
        return v;
    }

    function AsScaledDouble(vv) {
        var multiplier = PyLong_BASE; // 1L << PyLong_SHIFT == 1 << 15
        var neg, i, x, nbitsneeded;

        if (vv.ob_size < 0) {
            i = -vv.ob_size;
            neg = true;
        } else if (vv.ob_size > 0) {
            i = vv.ob_size;
            neg = false;
        } else {
            return [0.0, 0];
        }
        --i;
        x = vv.ob_digit[i];
        nbitsneeded = 56;
        while (i > 0 && nbitsneeded > 0) {
            --i;
            x = x * multiplier + vv.ob_digit[i];
            nbitsneeded -= PyLong_SHIFT;
        }
        if (neg) {
            return [-x, i];
        }
        return [x, i];
    }

    function v_iadd(x, m, y, n) {
        var i, carry = 0;
        for (i = 0; i < n; ++i) {
                carry += x[i] + y[i];
                x[i] = carry & PyLong_MASK;
                carry >>= PyLong_SHIFT;
        }
        for (; carry && i < m; ++i) {
                carry += x[i];
                x[i] = carry & PyLong_MASK;
                carry >>= PyLong_SHIFT;
        }
        return carry;
    }

    function v_isub(x, m, y, n) {
        var i, borrow = 0;
        for (i = 0; i < n; ++i) {
                borrow = x[i] - y[i] - borrow;
                x[i] = borrow & PyLong_MASK;
                borrow >>= PyLong_SHIFT;
                borrow &= 1;
        }
        for (; borrow && i < m; ++i) {
                borrow = x[i] - borrow;
                x[i] = borrow & PyLong_MASK;
                borrow >>= PyLong_SHIFT;
                borrow &= 1;
        }
        return borrow;
    }

    //function mul1(a, n) {
    //    return muladd1(a, n, 0);
    //}

    function muladd1(z, a, n, extra) {
        var size_a = a.ob_size < 0 ? -a.ob_size : a.ob_size;
        var carry = extra, i;

        for (i = 0; i < size_a; ++i) {
                carry += a.ob_digit[i] * n;
                z.ob_digit[i] = carry & PyLong_MASK;
                carry >>= PyLong_SHIFT;
        }
        z.ob_digit[i] = carry;
        z.ob_size = i + 1;
        return long_normalize(z);
    }

    function inplace_divrem1(pout, pin, pout_idx, pin_idx, size, n) {
        var rem = 0, hi = 0;
        pin_idx += size;
        pout_idx += size;
        while (pin_idx > pin.length) {
            --size;
            --pin_idx;
            pout[--pout_idx] = 0;
        }
        while (--size >= 0) {
            rem = (rem << PyLong_SHIFT) + pin[--pin_idx];
            pout[--pout_idx] = hi = Math.floor(rem / n);
            rem -= hi * n;
        }
        return [rem, pout_idx, pin_idx];
    }

    function divrem1(a, n, prem) {
        var size = a.ob_size < 0 ? -a.ob_size : a.ob_size;
        var z = new $long(0);

        prem[0] = inplace_divrem1(z.ob_digit, a.ob_digit, 0, 0, size, n)[0];
        z.ob_size = size;
        return long_normalize(z);
    }

    function Format(aa, base, addL, newstyle, noBase) {
        var text, str, p, i, bits, sz, rem, sign = '';
        var c_0 = "0".charCodeAt(0);
        var c_a = "a".charCodeAt(0);
        base = base.valueOf();

        if (aa.ob_size == 0) {
            if (addL) {
                text = "0L";
            } else {
                text = "0";
            }
        } else {
            if (aa.ob_size < 0) {
                sign = '-';
                size_a = -aa.ob_size;
            } else {
                size_a = aa.ob_size;
            }
            i = base;
            bits = 0;
            while (i > 1) {
                ++bits;
                i >>>= 1;
            }
            i = addL ? 6 : 5;
            j = size_a * PyLong_SHIFT + bits - 1;
            sz = Math.floor(i + j / bits);
            if (j / PyLong_SHIFT < size_a || sz < i) {
                throw $m['OverflowError']("long is too large to format");
            }
            str = new Array();
            p = sz;
            if (addL) str[--p] = 'L';
            if ((base & (base - 1)) == 0) {
                var accum = 0, accumbits = 0, basebits = 1;
                i = base;
                while ((i >>>= 1) > 1) ++basebits;
                for (i = 0; i < size_a; ++i) {
                    accum |= aa.ob_digit[i] << accumbits;
                    accumbits += PyLong_SHIFT;
                    while (1) {
                        var cdigit = accum & (base - 1);
                        str[--p] = $cdigit.charAt(cdigit);
                        accumbits -= basebits;
                        accum >>>= basebits;
                        if (i < size_a-1) {
                            if (accumbits < basebits) break;
                        } else if (accum <= 0) break;
                    }
                }
                text = str.join("");
            } else {
                // Not 0, and base not a power of 2.
                var scratch, pin, scratch_idx, pin_idx;
                var powbase = base, power = 1, size = size_a;
               
                while (1) {
                    var newpow = powbase * base;
                    if (newpow >>> PyLong_SHIFT)  /* doesn't fit in a digit */
                        break;
                    powbase = newpow;
                    ++power;
                }
                scratch = aa.ob_digit.slice(0);
                pin = aa.ob_digit;
                scratch_idx = pin_idx = 0;
                do {
                        var ntostore = power;
                        rem = inplace_divrem1(scratch, pin, scratch_idx, pin_idx, size, powbase);
                        scratch_idx = rem[1];
                        rem = rem[0];
                        pin = scratch;
                        pin_idx = 0;
                        if (pin[size - 1] == 0) {
                            --size;
                        }
                        do {
                            var nextrem = Math.floor(rem / base);
                            str[--p] = $cdigit.charAt(rem - nextrem * base);
                            rem = nextrem;
                            --ntostore;
                        } while (ntostore && (size || rem));
                } while (size !=0);
                text = str.slice(p).join("");
            }
            text = text.lstrip('0');
            if (text == "" || text == "L") text = "0" + text;
        }
        if (noBase !== false) {
            switch (base) {
                case 10:
                    break;
                case 2:
                    text = '0b' + text;
                    break;
                case 8:
                    text = (newstyle ? '0o':(aa.ob_size ? '0': '')) + text;
                    break;
                case 16:
                    text = '0x' + text;
                    break;
                default:
                    text = base + '#' + text;
                    break;
            }
        }
        return sign + text;
    }

    function long_divrem(a, b, pdiv, prem) {
        var size_a = a.ob_size < 0 ? -a.ob_size : a.ob_size;
        var size_b = b.ob_size < 0 ? -b.ob_size : b.ob_size;
        var z = null;

        if (size_b == 0) {
            throw $m['ZeroDivisionError']("long division or modulo by zero");
        }
        if (size_a < size_b ||
            (size_a == size_b &&
             a.ob_digit[size_a-1] < b.ob_digit[size_b-1])) {
                // |a| < |b|
                pdiv.ob_size = 0;
                prem.ob_digit = a.ob_digit.slice(0);
                prem.ob_size = a.ob_size;
                return 0;
        }
        if (size_b == 1) {
                rem = [0];
                prem.ob_digit = [0];
                prem.ob_size = 1;
                z = divrem1(a, b.ob_digit[0], prem.ob_digit);
                prem = long_normalize(prem);
        }
        else {
                z = x_divrem(a, b, prem);
        }
        if (z === null) {
            pdiv.ob_size = 0;
        } else {
            pdiv.ob_digit = z.ob_digit.slice(0);
            pdiv.ob_size = z.ob_size;
        }
        if ((a.ob_size < 0) != (b.ob_size < 0))
                pdiv.ob_size = -(pdiv.ob_size);
        if (a.ob_size < 0 && prem.ob_size != 0)
                prem.ob_size = -prem.ob_size;
        return 0;
    }

    function x_divrem(v1, w1, prem) {
        var size_w = w1.ob_size < 0 ? -w1.ob_size : w1.ob_size;
        var d = Math.floor(PyLong_BASE / (w1.ob_digit[size_w-1] + 1));
        var v = muladd1($x_divrem_v, v1, d, 0);
        var w = muladd1($x_divrem_w, w1, d, 0);
        var a, j, k;
        var size_v = v.ob_size < 0 ? -v.ob_size : v.ob_size;
        k = size_v - size_w;
        a = new $long(0);
        a.ob_size = k + 1;

        for (j = size_v; k >= 0; --j, --k) {
            var vj = (j >= size_v) ? 0 : v.ob_digit[j];
            var carry = 0;
            var q, i;

            if (vj == w.ob_digit[size_w-1])
                q = PyLong_MASK;
            else
                q = Math.floor(((vj << PyLong_SHIFT) + v.ob_digit[j-1]) /
                        w.ob_digit[size_w-1]);

            while (w.ob_digit[size_w-2]*q >
                    ((
                        (vj << PyLong_SHIFT)
                        + v.ob_digit[j-1]
                        - q*w.ob_digit[size_w-1]
                                                ) << PyLong_SHIFT)
                    + v.ob_digit[j-2])
                --q;

            for (i = 0; i < size_w && i+k < size_v; ++i) {
                var z = w.ob_digit[i] * q;
                var zz = z >>> PyLong_SHIFT;
                carry += v.ob_digit[i+k] - z
                        + (zz << PyLong_SHIFT);
                v.ob_digit[i+k] = carry & PyLong_MASK;
                // carry = Py_ARITHMETIC_RIGHT_SHIFT(BASE_TWODIGITS_TYPE, carry, PyLong_SHIFT);
                carry >>= PyLong_SHIFT;
                carry -= zz;
            }

            if (i+k < size_v) {
                carry += v.ob_digit[i+k];
                v.ob_digit[i+k] = 0;
            }

            if (carry == 0)
                a.ob_digit[k] = q;
            else {
                a.ob_digit[k] = q-1;
                carry = 0;
                for (i = 0; i < size_w && i+k < size_v; ++i) {
                    carry += v.ob_digit[i+k] + w.ob_digit[i];
                    v.ob_digit[i+k] = carry & PyLong_MASK;
                    // carry = Py_ARITHMETIC_RIGHT_SHIFT( BASE_TWODIGITS_TYPE, carry, PyLong_SHIFT);
                    carry >>= PyLong_SHIFT;
                }
            }
        } /* for j, k */

        i = divrem1(v, d, prem);
        prem.ob_digit = i.ob_digit.slice(0);
        prem.ob_size = i.ob_size;
        return long_normalize(a);
    }

    function x_add(a, b) {
        var size_a = a.ob_size < 0 ? -a.ob_size : a.ob_size;
        var size_b = b.ob_size < 0 ? -b.ob_size : b.ob_size;
        var z = new $long(0);
        var i;
        var carry = 0;

        if (size_a < size_b) {
            var temp = a;
            a = b;
            b = temp;
            temp = size_a;
            size_a = size_b;
            size_b = temp;
        }
        for (i = 0; i < size_b; ++i) {
                carry += a.ob_digit[i] + b.ob_digit[i];
                z.ob_digit[i] = carry & PyLong_MASK;
                carry >>>= PyLong_SHIFT;
        }
        for (; i < size_a; ++i) {
                carry += a.ob_digit[i];
                z.ob_digit[i] = carry & PyLong_MASK;
                carry >>>= PyLong_SHIFT;
        }
        z.ob_digit[i] = carry;
        z.ob_size = i+1;
        return long_normalize(z);
    }

    function x_sub(a, b) {
        var size_a = a.ob_size < 0 ? -a.ob_size : a.ob_size;
        var size_b = b.ob_size < 0 ? -b.ob_size : b.ob_size;
        var z = new $long(0);
        var i;
        var borrow = 0;
        var sign = 1;

        if (size_a < size_b) {
            var temp = a;
            a = b;
            b = temp;
            temp = size_a;
            size_a = size_b;
            size_b = temp;
            sign = -1;
        } else if (size_a == size_b) {
            i = size_a;
            while (--i >= 0 && a.ob_digit[i] == b.ob_digit[i])
                ;
            if (i < 0)
                return z;
            if (a.ob_digit[i] < b.ob_digit[i]) {
                var temp = a;
                a = b;
                b = temp;
                temp = size_a;
                size_a = size_b;
                size_b = temp;
                sign = -1;
            }
            size_a = size_b = i+1;
        }
        for (i = 0; i < size_b; ++i) {
                borrow = a.ob_digit[i] - b.ob_digit[i] - borrow;
                z.ob_digit[i] = borrow & PyLong_MASK;
                borrow >>>= PyLong_SHIFT;
                borrow &= 1;
        }
        for (; i < size_a; ++i) {
                borrow = a.ob_digit[i] - borrow;
                z.ob_digit[i] = borrow & PyLong_MASK;
                borrow >>>= PyLong_SHIFT;
                borrow &= 1;
        }
        z.ob_size = i;
        if (sign < 0)
            z.ob_size = -(z.ob_size);
        return long_normalize(z);
    }

    function x_mul(a, b) {
        var size_a = a.ob_size < 0 ? -a.ob_size : a.ob_size;
        var size_b = b.ob_size < 0 ? -b.ob_size : b.ob_size;
        var z = new $long(0);
        var i, s;

        z.ob_size = size_a + size_b;
        for (i = 0; i < z.ob_size; i++) {
            z.ob_digit[i] = 0;
        }
        if (size_a == size_b && array_eq(a.ob_digit, b.ob_digit, size_a)) {
            // Efficient squaring per HAC, Algorithm 14.16:
            for (i = 0; i < size_a; ++i) {
                var carry;
                var f = a.ob_digit[i];
                var pz = (i << 1);
                var pa = i + 1;
                var paend = size_a;

                carry = z.ob_digit[pz] + f * f;
                z.ob_digit[pz++] = carry & PyLong_MASK;
                carry >>>= PyLong_SHIFT;

                f <<= 1;
                while (pa < paend) {
                    carry += z.ob_digit[pz] + a.ob_digit[pa++] * f;
                    z.ob_digit[pz++] = carry & PyLong_MASK;
                    carry >>>= PyLong_SHIFT;
                }
                if (carry) {
                    carry += z.ob_digit[pz];
                    z.ob_digit[pz++] = carry & PyLong_MASK;
                    carry >>>= PyLong_SHIFT;
                }
                if (carry) {
                    z.ob_digit[pz] += carry & PyLong_MASK;
                }
            }
        }
        else {  // a is not the same as b -- gradeschool long mult
            for (i = 0; i < size_a; ++i) {
                var carry = 0;
                var f = a.ob_digit[i];
                var pz = i;
                var pb = 0;
                var pbend = size_b;

                while (pb < pbend) {
                    carry += z.ob_digit[pz] + b.ob_digit[pb++] * f;
                    z.ob_digit[pz++] = carry & PyLong_MASK;
                    carry >>>= PyLong_SHIFT;
                }
                if (carry) {
                    z.ob_digit[pz] += carry & PyLong_MASK;
                }
            }
        }
        z.ob_size = z.ob_digit.length;
        return long_normalize(z);
    }

    function l_divmod(v, w, pdiv, pmod) {
        var div = $l_divmod_div, 
            mod = $l_divmod_mod; 

        if (long_divrem(v, w, div, mod) < 0)
                return -1;
        if (pdiv == null && pmod == null) return 0;

        if ((mod.ob_size < 0 && w.ob_size > 0) ||
            (mod.ob_size > 0 && w.ob_size < 0)) {
                mod = mod.__add__(w);
                div = div.__sub__($const_long_1);
        }
        if (pdiv !== null) {
            pdiv.ob_digit = div.ob_digit.slice(0);
            pdiv.ob_size = div.ob_size;
        }
        if (pmod !== null) {
            pmod.ob_digit = mod.ob_digit.slice(0);
            pmod.ob_size = mod.ob_size;
        }
        return 0;
    }



    /* XXX do not convert to $p['float_int'] - this is correct */
    var $long = pyjslib['long'] = function(value, radix) {
        var v, i;
        if (!radix || radix.valueOf() == 0) {
            if (typeof value == 'undefined') {
                throw $m['TypeError']("long() takes at least 1 argument");
            }
            switch (value.__number__) {
                case 0x01:
                    value = value > 0 ? Math.floor(value) : Math.ceil(value);
                    break;
                case 0x02:
                    break;
                case 0x04:
                    return value;
            }
            radix = null;
        }
        if (typeof this != 'object' || this.__number__ != 0x04) return new $long(value, radix);

        v = value;
        this.ob_size = 0;
        this.ob_digit = new Array();
        if (v.__number__) {
            if (radix) {
                throw $m['TypeError']("long() can't convert non-string with explicit base");
            }
            if (v.__number__ == 0x04) {
                var size = v.ob_size < 0 ? -v.ob_size:v.ob_size;
                for (var i = 0; i < size; i++) {
                    this.ob_digit[i] = v.ob_digit[i];
                }
                this.ob_size = v.ob_size;
                return this;
            }
            if (v.__number__ == 0x02) {
                var neg = false;
                var ndig = 0;
                v = v.valueOf();

                if (v < 0) {
                    v = -v;
                    neg = true;
                }
                // Count the number of Python digits.
                var t = v;
                while (t) {
                    this.ob_digit[ndig] = t & PyLong_MASK;
                    t >>>= PyLong_SHIFT;
                    ++ndig;
                }
                this.ob_size = neg ? -ndig : ndig;
                return this;
            }
            if (v.__number__ == 0x01) {
                var ndig, frac, expo, bits;
                var neg = false;

                if (isNaN(v)) {
                    throw $m['ValueError']('cannot convert float NaN to integer');
                }
                if (!isFinite(v)) {
                    throw $m['OverflowError']('cannot convert float infinity to integer');
                }
                if (v == 0) {
                    this.ob_digit[0] = 0;
                    this.ob_size = 0;
                    return this;
                }
                if (v < 0) {
                    v = -v;
                    neg = true;
                }
                // frac = frexp(dval, &expo); // dval = frac*2**expo; 0.0 <= frac < 1.0
                if (v == 0) {
                    frac = 0;
                    expo = 0;
                } else {
                    expo = Math.log(v)/$log2;
                    expo = (expo < 0 ? Math.ceil(expo):Math.floor(expo)) + 1;
                    frac = v / Math.pow(2.0, expo);
                }
                if (expo <= 0) {
                    return this;
                }
                ndig = Math.floor((expo-1) / PyLong_SHIFT) + 1;
                // ldexp(a,b) == a * (2**b)
                frac = frac * Math.pow(2.0, ((expo-1) % PyLong_SHIFT) + 1);
                for (var i = ndig; --i >= 0;) {
                    bits = Math.floor(frac);
                    this.ob_digit[i] = bits;
                    frac -= bits;
                    frac = frac * Math.pow(2.0, PyLong_SHIFT);
                }
                this.ob_size = neg ? -ndig : ndig;
                return this;
            }
            throw $m['ValueError']('cannot convert ' + $p['repr']($m.value) + 'to integer');
        } else if (typeof v == 'string') {
            var nchars;
            var text = value.lstrip();
            var i = 0;
            var neg = false;

            switch (text.charAt(0)) {
                case '-':
                    neg = true;
                case '+':
                    text = text.slice(1).lstrip();
            }

            if (!radix) {
                if (text == '0' || text.charAt(0) != '0') {
                    radix = 10;
                } else {
                    switch (text.charAt(1)) {
                        case 'x':
                        case 'X':
                            radix = 16;
                            break;
                        case 'o':
                        case 'O':
                            radix = 8;
                            break;
                        case 'b':
                        case 'B':
                            radix = 2;
                            break;
                        default:
                            radix = 8;
                            break;
                    }
                }
            } else if (radix < 1 || radix > 36) {
                throw $m['ValueError']("long() arg 2 must be >= 2 and <= 36");
            }
            if (text.charAt(0) == '0' && text.length > 1) {
                switch (text.charAt(1)) {
                    case 'x':
                    case 'X':
                        if (radix == 16) text = text.slice(2);
                        break;
                    case 'o':
                    case 'O':
                        if (radix == 8) text = text.slice(2);
                        break;
                    case 'b':
                    case 'B':
                        if (radix == 2) text = text.slice(2);
                        break;

                }
            }
            if ((radix & (radix - 1)) == 0) {
                // binary base: 2, 4, 8, ...
                var n, bits_per_char, accum, bits_in_accum, k, pdigit;
                var p = 0;

                n = radix;
                for (bits_per_char = -1; n; ++bits_per_char) {
                    n >>>= 1;
                }
                n = 0;
                while ($DigitValue[text.charCodeAt(p)] < radix) {
                    p++;
                }
                nchars = p;
                n = p * bits_per_char + PyLong_SHIFT-1; //14 = PyLong_SHIFT - 1
                if (n / bits_per_char < p) {
                    throw $m['ValueError']("long string too large to convert");
                }
                this.ob_size = n = Math.floor(n/PyLong_SHIFT);
                for (var i = 0; i < n; i++) {
                    this.ob_digit[i] = 0;
                }
                // Read string from right, and fill in long from left
                accum = 0;
                bits_in_accum = 0;
                pdigit = 0;
                while (--p >= 0) {
                    k = $DigitValue[text.charCodeAt(p)];
                    accum |= k << bits_in_accum;
                    bits_in_accum += bits_per_char;
                    if (bits_in_accum >= PyLong_SHIFT) {
                        this.ob_digit[pdigit] = accum & PyLong_MASK;
                        pdigit++;
                        accum >>>= PyLong_SHIFT;
                        bits_in_accum -= PyLong_SHIFT;
                    }
                }
                if (bits_in_accum) {
                    this.ob_digit[pdigit++] = accum;
                }
                while (pdigit < n) {
                    this.ob_digit[pdigit++] = 0;
                }
                long_normalize(this);
            } else {
                // Non-binary bases (such as radix == 10)
                var c, i, convwidth, convmultmax, convmult, pz, pzstop, scan, size_z;

                if ($log_base_PyLong_BASE[radix] == 0.0) {
                    var i = 1;
                    var convmax = radix;
                    $log_base_PyLong_BASE[radix] = Math.log(radix) / Math.log(PyLong_BASE);
                    while (1) {
                        var next = convmax * radix;
                        if (next > PyLong_BASE) break;
                        convmax = next;
                        ++i;
                    }
                    $convmultmax_base[radix] = convmax;
                    $convwidth_base[radix] = i;
                }
                scan = 0;
                while ($DigitValue[text.charCodeAt(scan)] < radix)
                    ++scan;
                nchars = scan;
                size_z = scan * $log_base_PyLong_BASE[radix] + 1;
                for (var i = 0; i < size_z; i ++) {
                    this.ob_digit[i] = 0;
                }
                this.ob_size = 0;
                convwidth = $convwidth_base[radix];
                convmultmax = $convmultmax_base[radix];
                for (var str = 0; str < scan;) {
                    c = $DigitValue[text.charCodeAt(str++)];
                    for (i = 1; i < convwidth && str != scan; ++i, ++str) {
                        c = c * radix + $DigitValue[text.charCodeAt(str)];
                    }
                    convmult = convmultmax;
                    if (i != convwidth) {
                        convmult = radix;
                        for ( ; i > 1; --i) convmult *= radix;
                    }
                    pz = 0;
                    pzstop = this.ob_size;
                    for (; pz < pzstop; ++pz) {
                        c += this.ob_digit[pz] * convmult;
                        this.ob_digit[pz] = c & PyLong_MASK;
                        c >>>= PyLong_SHIFT;
                    }
                    if (c) {
                        if (this.ob_size < size_z) {
                            this.ob_digit[pz] = c;
                            this.ob_size++;
                        } else {
                            this.ob_digit[this.ob_size] = c;
                        }
                    }
                }
            }
            text = text.slice(nchars);
            if (neg) this.ob_size = -this.ob_size;
            if (text.charAt(0) == 'l' || text.charAt(0) == 'L') text = text.slice(1);
            text = text.lstrip();
            if (text.length === 0) {
                return this;
            }
            throw $m['ValueError']("invalid literal for long() with base " +
                                     radix + ": " + value);
        } else {
            throw $m['TypeError']("TypeError: long() argument must be a string or a number");
        }
        if (isNaN(v) || !isFinite(v)) {
            throw $m['ValueError']("invalid literal for long() with base " + radix + ": '" + v + "'");
        }
        return this;
    };
    $long.__init__ = function () {};
    $long.__number__ = 0x04;
    $long.__name__ = 'long';
    $long.prototype = $long;
    $long.__class__ = $long;
    $long.ob_size = 0;

    $long.toExponential = function (fractionDigits) {
        return (typeof fractionDigits == 'undefined' || fractionDigits === null) ? this.__v.toExponential() : this.__v.toExponential(fractionDigits);
    };

    $long.toFixed = function (digits) {
        return (typeof digits == 'undefined' || digits === null) ? this.__v.toFixed() : this.__v.toFixed(digits);
    };

    $long.toLocaleString = function () {
        return this.__v.toLocaleString();
    };

    $long.toPrecision = function (precision) {
        return (typeof precision == 'undefined' || precision === null) ? this.__v.toPrecision() : this.__v.toPrecision(precision);
    };

    $long.toString = function (radix) {
        return (typeof radix == 'undefined' || radix === null) ? Format(this, 10, false, false) : Format(this, radix, false, false, false);
    };

    $long.valueOf = function() {
        var x, v;
        x = AsScaledDouble(this);
        // ldexp(a,b) == a * (2**b)
        v = x[0] * Math.pow(2.0, x[1] * PyLong_SHIFT);
        if (!isFinite(v)) {
            throw $m['OverflowError']('long int too large to convert to float');
        }
        return v;
    };

    $long.__str__ = function () {
        if (typeof this == 'function') return "<type '" + this.__name__ + "'>";
        return Format(this, 10, false, false);
    };

    $long.__repr__ = function () {
        if (typeof this == 'function') return "<type '" + this.__name__ + "'>";
        return Format(this, 10, true, false);
    };

    $long.__nonzero__ = function () {
        return this.ob_size != 0;
    };

    $long.__cmp__ = function (b) {
        var sign;
 
        if (this.ob_size != b.ob_size) {
            if (this.ob_size < b.ob_size) return -1;
            return 1;
        }
        var i = this.ob_size < 0 ? - this.ob_size : this.ob_size;
        while (--i >= 0 && this.ob_digit[i] == b.ob_digit[i])
            ;
        if (i < 0) return 0;
        if (this.ob_digit[i] < b.ob_digit[i]) {
            if (this.ob_size < 0) return 1;
            return -1;
        }
        if (this.ob_size < 0) return -1;
        return 1;
    };

    $long.__hash__ = function () {
        var s = this.__str__();
        var v = this.valueOf();
        if (v.toString() == s) {
            return v;
        }
        return s;
    };

    $long.__invert__ = function () {
        var x = this.__add__($const_long_1);
        x.ob_size = -x.ob_size;
        return x;
    };

    $long.__neg__ = function () {
        var x = new $long(0);
        x.ob_digit = this.ob_digit.slice(0);
        x.ob_size = -this.ob_size;
        return x;
    };

    $long.__abs__ = function () {
        if (this.ob_size >= 0) return this;
        var x = new $long(0);
        x.ob_digit = this.ob_digit.slice(0);
        x.ob_size = -x.ob_size;
        return x;
    };

    $long.__lshift = function (y) {
        var a, z, wordshift, remshift, oldsize, newsize, 
            accum, i, j;
        if (y < 0) {
            throw $m['ValueError']('negative shift count');
        }
        if (y >= $max_float_int) {
            throw $m['ValueError']('outrageous left shift count');
        }
        a = this;

        wordshift = Math.floor(y / PyLong_SHIFT);
        remshift  = y - wordshift * PyLong_SHIFT;

        oldsize = a.ob_size < 0 ? -a.ob_size : a.ob_size;
        newsize = oldsize + wordshift;
        if (remshift) ++newsize;
        z = new $long(0);
        z.ob_size = a.ob_size < 0 ? -newsize : newsize;
        for (i = 0; i < wordshift; i++) {
            z.ob_digit[i] = 0;
        }
        accum = 0;
        for (i = wordshift, j = 0; j < oldsize; i++, j++) {
            accum |= a.ob_digit[j] << remshift;
            z.ob_digit[i] = accum & PyLong_MASK;
            accum >>>= PyLong_SHIFT;
        }
        if (remshift) {
            z.ob_digit[newsize-1] = accum;
        }
        z = long_normalize(z);
        return z;
    };

    $long.__lshift__ = function (y) {
        switch (y.__number__) {
            case 0x01:
                if (y == Math.floor(y)) return this.__lshift(y);
                break;
            case 0x02:
                return this.__lshift(y.__v);
            case 0x04:
                y = y.valueOf();
                return this.__lshift(y);
        }
        return $p['NotImplemented'];
    };

    $long.__rlshift__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return (new $long(y.__v)).__lshift(this.valueOf());
            case 0x04:
                return y.__lshift(this.valueOf());
        }
        return $p['NotImplemented'];
    };

    $long.__rshift = function (y) {
        var a, z, size, wordshift, newsize, loshift, hishift,
            lomask, himask, i, j;
        if (y.__number__ != 0x01) {
            y = y.valueOf();
        } else {
            if (y != Math.floor(y)) {
                throw $m['TypeError']("unsupported operand type(s) for >>: 'long' and 'float'");
            }
        }
        if (y < 0) {
            throw $m['ValueError']('negative shift count');
        }
        if (y >= $max_float_int) {
            throw $m['ValueError']('shift count too big');
        }
        a = this;
        size = this.ob_size;
        if (this.ob_size < 0) {
            size = -size;
            a = this.__add__($const_long_1);
            a.ob_size = -a.ob_size;
        }

        wordshift = Math.floor(y / PyLong_SHIFT);
        newsize = size - wordshift;
        if (newsize <= 0) {
            z = $const_long_0;
        } else {
            loshift = y % PyLong_SHIFT;
            hishift = PyLong_SHIFT - loshift;
            lomask = (1 << hishift) - 1;
            himask = PyLong_MASK ^ lomask;
            z = new $long(0);
            z.ob_size = a.ob_size < 0 ? -newsize : newsize;
            for (i = 0, j = wordshift; i < newsize; i++, j++) {
                z.ob_digit[i] = (a.ob_digit[j] >>> loshift) & lomask;
                if (i+1 < newsize) {
                    z.ob_digit[i] |=
                      (a.ob_digit[j+1] << hishift) & himask;
                }
            }
            z = long_normalize(z);
        }

        if (this.ob_size < 0) {
            z = z.__add__($const_long_1);
            z.ob_size = -z.ob_size;
        }
        return z;
    };

    $long.__rshift__ = function (y) {
        switch (y.__number__) {
            case 0x01:
                if (y == Math.floor(y)) return this.__rshift(y);
                break;
            case 0x02:
                return this.__rshift(y.__v);
            case 0x04:
                y = y.valueOf();
                return this.__rshift(y);
        }
        return $p['NotImplemented'];
    };

    $long.__rrshift__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return (new $long(y.__v)).__rshift(this.valueOf());
            case 0x04:
                return y.__rshift(this.valueOf());
        }
        return $p['NotImplemented'];
    };

    $long.__and = function (b) {
        var a, maska, maskb, negz, size_a, size_b, size_z,
            i, z, diga, digb, v, op;

        a = this;

        if (a.ob_size < 0) {
            a = a.__invert__();
            maska = PyLong_MASK;
        } else {
            maska = 0;
        }
        if (b.ob_size < 0) {
            b = b.__invert__();
            maskb = PyLong_MASK;
        } else {
            maskb = 0;
        }
        negz = 0;


            op = '&';
            if (maska && maskb) {
                op = '|';
                maska ^= PyLong_MASK;
                maskb ^= PyLong_MASK;
                negz = -1;
            }


        size_a = a.ob_size;
        size_b = b.ob_size;
        size_z = op == '&'
                    ? (maska
                        ? size_b
                        : (maskb ? size_a : (size_a < size_b ? size_a : size_b)))
                    : (size_a > size_b ? size_a : size_b);
        z = new $long(0);
        z.ob_size = size_z;

        switch (op) {
            case '&':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga & digb;
                }
                break;
            case '|':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga | digb;
                }
                break;
            case '^':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga ^ digb;
                }
                break;
        }
        z = long_normalize(z);
        if (negz == 0) {
            return z;
        }
        return z.__invert__();
    };

    $long.__and__ = function (y) {
        switch (y.__number__) {
            case 0x01:
                if (y == Math.floor(y)) return this.__and(new $long(y));
                break;
            case 0x02:
                return this.__and(new $long(y.__v));
            case 0x04:
                return this.__and(y);
        }
        return $p['NotImplemented'];
    };

    $long.__rand__ = $long.__and__;

    $long.__xor = function (b) {
        var a,maska, maskb, negz, size_a, size_b, size_z,
            i, z, diga, digb, v, op;

        a = this;

        if (a.ob_size < 0) {
            a = a.__invert__();
            maska = PyLong_MASK;
        } else {
            maska = 0;
        }
        if (b.ob_size < 0) {
            b = b.__invert__();
            maskb = PyLong_MASK;
        } else {
            maskb = 0;
        }
        negz = 0;


            op = '^';
            if (maska != maskb) {
                maska ^= PyLong_MASK;
                negz = -1;
            }


        size_a = a.ob_size;
        size_b = b.ob_size;
        size_z = op == '&'
                    ? (maska
                        ? size_b
                        : (maskb ? size_a : (size_a < size_b ? size_a : size_b)))
                    : (size_a > size_b ? size_a : size_b);
        z = new $long(0);
        z.ob_size = size_z;

        switch (op) {
            case '&':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga & digb;
                }
                break;
            case '|':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga | digb;
                }
                break;
            case '^':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga ^ digb;
                }
                break;
        }
        z = long_normalize(z);
        if (negz == 0) {
            return z;
        }
        return z.__invert__();
    };

    $long.__xor__ = function (y) {
        switch (y.__number__) {
            case 0x01:
                if (y == Math.floor(y)) return this.__xor(new $long(y));
                break;
            case 0x02:
                return this.__xor(new $long(y.__v));
            case 0x04:
                return this.__xor(y);
        }
        return $p['NotImplemented'];
    };

    $long.__rxor__ = $long.__xor__;

    $long.__or = function (b) {
        var a, maska, maskb, negz, size_a, size_b, size_z,
            i, z, diga, digb, v, op;

        a = this;

        if (a.ob_size < 0) {
            a = a.__invert__();
            maska = PyLong_MASK;
        } else {
            maska = 0;
        }
        if (b.ob_size < 0) {
            b = b.__invert__();
            maskb = PyLong_MASK;
        } else {
            maskb = 0;
        }
        negz = 0;


            op = '|';
            if (maska || maskb) {
                op = '&';
                maska ^= PyLong_MASK;
                maskb ^= PyLong_MASK;
                negz = -1;
            }


        size_a = a.ob_size;
        size_b = b.ob_size;
        size_z = op == '&'
                    ? (maska
                        ? size_b
                        : (maskb ? size_a : (size_a < size_b ? size_a : size_b)))
                    : (size_a > size_b ? size_a : size_b);
        z = new $long(0);
        z.ob_size = size_z;

        switch (op) {
            case '&':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga & digb;
                }
                break;
            case '|':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga | digb;
                }
                break;
            case '^':
                for (i = 0; i < size_z; ++i) {
                    diga = (i < size_a ? a.ob_digit[i] : 0) ^ maska;
                    digb = (i < size_b ? b.ob_digit[i] : 0) ^ maskb;
                    z.ob_digit[i] = diga ^ digb;
                }
                break;
        }
        z = long_normalize(z);
        if (negz == 0) {
            return z;
        }
        return z.__invert__();
    };

    $long.__or__ = function (y) {
        switch (y.__number__) {
            case 0x01:
                if (y == Math.floor(y)) return this.__or(new $long(y));
                break;
            case 0x02:
                return this.__or(new $long(y.__v));
            case 0x04:
                return this.__or(y);
        }
        return $p['NotImplemented'];
    };

    $long.__ror__ = $long.__or__;

    $long.__oct__ = function () {
        return Format(this, 8, true, false);
    };

    $long.__hex__ = function () {
        return Format(this, 16, true, false);
    };

    $long.__add = function (b) {
        var a = this, z;
        if (a.ob_size < 0) {
            if (b.ob_size < 0) {
                z = x_add(a, b);
                z.ob_size = -(z.ob_size);
            }
            else {
                z = x_sub(b, a);
            }
        }
        else {
            z = b.ob_size < 0 ? x_sub(a, b) : x_add(a, b);
        }
        return z;
    };

    $long.__add__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return this.__add(new $long(y.__v));
            case 0x04:
                return this.__add(y);
        }
        return $p['NotImplemented'];
    };

    $long.__radd__ = $long.__add__;

    $long.__sub = function (b) {
        var a = this, z;
        if (a.ob_size < 0) {
            z = b.ob_size < 0 ? x_sub(a, b) : x_add(a, b);
            z.ob_size = -(z.ob_size);
        }
        else {
            z = b.ob_size < 0 ?  x_add(a, b) : x_sub(a, b);
        }
        return z;
    };

    $long.__sub__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return this.__sub(new $long(y.__v));
            case 0x04:
                return this.__sub(y);
        }
        return $p['NotImplemented'];
    };

    $long.__rsub__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return (new $long(y.__v)).__sub(this);
            case 0x04:
                return y.__sub(this);
        }
        return $p['NotImplemented'];
    };

    $long.__mul = function (b) {
        //var z = k_mul(a, b);
        var z = x_mul(this, b);
        if ((this.ob_size ^ b.ob_size) < 0)
            z.ob_size = -(z.ob_size);
        return z;
    };

    $long.__mul__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return this.__mul(new $long(y.__v));
            case 0x04:
                return this.__mul(y);
        }
        return $p['NotImplemented'];
    };

    $long.__rmul__ = $long.__mul__;

    $long.__div = function (b) {
        var div = new $long(0);
        l_divmod(this, b, div, null);
        return div;
    };

    $long.__div__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return this.__sub(new $long(y.__v));
            case 0x04:
                return this.__sub(y);
        }
        return $p['NotImplemented'];
    };

    $long.__rdiv__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return (new $long(y.__v)).__div(this);
            case 0x04:
                return y.__div(this);
        }
        return $p['NotImplemented'];
    };

    $long.__mod = function (b) {
        var mod = new $long(0);
        l_divmod(this, b, null, mod);
        return mod;
    };

    $long.__mod__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return this.__mod(new $long(y.__v));
            case 0x04:
                return this.__mod(y);
        }
        return $p['NotImplemented'];
    };

    $long.__rmod__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return (new $long(y.__v)).__mod(this);
            case 0x04:
                return y.__mod(this);
        }
        return $p['NotImplemented'];
    };

    $long.__divmod = function (b) {
        var div = new $long(0);
        var mod = new $long(0);
        l_divmod(this, b, div, mod);
        return $p['tuple']([div, mod]);
    };

    $long.__divmod__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return this.__divmod(new $long(y.__v));
            case 0x04:
                return this.__divmod(y);
        }
        return $p['NotImplemented'];
    };

    $long.__rdivmod__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return (new $long(y.__v)).__divmod(this);
            case 0x04:
                return y.__divmod(this);
        }
        return $p['NotImplemented'];
    };

    $long.__floordiv = function (b) {
        var div = new $long(0);
        l_divmod(this, b, div, null);
        return div;
    };

    $long.__floordiv__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return this.__floordiv(new $long(y.__v));
            case 0x04:
                return this.__floordiv(y);
        }
        return $p['NotImplemented'];
    };

    $long.__rfloordiv__ = function (y) {
        switch (y.__number__) {
            case 0x02:
                return (new $long(y.__v)).__floordiv(this);
            case 0x04:
                return y.__floordiv(this);
        }
        return $p['NotImplemented'];
    };

    $long.__pow = function (w, x) {
        var v = this;
        var a, b, c, negativeOutput = 0, z, i, j, k, temp, bi;
        var table = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
                     0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

        a = this;
        b = w.__number__ == 0x04 ? w : new $long(w);
        if (x === null || typeof x == 'undefined') {
            c = null;
        } else {
            c = x.__number__ == 0x04 ? x : new $long(x);
        }

        if (b.ob_size < 0) {
            if (c !== null) {
                throw $m['TypeError']("pow() 2nd argument cannot be negative when 3rd argument specified");
            }
            return Math.pow(v.valueOf(), w.valueOf());
        }

        if (c !== null) {
            if (c.ob_size == 0) {
                throw $m['ValueError']("pow() 3rd argument cannot be 0");
            }
            if (c.ob_size < 0) {
                negativeOutput = 1;
                temp = $pow_temp_c;
                temp.ob_digit = c.ob_digit.slice(0);
                temp.ob_size = -c.ob_size;
                c = temp;
            }
            if (c.ob_size == 1 && c.ob_digit[0] == 1) {
                return $const_long_0;
            }
            if (a.ob_size < 0) {
                temp = $pow_temp_a;
                l_divmod(a, c, null, temp);
                a = temp;
            }
        }
        z = new $long(1);
        temp = $pow_temp_z;
        if (b.ob_size <= FIVEARY_CUTOFF) {
            for (i = b.ob_size - 1; i >= 0; --i) {
                bi = b.ob_digit[i];
                for (j = 1 << (PyLong_SHIFT-1); j != 0; j >>>= 1) {
                    z = z.__mul(z);
                    if (c !== null) {
                        l_divmod(z, c, null, temp);
                        z.ob_digit = temp.ob_digit.slice(0);
                        z.ob_size = temp.ob_size;
                    }
                    if (bi & j) {
                        z = z.__mul(a);
                        if (c !== null) {
                            l_divmod(z, c, null, temp);
                            z.ob_digit = temp.ob_digit.slice(0);
                            z.ob_size = temp.ob_size;
                        }
                    }
                }
            }
        } else {
            table[0] = z;
            for (i = 1; i < 32; ++i) {
                table[i] = table[i-1].__mul(a);
                if (c !== null) {
                    l_divmod(table[i], c, null, temp);
                    table[i].ob_digit = temp.ob_digit.slice(0);
                    table[i].ob_size = temp.ob_size;
                }
            }
            for (i = b.ob_size - 1; i >= 0; --i) {
                bi = b.ob_digit[i];
                for (j = PyLong_SHIFT - 5; j >= 0; j -= 5) {
                    var index = (bi >>> j) & 0x1f;
                    for (k = 0; k < 5; ++k) {
                        z = z.__mul(z);
                        if (c !== null) {
                            l_divmod(z, c, null, temp);
                            z.ob_digit = temp.ob_digit.slice(0);
                            z.ob_size = temp.ob_size;
                        }
                    }
                    if (index) {
                        z = z.__mul(table[index]);
                        if (c !== null) {
                            l_divmod(z, c, null, temp);
                            z.ob_digit = temp.ob_digit.slice(0);
                            z.ob_size = temp.ob_size;
                        }
                    }
                }
            }
        }

        if ((c !== null) && negativeOutput && 
            (z.ob_size != 0) && (c.ob_size != 0)) {
            z = z.__sub__(c);
        }
        return z;
    };

    $long.__pow__ = function (y, z) {
        switch (y.__number__) {
            case 0x02:
                if (typeof z == 'undefined')
                    return this.__pow(new $long(y.__v), null);
                switch (z.__number) {
                    case 0x02:
                        return this.__pow(new $long(y.__v), new $long(z));
                    case 0x04:
                        return this.__pow(new $long(y.__v), z);
                }
                break;
            case 0x04:
                if (typeof z == 'undefined')
                    return this.__pow(y, null);
                switch (z.__number) {
                    case 0x02:
                        return this.__pow(y, new $long(z));
                    case 0x04:
                        return this.__pow(y, z);
                }
                break;
        }
        return $p['NotImplemented'];
    };


    var $const_long_0 = new $long(0),
        $const_long_1 = new $long(1);
    // Since javascript is single threaded:
    var $l_divmod_div = new $long(0),
        $l_divmod_mod = new $long(0),
        $x_divrem_v = new $long(0),
        $x_divrem_w = new $long(0),
        $pow_temp_a = new $long(0),
        $pow_temp_c = new $long(0),
        $pow_temp_z = new $long(0);
})();

	var attrib_remap = $m.attrib_remap = ['apply', 'break', 'call', 'case', 'catch', 'class', 'comment', 'const', 'constructor', 'continue', 'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally', 'for', 'function', 'if', 'import', 'in', 'label', 'name', 'new', 'prototype', 'replace', 'return', 'split', 'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while', 'with'];
	var var_remap = $m.var_remap = ['arguments', 'break', 'case', 'catch', 'char', 'class', 'comment', 'const', 'continue', 'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'final', 'finally', 'for', 'function', 'if', 'import', 'in', 'label', 'new', 'return', 'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while', 'with'];

	$m['NotImplementedType'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '9258a484d750bde802497a5914f531b5';
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return '\x3Ctype \x27NotImplementedType\x27\x3E';
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['__repr__']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$method = $pyjs__bind_method2('toString', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['__repr__']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toString'] = $method;
		var $bases = new Array($m['object']);
		return $pyjs_type('NotImplementedType', $bases, $cls_definition);
	})();
	$m['NotImplemented'] = $m['NotImplementedType']();

var $iter_array = function (l) {
    this.__array = l;
    this.i = -1;
};
$iter_array.prototype.next = function (noStop) {
    if (++this.i == this.__array.length) {
        if (noStop === true) {
            return;
        }
        throw $p['StopIteration'];
    }
    return this.__array[this.i];
};
$iter_array.prototype.__iter__ = function ( ) {
    return this;
};
var $reversed_iter_array = function (l) {
    this.___array = l;
    this.i = l.length;
};
$reversed_iter_array.prototype.next = function (noStop) {
    if (--this.i == -1) {
        if (noStop === true) {
            return;
        }
        throw $p['StopIteration'];
    }
    return this.___array[this.i];
};
$reversed_iter_array.prototype.__iter__ = function ( ) {
    return this;
};
//$reversed_iter_array.prototype.$genfunc = $reversed_iter_array.prototype.next;
var $enumerate_array = function (l) {
    this.array = l;
    this.i = -1;
    this.tuple = 
	$p['tuple']($p['list']([0, '']));

    this.tl = this.tuple.__array;
};
$enumerate_array.prototype.next = function (noStop, reuseTuple) {
    if (++this.i == this.array.length) {
        if (noStop === true) {
            return;
        }
        throw $p['StopIteration'];
    }
    this.tl[1] = this.array[this.i];
    if (this.tl[0].__number__ == 0x01) {
        this.tl[0] = this.i;
    } else {
        this.tl[0] = new $p['float_int'](this.i);
    }
    return reuseTuple === true ? this.tuple : $p['tuple'](this.tl);
};
$enumerate_array.prototype.__iter__ = function ( ) {
    return this;
};
$enumerate_array.prototype.$genfunc = $enumerate_array.prototype.next;

	$m['list'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'b5295eaccd33e9f6ae71377c3f67bbca';
		$method = $pyjs__bind_method2('__init__', function(data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}
			if (typeof data == 'undefined') data=arguments.callee.__args__[3][1];


        if (data === null) {
            throw $m['TypeError']("'NoneType' is not iterable");
        }
        if (data.constructor === Array) {
            self.__array = data.slice();
            return null;
        }
        if (typeof data.__iter__ == 'function') {
            if (typeof data.__array == 'object') {
                self.__array = data.__array.slice();
                return null;
            }
            var iter = data.__iter__();
            if (typeof iter.__array == 'object') {
                self.__array = iter.__array.slice();
                return null;
            }
            data = [];
            var item, i = 0;
            if (typeof iter.$genfunc == 'function') {
                while (typeof (item=iter.next(true)) != 'undefined') {
                    data[i++] = item;
                }
            } else {
                try {
                    while (true) {
                        data[i++] = iter.next();
                    }
                }
                catch (e) {
                    if (e.__name__ != 'StopIteration') throw e;
                }
            }
            self.__array = data;
            return null;
        }
        throw $m['TypeError']("'" + $p['repr'](data) + "' is not iterable");
        
		}
	, 1, [null,null,['self'],['data', []]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__hash__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			throw ($m['TypeError']('list objects are unhashable'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method2('append', function(item) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
			}

self.__array[self.__array.length] = item;
		}
	, 1, [null,null,['self'],['item']]);
		$cls_definition['append'] = $method;
		$method = $pyjs__bind_method2('extend', function(data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}


        if (data === null) {
            throw $m['TypeError']("'NoneType' is not iterable");
        }
        if (data.constructor === Array) {
        } else if (typeof data.__iter__ == 'function') {
            if (typeof data.__array == 'object') {
                data = data.__array;
            } else {
                var iter = data.__iter__();
                if (typeof iter.__array == 'object') {
                    data = iter.__array;
                }
                data = [];
                var item, i = 0;
                if (typeof iter.$genfunc == 'function') {
                    while (typeof (item=iter.next(true)) != 'undefined') {
                        data[i++] = item;
                    }
                } else {
                    try {
                        while (true) {
                            data[i++] = iter.next();
                        }
                    }
                    catch (e) {
                        if (e.__name__ != 'StopIteration') throw e;
                    }
                }
            }
        } else {
            throw $m['TypeError']("'" + $p['repr'](data) + "' is not iterable");
        }
        var l = self.__array;
        var j = self.__array.length;
        var n = data.length, i = 0;
        while (i < n) {
            l[j++] = data[i++];
        }
        
		}
	, 1, [null,null,['self'],['data']]);
		$cls_definition['extend'] = $method;
		$method = $pyjs__bind_method2('remove', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}


        var index=self.index(value);
        if (index<0) {
            throw $m['ValueError']("list.remove(x): x not in list");
        }
        self.__array.splice(index, 1);
        return true;
        
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('index', function(value, _start) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
				_start = arguments[2];
			}
			if (typeof _start == 'undefined') _start=arguments.callee.__args__[4][1];


        var start = _start.valueOf();
        /* if (typeof valueXXX == 'number' || typeof valueXXX == 'string') {
            start = selfXXX.__array.indexOf(valueXXX, start);
            if (start >= 0)
                return start;
        } else */ {
            var len = self.__array.length >>> 0;

            start = (start < 0)
                    ? Math.ceil(start)
                    : Math.floor(start);
            if (start < 0)
                start += len;

            for (; start < len; start++) {
                if ( /*start in selfXXX.__array && */
                    $m['cmp'](self.__array[start], value) == 0)
                    return start;
            }
        }
        
			throw ($m['ValueError']('list.index(x): x not in list'));
			return null;
		}
	, 1, [null,null,['self'],['value'],['_start', 0]]);
		$cls_definition['index'] = $method;
		$method = $pyjs__bind_method2('insert', function(index, value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				value = arguments[2];
			}

    var a = self.__array; self.__array=a.slice(0, index).concat(value, a.slice(index));
		}
	, 1, [null,null,['self'],['index'],['value']]);
		$cls_definition['insert'] = $method;
		$method = $pyjs__bind_method2('pop', function(_index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				_index = arguments[1];
			}
			if (typeof _index == 'undefined') _index=arguments.callee.__args__[3][1];


        var index = _index.valueOf();
        if (index<0) index += self.__array.length;
        if (index < 0 || index >= self.__array.length) {
            if (self.__array.length == 0) {
                throw $m['IndexError']("pop from empty list");
            }
            throw $m['IndexError']("pop index out of range");
        }
        var a = self.__array[index];
        self.__array.splice(index, 1);
        return a;
        
		}
	, 1, [null,null,['self'],['_index', (typeof ($usub1=1)=='number'?
			-$usub1:
			$m['op_usub']($usub1))]]);
		$cls_definition['pop'] = $method;
		$method = $pyjs__bind_method2('__cmp__', function(l) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				l = arguments[1];
			}

			if ($p['bool'](!$p['bool']($p['isinstance'](l, $m['list'])))) {
				return (typeof ($usub2=1)=='number'?
					-$usub2:
					$m['op_usub']($usub2));
			}

        var n1 = self.__array.length,
            n2 = l.__array.length,
            a1 = self.__array,
            a2 = l.__array,
            n, c;
        n = (n1 < n2 ? n1 : n2);
        for (var i = 0; i < n; i++) {
            c = $m['cmp'](a1[i], a2[i]);
            if (c) return c;
        }
        if (n1 < n2) return -1;
        if (n1 > n2) return 1;
        return 0;
		}
	, 1, [null,null,['self'],['l']]);
		$cls_definition['__cmp__'] = $method;
		$method = $pyjs__bind_method2('__getslice__', function(lower, upper) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				lower = arguments[1];
				upper = arguments[2];
			}


        if (upper==null)
            return $m['list'](self.__array.slice(lower));
        return $m['list'](self.__array.slice(lower, upper));
        
		}
	, 1, [null,null,['self'],['lower'],['upper']]);
		$cls_definition['__getslice__'] = $method;
		$method = $pyjs__bind_method2('__delslice__', function(_lower, upper) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				_lower = arguments[1];
				upper = arguments[2];
			}


        var lower = _lower;
        var n = upper - lower;
        if (upper==null) {
            n =  self.__array.length;
        }
        if (!lower) lower = 0;
        if (n > 0) self.__array.splice(lower, n);
        
			return null;
		}
	, 1, [null,null,['self'],['_lower'],['upper']]);
		$cls_definition['__delslice__'] = $method;
		$method = $pyjs__bind_method2('__setslice__', function(lower, upper, data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				lower = arguments[1];
				upper = arguments[2];
				data = arguments[3];
			}
			var tail;
			self['__delslice__'](lower, upper);
			tail = self['__getslice__'](lower, null);
			self['__delslice__'](lower, null);
			self['extend'](data);
			self['extend'](tail);
			return null;
		}
	, 1, [null,null,['self'],['lower'],['upper'],['data']]);
		$cls_definition['__setslice__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(_index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				_index = arguments[1];
			}


        var index = _index.valueOf();
        if (index < 0) index += self.__array.length;
        if (index < 0 || index >= self.__array.length) {
            throw $m['IndexError']("list index out of range");
        }
        return self.__array[index];
        
		}
	, 1, [null,null,['self'],['_index']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method2('__setitem__', function(_index, value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				_index = arguments[1];
				value = arguments[2];
			}


        var index = _index.valueOf();
        if (index < 0) index += self.__array.length;
        if (index < 0 || index >= self.__array.length) {
            throw $m['IndexError']("list assignment index out of range");
        }
        self.__array[index]=value;
        
		}
	, 1, [null,null,['self'],['_index'],['value']]);
		$cls_definition['__setitem__'] = $method;
		$method = $pyjs__bind_method2('__delitem__', function(_index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				_index = arguments[1];
			}


        var index = _index.valueOf();
        if (index < 0) index += self.__array.length;
        if (index < 0 || index >= self.__array.length) {
            throw $m['IndexError']("list assignment index out of range");
        }
        self.__array.splice(index, 1);
        
		}
	, 1, [null,null,['self'],['_index']]);
		$cls_definition['__delitem__'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self.__array.length;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('__contains__', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}
			var $pyjs_try_err;
			try {
				self['index'](value);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $m['ValueError'].__name__)||$p['_isinstance']($pyjs_try_err,$m['ValueError'])) {
					return false;
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			return true;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['__contains__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return new $iter_array(self.__array);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('__reversed__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return new $reversed_iter_array(self.__array);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__reversed__'] = $method;
		$method = $pyjs__bind_method2('__enumerate__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return new $enumerate_array(self.__array);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__enumerate__'] = $method;
		$method = $pyjs__bind_method2('reverse', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

    self.__array.reverse();
		}
	, 1, [null,null,['self']]);
		$cls_definition['reverse'] = $method;
		$method = $pyjs__bind_method2('sort', function(cmp, key, reverse) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cmp = arguments[1];
				key = arguments[2];
				reverse = arguments[3];
			}
			if (typeof cmp == 'undefined') cmp=arguments.callee.__args__[3][1];
			if (typeof key == 'undefined') key=arguments.callee.__args__[4][1];
			if (typeof reverse == 'undefined') reverse=arguments.callee.__args__[5][1];
			var thisSort1,thisSort2,$and18,$and19,thisSort3;
			if ($p['bool']((cmp === null))) {
				cmp = $m['__cmp'];
			}
			if ($p['bool'](($p['bool']($and18=key)?reverse:$and18))) {
				thisSort1 = function(a, b) {

					return (typeof ($usub3=cmp(key(a), key(b)))=='number'?
						-$usub3:
						$m['op_usub']($usub3));
				};
				thisSort1.__name__ = 'thisSort1';

				thisSort1.__bind_type__ = 0;
				thisSort1.__args__ = [null,null,['a'],['b']];
				self['__array']['sort'](thisSort1);
			}
			else if ($p['bool'](key)) {
				thisSort2 = function(a, b) {

					return cmp(key(a), key(b));
				};
				thisSort2.__name__ = 'thisSort2';

				thisSort2.__bind_type__ = 0;
				thisSort2.__args__ = [null,null,['a'],['b']];
				self['__array']['sort'](thisSort2);
			}
			else if ($p['bool'](reverse)) {
				thisSort3 = function(a, b) {

					return (typeof ($usub4=cmp(a, b))=='number'?
						-$usub4:
						$m['op_usub']($usub4));
				};
				thisSort3.__name__ = 'thisSort3';

				thisSort3.__bind_type__ = 0;
				thisSort3.__args__ = [null,null,['a'],['b']];
				self['__array']['sort'](thisSort3);
			}
			else {
				self['__array']['sort'](cmp);
			}
			return null;
		}
	, 1, [null,null,['self'],['cmp', null],['key', null],['reverse', false]]);
		$cls_definition['sort'] = $method;
		$method = $pyjs__bind_method2('getArray', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr53,$attr54;
			return self['__array'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getArray'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr55,$attr56;
			if ($p['bool']($p['callable'](self))) {
				return $p['sprintf']('\x3Ctype \x27%s\x27\x3E', self['__name__']);
			}

        var s = "[";
        for (var i=0; i < self.__array.length; i++) {
            s += $p['repr'](self.__array[i]);
            if (i < self.__array.length - 1)
                s += ", ";
        }
        s += "]";
        return s;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__add__', function(y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				y = arguments[1];
			}
			var $attr58,$attr57;
			if ($p['bool'](!$p['bool']($p['isinstance'](y, self)))) {
				throw ($m['TypeError']('can only concatenate list to list'));
			}
			return $m['list'](self['__array']['concat'](y['__array']));
		}
	, 1, [null,null,['self'],['y']]);
		$cls_definition['__add__'] = $method;
		$method = $pyjs__bind_method2('__mul__', function(n) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				n = arguments[1];
			}
			var a,$attr59,$attr60,$sub3,$sub4;
			if ($p['bool'](!$p['bool'](n !== null && n.__number__ && (n.__number__ != 0x01 || isFinite(n))))) {
				throw ($m['TypeError']('can\x27t multiply sequence by non-int'));
			}
			a = $p['list']([]);
			while ($p['bool'](n)) {
				n = $m['__op_sub']($sub3=n,$sub4=1);
				a['extend'](self['__array']);
			}
			return a;
		}
	, 1, [null,null,['self'],['n']]);
		$cls_definition['__mul__'] = $method;
		$method = $pyjs__bind_method2('__rmul__', function(n) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				n = arguments[1];
			}

			return self['__mul__'](n);
		}
	, 1, [null,null,['self'],['n']]);
		$cls_definition['__rmul__'] = $method;
		var $bases = new Array(pyjslib.object);
		return $pyjs_type('list', $bases, $cls_definition);
	})();
$m['list'].__str__ = $m['list'].__repr__;
$m['list'].toString = $m['list'].__str__;
	$m['tuple'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'c8b4e78c51e255494b81a1f73b29a00e';
		$method = $pyjs__bind_method2('__init__', function(data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}
			if (typeof data == 'undefined') data=arguments.callee.__args__[3][1];


        if (data === null) {
            throw $m['TypeError']("'NoneType' is not iterable");
        }
        if (data.constructor === Array) {
            self.__array = data.slice();
            return null;
        }
        if (typeof data.__iter__ == 'function') {
            if (typeof data.__array == 'object') {
                self.__array = data.__array.slice();
                return null;
            }
            var iter = data.__iter__();
            if (typeof iter.__array == 'object') {
                self.__array = iter.__array.slice();
                return null;
            }
            data = [];
            var item, i = 0;
            if (typeof iter.$genfunc == 'function') {
                while (typeof (item=iter.next(true)) != 'undefined') {
                    data[i++] = item;
                }
            } else {
                try {
                    while (true) {
                        data[i++] = iter.next();
                    }
                }
                catch (e) {
                    if (e.__name__ != 'StopIteration') throw e;
                }
            }
            self.__array = data;
            return null;
        }
        throw $m['TypeError']("'" + $p['repr'](data) + "' is not iterable");
        
		}
	, 1, [null,null,['self'],['data', []]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__hash__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add38,$attr61,$attr62,$add37;
			return $m['__op_add']($add37='$tuple$',$add38=$p['str'](self['__array']));
		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method2('__cmp__', function(l) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				l = arguments[1];
			}

			if ($p['bool'](!$p['bool']($p['isinstance'](l, $m['tuple'])))) {
				return 1;
			}

        var n1 = self.__array.length,
            n2 = l.__array.length,
            a1 = self.__array,
            a2 = l.__array,
            n, c;
        n = (n1 < n2 ? n1 : n2);
        for (var i = 0; i < n; i++) {
            c = $m['cmp'](a1[i], a2[i]);
            if (c) return c;
        }
        if (n1 < n2) return -1;
        if (n1 > n2) return 1;
        return 0;
		}
	, 1, [null,null,['self'],['l']]);
		$cls_definition['__cmp__'] = $method;
		$method = $pyjs__bind_method2('__getslice__', function(lower, upper) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				lower = arguments[1];
				upper = arguments[2];
			}


        if (upper==null) return $m['tuple'](self.__array.slice(lower));
        return $m['tuple'](self.__array.slice(lower, upper));
        
		}
	, 1, [null,null,['self'],['lower'],['upper']]);
		$cls_definition['__getslice__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(_index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				_index = arguments[1];
			}


        var index = _index.valueOf();
        if (index < 0) index += self.__array.length;
        if (index < 0 || index >= self.__array.length) {
            throw $m['IndexError']("tuple index out of range");
        }
        return self.__array[index];
        
		}
	, 1, [null,null,['self'],['_index']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self.__array.length;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('__contains__', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			return self.__array.indexOf(value)>=0;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['__contains__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return new $iter_array(self.__array);

        var i = 0;
        var l = self.__array;
        return {
            'next': function() {
                if (i >= l.length) {
                    throw $p['StopIteration'];
                }
                return l[i++];
            },
            '__iter__': function() {
                return this;
            }
        };
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('__enumerate__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return new $enumerate_array(self.__array);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__enumerate__'] = $method;
		$method = $pyjs__bind_method2('getArray', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr64,$attr63;
			return self['__array'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getArray'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr65,$attr66;
			if ($p['bool']($p['callable'](self))) {
				return $p['sprintf']('\x3Ctype \x27%s\x27\x3E', self['__name__']);
			}

        var s = "(";
        for (var i=0; i < self.__array.length; i++) {
            s += $p['repr'](self.__array[i]);
            if (i < self.__array.length - 1)
                s += ", ";
        }
        if (self.__array.length == 1)
            s += ",";
        s += ")";
        return s;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__add__', function(y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				y = arguments[1];
			}
			var $attr67,$attr68;
			if ($p['bool'](!$p['bool']($p['isinstance'](y, self)))) {
				throw ($m['TypeError']('can only concatenate tuple to tuple'));
			}
			return $m['tuple'](self['__array']['concat'](y['__array']));
		}
	, 1, [null,null,['self'],['y']]);
		$cls_definition['__add__'] = $method;
		$method = $pyjs__bind_method2('__mul__', function(n) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				n = arguments[1];
			}
			var a,$attr69,$attr70,$sub6,$sub5;
			if ($p['bool'](!$p['bool'](n !== null && n.__number__ && (n.__number__ != 0x01 || isFinite(n))))) {
				throw ($m['TypeError']('can\x27t multiply sequence by non-int'));
			}
			a = $p['list']([]);
			while ($p['bool'](n)) {
				n = $m['__op_sub']($sub5=n,$sub6=1);
				a['extend'](self['__array']);
			}
			return a;
		}
	, 1, [null,null,['self'],['n']]);
		$cls_definition['__mul__'] = $method;
		$method = $pyjs__bind_method2('__rmul__', function(n) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				n = arguments[1];
			}

			return self['__mul__'](n);
		}
	, 1, [null,null,['self'],['n']]);
		$cls_definition['__rmul__'] = $method;
		var $bases = new Array(pyjslib.object);
		return $pyjs_type('tuple', $bases, $cls_definition);
	})();
$m['tuple'].__str__ = $m['tuple'].__repr__;
$m['tuple'].toString = $m['tuple'].__str__;
	$m['dict'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '81eece7f3bf81fd2882b68c88d68cf25';
		$method = $pyjs__bind_method2('__init__', function(seq) {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				seq = arguments[1];
				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof seq != 'undefined') {
					if (seq !== null && typeof seq['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = seq;
						seq = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			if (typeof seq == 'undefined') seq=arguments.callee.__args__[3][1];
			var init;
			self.__object = {};
			init = function(_data) {


        var item, i, n, sKey;
        var data = _data;
        //selfXXX.__object = {};

        if (data === null) {
            throw $m['TypeError']("'NoneType' is not iterable");
        }
        if (data.constructor === Array) {
        } else if (typeof data.__object == 'object') {
            data = data.__object;
            for (sKey in data) {
                self.__object[sKey] = data[sKey].slice();
            }
            return null;
        } else if (typeof data.__iter__ == 'function') {
            if (typeof data.__array == 'object') {
                data = data.__array;
            } else {
                var iter = data.__iter__();
                if (typeof iter.__array == 'object') {
                    data = iter.__array;
                }
                data = [];
                var item, i = 0;
                if (typeof iter.$genfunc == 'function') {
                    while (typeof (item=iter.next(true)) != 'undefined') {
                        data[i++] = item;
                    }
                } else {
                    try {
                        while (true) {
                            data[i++] = iter.next();
                        }
                    }
                    catch (e) {
                        if (e.__name__ != 'StopIteration') throw e;
                    }
                }
            }
        } else if (typeof data == 'object' || typeof data == 'function') {
            for (var key in data) {
                var _key = key;
                if (key.substring(0,2) == '$$') {
                    // handle back mapping of name
                    // d = dict(comment='value')
                    // comment will be in the object as $$comment
                    _key = key.substring(2);
                    if (var_remap.indexOf(_key) < 0) {
                        _key = key;
                    }
                }
                self.__object['$'+_key] = [_key, data[key]];
            }
            return null;
        } else {
            throw $m['TypeError']("'" + $p['repr'](data) + "' is not iterable");
        }
        // Assume uniform array content...
        if ((n = data.length) == 0) {
            return null;
        }
        i = 0;
        if (data[0].constructor === Array) {
            while (i < n) {
                item = data[i++];
                key = item[0];
                sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:$p['__hash'](key))));
                self.__object[sKey] = [key, item[1]];
            }
            return null;
        }
        if (typeof data[0].__array != 'undefined') {
            while (i < n) {
                item = data[i++].__array;
                key = item[0];
                sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:$p['__hash'](key))));
                self.__object[sKey] = [key, item[1]];
            }
            return null;
        }
        i = -1;
        var key;
        while (++i < n) {
            key = data[i].__getitem__(0);
            sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:$p['__hash'](key))));
            self.__object[sKey] = [key, data[i].__getitem__(1)];
        }
        return null;
        
			};
			init.__name__ = 'init';

			init.__bind_type__ = 0;
			init.__args__ = [null,null,['_data']];
			init(seq);
			if ($p['bool'](kwargs)) {
				init(kwargs);
			}
			return null;
		}
	, 1, [null,['kwargs'],['self'],['seq', []]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__hash__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			throw ($m['TypeError']('dict objects are unhashable'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method2('__setitem__', function(key, value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
				value = arguments[2];
			}


        if (typeof value == 'undefined') {
            throw $m['ValueError']("Value for key '" + key + "' is undefined");
        }
        var sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:$p['__hash'](key))));
        self.__object[sKey] = [key, value];
        
		}
	, 1, [null,null,['self'],['key'],['value']]);
		$cls_definition['__setitem__'] = $method;
		$method = $pyjs__bind_method2('__getitem__', function(key) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}


        var sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:$p['__hash'](key))));
        var value=self.__object[sKey];
        if (typeof value == 'undefined'){
            throw $m['KeyError'](key);
        }
        return value[1];
        
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['__getitem__'] = $method;
		$method = $pyjs__bind_method2('__hash__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			throw ($m['TypeError']('dict objects are unhashable'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method2('__nonzero__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        for (var i in self.__object){
            return true;
        }
        return false;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__nonzero__'] = $method;
		$method = $pyjs__bind_method2('__cmp__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if ($p['bool'](!$p['bool']($p['isinstance'](other, $m['dict'])))) {
				throw ($m['TypeError']('dict.__cmp__(x,y) requires y to be a \x27dict\x27'));
			}

        var self_sKeys = new Array(),
            other_sKeys = new Array(),
            selfLen = 0,
            otherLen = 0,
            selfObj = self.__object,
            otherObj = other.__object;
        for (sKey in selfObj) {
           self_sKeys[selfLen++] = sKey;
        }
        for (sKey in otherObj) {
           other_sKeys[otherLen++] = sKey;
        }
        if (selfLen < otherLen) {
            return -1;
        }
        if (selfLen > otherLen) {
            return 1;
        }
        self_sKeys.sort();
        other_sKeys.sort();
        var c, sKey;
        for (var idx = 0; idx < selfLen; idx++) {
            c = $m['cmp'](selfObj[sKey = self_sKeys[idx]][0], otherObj[other_sKeys[idx]][0]);
            if (c != 0) {
                return c;
            }
            c = $m['cmp'](selfObj[sKey][1], otherObj[sKey][1]);
            if (c != 0) {
                return c;
            }
        }
        return 0;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__cmp__'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var size;
			size = 0;

        for (var i in self.__object) size++;
        
			return size;
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('__delitem__', function(key) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}


        var sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:$p['__hash'](key))));
        delete self.__object[sKey];
        
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['__delitem__'] = $method;
		$method = $pyjs__bind_method2('__contains__', function(key) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}


        var sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:$p['__hash'](key))));
        return typeof self.__object[sKey] == 'undefined' ? false : true;
        
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['__contains__'] = $method;
		$method = $pyjs__bind_method2('keys', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var keys=$m['list'](),
            selfObj = self.__object,
            __array = keys.__array,
            i = 0;
        for (var sKey in self.__object) {
            __array[i++] = selfObj[sKey][0];
        }
        return keys;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['keys'] = $method;
		$method = $pyjs__bind_method2('fromkeys', function(iterable, v) {
			if (typeof v == 'undefined') v=arguments.callee.__args__[3][1];
			var $iter5_nextval,$iter5_idx,d,i,$iter5_array,$iter5_iter,$iter5_type;
			d = $p['dict']([]);
			$iter5_iter = iterable;
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval).$nextval) != 'undefined') {
				i = $iter5_nextval.$nextval;
				d.__setitem__(i, v);
			}
			return d;
		}
	, 3, [null,null,['iterable'],['v', null]]);
		$cls_definition['fromkeys'] = $method;
		$method = $pyjs__bind_method2('values', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var values=$m['list']();
        var i = 0;
        for (var key in self.__object) {
            values.__array[i++] = self.__object[key][1];
        }
        return values;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['values'] = $method;
		$method = $pyjs__bind_method2('items', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var items = $m['list']();
        var i = 0;
        for (var key in self.__object) {
          var kv = self.__object[key];
          items.__array[i++] = $m['list'](kv);
          }
          return items;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['items'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var keys = new Array();
        var i = 0;
        for (var key in self.__object) {
            keys[i++] = self.__object[key][0];
        }
        return new $iter_array(keys);

		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('__enumerate__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var keys = new Array();
        var i = 0;
        for (var key in self.__object) {
            keys[i++] = self.__object[key][0];
        }
        return new $enumerate_array(keys);

		}
	, 1, [null,null,['self']]);
		$cls_definition['__enumerate__'] = $method;
		$method = $pyjs__bind_method2('itervalues', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['values']()['__iter__']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['itervalues'] = $method;
		$method = $pyjs__bind_method2('iteritems', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['items']()['__iter__']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['iteritems'] = $method;
		$method = $pyjs__bind_method2('setdefault', function(key, default_value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
				default_value = arguments[2];
			}


        var sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:$p['__hash'](key))));
        return typeof self.__object[sKey] == 'undefined' ? (self.__object[sKey]=[key, default_value])[1] : self.__object[sKey][1];

		}
	, 1, [null,null,['self'],['key'],['default_value']]);
		$cls_definition['setdefault'] = $method;
		$method = $pyjs__bind_method2('get', function(key, default_value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
				default_value = arguments[2];
			}
			if (typeof default_value == 'undefined') default_value=arguments.callee.__args__[4][1];


        var empty = true;
        for (var sKey in self.__object) {
            empty = false;
            break;
        }
        if (empty) return default_value;
        var sKey = (key===null?null:(typeof key.$H != 'undefined'?key.$H:((typeof key=='string'||key.__number__)?'$'+key:$p['__hash'](key))));
        return typeof self.__object[sKey] == 'undefined' ? default_value : self.__object[sKey][1];

		}
	, 1, [null,null,['self'],['key'],['default_value', null]]);
		$cls_definition['get'] = $method;
		$method = $pyjs__bind_method2('update', function() {
			if (this.__is_instance__ === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length-1));

				var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
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
			var $iter6_type,$iter8_iter,$iter6_iter,$iter6_nextval,$iter9_iter,$iter9_nextval,$iter9_idx,$iter7_type,$iter9_type,$iter8_idx,$iter6_idx,$iter7_iter,$iter8_type,$iter6_array,$iter8_nextval,$iter7_idx,d,$iter7_nextval,k,$iter7_array,$iter8_array,v,$iter9_array;
			if ($p['bool'](args)) {
				if ($p['bool'](($m['cmp']($p['len'](args), 1) == 1))) {
					throw ($m['TypeError']($p['sprintf']('update expected at most 1 arguments, got %d', $p['len'](args))));
				}
				d = args.__getitem__(0);
				if ($p['bool']($p['hasattr'](d, 'iteritems'))) {
					$iter6_iter = d['iteritems']();
					$iter6_nextval=$p['__iter_prepare']($iter6_iter,true);
					while (typeof($p['__wrapped_next']($iter6_nextval).$nextval) != 'undefined') {
						k = $iter6_nextval.$nextval.__array[0];
						v = $iter6_nextval.$nextval.__array[1];
						self.__setitem__(k, v);
					}
				}
				else if ($p['bool']($p['hasattr'](d, 'keys'))) {
					$iter7_iter = d;
					$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
					while (typeof($p['__wrapped_next']($iter7_nextval).$nextval) != 'undefined') {
						k = $iter7_nextval.$nextval;
						self.__setitem__(k, d.__getitem__(k));
					}
				}
				else {
					$iter8_iter = d;
					$iter8_nextval=$p['__iter_prepare']($iter8_iter,true);
					while (typeof($p['__wrapped_next']($iter8_nextval).$nextval) != 'undefined') {
						k = $iter8_nextval.$nextval.__array[0];
						v = $iter8_nextval.$nextval.__array[1];
						self.__setitem__(k, v);
					}
				}
			}
			if ($p['bool'](kwargs)) {
				$iter9_iter = kwargs['iteritems']();
				$iter9_nextval=$p['__iter_prepare']($iter9_iter,true);
				while (typeof($p['__wrapped_next']($iter9_nextval).$nextval) != 'undefined') {
					k = $iter9_nextval.$nextval.__array[0];
					v = $iter9_nextval.$nextval.__array[1];
					self.__setitem__(k, v);
				}
			}
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['update'] = $method;
		$method = $pyjs__bind_method2('pop', function(k) {
			if (this.__is_instance__ === true) {
				var self = this;
				var d = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length));

			} else {
				var self = arguments[0];
				k = arguments[1];
				var d = $p['tuple']($pyjs_array_slice.call(arguments,2,arguments.length));

			}
			var $add39,res,$add40,$pyjs_try_err;
			if ($p['bool'](($m['cmp']($p['len'](d), 1) == 1))) {
				throw ($m['TypeError']($p['sprintf']('pop expected at most 2 arguments, got %s', $m['__op_add']($add39=1,$add40=$p['len'](d)))));
			}
			try {
				res = self.__getitem__(k);
				self.__delitem__(k);
				return res;
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (($pyjs_try_err_name == $m['KeyError'].__name__)||$p['_isinstance']($pyjs_try_err,$m['KeyError'])) {
					if ($p['bool'](d)) {
						return d.__getitem__(0);
					}
					else {
						throw ($pyjs.__last_exception__?
							$pyjs.__last_exception__.error:
							$m['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, ['d',null,['self'],['k']]);
		$cls_definition['pop'] = $method;
		$method = $pyjs__bind_method2('popitem', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter10_nextval,$iter10_array,v,$iter10_type,k,$iter10_iter,$iter10_idx;
			$iter10_iter = self['iteritems']();
			$iter10_nextval=$p['__iter_prepare']($iter10_iter,true);
			while (typeof($p['__wrapped_next']($iter10_nextval).$nextval) != 'undefined') {
				k = $iter10_nextval.$nextval.__array[0];
				v = $iter10_nextval.$nextval.__array[1];
				return $p['tuple']([k, v]);
			}
			throw ($m['KeyError']('popitem(): dictionary is empty'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['popitem'] = $method;
		$method = $pyjs__bind_method2('getObject', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr72,$attr71;
			return self['__object'];
		}
	, 1, [null,null,['self']]);
		$cls_definition['getObject'] = $method;
		$method = $pyjs__bind_method2('copy', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $m['dict'](self['items']());
		}
	, 1, [null,null,['self']]);
		$cls_definition['copy'] = $method;
		$method = $pyjs__bind_method2('clear', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self.__object = {};
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr74,$attr73;
			if ($p['bool']($p['callable'](self))) {
				return $p['sprintf']('\x3Ctype \x27%s\x27\x3E', self['__name__']);
			}

        var keys = new Array();
        for (var key in self.__object)
            keys.push(key);

        var s = "{";
        for (var i=0; i<keys.length; i++) {
            var v = self.__object[keys[i]];
            s += $p['repr'](v[0]) + ": " + $p['repr'](v[1]);
            if (i < keys.length-1)
                s += ", ";
        }
        s += "}";
        return s;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('toString', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['__repr__']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['toString'] = $method;
		var $bases = new Array(pyjslib.object);
		return $pyjs_type('dict', $bases, $cls_definition);
	})();
$m['dict'].has_key = $m['dict'].__contains__;
$m['dict'].iterkeys = $m['dict'].__iter__;
$m['dict'].__str__ = $m['dict'].__repr__;
	$m['__empty_dict'] = function() {


    var dict__init__ = $m['dict'].__init__;
    var d;
    $m['dict'].__init__ = function() {
        this.__object = {};
    };
    d = $m['dict']();
    d.__init__ = $m['dict'].__init__ = dict__init__;
    return d;

	};
	$m['__empty_dict'].__name__ = '__empty_dict';

	$m['__empty_dict'].__bind_type__ = 0;
	$m['__empty_dict'].__args__ = [null,null];
	$m['set'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'a4cceb26857aee2c31337e719ba44c32';
		$method = $pyjs__bind_method2('__init__', function(_data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				_data = arguments[1];
			}
			if (typeof _data == 'undefined') _data=arguments.callee.__args__[3][1];

			if ($p['bool']((_data === null))) {
var data = [];
			}
			else {
var data = _data;
			}
			if ($p['bool']((typeof isSet == "undefined"?$m.isSet:isSet)(_data))) {

            self.__object = {};
            var selfObj = self.__object,
                dataObj = data.__object;
            for (var sVal in dataObj) {
                selfObj[sVal] = dataObj[sVal];
            }
            return null;
			}

        var item, 
            i, 
            n,
            selfObj = self.__object = {};

        if (data.constructor === Array) { 
        // data is already an Array.
        // We deal with the Array of data after this if block.
          } 
          
          // We may have some other set-like thing with __object
          else if (typeof data.__object == 'object') {
            var dataObj = data.__object;
            for (var sKey in dataObj) {
                selfObj[sKey] = dataObj[sKey];
            }
            return null;
          } 
          
          // Something with an __iter__ method
          else if (typeof data.__iter__ == 'function') {
          
            // It has an __array member to iterate over. Make that our data.
            if (typeof data.__array == 'object') {
                data = data.__array;
                } 
            else {
                // Several ways to deal with the __iter__ method
                var iter = data.__iter__();
                // iter has an __array member that's an array. Use that.
                if (typeof iter.__array == 'object') {
                    data = iter.__array;
                }
                var data = [];
                var item, i = 0;
                // iter has a .$genfunc
                if (typeof iter.$genfunc == 'function') {
                    while (typeof (item=iter.next(true)) != 'undefined') {
                        data[i++] = item;
                    }
                } else {
                // actually use the object's __iter__ method
                    try {
                        while (true) {
                            data[i++] = iter.next();
                        }
                    }
                    catch (e) {
                        if (e.__name__ != 'StopIteration') throw e;
                    }
                }
            }
          // Check undefined first so isIteratable can do check for __iter__.
        } else if (!($p['isUndefined']($m.data)) && $m.isIteratable($m.data))
            {
            for (var item in $m.data) {
                selfObj[$p['__hash'](item)] = item;
            }
            return null;
        } else {
            throw $m['TypeError']("'" + $p['repr'](data) + "' is not iterable");
        }
        // Assume uniform array content...
        if ((n = data.length) == 0) {
            return null;
        }
        i = n-1;
        do {
            item = data[i];
            selfObj[$p['__hash'](item)] = item;
        }
        while (i--);
        return null;
        
		}
	, 1, [null,null,['self'],['_data', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__cmp__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m.isSet:isSet)(other)))) {
				return 2;
			}

        var selfObj = self.__object,
            otherObj = other.__object,
            selfMismatch = false,
            otherMismatch = false;
        if (selfObj === otherObj) {
            throw $m['TypeError']("Set operations must use two sets.");
            }
        for (var sVal in selfObj) {
            if (!(sVal in otherObj)) {
                selfMismatch = true;
                break;
            }
        }
        for (var sVal in otherObj) {
            if (!(sVal in selfObj)) {
                otherMismatch = true;
                break;
            }
        }
        if (selfMismatch && otherMismatch) return 2;
        if (selfMismatch) return 1;
        if (otherMismatch) return -1;
        return 0;

		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__cmp__'] = $method;
		$method = $pyjs__bind_method2('__contains__', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			if ($p['bool']($m['op_eq']((typeof isSet == "undefined"?$m.isSet:isSet)(value), 1))) {

            var hashes = new Array(), 
                obj = self.__object, 
                i = 0;
            for (var v in obj) {
                hashes[i++] = v;
            }
            hashes.sort();
            var h = hashes.join("|");
            return (h in obj);

			}
return $p['__hash'](value) in self.__object;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['__contains__'] = $method;
		$method = $pyjs__bind_method2('__hash__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			throw ($m['TypeError']('set objects are unhashable'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method2('__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var items = new Array(),
            i = 0, 
            obj = self.__object;
        for (var key in obj) {
            items[i++] = obj[key];
        }
        return new $iter_array(items);
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method2('__len__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var size;
			size = 0.0;

        for (var i in self.__object) size++;
        
			return size;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__len__'] = $method;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr76,$attr75;
			if ($p['bool']($p['callable'](self))) {
				return $p['sprintf']('\x3Ctype \x27%s\x27\x3E', self['__name__']);
			}

        var values = new Array();
        var i = 0,
            obj = self.__object,
            s = self.__name__ + "([";
        for (var sVal in obj) {
            values[i++] = $p['repr'](obj[sVal]);
        }
        s += values.join(", ");
        s += "])";
        return s;
        
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$method = $pyjs__bind_method2('__and__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m.isSet:isSet)(other)))) {
				return $m['NotImplemented'];
			}
			return self['intersection'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__and__'] = $method;
		$method = $pyjs__bind_method2('__or__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m.isSet:isSet)(other)))) {
				return $m['NotImplemented'];
			}
			return self['union'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__or__'] = $method;
		$method = $pyjs__bind_method2('__xor__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m.isSet:isSet)(other)))) {
				return $m['NotImplemented'];
			}
			return self['symmetric_difference'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__xor__'] = $method;
		$method = $pyjs__bind_method2('__sub__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m.isSet:isSet)(other)))) {
				return $m['NotImplemented'];
			}
			return self['difference'](other);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__sub__'] = $method;
		$method = $pyjs__bind_method2('add', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

self.__object[$p['hash'](value)] = value;
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('clear', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

self.__object = {};
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('copy', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var new_set;
			new_set = $m['set']();

        var obj = new_set.__object,
            selfObj = self.__object;
        for (var sVal in selfObj) {
            obj[sVal] = selfObj[sVal];
        }

			return new_set;
		}
	, 1, [null,null,['self']]);
		$cls_definition['copy'] = $method;
		$method = $pyjs__bind_method2('difference', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var new_set;
			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m.isSet:isSet)(other)))) {
				other = $p['frozenset'](other);
			}
			new_set = $m['set']();

        var obj = new_set.__object,
            selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            if (!(sVal in otherObj)) {
                obj[sVal] = selfObj[sVal];
            }
        }

			return new_set;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['difference'] = $method;
		$method = $pyjs__bind_method2('difference_update', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m.isSet:isSet)(other)))) {
				other = $p['frozenset'](other);
			}

        var selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in otherObj) {
            if (sVal in selfObj) {
                delete selfObj[sVal];
            }
        }

			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['difference_update'] = $method;
		$method = $pyjs__bind_method2('discard', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			if ($p['bool']($m['op_eq']((typeof isSet == "undefined"?$m.isSet:isSet)(value), 1))) {
				value = $p['frozenset'](value);
			}
delete self.__object[$p['hash'](value)];
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['discard'] = $method;
		$method = $pyjs__bind_method2('intersection', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var new_set;
			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m.isSet:isSet)(other)))) {
				other = $p['frozenset'](other);
			}
			new_set = $m['set']();

        var obj = new_set.__object,
            selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            if (sVal in otherObj) {
                obj[sVal] = selfObj[sVal];
            }
        }

			return new_set;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['intersection'] = $method;
		$method = $pyjs__bind_method2('intersection_update', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m.isSet:isSet)(other)))) {
				other = $p['frozenset'](other);
			}

        var selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            if (!(sVal in otherObj)) {
                delete selfObj[sVal];
            }
        }

			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['intersection_update'] = $method;
		$method = $pyjs__bind_method2('isdisjoint', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m.isSet:isSet)(other)))) {
				other = $p['frozenset'](other);
			}

        var selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            if (typeof otherObj[sVal] != 'undefined') {
                return false;
            }
        }
        for (var sVal in otherObj) {
            if (typeof selfObj[sVal] != 'undefined') {
                return false;
            }
        }

			return true;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['isdisjoint'] = $method;
		$method = $pyjs__bind_method2('issubset', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m.isSet:isSet)(other)))) {
				other = $p['frozenset'](other);
			}
			return self.__cmp__(other) < 0;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['issubset'] = $method;
		$method = $pyjs__bind_method2('issuperset', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m.isSet:isSet)(other)))) {
				other = $p['frozenset'](other);
			}
			return (self.__cmp__(other)|1) == 1;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['issuperset'] = $method;
		$method = $pyjs__bind_method2('pop', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        for (var sVal in self.__object) {
            var value = self.__object[sVal];
            delete self.__object[sVal];
            return value;
        }
        
			throw ($m['KeyError']('pop from an empty set'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['pop'] = $method;
		$method = $pyjs__bind_method2('remove', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}
			var val;
			if ($p['bool']($m['op_eq']((typeof isSet == "undefined"?$m.isSet:isSet)(value), 1))) {
				val = $p['frozenset'](value);
			}
			else {
				val = value;
			}

        var h = $p['hash'](val);
        if (!(h in self.__object)) {
            throw $m['KeyError'](value);
        }
        delete self.__object[h];
        
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('symmetric_difference', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var new_set;
			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m.isSet:isSet)(other)))) {
				other = $p['frozenset'](other);
			}
			new_set = $m['set']();

        var obj = new_set.__object,
            selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            if (typeof otherObj[sVal] == 'undefined') {
                obj[sVal] = selfObj[sVal];
            }
        }
        for (var sVal in otherObj) {
            if (typeof selfObj[sVal] == 'undefined') {
                obj[sVal] = otherObj[sVal];
            }
        }

			return new_set;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['symmetric_difference'] = $method;
		$method = $pyjs__bind_method2('symmetric_difference_update', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m.isSet:isSet)(other)))) {
				other = $p['frozenset'](other);
			}

        var obj = new Object(),
            selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            if (typeof otherObj[sVal] == 'undefined') {
                obj[sVal] = selfObj[sVal];
            }
        }
        for (var sVal in otherObj) {
            if (typeof selfObj[sVal] == 'undefined') {
                obj[sVal] = otherObj[sVal];
            }
        }
        self.__object = obj;

			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['symmetric_difference_update'] = $method;
		$method = $pyjs__bind_method2('union', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var new_set;
			new_set = $m['set']();
			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m.isSet:isSet)(other)))) {
				other = $p['frozenset'](other);
			}

        var obj = new_set.__object,
            selfObj = self.__object,
            otherObj = other.__object;
        for (var sVal in selfObj) {
            obj[sVal] = selfObj[sVal];
        }
        for (var sVal in otherObj) {
            if (!(sVal in selfObj)) {
                obj[sVal] = otherObj[sVal];
            }
        }

			return new_set;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['union'] = $method;
		$method = $pyjs__bind_method2('update', function(data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}

			if ($p['bool'](!$p['bool']((typeof isSet == "undefined"?$m.isSet:isSet)(data)))) {
				data = $p['frozenset'](data);
			}

        var selfObj = self.__object,
            dataObj = data.__object;
        for (var sVal in dataObj) {
            if (!(sVal in selfObj)) {
                selfObj[sVal] = dataObj[sVal];
            }
        }
        
			return null;
		}
	, 1, [null,null,['self'],['data']]);
		$cls_definition['update'] = $method;
		var $bases = new Array($m['object']);
		return $pyjs_type('set', $bases, $cls_definition);
	})();
$m['set']['__str__'] = $m['set']['__repr__'];
$m['set']['toString'] = $m['set']['__repr__'];
	$m['frozenset'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = 'd356c70ef2b767c7d555a1255c80f5d3';
		$method = $pyjs__bind_method2('__init__', function(_data) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				_data = arguments[1];
			}
			if (typeof _data == 'undefined') _data=arguments.callee.__args__[3][1];

			if ($p['bool']((!('__object' in self)))) {
				$m['set']['__init__'](self, _data);
			}
			return null;
		}
	, 1, [null,null,['self'],['_data', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__hash__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


        var hashes = new Array(), obj = self.__object, i = 0;
        for (var v in obj) {
            hashes[i++] = v;
        }
        hashes.sort();
        return (self.$H = hashes.join("|"));

		}
	, 1, [null,null,['self']]);
		$cls_definition['__hash__'] = $method;
		$method = $pyjs__bind_method2('add', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			throw ($m['AttributeError']('frozenset is immutable'));
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('clear', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			throw ($m['AttributeError']('frozenset is immutable'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method2('difference_update', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			throw ($m['AttributeError']('frozenset is immutable'));
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['difference_update'] = $method;
		$method = $pyjs__bind_method2('discard', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			throw ($m['AttributeError']('frozenset is immutable'));
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['discard'] = $method;
		$method = $pyjs__bind_method2('intersection_update', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			throw ($m['AttributeError']('frozenset is immutable'));
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['intersection_update'] = $method;
		$method = $pyjs__bind_method2('pop', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			throw ($m['AttributeError']('frozenset is immutable'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['pop'] = $method;
		$method = $pyjs__bind_method2('symmetric_difference_update', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}

			throw ($m['AttributeError']('frozenset is immutable'));
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['symmetric_difference_update'] = $method;
		var $bases = new Array($m['set']);
		return $pyjs_type('frozenset', $bases, $cls_definition);
	})();
$m['frozenset']['__str__'] = $m['frozenset']['__repr__'];
$m['frozenset']['toString'] = $m['frozenset']['__repr__'];
	$m['property'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '4001fec5d3f433b2f2313188a800cb63';
		$method = $pyjs__bind_method2('__init__', function(fget, fset, fdel, doc) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				fget = arguments[1];
				fset = arguments[2];
				fdel = arguments[3];
				doc = arguments[4];
			}
			if (typeof fget == 'undefined') fget=arguments.callee.__args__[3][1];
			if (typeof fset == 'undefined') fset=arguments.callee.__args__[4][1];
			if (typeof fdel == 'undefined') fdel=arguments.callee.__args__[5][1];
			if (typeof doc == 'undefined') doc=arguments.callee.__args__[6][1];
			var $or5,$or4,$attr78,$attr77;
			self.fget = fget;
			self.fset = fset;
			self.fdel = fdel;
			if ($p['bool'](($p['bool']($or4=!$p['bool']((doc === null)))?$or4:!$p['bool']($p['hasattr'](fget, '__doc__'))))) {
				self.__doc__ = doc;
			}
			else {
				self.__doc__ = fget['__doc__'];
			}
			return null;
		}
	, 1, [null,null,['self'],['fget', null],['fset', null],['fdel', null],['doc', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('__get__', function(obj, objtype) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
				objtype = arguments[2];
			}
			if (typeof objtype == 'undefined') objtype=arguments.callee.__args__[4][1];
			var $attr80,$attr79;
			if ($p['bool']((obj === null))) {
				return self;
			}
			if ($p['bool']((self['fget'] === null))) {

				var $pyjs__raise_expr1 = $m['AttributeError'];
				var $pyjs__raise_expr2 = 'unreadable attribute';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw $m['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			return self['fget'](obj);
		}
	, 1, [null,null,['self'],['obj'],['objtype', null]]);
		$cls_definition['__get__'] = $method;
		$method = $pyjs__bind_method2('__set__', function(obj, value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
				value = arguments[2];
			}
			var $attr82,$attr81;
			if ($p['bool']((self['fset'] === null))) {

				var $pyjs__raise_expr1 = $m['AttributeError'];
				var $pyjs__raise_expr2 = 'can\x27t set attribute';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw $m['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			self['fset'](obj, value);
			return null;
		}
	, 1, [null,null,['self'],['obj'],['value']]);
		$cls_definition['__set__'] = $method;
		$method = $pyjs__bind_method2('__delete__', function(obj) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
			}
			var $attr83,$attr84;
			if ($p['bool']((self['fdel'] === null))) {

				var $pyjs__raise_expr1 = $m['AttributeError'];
				var $pyjs__raise_expr2 = 'can\x27t delete attribute';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw $m['TypeError']('instance exception may not have a separate value');
				}
				if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			self['fdel'](obj);
			return null;
		}
	, 1, [null,null,['self'],['obj']]);
		$cls_definition['__delete__'] = $method;
		$method = $pyjs__bind_method2('setter', function(fset) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				fset = arguments[1];
			}

			self.fset = fset;
			return self;
		}
	, 1, [null,null,['self'],['fset']]);
		$cls_definition['setter'] = $method;
		$method = $pyjs__bind_method2('deleter', function(fdel) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				fdel = arguments[1];
			}

			self.fdel = fdel;
			return self;
		}
	, 1, [null,null,['self'],['fdel']]);
		$cls_definition['deleter'] = $method;
		var $bases = new Array($m['object']);
		return $pyjs_type('property', $bases, $cls_definition);
	})();
	$m['staticmethod'] = function(func) {


    var fnwrap = function() {
        return func.apply(null,$pyjs_array_slice.call(arguments));
    };
    fnwrap.__name__ = func.__name__;
    fnwrap.__args__ = func.__args__;
    fnwrap.__bind_type__ = 3;
    return fnwrap;
    
	};
	$m['staticmethod'].__name__ = 'staticmethod';

	$m['staticmethod'].__bind_type__ = 0;
	$m['staticmethod'].__args__ = [null,null,['func']];
	$m['$$super'] = function(typ, object_or_type) {
		if (typeof object_or_type == 'undefined') object_or_type=arguments.callee.__args__[3][1];
		var i;
		if ($p['bool'](!$p['bool']((typeof _issubtype == "undefined"?$m._issubtype:_issubtype)(object_or_type, typ)))) {
			i = (typeof _issubtype == "undefined"?$m._issubtype:_issubtype)(object_or_type, typ);
			throw ($m['TypeError']('super(type, obj): obj must be an instance or subtype of type'));
		}

    var type_ = typ
    if (typeof type_.__mro__ == 'undefined') {
        type_ = type_.__class__;
    }
    var fn = $pyjs_type('super', type_.__mro__.slice(1), {});
    fn.__new__ = fn.__mro__[1].__new__;
    fn.__init__ = fn.__mro__[1].__init__;
    if (object_or_type.__is_instance__ === false) {
        return fn;
    }
    var obj = new Object();
    function wrapper(obj, name) {
        var fnwrap = function() {
            return obj[name].apply(object_or_type,
                                   $pyjs_array_slice.call(arguments));
        };
        fnwrap.__name__ = name;
        fnwrap.__args__ = obj[name].__args__;
        fnwrap.__bind_type__ = obj[name].__bind_type__;
        return fnwrap;
    }
    for (var m in fn) {
        if (typeof fn[m] == 'function') {
            obj[m] = wrapper(fn, m);
        }
    }
    obj.__is_instance__ = object_or_type.__is_instance__;
    return obj;
    
	};
	$m['$$super'].__name__ = 'super';

	$m['$$super'].__bind_type__ = 0;
	$m['$$super'].__args__ = [null,null,['typ'],['object_or_type', null]];
	$m['xrange'] = function(start, stop, step) {
		if (typeof stop == 'undefined') stop=arguments.callee.__args__[3][1];
		if (typeof step == 'undefined') step=arguments.callee.__args__[4][1];
		var rval,$attr86,$attr87,$attr85,$attr88,$attr89,$assign1,nval,$attr90;
		if ($p['bool']((stop === null))) {
			stop = start;
			start = 0;
		}
		if ($p['bool'](!$p['bool'](start!== null && start.__number__ && (start.__number__ != 0x01 || isFinite(start))))) {
			throw ($m['TypeError']($p['sprintf']('xrange() integer start argument expected, got %s', start['__class__']['__name__'])));
		}
		if ($p['bool'](!$p['bool'](stop!== null && stop.__number__ && (stop.__number__ != 0x01 || isFinite(stop))))) {
			throw ($m['TypeError']($p['sprintf']('xrange() integer end argument expected, got %s', stop['__class__']['__name__'])));
		}
		if ($p['bool'](!$p['bool'](step!== null && step.__number__ && (step.__number__ != 0x01 || isFinite(step))))) {
			throw ($m['TypeError']($p['sprintf']('xrange() integer step argument expected, got %s', step['__class__']['__name__'])));
		}
		$assign1 = start;
		rval = $assign1;
		nval = $assign1;

    var nstep = (stop-start)/step;
    nstep = nstep < 0 ? Math.ceil(nstep) : Math.floor(nstep);
    if ((stop-start) % step) {
        nstep++;
    }
    var _stop = start+ nstep * step;
    if (nstep <= 0) nval = _stop;
    var x = {
        'next': function(noStop) {
            if (nval == _stop) {
                if (noStop === true) {
                    return;
                }
                throw $p['StopIteration'];
            }
            rval = nval;
            nval += step;

		return rval;

        },
        '$genfunc': function() {
            return this.next(true);
        },
        '__iter__': function() {
            return this;
        },
        '__reversed__': function() {
            return $m['xrange'](_stop-step, start-step, -step);
        },
        'toString': function() {
            var s = "xrange(";
            if (start!= 0) {
                s += start+ ", ";
            }
            s += _stop;
            if (step!= 1) {
                s += ", " + step;
            }
            return s + ")";
        },
        '__repr__': function() {
            return "'" + this.toString() + "'";
        }
    };
    x['__str__'] = x.toString;
    return x;
    
	};
	$m['xrange'].__name__ = 'xrange';

	$m['xrange'].__bind_type__ = 0;
	$m['xrange'].__args__ = [null,null,['start'],['stop', null],['step', 1]];
	$m['range'] = function(start, stop, step) {
		if (typeof stop == 'undefined') stop=arguments.callee.__args__[3][1];
		if (typeof step == 'undefined') step=arguments.callee.__args__[4][1];
		var $attr95,$attr94,$attr96,$attr91,$attr93,$attr92,i,items;
		if ($p['bool']((stop === null))) {
			stop = start;
			start = 0;
		}
		i = start;
		if ($p['bool'](!$p['bool'](start!== null && start.__number__ && (start.__number__ != 0x01 || isFinite(start))))) {
			throw ($m['TypeError']($p['sprintf']('xrange() integer start argument expected, got %s', start['__class__']['__name__'])));
		}
		if ($p['bool'](!$p['bool'](stop!== null && stop.__number__ && (stop.__number__ != 0x01 || isFinite(stop))))) {
			throw ($m['TypeError']($p['sprintf']('xrange() integer end argument expected, got %s', stop['__class__']['__name__'])));
		}
		if ($p['bool'](!$p['bool'](step!== null && step.__number__ && (step.__number__ != 0x01 || isFinite(step))))) {
			throw ($m['TypeError']($p['sprintf']('xrange() integer step argument expected, got %s', step['__class__']['__name__'])));
		}
		items = new Array();

    var nstep = (stop-start)/step;
    nstep = nstep < 0 ? Math.ceil(nstep) : Math.floor(nstep);
    if ((stop-start) % step) {
        nstep++;
    }
    var _stop = start+ nstep * step;
    if (nstep <= 0) i= _stop;
    for (; i!= _stop; i+= step) {

		items['push'](i);
}
		return $m['list'](items);
	};
	$m['range'].__name__ = 'range';

	$m['range'].__bind_type__ = 0;
	$m['range'].__args__ = [null,null,['start'],['stop', null],['step', 1]];
	$m['slice'] = function(object, lower, upper) {


    if (object=== null) {
        return null;
    }
    if (typeof object.__getslice__ == 'function') {
        return object.__getslice__(lower, upper);
    }
    if (object.slice == 'function')
        return object.slice(lower, upper);

    return null;
    
	};
	$m['slice'].__name__ = 'slice';

	$m['slice'].__bind_type__ = 0;
	$m['slice'].__args__ = [null,null,['object'],['lower'],['upper']];
	$m['__delslice'] = function(object, lower, upper) {


    if (typeof object.__delslice__ == 'function') {
        return object.__delslice__(lower, upper);
    }
    if (object.__getslice__ == 'function'
      && object.__delitem__ == 'function') {
        if (upper== null) {
            upper= $p['len'](object);
        }
        for (var i = lower; i < upper; i++) {
            object.__delitem__(i);
        }
        return null;
    }
    throw $m['TypeError']('object does not support item deletion');
    return null;
    
	};
	$m['__delslice'].__name__ = '__delslice';

	$m['__delslice'].__bind_type__ = 0;
	$m['__delslice'].__args__ = [null,null,['object'],['lower'],['upper']];
	$m['__setslice'] = function(object, lower, upper, value) {


    if (typeof object.__setslice__ == 'function') {
        return object.__setslice__(lower, upper, value);
    }
    throw $m['TypeError']('object does not support __setslice__');
    return null;
    
	};
	$m['__setslice'].__name__ = '__setslice';

	$m['__setslice'].__bind_type__ = 0;
	$m['__setslice'].__args__ = [null,null,['object'],['lower'],['upper'],['value']];
	$m['str'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'pyjslib';
		$cls_definition.__md5__ = '734bef219c278bb3941dc34193e08964';
		$method = $pyjs__bind_method2('__new__', function(self, text) {
			if (typeof text == 'undefined') text=arguments.callee.__args__[3][1];


        if (text==='') {
            return text;
        }
        if (text===null) {
            return 'None';
        }
        if (typeof text=='boolean') {
            if (text) return 'True';
            return 'False';
        }
        if ($p['hasattr'](text,'__str__')) {
            return text.__str__();
        }
        return String(text);

		}
	, 3, [null,null,['self'],['text', '']]);
		$cls_definition['__new__'] = $method;
		var $bases = new Array($m['basestring']);
		return $pyjs_type('str', $bases, $cls_definition);
	})();
	$m['ord'] = function(x) {
		var $and21,$and20;
		if ($p['bool'](($p['bool']($and20=typeof x== 'string')?($p['len'](x) === 1):$and20))) {
			return x['charCodeAt'](0);
		}
		else {
throw $m['TypeError']("ord() expected string of length 1");
		}
		return null;
	};
	$m['ord'].__name__ = 'ord';

	$m['ord'].__bind_type__ = 0;
	$m['ord'].__args__ = [null,null,['x']];
	$m['chr'] = function(x) {


        return String.fromCharCode(x);
    
	};
	$m['chr'].__name__ = 'chr';

	$m['chr'].__bind_type__ = 0;
	$m['chr'].__args__ = [null,null,['x']];
	$m['is_basetype'] = function(x) {


       var t = typeof(x);
       return t == 'boolean' ||
       t == 'function' ||
       t == 'number' ||
       t == 'string' ||
       t == 'undefined';
    
	};
	$m['is_basetype'].__name__ = 'is_basetype';

	$m['is_basetype'].__bind_type__ = 0;
	$m['is_basetype'].__args__ = [null,null,['x']];
	$m['get_pyjs_classtype'] = function(x) {


        if (x!== null && typeof x.__is_instance__ == 'boolean') {
            var src = x.__name__;
            return src;
        }
        return null;
    
	};
	$m['get_pyjs_classtype'].__name__ = 'get_pyjs_classtype';

	$m['get_pyjs_classtype'].__bind_type__ = 0;
	$m['get_pyjs_classtype'].__args__ = [null,null,['x']];
	$m['repr'] = function(x) {


       if (x=== null)
           return "None";

       var t = typeof(x);

       if (t == "undefined")
           return "undefined";

       if (t == "boolean") {
           if (x) return "True";
           return "False";
       }

       if (t == "number")
           return x.toString();

       if (t == "string") {
           if (x.indexOf("'") == -1)
               return "'" + x+ "'";
           if (x.indexOf('"') == -1)
               return '"' + x+ '"';
           var s = x.$$replace(new RegExp('"', "g"), '\\"');
           return '"' + s + '"';
       }


		if ($p['bool']($p['hasattr'](x, '__repr__'))) {
			if ($p['bool']($p['callable'](x))) {
				return x['__repr__'](x);
			}
			return x['__repr__']();
		}

       if (t == "function")
           return "<function " + x.toString() + ">";

       // If we get here, x is an object.  See if it's a Pyjamas class.

       if (!$p['hasattr'](x, "__init__"))
           return "<" + x.toString() + ">";

       // Handle the common Pyjamas data types.

       var constructor = "UNKNOWN";

       constructor = $m['get_pyjs_classtype'](x);

        //alert("repr constructor: " + constructor);

       // If we get here, the class isn't one we know -> return the class name.
       // Note that we replace underscores with dots so that the name will
       // (hopefully!) look like the original Python name.
       // (XXX this was for pyjamas 0.4 but may come back in an optimised mode)

       //var s = constructor.$$replace(new RegExp('_', "g"), '.');
       return "<" + constructor + " object>";
    
	};
	$m['repr'].__name__ = 'repr';

	$m['repr'].__bind_type__ = 0;
	$m['repr'].__args__ = [null,null,['x']];
	$m['len'] = function(object) {
		var v;
		v = 0;

    if (typeof object== 'undefined') {
        throw $m['UndefinedValueError']("obj");
    }
    if (object=== null) 
        return v;
    else if (typeof object.__array != 'undefined') 
        v = object.__array.length;
    else if (typeof object.__len__ == 'function') 
        v = object.__len__();
    else if (typeof object.length != 'undefined')
        v = object.length;
    else throw $m['TypeError']("object has no len()");
    if (v.__number__ & 0x06) return v;
    
		return v;
	};
	$m['len'].__name__ = 'len';

	$m['len'].__bind_type__ = 0;
	$m['len'].__args__ = [null,null,['object']];
	$m['isinstance'] = function(object_, classinfo) {
		var ci,$iter11_iter,$iter11_type,$iter11_array,$iter11_nextval,$iter11_idx;

    if (typeof object_== 'undefined') {
        return false;
    }
    if (object_== null) {
        if (classinfo== null) {
            return true;
        }
        return false;
    }
    switch (classinfo.__name__) {
        case 'float':
            return typeof object_== 'number' && object_.__number__ == 0x01 && isFinite(object_);
        case 'int':
        case 'float_int':
            if (object_!== null
                && object_.__number__) {
                if (object_.__number__ == 0x02) {
                    return true;
                }
                if (isFinite(object_) && 
                    Math.ceil(object_) == object_) {
                    return true;
                }
            }
            return false;
        case 'basestring':
        case 'str':
            return typeof object_== 'string';
        case 'bool':
            return typeof object_== 'boolean';
        case 'long':
            return object_.__number__ == 0x04;
    }
    if (typeof object_!= 'object' && typeof object_!= 'function') {
        return false;
    }

		if ($p['bool']($p['_isinstance'](classinfo, $m['tuple']))) {
			if ($p['bool']($p['_isinstance'](object_, $m['tuple']))) {
				return true;
			}
			$iter11_iter = classinfo;
			$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
			while (typeof($p['__wrapped_next']($iter11_nextval).$nextval) != 'undefined') {
				ci = $iter11_nextval.$nextval;
				if ($p['bool']($m['isinstance'](object_, ci))) {
					return true;
				}
			}
			return false;
		}
		else {
			return $p['_isinstance'](object_, classinfo);
		}
		return null;
	};
	$m['isinstance'].__name__ = 'isinstance';

	$m['isinstance'].__bind_type__ = 0;
	$m['isinstance'].__args__ = [null,null,['object_'],['classinfo']];
	$m['_isinstance'] = function(object_, classinfo) {


    if (   object_.__is_instance__ !== true 
        || classinfo.__is_instance__ === null) {
        return false;
    }
    var __mro__ = object_.__mro__;
    var n = __mro__.length;
    if (classinfo.__is_instance__ === false) {
        while (--n >= 0) {
            if (object_.__mro__[n] === classinfo.prototype) {
                return true;
            }
        }
        return false;
    }
    while (--n >= 0) {
        if (object_.__mro__[n] === classinfo.__class__) return true;
    }
    return false;
    
	};
	$m['_isinstance'].__name__ = '_isinstance';

	$m['_isinstance'].__bind_type__ = 0;
	$m['_isinstance'].__args__ = [null,null,['object_'],['classinfo']];
	$m['issubclass'] = function(class_, classinfo) {
		var ci,$iter12_type,$iter12_array,$iter12_iter,$iter12_idx,$iter12_nextval;
		if ($p['bool']( typeof class_ == 'undefined' || class_ === null || class_.__is_instance__ !== false )) {
			throw ($m['TypeError']('arg 1 must be a class'));
		}
		if ($p['bool']($m['isinstance'](classinfo, $m['tuple']))) {
			$iter12_iter = classinfo;
			$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
			while (typeof($p['__wrapped_next']($iter12_nextval).$nextval) != 'undefined') {
				ci = $iter12_nextval.$nextval;
				if ($p['bool']($m['issubclass'](class_, ci))) {
					return true;
				}
			}
			return false;
		}
		else {
			if ($p['bool']( typeof classinfo == 'undefined' || classinfo.__is_instance__ !== false )) {
				throw ($m['TypeError']('arg 2 must be a class or tuple of classes'));
			}
			return (typeof _issubtype == "undefined"?$m._issubtype:_issubtype)(class_, classinfo);
		}
		return null;
	};
	$m['issubclass'].__name__ = 'issubclass';

	$m['issubclass'].__bind_type__ = 0;
	$m['issubclass'].__args__ = [null,null,['class_'],['classinfo']];
	$m['_issubtype'] = function(object_, classinfo) {


    if (   object_.__is_instance__ === null 
        || classinfo.__is_instance__ === null) {
        return false;
    }
    var __mro__ = object_.__mro__;
    var n = __mro__.length;
    if (classinfo.__is_instance__ === false) {
        while (--n >= 0) {
            if (object_.__mro__[n] === classinfo.prototype) {
                return true;
            }
        }
        return false;
    }
    while (--n >= 0) {
        if (object_.__mro__[n] === classinfo.__class__) return true;
    }
    return false;
    
	};
	$m['_issubtype'].__name__ = '_issubtype';

	$m['_issubtype'].__bind_type__ = 0;
	$m['_issubtype'].__args__ = [null,null,['object_'],['classinfo']];
	$m['__getattr_check'] = function(attr, attr_left, attr_right, attrstr, bound_methods, descriptors, attribute_checking, source_tracking) {

 		return null;
	};
	$m['__getattr_check'].__name__ = '__getattr_check';

	$m['__getattr_check'].__bind_type__ = 0;
	$m['__getattr_check'].__args__ = [null,null,['attr'],['attr_left'],['attr_right'],['attrstr'],['bound_methods'],['descriptors'],['attribute_checking'],['source_tracking']];
	$m['getattr'] = function(obj, name, default_value) {
		if (typeof default_value == 'undefined') default_value=arguments.callee.__args__[4][1];


    if (obj=== null || typeof obj== 'undefined') {
        if (arguments.length != 3 || typeof obj== 'undefined') {
            throw $m['AttributeError']("'" + $m['repr'](obj) + "' has no attribute '" + name+ "'");
        }
        return default_value;
    }
    var mapped_name = name;
    if (typeof obj[name] == 'undefined') {
        mapped_name = '$$' + name;
        if (typeof obj[mapped_name] == 'undefined' || attrib_remap.indexOf(name) < 0) {
            if (arguments.length != 3) {
                throw $m['AttributeError']("'" + $m['repr'](obj) + "' has no attribute '" + name+ "'");
            }
            return default_value;
        }
    }
    var method = obj[mapped_name];
    if (method === null) return method;

    if (typeof method.__get__ == 'function') {
        if (obj.__is_instance__) {
            return method.__get__(obj, obj.__class__);
        }
        return method.__get__(null, obj.__class__);
    }
    if (   typeof method != 'function'
        || typeof method.__is_instance__ != 'undefined'
        || obj.__is_instance__ !== true
        || name== '__class__') {
        return obj[mapped_name];
    }

    var fnwrap = function() {
        return method.apply(obj,$pyjs_array_slice.call(arguments));
    };
    fnwrap.__name__ = name;
    fnwrap.__args__ = obj[mapped_name].__args__;
    fnwrap.__class__ = obj.__class__;
    fnwrap.__doc__ = method.__doc__ || '';
    fnwrap.__bind_type__ = obj[mapped_name].__bind_type__;
    if (typeof obj[mapped_name].__is_instance__ != 'undefined') {
        fnwrap.__is_instance__ = obj[mapped_name].__is_instance__;
    } else {
        fnwrap.__is_instance__ = false;
    }
    return fnwrap;
    
	};
	$m['getattr'].__name__ = 'getattr';

	$m['getattr'].__bind_type__ = 0;
	$m['getattr'].__args__ = [null,null,['obj'],['name'],['default_value', null]];
	$m['_del'] = function(obj) {


    if (typeof obj.__delete__ == 'function') {
        obj.__delete__(obj);
    } else {
        delete obj;
    }
    
	};
	$m['_del'].__name__ = '_del';

	$m['_del'].__bind_type__ = 0;
	$m['_del'].__args__ = [null,null,['obj']];
	$m['delattr'] = function(obj, name) {


    if (typeof obj== 'undefined') {
        throw $m['UndefinedValueError']("obj");
    }
    if (typeof name!= 'string') {
        throw $m['TypeError']("attribute name must be string");
    }
    if (obj.__is_instance__ && typeof obj.__delattr__ == 'function') {
        obj.__delattr__(name);
        return;
    }
    var mapped_name = attrib_remap.indexOf(name) < 0 ? name: 
                        '$$'+name;
    if (   obj!== null
        && (typeof obj== 'object' || typeof obj== 'function')
        && (typeof(obj[mapped_name]) != "undefined")
        &&(typeof(obj[mapped_name]) != "function") ){
        if (obj.__is_instance__
            && typeof obj[mapped_name].__delete__ == 'function') {
            obj[mapped_name].__delete__(obj);
        } else {
            delete obj[mapped_name];
        }
        return;
    }
    if (obj=== null) {
        throw $m['AttributeError']("'NoneType' object"+
                                  "has no attribute '"+name+"'");
    }
    if (typeof obj!= 'object' && typeof obj== 'function') {
       throw $m['AttributeError']("'"+typeof(obj)+
                                 "' object has no attribute '"+name+"'");
    }
    throw $m['AttributeError'](obj.__name__+
                              " instance has no attribute '"+ name+"'");
    
	};
	$m['delattr'].__name__ = 'delattr';

	$m['delattr'].__bind_type__ = 0;
	$m['delattr'].__args__ = [null,null,['obj'],['name']];
	$m['setattr'] = function(obj, name, value) {


    if (typeof obj== 'undefined') {
        throw $m['UndefinedValueError']("obj");
    }
    if (typeof name!= 'string') {
        throw $m['TypeError']("attribute name must be string");
    }
    if (obj.__is_instance__ && typeof obj.__setattr__ == 'function') {
        obj.__setattr__(name, value)
        return;
    }
    if (attrib_remap.indexOf(name) >= 0) {
        name= '$$' + name;
    }
    if (   typeof obj[name] != 'undefined'
        && obj.__is_instance__
        && obj[name] !== null
        && typeof obj[name].__set__ == 'function') {
        obj[name].__set__(obj, value);
    } else {
        obj[name] = value;
    }
    
	};
	$m['setattr'].__name__ = 'setattr';

	$m['setattr'].__bind_type__ = 0;
	$m['setattr'].__args__ = [null,null,['obj'],['name'],['value']];
	$m['hasattr'] = function(obj, name) {


    if (typeof obj== 'undefined') {
        throw $m['UndefinedValueError']("obj");
    }
    if (typeof name != 'string') {
        throw $m['TypeError']("attribute name must be string");
    }
    if (obj=== null) return false;
    if (typeof obj[name] == 'undefined' && (
            typeof obj['$$'+name] == 'undefined' ||
            attrib_remap.indexOf(name) < 0)
      ) {
        return false;
    }
    //if (obj!= 'object' && typeof obj!= 'function')
    //    return false;
    return true;
    
	};
	$m['hasattr'].__name__ = 'hasattr';

	$m['hasattr'].__bind_type__ = 0;
	$m['hasattr'].__args__ = [null,null,['obj'],['name']];
	$m['dir'] = function(obj) {


    if (typeof obj== 'undefined') {
        throw $m['UndefinedValueError']("obj");
    }
    var properties=$m['list']();
    for (var property in obj) properties.append(property);
    return properties;
    
	};
	$m['dir'].__name__ = 'dir';

	$m['dir'].__bind_type__ = 0;
	$m['dir'].__args__ = [null,null,['obj']];
	$m['filter'] = function(obj, method, sequence) {
		if (typeof sequence == 'undefined') sequence=arguments.callee.__args__[4][1];
		var $iter14_array,$iter13_iter,items,$iter13_type,item,$iter14_type,$iter13_array,$iter14_iter,$iter13_nextval,$iter14_nextval,$iter14_idx,$iter13_idx;
		items = $p['list']([]);
		if ($p['bool']((sequence === null))) {
			sequence = method;
			method = obj;
			$iter13_iter = sequence;
			$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
			while (typeof($p['__wrapped_next']($iter13_nextval).$nextval) != 'undefined') {
				item = $iter13_nextval.$nextval;
				if ($p['bool'](method(item))) {
					items['append'](item);
				}
			}
		}
		else {
			$iter14_iter = sequence;
			$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
			while (typeof($p['__wrapped_next']($iter14_nextval).$nextval) != 'undefined') {
				item = $iter14_nextval.$nextval;
				if ($p['bool'](method['$$call'](obj, item))) {
					items['append'](item);
				}
			}
		}
		return items;
	};
	$m['filter'].__name__ = 'filter';

	$m['filter'].__bind_type__ = 0;
	$m['filter'].__args__ = [null,null,['obj'],['method'],['sequence', null]];
	$m['map'] = function(obj, method, sequence) {
		if (typeof sequence == 'undefined') sequence=arguments.callee.__args__[4][1];
		var $iter16_array,$iter15_iter,$iter16_type,items,$iter15_array,$iter15_idx,$iter16_idx,item,$iter15_nextval,$iter15_type,$iter16_nextval,$iter16_iter;
		items = $p['list']([]);
		if ($p['bool']((sequence === null))) {
			sequence = method;
			method = obj;
			$iter15_iter = sequence;
			$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
			while (typeof($p['__wrapped_next']($iter15_nextval).$nextval) != 'undefined') {
				item = $iter15_nextval.$nextval;
				items['append'](method(item));
			}
		}
		else {
			$iter16_iter = sequence;
			$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
			while (typeof($p['__wrapped_next']($iter16_nextval).$nextval) != 'undefined') {
				item = $iter16_nextval.$nextval;
				items['append'](method['$$call'](obj, item));
			}
		}
		return items;
	};
	$m['map'].__name__ = 'map';

	$m['map'].__bind_type__ = 0;
	$m['map'].__args__ = [null,null,['obj'],['method'],['sequence', null]];
	$m['reduce'] = function(func, iterable, initializer) {
		if (typeof initializer == 'undefined') initializer=arguments.callee.__args__[4][1];
		var $iter17_nextval,$iter17_iter,emtpy,$iter17_array,$pyjs_try_err,value,$iter17_idx,$iter17_type;
		try {
			iterable = $p['iter'](iterable);
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
			if (true) {

				var $pyjs__raise_expr1 = $m['TypeError'];
				var $pyjs__raise_expr2 = 'reduce() arg 2 must support iteration';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw $m['TypeError']('instance exception may not have a separate value');
				}
				if ($m['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
		}
		emtpy = true;
		$iter17_iter = iterable;
		$iter17_nextval=$p['__iter_prepare']($iter17_iter,false);
		while (typeof($p['__wrapped_next']($iter17_nextval).$nextval) != 'undefined') {
			value = $iter17_nextval.$nextval;
			emtpy = false;
			if ($p['bool'](typeof initializer== 'undefined')) {
				initializer = value;
			}
			else {
				initializer = func(initializer, value);
			}
		}
		if ($p['bool']((typeof empty == "undefined"?$m.empty:empty))) {
			if ($p['bool'](typeof initializer== 'undefined')) {

				var $pyjs__raise_expr1 = $m['TypeError'];
				var $pyjs__raise_expr2 = 'reduce() of empty sequence with no initial value';
				if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
					throw $m['TypeError']('instance exception may not have a separate value');
				}
				if ($m['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
					throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
				} else {
					throw ($pyjs__raise_expr1($pyjs__raise_expr2));
				}

			}
			return initializer;
		}
		return initializer;
	};
	$m['reduce'].__name__ = 'reduce';

	$m['reduce'].__bind_type__ = 0;
	$m['reduce'].__args__ = [null,null,['func'],['iterable'],['initializer', (function(){return;})()]];
	$m['zip'] = function() {
		var iterables = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));

		var i,$add42,$add41,n,lst,$pyjs_try_err,t;
		n = $m['len'](iterables);
		if ($p['bool']($m['op_eq'](n, 0))) {
			return $p['list']([]);
		}
		lst = $p['list']([]);
		iterables = function(){
			var $iter18_type,$iter18_iter,$iter18_array,i,$iter18_idx,$listcomp4,$iter18_nextval;
	$listcomp4 = $p['list']();
		$iter18_iter = iterables;
		$iter18_nextval=$p['__iter_prepare']($iter18_iter,false);
		while (typeof($p['__wrapped_next']($iter18_nextval).$nextval) != 'undefined') {
			i = $iter18_nextval.$nextval;
			$listcomp4['append']($p['iter'](i));
		}

	return $listcomp4;}();
		try {
			while ($p['bool'](true)) {
				t = $p['list']([]);
				i = 0;
				while ($p['bool'](($m['cmp'](i, n) == -1))) {
					t['append'](iterables.__getitem__(i)['next']());
					i = $m['__op_add']($add41=i,$add42=1);
				}
				lst['append']($m['tuple'](t));
			}
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
			if (($pyjs_try_err_name == $p['StopIteration'].__name__)||$m['_isinstance']($pyjs_try_err,$p['StopIteration'])) {
			} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
		}
		return lst;
	};
	$m['zip'].__name__ = 'zip';

	$m['zip'].__bind_type__ = 0;
	$m['zip'].__args__ = ['iterables',null];
	$m['sorted'] = function(iterable, cmp, key, reverse) {
		if (typeof cmp == 'undefined') cmp=arguments.callee.__args__[3][1];
		if (typeof key == 'undefined') key=arguments.callee.__args__[4][1];
		if (typeof reverse == 'undefined') reverse=arguments.callee.__args__[5][1];
		var lst;
		lst = $m['list'](iterable);
		lst['sort'](cmp, key, reverse);
		return lst;
	};
	$m['sorted'].__name__ = 'sorted';

	$m['sorted'].__bind_type__ = 0;
	$m['sorted'].__args__ = [null,null,['iterable'],['cmp', null],['key', null],['reverse', false]];
	$m['reversed'] = function(iterable) {
		var l,$pyjs_try_err,v,$and23,$and22;
		if ($p['bool']($m['hasattr'](iterable, '__reversed__'))) {
			return iterable['__reversed__']();
		}
		if ($p['bool'](($p['bool']($and22=$m['hasattr'](iterable, '__len__'))?$m['hasattr'](iterable, '__getitem__'):$and22))) {
			if ($p['bool']($m['op_eq']($m['len'](iterable), 0))) {
				l = $p['list']([]);
				return l['__iter__']();
			}
			try {
				v = iterable.__getitem__(0);
				return (typeof _reversed == "undefined"?$m._reversed:_reversed)(iterable);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
				if (true) {
				}
			}
		}
		throw ($m['TypeError']('argument to reversed() must be a sequence'));
		return null;
	};
	$m['reversed'].__name__ = 'reversed';

	$m['reversed'].__bind_type__ = 0;
	$m['reversed'].__args__ = [null,null,['iterable']];
	$m['_reversed'] = function(iterable) {
		var i,$sub10,$sub9,$sub8,$sub7;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
		var $generator = function () {};
		$generator['next'] = function (noStop) {
		
			var $res;
			$yield_value = $exc = null;
			try {
				$res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res == 'undefined') {
					if (noStop === true) {
						$generator_state[0] = -1;
						return;
					}
					throw $p['StopIteration'];
				}
			} catch (e) {
		
				$is_executing=false;
				$generator_state[0] = -1;
				if (noStop === true && e === $p['StopIteration']) {
					return;
				}
				throw e;
			}
			return $res;
		};
		$generator['__iter__'] = function () {return $generator;};
		$generator['send'] = function ($val) {
		
			$yield_value = $val;
			$exc = null;
			try {
				var $res = $generator['$genfunc']();
				if (typeof $res == 'undefined') throw $p['StopIteration'];
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw e;
			}
			$is_executing=false;
			return $res;
		};
		$generator['$$throw'] = function ($exc_type, $exc_value) {
		
			$yield_value = null;
			$exc=(typeof $exc_value == 'undefined'?$exc_type():$exc_type($exc_value));
			try {
				var $res = $generator['$genfunc']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw (e);
			}
			$is_executing=false;
			return $res;
		};
		$generator['close'] = function () {
		
			$yield_value = null;
			$exc=$m['GeneratorExit'];
			try {
				var $res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res != 'undefined') throw $m['RuntimeError']('generator ignored GeneratorExit');
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				if (e.__name__ == 'StopIteration' || e.__name__ == 'GeneratorExit') return null;
				throw (e);
			}
			return null;
		};
		$generator['$genfunc'] = function () {
			var $yielding = false;
			if ($is_executing) throw $m['ValueError']('generator already executing');
			$is_executing = true;
		
			if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
				for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
				if (typeof $exc != 'undefined' && $exc !== null) {
					$yielding = null;
					$generator_state[0] = -1;
					throw $exc;
				}
				i = $m['len'](iterable);
				$generator_state[0]=1;
			}
			if ($generator_state[0] == 1) {
				$generator_state.splice(1, $generator_state.length-1);
				$generator_state[0]=2;
			}
			if ($generator_state[0] == 2) {
				for (;($generator_state[1] > 0)||($p['bool'](($m['cmp'](i, 0) == 1)));$generator_state[1] = 0) {
					if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
						for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
						i = $m['__op_sub']($sub9=i,$sub10=1);
						$yield_value = iterable.__getitem__(i);
						$yielding = true;
						$generator_state[1] = 1;
						return $yield_value;
						$generator_state[1]=1;
					}
					if ($generator_state[1] == 1) {
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[1] = -1;
							throw $exc;
						}
						$generator_state[1]=2;
					}
					if ($generator_state[1] == 2) {
					}
				}
				$generator_state[0]=3;
			}
			if ($generator_state[0] == 3) {
				$generator_state[0]=4;
			}
			if ($generator_state[0] == 4) {
			}

			return;
		};
		return $generator;
	};
	$m['_reversed'].__name__ = '_reversed';

	$m['_reversed'].__bind_type__ = 0;
	$m['_reversed'].__args__ = [null,null,['iterable']];
	$m['enumerate'] = function(seq) {


    if (typeof seq.__enumerate__ == 'function') {
        return seq.__enumerate__();
    }

		return (typeof _enumerate == "undefined"?$m._enumerate:_enumerate)(seq);
	};
	$m['enumerate'].__name__ = 'enumerate';

	$m['enumerate'].__bind_type__ = 0;
	$m['enumerate'].__args__ = [null,null,['seq']];
	$m['_enumerate'] = function(sequence) {
		var $iter20_iter,$iter20_nextval,$iter19_idx,$iter20_idx,$add46,$add45,$add44,$add43,$iter19_array,$iter19_iter,$iter19_nextval,$iter19_type,nextIndex,item,$iter20_type,$iter20_array;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
		var $generator = function () {};
		$generator['next'] = function (noStop) {
		
			var $res;
			$yield_value = $exc = null;
			try {
				$res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res == 'undefined') {
					if (noStop === true) {
						$generator_state[0] = -1;
						return;
					}
					throw $p['StopIteration'];
				}
			} catch (e) {
		
				$is_executing=false;
				$generator_state[0] = -1;
				if (noStop === true && e === $p['StopIteration']) {
					return;
				}
				throw e;
			}
			return $res;
		};
		$generator['__iter__'] = function () {return $generator;};
		$generator['send'] = function ($val) {
		
			$yield_value = $val;
			$exc = null;
			try {
				var $res = $generator['$genfunc']();
				if (typeof $res == 'undefined') throw $p['StopIteration'];
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw e;
			}
			$is_executing=false;
			return $res;
		};
		$generator['$$throw'] = function ($exc_type, $exc_value) {
		
			$yield_value = null;
			$exc=(typeof $exc_value == 'undefined'?$exc_type():$exc_type($exc_value));
			try {
				var $res = $generator['$genfunc']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw (e);
			}
			$is_executing=false;
			return $res;
		};
		$generator['close'] = function () {
		
			$yield_value = null;
			$exc=$m['GeneratorExit'];
			try {
				var $res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res != 'undefined') throw $m['RuntimeError']('generator ignored GeneratorExit');
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				if (e.__name__ == 'StopIteration' || e.__name__ == 'GeneratorExit') return null;
				throw (e);
			}
			return null;
		};
		$generator['$genfunc'] = function () {
			var $yielding = false;
			if ($is_executing) throw $m['ValueError']('generator already executing');
			$is_executing = true;
		
			if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
				for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
				if (typeof $exc != 'undefined' && $exc !== null) {
					$yielding = null;
					$generator_state[0] = -1;
					throw $exc;
				}
				nextIndex = 0;
				$iter20_iter = sequence;
				$iter20_nextval=$p['__iter_prepare']($iter20_iter,false);
				$generator_state[0]=1;
			}
			if ($generator_state[0] == 1) {
				$generator_state[1] = 0;
				$generator_state[0]=2;
			}
			if ($generator_state[0] == 2) {
				for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter20_nextval).$nextval) != 'undefined');$generator_state[1] = 0) {
					if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
						for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
						item = $iter20_nextval.$nextval;
						$yield_value = $p['tuple']([nextIndex, item]);
						$yielding = true;
						$generator_state[1] = 1;
						return $yield_value;
						$generator_state[1]=1;
					}
					if ($generator_state[1] == 1) {
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[1] = -1;
							throw $exc;
						}
						nextIndex = $m['__op_add']($add45=nextIndex,$add46=1);
						$generator_state[1]=2;
					}
					if ($generator_state[1] == 2) {
					}
				}
				$generator_state[0]=3;
			}
			if ($generator_state[0] == 3) {
				$generator_state[0]=4;
			}
			if ($generator_state[0] == 4) {
			}

			return;
		};
		return $generator;
	};
	$m['_enumerate'].__name__ = '_enumerate';

	$m['_enumerate'].__bind_type__ = 0;
	$m['_enumerate'].__args__ = [null,null,['sequence']];
	$m['iter'] = function(iterable, sentinel) {
		if (typeof sentinel == 'undefined') sentinel=arguments.callee.__args__[3][1];

		if ($p['bool']((sentinel === null))) {
			if ($p['bool']((typeof isIteratable == "undefined"?$m.isIteratable:isIteratable)(iterable))) {
				return iterable['__iter__']();
			}
			if ($p['bool']($m['hasattr'](iterable, '__getitem__'))) {
				return (typeof _iter_getitem == "undefined"?$m._iter_getitem:_iter_getitem)(iterable);
			}
			throw ($m['TypeError']('object is not iterable'));
		}
		if ($p['bool']((typeof isFunction == "undefined"?$m.isFunction:isFunction)(iterable))) {
			return (typeof _iter_callable == "undefined"?$m._iter_callable:_iter_callable)(iterable, sentinel);
		}
		throw ($m['TypeError']('iter(v, w): v must be callable'));
		return null;
	};
	$m['iter'].__name__ = 'iter';

	$m['iter'].__bind_type__ = 0;
	$m['iter'].__args__ = [null,null,['iterable'],['sentinel', null]];
	$m['_iter_getitem'] = function(object) {
		var $add50,$add49,$add48,i,$add47,$pyjs_try_err;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
		var $generator = function () {};
		$generator['next'] = function (noStop) {
		
			var $res;
			$yield_value = $exc = null;
			try {
				$res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res == 'undefined') {
					if (noStop === true) {
						$generator_state[0] = -1;
						return;
					}
					throw $p['StopIteration'];
				}
			} catch (e) {
		
				$is_executing=false;
				$generator_state[0] = -1;
				if (noStop === true && e === $p['StopIteration']) {
					return;
				}
				throw e;
			}
			return $res;
		};
		$generator['__iter__'] = function () {return $generator;};
		$generator['send'] = function ($val) {
		
			$yield_value = $val;
			$exc = null;
			try {
				var $res = $generator['$genfunc']();
				if (typeof $res == 'undefined') throw $p['StopIteration'];
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw e;
			}
			$is_executing=false;
			return $res;
		};
		$generator['$$throw'] = function ($exc_type, $exc_value) {
		
			$yield_value = null;
			$exc=(typeof $exc_value == 'undefined'?$exc_type():$exc_type($exc_value));
			try {
				var $res = $generator['$genfunc']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw (e);
			}
			$is_executing=false;
			return $res;
		};
		$generator['close'] = function () {
		
			$yield_value = null;
			$exc=$m['GeneratorExit'];
			try {
				var $res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res != 'undefined') throw $m['RuntimeError']('generator ignored GeneratorExit');
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				if (e.__name__ == 'StopIteration' || e.__name__ == 'GeneratorExit') return null;
				throw (e);
			}
			return null;
		};
		$generator['$genfunc'] = function () {
			var $yielding = false;
			if ($is_executing) throw $m['ValueError']('generator already executing');
			$is_executing = true;
		
			if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
				for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
				if (typeof $exc != 'undefined' && $exc !== null) {
					$yielding = null;
					$generator_state[0] = -1;
					throw $exc;
				}
				i = 0;
				$generator_state[0]=1;
			}
			if ($generator_state[0] == 1) {
				try {
					if (typeof $generator_exc[0] != 'undefined' && $generator_exc[0] !== null) throw $generator_exc[0];
					if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
						for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
						$generator_exc[0] = null;
						$generator_state[1]=1;
					}
					if ($generator_state[1] == 1) {
						$generator_state[1]=2;
					}
					if ($generator_state[1] == 2) {
						$generator_state.splice(2, $generator_state.length-2);
						$generator_state[1]=3;
					}
					if ($generator_state[1] == 3) {
						for (;($generator_state[2] > 0)||($p['bool'](true));$generator_state[2] = 0) {
							if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
								for (var $i = 2 ; $i < ($generator_state.length<4?4:$generator_state.length); $i++) $generator_state[$i]=0;
								$yield_value = object.__getitem__(i);
								$yielding = true;
								$generator_state[2] = 1;
								return $yield_value;
								$generator_state[2]=1;
							}
							if ($generator_state[2] == 1) {
								if (typeof $exc != 'undefined' && $exc !== null) {
									$yielding = null;
									$generator_state[2] = -1;
									throw $exc;
								}
								i = $m['__op_add']($add49=i,$add50=1);
								$generator_state[2]=2;
							}
							if ($generator_state[2] == 2) {
							}
						}
						$generator_state[1]=4;
					}
					if ($generator_state[1] == 4) {
						$generator_state[1]=5;
					}
					if ($generator_state[1] == 5) {
						$generator_state[1]=6;
					}
					if ($generator_state[1] == 6) {
					}
				} catch($pyjs_try_err) {
					$generator_exc[0] = $pyjs_try_err;
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: $m};
					if (($pyjs_try_err_name == $m['IndexError'].__name__)||$m['_isinstance']($pyjs_try_err,$m['IndexError'])) {
						if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
							for (var $i = 3 ; $i < ($generator_state.length<5?5:$generator_state.length); $i++) $generator_state[$i]=0;
							$generator_state[3]=1;
						}
						if ($generator_state[3] == 1) {
						}
					} else { $pyjs.__active_exception_stack__ = $pyjs.__last_exception_stack__; $pyjs.__last_exception_stack__ = null; throw $pyjs_try_err; }
				}
				$generator_exc[0] = null;
				for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
				$generator_state[0]=2;
			}
			if ($generator_state[0] == 2) {
				$generator_state[0]=3;
			}
			if ($generator_state[0] == 3) {
			}

			return;
		};
		return $generator;
	};
	$m['_iter_getitem'].__name__ = '_iter_getitem';

	$m['_iter_getitem'].__bind_type__ = 0;
	$m['_iter_getitem'].__args__ = [null,null,['object']];
	$m['_iter_callable'] = function(callable, sentinel) {
		var nextval;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
		var $generator = function () {};
		$generator['next'] = function (noStop) {
		
			var $res;
			$yield_value = $exc = null;
			try {
				$res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res == 'undefined') {
					if (noStop === true) {
						$generator_state[0] = -1;
						return;
					}
					throw $p['StopIteration'];
				}
			} catch (e) {
		
				$is_executing=false;
				$generator_state[0] = -1;
				if (noStop === true && e === $p['StopIteration']) {
					return;
				}
				throw e;
			}
			return $res;
		};
		$generator['__iter__'] = function () {return $generator;};
		$generator['send'] = function ($val) {
		
			$yield_value = $val;
			$exc = null;
			try {
				var $res = $generator['$genfunc']();
				if (typeof $res == 'undefined') throw $p['StopIteration'];
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw e;
			}
			$is_executing=false;
			return $res;
		};
		$generator['$$throw'] = function ($exc_type, $exc_value) {
		
			$yield_value = null;
			$exc=(typeof $exc_value == 'undefined'?$exc_type():$exc_type($exc_value));
			try {
				var $res = $generator['$genfunc']();
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				throw (e);
			}
			$is_executing=false;
			return $res;
		};
		$generator['close'] = function () {
		
			$yield_value = null;
			$exc=$m['GeneratorExit'];
			try {
				var $res = $generator['$genfunc']();
				$is_executing=false;
				if (typeof $res != 'undefined') throw $m['RuntimeError']('generator ignored GeneratorExit');
			} catch (e) {
		
				$generator_state[0] = -1;
				$is_executing=false;
				if (e.__name__ == 'StopIteration' || e.__name__ == 'GeneratorExit') return null;
				throw (e);
			}
			return null;
		};
		$generator['$genfunc'] = function () {
			var $yielding = false;
			if ($is_executing) throw $m['ValueError']('generator already executing');
			$is_executing = true;
		
			if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
				for (var $i = 0 ; $i < ($generator_state.length<2?2:$generator_state.length); $i++) $generator_state[$i]=0;
				if (typeof $exc != 'undefined' && $exc !== null) {
					$yielding = null;
					$generator_state[0] = -1;
					throw $exc;
				}
				$generator_state[0]=1;
			}
			if ($generator_state[0] == 1) {
				$generator_state.splice(1, $generator_state.length-1);
				$generator_state[0]=2;
			}
			if ($generator_state[0] == 2) {
				for (;($generator_state[1] > 0)||($p['bool'](true));$generator_state[1] = 0) {
					if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
						for (var $i = 1 ; $i < ($generator_state.length<3?3:$generator_state.length); $i++) $generator_state[$i]=0;
						nextval = callable();
						if ($p['bool']($m['op_eq'](nextval, sentinel))) {
							break;
						}
						$yield_value = nextval;
						$yielding = true;
						$generator_state[1] = 1;
						return $yield_value;
						$generator_state[1]=1;
					}
					if ($generator_state[1] == 1) {
						if (typeof $exc != 'undefined' && $exc !== null) {
							$yielding = null;
							$generator_state[1] = -1;
							throw $exc;
						}
						$generator_state[1]=2;
					}
					if ($generator_state[1] == 2) {
					}
				}
				$generator_state[0]=3;
			}
			if ($generator_state[0] == 3) {
				$generator_state[0]=4;
			}
			if ($generator_state[0] == 4) {
			}

			return;
		};
		return $generator;
	};
	$m['_iter_callable'].__name__ = '_iter_callable';

	$m['_iter_callable'].__bind_type__ = 0;
	$m['_iter_callable'].__args__ = [null,null,['callable'],['sentinel']];
	$m['min'] = function() {
		var sequence = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));

		var $iter21_idx,$iter21_nextval,minValue,$iter21_type,item,$iter21_iter,$iter21_array;
		if ($p['bool']($m['op_eq']($m['len'](sequence), 1))) {
			sequence = sequence.__getitem__(0);
		}
		minValue = null;
		$iter21_iter = sequence;
		$iter21_nextval=$p['__iter_prepare']($iter21_iter,false);
		while (typeof($p['__wrapped_next']($iter21_nextval).$nextval) != 'undefined') {
			item = $iter21_nextval.$nextval;
			if ($p['bool']((minValue === null))) {
				minValue = item;
			}
			else if ($p['bool']($m['op_eq']($m['cmp'](item, minValue), (typeof ($usub5=1)=='number'?
				-$usub5:
				$m['op_usub']($usub5))))) {
				minValue = item;
			}
		}
		return minValue;
	};
	$m['min'].__name__ = 'min';

	$m['min'].__bind_type__ = 0;
	$m['min'].__args__ = ['sequence',null];
	$m['max'] = function() {
		var sequence = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));

		var $iter22_array,$iter22_nextval,maxValue,$iter22_idx,item,$iter22_type,$iter22_iter;
		if ($p['bool']($m['op_eq']($m['len'](sequence), 1))) {
			sequence = sequence.__getitem__(0);
		}
		maxValue = null;
		$iter22_iter = sequence;
		$iter22_nextval=$p['__iter_prepare']($iter22_iter,false);
		while (typeof($p['__wrapped_next']($iter22_nextval).$nextval) != 'undefined') {
			item = $iter22_nextval.$nextval;
			if ($p['bool']((maxValue === null))) {
				maxValue = item;
			}
			else if ($p['bool']($m['op_eq']($m['cmp'](item, maxValue), 1))) {
				maxValue = item;
			}
		}
		return maxValue;
	};
	$m['max'].__name__ = 'max';

	$m['max'].__bind_type__ = 0;
	$m['max'].__args__ = ['sequence',null];
	$m['sum'] = function(iterable, start) {
		if (typeof start == 'undefined') start=arguments.callee.__args__[3][1];
		var $add51,$iter23_type,$iter23_nextval,$iter23_iter,i,$add52,$iter23_array,$iter23_idx;
		if ($p['bool']((start === null))) {
			start = 0;
		}
		$iter23_iter = iterable;
		$iter23_nextval=$p['__iter_prepare']($iter23_iter,false);
		while (typeof($p['__wrapped_next']($iter23_nextval).$nextval) != 'undefined') {
			i = $iter23_nextval.$nextval;
			start = $m['__op_add']($add51=start,$add52=i);
		}
		return start;
	};
	$m['sum'].__name__ = 'sum';

	$m['sum'].__bind_type__ = 0;
	$m['sum'].__args__ = [null,null,['iterable'],['start', null]];
$p['next_hash_id'] = 0;
	if ($p['bool'](typeof 'a'[0] == 'undefined')) {
$p['__hash'] = function(obj) {
        switch (obj.constructor) {
            case String:
            case Number:
            case Date:
                return '$'+obj;
        }
        if (typeof obj.__hash__ == 'function') return obj.__hash__();
        if (typeof obj.nodeType != 'number') {
            try {
            obj.$H = ++$p['next_hash_id'];
            } catch (e) {
                return obj;
            }
            return $p['next_hash_id'];
            return obj.$H = ++$p['next_hash_id'];
        }
        if (typeof obj.setAttribute == 'undefined') {
            return obj;
        }
        var $H;
        if ($H = obj.getAttribute('$H')) {
            return $H;
        }
        obj.setAttribute('$H', ++$p['next_hash_id']);
        return $p['next_hash_id'];
    };
        
$p['hash'] = function(obj) {
        if (obj === null) return null;

        if (typeof obj.$H != 'undefined') return obj.$H;
        if (typeof obj == 'string' || obj.__number__) return '$'+obj;
        switch (obj.constructor) {
            case String:
            case Number:
            case Date:
                return '$'+obj;
        }
        if (typeof obj.__hash__ == 'function') return obj.__hash__();
        if (typeof obj.nodeType != 'number') {
            try {
            obj.$H = ++$p['next_hash_id'];
            } catch (e) {
                return obj;
            }
            return $p['next_hash_id'];
            return obj.$H = ++$p['next_hash_id'];
        }
        if (typeof obj.setAttribute == 'undefined') {
            return obj;
        }
        var $H;
        if ($H = obj.getAttribute('$H')) {
            return $H;
        }
        obj.setAttribute('$H', ++$p['next_hash_id']);
        return $p['next_hash_id'];
    };
        
	}
	else {
$p['__hash'] = function(obj) {
        switch (obj.constructor) {
            case String:
            case Number:
            case Date:
                return '$'+obj;
        }
        if (typeof obj.__hash__ == 'function') return obj.__hash__();
        obj.$H = ++$p['next_hash_id'];
        return obj.$H;
    };
        
$p['hash'] = function(obj) {
        if (obj === null) return null;

        if (typeof obj.$H != 'undefined') return obj.$H;
        if (typeof obj == 'string' || obj.__number__) return '$'+obj;
        switch (obj.constructor) {
            case String:
            case Number:
            case Date:
                return '$'+obj;
        }
        if (typeof obj.__hash__ == 'function') return obj.__hash__();
        obj.$H = ++$p['next_hash_id'];
        return obj.$H;
    };
        
	}
	$m['isObject'] = function(a) {


    return (a!== null && (typeof a== 'object')) || typeof a== 'function';
    
	};
	$m['isObject'].__name__ = 'isObject';

	$m['isObject'].__bind_type__ = 0;
	$m['isObject'].__args__ = [null,null,['a']];
	$m['isFunction'] = function(a) {


    return typeof a== 'function';
    
	};
	$m['isFunction'].__name__ = 'isFunction';

	$m['isFunction'].__bind_type__ = 0;
	$m['isFunction'].__args__ = [null,null,['a']];
	$m['callable'] = $m['isFunction'];
	$m['isString'] = function(a) {


    return typeof a== 'string';
    
	};
	$m['isString'].__name__ = 'isString';

	$m['isString'].__bind_type__ = 0;
	$m['isString'].__args__ = [null,null,['a']];
	$m['isNull'] = function(a) {


    return typeof a== 'object' && !a;
    
	};
	$m['isNull'].__name__ = 'isNull';

	$m['isNull'].__bind_type__ = 0;
	$m['isNull'].__args__ = [null,null,['a']];
	$m['isArray'] = function(a) {


    return $m['isObject'](a) && a.constructor === Array;
    
	};
	$m['isArray'].__name__ = 'isArray';

	$m['isArray'].__bind_type__ = 0;
	$m['isArray'].__args__ = [null,null,['a']];
	$m['isUndefined'] = function(a) {


    return typeof a== 'undefined';
    
	};
	$m['isUndefined'].__name__ = 'isUndefined';

	$m['isUndefined'].__bind_type__ = 0;
	$m['isUndefined'].__args__ = [null,null,['a']];
	$m['isIteratable'] = function(a) {


    if (a=== null) return false;
    return typeof a.__iter__ == 'function';
    
	};
	$m['isIteratable'].__name__ = 'isIteratable';

	$m['isIteratable'].__bind_type__ = 0;
	$m['isIteratable'].__args__ = [null,null,['a']];
	$m['isNumber'] = function(a) {


    return a!== null && a.__number__ && 
           (a.__number__ != 0x01 || isFinite(a));
    
	};
	$m['isNumber'].__name__ = 'isNumber';

	$m['isNumber'].__bind_type__ = 0;
	$m['isNumber'].__args__ = [null,null,['a']];
	$m['isInteger'] = function(a) {


    switch (a.__number__) {
        case 0x01:
            if (a != Math.floor(a)) break;
        case 0x02:
        case 0x04:
            return true;
    }
    return false;

	};
	$m['isInteger'].__name__ = 'isInteger';

	$m['isInteger'].__bind_type__ = 0;
	$m['isInteger'].__args__ = [null,null,['a']];
	$m['isSet'] = function(a) {


    if (a=== null) return false;
    if (typeof a.__object == 'undefined') return false;
    var a_mro = a.__mro__;
    switch (a_mro[a_mro.length-2].__md5__) {
        case $m['set'].__md5__:
            return 1;
        case $m['frozenset'].__md5__:
            return 2;
    }
    return false;

	};
	$m['isSet'].__name__ = 'isSet';

	$m['isSet'].__bind_type__ = 0;
	$m['isSet'].__args__ = [null,null,['a']];
	$m['toJSObjects'] = function(x) {
		var $attr97,$attr99,$attr98,$attr100;
		if ($p['bool']($m['isArray'](x))) {

        var result = [];
        for(var k=0; k < x.length; k++) {
           var v = x[k];
           var tv = $m['toJSObjects'](v);
           result.push(tv);
        }
        return result;
        
		}
		if ($p['bool']($m['isObject'](x))) {
			if ($p['bool'](x['__number__'])) {
				return x['valueOf']();
			}
			else if ($p['bool']($m['isinstance'](x, $m['dict']))) {

            var o = x.getObject();
            var result = {};
            for (var i in o) {
               result[o[i][0].toString()] = $m['toJSObjects'](o[i][1]);
            }
            return result;
            
			}
			else if ($p['bool']($m['isinstance'](x, $m['list']))) {
				return $m['toJSObjects'](x['__array']);
			}
			else if ($p['bool']($m['hasattr'](x, '__class__'))) {
				return x;
			}
		}
		if ($p['bool']($m['isObject'](x))) {

        var result = {};
        for(var k in x) {
            var v = x[k];
            var tv = $m['toJSObjects'](v);
            result[k] = tv;
            }
            return result;
         
		}
		if ($p['bool']($m['isString'](x))) {
			return $m['str'](x);
		}
		return x;
	};
	$m['toJSObjects'].__name__ = 'toJSObjects';

	$m['toJSObjects'].__bind_type__ = 0;
	$m['toJSObjects'].__args__ = [null,null,['x']];
	$m['sprintf'] = function(strng, args) {


    var re_dict = /([^%]*)%[(]([^)]+)[)]([#0\x20\x2B-]*)(\d+)?(\.\d+)?[hlL]?(.)((.|\n)*)/;
    var re_list = /([^%]*)%([#0\x20\x2B-]*)(\*|(\d+))?(\.\d+)?[hlL]?(.)((.|\n)*)/;
    var re_exp = /(.*)([+-])(.*)/;

    var argidx = 0;
    var nargs = 0;
    var result = [];
    var remainder = strng;

    function formatarg(flags, minlen, precision, conversion, param) {
        var subst = '';
        var numeric = true;
        var left_padding = 1;
        var padchar = ' ';
        if (minlen === null || minlen == 0 || !minlen) {
            minlen=0;
        } else {
            minlen = parseInt(minlen);
        }
        if (!precision) {
            precision = null;
        } else {
            precision = parseInt(precision.substr(1));
        }
        if (flags.indexOf('-') >= 0) {
            left_padding = 0;
        }
        switch (conversion) {
            case '%':
                numeric = false;
                subst = '%';
                break;
            case 'c':
                numeric = false;
                subst = String.fromCharCode(parseInt(param));
                break;
            case 'd':
            case 'i':
            case 'u':
                subst = '' + parseInt(param);
                break;
            case 'e':
                if (precision === null) {
                    precision = 6;
                }
                subst = re_exp.exec(String(param.toExponential(precision)));
                if (subst[3].length == 1) {
                    subst = subst[1] + subst[2] + '0' + subst[3];
                } else {
                    subst = subst[1] + subst[2] + subst[3];
                }
                break;
            case 'E':
                if (precision === null) {
                    precision = 6;
                }
                subst = re_exp.exec(String(param.toExponential(precision)).toUpperCase());
                if (subst[3].length == 1) {
                    subst = subst[1] + subst[2] + '0' + subst[3];
                } else {
                    subst = subst[1] + subst[2] + subst[3];
                }
                break;
            case 'f':
                if (precision === null) {
                    precision = 6;
                }
                subst = String(parseFloat(param).toFixed(precision));
                break;
            case 'F':
                if (precision === null) {
                    precision = 6;
                }
                subst = String(parseFloat(param).toFixed(precision)).toUpperCase();
                break;
            case 'g':
                if (precision === null && flags.indexOf('#') >= 0) {
                    precision = 6;
                }
                if (param >= 1E6 || param < 1E-5) {
                    subst = String(precision == null ? param.toExponential() : param.toExponential().toPrecision(precision));
                } else {
                    subst = String(precision == null ? parseFloat(param) : parseFloat(param).toPrecision(precision));
                }
                break;
            case 'G':
                if (precision === null && flags.indexOf('#') >= 0) {
                    precision = 6;
                }
                if (param >= 1E6 || param < 1E-5) {
                    subst = String(precision == null ? param.toExponential() : param.toExponential().toPrecision(precision)).toUpperCase();
                } else {
                    subst = String(precision == null ? parseFloat(param) : parseFloat(param).toPrecision(precision)).toUpperCase().toUpperCase();
                }
                break;
            case 'r':
                numeric = false;
                subst = $m['repr'](param);
                break;
            case 's':
                numeric = false;
                subst = $m['str'](param);
                break;
            case 'o':
                param = $p['float_int'](param);
                subst = param.toString(8);
                if (subst != '0' && flags.indexOf('#') >= 0) {
                    subst = '0' + subst;
                }
                break;
            case 'x':
                param = $p['float_int'](param);
                subst = param.toString(16);
                if (flags.indexOf('#') >= 0) {
                    if (left_padding) {
                        subst = subst.rjust(minlen - 2, '0');
                    }
                    subst = '0x' + subst;
                }
                break;
            case 'X':
                param = $p['float_int'](param);
                subst = param.toString(16).toUpperCase();
                if (flags.indexOf('#') >= 0) {
                    if (left_padding) {
                        subst = subst.rjust(minlen - 2, '0');
                    }
                    subst = '0x' + subst;
                }
                break;
            default:
                throw $m['ValueError']("unsupported format character '" + conversion + "' ("+$p['hex'](conversion.charCodeAt(0))+") at index " + (strng.length - remainder.length - 1));
        }
        if (minlen && subst.length < minlen) {
            if (numeric && left_padding && flags.indexOf('0') >= 0) {
                padchar = '0';
            }
            subst = left_padding ? subst.rjust(minlen, padchar) : subst.ljust(minlen, padchar);
        }
        return subst;
    }

    function sprintf_list(strng, args) {
        var a, left, flags, precision, conversion, minlen, param,
            __array = result;
        while (remainder) {
            a = re_list.exec(remainder);
            if (a === null) {
                __array[__array.length] = remainder;
                break;
            }
            left = a[1]; flags = a[2];
            minlen = a[3]; precision = a[5]; conversion = a[6];
            remainder = a[7];
            if (typeof minlen == 'undefined') minlen = null;
            if (typeof precision == 'undefined') precision = null;
            if (typeof conversion == 'undefined') conversion = null;
            __array[__array.length] = left;
            if (minlen == '*') {
                if (argidx == nargs) {
                    throw $m['TypeError']("not enough arguments for format string");
                }
                minlen = args.__getitem__(argidx++);
                switch (minlen.__number__) {
                    case 0x02:
                    case 0x04:
                        break;
                    case 0x01:
                        if (minlen == Math.floor(minlen)) {
                            break;
                        }
                    default:
                        throw $m['TypeError']('* wants int');
                }
            }
            if (conversion != '%') {
                if (argidx == nargs) {
                    throw $m['TypeError']("not enough arguments for format string");
                }
                param = args.__getitem__(argidx++);
            }
            __array[__array.length] = formatarg(flags, minlen, precision, conversion, param);
        }
    }

    function sprintf_dict(strng, args) {
        var a = null,
            left = null,
            flags = null,
            precision = null,
            conversion = null,
            minlen = null,
            minlen_type = null,
            key = null,
            arg = args,
            param,
            __array = result;

        argidx++;
        while (remainder) {
            a = re_dict.exec(remainder);
            if (a === null) {
                __array[__array.length] = remainder;
                break;
            }
            left = a[1]; key = a[2]; flags = a[3];
            minlen = a[4]; precision = a[5]; conversion = a[6];
            remainder = a[7];
            if (typeof minlen == 'undefined') minlen = null;
            if (typeof precision == 'undefined') precision = null;
            if (typeof conversion == 'undefined') conversion = null;
            __array[__array.length] = left;
            param = arg.__getitem__(key);
            __array[__array.length] = formatarg(flags, minlen, precision, conversion, param);
        }
    }

    var constructor = args === null ? 'NoneType' : (args.__md5__ == $m['tuple'].__md5__ ? 'tuple': (args.__md5__ == $m['dict'].__md5__ ? 'dict': 'Other'));
    if (strng.indexOf("%(") >= 0) {
        if (re_dict.exec(strng) !== null) {
            if (constructor != "dict") {
                throw $m['TypeError']("format requires a mapping");
            }
            sprintf_dict(strng, args);
            return result.join("");
        }
    }
    if (constructor != "tuple") {
        args = $m['tuple']([args]);
    }
    nargs = args.__array.length;
    sprintf_list(strng, args);
    if (argidx != nargs) {
        throw $m['TypeError']('not all arguments converted during string formatting');
    }
    return result.join("");

	};
	$m['sprintf'].__name__ = 'sprintf';

	$m['sprintf'].__bind_type__ = 0;
	$m['sprintf'].__args__ = [null,null,['strng'],['args']];
	$m['debugReport'] = function(msg) {


    alert(msg);
    
	};
	$m['debugReport'].__name__ = 'debugReport';

	$m['debugReport'].__bind_type__ = 0;
	$m['debugReport'].__args__ = [null,null,['msg']];

var $printFunc = null;
if (   typeof $wnd.console != 'undefined'
    && typeof $wnd.console.debug == 'function') {
    $printFunc = function(s) {
        $wnd.console.debug(s);
    };
} else if (   typeof $wnd.opera != 'undefined'
           && typeof $wnd.opera.postError == 'function') {
    $printFunc = function(s) {
        $wnd.opera.postError(s);
    };
} else if ( typeof console != 'undefined') {
    if (   typeof console.log == 'function'
        || typeof console.log == 'object') {
        $printFunc = function(s){
            console.log(s);
        };
    }
}

	$m['_print_to_console'] = function(s) {


    if ($printFunc === null) return null;
    $printFunc(s);
    
	};
	$m['_print_to_console'].__name__ = '_print_to_console';

	$m['_print_to_console'].__bind_type__ = 0;
	$m['_print_to_console'].__args__ = [null,null,['s']];
	$m['printFunc'] = function(objs, newline) {


    var s = "";
    for(var i=0; i < objs.length; i++) {
        if(s != "") s += " ";
        s += objs[i];
    }
    if (newline) {
      s += '\n';
    }
    $m['sys'].stdout.write(s);
    
	};
	$m['printFunc'].__name__ = 'printFunc';

	$m['printFunc'].__bind_type__ = 0;
	$m['printFunc'].__args__ = [null,null,['objs'],['newline']];
	$m['pow'] = function(x, y, z) {
		if (typeof z == 'undefined') z=arguments.callee.__args__[4][1];
		var p,$mod1,$mod2;
		p = null;
p = Math.pow(x, y);
		if ($p['bool']((z === null))) {
			return $m['float'](p);
		}
		return $m['float']((typeof ($mod1=p)==typeof ($mod2=z) && typeof $mod1=='number'?
			(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
			$m['op_mod']($mod1,$mod2)));
	};
	$m['pow'].__name__ = 'pow';

	$m['pow'].__bind_type__ = 0;
	$m['pow'].__args__ = [null,null,['x'],['y'],['z', null]];
	$m['hex'] = function(x) {


    if (typeof x == 'number') {
        if (Math.floor(x) == x) {
            return '0x' + x.toString(16);
        }
    } else {
        switch (x.__number__) {
            case 0x02:
                return '0x' + x.__v.toString(16);
            case 0x04:
                return x.__hex__();
        }
    }

		throw ($m['TypeError']('hex() argument can\x27t be converted to hex'));
		return null;
	};
	$m['hex'].__name__ = 'hex';

	$m['hex'].__bind_type__ = 0;
	$m['hex'].__args__ = [null,null,['x']];
	$m['oct'] = function(x) {


    if (typeof x == 'number') {
        if (Math.floor(x) == x) {
            return x == 0 ? '0': '0' + x.toString(8);
        }
    } else {
        switch (x.__number__) {
            case 0x02:
                return x.__v == 0 ? '0': '0' + x.__v.toString(8);
            case 0x04:
                return x.__oct__();
        }
    }

		throw ($m['TypeError']('oct() argument can\x27t be converted to oct'));
		return null;
	};
	$m['oct'].__name__ = 'oct';

	$m['oct'].__bind_type__ = 0;
	$m['oct'].__args__ = [null,null,['x']];
	$m['round'] = function(x, n) {
		if (typeof n == 'undefined') n=arguments.callee.__args__[3][1];
		var r;
		n = $m['pow'](10, n);
		r = null;
r = Math.round(n*x)/n;
		return $m['float'](r);
	};
	$m['round'].__name__ = 'round';

	$m['round'].__bind_type__ = 0;
	$m['round'].__args__ = [null,null,['x'],['n', 0]];
	$m['divmod'] = function(x, y) {


    if (x !== null && y !== null) {
        switch ((x.__number__ << 8) | y.__number__) {
            case 0x0101:
            case 0x0104:
            case 0x0401:
                if (y == 0) throw $m['ZeroDivisionError']('float divmod()');
                var f = Math.floor(x / y);
                return $m['tuple']([f, x - f * y]);
            case 0x0102:
                if (y.__v == 0) throw $m['ZeroDivisionError']('float divmod()');
                var f = Math.floor(x / y.__v);
                return $m['tuple']([f, x - f * y.__v]);
            case 0x0201:
                if (y == 0) throw $m['ZeroDivisionError']('float divmod()');
                var f = Math.floor(x.__v / y);
                return $m['tuple']([f, x.__v - f * y]);
            case 0x0202:
                if (y.__v == 0) throw $m['ZeroDivisionError']('integer division or modulo by zero');
                var f = Math.floor(x.__v / y.__v);
                return $m['tuple']([new $p['float_int'](f), new $p['float_int'](x.__v - f * y.__v)]);
            case 0x0204:
                return y.__rdivmod__(new $p['float_int'](x.__v));
            case 0x0402:
                return x.__divmod__(new $p['float_int'](y.__v));
            case 0x0404:
                return x.__divmod__(y);
        }
        if (!x.__number__) {
            if (   !y.__number__
                && x.__mro__.length > y.__mro__.length
                && $m['isinstance'](x, y)
                && typeof x['__divmod__'] == 'function')
                return y.__divmod__(x);
            if (typeof x['__divmod__'] == 'function') return x.__divmod__(y);
        }
        if (!y.__number__ && typeof y['__rdivmod__'] == 'function') return y.__rdivmod__(x);
    }

		throw ($m['TypeError']($m['sprintf']('unsupported operand type(s) for divmod(): \x27%r\x27, \x27%r\x27', $p['tuple']([x, y]))));
		return null;
	};
	$m['divmod'].__name__ = 'divmod';

	$m['divmod'].__bind_type__ = 0;
	$m['divmod'].__args__ = [null,null,['x'],['y']];
	$m['all'] = function(iterable) {
		var $iter24_idx,$iter24_type,$iter24_array,$iter24_nextval,element,$iter24_iter;
		$iter24_iter = iterable;
		$iter24_nextval=$p['__iter_prepare']($iter24_iter,false);
		while (typeof($p['__wrapped_next']($iter24_nextval).$nextval) != 'undefined') {
			element = $iter24_nextval.$nextval;
			if ($p['bool'](!$p['bool'](element))) {
				return false;
			}
		}
		return true;
	};
	$m['all'].__name__ = 'all';

	$m['all'].__bind_type__ = 0;
	$m['all'].__args__ = [null,null,['iterable']];
	$m['any'] = function(iterable) {
		var $iter25_nextval,$iter25_array,$iter25_iter,element,$iter25_idx,$iter25_type;
		$iter25_iter = iterable;
		$iter25_nextval=$p['__iter_prepare']($iter25_iter,false);
		while (typeof($p['__wrapped_next']($iter25_nextval).$nextval) != 'undefined') {
			element = $iter25_nextval.$nextval;
			if ($p['bool'](element)) {
				return true;
			}
		}
		return false;
	};
	$m['any'].__name__ = 'any';

	$m['any'].__bind_type__ = 0;
	$m['any'].__args__ = [null,null,['iterable']];
	$m['__iter_prepare'] = function(iter, reuse_tuple) {
    var it = {};
    it.$iter = iter;
    it.$loopvar = 0;
    it.$reuse_tuple = reuse_tuple;
    if (typeof (it.$arr = iter.__array) != 'undefined') {
        it.$gentype = 0;
    } else {
        it.$iter = iter.__iter__();
        it.$gentype = typeof (it.$arr = iter.__array) != 'undefined'? 0 : (typeof iter.$genfunc == 'function'? 1 : -1);
    }
    return it;
};
	$m['__wrapped_next'] = function(it) {
    var iterator = it.$iter;
    it.$nextval = it.$gentype?(it.$gentype > 0?
        iterator.next(true,it.$reuse_tuple):$p['wrapped_next'](iterator)
                              ) : it.$arr[it.$loopvar++];
    return it;
};
	$m['wrapped_next'] = function (iter) {
    try {
        var res = iter.next();
    } catch (e) {
        if (e === $p['StopIteration']) {
            return;
        }
        throw e;
    }
    return res;
};
	$m['init']();
	$m['__nondynamic_modules__'] = $p['dict']([]);
	$m['__import__'] = function(name, globals, locals, fromlist, level) {
		if (typeof globals == 'undefined') globals=arguments.callee.__args__[3][1];
		if (typeof locals == 'undefined') locals=arguments.callee.__args__[4][1];
		if (typeof fromlist == 'undefined') fromlist=arguments.callee.__args__[5][1];
		if (typeof level == 'undefined') level=arguments.callee.__args__[6][1];
		var $add53,$add54,module,$and25,$and24;
		module = $m['___import___'](name, null);
		if ($p['bool'](($p['bool']($and24=!$p['bool']((module === null)))?$m['hasattr'](module, '__was_initialized__'):$and24))) {
			return module;
		}
		throw ($m['ImportError']($m['__op_add']($add53='No module named ',$add54=name)));
		return null;
	};
	$m['__import__'].__name__ = '__import__';

	$m['__import__'].__bind_type__ = 0;
	$m['__import__'].__args__ = [null,null,['name'],['globals', $p['dict']([])],['locals', $p['dict']([])],['fromlist', $p['list']([])],['level', (typeof ($usub6=1)=='number'?
		-$usub6:
		$m['op_usub']($usub6))]];
	$m['sys'] = $m['___import___']('sys', null);
	$m['dynamic'] = $m['___import___']('dynamic', null);
	return this;
}; /* end pyjslib */


/* end module: pyjslib */


/*
PYJS_DEPS: ['sys', 'dynamic']
*/


/* start module: route */
$pyjs.loaded_modules['route'] = function (__mod_name__) {
	if($pyjs.loaded_modules['route'].__was_initialized__) return $pyjs.loaded_modules['route'];
	var $m = $pyjs.loaded_modules["route"];
	$m.__repr__ = function() { return "<module: route>"; };
	$m.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'route';
	$m.__name__ = __mod_name__;


	$m['ObjectRowWidget'] = $p['___import___']('easy.ObjectRowWidget', null, null, false);
	$m['j'] = $p['___import___']('easy.j', null, null, false);
	$m['row_types'] = $p['___import___']('easy.row_types', null, null, false);
	$m['RuleSetRowWidget'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__module__ = 'route';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice.call(arguments,0,arguments.length-1));

				var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
					var kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') args.__array.push(kwargs);
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
			var $attr1,$attr2;
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('edit_form_url', '/edit_route/{id}') : $p['setattr'](self, 'edit_form_url', '/edit_route/{id}');
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('graphs_url', '/route_graphs_partial/{id}') : $p['setattr'](self, 'graphs_url', '/route_graphs_partial/{id}');
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('details_contents', 'Clicks Today: {clicks_today}\x0A        \x3Cbr /\x3ELink: \x3Ca href=\x22{link}\x22\x3E{link}\x3C/a\x3E ') : $p['setattr'](self, 'details_contents', 'Clicks Today: {clicks_today}\x0A        \x3Cbr /\x3ELink: \x3Ca href=\x22{link}\x22\x3E{link}\x3C/a\x3E ');
			self.__is_instance__ && typeof self.__setattr__ == 'function' ? self.__setattr__('delete_url', '/delete_route/{id}') : $p['setattr'](self, 'delete_url', '/delete_route/{id}');
			$pyjs_kwargs_call($p['$$super']($m['RuleSetRowWidget'], self), '__init__', args, kwargs, [{}]);
			self['button_funcs']['insert'](2, (($attr1=($attr2=self)['rules_button']) == null || (($attr2.__is_instance__) && typeof $attr1 == 'function') || (typeof $attr1['__get__'] == 'function')?
						$p['getattr']($attr2, 'rules_button'):
						self['rules_button']));
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('rules_button', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $pyjs_kwargs_call(self, 'UITab', null, null, [{href:self['template']('/edit_route_rules/{id}'), display_name:'Rules'}, 'rules']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['rules_button'] = $method;
		var $bases = new Array($m['ObjectRowWidget']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data.__setitem__($item, $cls_definition[$item]); }
		return $p['_create_class']('RuleSetRowWidget', $p['tuple']($bases), $data);
	})();
	$m['row_types'].__setitem__('ruleset', $m['RuleSetRowWidget']);
	return this;
}; /* end route */


/* end module: route */


/*
PYJS_DEPS: ['easy.ObjectRowWidget', 'easy', 'easy.j', 'easy.row_types']
*/


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




$p = $pyjs.loaded_modules["pyjslib"];
$p('pyjslib');
$pyjs.__modules__.pyjslib = $p['pyjslib']


pyjslib.___import___("route", null, "__main__");