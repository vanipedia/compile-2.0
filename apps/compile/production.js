include.set_path('apps');
include.resources("jquery.min","jquery.tinysort.packed","jquery.autogrow","jquery.easing","jquery.scrollTo","jquery.jeditable","jquery.hoverIntent","jquery-autocomplete/jquery.autocomplete","jquery-ui-1.7.2.custom.min","BaltoUni.min","UniToASCII","jquery.highlight_sanskrit","RegExp.escape");
include.engines();
include.plugins("controller","controller/hover","controller/view","view","view/helpers","model");
include(function(){
include.models("compilation","quote","section","compile_form","facts");
include.controllers("compilation","quotes","compile_form","facts");
include.views();
});
include.css("compilation","quotes","edit_quote","deleted_quote","compile_form","facts","skins/light_blue/jquery-ui","jquery.autocomplete");
;
include.set_path('resources');
(function(){
var l=this,g,y=l.jQuery,p=l.$,o=l.jQuery=l.$=function(E,F){
return new o.fn.init(E,F);
},D=/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,f=/^.[^:#\[\.,]*$/;
o.fn=o.prototype={init:function(E,H){
E=E||document;
if(E.nodeType){
this[0]=E;
this.length=1;
this.context=E;
return this;
}
if(typeof E==="string"){
var G=D.exec(E);
if(G&&(G[1]||!H)){
if(G[1]){
E=o.clean([G[1]],H);
}else{
var I=document.getElementById(G[3]);
if(I&&I.id!=G[3]){
return o().find(E);
}
var F=o(I||[]);
F.context=document;
F.selector=E;
return F;
}
}else{
return o(H).find(E);
}
}else{
if(o.isFunction(E)){
return o(document).ready(E);
}
}
if(E.selector&&E.context){
this.selector=E.selector;
this.context=E.context;
}
return this.setArray(o.isArray(E)?E:o.makeArray(E));
},selector:"",jquery:"1.3.2",size:function(){
return this.length;
},get:function(E){
return E===g?Array.prototype.slice.call(this):this[E];
},pushStack:function(F,H,E){
var G=o(F);
G.prevObject=this;
G.context=this.context;
if(H==="find"){
G.selector=this.selector+(this.selector?" ":"")+E;
}else{
if(H){
G.selector=this.selector+"."+H+"("+E+")";
}
}
return G;
},setArray:function(E){
this.length=0;
Array.prototype.push.apply(this,E);
return this;
},each:function(F,E){
return o.each(this,F,E);
},index:function(E){
return o.inArray(E&&E.jquery?E[0]:E,this);
},attr:function(F,H,G){
var E=F;
if(typeof F==="string"){
if(H===g){
return this[0]&&o[G||"attr"](this[0],F);
}else{
E={};
E[F]=H;
}
}
return this.each(function(I){
for(F in E){
o.attr(G?this.style:this,F,o.prop(this,E[F],G,I,F));
}
});
},css:function(E,F){
if((E=="width"||E=="height")&&parseFloat(F)<0){
F=g;
}
return this.attr(E,F,"curCSS");
},text:function(F){
if(typeof F!=="object"&&F!=null){
return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(F));
}
var E="";
o.each(F||this,function(){
o.each(this.childNodes,function(){
if(this.nodeType!=8){
E+=this.nodeType!=1?this.nodeValue:o.fn.text([this]);
}
});
});
return E;
},wrapAll:function(E){
if(this[0]){
var F=o(E,this[0].ownerDocument).clone();
if(this[0].parentNode){
F.insertBefore(this[0]);
}
F.map(function(){
var G=this;
while(G.firstChild){
G=G.firstChild;
}
return G;
}).append(this);
}
return this;
},wrapInner:function(E){
return this.each(function(){
o(this).contents().wrapAll(E);
});
},wrap:function(E){
return this.each(function(){
o(this).wrapAll(E);
});
},append:function(){
return this.domManip(arguments,true,function(E){
if(this.nodeType==1){
this.appendChild(E);
}
});
},prepend:function(){
return this.domManip(arguments,true,function(E){
if(this.nodeType==1){
this.insertBefore(E,this.firstChild);
}
});
},before:function(){
return this.domManip(arguments,false,function(E){
this.parentNode.insertBefore(E,this);
});
},after:function(){
return this.domManip(arguments,false,function(E){
this.parentNode.insertBefore(E,this.nextSibling);
});
},end:function(){
return this.prevObject||o([]);
},push:[].push,sort:[].sort,splice:[].splice,find:function(E){
if(this.length===1){
var F=this.pushStack([],"find",E);
F.length=0;
o.find(E,this[0],F);
return F;
}else{
return this.pushStack(o.unique(o.map(this,function(G){
return o.find(E,G);
})),"find",E);
}
},clone:function(G){
var E=this.map(function(){
if(!o.support.noCloneEvent&&!o.isXMLDoc(this)){
var I=this.outerHTML;
if(!I){
var J=this.ownerDocument.createElement("div");
J.appendChild(this.cloneNode(true));
I=J.innerHTML;
}
return o.clean([I.replace(/ jQuery\d+="(?:\d+|null)"/g,"").replace(/^\s*/,"")])[0];
}else{
return this.cloneNode(true);
}
});
if(G===true){
var H=this.find("*").andSelf(),F=0;
E.find("*").andSelf().each(function(){
if(this.nodeName!==H[F].nodeName){
return;
}
var I=o.data(H[F],"events");
for(var K in I){
for(var J in I[K]){
o.event.add(this,K,I[K][J],I[K][J].data);
}
}
F++;
});
}
return E;
},filter:function(E){
return this.pushStack(o.isFunction(E)&&o.grep(this,function(G,F){
return E.call(G,F);
})||o.multiFilter(E,o.grep(this,function(F){
return F.nodeType===1;
})),"filter",E);
},closest:function(E){
var G=o.expr.match.POS.test(E)?o(E):null,F=0;
return this.map(function(){
var H=this;
while(H&&H.ownerDocument){
if(G?G.index(H)>-1:o(H).is(E)){
o.data(H,"closest",F);
return H;
}
H=H.parentNode;
F++;
}
});
},not:function(E){
if(typeof E==="string"){
if(f.test(E)){
return this.pushStack(o.multiFilter(E,this,true),"not",E);
}else{
E=o.multiFilter(E,this);
}
}
var F=E.length&&E[E.length-1]!==g&&!E.nodeType;
return this.filter(function(){
return F?o.inArray(this,E)<0:this!=E;
});
},add:function(E){
return this.pushStack(o.unique(o.merge(this.get(),typeof E==="string"?o(E):o.makeArray(E))));
},is:function(E){
return !!E&&o.multiFilter(E,this).length>0;
},hasClass:function(E){
return !!E&&this.is("."+E);
},val:function(K){
if(K===g){
var E=this[0];
if(E){
if(o.nodeName(E,"option")){
return (E.attributes.value||{}).specified?E.value:E.text;
}
if(o.nodeName(E,"select")){
var I=E.selectedIndex,L=[],M=E.options,H=E.type=="select-one";
if(I<0){
return null;
}
for(var F=H?I:0,J=H?I+1:M.length;F<J;F++){
var G=M[F];
if(G.selected){
K=o(G).val();
if(H){
return K;
}
L.push(K);
}
}
return L;
}
return (E.value||"").replace(/\r/g,"");
}
return g;
}
if(typeof K==="number"){
K+="";
}
return this.each(function(){
if(this.nodeType!=1){
return;
}
if(o.isArray(K)&&/radio|checkbox/.test(this.type)){
this.checked=(o.inArray(this.value,K)>=0||o.inArray(this.name,K)>=0);
}else{
if(o.nodeName(this,"select")){
var N=o.makeArray(K);
o("option",this).each(function(){
this.selected=(o.inArray(this.value,N)>=0||o.inArray(this.text,N)>=0);
});
if(!N.length){
this.selectedIndex=-1;
}
}else{
this.value=K;
}
}
});
},html:function(E){
return E===g?(this[0]?this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g,""):null):this.empty().append(E);
},replaceWith:function(E){
return this.after(E).remove();
},eq:function(E){
return this.slice(E,+E+1);
},slice:function(){
return this.pushStack(Array.prototype.slice.apply(this,arguments),"slice",Array.prototype.slice.call(arguments).join(","));
},map:function(E){
return this.pushStack(o.map(this,function(G,F){
return E.call(G,F,G);
}));
},andSelf:function(){
return this.add(this.prevObject);
},domManip:function(J,M,L){
if(this[0]){
var I=(this[0].ownerDocument||this[0]).createDocumentFragment(),F=o.clean(J,(this[0].ownerDocument||this[0]),I),H=I.firstChild;
if(H){
for(var G=0,E=this.length;G<E;G++){
L.call(K(this[G],H),this.length>1||G>0?I.cloneNode(true):I);
}
}
if(F){
o.each(F,z);
}
}
return this;
function K(N,O){
return M&&o.nodeName(N,"table")&&o.nodeName(O,"tr")?(N.getElementsByTagName("tbody")[0]||N.appendChild(N.ownerDocument.createElement("tbody"))):N;
};
}};
o.fn.init.prototype=o.fn;
function z(E,F){
if(F.src){
o.ajax({url:F.src,async:false,dataType:"script"});
}else{
o.globalEval(F.text||F.textContent||F.innerHTML||"");
}
if(F.parentNode){
F.parentNode.removeChild(F);
}
};
function e(){
return +new Date;
};
o.extend=o.fn.extend=function(){
var J=arguments[0]||{},H=1,I=arguments.length,E=false,G;
if(typeof J==="boolean"){
E=J;
J=arguments[1]||{};
H=2;
}
if(typeof J!=="object"&&!o.isFunction(J)){
J={};
}
if(I==H){
J=this;
--H;
}
for(;H<I;H++){
if((G=arguments[H])!=null){
for(var F in G){
var K=J[F],L=G[F];
if(J===L){
continue;
}
if(E&&L&&typeof L==="object"&&!L.nodeType){
J[F]=o.extend(E,K||(L.length!=null?[]:{}),L);
}else{
if(L!==g){
J[F]=L;
}
}
}
}
}
return J;
};
var b=/z-?index|font-?weight|opacity|zoom|line-?height/i,q=document.defaultView||{},s=Object.prototype.toString;
o.extend({noConflict:function(E){
l.$=p;
if(E){
l.jQuery=y;
}
return o;
},isFunction:function(E){
return s.call(E)==="[object Function]";
},isArray:function(E){
return s.call(E)==="[object Array]";
},isXMLDoc:function(E){
return E.nodeType===9&&E.documentElement.nodeName!=="HTML"||!!E.ownerDocument&&o.isXMLDoc(E.ownerDocument);
},globalEval:function(G){
if(G&&/\S/.test(G)){
var F=document.getElementsByTagName("head")[0]||document.documentElement,E=document.createElement("script");
E.type="text/javascript";
if(o.support.scriptEval){
E.appendChild(document.createTextNode(G));
}else{
E.text=G;
}
F.insertBefore(E,F.firstChild);
F.removeChild(E);
}
},nodeName:function(F,E){
return F.nodeName&&F.nodeName.toUpperCase()==E.toUpperCase();
},each:function(G,K,F){
var E,H=0,I=G.length;
if(F){
if(I===g){
for(E in G){
if(K.apply(G[E],F)===false){
break;
}
}
}else{
for(;H<I;){
if(K.apply(G[H++],F)===false){
break;
}
}
}
}else{
if(I===g){
for(E in G){
if(K.call(G[E],E,G[E])===false){
break;
}
}
}else{
for(var J=G[0];H<I&&K.call(J,H,J)!==false;J=G[++H]){
}
}
}
return G;
},prop:function(H,I,G,F,E){
if(o.isFunction(I)){
I=I.call(H,F);
}
return typeof I==="number"&&G=="curCSS"&&!b.test(E)?I+"px":I;
},className:{add:function(E,F){
o.each((F||"").split(/\s+/),function(G,H){
if(E.nodeType==1&&!o.className.has(E.className,H)){
E.className+=(E.className?" ":"")+H;
}
});
},remove:function(E,F){
if(E.nodeType==1){
E.className=F!==g?o.grep(E.className.split(/\s+/),function(G){
return !o.className.has(F,G);
}).join(" "):"";
}
},has:function(F,E){
return F&&o.inArray(E,(F.className||F).toString().split(/\s+/))>-1;
}},swap:function(H,G,I){
var E={};
for(var F in G){
E[F]=H.style[F];
H.style[F]=G[F];
}
I.call(H);
for(var F in G){
H.style[F]=E[F];
}
},css:function(H,F,J,E){
if(F=="width"||F=="height"){
var L,G={position:"absolute",visibility:"hidden",display:"block"},K=F=="width"?["Left","Right"]:["Top","Bottom"];
function I(){
L=F=="width"?H.offsetWidth:H.offsetHeight;
if(E==="border"){
return;
}
o.each(K,function(){
if(!E){
L-=parseFloat(o.curCSS(H,"padding"+this,true))||0;
}
if(E==="margin"){
L+=parseFloat(o.curCSS(H,"margin"+this,true))||0;
}else{
L-=parseFloat(o.curCSS(H,"border"+this+"Width",true))||0;
}
});
};
if(H.offsetWidth!==0){
I();
}else{
o.swap(H,G,I);
}
return Math.max(0,Math.round(L));
}
return o.curCSS(H,F,J);
},curCSS:function(I,F,G){
var L,E=I.style;
if(F=="opacity"&&!o.support.opacity){
L=o.attr(E,"opacity");
return L==""?"1":L;
}
if(F.match(/float/i)){
F=w;
}
if(!G&&E&&E[F]){
L=E[F];
}else{
if(q.getComputedStyle){
if(F.match(/float/i)){
F="float";
}
F=F.replace(/([A-Z])/g,"-$1").toLowerCase();
var M=q.getComputedStyle(I,null);
if(M){
L=M.getPropertyValue(F);
}
if(F=="opacity"&&L==""){
L="1";
}
}else{
if(I.currentStyle){
var J=F.replace(/\-(\w)/g,function(N,O){
return O.toUpperCase();
});
L=I.currentStyle[F]||I.currentStyle[J];
if(!/^\d+(px)?$/i.test(L)&&/^\d/.test(L)){
var H=E.left,K=I.runtimeStyle.left;
I.runtimeStyle.left=I.currentStyle.left;
E.left=L||0;
L=E.pixelLeft+"px";
E.left=H;
I.runtimeStyle.left=K;
}
}
}
}
return L;
},clean:function(F,K,I){
K=K||document;
if(typeof K.createElement==="undefined"){
K=K.ownerDocument||K[0]&&K[0].ownerDocument||document;
}
if(!I&&F.length===1&&typeof F[0]==="string"){
var H=/^<(\w+)\s*\/?>$/.exec(F[0]);
if(H){
return [K.createElement(H[1])];
}
}
var G=[],E=[],L=K.createElement("div");
o.each(F,function(P,S){
if(typeof S==="number"){
S+="";
}
if(!S){
return;
}
if(typeof S==="string"){
S=S.replace(/(<(\w+)[^>]*?)\/>/g,function(U,V,T){
return T.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?U:V+"></"+T+">";
});
var O=S.replace(/^\s+/,"").substring(0,10).toLowerCase();
var Q=!O.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!O.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||O.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!O.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!O.indexOf("<td")||!O.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!O.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||!o.support.htmlSerialize&&[1,"div<div>","</div>"]||[0,"",""];
L.innerHTML=Q[1]+S+Q[2];
while(Q[0]--){
L=L.lastChild;
}
if(!o.support.tbody){
var R=/<tbody/i.test(S),N=!O.indexOf("<table")&&!R?L.firstChild&&L.firstChild.childNodes:Q[1]=="<table>"&&!R?L.childNodes:[];
for(var M=N.length-1;M>=0;--M){
if(o.nodeName(N[M],"tbody")&&!N[M].childNodes.length){
N[M].parentNode.removeChild(N[M]);
}
}
}
if(!o.support.leadingWhitespace&&/^\s/.test(S)){
L.insertBefore(K.createTextNode(S.match(/^\s*/)[0]),L.firstChild);
}
S=o.makeArray(L.childNodes);
}
if(S.nodeType){
G.push(S);
}else{
G=o.merge(G,S);
}
});
if(I){
for(var J=0;G[J];J++){
if(o.nodeName(G[J],"script")&&(!G[J].type||G[J].type.toLowerCase()==="text/javascript")){
E.push(G[J].parentNode?G[J].parentNode.removeChild(G[J]):G[J]);
}else{
if(G[J].nodeType===1){
G.splice.apply(G,[J+1,0].concat(o.makeArray(G[J].getElementsByTagName("script"))));
}
I.appendChild(G[J]);
}
}
return E;
}
return G;
},attr:function(J,G,K){
if(!J||J.nodeType==3||J.nodeType==8){
return g;
}
var H=!o.isXMLDoc(J),L=K!==g;
G=H&&o.props[G]||G;
if(J.tagName){
var F=/href|src|style/.test(G);
if(G=="selected"&&J.parentNode){
J.parentNode.selectedIndex;
}
if(G in J&&H&&!F){
if(L){
if(G=="type"&&o.nodeName(J,"input")&&J.parentNode){
throw "type property can't be changed";
}
J[G]=K;
}
if(o.nodeName(J,"form")&&J.getAttributeNode(G)){
return J.getAttributeNode(G).nodeValue;
}
if(G=="tabIndex"){
var I=J.getAttributeNode("tabIndex");
return I&&I.specified?I.value:J.nodeName.match(/(button|input|object|select|textarea)/i)?0:J.nodeName.match(/^(a|area)$/i)&&J.href?0:g;
}
return J[G];
}
if(!o.support.style&&H&&G=="style"){
return o.attr(J.style,"cssText",K);
}
if(L){
J.setAttribute(G,""+K);
}
var E=!o.support.hrefNormalized&&H&&F?J.getAttribute(G,2):J.getAttribute(G);
return E===null?g:E;
}
if(!o.support.opacity&&G=="opacity"){
if(L){
J.zoom=1;
J.filter=(J.filter||"").replace(/alpha\([^)]*\)/,"")+(parseInt(K)+""=="NaN"?"":"alpha(opacity="+K*100+")");
}
return J.filter&&J.filter.indexOf("opacity=")>=0?(parseFloat(J.filter.match(/opacity=([^)]*)/)[1])/100)+"":"";
}
G=G.replace(/-([a-z])/ig,function(M,N){
return N.toUpperCase();
});
if(L){
J[G]=K;
}
return J[G];
},trim:function(E){
return (E||"").replace(/^\s+|\s+$/g,"");
},makeArray:function(G){
var E=[];
if(G!=null){
var F=G.length;
if(F==null||typeof G==="string"||o.isFunction(G)||G.setInterval){
E[0]=G;
}else{
while(F){
E[--F]=G[F];
}
}
}
return E;
},inArray:function(G,H){
for(var E=0,F=H.length;E<F;E++){
if(H[E]===G){
return E;
}
}
return -1;
},merge:function(H,E){
var F=0,G,I=H.length;
if(!o.support.getAll){
while((G=E[F++])!=null){
if(G.nodeType!=8){
H[I++]=G;
}
}
}else{
while((G=E[F++])!=null){
H[I++]=G;
}
}
return H;
},unique:function(K){
var F=[],E={};
try{
for(var G=0,H=K.length;G<H;G++){
var J=o.data(K[G]);
if(!E[J]){
E[J]=true;
F.push(K[G]);
}
}
}
catch(I){
F=K;
}
return F;
},grep:function(F,J,E){
var G=[];
for(var H=0,I=F.length;H<I;H++){
if(!E!=!J(F[H],H)){
G.push(F[H]);
}
}
return G;
},map:function(E,J){
var F=[];
for(var G=0,H=E.length;G<H;G++){
var I=J(E[G],G);
if(I!=null){
F[F.length]=I;
}
}
return F.concat.apply([],F);
}});
var C=navigator.userAgent.toLowerCase();
o.browser={version:(C.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1],safari:/webkit/.test(C),opera:/opera/.test(C),msie:/msie/.test(C)&&!/opera/.test(C),mozilla:/mozilla/.test(C)&&!/(compatible|webkit)/.test(C)};
o.each({parent:function(E){
return E.parentNode;
},parents:function(E){
return o.dir(E,"parentNode");
},next:function(E){
return o.nth(E,2,"nextSibling");
},prev:function(E){
return o.nth(E,2,"previousSibling");
},nextAll:function(E){
return o.dir(E,"nextSibling");
},prevAll:function(E){
return o.dir(E,"previousSibling");
},siblings:function(E){
return o.sibling(E.parentNode.firstChild,E);
},children:function(E){
return o.sibling(E.firstChild);
},contents:function(E){
return o.nodeName(E,"iframe")?E.contentDocument||E.contentWindow.document:o.makeArray(E.childNodes);
}},function(E,F){
o.fn[E]=function(G){
var H=o.map(this,F);
if(G&&typeof G=="string"){
H=o.multiFilter(G,H);
}
return this.pushStack(o.unique(H),E,G);
};
});
o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(E,F){
o.fn[E]=function(G){
var J=[],L=o(G);
for(var K=0,H=L.length;K<H;K++){
var I=(K>0?this.clone(true):this).get();
o.fn[F].apply(o(L[K]),I);
J=J.concat(I);
}
return this.pushStack(J,E,G);
};
});
o.each({removeAttr:function(E){
o.attr(this,E,"");
if(this.nodeType==1){
this.removeAttribute(E);
}
},addClass:function(E){
o.className.add(this,E);
},removeClass:function(E){
o.className.remove(this,E);
},toggleClass:function(F,E){
if(typeof E!=="boolean"){
E=!o.className.has(this,F);
}
o.className[E?"add":"remove"](this,F);
},remove:function(E){
if(!E||o.filter(E,[this]).length){
o("*",this).add([this]).each(function(){
o.event.remove(this);
o.removeData(this);
});
if(this.parentNode){
this.parentNode.removeChild(this);
}
}
},empty:function(){
o(this).children().remove();
while(this.firstChild){
this.removeChild(this.firstChild);
}
}},function(E,F){
o.fn[E]=function(){
return this.each(F,arguments);
};
});
function j(E,F){
return E[0]&&parseInt(o.curCSS(E[0],F,true),10)||0;
};
var h="jQuery"+e(),v=0,A={};
o.extend({cache:{},data:function(F,E,G){
F=F==l?A:F;
var H=F[h];
if(!H){
H=F[h]=++v;
}
if(E&&!o.cache[H]){
o.cache[H]={};
}
if(G!==g){
o.cache[H][E]=G;
}
return E?o.cache[H][E]:H;
},removeData:function(F,E){
F=F==l?A:F;
var H=F[h];
if(E){
if(o.cache[H]){
delete o.cache[H][E];
E="";
for(E in o.cache[H]){
break;
}
if(!E){
o.removeData(F);
}
}
}else{
try{
delete F[h];
}
catch(G){
if(F.removeAttribute){
F.removeAttribute(h);
}
}
delete o.cache[H];
}
},queue:function(F,E,H){
if(F){
E=(E||"fx")+"queue";
var G=o.data(F,E);
if(!G||o.isArray(H)){
G=o.data(F,E,o.makeArray(H));
}else{
if(H){
G.push(H);
}
}
}
return G;
},dequeue:function(H,G){
var E=o.queue(H,G),F=E.shift();
if(!G||G==="fx"){
F=E[0];
}
if(F!==g){
F.call(H);
}
}});
o.fn.extend({data:function(E,G){
var H=E.split(".");
H[1]=H[1]?"."+H[1]:"";
if(G===g){
var F=this.triggerHandler("getData"+H[1]+"!",[H[0]]);
if(F===g&&this.length){
F=o.data(this[0],E);
}
return F===g&&H[1]?this.data(H[0]):F;
}else{
return this.trigger("setData"+H[1]+"!",[H[0],G]).each(function(){
o.data(this,E,G);
});
}
},removeData:function(E){
return this.each(function(){
o.removeData(this,E);
});
},queue:function(E,F){
if(typeof E!=="string"){
F=E;
E="fx";
}
if(F===g){
return o.queue(this[0],E);
}
return this.each(function(){
var G=o.queue(this,E,F);
if(E=="fx"&&G.length==1){
G[0].call(this);
}
});
},dequeue:function(E){
return this.each(function(){
o.dequeue(this,E);
});
}});
(function(){
var R=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,L=0,H=Object.prototype.toString;
var F=function(Y,U,ab,ac){
ab=ab||[];
U=U||document;
if(U.nodeType!==1&&U.nodeType!==9){
return [];
}
if(!Y||typeof Y!=="string"){
return ab;
}
var Z=[],W,af,ai,T,ad,V,X=true;
R.lastIndex=0;
while((W=R.exec(Y))!==null){
Z.push(W[1]);
if(W[2]){
V=RegExp.rightContext;
break;
}
}
if(Z.length>1&&M.exec(Y)){
if(Z.length===2&&I.relative[Z[0]]){
af=J(Z[0]+Z[1],U);
}else{
af=I.relative[Z[0]]?[U]:F(Z.shift(),U);
while(Z.length){
Y=Z.shift();
if(I.relative[Y]){
Y+=Z.shift();
}
af=J(Y,af);
}
}
}else{
var ae=ac?{expr:Z.pop(),set:E(ac)}:F.find(Z.pop(),Z.length===1&&U.parentNode?U.parentNode:U,Q(U));
af=F.filter(ae.expr,ae.set);
if(Z.length>0){
ai=E(af);
}else{
X=false;
}
while(Z.length){
var ah=Z.pop(),ag=ah;
if(!I.relative[ah]){
ah="";
}else{
ag=Z.pop();
}
if(ag==null){
ag=U;
}
I.relative[ah](ai,ag,Q(U));
}
}
if(!ai){
ai=af;
}
if(!ai){
throw "Syntax error, unrecognized expression: "+(ah||Y);
}
if(H.call(ai)==="[object Array]"){
if(!X){
ab.push.apply(ab,ai);
}else{
if(U.nodeType===1){
for(var aa=0;ai[aa]!=null;aa++){
if(ai[aa]&&(ai[aa]===true||ai[aa].nodeType===1&&K(U,ai[aa]))){
ab.push(af[aa]);
}
}
}else{
for(var aa=0;ai[aa]!=null;aa++){
if(ai[aa]&&ai[aa].nodeType===1){
ab.push(af[aa]);
}
}
}
}
}else{
E(ai,ab);
}
if(V){
F(V,U,ab,ac);
if(G){
hasDuplicate=false;
ab.sort(G);
if(hasDuplicate){
for(var aa=1;aa<ab.length;aa++){
if(ab[aa]===ab[aa-1]){
ab.splice(aa--,1);
}
}
}
}
}
return ab;
};
F.matches=function(T,U){
return F(T,null,null,U);
};
F.find=function(aa,T,ab){
var Z,X;
if(!aa){
return [];
}
for(var W=0,V=I.order.length;W<V;W++){
var Y=I.order[W],X;
if((X=I.match[Y].exec(aa))){
var U=RegExp.leftContext;
if(U.substr(U.length-1)!=="\\"){
X[1]=(X[1]||"").replace(/\\/g,"");
Z=I.find[Y](X,T,ab);
if(Z!=null){
aa=aa.replace(I.match[Y],"");
break;
}
}
}
}
if(!Z){
Z=T.getElementsByTagName("*");
}
return {set:Z,expr:aa};
};
F.filter=function(ad,ac,ag,W){
var V=ad,ai=[],aa=ac,Y,T,Z=ac&&ac[0]&&Q(ac[0]);
while(ad&&ac.length){
for(var ab in I.filter){
if((Y=I.match[ab].exec(ad))!=null){
var U=I.filter[ab],ah,af;
T=false;
if(aa==ai){
ai=[];
}
if(I.preFilter[ab]){
Y=I.preFilter[ab](Y,aa,ag,ai,W,Z);
if(!Y){
T=ah=true;
}else{
if(Y===true){
continue;
}
}
}
if(Y){
for(var X=0;(af=aa[X])!=null;X++){
if(af){
ah=U(af,Y,X,aa);
var ae=W^!!ah;
if(ag&&ah!=null){
if(ae){
T=true;
}else{
aa[X]=false;
}
}else{
if(ae){
ai.push(af);
T=true;
}
}
}
}
}
if(ah!==g){
if(!ag){
aa=ai;
}
ad=ad.replace(I.match[ab],"");
if(!T){
return [];
}
break;
}
}
}
if(ad==V){
if(T==null){
throw "Syntax error, unrecognized expression: "+ad;
}else{
break;
}
}
V=ad;
}
return aa;
};
var I=F.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(T){
return T.getAttribute("href");
}},relative:{"+":function(aa,T,Z){
var X=typeof T==="string",ab=X&&!/\W/.test(T),Y=X&&!ab;
if(ab&&!Z){
T=T.toUpperCase();
}
for(var W=0,V=aa.length,U;W<V;W++){
if((U=aa[W])){
while((U=U.previousSibling)&&U.nodeType!==1){
}
aa[W]=Y||U&&U.nodeName===T?U||false:U===T;
}
}
if(Y){
F.filter(T,aa,true);
}
},">":function(Z,U,aa){
var X=typeof U==="string";
if(X&&!/\W/.test(U)){
U=aa?U:U.toUpperCase();
for(var V=0,T=Z.length;V<T;V++){
var Y=Z[V];
if(Y){
var W=Y.parentNode;
Z[V]=W.nodeName===U?W:false;
}
}
}else{
for(var V=0,T=Z.length;V<T;V++){
var Y=Z[V];
if(Y){
Z[V]=X?Y.parentNode:Y.parentNode===U;
}
}
if(X){
F.filter(U,Z,true);
}
}
},"":function(W,U,Y){
var V=L++,T=S;
if(!U.match(/\W/)){
var X=U=Y?U:U.toUpperCase();
T=P;
}
T("parentNode",U,V,W,X,Y);
},"~":function(W,U,Y){
var V=L++,T=S;
if(typeof U==="string"&&!U.match(/\W/)){
var X=U=Y?U:U.toUpperCase();
T=P;
}
T("previousSibling",U,V,W,X,Y);
}},find:{ID:function(U,V,W){
if(typeof V.getElementById!=="undefined"&&!W){
var T=V.getElementById(U[1]);
return T?[T]:[];
}
},NAME:function(V,Y,Z){
if(typeof Y.getElementsByName!=="undefined"){
var U=[],X=Y.getElementsByName(V[1]);
for(var W=0,T=X.length;W<T;W++){
if(X[W].getAttribute("name")===V[1]){
U.push(X[W]);
}
}
return U.length===0?null:U;
}
},TAG:function(T,U){
return U.getElementsByTagName(T[1]);
}},preFilter:{CLASS:function(W,U,V,T,Z,aa){
W=" "+W[1].replace(/\\/g,"")+" ";
if(aa){
return W;
}
for(var X=0,Y;(Y=U[X])!=null;X++){
if(Y){
if(Z^(Y.className&&(" "+Y.className+" ").indexOf(W)>=0)){
if(!V){
T.push(Y);
}
}else{
if(V){
U[X]=false;
}
}
}
}
return false;
},ID:function(T){
return T[1].replace(/\\/g,"");
},TAG:function(U,T){
for(var V=0;T[V]===false;V++){
}
return T[V]&&Q(T[V])?U[1]:U[1].toUpperCase();
},CHILD:function(T){
if(T[1]=="nth"){
var U=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(T[2]=="even"&&"2n"||T[2]=="odd"&&"2n+1"||!/\D/.test(T[2])&&"0n+"+T[2]||T[2]);
T[2]=(U[1]+(U[2]||1))-0;
T[3]=U[3]-0;
}
T[0]=L++;
return T;
},ATTR:function(X,U,V,T,Y,Z){
var W=X[1].replace(/\\/g,"");
if(!Z&&I.attrMap[W]){
X[1]=I.attrMap[W];
}
if(X[2]==="~="){
X[4]=" "+X[4]+" ";
}
return X;
},PSEUDO:function(X,U,V,T,Y){
if(X[1]==="not"){
if(X[3].match(R).length>1||/^\w/.test(X[3])){
X[3]=F(X[3],null,null,U);
}else{
var W=F.filter(X[3],U,V,true^Y);
if(!V){
T.push.apply(T,W);
}
return false;
}
}else{
if(I.match.POS.test(X[0])||I.match.CHILD.test(X[0])){
return true;
}
}
return X;
},POS:function(T){
T.unshift(true);
return T;
}},filters:{enabled:function(T){
return T.disabled===false&&T.type!=="hidden";
},disabled:function(T){
return T.disabled===true;
},checked:function(T){
return T.checked===true;
},selected:function(T){
T.parentNode.selectedIndex;
return T.selected===true;
},parent:function(T){
return !!T.firstChild;
},empty:function(T){
return !T.firstChild;
},has:function(V,U,T){
return !!F(T[3],V).length;
},header:function(T){
return /h\d/i.test(T.nodeName);
},text:function(T){
return "text"===T.type;
},radio:function(T){
return "radio"===T.type;
},checkbox:function(T){
return "checkbox"===T.type;
},file:function(T){
return "file"===T.type;
},password:function(T){
return "password"===T.type;
},submit:function(T){
return "submit"===T.type;
},image:function(T){
return "image"===T.type;
},reset:function(T){
return "reset"===T.type;
},button:function(T){
return "button"===T.type||T.nodeName.toUpperCase()==="BUTTON";
},input:function(T){
return /input|select|textarea|button/i.test(T.nodeName);
}},setFilters:{first:function(U,T){
return T===0;
},last:function(V,U,T,W){
return U===W.length-1;
},even:function(U,T){
return T%2===0;
},odd:function(U,T){
return T%2===1;
},lt:function(V,U,T){
return U<T[3]-0;
},gt:function(V,U,T){
return U>T[3]-0;
},nth:function(V,U,T){
return T[3]-0==U;
},eq:function(V,U,T){
return T[3]-0==U;
}},filter:{PSEUDO:function(Z,V,W,aa){
var U=V[1],X=I.filters[U];
if(X){
return X(Z,W,V,aa);
}else{
if(U==="contains"){
return (Z.textContent||Z.innerText||"").indexOf(V[3])>=0;
}else{
if(U==="not"){
var Y=V[3];
for(var W=0,T=Y.length;W<T;W++){
if(Y[W]===Z){
return false;
}
}
return true;
}
}
}
},CHILD:function(T,W){
var Z=W[1],U=T;
switch(Z){
case "only":
case "first":
while(U=U.previousSibling){
if(U.nodeType===1){
return false;
}
}
if(Z=="first"){
return true;
}
U=T;
case "last":
while(U=U.nextSibling){
if(U.nodeType===1){
return false;
}
}
return true;
case "nth":
var V=W[2],ac=W[3];
if(V==1&&ac==0){
return true;
}
var Y=W[0],ab=T.parentNode;
if(ab&&(ab.sizcache!==Y||!T.nodeIndex)){
var X=0;
for(U=ab.firstChild;U;U=U.nextSibling){
if(U.nodeType===1){
U.nodeIndex=++X;
}
}
ab.sizcache=Y;
}
var aa=T.nodeIndex-ac;
if(V==0){
return aa==0;
}else{
return (aa%V==0&&aa/V>=0);
}
}
},ID:function(U,T){
return U.nodeType===1&&U.getAttribute("id")===T;
},TAG:function(U,T){
return (T==="*"&&U.nodeType===1)||U.nodeName===T;
},CLASS:function(U,T){
return (" "+(U.className||U.getAttribute("class"))+" ").indexOf(T)>-1;
},ATTR:function(Y,W){
var V=W[1],T=I.attrHandle[V]?I.attrHandle[V](Y):Y[V]!=null?Y[V]:Y.getAttribute(V),Z=T+"",X=W[2],U=W[4];
return T==null?X==="!=":X==="="?Z===U:X==="*="?Z.indexOf(U)>=0:X==="~="?(" "+Z+" ").indexOf(U)>=0:!U?Z&&T!==false:X==="!="?Z!=U:X==="^="?Z.indexOf(U)===0:X==="$="?Z.substr(Z.length-U.length)===U:X==="|="?Z===U||Z.substr(0,U.length+1)===U+"-":false;
},POS:function(X,U,V,Y){
var T=U[2],W=I.setFilters[T];
if(W){
return W(X,V,U,Y);
}
}}};
var M=I.match.POS;
for(var O in I.match){
I.match[O]=RegExp(I.match[O].source+/(?![^\[]*\])(?![^\(]*\))/.source);
}
var E=function(U,T){
U=Array.prototype.slice.call(U);
if(T){
T.push.apply(T,U);
return T;
}
return U;
};
try{
Array.prototype.slice.call(document.documentElement.childNodes);
}
catch(N){
E=function(X,W){
var U=W||[];
if(H.call(X)==="[object Array]"){
Array.prototype.push.apply(U,X);
}else{
if(typeof X.length==="number"){
for(var V=0,T=X.length;V<T;V++){
U.push(X[V]);
}
}else{
for(var V=0;X[V];V++){
U.push(X[V]);
}
}
}
return U;
};
}
var G;
if(document.documentElement.compareDocumentPosition){
G=function(U,T){
var V=U.compareDocumentPosition(T)&4?-1:U===T?0:1;
if(V===0){
hasDuplicate=true;
}
return V;
};
}else{
if("sourceIndex" in document.documentElement){
G=function(U,T){
var V=U.sourceIndex-T.sourceIndex;
if(V===0){
hasDuplicate=true;
}
return V;
};
}else{
if(document.createRange){
G=function(W,U){
var V=W.ownerDocument.createRange(),T=U.ownerDocument.createRange();
V.selectNode(W);
V.collapse(true);
T.selectNode(U);
T.collapse(true);
var X=V.compareBoundaryPoints(Range.START_TO_END,T);
if(X===0){
hasDuplicate=true;
}
return X;
};
}
}
}
(function(){
var U=document.createElement("form"),V="script"+(new Date).getTime();
U.innerHTML="<input name='"+V+"'/>";
var T=document.documentElement;
T.insertBefore(U,T.firstChild);
if(!!document.getElementById(V)){
I.find.ID=function(X,Y,Z){
if(typeof Y.getElementById!=="undefined"&&!Z){
var W=Y.getElementById(X[1]);
return W?W.id===X[1]||typeof W.getAttributeNode!=="undefined"&&W.getAttributeNode("id").nodeValue===X[1]?[W]:g:[];
}
};
I.filter.ID=function(Y,W){
var X=typeof Y.getAttributeNode!=="undefined"&&Y.getAttributeNode("id");
return Y.nodeType===1&&X&&X.nodeValue===W;
};
}
T.removeChild(U);
})();
(function(){
var T=document.createElement("div");
T.appendChild(document.createComment(""));
if(T.getElementsByTagName("*").length>0){
I.find.TAG=function(U,Y){
var X=Y.getElementsByTagName(U[1]);
if(U[1]==="*"){
var W=[];
for(var V=0;X[V];V++){
if(X[V].nodeType===1){
W.push(X[V]);
}
}
X=W;
}
return X;
};
}
T.innerHTML="<a href='#'></a>";
if(T.firstChild&&typeof T.firstChild.getAttribute!=="undefined"&&T.firstChild.getAttribute("href")!=="#"){
I.attrHandle.href=function(U){
return U.getAttribute("href",2);
};
}
})();
if(document.querySelectorAll){
(function(){
var T=F,U=document.createElement("div");
U.innerHTML="<p class='TEST'></p>";
if(U.querySelectorAll&&U.querySelectorAll(".TEST").length===0){
return;
}
F=function(Y,X,V,W){
X=X||document;
if(!W&&X.nodeType===9&&!Q(X)){
try{
return E(X.querySelectorAll(Y),V);
}
catch(Z){
}
}
return T(Y,X,V,W);
};
F.find=T.find;
F.filter=T.filter;
F.selectors=T.selectors;
F.matches=T.matches;
})();
}
if(document.getElementsByClassName&&document.documentElement.getElementsByClassName){
(function(){
var T=document.createElement("div");
T.innerHTML="<div class='test e'></div><div class='test'></div>";
if(T.getElementsByClassName("e").length===0){
return;
}
T.lastChild.className="e";
if(T.getElementsByClassName("e").length===1){
return;
}
I.order.splice(1,0,"CLASS");
I.find.CLASS=function(U,V,W){
if(typeof V.getElementsByClassName!=="undefined"&&!W){
return V.getElementsByClassName(U[1]);
}
};
})();
}
function P(U,Z,Y,ad,aa,ac){
var ab=U=="previousSibling"&&!ac;
for(var W=0,V=ad.length;W<V;W++){
var T=ad[W];
if(T){
if(ab&&T.nodeType===1){
T.sizcache=Y;
T.sizset=W;
}
T=T[U];
var X=false;
while(T){
if(T.sizcache===Y){
X=ad[T.sizset];
break;
}
if(T.nodeType===1&&!ac){
T.sizcache=Y;
T.sizset=W;
}
if(T.nodeName===Z){
X=T;
break;
}
T=T[U];
}
ad[W]=X;
}
}
};
function S(U,Z,Y,ad,aa,ac){
var ab=U=="previousSibling"&&!ac;
for(var W=0,V=ad.length;W<V;W++){
var T=ad[W];
if(T){
if(ab&&T.nodeType===1){
T.sizcache=Y;
T.sizset=W;
}
T=T[U];
var X=false;
while(T){
if(T.sizcache===Y){
X=ad[T.sizset];
break;
}
if(T.nodeType===1){
if(!ac){
T.sizcache=Y;
T.sizset=W;
}
if(typeof Z!=="string"){
if(T===Z){
X=true;
break;
}
}else{
if(F.filter(Z,[T]).length>0){
X=T;
break;
}
}
}
T=T[U];
}
ad[W]=X;
}
}
};
var K=document.compareDocumentPosition?function(U,T){
return U.compareDocumentPosition(T)&16;
}:function(U,T){
return U!==T&&(U.contains?U.contains(T):true);
};
var Q=function(T){
return T.nodeType===9&&T.documentElement.nodeName!=="HTML"||!!T.ownerDocument&&Q(T.ownerDocument);
};
var J=function(T,aa){
var W=[],X="",Y,V=aa.nodeType?[aa]:aa;
while((Y=I.match.PSEUDO.exec(T))){
X+=Y[0];
T=T.replace(I.match.PSEUDO,"");
}
T=I.relative[T]?T+"*":T;
for(var Z=0,U=V.length;Z<U;Z++){
F(T,V[Z],W);
}
return F.filter(X,W);
};
o.find=F;
o.filter=F.filter;
o.expr=F.selectors;
o.expr[":"]=o.expr.filters;
F.selectors.filters.hidden=function(T){
return T.offsetWidth===0||T.offsetHeight===0;
};
F.selectors.filters.visible=function(T){
return T.offsetWidth>0||T.offsetHeight>0;
};
F.selectors.filters.animated=function(T){
return o.grep(o.timers,function(U){
return T===U.elem;
}).length;
};
o.multiFilter=function(V,T,U){
if(U){
V=":not("+V+")";
}
return F.matches(V,T);
};
o.dir=function(V,U){
var T=[],W=V[U];
while(W&&W!=document){
if(W.nodeType==1){
T.push(W);
}
W=W[U];
}
return T;
};
o.nth=function(X,T,V,W){
T=T||1;
var U=0;
for(;X;X=X[V]){
if(X.nodeType==1&&++U==T){
break;
}
}
return X;
};
o.sibling=function(V,U){
var T=[];
for(;V;V=V.nextSibling){
if(V.nodeType==1&&V!=U){
T.push(V);
}
}
return T;
};
return;
l.Sizzle=F;
})();
o.event={add:function(I,F,H,K){
if(I.nodeType==3||I.nodeType==8){
return;
}
if(I.setInterval&&I!=l){
I=l;
}
if(!H.guid){
H.guid=this.guid++;
}
if(K!==g){
var G=H;
H=this.proxy(G);
H.data=K;
}
var E=o.data(I,"events")||o.data(I,"events",{}),J=o.data(I,"handle")||o.data(I,"handle",function(){
return typeof o!=="undefined"&&!o.event.triggered?o.event.handle.apply(arguments.callee.elem,arguments):g;
});
J.elem=I;
o.each(F.split(/\s+/),function(M,N){
var O=N.split(".");
N=O.shift();
H.type=O.slice().sort().join(".");
var L=E[N];
if(o.event.specialAll[N]){
o.event.specialAll[N].setup.call(I,K,O);
}
if(!L){
L=E[N]={};
if(!o.event.special[N]||o.event.special[N].setup.call(I,K,O)===false){
if(I.addEventListener){
I.addEventListener(N,J,false);
}else{
if(I.attachEvent){
I.attachEvent("on"+N,J);
}
}
}
}
L[H.guid]=H;
o.event.global[N]=true;
});
I=null;
},guid:1,global:{},remove:function(K,H,J){
if(K.nodeType==3||K.nodeType==8){
return;
}
var G=o.data(K,"events"),F,E;
if(G){
if(H===g||(typeof H==="string"&&H.charAt(0)==".")){
for(var I in G){
this.remove(K,I+(H||""));
}
}else{
if(H.type){
J=H.handler;
H=H.type;
}
o.each(H.split(/\s+/),function(M,O){
var Q=O.split(".");
O=Q.shift();
var N=RegExp("(^|\\.)"+Q.slice().sort().join(".*\\.")+"(\\.|$)");
if(G[O]){
if(J){
delete G[O][J.guid];
}else{
for(var P in G[O]){
if(N.test(G[O][P].type)){
delete G[O][P];
}
}
}
if(o.event.specialAll[O]){
o.event.specialAll[O].teardown.call(K,Q);
}
for(F in G[O]){
break;
}
if(!F){
if(!o.event.special[O]||o.event.special[O].teardown.call(K,Q)===false){
if(K.removeEventListener){
K.removeEventListener(O,o.data(K,"handle"),false);
}else{
if(K.detachEvent){
K.detachEvent("on"+O,o.data(K,"handle"));
}
}
}
F=null;
delete G[O];
}
}
});
}
for(F in G){
break;
}
if(!F){
var L=o.data(K,"handle");
if(L){
L.elem=null;
}
o.removeData(K,"events");
o.removeData(K,"handle");
}
}
},trigger:function(I,K,H,E){
var G=I.type||I;
if(!E){
I=typeof I==="object"?I[h]?I:o.extend(o.Event(G),I):o.Event(G);
if(G.indexOf("!")>=0){
I.type=G=G.slice(0,-1);
I.exclusive=true;
}
if(!H){
I.stopPropagation();
if(this.global[G]){
o.each(o.cache,function(){
if(this.events&&this.events[G]){
o.event.trigger(I,K,this.handle.elem);
}
});
}
}
if(!H||H.nodeType==3||H.nodeType==8){
return g;
}
I.result=g;
I.target=H;
K=o.makeArray(K);
K.unshift(I);
}
I.currentTarget=H;
var J=o.data(H,"handle");
if(J){
J.apply(H,K);
}
if((!H[G]||(o.nodeName(H,"a")&&G=="click"))&&H["on"+G]&&H["on"+G].apply(H,K)===false){
I.result=false;
}
if(!E&&H[G]&&!I.isDefaultPrevented()&&!(o.nodeName(H,"a")&&G=="click")){
this.triggered=true;
try{
H[G]();
}
catch(L){
}
}
this.triggered=false;
if(!I.isPropagationStopped()){
var F=H.parentNode||H.ownerDocument;
if(F){
o.event.trigger(I,K,F,true);
}
}
},handle:function(K){
var J,E;
K=arguments[0]=o.event.fix(K||l.event);
K.currentTarget=this;
var L=K.type.split(".");
K.type=L.shift();
J=!L.length&&!K.exclusive;
var I=RegExp("(^|\\.)"+L.slice().sort().join(".*\\.")+"(\\.|$)");
E=(o.data(this,"events")||{})[K.type];
for(var G in E){
var H=E[G];
if(J||I.test(H.type)){
K.handler=H;
K.data=H.data;
var F=H.apply(this,arguments);
if(F!==g){
K.result=F;
if(F===false){
K.preventDefault();
K.stopPropagation();
}
}
if(K.isImmediatePropagationStopped()){
break;
}
}
}
},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(H){
if(H[h]){
return H;
}
var F=H;
H=o.Event(F);
for(var G=this.props.length,J;G;){
J=this.props[--G];
H[J]=F[J];
}
if(!H.target){
H.target=H.srcElement||document;
}
if(H.target.nodeType==3){
H.target=H.target.parentNode;
}
if(!H.relatedTarget&&H.fromElement){
H.relatedTarget=H.fromElement==H.target?H.toElement:H.fromElement;
}
if(H.pageX==null&&H.clientX!=null){
var I=document.documentElement,E=document.body;
H.pageX=H.clientX+(I&&I.scrollLeft||E&&E.scrollLeft||0)-(I.clientLeft||0);
H.pageY=H.clientY+(I&&I.scrollTop||E&&E.scrollTop||0)-(I.clientTop||0);
}
if(!H.which&&((H.charCode||H.charCode===0)?H.charCode:H.keyCode)){
H.which=H.charCode||H.keyCode;
}
if(!H.metaKey&&H.ctrlKey){
H.metaKey=H.ctrlKey;
}
if(!H.which&&H.button){
H.which=(H.button&1?1:(H.button&2?3:(H.button&4?2:0)));
}
return H;
},proxy:function(F,E){
E=E||function(){
return F.apply(this,arguments);
};
E.guid=F.guid=F.guid||E.guid||this.guid++;
return E;
},special:{ready:{setup:B,teardown:function(){
}}},specialAll:{live:{setup:function(E,F){
o.event.add(this,F[0],c);
},teardown:function(G){
if(G.length){
var E=0,F=RegExp("(^|\\.)"+G[0]+"(\\.|$)");
o.each((o.data(this,"events").live||{}),function(){
if(F.test(this.type)){
E++;
}
});
if(E<1){
o.event.remove(this,G[0],c);
}
}
}}}};
o.Event=function(E){
if(!this.preventDefault){
return new o.Event(E);
}
if(E&&E.type){
this.originalEvent=E;
this.type=E.type;
}else{
this.type=E;
}
this.timeStamp=e();
this[h]=true;
};
function k(){
return false;
};
function u(){
return true;
};
o.Event.prototype={preventDefault:function(){
this.isDefaultPrevented=u;
var E=this.originalEvent;
if(!E){
return;
}
if(E.preventDefault){
E.preventDefault();
}
E.returnValue=false;
},stopPropagation:function(){
this.isPropagationStopped=u;
var E=this.originalEvent;
if(!E){
return;
}
if(E.stopPropagation){
E.stopPropagation();
}
E.cancelBubble=true;
},stopImmediatePropagation:function(){
this.isImmediatePropagationStopped=u;
this.stopPropagation();
},isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k};
var a=function(F){
var E=F.relatedTarget;
while(E&&E!=this){
try{
E=E.parentNode;
}
catch(G){
E=this;
}
}
if(E!=this){
F.type=F.data;
o.event.handle.apply(this,arguments);
}
};
o.each({mouseover:"mouseenter",mouseout:"mouseleave"},function(F,E){
o.event.special[E]={setup:function(){
o.event.add(this,F,a,E);
},teardown:function(){
o.event.remove(this,F,a);
}};
});
o.fn.extend({bind:function(F,G,E){
return F=="unload"?this.one(F,G,E):this.each(function(){
o.event.add(this,F,E||G,E&&G);
});
},one:function(G,H,F){
var E=o.event.proxy(F||H,function(I){
o(this).unbind(I,E);
return (F||H).apply(this,arguments);
});
return this.each(function(){
o.event.add(this,G,E,F&&H);
});
},unbind:function(F,E){
return this.each(function(){
o.event.remove(this,F,E);
});
},trigger:function(E,F){
return this.each(function(){
o.event.trigger(E,F,this);
});
},triggerHandler:function(E,G){
if(this[0]){
var F=o.Event(E);
F.preventDefault();
F.stopPropagation();
o.event.trigger(F,G,this[0]);
return F.result;
}
},toggle:function(G){
var E=arguments,F=1;
while(F<E.length){
o.event.proxy(G,E[F++]);
}
return this.click(o.event.proxy(G,function(H){
this.lastToggle=(this.lastToggle||0)%F;
H.preventDefault();
return E[this.lastToggle++].apply(this,arguments)||false;
}));
},hover:function(E,F){
return this.mouseenter(E).mouseleave(F);
},ready:function(E){
B();
if(o.isReady){
E.call(document,o);
}else{
o.readyList.push(E);
}
return this;
},live:function(G,F){
var E=o.event.proxy(F);
E.guid+=this.selector+G;
o(document).bind(i(G,this.selector),this.selector,E);
return this;
},die:function(F,E){
o(document).unbind(i(F,this.selector),E?{guid:E.guid+this.selector+F}:null);
return this;
}});
function c(H){
var E=RegExp("(^|\\.)"+H.type+"(\\.|$)"),G=true,F=[];
o.each(o.data(this,"events").live||[],function(I,J){
if(E.test(J.type)){
var K=o(H.target).closest(J.data)[0];
if(K){
F.push({elem:K,fn:J});
}
}
});
F.sort(function(J,I){
return o.data(J.elem,"closest")-o.data(I.elem,"closest");
});
o.each(F,function(){
if(this.fn.call(this.elem,H,this.fn.data)===false){
return (G=false);
}
});
return G;
};
function i(F,E){
return ["live",F,E.replace(/\./g,"`").replace(/ /g,"|")].join(".");
};
o.extend({isReady:false,readyList:[],ready:function(){
if(!o.isReady){
o.isReady=true;
if(o.readyList){
o.each(o.readyList,function(){
this.call(document,o);
});
o.readyList=null;
}
o(document).triggerHandler("ready");
}
}});
var x=false;
function B(){
if(x){
return;
}
x=true;
if(document.addEventListener){
document.addEventListener("DOMContentLoaded",function(){
document.removeEventListener("DOMContentLoaded",arguments.callee,false);
o.ready();
},false);
}else{
if(document.attachEvent){
document.attachEvent("onreadystatechange",function(){
if(document.readyState==="complete"){
document.detachEvent("onreadystatechange",arguments.callee);
o.ready();
}
});
if(document.documentElement.doScroll&&l==l.top){
(function(){
if(o.isReady){
return;
}
try{
document.documentElement.doScroll("left");
}
catch(E){
setTimeout(arguments.callee,0);
return;
}
o.ready();
})();
}
}
}
o.event.add(l,"load",o.ready);
};
o.each(("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error").split(","),function(F,E){
o.fn[E]=function(G){
return G?this.bind(E,G):this.trigger(E);
};
});
o(l).bind("unload",function(){
for(var E in o.cache){
if(E!=1&&o.cache[E].handle){
o.event.remove(o.cache[E].handle.elem);
}
}
});
(function(){
o.support={};
var F=document.documentElement,G=document.createElement("script"),K=document.createElement("div"),J="script"+(new Date).getTime();
K.style.display="none";
K.innerHTML="   <link/><table></table><a href=\"/a\" style=\"color:red;float:left;opacity:.5;\">a</a><select><option>text</option></select><object><param/></object>";
var H=K.getElementsByTagName("*"),E=K.getElementsByTagName("a")[0];
if(!H||!H.length||!E){
return;
}
o.support={leadingWhitespace:K.firstChild.nodeType==3,tbody:!K.getElementsByTagName("tbody").length,objectAll:!!K.getElementsByTagName("object")[0].getElementsByTagName("*").length,htmlSerialize:!!K.getElementsByTagName("link").length,style:/red/.test(E.getAttribute("style")),hrefNormalized:E.getAttribute("href")==="/a",opacity:E.style.opacity==="0.5",cssFloat:!!E.style.cssFloat,scriptEval:false,noCloneEvent:true,boxModel:null};
G.type="text/javascript";
try{
G.appendChild(document.createTextNode("window."+J+"=1;"));
}
catch(I){
}
F.insertBefore(G,F.firstChild);
if(l[J]){
o.support.scriptEval=true;
delete l[J];
}
F.removeChild(G);
if(K.attachEvent&&K.fireEvent){
K.attachEvent("onclick",function(){
o.support.noCloneEvent=false;
K.detachEvent("onclick",arguments.callee);
});
K.cloneNode(true).fireEvent("onclick");
}
o(function(){
var L=document.createElement("div");
L.style.width=L.style.paddingLeft="1px";
document.body.appendChild(L);
o.boxModel=o.support.boxModel=L.offsetWidth===2;
document.body.removeChild(L).style.display="none";
});
})();
var w=o.support.cssFloat?"cssFloat":"styleFloat";
o.props={"for":"htmlFor","class":"className","float":w,cssFloat:w,styleFloat:w,readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",tabindex:"tabIndex"};
o.fn.extend({_load:o.fn.load,load:function(G,J,K){
if(typeof G!=="string"){
return this._load(G);
}
var I=G.indexOf(" ");
if(I>=0){
var E=G.slice(I,G.length);
G=G.slice(0,I);
}
var H="GET";
if(J){
if(o.isFunction(J)){
K=J;
J=null;
}else{
if(typeof J==="object"){
J=o.param(J);
H="POST";
}
}
}
var F=this;
o.ajax({url:G,type:H,dataType:"html",data:J,complete:function(M,L){
if(L=="success"||L=="notmodified"){
F.html(E?o("<div/>").append(M.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(E):M.responseText);
}
if(K){
F.each(K,[M.responseText,L,M]);
}
}});
return this;
},serialize:function(){
return o.param(this.serializeArray());
},serializeArray:function(){
return this.map(function(){
return this.elements?o.makeArray(this.elements):this;
}).filter(function(){
return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password|search/i.test(this.type));
}).map(function(E,F){
var G=o(this).val();
return G==null?null:o.isArray(G)?o.map(G,function(I,H){
return {name:F.name,value:I};
}):{name:F.name,value:G};
}).get();
}});
o.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(E,F){
o.fn[F]=function(G){
return this.bind(F,G);
};
});
var r=e();
o.extend({get:function(E,G,H,F){
if(o.isFunction(G)){
H=G;
G=null;
}
return o.ajax({type:"GET",url:E,data:G,success:H,dataType:F});
},getScript:function(E,F){
return o.get(E,null,F,"script");
},getJSON:function(E,F,G){
return o.get(E,F,G,"json");
},post:function(E,G,H,F){
if(o.isFunction(G)){
H=G;
G={};
}
return o.ajax({type:"POST",url:E,data:G,success:H,dataType:F});
},ajaxSetup:function(E){
o.extend(o.ajaxSettings,E);
},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){
return l.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest();
},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},ajax:function(M){
M=o.extend(true,M,o.extend(true,{},o.ajaxSettings,M));
var W,F=/=\?(&|$)/g,R,V,G=M.type.toUpperCase();
if(M.data&&M.processData&&typeof M.data!=="string"){
M.data=o.param(M.data);
}
if(M.dataType=="jsonp"){
if(G=="GET"){
if(!M.url.match(F)){
M.url+=(M.url.match(/\?/)?"&":"?")+(M.jsonp||"callback")+"=?";
}
}else{
if(!M.data||!M.data.match(F)){
M.data=(M.data?M.data+"&":"")+(M.jsonp||"callback")+"=?";
}
}
M.dataType="json";
}
if(M.dataType=="json"&&(M.data&&M.data.match(F)||M.url.match(F))){
W="jsonp"+r++;
if(M.data){
M.data=(M.data+"").replace(F,"="+W+"$1");
}
M.url=M.url.replace(F,"="+W+"$1");
M.dataType="script";
l[W]=function(X){
V=X;
I();
L();
l[W]=g;
try{
delete l[W];
}
catch(Y){
}
if(H){
H.removeChild(T);
}
};
}
if(M.dataType=="script"&&M.cache==null){
M.cache=false;
}
if(M.cache===false&&G=="GET"){
var E=e();
var U=M.url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+E+"$2");
M.url=U+((U==M.url)?(M.url.match(/\?/)?"&":"?")+"_="+E:"");
}
if(M.data&&G=="GET"){
M.url+=(M.url.match(/\?/)?"&":"?")+M.data;
M.data=null;
}
if(M.global&&!o.active++){
o.event.trigger("ajaxStart");
}
var Q=/^(\w+:)?\/\/([^\/?#]+)/.exec(M.url);
if(M.dataType=="script"&&G=="GET"&&Q&&(Q[1]&&Q[1]!=location.protocol||Q[2]!=location.host)){
var H=document.getElementsByTagName("head")[0];
var T=document.createElement("script");
T.src=M.url;
if(M.scriptCharset){
T.charset=M.scriptCharset;
}
if(!W){
var O=false;
T.onload=T.onreadystatechange=function(){
if(!O&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){
O=true;
I();
L();
T.onload=T.onreadystatechange=null;
H.removeChild(T);
}
};
}
H.appendChild(T);
return g;
}
var K=false;
var J=M.xhr();
if(M.username){
J.open(G,M.url,M.async,M.username,M.password);
}else{
J.open(G,M.url,M.async);
}
try{
if(M.data){
J.setRequestHeader("Content-Type",M.contentType);
}
if(M.ifModified){
J.setRequestHeader("If-Modified-Since",o.lastModified[M.url]||"Thu, 01 Jan 1970 00:00:00 GMT");
}
J.setRequestHeader("X-Requested-With","XMLHttpRequest");
J.setRequestHeader("Accept",M.dataType&&M.accepts[M.dataType]?M.accepts[M.dataType]+", */*":M.accepts._default);
}
catch(S){
}
if(M.beforeSend&&M.beforeSend(J,M)===false){
if(M.global&&!--o.active){
o.event.trigger("ajaxStop");
}
J.abort();
return false;
}
if(M.global){
o.event.trigger("ajaxSend",[J,M]);
}
var N=function(X){
if(J.readyState==0){
if(P){
clearInterval(P);
P=null;
if(M.global&&!--o.active){
o.event.trigger("ajaxStop");
}
}
}else{
if(!K&&J&&(J.readyState==4||X=="timeout")){
K=true;
if(P){
clearInterval(P);
P=null;
}
R=X=="timeout"?"timeout":!o.httpSuccess(J)?"error":M.ifModified&&o.httpNotModified(J,M.url)?"notmodified":"success";
if(R=="success"){
try{
V=o.httpData(J,M.dataType,M);
}
catch(Z){
R="parsererror";
}
}
if(R=="success"){
var Y;
try{
Y=J.getResponseHeader("Last-Modified");
}
catch(Z){
}
if(M.ifModified&&Y){
o.lastModified[M.url]=Y;
}
if(!W){
I();
}
}else{
o.handleError(M,J,R);
}
L();
if(X){
J.abort();
}
if(M.async){
J=null;
}
}
}
};
if(M.async){
var P=setInterval(N,13);
if(M.timeout>0){
setTimeout(function(){
if(J&&!K){
N("timeout");
}
},M.timeout);
}
}
try{
J.send(M.data);
}
catch(S){
o.handleError(M,J,null,S);
}
if(!M.async){
N();
}
function I(){
if(M.success){
M.success(V,R);
}
if(M.global){
o.event.trigger("ajaxSuccess",[J,M]);
}
};
function L(){
if(M.complete){
M.complete(J,R);
}
if(M.global){
o.event.trigger("ajaxComplete",[J,M]);
}
if(M.global&&!--o.active){
o.event.trigger("ajaxStop");
}
};
return J;
},handleError:function(F,H,E,G){
if(F.error){
F.error(H,E,G);
}
if(F.global){
o.event.trigger("ajaxError",[H,F,G]);
}
},active:0,httpSuccess:function(F){
try{
return !F.status&&location.protocol=="file:"||(F.status>=200&&F.status<300)||F.status==304||F.status==1223;
}
catch(E){
}
return false;
},httpNotModified:function(G,E){
try{
var H=G.getResponseHeader("Last-Modified");
return G.status==304||H==o.lastModified[E];
}
catch(F){
}
return false;
},httpData:function(J,H,G){
var F=J.getResponseHeader("content-type"),E=H=="xml"||!H&&F&&F.indexOf("xml")>=0,I=E?J.responseXML:J.responseText;
if(E&&I.documentElement.tagName=="parsererror"){
throw "parsererror";
}
if(G&&G.dataFilter){
I=G.dataFilter(I,H);
}
if(typeof I==="string"){
if(H=="script"){
o.globalEval(I);
}
if(H=="json"){
I=l["eval"]("("+I+")");
}
}
return I;
},param:function(E){
var G=[];
function H(I,J){
G[G.length]=encodeURIComponent(I)+"="+encodeURIComponent(J);
};
if(o.isArray(E)||E.jquery){
o.each(E,function(){
H(this.name,this.value);
});
}else{
for(var F in E){
if(o.isArray(E[F])){
o.each(E[F],function(){
H(F,this);
});
}else{
H(F,o.isFunction(E[F])?E[F]():E[F]);
}
}
}
return G.join("&").replace(/%20/g,"+");
}});
var m={},n,d=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];
function t(F,E){
var G={};
o.each(d.concat.apply([],d.slice(0,E)),function(){
G[this]=F;
});
return G;
};
o.fn.extend({show:function(J,L){
if(J){
return this.animate(t("show",3),J,L);
}else{
for(var H=0,F=this.length;H<F;H++){
var E=o.data(this[H],"olddisplay");
this[H].style.display=E||"";
if(o.css(this[H],"display")==="none"){
var G=this[H].tagName,K;
if(m[G]){
K=m[G];
}else{
var I=o("<"+G+" />").appendTo("body");
K=I.css("display");
if(K==="none"){
K="block";
}
I.remove();
m[G]=K;
}
o.data(this[H],"olddisplay",K);
}
}
for(var H=0,F=this.length;H<F;H++){
this[H].style.display=o.data(this[H],"olddisplay")||"";
}
return this;
}
},hide:function(H,I){
if(H){
return this.animate(t("hide",3),H,I);
}else{
for(var G=0,F=this.length;G<F;G++){
var E=o.data(this[G],"olddisplay");
if(!E&&E!=="none"){
o.data(this[G],"olddisplay",o.css(this[G],"display"));
}
}
for(var G=0,F=this.length;G<F;G++){
this[G].style.display="none";
}
return this;
}
},_toggle:o.fn.toggle,toggle:function(G,F){
var E=typeof G==="boolean";
return o.isFunction(G)&&o.isFunction(F)?this._toggle.apply(this,arguments):G==null||E?this.each(function(){
var H=E?G:o(this).is(":hidden");
o(this)[H?"show":"hide"]();
}):this.animate(t("toggle",3),G,F);
},fadeTo:function(E,G,F){
return this.animate({opacity:G},E,F);
},animate:function(I,F,H,G){
var E=o.speed(F,H,G);
return this[E.queue===false?"each":"queue"](function(){
var K=o.extend({},E),M,L=this.nodeType==1&&o(this).is(":hidden"),J=this;
for(M in I){
if(I[M]=="hide"&&L||I[M]=="show"&&!L){
return K.complete.call(this);
}
if((M=="height"||M=="width")&&this.style){
K.display=o.css(this,"display");
K.overflow=this.style.overflow;
}
}
if(K.overflow!=null){
this.style.overflow="hidden";
}
K.curAnim=o.extend({},I);
o.each(I,function(O,S){
var R=new o.fx(J,K,O);
if(/toggle|show|hide/.test(S)){
R[S=="toggle"?L?"show":"hide":S](I);
}else{
var Q=S.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),T=R.cur(true)||0;
if(Q){
var N=parseFloat(Q[2]),P=Q[3]||"px";
if(P!="px"){
J.style[O]=(N||1)+P;
T=((N||1)/R.cur(true))*T;
J.style[O]=T+P;
}
if(Q[1]){
N=((Q[1]=="-="?-1:1)*N)+T;
}
R.custom(T,N,P);
}else{
R.custom(T,S,"");
}
}
});
return true;
});
},stop:function(F,E){
var G=o.timers;
if(F){
this.queue([]);
}
this.each(function(){
for(var H=G.length-1;H>=0;H--){
if(G[H].elem==this){
if(E){
G[H](true);
}
G.splice(H,1);
}
}
});
if(!E){
this.dequeue();
}
return this;
}});
o.each({slideDown:t("show",1),slideUp:t("hide",1),slideToggle:t("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(E,F){
o.fn[E]=function(G,H){
return this.animate(F,G,H);
};
});
o.extend({speed:function(G,H,F){
var E=typeof G==="object"?G:{complete:F||!F&&H||o.isFunction(G)&&G,duration:G,easing:F&&H||H&&!o.isFunction(H)&&H};
E.duration=o.fx.off?0:typeof E.duration==="number"?E.duration:o.fx.speeds[E.duration]||o.fx.speeds._default;
E.old=E.complete;
E.complete=function(){
if(E.queue!==false){
o(this).dequeue();
}
if(o.isFunction(E.old)){
E.old.call(this);
}
};
return E;
},easing:{linear:function(G,H,E,F){
return E+F*G;
},swing:function(G,H,E,F){
return ((-Math.cos(G*Math.PI)/2)+0.5)*F+E;
}},timers:[],fx:function(F,E,G){
this.options=E;
this.elem=F;
this.prop=G;
if(!E.orig){
E.orig={};
}
}});
o.fx.prototype={update:function(){
if(this.options.step){
this.options.step.call(this.elem,this.now,this);
}
(o.fx.step[this.prop]||o.fx.step._default)(this);
if((this.prop=="height"||this.prop=="width")&&this.elem.style){
this.elem.style.display="block";
}
},cur:function(F){
if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){
return this.elem[this.prop];
}
var E=parseFloat(o.css(this.elem,this.prop,F));
return E&&E>-10000?E:parseFloat(o.curCSS(this.elem,this.prop))||0;
},custom:function(I,H,G){
this.startTime=e();
this.start=I;
this.end=H;
this.unit=G||this.unit||"px";
this.now=this.start;
this.pos=this.state=0;
var E=this;
function F(J){
return E.step(J);
};
F.elem=this.elem;
if(F()&&o.timers.push(F)&&!n){
n=setInterval(function(){
var K=o.timers;
for(var J=0;J<K.length;J++){
if(!K[J]()){
K.splice(J--,1);
}
}
if(!K.length){
clearInterval(n);
n=g;
}
},13);
}
},show:function(){
this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);
this.options.show=true;
this.custom(this.prop=="width"||this.prop=="height"?1:0,this.cur());
o(this.elem).show();
},hide:function(){
this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);
this.options.hide=true;
this.custom(this.cur(),0);
},step:function(H){
var G=e();
if(H||G>=this.options.duration+this.startTime){
this.now=this.end;
this.pos=this.state=1;
this.update();
this.options.curAnim[this.prop]=true;
var E=true;
for(var F in this.options.curAnim){
if(this.options.curAnim[F]!==true){
E=false;
}
}
if(E){
if(this.options.display!=null){
this.elem.style.overflow=this.options.overflow;
this.elem.style.display=this.options.display;
if(o.css(this.elem,"display")=="none"){
this.elem.style.display="block";
}
}
if(this.options.hide){
o(this.elem).hide();
}
if(this.options.hide||this.options.show){
for(var I in this.options.curAnim){
o.attr(this.elem.style,I,this.options.orig[I]);
}
}
this.options.complete.call(this.elem);
}
return false;
}else{
var J=G-this.startTime;
this.state=J/this.options.duration;
this.pos=o.easing[this.options.easing||(o.easing.swing?"swing":"linear")](this.state,J,0,1,this.options.duration);
this.now=this.start+((this.end-this.start)*this.pos);
this.update();
}
return true;
}};
o.extend(o.fx,{speeds:{slow:600,fast:200,_default:400},step:{opacity:function(E){
o.attr(E.elem.style,"opacity",E.now);
},_default:function(E){
if(E.elem.style&&E.elem.style[E.prop]!=null){
E.elem.style[E.prop]=E.now+E.unit;
}else{
E.elem[E.prop]=E.now;
}
}}});
if(document.documentElement.getBoundingClientRect){
o.fn.offset=function(){
if(!this[0]){
return {top:0,left:0};
}
if(this[0]===this[0].ownerDocument.body){
return o.offset.bodyOffset(this[0]);
}
var G=this[0].getBoundingClientRect(),J=this[0].ownerDocument,F=J.body,E=J.documentElement,L=E.clientTop||F.clientTop||0,K=E.clientLeft||F.clientLeft||0,I=G.top+(self.pageYOffset||o.boxModel&&E.scrollTop||F.scrollTop)-L,H=G.left+(self.pageXOffset||o.boxModel&&E.scrollLeft||F.scrollLeft)-K;
return {top:I,left:H};
};
}else{
o.fn.offset=function(){
if(!this[0]){
return {top:0,left:0};
}
if(this[0]===this[0].ownerDocument.body){
return o.offset.bodyOffset(this[0]);
}
o.offset.initialized||o.offset.initialize();
var J=this[0],G=J.offsetParent,F=J,O=J.ownerDocument,M,H=O.documentElement,K=O.body,L=O.defaultView,E=L.getComputedStyle(J,null),N=J.offsetTop,I=J.offsetLeft;
while((J=J.parentNode)&&J!==K&&J!==H){
M=L.getComputedStyle(J,null);
N-=J.scrollTop,I-=J.scrollLeft;
if(J===G){
N+=J.offsetTop,I+=J.offsetLeft;
if(o.offset.doesNotAddBorder&&!(o.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(J.tagName))){
N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0;
}
F=G,G=J.offsetParent;
}
if(o.offset.subtractsBorderForOverflowNotVisible&&M.overflow!=="visible"){
N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0;
}
E=M;
}
if(E.position==="relative"||E.position==="static"){
N+=K.offsetTop,I+=K.offsetLeft;
}
if(E.position==="fixed"){
N+=Math.max(H.scrollTop,K.scrollTop),I+=Math.max(H.scrollLeft,K.scrollLeft);
}
return {top:N,left:I};
};
}
o.offset={initialize:function(){
if(this.initialized){
return;
}
var L=document.body,F=document.createElement("div"),H,G,N,I,M,E,J=L.style.marginTop,K="<div style=\"position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;\"><div></div></div><table style=\"position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;\" cellpadding=\"0\" cellspacing=\"0\"><tr><td></td></tr></table>";
M={position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"};
for(E in M){
F.style[E]=M[E];
}
F.innerHTML=K;
L.insertBefore(F,L.firstChild);
H=F.firstChild,G=H.firstChild,I=H.nextSibling.firstChild.firstChild;
this.doesNotAddBorder=(G.offsetTop!==5);
this.doesAddBorderForTableAndCells=(I.offsetTop===5);
H.style.overflow="hidden",H.style.position="relative";
this.subtractsBorderForOverflowNotVisible=(G.offsetTop===-5);
L.style.marginTop="1px";
this.doesNotIncludeMarginInBodyOffset=(L.offsetTop===0);
L.style.marginTop=J;
L.removeChild(F);
this.initialized=true;
},bodyOffset:function(E){
o.offset.initialized||o.offset.initialize();
var G=E.offsetTop,F=E.offsetLeft;
if(o.offset.doesNotIncludeMarginInBodyOffset){
G+=parseInt(o.curCSS(E,"marginTop",true),10)||0,F+=parseInt(o.curCSS(E,"marginLeft",true),10)||0;
}
return {top:G,left:F};
}};
o.fn.extend({position:function(){
var I=0,H=0,F;
if(this[0]){
var G=this.offsetParent(),J=this.offset(),E=/^body|html$/i.test(G[0].tagName)?{top:0,left:0}:G.offset();
J.top-=j(this,"marginTop");
J.left-=j(this,"marginLeft");
E.top+=j(G,"borderTopWidth");
E.left+=j(G,"borderLeftWidth");
F={top:J.top-E.top,left:J.left-E.left};
}
return F;
},offsetParent:function(){
var E=this[0].offsetParent||document.body;
while(E&&(!/^body|html$/i.test(E.tagName)&&o.css(E,"position")=="static")){
E=E.offsetParent;
}
return o(E);
}});
o.each(["Left","Top"],function(F,E){
var G="scroll"+E;
o.fn[G]=function(H){
if(!this[0]){
return null;
}
return H!==g?this.each(function(){
this==l||this==document?l.scrollTo(!F?H:o(l).scrollLeft(),F?H:o(l).scrollTop()):this[G]=H;
}):this[0]==l||this[0]==document?self[F?"pageYOffset":"pageXOffset"]||o.boxModel&&document.documentElement[G]||document.body[G]:this[0][G];
};
});
o.each(["Height","Width"],function(I,G){
var E=I?"Left":"Top",H=I?"Right":"Bottom",F=G.toLowerCase();
o.fn["inner"+G]=function(){
return this[0]?o.css(this[0],F,false,"padding"):null;
};
o.fn["outer"+G]=function(K){
return this[0]?o.css(this[0],F,false,K?"margin":"border"):null;
};
var J=G.toLowerCase();
o.fn[J]=function(K){
return this[0]==l?document.compatMode=="CSS1Compat"&&document.documentElement["client"+G]||document.body["client"+G]:this[0]==document?Math.max(document.documentElement["client"+G],document.body["scroll"+G],document.documentElement["scroll"+G],document.body["offset"+G],document.documentElement["offset"+G]):K===g?(this.length?o.css(this[0],J):null):this.css(J,typeof K==="string"?K:K+"px");
};
});
})();
;
include.set_path('resources');
eval(function(p,a,c,k,e,r){
e=function(c){
return (c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36));
};
if(!"".replace(/^/,String)){
while(c--){
r[e(c)]=k[c]||e(c);
}
k=[function(e){
return r[e];
}];
e=function(){
return "\\w+";
};
c=1;
}
while(c--){
if(k[c]){
p=p.replace(new RegExp("\\b"+e(c)+"\\b","g"),k[c]);
}
}
return p;
}(";(5($){$.r={Q:\"G\",1f:\"1.0.2\",M:{z:\"H\",9:\"\",D:\"X\",E:O}};$.8.K({r:5(d,e){6(d&&S(d)!=\"T\"){e=d;d=U}3 f=$.K({},$.r.M,e);3 g={};4.v(5(i){3 a=(!d||d==\"\")?$(4):$(4).V(d);3 b=f.z==\"Z\"?\"\"+I.15():(f.9==\"\"?a.P():a.9(f.9));3 c=$(4).L();6(!g[c])g[c]={s:[],n:[]};6(a.7>0)g[c].s.q({s:b,e:$(4),n:i});W g[c].n.q({e:$(4),n:i})});w(3 h J g){3 j=g[h];j.s.16(5 18(a,b){3 x=a.s.t?a.s.t():a.s;3 y=b.s.t?b.s.t():b.s;6(B(a.s)&&B(b.s)){x=F(a.s);y=F(b.s)}u(f.z==\"H\"?1:-1)*(x<y?-1:(x>y?1:0))})}3 k=[];w(3 h J g){3 j=g[h];3 l=[];3 m=$(4).7;Y(f.D){A\"10\":$.v(j.s,5(i,a){m=I.11(m,a.n)});C;A\"12\":$.v(j.s,5(i,a){l.q(a.n)});C;A\"13\":m=j.n.7;C;14:m=0}3 n=[0,0];w(3 i=0;i<$(4).7;i++){3 o=i>=m&&i<m+j.s.7;6(N(l,i))o=17;3 p=(o?j.s:j.n)[n[o?0:1]].e;p.L().19(p);6(o||!f.E)k.q(p.1a(0));n[o?0:1]++}}u 4.1b(k)}});5 B(n){u/^[\\+-]?\\d*\\.?\\d*$/.1c(n)};5 N(a,n){3 b=O;$.v(a,5(i,m){6(!b)b=m==n});u b};$.8.G=$.8.1d=$.8.1e=$.8.r})(R);",62,78,"|||var|this|function|if|length|fn|attr|||||||||||||||||push|tinysort||toLowerCase|return|each|for|||order|case|isNum|break|place|returns|parseFloat|TinySort|asc|Math|in|extend|parent|defaults|contains|false|text|id|jQuery|typeof|string|null|find|else|start|switch|rand|first|min|org|end|default|random|sort|true|zeSort|append|get|setArray|exec|Tinysort|tsort|version".split("|"),0,{}));
;
include.set_path('resources');
(function(_1){
var _2=null;
_1.fn.autogrow=function(o){
return this.each(function(){
new _1.autogrow(this,o);
});
};
_1.autogrow=function(e,o){
this.options=o||{};
this.dummy=null;
this.interval=null;
this.line_height=this.options.lineHeight||parseInt(_1(e).css("line-height"));
this.min_height=this.options.minHeight||parseInt(_1(e).css("min-height"));
this.max_height=this.options.maxHeight||parseInt(_1(e).css("max-height"));
this.textarea=_1(e);
if(this.line_height==NaN){
this.line_height=0;
}
this.init();
};
_1.autogrow.fn=_1.autogrow.prototype={autogrow:"1.2.2"};
_1.autogrow.fn.extend=_1.autogrow.extend=_1.extend;
_1.autogrow.fn.extend({init:function(){
var _6=this;
this.textarea.css({overflow:"hidden",display:"block"});
this.textarea.bind("focus",function(){
_6.startExpand();
}).bind("blur",function(){
_6.stopExpand();
});
this.checkExpand();
},startExpand:function(){
var _7=this;
this.interval=window.setInterval(function(){
_7.checkExpand();
},400);
},stopExpand:function(){
clearInterval(this.interval);
},checkExpand:function(){
if(this.dummy==null){
this.dummy=_1("<div></div>");
this.dummy.css({"font-size":this.textarea.css("font-size"),"font-family":this.textarea.css("font-family"),"width":this.textarea.css("width"),"padding":this.textarea.css("padding"),"line-height":this.line_height+"px","overflow-x":"hidden","position":"absolute","top":0,"left":-9999}).appendTo("body");
}
var _8=this.textarea.val().replace(/(<|>)/g,"");
if($.browser.msie){
_8=_8.replace(/\n/g,"<BR>new");
}else{
_8=_8.replace(/\n/g,"<br>new");
}
if(this.dummy.html()!=_8){
this.dummy.html(_8);
if(this.max_height>0&&(this.dummy.height()+this.line_height>this.max_height)){
this.textarea.css("overflow-y","auto");
}else{
this.textarea.css("overflow-y","hidden");
if(this.textarea.height()<this.dummy.height()+this.line_height||(this.dummy.height()<this.textarea.height())){
this.textarea.animate({height:(this.dummy.height()+this.line_height)+"px"},100);
}
}
}
}});
})(jQuery);
;
include.set_path('resources');
jQuery.easing["jswing"]=jQuery.easing["swing"];
jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(x,t,b,c,d){
return jQuery.easing[jQuery.easing.def](x,t,b,c,d);
},easeInQuad:function(x,t,b,c,d){
return c*(t/=d)*t+b;
},easeOutQuad:function(x,t,b,c,d){
return -c*(t/=d)*(t-2)+b;
},easeInOutQuad:function(x,t,b,c,d){
if((t/=d/2)<1){
return c/2*t*t+b;
}
return -c/2*((--t)*(t-2)-1)+b;
},easeInCubic:function(x,t,b,c,d){
return c*(t/=d)*t*t+b;
},easeOutCubic:function(x,t,b,c,d){
return c*((t=t/d-1)*t*t+1)+b;
},easeInOutCubic:function(x,t,b,c,d){
if((t/=d/2)<1){
return c/2*t*t*t+b;
}
return c/2*((t-=2)*t*t+2)+b;
},easeInQuart:function(x,t,b,c,d){
return c*(t/=d)*t*t*t+b;
},easeOutQuart:function(x,t,b,c,d){
return -c*((t=t/d-1)*t*t*t-1)+b;
},easeInOutQuart:function(x,t,b,c,d){
if((t/=d/2)<1){
return c/2*t*t*t*t+b;
}
return -c/2*((t-=2)*t*t*t-2)+b;
},easeInQuint:function(x,t,b,c,d){
return c*(t/=d)*t*t*t*t+b;
},easeOutQuint:function(x,t,b,c,d){
return c*((t=t/d-1)*t*t*t*t+1)+b;
},easeInOutQuint:function(x,t,b,c,d){
if((t/=d/2)<1){
return c/2*t*t*t*t*t+b;
}
return c/2*((t-=2)*t*t*t*t+2)+b;
},easeInSine:function(x,t,b,c,d){
return -c*Math.cos(t/d*(Math.PI/2))+c+b;
},easeOutSine:function(x,t,b,c,d){
return c*Math.sin(t/d*(Math.PI/2))+b;
},easeInOutSine:function(x,t,b,c,d){
return -c/2*(Math.cos(Math.PI*t/d)-1)+b;
},easeInExpo:function(x,t,b,c,d){
return (t==0)?b:c*Math.pow(2,10*(t/d-1))+b;
},easeOutExpo:function(x,t,b,c,d){
return (t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b;
},easeInOutExpo:function(x,t,b,c,d){
if(t==0){
return b;
}
if(t==d){
return b+c;
}
if((t/=d/2)<1){
return c/2*Math.pow(2,10*(t-1))+b;
}
return c/2*(-Math.pow(2,-10*--t)+2)+b;
},easeInCirc:function(x,t,b,c,d){
return -c*(Math.sqrt(1-(t/=d)*t)-1)+b;
},easeOutCirc:function(x,t,b,c,d){
return c*Math.sqrt(1-(t=t/d-1)*t)+b;
},easeInOutCirc:function(x,t,b,c,d){
if((t/=d/2)<1){
return -c/2*(Math.sqrt(1-t*t)-1)+b;
}
return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b;
},easeInElastic:function(x,t,b,c,d){
var s=1.70158;
var p=0;
var a=c;
if(t==0){
return b;
}
if((t/=d)==1){
return b+c;
}
if(!p){
p=d*0.3;
}
if(a<Math.abs(c)){
a=c;
var s=p/4;
}else{
var s=p/(2*Math.PI)*Math.asin(c/a);
}
return -(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;
},easeOutElastic:function(x,t,b,c,d){
var s=1.70158;
var p=0;
var a=c;
if(t==0){
return b;
}
if((t/=d)==1){
return b+c;
}
if(!p){
p=d*0.3;
}
if(a<Math.abs(c)){
a=c;
var s=p/4;
}else{
var s=p/(2*Math.PI)*Math.asin(c/a);
}
return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b;
},easeInOutElastic:function(x,t,b,c,d){
var s=1.70158;
var p=0;
var a=c;
if(t==0){
return b;
}
if((t/=d/2)==2){
return b+c;
}
if(!p){
p=d*(0.3*1.5);
}
if(a<Math.abs(c)){
a=c;
var s=p/4;
}else{
var s=p/(2*Math.PI)*Math.asin(c/a);
}
if(t<1){
return -0.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;
}
return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*0.5+c+b;
},easeInBack:function(x,t,b,c,d,s){
if(s==undefined){
s=1.70158;
}
return c*(t/=d)*t*((s+1)*t-s)+b;
},easeOutBack:function(x,t,b,c,d,s){
if(s==undefined){
s=1.70158;
}
return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;
},easeInOutBack:function(x,t,b,c,d,s){
if(s==undefined){
s=1.70158;
}
if((t/=d/2)<1){
return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;
}
return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b;
},easeInBounce:function(x,t,b,c,d){
return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b;
},easeOutBounce:function(x,t,b,c,d){
if((t/=d)<(1/2.75)){
return c*(7.5625*t*t)+b;
}else{
if(t<(2/2.75)){
return c*(7.5625*(t-=(1.5/2.75))*t+0.75)+b;
}else{
if(t<(2.5/2.75)){
return c*(7.5625*(t-=(2.25/2.75))*t+0.9375)+b;
}else{
return c*(7.5625*(t-=(2.625/2.75))*t+0.984375)+b;
}
}
}
},easeInOutBounce:function(x,t,b,c,d){
if(t<d/2){
return jQuery.easing.easeInBounce(x,t*2,0,c,d)*0.5+b;
}
return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*0.5+c*0.5+b;
}});
;
include.set_path('resources');
(function($){
var _2=$.scrollTo=function(_3,_4,_5){
$(window).scrollTo(_3,_4,_5);
};
_2.defaults={axis:"xy",duration:parseFloat($.fn.jquery)>=1.3?0:1};
_2.window=function(_6){
return $(window).scrollable();
};
$.fn.scrollable=function(){
return this.map(function(){
var _7=this,_8=!_7.nodeName||$.inArray(_7.nodeName.toLowerCase(),["iframe","#document","html","body"])!=-1;
if(!_8){
return _7;
}
var _9=(_7.contentWindow||_7).document||_7.ownerDocument||_7;
return $.browser.safari||_9.compatMode=="BackCompat"?_9.body:_9.documentElement;
});
};
$.fn.scrollTo=function(_a,_b,_c){
if(typeof _b=="object"){
_c=_b;
_b=0;
}
if(typeof _c=="function"){
_c={onAfter:_c};
}
if(_a=="max"){
_a=9000000000;
}
_c=$.extend({},_2.defaults,_c);
_b=_b||_c.speed||_c.duration;
_c.queue=_c.queue&&_c.axis.length>1;
if(_c.queue){
_b/=2;
}
_c.offset=_d(_c.offset);
_c.over=_d(_c.over);
return this.scrollable().each(function(){
var _e=this,_f=$(_e),_10=_a,_11,_12={},win=_f.is("html,body");
switch(typeof _10){
case "number":
case "string":
if(/^([+-]=)?\d+(\.\d+)?(px)?$/.test(_10)){
_10=_d(_10);
break;
}
_10=$(_10,this);
case "object":
if(_10.is||_10.style){
_11=(_10=$(_10)).offset();
}
}
$.each(_c.axis.split(""),function(i,_15){
var Pos=_15=="x"?"Left":"Top",pos=Pos.toLowerCase(),key="scroll"+Pos,old=_e[key],Dim=_15=="x"?"Width":"Height";
if(_11){
_12[key]=_11[pos]+(win?0:old-_f.offset()[pos]);
if(_c.margin){
_12[key]-=parseInt(_10.css("margin"+Pos))||0;
_12[key]-=parseInt(_10.css("border"+Pos+"Width"))||0;
}
_12[key]+=_c.offset[pos]||0;
if(_c.over[pos]){
_12[key]+=_10[Dim.toLowerCase()]()*_c.over[pos];
}
}else{
_12[key]=_10[pos];
}
if(/^\d+$/.test(_12[key])){
_12[key]=_12[key]<=0?0:Math.min(_12[key],max(Dim));
}
if(!i&&_c.queue){
if(old!=_12[key]){
_1c(_c.onAfterFirst);
}
delete _12[key];
}
});
_1c(_c.onAfter);
function _1c(_1d){
_f.animate(_12,_b,_c.easing,_1d&&function(){
_1d.call(this,_a,_c);
});
};
function max(Dim){
var _1f="scroll"+Dim;
if(!win){
return _e[_1f];
}
var _20="client"+Dim,_21=_e.ownerDocument.documentElement,_22=_e.ownerDocument.body;
return Math.max(_21[_1f],_22[_1f])-Math.min(_21[_20],_22[_20]);
};
}).end();
};
function _d(val){
return typeof val=="object"?val:{top:val,left:val};
};
})(jQuery);
;
include.set_path('resources');
(function($){
$.fn.editable=function(_2,_3){
if("disable"==_2){
$(this).data("disabled.editable",true);
return;
}
if("enable"==_2){
$(this).data("disabled.editable",false);
return;
}
if("destroy"==_2){
$(this).unbind($(this).data("event.editable")).removeData("disabled.editable").removeData("event.editable");
return;
}
var _4={target:_2,name:"value",id:"id",type:"text",width:"auto",height:"auto",event:"click",onblur:"cancel",loadtype:"GET",loadtext:"Loading...",placeholder:"Click to edit",loaddata:{},submitdata:{},ajaxoptions:{}};
if(_3){
$.extend(_4,_3);
}
var _5=$.editable.types[_4.type].plugin||function(){
};
var _6=$.editable.types[_4.type].submit||function(){
};
var _7=$.editable.types[_4.type].buttons||$.editable.types["defaults"].buttons;
var _8=$.editable.types[_4.type].content||$.editable.types["defaults"].content;
var _9=$.editable.types[_4.type].element||$.editable.types["defaults"].element;
var _a=$.editable.types[_4.type].reset||$.editable.types["defaults"].reset;
var _b=_4.callback||function(){
};
var _c=_4.onedit||function(){
};
var _d=_4.onsubmit||function(){
};
var _e=_4.onreset||function(){
};
var _f=_4.onerror||_a;
if(_4.tooltip){
$(this).attr("title",_4.tooltip);
}
_4.autowidth="auto"==_4.width;
_4.autoheight="auto"==_4.height;
return this.each(function(){
var _10=this;
var _11=$(_10).width();
var _12=$(_10).height();
$(this).data("event.editable",_4.event);
if(!$.trim($(this).html())){
$(this).html(_4.placeholder);
}
$(this).bind(_4.event,function(e){
if(true===$(this).data("disabled.editable")){
return;
}
if(_10.editing){
return;
}
if(false===_c.apply(this,[_4,_10])){
return;
}
if(_4.tooltip){
$(_10).removeAttr("title");
}
if(0==$(_10).width()){
_4.width=_11;
_4.height=_12;
}else{
if(_4.width!="none"){
_4.width=_4.autowidth?$(_10).width():_4.width;
}
if(_4.height!="none"){
_4.height=_4.autoheight?$(_10).height():_4.height;
}
}
if($(this).html().toLowerCase().replace(/(;|")/g,"")==_4.placeholder.toLowerCase().replace(/(;|")/g,"")){
$(this).html("");
}
_10.editing=true;
_10.revert=$(_10).html();
$(_10).html("");
var _14=$("<form />");
if(_4.cssclass){
if("inherit"==_4.cssclass){
_14.attr("class",$(_10).attr("class"));
}else{
_14.attr("class",_4.cssclass);
}
}
if(_4.style){
if("inherit"==_4.style){
_14.attr("style",$(_10).attr("style"));
_14.css("display",$(_10).css("display"));
}else{
_14.attr("style",_4.style);
}
}
var _15=_9.apply(_14,[_4,_10]);
var _16;
if(_4.loadurl){
var t=setTimeout(function(){
_15.disabled=true;
_8.apply(_14,[_4.loadtext,_4,_10]);
},100);
var _18={};
_18[_4.id]=_10.id;
if($.isFunction(_4.loaddata)){
$.extend(_18,_4.loaddata.apply(_10,[_10.revert,_4]));
}else{
$.extend(_18,_4.loaddata);
}
$.ajax({type:_4.loadtype,url:_4.loadurl,data:_18,async:false,success:function(_19){
window.clearTimeout(t);
_16=_19;
_15.disabled=false;
}});
}else{
if(_4.data){
_16=_4.data;
if($.isFunction(_4.data)){
_16=_4.data.apply(_10,[_10.revert,_4]);
}
}else{
_16=_10.revert;
}
}
_8.apply(_14,[_16,_4,_10]);
_15.attr("name",_4.name);
_7.apply(_14,[_4,_10]);
$(_10).append(_14);
_5.apply(_14,[_4,_10]);
$(":input:visible:enabled:first",_14).focus();
if(_4.select){
_15.select();
}
_15.keydown(function(e){
if(e.keyCode==27){
e.preventDefault();
_a.apply(_14,[_4,_10]);
}
});
var t;
if("cancel"==_4.onblur){
_15.blur(function(e){
t=setTimeout(function(){
_a.apply(_14,[_4,_10]);
},500);
});
}else{
if("submit"==_4.onblur){
_15.blur(function(e){
t=setTimeout(function(){
_14.submit();
},200);
});
}else{
if($.isFunction(_4.onblur)){
_15.blur(function(e){
_4.onblur.apply(_10,[_15.val(),_4]);
});
}else{
_15.blur(function(e){
});
}
}
}
_14.submit(function(e){
if(t){
clearTimeout(t);
}
e.preventDefault();
if(false!==_d.apply(_14,[_4,_10])){
if(false!==_6.apply(_14,[_4,_10])){
if($.isFunction(_4.target)){
var str=_4.target.apply(_10,[_15.val(),_4]);
$(_10).html(str);
_10.editing=false;
_b.apply(_10,[_10.innerHTML,_4]);
if(!$.trim($(_10).html())){
$(_10).html(_4.placeholder);
}
}else{
var _21={};
_21[_4.name]=_15.val();
_21[_4.id]=_10.id;
if($.isFunction(_4.submitdata)){
$.extend(_21,_4.submitdata.apply(_10,[_10.revert,_4]));
}else{
$.extend(_21,_4.submitdata);
}
if("PUT"==_4.method){
_21["_method"]="put";
}
$(_10).html(_4.indicator);
var _22={type:"POST",data:_21,url:_4.target,success:function(_23,_24){
$(_10).html(_23);
_10.editing=false;
_b.apply(_10,[_10.innerHTML,_4]);
if(!$.trim($(_10).html())){
$(_10).html(_4.placeholder);
}
},error:function(xhr,_26,_27){
_f.apply(_14,[_4,_10,xhr]);
}};
$.extend(_22,_4.ajaxoptions);
$.ajax(_22);
}
}
}
$(_10).attr("title",_4.tooltip);
return false;
});
});
this.reset=function(_28){
if(this.editing){
if(false!==_e.apply(_28,[_4,_10])){
$(_10).html(_10.revert);
_10.editing=false;
if(!$.trim($(_10).html())){
$(_10).html(_4.placeholder);
}
if(_4.tooltip){
$(_10).attr("title",_4.tooltip);
}
}
}
};
});
};
$.editable={types:{defaults:{element:function(_29,_2a){
var _2b=$("<input type=\"hidden\"></input>");
$(this).append(_2b);
return (_2b);
},content:function(_2c,_2d,_2e){
$(":input:first",this).val(_2c);
},reset:function(_2f,_30){
_30.reset(this);
},buttons:function(_31,_32){
var _33=this;
if(_31.submit){
if(_31.submit.match(/>$/)){
var _34=$(_31.submit).click(function(){
if(_34.attr("type")!="submit"){
_33.submit();
}
});
}else{
var _34=$("<button type=\"submit\" />");
_34.html(_31.submit);
}
$(this).append(_34);
}
if(_31.cancel){
if(_31.cancel.match(/>$/)){
var _35=$(_31.cancel);
}else{
var _35=$("<button type=\"cancel\" />");
_35.html(_31.cancel);
}
$(this).append(_35);
$(_35).click(function(_36){
if($.isFunction($.editable.types[_31.type].reset)){
var _37=$.editable.types[_31.type].reset;
}else{
var _37=$.editable.types["defaults"].reset;
}
_37.apply(_33,[_31,_32]);
return false;
});
}
}},text:{element:function(_38,_39){
var _3a=$("<input />");
if(_38.width!="none"){
_3a.width(_38.width);
}
if(_38.height!="none"){
_3a.height(_38.height);
}
_3a.attr("autocomplete","off");
$(this).append(_3a);
return (_3a);
}},textarea:{element:function(_3b,_3c){
var _3d=$("<textarea />");
if(_3b.rows){
_3d.attr("rows",_3b.rows);
}else{
if(_3b.height!="none"){
_3d.height(_3b.height);
}
}
if(_3b.cols){
_3d.attr("cols",_3b.cols);
}else{
if(_3b.width!="none"){
_3d.width(_3b.width);
}
}
$(this).append(_3d);
return (_3d);
}},select:{element:function(_3e,_3f){
var _40=$("<select />");
$(this).append(_40);
return (_40);
},content:function(_41,_42,_43){
if(String==_41.constructor){
eval("var json = "+_41);
}else{
var _44=_41;
}
for(var key in _44){
if(!_44.hasOwnProperty(key)){
continue;
}
if("selected"==key){
continue;
}
var _46=$("<option />").val(key).append(_44[key]);
$("select",this).append(_46);
}
$("select",this).children().each(function(){
if($(this).val()==_44["selected"]||$(this).text()==_43.revert){
$(this).attr("selected","selected");
}
});
}}},addInputType:function(_47,_48){
$.editable.types[_47]=_48;
}};
})(jQuery);
;
include.set_path('resources');
﻿(function($){
$.fn.hoverIntent=function(f,g){
var _4={sensitivity:7,interval:100,timeout:0};
_4=$.extend(_4,g?{over:f,out:g}:f);
var cX,cY,pX,pY;
var _9=function(ev){
cX=ev.pageX;
cY=ev.pageY;
};
var _b=function(ev,ob){
ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);
if((Math.abs(pX-cX)+Math.abs(pY-cY))<_4.sensitivity){
$(ob).unbind("mousemove",_9);
ob.hoverIntent_s=1;
return _4.over.apply(ob,[ev]);
}else{
pX=cX;
pY=cY;
ob.hoverIntent_t=setTimeout(function(){
_b(ev,ob);
},_4.interval);
}
};
var _e=function(ev,ob){
ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);
ob.hoverIntent_s=0;
return _4.out.apply(ob,[ev]);
};
var _11=function(e){
var p=(e.type=="mouseover"?e.fromElement:e.toElement)||e.relatedTarget;
while(p&&p!=this){
try{
p=p.parentNode;
}
catch(e){
p=this;
}
}
if(p==this){
return false;
}
var ev=jQuery.extend({},e);
var ob=this;
if(ob.hoverIntent_t){
ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);
}
if(e.type=="mouseover"){
pX=ev.pageX;
pY=ev.pageY;
$(ob).bind("mousemove",_9);
if(ob.hoverIntent_s!=1){
ob.hoverIntent_t=setTimeout(function(){
_b(ev,ob);
},_4.interval);
}
}else{
$(ob).unbind("mousemove",_9);
if(ob.hoverIntent_s==1){
ob.hoverIntent_t=setTimeout(function(){
_e(ev,ob);
},_4.timeout);
}
}
};
return this.mouseover(_11).mouseout(_11);
};
})(jQuery);
;
include.set_path('resources/jquery-autocomplete');
(function($){
$.fn.extend({autocomplete:function(_2,_3){
var _4=typeof _2=="string";
_3=$.extend({},$.Autocompleter.defaults,{url:_4?_2:null,data:_4?null:_2,delay:_4?$.Autocompleter.defaults.delay:10,max:_3&&!_3.scroll?10:150,fixed:_3&&_3.fixed?true:false},_3);
_3.highlight=_3.highlight||function(_5){
return _5;
};
_3.formatMatch=_3.formatMatch||_3.formatItem;
return this.each(function(){
new $.Autocompleter(this,_3);
});
},result:function(_6){
return this.bind("result",_6);
},search:function(_7){
return this.trigger("search",[_7]);
},flushCache:function(){
return this.trigger("flushCache");
},setOptions:function(_8){
return this.trigger("setOptions",[_8]);
},unautocomplete:function(){
return this.trigger("unautocomplete");
}});
$.Autocompleter=function(_9,_a){
var _b={UP:38,DOWN:40,DEL:46,TAB:9,RETURN:13,ESC:27,COMMA:188,PAGEUP:33,PAGEDOWN:34,BACKSPACE:8};
var _c=$(_9).attr("autocomplete","off").addClass(_a.inputClass);
var _d;
var _e="";
var _f=$.Autocompleter.Cache(_a);
var _10=0;
var _11;
var _12={mouseDownOnSelect:false};
var _13=$.Autocompleter.Select(_a,_9,_14,_12);
var _15;
$.browser.opera&&$(_9.form).bind("submit.autocomplete",function(){
if(_15){
_15=false;
return false;
}
});
_c.bind(($.browser.opera?"keypress":"keydown")+".autocomplete",function(_16){
_11=_16.keyCode;
switch(_16.keyCode){
case _b.UP:
_16.preventDefault();
if(_13.visible()){
_13.prev();
}else{
_17(0,true);
}
break;
case _b.DOWN:
_16.preventDefault();
if(_13.visible()){
_13.next();
}else{
_17(0,true);
}
break;
case _b.PAGEUP:
_16.preventDefault();
if(_13.visible()){
_13.pageUp();
}else{
_17(0,true);
}
break;
case _b.PAGEDOWN:
_16.preventDefault();
if(_13.visible()){
_13.pageDown();
}else{
_17(0,true);
}
break;
case _a.multiple&&$.trim(_a.multipleSeparator)==","&&_b.COMMA:
case _b.TAB:
case _b.RETURN:
if(_14()){
_16.preventDefault();
_15=true;
return false;
}
break;
case _b.ESC:
_13.hide();
break;
default:
clearTimeout(_d);
_d=setTimeout(_17,_a.delay);
break;
}
}).focus(function(){
_10++;
}).blur(function(){
_10=0;
if(!_12.mouseDownOnSelect){
_18();
}
}).click(function(){
if(_10++>1&&!_13.visible()){
_17(0,true);
}
}).bind("search",function(){
var fn=(arguments.length>1)?arguments[1]:null;
function _1a(q,_1c){
var _1d;
if(_1c&&_1c.length){
for(var i=0;i<_1c.length;i++){
if(_1c[i].result.toLowerCase()==q.toLowerCase()){
_1d=_1c[i];
break;
}
}
}
if(typeof fn=="function"){
fn(_1d);
}else{
_c.trigger("result",_1d&&[_1d.data,_1d.value]);
}
};
$.each(trimWords(_c.val()),function(i,_20){
_21(_20,_1a,_1a);
});
}).bind("flushCache",function(){
_f.flush();
}).bind("setOptions",function(){
$.extend(_a,arguments[1]);
if("data" in arguments[1]){
_f.populate();
}
}).bind("unautocomplete",function(){
_13.unbind();
_c.unbind();
$(_9.form).unbind(".autocomplete");
});
function _14(){
var _22=_13.selected();
if(!_22){
return false;
}
var v=_22.result;
_e=v;
if(_a.multiple){
var _24=_25(_c.val());
if(_24.length>1){
v=_24.slice(0,_24.length-1).join(_a.multipleSeparator)+_a.multipleSeparator+v;
}
v+=_a.multipleSeparator;
}
_c.val(v);
_26();
_c.trigger("result",[_22.data,_22.value]);
return true;
};
function _17(_27,_28){
if(_11==_b.DEL){
_13.hide();
return;
}
var _29=_c.val();
if(!_28&&_29==_e){
return;
}
_e=_29;
_29=_2a(_29);
if(_29.length>=_a.minChars){
_c.addClass(_a.loadingClass);
if(!_a.matchCase){
_29=_29.toLowerCase();
}
_21(_29,_2b,_26);
}else{
_2c();
_13.hide();
}
};
function _25(_2d){
if(!_2d){
return [""];
}
var _2e=_2d.split(_a.multipleSeparator);
var _2f=[];
$.each(_2e,function(i,_31){
if($.trim(_31)){
_2f[i]=$.trim(_31);
}
});
return _2f;
};
function _2a(_32){
if(!_a.multiple){
return _32;
}
var _33=_25(_32);
return _33[_33.length-1];
};
function _34(q,_36){
if(_a.autoFill&&(_2a(_c.val()).toLowerCase()==q.toLowerCase())&&_11!=_b.BACKSPACE){
_c.val(_c.val()+_36.substring(_2a(_e).length));
$.Autocompleter.Selection(_9,_e.length,_e.length+_36.length);
}
};
function _18(){
clearTimeout(_d);
_d=setTimeout(_26,200);
};
function _26(){
var _37=_13.visible();
_13.hide();
clearTimeout(_d);
_2c();
if(_a.mustMatch){
_c.search(function(_38){
if(!_38){
if(_a.multiple){
var _39=_25(_c.val()).slice(0,-1);
_c.val(_39.join(_a.multipleSeparator)+(_39.length?_a.multipleSeparator:""));
}else{
_c.val("");
}
}
});
}
if(_37){
$.Autocompleter.Selection(_9,_9.value.length,_9.value.length);
}
};
function _2b(q,_3b){
if(_3b&&_3b.length&&_10){
_2c();
_13.display(_3b,q);
_34(q,_3b[0].value);
_13.show();
}else{
_26();
}
};
function _21(_3c,_3d,_3e){
if(!_a.matchCase){
_3c=_3c.toLowerCase();
}
var _3f=_f.load(_3c);
if(_3f&&_3f.length){
_3d(_3c,_3f);
}else{
if((typeof _a.url=="string")&&(_a.url.length>0)){
var _40={timestamp:+new Date()};
$.each(_a.extraParams,function(key,_42){
_40[key]=typeof _42=="function"?_42():_42;
});
$.ajax({mode:"abort",port:"autocomplete"+_9.name,dataType:_a.dataType,url:_a.url,data:$.extend({q:_2a(_3c),limit:_a.max},_40),success:function(_43){
var _44=_a.parse&&_a.parse(_43)||_45(_43);
_f.add(_3c,_44);
_3d(_3c,_44);
}});
}else{
_13.emptyList();
_3e(_3c);
}
}
};
function _45(_46){
var _47=[];
var _48=_46.split("\n");
for(var i=0;i<_48.length;i++){
var row=$.trim(_48[i]);
if(row){
row=row.split("|");
_47[_47.length]={data:row,value:row[0],result:_a.formatResult&&_a.formatResult(row,row[0])||row[0]};
}
}
return _47;
};
function _2c(){
_c.removeClass(_a.loadingClass);
};
};
$.Autocompleter.defaults={inputClass:"ac_input",resultsClass:"ac_results",loadingClass:"ac_loading",minChars:1,delay:400,matchCase:false,matchSubset:true,matchContains:false,cacheLength:10,max:100,mustMatch:false,extraParams:{},selectFirst:true,formatItem:function(row){
return row[0];
},formatMatch:null,autoFill:false,width:0,multiple:false,multipleSeparator:", ",highlight:function(_4c,_4d){
return _4c.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)("+_4d.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi,"\\$1")+")(?![^<>]*>)(?![^&;]+;)","gi"),"<strong>$1</strong>");
},scroll:true,scrollHeight:180};
$.Autocompleter.Cache=function(_4e){
var _4f={};
var _50=0;
function _51(s,sub){
if(!_4e.matchCase){
s=s.toLowerCase();
}
var i=s.indexOf(sub);
if(i==-1){
return false;
}
return i==0||_4e.matchContains;
};
function add(q,_57){
if(_50>_4e.cacheLength){
_58();
}
if(!_4f[q]){
_50++;
}
_4f[q]=_57;
};
function _59(){
if(!_4e.data){
return false;
}
var _5a={},_5b=0;
if(!_4e.url){
_4e.cacheLength=1;
}
_5a[""]=[];
for(var i=0,ol=_4e.data.length;i<ol;i++){
var _5e=_4e.data[i];
_5e=(typeof _5e=="string")?[_5e]:_5e;
var _5f=_4e.formatMatch(_5e,i+1,_4e.data.length);
if(_5f===false){
continue;
}
var _60=_5f.charAt(0).toLowerCase();
if(!_5a[_60]){
_5a[_60]=[];
}
var row={value:_5f,data:_5e,result:_4e.formatResult&&_4e.formatResult(_5e)||_5f};
_5a[_60].push(row);
if(_5b++<_4e.max){
_5a[""].push(row);
}
}
$.each(_5a,function(i,_63){
_4e.cacheLength++;
add(i,_63);
});
};
setTimeout(_59,25);
function _58(){
_4f={};
_50=0;
};
return {flush:_58,add:add,populate:_59,load:function(q){
if(!_4e.cacheLength||!_50){
return null;
}
if(!_4e.url&&_4e.matchContains){
var _65=[];
for(var k in _4f){
if(k.length>0){
var c=_4f[k];
$.each(c,function(i,x){
if(_51(x.value,q)){
_65.push(x);
}
});
}
}
return _65;
}else{
if(_4f[q]){
return _4f[q];
}else{
if(_4e.matchSubset){
for(var i=q.length-1;i>=_4e.minChars;i--){
var c=_4f[q.substr(0,i)];
if(c){
var _65=[];
$.each(c,function(i,x){
if(_51(x.value,q)){
_65[_65.length]=x;
}
});
return _65;
}
}
}
}
}
return null;
}};
};
$.Autocompleter.Select=function(_6d,_6e,_6f,_70){
var _71={ACTIVE:"ac_over"};
var _72,_73=-1,_74,_75="",_76=true,_77,_78;
function _79(_7a){
var _7b=_7a.target;
while(_7b&&_7b.tagName!="LI"){
_7b=_7b.parentNode;
}
if(!_7b){
return [];
}
return _7b;
};
function _7c(){
if(!_76){
return;
}
_77=$("<div/>").hide().addClass(_6d.resultsClass);
if(!_6d.fixed){
_77.appendTo(document.body).css("position","absolute");
}else{
_77.insertAfter(_6e).css("position","relative");
}
_78=$("<ul/>").appendTo(_77).mouseover(function(_7d){
if(_79(_7d).nodeName&&_79(_7d).nodeName.toUpperCase()=="LI"){
_73=$("li",_78).removeClass(_71.ACTIVE).index(_79(_7d));
$(_79(_7d)).addClass(_71.ACTIVE);
}
}).click(function(_7e){
$(_79(_7e)).addClass(_71.ACTIVE);
_6f();
_6e.focus();
return false;
}).mousedown(function(){
_70.mouseDownOnSelect=true;
}).mouseup(function(){
_70.mouseDownOnSelect=false;
});
if(_6d.width>0){
_77.css("width",_6d.width);
}
_76=false;
};
function _7f(_80){
_72.slice(_73,_73+1).removeClass(_71.ACTIVE);
_81(_80);
var _82=_72.slice(_73,_73+1).addClass(_71.ACTIVE);
if(_6d.scroll){
var _83=0;
_72.slice(0,_73).each(function(){
_83+=this.offsetHeight;
});
if((_83+_82[0].offsetHeight-_78.scrollTop())>_78[0].clientHeight){
_78.scrollTop(_83+_82[0].offsetHeight-_78.innerHeight());
}else{
if(_83<_78.scrollTop()){
_78.scrollTop(_83);
}
}
}
};
function _81(_84){
_73+=_84;
if(_73<0){
_73=_72.size()-1;
}else{
if(_73>=_72.size()){
_73=0;
}
}
};
function _85(_86){
return _6d.max&&_6d.max<_86?_6d.max:_86;
};
function _87(){
_78.empty();
var max=_85(_74.length);
for(var i=0;i<max;i++){
if(!_74[i]){
continue;
}
var _8a=_6d.formatItem(_74[i].data,i+1,max,_74[i].value,_75);
if(_8a===false){
continue;
}
var li=$("<li/>").html(_6d.highlight(_8a,_75)).addClass(i%2==0?"ac_even":"ac_odd").appendTo(_78)[0];
$.data(li,"ac_data",_74[i]);
}
_72=_78.find("li");
if(_6d.selectFirst){
_72.slice(0,1).addClass(_71.ACTIVE);
_73=0;
}
if($.fn.bgiframe){
_78.bgiframe();
}
};
return {display:function(d,q){
_7c();
_74=d;
_75=q;
_87();
},next:function(){
_7f(1);
},prev:function(){
_7f(-1);
},pageUp:function(){
if(_73!=0&&_73-8<0){
_7f(-_73);
}else{
_7f(-8);
}
},pageDown:function(){
if(_73!=_72.size()-1&&_73+8>_72.size()){
_7f(_72.size()-1-_73);
}else{
_7f(8);
}
},hide:function(){
_77&&_77.hide();
_72&&_72.removeClass(_71.ACTIVE);
_73=-1;
},visible:function(){
return _77&&_77.is(":visible");
},current:function(){
return this.visible()&&(_72.filter("."+_71.ACTIVE)[0]||_6d.selectFirst&&_72[0]);
},show:function(){
var _8e=$(_6e).offset();
_77.css({width:typeof _6d.width=="string"||_6d.width>0?_6d.width:$(_6e).width(),top:!_6d.fixed?_8e.top+_6e.offsetHeight:"",left:!_6d.fixed?_8e.left:""}).show();
if(_6d.scroll){
_78.scrollTop(0);
_78.css({maxHeight:_6d.scrollHeight,overflow:"auto"});
if($.browser.msie&&typeof document.body.style.maxHeight==="undefined"){
var _8f=0;
_72.each(function(){
_8f+=this.offsetHeight;
});
var _90=_8f>_6d.scrollHeight;
_78.css("height",_90?_6d.scrollHeight:_8f);
if(!_90){
_72.width(_78.width()-parseInt(_72.css("padding-left"))-parseInt(_72.css("padding-right")));
}
}
}
},selected:function(){
var _91=_72&&_72.filter("."+_71.ACTIVE).removeClass(_71.ACTIVE);
return _91&&_91.length&&$.data(_91[0],"ac_data");
},emptyList:function(){
_78&&_78.empty();
},unbind:function(){
_77&&_77.remove();
}};
};
$.Autocompleter.Selection=function(_92,_93,end){
if(_92.createTextRange){
var _95=_92.createTextRange();
_95.collapse(true);
_95.moveStart("character",_93);
_95.moveEnd("character",end);
_95.select();
}else{
if(_92.setSelectionRange){
_92.setSelectionRange(_93,end);
}else{
if(_92.selectionStart){
_92.selectionStart=_93;
_92.selectionEnd=end;
}
}
}
_92.focus();
};
})(jQuery);
;
include.set_path('resources');
jQuery.ui||(function(c){
var i=c.fn.remove,d=c.browser.mozilla&&(parseFloat(c.browser.version)<1.9);
c.ui={version:"1.7.2",plugin:{add:function(k,l,n){
var m=c.ui[k].prototype;
for(var j in n){
m.plugins[j]=m.plugins[j]||[];
m.plugins[j].push([l,n[j]]);
}
},call:function(j,l,k){
var n=j.plugins[l];
if(!n||!j.element[0].parentNode){
return;
}
for(var m=0;m<n.length;m++){
if(j.options[n[m][0]]){
n[m][1].apply(j.element,k);
}
}
}},contains:function(k,j){
return document.compareDocumentPosition?k.compareDocumentPosition(j)&16:k!==j&&k.contains(j);
},hasScroll:function(m,k){
if(c(m).css("overflow")=="hidden"){
return false;
}
var j=(k&&k=="left")?"scrollLeft":"scrollTop",l=false;
if(m[j]>0){
return true;
}
m[j]=1;
l=(m[j]>0);
m[j]=0;
return l;
},isOverAxis:function(k,j,l){
return (k>j)&&(k<(j+l));
},isOver:function(o,k,n,m,j,l){
return c.ui.isOverAxis(o,n,j)&&c.ui.isOverAxis(k,m,l);
},keyCode:{BACKSPACE:8,CAPS_LOCK:20,COMMA:188,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38}};
if(d){
var f=c.attr,e=c.fn.removeAttr,h="http://www.w3.org/2005/07/aaa",a=/^aria-/,b=/^wairole:/;
c.attr=function(k,j,l){
var m=l!==undefined;
return (j=="role"?(m?f.call(this,k,j,"wairole:"+l):(f.apply(this,arguments)||"").replace(b,"")):(a.test(j)?(m?k.setAttributeNS(h,j.replace(a,"aaa:"),l):f.call(this,k,j.replace(a,"aaa:"))):f.apply(this,arguments)));
};
c.fn.removeAttr=function(j){
return (a.test(j)?this.each(function(){
this.removeAttributeNS(h,j.replace(a,""));
}):e.call(this,j));
};
}
c.fn.extend({remove:function(){
c("*",this).add(this).each(function(){
c(this).triggerHandler("remove");
});
return i.apply(this,arguments);
},enableSelection:function(){
return this.attr("unselectable","off").css("MozUserSelect","").unbind("selectstart.ui");
},disableSelection:function(){
return this.attr("unselectable","on").css("MozUserSelect","none").bind("selectstart.ui",function(){
return false;
});
},scrollParent:function(){
var j;
if((c.browser.msie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){
j=this.parents().filter(function(){
return (/(relative|absolute|fixed)/).test(c.curCSS(this,"position",1))&&(/(auto|scroll)/).test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1));
}).eq(0);
}else{
j=this.parents().filter(function(){
return (/(auto|scroll)/).test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1));
}).eq(0);
}
return (/fixed/).test(this.css("position"))||!j.length?c(document):j;
}});
c.extend(c.expr[":"],{data:function(l,k,j){
return !!c.data(l,j[3]);
},focusable:function(k){
var l=k.nodeName.toLowerCase(),j=c.attr(k,"tabindex");
return (/input|select|textarea|button|object/.test(l)?!k.disabled:"a"==l||"area"==l?k.href||!isNaN(j):!isNaN(j))&&!c(k)["area"==l?"parents":"closest"](":hidden").length;
},tabbable:function(k){
var j=c.attr(k,"tabindex");
return (isNaN(j)||j>=0)&&c(k).is(":focusable");
}});
function g(m,n,o,l){
function k(q){
var p=c[m][n][q]||[];
return (typeof p=="string"?p.split(/,?\s+/):p);
};
var j=k("getter");
if(l.length==1&&typeof l[0]=="string"){
j=j.concat(k("getterSetter"));
}
return (c.inArray(o,j)!=-1);
};
c.widget=function(k,j){
var l=k.split(".")[0];
k=k.split(".")[1];
c.fn[k]=function(p){
var n=(typeof p=="string"),o=Array.prototype.slice.call(arguments,1);
if(n&&p.substring(0,1)=="_"){
return this;
}
if(n&&g(l,k,p,o)){
var m=c.data(this[0],k);
return (m?m[p].apply(m,o):undefined);
}
return this.each(function(){
var q=c.data(this,k);
(!q&&!n&&c.data(this,k,new c[l][k](this,p))._init());
(q&&n&&c.isFunction(q[p])&&q[p].apply(q,o));
});
};
c[l]=c[l]||{};
c[l][k]=function(o,n){
var m=this;
this.namespace=l;
this.widgetName=k;
this.widgetEventPrefix=c[l][k].eventPrefix||k;
this.widgetBaseClass=l+"-"+k;
this.options=c.extend({},c.widget.defaults,c[l][k].defaults,c.metadata&&c.metadata.get(o)[k],n);
this.element=c(o).bind("setData."+k,function(q,p,r){
if(q.target==o){
return m._setData(p,r);
}
}).bind("getData."+k,function(q,p){
if(q.target==o){
return m._getData(p);
}
}).bind("remove",function(){
return m.destroy();
});
};
c[l][k].prototype=c.extend({},c.widget.prototype,j);
c[l][k].getterSetter="option";
};
c.widget.prototype={_init:function(){
},destroy:function(){
this.element.removeData(this.widgetName).removeClass(this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").removeAttr("aria-disabled");
},option:function(l,m){
var k=l,j=this;
if(typeof l=="string"){
if(m===undefined){
return this._getData(l);
}
k={};
k[l]=m;
}
c.each(k,function(n,o){
j._setData(n,o);
});
},_getData:function(j){
return this.options[j];
},_setData:function(j,k){
this.options[j]=k;
if(j=="disabled"){
this.element[k?"addClass":"removeClass"](this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").attr("aria-disabled",k);
}
},enable:function(){
this._setData("disabled",false);
},disable:function(){
this._setData("disabled",true);
},_trigger:function(l,m,n){
var p=this.options[l],j=(l==this.widgetEventPrefix?l:this.widgetEventPrefix+l);
m=c.Event(m);
m.type=j;
if(m.originalEvent){
for(var k=c.event.props.length,o;k;){
o=c.event.props[--k];
m[o]=m.originalEvent[o];
}
}
this.element.trigger(m,n);
return !(c.isFunction(p)&&p.call(this.element[0],m,n)===false||m.isDefaultPrevented());
}};
c.widget.defaults={disabled:false};
c.ui.mouse={_mouseInit:function(){
var j=this;
this.element.bind("mousedown."+this.widgetName,function(k){
return j._mouseDown(k);
}).bind("click."+this.widgetName,function(k){
if(j._preventClickEvent){
j._preventClickEvent=false;
k.stopImmediatePropagation();
return false;
}
});
if(c.browser.msie){
this._mouseUnselectable=this.element.attr("unselectable");
this.element.attr("unselectable","on");
}
this.started=false;
},_mouseDestroy:function(){
this.element.unbind("."+this.widgetName);
(c.browser.msie&&this.element.attr("unselectable",this._mouseUnselectable));
},_mouseDown:function(l){
l.originalEvent=l.originalEvent||{};
if(l.originalEvent.mouseHandled){
return;
}
(this._mouseStarted&&this._mouseUp(l));
this._mouseDownEvent=l;
var k=this,m=(l.which==1),j=(typeof this.options.cancel=="string"?c(l.target).parents().add(l.target).filter(this.options.cancel).length:false);
if(!m||j||!this._mouseCapture(l)){
return true;
}
this.mouseDelayMet=!this.options.delay;
if(!this.mouseDelayMet){
this._mouseDelayTimer=setTimeout(function(){
k.mouseDelayMet=true;
},this.options.delay);
}
if(this._mouseDistanceMet(l)&&this._mouseDelayMet(l)){
this._mouseStarted=(this._mouseStart(l)!==false);
if(!this._mouseStarted){
l.preventDefault();
return true;
}
}
this._mouseMoveDelegate=function(n){
return k._mouseMove(n);
};
this._mouseUpDelegate=function(n){
return k._mouseUp(n);
};
c(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);
(c.browser.safari||l.preventDefault());
l.originalEvent.mouseHandled=true;
return true;
},_mouseMove:function(j){
if(c.browser.msie&&!j.button){
return this._mouseUp(j);
}
if(this._mouseStarted){
this._mouseDrag(j);
return j.preventDefault();
}
if(this._mouseDistanceMet(j)&&this._mouseDelayMet(j)){
this._mouseStarted=(this._mouseStart(this._mouseDownEvent,j)!==false);
(this._mouseStarted?this._mouseDrag(j):this._mouseUp(j));
}
return !this._mouseStarted;
},_mouseUp:function(j){
c(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);
if(this._mouseStarted){
this._mouseStarted=false;
this._preventClickEvent=(j.target==this._mouseDownEvent.target);
this._mouseStop(j);
}
return false;
},_mouseDistanceMet:function(j){
return (Math.max(Math.abs(this._mouseDownEvent.pageX-j.pageX),Math.abs(this._mouseDownEvent.pageY-j.pageY))>=this.options.distance);
},_mouseDelayMet:function(j){
return this.mouseDelayMet;
},_mouseStart:function(j){
},_mouseDrag:function(j){
},_mouseStop:function(j){
},_mouseCapture:function(j){
return true;
}};
c.ui.mouse.defaults={cancel:null,distance:1,delay:0};
})(jQuery);
(function(a){
a.widget("ui.draggable",a.extend({},a.ui.mouse,{_init:function(){
if(this.options.helper=="original"&&!(/^(?:r|a|f)/).test(this.element.css("position"))){
this.element[0].style.position="relative";
}
(this.options.addClasses&&this.element.addClass("ui-draggable"));
(this.options.disabled&&this.element.addClass("ui-draggable-disabled"));
this._mouseInit();
},destroy:function(){
if(!this.element.data("draggable")){
return;
}
this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
this._mouseDestroy();
},_mouseCapture:function(b){
var c=this.options;
if(this.helper||c.disabled||a(b.target).is(".ui-resizable-handle")){
return false;
}
this.handle=this._getHandle(b);
if(!this.handle){
return false;
}
return true;
},_mouseStart:function(b){
var c=this.options;
this.helper=this._createHelper(b);
this._cacheHelperProportions();
if(a.ui.ddmanager){
a.ui.ddmanager.current=this;
}
this._cacheMargins();
this.cssPosition=this.helper.css("position");
this.scrollParent=this.helper.scrollParent();
this.offset=this.element.offset();
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};
a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.originalPosition=this._generatePosition(b);
this.originalPageX=b.pageX;
this.originalPageY=b.pageY;
if(c.cursorAt){
this._adjustOffsetFromHelper(c.cursorAt);
}
if(c.containment){
this._setContainment();
}
this._trigger("start",b);
this._cacheHelperProportions();
if(a.ui.ddmanager&&!c.dropBehaviour){
a.ui.ddmanager.prepareOffsets(this,b);
}
this.helper.addClass("ui-draggable-dragging");
this._mouseDrag(b,true);
return true;
},_mouseDrag:function(b,d){
this.position=this._generatePosition(b);
this.positionAbs=this._convertPositionTo("absolute");
if(!d){
var c=this._uiHash();
this._trigger("drag",b,c);
this.position=c.position;
}
if(!this.options.axis||this.options.axis!="y"){
this.helper[0].style.left=this.position.left+"px";
}
if(!this.options.axis||this.options.axis!="x"){
this.helper[0].style.top=this.position.top+"px";
}
if(a.ui.ddmanager){
a.ui.ddmanager.drag(this,b);
}
return false;
},_mouseStop:function(c){
var d=false;
if(a.ui.ddmanager&&!this.options.dropBehaviour){
d=a.ui.ddmanager.drop(this,c);
}
if(this.dropped){
d=this.dropped;
this.dropped=false;
}
if((this.options.revert=="invalid"&&!d)||(this.options.revert=="valid"&&d)||this.options.revert===true||(a.isFunction(this.options.revert)&&this.options.revert.call(this.element,d))){
var b=this;
a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){
b._trigger("stop",c);
b._clear();
});
}else{
this._trigger("stop",c);
this._clear();
}
return false;
},_getHandle:function(b){
var c=!this.options.handle||!a(this.options.handle,this.element).length?true:false;
a(this.options.handle,this.element).find("*").andSelf().each(function(){
if(this==b.target){
c=true;
}
});
return c;
},_createHelper:function(c){
var d=this.options;
var b=a.isFunction(d.helper)?a(d.helper.apply(this.element[0],[c])):(d.helper=="clone"?this.element.clone():this.element);
if(!b.parents("body").length){
b.appendTo((d.appendTo=="parent"?this.element[0].parentNode:d.appendTo));
}
if(b[0]!=this.element[0]&&!(/(fixed|absolute)/).test(b.css("position"))){
b.css("position","absolute");
}
return b;
},_adjustOffsetFromHelper:function(b){
if(b.left!=undefined){
this.offset.click.left=b.left+this.margins.left;
}
if(b.right!=undefined){
this.offset.click.left=this.helperProportions.width-b.right+this.margins.left;
}
if(b.top!=undefined){
this.offset.click.top=b.top+this.margins.top;
}
if(b.bottom!=undefined){
this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top;
}
},_getParentOffset:function(){
this.offsetParent=this.helper.offsetParent();
var b=this.offsetParent.offset();
if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])){
b.left+=this.scrollParent.scrollLeft();
b.top+=this.scrollParent.scrollTop();
}
if((this.offsetParent[0]==document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)){
b={top:0,left:0};
}
return {top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)};
},_getRelativeOffset:function(){
if(this.cssPosition=="relative"){
var b=this.element.position();
return {top:b.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:b.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()};
}else{
return {top:0,left:0};
}
},_cacheMargins:function(){
this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0)};
},_cacheHelperProportions:function(){
this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()};
},_setContainment:function(){
var e=this.options;
if(e.containment=="parent"){
e.containment=this.helper[0].parentNode;
}
if(e.containment=="document"||e.containment=="window"){
this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,a(e.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a(e.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];
}
if(!(/^(document|window|parent)$/).test(e.containment)&&e.containment.constructor!=Array){
var c=a(e.containment)[0];
if(!c){
return;
}
var d=a(e.containment).offset();
var b=(a(c).css("overflow")!="hidden");
this.containment=[d.left+(parseInt(a(c).css("borderLeftWidth"),10)||0)+(parseInt(a(c).css("paddingLeft"),10)||0)-this.margins.left,d.top+(parseInt(a(c).css("borderTopWidth"),10)||0)+(parseInt(a(c).css("paddingTop"),10)||0)-this.margins.top,d.left+(b?Math.max(c.scrollWidth,c.offsetWidth):c.offsetWidth)-(parseInt(a(c).css("borderLeftWidth"),10)||0)-(parseInt(a(c).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,d.top+(b?Math.max(c.scrollHeight,c.offsetHeight):c.offsetHeight)-(parseInt(a(c).css("borderTopWidth"),10)||0)-(parseInt(a(c).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top];
}else{
if(e.containment.constructor==Array){
this.containment=e.containment;
}
}
},_convertPositionTo:function(f,h){
if(!h){
h=this.position;
}
var c=f=="absolute"?1:-1;
var e=this.options,b=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=(/(html|body)/i).test(b[0].tagName);
return {top:(h.top+this.offset.relative.top*c+this.offset.parent.top*c-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(g?0:b.scrollTop()))*c)),left:(h.left+this.offset.relative.left*c+this.offset.parent.left*c-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:b.scrollLeft())*c))};
},_generatePosition:function(e){
var h=this.options,b=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,i=(/(html|body)/i).test(b[0].tagName);
if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0])){
this.offset.relative=this._getRelativeOffset();
}
var d=e.pageX;
var c=e.pageY;
if(this.originalPosition){
if(this.containment){
if(e.pageX-this.offset.click.left<this.containment[0]){
d=this.containment[0]+this.offset.click.left;
}
if(e.pageY-this.offset.click.top<this.containment[1]){
c=this.containment[1]+this.offset.click.top;
}
if(e.pageX-this.offset.click.left>this.containment[2]){
d=this.containment[2]+this.offset.click.left;
}
if(e.pageY-this.offset.click.top>this.containment[3]){
c=this.containment[3]+this.offset.click.top;
}
}
if(h.grid){
var g=this.originalPageY+Math.round((c-this.originalPageY)/h.grid[1])*h.grid[1];
c=this.containment?(!(g-this.offset.click.top<this.containment[1]||g-this.offset.click.top>this.containment[3])?g:(!(g-this.offset.click.top<this.containment[1])?g-h.grid[1]:g+h.grid[1])):g;
var f=this.originalPageX+Math.round((d-this.originalPageX)/h.grid[0])*h.grid[0];
d=this.containment?(!(f-this.offset.click.left<this.containment[0]||f-this.offset.click.left>this.containment[2])?f:(!(f-this.offset.click.left<this.containment[0])?f-h.grid[0]:f+h.grid[0])):f;
}
}
return {top:(c-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(i?0:b.scrollTop())))),left:(d-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():i?0:b.scrollLeft())))};
},_clear:function(){
this.helper.removeClass("ui-draggable-dragging");
if(this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval){
this.helper.remove();
}
this.helper=null;
this.cancelHelperRemoval=false;
},_trigger:function(b,c,d){
d=d||this._uiHash();
a.ui.plugin.call(this,b,[c,d]);
if(b=="drag"){
this.positionAbs=this._convertPositionTo("absolute");
}
return a.widget.prototype._trigger.call(this,b,c,d);
},plugins:{},_uiHash:function(b){
return {helper:this.helper,position:this.position,absolutePosition:this.positionAbs,offset:this.positionAbs};
}}));
a.extend(a.ui.draggable,{version:"1.7.2",eventPrefix:"drag",defaults:{addClasses:true,appendTo:"parent",axis:false,cancel:":input,option",connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,delay:0,distance:1,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false}});
a.ui.plugin.add("draggable","connectToSortable",{start:function(c,e){
var d=a(this).data("draggable"),f=d.options,b=a.extend({},e,{item:d.element});
d.sortables=[];
a(f.connectToSortable).each(function(){
var g=a.data(this,"sortable");
if(g&&!g.options.disabled){
d.sortables.push({instance:g,shouldRevert:g.options.revert});
g._refreshItems();
g._trigger("activate",c,b);
}
});
},stop:function(c,e){
var d=a(this).data("draggable"),b=a.extend({},e,{item:d.element});
a.each(d.sortables,function(){
if(this.instance.isOver){
this.instance.isOver=0;
d.cancelHelperRemoval=true;
this.instance.cancelHelperRemoval=false;
if(this.shouldRevert){
this.instance.options.revert=true;
}
this.instance._mouseStop(c);
this.instance.options.helper=this.instance.options._helper;
if(d.options.helper=="original"){
this.instance.currentItem.css({top:"auto",left:"auto"});
}
}else{
this.instance.cancelHelperRemoval=false;
this.instance._trigger("deactivate",c,b);
}
});
},drag:function(c,f){
var e=a(this).data("draggable"),b=this;
var d=function(i){
var n=this.offset.click.top,m=this.offset.click.left;
var g=this.positionAbs.top,k=this.positionAbs.left;
var j=i.height,l=i.width;
var p=i.top,h=i.left;
return a.ui.isOver(g+n,k+m,p,h,j,l);
};
a.each(e.sortables,function(g){
this.instance.positionAbs=e.positionAbs;
this.instance.helperProportions=e.helperProportions;
this.instance.offset.click=e.offset.click;
if(this.instance._intersectsWith(this.instance.containerCache)){
if(!this.instance.isOver){
this.instance.isOver=1;
this.instance.currentItem=a(b).clone().appendTo(this.instance.element).data("sortable-item",true);
this.instance.options._helper=this.instance.options.helper;
this.instance.options.helper=function(){
return f.helper[0];
};
c.target=this.instance.currentItem[0];
this.instance._mouseCapture(c,true);
this.instance._mouseStart(c,true,true);
this.instance.offset.click.top=e.offset.click.top;
this.instance.offset.click.left=e.offset.click.left;
this.instance.offset.parent.left-=e.offset.parent.left-this.instance.offset.parent.left;
this.instance.offset.parent.top-=e.offset.parent.top-this.instance.offset.parent.top;
e._trigger("toSortable",c);
e.dropped=this.instance.element;
e.currentItem=e.element;
this.instance.fromOutside=e;
}
if(this.instance.currentItem){
this.instance._mouseDrag(c);
}
}else{
if(this.instance.isOver){
this.instance.isOver=0;
this.instance.cancelHelperRemoval=true;
this.instance.options.revert=false;
this.instance._trigger("out",c,this.instance._uiHash(this.instance));
this.instance._mouseStop(c,true);
this.instance.options.helper=this.instance.options._helper;
this.instance.currentItem.remove();
if(this.instance.placeholder){
this.instance.placeholder.remove();
}
e._trigger("fromSortable",c);
e.dropped=false;
}
}
});
}});
a.ui.plugin.add("draggable","cursor",{start:function(c,d){
var b=a("body"),e=a(this).data("draggable").options;
if(b.css("cursor")){
e._cursor=b.css("cursor");
}
b.css("cursor",e.cursor);
},stop:function(b,c){
var d=a(this).data("draggable").options;
if(d._cursor){
a("body").css("cursor",d._cursor);
}
}});
a.ui.plugin.add("draggable","iframeFix",{start:function(b,c){
var d=a(this).data("draggable").options;
a(d.iframeFix===true?"iframe":d.iframeFix).each(function(){
a("<div class=\"ui-draggable-iframeFix\" style=\"background: #fff;\"></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css(a(this).offset()).appendTo("body");
});
},stop:function(b,c){
a("div.ui-draggable-iframeFix").each(function(){
this.parentNode.removeChild(this);
});
}});
a.ui.plugin.add("draggable","opacity",{start:function(c,d){
var b=a(d.helper),e=a(this).data("draggable").options;
if(b.css("opacity")){
e._opacity=b.css("opacity");
}
b.css("opacity",e.opacity);
},stop:function(b,c){
var d=a(this).data("draggable").options;
if(d._opacity){
a(c.helper).css("opacity",d._opacity);
}
}});
a.ui.plugin.add("draggable","scroll",{start:function(c,d){
var b=a(this).data("draggable");
if(b.scrollParent[0]!=document&&b.scrollParent[0].tagName!="HTML"){
b.overflowOffset=b.scrollParent.offset();
}
},drag:function(d,e){
var c=a(this).data("draggable"),f=c.options,b=false;
if(c.scrollParent[0]!=document&&c.scrollParent[0].tagName!="HTML"){
if(!f.axis||f.axis!="x"){
if((c.overflowOffset.top+c.scrollParent[0].offsetHeight)-d.pageY<f.scrollSensitivity){
c.scrollParent[0].scrollTop=b=c.scrollParent[0].scrollTop+f.scrollSpeed;
}else{
if(d.pageY-c.overflowOffset.top<f.scrollSensitivity){
c.scrollParent[0].scrollTop=b=c.scrollParent[0].scrollTop-f.scrollSpeed;
}
}
}
if(!f.axis||f.axis!="y"){
if((c.overflowOffset.left+c.scrollParent[0].offsetWidth)-d.pageX<f.scrollSensitivity){
c.scrollParent[0].scrollLeft=b=c.scrollParent[0].scrollLeft+f.scrollSpeed;
}else{
if(d.pageX-c.overflowOffset.left<f.scrollSensitivity){
c.scrollParent[0].scrollLeft=b=c.scrollParent[0].scrollLeft-f.scrollSpeed;
}
}
}
}else{
if(!f.axis||f.axis!="x"){
if(d.pageY-a(document).scrollTop()<f.scrollSensitivity){
b=a(document).scrollTop(a(document).scrollTop()-f.scrollSpeed);
}else{
if(a(window).height()-(d.pageY-a(document).scrollTop())<f.scrollSensitivity){
b=a(document).scrollTop(a(document).scrollTop()+f.scrollSpeed);
}
}
}
if(!f.axis||f.axis!="y"){
if(d.pageX-a(document).scrollLeft()<f.scrollSensitivity){
b=a(document).scrollLeft(a(document).scrollLeft()-f.scrollSpeed);
}else{
if(a(window).width()-(d.pageX-a(document).scrollLeft())<f.scrollSensitivity){
b=a(document).scrollLeft(a(document).scrollLeft()+f.scrollSpeed);
}
}
}
}
if(b!==false&&a.ui.ddmanager&&!f.dropBehaviour){
a.ui.ddmanager.prepareOffsets(c,d);
}
}});
a.ui.plugin.add("draggable","snap",{start:function(c,d){
var b=a(this).data("draggable"),e=b.options;
b.snapElements=[];
a(e.snap.constructor!=String?(e.snap.items||":data(draggable)"):e.snap).each(function(){
var g=a(this);
var f=g.offset();
if(this!=b.element[0]){
b.snapElements.push({item:this,width:g.outerWidth(),height:g.outerHeight(),top:f.top,left:f.left});
}
});
},drag:function(u,p){
var g=a(this).data("draggable"),q=g.options;
var y=q.snapTolerance;
var x=p.offset.left,w=x+g.helperProportions.width,f=p.offset.top,e=f+g.helperProportions.height;
for(var v=g.snapElements.length-1;v>=0;v--){
var s=g.snapElements[v].left,n=s+g.snapElements[v].width,m=g.snapElements[v].top,A=m+g.snapElements[v].height;
if(!((s-y<x&&x<n+y&&m-y<f&&f<A+y)||(s-y<x&&x<n+y&&m-y<e&&e<A+y)||(s-y<w&&w<n+y&&m-y<f&&f<A+y)||(s-y<w&&w<n+y&&m-y<e&&e<A+y))){
if(g.snapElements[v].snapping){
(g.options.snap.release&&g.options.snap.release.call(g.element,u,a.extend(g._uiHash(),{snapItem:g.snapElements[v].item})));
}
g.snapElements[v].snapping=false;
continue;
}
if(q.snapMode!="inner"){
var c=Math.abs(m-e)<=y;
var z=Math.abs(A-f)<=y;
var j=Math.abs(s-w)<=y;
var k=Math.abs(n-x)<=y;
if(c){
p.position.top=g._convertPositionTo("relative",{top:m-g.helperProportions.height,left:0}).top-g.margins.top;
}
if(z){
p.position.top=g._convertPositionTo("relative",{top:A,left:0}).top-g.margins.top;
}
if(j){
p.position.left=g._convertPositionTo("relative",{top:0,left:s-g.helperProportions.width}).left-g.margins.left;
}
if(k){
p.position.left=g._convertPositionTo("relative",{top:0,left:n}).left-g.margins.left;
}
}
var h=(c||z||j||k);
if(q.snapMode!="outer"){
var c=Math.abs(m-f)<=y;
var z=Math.abs(A-e)<=y;
var j=Math.abs(s-x)<=y;
var k=Math.abs(n-w)<=y;
if(c){
p.position.top=g._convertPositionTo("relative",{top:m,left:0}).top-g.margins.top;
}
if(z){
p.position.top=g._convertPositionTo("relative",{top:A-g.helperProportions.height,left:0}).top-g.margins.top;
}
if(j){
p.position.left=g._convertPositionTo("relative",{top:0,left:s}).left-g.margins.left;
}
if(k){
p.position.left=g._convertPositionTo("relative",{top:0,left:n-g.helperProportions.width}).left-g.margins.left;
}
}
if(!g.snapElements[v].snapping&&(c||z||j||k||h)){
(g.options.snap.snap&&g.options.snap.snap.call(g.element,u,a.extend(g._uiHash(),{snapItem:g.snapElements[v].item})));
}
g.snapElements[v].snapping=(c||z||j||k||h);
}
}});
a.ui.plugin.add("draggable","stack",{start:function(b,c){
var e=a(this).data("draggable").options;
var d=a.makeArray(a(e.stack.group)).sort(function(g,f){
return (parseInt(a(g).css("zIndex"),10)||e.stack.min)-(parseInt(a(f).css("zIndex"),10)||e.stack.min);
});
a(d).each(function(f){
this.style.zIndex=e.stack.min+f;
});
this[0].style.zIndex=e.stack.min+d.length;
}});
a.ui.plugin.add("draggable","zIndex",{start:function(c,d){
var b=a(d.helper),e=a(this).data("draggable").options;
if(b.css("zIndex")){
e._zIndex=b.css("zIndex");
}
b.css("zIndex",e.zIndex);
},stop:function(b,c){
var d=a(this).data("draggable").options;
if(d._zIndex){
a(c.helper).css("zIndex",d._zIndex);
}
}});
})(jQuery);
(function(a){
a.widget("ui.droppable",{_init:function(){
var c=this.options,b=c.accept;
this.isover=0;
this.isout=1;
this.options.accept=this.options.accept&&a.isFunction(this.options.accept)?this.options.accept:function(e){
return e.is(b);
};
this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};
a.ui.ddmanager.droppables[this.options.scope]=a.ui.ddmanager.droppables[this.options.scope]||[];
a.ui.ddmanager.droppables[this.options.scope].push(this);
(this.options.addClasses&&this.element.addClass("ui-droppable"));
},destroy:function(){
var b=a.ui.ddmanager.droppables[this.options.scope];
for(var c=0;c<b.length;c++){
if(b[c]==this){
b.splice(c,1);
}
}
this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable");
},_setData:function(b,c){
if(b=="accept"){
this.options.accept=c&&a.isFunction(c)?c:function(e){
return e.is(c);
};
}else{
a.widget.prototype._setData.apply(this,arguments);
}
},_activate:function(c){
var b=a.ui.ddmanager.current;
if(this.options.activeClass){
this.element.addClass(this.options.activeClass);
}
(b&&this._trigger("activate",c,this.ui(b)));
},_deactivate:function(c){
var b=a.ui.ddmanager.current;
if(this.options.activeClass){
this.element.removeClass(this.options.activeClass);
}
(b&&this._trigger("deactivate",c,this.ui(b)));
},_over:function(c){
var b=a.ui.ddmanager.current;
if(!b||(b.currentItem||b.element)[0]==this.element[0]){
return;
}
if(this.options.accept.call(this.element[0],(b.currentItem||b.element))){
if(this.options.hoverClass){
this.element.addClass(this.options.hoverClass);
}
this._trigger("over",c,this.ui(b));
}
},_out:function(c){
var b=a.ui.ddmanager.current;
if(!b||(b.currentItem||b.element)[0]==this.element[0]){
return;
}
if(this.options.accept.call(this.element[0],(b.currentItem||b.element))){
if(this.options.hoverClass){
this.element.removeClass(this.options.hoverClass);
}
this._trigger("out",c,this.ui(b));
}
},_drop:function(c,d){
var b=d||a.ui.ddmanager.current;
if(!b||(b.currentItem||b.element)[0]==this.element[0]){
return false;
}
var e=false;
this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){
var f=a.data(this,"droppable");
if(f.options.greedy&&a.ui.intersect(b,a.extend(f,{offset:f.element.offset()}),f.options.tolerance)){
e=true;
return false;
}
});
if(e){
return false;
}
if(this.options.accept.call(this.element[0],(b.currentItem||b.element))){
if(this.options.activeClass){
this.element.removeClass(this.options.activeClass);
}
if(this.options.hoverClass){
this.element.removeClass(this.options.hoverClass);
}
this._trigger("drop",c,this.ui(b));
return this.element;
}
return false;
},ui:function(b){
return {draggable:(b.currentItem||b.element),helper:b.helper,position:b.position,absolutePosition:b.positionAbs,offset:b.positionAbs};
}});
a.extend(a.ui.droppable,{version:"1.7.2",eventPrefix:"drop",defaults:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect"}});
a.ui.intersect=function(q,j,o){
if(!j.offset){
return false;
}
var e=(q.positionAbs||q.position.absolute).left,d=e+q.helperProportions.width,n=(q.positionAbs||q.position.absolute).top,m=n+q.helperProportions.height;
var g=j.offset.left,c=g+j.proportions.width,p=j.offset.top,k=p+j.proportions.height;
switch(o){
case "fit":
return (g<e&&d<c&&p<n&&m<k);
break;
case "intersect":
return (g<e+(q.helperProportions.width/2)&&d-(q.helperProportions.width/2)<c&&p<n+(q.helperProportions.height/2)&&m-(q.helperProportions.height/2)<k);
break;
case "pointer":
var h=((q.positionAbs||q.position.absolute).left+(q.clickOffset||q.offset.click).left),i=((q.positionAbs||q.position.absolute).top+(q.clickOffset||q.offset.click).top),f=a.ui.isOver(i,h,p,g,j.proportions.height,j.proportions.width);
return f;
break;
case "touch":
return ((n>=p&&n<=k)||(m>=p&&m<=k)||(n<p&&m>k))&&((e>=g&&e<=c)||(d>=g&&d<=c)||(e<g&&d>c));
break;
default:
return false;
break;
}
};
a.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(e,g){
var b=a.ui.ddmanager.droppables[e.options.scope];
var f=g?g.type:null;
var h=(e.currentItem||e.element).find(":data(droppable)").andSelf();
droppablesLoop:
for(var d=0;d<b.length;d++){
if(b[d].options.disabled||(e&&!b[d].options.accept.call(b[d].element[0],(e.currentItem||e.element)))){
continue;
}
for(var c=0;c<h.length;c++){
if(h[c]==b[d].element[0]){
b[d].proportions.height=0;
continue droppablesLoop;
}
}
b[d].visible=b[d].element.css("display")!="none";
if(!b[d].visible){
continue;
}
b[d].offset=b[d].element.offset();
b[d].proportions={width:b[d].element[0].offsetWidth,height:b[d].element[0].offsetHeight};
if(f=="mousedown"){
b[d]._activate.call(b[d],g);
}
}
},drop:function(b,c){
var d=false;
a.each(a.ui.ddmanager.droppables[b.options.scope],function(){
if(!this.options){
return;
}
if(!this.options.disabled&&this.visible&&a.ui.intersect(b,this,this.options.tolerance)){
d=this._drop.call(this,c);
}
if(!this.options.disabled&&this.visible&&this.options.accept.call(this.element[0],(b.currentItem||b.element))){
this.isout=1;
this.isover=0;
this._deactivate.call(this,c);
}
});
return d;
},drag:function(b,c){
if(b.options.refreshPositions){
a.ui.ddmanager.prepareOffsets(b,c);
}
a.each(a.ui.ddmanager.droppables[b.options.scope],function(){
if(this.options.disabled||this.greedyChild||!this.visible){
return;
}
var e=a.ui.intersect(b,this,this.options.tolerance);
var g=!e&&this.isover==1?"isout":(e&&this.isover==0?"isover":null);
if(!g){
return;
}
var f;
if(this.options.greedy){
var d=this.element.parents(":data(droppable):eq(0)");
if(d.length){
f=a.data(d[0],"droppable");
f.greedyChild=(g=="isover"?1:0);
}
}
if(f&&g=="isover"){
f.isover=0;
f.isout=1;
f._out.call(f,c);
}
this[g]=1;
this[g=="isout"?"isover":"isout"]=0;
this[g=="isover"?"_over":"_out"].call(this,c);
if(f&&g=="isout"){
f.isout=0;
f.isover=1;
f._over.call(f,c);
}
});
}};
})(jQuery);
(function(c){
c.widget("ui.resizable",c.extend({},c.ui.mouse,{_init:function(){
var e=this,j=this.options;
this.element.addClass("ui-resizable");
c.extend(this,{_aspectRatio:!!(j.aspectRatio),aspectRatio:j.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:j.helper||j.ghost||j.animate?j.helper||"ui-resizable-helper":null});
if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){
if(/relative/.test(this.element.css("position"))&&c.browser.opera){
this.element.css({position:"relative",top:"auto",left:"auto"});
}
this.element.wrap(c("<div class=\"ui-wrapper\" style=\"overflow: hidden;\"></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));
this.element=this.element.parent().data("resizable",this.element.data("resizable"));
this.elementIsWrapper=true;
this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});
this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});
this.originalResizeStyle=this.originalElement.css("resize");
this.originalElement.css("resize","none");
this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));
this.originalElement.css({margin:this.originalElement.css("margin")});
this._proportionallyResize();
}
this.handles=j.handles||(!c(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"});
if(this.handles.constructor==String){
if(this.handles=="all"){
this.handles="n,e,s,w,se,sw,ne,nw";
}
var k=this.handles.split(",");
this.handles={};
for(var f=0;f<k.length;f++){
var h=c.trim(k[f]),d="ui-resizable-"+h;
var g=c("<div class=\"ui-resizable-handle "+d+"\"></div>");
if(/sw|se|ne|nw/.test(h)){
g.css({zIndex:++j.zIndex});
}
if("se"==h){
g.addClass("ui-icon ui-icon-gripsmall-diagonal-se");
}
this.handles[h]=".ui-resizable-"+h;
this.element.append(g);
}
}
this._renderAxis=function(p){
p=p||this.element;
for(var m in this.handles){
if(this.handles[m].constructor==String){
this.handles[m]=c(this.handles[m],this.element).show();
}
if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){
var n=c(this.handles[m],this.element),o=0;
o=/sw|ne|nw|se|n|s/.test(m)?n.outerHeight():n.outerWidth();
var l=["padding",/ne|nw|n/.test(m)?"Top":/se|sw|s/.test(m)?"Bottom":/^e$/.test(m)?"Right":"Left"].join("");
p.css(l,o);
this._proportionallyResize();
}
if(!c(this.handles[m]).length){
continue;
}
}
};
this._renderAxis(this.element);
this._handles=c(".ui-resizable-handle",this.element).disableSelection();
this._handles.mouseover(function(){
if(!e.resizing){
if(this.className){
var i=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
}
e.axis=i&&i[1]?i[1]:"se";
}
});
if(j.autoHide){
this._handles.hide();
c(this.element).addClass("ui-resizable-autohide").hover(function(){
c(this).removeClass("ui-resizable-autohide");
e._handles.show();
},function(){
if(!e.resizing){
c(this).addClass("ui-resizable-autohide");
e._handles.hide();
}
});
}
this._mouseInit();
},destroy:function(){
this._mouseDestroy();
var d=function(f){
c(f).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove();
};
if(this.elementIsWrapper){
d(this.element);
var e=this.element;
e.parent().append(this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")})).end().remove();
}
this.originalElement.css("resize",this.originalResizeStyle);
d(this.originalElement);
},_mouseCapture:function(e){
var f=false;
for(var d in this.handles){
if(c(this.handles[d])[0]==e.target){
f=true;
}
}
return this.options.disabled||!!f;
},_mouseStart:function(f){
var i=this.options,e=this.element.position(),d=this.element;
this.resizing=true;
this.documentScroll={top:c(document).scrollTop(),left:c(document).scrollLeft()};
if(d.is(".ui-draggable")||(/absolute/).test(d.css("position"))){
d.css({position:"absolute",top:e.top,left:e.left});
}
if(c.browser.opera&&(/relative/).test(d.css("position"))){
d.css({position:"relative",top:"auto",left:"auto"});
}
this._renderProxy();
var j=b(this.helper.css("left")),g=b(this.helper.css("top"));
if(i.containment){
j+=c(i.containment).scrollLeft()||0;
g+=c(i.containment).scrollTop()||0;
}
this.offset=this.helper.offset();
this.position={left:j,top:g};
this.size=this._helper?{width:d.outerWidth(),height:d.outerHeight()}:{width:d.width(),height:d.height()};
this.originalSize=this._helper?{width:d.outerWidth(),height:d.outerHeight()}:{width:d.width(),height:d.height()};
this.originalPosition={left:j,top:g};
this.sizeDiff={width:d.outerWidth()-d.width(),height:d.outerHeight()-d.height()};
this.originalMousePosition={left:f.pageX,top:f.pageY};
this.aspectRatio=(typeof i.aspectRatio=="number")?i.aspectRatio:((this.originalSize.width/this.originalSize.height)||1);
var h=c(".ui-resizable-"+this.axis).css("cursor");
c("body").css("cursor",h=="auto"?this.axis+"-resize":h);
d.addClass("ui-resizable-resizing");
this._propagate("start",f);
return true;
},_mouseDrag:function(d){
var g=this.helper,f=this.options,l={},p=this,i=this.originalMousePosition,m=this.axis;
var q=(d.pageX-i.left)||0,n=(d.pageY-i.top)||0;
var h=this._change[m];
if(!h){
return false;
}
var k=h.apply(this,[d,q,n]),j=c.browser.msie&&c.browser.version<7,e=this.sizeDiff;
if(this._aspectRatio||d.shiftKey){
k=this._updateRatio(k,d);
}
k=this._respectSize(k,d);
this._propagate("resize",d);
g.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"});
if(!this._helper&&this._proportionallyResizeElements.length){
this._proportionallyResize();
}
this._updateCache(k);
this._trigger("resize",d,this.ui());
return false;
},_mouseStop:function(g){
this.resizing=false;
var h=this.options,l=this;
if(this._helper){
var f=this._proportionallyResizeElements,d=f.length&&(/textarea/i).test(f[0].nodeName),e=d&&c.ui.hasScroll(f[0],"left")?0:l.sizeDiff.height,j=d?0:l.sizeDiff.width;
var m={width:(l.size.width-j),height:(l.size.height-e)},i=(parseInt(l.element.css("left"),10)+(l.position.left-l.originalPosition.left))||null,k=(parseInt(l.element.css("top"),10)+(l.position.top-l.originalPosition.top))||null;
if(!h.animate){
this.element.css(c.extend(m,{top:k,left:i}));
}
l.helper.height(l.size.height);
l.helper.width(l.size.width);
if(this._helper&&!h.animate){
this._proportionallyResize();
}
}
c("body").css("cursor","auto");
this.element.removeClass("ui-resizable-resizing");
this._propagate("stop",g);
if(this._helper){
this.helper.remove();
}
return false;
},_updateCache:function(d){
var e=this.options;
this.offset=this.helper.offset();
if(a(d.left)){
this.position.left=d.left;
}
if(a(d.top)){
this.position.top=d.top;
}
if(a(d.height)){
this.size.height=d.height;
}
if(a(d.width)){
this.size.width=d.width;
}
},_updateRatio:function(g,f){
var h=this.options,i=this.position,e=this.size,d=this.axis;
if(g.height){
g.width=(e.height*this.aspectRatio);
}else{
if(g.width){
g.height=(e.width/this.aspectRatio);
}
}
if(d=="sw"){
g.left=i.left+(e.width-g.width);
g.top=null;
}
if(d=="nw"){
g.top=i.top+(e.height-g.height);
g.left=i.left+(e.width-g.width);
}
return g;
},_respectSize:function(k,f){
var i=this.helper,h=this.options,q=this._aspectRatio||f.shiftKey,p=this.axis,s=a(k.width)&&h.maxWidth&&(h.maxWidth<k.width),l=a(k.height)&&h.maxHeight&&(h.maxHeight<k.height),g=a(k.width)&&h.minWidth&&(h.minWidth>k.width),r=a(k.height)&&h.minHeight&&(h.minHeight>k.height);
if(g){
k.width=h.minWidth;
}
if(r){
k.height=h.minHeight;
}
if(s){
k.width=h.maxWidth;
}
if(l){
k.height=h.maxHeight;
}
var e=this.originalPosition.left+this.originalSize.width,n=this.position.top+this.size.height;
var j=/sw|nw|w/.test(p),d=/nw|ne|n/.test(p);
if(g&&j){
k.left=e-h.minWidth;
}
if(s&&j){
k.left=e-h.maxWidth;
}
if(r&&d){
k.top=n-h.minHeight;
}
if(l&&d){
k.top=n-h.maxHeight;
}
var m=!k.width&&!k.height;
if(m&&!k.left&&k.top){
k.top=null;
}else{
if(m&&!k.top&&k.left){
k.left=null;
}
}
return k;
},_proportionallyResize:function(){
var j=this.options;
if(!this._proportionallyResizeElements.length){
return;
}
var f=this.helper||this.element;
for(var e=0;e<this._proportionallyResizeElements.length;e++){
var g=this._proportionallyResizeElements[e];
if(!this.borderDif){
var d=[g.css("borderTopWidth"),g.css("borderRightWidth"),g.css("borderBottomWidth"),g.css("borderLeftWidth")],h=[g.css("paddingTop"),g.css("paddingRight"),g.css("paddingBottom"),g.css("paddingLeft")];
this.borderDif=c.map(d,function(k,m){
var l=parseInt(k,10)||0,n=parseInt(h[m],10)||0;
return l+n;
});
}
if(c.browser.msie&&!(!(c(f).is(":hidden")||c(f).parents(":hidden").length))){
continue;
}
g.css({height:(f.height()-this.borderDif[0]-this.borderDif[2])||0,width:(f.width()-this.borderDif[1]-this.borderDif[3])||0});
}
},_renderProxy:function(){
var e=this.element,h=this.options;
this.elementOffset=e.offset();
if(this._helper){
this.helper=this.helper||c("<div style=\"overflow:hidden;\"></div>");
var d=c.browser.msie&&c.browser.version<7,f=(d?1:0),g=(d?2:-1);
this.helper.addClass(this._helper).css({width:this.element.outerWidth()+g,height:this.element.outerHeight()+g,position:"absolute",left:this.elementOffset.left-f+"px",top:this.elementOffset.top-f+"px",zIndex:++h.zIndex});
this.helper.appendTo("body").disableSelection();
}else{
this.helper=this.element;
}
},_change:{e:function(f,e,d){
return {width:this.originalSize.width+e};
},w:function(g,e,d){
var i=this.options,f=this.originalSize,h=this.originalPosition;
return {left:h.left+e,width:f.width-e};
},n:function(g,e,d){
var i=this.options,f=this.originalSize,h=this.originalPosition;
return {top:h.top+d,height:f.height-d};
},s:function(f,e,d){
return {height:this.originalSize.height+d};
},se:function(f,e,d){
return c.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[f,e,d]));
},sw:function(f,e,d){
return c.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[f,e,d]));
},ne:function(f,e,d){
return c.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[f,e,d]));
},nw:function(f,e,d){
return c.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[f,e,d]));
}},_propagate:function(e,d){
c.ui.plugin.call(this,e,[d,this.ui()]);
(e!="resize"&&this._trigger(e,d,this.ui()));
},plugins:{},ui:function(){
return {originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition};
}}));
c.extend(c.ui.resizable,{version:"1.7.2",eventPrefix:"resize",defaults:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,cancel:":input,option",containment:false,delay:0,distance:1,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1000}});
c.ui.plugin.add("resizable","alsoResize",{start:function(e,f){
var d=c(this).data("resizable"),g=d.options;
_store=function(h){
c(h).each(function(){
c(this).data("resizable-alsoresize",{width:parseInt(c(this).width(),10),height:parseInt(c(this).height(),10),left:parseInt(c(this).css("left"),10),top:parseInt(c(this).css("top"),10)});
});
};
if(typeof (g.alsoResize)=="object"&&!g.alsoResize.parentNode){
if(g.alsoResize.length){
g.alsoResize=g.alsoResize[0];
_store(g.alsoResize);
}else{
c.each(g.alsoResize,function(h,i){
_store(h);
});
}
}else{
_store(g.alsoResize);
}
},resize:function(f,h){
var e=c(this).data("resizable"),i=e.options,g=e.originalSize,k=e.originalPosition;
var j={height:(e.size.height-g.height)||0,width:(e.size.width-g.width)||0,top:(e.position.top-k.top)||0,left:(e.position.left-k.left)||0},d=function(l,m){
c(l).each(function(){
var p=c(this),q=c(this).data("resizable-alsoresize"),o={},n=m&&m.length?m:["width","height","top","left"];
c.each(n||["width","height","top","left"],function(r,t){
var s=(q[t]||0)+(j[t]||0);
if(s&&s>=0){
o[t]=s||null;
}
});
if(/relative/.test(p.css("position"))&&c.browser.opera){
e._revertToRelativePosition=true;
p.css({position:"absolute",top:"auto",left:"auto"});
}
p.css(o);
});
};
if(typeof (i.alsoResize)=="object"&&!i.alsoResize.nodeType){
c.each(i.alsoResize,function(l,m){
d(l,m);
});
}else{
d(i.alsoResize);
}
},stop:function(e,f){
var d=c(this).data("resizable");
if(d._revertToRelativePosition&&c.browser.opera){
d._revertToRelativePosition=false;
el.css({position:"relative"});
}
c(this).removeData("resizable-alsoresize-start");
}});
c.ui.plugin.add("resizable","animate",{stop:function(h,m){
var n=c(this).data("resizable"),i=n.options;
var g=n._proportionallyResizeElements,d=g.length&&(/textarea/i).test(g[0].nodeName),e=d&&c.ui.hasScroll(g[0],"left")?0:n.sizeDiff.height,k=d?0:n.sizeDiff.width;
var f={width:(n.size.width-k),height:(n.size.height-e)},j=(parseInt(n.element.css("left"),10)+(n.position.left-n.originalPosition.left))||null,l=(parseInt(n.element.css("top"),10)+(n.position.top-n.originalPosition.top))||null;
n.element.animate(c.extend(f,l&&j?{top:l,left:j}:{}),{duration:i.animateDuration,easing:i.animateEasing,step:function(){
var o={width:parseInt(n.element.css("width"),10),height:parseInt(n.element.css("height"),10),top:parseInt(n.element.css("top"),10),left:parseInt(n.element.css("left"),10)};
if(g&&g.length){
c(g[0]).css({width:o.width,height:o.height});
}
n._updateCache(o);
n._propagate("resize",h);
}});
}});
c.ui.plugin.add("resizable","containment",{start:function(e,q){
var s=c(this).data("resizable"),i=s.options,k=s.element;
var f=i.containment,j=(f instanceof c)?f.get(0):(/parent/.test(f))?k.parent().get(0):f;
if(!j){
return;
}
s.containerElement=c(j);
if(/document/.test(f)||f==document){
s.containerOffset={left:0,top:0};
s.containerPosition={left:0,top:0};
s.parentData={element:c(document),left:0,top:0,width:c(document).width(),height:c(document).height()||document.body.parentNode.scrollHeight};
}else{
var m=c(j),h=[];
c(["Top","Right","Left","Bottom"]).each(function(p,o){
h[p]=b(m.css("padding"+o));
});
s.containerOffset=m.offset();
s.containerPosition=m.position();
s.containerSize={height:(m.innerHeight()-h[3]),width:(m.innerWidth()-h[1])};
var n=s.containerOffset,d=s.containerSize.height,l=s.containerSize.width,g=(c.ui.hasScroll(j,"left")?j.scrollWidth:l),r=(c.ui.hasScroll(j)?j.scrollHeight:d);
s.parentData={element:j,left:n.left,top:n.top,width:g,height:r};
}
},resize:function(f,p){
var s=c(this).data("resizable"),h=s.options,e=s.containerSize,n=s.containerOffset,l=s.size,m=s.position,q=s._aspectRatio||f.shiftKey,d={top:0,left:0},g=s.containerElement;
if(g[0]!=document&&(/static/).test(g.css("position"))){
d=n;
}
if(m.left<(s._helper?n.left:0)){
s.size.width=s.size.width+(s._helper?(s.position.left-n.left):(s.position.left-d.left));
if(q){
s.size.height=s.size.width/h.aspectRatio;
}
s.position.left=h.helper?n.left:0;
}
if(m.top<(s._helper?n.top:0)){
s.size.height=s.size.height+(s._helper?(s.position.top-n.top):s.position.top);
if(q){
s.size.width=s.size.height*h.aspectRatio;
}
s.position.top=s._helper?n.top:0;
}
s.offset.left=s.parentData.left+s.position.left;
s.offset.top=s.parentData.top+s.position.top;
var k=Math.abs((s._helper?s.offset.left-d.left:(s.offset.left-d.left))+s.sizeDiff.width),r=Math.abs((s._helper?s.offset.top-d.top:(s.offset.top-n.top))+s.sizeDiff.height);
var j=s.containerElement.get(0)==s.element.parent().get(0),i=/relative|absolute/.test(s.containerElement.css("position"));
if(j&&i){
k-=s.parentData.left;
}
if(k+s.size.width>=s.parentData.width){
s.size.width=s.parentData.width-k;
if(q){
s.size.height=s.size.width/s.aspectRatio;
}
}
if(r+s.size.height>=s.parentData.height){
s.size.height=s.parentData.height-r;
if(q){
s.size.width=s.size.height*s.aspectRatio;
}
}
},stop:function(e,m){
var p=c(this).data("resizable"),f=p.options,k=p.position,l=p.containerOffset,d=p.containerPosition,g=p.containerElement;
var i=c(p.helper),q=i.offset(),n=i.outerWidth()-p.sizeDiff.width,j=i.outerHeight()-p.sizeDiff.height;
if(p._helper&&!f.animate&&(/relative/).test(g.css("position"))){
c(this).css({left:q.left-d.left-l.left,width:n,height:j});
}
if(p._helper&&!f.animate&&(/static/).test(g.css("position"))){
c(this).css({left:q.left-d.left-l.left,width:n,height:j});
}
}});
c.ui.plugin.add("resizable","ghost",{start:function(f,g){
var d=c(this).data("resizable"),h=d.options,e=d.size;
d.ghost=d.originalElement.clone();
d.ghost.css({opacity:0.25,display:"block",position:"relative",height:e.height,width:e.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof h.ghost=="string"?h.ghost:"");
d.ghost.appendTo(d.helper);
},resize:function(e,f){
var d=c(this).data("resizable"),g=d.options;
if(d.ghost){
d.ghost.css({position:"relative",height:d.size.height,width:d.size.width});
}
},stop:function(e,f){
var d=c(this).data("resizable"),g=d.options;
if(d.ghost&&d.helper){
d.helper.get(0).removeChild(d.ghost.get(0));
}
}});
c.ui.plugin.add("resizable","grid",{resize:function(d,l){
var n=c(this).data("resizable"),g=n.options,j=n.size,h=n.originalSize,i=n.originalPosition,m=n.axis,k=g._aspectRatio||d.shiftKey;
g.grid=typeof g.grid=="number"?[g.grid,g.grid]:g.grid;
var f=Math.round((j.width-h.width)/(g.grid[0]||1))*(g.grid[0]||1),e=Math.round((j.height-h.height)/(g.grid[1]||1))*(g.grid[1]||1);
if(/^(se|s|e)$/.test(m)){
n.size.width=h.width+f;
n.size.height=h.height+e;
}else{
if(/^(ne)$/.test(m)){
n.size.width=h.width+f;
n.size.height=h.height+e;
n.position.top=i.top-e;
}else{
if(/^(sw)$/.test(m)){
n.size.width=h.width+f;
n.size.height=h.height+e;
n.position.left=i.left-f;
}else{
n.size.width=h.width+f;
n.size.height=h.height+e;
n.position.top=i.top-e;
n.position.left=i.left-f;
}
}
}
}});
var b=function(d){
return parseInt(d,10)||0;
};
var a=function(d){
return !isNaN(parseInt(d,10));
};
})(jQuery);
(function(a){
a.widget("ui.selectable",a.extend({},a.ui.mouse,{_init:function(){
var b=this;
this.element.addClass("ui-selectable");
this.dragged=false;
var c;
this.refresh=function(){
c=a(b.options.filter,b.element[0]);
c.each(function(){
var d=a(this);
var e=d.offset();
a.data(this,"selectable-item",{element:this,$element:d,left:e.left,top:e.top,right:e.left+d.outerWidth(),bottom:e.top+d.outerHeight(),startselected:false,selected:d.hasClass("ui-selected"),selecting:d.hasClass("ui-selecting"),unselecting:d.hasClass("ui-unselecting")});
});
};
this.refresh();
this.selectees=c.addClass("ui-selectee");
this._mouseInit();
this.helper=a(document.createElement("div")).css({border:"1px dotted black"}).addClass("ui-selectable-helper");
},destroy:function(){
this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable");
this._mouseDestroy();
},_mouseStart:function(d){
var b=this;
this.opos=[d.pageX,d.pageY];
if(this.options.disabled){
return;
}
var c=this.options;
this.selectees=a(c.filter,this.element[0]);
this._trigger("start",d);
a(c.appendTo).append(this.helper);
this.helper.css({"z-index":100,position:"absolute",left:d.clientX,top:d.clientY,width:0,height:0});
if(c.autoRefresh){
this.refresh();
}
this.selectees.filter(".ui-selected").each(function(){
var e=a.data(this,"selectable-item");
e.startselected=true;
if(!d.metaKey){
e.$element.removeClass("ui-selected");
e.selected=false;
e.$element.addClass("ui-unselecting");
e.unselecting=true;
b._trigger("unselecting",d,{unselecting:e.element});
}
});
a(d.target).parents().andSelf().each(function(){
var e=a.data(this,"selectable-item");
if(e){
e.$element.removeClass("ui-unselecting").addClass("ui-selecting");
e.unselecting=false;
e.selecting=true;
e.selected=true;
b._trigger("selecting",d,{selecting:e.element});
return false;
}
});
},_mouseDrag:function(i){
var c=this;
this.dragged=true;
if(this.options.disabled){
return;
}
var e=this.options;
var d=this.opos[0],h=this.opos[1],b=i.pageX,g=i.pageY;
if(d>b){
var f=b;
b=d;
d=f;
}
if(h>g){
var f=g;
g=h;
h=f;
}
this.helper.css({left:d,top:h,width:b-d,height:g-h});
this.selectees.each(function(){
var j=a.data(this,"selectable-item");
if(!j||j.element==c.element[0]){
return;
}
var k=false;
if(e.tolerance=="touch"){
k=(!(j.left>b||j.right<d||j.top>g||j.bottom<h));
}else{
if(e.tolerance=="fit"){
k=(j.left>d&&j.right<b&&j.top>h&&j.bottom<g);
}
}
if(k){
if(j.selected){
j.$element.removeClass("ui-selected");
j.selected=false;
}
if(j.unselecting){
j.$element.removeClass("ui-unselecting");
j.unselecting=false;
}
if(!j.selecting){
j.$element.addClass("ui-selecting");
j.selecting=true;
c._trigger("selecting",i,{selecting:j.element});
}
}else{
if(j.selecting){
if(i.metaKey&&j.startselected){
j.$element.removeClass("ui-selecting");
j.selecting=false;
j.$element.addClass("ui-selected");
j.selected=true;
}else{
j.$element.removeClass("ui-selecting");
j.selecting=false;
if(j.startselected){
j.$element.addClass("ui-unselecting");
j.unselecting=true;
}
c._trigger("unselecting",i,{unselecting:j.element});
}
}
if(j.selected){
if(!i.metaKey&&!j.startselected){
j.$element.removeClass("ui-selected");
j.selected=false;
j.$element.addClass("ui-unselecting");
j.unselecting=true;
c._trigger("unselecting",i,{unselecting:j.element});
}
}
}
});
return false;
},_mouseStop:function(d){
var b=this;
this.dragged=false;
var c=this.options;
a(".ui-unselecting",this.element[0]).each(function(){
var e=a.data(this,"selectable-item");
e.$element.removeClass("ui-unselecting");
e.unselecting=false;
e.startselected=false;
b._trigger("unselected",d,{unselected:e.element});
});
a(".ui-selecting",this.element[0]).each(function(){
var e=a.data(this,"selectable-item");
e.$element.removeClass("ui-selecting").addClass("ui-selected");
e.selecting=false;
e.selected=true;
e.startselected=true;
b._trigger("selected",d,{selected:e.element});
});
this._trigger("stop",d);
this.helper.remove();
return false;
}}));
a.extend(a.ui.selectable,{version:"1.7.2",defaults:{appendTo:"body",autoRefresh:true,cancel:":input,option",delay:0,distance:0,filter:"*",tolerance:"touch"}});
})(jQuery);
(function(a){
a.widget("ui.sortable",a.extend({},a.ui.mouse,{_init:function(){
var b=this.options;
this.containerCache={};
this.element.addClass("ui-sortable");
this.refresh();
this.floating=this.items.length?(/left|right/).test(this.items[0].item.css("float")):false;
this.offset=this.element.offset();
this._mouseInit();
},destroy:function(){
this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable");
this._mouseDestroy();
for(var b=this.items.length-1;b>=0;b--){
this.items[b].item.removeData("sortable-item");
}
},_mouseCapture:function(e,f){
if(this.reverting){
return false;
}
if(this.options.disabled||this.options.type=="static"){
return false;
}
this._refreshItems(e);
var d=null,c=this,b=a(e.target).parents().each(function(){
if(a.data(this,"sortable-item")==c){
d=a(this);
return false;
}
});
if(a.data(e.target,"sortable-item")==c){
d=a(e.target);
}
if(!d){
return false;
}
if(this.options.handle&&!f){
var g=false;
a(this.options.handle,d).find("*").andSelf().each(function(){
if(this==e.target){
g=true;
}
});
if(!g){
return false;
}
}
this.currentItem=d;
this._removeCurrentsFromItems();
return true;
},_mouseStart:function(e,f,b){
var g=this.options,c=this;
this.currentContainer=this;
this.refreshPositions();
this.helper=this._createHelper(e);
this._cacheHelperProportions();
this._cacheMargins();
this.scrollParent=this.helper.scrollParent();
this.offset=this.currentItem.offset();
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};
this.helper.css("position","absolute");
this.cssPosition=this.helper.css("position");
a.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.originalPosition=this._generatePosition(e);
this.originalPageX=e.pageX;
this.originalPageY=e.pageY;
if(g.cursorAt){
this._adjustOffsetFromHelper(g.cursorAt);
}
this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};
if(this.helper[0]!=this.currentItem[0]){
this.currentItem.hide();
}
this._createPlaceholder();
if(g.containment){
this._setContainment();
}
if(g.cursor){
if(a("body").css("cursor")){
this._storedCursor=a("body").css("cursor");
}
a("body").css("cursor",g.cursor);
}
if(g.opacity){
if(this.helper.css("opacity")){
this._storedOpacity=this.helper.css("opacity");
}
this.helper.css("opacity",g.opacity);
}
if(g.zIndex){
if(this.helper.css("zIndex")){
this._storedZIndex=this.helper.css("zIndex");
}
this.helper.css("zIndex",g.zIndex);
}
if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){
this.overflowOffset=this.scrollParent.offset();
}
this._trigger("start",e,this._uiHash());
if(!this._preserveHelperProportions){
this._cacheHelperProportions();
}
if(!b){
for(var d=this.containers.length-1;d>=0;d--){
this.containers[d]._trigger("activate",e,c._uiHash(this));
}
}
if(a.ui.ddmanager){
a.ui.ddmanager.current=this;
}
if(a.ui.ddmanager&&!g.dropBehaviour){
a.ui.ddmanager.prepareOffsets(this,e);
}
this.dragging=true;
this.helper.addClass("ui-sortable-helper");
this._mouseDrag(e);
return true;
},_mouseDrag:function(f){
this.position=this._generatePosition(f);
this.positionAbs=this._convertPositionTo("absolute");
if(!this.lastPositionAbs){
this.lastPositionAbs=this.positionAbs;
}
if(this.options.scroll){
var g=this.options,b=false;
if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){
if((this.overflowOffset.top+this.scrollParent[0].offsetHeight)-f.pageY<g.scrollSensitivity){
this.scrollParent[0].scrollTop=b=this.scrollParent[0].scrollTop+g.scrollSpeed;
}else{
if(f.pageY-this.overflowOffset.top<g.scrollSensitivity){
this.scrollParent[0].scrollTop=b=this.scrollParent[0].scrollTop-g.scrollSpeed;
}
}
if((this.overflowOffset.left+this.scrollParent[0].offsetWidth)-f.pageX<g.scrollSensitivity){
this.scrollParent[0].scrollLeft=b=this.scrollParent[0].scrollLeft+g.scrollSpeed;
}else{
if(f.pageX-this.overflowOffset.left<g.scrollSensitivity){
this.scrollParent[0].scrollLeft=b=this.scrollParent[0].scrollLeft-g.scrollSpeed;
}
}
}else{
if(f.pageY-a(document).scrollTop()<g.scrollSensitivity){
b=a(document).scrollTop(a(document).scrollTop()-g.scrollSpeed);
}else{
if(a(window).height()-(f.pageY-a(document).scrollTop())<g.scrollSensitivity){
b=a(document).scrollTop(a(document).scrollTop()+g.scrollSpeed);
}
}
if(f.pageX-a(document).scrollLeft()<g.scrollSensitivity){
b=a(document).scrollLeft(a(document).scrollLeft()-g.scrollSpeed);
}else{
if(a(window).width()-(f.pageX-a(document).scrollLeft())<g.scrollSensitivity){
b=a(document).scrollLeft(a(document).scrollLeft()+g.scrollSpeed);
}
}
}
if(b!==false&&a.ui.ddmanager&&!g.dropBehaviour){
a.ui.ddmanager.prepareOffsets(this,f);
}
}
this.positionAbs=this._convertPositionTo("absolute");
if(!this.options.axis||this.options.axis!="y"){
this.helper[0].style.left=this.position.left+"px";
}
if(!this.options.axis||this.options.axis!="x"){
this.helper[0].style.top=this.position.top+"px";
}
for(var d=this.items.length-1;d>=0;d--){
var e=this.items[d],c=e.item[0],h=this._intersectsWithPointer(e);
if(!h){
continue;
}
if(c!=this.currentItem[0]&&this.placeholder[h==1?"next":"prev"]()[0]!=c&&!a.ui.contains(this.placeholder[0],c)&&(this.options.type=="semi-dynamic"?!a.ui.contains(this.element[0],c):true)){
this.direction=h==1?"down":"up";
if(this.options.tolerance=="pointer"||this._intersectsWithSides(e)){
this._rearrange(f,e);
}else{
break;
}
this._trigger("change",f,this._uiHash());
break;
}
}
this._contactContainers(f);
if(a.ui.ddmanager){
a.ui.ddmanager.drag(this,f);
}
this._trigger("sort",f,this._uiHash());
this.lastPositionAbs=this.positionAbs;
return false;
},_mouseStop:function(c,d){
if(!c){
return;
}
if(a.ui.ddmanager&&!this.options.dropBehaviour){
a.ui.ddmanager.drop(this,c);
}
if(this.options.revert){
var b=this;
var e=b.placeholder.offset();
b.reverting=true;
a(this.helper).animate({left:e.left-this.offset.parent.left-b.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:e.top-this.offset.parent.top-b.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){
b._clear(c);
});
}else{
this._clear(c,d);
}
return false;
},cancel:function(){
var b=this;
if(this.dragging){
this._mouseUp();
if(this.options.helper=="original"){
this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
}else{
this.currentItem.show();
}
for(var c=this.containers.length-1;c>=0;c--){
this.containers[c]._trigger("deactivate",null,b._uiHash(this));
if(this.containers[c].containerCache.over){
this.containers[c]._trigger("out",null,b._uiHash(this));
this.containers[c].containerCache.over=0;
}
}
}
if(this.placeholder[0].parentNode){
this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
}
if(this.options.helper!="original"&&this.helper&&this.helper[0].parentNode){
this.helper.remove();
}
a.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});
if(this.domPosition.prev){
a(this.domPosition.prev).after(this.currentItem);
}else{
a(this.domPosition.parent).prepend(this.currentItem);
}
return true;
},serialize:function(d){
var b=this._getItemsAsjQuery(d&&d.connected);
var c=[];
d=d||{};
a(b).each(function(){
var e=(a(d.item||this).attr(d.attribute||"id")||"").match(d.expression||(/(.+)[-=_](.+)/));
if(e){
c.push((d.key||e[1]+"[]")+"="+(d.key&&d.expression?e[1]:e[2]));
}
});
return c.join("&");
},toArray:function(d){
var b=this._getItemsAsjQuery(d&&d.connected);
var c=[];
d=d||{};
b.each(function(){
c.push(a(d.item||this).attr(d.attribute||"id")||"");
});
return c;
},_intersectsWith:function(m){
var e=this.positionAbs.left,d=e+this.helperProportions.width,k=this.positionAbs.top,j=k+this.helperProportions.height;
var f=m.left,c=f+m.width,n=m.top,i=n+m.height;
var o=this.offset.click.top,h=this.offset.click.left;
var g=(k+o)>n&&(k+o)<i&&(e+h)>f&&(e+h)<c;
if(this.options.tolerance=="pointer"||this.options.forcePointerForContainers||(this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>m[this.floating?"width":"height"])){
return g;
}else{
return (f<e+(this.helperProportions.width/2)&&d-(this.helperProportions.width/2)<c&&n<k+(this.helperProportions.height/2)&&j-(this.helperProportions.height/2)<i);
}
},_intersectsWithPointer:function(d){
var e=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,d.top,d.height),c=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,d.left,d.width),g=e&&c,b=this._getDragVerticalDirection(),f=this._getDragHorizontalDirection();
if(!g){
return false;
}
return this.floating?(((f&&f=="right")||b=="down")?2:1):(b&&(b=="down"?2:1));
},_intersectsWithSides:function(e){
var c=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,e.top+(e.height/2),e.height),d=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,e.left+(e.width/2),e.width),b=this._getDragVerticalDirection(),f=this._getDragHorizontalDirection();
if(this.floating&&f){
return ((f=="right"&&d)||(f=="left"&&!d));
}else{
return b&&((b=="down"&&c)||(b=="up"&&!c));
}
},_getDragVerticalDirection:function(){
var b=this.positionAbs.top-this.lastPositionAbs.top;
return b!=0&&(b>0?"down":"up");
},_getDragHorizontalDirection:function(){
var b=this.positionAbs.left-this.lastPositionAbs.left;
return b!=0&&(b>0?"right":"left");
},refresh:function(b){
this._refreshItems(b);
this.refreshPositions();
},_connectWith:function(){
var b=this.options;
return b.connectWith.constructor==String?[b.connectWith]:b.connectWith;
},_getItemsAsjQuery:function(b){
var l=this;
var g=[];
var e=[];
var h=this._connectWith();
if(h&&b){
for(var d=h.length-1;d>=0;d--){
var k=a(h[d]);
for(var c=k.length-1;c>=0;c--){
var f=a.data(k[c],"sortable");
if(f&&f!=this&&!f.options.disabled){
e.push([a.isFunction(f.options.items)?f.options.items.call(f.element):a(f.options.items,f.element).not(".ui-sortable-helper"),f]);
}
}
}
}
e.push([a.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):a(this.options.items,this.element).not(".ui-sortable-helper"),this]);
for(var d=e.length-1;d>=0;d--){
e[d][0].each(function(){
g.push(this);
});
}
return a(g);
},_removeCurrentsFromItems:function(){
var d=this.currentItem.find(":data(sortable-item)");
for(var c=0;c<this.items.length;c++){
for(var b=0;b<d.length;b++){
if(d[b]==this.items[c].item[0]){
this.items.splice(c,1);
}
}
}
},_refreshItems:function(b){
this.items=[];
this.containers=[this];
var h=this.items;
var p=this;
var f=[[a.isFunction(this.options.items)?this.options.items.call(this.element[0],b,{item:this.currentItem}):a(this.options.items,this.element),this]];
var l=this._connectWith();
if(l){
for(var e=l.length-1;e>=0;e--){
var m=a(l[e]);
for(var d=m.length-1;d>=0;d--){
var g=a.data(m[d],"sortable");
if(g&&g!=this&&!g.options.disabled){
f.push([a.isFunction(g.options.items)?g.options.items.call(g.element[0],b,{item:this.currentItem}):a(g.options.items,g.element),g]);
this.containers.push(g);
}
}
}
}
for(var e=f.length-1;e>=0;e--){
var k=f[e][1];
var c=f[e][0];
for(var d=0,n=c.length;d<n;d++){
var o=a(c[d]);
o.data("sortable-item",k);
h.push({item:o,instance:k,width:0,height:0,left:0,top:0});
}
}
},refreshPositions:function(b){
if(this.offsetParent&&this.helper){
this.offset.parent=this._getParentOffset();
}
for(var d=this.items.length-1;d>=0;d--){
var e=this.items[d];
if(e.instance!=this.currentContainer&&this.currentContainer&&e.item[0]!=this.currentItem[0]){
continue;
}
var c=this.options.toleranceElement?a(this.options.toleranceElement,e.item):e.item;
if(!b){
e.width=c.outerWidth();
e.height=c.outerHeight();
}
var f=c.offset();
e.left=f.left;
e.top=f.top;
}
if(this.options.custom&&this.options.custom.refreshContainers){
this.options.custom.refreshContainers.call(this);
}else{
for(var d=this.containers.length-1;d>=0;d--){
var f=this.containers[d].element.offset();
this.containers[d].containerCache.left=f.left;
this.containers[d].containerCache.top=f.top;
this.containers[d].containerCache.width=this.containers[d].element.outerWidth();
this.containers[d].containerCache.height=this.containers[d].element.outerHeight();
}
}
},_createPlaceholder:function(d){
var b=d||this,e=b.options;
if(!e.placeholder||e.placeholder.constructor==String){
var c=e.placeholder;
e.placeholder={element:function(){
var f=a(document.createElement(b.currentItem[0].nodeName)).addClass(c||b.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
if(!c){
f.style.visibility="hidden";
}
return f;
},update:function(f,g){
if(c&&!e.forcePlaceholderSize){
return;
}
if(!g.height()){
g.height(b.currentItem.innerHeight()-parseInt(b.currentItem.css("paddingTop")||0,10)-parseInt(b.currentItem.css("paddingBottom")||0,10));
}
if(!g.width()){
g.width(b.currentItem.innerWidth()-parseInt(b.currentItem.css("paddingLeft")||0,10)-parseInt(b.currentItem.css("paddingRight")||0,10));
}
}};
}
b.placeholder=a(e.placeholder.element.call(b.element,b.currentItem));
b.currentItem.after(b.placeholder);
e.placeholder.update(b,b.placeholder);
},_contactContainers:function(d){
for(var c=this.containers.length-1;c>=0;c--){
if(this._intersectsWith(this.containers[c].containerCache)){
if(!this.containers[c].containerCache.over){
if(this.currentContainer!=this.containers[c]){
var h=10000;
var g=null;
var e=this.positionAbs[this.containers[c].floating?"left":"top"];
for(var b=this.items.length-1;b>=0;b--){
if(!a.ui.contains(this.containers[c].element[0],this.items[b].item[0])){
continue;
}
var f=this.items[b][this.containers[c].floating?"left":"top"];
if(Math.abs(f-e)<h){
h=Math.abs(f-e);
g=this.items[b];
}
}
if(!g&&!this.options.dropOnEmpty){
continue;
}
this.currentContainer=this.containers[c];
g?this._rearrange(d,g,null,true):this._rearrange(d,null,this.containers[c].element,true);
this._trigger("change",d,this._uiHash());
this.containers[c]._trigger("change",d,this._uiHash(this));
this.options.placeholder.update(this.currentContainer,this.placeholder);
}
this.containers[c]._trigger("over",d,this._uiHash(this));
this.containers[c].containerCache.over=1;
}
}else{
if(this.containers[c].containerCache.over){
this.containers[c]._trigger("out",d,this._uiHash(this));
this.containers[c].containerCache.over=0;
}
}
}
},_createHelper:function(c){
var d=this.options;
var b=a.isFunction(d.helper)?a(d.helper.apply(this.element[0],[c,this.currentItem])):(d.helper=="clone"?this.currentItem.clone():this.currentItem);
if(!b.parents("body").length){
a(d.appendTo!="parent"?d.appendTo:this.currentItem[0].parentNode)[0].appendChild(b[0]);
}
if(b[0]==this.currentItem[0]){
this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")};
}
if(b[0].style.width==""||d.forceHelperSize){
b.width(this.currentItem.width());
}
if(b[0].style.height==""||d.forceHelperSize){
b.height(this.currentItem.height());
}
return b;
},_adjustOffsetFromHelper:function(b){
if(b.left!=undefined){
this.offset.click.left=b.left+this.margins.left;
}
if(b.right!=undefined){
this.offset.click.left=this.helperProportions.width-b.right+this.margins.left;
}
if(b.top!=undefined){
this.offset.click.top=b.top+this.margins.top;
}
if(b.bottom!=undefined){
this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top;
}
},_getParentOffset:function(){
this.offsetParent=this.helper.offsetParent();
var b=this.offsetParent.offset();
if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])){
b.left+=this.scrollParent.scrollLeft();
b.top+=this.scrollParent.scrollTop();
}
if((this.offsetParent[0]==document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)){
b={top:0,left:0};
}
return {top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)};
},_getRelativeOffset:function(){
if(this.cssPosition=="relative"){
var b=this.currentItem.position();
return {top:b.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:b.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()};
}else{
return {top:0,left:0};
}
},_cacheMargins:function(){
this.margins={left:(parseInt(this.currentItem.css("marginLeft"),10)||0),top:(parseInt(this.currentItem.css("marginTop"),10)||0)};
},_cacheHelperProportions:function(){
this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()};
},_setContainment:function(){
var e=this.options;
if(e.containment=="parent"){
e.containment=this.helper[0].parentNode;
}
if(e.containment=="document"||e.containment=="window"){
this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,a(e.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a(e.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];
}
if(!(/^(document|window|parent)$/).test(e.containment)){
var c=a(e.containment)[0];
var d=a(e.containment).offset();
var b=(a(c).css("overflow")!="hidden");
this.containment=[d.left+(parseInt(a(c).css("borderLeftWidth"),10)||0)+(parseInt(a(c).css("paddingLeft"),10)||0)-this.margins.left,d.top+(parseInt(a(c).css("borderTopWidth"),10)||0)+(parseInt(a(c).css("paddingTop"),10)||0)-this.margins.top,d.left+(b?Math.max(c.scrollWidth,c.offsetWidth):c.offsetWidth)-(parseInt(a(c).css("borderLeftWidth"),10)||0)-(parseInt(a(c).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,d.top+(b?Math.max(c.scrollHeight,c.offsetHeight):c.offsetHeight)-(parseInt(a(c).css("borderTopWidth"),10)||0)-(parseInt(a(c).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top];
}
},_convertPositionTo:function(f,h){
if(!h){
h=this.position;
}
var c=f=="absolute"?1:-1;
var e=this.options,b=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=(/(html|body)/i).test(b[0].tagName);
return {top:(h.top+this.offset.relative.top*c+this.offset.parent.top*c-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(g?0:b.scrollTop()))*c)),left:(h.left+this.offset.relative.left*c+this.offset.parent.left*c-(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:b.scrollLeft())*c))};
},_generatePosition:function(e){
var h=this.options,b=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,i=(/(html|body)/i).test(b[0].tagName);
if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0])){
this.offset.relative=this._getRelativeOffset();
}
var d=e.pageX;
var c=e.pageY;
if(this.originalPosition){
if(this.containment){
if(e.pageX-this.offset.click.left<this.containment[0]){
d=this.containment[0]+this.offset.click.left;
}
if(e.pageY-this.offset.click.top<this.containment[1]){
c=this.containment[1]+this.offset.click.top;
}
if(e.pageX-this.offset.click.left>this.containment[2]){
d=this.containment[2]+this.offset.click.left;
}
if(e.pageY-this.offset.click.top>this.containment[3]){
c=this.containment[3]+this.offset.click.top;
}
}
if(h.grid){
var g=this.originalPageY+Math.round((c-this.originalPageY)/h.grid[1])*h.grid[1];
c=this.containment?(!(g-this.offset.click.top<this.containment[1]||g-this.offset.click.top>this.containment[3])?g:(!(g-this.offset.click.top<this.containment[1])?g-h.grid[1]:g+h.grid[1])):g;
var f=this.originalPageX+Math.round((d-this.originalPageX)/h.grid[0])*h.grid[0];
d=this.containment?(!(f-this.offset.click.left<this.containment[0]||f-this.offset.click.left>this.containment[2])?f:(!(f-this.offset.click.left<this.containment[0])?f-h.grid[0]:f+h.grid[0])):f;
}
}
return {top:(c-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(i?0:b.scrollTop())))),left:(d-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():i?0:b.scrollLeft())))};
},_rearrange:function(g,f,c,e){
c?c[0].appendChild(this.placeholder[0]):f.item[0].parentNode.insertBefore(this.placeholder[0],(this.direction=="down"?f.item[0]:f.item[0].nextSibling));
this.counter=this.counter?++this.counter:1;
var d=this,b=this.counter;
window.setTimeout(function(){
if(b==d.counter){
d.refreshPositions(!e);
}
},0);
},_clear:function(d,e){
this.reverting=false;
var f=[],b=this;
if(!this._noFinalSort&&this.currentItem[0].parentNode){
this.placeholder.before(this.currentItem);
}
this._noFinalSort=null;
if(this.helper[0]==this.currentItem[0]){
for(var c in this._storedCSS){
if(this._storedCSS[c]=="auto"||this._storedCSS[c]=="static"){
this._storedCSS[c]="";
}
}
this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
}else{
this.currentItem.show();
}
if(this.fromOutside&&!e){
f.push(function(g){
this._trigger("receive",g,this._uiHash(this.fromOutside));
});
}
if((this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!e){
f.push(function(g){
this._trigger("update",g,this._uiHash());
});
}
if(!a.ui.contains(this.element[0],this.currentItem[0])){
if(!e){
f.push(function(g){
this._trigger("remove",g,this._uiHash());
});
}
for(var c=this.containers.length-1;c>=0;c--){
if(a.ui.contains(this.containers[c].element[0],this.currentItem[0])&&!e){
f.push((function(g){
return function(h){
g._trigger("receive",h,this._uiHash(this));
};
}).call(this,this.containers[c]));
f.push((function(g){
return function(h){
g._trigger("update",h,this._uiHash(this));
};
}).call(this,this.containers[c]));
}
}
}
for(var c=this.containers.length-1;c>=0;c--){
if(!e){
f.push((function(g){
return function(h){
g._trigger("deactivate",h,this._uiHash(this));
};
}).call(this,this.containers[c]));
}
if(this.containers[c].containerCache.over){
f.push((function(g){
return function(h){
g._trigger("out",h,this._uiHash(this));
};
}).call(this,this.containers[c]));
this.containers[c].containerCache.over=0;
}
}
if(this._storedCursor){
a("body").css("cursor",this._storedCursor);
}
if(this._storedOpacity){
this.helper.css("opacity",this._storedOpacity);
}
if(this._storedZIndex){
this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex);
}
this.dragging=false;
if(this.cancelHelperRemoval){
if(!e){
this._trigger("beforeStop",d,this._uiHash());
for(var c=0;c<f.length;c++){
f[c].call(this,d);
}
this._trigger("stop",d,this._uiHash());
}
return false;
}
if(!e){
this._trigger("beforeStop",d,this._uiHash());
}
this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
if(this.helper[0]!=this.currentItem[0]){
this.helper.remove();
}
this.helper=null;
if(!e){
for(var c=0;c<f.length;c++){
f[c].call(this,d);
}
this._trigger("stop",d,this._uiHash());
}
this.fromOutside=false;
return true;
},_trigger:function(){
if(a.widget.prototype._trigger.apply(this,arguments)===false){
this.cancel();
}
},_uiHash:function(c){
var b=c||this;
return {helper:b.helper,placeholder:b.placeholder||a([]),position:b.position,absolutePosition:b.positionAbs,offset:b.positionAbs,item:b.currentItem,sender:c?c.element:null};
}}));
a.extend(a.ui.sortable,{getter:"serialize toArray",version:"1.7.2",eventPrefix:"sort",defaults:{appendTo:"parent",axis:false,cancel:":input,option",connectWith:false,containment:false,cursor:"auto",cursorAt:false,delay:0,distance:1,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000}});
})(jQuery);
(function(a){
a.widget("ui.accordion",{_init:function(){
var d=this.options,b=this;
this.running=0;
if(d.collapsible==a.ui.accordion.defaults.collapsible&&d.alwaysOpen!=a.ui.accordion.defaults.alwaysOpen){
d.collapsible=!d.alwaysOpen;
}
if(d.navigation){
var c=this.element.find("a").filter(d.navigationFilter);
if(c.length){
if(c.filter(d.header).length){
this.active=c;
}else{
this.active=c.parent().parent().prev();
c.addClass("ui-accordion-content-active");
}
}
}
this.element.addClass("ui-accordion ui-widget ui-helper-reset");
if(this.element[0].nodeName=="UL"){
this.element.children("li").addClass("ui-accordion-li-fix");
}
this.headers=this.element.find(d.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){
a(this).addClass("ui-state-hover");
}).bind("mouseleave.accordion",function(){
a(this).removeClass("ui-state-hover");
}).bind("focus.accordion",function(){
a(this).addClass("ui-state-focus");
}).bind("blur.accordion",function(){
a(this).removeClass("ui-state-focus");
});
this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");
this.active=this._findActive(this.active||d.active).toggleClass("ui-state-default").toggleClass("ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");
this.active.next().addClass("ui-accordion-content-active");
a("<span/>").addClass("ui-icon "+d.icons.header).prependTo(this.headers);
this.active.find(".ui-icon").toggleClass(d.icons.header).toggleClass(d.icons.headerSelected);
if(a.browser.msie){
this.element.find("a").css("zoom","1");
}
this.resize();
this.element.attr("role","tablist");
this.headers.attr("role","tab").bind("keydown",function(e){
return b._keydown(e);
}).next().attr("role","tabpanel");
this.headers.not(this.active||"").attr("aria-expanded","false").attr("tabIndex","-1").next().hide();
if(!this.active.length){
this.headers.eq(0).attr("tabIndex","0");
}else{
this.active.attr("aria-expanded","true").attr("tabIndex","0");
}
if(!a.browser.safari){
this.headers.find("a").attr("tabIndex","-1");
}
if(d.event){
this.headers.bind((d.event)+".accordion",function(e){
return b._clickHandler.call(b,e,this);
});
}
},destroy:function(){
var c=this.options;
this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role").unbind(".accordion").removeData("accordion");
this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("tabindex");
this.headers.find("a").removeAttr("tabindex");
this.headers.children(".ui-icon").remove();
var b=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active");
if(c.autoHeight||c.fillHeight){
b.css("height","");
}
},_setData:function(b,c){
if(b=="alwaysOpen"){
b="collapsible";
c=!c;
}
a.widget.prototype._setData.apply(this,arguments);
},_keydown:function(e){
var g=this.options,f=a.ui.keyCode;
if(g.disabled||e.altKey||e.ctrlKey){
return;
}
var d=this.headers.length;
var b=this.headers.index(e.target);
var c=false;
switch(e.keyCode){
case f.RIGHT:
case f.DOWN:
c=this.headers[(b+1)%d];
break;
case f.LEFT:
case f.UP:
c=this.headers[(b-1+d)%d];
break;
case f.SPACE:
case f.ENTER:
return this._clickHandler({target:e.target},e.target);
}
if(c){
a(e.target).attr("tabIndex","-1");
a(c).attr("tabIndex","0");
c.focus();
return false;
}
return true;
},resize:function(){
var e=this.options,d;
if(e.fillSpace){
if(a.browser.msie){
var b=this.element.parent().css("overflow");
this.element.parent().css("overflow","hidden");
}
d=this.element.parent().height();
if(a.browser.msie){
this.element.parent().css("overflow",b);
}
this.headers.each(function(){
d-=a(this).outerHeight();
});
var c=0;
this.headers.next().each(function(){
c=Math.max(c,a(this).innerHeight()-a(this).height());
}).height(Math.max(0,d-c)).css("overflow","auto");
}else{
if(e.autoHeight){
d=0;
this.headers.next().each(function(){
d=Math.max(d,a(this).outerHeight());
}).height(d);
}
}
},activate:function(b){
var c=this._findActive(b)[0];
this._clickHandler({target:c},c);
},_findActive:function(b){
return b?typeof b=="number"?this.headers.filter(":eq("+b+")"):this.headers.not(this.headers.not(b)):b===false?a([]):this.headers.filter(":eq(0)");
},_clickHandler:function(b,f){
var d=this.options;
if(d.disabled){
return false;
}
if(!b.target&&d.collapsible){
this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").find(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);
this.active.next().addClass("ui-accordion-content-active");
var h=this.active.next(),e={options:d,newHeader:a([]),oldHeader:d.active,newContent:a([]),oldContent:h},c=(this.active=a([]));
this._toggle(c,h,e);
return false;
}
var g=a(b.currentTarget||f);
var i=g[0]==this.active[0];
if(this.running||(!d.collapsible&&i)){
return false;
}
this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").find(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);
this.active.next().addClass("ui-accordion-content-active");
if(!i){
g.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").find(".ui-icon").removeClass(d.icons.header).addClass(d.icons.headerSelected);
g.next().addClass("ui-accordion-content-active");
}
var c=g.next(),h=this.active.next(),e={options:d,newHeader:i&&d.collapsible?a([]):g,oldHeader:this.active,newContent:i&&d.collapsible?a([]):c.find("> *"),oldContent:h.find("> *")},j=this.headers.index(this.active[0])>this.headers.index(g[0]);
this.active=i?a([]):g;
this._toggle(c,h,e,i,j);
return false;
},_toggle:function(b,i,g,j,k){
var d=this.options,m=this;
this.toShow=b;
this.toHide=i;
this.data=g;
var c=function(){
if(!m){
return;
}
return m._completed.apply(m,arguments);
};
this._trigger("changestart",null,this.data);
this.running=i.size()===0?b.size():i.size();
if(d.animated){
var f={};
if(d.collapsible&&j){
f={toShow:a([]),toHide:i,complete:c,down:k,autoHeight:d.autoHeight||d.fillSpace};
}else{
f={toShow:b,toHide:i,complete:c,down:k,autoHeight:d.autoHeight||d.fillSpace};
}
if(!d.proxied){
d.proxied=d.animated;
}
if(!d.proxiedDuration){
d.proxiedDuration=d.duration;
}
d.animated=a.isFunction(d.proxied)?d.proxied(f):d.proxied;
d.duration=a.isFunction(d.proxiedDuration)?d.proxiedDuration(f):d.proxiedDuration;
var l=a.ui.accordion.animations,e=d.duration,h=d.animated;
if(!l[h]){
l[h]=function(n){
this.slide(n,{easing:h,duration:e||700});
};
}
l[h](f);
}else{
if(d.collapsible&&j){
b.toggle();
}else{
i.hide();
b.show();
}
c(true);
}
i.prev().attr("aria-expanded","false").attr("tabIndex","-1").blur();
b.prev().attr("aria-expanded","true").attr("tabIndex","0").focus();
},_completed:function(b){
var c=this.options;
this.running=b?0:--this.running;
if(this.running){
return;
}
if(c.clearStyle){
this.toShow.add(this.toHide).css({height:"",overflow:""});
}
this._trigger("change",null,this.data);
}});
a.extend(a.ui.accordion,{version:"1.7.2",defaults:{active:null,alwaysOpen:true,animated:"slide",autoHeight:true,clearStyle:false,collapsible:false,event:"click",fillSpace:false,header:"> li > :first-child,> :not(li):even",icons:{header:"ui-icon-triangle-1-e",headerSelected:"ui-icon-triangle-1-s"},navigation:false,navigationFilter:function(){
return this.href.toLowerCase()==location.href.toLowerCase();
}},animations:{slide:function(j,h){
j=a.extend({easing:"swing",duration:300},j,h);
if(!j.toHide.size()){
j.toShow.animate({height:"show"},j);
return;
}
if(!j.toShow.size()){
j.toHide.animate({height:"hide"},j);
return;
}
var c=j.toShow.css("overflow"),g,d={},f={},e=["height","paddingTop","paddingBottom"],b;
var i=j.toShow;
b=i[0].style.width;
i.width(parseInt(i.parent().width(),10)-parseInt(i.css("paddingLeft"),10)-parseInt(i.css("paddingRight"),10)-(parseInt(i.css("borderLeftWidth"),10)||0)-(parseInt(i.css("borderRightWidth"),10)||0));
a.each(e,function(k,m){
f[m]="hide";
var l=(""+a.css(j.toShow[0],m)).match(/^([\d+-.]+)(.*)$/);
d[m]={value:l[1],unit:l[2]||"px"};
});
j.toShow.css({height:0,overflow:"hidden"}).show();
j.toHide.filter(":hidden").each(j.complete).end().filter(":visible").animate(f,{step:function(k,l){
if(l.prop=="height"){
g=(l.now-l.start)/(l.end-l.start);
}
j.toShow[0].style[l.prop]=(g*d[l.prop].value)+d[l.prop].unit;
},duration:j.duration,easing:j.easing,complete:function(){
if(!j.autoHeight){
j.toShow.css("height","");
}
j.toShow.css("width",b);
j.toShow.css({overflow:c});
j.complete();
}});
},bounceslide:function(b){
this.slide(b,{easing:b.down?"easeOutBounce":"swing",duration:b.down?1000:200});
},easeslide:function(b){
this.slide(b,{easing:"easeinout",duration:700});
}}});
})(jQuery);
(function(c){
var b={dragStart:"start.draggable",drag:"drag.draggable",dragStop:"stop.draggable",maxHeight:"maxHeight.resizable",minHeight:"minHeight.resizable",maxWidth:"maxWidth.resizable",minWidth:"minWidth.resizable",resizeStart:"start.resizable",resize:"drag.resizable",resizeStop:"stop.resizable"},a="ui-dialog ui-widget ui-widget-content ui-corner-all ";
c.widget("ui.dialog",{_init:function(){
this.originalTitle=this.element.attr("title");
var l=this,m=this.options,j=m.title||this.originalTitle||"&nbsp;",e=c.ui.dialog.getTitleId(this.element),k=(this.uiDialog=c("<div/>")).appendTo(document.body).hide().addClass(a+m.dialogClass).css({position:"absolute",overflow:"hidden",zIndex:m.zIndex}).attr("tabIndex",-1).css("outline",0).keydown(function(n){
(m.closeOnEscape&&n.keyCode&&n.keyCode==c.ui.keyCode.ESCAPE&&l.close(n));
}).attr({role:"dialog","aria-labelledby":e}).mousedown(function(n){
l.moveToTop(false,n);
}),g=this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(k),f=(this.uiDialogTitlebar=c("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(k),i=c("<a href=\"#\"/>").addClass("ui-dialog-titlebar-close ui-corner-all").attr("role","button").hover(function(){
i.addClass("ui-state-hover");
},function(){
i.removeClass("ui-state-hover");
}).focus(function(){
i.addClass("ui-state-focus");
}).blur(function(){
i.removeClass("ui-state-focus");
}).mousedown(function(n){
n.stopPropagation();
}).click(function(n){
l.close(n);
return false;
}).appendTo(f),h=(this.uiDialogTitlebarCloseText=c("<span/>")).addClass("ui-icon ui-icon-closethick").text(m.closeText).appendTo(i),d=c("<span/>").addClass("ui-dialog-title").attr("id",e).html(j).prependTo(f);
f.find("*").add(f).disableSelection();
(m.draggable&&c.fn.draggable&&this._makeDraggable());
(m.resizable&&c.fn.resizable&&this._makeResizable());
this._createButtons(m.buttons);
this._isOpen=false;
(m.bgiframe&&c.fn.bgiframe&&k.bgiframe());
(m.autoOpen&&this.open());
},destroy:function(){
(this.overlay&&this.overlay.destroy());
this.uiDialog.hide();
this.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");
this.uiDialog.remove();
(this.originalTitle&&this.element.attr("title",this.originalTitle));
},close:function(f){
var d=this;
if(false===d._trigger("beforeclose",f)){
return;
}
(d.overlay&&d.overlay.destroy());
d.uiDialog.unbind("keypress.ui-dialog");
(d.options.hide?d.uiDialog.hide(d.options.hide,function(){
d._trigger("close",f);
}):d.uiDialog.hide()&&d._trigger("close",f));
c.ui.dialog.overlay.resize();
d._isOpen=false;
if(d.options.modal){
var e=0;
c(".ui-dialog").each(function(){
if(this!=d.uiDialog[0]){
e=Math.max(e,c(this).css("z-index"));
}
});
c.ui.dialog.maxZ=e;
}
},isOpen:function(){
return this._isOpen;
},moveToTop:function(f,e){
if((this.options.modal&&!f)||(!this.options.stack&&!this.options.modal)){
return this._trigger("focus",e);
}
if(this.options.zIndex>c.ui.dialog.maxZ){
c.ui.dialog.maxZ=this.options.zIndex;
}
(this.overlay&&this.overlay.$el.css("z-index",c.ui.dialog.overlay.maxZ=++c.ui.dialog.maxZ));
var d={scrollTop:this.element.attr("scrollTop"),scrollLeft:this.element.attr("scrollLeft")};
this.uiDialog.css("z-index",++c.ui.dialog.maxZ);
this.element.attr(d);
this._trigger("focus",e);
},open:function(){
if(this._isOpen){
return;
}
var e=this.options,d=this.uiDialog;
this.overlay=e.modal?new c.ui.dialog.overlay(this):null;
(d.next().length&&d.appendTo("body"));
this._size();
this._position(e.position);
d.show(e.show);
this.moveToTop(true);
(e.modal&&d.bind("keypress.ui-dialog",function(h){
if(h.keyCode!=c.ui.keyCode.TAB){
return;
}
var g=c(":tabbable",this),i=g.filter(":first")[0],f=g.filter(":last")[0];
if(h.target==f&&!h.shiftKey){
setTimeout(function(){
i.focus();
},1);
}else{
if(h.target==i&&h.shiftKey){
setTimeout(function(){
f.focus();
},1);
}
}
}));
c([]).add(d.find(".ui-dialog-content :tabbable:first")).add(d.find(".ui-dialog-buttonpane :tabbable:first")).add(d).filter(":first").focus();
this._trigger("open");
this._isOpen=true;
},_createButtons:function(g){
var f=this,d=false,e=c("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");
this.uiDialog.find(".ui-dialog-buttonpane").remove();
(typeof g=="object"&&g!==null&&c.each(g,function(){
return !(d=true);
}));
if(d){
c.each(g,function(h,i){
c("<button type=\"button\"></button>").addClass("ui-state-default ui-corner-all").text(h).click(function(){
i.apply(f.element[0],arguments);
}).hover(function(){
c(this).addClass("ui-state-hover");
},function(){
c(this).removeClass("ui-state-hover");
}).focus(function(){
c(this).addClass("ui-state-focus");
}).blur(function(){
c(this).removeClass("ui-state-focus");
}).appendTo(e);
});
e.appendTo(this.uiDialog);
}
},_makeDraggable:function(){
var d=this,f=this.options,e;
this.uiDialog.draggable({cancel:".ui-dialog-content",handle:".ui-dialog-titlebar",containment:"document",start:function(){
e=f.height;
c(this).height(c(this).height()).addClass("ui-dialog-dragging");
(f.dragStart&&f.dragStart.apply(d.element[0],arguments));
},drag:function(){
(f.drag&&f.drag.apply(d.element[0],arguments));
},stop:function(){
c(this).removeClass("ui-dialog-dragging").height(e);
(f.dragStop&&f.dragStop.apply(d.element[0],arguments));
c.ui.dialog.overlay.resize();
}});
},_makeResizable:function(g){
g=(g===undefined?this.options.resizable:g);
var d=this,f=this.options,e=typeof g=="string"?g:"n,e,s,w,se,sw,ne,nw";
this.uiDialog.resizable({cancel:".ui-dialog-content",alsoResize:this.element,maxWidth:f.maxWidth,maxHeight:f.maxHeight,minWidth:f.minWidth,minHeight:f.minHeight,start:function(){
c(this).addClass("ui-dialog-resizing");
(f.resizeStart&&f.resizeStart.apply(d.element[0],arguments));
},resize:function(){
(f.resize&&f.resize.apply(d.element[0],arguments));
},handles:e,stop:function(){
c(this).removeClass("ui-dialog-resizing");
f.height=c(this).height();
f.width=c(this).width();
(f.resizeStop&&f.resizeStop.apply(d.element[0],arguments));
c.ui.dialog.overlay.resize();
}}).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se");
},_position:function(i){
var e=c(window),f=c(document),g=f.scrollTop(),d=f.scrollLeft(),h=g;
if(c.inArray(i,["center","top","right","bottom","left"])>=0){
i=[i=="right"||i=="left"?i:"center",i=="top"||i=="bottom"?i:"middle"];
}
if(i.constructor!=Array){
i=["center","middle"];
}
if(i[0].constructor==Number){
d+=i[0];
}else{
switch(i[0]){
case "left":
d+=0;
break;
case "right":
d+=e.width()-this.uiDialog.outerWidth();
break;
default:
case "center":
d+=(e.width()-this.uiDialog.outerWidth())/2;
}
}
if(i[1].constructor==Number){
g+=i[1];
}else{
switch(i[1]){
case "top":
g+=0;
break;
case "bottom":
g+=e.height()-this.uiDialog.outerHeight();
break;
default:
case "middle":
g+=(e.height()-this.uiDialog.outerHeight())/2;
}
}
g=Math.max(g,h);
this.uiDialog.css({top:g,left:d});
},_setData:function(e,f){
(b[e]&&this.uiDialog.data(b[e],f));
switch(e){
case "buttons":
this._createButtons(f);
break;
case "closeText":
this.uiDialogTitlebarCloseText.text(f);
break;
case "dialogClass":
this.uiDialog.removeClass(this.options.dialogClass).addClass(a+f);
break;
case "draggable":
(f?this._makeDraggable():this.uiDialog.draggable("destroy"));
break;
case "height":
this.uiDialog.height(f);
break;
case "position":
this._position(f);
break;
case "resizable":
var d=this.uiDialog,g=this.uiDialog.is(":data(resizable)");
(g&&!f&&d.resizable("destroy"));
(g&&typeof f=="string"&&d.resizable("option","handles",f));
(g||this._makeResizable(f));
break;
case "title":
c(".ui-dialog-title",this.uiDialogTitlebar).html(f||"&nbsp;");
break;
case "width":
this.uiDialog.width(f);
break;
}
c.widget.prototype._setData.apply(this,arguments);
},_size:function(){
var e=this.options;
this.element.css({height:0,minHeight:0,width:"auto"});
var d=this.uiDialog.css({height:"auto",width:e.width}).height();
this.element.css({minHeight:Math.max(e.minHeight-d,0),height:e.height=="auto"?"auto":Math.max(e.height-d,0)});
}});
c.extend(c.ui.dialog,{version:"1.7.2",defaults:{autoOpen:true,bgiframe:false,buttons:{},closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:false,maxWidth:false,minHeight:150,minWidth:150,modal:false,position:"center",resizable:true,show:null,stack:true,title:"",width:300,zIndex:1000},getter:"isOpen",uuid:0,maxZ:0,getTitleId:function(d){
return "ui-dialog-title-"+(d.attr("id")||++this.uuid);
},overlay:function(d){
this.$el=c.ui.dialog.overlay.create(d);
}});
c.extend(c.ui.dialog.overlay,{instances:[],maxZ:0,events:c.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(d){
return d+".dialog-overlay";
}).join(" "),create:function(e){
if(this.instances.length===0){
setTimeout(function(){
if(c.ui.dialog.overlay.instances.length){
c(document).bind(c.ui.dialog.overlay.events,function(f){
var g=c(f.target).parents(".ui-dialog").css("zIndex")||0;
return (g>c.ui.dialog.overlay.maxZ);
});
}
},1);
c(document).bind("keydown.dialog-overlay",function(f){
(e.options.closeOnEscape&&f.keyCode&&f.keyCode==c.ui.keyCode.ESCAPE&&e.close(f));
});
c(window).bind("resize.dialog-overlay",c.ui.dialog.overlay.resize);
}
var d=c("<div></div>").appendTo(document.body).addClass("ui-widget-overlay").css({width:this.width(),height:this.height()});
(e.options.bgiframe&&c.fn.bgiframe&&d.bgiframe());
this.instances.push(d);
return d;
},destroy:function(d){
this.instances.splice(c.inArray(this.instances,d),1);
if(this.instances.length===0){
c([document,window]).unbind(".dialog-overlay");
}
d.remove();
var e=0;
c.each(this.instances,function(){
e=Math.max(e,this.css("z-index"));
});
this.maxZ=e;
},height:function(){
if(c.browser.msie&&c.browser.version<7){
var e=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);
var d=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);
if(e<d){
return c(window).height()+"px";
}else{
return e+"px";
}
}else{
return c(document).height()+"px";
}
},width:function(){
if(c.browser.msie&&c.browser.version<7){
var d=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);
var e=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);
if(d<e){
return c(window).width()+"px";
}else{
return d+"px";
}
}else{
return c(document).width()+"px";
}
},resize:function(){
var d=c([]);
c.each(c.ui.dialog.overlay.instances,function(){
d=d.add(this);
});
d.css({width:0,height:0}).css({width:c.ui.dialog.overlay.width(),height:c.ui.dialog.overlay.height()});
}});
c.extend(c.ui.dialog.overlay.prototype,{destroy:function(){
c.ui.dialog.overlay.destroy(this.$el);
}});
})(jQuery);
(function(a){
a.widget("ui.slider",a.extend({},a.ui.mouse,{_init:function(){
var b=this,c=this.options;
this._keySliding=false;
this._handleIndex=null;
this._detectOrientation();
this._mouseInit();
this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all");
this.range=a([]);
if(c.range){
if(c.range===true){
this.range=a("<div></div>");
if(!c.values){
c.values=[this._valueMin(),this._valueMin()];
}
if(c.values.length&&c.values.length!=2){
c.values=[c.values[0],c.values[0]];
}
}else{
this.range=a("<div></div>");
}
this.range.appendTo(this.element).addClass("ui-slider-range");
if(c.range=="min"||c.range=="max"){
this.range.addClass("ui-slider-range-"+c.range);
}
this.range.addClass("ui-widget-header");
}
if(a(".ui-slider-handle",this.element).length==0){
a("<a href=\"#\"></a>").appendTo(this.element).addClass("ui-slider-handle");
}
if(c.values&&c.values.length){
while(a(".ui-slider-handle",this.element).length<c.values.length){
a("<a href=\"#\"></a>").appendTo(this.element).addClass("ui-slider-handle");
}
}
this.handles=a(".ui-slider-handle",this.element).addClass("ui-state-default ui-corner-all");
this.handle=this.handles.eq(0);
this.handles.add(this.range).filter("a").click(function(d){
d.preventDefault();
}).hover(function(){
if(!c.disabled){
a(this).addClass("ui-state-hover");
}
},function(){
a(this).removeClass("ui-state-hover");
}).focus(function(){
if(!c.disabled){
a(".ui-slider .ui-state-focus").removeClass("ui-state-focus");
a(this).addClass("ui-state-focus");
}else{
a(this).blur();
}
}).blur(function(){
a(this).removeClass("ui-state-focus");
});
this.handles.each(function(d){
a(this).data("index.ui-slider-handle",d);
});
this.handles.keydown(function(i){
var f=true;
var e=a(this).data("index.ui-slider-handle");
if(b.options.disabled){
return;
}
switch(i.keyCode){
case a.ui.keyCode.HOME:
case a.ui.keyCode.END:
case a.ui.keyCode.UP:
case a.ui.keyCode.RIGHT:
case a.ui.keyCode.DOWN:
case a.ui.keyCode.LEFT:
f=false;
if(!b._keySliding){
b._keySliding=true;
a(this).addClass("ui-state-active");
b._start(i,e);
}
break;
}
var g,d,h=b._step();
if(b.options.values&&b.options.values.length){
g=d=b.values(e);
}else{
g=d=b.value();
}
switch(i.keyCode){
case a.ui.keyCode.HOME:
d=b._valueMin();
break;
case a.ui.keyCode.END:
d=b._valueMax();
break;
case a.ui.keyCode.UP:
case a.ui.keyCode.RIGHT:
if(g==b._valueMax()){
return;
}
d=g+h;
break;
case a.ui.keyCode.DOWN:
case a.ui.keyCode.LEFT:
if(g==b._valueMin()){
return;
}
d=g-h;
break;
}
b._slide(i,e,d);
return f;
}).keyup(function(e){
var d=a(this).data("index.ui-slider-handle");
if(b._keySliding){
b._stop(e,d);
b._change(e,d);
b._keySliding=false;
a(this).removeClass("ui-state-active");
}
});
this._refreshValue();
},destroy:function(){
this.handles.remove();
this.range.remove();
this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");
this._mouseDestroy();
},_mouseCapture:function(d){
var e=this.options;
if(e.disabled){
return false;
}
this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};
this.elementOffset=this.element.offset();
var h={x:d.pageX,y:d.pageY};
var j=this._normValueFromMouse(h);
var c=this._valueMax()-this._valueMin()+1,f;
var k=this,i;
this.handles.each(function(l){
var m=Math.abs(j-k.values(l));
if(c>m){
c=m;
f=a(this);
i=l;
}
});
if(e.range==true&&this.values(1)==e.min){
f=a(this.handles[++i]);
}
this._start(d,i);
k._handleIndex=i;
f.addClass("ui-state-active").focus();
var g=f.offset();
var b=!a(d.target).parents().andSelf().is(".ui-slider-handle");
this._clickOffset=b?{left:0,top:0}:{left:d.pageX-g.left-(f.width()/2),top:d.pageY-g.top-(f.height()/2)-(parseInt(f.css("borderTopWidth"),10)||0)-(parseInt(f.css("borderBottomWidth"),10)||0)+(parseInt(f.css("marginTop"),10)||0)};
j=this._normValueFromMouse(h);
this._slide(d,i,j);
return true;
},_mouseStart:function(b){
return true;
},_mouseDrag:function(d){
var b={x:d.pageX,y:d.pageY};
var c=this._normValueFromMouse(b);
this._slide(d,this._handleIndex,c);
return false;
},_mouseStop:function(b){
this.handles.removeClass("ui-state-active");
this._stop(b,this._handleIndex);
this._change(b,this._handleIndex);
this._handleIndex=null;
this._clickOffset=null;
return false;
},_detectOrientation:function(){
this.orientation=this.options.orientation=="vertical"?"vertical":"horizontal";
},_normValueFromMouse:function(d){
var c,h;
if("horizontal"==this.orientation){
c=this.elementSize.width;
h=d.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0);
}else{
c=this.elementSize.height;
h=d.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0);
}
var f=(h/c);
if(f>1){
f=1;
}
if(f<0){
f=0;
}
if("vertical"==this.orientation){
f=1-f;
}
var e=this._valueMax()-this._valueMin(),i=f*e,b=i%this.options.step,g=this._valueMin()+i-b;
if(b>(this.options.step/2)){
g+=this.options.step;
}
return parseFloat(g.toFixed(5));
},_start:function(d,c){
var b={handle:this.handles[c],value:this.value()};
if(this.options.values&&this.options.values.length){
b.value=this.values(c);
b.values=this.values();
}
this._trigger("start",d,b);
},_slide:function(f,e,d){
var g=this.handles[e];
if(this.options.values&&this.options.values.length){
var b=this.values(e?0:1);
if((this.options.values.length==2&&this.options.range===true)&&((e==0&&d>b)||(e==1&&d<b))){
d=b;
}
if(d!=this.values(e)){
var c=this.values();
c[e]=d;
var h=this._trigger("slide",f,{handle:this.handles[e],value:d,values:c});
var b=this.values(e?0:1);
if(h!==false){
this.values(e,d,(f.type=="mousedown"&&this.options.animate),true);
}
}
}else{
if(d!=this.value()){
var h=this._trigger("slide",f,{handle:this.handles[e],value:d});
if(h!==false){
this._setData("value",d,(f.type=="mousedown"&&this.options.animate));
}
}
}
},_stop:function(d,c){
var b={handle:this.handles[c],value:this.value()};
if(this.options.values&&this.options.values.length){
b.value=this.values(c);
b.values=this.values();
}
this._trigger("stop",d,b);
},_change:function(d,c){
var b={handle:this.handles[c],value:this.value()};
if(this.options.values&&this.options.values.length){
b.value=this.values(c);
b.values=this.values();
}
this._trigger("change",d,b);
},value:function(b){
if(arguments.length){
this._setData("value",b);
this._change(null,0);
}
return this._value();
},values:function(b,e,c,d){
if(arguments.length>1){
this.options.values[b]=e;
this._refreshValue(c);
if(!d){
this._change(null,b);
}
}
if(arguments.length){
if(this.options.values&&this.options.values.length){
return this._values(b);
}else{
return this.value();
}
}else{
return this._values();
}
},_setData:function(b,d,c){
a.widget.prototype._setData.apply(this,arguments);
switch(b){
case "disabled":
if(d){
this.handles.filter(".ui-state-focus").blur();
this.handles.removeClass("ui-state-hover");
this.handles.attr("disabled","disabled");
}else{
this.handles.removeAttr("disabled");
}
case "orientation":
this._detectOrientation();
this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);
this._refreshValue(c);
break;
case "value":
this._refreshValue(c);
break;
}
},_step:function(){
var b=this.options.step;
return b;
},_value:function(){
var b=this.options.value;
if(b<this._valueMin()){
b=this._valueMin();
}
if(b>this._valueMax()){
b=this._valueMax();
}
return b;
},_values:function(b){
if(arguments.length){
var c=this.options.values[b];
if(c<this._valueMin()){
c=this._valueMin();
}
if(c>this._valueMax()){
c=this._valueMax();
}
return c;
}else{
return this.options.values;
}
},_valueMin:function(){
var b=this.options.min;
return b;
},_valueMax:function(){
var b=this.options.max;
return b;
},_refreshValue:function(c){
var f=this.options.range,d=this.options,l=this;
if(this.options.values&&this.options.values.length){
var i,h;
this.handles.each(function(p,n){
var o=(l.values(p)-l._valueMin())/(l._valueMax()-l._valueMin())*100;
var m={};
m[l.orientation=="horizontal"?"left":"bottom"]=o+"%";
a(this).stop(1,1)[c?"animate":"css"](m,d.animate);
if(l.options.range===true){
if(l.orientation=="horizontal"){
(p==0)&&l.range.stop(1,1)[c?"animate":"css"]({left:o+"%"},d.animate);
(p==1)&&l.range[c?"animate":"css"]({width:(o-lastValPercent)+"%"},{queue:false,duration:d.animate});
}else{
(p==0)&&l.range.stop(1,1)[c?"animate":"css"]({bottom:(o)+"%"},d.animate);
(p==1)&&l.range[c?"animate":"css"]({height:(o-lastValPercent)+"%"},{queue:false,duration:d.animate});
}
}
lastValPercent=o;
});
}else{
var j=this.value(),g=this._valueMin(),k=this._valueMax(),e=k!=g?(j-g)/(k-g)*100:0;
var b={};
b[l.orientation=="horizontal"?"left":"bottom"]=e+"%";
this.handle.stop(1,1)[c?"animate":"css"](b,d.animate);
(f=="min")&&(this.orientation=="horizontal")&&this.range.stop(1,1)[c?"animate":"css"]({width:e+"%"},d.animate);
(f=="max")&&(this.orientation=="horizontal")&&this.range[c?"animate":"css"]({width:(100-e)+"%"},{queue:false,duration:d.animate});
(f=="min")&&(this.orientation=="vertical")&&this.range.stop(1,1)[c?"animate":"css"]({height:e+"%"},d.animate);
(f=="max")&&(this.orientation=="vertical")&&this.range[c?"animate":"css"]({height:(100-e)+"%"},{queue:false,duration:d.animate});
}
}}));
a.extend(a.ui.slider,{getter:"value values",version:"1.7.2",eventPrefix:"slide",defaults:{animate:false,delay:0,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null}});
})(jQuery);
(function(a){
a.widget("ui.tabs",{_init:function(){
if(this.options.deselectable!==undefined){
this.options.collapsible=this.options.deselectable;
}
this._tabify(true);
},_setData:function(b,c){
if(b=="selected"){
if(this.options.collapsible&&c==this.options.selected){
return;
}
this.select(c);
}else{
this.options[b]=c;
if(b=="deselectable"){
this.options.collapsible=c;
}
this._tabify();
}
},_tabId:function(b){
return b.title&&b.title.replace(/\s/g,"_").replace(/[^A-Za-z0-9\-_:\.]/g,"")||this.options.idPrefix+a.data(b);
},_sanitizeSelector:function(b){
return b.replace(/:/g,"\\:");
},_cookie:function(){
var b=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+a.data(this.list[0]));
return a.cookie.apply(null,[b].concat(a.makeArray(arguments)));
},_ui:function(c,b){
return {tab:c,panel:b,index:this.anchors.index(c)};
},_cleanup:function(){
this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){
var b=a(this);
b.html(b.data("label.tabs")).removeData("label.tabs");
});
},_tabify:function(n){
this.list=this.element.children("ul:first");
this.lis=a("li:has(a[href])",this.list);
this.anchors=this.lis.map(function(){
return a("a",this)[0];
});
this.panels=a([]);
var p=this,d=this.options;
var c=/^#.+/;
this.anchors.each(function(r,o){
var q=a(o).attr("href");
var s=q.split("#")[0],u;
if(s&&(s===location.toString().split("#")[0]||(u=a("base")[0])&&s===u.href)){
q=o.hash;
o.href=q;
}
if(c.test(q)){
p.panels=p.panels.add(p._sanitizeSelector(q));
}else{
if(q!="#"){
a.data(o,"href.tabs",q);
a.data(o,"load.tabs",q.replace(/#.*$/,""));
var w=p._tabId(o);
o.href="#"+w;
var v=a("#"+w);
if(!v.length){
v=a(d.panelTemplate).attr("id",w).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(p.panels[r-1]||p.list);
v.data("destroy.tabs",true);
}
p.panels=p.panels.add(v);
}else{
d.disabled.push(r);
}
}
});
if(n){
this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");
this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");
this.lis.addClass("ui-state-default ui-corner-top");
this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");
if(d.selected===undefined){
if(location.hash){
this.anchors.each(function(q,o){
if(o.hash==location.hash){
d.selected=q;
return false;
}
});
}
if(typeof d.selected!="number"&&d.cookie){
d.selected=parseInt(p._cookie(),10);
}
if(typeof d.selected!="number"&&this.lis.filter(".ui-tabs-selected").length){
d.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"));
}
d.selected=d.selected||0;
}else{
if(d.selected===null){
d.selected=-1;
}
}
d.selected=((d.selected>=0&&this.anchors[d.selected])||d.selected<0)?d.selected:0;
d.disabled=a.unique(d.disabled.concat(a.map(this.lis.filter(".ui-state-disabled"),function(q,o){
return p.lis.index(q);
}))).sort();
if(a.inArray(d.selected,d.disabled)!=-1){
d.disabled.splice(a.inArray(d.selected,d.disabled),1);
}
this.panels.addClass("ui-tabs-hide");
this.lis.removeClass("ui-tabs-selected ui-state-active");
if(d.selected>=0&&this.anchors.length){
this.panels.eq(d.selected).removeClass("ui-tabs-hide");
this.lis.eq(d.selected).addClass("ui-tabs-selected ui-state-active");
p.element.queue("tabs",function(){
p._trigger("show",null,p._ui(p.anchors[d.selected],p.panels[d.selected]));
});
this.load(d.selected);
}
a(window).bind("unload",function(){
p.lis.add(p.anchors).unbind(".tabs");
p.lis=p.anchors=p.panels=null;
});
}else{
d.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"));
}
this.element[d.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible");
if(d.cookie){
this._cookie(d.selected,d.cookie);
}
for(var g=0,m;(m=this.lis[g]);g++){
a(m)[a.inArray(g,d.disabled)!=-1&&!a(m).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled");
}
if(d.cache===false){
this.anchors.removeData("cache.tabs");
}
this.lis.add(this.anchors).unbind(".tabs");
if(d.event!="mouseover"){
var f=function(o,i){
if(i.is(":not(.ui-state-disabled)")){
i.addClass("ui-state-"+o);
}
};
var j=function(o,i){
i.removeClass("ui-state-"+o);
};
this.lis.bind("mouseover.tabs",function(){
f("hover",a(this));
});
this.lis.bind("mouseout.tabs",function(){
j("hover",a(this));
});
this.anchors.bind("focus.tabs",function(){
f("focus",a(this).closest("li"));
});
this.anchors.bind("blur.tabs",function(){
j("focus",a(this).closest("li"));
});
}
var b,h;
if(d.fx){
if(a.isArray(d.fx)){
b=d.fx[0];
h=d.fx[1];
}else{
b=h=d.fx;
}
}
function e(i,o){
i.css({display:""});
if(a.browser.msie&&o.opacity){
i[0].style.removeAttribute("filter");
}
};
var k=h?function(i,o){
a(i).closest("li").removeClass("ui-state-default").addClass("ui-tabs-selected ui-state-active");
o.hide().removeClass("ui-tabs-hide").animate(h,h.duration||"normal",function(){
e(o,h);
p._trigger("show",null,p._ui(i,o[0]));
});
}:function(i,o){
a(i).closest("li").removeClass("ui-state-default").addClass("ui-tabs-selected ui-state-active");
o.removeClass("ui-tabs-hide");
p._trigger("show",null,p._ui(i,o[0]));
};
var l=b?function(o,i){
i.animate(b,b.duration||"normal",function(){
p.lis.removeClass("ui-tabs-selected ui-state-active").addClass("ui-state-default");
i.addClass("ui-tabs-hide");
e(i,b);
p.element.dequeue("tabs");
});
}:function(o,i,q){
p.lis.removeClass("ui-tabs-selected ui-state-active").addClass("ui-state-default");
i.addClass("ui-tabs-hide");
p.element.dequeue("tabs");
};
this.anchors.bind(d.event+".tabs",function(){
var o=this,r=a(this).closest("li"),i=p.panels.filter(":not(.ui-tabs-hide)"),q=a(p._sanitizeSelector(this.hash));
if((r.hasClass("ui-tabs-selected")&&!d.collapsible)||r.hasClass("ui-state-disabled")||r.hasClass("ui-state-processing")||p._trigger("select",null,p._ui(this,q[0]))===false){
this.blur();
return false;
}
d.selected=p.anchors.index(this);
p.abort();
if(d.collapsible){
if(r.hasClass("ui-tabs-selected")){
d.selected=-1;
if(d.cookie){
p._cookie(d.selected,d.cookie);
}
p.element.queue("tabs",function(){
l(o,i);
}).dequeue("tabs");
this.blur();
return false;
}else{
if(!i.length){
if(d.cookie){
p._cookie(d.selected,d.cookie);
}
p.element.queue("tabs",function(){
k(o,q);
});
p.load(p.anchors.index(this));
this.blur();
return false;
}
}
}
if(d.cookie){
p._cookie(d.selected,d.cookie);
}
if(q.length){
if(i.length){
p.element.queue("tabs",function(){
l(o,i);
});
}
p.element.queue("tabs",function(){
k(o,q);
});
p.load(p.anchors.index(this));
}else{
throw "jQuery UI Tabs: Mismatching fragment identifier.";
}
if(a.browser.msie){
this.blur();
}
});
this.anchors.bind("click.tabs",function(){
return false;
});
},destroy:function(){
var b=this.options;
this.abort();
this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");
this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");
this.anchors.each(function(){
var c=a.data(this,"href.tabs");
if(c){
this.href=c;
}
var d=a(this).unbind(".tabs");
a.each(["href","load","cache"],function(e,f){
d.removeData(f+".tabs");
});
});
this.lis.unbind(".tabs").add(this.panels).each(function(){
if(a.data(this,"destroy.tabs")){
a(this).remove();
}else{
a(this).removeClass(["ui-state-default","ui-corner-top","ui-tabs-selected","ui-state-active","ui-state-hover","ui-state-focus","ui-state-disabled","ui-tabs-panel","ui-widget-content","ui-corner-bottom","ui-tabs-hide"].join(" "));
}
});
if(b.cookie){
this._cookie(null,b.cookie);
}
},add:function(e,d,c){
if(c===undefined){
c=this.anchors.length;
}
var b=this,g=this.options,i=a(g.tabTemplate.replace(/#\{href\}/g,e).replace(/#\{label\}/g,d)),h=!e.indexOf("#")?e.replace("#",""):this._tabId(a("a",i)[0]);
i.addClass("ui-state-default ui-corner-top").data("destroy.tabs",true);
var f=a("#"+h);
if(!f.length){
f=a(g.panelTemplate).attr("id",h).data("destroy.tabs",true);
}
f.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");
if(c>=this.lis.length){
i.appendTo(this.list);
f.appendTo(this.list[0].parentNode);
}else{
i.insertBefore(this.lis[c]);
f.insertBefore(this.panels[c]);
}
g.disabled=a.map(g.disabled,function(k,j){
return k>=c?++k:k;
});
this._tabify();
if(this.anchors.length==1){
i.addClass("ui-tabs-selected ui-state-active");
f.removeClass("ui-tabs-hide");
this.element.queue("tabs",function(){
b._trigger("show",null,b._ui(b.anchors[0],b.panels[0]));
});
this.load(0);
}
this._trigger("add",null,this._ui(this.anchors[c],this.panels[c]));
},remove:function(b){
var d=this.options,e=this.lis.eq(b).remove(),c=this.panels.eq(b).remove();
if(e.hasClass("ui-tabs-selected")&&this.anchors.length>1){
this.select(b+(b+1<this.anchors.length?1:-1));
}
d.disabled=a.map(a.grep(d.disabled,function(g,f){
return g!=b;
}),function(g,f){
return g>=b?--g:g;
});
this._tabify();
this._trigger("remove",null,this._ui(e.find("a")[0],c[0]));
},enable:function(b){
var c=this.options;
if(a.inArray(b,c.disabled)==-1){
return;
}
this.lis.eq(b).removeClass("ui-state-disabled");
c.disabled=a.grep(c.disabled,function(e,d){
return e!=b;
});
this._trigger("enable",null,this._ui(this.anchors[b],this.panels[b]));
},disable:function(c){
var b=this,d=this.options;
if(c!=d.selected){
this.lis.eq(c).addClass("ui-state-disabled");
d.disabled.push(c);
d.disabled.sort();
this._trigger("disable",null,this._ui(this.anchors[c],this.panels[c]));
}
},select:function(b){
if(typeof b=="string"){
b=this.anchors.index(this.anchors.filter("[href$="+b+"]"));
}else{
if(b===null){
b=-1;
}
}
if(b==-1&&this.options.collapsible){
b=this.options.selected;
}
this.anchors.eq(b).trigger(this.options.event+".tabs");
},load:function(e){
var c=this,g=this.options,b=this.anchors.eq(e)[0],d=a.data(b,"load.tabs");
this.abort();
if(!d||this.element.queue("tabs").length!==0&&a.data(b,"cache.tabs")){
this.element.dequeue("tabs");
return;
}
this.lis.eq(e).addClass("ui-state-processing");
if(g.spinner){
var f=a("span",b);
f.data("label.tabs",f.html()).html(g.spinner);
}
this.xhr=a.ajax(a.extend({},g.ajaxOptions,{url:d,success:function(i,h){
a(c._sanitizeSelector(b.hash)).html(i);
c._cleanup();
if(g.cache){
a.data(b,"cache.tabs",true);
}
c._trigger("load",null,c._ui(c.anchors[e],c.panels[e]));
try{
g.ajaxOptions.success(i,h);
}
catch(j){
}
c.element.dequeue("tabs");
}}));
},abort:function(){
this.element.queue([]);
this.panels.stop(false,true);
if(this.xhr){
this.xhr.abort();
delete this.xhr;
}
this._cleanup();
},url:function(c,b){
this.anchors.eq(c).removeData("cache.tabs").data("load.tabs",b);
},length:function(){
return this.anchors.length;
}});
a.extend(a.ui.tabs,{version:"1.7.2",getter:"length",defaults:{ajaxOptions:null,cache:false,cookie:null,collapsible:false,disabled:[],event:"click",fx:null,idPrefix:"ui-tabs-",panelTemplate:"<div></div>",spinner:"<em>Loading&#8230;</em>",tabTemplate:"<li><a href=\"#{href}\"><span>#{label}</span></a></li>"}});
a.extend(a.ui.tabs.prototype,{rotation:null,rotate:function(d,f){
var b=this,g=this.options;
var c=b._rotate||(b._rotate=function(h){
clearTimeout(b.rotation);
b.rotation=setTimeout(function(){
var i=g.selected;
b.select(++i<b.anchors.length?i:0);
},d);
if(h){
h.stopPropagation();
}
});
var e=b._unrotate||(b._unrotate=!f?function(h){
if(h.clientX){
b.rotate(null);
}
}:function(h){
t=g.selected;
c();
});
if(d){
this.element.bind("tabsshow",c);
this.anchors.bind(g.event+".tabs",e);
c();
}else{
clearTimeout(b.rotation);
this.element.unbind("tabsshow",c);
this.anchors.unbind(g.event+".tabs",e);
delete this._rotate;
delete this._unrotate;
}
}});
})(jQuery);
(function($){
$.extend($.ui,{datepicker:{version:"1.7.2"}});
var _3fd="datepicker";
function _3fe(){
this.debug=false;
this._curInst=null;
this._keyEvent=false;
this._disabledInputs=[];
this._datepickerShowing=false;
this._inDialog=false;
this._mainDivId="ui-datepicker-div";
this._inlineClass="ui-datepicker-inline";
this._appendClass="ui-datepicker-append";
this._triggerClass="ui-datepicker-trigger";
this._dialogClass="ui-datepicker-dialog";
this._disableClass="ui-datepicker-disabled";
this._unselectableClass="ui-datepicker-unselectable";
this._currentClass="ui-datepicker-current-day";
this._dayOverClass="ui-datepicker-days-cell-over";
this.regional=[];
this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],dateFormat:"mm/dd/yy",firstDay:0,isRTL:false};
this._defaults={showOn:"focus",showAnim:"show",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,showMonthAfterYear:false,yearRange:"-10:+10",showOtherMonths:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"normal",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false};
$.extend(this._defaults,this.regional[""]);
this.dpDiv=$("<div id=\""+this._mainDivId+"\" class=\"ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all ui-helper-hidden-accessible\"></div>");
};
$.extend(_3fe.prototype,{markerClassName:"hasDatepicker",log:function(){
if(this.debug){
console.log.apply("",arguments);
}
},setDefaults:function(_3ff){
_400(this._defaults,_3ff||{});
return this;
},_attachDatepicker:function(_401,_402){
var _403=null;
for(var _404 in this._defaults){
var _405=_401.getAttribute("date:"+_404);
if(_405){
_403=_403||{};
try{
_403[_404]=eval(_405);
}
catch(err){
_403[_404]=_405;
}
}
}
var _406=_401.nodeName.toLowerCase();
var _407=(_406=="div"||_406=="span");
if(!_401.id){
_401.id="dp"+(++this.uuid);
}
var inst=this._newInst($(_401),_407);
inst.settings=$.extend({},_402||{},_403||{});
if(_406=="input"){
this._connectDatepicker(_401,inst);
}else{
if(_407){
this._inlineDatepicker(_401,inst);
}
}
},_newInst:function(_409,_40a){
var id=_409[0].id.replace(/([:\[\]\.])/g,"\\\\$1");
return {id:id,input:_409,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:_40a,dpDiv:(!_40a?this.dpDiv:$("<div class=\""+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all\"></div>"))};
},_connectDatepicker:function(_40c,inst){
var _40e=$(_40c);
inst.append=$([]);
inst.trigger=$([]);
if(_40e.hasClass(this.markerClassName)){
return;
}
var _40f=this._get(inst,"appendText");
var _410=this._get(inst,"isRTL");
if(_40f){
inst.append=$("<span class=\""+this._appendClass+"\">"+_40f+"</span>");
_40e[_410?"before":"after"](inst.append);
}
var _411=this._get(inst,"showOn");
if(_411=="focus"||_411=="both"){
_40e.focus(this._showDatepicker);
}
if(_411=="button"||_411=="both"){
var _412=this._get(inst,"buttonText");
var _413=this._get(inst,"buttonImage");
inst.trigger=$(this._get(inst,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:_413,alt:_412,title:_412}):$("<button type=\"button\"></button>").addClass(this._triggerClass).html(_413==""?_412:$("<img/>").attr({src:_413,alt:_412,title:_412})));
_40e[_410?"before":"after"](inst.trigger);
inst.trigger.click(function(){
if($.datepicker._datepickerShowing&&$.datepicker._lastInput==_40c){
$.datepicker._hideDatepicker();
}else{
$.datepicker._showDatepicker(_40c);
}
return false;
});
}
_40e.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).bind("setData.datepicker",function(_414,key,_416){
inst.settings[key]=_416;
}).bind("getData.datepicker",function(_417,key){
return this._get(inst,key);
});
$.data(_40c,_3fd,inst);
},_inlineDatepicker:function(_419,inst){
var _41b=$(_419);
if(_41b.hasClass(this.markerClassName)){
return;
}
_41b.addClass(this.markerClassName).append(inst.dpDiv).bind("setData.datepicker",function(_41c,key,_41e){
inst.settings[key]=_41e;
}).bind("getData.datepicker",function(_41f,key){
return this._get(inst,key);
});
$.data(_419,_3fd,inst);
this._setDate(inst,this._getDefaultDate(inst));
this._updateDatepicker(inst);
this._updateAlternate(inst);
},_dialogDatepicker:function(_421,_422,_423,_424,pos){
var inst=this._dialogInst;
if(!inst){
var id="dp"+(++this.uuid);
this._dialogInput=$("<input type=\"text\" id=\""+id+"\" size=\"1\" style=\"position: absolute; top: -100px;\"/>");
this._dialogInput.keydown(this._doKeyDown);
$("body").append(this._dialogInput);
inst=this._dialogInst=this._newInst(this._dialogInput,false);
inst.settings={};
$.data(this._dialogInput[0],_3fd,inst);
}
_400(inst.settings,_424||{});
this._dialogInput.val(_422);
this._pos=(pos?(pos.length?pos:[pos.pageX,pos.pageY]):null);
if(!this._pos){
var _428=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
var _429=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;
var _42a=document.documentElement.scrollLeft||document.body.scrollLeft;
var _42b=document.documentElement.scrollTop||document.body.scrollTop;
this._pos=[(_428/2)-100+_42a,(_429/2)-150+_42b];
}
this._dialogInput.css("left",this._pos[0]+"px").css("top",this._pos[1]+"px");
inst.settings.onSelect=_423;
this._inDialog=true;
this.dpDiv.addClass(this._dialogClass);
this._showDatepicker(this._dialogInput[0]);
if($.blockUI){
$.blockUI(this.dpDiv);
}
$.data(this._dialogInput[0],_3fd,inst);
return this;
},_destroyDatepicker:function(_42c){
var _42d=$(_42c);
var inst=$.data(_42c,_3fd);
if(!_42d.hasClass(this.markerClassName)){
return;
}
var _42f=_42c.nodeName.toLowerCase();
$.removeData(_42c,_3fd);
if(_42f=="input"){
inst.append.remove();
inst.trigger.remove();
_42d.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress);
}else{
if(_42f=="div"||_42f=="span"){
_42d.removeClass(this.markerClassName).empty();
}
}
},_enableDatepicker:function(_430){
var _431=$(_430);
var inst=$.data(_430,_3fd);
if(!_431.hasClass(this.markerClassName)){
return;
}
var _433=_430.nodeName.toLowerCase();
if(_433=="input"){
_430.disabled=false;
inst.trigger.filter("button").each(function(){
this.disabled=false;
}).end().filter("img").css({opacity:"1.0",cursor:""});
}else{
if(_433=="div"||_433=="span"){
var _434=_431.children("."+this._inlineClass);
_434.children().removeClass("ui-state-disabled");
}
}
this._disabledInputs=$.map(this._disabledInputs,function(_435){
return (_435==_430?null:_435);
});
},_disableDatepicker:function(_436){
var _437=$(_436);
var inst=$.data(_436,_3fd);
if(!_437.hasClass(this.markerClassName)){
return;
}
var _439=_436.nodeName.toLowerCase();
if(_439=="input"){
_436.disabled=true;
inst.trigger.filter("button").each(function(){
this.disabled=true;
}).end().filter("img").css({opacity:"0.5",cursor:"default"});
}else{
if(_439=="div"||_439=="span"){
var _43a=_437.children("."+this._inlineClass);
_43a.children().addClass("ui-state-disabled");
}
}
this._disabledInputs=$.map(this._disabledInputs,function(_43b){
return (_43b==_436?null:_43b);
});
this._disabledInputs[this._disabledInputs.length]=_436;
},_isDisabledDatepicker:function(_43c){
if(!_43c){
return false;
}
for(var i=0;i<this._disabledInputs.length;i++){
if(this._disabledInputs[i]==_43c){
return true;
}
}
return false;
},_getInst:function(_43e){
try{
return $.data(_43e,_3fd);
}
catch(err){
throw "Missing instance data for this datepicker";
}
},_optionDatepicker:function(_43f,name,_441){
var inst=this._getInst(_43f);
if(arguments.length==2&&typeof name=="string"){
return (name=="defaults"?$.extend({},$.datepicker._defaults):(inst?(name=="all"?$.extend({},inst.settings):this._get(inst,name)):null));
}
var _443=name||{};
if(typeof name=="string"){
_443={};
_443[name]=_441;
}
if(inst){
if(this._curInst==inst){
this._hideDatepicker(null);
}
var date=this._getDateDatepicker(_43f);
_400(inst.settings,_443);
this._setDateDatepicker(_43f,date);
this._updateDatepicker(inst);
}
},_changeDatepicker:function(_445,name,_447){
this._optionDatepicker(_445,name,_447);
},_refreshDatepicker:function(_448){
var inst=this._getInst(_448);
if(inst){
this._updateDatepicker(inst);
}
},_setDateDatepicker:function(_44a,date,_44c){
var inst=this._getInst(_44a);
if(inst){
this._setDate(inst,date,_44c);
this._updateDatepicker(inst);
this._updateAlternate(inst);
}
},_getDateDatepicker:function(_44e){
var inst=this._getInst(_44e);
if(inst&&!inst.inline){
this._setDateFromField(inst);
}
return (inst?this._getDate(inst):null);
},_doKeyDown:function(_450){
var inst=$.datepicker._getInst(_450.target);
var _452=true;
var _453=inst.dpDiv.is(".ui-datepicker-rtl");
inst._keyEvent=true;
if($.datepicker._datepickerShowing){
switch(_450.keyCode){
case 9:
$.datepicker._hideDatepicker(null,"");
break;
case 13:
var sel=$("td."+$.datepicker._dayOverClass+", td."+$.datepicker._currentClass,inst.dpDiv);
if(sel[0]){
$.datepicker._selectDay(_450.target,inst.selectedMonth,inst.selectedYear,sel[0]);
}else{
$.datepicker._hideDatepicker(null,$.datepicker._get(inst,"duration"));
}
return false;
break;
case 27:
$.datepicker._hideDatepicker(null,$.datepicker._get(inst,"duration"));
break;
case 33:
$.datepicker._adjustDate(_450.target,(_450.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M");
break;
case 34:
$.datepicker._adjustDate(_450.target,(_450.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M");
break;
case 35:
if(_450.ctrlKey||_450.metaKey){
$.datepicker._clearDate(_450.target);
}
_452=_450.ctrlKey||_450.metaKey;
break;
case 36:
if(_450.ctrlKey||_450.metaKey){
$.datepicker._gotoToday(_450.target);
}
_452=_450.ctrlKey||_450.metaKey;
break;
case 37:
if(_450.ctrlKey||_450.metaKey){
$.datepicker._adjustDate(_450.target,(_453?+1:-1),"D");
}
_452=_450.ctrlKey||_450.metaKey;
if(_450.originalEvent.altKey){
$.datepicker._adjustDate(_450.target,(_450.ctrlKey?-$.datepicker._get(inst,"stepBigMonths"):-$.datepicker._get(inst,"stepMonths")),"M");
}
break;
case 38:
if(_450.ctrlKey||_450.metaKey){
$.datepicker._adjustDate(_450.target,-7,"D");
}
_452=_450.ctrlKey||_450.metaKey;
break;
case 39:
if(_450.ctrlKey||_450.metaKey){
$.datepicker._adjustDate(_450.target,(_453?-1:+1),"D");
}
_452=_450.ctrlKey||_450.metaKey;
if(_450.originalEvent.altKey){
$.datepicker._adjustDate(_450.target,(_450.ctrlKey?+$.datepicker._get(inst,"stepBigMonths"):+$.datepicker._get(inst,"stepMonths")),"M");
}
break;
case 40:
if(_450.ctrlKey||_450.metaKey){
$.datepicker._adjustDate(_450.target,+7,"D");
}
_452=_450.ctrlKey||_450.metaKey;
break;
default:
_452=false;
}
}else{
if(_450.keyCode==36&&_450.ctrlKey){
$.datepicker._showDatepicker(this);
}else{
_452=false;
}
}
if(_452){
_450.preventDefault();
_450.stopPropagation();
}
},_doKeyPress:function(_455){
var inst=$.datepicker._getInst(_455.target);
if($.datepicker._get(inst,"constrainInput")){
var _457=$.datepicker._possibleChars($.datepicker._get(inst,"dateFormat"));
var chr=String.fromCharCode(_455.charCode==undefined?_455.keyCode:_455.charCode);
return _455.ctrlKey||(chr<" "||!_457||_457.indexOf(chr)>-1);
}
},_showDatepicker:function(_459){
_459=_459.target||_459;
if(_459.nodeName.toLowerCase()!="input"){
_459=$("input",_459.parentNode)[0];
}
if($.datepicker._isDisabledDatepicker(_459)||$.datepicker._lastInput==_459){
return;
}
var inst=$.datepicker._getInst(_459);
var _45b=$.datepicker._get(inst,"beforeShow");
_400(inst.settings,(_45b?_45b.apply(_459,[_459,inst]):{}));
$.datepicker._hideDatepicker(null,"");
$.datepicker._lastInput=_459;
$.datepicker._setDateFromField(inst);
if($.datepicker._inDialog){
_459.value="";
}
if(!$.datepicker._pos){
$.datepicker._pos=$.datepicker._findPos(_459);
$.datepicker._pos[1]+=_459.offsetHeight;
}
var _45c=false;
$(_459).parents().each(function(){
_45c|=$(this).css("position")=="fixed";
return !_45c;
});
if(_45c&&$.browser.opera){
$.datepicker._pos[0]-=document.documentElement.scrollLeft;
$.datepicker._pos[1]-=document.documentElement.scrollTop;
}
var _45d={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};
$.datepicker._pos=null;
inst.rangeStart=null;
inst.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});
$.datepicker._updateDatepicker(inst);
_45d=$.datepicker._checkOffset(inst,_45d,_45c);
inst.dpDiv.css({position:($.datepicker._inDialog&&$.blockUI?"static":(_45c?"fixed":"absolute")),display:"none",left:_45d.left+"px",top:_45d.top+"px"});
if(!inst.inline){
var _45e=$.datepicker._get(inst,"showAnim")||"show";
var _45f=$.datepicker._get(inst,"duration");
var _460=function(){
$.datepicker._datepickerShowing=true;
if($.browser.msie&&parseInt($.browser.version,10)<7){
$("iframe.ui-datepicker-cover").css({width:inst.dpDiv.width()+4,height:inst.dpDiv.height()+4});
}
};
if($.effects&&$.effects[_45e]){
inst.dpDiv.show(_45e,$.datepicker._get(inst,"showOptions"),_45f,_460);
}else{
inst.dpDiv[_45e](_45f,_460);
}
if(_45f==""){
_460();
}
if(inst.input[0].type!="hidden"){
inst.input[0].focus();
}
$.datepicker._curInst=inst;
}
},_updateDatepicker:function(inst){
var dims={width:inst.dpDiv.width()+4,height:inst.dpDiv.height()+4};
var self=this;
inst.dpDiv.empty().append(this._generateHTML(inst)).find("iframe.ui-datepicker-cover").css({width:dims.width,height:dims.height}).end().find("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a").bind("mouseout",function(){
$(this).removeClass("ui-state-hover");
if(this.className.indexOf("ui-datepicker-prev")!=-1){
$(this).removeClass("ui-datepicker-prev-hover");
}
if(this.className.indexOf("ui-datepicker-next")!=-1){
$(this).removeClass("ui-datepicker-next-hover");
}
}).bind("mouseover",function(){
if(!self._isDisabledDatepicker(inst.inline?inst.dpDiv.parent()[0]:inst.input[0])){
$(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
$(this).addClass("ui-state-hover");
if(this.className.indexOf("ui-datepicker-prev")!=-1){
$(this).addClass("ui-datepicker-prev-hover");
}
if(this.className.indexOf("ui-datepicker-next")!=-1){
$(this).addClass("ui-datepicker-next-hover");
}
}
}).end().find("."+this._dayOverClass+" a").trigger("mouseover").end();
var _464=this._getNumberOfMonths(inst);
var cols=_464[1];
var _466=17;
if(cols>1){
inst.dpDiv.addClass("ui-datepicker-multi-"+cols).css("width",(_466*cols)+"em");
}else{
inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
}
inst.dpDiv[(_464[0]!=1||_464[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi");
inst.dpDiv[(this._get(inst,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");
if(inst.input&&inst.input[0].type!="hidden"&&inst==$.datepicker._curInst){
$(inst.input[0]).focus();
}
},_checkOffset:function(inst,_468,_469){
var _46a=inst.dpDiv.outerWidth();
var _46b=inst.dpDiv.outerHeight();
var _46c=inst.input?inst.input.outerWidth():0;
var _46d=inst.input?inst.input.outerHeight():0;
var _46e=(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)+$(document).scrollLeft();
var _46f=(window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight)+$(document).scrollTop();
_468.left-=(this._get(inst,"isRTL")?(_46a-_46c):0);
_468.left-=(_469&&_468.left==inst.input.offset().left)?$(document).scrollLeft():0;
_468.top-=(_469&&_468.top==(inst.input.offset().top+_46d))?$(document).scrollTop():0;
_468.left-=(_468.left+_46a>_46e&&_46e>_46a)?Math.abs(_468.left+_46a-_46e):0;
_468.top-=(_468.top+_46b>_46f&&_46f>_46b)?Math.abs(_468.top+_46b+_46d*2-_46f):0;
return _468;
},_findPos:function(obj){
while(obj&&(obj.type=="hidden"||obj.nodeType!=1)){
obj=obj.nextSibling;
}
var _471=$(obj).offset();
return [_471.left,_471.top];
},_hideDatepicker:function(_472,_473){
var inst=this._curInst;
if(!inst||(_472&&inst!=$.data(_472,_3fd))){
return;
}
if(inst.stayOpen){
this._selectDate("#"+inst.id,this._formatDate(inst,inst.currentDay,inst.currentMonth,inst.currentYear));
}
inst.stayOpen=false;
if(this._datepickerShowing){
_473=(_473!=null?_473:this._get(inst,"duration"));
var _475=this._get(inst,"showAnim");
var _476=function(){
$.datepicker._tidyDialog(inst);
};
if(_473!=""&&$.effects&&$.effects[_475]){
inst.dpDiv.hide(_475,$.datepicker._get(inst,"showOptions"),_473,_476);
}else{
inst.dpDiv[(_473==""?"hide":(_475=="slideDown"?"slideUp":(_475=="fadeIn"?"fadeOut":"hide")))](_473,_476);
}
if(_473==""){
this._tidyDialog(inst);
}
var _477=this._get(inst,"onClose");
if(_477){
_477.apply((inst.input?inst.input[0]:null),[(inst.input?inst.input.val():""),inst]);
}
this._datepickerShowing=false;
this._lastInput=null;
if(this._inDialog){
this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});
if($.blockUI){
$.unblockUI();
$("body").append(this.dpDiv);
}
}
this._inDialog=false;
}
this._curInst=null;
},_tidyDialog:function(inst){
inst.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar");
},_checkExternalClick:function(_479){
if(!$.datepicker._curInst){
return;
}
var _47a=$(_479.target);
if((_47a.parents("#"+$.datepicker._mainDivId).length==0)&&!_47a.hasClass($.datepicker.markerClassName)&&!_47a.hasClass($.datepicker._triggerClass)&&$.datepicker._datepickerShowing&&!($.datepicker._inDialog&&$.blockUI)){
$.datepicker._hideDatepicker(null,"");
}
},_adjustDate:function(id,_47c,_47d){
var _47e=$(id);
var inst=this._getInst(_47e[0]);
if(this._isDisabledDatepicker(_47e[0])){
return;
}
this._adjustInstDate(inst,_47c+(_47d=="M"?this._get(inst,"showCurrentAtPos"):0),_47d);
this._updateDatepicker(inst);
},_gotoToday:function(id){
var _481=$(id);
var inst=this._getInst(_481[0]);
if(this._get(inst,"gotoCurrent")&&inst.currentDay){
inst.selectedDay=inst.currentDay;
inst.drawMonth=inst.selectedMonth=inst.currentMonth;
inst.drawYear=inst.selectedYear=inst.currentYear;
}else{
var date=new Date();
inst.selectedDay=date.getDate();
inst.drawMonth=inst.selectedMonth=date.getMonth();
inst.drawYear=inst.selectedYear=date.getFullYear();
}
this._notifyChange(inst);
this._adjustDate(_481);
},_selectMonthYear:function(id,_485,_486){
var _487=$(id);
var inst=this._getInst(_487[0]);
inst._selectingMonthYear=false;
inst["selected"+(_486=="M"?"Month":"Year")]=inst["draw"+(_486=="M"?"Month":"Year")]=parseInt(_485.options[_485.selectedIndex].value,10);
this._notifyChange(inst);
this._adjustDate(_487);
},_clickMonthYear:function(id){
var _48a=$(id);
var inst=this._getInst(_48a[0]);
if(inst.input&&inst._selectingMonthYear&&!$.browser.msie){
inst.input[0].focus();
}
inst._selectingMonthYear=!inst._selectingMonthYear;
},_selectDay:function(id,_48d,year,td){
var _490=$(id);
if($(td).hasClass(this._unselectableClass)||this._isDisabledDatepicker(_490[0])){
return;
}
var inst=this._getInst(_490[0]);
inst.selectedDay=inst.currentDay=$("a",td).html();
inst.selectedMonth=inst.currentMonth=_48d;
inst.selectedYear=inst.currentYear=year;
if(inst.stayOpen){
inst.endDay=inst.endMonth=inst.endYear=null;
}
this._selectDate(id,this._formatDate(inst,inst.currentDay,inst.currentMonth,inst.currentYear));
if(inst.stayOpen){
inst.rangeStart=this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay));
this._updateDatepicker(inst);
}
},_clearDate:function(id){
var _493=$(id);
var inst=this._getInst(_493[0]);
inst.stayOpen=false;
inst.endDay=inst.endMonth=inst.endYear=inst.rangeStart=null;
this._selectDate(_493,"");
},_selectDate:function(id,_496){
var _497=$(id);
var inst=this._getInst(_497[0]);
_496=(_496!=null?_496:this._formatDate(inst));
if(inst.input){
inst.input.val(_496);
}
this._updateAlternate(inst);
var _499=this._get(inst,"onSelect");
if(_499){
_499.apply((inst.input?inst.input[0]:null),[_496,inst]);
}else{
if(inst.input){
inst.input.trigger("change");
}
}
if(inst.inline){
this._updateDatepicker(inst);
}else{
if(!inst.stayOpen){
this._hideDatepicker(null,this._get(inst,"duration"));
this._lastInput=inst.input[0];
if(typeof (inst.input[0])!="object"){
inst.input[0].focus();
}
this._lastInput=null;
}
}
},_updateAlternate:function(inst){
var _49b=this._get(inst,"altField");
if(_49b){
var _49c=this._get(inst,"altFormat")||this._get(inst,"dateFormat");
var date=this._getDate(inst);
dateStr=this.formatDate(_49c,date,this._getFormatConfig(inst));
$(_49b).each(function(){
$(this).val(dateStr);
});
}
},noWeekends:function(date){
var day=date.getDay();
return [(day>0&&day<6),""];
},iso8601Week:function(date){
var _4a1=new Date(date.getFullYear(),date.getMonth(),date.getDate());
var _4a2=new Date(_4a1.getFullYear(),1-1,4);
var _4a3=_4a2.getDay()||7;
_4a2.setDate(_4a2.getDate()+1-_4a3);
if(_4a3<4&&_4a1<_4a2){
_4a1.setDate(_4a1.getDate()-3);
return $.datepicker.iso8601Week(_4a1);
}else{
if(_4a1>new Date(_4a1.getFullYear(),12-1,28)){
_4a3=new Date(_4a1.getFullYear()+1,1-1,4).getDay()||7;
if(_4a3>4&&(_4a1.getDay()||7)<_4a3-3){
return 1;
}
}
}
return Math.floor(((_4a1-_4a2)/86400000)/7)+1;
},parseDate:function(_4a4,_4a5,_4a6){
if(_4a4==null||_4a5==null){
throw "Invalid arguments";
}
_4a5=(typeof _4a5=="object"?_4a5.toString():_4a5+"");
if(_4a5==""){
return null;
}
var _4a7=(_4a6?_4a6.shortYearCutoff:null)||this._defaults.shortYearCutoff;
var _4a8=(_4a6?_4a6.dayNamesShort:null)||this._defaults.dayNamesShort;
var _4a9=(_4a6?_4a6.dayNames:null)||this._defaults.dayNames;
var _4aa=(_4a6?_4a6.monthNamesShort:null)||this._defaults.monthNamesShort;
var _4ab=(_4a6?_4a6.monthNames:null)||this._defaults.monthNames;
var year=-1;
var _4ad=-1;
var day=-1;
var doy=-1;
var _4b0=false;
var _4b1=function(_4b2){
var _4b3=(_4b4+1<_4a4.length&&_4a4.charAt(_4b4+1)==_4b2);
if(_4b3){
_4b4++;
}
return _4b3;
};
var _4b5=function(_4b6){
_4b1(_4b6);
var _4b7=(_4b6=="@"?14:(_4b6=="y"?4:(_4b6=="o"?3:2)));
var size=_4b7;
var num=0;
while(size>0&&_4ba<_4a5.length&&_4a5.charAt(_4ba)>="0"&&_4a5.charAt(_4ba)<="9"){
num=num*10+parseInt(_4a5.charAt(_4ba++),10);
size--;
}
if(size==_4b7){
throw "Missing number at position "+_4ba;
}
return num;
};
var _4bb=function(_4bc,_4bd,_4be){
var _4bf=(_4b1(_4bc)?_4be:_4bd);
var size=0;
for(var j=0;j<_4bf.length;j++){
size=Math.max(size,_4bf[j].length);
}
var name="";
var _4c3=_4ba;
while(size>0&&_4ba<_4a5.length){
name+=_4a5.charAt(_4ba++);
for(var i=0;i<_4bf.length;i++){
if(name==_4bf[i]){
return i+1;
}
}
size--;
}
throw "Unknown name at position "+_4c3;
};
var _4c5=function(){
if(_4a5.charAt(_4ba)!=_4a4.charAt(_4b4)){
throw "Unexpected literal at position "+_4ba;
}
_4ba++;
};
var _4ba=0;
for(var _4b4=0;_4b4<_4a4.length;_4b4++){
if(_4b0){
if(_4a4.charAt(_4b4)=="'"&&!_4b1("'")){
_4b0=false;
}else{
_4c5();
}
}else{
switch(_4a4.charAt(_4b4)){
case "d":
day=_4b5("d");
break;
case "D":
_4bb("D",_4a8,_4a9);
break;
case "o":
doy=_4b5("o");
break;
case "m":
_4ad=_4b5("m");
break;
case "M":
_4ad=_4bb("M",_4aa,_4ab);
break;
case "y":
year=_4b5("y");
break;
case "@":
var date=new Date(_4b5("@"));
year=date.getFullYear();
_4ad=date.getMonth()+1;
day=date.getDate();
break;
case "'":
if(_4b1("'")){
_4c5();
}else{
_4b0=true;
}
break;
default:
_4c5();
}
}
}
if(year==-1){
year=new Date().getFullYear();
}else{
if(year<100){
year+=new Date().getFullYear()-new Date().getFullYear()%100+(year<=_4a7?0:-100);
}
}
if(doy>-1){
_4ad=1;
day=doy;
do{
var dim=this._getDaysInMonth(year,_4ad-1);
if(day<=dim){
break;
}
_4ad++;
day-=dim;
}while(true);
}
var date=this._daylightSavingAdjust(new Date(year,_4ad-1,day));
if(date.getFullYear()!=year||date.getMonth()+1!=_4ad||date.getDate()!=day){
throw "Invalid date";
}
return date;
},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TIMESTAMP:"@",W3C:"yy-mm-dd",formatDate:function(_4c8,date,_4ca){
if(!date){
return "";
}
var _4cb=(_4ca?_4ca.dayNamesShort:null)||this._defaults.dayNamesShort;
var _4cc=(_4ca?_4ca.dayNames:null)||this._defaults.dayNames;
var _4cd=(_4ca?_4ca.monthNamesShort:null)||this._defaults.monthNamesShort;
var _4ce=(_4ca?_4ca.monthNames:null)||this._defaults.monthNames;
var _4cf=function(_4d0){
var _4d1=(_4d2+1<_4c8.length&&_4c8.charAt(_4d2+1)==_4d0);
if(_4d1){
_4d2++;
}
return _4d1;
};
var _4d3=function(_4d4,_4d5,len){
var num=""+_4d5;
if(_4cf(_4d4)){
while(num.length<len){
num="0"+num;
}
}
return num;
};
var _4d8=function(_4d9,_4da,_4db,_4dc){
return (_4cf(_4d9)?_4dc[_4da]:_4db[_4da]);
};
var _4dd="";
var _4de=false;
if(date){
for(var _4d2=0;_4d2<_4c8.length;_4d2++){
if(_4de){
if(_4c8.charAt(_4d2)=="'"&&!_4cf("'")){
_4de=false;
}else{
_4dd+=_4c8.charAt(_4d2);
}
}else{
switch(_4c8.charAt(_4d2)){
case "d":
_4dd+=_4d3("d",date.getDate(),2);
break;
case "D":
_4dd+=_4d8("D",date.getDay(),_4cb,_4cc);
break;
case "o":
var doy=date.getDate();
for(var m=date.getMonth()-1;m>=0;m--){
doy+=this._getDaysInMonth(date.getFullYear(),m);
}
_4dd+=_4d3("o",doy,3);
break;
case "m":
_4dd+=_4d3("m",date.getMonth()+1,2);
break;
case "M":
_4dd+=_4d8("M",date.getMonth(),_4cd,_4ce);
break;
case "y":
_4dd+=(_4cf("y")?date.getFullYear():(date.getYear()%100<10?"0":"")+date.getYear()%100);
break;
case "@":
_4dd+=date.getTime();
break;
case "'":
if(_4cf("'")){
_4dd+="'";
}else{
_4de=true;
}
break;
default:
_4dd+=_4c8.charAt(_4d2);
}
}
}
}
return _4dd;
},_possibleChars:function(_4e1){
var _4e2="";
var _4e3=false;
for(var _4e4=0;_4e4<_4e1.length;_4e4++){
if(_4e3){
if(_4e1.charAt(_4e4)=="'"&&!lookAhead("'")){
_4e3=false;
}else{
_4e2+=_4e1.charAt(_4e4);
}
}else{
switch(_4e1.charAt(_4e4)){
case "d":
case "m":
case "y":
case "@":
_4e2+="0123456789";
break;
case "D":
case "M":
return null;
case "'":
if(lookAhead("'")){
_4e2+="'";
}else{
_4e3=true;
}
break;
default:
_4e2+=_4e1.charAt(_4e4);
}
}
}
return _4e2;
},_get:function(inst,name){
return inst.settings[name]!==undefined?inst.settings[name]:this._defaults[name];
},_setDateFromField:function(inst){
var _4e8=this._get(inst,"dateFormat");
var _4e9=inst.input?inst.input.val():null;
inst.endDay=inst.endMonth=inst.endYear=null;
var date=defaultDate=this._getDefaultDate(inst);
var _4eb=this._getFormatConfig(inst);
try{
date=this.parseDate(_4e8,_4e9,_4eb)||defaultDate;
}
catch(event){
this.log(event);
date=defaultDate;
}
inst.selectedDay=date.getDate();
inst.drawMonth=inst.selectedMonth=date.getMonth();
inst.drawYear=inst.selectedYear=date.getFullYear();
inst.currentDay=(_4e9?date.getDate():0);
inst.currentMonth=(_4e9?date.getMonth():0);
inst.currentYear=(_4e9?date.getFullYear():0);
this._adjustInstDate(inst);
},_getDefaultDate:function(inst){
var date=this._determineDate(this._get(inst,"defaultDate"),new Date());
var _4ee=this._getMinMaxDate(inst,"min",true);
var _4ef=this._getMinMaxDate(inst,"max");
date=(_4ee&&date<_4ee?_4ee:date);
date=(_4ef&&date>_4ef?_4ef:date);
return date;
},_determineDate:function(date,_4f1){
var _4f2=function(_4f3){
var date=new Date();
date.setDate(date.getDate()+_4f3);
return date;
};
var _4f5=function(_4f6,_4f7){
var date=new Date();
var year=date.getFullYear();
var _4fa=date.getMonth();
var day=date.getDate();
var _4fc=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g;
var _4fd=_4fc.exec(_4f6);
while(_4fd){
switch(_4fd[2]||"d"){
case "d":
case "D":
day+=parseInt(_4fd[1],10);
break;
case "w":
case "W":
day+=parseInt(_4fd[1],10)*7;
break;
case "m":
case "M":
_4fa+=parseInt(_4fd[1],10);
day=Math.min(day,_4f7(year,_4fa));
break;
case "y":
case "Y":
year+=parseInt(_4fd[1],10);
day=Math.min(day,_4f7(year,_4fa));
break;
}
_4fd=_4fc.exec(_4f6);
}
return new Date(year,_4fa,day);
};
date=(date==null?_4f1:(typeof date=="string"?_4f5(date,this._getDaysInMonth):(typeof date=="number"?(isNaN(date)?_4f1:_4f2(date)):date)));
date=(date&&date.toString()=="Invalid Date"?_4f1:date);
if(date){
date.setHours(0);
date.setMinutes(0);
date.setSeconds(0);
date.setMilliseconds(0);
}
return this._daylightSavingAdjust(date);
},_daylightSavingAdjust:function(date){
if(!date){
return null;
}
date.setHours(date.getHours()>12?date.getHours()+2:0);
return date;
},_setDate:function(inst,date,_501){
var _502=!(date);
var _503=inst.selectedMonth;
var _504=inst.selectedYear;
date=this._determineDate(date,new Date());
inst.selectedDay=inst.currentDay=date.getDate();
inst.drawMonth=inst.selectedMonth=inst.currentMonth=date.getMonth();
inst.drawYear=inst.selectedYear=inst.currentYear=date.getFullYear();
if(_503!=inst.selectedMonth||_504!=inst.selectedYear){
this._notifyChange(inst);
}
this._adjustInstDate(inst);
if(inst.input){
inst.input.val(_502?"":this._formatDate(inst));
}
},_getDate:function(inst){
var _506=(!inst.currentYear||(inst.input&&inst.input.val()=="")?null:this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));
return _506;
},_generateHTML:function(inst){
var _508=new Date();
_508=this._daylightSavingAdjust(new Date(_508.getFullYear(),_508.getMonth(),_508.getDate()));
var _509=this._get(inst,"isRTL");
var _50a=this._get(inst,"showButtonPanel");
var _50b=this._get(inst,"hideIfNoPrevNext");
var _50c=this._get(inst,"navigationAsDateFormat");
var _50d=this._getNumberOfMonths(inst);
var _50e=this._get(inst,"showCurrentAtPos");
var _50f=this._get(inst,"stepMonths");
var _510=this._get(inst,"stepBigMonths");
var _511=(_50d[0]!=1||_50d[1]!=1);
var _512=this._daylightSavingAdjust((!inst.currentDay?new Date(9999,9,9):new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));
var _513=this._getMinMaxDate(inst,"min",true);
var _514=this._getMinMaxDate(inst,"max");
var _515=inst.drawMonth-_50e;
var _516=inst.drawYear;
if(_515<0){
_515+=12;
_516--;
}
if(_514){
var _517=this._daylightSavingAdjust(new Date(_514.getFullYear(),_514.getMonth()-_50d[1]+1,_514.getDate()));
_517=(_513&&_517<_513?_513:_517);
while(this._daylightSavingAdjust(new Date(_516,_515,1))>_517){
_515--;
if(_515<0){
_515=11;
_516--;
}
}
}
inst.drawMonth=_515;
inst.drawYear=_516;
var _518=this._get(inst,"prevText");
_518=(!_50c?_518:this.formatDate(_518,this._daylightSavingAdjust(new Date(_516,_515-_50f,1)),this._getFormatConfig(inst)));
var prev=(this._canAdjustMonth(inst,-1,_516,_515)?"<a class=\"ui-datepicker-prev ui-corner-all\" onclick=\"DP_jQuery.datepicker._adjustDate('#"+inst.id+"', -"+_50f+", 'M');\" title=\""+_518+"\"><span class=\"ui-icon ui-icon-circle-triangle-"+(_509?"e":"w")+"\">"+_518+"</span></a>":(_50b?"":"<a class=\"ui-datepicker-prev ui-corner-all ui-state-disabled\" title=\""+_518+"\"><span class=\"ui-icon ui-icon-circle-triangle-"+(_509?"e":"w")+"\">"+_518+"</span></a>"));
var _51a=this._get(inst,"nextText");
_51a=(!_50c?_51a:this.formatDate(_51a,this._daylightSavingAdjust(new Date(_516,_515+_50f,1)),this._getFormatConfig(inst)));
var next=(this._canAdjustMonth(inst,+1,_516,_515)?"<a class=\"ui-datepicker-next ui-corner-all\" onclick=\"DP_jQuery.datepicker._adjustDate('#"+inst.id+"', +"+_50f+", 'M');\" title=\""+_51a+"\"><span class=\"ui-icon ui-icon-circle-triangle-"+(_509?"w":"e")+"\">"+_51a+"</span></a>":(_50b?"":"<a class=\"ui-datepicker-next ui-corner-all ui-state-disabled\" title=\""+_51a+"\"><span class=\"ui-icon ui-icon-circle-triangle-"+(_509?"w":"e")+"\">"+_51a+"</span></a>"));
var _51c=this._get(inst,"currentText");
var _51d=(this._get(inst,"gotoCurrent")&&inst.currentDay?_512:_508);
_51c=(!_50c?_51c:this.formatDate(_51c,_51d,this._getFormatConfig(inst)));
var _51e=(!inst.inline?"<button type=\"button\" class=\"ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all\" onclick=\"DP_jQuery.datepicker._hideDatepicker();\">"+this._get(inst,"closeText")+"</button>":"");
var _51f=(_50a)?"<div class=\"ui-datepicker-buttonpane ui-widget-content\">"+(_509?_51e:"")+(this._isInRange(inst,_51d)?"<button type=\"button\" class=\"ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all\" onclick=\"DP_jQuery.datepicker._gotoToday('#"+inst.id+"');\">"+_51c+"</button>":"")+(_509?"":_51e)+"</div>":"";
var _520=parseInt(this._get(inst,"firstDay"),10);
_520=(isNaN(_520)?0:_520);
var _521=this._get(inst,"dayNames");
var _522=this._get(inst,"dayNamesShort");
var _523=this._get(inst,"dayNamesMin");
var _524=this._get(inst,"monthNames");
var _525=this._get(inst,"monthNamesShort");
var _526=this._get(inst,"beforeShowDay");
var _527=this._get(inst,"showOtherMonths");
var _528=this._get(inst,"calculateWeek")||this.iso8601Week;
var _529=inst.endDay?this._daylightSavingAdjust(new Date(inst.endYear,inst.endMonth,inst.endDay)):_512;
var _52a=this._getDefaultDate(inst);
var html="";
for(var row=0;row<_50d[0];row++){
var _52d="";
for(var col=0;col<_50d[1];col++){
var _52f=this._daylightSavingAdjust(new Date(_516,_515,inst.selectedDay));
var _530=" ui-corner-all";
var _531="";
if(_511){
_531+="<div class=\"ui-datepicker-group ui-datepicker-group-";
switch(col){
case 0:
_531+="first";
_530=" ui-corner-"+(_509?"right":"left");
break;
case _50d[1]-1:
_531+="last";
_530=" ui-corner-"+(_509?"left":"right");
break;
default:
_531+="middle";
_530="";
break;
}
_531+="\">";
}
_531+="<div class=\"ui-datepicker-header ui-widget-header ui-helper-clearfix"+_530+"\">"+(/all|left/.test(_530)&&row==0?(_509?next:prev):"")+(/all|right/.test(_530)&&row==0?(_509?prev:next):"")+this._generateMonthYearHeader(inst,_515,_516,_513,_514,_52f,row>0||col>0,_524,_525)+"</div><table class=\"ui-datepicker-calendar\"><thead><tr>";
var _532="";
for(var dow=0;dow<7;dow++){
var day=(dow+_520)%7;
_532+="<th"+((dow+_520+6)%7>=5?" class=\"ui-datepicker-week-end\"":"")+"><span title=\""+_521[day]+"\">"+_523[day]+"</span></th>";
}
_531+=_532+"</tr></thead><tbody>";
var _535=this._getDaysInMonth(_516,_515);
if(_516==inst.selectedYear&&_515==inst.selectedMonth){
inst.selectedDay=Math.min(inst.selectedDay,_535);
}
var _536=(this._getFirstDayOfMonth(_516,_515)-_520+7)%7;
var _537=(_511?6:Math.ceil((_536+_535)/7));
var _538=this._daylightSavingAdjust(new Date(_516,_515,1-_536));
for(var dRow=0;dRow<_537;dRow++){
_531+="<tr>";
var _53a="";
for(var dow=0;dow<7;dow++){
var _53b=(_526?_526.apply((inst.input?inst.input[0]:null),[_538]):[true,""]);
var _53c=(_538.getMonth()!=_515);
var _53d=_53c||!_53b[0]||(_513&&_538<_513)||(_514&&_538>_514);
_53a+="<td class=\""+((dow+_520+6)%7>=5?" ui-datepicker-week-end":"")+(_53c?" ui-datepicker-other-month":"")+((_538.getTime()==_52f.getTime()&&_515==inst.selectedMonth&&inst._keyEvent)||(_52a.getTime()==_538.getTime()&&_52a.getTime()==_52f.getTime())?" "+this._dayOverClass:"")+(_53d?" "+this._unselectableClass+" ui-state-disabled":"")+(_53c&&!_527?"":" "+_53b[1]+(_538.getTime()>=_512.getTime()&&_538.getTime()<=_529.getTime()?" "+this._currentClass:"")+(_538.getTime()==_508.getTime()?" ui-datepicker-today":""))+"\""+((!_53c||_527)&&_53b[2]?" title=\""+_53b[2]+"\"":"")+(_53d?"":" onclick=\"DP_jQuery.datepicker._selectDay('#"+inst.id+"',"+_515+","+_516+", this);return false;\"")+">"+(_53c?(_527?_538.getDate():"&#xa0;"):(_53d?"<span class=\"ui-state-default\">"+_538.getDate()+"</span>":"<a class=\"ui-state-default"+(_538.getTime()==_508.getTime()?" ui-state-highlight":"")+(_538.getTime()>=_512.getTime()&&_538.getTime()<=_529.getTime()?" ui-state-active":"")+"\" href=\"#\">"+_538.getDate()+"</a>"))+"</td>";
_538.setDate(_538.getDate()+1);
_538=this._daylightSavingAdjust(_538);
}
_531+=_53a+"</tr>";
}
_515++;
if(_515>11){
_515=0;
_516++;
}
_531+="</tbody></table>"+(_511?"</div>"+((_50d[0]>0&&col==_50d[1]-1)?"<div class=\"ui-datepicker-row-break\"></div>":""):"");
_52d+=_531;
}
html+=_52d;
}
html+=_51f+($.browser.msie&&parseInt($.browser.version,10)<7&&!inst.inline?"<iframe src=\"javascript:false;\" class=\"ui-datepicker-cover\" frameborder=\"0\"></iframe>":"");
inst._keyEvent=false;
return html;
},_generateMonthYearHeader:function(inst,_53f,_540,_541,_542,_543,_544,_545,_546){
_541=(inst.rangeStart&&_541&&_543<_541?_543:_541);
var _547=this._get(inst,"changeMonth");
var _548=this._get(inst,"changeYear");
var _549=this._get(inst,"showMonthAfterYear");
var html="<div class=\"ui-datepicker-title\">";
var _54b="";
if(_544||!_547){
_54b+="<span class=\"ui-datepicker-month\">"+_545[_53f]+"</span> ";
}else{
var _54c=(_541&&_541.getFullYear()==_540);
var _54d=(_542&&_542.getFullYear()==_540);
_54b+="<select class=\"ui-datepicker-month\" onchange=\"DP_jQuery.datepicker._selectMonthYear('#"+inst.id+"', this, 'M');\" onclick=\"DP_jQuery.datepicker._clickMonthYear('#"+inst.id+"');\">";
for(var _54e=0;_54e<12;_54e++){
if((!_54c||_54e>=_541.getMonth())&&(!_54d||_54e<=_542.getMonth())){
_54b+="<option value=\""+_54e+"\""+(_54e==_53f?" selected=\"selected\"":"")+">"+_546[_54e]+"</option>";
}
}
_54b+="</select>";
}
if(!_549){
html+=_54b+((_544||_547||_548)&&(!(_547&&_548))?"&#xa0;":"");
}
if(_544||!_548){
html+="<span class=\"ui-datepicker-year\">"+_540+"</span>";
}else{
var _54f=this._get(inst,"yearRange").split(":");
var year=0;
var _551=0;
if(_54f.length!=2){
year=_540-10;
_551=_540+10;
}else{
if(_54f[0].charAt(0)=="+"||_54f[0].charAt(0)=="-"){
year=_540+parseInt(_54f[0],10);
_551=_540+parseInt(_54f[1],10);
}else{
year=parseInt(_54f[0],10);
_551=parseInt(_54f[1],10);
}
}
year=(_541?Math.max(year,_541.getFullYear()):year);
_551=(_542?Math.min(_551,_542.getFullYear()):_551);
html+="<select class=\"ui-datepicker-year\" onchange=\"DP_jQuery.datepicker._selectMonthYear('#"+inst.id+"', this, 'Y');\" onclick=\"DP_jQuery.datepicker._clickMonthYear('#"+inst.id+"');\">";
for(;year<=_551;year++){
html+="<option value=\""+year+"\""+(year==_540?" selected=\"selected\"":"")+">"+year+"</option>";
}
html+="</select>";
}
if(_549){
html+=(_544||_547||_548?"&#xa0;":"")+_54b;
}
html+="</div>";
return html;
},_adjustInstDate:function(inst,_553,_554){
var year=inst.drawYear+(_554=="Y"?_553:0);
var _556=inst.drawMonth+(_554=="M"?_553:0);
var day=Math.min(inst.selectedDay,this._getDaysInMonth(year,_556))+(_554=="D"?_553:0);
var date=this._daylightSavingAdjust(new Date(year,_556,day));
var _559=this._getMinMaxDate(inst,"min",true);
var _55a=this._getMinMaxDate(inst,"max");
date=(_559&&date<_559?_559:date);
date=(_55a&&date>_55a?_55a:date);
inst.selectedDay=date.getDate();
inst.drawMonth=inst.selectedMonth=date.getMonth();
inst.drawYear=inst.selectedYear=date.getFullYear();
if(_554=="M"||_554=="Y"){
this._notifyChange(inst);
}
},_notifyChange:function(inst){
var _55c=this._get(inst,"onChangeMonthYear");
if(_55c){
_55c.apply((inst.input?inst.input[0]:null),[inst.selectedYear,inst.selectedMonth+1,inst]);
}
},_getNumberOfMonths:function(inst){
var _55e=this._get(inst,"numberOfMonths");
return (_55e==null?[1,1]:(typeof _55e=="number"?[1,_55e]:_55e));
},_getMinMaxDate:function(inst,_560,_561){
var date=this._determineDate(this._get(inst,_560+"Date"),null);
return (!_561||!inst.rangeStart?date:(!date||inst.rangeStart>date?inst.rangeStart:date));
},_getDaysInMonth:function(year,_564){
return 32-new Date(year,_564,32).getDate();
},_getFirstDayOfMonth:function(year,_566){
return new Date(year,_566,1).getDay();
},_canAdjustMonth:function(inst,_568,_569,_56a){
var _56b=this._getNumberOfMonths(inst);
var date=this._daylightSavingAdjust(new Date(_569,_56a+(_568<0?_568:_56b[1]),1));
if(_568<0){
date.setDate(this._getDaysInMonth(date.getFullYear(),date.getMonth()));
}
return this._isInRange(inst,date);
},_isInRange:function(inst,date){
var _56f=(!inst.rangeStart?null:this._daylightSavingAdjust(new Date(inst.selectedYear,inst.selectedMonth,inst.selectedDay)));
_56f=(_56f&&inst.rangeStart<_56f?inst.rangeStart:_56f);
var _570=_56f||this._getMinMaxDate(inst,"min");
var _571=this._getMinMaxDate(inst,"max");
return ((!_570||date>=_570)&&(!_571||date<=_571));
},_getFormatConfig:function(inst){
var _573=this._get(inst,"shortYearCutoff");
_573=(typeof _573!="string"?_573:new Date().getFullYear()%100+parseInt(_573,10));
return {shortYearCutoff:_573,dayNamesShort:this._get(inst,"dayNamesShort"),dayNames:this._get(inst,"dayNames"),monthNamesShort:this._get(inst,"monthNamesShort"),monthNames:this._get(inst,"monthNames")};
},_formatDate:function(inst,day,_576,year){
if(!day){
inst.currentDay=inst.selectedDay;
inst.currentMonth=inst.selectedMonth;
inst.currentYear=inst.selectedYear;
}
var date=(day?(typeof day=="object"?day:this._daylightSavingAdjust(new Date(year,_576,day))):this._daylightSavingAdjust(new Date(inst.currentYear,inst.currentMonth,inst.currentDay)));
return this.formatDate(this._get(inst,"dateFormat"),date,this._getFormatConfig(inst));
}});
function _400(_579,_57a){
$.extend(_579,_57a);
for(var name in _57a){
if(_57a[name]==null||_57a[name]==undefined){
_579[name]=_57a[name];
}
}
return _579;
};
function _57c(a){
return (a&&(($.browser.safari&&typeof a=="object"&&a.length)||(a.constructor&&a.constructor.toString().match(/\Array\(\)/))));
};
$.fn.datepicker=function(_57e){
if(!$.datepicker.initialized){
$(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv);
$.datepicker.initialized=true;
}
var _57f=Array.prototype.slice.call(arguments,1);
if(typeof _57e=="string"&&(_57e=="isDisabled"||_57e=="getDate")){
return $.datepicker["_"+_57e+"Datepicker"].apply($.datepicker,[this[0]].concat(_57f));
}
if(_57e=="option"&&arguments.length==2&&typeof arguments[1]=="string"){
return $.datepicker["_"+_57e+"Datepicker"].apply($.datepicker,[this[0]].concat(_57f));
}
return this.each(function(){
typeof _57e=="string"?$.datepicker["_"+_57e+"Datepicker"].apply($.datepicker,[this].concat(_57f)):$.datepicker._attachDatepicker(this,_57e);
});
};
$.datepicker=new _3fe();
$.datepicker.initialized=false;
$.datepicker.uuid=new Date().getTime();
$.datepicker.version="1.7.2";
window.DP_jQuery=$;
})(jQuery);
(function(a){
a.widget("ui.progressbar",{_init:function(){
this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this._valueMin(),"aria-valuemax":this._valueMax(),"aria-valuenow":this._value()});
this.valueDiv=a("<div class=\"ui-progressbar-value ui-widget-header ui-corner-left\"></div>").appendTo(this.element);
this._refreshValue();
},destroy:function(){
this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow").removeData("progressbar").unbind(".progressbar");
this.valueDiv.remove();
a.widget.prototype.destroy.apply(this,arguments);
},value:function(b){
if(b===undefined){
return this._value();
}
this._setData("value",b);
return this;
},_setData:function(b,c){
switch(b){
case "value":
this.options.value=c;
this._refreshValue();
this._trigger("change",null,{});
break;
}
a.widget.prototype._setData.apply(this,arguments);
},_value:function(){
var b=this.options.value;
if(b<this._valueMin()){
b=this._valueMin();
}
if(b>this._valueMax()){
b=this._valueMax();
}
return b;
},_valueMin:function(){
var b=0;
return b;
},_valueMax:function(){
var b=100;
return b;
},_refreshValue:function(){
var b=this.value();
this.valueDiv[b==this._valueMax()?"addClass":"removeClass"]("ui-corner-right");
this.valueDiv.width(b+"%");
this.element.attr("aria-valuenow",b);
}});
a.extend(a.ui.progressbar,{version:"1.7.2",defaults:{value:0}});
})(jQuery);
jQuery.effects||(function(d){
d.effects={version:"1.7.2",save:function(g,h){
for(var f=0;f<h.length;f++){
if(h[f]!==null){
g.data("ec.storage."+h[f],g[0].style[h[f]]);
}
}
},restore:function(g,h){
for(var f=0;f<h.length;f++){
if(h[f]!==null){
g.css(h[f],g.data("ec.storage."+h[f]));
}
}
},setMode:function(f,g){
if(g=="toggle"){
g=f.is(":hidden")?"show":"hide";
}
return g;
},getBaseline:function(g,h){
var i,f;
switch(g[0]){
case "top":
i=0;
break;
case "middle":
i=0.5;
break;
case "bottom":
i=1;
break;
default:
i=g[0]/h.height;
}
switch(g[1]){
case "left":
f=0;
break;
case "center":
f=0.5;
break;
case "right":
f=1;
break;
default:
f=g[1]/h.width;
}
return {x:f,y:i};
},createWrapper:function(f){
if(f.parent().is(".ui-effects-wrapper")){
return f.parent();
}
var g={width:f.outerWidth(true),height:f.outerHeight(true),"float":f.css("float")};
f.wrap("<div class=\"ui-effects-wrapper\" style=\"font-size:100%;background:transparent;border:none;margin:0;padding:0\"></div>");
var j=f.parent();
if(f.css("position")=="static"){
j.css({position:"relative"});
f.css({position:"relative"});
}else{
var i=f.css("top");
if(isNaN(parseInt(i,10))){
i="auto";
}
var h=f.css("left");
if(isNaN(parseInt(h,10))){
h="auto";
}
j.css({position:f.css("position"),top:i,left:h,zIndex:f.css("z-index")}).show();
f.css({position:"relative",top:0,left:0});
}
j.css(g);
return j;
},removeWrapper:function(f){
if(f.parent().is(".ui-effects-wrapper")){
return f.parent().replaceWith(f);
}
return f;
},setTransition:function(g,i,f,h){
h=h||{};
d.each(i,function(k,j){
unit=g.cssUnit(j);
if(unit[0]>0){
h[j]=unit[0]*f+unit[1];
}
});
return h;
},animateClass:function(h,i,k,j){
var f=(typeof k=="function"?k:(j?j:null));
var g=(typeof k=="string"?k:null);
return this.each(function(){
var q={};
var o=d(this);
var p=o.attr("style")||"";
if(typeof p=="object"){
p=p.cssText;
}
if(h.toggle){
o.hasClass(h.toggle)?h.remove=h.toggle:h.add=h.toggle;
}
var l=d.extend({},(document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle));
if(h.add){
o.addClass(h.add);
}
if(h.remove){
o.removeClass(h.remove);
}
var m=d.extend({},(document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle));
if(h.add){
o.removeClass(h.add);
}
if(h.remove){
o.addClass(h.remove);
}
for(var r in m){
if(typeof m[r]!="function"&&m[r]&&r.indexOf("Moz")==-1&&r.indexOf("length")==-1&&m[r]!=l[r]&&(r.match(/color/i)||(!r.match(/color/i)&&!isNaN(parseInt(m[r],10))))&&(l.position!="static"||(l.position=="static"&&!r.match(/left|top|bottom|right/)))){
q[r]=m[r];
}
}
o.animate(q,i,g,function(){
if(typeof d(this).attr("style")=="object"){
d(this).attr("style")["cssText"]="";
d(this).attr("style")["cssText"]=p;
}else{
d(this).attr("style",p);
}
if(h.add){
d(this).addClass(h.add);
}
if(h.remove){
d(this).removeClass(h.remove);
}
if(f){
f.apply(this,arguments);
}
});
});
}};
function c(g,f){
var i=g[1]&&g[1].constructor==Object?g[1]:{};
if(f){
i.mode=f;
}
var h=g[1]&&g[1].constructor!=Object?g[1]:(i.duration?i.duration:g[2]);
h=d.fx.off?0:typeof h==="number"?h:d.fx.speeds[h]||d.fx.speeds._default;
var j=i.callback||(d.isFunction(g[1])&&g[1])||(d.isFunction(g[2])&&g[2])||(d.isFunction(g[3])&&g[3]);
return [g[0],i,h,j];
};
d.fn.extend({_show:d.fn.show,_hide:d.fn.hide,__toggle:d.fn.toggle,_addClass:d.fn.addClass,_removeClass:d.fn.removeClass,_toggleClass:d.fn.toggleClass,effect:function(g,f,h,i){
return d.effects[g]?d.effects[g].call(this,{method:g,options:f||{},duration:h,callback:i}):null;
},show:function(){
if(!arguments[0]||(arguments[0].constructor==Number||(/(slow|normal|fast)/).test(arguments[0]))){
return this._show.apply(this,arguments);
}else{
return this.effect.apply(this,c(arguments,"show"));
}
},hide:function(){
if(!arguments[0]||(arguments[0].constructor==Number||(/(slow|normal|fast)/).test(arguments[0]))){
return this._hide.apply(this,arguments);
}else{
return this.effect.apply(this,c(arguments,"hide"));
}
},toggle:function(){
if(!arguments[0]||(arguments[0].constructor==Number||(/(slow|normal|fast)/).test(arguments[0]))||(d.isFunction(arguments[0])||typeof arguments[0]=="boolean")){
return this.__toggle.apply(this,arguments);
}else{
return this.effect.apply(this,c(arguments,"toggle"));
}
},addClass:function(g,f,i,h){
return f?d.effects.animateClass.apply(this,[{add:g},f,i,h]):this._addClass(g);
},removeClass:function(g,f,i,h){
return f?d.effects.animateClass.apply(this,[{remove:g},f,i,h]):this._removeClass(g);
},toggleClass:function(g,f,i,h){
return ((typeof f!=="boolean")&&f)?d.effects.animateClass.apply(this,[{toggle:g},f,i,h]):this._toggleClass(g,f);
},morph:function(f,h,g,j,i){
return d.effects.animateClass.apply(this,[{add:h,remove:f},g,j,i]);
},switchClass:function(){
return this.morph.apply(this,arguments);
},cssUnit:function(f){
var g=this.css(f),h=[];
d.each(["em","px","%","pt"],function(j,k){
if(g.indexOf(k)>0){
h=[parseFloat(g),k];
}
});
return h;
}});
d.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","color","outlineColor"],function(g,f){
d.fx.step[f]=function(h){
if(h.state==0){
h.start=e(h.elem,f);
h.end=b(h.end);
}
h.elem.style[f]="rgb("+[Math.max(Math.min(parseInt((h.pos*(h.end[0]-h.start[0]))+h.start[0],10),255),0),Math.max(Math.min(parseInt((h.pos*(h.end[1]-h.start[1]))+h.start[1],10),255),0),Math.max(Math.min(parseInt((h.pos*(h.end[2]-h.start[2]))+h.start[2],10),255),0)].join(",")+")";
};
});
function b(g){
var f;
if(g&&g.constructor==Array&&g.length==3){
return g;
}
if(f=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(g)){
return [parseInt(f[1],10),parseInt(f[2],10),parseInt(f[3],10)];
}
if(f=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(g)){
return [parseFloat(f[1])*2.55,parseFloat(f[2])*2.55,parseFloat(f[3])*2.55];
}
if(f=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(g)){
return [parseInt(f[1],16),parseInt(f[2],16),parseInt(f[3],16)];
}
if(f=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(g)){
return [parseInt(f[1]+f[1],16),parseInt(f[2]+f[2],16),parseInt(f[3]+f[3],16)];
}
if(f=/rgba\(0, 0, 0, 0\)/.exec(g)){
return a.transparent;
}
return a[d.trim(g).toLowerCase()];
};
function e(h,f){
var g;
do{
g=d.curCSS(h,f);
if(g!=""&&g!="transparent"||d.nodeName(h,"body")){
break;
}
f="backgroundColor";
}while(h=h.parentNode);
return b(g);
};
var a={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]};
d.easing.jswing=d.easing.swing;
d.extend(d.easing,{def:"easeOutQuad",swing:function(g,h,f,j,i){
return d.easing[d.easing.def](g,h,f,j,i);
},easeInQuad:function(g,h,f,j,i){
return j*(h/=i)*h+f;
},easeOutQuad:function(g,h,f,j,i){
return -j*(h/=i)*(h-2)+f;
},easeInOutQuad:function(g,h,f,j,i){
if((h/=i/2)<1){
return j/2*h*h+f;
}
return -j/2*((--h)*(h-2)-1)+f;
},easeInCubic:function(g,h,f,j,i){
return j*(h/=i)*h*h+f;
},easeOutCubic:function(g,h,f,j,i){
return j*((h=h/i-1)*h*h+1)+f;
},easeInOutCubic:function(g,h,f,j,i){
if((h/=i/2)<1){
return j/2*h*h*h+f;
}
return j/2*((h-=2)*h*h+2)+f;
},easeInQuart:function(g,h,f,j,i){
return j*(h/=i)*h*h*h+f;
},easeOutQuart:function(g,h,f,j,i){
return -j*((h=h/i-1)*h*h*h-1)+f;
},easeInOutQuart:function(g,h,f,j,i){
if((h/=i/2)<1){
return j/2*h*h*h*h+f;
}
return -j/2*((h-=2)*h*h*h-2)+f;
},easeInQuint:function(g,h,f,j,i){
return j*(h/=i)*h*h*h*h+f;
},easeOutQuint:function(g,h,f,j,i){
return j*((h=h/i-1)*h*h*h*h+1)+f;
},easeInOutQuint:function(g,h,f,j,i){
if((h/=i/2)<1){
return j/2*h*h*h*h*h+f;
}
return j/2*((h-=2)*h*h*h*h+2)+f;
},easeInSine:function(g,h,f,j,i){
return -j*Math.cos(h/i*(Math.PI/2))+j+f;
},easeOutSine:function(g,h,f,j,i){
return j*Math.sin(h/i*(Math.PI/2))+f;
},easeInOutSine:function(g,h,f,j,i){
return -j/2*(Math.cos(Math.PI*h/i)-1)+f;
},easeInExpo:function(g,h,f,j,i){
return (h==0)?f:j*Math.pow(2,10*(h/i-1))+f;
},easeOutExpo:function(g,h,f,j,i){
return (h==i)?f+j:j*(-Math.pow(2,-10*h/i)+1)+f;
},easeInOutExpo:function(g,h,f,j,i){
if(h==0){
return f;
}
if(h==i){
return f+j;
}
if((h/=i/2)<1){
return j/2*Math.pow(2,10*(h-1))+f;
}
return j/2*(-Math.pow(2,-10*--h)+2)+f;
},easeInCirc:function(g,h,f,j,i){
return -j*(Math.sqrt(1-(h/=i)*h)-1)+f;
},easeOutCirc:function(g,h,f,j,i){
return j*Math.sqrt(1-(h=h/i-1)*h)+f;
},easeInOutCirc:function(g,h,f,j,i){
if((h/=i/2)<1){
return -j/2*(Math.sqrt(1-h*h)-1)+f;
}
return j/2*(Math.sqrt(1-(h-=2)*h)+1)+f;
},easeInElastic:function(g,i,f,m,l){
var j=1.70158;
var k=0;
var h=m;
if(i==0){
return f;
}
if((i/=l)==1){
return f+m;
}
if(!k){
k=l*0.3;
}
if(h<Math.abs(m)){
h=m;
var j=k/4;
}else{
var j=k/(2*Math.PI)*Math.asin(m/h);
}
return -(h*Math.pow(2,10*(i-=1))*Math.sin((i*l-j)*(2*Math.PI)/k))+f;
},easeOutElastic:function(g,i,f,m,l){
var j=1.70158;
var k=0;
var h=m;
if(i==0){
return f;
}
if((i/=l)==1){
return f+m;
}
if(!k){
k=l*0.3;
}
if(h<Math.abs(m)){
h=m;
var j=k/4;
}else{
var j=k/(2*Math.PI)*Math.asin(m/h);
}
return h*Math.pow(2,-10*i)*Math.sin((i*l-j)*(2*Math.PI)/k)+m+f;
},easeInOutElastic:function(g,i,f,m,l){
var j=1.70158;
var k=0;
var h=m;
if(i==0){
return f;
}
if((i/=l/2)==2){
return f+m;
}
if(!k){
k=l*(0.3*1.5);
}
if(h<Math.abs(m)){
h=m;
var j=k/4;
}else{
var j=k/(2*Math.PI)*Math.asin(m/h);
}
if(i<1){
return -0.5*(h*Math.pow(2,10*(i-=1))*Math.sin((i*l-j)*(2*Math.PI)/k))+f;
}
return h*Math.pow(2,-10*(i-=1))*Math.sin((i*l-j)*(2*Math.PI)/k)*0.5+m+f;
},easeInBack:function(g,h,f,k,j,i){
if(i==undefined){
i=1.70158;
}
return k*(h/=j)*h*((i+1)*h-i)+f;
},easeOutBack:function(g,h,f,k,j,i){
if(i==undefined){
i=1.70158;
}
return k*((h=h/j-1)*h*((i+1)*h+i)+1)+f;
},easeInOutBack:function(g,h,f,k,j,i){
if(i==undefined){
i=1.70158;
}
if((h/=j/2)<1){
return k/2*(h*h*(((i*=(1.525))+1)*h-i))+f;
}
return k/2*((h-=2)*h*(((i*=(1.525))+1)*h+i)+2)+f;
},easeInBounce:function(g,h,f,j,i){
return j-d.easing.easeOutBounce(g,i-h,0,j,i)+f;
},easeOutBounce:function(g,h,f,j,i){
if((h/=i)<(1/2.75)){
return j*(7.5625*h*h)+f;
}else{
if(h<(2/2.75)){
return j*(7.5625*(h-=(1.5/2.75))*h+0.75)+f;
}else{
if(h<(2.5/2.75)){
return j*(7.5625*(h-=(2.25/2.75))*h+0.9375)+f;
}else{
return j*(7.5625*(h-=(2.625/2.75))*h+0.984375)+f;
}
}
}
},easeInOutBounce:function(g,h,f,j,i){
if(h<i/2){
return d.easing.easeInBounce(g,h*2,0,j,i)*0.5+f;
}
return d.easing.easeOutBounce(g,h*2-i,0,j,i)*0.5+j*0.5+f;
}});
})(jQuery);
(function(a){
a.effects.blind=function(b){
return this.queue(function(){
var d=a(this),c=["position","top","left"];
var h=a.effects.setMode(d,b.options.mode||"hide");
var g=b.options.direction||"vertical";
a.effects.save(d,c);
d.show();
var j=a.effects.createWrapper(d).css({overflow:"hidden"});
var e=(g=="vertical")?"height":"width";
var i=(g=="vertical")?j.height():j.width();
if(h=="show"){
j.css(e,0);
}
var f={};
f[e]=h=="show"?i:0;
j.animate(f,b.duration,b.options.easing,function(){
if(h=="hide"){
d.hide();
}
a.effects.restore(d,c);
a.effects.removeWrapper(d);
if(b.callback){
b.callback.apply(d[0],arguments);
}
d.dequeue();
});
});
};
})(jQuery);
(function(a){
a.effects.bounce=function(b){
return this.queue(function(){
var e=a(this),l=["position","top","left"];
var k=a.effects.setMode(e,b.options.mode||"effect");
var n=b.options.direction||"up";
var c=b.options.distance||20;
var d=b.options.times||5;
var g=b.duration||250;
if(/show|hide/.test(k)){
l.push("opacity");
}
a.effects.save(e,l);
e.show();
a.effects.createWrapper(e);
var f=(n=="up"||n=="down")?"top":"left";
var p=(n=="up"||n=="left")?"pos":"neg";
var c=b.options.distance||(f=="top"?e.outerHeight({margin:true})/3:e.outerWidth({margin:true})/3);
if(k=="show"){
e.css("opacity",0).css(f,p=="pos"?-c:c);
}
if(k=="hide"){
c=c/(d*2);
}
if(k!="hide"){
d--;
}
if(k=="show"){
var h={opacity:1};
h[f]=(p=="pos"?"+=":"-=")+c;
e.animate(h,g/2,b.options.easing);
c=c/2;
d--;
}
for(var j=0;j<d;j++){
var o={},m={};
o[f]=(p=="pos"?"-=":"+=")+c;
m[f]=(p=="pos"?"+=":"-=")+c;
e.animate(o,g/2,b.options.easing).animate(m,g/2,b.options.easing);
c=(k=="hide")?c*2:c/2;
}
if(k=="hide"){
var h={opacity:0};
h[f]=(p=="pos"?"-=":"+=")+c;
e.animate(h,g/2,b.options.easing,function(){
e.hide();
a.effects.restore(e,l);
a.effects.removeWrapper(e);
if(b.callback){
b.callback.apply(this,arguments);
}
});
}else{
var o={},m={};
o[f]=(p=="pos"?"-=":"+=")+c;
m[f]=(p=="pos"?"+=":"-=")+c;
e.animate(o,g/2,b.options.easing).animate(m,g/2,b.options.easing,function(){
a.effects.restore(e,l);
a.effects.removeWrapper(e);
if(b.callback){
b.callback.apply(this,arguments);
}
});
}
e.queue("fx",function(){
e.dequeue();
});
e.dequeue();
});
};
})(jQuery);
(function(a){
a.effects.clip=function(b){
return this.queue(function(){
var f=a(this),j=["position","top","left","height","width"];
var i=a.effects.setMode(f,b.options.mode||"hide");
var k=b.options.direction||"vertical";
a.effects.save(f,j);
f.show();
var c=a.effects.createWrapper(f).css({overflow:"hidden"});
var e=f[0].tagName=="IMG"?c:f;
var g={size:(k=="vertical")?"height":"width",position:(k=="vertical")?"top":"left"};
var d=(k=="vertical")?e.height():e.width();
if(i=="show"){
e.css(g.size,0);
e.css(g.position,d/2);
}
var h={};
h[g.size]=i=="show"?d:0;
h[g.position]=i=="show"?0:d/2;
e.animate(h,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){
if(i=="hide"){
f.hide();
}
a.effects.restore(f,j);
a.effects.removeWrapper(f);
if(b.callback){
b.callback.apply(f[0],arguments);
}
f.dequeue();
}});
});
};
})(jQuery);
(function(a){
a.effects.drop=function(b){
return this.queue(function(){
var e=a(this),d=["position","top","left","opacity"];
var i=a.effects.setMode(e,b.options.mode||"hide");
var h=b.options.direction||"left";
a.effects.save(e,d);
e.show();
a.effects.createWrapper(e);
var f=(h=="up"||h=="down")?"top":"left";
var c=(h=="up"||h=="left")?"pos":"neg";
var j=b.options.distance||(f=="top"?e.outerHeight({margin:true})/2:e.outerWidth({margin:true})/2);
if(i=="show"){
e.css("opacity",0).css(f,c=="pos"?-j:j);
}
var g={opacity:i=="show"?1:0};
g[f]=(i=="show"?(c=="pos"?"+=":"-="):(c=="pos"?"-=":"+="))+j;
e.animate(g,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){
if(i=="hide"){
e.hide();
}
a.effects.restore(e,d);
a.effects.removeWrapper(e);
if(b.callback){
b.callback.apply(this,arguments);
}
e.dequeue();
}});
});
};
})(jQuery);
(function(a){
a.effects.explode=function(b){
return this.queue(function(){
var k=b.options.pieces?Math.round(Math.sqrt(b.options.pieces)):3;
var e=b.options.pieces?Math.round(Math.sqrt(b.options.pieces)):3;
b.options.mode=b.options.mode=="toggle"?(a(this).is(":visible")?"hide":"show"):b.options.mode;
var h=a(this).show().css("visibility","hidden");
var l=h.offset();
l.top-=parseInt(h.css("marginTop"),10)||0;
l.left-=parseInt(h.css("marginLeft"),10)||0;
var g=h.outerWidth(true);
var c=h.outerHeight(true);
for(var f=0;f<k;f++){
for(var d=0;d<e;d++){
h.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-d*(g/e),top:-f*(c/k)}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:g/e,height:c/k,left:l.left+d*(g/e)+(b.options.mode=="show"?(d-Math.floor(e/2))*(g/e):0),top:l.top+f*(c/k)+(b.options.mode=="show"?(f-Math.floor(k/2))*(c/k):0),opacity:b.options.mode=="show"?0:1}).animate({left:l.left+d*(g/e)+(b.options.mode=="show"?0:(d-Math.floor(e/2))*(g/e)),top:l.top+f*(c/k)+(b.options.mode=="show"?0:(f-Math.floor(k/2))*(c/k)),opacity:b.options.mode=="show"?1:0},b.duration||500);
}
}
setTimeout(function(){
b.options.mode=="show"?h.css({visibility:"visible"}):h.css({visibility:"visible"}).hide();
if(b.callback){
b.callback.apply(h[0]);
}
h.dequeue();
a("div.ui-effects-explode").remove();
},b.duration||500);
});
};
})(jQuery);
(function(a){
a.effects.fold=function(b){
return this.queue(function(){
var e=a(this),k=["position","top","left"];
var h=a.effects.setMode(e,b.options.mode||"hide");
var o=b.options.size||15;
var n=!(!b.options.horizFirst);
var g=b.duration?b.duration/2:a.fx.speeds._default/2;
a.effects.save(e,k);
e.show();
var d=a.effects.createWrapper(e).css({overflow:"hidden"});
var i=((h=="show")!=n);
var f=i?["width","height"]:["height","width"];
var c=i?[d.width(),d.height()]:[d.height(),d.width()];
var j=/([0-9]+)%/.exec(o);
if(j){
o=parseInt(j[1],10)/100*c[h=="hide"?0:1];
}
if(h=="show"){
d.css(n?{height:0,width:o}:{height:o,width:0});
}
var m={},l={};
m[f[0]]=h=="show"?c[0]:o;
l[f[1]]=h=="show"?c[1]:0;
d.animate(m,g,b.options.easing).animate(l,g,b.options.easing,function(){
if(h=="hide"){
e.hide();
}
a.effects.restore(e,k);
a.effects.removeWrapper(e);
if(b.callback){
b.callback.apply(e[0],arguments);
}
e.dequeue();
});
});
};
})(jQuery);
(function(a){
a.effects.highlight=function(b){
return this.queue(function(){
var e=a(this),d=["backgroundImage","backgroundColor","opacity"];
var h=a.effects.setMode(e,b.options.mode||"show");
var c=b.options.color||"#ffff99";
var g=e.css("backgroundColor");
a.effects.save(e,d);
e.show();
e.css({backgroundImage:"none",backgroundColor:c});
var f={backgroundColor:g};
if(h=="hide"){
f.opacity=0;
}
e.animate(f,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){
if(h=="hide"){
e.hide();
}
a.effects.restore(e,d);
if(h=="show"&&a.browser.msie){
this.style.removeAttribute("filter");
}
if(b.callback){
b.callback.apply(this,arguments);
}
e.dequeue();
}});
});
};
})(jQuery);
(function(a){
a.effects.pulsate=function(b){
return this.queue(function(){
var d=a(this);
var g=a.effects.setMode(d,b.options.mode||"show");
var f=b.options.times||5;
var e=b.duration?b.duration/2:a.fx.speeds._default/2;
if(g=="hide"){
f--;
}
if(d.is(":hidden")){
d.css("opacity",0);
d.show();
d.animate({opacity:1},e,b.options.easing);
f=f-2;
}
for(var c=0;c<f;c++){
d.animate({opacity:0},e,b.options.easing).animate({opacity:1},e,b.options.easing);
}
if(g=="hide"){
d.animate({opacity:0},e,b.options.easing,function(){
d.hide();
if(b.callback){
b.callback.apply(this,arguments);
}
});
}else{
d.animate({opacity:0},e,b.options.easing).animate({opacity:1},e,b.options.easing,function(){
if(b.callback){
b.callback.apply(this,arguments);
}
});
}
d.queue("fx",function(){
d.dequeue();
});
d.dequeue();
});
};
})(jQuery);
(function(a){
a.effects.puff=function(b){
return this.queue(function(){
var f=a(this);
var c=a.extend(true,{},b.options);
var h=a.effects.setMode(f,b.options.mode||"hide");
var g=parseInt(b.options.percent,10)||150;
c.fade=true;
var e={height:f.height(),width:f.width()};
var d=g/100;
f.from=(h=="hide")?e:{height:e.height*d,width:e.width*d};
c.from=f.from;
c.percent=(h=="hide")?g:100;
c.mode=h;
f.effect("scale",c,b.duration,b.callback);
f.dequeue();
});
};
a.effects.scale=function(b){
return this.queue(function(){
var g=a(this);
var d=a.extend(true,{},b.options);
var j=a.effects.setMode(g,b.options.mode||"effect");
var h=parseInt(b.options.percent,10)||(parseInt(b.options.percent,10)==0?0:(j=="hide"?0:100));
var i=b.options.direction||"both";
var c=b.options.origin;
if(j!="effect"){
d.origin=c||["middle","center"];
d.restore=true;
}
var f={height:g.height(),width:g.width()};
g.from=b.options.from||(j=="show"?{height:0,width:0}:f);
var e={y:i!="horizontal"?(h/100):1,x:i!="vertical"?(h/100):1};
g.to={height:f.height*e.y,width:f.width*e.x};
if(b.options.fade){
if(j=="show"){
g.from.opacity=0;
g.to.opacity=1;
}
if(j=="hide"){
g.from.opacity=1;
g.to.opacity=0;
}
}
d.from=g.from;
d.to=g.to;
d.mode=j;
g.effect("size",d,b.duration,b.callback);
g.dequeue();
});
};
a.effects.size=function(b){
return this.queue(function(){
var c=a(this),n=["position","top","left","width","height","overflow","opacity"];
var m=["position","top","left","overflow","opacity"];
var j=["width","height","overflow"];
var p=["fontSize"];
var k=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"];
var f=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"];
var g=a.effects.setMode(c,b.options.mode||"effect");
var i=b.options.restore||false;
var e=b.options.scale||"both";
var o=b.options.origin;
var d={height:c.height(),width:c.width()};
c.from=b.options.from||d;
c.to=b.options.to||d;
if(o){
var h=a.effects.getBaseline(o,d);
c.from.top=(d.height-c.from.height)*h.y;
c.from.left=(d.width-c.from.width)*h.x;
c.to.top=(d.height-c.to.height)*h.y;
c.to.left=(d.width-c.to.width)*h.x;
}
var l={from:{y:c.from.height/d.height,x:c.from.width/d.width},to:{y:c.to.height/d.height,x:c.to.width/d.width}};
if(e=="box"||e=="both"){
if(l.from.y!=l.to.y){
n=n.concat(k);
c.from=a.effects.setTransition(c,k,l.from.y,c.from);
c.to=a.effects.setTransition(c,k,l.to.y,c.to);
}
if(l.from.x!=l.to.x){
n=n.concat(f);
c.from=a.effects.setTransition(c,f,l.from.x,c.from);
c.to=a.effects.setTransition(c,f,l.to.x,c.to);
}
}
if(e=="content"||e=="both"){
if(l.from.y!=l.to.y){
n=n.concat(p);
c.from=a.effects.setTransition(c,p,l.from.y,c.from);
c.to=a.effects.setTransition(c,p,l.to.y,c.to);
}
}
a.effects.save(c,i?n:m);
c.show();
a.effects.createWrapper(c);
c.css("overflow","hidden").css(c.from);
if(e=="content"||e=="both"){
k=k.concat(["marginTop","marginBottom"]).concat(p);
f=f.concat(["marginLeft","marginRight"]);
j=n.concat(k).concat(f);
c.find("*[width]").each(function(){
child=a(this);
if(i){
a.effects.save(child,j);
}
var q={height:child.height(),width:child.width()};
child.from={height:q.height*l.from.y,width:q.width*l.from.x};
child.to={height:q.height*l.to.y,width:q.width*l.to.x};
if(l.from.y!=l.to.y){
child.from=a.effects.setTransition(child,k,l.from.y,child.from);
child.to=a.effects.setTransition(child,k,l.to.y,child.to);
}
if(l.from.x!=l.to.x){
child.from=a.effects.setTransition(child,f,l.from.x,child.from);
child.to=a.effects.setTransition(child,f,l.to.x,child.to);
}
child.css(child.from);
child.animate(child.to,b.duration,b.options.easing,function(){
if(i){
a.effects.restore(child,j);
}
});
});
}
c.animate(c.to,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){
if(g=="hide"){
c.hide();
}
a.effects.restore(c,i?n:m);
a.effects.removeWrapper(c);
if(b.callback){
b.callback.apply(this,arguments);
}
c.dequeue();
}});
});
};
})(jQuery);
(function(a){
a.effects.shake=function(b){
return this.queue(function(){
var e=a(this),l=["position","top","left"];
var k=a.effects.setMode(e,b.options.mode||"effect");
var n=b.options.direction||"left";
var c=b.options.distance||20;
var d=b.options.times||3;
var g=b.duration||b.options.duration||140;
a.effects.save(e,l);
e.show();
a.effects.createWrapper(e);
var f=(n=="up"||n=="down")?"top":"left";
var p=(n=="up"||n=="left")?"pos":"neg";
var h={},o={},m={};
h[f]=(p=="pos"?"-=":"+=")+c;
o[f]=(p=="pos"?"+=":"-=")+c*2;
m[f]=(p=="pos"?"-=":"+=")+c*2;
e.animate(h,g,b.options.easing);
for(var j=1;j<d;j++){
e.animate(o,g,b.options.easing).animate(m,g,b.options.easing);
}
e.animate(o,g,b.options.easing).animate(h,g/2,b.options.easing,function(){
a.effects.restore(e,l);
a.effects.removeWrapper(e);
if(b.callback){
b.callback.apply(this,arguments);
}
});
e.queue("fx",function(){
e.dequeue();
});
e.dequeue();
});
};
})(jQuery);
(function(a){
a.effects.slide=function(b){
return this.queue(function(){
var e=a(this),d=["position","top","left"];
var i=a.effects.setMode(e,b.options.mode||"show");
var h=b.options.direction||"left";
a.effects.save(e,d);
e.show();
a.effects.createWrapper(e).css({overflow:"hidden"});
var f=(h=="up"||h=="down")?"top":"left";
var c=(h=="up"||h=="left")?"pos":"neg";
var j=b.options.distance||(f=="top"?e.outerHeight({margin:true}):e.outerWidth({margin:true}));
if(i=="show"){
e.css(f,c=="pos"?-j:j);
}
var g={};
g[f]=(i=="show"?(c=="pos"?"+=":"-="):(c=="pos"?"-=":"+="))+j;
e.animate(g,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){
if(i=="hide"){
e.hide();
}
a.effects.restore(e,d);
a.effects.removeWrapper(e);
if(b.callback){
b.callback.apply(this,arguments);
}
e.dequeue();
}});
});
};
})(jQuery);
(function(a){
a.effects.transfer=function(b){
return this.queue(function(){
var f=a(this),h=a(b.options.to),e=h.offset(),g={top:e.top,left:e.left,height:h.innerHeight(),width:h.innerWidth()},d=f.offset(),c=a("<div class=\"ui-effects-transfer\"></div>").appendTo(document.body).addClass(b.options.className).css({top:d.top,left:d.left,height:f.innerHeight(),width:f.innerWidth(),position:"absolute"}).animate(g,b.duration,b.options.easing,function(){
c.remove();
(b.callback&&b.callback.apply(f[0],arguments));
f.dequeue();
});
});
};
})(jQuery);
;
include.set_path('resources');
function BaltoUni(_1){
_1=_1.replace(/ä/g, "ā");
_1=_1.replace(/é/g, "ī");
_1=_1.replace(/ü/g, "ū");
_1=_1.replace(/å/g, "ṛ");
_1=_1.replace(/è/g, "ṟ");
_1=_1.replace(/ì/g, "ṅ");
_1=_1.replace(/ṣ/, "&#241;");
_1=_1.replace(/ñ/g, "ṣ");
_1=_1.replace(/&#241;/g, "ñ");
_1=_1.replace(/ï/g, "ñ");
_1=_1.replace(/ö/g, "ṭ");
_1=_1.replace(/ò/g, "ḍ");
_1=_1.replace(/ë/g, "ṇ");
_1=_1.replace(/ç/g, "ś");
_1=_1.replace(/à/g, "ṁ");
_1=_1.replace(/ù/g, "ḥ");
_1=_1.replace(/ÿ/g, "ḷ");
_1=_1.replace(/û/g, "ḻ");
_1=_1.replace(/Ä/g, "Ā");
_1=_1.replace(/É/g, "Ī");
_1=_1.replace(/Ü/g, "Ū");
_1=_1.replace(/Å/g, "Ṛ");
_1=_1.replace(/È/g, "Ṟ");
_1=_1.replace(/Ì/g, "Ṅ");
_1=_1.replace(/Ṣ/g, "&#209;");
_1=_1.replace(/Ñ/g, "Ṣ");
_1=_1.replace(/&#209;/g, "Ñ");
_1=_1.replace(/Ï/g, "Ñ");
_1=_1.replace(/Ö/g, "Ṭ");
_1=_1.replace(/Ò/g, "Ḍ");
_1=_1.replace(/Ë/g, "Ṇ");
_1=_1.replace(/Ç/g, "Ś");
_1=_1.replace(/À/g, "Ṁ");
_1=_1.replace(/Ù/g, "Ḥ");
_1=_1.replace(/ß/g, "Ḷ");
return _1;
};
;
include.set_path('resources');
UniToASCII=function(_1){
if(!/ā|ī|ū|ṛ|ṟ|ṅ|ṣ|ñ|ṭ|ḍ|ṇ|ś|ṁ|ḥ|ḷ|ḻ|Ā|Ī|Ū|Ṛ|Ṟ|Ṣ|Ñ|Ṭ|Ḍ|Ṇ|Ś|Ṁ|Ḥ|Ḷ/.test(_1)){
return _1;
}
_1=_1.replace(/ā/g,"a");
_1=_1.replace(/ī/g,"i");
_1=_1.replace(/ū/g,"u");
_1=_1.replace(/ṛ/g,"r");
_1=_1.replace(/ṟ/g,"r");
_1=_1.replace(/ṅ/g,"n");
_1=_1.replace(/ṣ/g,"s");
_1=_1.replace(/ñ/g,"n");
_1=_1.replace(/ṭ/g,"t");
_1=_1.replace(/ḍ/g,"d");
_1=_1.replace(/ṇ/g,"n");
_1=_1.replace(/ś/g,"s");
_1=_1.replace(/ṁ/g,"m");
_1=_1.replace(/ḥ/g,"h");
_1=_1.replace(/ḷ/g,"l");
_1=_1.replace(/ḻ/g,"l");
_1=_1.replace(/Ā/g,"A");
_1=_1.replace(/Ī/g,"I");
_1=_1.replace(/Ū/g,"U");
_1=_1.replace(/Ṛ/g,"R");
_1=_1.replace(/Ṟ/g,"R");
_1=_1.replace(/&#7748;/g,"N");
_1=_1.replace(/Ṣ/g,"S");
_1=_1.replace(/Ñ/g,"N");
_1=_1.replace(/Ṭ/g,"T");
_1=_1.replace(/Ḍ/g,"D");
_1=_1.replace(/Ṇ/g,"N");
_1=_1.replace(/Ś/g,"S");
_1=_1.replace(/Ṁ/g,"M");
_1=_1.replace(/Ḥ/g,"H");
_1=_1.replace(/Ḷ/g,"L");
return _1;
};
;
include.set_path('resources');
(function($){
jQuery.fn.highlight_sanskrit=function(_2,_3){
defaults={i:true,global:true,strict:true,hi_class:"highlight_terms",type:"span"};
var _4=$.extend(defaults,_3);
return this.each(function(){
if(/ä|é|ü|å|è|ì|ï|ö|ò|ë|ç|à|ù|ÿ|û|Ä|É|Ü|Å|È|Ì|Ñ|Ï|Ö|Ò|Ë|Ç|À|Ù|ß/.test(_2)){
_2=UniToASCII(BaltoUni(_2));
}
if(/ā|ī|ū|ṛ|ṟ|ṅ|ṣ|ñ|ṭ|ḍ|ṇ|ś|ṁ|ḥ|ḷ|ḻ|Ā|Ī|Ū|Ṛ|Ṟ|Ṣ|Ñ|Ṭ|Ḍ|Ṇ|Ś|Ṁ|Ḥ|Ḷ/.test(_2)){
_2=UniToASCII(_2);
}
var _5=$(this).html();
var _6=UniToASCII(_5);
var _7=_5;
var _8=_4.hi_class;
var _9="<"+_4.type+" class=\""+_8+"\">";
var _a="</"+_4.type+">";
var _b="";
_4.global?_b+="g":"";
_4.i?_b+="i":"";
_4.strict?re1=new RegExp("\\b"+RegExp.escape(_2)+"\\b",_b):re1=new RegExp(_2,_b);
var _c=_6.match(re1);
if(_c){
var _d=0;
var _e=new Array(_c.length);
for(var m=0;m<_c.length;m++){
_d=_6.substring(0,_d).length;
_e[m]=_d+_6.substring(_d).search(re1);
var _10=_9+_5.substr(_e[m],_2.length)+_a;
var _11=_9+_c[m]+_a;
var len=_c[m].length;
var a1=_5.substring(0,_e[m]);
var a2=_6.substring(0,_e[m]);
var b1=_5.substring(a1.length+len);
var b2=_6.substring(a2.length+len);
_5=a1+_10+b1;
_6=a2+_11+b2;
_d=_e[m]+_11.length;
$(this).html(_5);
}
}
});
};
})(jQuery);
;
include.set_path('resources');
RegExp.escape=function(_1){
if(!arguments.callee.sRE){
var _2=["/",".","*","+","?","|","(",")","[","]","{","}","\\"];
arguments.callee.sRE=new RegExp("(\\"+_2.join("|\\")+")","g");
}
return _1.replace(arguments.callee.sRE,"\\$1");
};
;
include.set_path('jmvc/plugins/controller');
include.plugins("lang","lang/inflector","dom/event","lang/class","lang/openajax","dom/data");
include("delegator","controller");
if(MVC.View){
include.plugins("controller/view");
}
;
include.set_path('jmvc/plugins/lang');
include("standard_helpers");
;
include.set_path('jmvc/plugins/lang');
MVC.String={};
MVC.String.strip=function(_1){
return _1.replace(/^\s+/,"").replace(/\s+$/,"");
};
MVC.Function={};
MVC.Function.params=function(_2){
var ps=_2.toString().match(/^[\s\(]*function[^(]*\((.*?)\)/)[1].split(",");
if(ps.length==1&&!ps[0]){
return [];
}
for(var i=0;i<ps.length;i++){
ps[i]=MVC.String.strip(ps[i]);
}
return ps;
};
MVC.Native={};
MVC.Native.extend=function(_5,_6){
if(!MVC[_5]){
MVC[_5]={};
}
var _7=MVC[_5];
for(var _8 in _6){
_7[_8]=_6[_8];
if(!MVC._no_conflict){
window[_5][_8]=_6[_8];
if(typeof _6[_8]=="function"){
var _9=MVC.Function.params(_6[_8]);
if(_9.length==0){
continue;
}
MVC.Native.set_prototype(_5,_8,_6[_8]);
}
}
}
};
MVC.Native.set_prototype=function(_a,_b,_c){
if(!_c){
_c=MVC[_a][_b];
}
window[_a].prototype[_b]=function(){
var _d=[this];
for(var i=0,_f=arguments.length;i<_f;i++){
_d.push(arguments[i]);
}
return _c.apply(this,_d);
};
};
MVC.Native.Object={};
MVC.Native.Object.extend=function(_10,_11){
for(var _12 in _11){
_10[_12]=_11[_12];
}
return _10;
};
MVC.Native.Object.to_query_string=function(_13,_14){
if(typeof _13!="object"){
return _13;
}
return MVC.Native.Object.to_query_string.worker(_13,_14).join("&");
};
MVC.Native.Object.to_query_string.worker=function(obj,_16){
var _17=[],_18;
for(var _19 in obj){
if(obj.hasOwnProperty(_19)&&((_18=obj[_19])!=null)){
if(_18&&_18.constructor===Date){
_18=_18.getUTCFullYear()+"-"+MVC.Number.to_padded_string(_18.getUTCMonth()+1,2)+"-"+MVC.Number.to_padded_string(_18.getUTCDate(),2)+" "+MVC.Number.to_padded_string(_18.getUTCHours(),2)+":"+MVC.Number.to_padded_string(_18.getUTCMinutes(),2)+":"+MVC.Number.to_padded_string(_18.getUTCSeconds(),2);
}
if(_18 instanceof Array&&_18.length){
var _1a=encodeURIComponent(_16?_16+"["+_19+"]":_19);
for(var i=0;i<_18.length;i++){
var _1c=encodeURIComponent(_18[i].toString());
_17.push(_1a+"="+_1c);
}
}else{
if(typeof _18!="object"){
var _1c=encodeURIComponent(_18.toString());
var _1a=encodeURIComponent(_16?_16+"["+_19+"]":_19);
_17.push(_1a+"="+_1c);
}else{
_17=_17.concat(MVC.Native.Object.to_query_string.worker(_18,_16?_16+"["+_19+"]":_19));
}
}
}
}
return _17;
};
MVC.Native.extend("String",{capitalize:function(s){
return s.charAt(0).toUpperCase()+s.substr(1).toLowerCase();
},include:function(s,_1f){
return s.indexOf(_1f)>-1;
},ends_with:function(s,_21){
var d=s.length-_21.length;
return d>=0&&s.lastIndexOf(_21)===d;
},camelize:function(s){
var _24=s.split(/_|-/);
for(var i=1;i<_24.length;i++){
_24[i]=MVC.String.capitalize(_24[i]);
}
return _24.join("");
},classize:function(s){
var _27=s.split(/_|-/);
for(var i=0;i<_27.length;i++){
_27[i]=MVC.String.capitalize(_27[i]);
}
return _27.join("");
},strip:MVC.String.strip});
MVC.Native.extend("Array",{include:function(a,_2a){
for(var i=0;i<a.length;i++){
if(a[i]==_2a){
return true;
}
}
return false;
}});
MVC.Array.from=function(_2c){
if(!_2c){
return [];
}
var _2d=[];
for(var i=0,_2f=_2c.length;i<_2f;i++){
_2d.push(_2c[i]);
}
return _2d;
};
MVC.Array.is=function(_30){
return Object.prototype.toString.call(a)==="[object Array]";
};
MVC.Native.extend("Function",{bind:function(f,obj){
var _33=MVC.Array.from(arguments);
_33.shift();
_33.shift();
var _34=f,_35=arguments[1];
return function(){
return _34.apply(_35,_33.concat(MVC.Array.from(arguments)));
};
},params:MVC.Function.params});
MVC.Native.extend("Number",{to_padded_string:function(n,len,_38){
var _39=n.toString(_38||10);
var ret="",_3b=len-_39.length;
for(var i=0;i<_3b;i++){
ret+="0";
}
return ret+_39;
}});
MVC.Native.Array=MVC.Array;
MVC.Native.Function=MVC.Function;
MVC.Native.Number=MVC.Number;
MVC.Native.String=MVC.String;
MVC.Object=MVC.Native.Object;
if(!MVC._no_conflict){
Array.from=MVC.Array.from;
}
;
include.set_path('jmvc/plugins/lang/inflector');
include.plugins("lang");
include("inflector");
;
include.set_path('jmvc/plugins/lang/inflector');
MVC.Inflector={Inflections:{plural:[[/(quiz)$/i,"$1zes"],[/^(ox)$/i,"$1en"],[/([m|l])ouse$/i,"$1ice"],[/(matr|vert|ind)ix|ex$/i,"$1ices"],[/(x|ch|ss|sh)$/i,"$1es"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/(hive)$/i,"$1s"],[/(?:([^f])fe|([lr])f)$/i,"$1$2ves"],[/sis$/i,"ses"],[/([ti])um$/i,"$1a"],[/(buffal|tomat)o$/i,"$1oes"],[/(bu)s$/i,"$1ses"],[/(alias|status)$/i,"$1es"],[/(octop|vir)us$/i,"$1i"],[/(ax|test)is$/i,"$1es"],[/s$/i,"s"],[/$/,"s"]],singular:[[/(quiz)zes$/i,"$1"],[/(matr)ices$/i,"$1ix"],[/(vert|ind)ices$/i,"$1ex"],[/^(ox)en/i,"$1"],[/(alias|status)es$/i,"$1"],[/(octop|vir)i$/i,"$1us"],[/(cris|ax|test)es$/i,"$1is"],[/(shoe)s$/i,"$1"],[/(o)es$/i,"$1"],[/(bus)es$/i,"$1"],[/([m|l])ice$/i,"$1ouse"],[/(x|ch|ss|sh)es$/i,"$1"],[/(m)ovies$/i,"$1ovie"],[/(s)eries$/i,"$1eries"],[/([^aeiouy]|qu)ies$/i,"$1y"],[/([lr])ves$/i,"$1f"],[/(tive)s$/i,"$1"],[/(hive)s$/i,"$1"],[/([^f])ves$/i,"$1fe"],[/(^analy)ses$/i,"$1sis"],[/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/i,"$1$2sis"],[/([ti])a$/i,"$1um"],[/(n)ews$/i,"$1ews"],[/s$/i,""]],irregular:[["move","moves"],["sex","sexes"],["child","children"],["man","men"],["foreman","foremen"],["person","people"],["woman","women"]],uncountable:["sheep","fish","series","species","money","rice","information","equipment"]},pluralize:function(_1){
for(var i=0;i<MVC.Inflector.Inflections.uncountable.length;i++){
var _3=MVC.Inflector.Inflections.uncountable[i];
if(_1.toLowerCase()==_3){
return _3;
}
}
for(var i=0;i<MVC.Inflector.Inflections.irregular.length;i++){
var _4=MVC.Inflector.Inflections.irregular[i][0];
var _5=MVC.Inflector.Inflections.irregular[i][1];
if((_1.toLowerCase()==_4)||(_1==_5)){
return _1.substring(0,1)+_5.substring(1);
}
}
for(var i=0;i<MVC.Inflector.Inflections.plural.length;i++){
var _6=MVC.Inflector.Inflections.plural[i][0];
var _7=MVC.Inflector.Inflections.plural[i][1];
if(_6.test(_1)){
return _1.replace(_6,_7);
}
}
},singularize:function(_8){
for(var i=0;i<MVC.Inflector.Inflections.uncountable.length;i++){
var _a=MVC.Inflector.Inflections.uncountable[i];
if(_8.toLowerCase()==_a){
return _a;
}
}
for(var i=0;i<MVC.Inflector.Inflections.irregular.length;i++){
var _b=MVC.Inflector.Inflections.irregular[i][0];
var _c=MVC.Inflector.Inflections.irregular[i][1];
if((_8.toLowerCase()==_b)||(_8.toLowerCase()==_c)){
return _8.substring(0,1)+_b.substring(1);
}
}
for(var i=0;i<MVC.Inflector.Inflections.singular.length;i++){
var _d=MVC.Inflector.Inflections.singular[i][0];
var _e=MVC.Inflector.Inflections.singular[i][1];
if(_d.test(_8)){
return _8.replace(_d,_e);
}
}
}};
MVC.Native.extend("String",{pluralize:function(_f,_10,_11){
if(typeof _10=="undefined"){
return MVC.Inflector.pluralize(_f);
}else{
return _10+" "+(1==parseInt(_10)?_f:_11||MVC.Inflector.pluralize(_f));
}
},singularize:function(_12,_13){
if(typeof _13=="undefined"){
return MVC.Inflector.singularize(_12);
}else{
return _13+" "+MVC.Inflector.singularize(_12);
}
},is_singular:function(_14){
if(MVC.String.singularize(_14)==null&&_14){
return true;
}
return false;
}});
;
include.set_path('jmvc/plugins/dom/event');
if(typeof Prototype=="undefined"){
include("standard");
}else{
include("prototype_event");
}
;
include.set_path('jmvc/plugins/dom/event');
if(document.addEventListener){
MVC.Event={observe:function(el,_2,_3,_4){
if(_4==null){
_4=false;
}
el.addEventListener(_2,_3,_4);
},stop_observing:function(el,_6,_7,_8){
if(_8==null){
_8=false;
}
el.removeEventListener(_6,_7,false);
}};
}else{
if(document.attachEvent){
MVC.Event={observe:function(_9,_a,_b){
if(MVC.Event._find(_9,_a,_b)!=-1){
return;
}
var _c=function(e){
if(!e){
e=window.event;
}
var _e={_event:e,type:e.type,target:_a=="mouseover"?e.toElement:(_a=="mouseout"?e.fromElement:(e.srcElement||document)),currentTarget:_9,relatedTarget:_a=="mouseover"?e.fromElement:e.toElement,eventPhase:(e.srcElement==_9)?2:3,clientX:e.clientX,clientY:e.clientY,screenX:e.screenX,screenY:e.screenY,altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,charCode:e.keyCode,stopPropagation:function(){
this._event.cancelBubble=true;
},preventDefault:function(){
this._event.returnValue=false;
},which:e.which||(e.button&1?1:(e.button&2?3:(e.button&4?2:0)))};
if(Function.prototype.call){
_b.call(_9,_e);
}else{
_9._currentHandler=_b;
_9._currentHandler(_e);
_9._currentHandler=null;
}
};
_9.attachEvent("on"+_a,_c);
var h={element:_9,eventType:_a,handler:_b,wrappedHandler:_c};
var d=_9.document||_9,w=d.parentWindow,id=MVC.Event._uid();
if(!w._allHandlers){
w._allHandlers={};
}
w._allHandlers[id]=h;
if(!_9._handlers){
_9._handlers=[];
}
_9._handlers.push(id);
if(!w._onunloadHandlerRegistered){
w._onunloadHandlerRegistered=true;
w.attachEvent("onunload",MVC.Event._removeAllHandlers);
}
},stop_observing:function(_13,_14,_15){
var i=MVC.Event._find(_13,_14,_15);
if(i==-1){
return;
}
var d=_13.document||_13,w=d.parentWindow,_19=_13._handlers[i],h=w._allHandlers[_19];
_13.detachEvent("on"+_14,h.wrappedHandler);
_13._handlers.splice(i,1);
delete w._allHandlers[_19];
},_find:function(_1b,_1c,_1d){
var _1e=_1b._handlers;
if(!_1e){
return -1;
}
var d=_1b.document||_1b,w=d.parentWindow;
for(var i=_1e.length-1;i>=0;i--){
var h=w._allHandlers[_1e[i]];
if(h.eventType==_1c&&h.handler==_1d){
return i;
}
}
return -1;
},_removeAllHandlers:function(){
var w=this;
for(var id in w._allHandlers){
if(!w._allHandlers.hasOwnProperty(id)){
continue;
}
var h=w._allHandlers[id];
if(h.element){
h.element.detachEvent("on"+h.eventType,h.wrappedHandler);
}
delete w._allHandlers[id];
}
},_counter:0,_uid:function(){
return "h"+MVC.Event._counter++;
}};
}
}
if(!MVC._no_conflict&&typeof Event=="undefined"){
Event=MVC.Event;
}
;
include.set_path('jmvc/plugins/lang/class');
(function(){
var _1=false,_2=/xyz/.test(function(){
xyz;
})?/\b_super\b/:/.*/;
MVC.Class=function(){
};
MVC.Class.extend=function(_3,_4,_5){
if(typeof _3!="string"){
_5=_4;
_4=_3;
_3=null;
}
if(!_5){
_5=_4;
_4=null;
}
_5=_5||{};
var _6=this;
var _7=this.prototype;
_1=true;
var _8=new this();
_1=false;
for(var _9 in _5){
_8[_9]=typeof _5[_9]=="function"&&typeof _7[_9]=="function"&&_2.test(_5[_9])?(function(_a,fn){
return function(){
var _c=this._super;
this._super=_7[_a];
var _d=fn.apply(this,arguments);
this._super=_c;
return _d;
};
})(_9,_5[_9]):_5[_9];
}
function _e(){
if(!_1&&this.init){
this.init.apply(this,arguments);
}
};
_e.prototype=_8;
_e.prototype.Class=_e;
_e.constructor=_e;
for(var _9 in this){
if(this.hasOwnProperty(_9)&&_9!="prototype"){
_e[_9]=this[_9];
}
}
for(var _9 in _4){
_e[_9]=typeof _4[_9]=="function"&&typeof _e[_9]=="function"&&_2.test(_4[_9])?(function(_f,fn){
return function(){
var tmp=this._super;
this._super=_6[_f];
var ret=fn.apply(this,arguments);
this._super=tmp;
return ret;
};
})(_9,_4[_9]):_4[_9];
}
_e.extend=arguments.callee;
if(_3){
_e.className=_3;
}
if(_e.init){
_e.init(_e);
}
if(_6.extended){
_6.extended(_e);
}
return _e;
};
})();
if(!MVC._no_conflict&&typeof Class=="undefined"){
Class=MVC.Class;
}
;
include.set_path('jmvc/plugins/lang/openajax');
if(!window["OpenAjax"]){
OpenAjax=new function(){
var t=true;
var f=false;
var g=window;
var _4="org.openajax.hub.";
var h={};
this.hub=h;
h.implementer="http://openajax.org";
h.implVersion="1.0";
h.specVersion="1.0";
h.implExtraData={};
var _6={};
h.libraries=_6;
h.registerLibrary=function(_7,_8,_9,_a){
_6[_7]={prefix:_7,namespaceURI:_8,version:_9,extraData:_a};
this.publish(_4+"registerLibrary",_6[_7]);
};
h.unregisterLibrary=function(_b){
this.publish(_4+"unregisterLibrary",_6[_b]);
delete _6[_b];
};
h._subscriptions={c:{},s:[]};
h._cleanup=[];
h._subIndex=0;
h._pubDepth=0;
h.subscribe=function(_c,_d,_e,_f,_10){
if(!_e){
_e=window;
}
var _11=_c+"."+this._subIndex;
var sub={scope:_e,cb:_d,fcb:_10,data:_f,sid:this._subIndex++,hdl:_11};
var _13=_c.split(".");
this._subscribe(this._subscriptions,_13,0,sub);
return _11;
};
h.publish=function(_14,_15){
var _16=_14.split(".");
this._pubDepth++;
this._publish(this._subscriptions,_16,0,_14,_15);
this._pubDepth--;
if((this._cleanup.length>0)&&(this._pubDepth==0)){
for(var i=0;i<this._cleanup.length;i++){
this.unsubscribe(this._cleanup[i].hdl);
}
delete (this._cleanup);
this._cleanup=[];
}
};
h.unsubscribe=function(sub){
var _19=sub.split(".");
var sid=_19.pop();
this._unsubscribe(this._subscriptions,_19,0,sid);
};
h._subscribe=function(_1b,_1c,_1d,sub){
var _1f=_1c[_1d];
if(_1d==_1c.length){
_1b.s.push(sub);
}else{
if(typeof _1b.c=="undefined"){
_1b.c={};
}
if(typeof _1b.c[_1f]=="undefined"){
_1b.c[_1f]={c:{},s:[]};
this._subscribe(_1b.c[_1f],_1c,_1d+1,sub);
}else{
this._subscribe(_1b.c[_1f],_1c,_1d+1,sub);
}
}
};
h._publish=function(_20,_21,_22,_23,msg,pcb,_26){
if(typeof _20!="undefined"){
var _27;
if(_22==_21.length){
_27=_20;
}else{
this._publish(_20.c[_21[_22]],_21,_22+1,_23,msg,pcb,_26);
this._publish(_20.c["*"],_21,_22+1,_23,msg,pcb,_26);
_27=_20.c["**"];
}
if(typeof _27!="undefined"){
var _28=_27.s;
var max=_28.length;
for(var i=0;i<max;i++){
if(_28[i].cb){
var sc=_28[i].scope;
var cb=_28[i].cb;
var fcb=_28[i].fcb;
var d=_28[i].data;
var sid=_28[i].sid;
var _30=_28[i].cid;
if(typeof cb=="string"){
cb=sc[cb];
}
if(typeof fcb=="string"){
fcb=sc[fcb];
}
if((!fcb)||(fcb.call(sc,_23,msg,d))){
if((!pcb)||(pcb(_23,msg,_26,_30))){
cb.call(sc,_23,msg,d,sid);
}
}
}
}
}
}
};
h._unsubscribe=function(_31,_32,_33,sid){
if(typeof _31!="undefined"){
if(_33<_32.length){
var _35=_31.c[_32[_33]];
this._unsubscribe(_35,_32,_33+1,sid);
if(_35.s.length==0){
for(var x in _35.c){
return;
}
delete _31.c[_32[_33]];
}
return;
}else{
var _37=_31.s;
var max=_37.length;
for(var i=0;i<max;i++){
if(sid==_37[i].sid){
if(this._pubDepth>0){
_37[i].cb=null;
this._cleanup.push(_37[i]);
}else{
_37.splice(i,1);
}
return;
}
}
}
}
};
h.reinit=function(){
for(var lib in OpenAjax.hub.libraries){
delete OpenAjax.hub.libraries[lib];
}
OpenAjax.hub.registerLibrary("OpenAjax","http://openajax.org/hub","1.0",{});
delete OpenAjax._subscriptions;
OpenAjax._subscriptions={c:{},s:[]};
delete OpenAjax._cleanup;
OpenAjax._cleanup=[];
OpenAjax._subIndex=0;
OpenAjax._pubDepth=0;
};
};
OpenAjax.hub.registerLibrary("OpenAjax","http://openajax.org/hub","1.0",{});
}
OpenAjax.hub.registerLibrary("JavaScriptMVC","http://JavaScriptMVC.com","1.5",{});
;
include.set_path('jmvc/plugins/dom/data');
MVC.Dom={cache:{},expando:"mvc"+(+new Date),uuid:0,window_data:{},data:function(_1,_2,_3){
_1=_1==window?MVC.Dom.window_data:_1;
var id=_1[MVC.Dom.expando];
if(!id){
id=_1[MVC.Dom.expando]=++MVC.Dom.uuid;
}
if(!MVC.Dom.cache[id]){
MVC.Dom.cache[id]={};
}
if(_3!==undefined){
MVC.Dom.cache[id][_2]=_3;
}
return _2?MVC.Dom.cache[id][_2]:MVC.Dom.cache[id];
},get_or_set_data:function(_5,_6,_7){
var _8=MVC.Dom.data(_5,_6);
return _8?_8:MVC.Dom.data(_5,_6,_7);
},remove_data:function(_9,_a){
_9=_9==window?MVC.Dom.window_data:_9;
var id=_9[MVC.Dom.expando];
if(_a){
if(MVC.Dom.cache[id]){
delete MVC.Dom.cache[id][_a];
_a="";
for(_a in MVC.Dom.cache[id]){
break;
}
if(!_a){
MVC.Dom.remove_data(_9);
}
}
}else{
try{
delete _9[MVC.Dom.expando];
}
catch(e){
if(_9.removeAttribute){
_9.removeAttribute(MVC.Dom.expando);
}
}
delete MVC.Dom.cache[id];
}
}};
;
include.set_path('jmvc/plugins/controller');
MVC.Delegator=function(_1,_2,f,_4){
this._event=_2;
this._selector=_1;
this._func=f;
this.element=_4||document.documentElement;
MVC.Delegator.jmvc(this.element);
if(_2=="contextmenu"&&MVC.Browser.Opera){
return this.context_for_opera();
}
if(_2=="submit"&&MVC.Browser.IE){
return this.submit_for_ie();
}
if(_2=="change"&&MVC.Browser.IE){
return this.change_for_ie();
}
if(_2=="change"&&MVC.Browser.WebKit){
return this.change_for_webkit();
}
this.add_to_delegator();
};
MVC.Object.extend(MVC.Delegator,{jmvc:function(_5){
var _6=MVC.Dom.data(_5);
if(!_6.delegation_events){
_6.delegation_events={};
}
if(_6.responding==null){
_6.responding=true;
}
return _6;
},add_kill_event:function(_7){
if(!_7.kill){
if(!_7){
_7=window.event;
}
var _8=false;
_7.kill=function(){
_8=true;
try{
if(_7.stopPropagation){
_7.stopPropagation();
}
if(_7.preventDefault){
_7.preventDefault();
}
}
catch(e){
}
};
_7.is_killed=function(){
return _8;
};
_7.stop_propagation=function(){
_8=true;
try{
if(_7.stopPropagation){
_7.stopPropagation();
}
}
catch(e){
}
};
_7.prevent_default=function(){
try{
if(_7.preventDefault){
_7.preventDefault();
}
}
catch(e){
}
};
}
},sort_by_order:function(a,b){
if(a.order<b.order){
return 1;
}
if(b.order<a.order){
return -1;
}
var ae=a._event,be=b._event;
if(ae=="click"&&be=="change"){
return 1;
}
if(be=="click"&&ae=="change"){
return -1;
}
return 0;
},events:{},onload_called:false});
MVC.Event.observe(window,"load",function(){
MVC.Delegator.onload_called=true;
});
MVC.Delegator.prototype={event:function(){
if(MVC.Browser.IE){
if(this._event=="focus"){
return "activate";
}else{
if(this._event=="blur"){
return "deactivate";
}
}
}
return this._event;
},capture:function(){
return MVC.Array.include(["focus","blur"],this._event);
},add_to_delegator:function(_d,_e,_f){
var s=_d||this._selector;
var e=_e||this.event();
var f=_f||this._func;
var _13=MVC.Dom.data(this.element,"delegation_events");
if(!_13[e]||_13[e].length==0){
var _14=MVC.Function.bind(this.dispatch_event,this);
MVC.Event.observe(this.element,e,_14,this.capture());
_13[e]=[];
_13[e]._bind_function=_14;
}
_13[e].push(this);
},_remove_from_delegator:function(_15){
var _16=_15||this.event();
var _17=MVC.Dom.data(this.element,"delegation_events")[_16];
for(var i=0;i<_17.length;i++){
if(_17[i]==this){
_17.splice(i,1);
break;
}
}
if(_17.length==0){
MVC.Dom.data(this.element,"delegation_events")[_16]=null;
MVC.Event.stop_observing(this.element,_16,_17._bind_function,this.capture());
}
},submit_for_ie:function(){
this.add_to_delegator(null,"click");
this.add_to_delegator(null,"keypress");
this.filters={click:function(el,_1a,_1b){
if(el.nodeName.toUpperCase()=="INPUT"&&el.type.toLowerCase()=="submit"){
for(var e=0;e<_1b.length;e++){
if(_1b[e].tag=="FORM"){
return true;
}
}
}
return false;
},keypress:function(el,_1e,_1f){
if(el.nodeName.toUpperCase()!="INPUT"){
return false;
}
var res=typeof Prototype!="undefined"?(_1e.keyCode==13):(_1e.charCode==13);
if(res){
for(var e=0;e<_1f.length;e++){
if(_1f[e].tag=="FORM"){
return true;
}
}
}
return false;
}};
},change_for_ie:function(){
this.add_to_delegator(null,"click");
this.add_to_delegator(null,"keyup");
this.add_to_delegator(null,"beforeactivate");
this.end_filters={click:function(el,_23){
switch(el.nodeName.toLowerCase()){
case "select":
if(typeof el.selectedIndex=="undefined"){
return false;
}
var _24=MVC.Dom.data(el);
if(_24._change_old_value==null){
_24._change_old_value=el.selectedIndex.toString();
return false;
}else{
if(_24._change_old_value==el.selectedIndex.toString()){
return false;
}
_24._change_old_value=el.selectedIndex.toString();
return true;
}
break;
case "input":
if(el.type.toLowerCase()=="checkbox"){
return true;
}
return false;
}
return false;
},keyup:function(el,_26){
if(el.nodeName.toLowerCase()!="select"){
return false;
}
if(typeof el.selectedIndex=="undefined"){
return false;
}
var _27=MVC.Dom.data(el);
if(_27._change_old_value==null){
_27._change_old_value=el.selectedIndex.toString();
return false;
}else{
if(_27._change_old_value==el.selectedIndex.toString()){
return false;
}
_27._change_old_value=el.selectedIndex.toString();
return true;
}
},beforeactivate:function(el,_29){
return el.nodeName.toLowerCase()=="input"&&el.type.toLowerCase()=="radio"&&!el.checked&&MVC.Delegator.onload_called;
}};
},change_for_webkit:function(){
this.add_to_delegator(null,"change");
this.end_filters={change:function(el,_2b){
if(el.nodeName.toLowerCase()=="input"){
return true;
}
if(typeof el.value=="undefined"){
return false;
}
var old=el.getAttribute("_old_value");
el.setAttribute("_old_value",el.value);
return el.value!=old;
}};
},context_for_opera:function(){
this.add_to_delegator(null,"click");
this.end_filters={click:function(el,_2e){
return _2e.shiftKey;
}};
},regexp_patterns:{tag:/^\s*(\*|[\w\-]+)(\b|$)?/,id:/^#([\w\-\*]+)(\b|$)/,className:/^\.([\w\-\*]+)(\b|$)/},selector_order:function(){
if(this.order){
return this.order;
}
var _2f=this._selector.split(/\s+/);
var _30=this.regexp_patterns;
var _31=[];
if(this._selector){
for(var i=0;i<_2f.length;i++){
var v={},r,p=_2f[i];
for(var _36 in _30){
if(_30.hasOwnProperty(_36)){
if((r=p.match(_30[_36]))){
if(_36=="tag"){
v[_36]=r[1].toUpperCase();
}else{
v[_36]=r[1];
}
p=p.replace(r[0],"");
}
}
}
_31.push(v);
}
}
this.order=_31;
return this.order;
},match:function(el,_38,_39){
if(this.filters&&!this.filters[_38.type](el,_38,_39)){
return null;
}
var _3a=0;
var _3b=this.selector_order();
if(_3b.length==0){
return {node:_39[0].element,order:0,delegation_event:this};
}
for(var n=0;n<_39.length;n++){
var _3d=_39[n],_3e=_3b[_3a],_3f=true;
for(var _40 in _3e){
if(!_3e.hasOwnProperty(_40)||_40=="element"){
continue;
}
if(_3e[_40]&&_40=="className"){
if(!MVC.Array.include(_3d.className.split(" "),_3e[_40])){
_3f=false;
}
}else{
if(_3e[_40]&&_3d[_40]!=_3e[_40]){
_3f=false;
}
}
}
if(_3f){
_3a++;
if(_3a>=_3b.length){
if(this.end_filters&&!this.end_filters[_38.type](el,_38)){
return null;
}
return {node:_3d.element,order:n,delegation_event:this};
}
}
}
return null;
},dispatch_event:function(_41){
var _42=_41.target,_43=false,_44=true,_45=[];
var _46=MVC.Dom.data(this.element,"delegation_events")[_41.type];
var _47=this.node_path(_42);
for(var i=0;i<_46.length;i++){
var _49=_46[i];
var _4a=_49.match(_42,_41,_47);
if(_4a){
_45.push(_4a);
}
}
if(_45.length==0){
return true;
}
MVC.Delegator.add_kill_event(_41);
_45.sort(MVC.Delegator.sort_by_order);
var _4b;
for(var m=0;m<_45.length;m++){
_4b=_45[m];
_44=_4b.delegation_event._func({event:_41,element:MVC.$E(_4b.node),delegate:this.element})&&_44;
if(_41.is_killed()){
return false;
}
}
},node_path:function(el){
var _4e=this.element,_4f=[],_50=el;
if(_50==_4e){
return [{tag:_50.nodeName,className:_50.className,id:_50.id,element:_50}];
}
do{
_4f.unshift({tag:_50.nodeName,className:_50.className,id:_50.id,element:_50});
}while(((_50=_50.parentNode)!=_4e)&&_50);
if(_50){
_4f.unshift({tag:_50.nodeName,className:_50.className,id:_50.id,element:_50});
}
return _4f;
},destroy:function(){
if(this._event=="contextmenu"&&MVC.Browser.Opera){
return this._remove_from_delegator("click");
}
if(this._event=="submit"&&MVC.Browser.IE){
this._remove_from_delegator("keypress");
return this._remove_from_delegator("click");
}
if(this._event=="change"&&MVC.Browser.IE){
this._remove_from_delegator("keyup");
this._remove_from_delegator("beforeactivate");
return this._remove_from_delegator("click");
}
this._remove_from_delegator();
}};
;
include.set_path('jmvc/plugins/controller');
MVC.Object.is_number=function(o){
return o&&(typeof o=="number"||(typeof o=="string"&&!isNaN(o)));
};
MVC.Controller=MVC.Class.extend({init:function(){
if(!this.className){
return;
}
this.singularName=MVC.String.singularize(this.className);
if(!MVC.Controller.controllers[this.className]){
MVC.Controller.controllers[this.className]=[];
}
MVC.Controller.controllers[this.className].unshift(this);
var _2,_3;
if(!this.modelName){
this.modelName=MVC.String.is_singular(this.className)?this.className:MVC.String.singularize(this.className);
}
if(this._should_attach_actions){
this._create_actions();
}
if(include.get_env()=="test"){
var _4=MVC.root.join("test/functional/"+this.className+"_controller_test.js");
var _5=include.check_exists(_4);
if(_5){
MVC.Console.log("Loading: \"test/functional/"+this.className+"_controller_test.js\"");
include("../test/functional/"+this.className+"_controller_test.js");
}else{
MVC.Console.log("Test Controller not found at \"test/functional/"+this.className+"_controller_test.js\"");
}
}
this._path=include.get_path().match(/(.*?)controllers/)[1]+"controllers";
},_should_attach_actions:true,_create_actions:function(){
this.actions={};
for(var _6 in this.prototype){
var _7=this.prototype[_6];
if(typeof _7=="function"&&_6!="Class"){
for(var a=0;a<MVC.Controller.actions.length;a++){
var _9=MVC.Controller.actions[a];
if(_9.matches(_6)){
var _a=this.dispatch_closure(_6);
this.actions[_6]=new _9(_6,_a,this.className,this._element,this._events);
}
}
}
}
},dispatch_closure:function(_b){
return MVC.Function.bind(function(_c){
_c=_c||{};
_c.action=_b;
_c.controller=this;
_c=_c.constructor==MVC.Controller.Params?_c:new MVC.Controller.Params(_c);
return this.dispatch(_b,_c);
},this);
},dispatch:function(_d,_e){
if(!_d){
_d="index";
}
if(typeof _d=="string"){
if(!(_d in this.prototype)){
throw "No action named "+_d+" was found for "+this.Class.className+" controller.";
}
}else{
_d=_d.name;
}
var _f=this._get_instance(_d,_e);
return this._dispatch_action(_f,_d,_e);
},_get_instance:function(_10,_11){
return new this(_10,_11);
},_dispatch_action:function(_12,_13,_14){
if(!this._listening){
return;
}
_12.params=_14;
_12.action_name=_13;
return _12[_13](_14);
},controllers:{},actions:[],publish:function(_15,_16){
OpenAjax.hub.publish(_15,_16);
},get_controller_with_name_and_action:function(_17,_18){
if(!_17||!_18){
return null;
}
var _19=MVC.Controller.controllers[_17];
if(!_19){
return null;
}
for(var i=0;i<_19.length;i++){
var _1b=_19[i];
if(_1b.prototype[_18]){
return _1b;
}
}
return null;
},modelName:null,_listening:true,_events:MVC.Delegator.events,_element:document.documentElement},{continue_to:function(_1c){
var _1d=MVC.Array.from(arguments);
var _1c=_1d.shift();
if(typeof this[_1c]!="function"){
throw "There is no action named "+_1c+". ";
}
return MVC.Function.bind(function(){
this.action_name=_1c;
this[_1c].apply(this,_1d.concat(MVC.Array.from(arguments)));
},this);
},delay:function(_1e,_1f,_20){
if(typeof this[_1f]!="function"){
throw "There is no action named "+_1f+". ";
}
return setTimeout(MVC.Function.bind(function(){
this.Class._dispatch_action(this,_1f,_20);
},this),_1e);
},publish:function(_21,_22){
this.Class.publish(_21,_22);
}});
MVC.Controller.Action=MVC.Class.extend({init:function(){
if(this.matches){
MVC.Controller.actions.push(this);
}
}},{init:function(_23,_24,_25,_26){
this.action=_23;
this.callback=_24;
this.className=_25;
this.element=_26;
},destroy:function(){
}});
MVC.Controller.Action.Subscribe=MVC.Controller.Action.extend({match:new RegExp("(.*?)\\s?(subscribe)$"),matches:function(_27){
return this.match.exec(_27);
}},{init:function(_28,_29,_2a,_2b){
this._super(_28,_29,_2a,_2b);
this.message();
this.subscription=OpenAjax.hub.subscribe(this.message_name,MVC.Function.bind(this.subscribe,this));
},message:function(){
this.parts=this.action.match(this.Class.match);
this.message_name=this.parts[1];
},subscribe:function(_2c,_2d){
var _2e=_2d||{};
_2e.event_name=_2c;
this.callback(_2e);
},destroy:function(){
OpenAjax.hub.unsubscribe(this.subscription);
this._super();
}});
MVC.Controller.Action.Event=MVC.Controller.Action.extend({match:new RegExp("^(?:(.*?)\\s)?(change|click|contextmenu|dblclick|keydown|keyup|keypress|mousedown|mousemove|mouseout|mouseover|mouseup|reset|resize|scroll|select|submit|dblclick|focus|blur|load|unload)$"),matches:function(_2f){
return this.match.exec(_2f);
}},{init:function(_30,_31,_32,_33){
this._super(_30,_31,_32,_33);
this.css_and_event();
var _34=this.selector();
if(_34!=null){
this.delegator=new MVC.Delegator(_34,this.event_type,_31,_33);
}
},css_and_event:function(){
this.parts=this.action.match(this.Class.match);
this.css=this.parts[1]||"";
this.event_type=this.parts[2];
},main_controller:function(){
if(!this.css&&MVC.Array.include(["blur","focus"],this.event_type)){
this.bound_event=MVC.Function.bind(function(_35){
this.callback({event:_35,element:window});
},this);
var _36=this.event_type;
if(MVC.Browser.IE){
if(this.event_type=="focus"){
_36="focusin";
}
if(this.event_type=="blur"){
_36="focusout";
}
MVC.Event.observe(document.documentElement,_36,MVC.Function.bind(this.bound_event));
}else{
MVC.Event.observe(window,_36,MVC.Function.bind(this.bound_event));
}
this.css_selector="";
return;
}
return this.css;
},plural_selector:function(){
if(this.css=="#"||this.css.substring(0,2)=="# "){
var _37=this.css.substring(2,this.css.length);
if(this.element==document.documentElement){
return "#"+this.className+(_37?" "+_37:"");
}else{
return (_37?" "+_37:"");
}
}else{
return "."+MVC.String.singularize(this.className)+(this.css?" "+this.css:"");
}
},singular_selector:function(){
if(this.element==document.documentElement){
return "#"+this.className+(this.css?" "+this.css:"");
}else{
return this.css;
}
},selector:function(){
if(MVC.Array.include(["load","unload","resize","scroll"],this.event_type)){
this.bound_event=MVC.Function.bind(function(_38){
this.callback({event:_38,element:window});
},this);
MVC.Event.observe(window,this.event_type,this.bound_event);
this.css_selector="";
return;
}
if(this.className=="main"){
this.css_selector=this.main_controller();
}else{
this.css_selector=MVC.String.is_singular(this.className)?this.singular_selector():this.plural_selector();
}
return this.css_selector;
},destroy:function(){
if(this.delegator){
this.delegator.destroy();
}
if(this.bound_event){
MVC.Event.stop_observing(window,this.event_type,this.bound_event);
}
this._super();
}});
MVC.Controller.Params=function(_39){
var _39=_39||{};
var _3a=false;
this.kill=function(){
_3a=true;
if(_39.event&&_39.event.kill){
_39.event.kill();
}
};
this.is_killed=function(){
return _39.event.is_killed?_39.event.is_killed():_3a;
};
for(var _3b in _39){
if(_39.hasOwnProperty(_3b)){
this[_3b]=_39[_3b];
}
}
this.constructor=MVC.Controller.Params;
};
MVC.Controller.Params.prototype={form_params:function(){
var _3c={};
if(this.element.nodeName.toLowerCase()!="form"){
return _3c;
}
var els=this.element.elements,_3e=[];
for(var i=0;i<els.length;i++){
var el=els[i];
if(el.type.toLowerCase()=="submit"){
continue;
}
var key=el.name||el.id,_42=key.match(/(\w+)/g),_43;
if(!key){
continue;
}
switch(el.type.toLowerCase()){
case "checkbox":
case "radio":
_43=!!el.checked;
break;
default:
_43=el.value;
break;
}
if(_42.length>1){
var _44=_42.length-1;
var _45=_42[0].toString();
if(!_3c[_45]){
_3c[_45]={};
}
var _46=_3c[_45];
for(var k=1;k<_44;k++){
_45=_42[k];
if(!_46[_45]){
_46[_45]={};
}
_46=_46[_45];
}
_46[_42[_44]]=_43;
}else{
if(key in _3c){
if(typeof _3c[key]=="string"){
_3c[key]=[_3c[key]];
}
_3c[key].push(_43);
}else{
_3c[key]=_43;
}
}
}
return _3c;
},class_element:function(){
var _48=this.element;
var _49=this._className();
var _4a=function(el){
var _4c=el.className.split(" ");
for(var i=0;i<_4c.length;i++){
if(_4c[i]==_49){
return true;
}
}
return false;
};
while(_48&&!_4a(_48)){
_48=_48.parentNode;
if(_48==document){
return null;
}
}
return MVC.$E(_48);
},is_event_on_element:function(){
return this.event.target==this.element;
},_className:function(){
return this.controller.singularName;
},element_instance:function(){
var ce,_4f,_50,_51=this.controller.modelName,id,_53=new RegExp("^"+_51+"_(.*)$");
if(!(_50=MVC.Model.models[_51])){
throw "No model for the "+this.controller.className+" controller!";
}
ce=this.class_element();
return Model._find_by_element(ce,_51,_50);
}};
if(!MVC._no_conflict&&typeof Controller=="undefined"){
Controller=MVC.Controller;
}
;
include.set_path('jmvc/plugins/controller/hover');
include.plugins("controller","lang/vector","dom/element");
include("hover");
;
include.set_path('jmvc/plugins/lang/vector');
include.plugins("lang","dom/event");
include("vector");
;
include.set_path('jmvc/plugins/lang/vector');
MVC.Vector=function(){
this.update(MVC.Array.from(arguments));
};
MVC.Vector.prototype={app:function(f){
var _2=[];
for(var i=0;i<this.array.length;i++){
_2.push(f(this.array[i]));
}
var _4=new MVC.Vector();
return _4.update(_2);
},plus:function(){
var _5=arguments[0] instanceof MVC.Vector?arguments[0].array:MVC.Array.from(arguments),_6=this.array.slice(0),_7=new MVC.Vector();
for(var i=0;i<_5.length;i++){
_6[i]=(_6[i]?_6[i]:0)+_5[i];
}
return _7.update(_6);
},minus:function(){
var _9=arguments[0] instanceof MVC.Vector?arguments[0].array:MVC.Array.from(arguments),_a=this.array.slice(0),_b=new MVC.Vector();
for(var i=0;i<_9.length;i++){
_a[i]=(_a[i]?_a[i]:0)-_9[i];
}
return _b.update(_a);
},equals:function(){
var _d=arguments[0] instanceof MVC.Vector?arguments[0].array:MVC.Array.from(arguments),_e=this.array.slice(0),_f=new MVC.Vector();
for(var i=0;i<_d.length;i++){
if(_e[i]!=_d[i]){
return null;
}
}
return _f.update(_e);
},x:function(){
return this.array[0];
},width:function(){
return this.array[0];
},y:function(){
return this.array[1];
},height:function(){
return this.array[1];
},top:function(){
return this.array[1];
},left:function(){
return this.array[0];
},toString:function(){
return "("+this.array[0]+","+this.array[1]+")";
},update:function(_11){
if(this.array){
for(var i=0;i<this.array.length;i++){
delete this.array[i];
}
}
this.array=_11;
for(var i=0;i<_11.length;i++){
this[i]=this.array[i];
}
return this;
}};
MVC.Event.pointer=function(_13){
return new MVC.Vector((_13.clientX+(document.documentElement.scrollLeft||document.body.scrollLeft)),(_13.clientY+(document.documentElement.scrollTop||document.body.scrollTop)));
};
;
include.set_path('jmvc/plugins/dom/element');
include.plugins("lang/vector");
include("element");
;
include.set_path('jmvc/plugins/dom/element');
MVC.Element=function(_1){
if(typeof _1=="string"){
_1=document.getElementById(_1);
}
if(!_1){
return _1;
}
return _1._mvcextend?_1:MVC.Element.extend(_1);
};
MVC.Object.extend(MVC.Element,{insert:function(_2,_3){
if(typeof _2=="string"){
_2=document.getElementById(_2);
}
if(typeof _3=="string"){
_3={bottom:_3};
}
var _4,_5,_6,_7;
for(position in _3){
if(!_3.hasOwnProperty(position)){
continue;
}
_4=_3[position];
position=position.toLowerCase();
_5=MVC.$E._insertionTranslations[position];
if(_4&&_4.nodeType==1){
_5(_2,_4);
continue;
}
_6=((position=="before"||position=="after")?_2.parentNode:_2).tagName.toUpperCase();
_7=MVC.$E._getContentFromAnonymousElement(_6,_4);
if(position=="top"||position=="after"){
_7.reverse();
}
for(var c=0;c<_7.length;c++){
_5(_2,_7[c]);
}
}
return _2;
},_insertionTranslations:{before:function(_9,_a){
_9.parentNode.insertBefore(_a,_9);
},top:function(_b,_c){
_b.insertBefore(_c,_b.firstChild);
},bottom:function(_d,_e){
_d.appendChild(_e);
},after:function(_f,_10){
_f.parentNode.insertBefore(_10,_f.nextSibling);
},tags:{TABLE:["<table>","</table>",1],TBODY:["<table><tbody>","</tbody></table>",2],TR:["<table><tbody><tr>","</tr></tbody></table>",3],TD:["<table><tbody><tr><td>","</td></tr></tbody></table>",4],SELECT:["<select>","</select>",1]}},replace:function(_11,_12){
if(typeof _11=="string"){
_11=document.getElementById(_11);
}
if(_12.nodeType==1){
_11.parentNode.replaceChild(_12,_11);
return _11;
}
if(_11.outerHTML){
var _13=_11.parentNode,_14=_13.tagName.toUpperCase();
if(MVC.Element._insertionTranslations.tags[_14]){
var _15=_11.next();
var _16=MVC.Element._getContentFromAnonymousElement(_14,_12);
_13.removeChild(_11);
if(_15){
for(var i=0;i<_16.length;i++){
_13.insertBefore(_16[i],_15);
}
}else{
for(var i=0;i<_16.length;i++){
_13.appendChild(_16[i]);
}
}
}else{
_11.outerHTML=_12;
}
return _11;
}else{
if(_12.nodeType!=1){
var _18=_11.ownerDocument.createRange();
_18.selectNode(_11);
_12=_18.createContextualFragment(_12);
}
_11.parentNode.replaceChild(_12,_11);
return _11;
}
},_getContentFromAnonymousElement:function(_19,_1a){
var div=document.createElement("div"),t=MVC.$E._insertionTranslations.tags[_19];
if(t){
div.innerHTML=t[0]+_1a+t[1];
for(var i=0;i<t[2];i++){
div=div.firstChild;
}
}else{
div.innerHTML=_1a;
}
return MVC.Array.from(div.childNodes);
},get_children:function(_1e){
var els=[];
var el=_1e.first();
while(el){
els.push(el);
el=el.next();
}
return els;
},first:function(_21,_22){
_22=_22||function(){
return true;
};
var _23=_21.firstChild;
while(_23&&_23.nodeType!=1||(_23&&!_22(_23))){
_23=_23.nextSibling;
}
return MVC.$E(_23);
},last:function(_24,_25){
_25=_25||function(){
return true;
};
var _26=_24.lastChild;
while(_26&&_26.nodeType!=1||(_26&&!_25(_26))){
_26=_26.previousSibling;
}
return MVC.$E(_26);
},next:function(_27,_28,_29){
_29=_29||function(){
return true;
};
var _2a=_27.nextSibling;
while(_2a&&_2a.nodeType!=1||(_2a&&!_29(_2a))){
_2a=_2a.nextSibling;
}
if(!_2a&&_28){
return MVC.$E(_27.parentNode).first(_29);
}
return MVC.$E(_2a);
},previous:function(_2b,_2c,_2d){
_2d=_2d||function(){
return true;
};
var _2e=_2b.previousSibling;
while(_2e&&_2e.nodeType!=1||(_2e&&!_2d(_2e))){
_2e=_2e.previousSibling;
}
if(!_2e&&_2c){
return MVC.$E(_2b.parentNode).last(_2d);
}
return MVC.$E(_2e);
},toggle:function(_2f){
return _2f.style.display=="none"?_2f.style.display="":_2f.style.display="none";
},make_positioned:function(_30){
if(typeof _30=="string"){
_30=document.getElementById(_30);
}
var pos=MVC.Element.get_style(_30,"position");
if(pos=="static"||!pos){
_30._madePositioned=true;
_30.style.position="relative";
if(window.opera){
_30.style.top=0;
_30.style.left=0;
}
}
return _30;
},get_style:function(_32,_33){
_32=MVC.$E(_32);
_33=_33=="float"?"cssFloat":MVC.String.camelize(_33);
var _34;
if(_32.currentStyle){
var _34=_32.currentStyle[_33];
}else{
var css=document.defaultView.getComputedStyle(_32,null);
_34=css?css[_33]:null;
}
if(_33=="opacity"){
return _34?parseFloat(_34):1;
}
return _34=="auto"?null:_34;
},has:function(_36,b){
if(!b){
return false;
}
if(typeof b=="string"){
b=MVC.$E(b);
}
return _36.contains?_36!=b&&_36.contains(b):!!(_36.compareDocumentPosition(b)&16);
},update:function(_38,_39){
if(typeof _38=="string"){
_38=document.getElementById(_38);
}
var _3a=_38.tagName.toUpperCase();
if((!MVC.Browser.IE&&!MVC.Browser.Opera)||!(_3a in MVC.$E._insertionTranslations.tags)){
_38.innerHTML=_39;
}else{
var _3b;
while((_3b=_38.childNodes[0])){
_38.removeChild(_3b);
}
var _3c=MVC.$E._getContentFromAnonymousElement(_3a,_39);
for(var c=0;c<_3c.length;c++){
_38.appendChild(_3c[c]);
}
}
return _38;
},remove:function(_3e){
return _3e.parentNode.removeChild(_3e);
},dimensions:function(_3f){
if(_3f===window){
return new MVC.Vector(window.innerWidth?window.innerWidth:document.documentElement.clientWidth,window.innerHeight?window.innerHeight:document.documentElement.clientHeight);
}
if(!MVC.Element.has(document.body,_3f)){
return new MVC.Vector(parseInt(_3f.get_style("width")),parseInt(_3f.get_style("height")));
}
var _40=_3f.style.display;
if(_40!="none"&&_40!=null){
return new MVC.Vector(_3f.offsetWidth,_3f.offsetHeight);
}
var els=_3f.style;
var _42=els.visibility;
var _43=els.position;
var _44=els.display;
els.visibility="hidden";
els.position="absolute";
els.display="block";
var _45=_3f.clientWidth;
var _46=_3f.clientHeight;
els.display=_44;
els.position=_43;
els.visibility=_42;
return new MVC.Vector(_45,_46);
},add_class:function(_47,_48){
var cns=this.class_names(_47);
if(MVC.Array.include(cns,_48)){
return;
}
cns.push(_48);
_47.className=cns.join(" ");
return _47;
},remove_class:function(_4a,_4b){
var cns=this.class_names(_4a);
var _4d=[];
for(var i=0;i<cns.length;i++){
if(cns[i]!=_4b){
_4d.push(cns[i]);
}
}
_4a.className=_4d.join(" ");
return _4a;
},class_names:function(_4f){
return _4f.className.split(MVC.Element._class_name_split);
},_class_name_split:/\s+/,has_class:function(_50,_51){
var cns=this.class_names(_50);
var _53;
for(var i=0;i<cns.length;i++){
if((_53=cns[i].match(_51))){
return _53;
}
}
}});
MVC.Element.extend=function(el){
for(var f in MVC.Element){
if(!MVC.Element.hasOwnProperty(f)){
continue;
}
var _57=MVC.Element[f];
if(typeof _57=="function"){
if(f[0]!="_"){
MVC.Element._extend(_57,f,el);
}
}
}
el._mvcextend=true;
return el;
};
MVC.Element._extend=function(f,_59,el){
el[_59]=function(){
var arg=MVC.Array.from(arguments);
arg.unshift(el);
return f.apply(el,arg);
};
};
MVC.$E=MVC.Element;
if(!MVC._no_conflict){
$E=MVC.$E;
}
;
include.set_path('jmvc/plugins/controller/hover');
MVC.Controller.Action.EnterLeave=MVC.Controller.Action.Event.extend({match:new RegExp("(.*?)\\s?(mouseenter|mouseleave)$")},{init:function(_1,_2,_3,_4){
this.action=_1;
this.callback=_2;
this.className=_3;
this.element=_4;
this.css_and_event();
var _5=this.selector();
this[this.event_type]();
},mouseenter:function(){
this.delegator=new MVC.Delegator(this.selector(),"mouseover",MVC.Function.bind(function(_6){
var _7=_6.event.relatedTarget;
if(_6.element==_7||MVC.$E(_6.element).has(_7)){
return true;
}
this.callback(_6);
},this));
},mouseleave:function(){
this.delegator=new MVC.Delegator(this.selector(),"mouseout",MVC.Function.bind(function(_8){
var _9=_8.event.relatedTarget;
if(_8.element==_9||MVC.$E(_8.element).has(_9)){
return true;
}
this.callback(_8);
},this));
}});
MVC.Controller.Action.Hover=MVC.Controller.Action.Event.extend({match:new RegExp("(.*?)\\s?(hoverenter|hoverleave|hovermove)$"),sensitivity:4,interval:110,hovers:{}},{init:function(_a,_b,_c,_d){
this.action=_a;
this.callback=_b;
this.className=_c;
this.element=_d;
this.css_and_event();
this._selector=this.selector();
var _e=MVC.Dom.get_or_set_data(_d,"hover_callbacks:"+this._selector,{});
_e[this.event_type]=_b;
if(!_e.delegated){
this.mouseover_delegator=new MVC.Delegator(this._selector,"mouseover",MVC.Function.bind(this.mouseover,this),_d);
this.mouseout_delegator=new MVC.Delegator(this._selector,"mouseout",MVC.Function.bind(this.mouseout,this),_d);
_e.delegated=true;
}
},destroy:function(){
var _f=MVC.Dom.remove_data(this.element,"hover_callbacks:"+this._selector);
if(this.mouseover_delegator){
this.mouseover_delegator.destroy();
this.mouseout_delegator.destroy();
delete this.mouseover_delegator;
delete this.mouseout_delegator;
}
this._super();
},hoverenter:function(_10){
var _11=MVC.Dom.data(_10.delegate,"hover_callbacks:"+this._selector)["hoverenter"];
if(_11){
_11(_10);
}
},hoverleave:function(_12){
var _13=MVC.Dom.data(_12.delegate,"hover_callbacks:"+this._selector)["hoverleave"];
if(_13){
_13(_12);
}
},hovermove:function(_14){
var _15=MVC.Dom.data(_14.delegate,"hover_callbacks:"+this._selector)["hovermove"];
if(_15){
_15(_14);
}
},check:function(){
if(!MVC.Element.has(document.documentElement,this.save_element)){
return;
}
this.called=true;
this.hoverenter({element:this.save_element,event:this.mousemove_event,delegate:this.delegate});
MVC.Event.stop_observing(this.save_element,"mousemove",this.mousemove);
},mouseover:function(_16){
var _17=_16.event.relatedTarget;
if(_16.element==_17||MVC.$E(_16.element).has(_17)){
return true;
}
this.called=false;
this.starting_position=MVC.Event.pointer(_16.event);
this.save_element=_16.element;
this.delegate=_16.delegate;
this.mousemove_event=_16.event;
this.mousemove_function=MVC.Function.bind(this.mousemove,this);
MVC.Event.observe(_16.element,"mousemove",this.mousemove_function);
this.timer=setTimeout(MVC.Function.bind(this.check,this),this.Class.interval);
},mousemove:function(_18){
if(this.called){
this.hovermove({element:this.save_element,event:_18,delegate:this.delegate});
}else{
clearTimeout(this.timer);
this.mousemove_event=_18;
this.current_position=MVC.Event.pointer(_18);
this.timer=setTimeout(MVC.Function.bind(this.check,this),this.Class.interval);
}
},mouseout:function(_19){
var _1a=_19.event.relatedTarget;
if(_19.element==_1a||MVC.$E(_19.element).has(_1a)){
return true;
}
clearTimeout(this.timer);
MVC.Event.stop_observing(_19.element,"mousemove",this.mousemove_function);
if(this.called){
this.hoverleave({element:this.save_element,event:_19.event,delegate:_19.delegate});
}
}});
;
include.set_path('jmvc/plugins/controller/view');
include.plugins("view","controller");
include("controller_view");
;
include.set_path('jmvc/plugins/view');
include.plugins("lang");
include("view");
if(include.get_env()=="development"){
include("fulljslint");
}
if(MVC.Controller){
include.plugins("controller/view");
}
;
include.set_path('jmvc/plugins/view');
MVC.View=function(_1){
this.set_options(_1);
if(_1.precompiled){
this.template={};
this.template.process=_1.precompiled;
MVC.View.update(this.name,this);
return;
}
if(_1.url||_1.absolute_url||_1.view_url){
_1.url=_1.url&&(_1.url+(_1.url.match(this.extMatch)?"":this.ext));
_1.view_url=_1.view_url&&(_1.view_url+(_1.view_url.match(this.extMatch)?"":this.ext));
this.name=this.name?this.name:_1.url||_1.absolute_url||"views/"+_1.view_url;
var _2=_1.absolute_url||(_1.url?MVC.root.join(_1.url):MVC.root.join("views/"+_1.view_url));
var _3=MVC.View.get(this.name,this.cache);
if(_3){
return _3;
}
if(_3==MVC.View.INVALID_PATH){
return null;
}
this.text=include.request(_2+(this.cache||window._rhino?"":"?"+Math.random()));
if(this.text==null){
if(window._rhino){
print("Exception: "+"There is no template at "+_2);
}
throw ({type:"JMVC",message:"There is no template at "+_2});
}
}else{
if(_1.hasOwnProperty("element")){
if(typeof _1.element=="string"){
var _4=_1.element;
_1.element=MVC.$E(_1.element);
if(_1.element==null){
throw _4+"does not exist!";
}
}
if(_1.element.value){
this.text=_1.element.value;
}else{
this.text=_1.element.innerHTML;
}
this.name=_1.element.id;
this.type="[";
}
}
var _3=new MVC.View.Compiler(this.text,this.type);
_3.compile(_1);
MVC.View.update(this.name,this);
this.template=_3;
};
MVC.View.prototype={render:function(_5,_6){
_5=_5||{};
var v=new MVC.View.Helpers(_5);
MVC.Object.extend(v,_6||{});
return this.template.process.call(_5,_5,v);
},out:function(){
return this.template.out;
},set_options:function(_8){
this.type=_8.type!=null?_8.type:MVC.View.type;
this.cache=_8.cache!=null?_8.cache:MVC.View.cache;
this.text=_8.text!=null?_8.text:null;
this.name=_8.name!=null?_8.name:null;
this.ext=_8.ext!=null?_8.ext:MVC.View.ext;
this.extMatch=new RegExp(this.ext.replace(/\./,"."));
},update:function(_9,_a){
if(typeof _9=="string"){
_9=MVC.$E(_9);
}
if(_a==null){
_template=this;
return function(_b){
MVC.View.prototype.update.call(_template,_9,_b);
};
}
if(typeof _a=="string"){
params={};
params.url=_a;
_template=this;
params.onComplete=function(_c){
var _d=eval("("+_c.responseText+")");
MVC.View.prototype.update.call(_template,_9,_d);
};
if(!MVC.Ajax){
alert("You must include the Ajax plugin to use this feature");
}
new MVC.Ajax(params.url,params);
}else{
_9.innerHTML=this.render(_a);
}
}};
MVC.View.Scanner=function(_e,_f,_10){
this.left_delimiter=_f+"%";
this.right_delimiter="%"+_10;
this.double_left=_f+"%%";
this.double_right="%%"+_10;
this.left_equal=_f+"%=";
this.left_comment=_f+"%#";
if(_f=="["){
this.SplitRegexp=/(\[%%)|(%%\])|(\[%=)|(\[%#)|(\[%)|(%\]\n)|(%\])|(\n)/;
}else{
this.SplitRegexp=new RegExp("("+this.double_left+")|(%%"+this.double_right+")|("+this.left_equal+")|("+this.left_comment+")|("+this.left_delimiter+")|("+this.right_delimiter+"\n)|("+this.right_delimiter+")|(\n)");
}
this.source=_e;
this.stag=null;
this.lines=0;
};
MVC.View.Scanner.to_text=function(_11){
if(_11==null||_11===undefined){
return "";
}
if(_11 instanceof Date){
return _11.toDateString();
}
if(_11.toString){
return _11.toString();
}
return "";
};
MVC.View.Scanner.prototype={scan:function(_12){
scanline=this.scanline;
regex=this.SplitRegexp;
if(!this.source==""){
var _13=MVC.String.rsplit(this.source,/\n/);
for(var i=0;i<_13.length;i++){
var _15=_13[i];
this.scanline(_15,regex,_12);
}
}
},scanline:function(_16,_17,_18){
this.lines++;
var _19=MVC.String.rsplit(_16,_17);
for(var i=0;i<_19.length;i++){
var _1b=_19[i];
if(_1b!=null){
try{
_18(_1b,this);
}
catch(e){
throw {type:"MVC.View.Scanner",line:this.lines};
}
}
}
}};
MVC.View.Buffer=function(_1c,_1d){
this.line=new Array();
this.script="";
this.pre_cmd=_1c;
this.post_cmd=_1d;
for(var i=0;i<this.pre_cmd.length;i++){
this.push(_1c[i]);
}
};
MVC.View.Buffer.prototype={push:function(cmd){
this.line.push(cmd);
},cr:function(){
this.script=this.script+this.line.join("; ");
this.line=new Array();
this.script=this.script+"\n";
},close:function(){
if(this.line.length>0){
for(var i=0;i<this.post_cmd.length;i++){
this.push(pre_cmd[i]);
}
this.script=this.script+this.line.join("; ");
line=null;
}
}};
MVC.View.Compiler=function(_21,_22){
this.pre_cmd=["var ___ViewO = [];"];
this.post_cmd=new Array();
this.source=" ";
if(_21!=null){
if(typeof _21=="string"){
_21=_21.replace(/\r\n/g,"\n");
_21=_21.replace(/\r/g,"\n");
this.source=_21;
}else{
if(_21.innerHTML){
this.source=_21.innerHTML;
}
}
if(typeof this.source!="string"){
this.source="";
}
}
_22=_22||"<";
var _23=">";
switch(_22){
case "[":
_23="]";
break;
case "<":
break;
default:
throw _22+" is not a supported deliminator";
break;
}
this.scanner=new MVC.View.Scanner(this.source,_22,_23);
this.out="";
};
MVC.View.Compiler.prototype={compile:function(_24){
_24=_24||{};
this.out="";
var _25="___ViewO.push(";
var _26=_25;
var _27=new MVC.View.Buffer(this.pre_cmd,this.post_cmd);
var _28="";
var _29=function(_2a){
_2a=_2a.replace(/\\/g,"\\\\");
_2a=_2a.replace(/\n/g,"\\n");
_2a=_2a.replace(/"/g,"\\\"");
return _2a;
};
this.scanner.scan(function(_2b,_2c){
if(_2c.stag==null){
switch(_2b){
case "\n":
_28=_28+"\n";
_27.push(_25+"\""+_29(_28)+"\");");
_27.cr();
_28="";
break;
case _2c.left_delimiter:
case _2c.left_equal:
case _2c.left_comment:
_2c.stag=_2b;
if(_28.length>0){
_27.push(_25+"\""+_29(_28)+"\")");
}
_28="";
break;
case _2c.double_left:
_28=_28+_2c.left_delimiter;
break;
default:
_28=_28+_2b;
break;
}
}else{
switch(_2b){
case _2c.right_delimiter:
switch(_2c.stag){
case _2c.left_delimiter:
if(_28[_28.length-1]=="\n"){
_28=MVC.String.chop(_28);
_27.push(_28);
_27.cr();
}else{
_27.push(_28);
}
break;
case _2c.left_equal:
_27.push(_26+"(MVC.View.Scanner.to_text("+_28+")))");
break;
}
_2c.stag=null;
_28="";
break;
case _2c.double_right:
_28=_28+_2c.right_delimiter;
break;
default:
_28=_28+_2b;
break;
}
}
});
if(_28.length>0){
_27.push(_25+"\""+_29(_28)+"\")");
}
_27.close();
this.out=_27.script+";";
var _2d="this.process = function(_CONTEXT,_VIEW) { try { with(_VIEW) { with (_CONTEXT) {"+this.out+" return ___ViewO.join('');}}}catch(e){e.lineNumber=null;throw e;}};";
try{
eval(_2d);
}
catch(e){
if(typeof JSLINT!="undefined"){
JSLINT(this.out);
for(var i=0;i<JSLINT.errors.length;i++){
var _30=JSLINT.errors[i];
if(_30.reason!="Unnecessary semicolon."){
_30.line++;
var e=new Error();
e.lineNumber=_30.line;
e.message=_30.reason;
if(_24.url){
e.fileName=_24.url;
}
throw e;
}
}
}else{
throw e;
}
}
}};
MVC.View.config=function(_31){
MVC.View.cache=_31.cache!=null?_31.cache:MVC.View.cache;
MVC.View.type=_31.type!=null?_31.type:MVC.View.type;
MVC.View.ext=_31.ext!=null?_31.ext:MVC.View.ext;
var _32={};
MVC.View.templates_directory=_32;
MVC.View.get=function(_33,_34){
if(_34==false){
return null;
}
if(_32[_33]){
return _32[_33];
}
return null;
};
MVC.View.update=function(_35,_36){
if(_35==null){
return;
}
_32[_35]=_36;
};
MVC.View.INVALID_PATH=-1;
};
MVC.View.config({cache:include.get_env()=="production",type:"<",ext:".ejs"});
MVC.View.PreCompiledFunction=function(_37,_38,f){
new MVC.View({name:_38,precompiled:f});
};
MVC.View.Helpers=function(_3a){
this.data=_3a;
};
MVC.View.Helpers.prototype={partial:function(_3b,_3c){
if(!_3c){
_3c=this.data;
}
return new MVC.View(_3b).render(_3c);
},to_text:function(_3d,_3e){
if(_3d==null||_3d===undefined){
return _3e||"";
}
if(_3d instanceof Date){
return _3d.toDateString();
}
if(_3d.toString){
return _3d.toString().replace(/\n/g,"<br />").replace(/''/g,"'");
}
return "";
}};
include.view=function(_3f){
if(include.get_env()=="development"){
new MVC.View({url:new MVC.File("../"+_3f).join_current()});
}else{
if(include.get_env()=="compress"){
include({path:"../"+_3f,process:MVC.View.process_include,ignore:true});
new MVC.View({url:new MVC.File("../"+_3f).join_current()});
}else{
}
}
};
include.views=function(){
for(var i=0;i<arguments.length;i++){
include.view(arguments[i]+MVC.View.ext);
}
};
MVC.View.process_include=function(_41){
var _42=new MVC.View({text:_41.text});
return "MVC.View.PreCompiledFunction(\""+_41.original_path+"\", \""+_41.path+"\",function(_CONTEXT,_VIEW) { try { with(_VIEW) { with (_CONTEXT) {"+_42.out()+" return ___ViewO.join('');}}}catch(e){e.lineNumber=null;throw e;}})";
};
if(!MVC._no_conflict){
View=MVC.View;
}
MVC.Native.extend("String",{rsplit:function(_43,_44){
var _45=_44.exec(_43);
var _46=new Array();
while(_45!=null){
var _47=_45.index;
var _48=_44.lastIndex;
if((_47)!=0){
var _49=_43.substring(0,_47);
_46.push(_43.substring(0,_47));
_43=_43.slice(_47);
}
_46.push(_45[0]);
_43=_43.slice(_45[0].length);
_45=_44.exec(_43);
}
if(!_43==""){
_46.push(_43);
}
return _46;
},chop:function(_4a){
return _4a.substr(0,_4a.length-1);
}});
;
include.set_path('jmvc/plugins/controller/view');
MVC.Controller.prototype.render=function(_1){
var _2,_3=MVC.RENDER_TO,_4;
var _5=this.Class.className;
var _6=this.action_name;
if(!_1){
_1={};
}
var _7={};
if(_1.helpers){
for(var h=0;h<_1.helpers.length;h++){
var n=MVC.String.classize(_1.helpers[h]);
MVC.Object.extend(_7,window[n]?window[n].View().helpers:{});
}
}
if(typeof _1=="string"){
_2=new MVC.View({url:_1}).render(this,_7);
}else{
if(_1.text){
_2=_1.text;
}else{
var _a=function(_b){
var _b=MVC.String.include(_b,"/")?_b.split("/").join("/_"):_5+"/"+_b;
var _b=_b+MVC.View.ext;
return _b;
};
if(_1.plugin){
_4="../jmvc/plugins/"+_1.plugin;
}
if(_1.action){
var _c="../views/"+_a(_1.action);
}else{
if(_1.partial){
var _c="../views/"+_a(_1.partial);
}else{
var _c="../views/"+_5+"/"+_6.replace(/\.|#/g,"").replace(/ /g,"_")+MVC.View.ext;
}
}
var _d=_1.using||this;
if(_1.locals){
for(var _e in _1.locals){
_d[_e]=_1.locals[_e];
}
}
var _f;
if(!_4){
_f=new MVC.View({url:new MVC.File(_c).join_from(this.Class._path)});
}else{
try{
var _f=new MVC.View({url:MVC.View.get(_4)?_4:_c});
}
catch(e){
if(e.type!="JMVC"){
throw e;
}
var _f=new MVC.View({url:_4});
}
}
_2=_f.render(_d,_7);
}
}
var _10=["to","before","after","top","bottom","replace"];
var _11=null;
for(var l=0;l<_10.length;l++){
if(typeof _1[_10[l]]=="string"){
var id=_1[_10[l]];
_1[_10[l]]=document.getElementById(id);
if(!_1[_10[l]]){
throw {message:"Can't find element with id: "+id,name:"ControllerView: Missing Element"};
}
}
if(_1[_10[l]]){
_11=_1[_10[l]];
if(_10[l]=="to"){
if(MVC.$E.update){
MVC.$E.update(_1.to,_2);
}else{
_1.to.innerHTML=_2;
}
}else{
if(_10[l]=="replace"){
MVC.$E.replace(_1.replace,_2);
}else{
if(!MVC.$E.insert){
throw {message:"Include can't insert "+_10[l]+" without the element plugin.",name:"ControllerView: Missing Plugin"};
}
var opt={};
opt[_10[l]]=_2;
MVC.$E.insert(_11,opt);
}
}
}
}
return _2;
};
;
include.set_path('jmvc/plugins/view/helpers');
include.plugins("view");
include("view_helpers");
;
include.set_path('jmvc/plugins/view/helpers');
MVC.Object.extend(MVC.View.Helpers.prototype,{check_box_tag:function(_1,_2,_3,_4){
_3=_3||{};
if(_4){
_3.checked="checked";
}
return this.input_field_tag(_1,_2,"checkbox",_3);
},date_tag:function(_5,_6,_7){
if(!(_6 instanceof Date)){
_6=new Date();
}
var _8=[],_9=[],_a=[];
var _b=_6.getFullYear(),_c=_6.getMonth(),_d=_6.getDate();
for(var y=_b-15;y<_b+15;y++){
_8.push({value:y,text:y});
}
for(var m=0;m<12;m++){
_9.push({value:(m),text:MVC.Date.month_names[m]});
}
for(var d=0;d<31;d++){
_a.push({value:(d+1),text:(d+1)});
}
var _11=this.select_tag(_5+"[year]",_b,_8,{id:_5+"[year]"});
var _12=this.select_tag(_5+"[month]",_c,_9,{id:_5+"[month]"});
var _13=this.select_tag(_5+"[day]",_d,_a,{id:_5+"[day]"});
return _11+_12+_13;
},time_tag:function(_14,_15,_16,_17){
var _18=[];
if(_17==null||_17==0){
_17=60;
}
for(var h=0;h<24;h++){
for(var m=0;m<60;m+=_17){
var _1b=(h<10?"0":"")+h+":"+(m<10?"0":"")+m;
_18.push({text:_1b,value:_1b});
}
}
return this.select_tag(_14,_15,_18,_16);
},file_tag:function(_1c,_1d,_1e){
return this.input_field_tag(_1c+"[file]",_1d,"file",_1e);
},form_tag:function(_1f,_20){
_20=_20||{};
if(_20.multipart==true){
_20.method="post";
_20.enctype="multipart/form-data";
}
_20.action=_1f;
return this.start_tag_for("form",_20);
},form_tag_end:function(){
return this.tag_end("form");
},hidden_field_tag:function(_21,_22,_23){
return this.input_field_tag(_21,_22,"hidden",_23);
},input_field_tag:function(_24,_25,_26,_27){
_27=_27||{};
_27.id=_27.id||_24;
_27.value=_25||"";
_27.type=_26||"text";
_27.name=_24;
return this.single_tag_for("input",_27);
},label_tag:function(_28,_29){
_29=_29||{};
return this.start_tag_for("label",_29)+_28+this.tag_end("label");
},link_to:function(_2a,url,_2c){
if(!_2a){
var _2a="null";
}
if(!_2c){
var _2c={};
}
this.set_confirm(_2c);
_2c.href=url;
return this.start_tag_for("a",_2c)+_2a+this.tag_end("a");
},link_to_if:function(_2d,_2e,url,_30){
return this.link_to_unless((!_2d),_2e,url,_30);
},link_to_unless:function(_31,_32,url,_34){
if(_31){
return _32;
}
return this.link_to(_32,url,_34);
},set_confirm:function(_35){
if(_35.confirm){
_35.onclick=_35.onclick||"";
_35.onclick=_35.onclick+"; var ret_confirm = confirm(\""+_35.confirm+"\"); if(!ret_confirm){ return false;} ";
_35.confirm=null;
}
},submit_link_to:function(_36,_37,_38,_39){
if(!_36){
var _36="null";
}
if(!_38){
_38={};
}
_38.type="submit";
_38.value=_36;
this.set_confirm(_38);
_38.onclick=_38.onclick+";window.location=\""+_37+"\"; return false;";
return this.single_tag_for("input",_38);
},password_field_tag:function(_3a,_3b,_3c){
return this.input_field_tag(_3a,_3b,"password",_3c);
},select_tag:function(_3d,_3e,_3f,_40){
_40=_40||{};
_40.id=_40.id||_3d;
_40.name=_3d;
var txt="";
txt+=this.start_tag_for("select",_40);
for(var i=0;i<_3f.length;i++){
var _43=_3f[i];
if(typeof _43=="string"){
_43={value:_43};
}
if(!_43.text){
_43.text=_43.value;
}
if(!_43.value){
_43.text=_43.text;
}
var _44={value:_43.value};
if(_43.value==_3e){
_44.selected="selected";
}
txt+=this.start_tag_for("option",_44)+_43.text+this.tag_end("option");
}
txt+=this.tag_end("select");
return txt;
},single_tag_for:function(tag,_46){
return this.tag(tag,_46,"/>");
},start_tag_for:function(tag,_48){
return this.tag(tag,_48);
},submit_tag:function(_49,_4a){
_4a=_4a||{};
_4a.type=_4a.type||"submit";
_4a.value=_49||"Submit";
return this.single_tag_for("input",_4a);
},tag:function(tag,_4c,end){
end=end||">";
var txt=" ";
for(var _4f in _4c){
if(_4c.hasOwnProperty(_4f)){
value=_4c[_4f]!=null?_4c[_4f].toString():"";
if(_4f=="Class"||_4f=="klass"){
_4f="class";
}
if(value.indexOf("'")!=-1){
txt+=_4f+"=\""+value+"\" ";
}else{
txt+=_4f+"='"+value+"' ";
}
}
}
return "<"+tag+txt+end;
},tag_end:function(tag){
return "</"+tag+">";
},text_area_tag:function(_51,_52,_53){
_53=_53||{};
_53.id=_53.id||_51;
_53.name=_53.name||_51;
_52=_52||"";
if(_53.size){
_53.cols=_53.size.split("x")[0];
_53.rows=_53.size.split("x")[1];
delete _53.size;
}
_53.cols=_53.cols||50;
_53.rows=_53.rows||4;
return this.start_tag_for("textarea",_53)+_52+this.tag_end("textarea");
},text_field_tag:function(_54,_55,_56){
return this.input_field_tag(_54,_55,"text",_56);
},img_tag:function(_57,_58){
_58=_58||{};
_58.src="resources/images/"+_57;
return this.single_tag_for("img",_58);
}});
MVC.View.Helpers.prototype.text_tag=MVC.View.Helpers.prototype.text_area_tag;
(function(){
var _59={};
var _5a=0;
MVC.View.Helpers.link_data=function(_5b){
var _5c=_5a++;
_59[_5c]=_5b;
return "_data='"+_5c+"'";
};
MVC.View.Helpers.get_data=function(el){
if(!el){
return null;
}
var _5e=el.getAttribute("_data");
if(!_5e){
return null;
}
return _59[parseInt(_5e)];
};
MVC.View.Helpers.prototype.link_data=function(_5f){
return MVC.View.Helpers.link_data(_5f);
};
MVC.View.Helpers.prototype.get_data=function(el){
return MVC.View.Helpers.get_data(el);
};
})();
;
include.set_path('jmvc/plugins/model');
include.plugins("lang/class","lang/openajax");
include("simple_store");
include("model");
;
include.set_path('jmvc/plugins/model');
MVC.Store=MVC.Class.extend({init:function(_1){
this._data={};
this.storing_class=_1;
},find_one:function(id){
return id?this._data[id]:null;
},create:function(_3){
var id=_3[_3.Class.id];
this._data[id]=_3;
},destroy:function(id){
delete this._data[id];
},find:function(f){
var _7=[];
for(var id in this._data){
var _9=this._data[id];
if(!f||f(_9)){
_7.push(_9);
}
}
return _7;
},clear:function(){
this._data={};
},is_empty:function(){
return !this.find().length;
}});
;
include.set_path('jmvc/plugins/model');
MVC.Model=MVC.Class.extend({store_type:MVC.Store,init:function(){
this.attributes={};
this.default_attributes={};
if(!this.className){
return;
}
MVC.Model.models[this.className]=this;
this.store=new this.store_type(this);
},find:function(id,_2,_3){
if(!_2){
_2={};
}
if(typeof _2=="function"){
_3=_2;
_2={};
}
if(id=="all"){
return this.create_many_as_existing(this.find_all(_2,_3));
}else{
if(!_2[this.id]&&id!="first"){
_2[this.id]=id;
}
return this.create_as_existing(this.find_one(id=="first"?null:_2,_3));
}
},asynchronous:true,create_as_existing:function(_4){
if(!_4){
return null;
}
if(_4.attributes){
_4=_4.attributes();
}
var _5=new this(_4);
_5.is_new_record=this.new_record_func;
this.publish("create.as_existing",{data:_5});
return _5;
},create_many_as_existing:function(_6){
if(!_6){
return null;
}
var _7=[];
for(var i=0;i<_6.length;i++){
_7.push(this.create_as_existing(_6[i]));
}
return _7;
},id:"id",new_record_func:function(){
return false;
},validations:[],has_many:function(){
for(var i=0;i<arguments.length;i++){
this._associations.push(arguments[i]);
}
},belong_to:function(){
for(var i=0;i<arguments.length;i++){
this._associations.push(arguments[i]);
}
},_associations:[],element_id_to_id:function(_b){
var re=new RegExp(this.className+"_","i");
return _b.replace(re,"");
},find_by_element:function(el){
return this._find_by_element(MVC.$E(el),this.className,this);
},_find_by_element:function(ce,_f,_10){
var _11,_12,id,_14=new RegExp("^"+_f+"_(.*)$");
if(ce&&ce.id&&(_11=ce.id.match(_14))&&_11.length>1){
id=_11[1];
}else{
_12=ce.has_class(_14);
id=(_12==undefined?_12:_12[1]);
}
return _10.store.find_one(id);
},add_attribute:function(_15,_16){
if(!this.attributes[_15]){
this.attributes[_15]=_16;
}
if(!this.default_attributes[_15]){
this.default_attributes[_15]=null;
}
},_clean_callbacks:function(_17){
if(!_17){
_17=function(){
};
}
if(typeof _17=="function"){
return {onSuccess:_17,onFailure:_17};
}
if(!_17.onSuccess&&!_17.onComplete){
throw "You must supply a positive callback!";
}
if(!_17.onSuccess){
_17.onSuccess=_17.onComplete;
}
if(!_17.onFailure&&_17.onComplete){
_17.onFailure=_17.onComplete;
}
return _17;
},models:{},callback:function(_18){
var f=typeof _18=="string"?this[_18]:_18;
var _1a=MVC.Array.from(arguments);
_1a.shift();
_1a.unshift(f,this);
return MVC.Function.bind.apply(null,_1a);
},publish:function(_1b,_1c){
OpenAjax.hub.publish(this.className+"."+_1b,_1c);
},namespace:null},{init:function(_1d){
this.errors=[];
this.set_attributes(this.Class.default_attributes||{});
this.set_attributes(_1d);
},set_attributes:function(_1e){
for(var key in _1e){
if(_1e.hasOwnProperty(key)){
this._setAttribute(key,_1e[key]);
}
}
return _1e;
},update_attributes:function(_20,_21){
this.set_attributes(_20);
return this.save(_21);
},valid:function(){
return this.errors.length==0;
},validate:function(){
},_setAttribute:function(_22,_23){
if(MVC.Array.include(this.Class._associations,_22)){
this._setAssociation(_22,_23);
}else{
this._setProperty(_22,_23);
}
},_setProperty:function(_24,_25){
if(this["set_"+_24]&&!this["set_"+_24](_25)){
return;
}
var old=this[_24];
this[_24]=MVC.Array.include(["created_at","updated_at"],_24)?MVC.Date.parse(_25):_25;
if(_24==this.Class.id&&this[_24]){
this.is_new_record=this.Class.new_record_func;
if(this.Class.store){
if(!old){
this.Class.store.create(this);
}else{
if(old!=this[_24]){
this.Class.store.destroy(old);
this.Class.store.create(this);
}
}
}
}
this.Class.add_attribute(_24,MVC.Object.guess_type(_25));
},_setAssociation:function(_27,_28){
this[_27]=function(){
if(!MVC.String.is_singular(_27)){
_27=MVC.String.singularize(_27);
}
var _29=window[MVC.String.classize(_27)];
if(!_29){
return _28;
}
return _29.create_many_as_existing(_28);
};
},attributes:function(){
var _2a={};
var cas=this.Class.attributes;
for(var _2c in cas){
if(cas.hasOwnProperty(_2c)){
_2a[_2c]=this[_2c];
}
}
return _2a;
},is_new_record:function(){
return true;
},save:function(_2d){
var _2e;
this.errors=[];
this.validate();
if(!this.valid()){
return false;
}
_2e=this.is_new_record()?this.Class.create(this.attributes(),_2d):this.Class.update(this[this.Class.id],this.attributes(),_2d);
this.is_new_record=this.Class.new_record_func;
return true;
},destroy:function(_2f){
this.Class.destroy(this[this.Class.id],_2f);
this.Class.store.destroy(this[this.Class.id]);
},add_errors:function(_30){
if(_30){
this.errors=this.errors.concat(_30);
}
},_resetAttributes:function(_31){
this._clear();
},_clear:function(){
var cas=this.Class.default_attributes;
for(var _33 in cas){
if(cas.hasOwnProperty(_33)){
this[_33]=null;
}
}
},element_id:function(){
return this.Class.className+"_"+this[this.Class.id];
},element:function(){
return MVC.$E(this.element_id());
},elements:function(){
return MVC.Query("."+this.element_id());
},publish:function(_34,_35){
this.Class.publish(_34,_35||{data:this});
},callback:function(_36){
var f=typeof _36=="string"?this[_36]:_36;
var _38=MVC.Array.from(arguments);
_38.shift();
_38.unshift(f,this);
return MVC.Function.bind.apply(null,_38);
}});
MVC.Object.guess_type=function(_39){
if(typeof _39!="string"){
if(_39==null){
return typeof _39;
}
if(_39.constructor==Date){
return "date";
}
if(_39.constructor==Array){
return "array";
}
return typeof _39;
}
if(_39=="true"||_39=="false"){
return "boolean";
}
if(!isNaN(_39)){
return "number";
}
return typeof _39;
};
if(!MVC._no_conflict&&typeof Model=="undefined"){
Model=MVC.Model;
}
;
include.next_function();
include.set_path('models');
Compilation=MVC.Model.extend("compilation",{build:function(_1){
this._build_sections(_1);
this._build_quotes(_1);
this.publish("built");
},_build_quotes:function(_2){
var _3;
_3=this;
if($("div.quote",_2).length>0){
$("div.quote",_2).each(function(){
if(!$(this).attr("link").length){
return;
}
_3.new_quote(this);
_3.publish("progressbar_update",{val:1});
});
}
if(window.console){
console.dir(this.db);
}
},new_quote:function(_4){
var q;
q=new Quote(_4);
},_build_sections:function(_6){
var _7;
_7=this;
if($(".section, .sub_section",_6).length>0){
$(".section, .sub_section",_6).each(function(){
_7.create_new_section(this);
_7.publish("progressbar_update",{val:1});
});
}
},create_new_section:function(_8){
var _9,_a,s;
_a=typeof _8==="string"?_8:$(_8).text();
_9=this.find_in_db(_a,"s");
if(!_9){
s=new Section(_8);
}
},insert_new_quote:function(id,_d,_e,_f){
var _10,_11,_12;
_10=this;
_12=_13(id,_d);
if(_12.length===0){
this.db.update(id,_e,_f);
this.publish("quote_inserted",{id:id});
}else{
this.publish("warning",{msg:"Missing "+_12.join(", ")});
}
function _13(id,_15){
var q,_17,_18;
q=_10.find_in_db(id,"q");
list=new Array("id","index","link","link_text","parent","tips","type");
_18=new Array();
if(Quote.need_section(_15)){
if(!q.trans&&!q.purport){
_18.push("section");
}
}else{
list.push("text");
}
$.each(list,function(i,val){
if(!q[val]){
_18.push(val);
}
});
return _18;
};
},add_to_db:function(_1b,ref,_1d,_1e){
var _1f;
if(_1e==="s"){
if(_1d==="compilation"){
this.db.add(_1b,ref,"s");
}else{
if(!this.find_in_db(_1d,"s")){
this.create_new_section(_1d);
}
this.db.add(_1b,ref,"s");
}
}
if(_1e==="q"){
var _1f;
_1f=this.find_in_db(_1d,"s");
if(!_1f){
if(_1d){
this.create_new_section(_1d);
}else{
if(window.console){
console.error("Error in Compilation.add_to_db: creating new section for "+ref+", missing parent");
}
}
}
this.db.add(_1b,ref,"q");
this.publish("new_quote",{elem:_1b});
}
},update_q_section:function(id,_21,_22){
if(arguments.length!==3){
if(window.console){
console.log("missing arguments in udpate_q_section");
}
return;
}
if(Quote.need_section(_21)){
var _23,q,_25;
_23=new Object();
_23.section=_22.section;
q=this.find_in_db(id,"q");
function _26(_27){
var _28;
_28=["trans","purport","text"];
if(!q[_27]){
$.each(_28,function(i,sec){
if(sec===_27){
return;
}
if(q[sec]){
_23[_27]=q[sec];
_23[sec]=false;
}
});
}else{
$.each(_28,function(i,sec){
if(sec===_27){
return;
}
_23[sec]=false;
});
}
};
if(_22.section!=="Translation and Purport"){
if(_22.section.match(/trans/i)){
_26("trans");
}else{
_26("purport");
}
}else{
if(!q.trans&&!q.purport){
_26("purport");
}
if(!q.trans){
_25="Translation";
_23.trans=" ";
}else{
_25="Purport";
_23.purport=" ";
}
this.publish("warning",{msg:"You have chosen \"Translation and Purport\" but you are missing the "+_25+" text."});
}
this.update_db(id,_23,"q");
}else{
this.publish("warning",{msg:"This quote does not require a section"});
}
},process_verse:function(_2d){
var _2e,_2f,_30,_31,_32;
_2e=this.find_in_db(_2d.quote,"q");
_32={};
_32["verses"]=_2e.verses;
function _33(all){
var a=all.split("\n");
for(i=0;i<a.length;i++){
a[i]=":"+$.trim(a[i]);
}
return a.join("\n");
};
if(_2d.resp){
if(_2e.text){
_30=_2e.text;
_31="text";
}else{
if(_2e.purport){
_30=_2e.purport;
_31="purport";
}
}
_2f=_2e.verses[_2d.verse];
_32[_31]=_30.replace(_2f,_33);
}
_32.verses[_2d.verse]="done";
this.update_db(_2e.id,_32,"q");
},update_heading:function(_36){
if(!_36&&window.console){
console.log("Missing params in Compilation.update_heading");
}
var _37,_38;
_38={};
if(_36.action==="append"){
_37=this.find_in_db(_36.id,"q");
_38.heading=_37.heading?_37.heading+" "+_36.heading:_36.heading;
}
if(_36.action==="set"){
_38.heading=_36.heading;
_38.heading=_38.heading.replace(/^[a-z]/,_39);
_38.heading=_38.heading.replace(/,$/,".");
_38.heading=_38.heading.replace(/[^.?!"]$/,_3a);
}
if(_36.action==="new"){
_38.heading=" ";
}
function _39(_3b){
return _3b.toUpperCase();
};
function _3a(_3c){
return _3c+".";
};
this.update_db(_36.id,_38,"q");
},update_db:function(id,_3e,_3f){
if(!id||!_3e||!_3f){
if(window.console){
console.log("Missing parameters in udpate_db");
}
}
this.db.update(id,_3e,_3f);
var q=this.find_in_db(id,"q");
Quote.update_section(q);
this.publish("updated",{id:id,quote:q});
},del_from_db:function(id,_42){
this.db.del(id,_42);
if(_42==="q"){
this.publish("deleted",{id:id});
}
},find_in_db:function(ref,_44){
if(!ref||!_44){
if(window.console){
console.error("Compilation#find_in_db: Missing parameters! ref: "+ref+", type: "+_44);
}
return;
}
if(_44==="s"){
ref=ref.replace(/[.,\(\)]/g,"");
}
var _45;
_45=this.db.find(ref,_44);
return _45;
},check_sec_consistency:function(id){
var _47,q,sec;
_47=this;
q=this.find_in_db(id,"q");
if(!q.section){
return;
}
sec=q.section.match(/trans|purport/ig);
if(sec){
if(sec.length===2){
if(!q.trans||!q.purport){
_4a();
return;
}
}
if(sec.length===1){
sec=sec[0].toLowerCase();
if(!q[sec]){
_4a();
return;
}
}
_47.publish("section_checked",{id:id,result:"good"});
}
function _4a(){
_47.publish("section_checked",{id:id,result:"bad"});
_47.publish("warning",{warning:"You have set \""+q.section+"\" as your section but this quote appears to be missing the corresponding text(s)!"});
};
},undo:function(id,_4c){
this.db.undo(id,_4c);
this.publish("undone",{id:id});
},db:{sections:new Object(),undo_sections:new Object(),sec_count:new Object(),quotes:new Object(),undo_quotes:new Object(),quote_count:new Object(),add:function(obj,id,_4f){
var _50;
_50=this._where(_4f);
if(_4f==="q"){
if(this.quote_count[obj.parent]===undefined){
this.quote_count[obj.parent]=0;
}
this.quote_count[obj.parent]++;
}else{
this.sec_count++;
}
this[_50][id]=obj;
},find:function(id,_52){
var _53;
_53=this._where(_52);
for(var obj in this[_53]){
if(obj==id){
return this[_53][obj];
}
}
return false;
},update:function(id,_56,_57){
var _58,_59;
_58=this._where(_57);
this._backup(id,_58);
from=_56;
to=this[_58][id];
this._clone(from,to);
if(_57==="q"){
Quote.update_tips(this[_58][id]);
}
},del:function(id,_5b){
var _5c;
_5c=this._where(_5b);
if(_5b==="q"){
this._backup(id,_5c);
}
this[_5c][id]=false;
},undo:function(id,_5e){
var _5f,_60,_61,to;
_5f=this._where(_5e);
_60="undo_"+_5f;
if(this[_60][id]===undefined){
return;
}
if(this[_5f][id]===false){
this[_5f][id]=new Object();
}
_61=this[_60][id];
to=this[_5f][id];
this._clone(_61,to);
return;
},_backup:function(id,_64){
var _65,_66,to;
_65="undo_"+_64;
if(this[_65][id]===undefined){
this[_65][id]=new Object();
}
_66=this[_64][id];
to=this[_65][id];
this._clone(this[_64][id],this[_65][id]);
},_clone:function(_68,to){
for(var _6a in _68){
if(typeof _68[_6a]!=="function"&&to[_6a]!==_68[_6a]){
to[_6a]=_68[_6a];
}
}
},_where:function(_6b){
return _6b==="s"?"sections":_6b==="q"?"quotes":"undo_quotes";
}}},{});
;
include.set_path('models');
﻿;
Quote=MVC.Model.extend("quote",{attr:["id","parent","book","heading","link","link_text","text","trans","purport","index","type","tips","verses","bad_link"],tips_db:{section:{title:"Set Section",desc:"...this quote requires a section. Click here",id:"set_section_tip"},edit_section:{title:"Edit Section",desc:"...by clicking here!",id:"edit_section_tip"},heading:{title:"Set Heading",desc:"...by highlighting a part of the quote",id:"set_heading_tip"},edit_heading:{title:"Edit Heading",desc:"...by highlighting a part of the quote",id:"edit_heading_tip"},edit_quote:{title:"Edit quote",desc:"...by doubleClicking on it or clicking here",id:"edit_quote_tip"},insert_new:{title:"Insert!",desc:"...this quote to the compilation by clicking here",id:"set_insert_tip"}},link_text_db:{"NOD":"Nectar of Devotion","ISO":"Sri Isopanisad","TLC":"Teachings of Lord Caitanya, Chapter","RTW":"Renunciation Through Wisdom","NOI":"Nectar of Instruction","KB":"Krsna Book","EJ":"Easy Journey to Other Planets","LOB":"Light of the Bhagavata","MOG":"Message of Godhead","NBS":"Narada Bhakti Sutra","MM":"Mukunda-mala-stotra mantra"},cache:{},find_reference:function(_1){
var _2,_3,_4,_5;
_2=this;
_3={};
_4=false;
if(_2.cache[_1.ref]){
if(window.console){
console.info("Quote#find_reference: found submitted ref in Quote.cache. "+_1.ref);
}
_2.publish("found_reference",_2.cache[_1.ref]);
return;
}
_3.ref=_1.ref;
if(_1.type){
_3.type=_1.type;
}
if(_1.attr){
_4=true;
}
if(_4){
_5=false;
}
$.ajax({type:"GET",url:"/php/get_vanisource_title.php",dataType:"json",async:_5,data:_3,error:_6,success:function(_7){
if(_7.result!=="Found"){
result=_7.result;
if(window.console){
console.error("Quote#find_reference: Ref not found in database");
}
if(!_4){
_2.publish("warning",{msg:"Ref not found for "+_1.ref});
_2.publish("not_found_reference",{ref:_1.ref});
}else{
_1.quote.bad_link=true;
}
}else{
new_quote={link:_7.title,link_text:_7.title,parent:_7.parent.replace(/\s+/g,"_"),index:_7.index,};
new_quote.type=_4?false:"new";
_2.cache[_1.ref]=new_quote;
if(window.console){
console.info("Updated Quote.cache with:");
console.dir(_2.cache);
}
if(_4){
if(window.console){
console.info("Quote#find_reference: updating "+_1.attr+" => "+_2.cache[_1.ref][_1.attr]);
}
$.each(_2.cache[_1.ref],function(_8,_9){
_1.quote[_8]=_9;
});
}else{
_2.publish("found_reference",new_quote);
}
}
}});
function _6(_a,_b,_c){
var _d;
_d={};
_d.text=_b;
_d.error=_c;
if(navigator.platform=="MacIntel"){
_2.publish("check_internet_connection");
}else{
_2.publish("connection_error",{ajax:_d,msg:"Vaniquotes server is unreachable, please wait a minute and submit your quote again."});
}
};
$(document).ajaxStart(function(){
_2.publish("ajax",{type:"start",msg:"Quote being processed..."});
});
$(document).ajaxStop(function(){
_2.publish("ajax",{type:"end",msg:"Quote request done"});
});
},need_section:function(_e){
if(!_e){
if(window.console){
console.error("ref argument missing in Quote.need_section");
}
return;
}
if(/^(SB \d+.\d+.\d+(?:-\d+)?|BG \d+.\d+(?:-\d+)?|CC (Adi|Madhya|Antya) \d+.\d+(?:-\d+)?|NOI \d+|ISO \d+|MM \d+|NBS \d+|LOB \d+)$/.test(_e)){
if(window.console){
console.info("Quote#need_section: quote "+_e+" needs trans/purport section");
}
return true;
}else{
return false;
}
},update_tips:function(_f){
var _10,_11,_12;
_10=this;
_11=[];
if(this.need_section(_f.link)){
if(!_f.section){
_11.push(this.tips_db.section);
}else{
_11.push(this.tips_db.edit_section);
}
}
!_f.heading||_f.heading===""?_11.push(this.tips_db.heading):_11.push(this.tips_db.edit_heading);
_11.push(this.tips_db.edit_quote);
if(_f.type==="new"){
_11.push(this.tips_db.insert_new);
}
_f.tips=_11;
},update_section:function(_13){
var m;
if(this.need_section(_13.link)){
if(window.console){
console.info("Quote#update_section: finding section(s) for "+_13.link);
}
if(!_13.trans&&!_13.purport){
if(window.console){
console.log("Quote#update_section: no current trans/purport");
}
if(_13.type==="new"){
if(_13.text.indexOf("PURPORT")>-1){
_15("PURPORT");
}
}else{
m=_13.text.match(/'''/g);
if(m!==null&&window.console){
console.log("Quote#update_section: found "+m.length+" apostrophies");
}
if(m!==null&&m.length%2===1){
_15("'''");
}
if(m===null){
_13.purport=_13.text;
}
}
}
if(_13.trans&&_13.purport){
_13.section="Translation and Purport";
}else{
if(_13.trans){
_13.section="Translation";
}else{
if(_13.purport){
_13.section="Purport";
}else{
if(_13.type!=="new"){
if(window.console){
console.warn("This quote "+_13.link+" does not contain a proper section");
}
}
}
}
}
if(_13.trans||_13.purport){
_13.text=false;
}
}
function _15(_16){
_13.trans=$.trim(_13.text.substring(0,_13.text.indexOf(_16)));
_13.purport=$.trim(_13.text.substr(_13.text.indexOf(_16)+_16.length));
if(_13.purport===""){
_13.purport=false;
}
};
},check_verses:function(_17){
var _18,_19,_1a,_1b,_1c,_1d,_1e,i,len,_21;
if(_17.type==="new"&&(_17.text||_17.purport)){
_18=this;
_19=_17.text||_17.purport;
_1a=_19.split("\n");
_1b=[];
_1c=0;
_1e=false;
last=false;
for(i=0,len=_1a.length;i<len;i++){
_21=_1a[i].length;
if(_21>_1c){
_1c=_1a[i].length;
}
if(_21<89&&!/[:,"\?]/.test(_1a[i])&&!/^\s*$/.test(_1a[i])){
if(_1e===false){
_1e=i;
last=i;
}else{
last++;
}
_1b[i]=_1a[i];
}else{
if(i!==last&&_1e!==false&&last!==false){
_18.request_verse(_17,_1b.slice(_1e,last+1));
}
_1e=last=false;
}
if(i+1===len&&_1e!==false&&last!==false){
_18.request_verse(_17,_1b.slice(_1e,last+1));
}
}
}
},request_verse:function(_22,_23){
var v=_23.join("<br/>");
if(typeof _22==="string"){
_22=Compilation.find_in_db(_22,"q");
}
if(window.console){
console.log("Is this a verse?\n"+v);
}
if(_22.verses===false){
_22.verses=[];
}
this.publish("verse_request",{verse:v,id:_22.verses.length,quote:_22.id});
_22.verses.push(_23.join("\n"));
},clean:function(_25){
if(_25.type=="new"){
_25.text=BaltoUni(_25.text);
}
$.each(["trans","purport","text"],function(i,_27){
if(_25[_27]){
_25[_27]=_28(_25[_27]);
_25[_27]=_29(_25[_27]);
_25[_27]=_2a(_25[_27]);
}
});
function _28(_2b){
var re,_2d;
re=/[\[\(](.+?)[\]\)]/g;
_2d=/^\s*(\(\[\[(?:Vanisource:)?[^\[]+\]\]\))$/mg;
_2b=_2b.replace(re,_2e);
_2b=_2b.replace(_2d,":$1");
return _2b;
};
function _2e(all,l){
var f,_32;
_32={"BG $1":/^Bg\. (\d+.\d+)$/i,"$1":/^(SB \d+.\d+.\d+)$/,"CC $1":/^Cc. ((?:Adi|Ādi|Madhya|Antya) \d+.\d+)$/,"NOI $1":/^NoI (\d+)$/i,"ISO $1":/^Īśo (?:mantra )?(\d+)$/i};
$.each(_32,function(sub,re){
if(l.match(re)){
f=l.replace(re,sub).replace(/Ādi/g,"Adi");
return false;
}
});
return f?"([[Vanisource:"+f+"|"+f+"]])":"("+l+")";
};
function _29(_35){
_35=_35.replace(/<br\/?>/g,"\n");
_35=_35.replace(/<p>\s*<\/p>/g,"");
_35=_35.replace(/<\/p><p/g,"</p>\n<p");
_35=_35.replace(/<p(?:.*?)>(.+?)<\/p>/g,"$1");
_35=_35.replace(/\n+/g,"\n");
_35=_35.replace(/^\n+|\n+$/g,"");
return _35;
};
function _2a(_36){
_36=_36.replace(/‘([^‘“”]+?)’/g,"\"$1\"");
_36=_36.replace(/“([^“‘’]+?)”/g,"\"$1\"");
_36=_36.replace(/'{2,}(.+?)'{2,}/g,"\"$1\"");
_36=_36.replace(/(\S+)’/g,"$1'");
_36=_36.replace(/(\S+)’s/g,"$1's");
return _36;
};
}},{init:function(_37){
if(_37===undefined){
if(window.console){
console.error("Error creating new quote with quote_obj: "+_37);
}
return;
}
var _38,_39,_3a,_3b;
_38=this;
_3b=/^(?:''')\[\[(?:Vanisource:)?(.+?)\|(.+?)\]\]:(?:''')?/;
if(!_37.link){
$.each(_38.Class.attr,function(i,a){
!/^(?:text|trans|purport|heading)$/.test(a)?_38[a]=$(_37).attr(a)||false:_38[a]=$(_37).children("."+a).html()||false;
});
}else{
$.each(_38.Class.attr,function(i,a){
_38[a]=_37[a]||false;
});
}
if(!_40()){
if(window.console){
console.error("Quote.init#check_missing_attr:                                                Error creating quote, missing link attribute which is vital to build a quote");
}
return;
}
_41();
this.Class.clean(this);
if(this.link){
this.link=this.link.replace(/[_\s]+/g," ");
}
if(!this.link_text){
this.link_text=this.link;
}
this.link_text=this.link_text.replace("(New-2003)","");
Section.exists(this.parent)?this.parent=this.parent.replace(/\s+/g,"_"):_42("parent");
_39=Compilation.db.quote_count[this.parent]?Compilation.db.quote_count[this.parent]:0;
if(this.link){
this.id=this.link.replace(/\W/g,"")+"_"+_39;
}
if(!this.book){
this.book=Section.find_attr(this.parent,"sec_book");
}
if(this.heading){
this.heading=this.heading.replace(/'''/g,"");
}
_43();
this.Class.update_section(this);
if(!this.text&&!this.trans&&!this.purport){
if(window.console){
console.error("No text, trans or purport in ref "+this.link);
}
}
if(!this.tips){
this.Class.update_tips(this);
}
if(!this.verses){
this.Class.check_verses(this);
}
this.publish("created",this);
function _41(){
$.each(["trans","purport","text"],function(i,t){
var _46=false;
if(_38[t]){
if(!_46){
_38[t]=$.trim(_38[t].replace(_3b,""));
_46=true;
}
}
});
};
function _40(){
$.each(["link","parent","index"],function(i,_48){
if(!_38[_48]){
if(_48=="link"){
if(window.console){
console.error("Quote.init#check_missing_attr: Missing link!"+_48);
}
return false;
}else{
if(window.console){
console.warn("Quote.init#check_missing_attr: Missing "+_48);
}
_42(_48);
}
}
});
return true;
};
function _42(_49){
var _4a;
if(window.console){
console.log("In Quote.init#find_attr, checking Quote.cache["+_38.link+"] = ");
console.dir(Quote.cache[_38.link]);
}
if(Quote.cache[_38.link]){
if(window.console){
console.info("In Quote.init#find_attr, updating "+_49+" with "+Quote.cache[_38.link][_49]);
}
_38[_49]=Quote.cache[_38.link][_49];
}else{
if(!_38.link){
if(window.console){
console.error("Quote.init#find_attr: Missing that.link to query db for missing "+_49);
}
}else{
if(window.console){
console.warn("Quote.init#find_attr: "+_49+" not found in Quote.cache for "+_38.link+". Submiting request to Quote.find_reference");
}
Quote.find_reference({quote:_38,ref:_38.link,type:"title",attr:_49});
}
}
};
function _43(){
if(!_38.link_text){
_38.link_text=_38.link.replace(/_/g," ");
}
$.each(Quote.link_text_db,function(_4b,_4c){
if(_38.link_text.indexOf(_4b)===0){
_38.link_text=_38.link_text.replace(_4b,_4c);
return false;
}
});
};
}});
;
include.set_path('models');
Section=MVC.Model.extend("section",{sections_tree:{"Bhagavad-gita_As_It_Is":{child:["BG_Preface_and_Introduction","BG_Chapters_1_-_6","BG_Chapters_7_-_12","BG_Chapters_13_-_18"],name:"BG"},"Srimad-Bhagavatam":{child:["SB_Preface_and_Introduction","SB_Canto_1","SB_Canto_2","SB_Canto_3","SB_Canto_4","SB_Canto_5","SB_Canto_6","SB_Canto_7","SB_Canto_8","SB_Canto_9","SB_Canto_10.1_to_10.13","SB_Cantos_10.14_to_12_(Translations_Only)"],name:"SB"},"Sri_Caitanya-caritamrta":{child:["CC_Preface_and_Introduction","CC_Adi-lila","CC_Madhya-lila","CC_Antya-lila"],name:"CC"},"Other_Books_by_Srila_Prabhupada":{child:["Teachings_of_Lord_Caitanya","Nectar_of_Devotion","Nectar_of_Instruction","Easy_Journey_to_Other_Planets","Krsna,_The_Supreme_Personality_of_Godhead","Renunciation_Through_Wisdom","Message_of_Godhead","Light_of_the_Bhagavata","Sri_Isopanisad","Mukunda-mala-stotra_(mantras_1_to_6_only)","Narada-bhakti-sutra_(sutras_1_to_8_only)"],name:"OB"},"Lectures":{child:["Bhagavad-gita_As_It_Is_Lectures","Srimad-Bhagavatam_Lectures","Nectar_of_Devotion_Lectures","Sri_Caitanya-caritamrta_Lectures","Sri_Isopanisad_Lectures","Sri_Brahma-samhita_Lectures","Festival_Lectures","Arrival_Addresses_and_Talks","Initiation_Lectures","Cornerstone_Ceremonies","Wedding_Ceremonies","General_Lectures","Departure_Talks","Philosophy_Discussions","Purports_to_Songs"],name:"Lec"},"Conversations_and_Morning_Walks":{child:["1967_Conversations_and_Morning_Walks","1968_Conversations_and_Morning_Walks","1969_Conversations_and_Morning_Walks","1970_Conversations_and_Morning_Walks","1971_Conversations_and_Morning_Walks","1972_Conversations_and_Morning_Walks","1973_Conversations_and_Morning_Walks","1974_Conversations_and_Morning_Walks","1975_Conversations_and_Morning_Walks","1976_Conversations_and_Morning_Walks","1977_Conversations_and_Morning_Walks"],name:"Con"},"Correspondence":{child:["1947_to_1965_Correspondence","1966_Correspondence","1967_Correspondence","1968_Correspondence","1969_Correspondence","1970_Correspondence","1971_Correspondence","1972_Correspondence","1973_Correspondence","1974_Correspondence","1975_Correspondence","1976_Correspondence","1977_Correspondence"],name:"Let"}},exists:function(_1){
if(window.console){
console.log("Section#exists: checking TOC "+_1);
}
return this.find_attr(_1)?true:false;
},find_attr:function(_2,_3){
if(!_2||_2==="undefined"||_2===""){
if(window.console){
console.error("Error in Section#find_attr for ref: "+_2+" attr: "+_3);
}
return;
}
var _4,_5,_6,_7,_8,_9,_a,_b,_c;
_c=this;
_9=0;
for(var _d in _c.sections_tree){
if(_2===_d){
_4="compilation";
_5="section";
_6=2;
_7=_9;
_8=_c.sections_tree[_d].name;
break;
}
_9++;
}
if(_4===undefined){
for(var _e in _c.sections_tree){
_7=$.inArray(_2,_c.sections_tree[_e].child);
if(_7>-1){
_4=_e;
_5="sub_section";
_6=3;
_8=_c.sections_tree[_e].name;
break;
}
_7=false;
}
}
if(_4){
_b={sec_parent:_4,sec_class:_5,sec_index:_7,sec_level:_6,sec_book:_8};
return _3!==undefined?_b[_3]:_b;
}else{
return false;
}
}},{init:function(_f){
var _10;
if(_f===undefined||_f===""){
if(window.console){
console.log("Error in Section.init creating new section with ref: "+_f);
}
return;
}
if(typeof _f!=="string"){
_10=$(_f).attr("parent")&&$(_f).attr("class")&&$(_f).attr("sec_index")?this._set_attr_auto(_f):this._set_attr_man($(_f).attr("id"));
if(window.console){
console.log("Section.init: new section:");
}
}else{
_10=this._set_attr_man(_f);
if(window.console){
console.log("Section.init: new section: "+_f);
}
}
if(_10){
this.publish("created",this);
}else{
if(window.console){
console.error("Section.init: Error building section for ref "+_f);
}
this.publish("warning",{msg:"Error creating Table of Contents for this quote<br/>Notify your vanitutor or coordinator and make note of this in the compilers notes and continue compiling."});
this.publish("report_error",{msg:"Error creating section/TOC "+_f});
return;
}
},_set_attr_auto:function(ref){
if(window.console){
console.log("Section.init#_set_attr_auto: Building section "+ref+" auto");
}
this.parent=$(ref).attr("parent");
this.sec_class=$(ref).attr("class");
this.level=this.sec_class==="section"?2:3;
this.sec_index=$(ref).attr("sec_index");
this.id=$(ref).attr("id");
this.text=$(ref).text();
return true;
},_set_attr_man:function(ref){
if(window.console){
console.log("Section.init#_set_attr_man: Building section "+ref+" manually");
}
if(ref===undefined){
if(window.console){
console.error("Section.init#_set_attr_man: Missing ref "+ref);
}
return false;
}
var _13;
_13=this.Class.find_attr(ref);
if(!_13){
if(window.console){
console.error("Section.init#_set_attr_man: section/TOC item not found in Section#section_tree for ref "+ref);
}
return false;
}
this.parent=_13.sec_parent;
this.sec_class=_13.sec_class;
this.level=_13.sec_level;
this.sec_index=_13.sec_index;
this.id=ref.replace(/[.,\(\)]/g,"");
this.text=ref.replace(/_/g," ");
return true;
}});
;
include.set_path('models');
CompileForm=MVC.Model.extend("compile_form",{blank_form:function(){
return {id:"compile_form",tips:this._get_tips()};
},submit_quote:function(_1){
var re,_3,_4;
re=new RegExp(">>> Ref. VedaBase => (.+)");
if(re.test(_1)){
temp_quote=$.trim(_1.replace(re,""));
temp_quote=BaltoUni(temp_quote);
this.temp_quote=temp_quote;
_4=$.trim(re.exec(_1)[1]);
Quote.find_reference(_4);
}else{
this.publish("warning",{msg:"No Ref in pasted quote!"});
return;
}
}},{});
;
include.set_path('models');
Facts=MVC.Model.extend("facts",{build:function(_1){
var _2;
_2=$("div#facts",_1).html();
_2?this.build_with(_2):this.build_new();
this.publish("created",{facts:this.db});
},build_new:function(){
var _3;
_3=this;
$.each(_3.db,function(_4,_5){
if(_4==="first"||_4==="last"){
_3.set(_4,_3.get_date());
}
if(_4==="compiler"){
var _6=_3.check_user();
if(_6){
_3.set(_4,new Array(_6));
}
}
});
},build_with:function(_7){
var _8,_9,_a,_b,_c,_d;
_8=this;
_9=new Object();
_a=new Array();
_b=new Array();
_c=/\[\[Category:\s?(.+?)\s?\]\]/ig;
if(!_7){
if(window.console){
console.log("Missing facts data in Facts.build_manually!");
}
return;
}
_a=_7.split("{{");
_a.shift();
if(!_a.length){
if(window.console){
console.error("Error creating facts array");
}
}
$.each(_a,function(i,_f){
var _10,_11;
_f=_12(_f);
if(_f.indexOf("toc")===0){
_9["toc"]=$.trim(_f.substr(_f.indexOf(" ")+1));
return true;
}
if(_f.indexOf("|")===-1||_f.indexOf("false")>-1){
return true;
}
_10=$.trim(_f.substring(0,_f.indexOf("|")));
_11=$.trim(_f.substr(_f.indexOf("|")+1));
if(window.console){
console.log("Setting "+_10+" to "+_11);
}
_9[_10]=_11;
_8.publish("progressbar_update",{val:1});
});
$.each(_8.db,function(_13,val){
if(window.console){
console.log(_13+" is "+typeof _9[_13]+" in current_facts");
}
if(typeof _9[_13]!=="undefined"){
_15(_13,_9[_13]);
}else{
if(window.console){
console.log("In Facts.build_with: "+_13+" was not found in extracted facts db");
}
}
});
function _15(_16,_17){
if(!_17){
return;
}
if((_16==="terms"&&!/^Copy /.test(_17))||_16==="compiler"||_16==="complete"){
_17=_18(_17);
}
if(_16==="total"){
_17=Number(_17)||0;
}
if(_16==="last"||(_16==="first"&&_17==="")){
_17=_8.get_date();
}
if(_16==="totals_by_section"){
var _19,re,_1b,val;
_19={};
re=/(.+?)\s?=\s?(\d+)/;
_17=_18(_17);
$.each(_17,function(i,sec){
_1b=sec.match(re)[1];
val=Number(sec.match(re)[2]);
_19[_1b]=val;
});
_17=_19;
}
_8.set(_16,_17);
};
function _12(str){
var now;
now=str.replace(/"/g,"\"");
now=now.replace(/<.+/,"");
now=now.replace(/\n+/g,"");
now=now.replace(/^(.+?)\}\}.*/,"$1");
now=$.trim(now);
return now;
};
function _18(str){
var _22,_23;
_22=str;
_22=_22.replace(/"/g,"");
_22=_22.replace(/ +\||\| +/g,"|");
_22=_22.replace(/^ +| +$/g,"");
_23=_22.split("|")||_22;
return _23;
};
_b=_7.match(_c);
if(_b!==null){
_b=$.map(_b,function(val){
return val.replace(_c,"$1");
});
this.set("categories",_b);
}
this.add_user();
if(window.console){
console.log(this.db);
}
},update:function(_25,_26,_27){
_27=$.trim(_27);
if(this.db[_25]===undefined){
if(window.console){
console.log("Error updating Facts.db in "+_25+" with "+_27);
}
return false;
}
if(_27===""){
if(_25==="goal"){
this.publish("warning",{msg:"Wrong goal setting. You must calculate your goal based on the amount of matches for your expressions search in Vedabase"});
return 0;
}
if(_26!==null){
this.publish("deleted",{fact:_25,index:_26,old:this.db[_25][_26]});
}
}
if(_25==="goal"&&isNaN(_27)){
this.publish("warning",{msg:"Goal must be number"});
return 0;
}
_26===null?this.db[_25]=_27:this.db[_25][_26]=_27;
this.publish("updated");
if(_25==="terms"&&_27!==""){
this.publish("updated_term",{term:_27});
}
return _27;
},set:function(_28,_29){
var _2a;
_2a=this;
if(!_28||!_29){
if(window.console){
console.log("Parameters missing in Facts.set(). name: "+_28+" value: "+_29);
}
}
_2a.db[_28]=_29;
},add:function(_2b,_2c){
if(this.db[_2b]===undefined||_2c===""){
if(window.console){
console.log("Bad fact in Facts.add "+_2b+" val "+_2c);
}
return;
}
this.db[_2b].push($.trim(UniToASCII(BaltoUni(_2c))));
this.publish("added",{fact:_2b,index:this.db[_2b].length-1});
},get:function(_2d,_2e){
return _2e===undefined?this.db[_2d]:this.db[_2d][_2e];
},get_all_terms:function(){
var _2f;
_2f=this.db.terms;
_2f=$.map(_2f,function(t){
if(t!==""){
return "\""+t+"\"";
}
});
return _2f.sort().join("|");
},check_user:function(){
var _31,_32;
_31=this;
_32=wgUserName||false;
if(!_32){
this.publish("warning",{msg:"You are not logged in"});
return false;
}else{
return _32;
}
},add_user:function(){
var _33,_34,_35;
_33=this;
_34=this.check_user();
_35=_33.db.compiler;
if(_34&&$.inArray(_34,_35)===-1){
_33.add("compiler",_34);
}
},get_date:function(){
var _36=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
var d=new Date();
var day=d.getDate().toString();
var _39=_36[d.getMonth()];
var _3a=d.getYear().toString().substring(1,3);
if(day.length==1){
day="0"+day;
}
var _3b=day+_39+_3a;
return _3b;
},complete:function(_3c,_3d){
var _3e;
_3e=this.db.complete;
if(_3d==="add"){
if(_3c==="ALL"){
_3e.splice(0);
_3e.push(_3c);
}else{
if($.inArray("ALL",_3e)>-1){
_3e.splice($.inArray("ALL",_3e),1);
}
_3e.push(_3c);
}
}else{
_3e.splice($.inArray(_3c,_3e),1);
}
},update_totals:function(_3f){
var q,_41;
q=Compilation.find_in_db(_3f.id,"q");
if(q){
_41=q.book;
this.db.totals_by_section[_41]++;
this.db.total++;
}else{
_41=Compilation.find_in_db(_3f.id,"u").book;
this.db.totals_by_section[_41]--;
this.db.total--;
}
this.publish("totals_updated");
},check_totals:function(){
var _42,_43,_44,_45;
_42=this;
_44=0;
_43={};
if(window.console){
console.info("In Facts#check_totals");
}
$.each(Compilation.db.quotes,function(_46,_47){
var _48=Compilation.db.quotes[_46]["book"];
_43[_48]?_43[_48]++:_43[_48]=1;
if(window.console){
console.log("Facts#check_totals: In quote: "+_46+" count for "+_48+" is: "+_43[_48]);
}
});
$.each(Facts.db.totals_by_section,function(_49,val){
if(!_43[_49]){
if(window.console){
console.warn("Facts#check_totals: No book_count for "+_49+" => "+_43[_49]);
}
_43[_49]=0;
}
if(val!==_43[_49]){
if(window.console){
console.warn("Facts#check_totals: Facts.db totals_by_section doesn't match totals in Compilation.quotes.db for "+_49+" totals: "+val+" => "+_43[_49]);
}
Facts.db.totals_by_section[_49]=_43[_49];
_45=true;
}
_44+=_43[_49];
});
if(_45){
if(window.console){
console.info("Updating Facts.db with quotes total "+_44);
}
this.db.total=_44;
this.publish("totals_updated");
}
},save:function(){
var _4b,_4c,all;
_4b=this;
all=false;
_4c="";
$.each(_4b.db,function(f,_4f){
if(f==="books"){
return true;
}
if(f==="terms"){
_4c+=_50(f,_51(_4f));
}
if(f==="notes"||f==="goal"||f==="first"||f==="last"||f==="total"){
_4c+=_50(f,_4f);
}
if(f==="compiler"||f==="complete"){
_4c+=_50(f,_4f.join("|"));
}
if(f==="totals_by_section"){
_4c+=_50(f,_52(_4f));
}
if(f==="toc"){
_4c+="\n{{toc right}}";
}
if(f==="categories"){
_4c+=_53(_4f);
}
});
return _4c;
function _50(_54,val){
if(_54==="complete"&&val==="ALL"){
all=true;
}
if(_54==="goal"&&all){
return "";
}
return "\n{{"+_54+"|"+val+"}}";
};
function _51(_56){
var t;
t=$.map(_56,function(_58){
if(_58!==""){
return "\""+_58+"\"";
}
}).sort();
return t.join("|");
};
function _52(_59){
var t;
t=new Array();
$.each(_59,function(_5b,_5c){
t.push(_5b+"="+_5c);
});
return t.join("|");
};
function _53(_5d){
var c,_5f,_60;
_5f=$("#categories_list").sortable("toArray");
_60=$.map(_5f,function(val,i){
var n=/\d+/.exec(val);
return _5d[n];
});
c="";
$.each(_60,function(i,cat){
if(cat===""){
return true;
}
c+="\n[[Category:"+cat+"]]";
});
return c;
};
},db:{terms:new Array(),notes:new String(),compiler:new Array(),complete:new Array(),goal:new Number(0),first:new String(),last:new String(),totals_by_section:{"BG":0,"SB":0,"CC":0,"OB":0,"Lec":0,"Con":0,"Let":0},total:new Number(0),toc:new String("right"),categories:new Array(),books:new Array("BG","SB","CC","OB","Lec","Con","Let")},terms:new Array()},{});
;
include.set_path('controllers');
CompileController=MVC.Controller.extend("compilation",{progress_val:0,loading:false,saving:false,compile_tools_menu_hover_options:{sensitivity:2,interval:300,over:function(){
CompileController.show_tools_menu();
},timeout:500,out:function(){
CompileController.hide_tools_menu();
}},hide_tools_menu:function(){
$("#compile_tools_menu").animate({right:"-72px"},"slow");
},show_tools_menu:function(){
$("#compile_tools_menu").animate({right:"0px"},"fast");
},link_autocomplete:function(_1,_2){
$(_1).autocomplete("/php/get_vanisource_title.php",{extraParams:{type:"title",suggest:true,minChars:2},resultsClass:"link_suggest_results",fixed:_2});
},category_autocomplete:function(_3,_4){
$(_3).autocomplete("/php/category_search2.php",{extraParams:{minChars:2},resultsClass:"cat_suggest_results",fixed:_4});
}},{load:function(_5){
this._loading("init");
var _6,_7;
_6=this;
_6.update_progressbar(10);
_7=$("#wpTextbox1").val();
if(_7!==""&&_7.indexOf("<div id=\"compilation\">")===-1){
if(window.console){
console.log("No compilation found in this page!");
}
this._loading("end_gracefully");
return;
}
_6.update_progressbar(10);
if(_7===""){
this.new_compilation_message();
_7="<div id=\"compilation\"></div>";
}
this.render({after:"wikiPreview",action:"compilation"});
_6.update_progressbar(10);
Facts.build(_7);
_6.update_progressbar(10);
Compilation.build(_7);
},"#compile_tools_hide click":function(_8){
this.hide_compile_tools();
},"#transparent_background click":function(){
this.hide_compile_tools();
},"#compile_tools_toggle click":function(_9){
var _a=_9.event.pageY-50;
this.toggle_compile_tools(_a);
},"#compile_tools_save click":function(_b){
_b.event.kill();
this.save();
},"#compile_form .ui-state-default mouseover":function(_c){
$(_c.element).addClass("ui-state-hover");
},"#compile_form .ui-state-default mouseout":function(_d){
$(_d.element).removeClass("ui-state-hover");
},_loading:function(_e){
var _f=this;
this.Class.loading=true;
if(_e==="init"){
if(wgUserName===null){
alert("You must Log-in to compile.");
return;
}
$("<div id=\"background_overlay\"></div>").appendTo("body");
$("<div id=\"progressbar\"></div>").appendTo("body");
_f.publish("progressbar",{text:"Loading Compilation..."});
$("#editform, #toolbar").hide();
$("#mw-edit-longpagewarning").hide();
this.loading={};
$("#p-cactions").children().each(function(){
$("li#ca-edit",this).removeClass("selected");
$("li#ca-compile",this).addClass("selected");
});
}
if(_e==="end_gracefully"){
if(window.console){
console.info("In CompilationController._loading ending gracefully...");
}
_f.update_progressbar(20);
this.publish("progressbar_hide");
$("#editform, #toolbar").show();
}
if(_e==="end"){
$(document).ready(function(){
_f.attach_events();
_f.publish("progressbar_hide");
$("#compilation").fadeIn("slow").removeClass("hidden");
_f.show_compile_tools();
});
this.Class.loading=false;
}
return;
},attach_events:function(){
var _10;
_10=this;
$("#compile_tools").tabs().draggable({handle:"> ul"});
$("#compile_tools_menu").hoverIntent(_10.Class.compile_tools_menu_hover_options);
setTimeout(_10.Class.hide_tools_menu,5000);
$("#compile_tools_menu p").bind("mouseenter",function(){
$(this).addClass("ui-state-hover");
}).bind("mouseleave",function(){
$(this).removeClass("ui-state-hover");
});
window.onbeforeunload=function(){
if(!_10.Class.saving){
return "";
}
};
},_render_section:function(_11){
var _12;
this.section=_11;
_12=this.section.parent;
if(window.console){
console.assert(_12);
}
if(_12!=="compilation"&&$("#"+_12).length!==1){
this._render_section(Compilation.find_in_db(_12,"s"));
}
if(window.console){
console.info("CompileController#_render_section: rendering "+this.section.id+" to "+_12);
}
this.render({bottom:_12,action:"sections"});
this.sort_section(_12);
},clean_up:function(){
this._sort_sections();
this._remove_empty_secs();
this._sort_quotes();
},sort_section:function(_13){
if($("#"+_13).children().length>1){
$("#"+_13).children(".section, .sub_section").tsort({attr:"sec_index"});
}
},_sort_sections:function(){
var _14=$(".section");
var _15=$(".sub_section");
$(_14).tsort({attr:"sec_index"});
$(_15).tsort({attr:"sec_index"});
},_remove_empty_secs:function(){
var _16,id;
_16=[];
_18($(".sub_section"));
_18($(".section"));
function _18(_19){
$(_19).each(function(){
id=$(this).attr("id");
$.inArray(id,_16)>-1?_1a(this):_16.push(id);
if($(this).children("div").length===0){
_1a(this);
}
});
};
function _1a(_1b){
if(window.console){
console.info("CompilationController#_remove_empty_secs: removing duplicate or empty section: "+$(_1b).attr("id"));
}
$(_1b).remove();
Compilation.del_from_db($(_1b).attr("id"),"s");
};
},_sort_quotes:function(){
$(".quote").tsort({attr:"index"});
},toggle_compile_tools:function(pos){
$("#compile_tools").is(":hidden")?this.show_compile_tools(pos):this.hide_compile_tools(pos);
},show_compile_tools:function(pos){
var _1e;
_1e=this;
this.fix_z_indexes(true);
$("#compile_tools").css("opacity",1).fadeIn("fast",function(){
if(pos){
window.scrollTo(0,pos);
}
});
$("#compile_tools textarea").focus();
$("#compile_tools_toggle #compile_tools_toggle_text").text("Hide Tools");
$("#transparent_background").show();
},hide_compile_tools:function(){
var _1f;
_1f=this;
$("#transparent_background").hide();
this.fix_z_indexes(false);
$("#compile_tools").css("opacity",0);
$("#compile_tools").effect("transfer",{to:"#compile_tools_toggle",className:"compile_tools_transfer"},"medium");
$("#compile_tools").hide("fast");
$("#compile_tools_toggle > #compile_tools_toggle_text").text("Show Tools");
setTimeout(_1f.Class.hide_tools_menu,5000);
},fix_z_indexes:function(fix){
$("#p-logo, #p-cactions").css("z-index",fix?1:"");
},relogin:function(){
var _21,_22;
_21=this;
$("#progressbar").progressbar("disable");
this.user=wgUserName;
this.render({to:"login_form",action:"login_form"});
if(window.console){
console.info(wgUserName+" needs to relogin");
}
_23();
function _24(_25){
_22=wgServer+wgScriptPath+"/api.php?action=login&format=json&"+_25;
$.ajax({type:"POST",url:_22,dataType:"json",success:function(_26){
if(window.console){
console.dir(_26);
}
$("#progressbar").progressbar("enable");
_21.save();
},error:function(_27,_28,_29){
if(window.console){
console.log("Error in AjaxLogin.js!");
}
return false;
}});
};
function _2a(){
$("#login_form").dialog("close");
_24($("#login_form form").serialize());
};
function _23(){
if(!$("#login_form").hasClass("ui-dialog-content")){
$("#login_form").dialog({modal:true,title:"Log-in to save",modal:true,open:function(_2b,ui){
$("#login_form #lgpassword").focus();
},buttons:{"Login":_2a}}).keydown(function(e){
if(e.keyCode===13){
_2a();
}
});
}else{
$("#login_form").dialog("open");
}
};
},save:function(){
var _2e;
_2e=this;
_2e.publish("progressbar",{text:"Saving..."});
_2e.check_user_loggedin();
},check_internet_connection:function(){
var _2f,_30,_31;
_2f=this;
_30=false;
_31=new XMLHttpRequest();
_31.onreadystatechange=_32;
_31.open("HEAD","http://www.google.com",true);
_31.send(null);
setTimeout(function(){
if(_31.readyState==4&&!_30){
_33();
}
},3000);
function _32(){
if(window.console){
console.log(_31.readyState);
}
if(_31.readyState==4){
if(_31.statusText&&_31.statusText!=""){
if(window.console){
console.log("Connected");
}
_30=true;
_2f.publish("progressbar_hide");
_2f.publish("connection_error",{ajax:_31,msg:"Vaniquotes server is unreachable, please wait a minute and try again."});
}
}
};
function _33(){
_2f.publish("progressbar_hide");
_2f.publish("connection_error",{ajax:_31,msg:"You appear to be offline! Check your internet connection and try again."});
};
},check_user_loggedin:function(){
var _34,_35;
_34=this;
_35=false;
sajax_do_call("isUserLoggedIn",[],_36);
setTimeout(function(){
if(!_35){
if(navigator.platform=="MacIntel"){
_34.check_internet_connection();
}else{
_34.publish("progressbar_hide");
_34.publish("connection_error",{ajax:{},msg:"Vaniquotes server is unreachable, please wait a minute and try to save again."});
}
}
},3000);
function _36(_37){
_35=true;
if(_37.status!=200){
_34.publish("connection_error",{ajax:_37,msg:"Vaniquotes server is unreachable, please wait a minute and try to save again."});
}else{
if(window.console){
console.log("Success: "+_37.responseText);
}
}
if(_37.responseText==="no"){
_34.relogin();
}else{
_34._check_before_save();
}
};
},_check_before_save:function(){
var _38;
_38=this;
_38.update_progressbar();
function _39(){
_38.publish("progressbar_hide");
};
if($(".building_quote").not(".deleted_quote").length){
_39();
this.publish("warning",{msg:"You must insert all quotes before saving!"});
$.scrollTo(".building_quote","fast");
return;
}
if($(".bad_link").length){
_39();
this.publish("warning",{msg:"You must fix bad links in page before saving!"});
$.scrollTo(".bad_link","fast",{offset:-50});
return;
}
if(QuotesController.currently_editing){
$(".edit_quote #Cancel_quote").click();
}
_38._do_save();
},_do_save:function(){
var _3a,_3b,_3c,_3d,_3e,_3f,_40,upb,_42;
_3a=this;
this.Class.saving=true;
upb=_3a.update_progressbar;
_3f=$("<div id=\"compilation\"></div>");
_3a.update_progressbar();
_3b=Facts.save();
_3a.update_progressbar();
$("<div id=\"facts\">"+_3b+"</div>").appendTo(_3f);
_3a.update_progressbar();
_3e=$(".quote").not(".deleted_quote").clone();
_3a.update_progressbar();
_3e.each(function(){
var q,p,l,lt,_47;
q=$(this);
p=q.attr("parent");
l=q.attr("link").replace(/_/g," ");
lt=$(".link a",q).text();
$(".q_menu",q).remove();
$(".link",q).html("[[Vanisource:"+l+"|"+lt+"]]: ");
$(".cited_link",q).each(function(){
$(this).replaceWith("[[Vanisource:"+$(this).text()+"|"+$(this).text()+"]]");
});
$(".verse_in_q",q).each(function(){
$(this).replaceWith($(this).text().replace(/^([^\n])/mg,":$1"));
});
$(".highlight_terms",q).each(function(){
$(this).replaceWith($(this).text());
});
q.removeClass("ui-corner-all q_new q_updated");
q.removeAttr("style");
_3a.update_progressbar(1);
});
_3e.appendTo(_3f);
_3c=$(".section").clone();
_3d=$(".sub_section").clone();
_3d.each(_48);
_3c.each(_48);
function _48(){
var s,l,h,id,_4d;
s=$(this);
l=s.hasClass("section")?2:3;
h="h"+l;
_4d=s.attr("text");
id=_4d.replace(/ /g,"_");
s.empty();
$("<"+h+">"+_4d+"</"+h+"></div>").appendTo(s);
$("div[parent=\""+id+"\"]:first",_3f).before(s);
_3a.update_progressbar();
};
_40=_3f.wrap("<div></div>").parent("div").html().replace(/^\s+/mg,"").replace(/<\/span>\n/g,"</span>").replace(/(<div[^>]+?(?:id="facts"|class="(?:quote|section|sub_section)"))/g,"\n$1").replace(/([^\n])<\/div>/g,"$1\n</div>");
_3a.update_progressbar();
$("#wpTextbox1").val(_40);
_3a.update_progressbar();
if(window.console){
console.log(_3b);
console.log(_3e);
console.log(_3f);
}
_3a.update_progressbar();
_3a.update_progressbar();
$("#wpSave").click();
},new_compilation_message:function(){
$(".mw-newarticletext").replaceWith("<div id=\"new_compilation_message\"></div>");
this.text="Welcome to a new Vaniquotes compiling page. Use the Compiling tools box to make new quotes and edit this page's facts";
this.render({to:"new_compilation_message",action:"new_compilation_message"});
},info:function(msg){
this.info=msg;
this.render({to:"info",action:"info"});
$("#info:hidden, #background_overlay:hidden").fadeIn();
$(window).click(function(){
$("#info, #background_overlay").fadeOut();
$(this).unbind("click");
});
},warning:function(msg){
var _50,_51;
_50=this;
_51=$("#compile_tools").is(":visible");
this.warning=msg;
this.fix_z_indexes(true);
this.render({to:"warning",action:"warning"});
$("#warning:hidden, #warning_overlay:hidden").fadeIn();
$(window).click(function(){
$("#warning, #warning_overlay").fadeOut(function(){
if(!_51){
_50.fix_z_indexes(false);
}
});
$(this).unbind("click");
});
},report_error:function(msg){
$.post("/php/report_error.php",{error:msg});
},update_progressbar:function(val){
var _54;
_54=this;
_54.Class.progress_val=val===undefined?_54.Class.progress_val+3:_54.Class.progress_val+val;
$("#progressbar").progressbar("value",_54.Class.progress_val);
if(window.console){
}
},block_background:function(_55){
var _56;
_56=this;
if(window.console){
console.info("In Compilation_controller.block_background with action: "+_55);
}
if(_55){
_56.fix_z_indexes(true);
$("#background_overlay").show();
}else{
_56.fix_z_indexes(false);
$("#background_overlay").fadeOut();
}
},connection_error:function(_57){
var _58;
_58=this;
if(window.console){
console.log("Ajax error: "+_57.ajax.text+" : "+_57.ajax.error);
}
window.alert(_57.msg);
},"compilation.built subscribe":function(){
var _59;
_59=this;
_59.update_progressbar(20);
this.clean_up();
this._loading("end");
},"quote.found_reference subscribe":function(_5a){
if($("#compile_form #ref_lookup").is(":visible")){
$("#compile_form #ref_lookup").each(function(){
$(this).hide();
$("#ref",this).html("");
$("#ref_lookup_input > #link",this).val("");
});
}
if($("#compile_tools").is(":visible")){
this.hide_compile_tools();
}
},"compilation.quote_inserted subscribe":function(_5b){
this.show_compile_tools();
},"section.created subscribe":function(_5c){
Compilation.add_to_db(_5c,_5c.id,_5c.parent,"s");
this._render_section(_5c);
},"hide_compile_tools subscribe":function(){
this.hide_compile_tools();
},"info subscribe":function(_5d){
if(window.console){
console.info("Info: "+_5d.msg);
}
this.info(_5d.msg);
},"warning subscribe":function(_5e){
if(window.console){
console.log("Warning: "+_5e.msg);
}
this.warning(_5e.msg);
},"quote.warning subscribe":function(_5f){
if(window.console){
console.log("Warning: "+_5f.msg);
}
this.warning(_5f.msg);
},"facts.warning subscribe":function(_60){
if(window.console){
console.log("Warning: "+_60.msg);
}
this.warning(_60.msg);
},"compilation.warning subscribe":function(_61){
if(window.console){
console.log("Warning: "+_61.msg);
}
this.warning(_61.msg);
},"section.warning subscribe":function(_62){
if(window.console){
console.log("Warning: "+_62.msg);
}
this.warning(_62.msg);
},"report_error subscribe":function(_63){
if(window.console){
console.log("Reporting error to developers/maintainers: "+_63.msg);
}
this.report_error(_63.msg);
},"connection_error subscribe":function(_64){
this.connection_error(_64);
},"quote.connection_error subscribe":function(_65){
this.connection_error(_65);
},"progressbar subscribe":function(_66){
var _67;
_67=this;
_67.block_background(true);
if(window.console){
console.info("Init progressbar");
}
if($("#compile_tools").is(":visible")){
_67.hide_compile_tools();
}
$("#progressbar").progressbar({value:0});
$("#progressbar > div").text(_66.text);
},"progressbar_hide subscribe":function(_68){
if(!$("#progressbar").hasClass("ui-progressbar")){
return;
}
var _69;
_69=this;
if(window.console){
console.info("Closing progressbar");
}
$("#progressbar").progressbar("destroy");
_69.block_background(false);
_69.Class.progress_val=0;
},"progressbar_update subscribe":function(_6a){
if(window.console){
console.count("Progressbar_update subscribe");
}
this.update_progressbar(_6a.val);
},"compilation.progressbar_update subscribe":function(_6b){
if(window.console){
console.count("Progressbar_update subscribe");
}
this.update_progressbar(_6b.val);
},"quote.check_internet_connection subscribe":function(_6c){
this.check_internet_connection(_6c);
}});
;
include.set_path('controllers');
QuotesController=MVC.Controller.extend("quotes",{currently_editing:false,focused_textarea:false},{load:function(){
var _1;
_1=this;
$(document).keydown(function(e){
if(e.keyCode===27){
_1.cancel();
}
});
},dblclick:function(_3){
if(_3.element.has_class("edit_quote")!==undefined){
return;
}
_3.event.kill();
if(this.Class.currently_editing){
this.render_quote(this.Class.currently_editing);
}
this.render_quote({elem:_3.element,view:"edit"});
},"#Update_quote click":function(_4){
var _5;
_5=$(_4.element).parents(".quote");
_4.event.kill();
this._event_resp({elem:_5,action:"update"});
},"#Cancel_quote click":function(_6){
var _7;
_7=$(_6.element).parents(".quote");
_6.event.kill();
this._event_resp({elem:_7,action:"cancel"});
},"#link_text click":function(_8){
_8.event.kill();
$(_8.element).parents(".edit_quote").children("#fix_link").toggle().children("#fix_link_input").focus();
},"#prabhupada_icon click":function(_9){
var _a;
_9.event.kill();
_a=$(_9.element).parents(".quote").children("#text")[0];
if(_a.value.length===_a.selectionStart){
this.publish("warning",{msg:"You must place the cursor in the text where Prabhup&#257;da is the speaker"});
return;
}
this.insert_prabhupada_speaker(_a);
},"#diacritics a click":function(_b){
var _c,_d;
_b.event.kill();
_c=this.Class.focused_textarea;
if(!_c){
this.publish("warning",{msg:"You must place the cursor in the text where you wish to insert the diacritic character"});
return;
}
diacritc=_b.element.innerHTML;
this.insert_diacritic(_c,diacritc);
},"textarea focus":function(_e){
this.Class.focused_textarea=_e.element;
},".undo_quote click":function(_f){
if(_f.element.has_class("edit_quote")!==undefined){
return;
}
var _10;
_f.event.kill();
_10=$(_f.element).parents("div.quote");
this.undo(_10);
},".del_quote click":function(_11){
var _12;
_11.event.kill();
_12=$(_11.element).parents("div.quote");
this.delete_quote(_12);
},".deleted_quote_msg .undo_del_quote click":function(_13){
var _14;
_13.event.kill();
_14=$(_13.element).parents("div.quote");
this.undo(_14);
},".text mouseup":function(_15){
if(window.getSelection().toString()===""){
return;
}
if(_15.element.has_class("edit_quote")!==undefined){
return;
}
_15.event.kill();
var _16;
_16=_15.element;
this.check_selection(_16);
},".tips click":function(_17){
var _18;
_18=_17.element;
_17.event.kill();
this.tips_handler(_18);
},".alert_tip_heading_or_verse click":function(_19){
var id,_1b;
_19.event.kill();
id=_19.element.id;
_1b=$(_19.element).parents("div.quote");
if(id==="heading_select"){
if(_1b.children(".heading").length){
this.tip_alert({elem:_1b,type:"heading"});
}else{
this._do_heading(_1b,"heading_set");
}
}else{
this.process_verse($(_1b).attr("id"));
}
},".alert_tip_heading_set click":function(_1c){
var id,_1e;
_1c.event.kill();
id=_1c.element.id;
_1e=$(_1c.element).parents("div.quote");
if(id==="heading_new"){
Compilation.update_heading({id:_1e.attr("id"),heading:" ",action:"new"});
$("#heading",_1e).focus();
}
if(id==="heading_edit"){
if(this.Class.currently_editing){
this.render_quote(this.Class.currently_editing);
}
if(_1e.children(".heading").length===0){
Compilation.update_heading({id:_1e.attr("id"),heading:" ",action:"new"});
}else{
this.render_quote({elem:_1e,view:"edit"});
}
$("#heading",_1e).focus().select();
}
if(id==="heading_create"){
this.tip_alert({elem:_1e,type:"heading"});
}
if(id==="heading_set"||id==="heading_append"){
this._do_heading(_1e,id);
}
},"#alert_tip input click":function(_1f){
var _20,_21;
_1f.event.kill();
_21=_1f.element;
_20=_21.id;
if(window.console){
console.log(_21+" with "+_20);
}
this._do_section(_21,_20);
},".ui-state-default mouseover":function(_22){
$(_22.element).addClass("ui-state-hover");
},".ui-state-default mouseout":function(_23){
$(_23.element).removeClass("ui-state-hover");
},render_quote:function(_24){
var id,_26,_27;
_26=_24["elem"];
_26.id?id=_26.id:id=$(_26).attr("id");
if($("#"+id).length!==1){
this._append_quote(_26);
}
if(_24["view"]==="view"){
_27="quote";
this.Class.currently_editing=false;
this.Class.focused_textarea=false;
$("#"+id).removeClass("edit_quote");
if(_26.type==="new"){
$("#"+id).addClass("q_new building_quote");
}
}else{
if(_24["view"]==="edit"){
_27="quote_edit";
this.Class.currently_editing={elem:_26,view:"view"};
$("#"+id).addClass("edit_quote");
$(document).unbind("click");
}else{
if(_24["view"]==="delete"){
_27="delete";
$("#"+id).addClass("deleted_quote");
}
}
}
_27==="delete"?this.deleted=Compilation.db.find(id,"d"):this.quote=Compilation.db.find(id,"q");
if(_27==="quote"&&this.quote.section==="Translation and Purport"&&(this.quote.trans===" "||this.quote.purport===" ")){
this.render_quote({elem:_26,view:"edit"});
return;
}
if(_27==="quote"&&this.quote.heading===" "){
this.render_quote({elem:_26,view:"edit"});
return;
}
if(_24["view"]==="edit"){
this.edit_class=this.quote.bad_link?"ui-state-error ui-corner-all":"ui-state-default ui-corner-all";
}
if($("#"+id).length){
this.render({to:id,action:_27});
}else{
if(window.console){
console.error("QuotesController#render_quote: Error rendering quote to non-existing id in dom => "+id);
}
return;
}
$("#"+id+".edit_quote").children("#heading, #trans, #purport, #text").autogrow();
$("#"+id+" .tips[id^=\"set_\"]").not("#set_heading_tip").toggleClass("ui-state-error");
if(_24["view"]==="edit"){
CompileController.link_autocomplete($("#"+id+" #fix_link_input"),false);
if(this.quote.bad_link){
$("#"+id+" #fix_link").show().children("#fix_link_input").focus();
}
}
this.publish("rendered",$("#"+id));
},edit_quote:function(_28){
if(this.Class.currently_editing){
this.render_quote(this.Class.currently_editing);
}
this.render_quote({elem:_28,view:"edit"});
$.scrollTo(_28,"slow",{easing:"easeOutExpo",offset:-50});
},_event_resp:function(_29){
var _2a,id,_2c;
_2c=this;
_2a=$(_29.elem);
id=_2a.attr("id");
action=_29.action;
if(_2a.children("#trans, #purport").length===2&&action==="cancel"){
if(/^\s+$/.test(_2a.children("#trans").val())||/^\s+$/.test(_2a.children("#purport").val())){
action="update";
}
}
if(_2a.children("#heading").length===1&&action==="cancel"){
if(/^\s+$/.test(_2a.children("#heading").val())){
action="update";
}
}
if(action==="update"){
this.update(_2a);
}else{
_2a.fadeOut("fast");
this.render_quote({elem:_2a,view:"view"});
_2a.fadeIn("slow");
if(!_2a.hasClass("building_quote")){
this._transition_hilite(_2a,"#FFFEC6",2);
}
}
},check_selection:function(_2d){
var q=$(_2d).parents(".quote");
if($("#alert_tip",q).is(":visible")){
return;
}
var _2f,_30,_31,_32;
_2f=this;
_30=$.trim(window.getSelection().toString());
if(_30===""){
if($("#alert_tip").is(":visible")){
this.cancel_tip(_31);
}
return;
}
_31=$(_2d).parents("div.quote");
this.tip_alert({elem:_31,type:"heading_or_verse"});
},delete_quote:function(_33){
var id,_35;
_35=this;
id=$(_33).attr("id");
Compilation.del_from_db(id,"q");
},undo:function(_36){
var _37,id;
_37=this;
id=$(_36).attr("id");
$(_36).slideUp("slow",function(){
Compilation.undo(id,"q");
$(this).removeClass("deleted_quote");
_37.render_quote({elem:_36,view:"view"});
$(this).show("slow");
});
},_do_heading:function(_39,_3a){
var _3b,id,_3d;
id=$(_39).attr("id");
_3b=$.trim(window.getSelection().toString());
if(_3b===""){
this.publish("warning",{msg:"You did not select any text for setting the heading"});
return;
}
_3d=_3a.replace("heading_","");
Compilation.update_heading({id:id,heading:_3b,action:_3d});
},process_verse:function(_3e){
var _3f;
_3f=$.trim(window.getSelection().toString()).split(/\r?\n/);
_3f=$.map(_3f,function(_40,i){
if(_40!==""){
return _40;
}
});
Quote.request_verse(_3e,_3f);
this.display_verses();
},_do_section:function(_42,_43){
var _44,id,_46,_47;
_44=$(_42).parents("div.quote");
id=_44.attr("id");
link=_44.attr("link");
if(_43=="trans"){
_47="Translation";
}
if(_43=="purport"){
_47="Purport";
}
if(_43=="trans_purport"){
_47="Translation and Purport";
}
Compilation.update_q_section(id,link,{section:_47});
},tips_handler:function(_48){
var _49,_4a;
_49=this;
_4a=$(_48).parents("div.quote");
if(/section/.test(_48.id)){
this.tip_alert({elem:_4a,type:"section"});
}
if(_48.id==="set_insert_tip"){
this.insert_new_quote(_4a);
}
if(_48.id==="edit_quote_tip"){
this.edit_quote(_4a);
}
if(_48.id==="edit_heading_tip"||_48.id==="set_heading_tip"){
this.tip_alert({elem:_4a,type:"edit_heading"});
}
},tip_alert:function(_4b){
var _4c,_4d;
_4c=this;
_4d=this._find_alert_tip_elem(_4b.elem);
if(!_4d){
return;
}
if(_4b.type==="heading"){
this.message=$.trim(window.getSelection().toString())===""?"Highlight text and:":"Set heading:";
}
if(_4b.type==="edit_heading"){
this.message="Set heading:";
}
this.render({to:_4d,action:_4b.type});
if($(_4d).is(":hidden")){
$(_4d).siblings(".tips").slideUp("fast");
$(_4d).slideDown("fast");
}
$(document).click(function(){
if(window.getSelection().toString()===""){
_4c.cancel_tip(_4b.elem);
}
});
},cancel_tip:function(_4e){
if(!_4e){
if(window.console){
console.log("Error in QuoteController.cancel_tip: missing elem argument");
}
}
if($(_4e).hasClass("edit_quote")||$(_4e).parents(".edit_quote").length){
return;
}
var _4f;
$(document).unbind("click");
_4f=this._find_alert_tip_elem(_4e);
if($(_4f).is(":visible")){
$(_4f).slideUp("slow");
if($(_4f).siblings(".tips")){
$(_4f).siblings(".tips").slideDown("slow");
}
}
},insert_new_quote:function(_50){
Compilation.insert_new_quote($(_50).attr("id"),$(_50).attr("link"),{type:"quote"},"q");
},_find_alert_tip_elem:function(_51){
var p,tip;
if($(_51).hasClass("quote")){
p=_51;
}else{
p=$(_51).parents("div.quote");
}
tip=$("#alert_tip",p).get(0);
return tip;
},bind_escape:function(_54){
$(document).keydown(function(e){
if(e.keyCode===27){
_54();
$(this).unbind("keydown");
}
});
},_append_quote:function(_56){
var _57;
this.quote=_56;
_57=this.quote.parent?this.quote.parent.replace(/[.,()]/g,""):"compilation";
if(window.console){
console.info("QuotesController#_append_quote: appending "+_56.id+" to "+_57);
}
if($("#"+_57).length){
this.render({bottom:_57,action:"new_quote"});
}else{
if(window.console){
console.error("QuotesController#_append_quote: error rendering "+_56.id+" to "+_57);
}
this.publish("report_error",{msg:"Error rendering "+_56.id+" to "+_57});
return;
}
},hi_terms:function(_58){
var _59;
_59=Facts.db.terms;
if(!_59){
if(window.console){
console.log("No terminologies to highlight in hi_terms!");
return;
}
}
$.each(_59,function(i,_5b){
if(_5b===""){
return true;
}
$(_58).highlight_sanskrit(_5b);
});
},cancel:function(){
var _5c;
_5c=this;
if($(".edit_quote").length){
$(".edit_quote #Cancel_quote").click();
}
if($("#alert_tip").is(":visible")){
$("#alert_tip:visible").each(function(){
_5c.cancel_tip($(this).parents(".quote"));
});
}
},update:function(_5d){
var id,_5f,_60;
id=$(_5d).attr("id");
_5f={};
$.each(["heading","trans","purport"],function(i,_62){
_5f[_62]=_63(_62);
});
function _63(_64){
if($(_5d).children("#"+_64).length){
var val=$.trim($(_5d).children("#"+_64).val());
return val!==""?val:false;
}else{
return false;
}
};
if($(_5d).children("#text").length){
_5f["text"]=$(_5d).children("#text").val();
}
_60=$("#fix_link_input",_5d);
if($(_60).is(":visible")&&$(_60).val()!==""){
var _66;
_66=$("#fix_link_input",_5d).val();
$(_5d).attr("link",_66).removeAttr("link_text").removeAttr("parent").removeAttr("book");
if(window.console){
console.info("QuotesController#update: fixing link to: "+_66);
}
this.publish("changed_link",{elem:_5d});
return;
}
Compilation.update_db(id,_5f,"q");
return;
},insert_prabhupada_speaker:function(_67){
if(_67.selectionStart||_67.selectionStart=="0"){
var _68=_67.selectionStart;
var _69=_67.selectionEnd;
_67.value=_67.value.substring(0,_68)+"Prabhup&#257;da: "+_67.value.substring(_69,_67.value.length);
}
},insert_diacritic:function(_6a,_6b){
if(_6a.selectionStart||_6a.selectionStart=="0"){
var _6c=_6a.selectionStart;
var _6d=_6a.selectionEnd;
_6a.value=_6a.value.substring(0,_6c)+_6b+_6a.value.substring(_6d,_6a.value.length);
_6a.setSelectionRange(_6d+1,_6d+1);
_6a.focus();
}
},_transition_hilite:function(_6e,_6f,_70){
var w,q,_73,off;
$(_6e).css("background-color",_6f);
setTimeout(function(){
$(_6e).css("background-color","");
},_70+"000");
w=window.innerHeight;
q=$(_6e).height();
_73=w-q;
off=_73<=0?-50:-_73/2;
$.scrollTo($(_6e),"fast",{easing:"easeOutElastic",offset:off});
},display_verses:function(){
var _75=this;
if($(".verse").length){
function _76(){
Compilation.process_verse({quote:$(this).attr("quote"),verse:$(this).attr("verse"),resp:true});
$(this).dialog("close");
};
function _77(){
$(this).dialog("close");
};
$(".verse").dialog({dialogClass:"verse_dialog",buttons:{"Yes":_76,"No":_77}});
}
},"rendered subscribe":function(_78){
var _79;
_79=this;
if($(_78).hasClass("deleted_quote")||$(_78).hasClass("edit_quote")){
return;
}
_7a(_78);
_7b(_78);
_7c(_78);
_7d(_78);
this.hi_terms($(_78).children(".text"));
function _7a(_7e){
$(".text",_7e).each(function(){
var _7f,_80;
_7f=$(this).html();
_7f=_7f.replace(/^:(.+?)$/mg,"<dd>$1</dd>");
_80=_7f.match(/(<dd>.+?<\/dd>\n?)+/g);
if(_80){
$.each(_80,function(i,_82){
var re=new RegExp("(.+?\\n+)"+RegExp.escape(_82),"g");
_7f=_7f.replace(re,function(all,_85){
return _85.indexOf("<dl class=\"verse_in_q\">")>-1?all:_85+"<dl class=\"verse_in_q\">\n"+_82+"</dl>\n";
});
});
}
$(this).html(_7f);
});
};
function _7b(_86){
$(".text",_86).each(function(){
if($(this).html().indexOf("[[")>-1){
var t;
t=$(this).html();
t=t.replace(/\[\[(?:Vanisource:)?.+?\|(.+?)\]\]/g,"<a class=\"cited_link\" href=\"http://vanisource.org/wiki/$1\"><b>$1</b></a>");
$(this).html(t);
}
});
};
function _7c(_88){
$(".text",_88).each(function(){
var _89;
_89=$(this).html();
_89=_89.replace(/^.+$/mg,_8a);
function _8a(all){
if(/<\/?d(d|l)/.test(all)){
return all;
}else{
return "<p>"+all+"</p>";
}
};
$(this).html(_89);
});
};
function _7d(_8c){
var _8d,_8e,t,a,b,c;
_8e=false;
$(_8c).each(function(){
_8d=$(this).attr("book");
if(_8d!=="Con"&&_8d!=="Lec"){
_8e=true;
}else{
_8e=true;
t=$(this).children("div.text:first").html();
if(/^.+?(?:<br|\n|$)/.test(t)){
a=t.match(/^.+?(?:<br|\n|$)/)[0];
}
if(a&&a.indexOf(":")>-1){
b=a.substring(0,a.indexOf(":"));
}
if(b){
c=b.split(" ");
}
if(a&&b&&c&&c.length<4){
_8e=false;
}
}
if(_8e){
$(this).children("div.text:first").css({display:"inline"});
}
_8e=false;
$(this).children("div.text").children(":first").each(function(){
if($(this).is("p")){
$(this).css("display","inline");
}
});
});
};
},"compilation.updated subscribe":function(_93){
var _94,id,_96;
_94=this;
id=_93.id;
_96=$("#"+id);
_94.render_quote({elem:_96,view:"view"});
if(!_96.hasClass("building_quote")){
_96.addClass("q_updated").removeClass("q_new");
_94._transition_hilite($("#"+id),"#DCBFF1",5);
}
},"compilation.deleted subscribe":function(_97){
var _98,_99;
_98=this;
_99="#"+_97.id;
$(_99).slideUp("slow",function(){
_98.render_quote({elem:_99,view:"delete"});
$(this).fadeIn("slow");
});
},"compilation.quote_inserted subscribe":function(_9a){
var _9b,_9c;
_9b=this;
_9c=$("#"+_9a.id);
_9c.fadeOut("fast",function(){
_9b.render_quote({elem:_9c,view:"view"});
$(this).removeClass("building_quote").fadeIn("medium");
});
this._transition_hilite(_9c,"#EEF7D9",5);
},"compilation.new_quote subscribe":function(_9d){
var _9e=this;
this.render_quote({elem:_9d.elem,id:_9d.elem.id,view:"view"});
if(!CompileController.loading){
$("#"+_9d.elem.id).parents(".sub_section").children(".quote").tsort({attr:"index"});
$.scrollTo("#"+_9d.elem.id+".q_new","slow",{easing:"easeOutExpo",offset:-50,onAfter:_9e.display_verses});
}
},"compilation.section_checked subscribe":function(_9f){
var id,_a1;
id=_9f.id;
_a1=_9f.result;
if(_a1==="bad"){
$("#"+id).addClass("q_bad_section");
}else{
if($("#"+id).hasClass("q_bad_section")){
$("#"+id).removeClass("q_bad_section");
}
}
},"quote.created subscribe":function(_a2){
Compilation.add_to_db(_a2,_a2.id,_a2.parent,"q");
},"quote.verse_request subscribe":function(_a3){
this.verse=_a3.verse;
this.id=_a3.id;
this.quote=_a3.quote;
this.render({bottom:"verses",action:"verse"});
},"quote.found_reference subscribe":function(_a4){
_a4.text=CompileFormController.temp_quote;
q=new Quote(_a4);
},"changed_link subscribe":function(_a5){
if(window.console){
console.info("In QuotesController.changed_link observer");
}
var _a6=_a5.elem;
this.render_quote({elem:_a6,view:"view"});
Compilation.del_from_db($(_a6).attr("id"),"q");
q=new Quote(_a6);
}});
;
include.set_path('controllers');
CompileFormController=MVC.Controller.extend("compile_form",{last_quote_value:"",interID:"",temp_quote:""},{load:function(){
CompileController.link_autocomplete($("input#link"),true);
$("#ref_lookup_table").dialog({autoOpen:false,title:"Vanisource Reference lookup",width:532,maxHeight:700,maxWidth:800}).children("table").each(function(){
$("tr:first",this).css({background:"#603F9D",color:"#C3C9F2","font-weight":"bold"});
});
},"textarea keyup":function(_1){
_1.event.kill();
this.process_new_quote();
},"textarea change":function(_2){
_2.event.kill();
this.process_new_quote();
},"#submit_quote click":function(_3){
_3.event.kill();
if(this.check_uninserted_quotes()){
this.process_new_quote();
}
},"#clear_form click":function(_4){
_4.event.kill();
var p=$("#compile_form");
$("textarea",p).val("");
if($("#ref_lookup").is(":visible")){
$("#ref_lookup").hide();
$("#ref_lookup #ref").html("");
$("#ref_lookup input#link").val("");
}
},"#ref_lookup_table_open click":function(_6){
if(window.console){
console.info("CompileformController#ref_lookup_table_open was clicked");
}
_6.event.kill();
if($("#ref_lookup_table").is(":empty")){
this.render({to:"ref_lookup_table",action:"ref_lookup_table"});
}
$("#ref_lookup_table").dialog("open");
},process_new_quote:function(){
var _7,_8,rl,_a;
_7=this;
_8=$("#compile_tools > #compile_form > textarea")[0];
rl=$("#ref_lookup");
_a={};
if(rl.not(":hidden")){
if(window.console){
console.log("CompileformController In process_new_quote!");
}
_a["ref"]=$("input#link",rl).val();
$("#clear_form").click();
}
_a["text"]=_8.value;
if(this.action_name!=="#submit_quote click"&&!_a["ref"]&&!this.check_text(_8.value)){
return;
}
this.submit_quote(_a);
},check_text:function(_b){
_b=$.trim(_b);
if(_b===""||_b===this.Class.last_quote_value||!this.check_uninserted_quotes()){
return false;
}
this.Class.last_quote_value=_b;
return true;
},check_uninserted_quotes:function(){
if($("div.building_quote").not(".deleted_quote").length!==0){
this.publish("hide_compile_tools");
this.publish("warning",{msg:"You must Insert the new quote to continue compiling!"});
$.scrollTo(".building_quote","slow",{easing:"easeOutExpo",offset:-50});
return false;
}
return true;
},submit_quote:function(_c){
var re,_e,_f,ref,_11,_12;
re=new RegExp(">>> Ref. VedaBase => (.+)");
_e=_c["text"];
if(re.test(_e)){
_12={};
_11=$.trim(_e.replace(re,""));
this.Class.temp_quote=_11;
_12["ref"]=_c["ref"]?_c["ref"]:$.trim(re.exec(_e)[1]);
_12["ref"]=_12["ref"].replace(/\s+/g," ");
_c["ref"]?_12["type"]="title":"";
Quote.find_reference(_12);
}else{
this.publish("warning",{msg:"No Vedabase Reference in pasted quote!\nPerhaps you forgot to use the \"Copy with Reference\" button in Vedabase"});
return;
}
},"quote.found_reference subscribe":function(){
if($("#compile_form textarea").length){
$("#compile_form textarea").val("");
}
},"quote.not_found_reference subscribe":function(_13){
if($("#compile_tools #ref_lookup").is(":hidden")){
$("#compile_tools #ref_lookup #ref").html("Search for link for this quote and click submit.<br/>Orig ref. was: <b>"+_13.ref+"</b>");
$("#compile_tools #ref_lookup").show();
}
},"quote.title_req_failed subscribe":function(_14){
this.publish("warning",{msg:_14.msg});
},"quote.ajax subscribe":function(_15){
if(_15.type==="start"){
$("#ajax").show();
}
if(_15.type==="end"){
$("#ajax").hide();
}
}});
;
include.set_path('controllers');
FactsController=MVC.Controller.extend("facts",{},{load:function(){
CompileController.category_autocomplete($("#facts > #categories #add_categories > input"),true);
},".facts_tools .add click":function(_1){
this.add(_1);
},".facts_tools input keyup":function(_2){
var _3=this;
_2.event.kill();
if(_2.event.keyCode===13){
_3.add(_2);
}
},"#copy_terms .copy click":function(_4){
var _5,_6;
_5=this;
_4.event.kill();
_6=Facts.get_all_terms();
if(_6===""){
this.publish("warning",{msg:"You have no expressions to copy"});
return;
}
if(window.console){
console.log(_6);
}
$("#copy_terms_man").val(_6).show().select();
},add:function(_7){
var _8,_9;
_8=$(_7.element).parents(".fact").attr("id");
_9=$(_7.element).parent().children("input").val().replace(/"/g,"");
$(_7.element).parent().children("input").val("");
_8==="terms"&&/\|/.test(_9)?_a(_9):Facts.add(_8,_9);
function _a(_b){
var _c;
_c=_b.split("|");
$.each(_c,function(i,t){
Facts.add("terms",t);
});
};
},update:function(_f,_10){
var _11,_12;
_11=$(_f).hasClass("fact")?_f.id:$(_f).parents(".fact").attr("id");
_12=_f.id.match(/\d+/);
return Facts.update(_11,_12,_10);
},append:function(_13){
var css,_15;
_15=_13.fact+"_list";
this.id=_13.fact+"_"+_13.index;
this.f_class=_13.fact;
this.value=Facts.get(_13.fact,_13.index);
if($("#"+_15).length===0){
if(window.console){
console.error("Error in FactsController.append: "+_15+" does not exist in dom");
}
return;
}
this.render({bottom:_15,action:"append"});
css=_13.index%2?{background:"#DEE2F9"}:{background:"#D4D9F9"};
$("#"+this.id).css(css);
this.editable(this.id);
if(_13.fact==="terms"){
this.hilite(this.value);
}
},hilite:function(_16){
if(_16===""){
return;
}
$(".quote .text").highlight_sanskrit(_16);
},un_hilite:function(_17){
if(!_17){
if(window.console){
console.log("term missing in FactsController.un_hilite "+_17);
}
return;
}
var v,re;
re=new RegExp("<span class=\"highlight_terms\">"+_17+"</span>","g");
$(".quote .text").each(function(){
v=$(this).html().replace(re,_17);
$(this).html(v);
});
},editable:function(id){
var _1b,_1c;
_1c=this;
_1b=id?"#"+id:".term, #goal, .categories, #notes";
$(_1b).editable(function(_1d,_1e){
return _1c.update(this,_1d);
},{event:"dblclick",type:"text",style:"border: solid 0px indigo;"});
},_render_facts:function(_1f){
var _20,_21;
_20=this;
this.facts=_1f;
$("#facts").length?_21={to:"facts",action:"facts"}:_21={bottom:"compile_tools",action:"facts"};
this.render(_21);
$(document).ready(function(){
_20.attach_events();
});
},"compilation.built subscribe":function(){
this.run_checks();
},run_checks:function(){
Facts.check_totals();
},attach_events:function(){
var _22;
_22=this;
$("#facts").accordion({autoHeight:false,collapsible:true,active:false});
this.color_list($(".term, .categories, .compiler, #complete > div, #totals_by_section > div"));
$.fn.check=function(){
return this.each(function(){
this.checked=true;
});
};
$.fn.uncheck=function(){
return this.each(function(){
this.checked=false;
});
};
$.each(Facts.db.complete,function(){
$("#complete_"+this).check();
});
$(".complete_checks").click(function(){
_22.checkbox(this);
if($(".complete_checks:checked").length===7){
$("#complete_ALL").check().click().check();
return;
}
if(this.id!=="complete_ALL"){
$("#complete_ALL").uncheck();
$("#goal").prev().show();
}else{
$(".complete_checks").not("#complete_ALL").uncheck();
this.checked===true?$("#goal").prev().hide():$("#goal").prev().show();
}
});
if($("#complete_ALL").is(":checked")){
$("#facts #goal").prev().hide();
}
this.editable();
},color_list:function(_23){
_23.filter(":even").css({background:"#D4D9F9"}).end().filter(":odd").css({background:"#DEE2F9"});
},checkbox:function(_24){
var _25,_26;
_25=_24.id.replace(/complete_/,"");
_26=_24.checked?"add":"del";
Facts.complete(_25,_26);
},update_t_b_sections_view:function(){
this.totals=Facts.db.totals_by_section;
this.render({to:"totals_by_section",action:"totals"});
},update_totals_view:function(){
this.total=Facts.db.total;
this.render({to:"total",action:"total"});
},"facts.created subscribe":function(_27){
var _28;
_28=this;
this._render_facts(_27.facts);
$("#categories_list").sortable({placeholder:"facts_sortable_placeholder",axis:"y",cursor:"move",forcePlaceholderSize:true,items:"li",opacity:0.7,update:function(){
_28.color_list($(".categories"));
}});
$("#categories_list").disableSelection();
},"facts.added subscribe":function(_29){
this.append(_29);
},"facts.deleted subscribe":function(_2a){
var _2b;
_2b="#"+_2a.fact+"_"+_2a.index;
if(_2a.fact==="terms"){
this.un_hilite(_2a.old);
}
$(_2b).remove();
},"facts.totals_updated subscribe":function(_2c){
this.update_t_b_sections_view();
this.update_totals_view();
},"facts.updated_term subscribe":function(_2d){
this.hilite(_2d.term);
},"quote.created subscribe":function(_2e){
Facts.update_totals(_2e);
},"compilation.deleted subscribe":function(_2f){
Facts.update_totals(_2f);
},"compilation.undone subscribe":function(_30){
Facts.update_totals(_30);
}});
;
include.end_of_production();