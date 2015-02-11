/*!
Colorbox v1.5.5 - 2014-03-13
jQuery lightbox and modal window plugin
(c) 2014 Jack Moore - http://www.jacklmoore.com/colorbox
license: http://www.opensource.org/licenses/mit-license.php
*/
(function(n,t,i){function e(i,r,u){var f=t.createElement(i);return r&&(f.id=h+r),u&&(f.style.cssText=u),n(f)}function ni(){return i.innerHeight?i.innerHeight:n(i).height()}function vt(t,i){i!==Object(i)&&(i={});this.cache={};this.el=t;this.value=function(t){var r;return void 0===this.cache[t]&&(r=n(this.el).attr("data-cbox-"+t),void 0!==r?this.cache[t]=r:void 0!==i[t]?this.cache[t]=i[t]:void 0!==hi[t]&&(this.cache[t]=hi[t])),this.cache[t]};this.get=function(t){var i=this.value(t);return n.isFunction(i)?i.call(this.el,this):i}}function yt(n){var i=l.length,t=(v+n)%i;return 0>t?i+t:t}function a(n,t){return Math.round((/%/.test(n)?("x"===t?b.width():ni())/100:1)*parseInt(n,10))}function vi(n,t){return n.get("photo")||n.get("photoRegex").test(t)}function yi(n,t){return n.get("retinaUrl")&&i.devicePixelRatio>1?t.replace(n.get("photoRegex"),n.get("retinaSuffix")):t}function pi(n){"contains"in u[0]&&!u[0].contains(n.target)&&n.target!==w[0]&&(n.stopPropagation(),u.focus())}function ot(n){ot.str!==n&&(u.add(w).removeClass(ot.str).addClass(n),ot.str=n)}function di(){v=0;rel&&"nofollow"!==rel?(l=n("."+et).filter(function(){var t=n.data(this,it),i=new vt(this,t);return i.get("rel")===rel}),v=l.index(r.el),-1===v&&(l=l.add(r.el),v=l.length-1)):l=n(r.el)}function rt(i){n(t).trigger(i);p.triggerHandler(i)}function pt(i){var f;at||(f=n(i).data("colorbox"),r=new vt(i,f),rel=r.get("rel"),di(),g||(g=lt=!0,ot(r.get("className")),u.css({visibility:"hidden",display:"block",opacity:""}),c=e(o,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden"),y.css({width:"",height:""}).append(c),k=ti.height()+ui.height()+y.outerHeight(!0)-y.height(),d=ii.width()+ri.width()+y.outerWidth(!0)-y.width(),nt=c.outerHeight(!0),tt=c.outerWidth(!0),r.w=a(r.get("initialWidth"),"x"),r.h=a(r.get("initialHeight"),"y"),c.css({width:"",height:r.h}),s.position(),rt(tr),r.get("onOpen"),oi.add(fi).hide(),u.focus(),r.get("trapFocus")&&t.addEventListener&&(t.addEventListener("focus",pi,!0),p.one(li,function(){t.removeEventListener("focus",pi,!0)})),r.get("returnFocus")&&p.one(li,function(){n(r.el).focus()})),w.css({opacity:parseFloat(r.get("opacity"))||"",cursor:r.get("overlayClose")?"pointer":"",visibility:"visible"}).show(),r.get("closeButton")?bt.html(r.get("close")).appendTo(y):bt.appendTo("<div/>"),nr())}function wi(){!u&&t.body&&(si=!1,b=n(i),u=e(o).attr({id:it,"class":n.support.opacity===!1?h+"IE":"",role:"dialog",tabindex:"-1"}).hide(),w=e(o,"Overlay").hide(),wt=n([e(o,"LoadingOverlay")[0],e(o,"LoadingGraphic")[0]]),ut=e(o,"Wrapper"),y=e(o,"Content").append(fi=e(o,"Title"),ei=e(o,"Current"),ct=n('<button type="button"/>').attr({id:h+"Previous"}),ht=n('<button type="button"/>').attr({id:h+"Next"}),ft=e("button","Slideshow"),wt),bt=n('<button type="button"/>').attr({id:h+"Close"}),ut.append(e(o).append(e(o,"TopLeft"),ti=e(o,"TopCenter"),e(o,"TopRight")),e(o,!1,"clear:left").append(ii=e(o,"MiddleLeft"),y,ri=e(o,"MiddleRight")),e(o,!1,"clear:left").append(e(o,"BottomLeft"),ui=e(o,"BottomCenter"),e(o,"BottomRight"))).find("div div").css({float:"left"}),st=e(o,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),oi=ht.add(ct).add(ei).add(ft),n(t.body).append(w,u.append(ut,st)))}function gi(){function i(n){n.which>1||n.shiftKey||n.altKey||n.metaKey||n.ctrlKey||(n.preventDefault(),pt(this))}return u?(si||(si=!0,ht.click(function(){s.next()}),ct.click(function(){s.prev()}),bt.click(function(){s.close()}),w.click(function(){r.get("overlayClose")&&s.close()}),n(t).bind("keydown."+h,function(n){var t=n.keyCode;g&&r.get("escKey")&&27===t&&(n.preventDefault(),s.close());g&&r.get("arrowKey")&&l[1]&&!n.altKey&&(37===t?(n.preventDefault(),ct.click()):39===t&&(n.preventDefault(),ht.click()))}),n.isFunction(n.fn.on)?n(t).on("click."+h,"."+et,i):n("."+et).live("click."+h,i)),!0):!1}function nr(){var u,w,b,y=s.prep,g=++ai;lt=!0;f=!1;rt(gt);rt(kt);r.get("onLoad");r.h=r.get("height")?a(r.get("height"),"y")-nt-k:r.get("innerHeight")&&a(r.get("innerHeight"),"y");r.w=r.get("width")?a(r.get("width"),"x")-tt-d:r.get("innerWidth")&&a(r.get("innerWidth"),"x");r.mw=r.w;r.mh=r.h;r.get("maxWidth")&&(r.mw=a(r.get("maxWidth"),"x")-tt-d,r.mw=r.w&&r.w<r.mw?r.w:r.mw);r.get("maxHeight")&&(r.mh=a(r.get("maxHeight"),"y")-nt-k,r.mh=r.h&&r.h<r.mh?r.h:r.mh);u=r.get("href");bi=setTimeout(function(){wt.show()},100);r.get("inline")?(b=e(o).hide().insertBefore(n(u)[0]),p.one(gt,function(){b.replaceWith(c.children())}),y(n(u))):r.get("iframe")?y(" "):r.get("html")?y(r.get("html")):vi(r,u)?(u=yi(r,u),f=t.createElement("img"),n(f).addClass(h+"Photo").bind("error",function(){y(e(o,"Error").html(r.get("imgError")))}).one("load",function(){var t;g===ai&&(n.each(["alt","longdesc","aria-describedby"],function(t,i){var u=n(r.el).attr(i)||n(r.el).attr("data-"+i);u&&f.setAttribute(i,u)}),r.get("retinaImage")&&i.devicePixelRatio>1&&(f.height=f.height/i.devicePixelRatio,f.width=f.width/i.devicePixelRatio),r.get("scalePhotos")&&(w=function(){f.height-=f.height*t;f.width-=f.width*t},r.mw&&f.width>r.mw&&(t=(f.width-r.mw)/f.width,w()),r.mh&&f.height>r.mh&&(t=(f.height-r.mh)/f.height,w())),r.h&&(f.style.marginTop=Math.max(r.mh-f.height,0)/2+"px"),l[1]&&(r.get("loop")||l[v+1])&&(f.style.cursor="pointer",f.onclick=function(){s.next()}),f.style.width=f.width+"px",f.style.height=f.height+"px",setTimeout(function(){y(f)},1))}),setTimeout(function(){f.src=u},1)):u&&st.load(u,r.get("data"),function(t,i){g===ai&&y("error"===i?e(o,"Error").html(r.get("xhrError")):n(this).contents())})}var w,u,ut,y,ti,ii,ri,ui,l,b,c,st,wt,fi,ei,ft,ht,ct,bt,oi,r,k,d,nt,tt,v,f,g,lt,at,bi,s,si,hi={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,rel:function(){return this.rel},href:function(){return n(this).attr("href")},title:function(){return this.title}},it="colorbox",h="cbox",et=h+"Element",tr=h+"_open",kt=h+"_load",dt=h+"_complete",ci=h+"_cleanup",li=h+"_closed",gt=h+"_purge",p=n("<a/>"),o="div",ai=0,ki={},ir=function(){function n(){clearTimeout(y)}function f(){(r.get("loop")||l[v+1])&&(n(),y=setTimeout(s.next,r.get("slideshowSpeed")))}function c(){ft.html(r.get("slideshowStop")).unbind(i).one(i,a);p.bind(dt,f).bind(kt,n);u.removeClass(t+"off").addClass(t+"on")}function a(){n();p.unbind(dt,f).unbind(kt,n);ft.html(r.get("slideshowStart")).unbind(i).one(i,function(){s.next();c()});u.removeClass(t+"on").addClass(t+"off")}function e(){o=!1;ft.hide();n();p.unbind(dt,f).unbind(kt,n);u.removeClass(t+"off "+t+"on")}var o,y,t=h+"Slideshow_",i="click."+h;return function(){o?r.get("slideshow")||(p.unbind(ci,e),e()):r.get("slideshow")&&l[1]&&(o=!0,p.one(ci,e),r.get("slideshowAuto")?c():a(),ft.show())}}();n.colorbox||(n(wi),s=n.fn[it]=n[it]=function(t,i){var u,r=this;if(t=t||{},n.isFunction(r))r=n("<a/>"),t.open=!0;else if(!r[0])return r;return r[0]?(wi(),gi()&&(i&&(t.onComplete=i),r.each(function(){var i=n.data(this,it)||{};n.data(this,it,n.extend(i,t))}).addClass(et),u=new vt(r[0],t),u.get("open")&&pt(r[0])),r):r},s.position=function(t,i){function w(){ti[0].style.width=ui[0].style.width=y[0].style.width=parseInt(u[0].style.width,10)-d+"px";y[0].style.height=ii[0].style.height=ri[0].style.height=parseInt(u[0].style.height,10)-k+"px"}var f,o,c,l=0,v=0,e=u.offset(),p;(b.unbind("resize."+h),u.css({top:-9e4,left:-9e4}),o=b.scrollTop(),c=b.scrollLeft(),r.get("fixed")?(e.top-=o,e.left-=c,u.css({position:"fixed"})):(l=o,v=c,u.css({position:"absolute"})),v+=r.get("right")!==!1?Math.max(b.width()-r.w-tt-d-a(r.get("right"),"x"),0):r.get("left")!==!1?a(r.get("left"),"x"):Math.round(Math.max(b.width()-r.w-tt-d,0)/2),l+=r.get("bottom")!==!1?Math.max(ni()-r.h-nt-k-a(r.get("bottom"),"y"),0):r.get("top")!==!1?a(r.get("top"),"y"):Math.round(Math.max(ni()-r.h-nt-k,0)/2),u.css({top:e.top,left:e.left,visibility:"visible"}),ut[0].style.width=ut[0].style.height="9999px",f={width:r.w+tt+d,height:r.h+nt+k,top:l,left:v},t)&&(p=0,n.each(f,function(n){if(f[n]!==ki[n])return p=t,void 0}),t=p);ki=f;t||u.css(f);u.dequeue().animate(f,{duration:t||0,complete:function(){w();lt=!1;ut[0].style.width=r.w+tt+d+"px";ut[0].style.height=r.h+nt+k+"px";r.get("reposition")&&setTimeout(function(){b.bind("resize."+h,s.position)},1);i&&i()},step:w})},s.resize=function(n){var t;g&&(n=n||{},n.width&&(r.w=a(n.width,"x")-tt-d),n.innerWidth&&(r.w=a(n.innerWidth,"x")),c.css({width:r.w}),n.height&&(r.h=a(n.height,"y")-nt-k),n.innerHeight&&(r.h=a(n.innerHeight,"y")),n.innerHeight||n.height||(t=c.scrollTop(),c.css({height:"auto"}),r.h=c.height()),c.css({height:r.h}),t&&c.scrollTop(t),s.position("none"===r.get("transition")?0:r.get("speed")))},s.prep=function(i){function b(){return r.w=r.w||c.width(),r.w=r.mw&&r.mw<r.w?r.mw:r.w,r.w}function k(){return r.h=r.h||c.height(),r.h=r.mh&&r.mh<r.h?r.mh:r.h,r.h}if(g){var a,w="none"===r.get("transition")?0:r.get("speed");c.remove();c=e(o,"LoadedContent").append(i);c.hide().appendTo(st.show()).css({width:b(),overflow:r.get("scrolling")?"auto":"hidden"}).css({height:k()}).prependTo(y);st.hide();n(f).css({float:"none"});ot(r.get("className"));a=function(){function o(){n.support.opacity===!1&&u[0].style.removeAttribute("filter")}var i,f,e=l.length;g&&(f=function(){clearTimeout(bi);wt.hide();rt(dt);r.get("onComplete")},fi.html(r.get("title")).show(),c.show(),e>1?("string"==typeof r.get("current")&&ei.html(r.get("current").replace("{current}",v+1).replace("{total}",e)).show(),ht[r.get("loop")||e-1>v?"show":"hide"]().html(r.get("next")),ct[r.get("loop")||v?"show":"hide"]().html(r.get("previous")),ir(),r.get("preloading")&&n.each([yt(-1),yt(1)],function(){var u,f=l[this],r=new vt(f,n.data(f,it)),i=r.get("href");i&&vi(r,i)&&(i=yi(r,i),u=t.createElement("img"),u.src=i)})):oi.hide(),r.get("iframe")?(i=t.createElement("iframe"),"frameBorder"in i&&(i.frameBorder=0),"allowTransparency"in i&&(i.allowTransparency="true"),r.get("scrolling")||(i.scrolling="no"),n(i).attr({src:r.get("href"),name:(new Date).getTime(),"class":h+"Iframe",allowFullScreen:!0}).one("load",f).appendTo(c),p.one(gt,function(){i.src="//about:blank"}),r.get("fastIframe")&&n(i).trigger("load")):f(),"fade"===r.get("transition")?u.fadeTo(w,1,o):o())};"fade"===r.get("transition")?u.fadeTo(w,0,function(){s.position(0,a)}):s.position(w,a)}},s.next=function(){!lt&&l[1]&&(r.get("loop")||l[v+1])&&(v=yt(1),pt(l[v]))},s.prev=function(){!lt&&l[1]&&(r.get("loop")||v)&&(v=yt(-1),pt(l[v]))},s.close=function(){g&&!at&&(at=!0,g=!1,rt(ci),r.get("onCleanup"),b.unbind("."+h),w.fadeTo(r.get("fadeOut")||0,0),u.stop().fadeTo(r.get("fadeOut")||0,0,function(){u.hide();w.hide();rt(gt);c.remove();setTimeout(function(){at=!1;rt(li);r.get("onClosed")},1)}))},s.remove=function(){u&&(u.stop(),n.colorbox.close(),u.stop().remove(),w.remove(),at=!1,u=null,n("."+et).removeData(it).removeClass(et),n(t).unbind("click."+h))},s.element=function(){return n(r.el)},s.settings=hi)})(jQuery,document,window)

$(document).ready(function () {
	return;
    if (document.domain === 'www.gatesnotes.com')
	{
		if (!docCookies.hasItem('surveyed')) {
			if (filterUser()) {
				delayPopup();
			} else {
				setCookie();
			}
		} else {
			setCookie();
		}
	}
});

function setCookie() {
    docCookies.setItem('surveyed', new Date().getTime(), 31536e3, '/', 'www.gatesnotes.com');
}

function showPopup() {
	$.colorbox({
		'href': '/TGN/survey.html',
		'opacity': 0.6,
		'transition': 'none',
		'closeButton': false
	});

    setCookie();
}

function filterUser() {
    return Math.random() <= 0.1;
}

function getTime() {
	var valueStart, valueEnd, cookieStart = document.cookie.indexOf('surveyed');

    if (cookieStart == -1) {
        return '';
    } else {
        valueStart = document.cookie.indexOf('=', cookieStart) + 1;
        valueEnd = document.cookie.indexOf(';', cookieStart);

        if (valueEnd == -1) {
            valueEnd = document.cookie.length;
        }

        return document.cookie.substring(valueStart, valueEnd);
    }
}

function delayPopup(startTime) {
	var howLongToWait, now = new Date().getTime();

    startTime = parseInt(startTime);

    if (startTime == NaN) {
        howLongToWait = 60000;
    } else {
    	howLongToWait = 60000 - (now - startTime);
    }

    setTimeout(showPopup, howLongToWait);
}

/*\
|*|
|*|  :: cookies.js ::
|*|
|*|  A complete cookies reader/writer framework with full unicode support.
|*|
|*|  https://developer.mozilla.org/en-US/docs/DOM/document.cookie
|*|
|*|  This framework is released under the GNU Public License, version 3 or later.
|*|  http://www.gnu.org/licenses/gpl-3.0-standalone.html
|*|
|*|  Syntaxes:
|*|
|*|  * docCookies.setItem(name, value[, end[, path[, domain[, secure]]]])
|*|  * docCookies.getItem(name)
|*|  * docCookies.removeItem(name[, path])
|*|  * docCookies.hasItem(name)
|*|  * docCookies.keys()
|*|
\*/

var docCookies = {
    getItem: function (sKey) {
        return unescape(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + escape(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
    },
    setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
        if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
        var sExpires = "";
        if (vEnd) {
            switch (vEnd.constructor) {
                case Number:
                    sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
                    break;
                case String:
                    sExpires = "; expires=" + vEnd;
                    break;
                case Date:
                    sExpires = "; expires=" + vEnd.toGMTString();
                    break;
            }
        }
        document.cookie = escape(sKey) + "=" + escape(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
        return true;
    },
    removeItem: function (sKey, sPath) {
        if (!sKey || !this.hasItem(sKey)) { return false; }
        document.cookie = escape(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sPath ? "; path=" + sPath : "");
        return true;
    },
    hasItem: function (sKey) {
        return (new RegExp("(?:^|;\\s*)" + escape(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
    },
    keys: function() { /* optional method: you can safely remove it! */
        var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
        for (var nIdx = 0; nIdx < aKeys.length; nIdx++) { aKeys[nIdx] = unescape(aKeys[nIdx]); }
        return aKeys;
    }
};