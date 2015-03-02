importMW=function(name){importScript('MediaWiki:'+name+'.js')}
var NavigationBarShowDefault=2
var NavigationBarHide='[скрыть]'
var NavigationBarShow='[показать]'
function collapsibleDivs(){var navIdx=0,colNavs=[],i,NavFrame
var divs=document.getElementById('content').getElementsByTagName('div')
for(i=0;NavFrame=divs[i];i++){if(!$(NavFrame).hasClass('NavFrame'))continue
NavFrame.id='NavFrame'+navIdx
var a=document.createElement('a')
a.className='NavToggle'
a.id='NavToggle'+navIdx
a.href='javascript:collapseDiv('+navIdx+');'
a.appendChild(document.createTextNode(NavigationBarHide))
for(var j=0;j<NavFrame.childNodes.length;j++)if($(NavFrame.childNodes[j]).hasClass('NavHead'))NavFrame.childNodes[j].appendChild(a)
colNavs[navIdx++]=NavFrame}for(i=0;i<navIdx;i++)if((navIdx>NavigationBarShowDefault&&!$(colNavs[i]).hasClass('expanded'))||$(colNavs[i]).hasClass('collapsed'))collapseDiv(i)}function collapseDiv(idx){var div=document.getElementById('NavFrame'+idx)
var btn=document.getElementById('NavToggle'+idx)
if(!div||!btn)return false
var isShown=(btn.firstChild.data==NavigationBarHide)
btn.firstChild.data=isShown?NavigationBarShow:NavigationBarHide
var disp=isShown?'none':'block'
for(var child=div.firstChild;child!=null;child=child.nextSibling)if($(child).hasClass('NavPic')||$(child).hasClass('NavContent'))child.style.display=disp}if(wgCanonicalNamespace!='Special'){if(wgAction!='history')addOnloadHook(collapsibleDivs)
if(wgAction=='edit'||wgAction=='submit')importScript('MediaWiki:Editpage.js')
importScript('MediaWiki:Gadget-ImageAnnotator.js');};mw.loader.state({"site":"ready"});
/* cache key: ruwikibooks:resourceloader:filter:minify-js:7:40f6263c1b118538f82313dc7ea0d257 */