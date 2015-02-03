SmtMenu = {};  

(function(){

// BEGIN SERVER DATA
SmtMenu.sdata =
{
	doRedirect 		: (typeof smtRedirect != "undefined") ? smtRedirect : false,
    defaultStyles 	: (typeof smtDefaultStyles != "undefined") ? smtDefaultStyles : true,
    autoPlace		: (typeof smtAuto != "undefined") ? smtAuto : false,
    preRender		: (typeof smtPreRender != "undefined") ? smtPreRender : null,
    postRender		: (typeof smtPostRender != "undefined") ? smtPostRender : null,	
    settings: (typeof smtAuto != "undefined" && smtAuto === true) ? smtSettings : {}, // if auto on, there must be settings
	openDir: (typeof smtOpenDir != "undefined") ? smtOpenDir : "down",
	scrollThresh: 15,
	stylePath: window.location.protocol + "//cdn01.smartling.com/ls/static/menu-v3.css",	
	sites 			: [
	{
							"en-us"	: { code : "en-us", name : "English", host : "hortonworks.com", word : "Language", def : true }
		,						"fr-fr"	: { code : "fr-fr", name : "Français", host : "fr.hortonworks.com", word : "Langue", def : false }
		,						"zh-cn"	: { code : "zh-cn", name : "中文", host : "zh.hortonworks.com", word : "Language", def : false }
		,						"ko-kr"	: { code : "ko-kr", name : "한국어", host : "ko.hortonworks.com", word : "Language", def : false }
		,						"pt-br"	: { code : "pt-br", name : "Português (Brasil)", host : "br.hortonworks.com", word : "Language", def : false }
		,						"de-de"	: { code : "de-de", name : "Deutsch", host : "de.hortonworks.com", word : "Language", def : false }
		,						"ja-jp"	: { code : "ja-jp", name : "日本語", host : "jp.hortonworks.com", word : "Language", def : false }
				}]
};
// END SERVER DATA

	
//END SOURCE CODE


// minifed here 8/22/2012 2:58pm  obfuscator: http://www.daftlogic.com/projects-online-javascript-obfuscator.htm
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('3 2f={3L:{h:{"Y":"3I","2r":"1o","3e":"1o","1a":"31"}},3N:{h:{"Y":"3E","41":"1o","3e":"1o","1a":"31"}}};6.1u={1Y:R,35:7(j,C){4(6.8.30){6.8.30(j)}3 3w=(L 2R!=\'11\')?2R:f.k.v.3U();3 2X=5.2m(b.2W);3 h=5.J("3m");h.t.1g=\'2I\';5.D(h,b.2Z);4("1p"n 6.8&&6.8.1p===z){5.D(h,"x-1p")}3 14=5.J("1b");5.D(14,b.2O);3 W=5.J("a");5.D(W,b.W);4("3g"n 6.8.b){W.t.3r=6.8.b.3g}3 1T=5.J("2Y");5.D(1T,b.2N);3 1k=5.J("2Y");5.D(1k,b.2M);4("3h"n 6.8.b){1k.t.2o=6.8.b.3h}3 P=5.2B(3w,j);3 1v,43,2j;4(P n j){1v=j[P].B;1R=j[P].1Z;2j=P}p{3 F=5.2e(j);1v=F.B;1R=F.1Z;2j=F.Q}1k.2l=1v.3T();1T.2l=1R;W.U(1k);14.U(W);h.U(14);3 w=5.J("3m");4("3q"n 6.8.b){w.t.3r=6.8.b.3q}4("Y"n 6.8.b&&6.8.b.Y.2a(/3F/)!=m){14.3J(w,14.3X[0])}p{14.U(w)}3 1L=f.k.1E.V(/(&|\\?)28=1/,"").V("?","").V(f.k.2t,"").V(/^&/,"");3 25=0;H(3 l n j){25++;3 a=5.J("a");3 1b=5.J("1b");5.D(1b,b.2T);5.D(a,b.2S);3 2z=(5.2b)?"#":"";3 2s=j[l].F;3 1F=(1L.E>0)?1L.1i("&"):[];4(2s){1F.40("28=1")}3 q=(1F.E>0)?"?"+1F.3S("&"):"";a.1m=2z+f.k.1C+"//"+j[l].v+f.k.3n+q+f.k.2t;a.2l=j[l].B;a.t.1g=\'2h\';4("2A"n 6.8.b){a.t.2o=6.8.b.2A}1b.U(a);w.U(1b);a.3H=(7(w,Q){d 7(){4(!j[Q].F){5.1j(b.Z,Q,1D,\'/\',C)}}})(w,j[l].Q)}4("Y"n 6.8.b){H(3 21 n 2f[6.8.b.Y].h){h.t[21]=2f[6.8.b.Y].h[21]}5.D(h,"x-"+6.8.b.Y)}4(6.8.1p===z){u.3V.U(h)}p{u.2n("x-P-3R").U(h)}3 3W=m;3 42=h.3Q("3Z");4(25>6.8.3G){w.t.1N="3D";w.t.3P="3O"}5.2p(W,"3M",7(){w.t.1g=\'2h\';5.D(h,"x-1K");4(6.8.3K=="3Y"){1N=w.4c;w.t.2r=1N*(-1)+"29"}});h.4J=7(e){4(L e=="11"){e=4I}4(5.2H(e,10)){w.t.1g="2I";5.2u(h,"x-1K")}};4(6.8.2K){6.8.2K(h)}3 1W=0;3 2y=4H(7(){3 2x=(5.1V(h,"2E")==="4O");1W++;4(1W>4K||2x||6.8.27===R){h.t.1g="2h";4(6.8.27){h.t.2E="4x"}4B(2y);3 1a=4F(5.1V(h,"1a").V("29",""));w.t.1a=(1a-2)+"29"}},4C)}};3 5={2b:R,4D:z,1e:7(2c,2d){4(5.2b&&1d){4(2d){1d.1e(2d,2c)}p{1d.1e(2c)}}},J:7(s){d u.4E(s)},2m:7(s){d u.2n(s)},2p:7(16,1G,1B,2w){4(16.18){16.18(1G,1B,2w);d z}p 4(16.1H){3 r=16.1H(\'1K\'+1G,1B);d r}p{16[\'1K\'+1G]=1B;d z}},2H:7(e,23){3 19=e.2J?e.2J:e.4A==\'4y\'?e.4z:e.4G;4N(19&&19!=23)19=19.4M;d(19!=23)},2B:7(v,j){3 T=m;H(3 l n j){3 2F=j[l];4(2F.v==v){T=l}}d T},D:7(G,I){4(I&&L I==="4P"){3 1w=(I||"").1i(" ");4(G.4L===1){4(!G.K){G.K=I}p{3 K=" "+G.K+" ",1X=G.K;H(3 c=0,2D=1w.E;c<2D;c++){4(K.15(" "+1w[c]+" ")<0){1X+=" "+1w[c]}}G.K=1X}}}},2u:7(G,I){G.K=G.K.V(1c 3k(I,"g"),"")},34:7(S){4(u.18){u.18("4v",S,R)}p{10.2C(S)}},2C:7(S){4(L f.18!="11")f.18("4d",S,R);p 4(L f.1H!="11"){f.1H("1n",S)}p{4(f.1n!=m){3 2G=f.1n;f.1n=7(e){2G(e);f[S]()}}p f.1n=S}},2e:7(j){H(P n j){d j[P]}},1j:7(B,I,1s,O,X,1P){4(1s){3 2q=1c 2v();3 1Q=1c 2v(2q.4w()+(1s*4e*4f*24))}3 3o=B+"="+4g(I)+((1s)?"; 1Q="+1Q.4b():"")+((O)?"; O="+O:"")+((X)?"; X="+X:"")+((1P)?"; 1P":"");u.13=3o},1x:7(B){3 1I=B+"=";3 1r=u.13.15(1I);4(1r==-1){d m}3 1t=u.13.15(";",1r+1I.E);4(1t==-1){1t=u.13.E}d 44(u.13.3i(1r+1I.E,1t))},4a:7(X,N){3 1M=f.k.v.1i(\':\')[0];d((X==1M)&&(N.15(\'://\'+1M)==-1))},3a:7(9){3 T=m;H(3 l n 9){4(9[l].F){T=9[l].v}}d T},3c:7(X){3 1l=X.1i(".").46();1l="."+1l[1]+"."+1l[0];d 1l},3z:7(N){3 O=f.k.3n;4(N.45(\'/\')==N.E-1){O=O.3i(1,O.E)}3 1E=f.k.1E;3 1C=f.k.1C+"//";d 1C+N+O+1E},1V:7(1q,1S){4(1q.3t)3 y=1q.3t[1S];p 4(f.3j)3 y=u.47.3j(1q,m).48(1S);d y},1O:7(B){B=B.V(/[\\[]/,"\\\\\\[").V(/[\\]]/,"\\\\\\]");3 3l="[\\\\?&]"+B+"=([^&#]*)";3 3s=1c 3k(3l);3 1U=3s.49(f.k.1m);4(1U==m)d m;p d 1U[1]}};6.5=5;6.32=7(1f,C,9){3 2i=7(){4(5.1O("2L")!==m){d 5.1O("2L")}3 T=(1A.3A)?(1A.3A):(f.1A.M);2U{d T.2k()}36(3p){d""}};3 3C=7(){d 2i().1i(\'-\')[0]};3 1J=7(A){5.1j(b.Z,A.Q,1D,\'/\',C,\'\');3 3u=5.3z(A.v);4(f.k.v!=A.v){6.1u.1Y=z;f.k=3u}};3 3f=7(){d(u.13.15(b.Z+\'=\')==-1)?R:z};3 2g=7(){5.1j("26",1,1D,\'/\',C,\'\');d(u.13.15("26"+\'=\')==-1)?R:z};10.22=7(o){3 1h=m;4(o.3B){4(L 3v==="7"){1h=3v(o.12,o.9)}p{3 12=o.12.2k();4(12 n o.9&&12!=o.F.Q.2k()){1h=o.9[12]}p{3 M=o.M;4(M!=o.F.Q){4(o.M n o.9){1h=o.9[o.M]}}}}}d 1h};3 3y=7(){4(2g()){3 l=3x();4(9[l]){d 9[l]}d m}};3 3x=7(){d 5.1x(b.Z)};3 4h=7(){3 N=5.1x(b.Z);H(3 M n 9){4(N==9[M]){d N}}d m};10.2V=7(){3 A=3y();3 o={3B:2g(),12:2i(),4i:1z,9:9,M:3C(),F:5.2e(9)};3 17=m;4(1z===z){1J=7(A){1d.1e("4r 4q:");1d.1e(A)}}4(!3f()){17=10.22(o)}p{4(A&&A.v!=f.k.v){17=A}p{17=10.22(o)}}4(17){1J(17)}};10.2V()};2U{3 b={2W:"x-2X",2Z:"x-4s",2T:"x-4t",2S:"x-1y",2N:"x-1Z",2M:"x-P",2O:"x-2P",W:"x-2P-1y",Z:"4u",27:z};3 9=m;3 2Q=f.k.v;H(3 i=0;i<6.8.9.E;i++){H(3 A n 6.8.9[i]){4(2Q==6.8.9[i][A].v){9=6.8.9[i];6.3b=9}}}4(9==m){9=6.8.9[6.8.9.E-1];6.3b=9;6.8.1J=R}4(9&&(L 4p=="11")){3 1f=5.3a(9);3 C=5.3c(1f);6.C=C;3 38=(5.1x(b.Z)=="3d");3 20=(f.k.1m.2a(/28/)!=m);3 1z=(f.k.1m.2a(/1z/)!=m);4(20){5.1j(b.Z,"3d",1D,\'/\',C)}3 33=(/4o/.26(1A.4k));4(!20&&(L 39!="11"&&39===z&&f.k.v==1f&&!38&&!33)){1c 6.32(1f,C,9)}4(!6.1u.1Y){5.34(7(){6.1u.35(9,C)})}4(L 37!="11"&&37===z){u.4j("<1y 4l=\'4m\' 1m=\'"+6.8.4n+"\'></1y>")}}}36(3p){}',62,300,'|||var|if|lib|SmtMenu|function|sdata|sites||settings||return||window||root||langs|location||null|in|args|else||||style|document|host|items|smt||true|site|name|cookieDomain|addClass|length|def|elem|for|value|create|className|typeof|language|url|path|lang|code|false|fnc|ret|appendChild|replace|triggerLink|domain|position|cookieName|this|undefined|locale|cookie|topLi|indexOf|elm|targetSite|addEventListener|reltg|width|li|new|console|log|originalDomain|display|retVal|split|setCookie|currentLangSpan|dom|href|onload|0px|autoPlace|el|cookieStartIndex|expiresDays|cookieEndIndex|smdd|languageName|classNames|getCookie|link|redirectDebug|navigator|fn|protocol|360|search|arr|evType|attachEvent|prefix|doRedirect|on|qstring|currentHost|height|getParam|secure|expires|languageWord|styleProp|langLabel|results|getStyle|loadCount|setClass|redirecting|word|urlNoRedirect|rule|doRedirectByBrowserPreferences|handler||langLength|test|defaultStyles|smtNoRedir|px|match|debug|str|title|getDefaultLang|inlineStyles|isCookiesEnabled|block|getCurrentLocale|currentLang|toLowerCase|innerHTML|get|getElementById|color|addEvent|today|top|isDefault|hash|removeClass|Date|useCapture|styleLoaded|styleLoadInt|pre|itemColor|getLocFromAddress|addOnloadEvent|cl|overflow|obj|oldOnload|isMouseLeaveOrEnter|none|relatedTarget|postRender|smtLoc|currentLangClass|wordClass|triggerClass|trigger|currHost|smdebugurl|linkClass|itemClass|try|initialize|scriptId|script|span|rootClass|preRender|auto|redirect|isOpera|addOnReadyEvent|makeMenu|catch|smtDefaultStyles|cookieNoRedirect|smtRedirect|getDefaultDomain|currentSites|getCookieDomain|noredirect|right|isCookieSet|buttonBg|selectedColor|substring|getComputedStyle|RegExp|regexS|ul|pathname|curCookie|ex|itemBg|backgroundColor|regex|currentStyle|newAddress|smtRedirectMapper|address|getLastVisitedByCookie|getSiteByLastVisited|getUrlWithCurrentPath|userLanguage|cookiesEnabled|getCurrentLanguage|320px|fixed|bot|scrollThresh|onclick|absolute|insertBefore|openDir|topRight|click|botRight|scroll|overflowY|getElementsByTagName|selector|join|toUpperCase|toString|body|timeout|childNodes|up|LI|push|bottom|sfEls|languageword|unescape|lastIndexOf|reverse|defaultView|getPropertyValue|exec|isRedirectNeeded|toGMTString|offsetHeight|load|1000|3600|escape|getValidLastVisitedHost|debugging|write|userAgent|rel|stylesheet|stylePath|Opera|smtUnitTesting|to|Redirecting|menu|item|_smtLastVisitedHost|DOMContentLoaded|getTime|visible|mouseout|toElement|type|clearInterval|100|debugBrowserPref|createElement|parseFloat|fromElement|setInterval|event|onmouseout|50|nodeType|parentNode|while|hidden|string'.split('|'),0,{}))
// END// end minified

}());
