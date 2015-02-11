var Zepto=function(){function t(t){return null==t?String(t):U[W.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function i(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function r(e){return"object"==t(e)}function o(t){return r(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function a(t){return"number"==typeof t.length}function s(t){return O.call(t,function(t){return null!=t})}function c(t){return t.length>0?E.fn.concat.apply([],t):t}function u(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(t){return t in _?_[t]:_[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,e){return"number"!=typeof e||k[u(t)]?e:e+"px"}function h(t){var e,n;return N[t]||(e=P.createElement(t),P.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),N[t]=n),N[t]}function d(t){return"children"in t?A.call(t.children):E.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function p(t,e,n){for($ in e)n&&(o(e[$])||G(e[$]))?(o(e[$])&&!o(t[$])&&(t[$]={}),G(e[$])&&!G(t[$])&&(t[$]=[]),p(t[$],e[$],n)):e[$]!==w&&(t[$]=e[$])}function m(t,e){return null==e?E(t):E(t).filter(e)}function v(t,n,i,r){return e(n)?n.call(t,i,r):n}function g(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function y(t,e){var n=t.className||"",i=n&&n.baseVal!==w;return e===w?i?n.baseVal:n:void(i?n.baseVal=e:t.className=e)}function b(t){var e;try{return t?"true"==t||("false"==t?!1:"null"==t?null:/^0/.test(t)||isNaN(e=Number(t))?/^[\[\{]/.test(t)?E.parseJSON(t):t:e):t}catch(n){return t}}function x(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)x(t.childNodes[n],e)}var w,$,E,S,T,C,j=[],A=j.slice,O=j.filter,P=window.document,N={},_={},k={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},D=/^\s*<(\w+|!)[^>]*>/,F=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,R=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,M=/^(?:body|html)$/i,H=/([A-Z])/g,Z=["val","css","html","text","data","width","height","offset"],L=["after","prepend","before","append"],I=P.createElement("table"),B=P.createElement("tr"),z={tr:P.createElement("tbody"),tbody:I,thead:I,tfoot:I,td:B,th:B,"*":P.createElement("div")},q=/complete|loaded|interactive/,V=/^[\w-]*$/,U={},W=U.toString,X={},J=P.createElement("div"),K={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},G=Array.isArray||function(t){return t instanceof Array};return X.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=J).appendChild(t),i=~X.qsa(r,e).indexOf(t),o&&J.removeChild(t),i},T=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},C=function(t){return O.call(t,function(e,n){return t.indexOf(e)==n})},X.fragment=function(t,e,n){var i,r,a;return F.test(t)&&(i=E(P.createElement(RegExp.$1))),i||(t.replace&&(t=t.replace(R,"<$1></$2>")),e===w&&(e=D.test(t)&&RegExp.$1),e in z||(e="*"),a=z[e],a.innerHTML=""+t,i=E.each(A.call(a.childNodes),function(){a.removeChild(this)})),o(n)&&(r=E(i),E.each(n,function(t,e){Z.indexOf(t)>-1?r[t](e):r.attr(t,e)})),i},X.Z=function(t,e){return t=t||[],t.__proto__=E.fn,t.selector=e||"",t},X.isZ=function(t){return t instanceof X.Z},X.init=function(t,n){var i;if(!t)return X.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&D.test(t))i=X.fragment(t,RegExp.$1,n),t=null;else{if(n!==w)return E(n).find(t);i=X.qsa(P,t)}else{if(e(t))return E(P).ready(t);if(X.isZ(t))return t;if(G(t))i=s(t);else if(r(t))i=[t],t=null;else if(D.test(t))i=X.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==w)return E(n).find(t);i=X.qsa(P,t)}}return X.Z(i,t)},E=function(t,e){return X.init(t,e)},E.extend=function(t){var e,n=A.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){p(t,n,e)}),t},X.qsa=function(t,e){var n,r="#"==e[0],o=!r&&"."==e[0],a=r||o?e.slice(1):e,s=V.test(a);return i(t)&&s&&r?(n=t.getElementById(a))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:A.call(s&&!r?o?t.getElementsByClassName(a):t.getElementsByTagName(e):t.querySelectorAll(e))},E.contains=P.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},E.type=t,E.isFunction=e,E.isWindow=n,E.isArray=G,E.isPlainObject=o,E.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},E.inArray=function(t,e,n){return j.indexOf.call(e,t,n)},E.camelCase=T,E.trim=function(t){return null==t?"":String.prototype.trim.call(t)},E.uuid=0,E.support={},E.expr={},E.map=function(t,e){var n,i,r,o=[];if(a(t))for(i=0;i<t.length;i++)n=e(t[i],i),null!=n&&o.push(n);else for(r in t)n=e(t[r],r),null!=n&&o.push(n);return c(o)},E.each=function(t,e){var n,i;if(a(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},E.grep=function(t,e){return O.call(t,e)},window.JSON&&(E.parseJSON=JSON.parse),E.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){U["[object "+e+"]"]=e.toLowerCase()}),E.fn={forEach:j.forEach,reduce:j.reduce,push:j.push,sort:j.sort,indexOf:j.indexOf,concat:j.concat,map:function(t){return E(E.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return E(A.apply(this,arguments))},ready:function(t){return q.test(P.readyState)&&P.body?t(E):P.addEventListener("DOMContentLoaded",function(){t(E)},!1),this},get:function(t){return t===w?A.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return j.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):E(O.call(this,function(e){return X.matches(e,t)}))},add:function(t,e){return E(C(this.concat(E(t,e))))},is:function(t){return this.length>0&&X.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==w)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):a(t)&&e(t.item)?A.call(t):E(t);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return E(n)},has:function(t){return this.filter(function(){return r(t)?E.contains(this,t):E(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!r(t)?t:E(t)},last:function(){var t=this[this.length-1];return t&&!r(t)?t:E(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?E(t).filter(function(){var t=this;return j.some.call(n,function(e){return E.contains(e,t)})}):1==this.length?E(X.qsa(this[0],t)):this.map(function(){return X.qsa(this,t)}):[]},closest:function(t,e){var n=this[0],r=!1;for("object"==typeof t&&(r=E(t));n&&!(r?r.indexOf(n)>=0:X.matches(n,t));)n=n!==e&&!i(n)&&n.parentNode;return E(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=E.map(n,function(t){return(t=t.parentNode)&&!i(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return m(e,t)},parent:function(t){return m(C(this.pluck("parentNode")),t)},children:function(t){return m(this.map(function(){return d(this)}),t)},contents:function(){return this.map(function(){return A.call(this.childNodes)})},siblings:function(t){return m(this.map(function(t,e){return O.call(d(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return E.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=h(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var i=E(t).get(0),r=i.parentNode||this.length>1;return this.each(function(e){E(this).wrapAll(n?t.call(this,e):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){E(this[0]).before(t=E(t));for(var e;(e=t.children()).length;)t=e.first();E(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var i=E(this),r=i.contents(),o=n?t.call(this,e):t;r.length?r.wrapAll(o):i.append(o)})},unwrap:function(){return this.parent().each(function(){E(this).replaceWith(E(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=E(this);(t===w?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return E(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return E(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;E(this).empty().append(v(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=v(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(t,e){var n;return"string"!=typeof t||1 in arguments?this.each(function(n){if(1===this.nodeType)if(r(t))for($ in t)g(this,$,t[$]);else g(this,t,v(this,e,n,this.getAttribute(t)))}):this.length&&1===this[0].nodeType?!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:w},removeAttr:function(t){return this.each(function(){1===this.nodeType&&g(this,t)})},prop:function(t,e){return t=K[t]||t,1 in arguments?this.each(function(n){this[t]=v(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(t,e){var n="data-"+t.replace(H,"-$1").toLowerCase(),i=1 in arguments?this.attr(n,e):this.attr(n);return null!==i?b(i):w},val:function(t){return 0 in arguments?this.each(function(e){this.value=v(this,t,e,this.value)}):this[0]&&(this[0].multiple?E(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var n=E(this),i=v(this,t,e,n.offset()),r=n.offsetParent().offset(),o={top:i.top-r.top,left:i.left-r.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2){var i=this[0],r=getComputedStyle(i,"");if(!i)return;if("string"==typeof e)return i.style[T(e)]||r.getPropertyValue(e);if(G(e)){var o={};return E.each(e,function(t,e){o[e]=i.style[T(e)]||r.getPropertyValue(e)}),o}}var a="";if("string"==t(e))n||0===n?a=u(e)+":"+f(e,n):this.each(function(){this.style.removeProperty(u(e))});else for($ in e)e[$]||0===e[$]?a+=u($)+":"+f($,e[$])+";":this.each(function(){this.style.removeProperty(u($))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(E(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?j.some.call(this,function(t){return this.test(y(t))},l(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){S=[];var n=y(this),i=v(this,t,e,n);i.split(/\s+/g).forEach(function(t){E(this).hasClass(t)||S.push(t)},this),S.length&&y(this,n+(n?" ":"")+S.join(" "))}}):this},removeClass:function(t){return this.each(function(e){if("className"in this){if(t===w)return y(this,"");S=y(this),v(this,t,e,S).split(/\s+/g).forEach(function(t){S=S.replace(l(t)," ")}),y(this,S.trim())}})},toggleClass:function(t,e){return t?this.each(function(n){var i=E(this),r=v(this,t,n,y(this));r.split(/\s+/g).forEach(function(t){(e===w?!i.hasClass(t):e)?i.addClass(t):i.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===w?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===w?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=M.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(E(t).css("margin-top"))||0,n.left-=parseFloat(E(t).css("margin-left"))||0,i.top+=parseFloat(E(e[0]).css("border-top-width"))||0,i.left+=parseFloat(E(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||P.body;t&&!M.test(t.nodeName)&&"static"==E(t).css("position");)t=t.offsetParent;return t})}},E.fn.detach=E.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});E.fn[t]=function(r){var o,a=this[0];return r===w?n(a)?a["inner"+e]:i(a)?a.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){a=E(this),a.css(t,v(this,r,e,a[t]()))})}}),L.forEach(function(e,n){var i=n%2;E.fn[e]=function(){var e,r,o=E.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:X.fragment(n)}),a=this.length>1;return o.length<1?this:this.each(function(t,e){r=i?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null;var s=E.contains(P.documentElement,r);o.forEach(function(t){if(a)t=t.cloneNode(!0);else if(!r)return E(t).remove();r.insertBefore(t,e),s&&x(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},E.fn[i?e+"To":"insert"+(n?"Before":"After")]=function(t){return E(t)[e](this),this}}),X.Z.prototype=E.fn,X.uniq=C,X.deserializeValue=b,E.zepto=X,E}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function e(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function n(t,n,i,r){return t.global?e(n||y,i,r):void 0}function i(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function r(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var i=e.context;return e.beforeSend.call(i,t,e)===!1||n(e,i,"ajaxBeforeSend",[t,e])===!1?!1:void n(e,i,"ajaxSend",[t,e])}function a(t,e,i,r){var o=i.context,a="success";i.success.call(o,t,a,e),r&&r.resolveWith(o,[t,a,e]),n(i,o,"ajaxSuccess",[e,i,t]),c(a,e,i)}function s(t,e,i,r,o){var a=r.context;r.error.call(a,i,e,t),o&&o.rejectWith(a,[i,e,t]),n(r,a,"ajaxError",[i,r,t||e]),c(e,i,r)}function c(t,e,i){var o=i.context;i.complete.call(o,e,t),n(i,o,"ajaxComplete",[e,i]),r(i)}function u(){}function l(t){return t&&(t=t.split(";",2)[0]),t&&(t==E?"html":t==$?"json":x.test(t)?"script":w.test(t)&&"xml")||"text"}function f(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function h(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=f(e.url,e.data),e.data=void 0)}function d(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function p(e,n,i,r){var o,a=t.isArray(n),s=t.isPlainObject(n);t.each(n,function(n,c){o=t.type(c),r&&(n=i?r:r+"["+(s||"object"==o||"array"==o?n:"")+"]"),!r&&a?e.add(c.name,c.value):"array"==o||!i&&"object"==o?p(e,c,i,n):e.add(n,c)})}var m,v,g=0,y=window.document,b=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,x=/^(?:text|application)\/javascript/i,w=/^(?:text|application)\/xml/i,$="application/json",E="text/html",S=/^\s*$/;t.active=0,t.ajaxJSONP=function(e,n){if(!("type"in e))return t.ajax(e);var i,r,c=e.jsonpCallback,u=(t.isFunction(c)?c():c)||"jsonp"+ ++g,l=y.createElement("script"),f=window[u],h=function(e){t(l).triggerHandler("error",e||"abort")},d={abort:h};return n&&n.promise(d),t(l).on("load error",function(o,c){clearTimeout(r),t(l).off().remove(),"error"!=o.type&&i?a(i[0],d,e,n):s(null,c||"error",d,e,n),window[u]=f,i&&t.isFunction(f)&&f(i[0]),f=i=void 0}),o(d,e)===!1?(h("abort"),d):(window[u]=function(){i=arguments},l.src=e.url.replace(/\?(.+)=\?/,"?$1="+u),y.head.appendChild(l),e.timeout>0&&(r=setTimeout(function(){h("timeout")},e.timeout)),d)},t.ajaxSettings={type:"GET",beforeSend:u,success:u,error:u,complete:u,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:$,xml:"application/xml, text/xml",html:E,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n=t.extend({},e||{}),r=t.Deferred&&t.Deferred();for(m in t.ajaxSettings)void 0===n[m]&&(n[m]=t.ajaxSettings[m]);i(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=window.location.toString()),h(n);var c=n.dataType,d=/\?.+=\?/.test(n.url);if(d&&(c="jsonp"),n.cache!==!1&&(e&&e.cache===!0||"script"!=c&&"jsonp"!=c)||(n.url=f(n.url,"_="+Date.now())),"jsonp"==c)return d||(n.url=f(n.url,n.jsonp?n.jsonp+"=?":n.jsonp===!1?"":"callback=?")),t.ajaxJSONP(n,r);var p,g=n.accepts[c],y={},b=function(t,e){y[t.toLowerCase()]=[t,e]},x=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,w=n.xhr(),$=w.setRequestHeader;if(r&&r.promise(w),n.crossDomain||b("X-Requested-With","XMLHttpRequest"),b("Accept",g||"*/*"),(g=n.mimeType||g)&&(g.indexOf(",")>-1&&(g=g.split(",",2)[0]),w.overrideMimeType&&w.overrideMimeType(g)),(n.contentType||n.contentType!==!1&&n.data&&"GET"!=n.type.toUpperCase())&&b("Content-Type",n.contentType||"application/x-www-form-urlencoded"),n.headers)for(v in n.headers)b(v,n.headers[v]);if(w.setRequestHeader=b,w.onreadystatechange=function(){if(4==w.readyState){w.onreadystatechange=u,clearTimeout(p);var e,i=!1;if(w.status>=200&&w.status<300||304==w.status||0==w.status&&"file:"==x){c=c||l(n.mimeType||w.getResponseHeader("content-type")),e=w.responseText;try{"script"==c?(1,eval)(e):"xml"==c?e=w.responseXML:"json"==c&&(e=S.test(e)?null:t.parseJSON(e))}catch(o){i=o}i?s(i,"parsererror",w,n,r):a(e,w,n,r)}else s(w.statusText||null,w.status?"error":"abort",w,n,r)}},o(w,n)===!1)return w.abort(),s(null,"abort",w,n,r),w;if(n.xhrFields)for(v in n.xhrFields)w[v]=n.xhrFields[v];var E="async"in n?n.async:!0;w.open(n.type,n.url,E,n.username,n.password);for(v in y)$.apply(w,y[v]);return n.timeout>0&&(p=setTimeout(function(){w.onreadystatechange=u,w.abort(),s(null,"timeout",w,n,r)},n.timeout)),w.send(n.data?n.data:null),w},t.get=function(){return t.ajax(d.apply(null,arguments))},t.post=function(){var e=d.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=d.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var r,o=this,a=e.split(/\s/),s=d(e,n,i),c=s.success;return a.length>1&&(s.url=a[0],r=a[1]),s.success=function(e){o.html(r?t("<div>").html(e.replace(b,"")).find(r):e),c&&c.apply(o,arguments)},t.ajax(s),this};var T=encodeURIComponent;t.param=function(t,e){var n=[];return n.add=function(t,e){this.push(T(t)+"="+T(e))},p(n,t,e),n.join("&").replace(/%20/g,"+")}}(Zepto),function(t){function e(t){var e=this.os={},n=this.browser={},i=t.match(/Web[kK]it[\/]{0,1}([\d.]+)/),r=t.match(/(Android);?[\s\/]+([\d.]+)?/),o=!!t.match(/\(Macintosh\; Intel /),a=t.match(/(iPad).*OS\s([\d_]+)/),s=t.match(/(iPod)(.*OS\s([\d_]+))?/),c=!a&&t.match(/(iPhone\sOS)\s([\d_]+)/),u=t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),l=t.match(/Windows Phone ([\d.]+)/),f=u&&t.match(/TouchPad/),h=t.match(/Kindle\/([\d.]+)/),d=t.match(/Silk\/([\d._]+)/),p=t.match(/(BlackBerry).*Version\/([\d.]+)/),m=t.match(/(BB10).*Version\/([\d.]+)/),v=t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),g=t.match(/PlayBook/),y=t.match(/Chrome\/([\d.]+)/)||t.match(/CriOS\/([\d.]+)/),b=t.match(/Firefox\/([\d.]+)/),x=t.match(/MSIE\s([\d.]+)/)||t.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),w=!y&&t.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),$=w||t.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);(n.webkit=!!i)&&(n.version=i[1]),r&&(e.android=!0,e.version=r[2]),c&&!s&&(e.ios=e.iphone=!0,e.version=c[2].replace(/_/g,".")),a&&(e.ios=e.ipad=!0,e.version=a[2].replace(/_/g,".")),s&&(e.ios=e.ipod=!0,e.version=s[3]?s[3].replace(/_/g,"."):null),l&&(e.wp=!0,e.version=l[1]),u&&(e.webos=!0,e.version=u[2]),f&&(e.touchpad=!0),p&&(e.blackberry=!0,e.version=p[2]),m&&(e.bb10=!0,e.version=m[2]),v&&(e.rimtabletos=!0,e.version=v[2]),g&&(n.playbook=!0),h&&(e.kindle=!0,e.version=h[1]),d&&(n.silk=!0,n.version=d[1]),!d&&e.android&&t.match(/Kindle Fire/)&&(n.silk=!0),y&&(n.chrome=!0,n.version=y[1]),b&&(n.firefox=!0,n.version=b[1]),x&&(n.ie=!0,n.version=x[1]),$&&(o||e.ios)&&(n.safari=!0,o&&(n.version=$[1])),w&&(n.webview=!0),e.tablet=!!(a||g||r&&!t.match(/Mobile/)||b&&t.match(/Tablet/)||x&&!t.match(/Phone/)&&t.match(/Touch/)),e.phone=!(e.tablet||e.ipod||!(r||c||u||p||m||y&&t.match(/Android/)||y&&t.match(/CriOS\/([\d.]+)/)||b&&t.match(/Mobile/)||x&&t.match(/Touch/)))}e.call(t,navigator.userAgent),t.__detect=e}(Zepto),function(t){function e(t){return t._zid||(t._zid=h++)}function n(t,n,o,a){if(n=i(n),n.ns)var s=r(n.ns);return(v[e(t)]||[]).filter(function(t){return!(!t||n.e&&t.e!=n.e||n.ns&&!s.test(t.ns)||o&&e(t.fn)!==e(o)||a&&t.sel!=a)})}function i(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function r(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(t,e){return t.del&&!y&&t.e in b||!!e}function a(t){return x[t]||y&&b[t]||t}function s(n,r,s,c,l,h,d){var p=e(n),m=v[p]||(v[p]=[]);r.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(s);var r=i(e);r.fn=s,r.sel=l,r.e in x&&(s=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?r.fn.apply(this,arguments):void 0}),r.del=h;var p=h||s;r.proxy=function(t){if(t=u(t),!t.isImmediatePropagationStopped()){t.data=c;var e=p.apply(n,t._args==f?[t]:[t].concat(t._args));return e===!1&&(t.preventDefault(),t.stopPropagation()),e}},r.i=m.length,m.push(r),"addEventListener"in n&&n.addEventListener(a(r.e),r.proxy,o(r,d))})}function c(t,i,r,s,c){var u=e(t);(i||"").split(/\s/).forEach(function(e){n(t,e,r,s).forEach(function(e){delete v[u][e.i],"removeEventListener"in t&&t.removeEventListener(a(e.e),e.proxy,o(e,c))})})}function u(e,n){return(n||!e.isDefaultPrevented)&&(n||(n=e),t.each(S,function(t,i){var r=n[t];e[t]=function(){return this[i]=w,r&&r.apply(n,arguments)},e[i]=$}),(n.defaultPrevented!==f?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=w)),e}function l(t){var e,n={originalEvent:t};for(e in t)E.test(e)||t[e]===f||(n[e]=t[e]);return u(n,t)}var f,h=1,d=Array.prototype.slice,p=t.isFunction,m=function(t){return"string"==typeof t},v={},g={},y="onfocusin"in window,b={focus:"focusin",blur:"focusout"},x={mouseenter:"mouseover",mouseleave:"mouseout"};g.click=g.mousedown=g.mouseup=g.mousemove="MouseEvents",t.event={add:s,remove:c},t.proxy=function(n,i){var r=2 in arguments&&d.call(arguments,2);if(p(n)){var o=function(){return n.apply(i,r?r.concat(d.call(arguments)):arguments)};return o._zid=e(n),o}if(m(i))return r?(r.unshift(n[i],n),t.proxy.apply(null,r)):t.proxy(n[i],n);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var w=function(){return!0},$=function(){return!1},E=/^([A-Z]|returnValue$|layer[XY]$)/,S={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,i,r,o){var a,u,h=this;return e&&!m(e)?(t.each(e,function(t,e){h.on(t,n,i,e,o)}),h):(m(n)||p(r)||r===!1||(r=i,i=n,n=f),(p(i)||i===!1)&&(r=i,i=f),r===!1&&(r=$),h.each(function(f,h){o&&(a=function(t){return c(h,t.type,r),r.apply(this,arguments)}),n&&(u=function(e){var i,o=t(e.target).closest(n,h).get(0);return o&&o!==h?(i=t.extend(l(e),{currentTarget:o,liveFired:h}),(a||r).apply(o,[i].concat(d.call(arguments,1)))):void 0}),s(h,e,r,i,n,u||a)}))},t.fn.off=function(e,n,i){var r=this;return e&&!m(e)?(t.each(e,function(t,e){r.off(t,n,e)}),r):(m(n)||p(i)||i===!1||(i=n,n=f),i===!1&&(i=$),r.each(function(){c(this,e,i,n)}))},t.fn.trigger=function(e,n){return e=m(e)||t.isPlainObject(e)?t.Event(e):u(e),e._args=n,this.each(function(){"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,i){var r,o;return this.each(function(a,s){r=l(m(e)?t.Event(e):e),r._args=i,r.target=s,t.each(n(s,e.type||e),function(t,e){return o=e.proxy(r),r.isImmediatePropagationStopped()?!1:void 0})}),o},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),t.Event=function(t,e){m(t)||(e=t,t=e.type);var n=document.createEvent(g[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),u(n)}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,i=[];return t([].slice.call(this.get(0).elements)).each(function(){e=t(this),n=e.attr("type"),"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&("radio"!=n&&"checkbox"!=n||this.checked)&&i.push({name:e.attr("name"),value:e.val()})}),i},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(e)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto),function(){("undefined"==typeof Zepto||null===Zepto)&&$.ajaxSetup({beforeSend:function(t,e){var n,i;if(e.global)return n=e.context||document,i=$.Event("ajaxBeforeSend"),$(n).trigger(i,[t,e]),i.isDefaultPrevented()?!1:i.result}})}.call(this),function(){var t,e,n,i,r;"undefined"!=typeof Zepto&&null!==Zepto?(t=function(t){var e,n,i,r;n=document.createEvent("Events");for(i in t)r=t[i],n[i]=r;return n.initEvent(""+t.type+":prepare",!0,!0),e=function(e,i){return function(){return e.apply(t),i.apply(n)}},n.preventDefault=e(t.preventDefault,n.preventDefault),n.stopPropagation=e(t.stopPropagation,n.stopPropagation),n.stopImmediatePropagation=e(t.stopImmediatePropagation,n.stopImmediatePropagation),t.target.dispatchEvent(n),n.result},window.addEventListener("click",t,!0),window.addEventListener("submit",t,!0)):(e=null,n=function(t){var n;t.timeStamp!==e&&(n=t.type,t.type=""+n+":prepare",$.event.trigger(t,[],t.target,!1),t.type=n,e=t.timeStamp)},i=function(t){return function(){$(this).on(""+t+".prepare",function(){})}},r=function(t){return function(){$(this).off(""+t+".prepare",function(){})}},$.event.special.click={preDispatch:n},$.event.special.submit={preDispatch:n},$.event.special["click:prepare"]={setup:i("click"),teardown:r("click")},$.event.special["submit:prepare"]={setup:i("submit"),teardown:r("submit")})}.call(this),function(){$(document).on("ajaxBeforeSend",function(t,e,n){return n.dataType?void 0:e.setRequestHeader("Accept","*/*;q=0.5, "+n.accepts.script)})}.call(this),function(){$(document).on("click:prepare","a[data-confirm], button[data-confirm]",function(t){var e;(e=$(this).attr("data-confirm"))&&(confirm(e)||(t.stopImmediatePropagation(),t.preventDefault()))})}.call(this),function(){var t;$(document).on("ajaxBeforeSend",function(t,e,n){var i;if(!n.crossDomain&&"GET"!==n.type)return(i=$('meta[name="csrf-token"]').attr("content"))?e.setRequestHeader("X-CSRF-Token",i):void 0}),$(document).on("submit:prepare","form",function(){var e,n,i,r;e=$(this),e.is("form[data-remote]")||this.method&&"GET"!==this.method.toUpperCase()&&t(e.attr("action"))&&(i=$('meta[name="csrf-param"]').attr("content"),r=$('meta[name="csrf-token"]').attr("content"),null!=i&&null!=r&&(e.find("input[name="+i+"]")[0]||(n=document.createElement("input"),n.setAttribute("type","hidden"),n.setAttribute("name",i),n.setAttribute("value",r),e.prepend(n))))}),t=function(t){var e,n;return e=document.createElement("a"),e.href=t,n=e.href.split("/",3).join("/"),0===location.href.indexOf(n)}}.call(this),function(){var t;(t=navigator.userAgent.match(/MSIE ([\w]+)/))&&parseInt(t[1])<=8&&$(document).on("submit:prepare","form",function(){0===$(this).find("input[name=utf8]").length&&$(this).prepend("<input type=hidden name=utf8 value=\xe2\u0153\u201c>")})}.call(this),function(){$(document).on("submit:prepare","form",function(){var t,e,n,i,r,o,a,s,c;for(s=$(this).find("input[type=submit][data-disable-with]"),i=0,o=s.length;o>i;i++)e=s[i],e=$(e),e.attr("data-enable-with",e.val()||"Submit"),(n=e.attr("data-disable-with"))&&e.val(n),e[0].disabled=!0;for(c=$(this).find("button[type=submit][data-disable-with]"),r=0,a=c.length;a>r;r++)t=c[r],t=$(t),t.attr("data-enable-with",t.html()||""),(n=t.attr("data-disable-with"))&&t.html(n),t[0].disabled=!0}),$(document).on("ajaxComplete","form",function(){var t,e,n,i,r,o,a,s;for(a=$(this).find("input[type=submit][data-enable-with]"),n=0,r=a.length;r>n;n++)e=a[n],$(e).val($(e).attr("data-enable-with")),e.disabled=!1;for(s=$(this).find("button[type=submit][data-enable-with]"),i=0,o=s.length;o>i;i++)t=s[i],$(t).html($(t).attr("data-enable-with")),t.disabled=!1})}.call(this),function(){$(document).on("click","a[data-method]",function(t){var e,n,i,r;return e=$(this),e.is("a[data-remote]")||(r=e.attr("data-method").toLowerCase(),"get"===r)?void 0:(n=document.createElement("form"),n.method="POST",n.action=e.attr("href"),n.style.display="none","post"!==r&&(i=document.createElement("input"),i.setAttribute("type","hidden"),i.setAttribute("name","_method"),i.setAttribute("value",r),n.appendChild(i)),document.body.appendChild(n),$(n).submit(),t.preventDefault(),!1)})}.call(this),function(){$(document).on("click","a[data-remote]",function(t){var e,n,i,r,o;return n=$(this),i={},i.context=this,(r=n.attr("data-method"))&&(i.type=r),(o=this.href)&&(i.url=o),(e=n.attr("data-type"))&&(i.dataType=e),$.ajax(i),t.preventDefault(),!1}),$(document).on("submit","form[data-remote]",function(t){var e,n,i,r,o,a;return i=$(this),r={},r.context=this,(o=this.method)&&(r.type=o),(a=this.action)&&(r.url=a),(e=i.serializeArray())&&(r.data=e),(n=i.attr("data-type"))&&(r.dataType=n),$.ajax(r),t.preventDefault(),!1})}.call(this),function(){var t;t="form[data-remote] input[type=submit],\nform[data-remote] button[type=submit],\nform[data-remote] button:not([type]),\nform[data-remote-submit] input[type=submit],\nform[data-remote-submit] button[type=submit],\nform[data-remote-submit] button:not([type])",$(document).on("click",t,function(){var t,e,n,i,r,o;r=$(this),e=r.closest("form"),n=e.find(".js-submit-button-value"),(i=r.attr("name"))?(t=r.is("input[type=submit]")?"Submit":"",o=r.val()||t,n[0]?(n.attr("name",i),n.attr("value",o)):(n=document.createElement("input"),n.setAttribute("type","hidden"),n.setAttribute("name",i),n.setAttribute("value",o),n.setAttribute("class","js-submit-button-value"),e.prepend(n))):n.remove()})}.call(this),function(){var t;addStatus=function(){form=$(this).closest("form"),message=form.find("textarea").val(),this.href+="&message="+encodeURIComponent(message)+"&url="+t},receivedMessage=function(e){"object"==typeof e.data&&("string"==typeof e.data.url&&(t=e.data.url),(anchor=e.data.anchor)&&(element=$('[name="'+anchor+'"]'),element.focus(),element.length>0&&(sendHeight(),offset=element.offset().top,sendOffset(offset))))},openReply=function(t){t.preventDefault(),openReplyForContents($(this).closest("li.comment div.contents"))},openReplyForContents=function(t){form=t.children("form.reply_comment"),t.find(".edit, .reply, .button_to").hide(),t.find(".cancel").show(),form.show(),sendHeight(),focusOnTextArea(form.find("textarea"))
},openEdit=function(t){t.preventDefault(),comment=$(this).closest("li.comment"),contents=comment.children("div.contents"),form=contents.children("form.edit_comment").show(),textarea=form.find("textarea"),setFormHeight(textarea),contents.find(".message, .edit, .reply, .button_to").hide(),contents.find(".cancel").show(),sendHeight(),focusOnTextArea($(textarea))},closeEditOrReply=function(){comment=$(this).closest("li.comment"),closeEditForComments(comment),closeReplyForComments(comment),comment.find("button.reply, button.edit, .button_to").show(),sendHeight()},closeEditForComments=function(t){t.each(function(){contents=$(this).children("div.contents"),contents.find("div.message").show(),contents.find("form.edit_comment").hide(),$(this).find("button.cancel").hide()})},closeReplyForComments=function(t){t.each(function(){contents=$(this).children("div.contents"),contents.find("form.reply_comment").hide(),$(this).find("button.cancel").hide()})},openNotifications=function(){$("span.notifications").hide(),div=$("div.notifications").show(),sendHeight()},focusOnTextArea=function(t){$.os.phone||(val=t.val(),t.val("").focus().val(val))},updateForms=function(){setFormHeight($(this)),updateButtonForTextAreas($(this))},setFormHeight=function(t){textarea=$(t)[0],textarea.rows=1,textarea.rows=Math.ceil((textarea.scrollHeight-20)/20)+2,sendHeight()},updateButtonForTextAreas=function(t){t.each(function(){button=$(this).parent().find("button"),$(this).val().length>0?button.prop("disabled",!1):button.prop("disabled",!0)})},selectActiveTextarea=function(){$("form textarea.active").each(function(){contents=$(this).closest("div.contents"),contents.length>0?(openReplyForContents(contents),sendOffset(contents.parent("li.comment").offset().top)):sendOffset(0),focusOnTextArea($(this))})},sendReady=function(){window.parent.postMessage({actually_ready:1},"*")},sendHeight=function(){height=$("body").height(),window.parent.postMessage({actually_height:height},"*")},sendOffset=function(t){window.parent.postMessage({actually_offset:t},"*")},sendAnchorId=function(t){window.parent.postMessage({actually_setAnchor:t},"*")},setAnchor=function(t){t.preventDefault(),window.location=this.href,sendAnchorId($(this).data("comment-id"))},setAnchorToCurrentComment=function(){$("li.comment.current").each(function(){sendAnchorId("comment_"+$(this).data("id"))})},submitForm=function(){(event.metaKey||event.ctrlKey)&&13==event.keyCode&&(event.preventDefault(),form=$(this).closest("form"),button=form.find("button"),button.length>0&&!button.prop("disabled")&&(button.focus(),form.submit()))},setup=function(){window.addEventListener("message",receivedMessage,!1),$(document).on("click","button.reply",openReply).on("click","button.edit",openEdit).on("click","button.cancel",closeEditOrReply).on("click","a.timestamp, .reply_to a",setAnchor).on("click",".notifications button",openNotifications).bind("keydown",'textarea, input[type="email"]',submitForm).bind("input propertychange","textarea",updateForms),$(window).on("resize",sendHeight),$("div.message img").on("load",sendHeight),$(document).on("mousedown","a.sign_in",addStatus),sendReady(),sendHeight(),setFormHeight($("textarea")),updateButtonForTextAreas($("textarea")),selectActiveTextarea(),setAnchorToCurrentComment()},$(document).ready(setup)}();