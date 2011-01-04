include.set_path('apps');
include.resources("jquery-1.4.4.min","jquery-ui/js/jquery-ui.min.js","jquery.jlthemeswitcher","jquery.tinysort.min","jquery.autogrow","jquery.easing","jquery.scrollTo","jquery.jeditable","jquery.hoverIntent","BaltoUni.min","UniToASCII","jquery.highlight_sanskrit","RegExp.escape");
include.engines();
include.plugins("controller","controller/hover","controller/view","view","view/helpers","model");
include(function(){
include.models("compilation","quote","section","compile_form","facts");
include.controllers("compilation","quotes","compile_form","facts");
include.views();
});
include.css("skins/vaniquotes/jquery-ui","compilation","quotes","edit_quote","deleted_quote","compile_form","facts");
;
include.set_path('resources');
(function(E,B){
function ka(a,b,d){
if(d===B&&a.nodeType===1){
d=a.getAttribute("data-"+b);
if(typeof d==="string"){
try{
d=d==="true"?true:d==="false"?false:d==="null"?null:!c.isNaN(d)?parseFloat(d):Ja.test(d)?c.parseJSON(d):d;
}
catch(e){
}
c.data(a,b,d);
}else{
d=B;
}
}
return d;
};
function U(){
return false;
};
function ca(){
return true;
};
function la(a,b,d){
d[0].type=a;
return c.event.handle.apply(b,d);
};
function Ka(a){
var b,d,e,f,h,l,k,o,x,r,A,C=[];
f=[];
h=c.data(this,this.nodeType?"events":"__events__");
if(typeof h==="function"){
h=h.events;
}
if(!(a.liveFired===this||!h||!h.live||a.button&&a.type==="click")){
if(a.namespace){
A=RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)");
}
a.liveFired=this;
var J=h.live.slice(0);
for(k=0;k<J.length;k++){
h=J[k];
h.origType.replace(X,"")===a.type?f.push(h.selector):J.splice(k--,1);
}
f=c(a.target).closest(f,a.currentTarget);
o=0;
for(x=f.length;o<x;o++){
r=f[o];
for(k=0;k<J.length;k++){
h=J[k];
if(r.selector===h.selector&&(!A||A.test(h.namespace))){
l=r.elem;
e=null;
if(h.preType==="mouseenter"||h.preType==="mouseleave"){
a.type=h.preType;
e=c(a.relatedTarget).closest(h.selector)[0];
}
if(!e||e!==l){
C.push({elem:l,handleObj:h,level:r.level});
}
}
}
}
o=0;
for(x=C.length;o<x;o++){
f=C[o];
if(d&&f.level>d){
break;
}
a.currentTarget=f.elem;
a.data=f.handleObj.data;
a.handleObj=f.handleObj;
A=f.handleObj.origHandler.apply(f.elem,arguments);
if(A===false||a.isPropagationStopped()){
d=f.level;
if(A===false){
b=false;
}
if(a.isImmediatePropagationStopped()){
break;
}
}
}
return b;
}
};
function Y(a,b){
return (a&&a!=="*"?a+".":"")+b.replace(La,"`").replace(Ma,"&");
};
function ma(a,b,d){
if(c.isFunction(b)){
return c.grep(a,function(f,h){
return !!b.call(f,h,f)===d;
});
}else{
if(b.nodeType){
return c.grep(a,function(f){
return f===b===d;
});
}else{
if(typeof b==="string"){
var e=c.grep(a,function(f){
return f.nodeType===1;
});
if(Na.test(b)){
return c.filter(b,e,!d);
}else{
b=c.filter(b,e);
}
}
}
}
return c.grep(a,function(f){
return c.inArray(f,b)>=0===d;
});
};
function na(a,b){
var d=0;
b.each(function(){
if(this.nodeName===(a[d]&&a[d].nodeName)){
var e=c.data(a[d++]),f=c.data(this,e);
if(e=e&&e.events){
delete f.handle;
f.events={};
for(var h in e){
for(var l in e[h]){
c.event.add(this,h,e[h][l],e[h][l].data);
}
}
}
}
});
};
function Oa(a,b){
b.src?c.ajax({url:b.src,async:false,dataType:"script"}):c.globalEval(b.text||b.textContent||b.innerHTML||"");
b.parentNode&&b.parentNode.removeChild(b);
};
function oa(a,b,d){
var e=b==="width"?a.offsetWidth:a.offsetHeight;
if(d==="border"){
return e;
}
c.each(b==="width"?Pa:Qa,function(){
d||(e-=parseFloat(c.css(a,"padding"+this))||0);
if(d==="margin"){
e+=parseFloat(c.css(a,"margin"+this))||0;
}else{
e-=parseFloat(c.css(a,"border"+this+"Width"))||0;
}
});
return e;
};
function da(a,b,d,e){
if(c.isArray(b)&&b.length){
c.each(b,function(f,h){
d||Ra.test(a)?e(a,h):da(a+"["+(typeof h==="object"||c.isArray(h)?f:"")+"]",h,d,e);
});
}else{
if(!d&&b!=null&&typeof b==="object"){
c.isEmptyObject(b)?e(a,""):c.each(b,function(f,h){
da(a+"["+f+"]",h,d,e);
});
}else{
e(a,b);
}
}
};
function S(a,b){
var d={};
c.each(pa.concat.apply([],pa.slice(0,b)),function(){
d[this]=a;
});
return d;
};
function qa(a){
if(!ea[a]){
var b=c("<"+a+">").appendTo("body"),d=b.css("display");
b.remove();
if(d==="none"||d===""){
d="block";
}
ea[a]=d;
}
return ea[a];
};
function fa(a){
return c.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:false;
};
var t=E.document,c=function(){
function a(){
if(!b.isReady){
try{
t.documentElement.doScroll("left");
}
catch(j){
setTimeout(a,1);
return;
}
b.ready();
}
};
var b=function(j,s){
return new b.fn.init(j,s);
},d=E.jQuery,e=E.$,f,h=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,l=/\S/,k=/^\s+/,o=/\s+$/,x=/\W/,r=/\d/,A=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,C=/^[\],:{}\s]*$/,J=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,w=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,I=/(?:^|:|,)(?:\s*\[)+/g,L=/(webkit)[ \/]([\w.]+)/,g=/(opera)(?:.*version)?[ \/]([\w.]+)/,i=/(msie) ([\w.]+)/,n=/(mozilla)(?:.*? rv:([\w.]+))?/,m=navigator.userAgent,p=false,q=[],u,y=Object.prototype.toString,F=Object.prototype.hasOwnProperty,M=Array.prototype.push,N=Array.prototype.slice,O=String.prototype.trim,D=Array.prototype.indexOf,R={};
b.fn=b.prototype={init:function(j,s){
var v,z,H;
if(!j){
return this;
}
if(j.nodeType){
this.context=this[0]=j;
this.length=1;
return this;
}
if(j==="body"&&!s&&t.body){
this.context=t;
this[0]=t.body;
this.selector="body";
this.length=1;
return this;
}
if(typeof j==="string"){
if((v=h.exec(j))&&(v[1]||!s)){
if(v[1]){
H=s?s.ownerDocument||s:t;
if(z=A.exec(j)){
if(b.isPlainObject(s)){
j=[t.createElement(z[1])];
b.fn.attr.call(j,s,true);
}else{
j=[H.createElement(z[1])];
}
}else{
z=b.buildFragment([v[1]],[H]);
j=(z.cacheable?z.fragment.cloneNode(true):z.fragment).childNodes;
}
return b.merge(this,j);
}else{
if((z=t.getElementById(v[2]))&&z.parentNode){
if(z.id!==v[2]){
return f.find(j);
}
this.length=1;
this[0]=z;
}
this.context=t;
this.selector=j;
return this;
}
}else{
if(!s&&!x.test(j)){
this.selector=j;
this.context=t;
j=t.getElementsByTagName(j);
return b.merge(this,j);
}else{
return !s||s.jquery?(s||f).find(j):b(s).find(j);
}
}
}else{
if(b.isFunction(j)){
return f.ready(j);
}
}
if(j.selector!==B){
this.selector=j.selector;
this.context=j.context;
}
return b.makeArray(j,this);
},selector:"",jquery:"1.4.4",length:0,size:function(){
return this.length;
},toArray:function(){
return N.call(this,0);
},get:function(j){
return j==null?this.toArray():j<0?this.slice(j)[0]:this[j];
},pushStack:function(j,s,v){
var z=b();
b.isArray(j)?M.apply(z,j):b.merge(z,j);
z.prevObject=this;
z.context=this.context;
if(s==="find"){
z.selector=this.selector+(this.selector?" ":"")+v;
}else{
if(s){
z.selector=this.selector+"."+s+"("+v+")";
}
}
return z;
},each:function(j,s){
return b.each(this,j,s);
},ready:function(j){
b.bindReady();
if(b.isReady){
j.call(t,b);
}else{
q&&q.push(j);
}
return this;
},eq:function(j){
return j===-1?this.slice(j):this.slice(j,+j+1);
},first:function(){
return this.eq(0);
},last:function(){
return this.eq(-1);
},slice:function(){
return this.pushStack(N.apply(this,arguments),"slice",N.call(arguments).join(","));
},map:function(j){
return this.pushStack(b.map(this,function(s,v){
return j.call(s,v,s);
}));
},end:function(){
return this.prevObject||b(null);
},push:M,sort:[].sort,splice:[].splice};
b.fn.init.prototype=b.fn;
b.extend=b.fn.extend=function(){
var j,s,v,z,H,G=arguments[0]||{},K=1,Q=arguments.length,ga=false;
if(typeof G==="boolean"){
ga=G;
G=arguments[1]||{};
K=2;
}
if(typeof G!=="object"&&!b.isFunction(G)){
G={};
}
if(Q===K){
G=this;
--K;
}
for(;K<Q;K++){
if((j=arguments[K])!=null){
for(s in j){
v=G[s];
z=j[s];
if(G!==z){
if(ga&&z&&(b.isPlainObject(z)||(H=b.isArray(z)))){
if(H){
H=false;
v=v&&b.isArray(v)?v:[];
}else{
v=v&&b.isPlainObject(v)?v:{};
}
G[s]=b.extend(ga,v,z);
}else{
if(z!==B){
G[s]=z;
}
}
}
}
}
}
return G;
};
b.extend({noConflict:function(j){
E.$=e;
if(j){
E.jQuery=d;
}
return b;
},isReady:false,readyWait:1,ready:function(j){
j===true&&b.readyWait--;
if(!b.readyWait||j!==true&&!b.isReady){
if(!t.body){
return setTimeout(b.ready,1);
}
b.isReady=true;
if(!(j!==true&&--b.readyWait>0)){
if(q){
var s=0,v=q;
for(q=null;j=v[s++];){
j.call(t,b);
}
b.fn.trigger&&b(t).trigger("ready").unbind("ready");
}
}
}
},bindReady:function(){
if(!p){
p=true;
if(t.readyState==="complete"){
return setTimeout(b.ready,1);
}
if(t.addEventListener){
t.addEventListener("DOMContentLoaded",u,false);
E.addEventListener("load",b.ready,false);
}else{
if(t.attachEvent){
t.attachEvent("onreadystatechange",u);
E.attachEvent("onload",b.ready);
var j=false;
try{
j=E.frameElement==null;
}
catch(s){
}
t.documentElement.doScroll&&j&&a();
}
}
}
},isFunction:function(j){
return b.type(j)==="function";
},isArray:Array.isArray||function(j){
return b.type(j)==="array";
},isWindow:function(j){
return j&&typeof j==="object"&&"setInterval" in j;
},isNaN:function(j){
return j==null||!r.test(j)||isNaN(j);
},type:function(j){
return j==null?String(j):R[y.call(j)]||"object";
},isPlainObject:function(j){
if(!j||b.type(j)!=="object"||j.nodeType||b.isWindow(j)){
return false;
}
if(j.constructor&&!F.call(j,"constructor")&&!F.call(j.constructor.prototype,"isPrototypeOf")){
return false;
}
for(var s in j){
}
return s===B||F.call(j,s);
},isEmptyObject:function(j){
for(var s in j){
return false;
}
return true;
},error:function(j){
throw j;
},parseJSON:function(j){
if(typeof j!=="string"||!j){
return null;
}
j=b.trim(j);
if(C.test(j.replace(J,"@").replace(w,"]").replace(I,""))){
return E.JSON&&E.JSON.parse?E.JSON.parse(j):(new Function("return "+j))();
}else{
b.error("Invalid JSON: "+j);
}
},noop:function(){
},globalEval:function(j){
if(j&&l.test(j)){
var s=t.getElementsByTagName("head")[0]||t.documentElement,v=t.createElement("script");
v.type="text/javascript";
if(b.support.scriptEval){
v.appendChild(t.createTextNode(j));
}else{
v.text=j;
}
s.insertBefore(v,s.firstChild);
s.removeChild(v);
}
},nodeName:function(j,s){
return j.nodeName&&j.nodeName.toUpperCase()===s.toUpperCase();
},each:function(j,s,v){
var z,H=0,G=j.length,K=G===B||b.isFunction(j);
if(v){
if(K){
for(z in j){
if(s.apply(j[z],v)===false){
break;
}
}
}else{
for(;H<G;){
if(s.apply(j[H++],v)===false){
break;
}
}
}
}else{
if(K){
for(z in j){
if(s.call(j[z],z,j[z])===false){
break;
}
}
}else{
for(v=j[0];H<G&&s.call(v,H,v)!==false;v=j[++H]){
}
}
}
return j;
},trim:O?function(j){
return j==null?"":O.call(j);
}:function(j){
return j==null?"":j.toString().replace(k,"").replace(o,"");
},makeArray:function(j,s){
var v=s||[];
if(j!=null){
var z=b.type(j);
j.length==null||z==="string"||z==="function"||z==="regexp"||b.isWindow(j)?M.call(v,j):b.merge(v,j);
}
return v;
},inArray:function(j,s){
if(s.indexOf){
return s.indexOf(j);
}
for(var v=0,z=s.length;v<z;v++){
if(s[v]===j){
return v;
}
}
return -1;
},merge:function(j,s){
var v=j.length,z=0;
if(typeof s.length==="number"){
for(var H=s.length;z<H;z++){
j[v++]=s[z];
}
}else{
for(;s[z]!==B;){
j[v++]=s[z++];
}
}
j.length=v;
return j;
},grep:function(j,s,v){
var z=[],H;
v=!!v;
for(var G=0,K=j.length;G<K;G++){
H=!!s(j[G],G);
v!==H&&z.push(j[G]);
}
return z;
},map:function(j,s,v){
for(var z=[],H,G=0,K=j.length;G<K;G++){
H=s(j[G],G,v);
if(H!=null){
z[z.length]=H;
}
}
return z.concat.apply([],z);
},guid:1,proxy:function(j,s,v){
if(arguments.length===2){
if(typeof s==="string"){
v=j;
j=v[s];
s=B;
}else{
if(s&&!b.isFunction(s)){
v=s;
s=B;
}
}
}
if(!s&&j){
s=function(){
return j.apply(v||this,arguments);
};
}
if(j){
s.guid=j.guid=j.guid||s.guid||b.guid++;
}
return s;
},access:function(j,s,v,z,H,G){
var K=j.length;
if(typeof s==="object"){
for(var Q in s){
b.access(j,Q,s[Q],z,H,v);
}
return j;
}
if(v!==B){
z=!G&&z&&b.isFunction(v);
for(Q=0;Q<K;Q++){
H(j[Q],s,z?v.call(j[Q],Q,H(j[Q],s)):v,G);
}
return j;
}
return K?H(j[0],s):B;
},now:function(){
return (new Date).getTime();
},uaMatch:function(j){
j=j.toLowerCase();
j=L.exec(j)||g.exec(j)||i.exec(j)||j.indexOf("compatible")<0&&n.exec(j)||[];
return {browser:j[1]||"",version:j[2]||"0"};
},browser:{}});
b.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(j,s){
R["[object "+s+"]"]=s.toLowerCase();
});
m=b.uaMatch(m);
if(m.browser){
b.browser[m.browser]=true;
b.browser.version=m.version;
}
if(b.browser.webkit){
b.browser.safari=true;
}
if(D){
b.inArray=function(j,s){
return D.call(s,j);
};
}
if(!/\s/.test("\xa0")){
k=/^[\s\xA0]+/;
o=/[\s\xA0]+$/;
}
f=b(t);
if(t.addEventListener){
u=function(){
t.removeEventListener("DOMContentLoaded",u,false);
b.ready();
};
}else{
if(t.attachEvent){
u=function(){
if(t.readyState==="complete"){
t.detachEvent("onreadystatechange",u);
b.ready();
}
};
}
}
return E.jQuery=E.$=b;
}();
(function(){
c.support={};
var a=t.documentElement,b=t.createElement("script"),d=t.createElement("div"),e="script"+c.now();
d.style.display="none";
d.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
var f=d.getElementsByTagName("*"),h=d.getElementsByTagName("a")[0],l=t.createElement("select"),k=l.appendChild(t.createElement("option"));
if(!(!f||!f.length||!h)){
c.support={leadingWhitespace:d.firstChild.nodeType===3,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/red/.test(h.getAttribute("style")),hrefNormalized:h.getAttribute("href")==="/a",opacity:/^0.55$/.test(h.style.opacity),cssFloat:!!h.style.cssFloat,checkOn:d.getElementsByTagName("input")[0].value==="on",optSelected:k.selected,deleteExpando:true,optDisabled:false,checkClone:false,scriptEval:false,noCloneEvent:true,boxModel:null,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableHiddenOffsets:true};
l.disabled=true;
c.support.optDisabled=!k.disabled;
b.type="text/javascript";
try{
b.appendChild(t.createTextNode("window."+e+"=1;"));
}
catch(o){
}
a.insertBefore(b,a.firstChild);
if(E[e]){
c.support.scriptEval=true;
delete E[e];
}
try{
delete b.test;
}
catch(x){
c.support.deleteExpando=false;
}
a.removeChild(b);
if(d.attachEvent&&d.fireEvent){
d.attachEvent("onclick",function r(){
c.support.noCloneEvent=false;
d.detachEvent("onclick",r);
});
d.cloneNode(true).fireEvent("onclick");
}
d=t.createElement("div");
d.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";
a=t.createDocumentFragment();
a.appendChild(d.firstChild);
c.support.checkClone=a.cloneNode(true).cloneNode(true).lastChild.checked;
c(function(){
var r=t.createElement("div");
r.style.width=r.style.paddingLeft="1px";
t.body.appendChild(r);
c.boxModel=c.support.boxModel=r.offsetWidth===2;
if("zoom" in r.style){
r.style.display="inline";
r.style.zoom=1;
c.support.inlineBlockNeedsLayout=r.offsetWidth===2;
r.style.display="";
r.innerHTML="<div style='width:4px;'></div>";
c.support.shrinkWrapBlocks=r.offsetWidth!==2;
}
r.innerHTML="<table><tr><td style='padding:0;display:none'></td><td>t</td></tr></table>";
var A=r.getElementsByTagName("td");
c.support.reliableHiddenOffsets=A[0].offsetHeight===0;
A[0].style.display="";
A[1].style.display="none";
c.support.reliableHiddenOffsets=c.support.reliableHiddenOffsets&&A[0].offsetHeight===0;
r.innerHTML="";
t.body.removeChild(r).style.display="none";
});
a=function(r){
var A=t.createElement("div");
r="on"+r;
var C=r in A;
if(!C){
A.setAttribute(r,"return;");
C=typeof A[r]==="function";
}
return C;
};
c.support.submitBubbles=a("submit");
c.support.changeBubbles=a("change");
a=b=d=f=h=null;
}
})();
var ra={},Ja=/^(?:\{.*\}|\[.*\])$/;
c.extend({cache:{},uuid:0,expando:"jQuery"+c.now(),noData:{embed:true,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:true},data:function(a,b,d){
if(c.acceptData(a)){
a=a==E?ra:a;
var e=a.nodeType,f=e?a[c.expando]:null,h=c.cache;
if(!(e&&!f&&typeof b==="string"&&d===B)){
if(e){
f||(a[c.expando]=f=++c.uuid);
}else{
h=a;
}
if(typeof b==="object"){
if(e){
h[f]=c.extend(h[f],b);
}else{
c.extend(h,b);
}
}else{
if(e&&!h[f]){
h[f]={};
}
}
a=e?h[f]:h;
if(d!==B){
a[b]=d;
}
return typeof b==="string"?a[b]:a;
}
}
},removeData:function(a,b){
if(c.acceptData(a)){
a=a==E?ra:a;
var d=a.nodeType,e=d?a[c.expando]:a,f=c.cache,h=d?f[e]:e;
if(b){
if(h){
delete h[b];
d&&c.isEmptyObject(h)&&c.removeData(a);
}
}else{
if(d&&c.support.deleteExpando){
delete a[c.expando];
}else{
if(a.removeAttribute){
a.removeAttribute(c.expando);
}else{
if(d){
delete f[e];
}else{
for(var l in a){
delete a[l];
}
}
}
}
}
}
},acceptData:function(a){
if(a.nodeName){
var b=c.noData[a.nodeName.toLowerCase()];
if(b){
return !(b===true||a.getAttribute("classid")!==b);
}
}
return true;
}});
c.fn.extend({data:function(a,b){
var d=null;
if(typeof a==="undefined"){
if(this.length){
var e=this[0].attributes,f;
d=c.data(this[0]);
for(var h=0,l=e.length;h<l;h++){
f=e[h].name;
if(f.indexOf("data-")===0){
f=f.substr(5);
ka(this[0],f,d[f]);
}
}
}
return d;
}else{
if(typeof a==="object"){
return this.each(function(){
c.data(this,a);
});
}
}
var k=a.split(".");
k[1]=k[1]?"."+k[1]:"";
if(b===B){
d=this.triggerHandler("getData"+k[1]+"!",[k[0]]);
if(d===B&&this.length){
d=c.data(this[0],a);
d=ka(this[0],a,d);
}
return d===B&&k[1]?this.data(k[0]):d;
}else{
return this.each(function(){
var o=c(this),x=[k[0],b];
o.triggerHandler("setData"+k[1]+"!",x);
c.data(this,a,b);
o.triggerHandler("changeData"+k[1]+"!",x);
});
}
},removeData:function(a){
return this.each(function(){
c.removeData(this,a);
});
}});
c.extend({queue:function(a,b,d){
if(a){
b=(b||"fx")+"queue";
var e=c.data(a,b);
if(!d){
return e||[];
}
if(!e||c.isArray(d)){
e=c.data(a,b,c.makeArray(d));
}else{
e.push(d);
}
return e;
}
},dequeue:function(a,b){
b=b||"fx";
var d=c.queue(a,b),e=d.shift();
if(e==="inprogress"){
e=d.shift();
}
if(e){
b==="fx"&&d.unshift("inprogress");
e.call(a,function(){
c.dequeue(a,b);
});
}
}});
c.fn.extend({queue:function(a,b){
if(typeof a!=="string"){
b=a;
a="fx";
}
if(b===B){
return c.queue(this[0],a);
}
return this.each(function(){
var d=c.queue(this,a,b);
a==="fx"&&d[0]!=="inprogress"&&c.dequeue(this,a);
});
},dequeue:function(a){
return this.each(function(){
c.dequeue(this,a);
});
},delay:function(a,b){
a=c.fx?c.fx.speeds[a]||a:a;
b=b||"fx";
return this.queue(b,function(){
var d=this;
setTimeout(function(){
c.dequeue(d,b);
},a);
});
},clearQueue:function(a){
return this.queue(a||"fx",[]);
}});
var sa=/[\n\t]/g,ha=/\s+/,Sa=/\r/g,Ta=/^(?:href|src|style)$/,Ua=/^(?:button|input)$/i,Va=/^(?:button|input|object|select|textarea)$/i,Wa=/^a(?:rea)?$/i,ta=/^(?:radio|checkbox)$/i;
c.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};
c.fn.extend({attr:function(a,b){
return c.access(this,a,b,true,c.attr);
},removeAttr:function(a){
return this.each(function(){
c.attr(this,a,"");
this.nodeType===1&&this.removeAttribute(a);
});
},addClass:function(a){
if(c.isFunction(a)){
return this.each(function(x){
var r=c(this);
r.addClass(a.call(this,x,r.attr("class")));
});
}
if(a&&typeof a==="string"){
for(var b=(a||"").split(ha),d=0,e=this.length;d<e;d++){
var f=this[d];
if(f.nodeType===1){
if(f.className){
for(var h=" "+f.className+" ",l=f.className,k=0,o=b.length;k<o;k++){
if(h.indexOf(" "+b[k]+" ")<0){
l+=" "+b[k];
}
}
f.className=c.trim(l);
}else{
f.className=a;
}
}
}
}
return this;
},removeClass:function(a){
if(c.isFunction(a)){
return this.each(function(o){
var x=c(this);
x.removeClass(a.call(this,o,x.attr("class")));
});
}
if(a&&typeof a==="string"||a===B){
for(var b=(a||"").split(ha),d=0,e=this.length;d<e;d++){
var f=this[d];
if(f.nodeType===1&&f.className){
if(a){
for(var h=(" "+f.className+" ").replace(sa," "),l=0,k=b.length;l<k;l++){
h=h.replace(" "+b[l]+" "," ");
}
f.className=c.trim(h);
}else{
f.className="";
}
}
}
}
return this;
},toggleClass:function(a,b){
var d=typeof a,e=typeof b==="boolean";
if(c.isFunction(a)){
return this.each(function(f){
var h=c(this);
h.toggleClass(a.call(this,f,h.attr("class"),b),b);
});
}
return this.each(function(){
if(d==="string"){
for(var f,h=0,l=c(this),k=b,o=a.split(ha);f=o[h++];){
k=e?k:!l.hasClass(f);
l[k?"addClass":"removeClass"](f);
}
}else{
if(d==="undefined"||d==="boolean"){
this.className&&c.data(this,"__className__",this.className);
this.className=this.className||a===false?"":c.data(this,"__className__")||"";
}
}
});
},hasClass:function(a){
a=" "+a+" ";
for(var b=0,d=this.length;b<d;b++){
if((" "+this[b].className+" ").replace(sa," ").indexOf(a)>-1){
return true;
}
}
return false;
},val:function(a){
if(!arguments.length){
var b=this[0];
if(b){
if(c.nodeName(b,"option")){
var d=b.attributes.value;
return !d||d.specified?b.value:b.text;
}
if(c.nodeName(b,"select")){
var e=b.selectedIndex;
d=[];
var f=b.options;
b=b.type==="select-one";
if(e<0){
return null;
}
var h=b?e:0;
for(e=b?e+1:f.length;h<e;h++){
var l=f[h];
if(l.selected&&(c.support.optDisabled?!l.disabled:l.getAttribute("disabled")===null)&&(!l.parentNode.disabled||!c.nodeName(l.parentNode,"optgroup"))){
a=c(l).val();
if(b){
return a;
}
d.push(a);
}
}
return d;
}
if(ta.test(b.type)&&!c.support.checkOn){
return b.getAttribute("value")===null?"on":b.value;
}
return (b.value||"").replace(Sa,"");
}
return B;
}
var k=c.isFunction(a);
return this.each(function(o){
var x=c(this),r=a;
if(this.nodeType===1){
if(k){
r=a.call(this,o,x.val());
}
if(r==null){
r="";
}else{
if(typeof r==="number"){
r+="";
}else{
if(c.isArray(r)){
r=c.map(r,function(C){
return C==null?"":C+"";
});
}
}
}
if(c.isArray(r)&&ta.test(this.type)){
this.checked=c.inArray(x.val(),r)>=0;
}else{
if(c.nodeName(this,"select")){
var A=c.makeArray(r);
c("option",this).each(function(){
this.selected=c.inArray(c(this).val(),A)>=0;
});
if(!A.length){
this.selectedIndex=-1;
}
}else{
this.value=r;
}
}
}
});
}});
c.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(a,b,d,e){
if(!a||a.nodeType===3||a.nodeType===8){
return B;
}
if(e&&b in c.attrFn){
return c(a)[b](d);
}
e=a.nodeType!==1||!c.isXMLDoc(a);
var f=d!==B;
b=e&&c.props[b]||b;
var h=Ta.test(b);
if((b in a||a[b]!==B)&&e&&!h){
if(f){
b==="type"&&Ua.test(a.nodeName)&&a.parentNode&&c.error("type property can't be changed");
if(d===null){
a.nodeType===1&&a.removeAttribute(b);
}else{
a[b]=d;
}
}
if(c.nodeName(a,"form")&&a.getAttributeNode(b)){
return a.getAttributeNode(b).nodeValue;
}
if(b==="tabIndex"){
return (b=a.getAttributeNode("tabIndex"))&&b.specified?b.value:Va.test(a.nodeName)||Wa.test(a.nodeName)&&a.href?0:B;
}
return a[b];
}
if(!c.support.style&&e&&b==="style"){
if(f){
a.style.cssText=""+d;
}
return a.style.cssText;
}
f&&a.setAttribute(b,""+d);
if(!a.attributes[b]&&a.hasAttribute&&!a.hasAttribute(b)){
return B;
}
a=!c.support.hrefNormalized&&e&&h?a.getAttribute(b,2):a.getAttribute(b);
return a===null?B:a;
}});
var X=/\.(.*)$/,ia=/^(?:textarea|input|select)$/i,La=/\./g,Ma=/ /g,Xa=/[^\w\s.|`]/g,Ya=function(a){
return a.replace(Xa,"\\$&");
},ua={focusin:0,focusout:0};
c.event={add:function(a,b,d,e){
if(!(a.nodeType===3||a.nodeType===8)){
if(c.isWindow(a)&&a!==E&&!a.frameElement){
a=E;
}
if(d===false){
d=U;
}else{
if(!d){
return;
}
}
var f,h;
if(d.handler){
f=d;
d=f.handler;
}
if(!d.guid){
d.guid=c.guid++;
}
if(h=c.data(a)){
var l=a.nodeType?"events":"__events__",k=h[l],o=h.handle;
if(typeof k==="function"){
o=k.handle;
k=k.events;
}else{
if(!k){
a.nodeType||(h[l]=h=function(){
});
h.events=k={};
}
}
if(!o){
h.handle=o=function(){
return typeof c!=="undefined"&&!c.event.triggered?c.event.handle.apply(o.elem,arguments):B;
};
}
o.elem=a;
b=b.split(" ");
for(var x=0,r;l=b[x++];){
h=f?c.extend({},f):{handler:d,data:e};
if(l.indexOf(".")>-1){
r=l.split(".");
l=r.shift();
h.namespace=r.slice(0).sort().join(".");
}else{
r=[];
h.namespace="";
}
h.type=l;
if(!h.guid){
h.guid=d.guid;
}
var A=k[l],C=c.event.special[l]||{};
if(!A){
A=k[l]=[];
if(!C.setup||C.setup.call(a,e,r,o)===false){
if(a.addEventListener){
a.addEventListener(l,o,false);
}else{
a.attachEvent&&a.attachEvent("on"+l,o);
}
}
}
if(C.add){
C.add.call(a,h);
if(!h.handler.guid){
h.handler.guid=d.guid;
}
}
A.push(h);
c.event.global[l]=true;
}
a=null;
}
}
},global:{},remove:function(a,b,d,e){
if(!(a.nodeType===3||a.nodeType===8)){
if(d===false){
d=U;
}
var f,h,l=0,k,o,x,r,A,C,J=a.nodeType?"events":"__events__",w=c.data(a),I=w&&w[J];
if(w&&I){
if(typeof I==="function"){
w=I;
I=I.events;
}
if(b&&b.type){
d=b.handler;
b=b.type;
}
if(!b||typeof b==="string"&&b.charAt(0)==="."){
b=b||"";
for(f in I){
c.event.remove(a,f+b);
}
}else{
for(b=b.split(" ");f=b[l++];){
r=f;
k=f.indexOf(".")<0;
o=[];
if(!k){
o=f.split(".");
f=o.shift();
x=RegExp("(^|\\.)"+c.map(o.slice(0).sort(),Ya).join("\\.(?:.*\\.)?")+"(\\.|$)");
}
if(A=I[f]){
if(d){
r=c.event.special[f]||{};
for(h=e||0;h<A.length;h++){
C=A[h];
if(d.guid===C.guid){
if(k||x.test(C.namespace)){
e==null&&A.splice(h--,1);
r.remove&&r.remove.call(a,C);
}
if(e!=null){
break;
}
}
}
if(A.length===0||e!=null&&A.length===1){
if(!r.teardown||r.teardown.call(a,o)===false){
c.removeEvent(a,f,w.handle);
}
delete I[f];
}
}else{
for(h=0;h<A.length;h++){
C=A[h];
if(k||x.test(C.namespace)){
c.event.remove(a,r,C.handler,h);
A.splice(h--,1);
}
}
}
}
}
if(c.isEmptyObject(I)){
if(b=w.handle){
b.elem=null;
}
delete w.events;
delete w.handle;
if(typeof w==="function"){
c.removeData(a,J);
}else{
c.isEmptyObject(w)&&c.removeData(a);
}
}
}
}
}
},trigger:function(a,b,d,e){
var f=a.type||a;
if(!e){
a=typeof a==="object"?a[c.expando]?a:c.extend(c.Event(f),a):c.Event(f);
if(f.indexOf("!")>=0){
a.type=f=f.slice(0,-1);
a.exclusive=true;
}
if(!d){
a.stopPropagation();
c.event.global[f]&&c.each(c.cache,function(){
this.events&&this.events[f]&&c.event.trigger(a,b,this.handle.elem);
});
}
if(!d||d.nodeType===3||d.nodeType===8){
return B;
}
a.result=B;
a.target=d;
b=c.makeArray(b);
b.unshift(a);
}
a.currentTarget=d;
(e=d.nodeType?c.data(d,"handle"):(c.data(d,"__events__")||{}).handle)&&e.apply(d,b);
e=d.parentNode||d.ownerDocument;
try{
if(!(d&&d.nodeName&&c.noData[d.nodeName.toLowerCase()])){
if(d["on"+f]&&d["on"+f].apply(d,b)===false){
a.result=false;
a.preventDefault();
}
}
}
catch(h){
}
if(!a.isPropagationStopped()&&e){
c.event.trigger(a,b,e,true);
}else{
if(!a.isDefaultPrevented()){
var l;
e=a.target;
var k=f.replace(X,""),o=c.nodeName(e,"a")&&k==="click",x=c.event.special[k]||{};
if((!x._default||x._default.call(d,a)===false)&&!o&&!(e&&e.nodeName&&c.noData[e.nodeName.toLowerCase()])){
try{
if(e[k]){
if(l=e["on"+k]){
e["on"+k]=null;
}
c.event.triggered=true;
e[k]();
}
}
catch(r){
}
if(l){
e["on"+k]=l;
}
c.event.triggered=false;
}
}
}
},handle:function(a){
var b,d,e,f;
d=[];
var h=c.makeArray(arguments);
a=h[0]=c.event.fix(a||E.event);
a.currentTarget=this;
b=a.type.indexOf(".")<0&&!a.exclusive;
if(!b){
e=a.type.split(".");
a.type=e.shift();
d=e.slice(0).sort();
e=RegExp("(^|\\.)"+d.join("\\.(?:.*\\.)?")+"(\\.|$)");
}
a.namespace=a.namespace||d.join(".");
f=c.data(this,this.nodeType?"events":"__events__");
if(typeof f==="function"){
f=f.events;
}
d=(f||{})[a.type];
if(f&&d){
d=d.slice(0);
f=0;
for(var l=d.length;f<l;f++){
var k=d[f];
if(b||e.test(k.namespace)){
a.handler=k.handler;
a.data=k.data;
a.handleObj=k;
k=k.handler.apply(this,h);
if(k!==B){
a.result=k;
if(k===false){
a.preventDefault();
a.stopPropagation();
}
}
if(a.isImmediatePropagationStopped()){
break;
}
}
}
}
return a.result;
},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(a){
if(a[c.expando]){
return a;
}
var b=a;
a=c.Event(b);
for(var d=this.props.length,e;d;){
e=this.props[--d];
a[e]=b[e];
}
if(!a.target){
a.target=a.srcElement||t;
}
if(a.target.nodeType===3){
a.target=a.target.parentNode;
}
if(!a.relatedTarget&&a.fromElement){
a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;
}
if(a.pageX==null&&a.clientX!=null){
b=t.documentElement;
d=t.body;
a.pageX=a.clientX+(b&&b.scrollLeft||d&&d.scrollLeft||0)-(b&&b.clientLeft||d&&d.clientLeft||0);
a.pageY=a.clientY+(b&&b.scrollTop||d&&d.scrollTop||0)-(b&&b.clientTop||d&&d.clientTop||0);
}
if(a.which==null&&(a.charCode!=null||a.keyCode!=null)){
a.which=a.charCode!=null?a.charCode:a.keyCode;
}
if(!a.metaKey&&a.ctrlKey){
a.metaKey=a.ctrlKey;
}
if(!a.which&&a.button!==B){
a.which=a.button&1?1:a.button&2?3:a.button&4?2:0;
}
return a;
},guid:100000000,proxy:c.proxy,special:{ready:{setup:c.bindReady,teardown:c.noop},live:{add:function(a){
c.event.add(this,Y(a.origType,a.selector),c.extend({},a,{handler:Ka,guid:a.handler.guid}));
},remove:function(a){
c.event.remove(this,Y(a.origType,a.selector),a);
}},beforeunload:{setup:function(a,b,d){
if(c.isWindow(this)){
this.onbeforeunload=d;
}
},teardown:function(a,b){
if(this.onbeforeunload===b){
this.onbeforeunload=null;
}
}}}};
c.removeEvent=t.removeEventListener?function(a,b,d){
a.removeEventListener&&a.removeEventListener(b,d,false);
}:function(a,b,d){
a.detachEvent&&a.detachEvent("on"+b,d);
};
c.Event=function(a){
if(!this.preventDefault){
return new c.Event(a);
}
if(a&&a.type){
this.originalEvent=a;
this.type=a.type;
}else{
this.type=a;
}
this.timeStamp=c.now();
this[c.expando]=true;
};
c.Event.prototype={preventDefault:function(){
this.isDefaultPrevented=ca;
var a=this.originalEvent;
if(a){
if(a.preventDefault){
a.preventDefault();
}else{
a.returnValue=false;
}
}
},stopPropagation:function(){
this.isPropagationStopped=ca;
var a=this.originalEvent;
if(a){
a.stopPropagation&&a.stopPropagation();
a.cancelBubble=true;
}
},stopImmediatePropagation:function(){
this.isImmediatePropagationStopped=ca;
this.stopPropagation();
},isDefaultPrevented:U,isPropagationStopped:U,isImmediatePropagationStopped:U};
var va=function(a){
var b=a.relatedTarget;
try{
for(;b&&b!==this;){
b=b.parentNode;
}
if(b!==this){
a.type=a.data;
c.event.handle.apply(this,arguments);
}
}
catch(d){
}
},wa=function(a){
a.type=a.data;
c.event.handle.apply(this,arguments);
};
c.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){
c.event.special[a]={setup:function(d){
c.event.add(this,b,d&&d.selector?wa:va,a);
},teardown:function(d){
c.event.remove(this,b,d&&d.selector?wa:va);
}};
});
if(!c.support.submitBubbles){
c.event.special.submit={setup:function(){
if(this.nodeName.toLowerCase()!=="form"){
c.event.add(this,"click.specialSubmit",function(a){
var b=a.target,d=b.type;
if((d==="submit"||d==="image")&&c(b).closest("form").length){
a.liveFired=B;
return la("submit",this,arguments);
}
});
c.event.add(this,"keypress.specialSubmit",function(a){
var b=a.target,d=b.type;
if((d==="text"||d==="password")&&c(b).closest("form").length&&a.keyCode===13){
a.liveFired=B;
return la("submit",this,arguments);
}
});
}else{
return false;
}
},teardown:function(){
c.event.remove(this,".specialSubmit");
}};
}
if(!c.support.changeBubbles){
var V,xa=function(a){
var b=a.type,d=a.value;
if(b==="radio"||b==="checkbox"){
d=a.checked;
}else{
if(b==="select-multiple"){
d=a.selectedIndex>-1?c.map(a.options,function(e){
return e.selected;
}).join("-"):"";
}else{
if(a.nodeName.toLowerCase()==="select"){
d=a.selectedIndex;
}
}
}
return d;
},Z=function(a,b){
var d=a.target,e,f;
if(!(!ia.test(d.nodeName)||d.readOnly)){
e=c.data(d,"_change_data");
f=xa(d);
if(a.type!=="focusout"||d.type!=="radio"){
c.data(d,"_change_data",f);
}
if(!(e===B||f===e)){
if(e!=null||f){
a.type="change";
a.liveFired=B;
return c.event.trigger(a,b,d);
}
}
}
};
c.event.special.change={filters:{focusout:Z,beforedeactivate:Z,click:function(a){
var b=a.target,d=b.type;
if(d==="radio"||d==="checkbox"||b.nodeName.toLowerCase()==="select"){
return Z.call(this,a);
}
},keydown:function(a){
var b=a.target,d=b.type;
if(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(d==="checkbox"||d==="radio")||d==="select-multiple"){
return Z.call(this,a);
}
},beforeactivate:function(a){
a=a.target;
c.data(a,"_change_data",xa(a));
}},setup:function(){
if(this.type==="file"){
return false;
}
for(var a in V){
c.event.add(this,a+".specialChange",V[a]);
}
return ia.test(this.nodeName);
},teardown:function(){
c.event.remove(this,".specialChange");
return ia.test(this.nodeName);
}};
V=c.event.special.change.filters;
V.focus=V.beforeactivate;
}
t.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){
function d(e){
e=c.event.fix(e);
e.type=b;
return c.event.trigger(e,null,e.target);
};
c.event.special[b]={setup:function(){
ua[b]++===0&&t.addEventListener(a,d,true);
},teardown:function(){
--ua[b]===0&&t.removeEventListener(a,d,true);
}};
});
c.each(["bind","one"],function(a,b){
c.fn[b]=function(d,e,f){
if(typeof d==="object"){
for(var h in d){
this[b](h,e,d[h],f);
}
return this;
}
if(c.isFunction(e)||e===false){
f=e;
e=B;
}
var l=b==="one"?c.proxy(f,function(o){
c(this).unbind(o,l);
return f.apply(this,arguments);
}):f;
if(d==="unload"&&b!=="one"){
this.one(d,e,f);
}else{
h=0;
for(var k=this.length;h<k;h++){
c.event.add(this[h],d,l,e);
}
}
return this;
};
});
c.fn.extend({unbind:function(a,b){
if(typeof a==="object"&&!a.preventDefault){
for(var d in a){
this.unbind(d,a[d]);
}
}else{
d=0;
for(var e=this.length;d<e;d++){
c.event.remove(this[d],a,b);
}
}
return this;
},delegate:function(a,b,d,e){
return this.live(b,d,e,a);
},undelegate:function(a,b,d){
return arguments.length===0?this.unbind("live"):this.die(b,null,d,a);
},trigger:function(a,b){
return this.each(function(){
c.event.trigger(a,b,this);
});
},triggerHandler:function(a,b){
if(this[0]){
var d=c.Event(a);
d.preventDefault();
d.stopPropagation();
c.event.trigger(d,b,this[0]);
return d.result;
}
},toggle:function(a){
for(var b=arguments,d=1;d<b.length;){
c.proxy(a,b[d++]);
}
return this.click(c.proxy(a,function(e){
var f=(c.data(this,"lastToggle"+a.guid)||0)%d;
c.data(this,"lastToggle"+a.guid,f+1);
e.preventDefault();
return b[f].apply(this,arguments)||false;
}));
},hover:function(a,b){
return this.mouseenter(a).mouseleave(b||a);
}});
var ya={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};
c.each(["live","die"],function(a,b){
c.fn[b]=function(d,e,f,h){
var l,k=0,o,x,r=h||this.selector;
h=h?this:c(this.context);
if(typeof d==="object"&&!d.preventDefault){
for(l in d){
h[b](l,e,d[l],r);
}
return this;
}
if(c.isFunction(e)){
f=e;
e=B;
}
for(d=(d||"").split(" ");(l=d[k++])!=null;){
o=X.exec(l);
x="";
if(o){
x=o[0];
l=l.replace(X,"");
}
if(l==="hover"){
d.push("mouseenter"+x,"mouseleave"+x);
}else{
o=l;
if(l==="focus"||l==="blur"){
d.push(ya[l]+x);
l+=x;
}else{
l=(ya[l]||l)+x;
}
if(b==="live"){
x=0;
for(var A=h.length;x<A;x++){
c.event.add(h[x],"live."+Y(l,r),{data:e,selector:r,handler:f,origType:l,origHandler:f,preType:o});
}
}else{
h.unbind("live."+Y(l,r),f);
}
}
}
return this;
};
});
c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){
c.fn[b]=function(d,e){
if(e==null){
e=d;
d=null;
}
return arguments.length>0?this.bind(b,d,e):this.trigger(b);
};
if(c.attrFn){
c.attrFn[b]=true;
}
});
E.attachEvent&&!E.addEventListener&&c(E).bind("unload",function(){
for(var a in c.cache){
if(c.cache[a].handle){
try{
c.event.remove(c.cache[a].handle.elem);
}
catch(b){
}
}
}
});
(function(){
function a(g,i,n,m,p,q){
p=0;
for(var u=m.length;p<u;p++){
var y=m[p];
if(y){
var F=false;
for(y=y[g];y;){
if(y.sizcache===n){
F=m[y.sizset];
break;
}
if(y.nodeType===1&&!q){
y.sizcache=n;
y.sizset=p;
}
if(y.nodeName.toLowerCase()===i){
F=y;
break;
}
y=y[g];
}
m[p]=F;
}
}
};
function b(g,i,n,m,p,q){
p=0;
for(var u=m.length;p<u;p++){
var y=m[p];
if(y){
var F=false;
for(y=y[g];y;){
if(y.sizcache===n){
F=m[y.sizset];
break;
}
if(y.nodeType===1){
if(!q){
y.sizcache=n;
y.sizset=p;
}
if(typeof i!=="string"){
if(y===i){
F=true;
break;
}
}else{
if(k.filter(i,[y]).length>0){
F=y;
break;
}
}
}
y=y[g];
}
m[p]=F;
}
}
};
var d=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,e=0,f=Object.prototype.toString,h=false,l=true;
[0,0].sort(function(){
l=false;
return 0;
});
var k=function(g,i,n,m){
n=n||[];
var p=i=i||t;
if(i.nodeType!==1&&i.nodeType!==9){
return [];
}
if(!g||typeof g!=="string"){
return n;
}
var q,u,y,F,M,N=true,O=k.isXML(i),D=[],R=g;
do{
d.exec("");
if(q=d.exec(R)){
R=q[3];
D.push(q[1]);
if(q[2]){
F=q[3];
break;
}
}
}while(q);
if(D.length>1&&x.exec(g)){
if(D.length===2&&o.relative[D[0]]){
u=L(D[0]+D[1],i);
}else{
for(u=o.relative[D[0]]?[i]:k(D.shift(),i);D.length;){
g=D.shift();
if(o.relative[g]){
g+=D.shift();
}
u=L(g,u);
}
}
}else{
if(!m&&D.length>1&&i.nodeType===9&&!O&&o.match.ID.test(D[0])&&!o.match.ID.test(D[D.length-1])){
q=k.find(D.shift(),i,O);
i=q.expr?k.filter(q.expr,q.set)[0]:q.set[0];
}
if(i){
q=m?{expr:D.pop(),set:C(m)}:k.find(D.pop(),D.length===1&&(D[0]==="~"||D[0]==="+")&&i.parentNode?i.parentNode:i,O);
u=q.expr?k.filter(q.expr,q.set):q.set;
if(D.length>0){
y=C(u);
}else{
N=false;
}
for(;D.length;){
q=M=D.pop();
if(o.relative[M]){
q=D.pop();
}else{
M="";
}
if(q==null){
q=i;
}
o.relative[M](y,q,O);
}
}else{
y=[];
}
}
y||(y=u);
y||k.error(M||g);
if(f.call(y)==="[object Array]"){
if(N){
if(i&&i.nodeType===1){
for(g=0;y[g]!=null;g++){
if(y[g]&&(y[g]===true||y[g].nodeType===1&&k.contains(i,y[g]))){
n.push(u[g]);
}
}
}else{
for(g=0;y[g]!=null;g++){
y[g]&&y[g].nodeType===1&&n.push(u[g]);
}
}
}else{
n.push.apply(n,y);
}
}else{
C(y,n);
}
if(F){
k(F,p,n,m);
k.uniqueSort(n);
}
return n;
};
k.uniqueSort=function(g){
if(w){
h=l;
g.sort(w);
if(h){
for(var i=1;i<g.length;i++){
g[i]===g[i-1]&&g.splice(i--,1);
}
}
}
return g;
};
k.matches=function(g,i){
return k(g,null,null,i);
};
k.matchesSelector=function(g,i){
return k(i,null,null,[g]).length>0;
};
k.find=function(g,i,n){
var m;
if(!g){
return [];
}
for(var p=0,q=o.order.length;p<q;p++){
var u,y=o.order[p];
if(u=o.leftMatch[y].exec(g)){
var F=u[1];
u.splice(1,1);
if(F.substr(F.length-1)!=="\\"){
u[1]=(u[1]||"").replace(/\\/g,"");
m=o.find[y](u,i,n);
if(m!=null){
g=g.replace(o.match[y],"");
break;
}
}
}
}
m||(m=i.getElementsByTagName("*"));
return {set:m,expr:g};
};
k.filter=function(g,i,n,m){
for(var p,q,u=g,y=[],F=i,M=i&&i[0]&&k.isXML(i[0]);g&&i.length;){
for(var N in o.filter){
if((p=o.leftMatch[N].exec(g))!=null&&p[2]){
var O,D,R=o.filter[N];
D=p[1];
q=false;
p.splice(1,1);
if(D.substr(D.length-1)!=="\\"){
if(F===y){
y=[];
}
if(o.preFilter[N]){
if(p=o.preFilter[N](p,F,n,y,m,M)){
if(p===true){
continue;
}
}else{
q=O=true;
}
}
if(p){
for(var j=0;(D=F[j])!=null;j++){
if(D){
O=R(D,p,j,F);
var s=m^!!O;
if(n&&O!=null){
if(s){
q=true;
}else{
F[j]=false;
}
}else{
if(s){
y.push(D);
q=true;
}
}
}
}
}
if(O!==B){
n||(F=y);
g=g.replace(o.match[N],"");
if(!q){
return [];
}
break;
}
}
}
}
if(g===u){
if(q==null){
k.error(g);
}else{
break;
}
}
u=g;
}
return F;
};
k.error=function(g){
throw "Syntax error, unrecognized expression: "+g;
};
var o=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(g){
return g.getAttribute("href");
}},relative:{"+":function(g,i){
var n=typeof i==="string",m=n&&!/\W/.test(i);
n=n&&!m;
if(m){
i=i.toLowerCase();
}
m=0;
for(var p=g.length,q;m<p;m++){
if(q=g[m]){
for(;(q=q.previousSibling)&&q.nodeType!==1;){
}
g[m]=n||q&&q.nodeName.toLowerCase()===i?q||false:q===i;
}
}
n&&k.filter(i,g,true);
},">":function(g,i){
var n,m=typeof i==="string",p=0,q=g.length;
if(m&&!/\W/.test(i)){
for(i=i.toLowerCase();p<q;p++){
if(n=g[p]){
n=n.parentNode;
g[p]=n.nodeName.toLowerCase()===i?n:false;
}
}
}else{
for(;p<q;p++){
if(n=g[p]){
g[p]=m?n.parentNode:n.parentNode===i;
}
}
m&&k.filter(i,g,true);
}
},"":function(g,i,n){
var m,p=e++,q=b;
if(typeof i==="string"&&!/\W/.test(i)){
m=i=i.toLowerCase();
q=a;
}
q("parentNode",i,p,g,m,n);
},"~":function(g,i,n){
var m,p=e++,q=b;
if(typeof i==="string"&&!/\W/.test(i)){
m=i=i.toLowerCase();
q=a;
}
q("previousSibling",i,p,g,m,n);
}},find:{ID:function(g,i,n){
if(typeof i.getElementById!=="undefined"&&!n){
return (g=i.getElementById(g[1]))&&g.parentNode?[g]:[];
}
},NAME:function(g,i){
if(typeof i.getElementsByName!=="undefined"){
for(var n=[],m=i.getElementsByName(g[1]),p=0,q=m.length;p<q;p++){
m[p].getAttribute("name")===g[1]&&n.push(m[p]);
}
return n.length===0?null:n;
}
},TAG:function(g,i){
return i.getElementsByTagName(g[1]);
}},preFilter:{CLASS:function(g,i,n,m,p,q){
g=" "+g[1].replace(/\\/g,"")+" ";
if(q){
return g;
}
q=0;
for(var u;(u=i[q])!=null;q++){
if(u){
if(p^(u.className&&(" "+u.className+" ").replace(/[\t\n]/g," ").indexOf(g)>=0)){
n||m.push(u);
}else{
if(n){
i[q]=false;
}
}
}
}
return false;
},ID:function(g){
return g[1].replace(/\\/g,"");
},TAG:function(g){
return g[1].toLowerCase();
},CHILD:function(g){
if(g[1]==="nth"){
var i=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(g[2]==="even"&&"2n"||g[2]==="odd"&&"2n+1"||!/\D/.test(g[2])&&"0n+"+g[2]||g[2]);
g[2]=i[1]+(i[2]||1)-0;
g[3]=i[3]-0;
}
g[0]=e++;
return g;
},ATTR:function(g,i,n,m,p,q){
i=g[1].replace(/\\/g,"");
if(!q&&o.attrMap[i]){
g[1]=o.attrMap[i];
}
if(g[2]==="~="){
g[4]=" "+g[4]+" ";
}
return g;
},PSEUDO:function(g,i,n,m,p){
if(g[1]==="not"){
if((d.exec(g[3])||"").length>1||/^\w/.test(g[3])){
g[3]=k(g[3],null,null,i);
}else{
g=k.filter(g[3],i,n,true^p);
n||m.push.apply(m,g);
return false;
}
}else{
if(o.match.POS.test(g[0])||o.match.CHILD.test(g[0])){
return true;
}
}
return g;
},POS:function(g){
g.unshift(true);
return g;
}},filters:{enabled:function(g){
return g.disabled===false&&g.type!=="hidden";
},disabled:function(g){
return g.disabled===true;
},checked:function(g){
return g.checked===true;
},selected:function(g){
return g.selected===true;
},parent:function(g){
return !!g.firstChild;
},empty:function(g){
return !g.firstChild;
},has:function(g,i,n){
return !!k(n[3],g).length;
},header:function(g){
return /h\d/i.test(g.nodeName);
},text:function(g){
return "text"===g.type;
},radio:function(g){
return "radio"===g.type;
},checkbox:function(g){
return "checkbox"===g.type;
},file:function(g){
return "file"===g.type;
},password:function(g){
return "password"===g.type;
},submit:function(g){
return "submit"===g.type;
},image:function(g){
return "image"===g.type;
},reset:function(g){
return "reset"===g.type;
},button:function(g){
return "button"===g.type||g.nodeName.toLowerCase()==="button";
},input:function(g){
return /input|select|textarea|button/i.test(g.nodeName);
}},setFilters:{first:function(g,i){
return i===0;
},last:function(g,i,n,m){
return i===m.length-1;
},even:function(g,i){
return i%2===0;
},odd:function(g,i){
return i%2===1;
},lt:function(g,i,n){
return i<n[3]-0;
},gt:function(g,i,n){
return i>n[3]-0;
},nth:function(g,i,n){
return n[3]-0===i;
},eq:function(g,i,n){
return n[3]-0===i;
}},filter:{PSEUDO:function(g,i,n,m){
var p=i[1],q=o.filters[p];
if(q){
return q(g,n,i,m);
}else{
if(p==="contains"){
return (g.textContent||g.innerText||k.getText([g])||"").indexOf(i[3])>=0;
}else{
if(p==="not"){
i=i[3];
n=0;
for(m=i.length;n<m;n++){
if(i[n]===g){
return false;
}
}
return true;
}else{
k.error("Syntax error, unrecognized expression: "+p);
}
}
}
},CHILD:function(g,i){
var n=i[1],m=g;
switch(n){
case "only":
case "first":
for(;m=m.previousSibling;){
if(m.nodeType===1){
return false;
}
}
if(n==="first"){
return true;
}
m=g;
case "last":
for(;m=m.nextSibling;){
if(m.nodeType===1){
return false;
}
}
return true;
case "nth":
n=i[2];
var p=i[3];
if(n===1&&p===0){
return true;
}
var q=i[0],u=g.parentNode;
if(u&&(u.sizcache!==q||!g.nodeIndex)){
var y=0;
for(m=u.firstChild;m;m=m.nextSibling){
if(m.nodeType===1){
m.nodeIndex=++y;
}
}
u.sizcache=q;
}
m=g.nodeIndex-p;
return n===0?m===0:m%n===0&&m/n>=0;
}
},ID:function(g,i){
return g.nodeType===1&&g.getAttribute("id")===i;
},TAG:function(g,i){
return i==="*"&&g.nodeType===1||g.nodeName.toLowerCase()===i;
},CLASS:function(g,i){
return (" "+(g.className||g.getAttribute("class"))+" ").indexOf(i)>-1;
},ATTR:function(g,i){
var n=i[1];
n=o.attrHandle[n]?o.attrHandle[n](g):g[n]!=null?g[n]:g.getAttribute(n);
var m=n+"",p=i[2],q=i[4];
return n==null?p==="!=":p==="="?m===q:p==="*="?m.indexOf(q)>=0:p==="~="?(" "+m+" ").indexOf(q)>=0:!q?m&&n!==false:p==="!="?m!==q:p==="^="?m.indexOf(q)===0:p==="$="?m.substr(m.length-q.length)===q:p==="|="?m===q||m.substr(0,q.length+1)===q+"-":false;
},POS:function(g,i,n,m){
var p=o.setFilters[i[2]];
if(p){
return p(g,n,i,m);
}
}}},x=o.match.POS,r=function(g,i){
return "\\"+(i-0+1);
},A;
for(A in o.match){
o.match[A]=RegExp(o.match[A].source+/(?![^\[]*\])(?![^\(]*\))/.source);
o.leftMatch[A]=RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[A].source.replace(/\\(\d+)/g,r));
}
var C=function(g,i){
g=Array.prototype.slice.call(g,0);
if(i){
i.push.apply(i,g);
return i;
}
return g;
};
try{
Array.prototype.slice.call(t.documentElement.childNodes,0);
}
catch(J){
C=function(g,i){
var n=0,m=i||[];
if(f.call(g)==="[object Array]"){
Array.prototype.push.apply(m,g);
}else{
if(typeof g.length==="number"){
for(var p=g.length;n<p;n++){
m.push(g[n]);
}
}else{
for(;g[n];n++){
m.push(g[n]);
}
}
}
return m;
};
}
var w,I;
if(t.documentElement.compareDocumentPosition){
w=function(g,i){
if(g===i){
h=true;
return 0;
}
if(!g.compareDocumentPosition||!i.compareDocumentPosition){
return g.compareDocumentPosition?-1:1;
}
return g.compareDocumentPosition(i)&4?-1:1;
};
}else{
w=function(g,i){
var n,m,p=[],q=[];
n=g.parentNode;
m=i.parentNode;
var u=n;
if(g===i){
h=true;
return 0;
}else{
if(n===m){
return I(g,i);
}else{
if(n){
if(!m){
return 1;
}
}else{
return -1;
}
}
}
for(;u;){
p.unshift(u);
u=u.parentNode;
}
for(u=m;u;){
q.unshift(u);
u=u.parentNode;
}
n=p.length;
m=q.length;
for(u=0;u<n&&u<m;u++){
if(p[u]!==q[u]){
return I(p[u],q[u]);
}
}
return u===n?I(g,q[u],-1):I(p[u],i,1);
};
I=function(g,i,n){
if(g===i){
return n;
}
for(g=g.nextSibling;g;){
if(g===i){
return -1;
}
g=g.nextSibling;
}
return 1;
};
}
k.getText=function(g){
for(var i="",n,m=0;g[m];m++){
n=g[m];
if(n.nodeType===3||n.nodeType===4){
i+=n.nodeValue;
}else{
if(n.nodeType!==8){
i+=k.getText(n.childNodes);
}
}
}
return i;
};
(function(){
var g=t.createElement("div"),i="script"+(new Date).getTime(),n=t.documentElement;
g.innerHTML="<a name='"+i+"'/>";
n.insertBefore(g,n.firstChild);
if(t.getElementById(i)){
o.find.ID=function(m,p,q){
if(typeof p.getElementById!=="undefined"&&!q){
return (p=p.getElementById(m[1]))?p.id===m[1]||typeof p.getAttributeNode!=="undefined"&&p.getAttributeNode("id").nodeValue===m[1]?[p]:B:[];
}
};
o.filter.ID=function(m,p){
var q=typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id");
return m.nodeType===1&&q&&q.nodeValue===p;
};
}
n.removeChild(g);
n=g=null;
})();
(function(){
var g=t.createElement("div");
g.appendChild(t.createComment(""));
if(g.getElementsByTagName("*").length>0){
o.find.TAG=function(i,n){
var m=n.getElementsByTagName(i[1]);
if(i[1]==="*"){
for(var p=[],q=0;m[q];q++){
m[q].nodeType===1&&p.push(m[q]);
}
m=p;
}
return m;
};
}
g.innerHTML="<a href='#'></a>";
if(g.firstChild&&typeof g.firstChild.getAttribute!=="undefined"&&g.firstChild.getAttribute("href")!=="#"){
o.attrHandle.href=function(i){
return i.getAttribute("href",2);
};
}
g=null;
})();
t.querySelectorAll&&function(){
var g=k,i=t.createElement("div");
i.innerHTML="<p class='TEST'></p>";
if(!(i.querySelectorAll&&i.querySelectorAll(".TEST").length===0)){
k=function(m,p,q,u){
p=p||t;
m=m.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");
if(!u&&!k.isXML(p)){
if(p.nodeType===9){
try{
return C(p.querySelectorAll(m),q);
}
catch(y){
}
}else{
if(p.nodeType===1&&p.nodeName.toLowerCase()!=="object"){
var F=p.getAttribute("id"),M=F||"__sizzle__";
F||p.setAttribute("id",M);
try{
return C(p.querySelectorAll("#"+M+" "+m),q);
}
catch(N){
}
finally{
F||p.removeAttribute("id");
}
}
}
}
return g(m,p,q,u);
};
for(var n in g){
k[n]=g[n];
}
i=null;
}
}();
(function(){
var g=t.documentElement,i=g.matchesSelector||g.mozMatchesSelector||g.webkitMatchesSelector||g.msMatchesSelector,n=false;
try{
i.call(t.documentElement,"[test!='']:sizzle");
}
catch(m){
n=true;
}
if(i){
k.matchesSelector=function(p,q){
q=q.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");
if(!k.isXML(p)){
try{
if(n||!o.match.PSEUDO.test(q)&&!/!=/.test(q)){
return i.call(p,q);
}
}
catch(u){
}
}
return k(q,null,null,[p]).length>0;
};
}
})();
(function(){
var g=t.createElement("div");
g.innerHTML="<div class='test e'></div><div class='test'></div>";
if(!(!g.getElementsByClassName||g.getElementsByClassName("e").length===0)){
g.lastChild.className="e";
if(g.getElementsByClassName("e").length!==1){
o.order.splice(1,0,"CLASS");
o.find.CLASS=function(i,n,m){
if(typeof n.getElementsByClassName!=="undefined"&&!m){
return n.getElementsByClassName(i[1]);
}
};
g=null;
}
}
})();
k.contains=t.documentElement.contains?function(g,i){
return g!==i&&(g.contains?g.contains(i):true);
}:t.documentElement.compareDocumentPosition?function(g,i){
return !!(g.compareDocumentPosition(i)&16);
}:function(){
return false;
};
k.isXML=function(g){
return (g=(g?g.ownerDocument||g:0).documentElement)?g.nodeName!=="HTML":false;
};
var L=function(g,i){
for(var n,m=[],p="",q=i.nodeType?[i]:i;n=o.match.PSEUDO.exec(g);){
p+=n[0];
g=g.replace(o.match.PSEUDO,"");
}
g=o.relative[g]?g+"*":g;
n=0;
for(var u=q.length;n<u;n++){
k(g,q[n],m);
}
return k.filter(p,m);
};
c.find=k;
c.expr=k.selectors;
c.expr[":"]=c.expr.filters;
c.unique=k.uniqueSort;
c.text=k.getText;
c.isXMLDoc=k.isXML;
c.contains=k.contains;
})();
var Za=/Until$/,$a=/^(?:parents|prevUntil|prevAll)/,ab=/,/,Na=/^.[^:#\[\.,]*$/,bb=Array.prototype.slice,cb=c.expr.match.POS;
c.fn.extend({find:function(a){
for(var b=this.pushStack("","find",a),d=0,e=0,f=this.length;e<f;e++){
d=b.length;
c.find(a,this[e],b);
if(e>0){
for(var h=d;h<b.length;h++){
for(var l=0;l<d;l++){
if(b[l]===b[h]){
b.splice(h--,1);
break;
}
}
}
}
}
return b;
},has:function(a){
var b=c(a);
return this.filter(function(){
for(var d=0,e=b.length;d<e;d++){
if(c.contains(this,b[d])){
return true;
}
}
});
},not:function(a){
return this.pushStack(ma(this,a,false),"not",a);
},filter:function(a){
return this.pushStack(ma(this,a,true),"filter",a);
},is:function(a){
return !!a&&c.filter(a,this).length>0;
},closest:function(a,b){
var d=[],e,f,h=this[0];
if(c.isArray(a)){
var l,k={},o=1;
if(h&&a.length){
e=0;
for(f=a.length;e<f;e++){
l=a[e];
k[l]||(k[l]=c.expr.match.POS.test(l)?c(l,b||this.context):l);
}
for(;h&&h.ownerDocument&&h!==b;){
for(l in k){
e=k[l];
if(e.jquery?e.index(h)>-1:c(h).is(e)){
d.push({selector:l,elem:h,level:o});
}
}
h=h.parentNode;
o++;
}
}
return d;
}
l=cb.test(a)?c(a,b||this.context):null;
e=0;
for(f=this.length;e<f;e++){
for(h=this[e];h;){
if(l?l.index(h)>-1:c.find.matchesSelector(h,a)){
d.push(h);
break;
}else{
h=h.parentNode;
if(!h||!h.ownerDocument||h===b){
break;
}
}
}
}
d=d.length>1?c.unique(d):d;
return this.pushStack(d,"closest",a);
},index:function(a){
if(!a||typeof a==="string"){
return c.inArray(this[0],a?c(a):this.parent().children());
}
return c.inArray(a.jquery?a[0]:a,this);
},add:function(a,b){
var d=typeof a==="string"?c(a,b||this.context):c.makeArray(a),e=c.merge(this.get(),d);
return this.pushStack(!d[0]||!d[0].parentNode||d[0].parentNode.nodeType===11||!e[0]||!e[0].parentNode||e[0].parentNode.nodeType===11?e:c.unique(e));
},andSelf:function(){
return this.add(this.prevObject);
}});
c.each({parent:function(a){
return (a=a.parentNode)&&a.nodeType!==11?a:null;
},parents:function(a){
return c.dir(a,"parentNode");
},parentsUntil:function(a,b,d){
return c.dir(a,"parentNode",d);
},next:function(a){
return c.nth(a,2,"nextSibling");
},prev:function(a){
return c.nth(a,2,"previousSibling");
},nextAll:function(a){
return c.dir(a,"nextSibling");
},prevAll:function(a){
return c.dir(a,"previousSibling");
},nextUntil:function(a,b,d){
return c.dir(a,"nextSibling",d);
},prevUntil:function(a,b,d){
return c.dir(a,"previousSibling",d);
},siblings:function(a){
return c.sibling(a.parentNode.firstChild,a);
},children:function(a){
return c.sibling(a.firstChild);
},contents:function(a){
return c.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:c.makeArray(a.childNodes);
}},function(a,b){
c.fn[a]=function(d,e){
var f=c.map(this,b,d);
Za.test(a)||(e=d);
if(e&&typeof e==="string"){
f=c.filter(e,f);
}
f=this.length>1?c.unique(f):f;
if((this.length>1||ab.test(e))&&$a.test(a)){
f=f.reverse();
}
return this.pushStack(f,a,bb.call(arguments).join(","));
};
});
c.extend({filter:function(a,b,d){
if(d){
a=":not("+a+")";
}
return b.length===1?c.find.matchesSelector(b[0],a)?[b[0]]:[]:c.find.matches(a,b);
},dir:function(a,b,d){
var e=[];
for(a=a[b];a&&a.nodeType!==9&&(d===B||a.nodeType!==1||!c(a).is(d));){
a.nodeType===1&&e.push(a);
a=a[b];
}
return e;
},nth:function(a,b,d){
b=b||1;
for(var e=0;a;a=a[d]){
if(a.nodeType===1&&++e===b){
break;
}
}
return a;
},sibling:function(a,b){
for(var d=[];a;a=a.nextSibling){
a.nodeType===1&&a!==b&&d.push(a);
}
return d;
}});
var za=/ jQuery\d+="(?:\d+|null)"/g,$=/^\s+/,Aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Ba=/<([\w:]+)/,db=/<tbody/i,eb=/<|&#?\w+;/,Ca=/<(?:script|object|embed|option|style)/i,Da=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/\=([^="'>\s]+\/)>/g,P={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};
P.optgroup=P.option;
P.tbody=P.tfoot=P.colgroup=P.caption=P.thead;
P.th=P.td;
if(!c.support.htmlSerialize){
P._default=[1,"div<div>","</div>"];
}
c.fn.extend({text:function(a){
if(c.isFunction(a)){
return this.each(function(b){
var d=c(this);
d.text(a.call(this,b,d.text()));
});
}
if(typeof a!=="object"&&a!==B){
return this.empty().append((this[0]&&this[0].ownerDocument||t).createTextNode(a));
}
return c.text(this);
},wrapAll:function(a){
if(c.isFunction(a)){
return this.each(function(d){
c(this).wrapAll(a.call(this,d));
});
}
if(this[0]){
var b=c(a,this[0].ownerDocument).eq(0).clone(true);
this[0].parentNode&&b.insertBefore(this[0]);
b.map(function(){
for(var d=this;d.firstChild&&d.firstChild.nodeType===1;){
d=d.firstChild;
}
return d;
}).append(this);
}
return this;
},wrapInner:function(a){
if(c.isFunction(a)){
return this.each(function(b){
c(this).wrapInner(a.call(this,b));
});
}
return this.each(function(){
var b=c(this),d=b.contents();
d.length?d.wrapAll(a):b.append(a);
});
},wrap:function(a){
return this.each(function(){
c(this).wrapAll(a);
});
},unwrap:function(){
return this.parent().each(function(){
c.nodeName(this,"body")||c(this).replaceWith(this.childNodes);
}).end();
},append:function(){
return this.domManip(arguments,true,function(a){
this.nodeType===1&&this.appendChild(a);
});
},prepend:function(){
return this.domManip(arguments,true,function(a){
this.nodeType===1&&this.insertBefore(a,this.firstChild);
});
},before:function(){
if(this[0]&&this[0].parentNode){
return this.domManip(arguments,false,function(b){
this.parentNode.insertBefore(b,this);
});
}else{
if(arguments.length){
var a=c(arguments[0]);
a.push.apply(a,this.toArray());
return this.pushStack(a,"before",arguments);
}
}
},after:function(){
if(this[0]&&this[0].parentNode){
return this.domManip(arguments,false,function(b){
this.parentNode.insertBefore(b,this.nextSibling);
});
}else{
if(arguments.length){
var a=this.pushStack(this,"after",arguments);
a.push.apply(a,c(arguments[0]).toArray());
return a;
}
}
},remove:function(a,b){
for(var d=0,e;(e=this[d])!=null;d++){
if(!a||c.filter(a,[e]).length){
if(!b&&e.nodeType===1){
c.cleanData(e.getElementsByTagName("*"));
c.cleanData([e]);
}
e.parentNode&&e.parentNode.removeChild(e);
}
}
return this;
},empty:function(){
for(var a=0,b;(b=this[a])!=null;a++){
for(b.nodeType===1&&c.cleanData(b.getElementsByTagName("*"));b.firstChild;){
b.removeChild(b.firstChild);
}
}
return this;
},clone:function(a){
var b=this.map(function(){
if(!c.support.noCloneEvent&&!c.isXMLDoc(this)){
var d=this.outerHTML,e=this.ownerDocument;
if(!d){
d=e.createElement("div");
d.appendChild(this.cloneNode(true));
d=d.innerHTML;
}
return c.clean([d.replace(za,"").replace(fb,"=\"$1\">").replace($,"")],e)[0];
}else{
return this.cloneNode(true);
}
});
if(a===true){
na(this,b);
na(this.find("*"),b.find("*"));
}
return b;
},html:function(a){
if(a===B){
return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(za,""):null;
}else{
if(typeof a==="string"&&!Ca.test(a)&&(c.support.leadingWhitespace||!$.test(a))&&!P[(Ba.exec(a)||["",""])[1].toLowerCase()]){
a=a.replace(Aa,"<$1></$2>");
try{
for(var b=0,d=this.length;b<d;b++){
if(this[b].nodeType===1){
c.cleanData(this[b].getElementsByTagName("*"));
this[b].innerHTML=a;
}
}
}
catch(e){
this.empty().append(a);
}
}else{
c.isFunction(a)?this.each(function(f){
var h=c(this);
h.html(a.call(this,f,h.html()));
}):this.empty().append(a);
}
}
return this;
},replaceWith:function(a){
if(this[0]&&this[0].parentNode){
if(c.isFunction(a)){
return this.each(function(b){
var d=c(this),e=d.html();
d.replaceWith(a.call(this,b,e));
});
}
if(typeof a!=="string"){
a=c(a).detach();
}
return this.each(function(){
var b=this.nextSibling,d=this.parentNode;
c(this).remove();
b?c(b).before(a):c(d).append(a);
});
}else{
return this.pushStack(c(c.isFunction(a)?a():a),"replaceWith",a);
}
},detach:function(a){
return this.remove(a,true);
},domManip:function(a,b,d){
var e,f,h,l=a[0],k=[];
if(!c.support.checkClone&&arguments.length===3&&typeof l==="string"&&Da.test(l)){
return this.each(function(){
c(this).domManip(a,b,d,true);
});
}
if(c.isFunction(l)){
return this.each(function(x){
var r=c(this);
a[0]=l.call(this,x,b?r.html():B);
r.domManip(a,b,d);
});
}
if(this[0]){
e=l&&l.parentNode;
e=c.support.parentNode&&e&&e.nodeType===11&&e.childNodes.length===this.length?{fragment:e}:c.buildFragment(a,this,k);
h=e.fragment;
if(f=h.childNodes.length===1?h=h.firstChild:h.firstChild){
b=b&&c.nodeName(f,"tr");
f=0;
for(var o=this.length;f<o;f++){
d.call(b?c.nodeName(this[f],"table")?this[f].getElementsByTagName("tbody")[0]||this[f].appendChild(this[f].ownerDocument.createElement("tbody")):this[f]:this[f],f>0||e.cacheable||this.length>1?h.cloneNode(true):h);
}
}
k.length&&c.each(k,Oa);
}
return this;
}});
c.buildFragment=function(a,b,d){
var e,f,h;
b=b&&b[0]?b[0].ownerDocument||b[0]:t;
if(a.length===1&&typeof a[0]==="string"&&a[0].length<512&&b===t&&!Ca.test(a[0])&&(c.support.checkClone||!Da.test(a[0]))){
f=true;
if(h=c.fragments[a[0]]){
if(h!==1){
e=h;
}
}
}
if(!e){
e=b.createDocumentFragment();
c.clean(a,b,e,d);
}
if(f){
c.fragments[a[0]]=h?e:1;
}
return {fragment:e,cacheable:f};
};
c.fragments={};
c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){
c.fn[a]=function(d){
var e=[];
d=c(d);
var f=this.length===1&&this[0].parentNode;
if(f&&f.nodeType===11&&f.childNodes.length===1&&d.length===1){
d[b](this[0]);
return this;
}else{
f=0;
for(var h=d.length;f<h;f++){
var l=(f>0?this.clone(true):this).get();
c(d[f])[b](l);
e=e.concat(l);
}
return this.pushStack(e,a,d.selector);
}
};
});
c.extend({clean:function(a,b,d,e){
b=b||t;
if(typeof b.createElement==="undefined"){
b=b.ownerDocument||b[0]&&b[0].ownerDocument||t;
}
for(var f=[],h=0,l;(l=a[h])!=null;h++){
if(typeof l==="number"){
l+="";
}
if(l){
if(typeof l==="string"&&!eb.test(l)){
l=b.createTextNode(l);
}else{
if(typeof l==="string"){
l=l.replace(Aa,"<$1></$2>");
var k=(Ba.exec(l)||["",""])[1].toLowerCase(),o=P[k]||P._default,x=o[0],r=b.createElement("div");
for(r.innerHTML=o[1]+l+o[2];x--;){
r=r.lastChild;
}
if(!c.support.tbody){
x=db.test(l);
k=k==="table"&&!x?r.firstChild&&r.firstChild.childNodes:o[1]==="<table>"&&!x?r.childNodes:[];
for(o=k.length-1;o>=0;--o){
c.nodeName(k[o],"tbody")&&!k[o].childNodes.length&&k[o].parentNode.removeChild(k[o]);
}
}
!c.support.leadingWhitespace&&$.test(l)&&r.insertBefore(b.createTextNode($.exec(l)[0]),r.firstChild);
l=r.childNodes;
}
}
if(l.nodeType){
f.push(l);
}else{
f=c.merge(f,l);
}
}
}
if(d){
for(h=0;f[h];h++){
if(e&&c.nodeName(f[h],"script")&&(!f[h].type||f[h].type.toLowerCase()==="text/javascript")){
e.push(f[h].parentNode?f[h].parentNode.removeChild(f[h]):f[h]);
}else{
f[h].nodeType===1&&f.splice.apply(f,[h+1,0].concat(c.makeArray(f[h].getElementsByTagName("script"))));
d.appendChild(f[h]);
}
}
}
return f;
},cleanData:function(a){
for(var b,d,e=c.cache,f=c.event.special,h=c.support.deleteExpando,l=0,k;(k=a[l])!=null;l++){
if(!(k.nodeName&&c.noData[k.nodeName.toLowerCase()])){
if(d=k[c.expando]){
if((b=e[d])&&b.events){
for(var o in b.events){
f[o]?c.event.remove(k,o):c.removeEvent(k,o,b.handle);
}
}
if(h){
delete k[c.expando];
}else{
k.removeAttribute&&k.removeAttribute(c.expando);
}
delete e[d];
}
}
}
}});
var Ea=/alpha\([^)]*\)/i,gb=/opacity=([^)]*)/,hb=/-([a-z])/ig,ib=/([A-Z])/g,Fa=/^-?\d+(?:px)?$/i,jb=/^-?\d/,kb={position:"absolute",visibility:"hidden",display:"block"},Pa=["Left","Right"],Qa=["Top","Bottom"],W,Ga,aa,lb=function(a,b){
return b.toUpperCase();
};
c.fn.css=function(a,b){
if(arguments.length===2&&b===B){
return this;
}
return c.access(this,a,b,true,function(d,e,f){
return f!==B?c.style(d,e,f):c.css(d,e);
});
};
c.extend({cssHooks:{opacity:{get:function(a,b){
if(b){
var d=W(a,"opacity","opacity");
return d===""?"1":d;
}else{
return a.style.opacity;
}
}}},cssNumber:{zIndex:true,fontWeight:true,opacity:true,zoom:true,lineHeight:true},cssProps:{"float":c.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,d,e){
if(!(!a||a.nodeType===3||a.nodeType===8||!a.style)){
var f,h=c.camelCase(b),l=a.style,k=c.cssHooks[h];
b=c.cssProps[h]||h;
if(d!==B){
if(!(typeof d==="number"&&isNaN(d)||d==null)){
if(typeof d==="number"&&!c.cssNumber[h]){
d+="px";
}
if(!k||!("set" in k)||(d=k.set(a,d))!==B){
try{
l[b]=d;
}
catch(o){
}
}
}
}else{
if(k&&"get" in k&&(f=k.get(a,false,e))!==B){
return f;
}
return l[b];
}
}
},css:function(a,b,d){
var e,f=c.camelCase(b),h=c.cssHooks[f];
b=c.cssProps[f]||f;
if(h&&"get" in h&&(e=h.get(a,true,d))!==B){
return e;
}else{
if(W){
return W(a,b,f);
}
}
},swap:function(a,b,d){
var e={},f;
for(f in b){
e[f]=a.style[f];
a.style[f]=b[f];
}
d.call(a);
for(f in b){
a.style[f]=e[f];
}
},camelCase:function(a){
return a.replace(hb,lb);
}});
c.curCSS=c.css;
c.each(["height","width"],function(a,b){
c.cssHooks[b]={get:function(d,e,f){
var h;
if(e){
if(d.offsetWidth!==0){
h=oa(d,b,f);
}else{
c.swap(d,kb,function(){
h=oa(d,b,f);
});
}
if(h<=0){
h=W(d,b,b);
if(h==="0px"&&aa){
h=aa(d,b,b);
}
if(h!=null){
return h===""||h==="auto"?"0px":h;
}
}
if(h<0||h==null){
h=d.style[b];
return h===""||h==="auto"?"0px":h;
}
return typeof h==="string"?h:h+"px";
}
},set:function(d,e){
if(Fa.test(e)){
e=parseFloat(e);
if(e>=0){
return e+"px";
}
}else{
return e;
}
}};
});
if(!c.support.opacity){
c.cssHooks.opacity={get:function(a,b){
return gb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":"";
},set:function(a,b){
var d=a.style;
d.zoom=1;
var e=c.isNaN(b)?"":"alpha(opacity="+b*100+")",f=d.filter||"";
d.filter=Ea.test(f)?f.replace(Ea,e):d.filter+" "+e;
}};
}
if(t.defaultView&&t.defaultView.getComputedStyle){
Ga=function(a,b,d){
var e;
d=d.replace(ib,"-$1").toLowerCase();
if(!(b=a.ownerDocument.defaultView)){
return B;
}
if(b=b.getComputedStyle(a,null)){
e=b.getPropertyValue(d);
if(e===""&&!c.contains(a.ownerDocument.documentElement,a)){
e=c.style(a,d);
}
}
return e;
};
}
if(t.documentElement.currentStyle){
aa=function(a,b){
var d,e,f=a.currentStyle&&a.currentStyle[b],h=a.style;
if(!Fa.test(f)&&jb.test(f)){
d=h.left;
e=a.runtimeStyle.left;
a.runtimeStyle.left=a.currentStyle.left;
h.left=b==="fontSize"?"1em":f||0;
f=h.pixelLeft+"px";
h.left=d;
a.runtimeStyle.left=e;
}
return f===""?"auto":f;
};
}
W=Ga||aa;
if(c.expr&&c.expr.filters){
c.expr.filters.hidden=function(a){
var b=a.offsetHeight;
return a.offsetWidth===0&&b===0||!c.support.reliableHiddenOffsets&&(a.style.display||c.css(a,"display"))==="none";
};
c.expr.filters.visible=function(a){
return !c.expr.filters.hidden(a);
};
}
var mb=c.now(),nb=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,ob=/^(?:select|textarea)/i,pb=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,qb=/^(?:GET|HEAD)$/,Ra=/\[\]$/,T=/\=\?(&|$)/,ja=/\?/,rb=/([?&])_=[^&]*/,sb=/^(\w+:)?\/\/([^\/?#]+)/,tb=/%20/g,ub=/#.*$/,Ha=c.fn.load;
c.fn.extend({load:function(a,b,d){
if(typeof a!=="string"&&Ha){
return Ha.apply(this,arguments);
}else{
if(!this.length){
return this;
}
}
var e=a.indexOf(" ");
if(e>=0){
var f=a.slice(e,a.length);
a=a.slice(0,e);
}
e="GET";
if(b){
if(c.isFunction(b)){
d=b;
b=null;
}else{
if(typeof b==="object"){
b=c.param(b,c.ajaxSettings.traditional);
e="POST";
}
}
}
var h=this;
c.ajax({url:a,type:e,dataType:"html",data:b,complete:function(l,k){
if(k==="success"||k==="notmodified"){
h.html(f?c("<div>").append(l.responseText.replace(nb,"")).find(f):l.responseText);
}
d&&h.each(d,[l.responseText,k,l]);
}});
return this;
},serialize:function(){
return c.param(this.serializeArray());
},serializeArray:function(){
return this.map(function(){
return this.elements?c.makeArray(this.elements):this;
}).filter(function(){
return this.name&&!this.disabled&&(this.checked||ob.test(this.nodeName)||pb.test(this.type));
}).map(function(a,b){
var d=c(this).val();
return d==null?null:c.isArray(d)?c.map(d,function(e){
return {name:b.name,value:e};
}):{name:b.name,value:d};
}).get();
}});
c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){
c.fn[b]=function(d){
return this.bind(b,d);
};
});
c.extend({get:function(a,b,d,e){
if(c.isFunction(b)){
e=e||d;
d=b;
b=null;
}
return c.ajax({type:"GET",url:a,data:b,success:d,dataType:e});
},getScript:function(a,b){
return c.get(a,null,b,"script");
},getJSON:function(a,b,d){
return c.get(a,b,d,"json");
},post:function(a,b,d,e){
if(c.isFunction(b)){
e=e||d;
d=b;
b={};
}
return c.ajax({type:"POST",url:a,data:b,success:d,dataType:e});
},ajaxSetup:function(a){
c.extend(c.ajaxSettings,a);
},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){
return new E.XMLHttpRequest;
},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},ajax:function(a){
var b=c.extend(true,{},c.ajaxSettings,a),d,e,f,h=b.type.toUpperCase(),l=qb.test(h);
b.url=b.url.replace(ub,"");
b.context=a&&a.context!=null?a.context:b;
if(b.data&&b.processData&&typeof b.data!=="string"){
b.data=c.param(b.data,b.traditional);
}
if(b.dataType==="jsonp"){
if(h==="GET"){
T.test(b.url)||(b.url+=(ja.test(b.url)?"&":"?")+(b.jsonp||"callback")+"=?");
}else{
if(!b.data||!T.test(b.data)){
b.data=(b.data?b.data+"&":"")+(b.jsonp||"callback")+"=?";
}
}
b.dataType="json";
}
if(b.dataType==="json"&&(b.data&&T.test(b.data)||T.test(b.url))){
d=b.jsonpCallback||"jsonp"+mb++;
if(b.data){
b.data=(b.data+"").replace(T,"="+d+"$1");
}
b.url=b.url.replace(T,"="+d+"$1");
b.dataType="script";
var k=E[d];
E[d]=function(m){
if(c.isFunction(k)){
k(m);
}else{
E[d]=B;
try{
delete E[d];
}
catch(p){
}
}
f=m;
c.handleSuccess(b,w,e,f);
c.handleComplete(b,w,e,f);
r&&r.removeChild(A);
};
}
if(b.dataType==="script"&&b.cache===null){
b.cache=false;
}
if(b.cache===false&&l){
var o=c.now(),x=b.url.replace(rb,"$1_="+o);
b.url=x+(x===b.url?(ja.test(b.url)?"&":"?")+"_="+o:"");
}
if(b.data&&l){
b.url+=(ja.test(b.url)?"&":"?")+b.data;
}
b.global&&c.active++===0&&c.event.trigger("ajaxStart");
o=(o=sb.exec(b.url))&&(o[1]&&o[1].toLowerCase()!==location.protocol||o[2].toLowerCase()!==location.host);
if(b.dataType==="script"&&h==="GET"&&o){
var r=t.getElementsByTagName("head")[0]||t.documentElement,A=t.createElement("script");
if(b.scriptCharset){
A.charset=b.scriptCharset;
}
A.src=b.url;
if(!d){
var C=false;
A.onload=A.onreadystatechange=function(){
if(!C&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){
C=true;
c.handleSuccess(b,w,e,f);
c.handleComplete(b,w,e,f);
A.onload=A.onreadystatechange=null;
r&&A.parentNode&&r.removeChild(A);
}
};
}
r.insertBefore(A,r.firstChild);
return B;
}
var J=false,w=b.xhr();
if(w){
b.username?w.open(h,b.url,b.async,b.username,b.password):w.open(h,b.url,b.async);
try{
if(b.data!=null&&!l||a&&a.contentType){
w.setRequestHeader("Content-Type",b.contentType);
}
if(b.ifModified){
c.lastModified[b.url]&&w.setRequestHeader("If-Modified-Since",c.lastModified[b.url]);
c.etag[b.url]&&w.setRequestHeader("If-None-Match",c.etag[b.url]);
}
o||w.setRequestHeader("X-Requested-With","XMLHttpRequest");
w.setRequestHeader("Accept",b.dataType&&b.accepts[b.dataType]?b.accepts[b.dataType]+", */*; q=0.01":b.accepts._default);
}
catch(I){
}
if(b.beforeSend&&b.beforeSend.call(b.context,w,b)===false){
b.global&&c.active--===1&&c.event.trigger("ajaxStop");
w.abort();
return false;
}
b.global&&c.triggerGlobal(b,"ajaxSend",[w,b]);
var L=w.onreadystatechange=function(m){
if(!w||w.readyState===0||m==="abort"){
J||c.handleComplete(b,w,e,f);
J=true;
if(w){
w.onreadystatechange=c.noop;
}
}else{
if(!J&&w&&(w.readyState===4||m==="timeout")){
J=true;
w.onreadystatechange=c.noop;
e=m==="timeout"?"timeout":!c.httpSuccess(w)?"error":b.ifModified&&c.httpNotModified(w,b.url)?"notmodified":"success";
var p;
if(e==="success"){
try{
f=c.httpData(w,b.dataType,b);
}
catch(q){
e="parsererror";
p=q;
}
}
if(e==="success"||e==="notmodified"){
d||c.handleSuccess(b,w,e,f);
}else{
c.handleError(b,w,e,p);
}
d||c.handleComplete(b,w,e,f);
m==="timeout"&&w.abort();
if(b.async){
w=null;
}
}
}
};
try{
var g=w.abort;
w.abort=function(){
w&&Function.prototype.call.call(g,w);
L("abort");
};
}
catch(i){
}
b.async&&b.timeout>0&&setTimeout(function(){
w&&!J&&L("timeout");
},b.timeout);
try{
w.send(l||b.data==null?null:b.data);
}
catch(n){
c.handleError(b,w,null,n);
c.handleComplete(b,w,e,f);
}
b.async||L();
return w;
}
},param:function(a,b){
var d=[],e=function(h,l){
l=c.isFunction(l)?l():l;
d[d.length]=encodeURIComponent(h)+"="+encodeURIComponent(l);
};
if(b===B){
b=c.ajaxSettings.traditional;
}
if(c.isArray(a)||a.jquery){
c.each(a,function(){
e(this.name,this.value);
});
}else{
for(var f in a){
da(f,a[f],b,e);
}
}
return d.join("&").replace(tb,"+");
}});
c.extend({active:0,lastModified:{},etag:{},handleError:function(a,b,d,e){
a.error&&a.error.call(a.context,b,d,e);
a.global&&c.triggerGlobal(a,"ajaxError",[b,a,e]);
},handleSuccess:function(a,b,d,e){
a.success&&a.success.call(a.context,e,d,b);
a.global&&c.triggerGlobal(a,"ajaxSuccess",[b,a]);
},handleComplete:function(a,b,d){
a.complete&&a.complete.call(a.context,b,d);
a.global&&c.triggerGlobal(a,"ajaxComplete",[b,a]);
a.global&&c.active--===1&&c.event.trigger("ajaxStop");
},triggerGlobal:function(a,b,d){
(a.context&&a.context.url==null?c(a.context):c.event).trigger(b,d);
},httpSuccess:function(a){
try{
return !a.status&&location.protocol==="file:"||a.status>=200&&a.status<300||a.status===304||a.status===1223;
}
catch(b){
}
return false;
},httpNotModified:function(a,b){
var d=a.getResponseHeader("Last-Modified"),e=a.getResponseHeader("Etag");
if(d){
c.lastModified[b]=d;
}
if(e){
c.etag[b]=e;
}
return a.status===304;
},httpData:function(a,b,d){
var e=a.getResponseHeader("content-type")||"",f=b==="xml"||!b&&e.indexOf("xml")>=0;
a=f?a.responseXML:a.responseText;
f&&a.documentElement.nodeName==="parsererror"&&c.error("parsererror");
if(d&&d.dataFilter){
a=d.dataFilter(a,b);
}
if(typeof a==="string"){
if(b==="json"||!b&&e.indexOf("json")>=0){
a=c.parseJSON(a);
}else{
if(b==="script"||!b&&e.indexOf("javascript")>=0){
c.globalEval(a);
}
}
}
return a;
}});
if(E.ActiveXObject){
c.ajaxSettings.xhr=function(){
if(E.location.protocol!=="file:"){
try{
return new E.XMLHttpRequest;
}
catch(a){
}
}
try{
return new E.ActiveXObject("Microsoft.XMLHTTP");
}
catch(b){
}
};
}
c.support.ajax=!!c.ajaxSettings.xhr();
var ea={},vb=/^(?:toggle|show|hide)$/,wb=/^([+\-]=)?([\d+.\-]+)(.*)$/,ba,pa=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];
c.fn.extend({show:function(a,b,d){
if(a||a===0){
return this.animate(S("show",3),a,b,d);
}else{
d=0;
for(var e=this.length;d<e;d++){
a=this[d];
b=a.style.display;
if(!c.data(a,"olddisplay")&&b==="none"){
b=a.style.display="";
}
b===""&&c.css(a,"display")==="none"&&c.data(a,"olddisplay",qa(a.nodeName));
}
for(d=0;d<e;d++){
a=this[d];
b=a.style.display;
if(b===""||b==="none"){
a.style.display=c.data(a,"olddisplay")||"";
}
}
return this;
}
},hide:function(a,b,d){
if(a||a===0){
return this.animate(S("hide",3),a,b,d);
}else{
a=0;
for(b=this.length;a<b;a++){
d=c.css(this[a],"display");
d!=="none"&&c.data(this[a],"olddisplay",d);
}
for(a=0;a<b;a++){
this[a].style.display="none";
}
return this;
}
},_toggle:c.fn.toggle,toggle:function(a,b,d){
var e=typeof a==="boolean";
if(c.isFunction(a)&&c.isFunction(b)){
this._toggle.apply(this,arguments);
}else{
a==null||e?this.each(function(){
var f=e?a:c(this).is(":hidden");
c(this)[f?"show":"hide"]();
}):this.animate(S("toggle",3),a,b,d);
}
return this;
},fadeTo:function(a,b,d,e){
return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,d,e);
},animate:function(a,b,d,e){
var f=c.speed(b,d,e);
if(c.isEmptyObject(a)){
return this.each(f.complete);
}
return this[f.queue===false?"each":"queue"](function(){
var h=c.extend({},f),l,k=this.nodeType===1,o=k&&c(this).is(":hidden"),x=this;
for(l in a){
var r=c.camelCase(l);
if(l!==r){
a[r]=a[l];
delete a[l];
l=r;
}
if(a[l]==="hide"&&o||a[l]==="show"&&!o){
return h.complete.call(this);
}
if(k&&(l==="height"||l==="width")){
h.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];
if(c.css(this,"display")==="inline"&&c.css(this,"float")==="none"){
if(c.support.inlineBlockNeedsLayout){
if(qa(this.nodeName)==="inline"){
this.style.display="inline-block";
}else{
this.style.display="inline";
this.style.zoom=1;
}
}else{
this.style.display="inline-block";
}
}
}
if(c.isArray(a[l])){
(h.specialEasing=h.specialEasing||{})[l]=a[l][1];
a[l]=a[l][0];
}
}
if(h.overflow!=null){
this.style.overflow="hidden";
}
h.curAnim=c.extend({},a);
c.each(a,function(A,C){
var J=new c.fx(x,h,A);
if(vb.test(C)){
J[C==="toggle"?o?"show":"hide":C](a);
}else{
var w=wb.exec(C),I=J.cur()||0;
if(w){
var L=parseFloat(w[2]),g=w[3]||"px";
if(g!=="px"){
c.style(x,A,(L||1)+g);
I=(L||1)/J.cur()*I;
c.style(x,A,I+g);
}
if(w[1]){
L=(w[1]==="-="?-1:1)*L+I;
}
J.custom(I,L,g);
}else{
J.custom(I,C,"");
}
}
});
return true;
});
},stop:function(a,b){
var d=c.timers;
a&&this.queue([]);
this.each(function(){
for(var e=d.length-1;e>=0;e--){
if(d[e].elem===this){
b&&d[e](true);
d.splice(e,1);
}
}
});
b||this.dequeue();
return this;
}});
c.each({slideDown:S("show",1),slideUp:S("hide",1),slideToggle:S("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){
c.fn[a]=function(d,e,f){
return this.animate(b,d,e,f);
};
});
c.extend({speed:function(a,b,d){
var e=a&&typeof a==="object"?c.extend({},a):{complete:d||!d&&b||c.isFunction(a)&&a,duration:a,easing:d&&b||b&&!c.isFunction(b)&&b};
e.duration=c.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in c.fx.speeds?c.fx.speeds[e.duration]:c.fx.speeds._default;
e.old=e.complete;
e.complete=function(){
e.queue!==false&&c(this).dequeue();
c.isFunction(e.old)&&e.old.call(this);
};
return e;
},easing:{linear:function(a,b,d,e){
return d+e*a;
},swing:function(a,b,d,e){
return (-Math.cos(a*Math.PI)/2+0.5)*e+d;
}},timers:[],fx:function(a,b,d){
this.options=b;
this.elem=a;
this.prop=d;
if(!b.orig){
b.orig={};
}
}});
c.fx.prototype={update:function(){
this.options.step&&this.options.step.call(this.elem,this.now,this);
(c.fx.step[this.prop]||c.fx.step._default)(this);
},cur:function(){
if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){
return this.elem[this.prop];
}
var a=parseFloat(c.css(this.elem,this.prop));
return a&&a>-10000?a:0;
},custom:function(a,b,d){
function e(l){
return f.step(l);
};
var f=this,h=c.fx;
this.startTime=c.now();
this.start=a;
this.end=b;
this.unit=d||this.unit||"px";
this.now=this.start;
this.pos=this.state=0;
e.elem=this.elem;
if(e()&&c.timers.push(e)&&!ba){
ba=setInterval(h.tick,h.interval);
}
},show:function(){
this.options.orig[this.prop]=c.style(this.elem,this.prop);
this.options.show=true;
this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());
c(this.elem).show();
},hide:function(){
this.options.orig[this.prop]=c.style(this.elem,this.prop);
this.options.hide=true;
this.custom(this.cur(),0);
},step:function(a){
var b=c.now(),d=true;
if(a||b>=this.options.duration+this.startTime){
this.now=this.end;
this.pos=this.state=1;
this.update();
this.options.curAnim[this.prop]=true;
for(var e in this.options.curAnim){
if(this.options.curAnim[e]!==true){
d=false;
}
}
if(d){
if(this.options.overflow!=null&&!c.support.shrinkWrapBlocks){
var f=this.elem,h=this.options;
c.each(["","X","Y"],function(k,o){
f.style["overflow"+o]=h.overflow[k];
});
}
this.options.hide&&c(this.elem).hide();
if(this.options.hide||this.options.show){
for(var l in this.options.curAnim){
c.style(this.elem,l,this.options.orig[l]);
}
}
this.options.complete.call(this.elem);
}
return false;
}else{
a=b-this.startTime;
this.state=a/this.options.duration;
b=this.options.easing||(c.easing.swing?"swing":"linear");
this.pos=c.easing[this.options.specialEasing&&this.options.specialEasing[this.prop]||b](this.state,a,0,1,this.options.duration);
this.now=this.start+(this.end-this.start)*this.pos;
this.update();
}
return true;
}};
c.extend(c.fx,{tick:function(){
for(var a=c.timers,b=0;b<a.length;b++){
a[b]()||a.splice(b--,1);
}
a.length||c.fx.stop();
},interval:13,stop:function(){
clearInterval(ba);
ba=null;
},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){
c.style(a.elem,"opacity",a.now);
},_default:function(a){
if(a.elem.style&&a.elem.style[a.prop]!=null){
a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit;
}else{
a.elem[a.prop]=a.now;
}
}}});
if(c.expr&&c.expr.filters){
c.expr.filters.animated=function(a){
return c.grep(c.timers,function(b){
return a===b.elem;
}).length;
};
}
var xb=/^t(?:able|d|h)$/i,Ia=/^(?:body|html)$/i;
c.fn.offset="getBoundingClientRect" in t.documentElement?function(a){
var b=this[0],d;
if(a){
return this.each(function(l){
c.offset.setOffset(this,a,l);
});
}
if(!b||!b.ownerDocument){
return null;
}
if(b===b.ownerDocument.body){
return c.offset.bodyOffset(b);
}
try{
d=b.getBoundingClientRect();
}
catch(e){
}
var f=b.ownerDocument,h=f.documentElement;
if(!d||!c.contains(h,b)){
return d||{top:0,left:0};
}
b=f.body;
f=fa(f);
return {top:d.top+(f.pageYOffset||c.support.boxModel&&h.scrollTop||b.scrollTop)-(h.clientTop||b.clientTop||0),left:d.left+(f.pageXOffset||c.support.boxModel&&h.scrollLeft||b.scrollLeft)-(h.clientLeft||b.clientLeft||0)};
}:function(a){
var b=this[0];
if(a){
return this.each(function(x){
c.offset.setOffset(this,a,x);
});
}
if(!b||!b.ownerDocument){
return null;
}
if(b===b.ownerDocument.body){
return c.offset.bodyOffset(b);
}
c.offset.initialize();
var d,e=b.offsetParent,f=b.ownerDocument,h=f.documentElement,l=f.body;
d=(f=f.defaultView)?f.getComputedStyle(b,null):b.currentStyle;
for(var k=b.offsetTop,o=b.offsetLeft;(b=b.parentNode)&&b!==l&&b!==h;){
if(c.offset.supportsFixedPosition&&d.position==="fixed"){
break;
}
d=f?f.getComputedStyle(b,null):b.currentStyle;
k-=b.scrollTop;
o-=b.scrollLeft;
if(b===e){
k+=b.offsetTop;
o+=b.offsetLeft;
if(c.offset.doesNotAddBorder&&!(c.offset.doesAddBorderForTableAndCells&&xb.test(b.nodeName))){
k+=parseFloat(d.borderTopWidth)||0;
o+=parseFloat(d.borderLeftWidth)||0;
}
e=b.offsetParent;
}
if(c.offset.subtractsBorderForOverflowNotVisible&&d.overflow!=="visible"){
k+=parseFloat(d.borderTopWidth)||0;
o+=parseFloat(d.borderLeftWidth)||0;
}
d=d;
}
if(d.position==="relative"||d.position==="static"){
k+=l.offsetTop;
o+=l.offsetLeft;
}
if(c.offset.supportsFixedPosition&&d.position==="fixed"){
k+=Math.max(h.scrollTop,l.scrollTop);
o+=Math.max(h.scrollLeft,l.scrollLeft);
}
return {top:k,left:o};
};
c.offset={initialize:function(){
var a=t.body,b=t.createElement("div"),d,e,f,h=parseFloat(c.css(a,"marginTop"))||0;
c.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});
b.innerHTML="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
a.insertBefore(b,a.firstChild);
d=b.firstChild;
e=d.firstChild;
f=d.nextSibling.firstChild.firstChild;
this.doesNotAddBorder=e.offsetTop!==5;
this.doesAddBorderForTableAndCells=f.offsetTop===5;
e.style.position="fixed";
e.style.top="20px";
this.supportsFixedPosition=e.offsetTop===20||e.offsetTop===15;
e.style.position=e.style.top="";
d.style.overflow="hidden";
d.style.position="relative";
this.subtractsBorderForOverflowNotVisible=e.offsetTop===-5;
this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==h;
a.removeChild(b);
c.offset.initialize=c.noop;
},bodyOffset:function(a){
var b=a.offsetTop,d=a.offsetLeft;
c.offset.initialize();
if(c.offset.doesNotIncludeMarginInBodyOffset){
b+=parseFloat(c.css(a,"marginTop"))||0;
d+=parseFloat(c.css(a,"marginLeft"))||0;
}
return {top:b,left:d};
},setOffset:function(a,b,d){
var e=c.css(a,"position");
if(e==="static"){
a.style.position="relative";
}
var f=c(a),h=f.offset(),l=c.css(a,"top"),k=c.css(a,"left"),o=e==="absolute"&&c.inArray("auto",[l,k])>-1;
e={};
var x={};
if(o){
x=f.position();
}
l=o?x.top:parseInt(l,10)||0;
k=o?x.left:parseInt(k,10)||0;
if(c.isFunction(b)){
b=b.call(a,d,h);
}
if(b.top!=null){
e.top=b.top-h.top+l;
}
if(b.left!=null){
e.left=b.left-h.left+k;
}
"using" in b?b.using.call(a,e):f.css(e);
}};
c.fn.extend({position:function(){
if(!this[0]){
return null;
}
var a=this[0],b=this.offsetParent(),d=this.offset(),e=Ia.test(b[0].nodeName)?{top:0,left:0}:b.offset();
d.top-=parseFloat(c.css(a,"marginTop"))||0;
d.left-=parseFloat(c.css(a,"marginLeft"))||0;
e.top+=parseFloat(c.css(b[0],"borderTopWidth"))||0;
e.left+=parseFloat(c.css(b[0],"borderLeftWidth"))||0;
return {top:d.top-e.top,left:d.left-e.left};
},offsetParent:function(){
return this.map(function(){
for(var a=this.offsetParent||t.body;a&&!Ia.test(a.nodeName)&&c.css(a,"position")==="static";){
a=a.offsetParent;
}
return a;
});
}});
c.each(["Left","Top"],function(a,b){
var d="scroll"+b;
c.fn[d]=function(e){
var f=this[0],h;
if(!f){
return null;
}
if(e!==B){
return this.each(function(){
if(h=fa(this)){
h.scrollTo(!a?e:c(h).scrollLeft(),a?e:c(h).scrollTop());
}else{
this[d]=e;
}
});
}else{
return (h=fa(f))?"pageXOffset" in h?h[a?"pageYOffset":"pageXOffset"]:c.support.boxModel&&h.document.documentElement[d]||h.document.body[d]:f[d];
}
};
});
c.each(["Height","Width"],function(a,b){
var d=b.toLowerCase();
c.fn["inner"+b]=function(){
return this[0]?parseFloat(c.css(this[0],d,"padding")):null;
};
c.fn["outer"+b]=function(e){
return this[0]?parseFloat(c.css(this[0],d,e?"margin":"border")):null;
};
c.fn[d]=function(e){
var f=this[0];
if(!f){
return e==null?null:this;
}
if(c.isFunction(e)){
return this.each(function(l){
var k=c(this);
k[d](e.call(this,l,k[d]()));
});
}
if(c.isWindow(f)){
return f.document.compatMode==="CSS1Compat"&&f.document.documentElement["client"+b]||f.document.body["client"+b];
}else{
if(f.nodeType===9){
return Math.max(f.documentElement["client"+b],f.body["scroll"+b],f.documentElement["scroll"+b],f.body["offset"+b],f.documentElement["offset"+b]);
}else{
if(e===B){
f=c.css(f,d);
var h=parseFloat(f);
return c.isNaN(h)?f:h;
}else{
return this.css(d,typeof e==="string"?e:e+"px");
}
}
}
};
});
})(window);
;
include.set_path('resources/jquery-ui/js');
(function(c,j){
function k(a){
return !c(a).parents().andSelf().filter(function(){
return c.curCSS(this,"visibility")==="hidden"||c.expr.filters.hidden(this);
}).length;
};
c.ui=c.ui||{};
if(!c.ui.version){
c.extend(c.ui,{version:"1.8.7",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});
c.fn.extend({_focus:c.fn.focus,focus:function(a,b){
return typeof a==="number"?this.each(function(){
var d=this;
setTimeout(function(){
c(d).focus();
b&&b.call(d);
},a);
}):this._focus.apply(this,arguments);
},scrollParent:function(){
var a;
a=c.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){
return /(relative|absolute|fixed)/.test(c.curCSS(this,"position",1))&&/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1));
}).eq(0):this.parents().filter(function(){
return /(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1));
}).eq(0);
return /fixed/.test(this.css("position"))||!a.length?c(document):a;
},zIndex:function(a){
if(a!==j){
return this.css("zIndex",a);
}
if(this.length){
a=c(this[0]);
for(var b;a.length&&a[0]!==document;){
b=a.css("position");
if(b==="absolute"||b==="relative"||b==="fixed"){
b=parseInt(a.css("zIndex"),10);
if(!isNaN(b)&&b!==0){
return b;
}
}
a=a.parent();
}
}
return 0;
},disableSelection:function(){
return this.bind((c.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){
a.preventDefault();
});
},enableSelection:function(){
return this.unbind(".ui-disableSelection");
}});
c.each(["Width","Height"],function(a,b){
function d(f,g,l,m){
c.each(e,function(){
g-=parseFloat(c.curCSS(f,"padding"+this,true))||0;
if(l){
g-=parseFloat(c.curCSS(f,"border"+this+"Width",true))||0;
}
if(m){
g-=parseFloat(c.curCSS(f,"margin"+this,true))||0;
}
});
return g;
};
var e=b==="Width"?["Left","Right"]:["Top","Bottom"],h=b.toLowerCase(),i={innerWidth:c.fn.innerWidth,innerHeight:c.fn.innerHeight,outerWidth:c.fn.outerWidth,outerHeight:c.fn.outerHeight};
c.fn["inner"+b]=function(f){
if(f===j){
return i["inner"+b].call(this);
}
return this.each(function(){
c(this).css(h,d(this,f)+"px");
});
};
c.fn["outer"+b]=function(f,g){
if(typeof f!=="number"){
return i["outer"+b].call(this,f);
}
return this.each(function(){
c(this).css(h,d(this,f,true,g)+"px");
});
};
});
c.extend(c.expr[":"],{data:function(a,b,d){
return !!c.data(a,d[3]);
},focusable:function(a){
var b=a.nodeName.toLowerCase(),d=c.attr(a,"tabindex");
if("area"===b){
b=a.parentNode;
d=b.name;
if(!a.href||!d||b.nodeName.toLowerCase()!=="map"){
return false;
}
a=c("img[usemap=#"+d+"]")[0];
return !!a&&k(a);
}
return (/input|select|textarea|button|object/.test(b)?!a.disabled:"a"==b?a.href||!isNaN(d):!isNaN(d))&&k(a);
},tabbable:function(a){
var b=c.attr(a,"tabindex");
return (isNaN(b)||b>=0)&&c(a).is(":focusable");
}});
c(function(){
var a=document.body,b=a.appendChild(b=document.createElement("div"));
c.extend(b.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});
c.support.minHeight=b.offsetHeight===100;
c.support.selectstart="onselectstart" in b;
a.removeChild(b).style.display="none";
});
c.extend(c.ui,{plugin:{add:function(a,b,d){
a=c.ui[a].prototype;
for(var e in d){
a.plugins[e]=a.plugins[e]||[];
a.plugins[e].push([b,d[e]]);
}
},call:function(a,b,d){
if((b=a.plugins[b])&&a.element[0].parentNode){
for(var e=0;e<b.length;e++){
a.options[b[e][0]]&&b[e][1].apply(a.element,d);
}
}
}},contains:function(a,b){
return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b);
},hasScroll:function(a,b){
if(c(a).css("overflow")==="hidden"){
return false;
}
b=b&&b==="left"?"scrollLeft":"scrollTop";
var d=false;
if(a[b]>0){
return true;
}
a[b]=1;
d=a[b]>0;
a[b]=0;
return d;
},isOverAxis:function(a,b,d){
return a>b&&a<b+d;
},isOver:function(a,b,d,e,h,i){
return c.ui.isOverAxis(a,d,h)&&c.ui.isOverAxis(b,e,i);
}});
}
})(jQuery);
(function(b,j){
if(b.cleanData){
var k=b.cleanData;
b.cleanData=function(a){
for(var c=0,d;(d=a[c])!=null;c++){
b(d).triggerHandler("remove");
}
k(a);
};
}else{
var l=b.fn.remove;
b.fn.remove=function(a,c){
return this.each(function(){
if(!c){
if(!a||b.filter(a,[this]).length){
b("*",this).add([this]).each(function(){
b(this).triggerHandler("remove");
});
}
}
return l.call(b(this),a,c);
});
};
}
b.widget=function(a,c,d){
var e=a.split(".")[0],f;
a=a.split(".")[1];
f=e+"-"+a;
if(!d){
d=c;
c=b.Widget;
}
b.expr[":"][f]=function(h){
return !!b.data(h,a);
};
b[e]=b[e]||{};
b[e][a]=function(h,g){
arguments.length&&this._createWidget(h,g);
};
c=new c;
c.options=b.extend(true,{},c.options);
b[e][a].prototype=b.extend(true,c,{namespace:e,widgetName:a,widgetEventPrefix:b[e][a].prototype.widgetEventPrefix||a,widgetBaseClass:f},d);
b.widget.bridge(a,b[e][a]);
};
b.widget.bridge=function(a,c){
b.fn[a]=function(d){
var e=typeof d==="string",f=Array.prototype.slice.call(arguments,1),h=this;
d=!e&&f.length?b.extend.apply(null,[true,d].concat(f)):d;
if(e&&d.charAt(0)==="_"){
return h;
}
e?this.each(function(){
var g=b.data(this,a),i=g&&b.isFunction(g[d])?g[d].apply(g,f):g;
if(i!==g&&i!==j){
h=i;
return false;
}
}):this.each(function(){
var g=b.data(this,a);
g?g.option(d||{})._init():b.data(this,a,new c(d,this));
});
return h;
};
};
b.Widget=function(a,c){
arguments.length&&this._createWidget(a,c);
};
b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(a,c){
b.data(c,this.widgetName,this);
this.element=b(c);
this.options=b.extend(true,{},this.options,this._getCreateOptions(),a);
var d=this;
this.element.bind("remove."+this.widgetName,function(){
d.destroy();
});
this._create();
this._trigger("create");
this._init();
},_getCreateOptions:function(){
return b.metadata&&b.metadata.get(this.element[0])[this.widgetName];
},_create:function(){
},_init:function(){
},destroy:function(){
this.element.unbind("."+this.widgetName).removeData(this.widgetName);
this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled");
},widget:function(){
return this.element;
},option:function(a,c){
var d=a;
if(arguments.length===0){
return b.extend({},this.options);
}
if(typeof a==="string"){
if(c===j){
return this.options[a];
}
d={};
d[a]=c;
}
this._setOptions(d);
return this;
},_setOptions:function(a){
var c=this;
b.each(a,function(d,e){
c._setOption(d,e);
});
return this;
},_setOption:function(a,c){
this.options[a]=c;
if(a==="disabled"){
this.widget()[c?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",c);
}
return this;
},enable:function(){
return this._setOption("disabled",false);
},disable:function(){
return this._setOption("disabled",true);
},_trigger:function(a,c,d){
var e=this.options[a];
c=b.Event(c);
c.type=(a===this.widgetEventPrefix?a:this.widgetEventPrefix+a).toLowerCase();
d=d||{};
if(c.originalEvent){
a=b.event.props.length;
for(var f;a;){
f=b.event.props[--a];
c[f]=c.originalEvent[f];
}
}
this.element.trigger(c,d);
return !(b.isFunction(e)&&e.call(this.element[0],c,d)===false||c.isDefaultPrevented());
}};
})(jQuery);
(function(c){
c.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){
var a=this;
this.element.bind("mousedown."+this.widgetName,function(b){
return a._mouseDown(b);
}).bind("click."+this.widgetName,function(b){
if(true===c.data(b.target,a.widgetName+".preventClickEvent")){
c.removeData(b.target,a.widgetName+".preventClickEvent");
b.stopImmediatePropagation();
return false;
}
});
this.started=false;
},_mouseDestroy:function(){
this.element.unbind("."+this.widgetName);
},_mouseDown:function(a){
a.originalEvent=a.originalEvent||{};
if(!a.originalEvent.mouseHandled){
this._mouseStarted&&this._mouseUp(a);
this._mouseDownEvent=a;
var b=this,e=a.which==1,f=typeof this.options.cancel=="string"?c(a.target).parents().add(a.target).filter(this.options.cancel).length:false;
if(!e||f||!this._mouseCapture(a)){
return true;
}
this.mouseDelayMet=!this.options.delay;
if(!this.mouseDelayMet){
this._mouseDelayTimer=setTimeout(function(){
b.mouseDelayMet=true;
},this.options.delay);
}
if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a)){
this._mouseStarted=this._mouseStart(a)!==false;
if(!this._mouseStarted){
a.preventDefault();
return true;
}
}
this._mouseMoveDelegate=function(d){
return b._mouseMove(d);
};
this._mouseUpDelegate=function(d){
return b._mouseUp(d);
};
c(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);
a.preventDefault();
return a.originalEvent.mouseHandled=true;
}
},_mouseMove:function(a){
if(c.browser.msie&&!(document.documentMode>=9)&&!a.button){
return this._mouseUp(a);
}
if(this._mouseStarted){
this._mouseDrag(a);
return a.preventDefault();
}
if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a)){
(this._mouseStarted=this._mouseStart(this._mouseDownEvent,a)!==false)?this._mouseDrag(a):this._mouseUp(a);
}
return !this._mouseStarted;
},_mouseUp:function(a){
c(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);
if(this._mouseStarted){
this._mouseStarted=false;
a.target==this._mouseDownEvent.target&&c.data(a.target,this.widgetName+".preventClickEvent",true);
this._mouseStop(a);
}
return false;
},_mouseDistanceMet:function(a){
return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance;
},_mouseDelayMet:function(){
return this.mouseDelayMet;
},_mouseStart:function(){
},_mouseDrag:function(){
},_mouseStop:function(){
},_mouseCapture:function(){
return true;
}});
})(jQuery);
(function(c){
c.ui=c.ui||{};
var n=/left|center|right/,o=/top|center|bottom/,t=c.fn.position,u=c.fn.offset;
c.fn.position=function(b){
if(!b||!b.of){
return t.apply(this,arguments);
}
b=c.extend({},b);
var a=c(b.of),d=a[0],g=(b.collision||"flip").split(" "),e=b.offset?b.offset.split(" "):[0,0],h,k,j;
if(d.nodeType===9){
h=a.width();
k=a.height();
j={top:0,left:0};
}else{
if(d.setTimeout){
h=a.width();
k=a.height();
j={top:a.scrollTop(),left:a.scrollLeft()};
}else{
if(d.preventDefault){
b.at="left top";
h=k=0;
j={top:b.of.pageY,left:b.of.pageX};
}else{
h=a.outerWidth();
k=a.outerHeight();
j=a.offset();
}
}
}
c.each(["my","at"],function(){
var f=(b[this]||"").split(" ");
if(f.length===1){
f=n.test(f[0])?f.concat(["center"]):o.test(f[0])?["center"].concat(f):["center","center"];
}
f[0]=n.test(f[0])?f[0]:"center";
f[1]=o.test(f[1])?f[1]:"center";
b[this]=f;
});
if(g.length===1){
g[1]=g[0];
}
e[0]=parseInt(e[0],10)||0;
if(e.length===1){
e[1]=e[0];
}
e[1]=parseInt(e[1],10)||0;
if(b.at[0]==="right"){
j.left+=h;
}else{
if(b.at[0]==="center"){
j.left+=h/2;
}
}
if(b.at[1]==="bottom"){
j.top+=k;
}else{
if(b.at[1]==="center"){
j.top+=k/2;
}
}
j.left+=e[0];
j.top+=e[1];
return this.each(function(){
var f=c(this),l=f.outerWidth(),m=f.outerHeight(),p=parseInt(c.curCSS(this,"marginLeft",true))||0,q=parseInt(c.curCSS(this,"marginTop",true))||0,v=l+p+parseInt(c.curCSS(this,"marginRight",true))||0,w=m+q+parseInt(c.curCSS(this,"marginBottom",true))||0,i=c.extend({},j),r;
if(b.my[0]==="right"){
i.left-=l;
}else{
if(b.my[0]==="center"){
i.left-=l/2;
}
}
if(b.my[1]==="bottom"){
i.top-=m;
}else{
if(b.my[1]==="center"){
i.top-=m/2;
}
}
i.left=Math.round(i.left);
i.top=Math.round(i.top);
r={left:i.left-p,top:i.top-q};
c.each(["left","top"],function(s,x){
c.ui.position[g[s]]&&c.ui.position[g[s]][x](i,{targetWidth:h,targetHeight:k,elemWidth:l,elemHeight:m,collisionPosition:r,collisionWidth:v,collisionHeight:w,offset:e,my:b.my,at:b.at});
});
c.fn.bgiframe&&f.bgiframe();
f.offset(c.extend(i,{using:b.using}));
});
};
c.ui.position={fit:{left:function(b,a){
var d=c(window);
d=a.collisionPosition.left+a.collisionWidth-d.width()-d.scrollLeft();
b.left=d>0?b.left-d:Math.max(b.left-a.collisionPosition.left,b.left);
},top:function(b,a){
var d=c(window);
d=a.collisionPosition.top+a.collisionHeight-d.height()-d.scrollTop();
b.top=d>0?b.top-d:Math.max(b.top-a.collisionPosition.top,b.top);
}},flip:{left:function(b,a){
if(a.at[0]!=="center"){
var d=c(window);
d=a.collisionPosition.left+a.collisionWidth-d.width()-d.scrollLeft();
var g=a.my[0]==="left"?-a.elemWidth:a.my[0]==="right"?a.elemWidth:0,e=a.at[0]==="left"?a.targetWidth:-a.targetWidth,h=-2*a.offset[0];
b.left+=a.collisionPosition.left<0?g+e+h:d>0?g+e+h:0;
}
},top:function(b,a){
if(a.at[1]!=="center"){
var d=c(window);
d=a.collisionPosition.top+a.collisionHeight-d.height()-d.scrollTop();
var g=a.my[1]==="top"?-a.elemHeight:a.my[1]==="bottom"?a.elemHeight:0,e=a.at[1]==="top"?a.targetHeight:-a.targetHeight,h=-2*a.offset[1];
b.top+=a.collisionPosition.top<0?g+e+h:d>0?g+e+h:0;
}
}}};
if(!c.offset.setOffset){
c.offset.setOffset=function(b,a){
if(/static/.test(c.curCSS(b,"position"))){
b.style.position="relative";
}
var d=c(b),g=d.offset(),e=parseInt(c.curCSS(b,"top",true),10)||0,h=parseInt(c.curCSS(b,"left",true),10)||0;
g={top:a.top-g.top+e,left:a.left-g.left+h};
"using" in a?a.using.call(b,g):d.css(g);
};
c.fn.offset=function(b){
var a=this[0];
if(!a||!a.ownerDocument){
return null;
}
if(b){
return this.each(function(){
c.offset.setOffset(this,b);
});
}
return u.call(this);
};
}
})(jQuery);
(function(d){
d.widget("ui.draggable",d.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){
if(this.options.helper=="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))){
this.element[0].style.position="relative";
}
this.options.addClasses&&this.element.addClass("ui-draggable");
this.options.disabled&&this.element.addClass("ui-draggable-disabled");
this._mouseInit();
},destroy:function(){
if(this.element.data("draggable")){
this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
this._mouseDestroy();
return this;
}
},_mouseCapture:function(a){
var b=this.options;
if(this.helper||b.disabled||d(a.target).is(".ui-resizable-handle")){
return false;
}
this.handle=this._getHandle(a);
if(!this.handle){
return false;
}
return true;
},_mouseStart:function(a){
var b=this.options;
this.helper=this._createHelper(a);
this._cacheHelperProportions();
if(d.ui.ddmanager){
d.ui.ddmanager.current=this;
}
this._cacheMargins();
this.cssPosition=this.helper.css("position");
this.scrollParent=this.helper.scrollParent();
this.offset=this.positionAbs=this.element.offset();
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};
d.extend(this.offset,{click:{left:a.pageX-this.offset.left,top:a.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.originalPosition=this.position=this._generatePosition(a);
this.originalPageX=a.pageX;
this.originalPageY=a.pageY;
b.cursorAt&&this._adjustOffsetFromHelper(b.cursorAt);
b.containment&&this._setContainment();
if(this._trigger("start",a)===false){
this._clear();
return false;
}
this._cacheHelperProportions();
d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,a);
this.helper.addClass("ui-draggable-dragging");
this._mouseDrag(a,true);
return true;
},_mouseDrag:function(a,b){
this.position=this._generatePosition(a);
this.positionAbs=this._convertPositionTo("absolute");
if(!b){
b=this._uiHash();
if(this._trigger("drag",a,b)===false){
this._mouseUp({});
return false;
}
this.position=b.position;
}
if(!this.options.axis||this.options.axis!="y"){
this.helper[0].style.left=this.position.left+"px";
}
if(!this.options.axis||this.options.axis!="x"){
this.helper[0].style.top=this.position.top+"px";
}
d.ui.ddmanager&&d.ui.ddmanager.drag(this,a);
return false;
},_mouseStop:function(a){
var b=false;
if(d.ui.ddmanager&&!this.options.dropBehaviour){
b=d.ui.ddmanager.drop(this,a);
}
if(this.dropped){
b=this.dropped;
this.dropped=false;
}
if(!this.element[0]||!this.element[0].parentNode){
return false;
}
if(this.options.revert=="invalid"&&!b||this.options.revert=="valid"&&b||this.options.revert===true||d.isFunction(this.options.revert)&&this.options.revert.call(this.element,b)){
var c=this;
d(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){
c._trigger("stop",a)!==false&&c._clear();
});
}else{
this._trigger("stop",a)!==false&&this._clear();
}
return false;
},cancel:function(){
this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear();
return this;
},_getHandle:function(a){
var b=!this.options.handle||!d(this.options.handle,this.element).length?true:false;
d(this.options.handle,this.element).find("*").andSelf().each(function(){
if(this==a.target){
b=true;
}
});
return b;
},_createHelper:function(a){
var b=this.options;
a=d.isFunction(b.helper)?d(b.helper.apply(this.element[0],[a])):b.helper=="clone"?this.element.clone():this.element;
a.parents("body").length||a.appendTo(b.appendTo=="parent"?this.element[0].parentNode:b.appendTo);
a[0]!=this.element[0]&&!/(fixed|absolute)/.test(a.css("position"))&&a.css("position","absolute");
return a;
},_adjustOffsetFromHelper:function(a){
if(typeof a=="string"){
a=a.split(" ");
}
if(d.isArray(a)){
a={left:+a[0],top:+a[1]||0};
}
if("left" in a){
this.offset.click.left=a.left+this.margins.left;
}
if("right" in a){
this.offset.click.left=this.helperProportions.width-a.right+this.margins.left;
}
if("top" in a){
this.offset.click.top=a.top+this.margins.top;
}
if("bottom" in a){
this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top;
}
},_getParentOffset:function(){
this.offsetParent=this.helper.offsetParent();
var a=this.offsetParent.offset();
if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0])){
a.left+=this.scrollParent.scrollLeft();
a.top+=this.scrollParent.scrollTop();
}
if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&d.browser.msie){
a={top:0,left:0};
}
return {top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)};
},_getRelativeOffset:function(){
if(this.cssPosition=="relative"){
var a=this.element.position();
return {top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()};
}else{
return {top:0,left:0};
}
},_cacheMargins:function(){
this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0};
},_cacheHelperProportions:function(){
this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()};
},_setContainment:function(){
var a=this.options;
if(a.containment=="parent"){
a.containment=this.helper[0].parentNode;
}
if(a.containment=="document"||a.containment=="window"){
this.containment=[(a.containment=="document"?0:d(window).scrollLeft())-this.offset.relative.left-this.offset.parent.left,(a.containment=="document"?0:d(window).scrollTop())-this.offset.relative.top-this.offset.parent.top,(a.containment=="document"?0:d(window).scrollLeft())+d(a.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a.containment=="document"?0:d(window).scrollTop())+(d(a.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];
}
if(!/^(document|window|parent)$/.test(a.containment)&&a.containment.constructor!=Array){
var b=d(a.containment)[0];
if(b){
a=d(a.containment).offset();
var c=d(b).css("overflow")!="hidden";
this.containment=[a.left+(parseInt(d(b).css("borderLeftWidth"),10)||0)+(parseInt(d(b).css("paddingLeft"),10)||0)-this.margins.left,a.top+(parseInt(d(b).css("borderTopWidth"),10)||0)+(parseInt(d(b).css("paddingTop"),10)||0)-this.margins.top,a.left+(c?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(d(b).css("borderLeftWidth"),10)||0)-(parseInt(d(b).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,a.top+(c?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(d(b).css("borderTopWidth"),10)||0)-(parseInt(d(b).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top];
}
}else{
if(a.containment.constructor==Array){
this.containment=a.containment;
}
}
},_convertPositionTo:function(a,b){
if(!b){
b=this.position;
}
a=a=="absolute"?1:-1;
var c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(c[0].tagName);
return {top:b.top+this.offset.relative.top*a+this.offset.parent.top*a-(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:c.scrollTop())*a),left:b.left+this.offset.relative.left*a+this.offset.parent.left*a-(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():f?0:c.scrollLeft())*a)};
},_generatePosition:function(a){
var b=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(c[0].tagName),e=a.pageX,g=a.pageY;
if(this.originalPosition){
if(this.containment){
if(a.pageX-this.offset.click.left<this.containment[0]){
e=this.containment[0]+this.offset.click.left;
}
if(a.pageY-this.offset.click.top<this.containment[1]){
g=this.containment[1]+this.offset.click.top;
}
if(a.pageX-this.offset.click.left>this.containment[2]){
e=this.containment[2]+this.offset.click.left;
}
if(a.pageY-this.offset.click.top>this.containment[3]){
g=this.containment[3]+this.offset.click.top;
}
}
if(b.grid){
g=this.originalPageY+Math.round((g-this.originalPageY)/b.grid[1])*b.grid[1];
g=this.containment?!(g-this.offset.click.top<this.containment[1]||g-this.offset.click.top>this.containment[3])?g:!(g-this.offset.click.top<this.containment[1])?g-b.grid[1]:g+b.grid[1]:g;
e=this.originalPageX+Math.round((e-this.originalPageX)/b.grid[0])*b.grid[0];
e=this.containment?!(e-this.offset.click.left<this.containment[0]||e-this.offset.click.left>this.containment[2])?e:!(e-this.offset.click.left<this.containment[0])?e-b.grid[0]:e+b.grid[0]:e;
}
}
return {top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:c.scrollTop()),left:e-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():f?0:c.scrollLeft())};
},_clear:function(){
this.helper.removeClass("ui-draggable-dragging");
this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove();
this.helper=null;
this.cancelHelperRemoval=false;
},_trigger:function(a,b,c){
c=c||this._uiHash();
d.ui.plugin.call(this,a,[b,c]);
if(a=="drag"){
this.positionAbs=this._convertPositionTo("absolute");
}
return d.Widget.prototype._trigger.call(this,a,b,c);
},plugins:{},_uiHash:function(){
return {helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs};
}});
d.extend(d.ui.draggable,{version:"1.8.7"});
d.ui.plugin.add("draggable","connectToSortable",{start:function(a,b){
var c=d(this).data("draggable"),f=c.options,e=d.extend({},b,{item:c.element});
c.sortables=[];
d(f.connectToSortable).each(function(){
var g=d.data(this,"sortable");
if(g&&!g.options.disabled){
c.sortables.push({instance:g,shouldRevert:g.options.revert});
g._refreshItems();
g._trigger("activate",a,e);
}
});
},stop:function(a,b){
var c=d(this).data("draggable"),f=d.extend({},b,{item:c.element});
d.each(c.sortables,function(){
if(this.instance.isOver){
this.instance.isOver=0;
c.cancelHelperRemoval=true;
this.instance.cancelHelperRemoval=false;
if(this.shouldRevert){
this.instance.options.revert=true;
}
this.instance._mouseStop(a);
this.instance.options.helper=this.instance.options._helper;
c.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"});
}else{
this.instance.cancelHelperRemoval=false;
this.instance._trigger("deactivate",a,f);
}
});
},drag:function(a,b){
var c=d(this).data("draggable"),f=this;
d.each(c.sortables,function(){
this.instance.positionAbs=c.positionAbs;
this.instance.helperProportions=c.helperProportions;
this.instance.offset.click=c.offset.click;
if(this.instance._intersectsWith(this.instance.containerCache)){
if(!this.instance.isOver){
this.instance.isOver=1;
this.instance.currentItem=d(f).clone().appendTo(this.instance.element).data("sortable-item",true);
this.instance.options._helper=this.instance.options.helper;
this.instance.options.helper=function(){
return b.helper[0];
};
a.target=this.instance.currentItem[0];
this.instance._mouseCapture(a,true);
this.instance._mouseStart(a,true,true);
this.instance.offset.click.top=c.offset.click.top;
this.instance.offset.click.left=c.offset.click.left;
this.instance.offset.parent.left-=c.offset.parent.left-this.instance.offset.parent.left;
this.instance.offset.parent.top-=c.offset.parent.top-this.instance.offset.parent.top;
c._trigger("toSortable",a);
c.dropped=this.instance.element;
c.currentItem=c.element;
this.instance.fromOutside=c;
}
this.instance.currentItem&&this.instance._mouseDrag(a);
}else{
if(this.instance.isOver){
this.instance.isOver=0;
this.instance.cancelHelperRemoval=true;
this.instance.options.revert=false;
this.instance._trigger("out",a,this.instance._uiHash(this.instance));
this.instance._mouseStop(a,true);
this.instance.options.helper=this.instance.options._helper;
this.instance.currentItem.remove();
this.instance.placeholder&&this.instance.placeholder.remove();
c._trigger("fromSortable",a);
c.dropped=false;
}
}
});
}});
d.ui.plugin.add("draggable","cursor",{start:function(){
var a=d("body"),b=d(this).data("draggable").options;
if(a.css("cursor")){
b._cursor=a.css("cursor");
}
a.css("cursor",b.cursor);
},stop:function(){
var a=d(this).data("draggable").options;
a._cursor&&d("body").css("cursor",a._cursor);
}});
d.ui.plugin.add("draggable","iframeFix",{start:function(){
var a=d(this).data("draggable").options;
d(a.iframeFix===true?"iframe":a.iframeFix).each(function(){
d("<div class=\"ui-draggable-iframeFix\" style=\"background: #fff;\"></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css(d(this).offset()).appendTo("body");
});
},stop:function(){
d("div.ui-draggable-iframeFix").each(function(){
this.parentNode.removeChild(this);
});
}});
d.ui.plugin.add("draggable","opacity",{start:function(a,b){
a=d(b.helper);
b=d(this).data("draggable").options;
if(a.css("opacity")){
b._opacity=a.css("opacity");
}
a.css("opacity",b.opacity);
},stop:function(a,b){
a=d(this).data("draggable").options;
a._opacity&&d(b.helper).css("opacity",a._opacity);
}});
d.ui.plugin.add("draggable","scroll",{start:function(){
var a=d(this).data("draggable");
if(a.scrollParent[0]!=document&&a.scrollParent[0].tagName!="HTML"){
a.overflowOffset=a.scrollParent.offset();
}
},drag:function(a){
var b=d(this).data("draggable"),c=b.options,f=false;
if(b.scrollParent[0]!=document&&b.scrollParent[0].tagName!="HTML"){
if(!c.axis||c.axis!="x"){
if(b.overflowOffset.top+b.scrollParent[0].offsetHeight-a.pageY<c.scrollSensitivity){
b.scrollParent[0].scrollTop=f=b.scrollParent[0].scrollTop+c.scrollSpeed;
}else{
if(a.pageY-b.overflowOffset.top<c.scrollSensitivity){
b.scrollParent[0].scrollTop=f=b.scrollParent[0].scrollTop-c.scrollSpeed;
}
}
}
if(!c.axis||c.axis!="y"){
if(b.overflowOffset.left+b.scrollParent[0].offsetWidth-a.pageX<c.scrollSensitivity){
b.scrollParent[0].scrollLeft=f=b.scrollParent[0].scrollLeft+c.scrollSpeed;
}else{
if(a.pageX-b.overflowOffset.left<c.scrollSensitivity){
b.scrollParent[0].scrollLeft=f=b.scrollParent[0].scrollLeft-c.scrollSpeed;
}
}
}
}else{
if(!c.axis||c.axis!="x"){
if(a.pageY-d(document).scrollTop()<c.scrollSensitivity){
f=d(document).scrollTop(d(document).scrollTop()-c.scrollSpeed);
}else{
if(d(window).height()-(a.pageY-d(document).scrollTop())<c.scrollSensitivity){
f=d(document).scrollTop(d(document).scrollTop()+c.scrollSpeed);
}
}
}
if(!c.axis||c.axis!="y"){
if(a.pageX-d(document).scrollLeft()<c.scrollSensitivity){
f=d(document).scrollLeft(d(document).scrollLeft()-c.scrollSpeed);
}else{
if(d(window).width()-(a.pageX-d(document).scrollLeft())<c.scrollSensitivity){
f=d(document).scrollLeft(d(document).scrollLeft()+c.scrollSpeed);
}
}
}
}
f!==false&&d.ui.ddmanager&&!c.dropBehaviour&&d.ui.ddmanager.prepareOffsets(b,a);
}});
d.ui.plugin.add("draggable","snap",{start:function(){
var a=d(this).data("draggable"),b=a.options;
a.snapElements=[];
d(b.snap.constructor!=String?b.snap.items||":data(draggable)":b.snap).each(function(){
var c=d(this),f=c.offset();
this!=a.element[0]&&a.snapElements.push({item:this,width:c.outerWidth(),height:c.outerHeight(),top:f.top,left:f.left});
});
},drag:function(a,b){
for(var c=d(this).data("draggable"),f=c.options,e=f.snapTolerance,g=b.offset.left,n=g+c.helperProportions.width,m=b.offset.top,o=m+c.helperProportions.height,h=c.snapElements.length-1;h>=0;h--){
var i=c.snapElements[h].left,k=i+c.snapElements[h].width,j=c.snapElements[h].top,l=j+c.snapElements[h].height;
if(i-e<g&&g<k+e&&j-e<m&&m<l+e||i-e<g&&g<k+e&&j-e<o&&o<l+e||i-e<n&&n<k+e&&j-e<m&&m<l+e||i-e<n&&n<k+e&&j-e<o&&o<l+e){
if(f.snapMode!="inner"){
var p=Math.abs(j-o)<=e,q=Math.abs(l-m)<=e,r=Math.abs(i-n)<=e,s=Math.abs(k-g)<=e;
if(p){
b.position.top=c._convertPositionTo("relative",{top:j-c.helperProportions.height,left:0}).top-c.margins.top;
}
if(q){
b.position.top=c._convertPositionTo("relative",{top:l,left:0}).top-c.margins.top;
}
if(r){
b.position.left=c._convertPositionTo("relative",{top:0,left:i-c.helperProportions.width}).left-c.margins.left;
}
if(s){
b.position.left=c._convertPositionTo("relative",{top:0,left:k}).left-c.margins.left;
}
}
var t=p||q||r||s;
if(f.snapMode!="outer"){
p=Math.abs(j-m)<=e;
q=Math.abs(l-o)<=e;
r=Math.abs(i-g)<=e;
s=Math.abs(k-n)<=e;
if(p){
b.position.top=c._convertPositionTo("relative",{top:j,left:0}).top-c.margins.top;
}
if(q){
b.position.top=c._convertPositionTo("relative",{top:l-c.helperProportions.height,left:0}).top-c.margins.top;
}
if(r){
b.position.left=c._convertPositionTo("relative",{top:0,left:i}).left-c.margins.left;
}
if(s){
b.position.left=c._convertPositionTo("relative",{top:0,left:k-c.helperProportions.width}).left-c.margins.left;
}
}
if(!c.snapElements[h].snapping&&(p||q||r||s||t)){
c.options.snap.snap&&c.options.snap.snap.call(c.element,a,d.extend(c._uiHash(),{snapItem:c.snapElements[h].item}));
}
c.snapElements[h].snapping=p||q||r||s||t;
}else{
c.snapElements[h].snapping&&c.options.snap.release&&c.options.snap.release.call(c.element,a,d.extend(c._uiHash(),{snapItem:c.snapElements[h].item}));
c.snapElements[h].snapping=false;
}
}
}});
d.ui.plugin.add("draggable","stack",{start:function(){
var a=d(this).data("draggable").options;
a=d.makeArray(d(a.stack)).sort(function(c,f){
return (parseInt(d(c).css("zIndex"),10)||0)-(parseInt(d(f).css("zIndex"),10)||0);
});
if(a.length){
var b=parseInt(a[0].style.zIndex)||0;
d(a).each(function(c){
this.style.zIndex=b+c;
});
this[0].style.zIndex=b+a.length;
}
}});
d.ui.plugin.add("draggable","zIndex",{start:function(a,b){
a=d(b.helper);
b=d(this).data("draggable").options;
if(a.css("zIndex")){
b._zIndex=a.css("zIndex");
}
a.css("zIndex",b.zIndex);
},stop:function(a,b){
a=d(this).data("draggable").options;
a._zIndex&&d(b.helper).css("zIndex",a._zIndex);
}});
})(jQuery);
(function(d){
d.widget("ui.droppable",{widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect"},_create:function(){
var a=this.options,b=a.accept;
this.isover=0;
this.isout=1;
this.accept=d.isFunction(b)?b:function(c){
return c.is(b);
};
this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};
d.ui.ddmanager.droppables[a.scope]=d.ui.ddmanager.droppables[a.scope]||[];
d.ui.ddmanager.droppables[a.scope].push(this);
a.addClasses&&this.element.addClass("ui-droppable");
},destroy:function(){
for(var a=d.ui.ddmanager.droppables[this.options.scope],b=0;b<a.length;b++){
a[b]==this&&a.splice(b,1);
}
this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable");
return this;
},_setOption:function(a,b){
if(a=="accept"){
this.accept=d.isFunction(b)?b:function(c){
return c.is(b);
};
}
d.Widget.prototype._setOption.apply(this,arguments);
},_activate:function(a){
var b=d.ui.ddmanager.current;
this.options.activeClass&&this.element.addClass(this.options.activeClass);
b&&this._trigger("activate",a,this.ui(b));
},_deactivate:function(a){
var b=d.ui.ddmanager.current;
this.options.activeClass&&this.element.removeClass(this.options.activeClass);
b&&this._trigger("deactivate",a,this.ui(b));
},_over:function(a){
var b=d.ui.ddmanager.current;
if(!(!b||(b.currentItem||b.element)[0]==this.element[0])){
if(this.accept.call(this.element[0],b.currentItem||b.element)){
this.options.hoverClass&&this.element.addClass(this.options.hoverClass);
this._trigger("over",a,this.ui(b));
}
}
},_out:function(a){
var b=d.ui.ddmanager.current;
if(!(!b||(b.currentItem||b.element)[0]==this.element[0])){
if(this.accept.call(this.element[0],b.currentItem||b.element)){
this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);
this._trigger("out",a,this.ui(b));
}
}
},_drop:function(a,b){
var c=b||d.ui.ddmanager.current;
if(!c||(c.currentItem||c.element)[0]==this.element[0]){
return false;
}
var e=false;
this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){
var g=d.data(this,"droppable");
if(g.options.greedy&&!g.options.disabled&&g.options.scope==c.options.scope&&g.accept.call(g.element[0],c.currentItem||c.element)&&d.ui.intersect(c,d.extend(g,{offset:g.element.offset()}),g.options.tolerance)){
e=true;
return false;
}
});
if(e){
return false;
}
if(this.accept.call(this.element[0],c.currentItem||c.element)){
this.options.activeClass&&this.element.removeClass(this.options.activeClass);
this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);
this._trigger("drop",a,this.ui(c));
return this.element;
}
return false;
},ui:function(a){
return {draggable:a.currentItem||a.element,helper:a.helper,position:a.position,offset:a.positionAbs};
}});
d.extend(d.ui.droppable,{version:"1.8.7"});
d.ui.intersect=function(a,b,c){
if(!b.offset){
return false;
}
var e=(a.positionAbs||a.position.absolute).left,g=e+a.helperProportions.width,f=(a.positionAbs||a.position.absolute).top,h=f+a.helperProportions.height,i=b.offset.left,k=i+b.proportions.width,j=b.offset.top,l=j+b.proportions.height;
switch(c){
case "fit":
return i<=e&&g<=k&&j<=f&&h<=l;
case "intersect":
return i<e+a.helperProportions.width/2&&g-a.helperProportions.width/2<k&&j<f+a.helperProportions.height/2&&h-a.helperProportions.height/2<l;
case "pointer":
return d.ui.isOver((a.positionAbs||a.position.absolute).top+(a.clickOffset||a.offset.click).top,(a.positionAbs||a.position.absolute).left+(a.clickOffset||a.offset.click).left,j,i,b.proportions.height,b.proportions.width);
case "touch":
return (f>=j&&f<=l||h>=j&&h<=l||f<j&&h>l)&&(e>=i&&e<=k||g>=i&&g<=k||e<i&&g>k);
default:
return false;
}
};
d.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(a,b){
var c=d.ui.ddmanager.droppables[a.options.scope]||[],e=b?b.type:null,g=(a.currentItem||a.element).find(":data(droppable)").andSelf(),f=0;
a:
for(;f<c.length;f++){
if(!(c[f].options.disabled||a&&!c[f].accept.call(c[f].element[0],a.currentItem||a.element))){
for(var h=0;h<g.length;h++){
if(g[h]==c[f].element[0]){
c[f].proportions.height=0;
continue a;
}
}
c[f].visible=c[f].element.css("display")!="none";
if(c[f].visible){
c[f].offset=c[f].element.offset();
c[f].proportions={width:c[f].element[0].offsetWidth,height:c[f].element[0].offsetHeight};
e=="mousedown"&&c[f]._activate.call(c[f],b);
}
}
}
},drop:function(a,b){
var c=false;
d.each(d.ui.ddmanager.droppables[a.options.scope]||[],function(){
if(this.options){
if(!this.options.disabled&&this.visible&&d.ui.intersect(a,this,this.options.tolerance)){
c=c||this._drop.call(this,b);
}
if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],a.currentItem||a.element)){
this.isout=1;
this.isover=0;
this._deactivate.call(this,b);
}
}
});
return c;
},drag:function(a,b){
a.options.refreshPositions&&d.ui.ddmanager.prepareOffsets(a,b);
d.each(d.ui.ddmanager.droppables[a.options.scope]||[],function(){
if(!(this.options.disabled||this.greedyChild||!this.visible)){
var c=d.ui.intersect(a,this,this.options.tolerance);
if(c=!c&&this.isover==1?"isout":c&&this.isover==0?"isover":null){
var e;
if(this.options.greedy){
var g=this.element.parents(":data(droppable):eq(0)");
if(g.length){
e=d.data(g[0],"droppable");
e.greedyChild=c=="isover"?1:0;
}
}
if(e&&c=="isover"){
e.isover=0;
e.isout=1;
e._out.call(e,b);
}
this[c]=1;
this[c=="isout"?"isover":"isout"]=0;
this[c=="isover"?"_over":"_out"].call(this,b);
if(e&&c=="isout"){
e.isout=0;
e.isover=1;
e._over.call(e,b);
}
}
}
});
}};
})(jQuery);
(function(e){
e.widget("ui.resizable",e.ui.mouse,{widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1000},_create:function(){
var b=this,a=this.options;
this.element.addClass("ui-resizable");
e.extend(this,{_aspectRatio:!!a.aspectRatio,aspectRatio:a.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:a.helper||a.ghost||a.animate?a.helper||"ui-resizable-helper":null});
if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){
/relative/.test(this.element.css("position"))&&e.browser.opera&&this.element.css({position:"relative",top:"auto",left:"auto"});
this.element.wrap(e("<div class=\"ui-wrapper\" style=\"overflow: hidden;\"></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));
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
this.handles=a.handles||(!e(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"});
if(this.handles.constructor==String){
if(this.handles=="all"){
this.handles="n,e,s,w,se,sw,ne,nw";
}
var c=this.handles.split(",");
this.handles={};
for(var d=0;d<c.length;d++){
var f=e.trim(c[d]),g=e("<div class=\"ui-resizable-handle "+("ui-resizable-"+f)+"\"></div>");
/sw|se|ne|nw/.test(f)&&g.css({zIndex:++a.zIndex});
"se"==f&&g.addClass("ui-icon ui-icon-gripsmall-diagonal-se");
this.handles[f]=".ui-resizable-"+f;
this.element.append(g);
}
}
this._renderAxis=function(h){
h=h||this.element;
for(var i in this.handles){
if(this.handles[i].constructor==String){
this.handles[i]=e(this.handles[i],this.element).show();
}
if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){
var j=e(this.handles[i],this.element),k=0;
k=/sw|ne|nw|se|n|s/.test(i)?j.outerHeight():j.outerWidth();
j=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join("");
h.css(j,k);
this._proportionallyResize();
}
e(this.handles[i]);
}
};
this._renderAxis(this.element);
this._handles=e(".ui-resizable-handle",this.element).disableSelection();
this._handles.mouseover(function(){
if(!b.resizing){
if(this.className){
var h=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
}
b.axis=h&&h[1]?h[1]:"se";
}
});
if(a.autoHide){
this._handles.hide();
e(this.element).addClass("ui-resizable-autohide").hover(function(){
e(this).removeClass("ui-resizable-autohide");
b._handles.show();
},function(){
if(!b.resizing){
e(this).addClass("ui-resizable-autohide");
b._handles.hide();
}
});
}
this._mouseInit();
},destroy:function(){
this._mouseDestroy();
var b=function(c){
e(c).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove();
};
if(this.elementIsWrapper){
b(this.element);
var a=this.element;
a.after(this.originalElement.css({position:a.css("position"),width:a.outerWidth(),height:a.outerHeight(),top:a.css("top"),left:a.css("left")})).remove();
}
this.originalElement.css("resize",this.originalResizeStyle);
b(this.originalElement);
return this;
},_mouseCapture:function(b){
var a=false;
for(var c in this.handles){
if(e(this.handles[c])[0]==b.target){
a=true;
}
}
return !this.options.disabled&&a;
},_mouseStart:function(b){
var a=this.options,c=this.element.position(),d=this.element;
this.resizing=true;
this.documentScroll={top:e(document).scrollTop(),left:e(document).scrollLeft()};
if(d.is(".ui-draggable")||/absolute/.test(d.css("position"))){
d.css({position:"absolute",top:c.top,left:c.left});
}
e.browser.opera&&/relative/.test(d.css("position"))&&d.css({position:"relative",top:"auto",left:"auto"});
this._renderProxy();
c=m(this.helper.css("left"));
var f=m(this.helper.css("top"));
if(a.containment){
c+=e(a.containment).scrollLeft()||0;
f+=e(a.containment).scrollTop()||0;
}
this.offset=this.helper.offset();
this.position={left:c,top:f};
this.size=this._helper?{width:d.outerWidth(),height:d.outerHeight()}:{width:d.width(),height:d.height()};
this.originalSize=this._helper?{width:d.outerWidth(),height:d.outerHeight()}:{width:d.width(),height:d.height()};
this.originalPosition={left:c,top:f};
this.sizeDiff={width:d.outerWidth()-d.width(),height:d.outerHeight()-d.height()};
this.originalMousePosition={left:b.pageX,top:b.pageY};
this.aspectRatio=typeof a.aspectRatio=="number"?a.aspectRatio:this.originalSize.width/this.originalSize.height||1;
a=e(".ui-resizable-"+this.axis).css("cursor");
e("body").css("cursor",a=="auto"?this.axis+"-resize":a);
d.addClass("ui-resizable-resizing");
this._propagate("start",b);
return true;
},_mouseDrag:function(b){
var a=this.helper,c=this.originalMousePosition,d=this._change[this.axis];
if(!d){
return false;
}
c=d.apply(this,[b,b.pageX-c.left||0,b.pageY-c.top||0]);
if(this._aspectRatio||b.shiftKey){
c=this._updateRatio(c,b);
}
c=this._respectSize(c,b);
this._propagate("resize",b);
a.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"});
!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize();
this._updateCache(c);
this._trigger("resize",b,this.ui());
return false;
},_mouseStop:function(b){
this.resizing=false;
var a=this.options,c=this;
if(this._helper){
var d=this._proportionallyResizeElements,f=d.length&&/textarea/i.test(d[0].nodeName);
d=f&&e.ui.hasScroll(d[0],"left")?0:c.sizeDiff.height;
f={width:c.size.width-(f?0:c.sizeDiff.width),height:c.size.height-d};
d=parseInt(c.element.css("left"),10)+(c.position.left-c.originalPosition.left)||null;
var g=parseInt(c.element.css("top"),10)+(c.position.top-c.originalPosition.top)||null;
a.animate||this.element.css(e.extend(f,{top:g,left:d}));
c.helper.height(c.size.height);
c.helper.width(c.size.width);
this._helper&&!a.animate&&this._proportionallyResize();
}
e("body").css("cursor","auto");
this.element.removeClass("ui-resizable-resizing");
this._propagate("stop",b);
this._helper&&this.helper.remove();
return false;
},_updateCache:function(b){
this.offset=this.helper.offset();
if(l(b.left)){
this.position.left=b.left;
}
if(l(b.top)){
this.position.top=b.top;
}
if(l(b.height)){
this.size.height=b.height;
}
if(l(b.width)){
this.size.width=b.width;
}
},_updateRatio:function(b){
var a=this.position,c=this.size,d=this.axis;
if(b.height){
b.width=c.height*this.aspectRatio;
}else{
if(b.width){
b.height=c.width/this.aspectRatio;
}
}
if(d=="sw"){
b.left=a.left+(c.width-b.width);
b.top=null;
}
if(d=="nw"){
b.top=a.top+(c.height-b.height);
b.left=a.left+(c.width-b.width);
}
return b;
},_respectSize:function(b){
var a=this.options,c=this.axis,d=l(b.width)&&a.maxWidth&&a.maxWidth<b.width,f=l(b.height)&&a.maxHeight&&a.maxHeight<b.height,g=l(b.width)&&a.minWidth&&a.minWidth>b.width,h=l(b.height)&&a.minHeight&&a.minHeight>b.height;
if(g){
b.width=a.minWidth;
}
if(h){
b.height=a.minHeight;
}
if(d){
b.width=a.maxWidth;
}
if(f){
b.height=a.maxHeight;
}
var i=this.originalPosition.left+this.originalSize.width,j=this.position.top+this.size.height,k=/sw|nw|w/.test(c);
c=/nw|ne|n/.test(c);
if(g&&k){
b.left=i-a.minWidth;
}
if(d&&k){
b.left=i-a.maxWidth;
}
if(h&&c){
b.top=j-a.minHeight;
}
if(f&&c){
b.top=j-a.maxHeight;
}
if((a=!b.width&&!b.height)&&!b.left&&b.top){
b.top=null;
}else{
if(a&&!b.top&&b.left){
b.left=null;
}
}
return b;
},_proportionallyResize:function(){
if(this._proportionallyResizeElements.length){
for(var b=this.helper||this.element,a=0;a<this._proportionallyResizeElements.length;a++){
var c=this._proportionallyResizeElements[a];
if(!this.borderDif){
var d=[c.css("borderTopWidth"),c.css("borderRightWidth"),c.css("borderBottomWidth"),c.css("borderLeftWidth")],f=[c.css("paddingTop"),c.css("paddingRight"),c.css("paddingBottom"),c.css("paddingLeft")];
this.borderDif=e.map(d,function(g,h){
g=parseInt(g,10)||0;
h=parseInt(f[h],10)||0;
return g+h;
});
}
e.browser.msie&&(e(b).is(":hidden")||e(b).parents(":hidden").length)||c.css({height:b.height()-this.borderDif[0]-this.borderDif[2]||0,width:b.width()-this.borderDif[1]-this.borderDif[3]||0});
}
}
},_renderProxy:function(){
var b=this.options;
this.elementOffset=this.element.offset();
if(this._helper){
this.helper=this.helper||e("<div style=\"overflow:hidden;\"></div>");
var a=e.browser.msie&&e.browser.version<7,c=a?1:0;
a=a?2:-1;
this.helper.addClass(this._helper).css({width:this.element.outerWidth()+a,height:this.element.outerHeight()+a,position:"absolute",left:this.elementOffset.left-c+"px",top:this.elementOffset.top-c+"px",zIndex:++b.zIndex});
this.helper.appendTo("body").disableSelection();
}else{
this.helper=this.element;
}
},_change:{e:function(b,a){
return {width:this.originalSize.width+a};
},w:function(b,a){
return {left:this.originalPosition.left+a,width:this.originalSize.width-a};
},n:function(b,a,c){
return {top:this.originalPosition.top+c,height:this.originalSize.height-c};
},s:function(b,a,c){
return {height:this.originalSize.height+c};
},se:function(b,a,c){
return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[b,a,c]));
},sw:function(b,a,c){
return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[b,a,c]));
},ne:function(b,a,c){
return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[b,a,c]));
},nw:function(b,a,c){
return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[b,a,c]));
}},_propagate:function(b,a){
e.ui.plugin.call(this,b,[a,this.ui()]);
b!="resize"&&this._trigger(b,a,this.ui());
},plugins:{},ui:function(){
return {originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition};
}});
e.extend(e.ui.resizable,{version:"1.8.7"});
e.ui.plugin.add("resizable","alsoResize",{start:function(){
var b=e(this).data("resizable").options,a=function(c){
e(c).each(function(){
var d=e(this);
d.data("resizable-alsoresize",{width:parseInt(d.width(),10),height:parseInt(d.height(),10),left:parseInt(d.css("left"),10),top:parseInt(d.css("top"),10),position:d.css("position")});
});
};
if(typeof b.alsoResize=="object"&&!b.alsoResize.parentNode){
if(b.alsoResize.length){
b.alsoResize=b.alsoResize[0];
a(b.alsoResize);
}else{
e.each(b.alsoResize,function(c){
a(c);
});
}
}else{
a(b.alsoResize);
}
},resize:function(b,a){
var c=e(this).data("resizable");
b=c.options;
var d=c.originalSize,f=c.originalPosition,g={height:c.size.height-d.height||0,width:c.size.width-d.width||0,top:c.position.top-f.top||0,left:c.position.left-f.left||0},h=function(i,j){
e(i).each(function(){
var k=e(this),q=e(this).data("resizable-alsoresize"),p={},r=j&&j.length?j:k.parents(a.originalElement[0]).length?["width","height"]:["width","height","top","left"];
e.each(r,function(n,o){
if((n=(q[o]||0)+(g[o]||0))&&n>=0){
p[o]=n||null;
}
});
if(e.browser.opera&&/relative/.test(k.css("position"))){
c._revertToRelativePosition=true;
k.css({position:"absolute",top:"auto",left:"auto"});
}
k.css(p);
});
};
typeof b.alsoResize=="object"&&!b.alsoResize.nodeType?e.each(b.alsoResize,function(i,j){
h(i,j);
}):h(b.alsoResize);
},stop:function(){
var b=e(this).data("resizable"),a=b.options,c=function(d){
e(d).each(function(){
var f=e(this);
f.css({position:f.data("resizable-alsoresize").position});
});
};
if(b._revertToRelativePosition){
b._revertToRelativePosition=false;
typeof a.alsoResize=="object"&&!a.alsoResize.nodeType?e.each(a.alsoResize,function(d){
c(d);
}):c(a.alsoResize);
}
e(this).removeData("resizable-alsoresize");
}});
e.ui.plugin.add("resizable","animate",{stop:function(b){
var a=e(this).data("resizable"),c=a.options,d=a._proportionallyResizeElements,f=d.length&&/textarea/i.test(d[0].nodeName),g=f&&e.ui.hasScroll(d[0],"left")?0:a.sizeDiff.height;
f={width:a.size.width-(f?0:a.sizeDiff.width),height:a.size.height-g};
g=parseInt(a.element.css("left"),10)+(a.position.left-a.originalPosition.left)||null;
var h=parseInt(a.element.css("top"),10)+(a.position.top-a.originalPosition.top)||null;
a.element.animate(e.extend(f,h&&g?{top:h,left:g}:{}),{duration:c.animateDuration,easing:c.animateEasing,step:function(){
var i={width:parseInt(a.element.css("width"),10),height:parseInt(a.element.css("height"),10),top:parseInt(a.element.css("top"),10),left:parseInt(a.element.css("left"),10)};
d&&d.length&&e(d[0]).css({width:i.width,height:i.height});
a._updateCache(i);
a._propagate("resize",b);
}});
}});
e.ui.plugin.add("resizable","containment",{start:function(){
var b=e(this).data("resizable"),a=b.element,c=b.options.containment;
if(a=c instanceof e?c.get(0):/parent/.test(c)?a.parent().get(0):c){
b.containerElement=e(a);
if(/document/.test(c)||c==document){
b.containerOffset={left:0,top:0};
b.containerPosition={left:0,top:0};
b.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight};
}else{
var d=e(a),f=[];
e(["Top","Right","Left","Bottom"]).each(function(i,j){
f[i]=m(d.css("padding"+j));
});
b.containerOffset=d.offset();
b.containerPosition=d.position();
b.containerSize={height:d.innerHeight()-f[3],width:d.innerWidth()-f[1]};
c=b.containerOffset;
var g=b.containerSize.height,h=b.containerSize.width;
h=e.ui.hasScroll(a,"left")?a.scrollWidth:h;
g=e.ui.hasScroll(a)?a.scrollHeight:g;
b.parentData={element:a,left:c.left,top:c.top,width:h,height:g};
}
}
},resize:function(b){
var a=e(this).data("resizable"),c=a.options,d=a.containerOffset,f=a.position;
b=a._aspectRatio||b.shiftKey;
var g={top:0,left:0},h=a.containerElement;
if(h[0]!=document&&/static/.test(h.css("position"))){
g=d;
}
if(f.left<(a._helper?d.left:0)){
a.size.width+=a._helper?a.position.left-d.left:a.position.left-g.left;
if(b){
a.size.height=a.size.width/c.aspectRatio;
}
a.position.left=c.helper?d.left:0;
}
if(f.top<(a._helper?d.top:0)){
a.size.height+=a._helper?a.position.top-d.top:a.position.top;
if(b){
a.size.width=a.size.height*c.aspectRatio;
}
a.position.top=a._helper?d.top:0;
}
a.offset.left=a.parentData.left+a.position.left;
a.offset.top=a.parentData.top+a.position.top;
c=Math.abs((a._helper?a.offset.left-g.left:a.offset.left-g.left)+a.sizeDiff.width);
d=Math.abs((a._helper?a.offset.top-g.top:a.offset.top-d.top)+a.sizeDiff.height);
f=a.containerElement.get(0)==a.element.parent().get(0);
g=/relative|absolute/.test(a.containerElement.css("position"));
if(f&&g){
c-=a.parentData.left;
}
if(c+a.size.width>=a.parentData.width){
a.size.width=a.parentData.width-c;
if(b){
a.size.height=a.size.width/a.aspectRatio;
}
}
if(d+a.size.height>=a.parentData.height){
a.size.height=a.parentData.height-d;
if(b){
a.size.width=a.size.height*a.aspectRatio;
}
}
},stop:function(){
var b=e(this).data("resizable"),a=b.options,c=b.containerOffset,d=b.containerPosition,f=b.containerElement,g=e(b.helper),h=g.offset(),i=g.outerWidth()-b.sizeDiff.width;
g=g.outerHeight()-b.sizeDiff.height;
b._helper&&!a.animate&&/relative/.test(f.css("position"))&&e(this).css({left:h.left-d.left-c.left,width:i,height:g});
b._helper&&!a.animate&&/static/.test(f.css("position"))&&e(this).css({left:h.left-d.left-c.left,width:i,height:g});
}});
e.ui.plugin.add("resizable","ghost",{start:function(){
var b=e(this).data("resizable"),a=b.options,c=b.size;
b.ghost=b.originalElement.clone();
b.ghost.css({opacity:0.25,display:"block",position:"relative",height:c.height,width:c.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof a.ghost=="string"?a.ghost:"");
b.ghost.appendTo(b.helper);
},resize:function(){
var b=e(this).data("resizable");
b.ghost&&b.ghost.css({position:"relative",height:b.size.height,width:b.size.width});
},stop:function(){
var b=e(this).data("resizable");
b.ghost&&b.helper&&b.helper.get(0).removeChild(b.ghost.get(0));
}});
e.ui.plugin.add("resizable","grid",{resize:function(){
var b=e(this).data("resizable"),a=b.options,c=b.size,d=b.originalSize,f=b.originalPosition,g=b.axis;
a.grid=typeof a.grid=="number"?[a.grid,a.grid]:a.grid;
var h=Math.round((c.width-d.width)/(a.grid[0]||1))*(a.grid[0]||1);
a=Math.round((c.height-d.height)/(a.grid[1]||1))*(a.grid[1]||1);
if(/^(se|s|e)$/.test(g)){
b.size.width=d.width+h;
b.size.height=d.height+a;
}else{
if(/^(ne)$/.test(g)){
b.size.width=d.width+h;
b.size.height=d.height+a;
b.position.top=f.top-a;
}else{
if(/^(sw)$/.test(g)){
b.size.width=d.width+h;
b.size.height=d.height+a;
}else{
b.size.width=d.width+h;
b.size.height=d.height+a;
b.position.top=f.top-a;
}
b.position.left=f.left-h;
}
}
}});
var m=function(b){
return parseInt(b,10)||0;
},l=function(b){
return !isNaN(parseInt(b,10));
};
})(jQuery);
(function(e){
e.widget("ui.selectable",e.ui.mouse,{options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch"},_create:function(){
var c=this;
this.element.addClass("ui-selectable");
this.dragged=false;
var f;
this.refresh=function(){
f=e(c.options.filter,c.element[0]);
f.each(function(){
var d=e(this),b=d.offset();
e.data(this,"selectable-item",{element:this,$element:d,left:b.left,top:b.top,right:b.left+d.outerWidth(),bottom:b.top+d.outerHeight(),startselected:false,selected:d.hasClass("ui-selected"),selecting:d.hasClass("ui-selecting"),unselecting:d.hasClass("ui-unselecting")});
});
};
this.refresh();
this.selectees=f.addClass("ui-selectee");
this._mouseInit();
this.helper=e("<div class='ui-selectable-helper'></div>");
},destroy:function(){
this.selectees.removeClass("ui-selectee").removeData("selectable-item");
this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable");
this._mouseDestroy();
return this;
},_mouseStart:function(c){
var f=this;
this.opos=[c.pageX,c.pageY];
if(!this.options.disabled){
var d=this.options;
this.selectees=e(d.filter,this.element[0]);
this._trigger("start",c);
e(d.appendTo).append(this.helper);
this.helper.css({left:c.clientX,top:c.clientY,width:0,height:0});
d.autoRefresh&&this.refresh();
this.selectees.filter(".ui-selected").each(function(){
var b=e.data(this,"selectable-item");
b.startselected=true;
if(!c.metaKey){
b.$element.removeClass("ui-selected");
b.selected=false;
b.$element.addClass("ui-unselecting");
b.unselecting=true;
f._trigger("unselecting",c,{unselecting:b.element});
}
});
e(c.target).parents().andSelf().each(function(){
var b=e.data(this,"selectable-item");
if(b){
var g=!c.metaKey||!b.$element.hasClass("ui-selected");
b.$element.removeClass(g?"ui-unselecting":"ui-selected").addClass(g?"ui-selecting":"ui-unselecting");
b.unselecting=!g;
b.selecting=g;
(b.selected=g)?f._trigger("selecting",c,{selecting:b.element}):f._trigger("unselecting",c,{unselecting:b.element});
return false;
}
});
}
},_mouseDrag:function(c){
var f=this;
this.dragged=true;
if(!this.options.disabled){
var d=this.options,b=this.opos[0],g=this.opos[1],h=c.pageX,i=c.pageY;
if(b>h){
var j=h;
h=b;
b=j;
}
if(g>i){
j=i;
i=g;
g=j;
}
this.helper.css({left:b,top:g,width:h-b,height:i-g});
this.selectees.each(function(){
var a=e.data(this,"selectable-item");
if(!(!a||a.element==f.element[0])){
var k=false;
if(d.tolerance=="touch"){
k=!(a.left>h||a.right<b||a.top>i||a.bottom<g);
}else{
if(d.tolerance=="fit"){
k=a.left>b&&a.right<h&&a.top>g&&a.bottom<i;
}
}
if(k){
if(a.selected){
a.$element.removeClass("ui-selected");
a.selected=false;
}
if(a.unselecting){
a.$element.removeClass("ui-unselecting");
a.unselecting=false;
}
if(!a.selecting){
a.$element.addClass("ui-selecting");
a.selecting=true;
f._trigger("selecting",c,{selecting:a.element});
}
}else{
if(a.selecting){
if(c.metaKey&&a.startselected){
a.$element.removeClass("ui-selecting");
a.selecting=false;
a.$element.addClass("ui-selected");
a.selected=true;
}else{
a.$element.removeClass("ui-selecting");
a.selecting=false;
if(a.startselected){
a.$element.addClass("ui-unselecting");
a.unselecting=true;
}
f._trigger("unselecting",c,{unselecting:a.element});
}
}
if(a.selected){
if(!c.metaKey&&!a.startselected){
a.$element.removeClass("ui-selected");
a.selected=false;
a.$element.addClass("ui-unselecting");
a.unselecting=true;
f._trigger("unselecting",c,{unselecting:a.element});
}
}
}
}
});
return false;
}
},_mouseStop:function(c){
var f=this;
this.dragged=false;
e(".ui-unselecting",this.element[0]).each(function(){
var d=e.data(this,"selectable-item");
d.$element.removeClass("ui-unselecting");
d.unselecting=false;
d.startselected=false;
f._trigger("unselected",c,{unselected:d.element});
});
e(".ui-selecting",this.element[0]).each(function(){
var d=e.data(this,"selectable-item");
d.$element.removeClass("ui-selecting").addClass("ui-selected");
d.selecting=false;
d.selected=true;
d.startselected=true;
f._trigger("selected",c,{selected:d.element});
});
this._trigger("stop",c);
this.helper.remove();
return false;
}});
e.extend(e.ui.selectable,{version:"1.8.7"});
})(jQuery);
(function(d){
d.widget("ui.sortable",d.ui.mouse,{widgetEventPrefix:"sort",options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000},_create:function(){
this.containerCache={};
this.element.addClass("ui-sortable");
this.refresh();
this.floating=this.items.length?/left|right/.test(this.items[0].item.css("float")):false;
this.offset=this.element.offset();
this._mouseInit();
},destroy:function(){
this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable");
this._mouseDestroy();
for(var a=this.items.length-1;a>=0;a--){
this.items[a].item.removeData("sortable-item");
}
return this;
},_setOption:function(a,b){
if(a==="disabled"){
this.options[a]=b;
this.widget()[b?"addClass":"removeClass"]("ui-sortable-disabled");
}else{
d.Widget.prototype._setOption.apply(this,arguments);
}
},_mouseCapture:function(a,b){
if(this.reverting){
return false;
}
if(this.options.disabled||this.options.type=="static"){
return false;
}
this._refreshItems(a);
var c=null,e=this;
d(a.target).parents().each(function(){
if(d.data(this,"sortable-item")==e){
c=d(this);
return false;
}
});
if(d.data(a.target,"sortable-item")==e){
c=d(a.target);
}
if(!c){
return false;
}
if(this.options.handle&&!b){
var f=false;
d(this.options.handle,c).find("*").andSelf().each(function(){
if(this==a.target){
f=true;
}
});
if(!f){
return false;
}
}
this.currentItem=c;
this._removeCurrentsFromItems();
return true;
},_mouseStart:function(a,b,c){
b=this.options;
var e=this;
this.currentContainer=this;
this.refreshPositions();
this.helper=this._createHelper(a);
this._cacheHelperProportions();
this._cacheMargins();
this.scrollParent=this.helper.scrollParent();
this.offset=this.currentItem.offset();
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};
this.helper.css("position","absolute");
this.cssPosition=this.helper.css("position");
d.extend(this.offset,{click:{left:a.pageX-this.offset.left,top:a.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.originalPosition=this._generatePosition(a);
this.originalPageX=a.pageX;
this.originalPageY=a.pageY;
b.cursorAt&&this._adjustOffsetFromHelper(b.cursorAt);
this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};
this.helper[0]!=this.currentItem[0]&&this.currentItem.hide();
this._createPlaceholder();
b.containment&&this._setContainment();
if(b.cursor){
if(d("body").css("cursor")){
this._storedCursor=d("body").css("cursor");
}
d("body").css("cursor",b.cursor);
}
if(b.opacity){
if(this.helper.css("opacity")){
this._storedOpacity=this.helper.css("opacity");
}
this.helper.css("opacity",b.opacity);
}
if(b.zIndex){
if(this.helper.css("zIndex")){
this._storedZIndex=this.helper.css("zIndex");
}
this.helper.css("zIndex",b.zIndex);
}
if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){
this.overflowOffset=this.scrollParent.offset();
}
this._trigger("start",a,this._uiHash());
this._preserveHelperProportions||this._cacheHelperProportions();
if(!c){
for(c=this.containers.length-1;c>=0;c--){
this.containers[c]._trigger("activate",a,e._uiHash(this));
}
}
if(d.ui.ddmanager){
d.ui.ddmanager.current=this;
}
d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,a);
this.dragging=true;
this.helper.addClass("ui-sortable-helper");
this._mouseDrag(a);
return true;
},_mouseDrag:function(a){
this.position=this._generatePosition(a);
this.positionAbs=this._convertPositionTo("absolute");
if(!this.lastPositionAbs){
this.lastPositionAbs=this.positionAbs;
}
if(this.options.scroll){
var b=this.options,c=false;
if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){
if(this.overflowOffset.top+this.scrollParent[0].offsetHeight-a.pageY<b.scrollSensitivity){
this.scrollParent[0].scrollTop=c=this.scrollParent[0].scrollTop+b.scrollSpeed;
}else{
if(a.pageY-this.overflowOffset.top<b.scrollSensitivity){
this.scrollParent[0].scrollTop=c=this.scrollParent[0].scrollTop-b.scrollSpeed;
}
}
if(this.overflowOffset.left+this.scrollParent[0].offsetWidth-a.pageX<b.scrollSensitivity){
this.scrollParent[0].scrollLeft=c=this.scrollParent[0].scrollLeft+b.scrollSpeed;
}else{
if(a.pageX-this.overflowOffset.left<b.scrollSensitivity){
this.scrollParent[0].scrollLeft=c=this.scrollParent[0].scrollLeft-b.scrollSpeed;
}
}
}else{
if(a.pageY-d(document).scrollTop()<b.scrollSensitivity){
c=d(document).scrollTop(d(document).scrollTop()-b.scrollSpeed);
}else{
if(d(window).height()-(a.pageY-d(document).scrollTop())<b.scrollSensitivity){
c=d(document).scrollTop(d(document).scrollTop()+b.scrollSpeed);
}
}
if(a.pageX-d(document).scrollLeft()<b.scrollSensitivity){
c=d(document).scrollLeft(d(document).scrollLeft()-b.scrollSpeed);
}else{
if(d(window).width()-(a.pageX-d(document).scrollLeft())<b.scrollSensitivity){
c=d(document).scrollLeft(d(document).scrollLeft()+b.scrollSpeed);
}
}
}
c!==false&&d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,a);
}
this.positionAbs=this._convertPositionTo("absolute");
if(!this.options.axis||this.options.axis!="y"){
this.helper[0].style.left=this.position.left+"px";
}
if(!this.options.axis||this.options.axis!="x"){
this.helper[0].style.top=this.position.top+"px";
}
for(b=this.items.length-1;b>=0;b--){
c=this.items[b];
var e=c.item[0],f=this._intersectsWithPointer(c);
if(f){
if(e!=this.currentItem[0]&&this.placeholder[f==1?"next":"prev"]()[0]!=e&&!d.ui.contains(this.placeholder[0],e)&&(this.options.type=="semi-dynamic"?!d.ui.contains(this.element[0],e):true)){
this.direction=f==1?"down":"up";
if(this.options.tolerance=="pointer"||this._intersectsWithSides(c)){
this._rearrange(a,c);
}else{
break;
}
this._trigger("change",a,this._uiHash());
break;
}
}
}
this._contactContainers(a);
d.ui.ddmanager&&d.ui.ddmanager.drag(this,a);
this._trigger("sort",a,this._uiHash());
this.lastPositionAbs=this.positionAbs;
return false;
},_mouseStop:function(a,b){
if(a){
d.ui.ddmanager&&!this.options.dropBehaviour&&d.ui.ddmanager.drop(this,a);
if(this.options.revert){
var c=this;
b=c.placeholder.offset();
c.reverting=true;
d(this.helper).animate({left:b.left-this.offset.parent.left-c.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:b.top-this.offset.parent.top-c.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){
c._clear(a);
});
}else{
this._clear(a,b);
}
return false;
}
},cancel:function(){
var a=this;
if(this.dragging){
this._mouseUp();
this.options.helper=="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();
for(var b=this.containers.length-1;b>=0;b--){
this.containers[b]._trigger("deactivate",null,a._uiHash(this));
if(this.containers[b].containerCache.over){
this.containers[b]._trigger("out",null,a._uiHash(this));
this.containers[b].containerCache.over=0;
}
}
}
this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
this.options.helper!="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove();
d.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});
this.domPosition.prev?d(this.domPosition.prev).after(this.currentItem):d(this.domPosition.parent).prepend(this.currentItem);
return this;
},serialize:function(a){
var b=this._getItemsAsjQuery(a&&a.connected),c=[];
a=a||{};
d(b).each(function(){
var e=(d(a.item||this).attr(a.attribute||"id")||"").match(a.expression||/(.+)[-=_](.+)/);
if(e){
c.push((a.key||e[1]+"[]")+"="+(a.key&&a.expression?e[1]:e[2]));
}
});
!c.length&&a.key&&c.push(a.key+"=");
return c.join("&");
},toArray:function(a){
var b=this._getItemsAsjQuery(a&&a.connected),c=[];
a=a||{};
b.each(function(){
c.push(d(a.item||this).attr(a.attribute||"id")||"");
});
return c;
},_intersectsWith:function(a){
var b=this.positionAbs.left,c=b+this.helperProportions.width,e=this.positionAbs.top,f=e+this.helperProportions.height,g=a.left,h=g+a.width,i=a.top,k=i+a.height,j=this.offset.click.top,l=this.offset.click.left;
j=e+j>i&&e+j<k&&b+l>g&&b+l<h;
return this.options.tolerance=="pointer"||this.options.forcePointerForContainers||this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>a[this.floating?"width":"height"]?j:g<b+this.helperProportions.width/2&&c-this.helperProportions.width/2<h&&i<e+this.helperProportions.height/2&&f-this.helperProportions.height/2<k;
},_intersectsWithPointer:function(a){
var b=d.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,a.top,a.height);
a=d.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,a.left,a.width);
b=b&&a;
a=this._getDragVerticalDirection();
var c=this._getDragHorizontalDirection();
if(!b){
return false;
}
return this.floating?c&&c=="right"||a=="down"?2:1:a&&(a=="down"?2:1);
},_intersectsWithSides:function(a){
var b=d.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,a.top+a.height/2,a.height);
a=d.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,a.left+a.width/2,a.width);
var c=this._getDragVerticalDirection(),e=this._getDragHorizontalDirection();
return this.floating&&e?e=="right"&&a||e=="left"&&!a:c&&(c=="down"&&b||c=="up"&&!b);
},_getDragVerticalDirection:function(){
var a=this.positionAbs.top-this.lastPositionAbs.top;
return a!=0&&(a>0?"down":"up");
},_getDragHorizontalDirection:function(){
var a=this.positionAbs.left-this.lastPositionAbs.left;
return a!=0&&(a>0?"right":"left");
},refresh:function(a){
this._refreshItems(a);
this.refreshPositions();
return this;
},_connectWith:function(){
var a=this.options;
return a.connectWith.constructor==String?[a.connectWith]:a.connectWith;
},_getItemsAsjQuery:function(a){
var b=[],c=[],e=this._connectWith();
if(e&&a){
for(a=e.length-1;a>=0;a--){
for(var f=d(e[a]),g=f.length-1;g>=0;g--){
var h=d.data(f[g],"sortable");
if(h&&h!=this&&!h.options.disabled){
c.push([d.isFunction(h.options.items)?h.options.items.call(h.element):d(h.options.items,h.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),h]);
}
}
}
}
c.push([d.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):d(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);
for(a=c.length-1;a>=0;a--){
c[a][0].each(function(){
b.push(this);
});
}
return d(b);
},_removeCurrentsFromItems:function(){
for(var a=this.currentItem.find(":data(sortable-item)"),b=0;b<this.items.length;b++){
for(var c=0;c<a.length;c++){
a[c]==this.items[b].item[0]&&this.items.splice(b,1);
}
}
},_refreshItems:function(a){
this.items=[];
this.containers=[this];
var b=this.items,c=[[d.isFunction(this.options.items)?this.options.items.call(this.element[0],a,{item:this.currentItem}):d(this.options.items,this.element),this]],e=this._connectWith();
if(e){
for(var f=e.length-1;f>=0;f--){
for(var g=d(e[f]),h=g.length-1;h>=0;h--){
var i=d.data(g[h],"sortable");
if(i&&i!=this&&!i.options.disabled){
c.push([d.isFunction(i.options.items)?i.options.items.call(i.element[0],a,{item:this.currentItem}):d(i.options.items,i.element),i]);
this.containers.push(i);
}
}
}
}
for(f=c.length-1;f>=0;f--){
a=c[f][1];
e=c[f][0];
h=0;
for(g=e.length;h<g;h++){
i=d(e[h]);
i.data("sortable-item",a);
b.push({item:i,instance:a,width:0,height:0,left:0,top:0});
}
}
},refreshPositions:function(a){
if(this.offsetParent&&this.helper){
this.offset.parent=this._getParentOffset();
}
for(var b=this.items.length-1;b>=0;b--){
var c=this.items[b],e=this.options.toleranceElement?d(this.options.toleranceElement,c.item):c.item;
if(!a){
c.width=e.outerWidth();
c.height=e.outerHeight();
}
e=e.offset();
c.left=e.left;
c.top=e.top;
}
if(this.options.custom&&this.options.custom.refreshContainers){
this.options.custom.refreshContainers.call(this);
}else{
for(b=this.containers.length-1;b>=0;b--){
e=this.containers[b].element.offset();
this.containers[b].containerCache.left=e.left;
this.containers[b].containerCache.top=e.top;
this.containers[b].containerCache.width=this.containers[b].element.outerWidth();
this.containers[b].containerCache.height=this.containers[b].element.outerHeight();
}
}
return this;
},_createPlaceholder:function(a){
var b=a||this,c=b.options;
if(!c.placeholder||c.placeholder.constructor==String){
var e=c.placeholder;
c.placeholder={element:function(){
var f=d(document.createElement(b.currentItem[0].nodeName)).addClass(e||b.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
if(!e){
f.style.visibility="hidden";
}
return f;
},update:function(f,g){
if(!(e&&!c.forcePlaceholderSize)){
g.height()||g.height(b.currentItem.innerHeight()-parseInt(b.currentItem.css("paddingTop")||0,10)-parseInt(b.currentItem.css("paddingBottom")||0,10));
g.width()||g.width(b.currentItem.innerWidth()-parseInt(b.currentItem.css("paddingLeft")||0,10)-parseInt(b.currentItem.css("paddingRight")||0,10));
}
}};
}
b.placeholder=d(c.placeholder.element.call(b.element,b.currentItem));
b.currentItem.after(b.placeholder);
c.placeholder.update(b,b.placeholder);
},_contactContainers:function(a){
for(var b=null,c=null,e=this.containers.length-1;e>=0;e--){
if(!d.ui.contains(this.currentItem[0],this.containers[e].element[0])){
if(this._intersectsWith(this.containers[e].containerCache)){
if(!(b&&d.ui.contains(this.containers[e].element[0],b.element[0]))){
b=this.containers[e];
c=e;
}
}else{
if(this.containers[e].containerCache.over){
this.containers[e]._trigger("out",a,this._uiHash(this));
this.containers[e].containerCache.over=0;
}
}
}
}
if(b){
if(this.containers.length===1){
this.containers[c]._trigger("over",a,this._uiHash(this));
this.containers[c].containerCache.over=1;
}else{
if(this.currentContainer!=this.containers[c]){
b=10000;
e=null;
for(var f=this.positionAbs[this.containers[c].floating?"left":"top"],g=this.items.length-1;g>=0;g--){
if(d.ui.contains(this.containers[c].element[0],this.items[g].item[0])){
var h=this.items[g][this.containers[c].floating?"left":"top"];
if(Math.abs(h-f)<b){
b=Math.abs(h-f);
e=this.items[g];
}
}
}
if(e||this.options.dropOnEmpty){
this.currentContainer=this.containers[c];
e?this._rearrange(a,e,null,true):this._rearrange(a,null,this.containers[c].element,true);
this._trigger("change",a,this._uiHash());
this.containers[c]._trigger("change",a,this._uiHash(this));
this.options.placeholder.update(this.currentContainer,this.placeholder);
this.containers[c]._trigger("over",a,this._uiHash(this));
this.containers[c].containerCache.over=1;
}
}
}
}
},_createHelper:function(a){
var b=this.options;
a=d.isFunction(b.helper)?d(b.helper.apply(this.element[0],[a,this.currentItem])):b.helper=="clone"?this.currentItem.clone():this.currentItem;
a.parents("body").length||d(b.appendTo!="parent"?b.appendTo:this.currentItem[0].parentNode)[0].appendChild(a[0]);
if(a[0]==this.currentItem[0]){
this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")};
}
if(a[0].style.width==""||b.forceHelperSize){
a.width(this.currentItem.width());
}
if(a[0].style.height==""||b.forceHelperSize){
a.height(this.currentItem.height());
}
return a;
},_adjustOffsetFromHelper:function(a){
if(typeof a=="string"){
a=a.split(" ");
}
if(d.isArray(a)){
a={left:+a[0],top:+a[1]||0};
}
if("left" in a){
this.offset.click.left=a.left+this.margins.left;
}
if("right" in a){
this.offset.click.left=this.helperProportions.width-a.right+this.margins.left;
}
if("top" in a){
this.offset.click.top=a.top+this.margins.top;
}
if("bottom" in a){
this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top;
}
},_getParentOffset:function(){
this.offsetParent=this.helper.offsetParent();
var a=this.offsetParent.offset();
if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0])){
a.left+=this.scrollParent.scrollLeft();
a.top+=this.scrollParent.scrollTop();
}
if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&d.browser.msie){
a={top:0,left:0};
}
return {top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)};
},_getRelativeOffset:function(){
if(this.cssPosition=="relative"){
var a=this.currentItem.position();
return {top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()};
}else{
return {top:0,left:0};
}
},_cacheMargins:function(){
this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0};
},_cacheHelperProportions:function(){
this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()};
},_setContainment:function(){
var a=this.options;
if(a.containment=="parent"){
a.containment=this.helper[0].parentNode;
}
if(a.containment=="document"||a.containment=="window"){
this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,d(a.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(d(a.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];
}
if(!/^(document|window|parent)$/.test(a.containment)){
var b=d(a.containment)[0];
a=d(a.containment).offset();
var c=d(b).css("overflow")!="hidden";
this.containment=[a.left+(parseInt(d(b).css("borderLeftWidth"),10)||0)+(parseInt(d(b).css("paddingLeft"),10)||0)-this.margins.left,a.top+(parseInt(d(b).css("borderTopWidth"),10)||0)+(parseInt(d(b).css("paddingTop"),10)||0)-this.margins.top,a.left+(c?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(d(b).css("borderLeftWidth"),10)||0)-(parseInt(d(b).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,a.top+(c?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(d(b).css("borderTopWidth"),10)||0)-(parseInt(d(b).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top];
}
},_convertPositionTo:function(a,b){
if(!b){
b=this.position;
}
a=a=="absolute"?1:-1;
var c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(c[0].tagName);
return {top:b.top+this.offset.relative.top*a+this.offset.parent.top*a-(d.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:c.scrollTop())*a),left:b.left+this.offset.relative.left*a+this.offset.parent.left*a-(d.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:c.scrollLeft())*a)};
},_generatePosition:function(a){
var b=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(c[0].tagName);
if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0])){
this.offset.relative=this._getRelativeOffset();
}
var f=a.pageX,g=a.pageY;
if(this.originalPosition){
if(this.containment){
if(a.pageX-this.offset.click.left<this.containment[0]){
f=this.containment[0]+this.offset.click.left;
}
if(a.pageY-this.offset.click.top<this.containment[1]){
g=this.containment[1]+this.offset.click.top;
}
if(a.pageX-this.offset.click.left>this.containment[2]){
f=this.containment[2]+this.offset.click.left;
}
if(a.pageY-this.offset.click.top>this.containment[3]){
g=this.containment[3]+this.offset.click.top;
}
}
if(b.grid){
g=this.originalPageY+Math.round((g-this.originalPageY)/b.grid[1])*b.grid[1];
g=this.containment?!(g-this.offset.click.top<this.containment[1]||g-this.offset.click.top>this.containment[3])?g:!(g-this.offset.click.top<this.containment[1])?g-b.grid[1]:g+b.grid[1]:g;
f=this.originalPageX+Math.round((f-this.originalPageX)/b.grid[0])*b.grid[0];
f=this.containment?!(f-this.offset.click.left<this.containment[0]||f-this.offset.click.left>this.containment[2])?f:!(f-this.offset.click.left<this.containment[0])?f-b.grid[0]:f+b.grid[0]:f;
}
}
return {top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(d.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:c.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(d.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:c.scrollLeft())};
},_rearrange:function(a,b,c,e){
c?c[0].appendChild(this.placeholder[0]):b.item[0].parentNode.insertBefore(this.placeholder[0],this.direction=="down"?b.item[0]:b.item[0].nextSibling);
this.counter=this.counter?++this.counter:1;
var f=this,g=this.counter;
window.setTimeout(function(){
g==f.counter&&f.refreshPositions(!e);
},0);
},_clear:function(a,b){
this.reverting=false;
var c=[];
!this._noFinalSort&&this.currentItem[0].parentNode&&this.placeholder.before(this.currentItem);
this._noFinalSort=null;
if(this.helper[0]==this.currentItem[0]){
for(var e in this._storedCSS){
if(this._storedCSS[e]=="auto"||this._storedCSS[e]=="static"){
this._storedCSS[e]="";
}
}
this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
}else{
this.currentItem.show();
}
this.fromOutside&&!b&&c.push(function(f){
this._trigger("receive",f,this._uiHash(this.fromOutside));
});
if((this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!b){
c.push(function(f){
this._trigger("update",f,this._uiHash());
});
}
if(!d.ui.contains(this.element[0],this.currentItem[0])){
b||c.push(function(f){
this._trigger("remove",f,this._uiHash());
});
for(e=this.containers.length-1;e>=0;e--){
if(d.ui.contains(this.containers[e].element[0],this.currentItem[0])&&!b){
c.push(function(f){
return function(g){
f._trigger("receive",g,this._uiHash(this));
};
}.call(this,this.containers[e]));
c.push(function(f){
return function(g){
f._trigger("update",g,this._uiHash(this));
};
}.call(this,this.containers[e]));
}
}
}
for(e=this.containers.length-1;e>=0;e--){
b||c.push(function(f){
return function(g){
f._trigger("deactivate",g,this._uiHash(this));
};
}.call(this,this.containers[e]));
if(this.containers[e].containerCache.over){
c.push(function(f){
return function(g){
f._trigger("out",g,this._uiHash(this));
};
}.call(this,this.containers[e]));
this.containers[e].containerCache.over=0;
}
}
this._storedCursor&&d("body").css("cursor",this._storedCursor);
this._storedOpacity&&this.helper.css("opacity",this._storedOpacity);
if(this._storedZIndex){
this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex);
}
this.dragging=false;
if(this.cancelHelperRemoval){
if(!b){
this._trigger("beforeStop",a,this._uiHash());
for(e=0;e<c.length;e++){
c[e].call(this,a);
}
this._trigger("stop",a,this._uiHash());
}
return false;
}
b||this._trigger("beforeStop",a,this._uiHash());
this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
this.helper[0]!=this.currentItem[0]&&this.helper.remove();
this.helper=null;
if(!b){
for(e=0;e<c.length;e++){
c[e].call(this,a);
}
this._trigger("stop",a,this._uiHash());
}
this.fromOutside=false;
return true;
},_trigger:function(){
d.Widget.prototype._trigger.apply(this,arguments)===false&&this.cancel();
},_uiHash:function(a){
var b=a||this;
return {helper:b.helper,placeholder:b.placeholder||d([]),position:b.position,originalPosition:b.originalPosition,offset:b.positionAbs,item:b.currentItem,sender:a?a.element:null};
}});
d.extend(d.ui.sortable,{version:"1.8.7"});
})(jQuery);
(function(c){
c.widget("ui.accordion",{options:{active:0,animated:"slide",autoHeight:true,clearStyle:false,collapsible:false,event:"click",fillSpace:false,header:"> li > :first-child,> :not(li):even",icons:{header:"ui-icon-triangle-1-e",headerSelected:"ui-icon-triangle-1-s"},navigation:false,navigationFilter:function(){
return this.href.toLowerCase()===location.href.toLowerCase();
}},_create:function(){
var a=this,b=a.options;
a.running=0;
a.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix");
a.headers=a.element.find(b.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){
b.disabled||c(this).addClass("ui-state-hover");
}).bind("mouseleave.accordion",function(){
b.disabled||c(this).removeClass("ui-state-hover");
}).bind("focus.accordion",function(){
b.disabled||c(this).addClass("ui-state-focus");
}).bind("blur.accordion",function(){
b.disabled||c(this).removeClass("ui-state-focus");
});
a.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");
if(b.navigation){
var d=a.element.find("a").filter(b.navigationFilter).eq(0);
if(d.length){
var f=d.closest(".ui-accordion-header");
a.active=f.length?f:d.closest(".ui-accordion-content").prev();
}
}
a.active=a._findActive(a.active||b.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");
a.active.next().addClass("ui-accordion-content-active");
a._createIcons();
a.resize();
a.element.attr("role","tablist");
a.headers.attr("role","tab").bind("keydown.accordion",function(g){
return a._keydown(g);
}).next().attr("role","tabpanel");
a.headers.not(a.active||"").attr({"aria-expanded":"false",tabIndex:-1}).next().hide();
a.active.length?a.active.attr({"aria-expanded":"true",tabIndex:0}):a.headers.eq(0).attr("tabIndex",0);
c.browser.safari||a.headers.find("a").attr("tabIndex",-1);
b.event&&a.headers.bind(b.event.split(" ").join(".accordion ")+".accordion",function(g){
a._clickHandler.call(a,g,this);
g.preventDefault();
});
},_createIcons:function(){
var a=this.options;
if(a.icons){
c("<span></span>").addClass("ui-icon "+a.icons.header).prependTo(this.headers);
this.active.children(".ui-icon").toggleClass(a.icons.header).toggleClass(a.icons.headerSelected);
this.element.addClass("ui-accordion-icons");
}
},_destroyIcons:function(){
this.headers.children(".ui-icon").remove();
this.element.removeClass("ui-accordion-icons");
},destroy:function(){
var a=this.options;
this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("tabIndex");
this.headers.find("a").removeAttr("tabIndex");
this._destroyIcons();
var b=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");
if(a.autoHeight||a.fillHeight){
b.css("height","");
}
return c.Widget.prototype.destroy.call(this);
},_setOption:function(a,b){
c.Widget.prototype._setOption.apply(this,arguments);
a=="active"&&this.activate(b);
if(a=="icons"){
this._destroyIcons();
b&&this._createIcons();
}
if(a=="disabled"){
this.headers.add(this.headers.next())[b?"addClass":"removeClass"]("ui-accordion-disabled ui-state-disabled");
}
},_keydown:function(a){
if(!(this.options.disabled||a.altKey||a.ctrlKey)){
var b=c.ui.keyCode,d=this.headers.length,f=this.headers.index(a.target),g=false;
switch(a.keyCode){
case b.RIGHT:
case b.DOWN:
g=this.headers[(f+1)%d];
break;
case b.LEFT:
case b.UP:
g=this.headers[(f-1+d)%d];
break;
case b.SPACE:
case b.ENTER:
this._clickHandler({target:a.target},a.target);
a.preventDefault();
}
if(g){
c(a.target).attr("tabIndex",-1);
c(g).attr("tabIndex",0);
g.focus();
return false;
}
return true;
}
},resize:function(){
var a=this.options,b;
if(a.fillSpace){
if(c.browser.msie){
var d=this.element.parent().css("overflow");
this.element.parent().css("overflow","hidden");
}
b=this.element.parent().height();
c.browser.msie&&this.element.parent().css("overflow",d);
this.headers.each(function(){
b-=c(this).outerHeight(true);
});
this.headers.next().each(function(){
c(this).height(Math.max(0,b-c(this).innerHeight()+c(this).height()));
}).css("overflow","auto");
}else{
if(a.autoHeight){
b=0;
this.headers.next().each(function(){
b=Math.max(b,c(this).height("").height());
}).height(b);
}
}
return this;
},activate:function(a){
this.options.active=a;
a=this._findActive(a)[0];
this._clickHandler({target:a},a);
return this;
},_findActive:function(a){
return a?typeof a==="number"?this.headers.filter(":eq("+a+")"):this.headers.not(this.headers.not(a)):a===false?c([]):this.headers.filter(":eq(0)");
},_clickHandler:function(a,b){
var d=this.options;
if(!d.disabled){
if(a.target){
a=c(a.currentTarget||b);
b=a[0]===this.active[0];
d.active=d.collapsible&&b?false:this.headers.index(a);
if(!(this.running||!d.collapsible&&b)){
this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);
if(!b){
a.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(d.icons.header).addClass(d.icons.headerSelected);
a.next().addClass("ui-accordion-content-active");
}
h=a.next();
f=this.active.next();
g={options:d,newHeader:b&&d.collapsible?c([]):a,oldHeader:this.active,newContent:b&&d.collapsible?c([]):h,oldContent:f};
d=this.headers.index(this.active[0])>this.headers.index(a[0]);
this.active=b?c([]):a;
this._toggle(h,f,g,b,d);
}
}else{
if(d.collapsible){
this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);
this.active.next().addClass("ui-accordion-content-active");
var f=this.active.next(),g={options:d,newHeader:c([]),oldHeader:d.active,newContent:c([]),oldContent:f},h=this.active=c([]);
this._toggle(h,f,g);
}
}
}
},_toggle:function(a,b,d,f,g){
var h=this,e=h.options;
h.toShow=a;
h.toHide=b;
h.data=d;
var j=function(){
if(h){
return h._completed.apply(h,arguments);
}
};
h._trigger("changestart",null,h.data);
h.running=b.size()===0?a.size():b.size();
if(e.animated){
d={};
d=e.collapsible&&f?{toShow:c([]),toHide:b,complete:j,down:g,autoHeight:e.autoHeight||e.fillSpace}:{toShow:a,toHide:b,complete:j,down:g,autoHeight:e.autoHeight||e.fillSpace};
if(!e.proxied){
e.proxied=e.animated;
}
if(!e.proxiedDuration){
e.proxiedDuration=e.duration;
}
e.animated=c.isFunction(e.proxied)?e.proxied(d):e.proxied;
e.duration=c.isFunction(e.proxiedDuration)?e.proxiedDuration(d):e.proxiedDuration;
f=c.ui.accordion.animations;
var i=e.duration,k=e.animated;
if(k&&!f[k]&&!c.easing[k]){
k="slide";
}
f[k]||(f[k]=function(l){
this.slide(l,{easing:k,duration:i||700});
});
f[k](d);
}else{
if(e.collapsible&&f){
a.toggle();
}else{
b.hide();
a.show();
}
j(true);
}
b.prev().attr({"aria-expanded":"false",tabIndex:-1}).blur();
a.prev().attr({"aria-expanded":"true",tabIndex:0}).focus();
},_completed:function(a){
this.running=a?0:--this.running;
if(!this.running){
this.options.clearStyle&&this.toShow.add(this.toHide).css({height:"",overflow:""});
this.toHide.removeClass("ui-accordion-content-active");
this._trigger("change",null,this.data);
}
}});
c.extend(c.ui.accordion,{version:"1.8.7",animations:{slide:function(a,b){
a=c.extend({easing:"swing",duration:300},a,b);
if(a.toHide.size()){
if(a.toShow.size()){
var d=a.toShow.css("overflow"),f=0,g={},h={},e;
b=a.toShow;
e=b[0].style.width;
b.width(parseInt(b.parent().width(),10)-parseInt(b.css("paddingLeft"),10)-parseInt(b.css("paddingRight"),10)-(parseInt(b.css("borderLeftWidth"),10)||0)-(parseInt(b.css("borderRightWidth"),10)||0));
c.each(["height","paddingTop","paddingBottom"],function(j,i){
h[i]="hide";
j=(""+c.css(a.toShow[0],i)).match(/^([\d+-.]+)(.*)$/);
g[i]={value:j[1],unit:j[2]||"px"};
});
a.toShow.css({height:0,overflow:"hidden"}).show();
a.toHide.filter(":hidden").each(a.complete).end().filter(":visible").animate(h,{step:function(j,i){
if(i.prop=="height"){
f=i.end-i.start===0?0:(i.now-i.start)/(i.end-i.start);
}
a.toShow[0].style[i.prop]=f*g[i.prop].value+g[i.prop].unit;
},duration:a.duration,easing:a.easing,complete:function(){
a.autoHeight||a.toShow.css("height","");
a.toShow.css({width:e,overflow:d});
a.complete();
}});
}else{
a.toHide.animate({height:"hide",paddingTop:"hide",paddingBottom:"hide"},a);
}
}else{
a.toShow.animate({height:"show",paddingTop:"show",paddingBottom:"show"},a);
}
},bounceslide:function(a){
this.slide(a,{easing:a.down?"easeOutBounce":"swing",duration:a.down?1000:200});
}}});
})(jQuery);
(function(d){
d.widget("ui.autocomplete",{options:{appendTo:"body",delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null},_create:function(){
var a=this,b=this.element[0].ownerDocument,f;
this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(c){
if(!(a.options.disabled||a.element.attr("readonly"))){
f=false;
var e=d.ui.keyCode;
switch(c.keyCode){
case e.PAGE_UP:
a._move("previousPage",c);
break;
case e.PAGE_DOWN:
a._move("nextPage",c);
break;
case e.UP:
a._move("previous",c);
c.preventDefault();
break;
case e.DOWN:
a._move("next",c);
c.preventDefault();
break;
case e.ENTER:
case e.NUMPAD_ENTER:
if(a.menu.active){
f=true;
c.preventDefault();
}
case e.TAB:
if(!a.menu.active){
return;
}
a.menu.select(c);
break;
case e.ESCAPE:
a.element.val(a.term);
a.close(c);
break;
default:
clearTimeout(a.searching);
a.searching=setTimeout(function(){
if(a.term!=a.element.val()){
a.selectedItem=null;
a.search(null,c);
}
},a.options.delay);
break;
}
}
}).bind("keypress.autocomplete",function(c){
if(f){
f=false;
c.preventDefault();
}
}).bind("focus.autocomplete",function(){
if(!a.options.disabled){
a.selectedItem=null;
a.previous=a.element.val();
}
}).bind("blur.autocomplete",function(c){
if(!a.options.disabled){
clearTimeout(a.searching);
a.closing=setTimeout(function(){
a.close(c);
a._change(c);
},150);
}
});
this._initSource();
this.response=function(){
return a._response.apply(a,arguments);
};
this.menu=d("<ul></ul>").addClass("ui-autocomplete").appendTo(d(this.options.appendTo||"body",b)[0]).mousedown(function(c){
var e=a.menu.element[0];
d(c.target).closest(".ui-menu-item").length||setTimeout(function(){
d(document).one("mousedown",function(g){
g.target!==a.element[0]&&g.target!==e&&!d.ui.contains(e,g.target)&&a.close();
});
},1);
setTimeout(function(){
clearTimeout(a.closing);
},13);
}).menu({focus:function(c,e){
e=e.item.data("item.autocomplete");
false!==a._trigger("focus",c,{item:e})&&/^key/.test(c.originalEvent.type)&&a.element.val(e.value);
},selected:function(c,e){
var g=e.item.data("item.autocomplete"),h=a.previous;
if(a.element[0]!==b.activeElement){
a.element.focus();
a.previous=h;
setTimeout(function(){
a.previous=h;
a.selectedItem=g;
},1);
}
false!==a._trigger("select",c,{item:g})&&a.element.val(g.value);
a.term=a.element.val();
a.close(c);
a.selectedItem=g;
},blur:function(){
a.menu.element.is(":visible")&&a.element.val()!==a.term&&a.element.val(a.term);
}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu");
d.fn.bgiframe&&this.menu.element.bgiframe();
},destroy:function(){
this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");
this.menu.element.remove();
d.Widget.prototype.destroy.call(this);
},_setOption:function(a,b){
d.Widget.prototype._setOption.apply(this,arguments);
a==="source"&&this._initSource();
if(a==="appendTo"){
this.menu.element.appendTo(d(b||"body",this.element[0].ownerDocument)[0]);
}
},_initSource:function(){
var a=this,b,f;
if(d.isArray(this.options.source)){
b=this.options.source;
this.source=function(c,e){
e(d.ui.autocomplete.filter(b,c.term));
};
}else{
if(typeof this.options.source==="string"){
f=this.options.source;
this.source=function(c,e){
a.xhr&&a.xhr.abort();
a.xhr=d.ajax({url:f,data:c,dataType:"json",success:function(g,h,i){
i===a.xhr&&e(g);
a.xhr=null;
},error:function(g){
g===a.xhr&&e([]);
a.xhr=null;
}});
};
}else{
this.source=this.options.source;
}
}
},search:function(a,b){
a=a!=null?a:this.element.val();
this.term=this.element.val();
if(a.length<this.options.minLength){
return this.close(b);
}
clearTimeout(this.closing);
if(this._trigger("search",b)!==false){
return this._search(a);
}
},_search:function(a){
this.element.addClass("ui-autocomplete-loading");
this.source({term:a},this.response);
},_response:function(a){
if(a&&a.length){
a=this._normalize(a);
this._suggest(a);
this._trigger("open");
}else{
this.close();
}
this.element.removeClass("ui-autocomplete-loading");
},close:function(a){
clearTimeout(this.closing);
if(this.menu.element.is(":visible")){
this.menu.element.hide();
this.menu.deactivate();
this._trigger("close",a);
}
},_change:function(a){
this.previous!==this.element.val()&&this._trigger("change",a,{item:this.selectedItem});
},_normalize:function(a){
if(a.length&&a[0].label&&a[0].value){
return a;
}
return d.map(a,function(b){
if(typeof b==="string"){
return {label:b,value:b};
}
return d.extend({label:b.label||b.value,value:b.value||b.label},b);
});
},_suggest:function(a){
var b=this.menu.element.empty().zIndex(this.element.zIndex()+1);
this._renderMenu(b,a);
this.menu.deactivate();
this.menu.refresh();
b.show();
this._resizeMenu();
b.position(d.extend({of:this.element},this.options.position));
},_resizeMenu:function(){
var a=this.menu.element;
a.outerWidth(Math.max(a.width("").outerWidth(),this.element.outerWidth()));
},_renderMenu:function(a,b){
var f=this;
d.each(b,function(c,e){
f._renderItem(a,e);
});
},_renderItem:function(a,b){
return d("<li></li>").data("item.autocomplete",b).append(d("<a></a>").text(b.label)).appendTo(a);
},_move:function(a,b){
if(this.menu.element.is(":visible")){
if(this.menu.first()&&/^previous/.test(a)||this.menu.last()&&/^next/.test(a)){
this.element.val(this.term);
this.menu.deactivate();
}else{
this.menu[a](b);
}
}else{
this.search(null,b);
}
},widget:function(){
return this.menu.element;
}});
d.extend(d.ui.autocomplete,{escapeRegex:function(a){
return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&");
},filter:function(a,b){
var f=new RegExp(d.ui.autocomplete.escapeRegex(b),"i");
return d.grep(a,function(c){
return f.test(c.label||c.value||c);
});
}});
})(jQuery);
(function(d){
d.widget("ui.menu",{_create:function(){
var a=this;
this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(b){
if(d(b.target).closest(".ui-menu-item a").length){
b.preventDefault();
a.select(b);
}
});
this.refresh();
},refresh:function(){
var a=this;
this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem").children("a").addClass("ui-corner-all").attr("tabindex",-1).mouseenter(function(b){
a.activate(b,d(this).parent());
}).mouseleave(function(){
a.deactivate();
});
},activate:function(a,b){
this.deactivate();
if(this.hasScroll()){
var f=b.offset().top-this.element.offset().top,c=this.element.attr("scrollTop"),e=this.element.height();
if(f<0){
this.element.attr("scrollTop",c+f);
}else{
f>=e&&this.element.attr("scrollTop",c+f-e+b.height());
}
}
this.active=b.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end();
this._trigger("focus",a,{item:b});
},deactivate:function(){
if(this.active){
this.active.children("a").removeClass("ui-state-hover").removeAttr("id");
this._trigger("blur");
this.active=null;
}
},next:function(a){
this.move("next",".ui-menu-item:first",a);
},previous:function(a){
this.move("prev",".ui-menu-item:last",a);
},first:function(){
return this.active&&!this.active.prevAll(".ui-menu-item").length;
},last:function(){
return this.active&&!this.active.nextAll(".ui-menu-item").length;
},move:function(a,b,f){
if(this.active){
a=this.active[a+"All"](".ui-menu-item").eq(0);
a.length?this.activate(f,a):this.activate(f,this.element.children(b));
}else{
this.activate(f,this.element.children(b));
}
},nextPage:function(a){
if(this.hasScroll()){
if(!this.active||this.last()){
this.activate(a,this.element.children(".ui-menu-item:first"));
}else{
var b=this.active.offset().top,f=this.element.height(),c=this.element.children(".ui-menu-item").filter(function(){
var e=d(this).offset().top-b-f+d(this).height();
return e<10&&e>-10;
});
c.length||(c=this.element.children(".ui-menu-item:last"));
this.activate(a,c);
}
}else{
this.activate(a,this.element.children(".ui-menu-item").filter(!this.active||this.last()?":first":":last"));
}
},previousPage:function(a){
if(this.hasScroll()){
if(!this.active||this.first()){
this.activate(a,this.element.children(".ui-menu-item:last"));
}else{
var b=this.active.offset().top,f=this.element.height();
result=this.element.children(".ui-menu-item").filter(function(){
var c=d(this).offset().top-b+f-d(this).height();
return c<10&&c>-10;
});
result.length||(result=this.element.children(".ui-menu-item:first"));
this.activate(a,result);
}
}else{
this.activate(a,this.element.children(".ui-menu-item").filter(!this.active||this.first()?":last":":first"));
}
},hasScroll:function(){
return this.element.height()<this.element.attr("scrollHeight");
},select:function(a){
this._trigger("selected",a,{item:this.active});
}});
})(jQuery);
(function(c,j){
var k={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},l={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true};
c.widget("ui.dialog",{options:{autoOpen:true,buttons:{},closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:false,maxWidth:false,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",collision:"fit",using:function(a){
var b=c(this).css(a).offset().top;
b<0&&c(this).css("top",a.top-b);
}},resizable:true,show:null,stack:true,title:"",width:300,zIndex:1000},_create:function(){
this.originalTitle=this.element.attr("title");
if(typeof this.originalTitle!=="string"){
this.originalTitle="";
}
this.options.title=this.options.title||this.originalTitle;
var a=this,b=a.options,d=b.title||"&#160;",e=c.ui.dialog.getTitleId(a.element),g=(a.uiDialog=c("<div></div>")).appendTo(document.body).hide().addClass("ui-dialog ui-widget ui-widget-content ui-corner-all "+b.dialogClass).css({zIndex:b.zIndex}).attr("tabIndex",-1).css("outline",0).keydown(function(i){
if(b.closeOnEscape&&i.keyCode&&i.keyCode===c.ui.keyCode.ESCAPE){
a.close(i);
i.preventDefault();
}
}).attr({role:"dialog","aria-labelledby":e}).mousedown(function(i){
a.moveToTop(false,i);
});
a.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(g);
var f=(a.uiDialogTitlebar=c("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(g),h=c("<a href=\"#\"></a>").addClass("ui-dialog-titlebar-close ui-corner-all").attr("role","button").hover(function(){
h.addClass("ui-state-hover");
},function(){
h.removeClass("ui-state-hover");
}).focus(function(){
h.addClass("ui-state-focus");
}).blur(function(){
h.removeClass("ui-state-focus");
}).click(function(i){
a.close(i);
return false;
}).appendTo(f);
(a.uiDialogTitlebarCloseText=c("<span></span>")).addClass("ui-icon ui-icon-closethick").text(b.closeText).appendTo(h);
c("<span></span>").addClass("ui-dialog-title").attr("id",e).html(d).prependTo(f);
if(c.isFunction(b.beforeclose)&&!c.isFunction(b.beforeClose)){
b.beforeClose=b.beforeclose;
}
f.find("*").add(f).disableSelection();
b.draggable&&c.fn.draggable&&a._makeDraggable();
b.resizable&&c.fn.resizable&&a._makeResizable();
a._createButtons(b.buttons);
a._isOpen=false;
c.fn.bgiframe&&g.bgiframe();
},_init:function(){
this.options.autoOpen&&this.open();
},destroy:function(){
var a=this;
a.overlay&&a.overlay.destroy();
a.uiDialog.hide();
a.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");
a.uiDialog.remove();
a.originalTitle&&a.element.attr("title",a.originalTitle);
return a;
},widget:function(){
return this.uiDialog;
},close:function(a){
var b=this,d,e;
if(false!==b._trigger("beforeClose",a)){
b.overlay&&b.overlay.destroy();
b.uiDialog.unbind("keypress.ui-dialog");
b._isOpen=false;
if(b.options.hide){
b.uiDialog.hide(b.options.hide,function(){
b._trigger("close",a);
});
}else{
b.uiDialog.hide();
b._trigger("close",a);
}
c.ui.dialog.overlay.resize();
if(b.options.modal){
d=0;
c(".ui-dialog").each(function(){
if(this!==b.uiDialog[0]){
e=c(this).css("z-index");
isNaN(e)||(d=Math.max(d,e));
}
});
c.ui.dialog.maxZ=d;
}
return b;
}
},isOpen:function(){
return this._isOpen;
},moveToTop:function(a,b){
var d=this,e=d.options;
if(e.modal&&!a||!e.stack&&!e.modal){
return d._trigger("focus",b);
}
if(e.zIndex>c.ui.dialog.maxZ){
c.ui.dialog.maxZ=e.zIndex;
}
if(d.overlay){
c.ui.dialog.maxZ+=1;
d.overlay.$el.css("z-index",c.ui.dialog.overlay.maxZ=c.ui.dialog.maxZ);
}
a={scrollTop:d.element.attr("scrollTop"),scrollLeft:d.element.attr("scrollLeft")};
c.ui.dialog.maxZ+=1;
d.uiDialog.css("z-index",c.ui.dialog.maxZ);
d.element.attr(a);
d._trigger("focus",b);
return d;
},open:function(){
if(!this._isOpen){
var a=this,b=a.options,d=a.uiDialog;
a.overlay=b.modal?new c.ui.dialog.overlay(a):null;
a._size();
a._position(b.position);
d.show(b.show);
a.moveToTop(true);
b.modal&&d.bind("keypress.ui-dialog",function(e){
if(e.keyCode===c.ui.keyCode.TAB){
var g=c(":tabbable",this),f=g.filter(":first");
g=g.filter(":last");
if(e.target===g[0]&&!e.shiftKey){
f.focus(1);
return false;
}else{
if(e.target===f[0]&&e.shiftKey){
g.focus(1);
return false;
}
}
}
});
c(a.element.find(":tabbable").get().concat(d.find(".ui-dialog-buttonpane :tabbable").get().concat(d.get()))).eq(0).focus();
a._isOpen=true;
a._trigger("open");
return a;
}
},_createButtons:function(a){
var b=this,d=false,e=c("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),g=c("<div></div>").addClass("ui-dialog-buttonset").appendTo(e);
b.uiDialog.find(".ui-dialog-buttonpane").remove();
typeof a==="object"&&a!==null&&c.each(a,function(){
return !(d=true);
});
if(d){
c.each(a,function(f,h){
h=c.isFunction(h)?{click:h,text:f}:h;
f=c("<button type=\"button\"></button>").attr(h,true).unbind("click").click(function(){
h.click.apply(b.element[0],arguments);
}).appendTo(g);
c.fn.button&&f.button();
});
e.appendTo(b.uiDialog);
}
},_makeDraggable:function(){
function a(f){
return {position:f.position,offset:f.offset};
};
var b=this,d=b.options,e=c(document),g;
b.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(f,h){
g=d.height==="auto"?"auto":c(this).height();
c(this).height(c(this).height()).addClass("ui-dialog-dragging");
b._trigger("dragStart",f,a(h));
},drag:function(f,h){
b._trigger("drag",f,a(h));
},stop:function(f,h){
d.position=[h.position.left-e.scrollLeft(),h.position.top-e.scrollTop()];
c(this).removeClass("ui-dialog-dragging").height(g);
b._trigger("dragStop",f,a(h));
c.ui.dialog.overlay.resize();
}});
},_makeResizable:function(a){
function b(f){
return {originalPosition:f.originalPosition,originalSize:f.originalSize,position:f.position,size:f.size};
};
a=a===j?this.options.resizable:a;
var d=this,e=d.options,g=d.uiDialog.css("position");
a=typeof a==="string"?a:"n,e,s,w,se,sw,ne,nw";
d.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:d.element,maxWidth:e.maxWidth,maxHeight:e.maxHeight,minWidth:e.minWidth,minHeight:d._minHeight(),handles:a,start:function(f,h){
c(this).addClass("ui-dialog-resizing");
d._trigger("resizeStart",f,b(h));
},resize:function(f,h){
d._trigger("resize",f,b(h));
},stop:function(f,h){
c(this).removeClass("ui-dialog-resizing");
e.height=c(this).height();
e.width=c(this).width();
d._trigger("resizeStop",f,b(h));
c.ui.dialog.overlay.resize();
}}).css("position",g).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se");
},_minHeight:function(){
var a=this.options;
return a.height==="auto"?a.minHeight:Math.min(a.minHeight,a.height);
},_position:function(a){
var b=[],d=[0,0],e;
if(a){
if(typeof a==="string"||typeof a==="object"&&"0" in a){
b=a.split?a.split(" "):[a[0],a[1]];
if(b.length===1){
b[1]=b[0];
}
c.each(["left","top"],function(g,f){
if(+b[g]===b[g]){
d[g]=b[g];
b[g]=f;
}
});
a={my:b.join(" "),at:b.join(" "),offset:d.join(" ")};
}
a=c.extend({},c.ui.dialog.prototype.options.position,a);
}else{
a=c.ui.dialog.prototype.options.position;
}
(e=this.uiDialog.is(":visible"))||this.uiDialog.show();
this.uiDialog.css({top:0,left:0}).position(c.extend({of:window},a));
e||this.uiDialog.hide();
},_setOptions:function(a){
var b=this,d={},e=false;
c.each(a,function(g,f){
b._setOption(g,f);
if(g in k){
e=true;
}
if(g in l){
d[g]=f;
}
});
e&&this._size();
this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option",d);
},_setOption:function(a,b){
var d=this,e=d.uiDialog;
switch(a){
case "beforeclose":
a="beforeClose";
break;
case "buttons":
d._createButtons(b);
break;
case "closeText":
d.uiDialogTitlebarCloseText.text(""+b);
break;
case "dialogClass":
e.removeClass(d.options.dialogClass).addClass("ui-dialog ui-widget ui-widget-content ui-corner-all "+b);
break;
case "disabled":
b?e.addClass("ui-dialog-disabled"):e.removeClass("ui-dialog-disabled");
break;
case "draggable":
var g=e.is(":data(draggable)");
g&&!b&&e.draggable("destroy");
!g&&b&&d._makeDraggable();
break;
case "position":
d._position(b);
break;
case "resizable":
(g=e.is(":data(resizable)"))&&!b&&e.resizable("destroy");
g&&typeof b==="string"&&e.resizable("option","handles",b);
!g&&b!==false&&d._makeResizable(b);
break;
case "title":
c(".ui-dialog-title",d.uiDialogTitlebar).html(""+(b||"&#160;"));
break;
}
c.Widget.prototype._setOption.apply(d,arguments);
},_size:function(){
var a=this.options,b,d,e=this.uiDialog.is(":visible");
this.element.show().css({width:"auto",minHeight:0,height:0});
if(a.minWidth>a.width){
a.width=a.minWidth;
}
b=this.uiDialog.css({height:"auto",width:a.width}).height();
d=Math.max(0,a.minHeight-b);
if(a.height==="auto"){
if(c.support.minHeight){
this.element.css({minHeight:d,height:"auto"});
}else{
this.uiDialog.show();
a=this.element.css("height","auto").height();
e||this.uiDialog.hide();
this.element.height(Math.max(a,d));
}
}else{
this.element.height(Math.max(a.height-b,0));
}
this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight());
}});
c.extend(c.ui.dialog,{version:"1.8.7",uuid:0,maxZ:0,getTitleId:function(a){
a=a.attr("id");
if(!a){
this.uuid+=1;
a=this.uuid;
}
return "ui-dialog-title-"+a;
},overlay:function(a){
this.$el=c.ui.dialog.overlay.create(a);
}});
c.extend(c.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:c.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(a){
return a+".dialog-overlay";
}).join(" "),create:function(a){
if(this.instances.length===0){
setTimeout(function(){
c.ui.dialog.overlay.instances.length&&c(document).bind(c.ui.dialog.overlay.events,function(d){
if(c(d.target).zIndex()<c.ui.dialog.overlay.maxZ){
return false;
}
});
},1);
c(document).bind("keydown.dialog-overlay",function(d){
if(a.options.closeOnEscape&&d.keyCode&&d.keyCode===c.ui.keyCode.ESCAPE){
a.close(d);
d.preventDefault();
}
});
c(window).bind("resize.dialog-overlay",c.ui.dialog.overlay.resize);
}
var b=(this.oldInstances.pop()||c("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({width:this.width(),height:this.height()});
c.fn.bgiframe&&b.bgiframe();
this.instances.push(b);
return b;
},destroy:function(a){
var b=c.inArray(a,this.instances);
b!=-1&&this.oldInstances.push(this.instances.splice(b,1)[0]);
this.instances.length===0&&c([document,window]).unbind(".dialog-overlay");
a.remove();
var d=0;
c.each(this.instances,function(){
d=Math.max(d,this.css("z-index"));
});
this.maxZ=d;
},height:function(){
var a,b;
if(c.browser.msie&&c.browser.version<7){
a=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);
b=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);
return a<b?c(window).height()+"px":a+"px";
}else{
return c(document).height()+"px";
}
},width:function(){
var a,b;
if(c.browser.msie&&c.browser.version<7){
a=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);
b=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);
return a<b?c(window).width()+"px":a+"px";
}else{
return c(document).width()+"px";
}
},resize:function(){
var a=c([]);
c.each(c.ui.dialog.overlay.instances,function(){
a=a.add(this);
});
a.css({width:0,height:0}).css({width:c.ui.dialog.overlay.width(),height:c.ui.dialog.overlay.height()});
}});
c.extend(c.ui.dialog.overlay.prototype,{destroy:function(){
c.ui.dialog.overlay.destroy(this.$el);
}});
})(jQuery);
(function(d,p){
function u(){
return ++v;
};
function w(){
return ++x;
};
var v=0,x=0;
d.widget("ui.tabs",{options:{add:null,ajaxOptions:null,cache:false,cookie:null,collapsible:false,disable:null,disabled:[],enable:null,event:"click",fx:null,idPrefix:"ui-tabs-",load:null,panelTemplate:"<div></div>",remove:null,select:null,show:null,spinner:"<em>Loading&#8230;</em>",tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},_create:function(){
this._tabify(true);
},_setOption:function(b,e){
if(b=="selected"){
this.options.collapsible&&e==this.options.selected||this.select(e);
}else{
this.options[b]=e;
this._tabify();
}
},_tabId:function(b){
return b.title&&b.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF-]/g,"")||this.options.idPrefix+u();
},_sanitizeSelector:function(b){
return b.replace(/:/g,"\\:");
},_cookie:function(){
var b=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+w());
return d.cookie.apply(null,[b].concat(d.makeArray(arguments)));
},_ui:function(b,e){
return {tab:b,panel:e,index:this.anchors.index(b)};
},_cleanup:function(){
this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){
var b=d(this);
b.html(b.data("label.tabs")).removeData("label.tabs");
});
},_tabify:function(b){
function e(g,f){
g.css("display","");
!d.support.opacity&&f.opacity&&g[0].style.removeAttribute("filter");
};
var a=this,c=this.options,h=/^#.+/;
this.list=this.element.find("ol,ul").eq(0);
this.lis=d(" > li:has(a[href])",this.list);
this.anchors=this.lis.map(function(){
return d("a",this)[0];
});
this.panels=d([]);
this.anchors.each(function(g,f){
var i=d(f).attr("href"),l=i.split("#")[0],q;
if(l&&(l===location.toString().split("#")[0]||(q=d("base")[0])&&l===q.href)){
i=f.hash;
f.href=i;
}
if(h.test(i)){
a.panels=a.panels.add(a.element.find(a._sanitizeSelector(i)));
}else{
if(i&&i!=="#"){
d.data(f,"href.tabs",i);
d.data(f,"load.tabs",i.replace(/#.*$/,""));
i=a._tabId(f);
f.href="#"+i;
f=a.element.find("#"+i);
if(!f.length){
f=d(c.panelTemplate).attr("id",i).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(a.panels[g-1]||a.list);
f.data("destroy.tabs",true);
}
a.panels=a.panels.add(f);
}else{
c.disabled.push(g);
}
}
});
if(b){
this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");
this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");
this.lis.addClass("ui-state-default ui-corner-top");
this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");
if(c.selected===p){
location.hash&&this.anchors.each(function(g,f){
if(f.hash==location.hash){
c.selected=g;
return false;
}
});
if(typeof c.selected!=="number"&&c.cookie){
c.selected=parseInt(a._cookie(),10);
}
if(typeof c.selected!=="number"&&this.lis.filter(".ui-tabs-selected").length){
c.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"));
}
c.selected=c.selected||(this.lis.length?0:-1);
}else{
if(c.selected===null){
c.selected=-1;
}
}
c.selected=c.selected>=0&&this.anchors[c.selected]||c.selected<0?c.selected:0;
c.disabled=d.unique(c.disabled.concat(d.map(this.lis.filter(".ui-state-disabled"),function(g){
return a.lis.index(g);
}))).sort();
d.inArray(c.selected,c.disabled)!=-1&&c.disabled.splice(d.inArray(c.selected,c.disabled),1);
this.panels.addClass("ui-tabs-hide");
this.lis.removeClass("ui-tabs-selected ui-state-active");
if(c.selected>=0&&this.anchors.length){
a.element.find(a._sanitizeSelector(a.anchors[c.selected].hash)).removeClass("ui-tabs-hide");
this.lis.eq(c.selected).addClass("ui-tabs-selected ui-state-active");
a.element.queue("tabs",function(){
a._trigger("show",null,a._ui(a.anchors[c.selected],a.element.find(a._sanitizeSelector(a.anchors[c.selected].hash))));
});
this.load(c.selected);
}
d(window).bind("unload",function(){
a.lis.add(a.anchors).unbind(".tabs");
a.lis=a.anchors=a.panels=null;
});
}else{
c.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"));
}
this.element[c.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible");
c.cookie&&this._cookie(c.selected,c.cookie);
b=0;
for(var j;j=this.lis[b];b++){
d(j)[d.inArray(b,c.disabled)!=-1&&!d(j).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled");
}
c.cache===false&&this.anchors.removeData("cache.tabs");
this.lis.add(this.anchors).unbind(".tabs");
if(c.event!=="mouseover"){
var k=function(g,f){
f.is(":not(.ui-state-disabled)")&&f.addClass("ui-state-"+g);
},n=function(g,f){
f.removeClass("ui-state-"+g);
};
this.lis.bind("mouseover.tabs",function(){
k("hover",d(this));
});
this.lis.bind("mouseout.tabs",function(){
n("hover",d(this));
});
this.anchors.bind("focus.tabs",function(){
k("focus",d(this).closest("li"));
});
this.anchors.bind("blur.tabs",function(){
n("focus",d(this).closest("li"));
});
}
var m,o;
if(c.fx){
if(d.isArray(c.fx)){
m=c.fx[0];
o=c.fx[1];
}else{
m=o=c.fx;
}
}
var r=o?function(g,f){
d(g).closest("li").addClass("ui-tabs-selected ui-state-active");
f.hide().removeClass("ui-tabs-hide").animate(o,o.duration||"normal",function(){
e(f,o);
a._trigger("show",null,a._ui(g,f[0]));
});
}:function(g,f){
d(g).closest("li").addClass("ui-tabs-selected ui-state-active");
f.removeClass("ui-tabs-hide");
a._trigger("show",null,a._ui(g,f[0]));
},s=m?function(g,f){
f.animate(m,m.duration||"normal",function(){
a.lis.removeClass("ui-tabs-selected ui-state-active");
f.addClass("ui-tabs-hide");
e(f,m);
a.element.dequeue("tabs");
});
}:function(g,f){
a.lis.removeClass("ui-tabs-selected ui-state-active");
f.addClass("ui-tabs-hide");
a.element.dequeue("tabs");
};
this.anchors.bind(c.event+".tabs",function(){
var g=this,f=d(g).closest("li"),i=a.panels.filter(":not(.ui-tabs-hide)"),l=a.element.find(a._sanitizeSelector(g.hash));
if(f.hasClass("ui-tabs-selected")&&!c.collapsible||f.hasClass("ui-state-disabled")||f.hasClass("ui-state-processing")||a.panels.filter(":animated").length||a._trigger("select",null,a._ui(this,l[0]))===false){
this.blur();
return false;
}
c.selected=a.anchors.index(this);
a.abort();
if(c.collapsible){
if(f.hasClass("ui-tabs-selected")){
c.selected=-1;
c.cookie&&a._cookie(c.selected,c.cookie);
a.element.queue("tabs",function(){
s(g,i);
}).dequeue("tabs");
this.blur();
return false;
}else{
if(!i.length){
c.cookie&&a._cookie(c.selected,c.cookie);
a.element.queue("tabs",function(){
r(g,l);
});
a.load(a.anchors.index(this));
this.blur();
return false;
}
}
}
c.cookie&&a._cookie(c.selected,c.cookie);
if(l.length){
i.length&&a.element.queue("tabs",function(){
s(g,i);
});
a.element.queue("tabs",function(){
r(g,l);
});
a.load(a.anchors.index(this));
}else{
throw "jQuery UI Tabs: Mismatching fragment identifier.";
}
d.browser.msie&&this.blur();
});
this.anchors.bind("click.tabs",function(){
return false;
});
},_getIndex:function(b){
if(typeof b=="string"){
b=this.anchors.index(this.anchors.filter("[href$="+b+"]"));
}
return b;
},destroy:function(){
var b=this.options;
this.abort();
this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");
this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");
this.anchors.each(function(){
var e=d.data(this,"href.tabs");
if(e){
this.href=e;
}
var a=d(this).unbind(".tabs");
d.each(["href","load","cache"],function(c,h){
a.removeData(h+".tabs");
});
});
this.lis.unbind(".tabs").add(this.panels).each(function(){
d.data(this,"destroy.tabs")?d(this).remove():d(this).removeClass("ui-state-default ui-corner-top ui-tabs-selected ui-state-active ui-state-hover ui-state-focus ui-state-disabled ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");
});
b.cookie&&this._cookie(null,b.cookie);
return this;
},add:function(b,e,a){
if(a===p){
a=this.anchors.length;
}
var c=this,h=this.options;
e=d(h.tabTemplate.replace(/#\{href\}/g,b).replace(/#\{label\}/g,e));
b=!b.indexOf("#")?b.replace("#",""):this._tabId(d("a",e)[0]);
e.addClass("ui-state-default ui-corner-top").data("destroy.tabs",true);
var j=c.element.find("#"+b);
j.length||(j=d(h.panelTemplate).attr("id",b).data("destroy.tabs",true));
j.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");
if(a>=this.lis.length){
e.appendTo(this.list);
j.appendTo(this.list[0].parentNode);
}else{
e.insertBefore(this.lis[a]);
j.insertBefore(this.panels[a]);
}
h.disabled=d.map(h.disabled,function(k){
return k>=a?++k:k;
});
this._tabify();
if(this.anchors.length==1){
h.selected=0;
e.addClass("ui-tabs-selected ui-state-active");
j.removeClass("ui-tabs-hide");
this.element.queue("tabs",function(){
c._trigger("show",null,c._ui(c.anchors[0],c.panels[0]));
});
this.load(0);
}
this._trigger("add",null,this._ui(this.anchors[a],this.panels[a]));
return this;
},remove:function(b){
b=this._getIndex(b);
var e=this.options,a=this.lis.eq(b).remove(),c=this.panels.eq(b).remove();
if(a.hasClass("ui-tabs-selected")&&this.anchors.length>1){
this.select(b+(b+1<this.anchors.length?1:-1));
}
e.disabled=d.map(d.grep(e.disabled,function(h){
return h!=b;
}),function(h){
return h>=b?--h:h;
});
this._tabify();
this._trigger("remove",null,this._ui(a.find("a")[0],c[0]));
return this;
},enable:function(b){
b=this._getIndex(b);
var e=this.options;
if(d.inArray(b,e.disabled)!=-1){
this.lis.eq(b).removeClass("ui-state-disabled");
e.disabled=d.grep(e.disabled,function(a){
return a!=b;
});
this._trigger("enable",null,this._ui(this.anchors[b],this.panels[b]));
return this;
}
},disable:function(b){
b=this._getIndex(b);
var e=this.options;
if(b!=e.selected){
this.lis.eq(b).addClass("ui-state-disabled");
e.disabled.push(b);
e.disabled.sort();
this._trigger("disable",null,this._ui(this.anchors[b],this.panels[b]));
}
return this;
},select:function(b){
b=this._getIndex(b);
if(b==-1){
if(this.options.collapsible&&this.options.selected!=-1){
b=this.options.selected;
}else{
return this;
}
}
this.anchors.eq(b).trigger(this.options.event+".tabs");
return this;
},load:function(b){
b=this._getIndex(b);
var e=this,a=this.options,c=this.anchors.eq(b)[0],h=d.data(c,"load.tabs");
this.abort();
if(!h||this.element.queue("tabs").length!==0&&d.data(c,"cache.tabs")){
this.element.dequeue("tabs");
}else{
this.lis.eq(b).addClass("ui-state-processing");
if(a.spinner){
var j=d("span",c);
j.data("label.tabs",j.html()).html(a.spinner);
}
this.xhr=d.ajax(d.extend({},a.ajaxOptions,{url:h,success:function(k,n){
e.element.find(e._sanitizeSelector(c.hash)).html(k);
e._cleanup();
a.cache&&d.data(c,"cache.tabs",true);
e._trigger("load",null,e._ui(e.anchors[b],e.panels[b]));
try{
a.ajaxOptions.success(k,n);
}
catch(m){
}
},error:function(k,n){
e._cleanup();
e._trigger("load",null,e._ui(e.anchors[b],e.panels[b]));
try{
a.ajaxOptions.error(k,n,b,c);
}
catch(m){
}
}}));
e.element.dequeue("tabs");
return this;
}
},abort:function(){
this.element.queue([]);
this.panels.stop(false,true);
this.element.queue("tabs",this.element.queue("tabs").splice(-2,2));
if(this.xhr){
this.xhr.abort();
delete this.xhr;
}
this._cleanup();
return this;
},url:function(b,e){
this.anchors.eq(b).removeData("cache.tabs").data("load.tabs",e);
return this;
},length:function(){
return this.anchors.length;
}});
d.extend(d.ui.tabs,{version:"1.8.7"});
d.extend(d.ui.tabs.prototype,{rotation:null,rotate:function(b,e){
var a=this,c=this.options,h=a._rotate||(a._rotate=function(j){
clearTimeout(a.rotation);
a.rotation=setTimeout(function(){
var k=c.selected;
a.select(++k<a.anchors.length?k:0);
},b);
j&&j.stopPropagation();
});
e=a._unrotate||(a._unrotate=!e?function(j){
j.clientX&&a.rotate(null);
}:function(){
t=c.selected;
h();
});
if(b){
this.element.bind("tabsshow",h);
this.anchors.bind(c.event+".tabs",e);
h();
}else{
clearTimeout(a.rotation);
this.element.unbind("tabsshow",h);
this.anchors.unbind(c.event+".tabs",e);
delete this._rotate;
delete this._unrotate;
}
return this;
}});
})(jQuery);
(function(b,d){
b.widget("ui.progressbar",{options:{value:0,max:100},min:0,_create:function(){
this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()});
this.valueDiv=b("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);
this.oldValue=this._value();
this._refreshValue();
},destroy:function(){
this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
this.valueDiv.remove();
b.Widget.prototype.destroy.apply(this,arguments);
},value:function(a){
if(a===d){
return this._value();
}
this._setOption("value",a);
return this;
},_setOption:function(a,c){
if(a==="value"){
this.options.value=c;
this._refreshValue();
this._value()===this.options.max&&this._trigger("complete");
}
b.Widget.prototype._setOption.apply(this,arguments);
},_value:function(){
var a=this.options.value;
if(typeof a!=="number"){
a=0;
}
return Math.min(this.options.max,Math.max(this.min,a));
},_percentage:function(){
return 100*this._value()/this.options.max;
},_refreshValue:function(){
var a=this.value(),c=this._percentage();
if(this.oldValue!==a){
this.oldValue=a;
this._trigger("change");
}
this.valueDiv.toggleClass("ui-corner-right",a===this.options.max).width(c.toFixed(0)+"%");
this.element.attr("aria-valuenow",a);
}});
b.extend(b.ui.progressbar,{version:"1.8.7"});
})(jQuery);
jQuery.effects||function(f,j){
function n(c){
var a;
if(c&&c.constructor==Array&&c.length==3){
return c;
}
if(a=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(c)){
return [parseInt(a[1],10),parseInt(a[2],10),parseInt(a[3],10)];
}
if(a=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(c)){
return [parseFloat(a[1])*2.55,parseFloat(a[2])*2.55,parseFloat(a[3])*2.55];
}
if(a=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(c)){
return [parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)];
}
if(a=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(c)){
return [parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)];
}
if(/rgba\(0, 0, 0, 0\)/.exec(c)){
return o.transparent;
}
return o[f.trim(c).toLowerCase()];
};
function s(c,a){
var b;
do{
b=f.curCSS(c,a);
if(b!=""&&b!="transparent"||f.nodeName(c,"body")){
break;
}
a="backgroundColor";
}while(c=c.parentNode);
return n(b);
};
function p(){
var c=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,a={},b,d;
if(c&&c.length&&c[0]&&c[c[0]]){
for(var e=c.length;e--;){
b=c[e];
if(typeof c[b]=="string"){
d=b.replace(/\-(\w)/g,function(g,h){
return h.toUpperCase();
});
a[d]=c[b];
}
}
}else{
for(b in c){
if(typeof c[b]==="string"){
a[b]=c[b];
}
}
}
return a;
};
function q(c){
var a,b;
for(a in c){
b=c[a];
if(b==null||f.isFunction(b)||a in t||/scrollbar/.test(a)||!/color/i.test(a)&&isNaN(parseFloat(b))){
delete c[a];
}
}
return c;
};
function u(c,a){
var b={_:0},d;
for(d in a){
if(c[d]!=a[d]){
b[d]=a[d];
}
}
return b;
};
function k(c,a,b,d){
if(typeof c=="object"){
d=a;
b=null;
a=c;
c=a.effect;
}
if(f.isFunction(a)){
d=a;
b=null;
a={};
}
if(typeof a=="number"||f.fx.speeds[a]){
d=b;
b=a;
a={};
}
if(f.isFunction(b)){
d=b;
b=null;
}
a=a||{};
b=b||a.duration;
b=f.fx.off?0:typeof b=="number"?b:b in f.fx.speeds?f.fx.speeds[b]:f.fx.speeds._default;
d=d||a.complete;
return [c,a,b,d];
};
function m(c){
if(!c||typeof c==="number"||f.fx.speeds[c]){
return true;
}
if(typeof c==="string"&&!f.effects[c]){
return true;
}
return false;
};
f.effects={};
f.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","borderColor","color","outlineColor"],function(c,a){
f.fx.step[a]=function(b){
if(!b.colorInit){
b.start=s(b.elem,a);
b.end=n(b.end);
b.colorInit=true;
}
b.elem.style[a]="rgb("+Math.max(Math.min(parseInt(b.pos*(b.end[0]-b.start[0])+b.start[0],10),255),0)+","+Math.max(Math.min(parseInt(b.pos*(b.end[1]-b.start[1])+b.start[1],10),255),0)+","+Math.max(Math.min(parseInt(b.pos*(b.end[2]-b.start[2])+b.start[2],10),255),0)+")";
};
});
var o={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},r=["add","remove","toggle"],t={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};
f.effects.animateClass=function(c,a,b,d){
if(f.isFunction(b)){
d=b;
b=null;
}
return this.each(function(){
f.queue(this,"fx",function(){
var e=f(this),g=e.attr("style")||" ",h=q(p.call(this)),l,v=e.attr("className");
f.each(r,function(w,i){
c[i]&&e[i+"Class"](c[i]);
});
l=q(p.call(this));
e.attr("className",v);
e.animate(u(h,l),a,b,function(){
f.each(r,function(w,i){
c[i]&&e[i+"Class"](c[i]);
});
if(typeof e.attr("style")=="object"){
e.attr("style").cssText="";
e.attr("style").cssText=g;
}else{
e.attr("style",g);
}
d&&d.apply(this,arguments);
});
h=f.queue(this);
l=h.splice(h.length-1,1)[0];
h.splice(1,0,l);
f.dequeue(this);
});
});
};
f.fn.extend({_addClass:f.fn.addClass,addClass:function(c,a,b,d){
return a?f.effects.animateClass.apply(this,[{add:c},a,b,d]):this._addClass(c);
},_removeClass:f.fn.removeClass,removeClass:function(c,a,b,d){
return a?f.effects.animateClass.apply(this,[{remove:c},a,b,d]):this._removeClass(c);
},_toggleClass:f.fn.toggleClass,toggleClass:function(c,a,b,d,e){
return typeof a=="boolean"||a===j?b?f.effects.animateClass.apply(this,[a?{add:c}:{remove:c},b,d,e]):this._toggleClass(c,a):f.effects.animateClass.apply(this,[{toggle:c},a,b,d]);
},switchClass:function(c,a,b,d,e){
return f.effects.animateClass.apply(this,[{add:a,remove:c},b,d,e]);
}});
f.extend(f.effects,{version:"1.8.7",save:function(c,a){
for(var b=0;b<a.length;b++){
a[b]!==null&&c.data("ec.storage."+a[b],c[0].style[a[b]]);
}
},restore:function(c,a){
for(var b=0;b<a.length;b++){
a[b]!==null&&c.css(a[b],c.data("ec.storage."+a[b]));
}
},setMode:function(c,a){
if(a=="toggle"){
a=c.is(":hidden")?"show":"hide";
}
return a;
},getBaseline:function(c,a){
var b;
switch(c[0]){
case "top":
b=0;
break;
case "middle":
b=0.5;
break;
case "bottom":
b=1;
break;
default:
b=c[0]/a.height;
}
switch(c[1]){
case "left":
c=0;
break;
case "center":
c=0.5;
break;
case "right":
c=1;
break;
default:
c=c[1]/a.width;
}
return {x:c,y:b};
},createWrapper:function(c){
if(c.parent().is(".ui-effects-wrapper")){
return c.parent();
}
var a={width:c.outerWidth(true),height:c.outerHeight(true),"float":c.css("float")},b=f("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0});
c.wrap(b);
b=c.parent();
if(c.css("position")=="static"){
b.css({position:"relative"});
c.css({position:"relative"});
}else{
f.extend(a,{position:c.css("position"),zIndex:c.css("z-index")});
f.each(["top","left","bottom","right"],function(d,e){
a[e]=c.css(e);
if(isNaN(parseInt(a[e],10))){
a[e]="auto";
}
});
c.css({position:"relative",top:0,left:0});
}
return b.css(a).show();
},removeWrapper:function(c){
if(c.parent().is(".ui-effects-wrapper")){
return c.parent().replaceWith(c);
}
return c;
},setTransition:function(c,a,b,d){
d=d||{};
f.each(a,function(e,g){
unit=c.cssUnit(g);
if(unit[0]>0){
d[g]=unit[0]*b+unit[1];
}
});
return d;
}});
f.fn.extend({effect:function(c){
var a=k.apply(this,arguments),b={options:a[1],duration:a[2],callback:a[3]};
a=b.options.mode;
var d=f.effects[c];
if(f.fx.off||!d){
return a?this[a](b.duration,b.callback):this.each(function(){
b.callback&&b.callback.call(this);
});
}
return d.call(this,b);
},_show:f.fn.show,show:function(c){
if(m(c)){
return this._show.apply(this,arguments);
}else{
var a=k.apply(this,arguments);
a[1].mode="show";
return this.effect.apply(this,a);
}
},_hide:f.fn.hide,hide:function(c){
if(m(c)){
return this._hide.apply(this,arguments);
}else{
var a=k.apply(this,arguments);
a[1].mode="hide";
return this.effect.apply(this,a);
}
},__toggle:f.fn.toggle,toggle:function(c){
if(m(c)||typeof c==="boolean"||f.isFunction(c)){
return this.__toggle.apply(this,arguments);
}else{
var a=k.apply(this,arguments);
a[1].mode="toggle";
return this.effect.apply(this,a);
}
},cssUnit:function(c){
var a=this.css(c),b=[];
f.each(["em","px","%","pt"],function(d,e){
if(a.indexOf(e)>0){
b=[parseFloat(a),e];
}
});
return b;
}});
f.easing.jswing=f.easing.swing;
f.extend(f.easing,{def:"easeOutQuad",swing:function(c,a,b,d,e){
return f.easing[f.easing.def](c,a,b,d,e);
},easeInQuad:function(c,a,b,d,e){
return d*(a/=e)*a+b;
},easeOutQuad:function(c,a,b,d,e){
return -d*(a/=e)*(a-2)+b;
},easeInOutQuad:function(c,a,b,d,e){
if((a/=e/2)<1){
return d/2*a*a+b;
}
return -d/2*(--a*(a-2)-1)+b;
},easeInCubic:function(c,a,b,d,e){
return d*(a/=e)*a*a+b;
},easeOutCubic:function(c,a,b,d,e){
return d*((a=a/e-1)*a*a+1)+b;
},easeInOutCubic:function(c,a,b,d,e){
if((a/=e/2)<1){
return d/2*a*a*a+b;
}
return d/2*((a-=2)*a*a+2)+b;
},easeInQuart:function(c,a,b,d,e){
return d*(a/=e)*a*a*a+b;
},easeOutQuart:function(c,a,b,d,e){
return -d*((a=a/e-1)*a*a*a-1)+b;
},easeInOutQuart:function(c,a,b,d,e){
if((a/=e/2)<1){
return d/2*a*a*a*a+b;
}
return -d/2*((a-=2)*a*a*a-2)+b;
},easeInQuint:function(c,a,b,d,e){
return d*(a/=e)*a*a*a*a+b;
},easeOutQuint:function(c,a,b,d,e){
return d*((a=a/e-1)*a*a*a*a+1)+b;
},easeInOutQuint:function(c,a,b,d,e){
if((a/=e/2)<1){
return d/2*a*a*a*a*a+b;
}
return d/2*((a-=2)*a*a*a*a+2)+b;
},easeInSine:function(c,a,b,d,e){
return -d*Math.cos(a/e*(Math.PI/2))+d+b;
},easeOutSine:function(c,a,b,d,e){
return d*Math.sin(a/e*(Math.PI/2))+b;
},easeInOutSine:function(c,a,b,d,e){
return -d/2*(Math.cos(Math.PI*a/e)-1)+b;
},easeInExpo:function(c,a,b,d,e){
return a==0?b:d*Math.pow(2,10*(a/e-1))+b;
},easeOutExpo:function(c,a,b,d,e){
return a==e?b+d:d*(-Math.pow(2,-10*a/e)+1)+b;
},easeInOutExpo:function(c,a,b,d,e){
if(a==0){
return b;
}
if(a==e){
return b+d;
}
if((a/=e/2)<1){
return d/2*Math.pow(2,10*(a-1))+b;
}
return d/2*(-Math.pow(2,-10*--a)+2)+b;
},easeInCirc:function(c,a,b,d,e){
return -d*(Math.sqrt(1-(a/=e)*a)-1)+b;
},easeOutCirc:function(c,a,b,d,e){
return d*Math.sqrt(1-(a=a/e-1)*a)+b;
},easeInOutCirc:function(c,a,b,d,e){
if((a/=e/2)<1){
return -d/2*(Math.sqrt(1-a*a)-1)+b;
}
return d/2*(Math.sqrt(1-(a-=2)*a)+1)+b;
},easeInElastic:function(c,a,b,d,e){
c=1.70158;
var g=0,h=d;
if(a==0){
return b;
}
if((a/=e)==1){
return b+d;
}
g||(g=e*0.3);
if(h<Math.abs(d)){
h=d;
c=g/4;
}else{
c=g/(2*Math.PI)*Math.asin(d/h);
}
return -(h*Math.pow(2,10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g))+b;
},easeOutElastic:function(c,a,b,d,e){
c=1.70158;
var g=0,h=d;
if(a==0){
return b;
}
if((a/=e)==1){
return b+d;
}
g||(g=e*0.3);
if(h<Math.abs(d)){
h=d;
c=g/4;
}else{
c=g/(2*Math.PI)*Math.asin(d/h);
}
return h*Math.pow(2,-10*a)*Math.sin((a*e-c)*2*Math.PI/g)+d+b;
},easeInOutElastic:function(c,a,b,d,e){
c=1.70158;
var g=0,h=d;
if(a==0){
return b;
}
if((a/=e/2)==2){
return b+d;
}
g||(g=e*0.3*1.5);
if(h<Math.abs(d)){
h=d;
c=g/4;
}else{
c=g/(2*Math.PI)*Math.asin(d/h);
}
if(a<1){
return -0.5*h*Math.pow(2,10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g)+b;
}
return h*Math.pow(2,-10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g)*0.5+d+b;
},easeInBack:function(c,a,b,d,e,g){
if(g==j){
g=1.70158;
}
return d*(a/=e)*a*((g+1)*a-g)+b;
},easeOutBack:function(c,a,b,d,e,g){
if(g==j){
g=1.70158;
}
return d*((a=a/e-1)*a*((g+1)*a+g)+1)+b;
},easeInOutBack:function(c,a,b,d,e,g){
if(g==j){
g=1.70158;
}
if((a/=e/2)<1){
return d/2*a*a*(((g*=1.525)+1)*a-g)+b;
}
return d/2*((a-=2)*a*(((g*=1.525)+1)*a+g)+2)+b;
},easeInBounce:function(c,a,b,d,e){
return d-f.easing.easeOutBounce(c,e-a,0,d,e)+b;
},easeOutBounce:function(c,a,b,d,e){
return (a/=e)<1/2.75?d*7.5625*a*a+b:a<2/2.75?d*(7.5625*(a-=1.5/2.75)*a+0.75)+b:a<2.5/2.75?d*(7.5625*(a-=2.25/2.75)*a+0.9375)+b:d*(7.5625*(a-=2.625/2.75)*a+0.984375)+b;
},easeInOutBounce:function(c,a,b,d,e){
if(a<e/2){
return f.easing.easeInBounce(c,a*2,0,d,e)*0.5+b;
}
return f.easing.easeOutBounce(c,a*2-e,0,d,e)*0.5+d*0.5+b;
}});
}(jQuery);
(function(b){
b.effects.blind=function(c){
return this.queue(function(){
var a=b(this),g=["position","top","left"],f=b.effects.setMode(a,c.options.mode||"hide"),d=c.options.direction||"vertical";
b.effects.save(a,g);
a.show();
var e=b.effects.createWrapper(a).css({overflow:"hidden"}),h=d=="vertical"?"height":"width";
d=d=="vertical"?e.height():e.width();
f=="show"&&e.css(h,0);
var i={};
i[h]=f=="show"?d:0;
e.animate(i,c.duration,c.options.easing,function(){
f=="hide"&&a.hide();
b.effects.restore(a,g);
b.effects.removeWrapper(a);
c.callback&&c.callback.apply(a[0],arguments);
a.dequeue();
});
});
};
})(jQuery);
(function(e){
e.effects.bounce=function(b){
return this.queue(function(){
var a=e(this),l=["position","top","left"],h=e.effects.setMode(a,b.options.mode||"effect"),d=b.options.direction||"up",c=b.options.distance||20,m=b.options.times||5,i=b.duration||250;
/show|hide/.test(h)&&l.push("opacity");
e.effects.save(a,l);
a.show();
e.effects.createWrapper(a);
var f=d=="up"||d=="down"?"top":"left";
d=d=="up"||d=="left"?"pos":"neg";
c=b.options.distance||(f=="top"?a.outerHeight({margin:true})/3:a.outerWidth({margin:true})/3);
if(h=="show"){
a.css("opacity",0).css(f,d=="pos"?-c:c);
}
if(h=="hide"){
c/=m*2;
}
h!="hide"&&m--;
if(h=="show"){
var g={opacity:1};
g[f]=(d=="pos"?"+=":"-=")+c;
a.animate(g,i/2,b.options.easing);
c/=2;
m--;
}
for(g=0;g<m;g++){
var j={},k={};
j[f]=(d=="pos"?"-=":"+=")+c;
k[f]=(d=="pos"?"+=":"-=")+c;
a.animate(j,i/2,b.options.easing).animate(k,i/2,b.options.easing);
c=h=="hide"?c*2:c/2;
}
if(h=="hide"){
g={opacity:0};
g[f]=(d=="pos"?"-=":"+=")+c;
a.animate(g,i/2,b.options.easing,function(){
a.hide();
e.effects.restore(a,l);
e.effects.removeWrapper(a);
b.callback&&b.callback.apply(this,arguments);
});
}else{
j={};
k={};
j[f]=(d=="pos"?"-=":"+=")+c;
k[f]=(d=="pos"?"+=":"-=")+c;
a.animate(j,i/2,b.options.easing).animate(k,i/2,b.options.easing,function(){
e.effects.restore(a,l);
e.effects.removeWrapper(a);
b.callback&&b.callback.apply(this,arguments);
});
}
a.queue("fx",function(){
a.dequeue();
});
a.dequeue();
});
};
})(jQuery);
(function(b){
b.effects.fade=function(a){
return this.queue(function(){
var c=b(this),d=b.effects.setMode(c,a.options.mode||"hide");
c.animate({opacity:d},{queue:false,duration:a.duration,easing:a.options.easing,complete:function(){
a.callback&&a.callback.apply(this,arguments);
c.dequeue();
}});
});
};
})(jQuery);
(function(b){
b.effects.highlight=function(c){
return this.queue(function(){
var a=b(this),e=["backgroundImage","backgroundColor","opacity"],d=b.effects.setMode(a,c.options.mode||"show"),f={backgroundColor:a.css("backgroundColor")};
if(d=="hide"){
f.opacity=0;
}
b.effects.save(a,e);
a.show().css({backgroundImage:"none",backgroundColor:c.options.color||"#ffff99"}).animate(f,{queue:false,duration:c.duration,easing:c.options.easing,complete:function(){
d=="hide"&&a.hide();
b.effects.restore(a,e);
d=="show"&&!b.support.opacity&&this.style.removeAttribute("filter");
c.callback&&c.callback.apply(this,arguments);
a.dequeue();
}});
});
};
})(jQuery);
(function(c){
c.effects.slide=function(d){
return this.queue(function(){
var a=c(this),h=["position","top","left"],f=c.effects.setMode(a,d.options.mode||"show"),b=d.options.direction||"left";
c.effects.save(a,h);
a.show();
c.effects.createWrapper(a).css({overflow:"hidden"});
var g=b=="up"||b=="down"?"top":"left";
b=b=="up"||b=="left"?"pos":"neg";
var e=d.options.distance||(g=="top"?a.outerHeight({margin:true}):a.outerWidth({margin:true}));
if(f=="show"){
a.css(g,b=="pos"?isNaN(e)?"-"+e:-e:e);
}
var i={};
i[g]=(f=="show"?b=="pos"?"+=":"-=":b=="pos"?"-=":"+=")+e;
a.animate(i,{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){
f=="hide"&&a.hide();
c.effects.restore(a,h);
c.effects.removeWrapper(a);
d.callback&&d.callback.apply(this,arguments);
a.dequeue();
}});
});
};
})(jQuery);
;
include.set_path('resources');
$.fn.jlthemeswitcher=function(_1){
var _2=jQuery.extend({autoOpen:false,bgClass:"ui-widget-content",closeIcon:true,closeOnClick:true,cookieName:"jlthemeswitcher-theme",cookieOptions:{expires:365},defaultTheme:"",excludeThemes:"",hoverText:false,importThemes:true,importThemesPath:"http://jasonlau.biz/public/themes.run",onClose:function(){
},onOpen:function(){
},onSelect:function(){
},openAtOpener:false,themeItemWidth:82,themePreview:true,themes:"",title:"Theme Switcher",width:"300px",zindex:2147483647},_1);
var _3=$(this);
var _4=_2.themes;
var _5=_2.excludeThemes.split(",");
if(_2.importThemes||_4==""||_2.joinThemes){
$.ajax({url:_2.importThemesPath,dataType:"jsonp",jsonp:"jlthemeswitcher",success:function(_6){
if(_2.joinThemes){
_7(_4+"|"+_6.themes,_3);
}else{
_7(_6.themes,_3);
}
}});
}else{
_7(_4,_3);
}
if(!_2.closeIcon){
$(".jlthemeswitcher-close-icon").remove();
}
function _7(_8,_9){
var _a="";
if(_2.closeIcon){
_a="<div class=\"jlthemeswitcher-closer jlthemeswitcher-close-icon ui-state-default ui-corner-all\"><span class=\"ui-icon ui-icon-circle-close\" title=\"Close\"></span></div>";
}
var _b="<div class=\"jlthemeswitcher-container\"><div class=\"jlthemeswitcher-header\"><div class=\"jlthemeswitcher-title\">&nbsp;"+_2.title+"</div>"+_a+"</div><div class=\"jlthemeswitcher "+_2.bgClass+" ui-corner-bl ui-corner-br\"><ul class=\"jlthemeswitcher\">\n";
for(var i in _8){
if(typeof (_8[i])!=="object"){
continue;
}
var _d=_8[i];
if($.inArray(_d[0],_5)==-1){
_b+="<li class=\"theme_item\"><a class=\"theme_link\" href=\"javascript:void(0)\" rel=\""+_d[2]+"\" title=\""+_d[0]+"\"><img class=\"theme_thumb\" src=\""+_d[1]+"\" alt=\""+_d[0]+"\" title=\""+_d[0]+"\" /><br /><span class=\"theme_name\">"+_d[0]+"</span></a></li>\n";
}
}
_b+="</ul></div></div>\n";
_9.append(_b);
function _e(_f,_10){
var _f=$("<link href=\""+_f+"\" type=\"text/css\" rel=\"Stylesheet\" class=\"jlthemeswitcher-theme\" />");
$.cookie(_2.cookieName,_10,_2.cookieOptions);
$("head").append(_f);
if($("link.jlthemeswitcher-theme").size()>3){
$("link.jlthemeswitcher-theme:first").remove();
}
};
function _11(_12,_13){
var _12=$("<link href=\""+_12+"\" type=\"text/css\" rel=\"Stylesheet\" class=\"jlthemeswitcher-theme\" />");
$("head").append(_12);
if($("link.jlthemeswitcher-theme").size()>3){
$("link.jlthemeswitcher-theme:first").remove();
}
};
function _14(_15,_16){
$(".jlthemeswitcher-container").slideDown("slow",function(){
try{
_16();
}
catch(e){
}
});
};
function _17(_18){
$("div.jlthemeswitcher").animate({scrollLeft:0},"slow");
$(".jlthemeswitcher-container").slideUp("slow");
try{
_18();
}
catch(e){
}
};
$(".jlthemeswitcher-container").css({"width":_2.width,"z-index":_2.zindex});
$(".jlthemeswitcher-header").addClass("ui-widget-header ui-corner-tl ui-corner-tr");
$(".jlthemeswitcher-close-icon").css({"float":"right","cursor":"pointer","width":"16px","height":"16px","padding":"2px",});
$(".jlthemeswitcher-header").css({"padding":"2px 4px 0px 0px","height":"22px","margin":"0px auto","width":"100%"});
$(".jlthemeswitcher-title").css({"float":"left"});
$("div.jlthemeswitcher").css({"padding":"2px","width":"100%","overflow":"hidden","margin":"0px auto"});
$("ul.jlthemeswitcher li").css({"width":_2.themeItemWidth+"px","display":"inline-block","padding":"4px 0px 4px 0px","text-align":"center","margin":"0px"});
var _19=_2.themeItemWidth*(_8.length+2);
$("ul.jlthemeswitcher").css({"width":_19,"margin":"0px","padding":"0px","list-style-type":"none"});
$(".jlthemeswitcher a").css({"display":"block","text-decoration":"none"});
$(".jlthemeswitcher span").css({"display":"block","margin-top":"3px","text-align":"center","font-size":"12px"});
if(_2.hoverText){
$(".jlthemeswitcher span").css({"display":"none"});
}
$(".theme_item").hover(function(){
$(this).find("span:first").css("display","block");
$(this).find("img:first").css({"filter":"alpha(opacity=50)","opacity":"0.5"});
if(_2.themePreview){
_11($(this).find("a:first").attr("rel"),$(this).find("a:first").attr("title"));
}
},function(){
if(_2.hoverText){
$(this).find("span:first").css("display","none");
}
$(this).find("img:first").css({"filter":"","opacity":""});
if(_2.themePreview){
var _1a=$.cookie(_2.cookieName);
_e($(".jlthemeswitcher").find("a:contains("+_1a+")").attr("rel"),_1a);
}
});
$(".theme_item").addClass("ui-corner-all");
$(".theme_item img").addClass("ui-corner-all");
$(".jlthemeswitcher a:hover img").css({"filter":"alpha(opacity=50)","opacity":"0.5"});
$(".theme_link").each(function(){
$(this).click(function(){
$(".jlthemeswitcher li").removeClass("ui-state-active");
$(this).parent().addClass("ui-state-active");
_e($(this).attr("rel"),$(this).attr("title"));
if(_2.closeOnClick){
$(".jlthemeswitcher-container").slideUp("slow");
$("div.jlthemeswitcher").animate({scrollLeft:0},"slow");
}
try{
_2.onSelect();
}
catch(e){
}
});
});
$(".theme_link").css({"text-decoration":"none"});
var div=$("div.jlthemeswitcher"),ul=$("ul.jlthemeswitcher");
var _1d=div.width();
div.css({"overflow-x":"scroll"});
var _1e=ul.find("li:last-child");
$("#debug").show();
if($.cookie(_2.cookieName)||_2.defaultTheme){
var _1f=$.cookie(_2.cookieName)||_2.defaultTheme;
if(!$.cookie(_2.cookieName)){
$.cookie(_2.cookieName,_1f,_2.cookieOptions);
}
_e(div.find("a:contains("+_1f+")").attr("rel"),_1f);
div.find("li:contains("+_1f+")").addClass("ui-state-active");
}
$(".jlthemeswitcher-opener").click(function(){
if(!$(".jlthemeswitcher-container").is(":visible")){
if(_2.openAtOpener){
var w=$(".jlthemeswitcher-container").width();
var _21=$(this).position();
var l=((_21.left+w)>screen.width)?(screen.width-w):_21.left;
$(".jlthemeswitcher-container").css({"position":"absolute","top":_21.top+"px","left":l+"px"});
$(".jlthemeswitcher-header").css({"margin":"0px"});
$("div.jlthemeswitcher").css({"margin":"0px"});
}
_14(_2.width,_2.onOpen);
}
});
$(".jlthemeswitcher-closer").click(function(){
if($(".jlthemeswitcher-container").is(":visible")){
_17(_2.onClose);
}
});
$(".jlthemeswitcher-toggle").click(function(){
if($(".jlthemeswitcher-container").is(":visible")){
_17(_2.onClose);
}else{
_14(_2.width,_2.onOpen);
}
});
if(!_2.autoOpen){
$(".jlthemeswitcher-container").css({"display":"none"});
}else{
_14(_2.width,_2.onOpen);
}
};
if(!_2.closeIcon){
$(".jlthemeswitcher-close-icon").hide();
}
};
jQuery.cookie=function(_23,_24,_25){
if(typeof _24!="undefined"){
_25=_25||{};
if(_24===null){
_24="";
_25.expires=-1;
}
var _26="";
if(_25.expires&&(typeof _25.expires=="number"||_25.expires.toUTCString)){
var _27;
if(typeof _25.expires=="number"){
_27=new Date();
_27.setTime(_27.getTime()+(_25.expires*24*60*60*1000));
}else{
_27=_25.expires;
}
_26="; expires="+_27.toUTCString();
}
var _28=_25.path?"; path="+(_25.path):"";
var _29=_25.domain?"; domain="+(_25.domain):"";
var _2a=_25.secure?"; secure":"";
document.cookie=[_23,"=",encodeURIComponent(_24),_26,_28,_29,_2a].join("");
}else{
var _2b=null;
if(document.cookie&&document.cookie!=""){
var _2c=document.cookie.split(";");
for(var i=0;i<_2c.length;i++){
var _2e=jQuery.trim(_2c[i]);
if(_2e.substring(0,_23.length+1)==(_23+"=")){
_2b=decodeURIComponent(_2e.substring(_23.length+1));
break;
}
}
}
return _2b;
}
};
;
include.set_path('resources');
(function(b){
b.tinysort={id:"TinySort",version:"1.0.4",defaults:{order:"asc",attr:"",place:"start",returns:false}};
b.fn.extend({tinysort:function(h,j){
if(h&&typeof (h)!="string"){
j=h;
h=null;
}
var e=b.extend({},b.tinysort.defaults,j);
var p={};
this.each(function(t){
var v=(!h||h=="")?b(this):b(this).find(h);
var u=e.order=="rand"?""+Math.random():(e.attr==""?v.text():v.attr(e.attr));
var s=b(this).parent();
if(!p[s]){
p[s]={s:[],n:[]};
}
if(v.length>0){
p[s].s.push({s:u,e:b(this),n:t});
}else{
p[s].n.push({e:b(this),n:t});
}
});
for(var g in p){
var d=p[g];
d.s.sort(function k(t,s){
var i=t.s.toLowerCase?t.s.toLowerCase():t.s;
var u=s.s.toLowerCase?s.s.toLowerCase():s.s;
if(c(t.s)&&c(s.s)){
i=parseFloat(t.s);
u=parseFloat(s.s);
}
return (e.order=="asc"?1:-1)*(i<u?-1:(i>u?1:0));
});
}
var m=[];
for(var g in p){
var d=p[g];
var n=[];
var f=b(this).length;
switch(e.place){
case "first":
b.each(d.s,function(s,t){
f=Math.min(f,t.n);
});
break;
case "org":
b.each(d.s,function(s,t){
n.push(t.n);
});
break;
case "end":
f=d.n.length;
break;
default:
f=0;
}
var q=[0,0];
for(var l=0;l<b(this).length;l++){
var o=l>=f&&l<f+d.s.length;
if(a(n,l)){
o=true;
}
var r=(o?d.s:d.n)[q[o?0:1]].e;
r.parent().append(r);
if(o||!e.returns){
m.push(r.get(0));
}
q[o?0:1]++;
}
}
return this.pushStack(m);
}});
function c(e){
var d=/^\s*?[\+-]?(\d*\.?\d*?)\s*?$/.exec(e);
return d&&d.length>0?d[1]:false;
};
function a(e,f){
var d=false;
b.each(e,function(h,g){
if(!d){
d=g==f;
}
});
return d;
};
b.fn.TinySort=b.fn.Tinysort=b.fn.tsort=b.fn.tinysort;
})(jQuery);
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
var _4={i:true,global:true,strict:true,hi_class:"ui-state-highlight",type:"span"};
var _5=$.extend(_4,_3);
return this.each(function(){
var _6,_7,_8,_9,_a,_b,_c,_d,_e,_f,_10,_11,len,a1,a2,b1,b2,_17,_18;
if(/ä|é|ü|å|è|ì|ï|ö|ò|ë|ç|à|ù|ÿ|û|Ä|É|Ü|Å|È|Ì|Ñ|Ï|Ö|Ò|Ë|Ç|À|Ù|ß/.test(_2)){
_2=UniToASCII(BaltoUni(_2));
}
if(/ā|ī|ū|ṛ|ṟ|ṅ|ṣ|ñ|ṭ|ḍ|ṇ|ś|ṁ|ḥ|ḷ|ḻ|Ā|Ī|Ū|Ṛ|Ṟ|Ṣ|Ñ|Ṭ|Ḍ|Ṇ|Ś|Ṁ|Ḥ|Ḷ/.test(_2)){
_2=UniToASCII(_2);
}
_6=$(this).html();
_7=UniToASCII(_6);
_8=_5.hi_class;
_9="<"+_5.type+" class=\""+_8+"\">";
_a="</"+_5.type+">";
_b="";
_5.global?_b+="g":"";
_5.i?_b+="i":"";
_c=_5.strict?new RegExp("\\b"+RegExp.escape(_2)+"\\b",_b):new RegExp(_2,_b);
_d=_7.match(_c);
if(_d){
_e=0;
_f=new Array(_d.length);
for(var m=0;m<_d.length;m++){
_e=_7.substring(0,_e).length;
_f[m]=_e+_7.substring(_e).search(_c);
_10=_9+_6.substr(_f[m],_2.length)+_a;
_11=_9+_d[m]+_a;
len=_d[m].length;
a1=_6.substring(0,_f[m]);
a2=_7.substring(0,_f[m]);
_e=_f[m]+_11.length;
_17=/</.test(a1)?a1.match(/</g).length:0;
_18=/>/.test(a1)?a1.match(/>/g).length:0;
if(_17!==_18){
continue;
}
b1=_6.substring(a1.length+len);
b2=_7.substring(a2.length+len);
_6=a1+_10+b1;
_7=a2+_11+b2;
$(this).html(_6);
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
this.publish("progressbar_update",{val:0,status:"Building sections..."});
this._build_sections(_1);
this.publish("progressbar_update",{val:0,status:"Building quotes..."});
this._build_quotes(_1);
this.publish("progressbar_update",{val:0,status:"Ready!"});
this.publish("built");
},_build_quotes:function(_2){
var _3,_4,_5;
_3=this;
_4=$("div.quote",_2).length;
progress_unit=(99-CompileController.progress_val)/_4;
if(window.console){
console.log("q_count is "+_4+", cur_progress is "+CompileController.progress_val+", progress_unit is "+progress_unit);
}
if(_4>0){
$("div.quote",_2).each(function(){
if(!$(this).attr("link").length){
return;
}
_5=_3.new_quote(this);
if($(this).hasClass("qod_candidate")){
_3.update_db(_5.id,{qod:true},"q");
}
_3.publish("progressbar_update",{val:progress_unit});
});
}
if(window.console){
console.dir(this.db);
}
},new_quote:function(_6){
var q;
q=new Quote(_6);
return q;
},_build_sections:function(_8){
var _9,_a,_b;
_9=this;
_a=$(".section, .sub_section",_8).length;
_b=(50-CompileController.progress_val)/_a;
if(window.console){
console.log("s_count is "+_a+", cur_progress is "+CompileController.progress_val+", progress_unit is "+_b);
}
if(_a>0){
$(".section, .sub_section",_8).each(function(){
_9.create_new_section(this);
_9.publish("progressbar_update",{val:_b});
});
}
},create_new_section:function(_c){
var _d,_e,s;
_e=typeof _c==="string"?_c:$(_c).text();
_d=this.find_in_db(_e,"s");
if(!_d){
s=new Section(_c);
}
},insert_new_quote:function(id,_11,_12,_13){
var _14,_15,_16;
_14=this;
_16=_17(id,_11);
if(_16.length===0){
this.db.update(id,_12,_13);
this.publish("quote_inserted",{id:id});
}else{
this.publish("warning",{msg:"Missing "+_16.join(", ")});
}
function _17(id,_19){
var q,_1b,_1c;
q=_14.find_in_db(id,"q");
list=new Array("id","index","link","link_text","parent","tips","type");
_1c=new Array();
if(Quote.need_section(_19)){
if(!q.trans&&!q.purport){
_1c.push("section");
}
}else{
list.push("text");
}
$.each(list,function(i,val){
if(!q[val]){
_1c.push(val);
}
});
return _1c;
};
},add_to_db:function(_1f,ref,_21,_22){
var _23;
if(_22==="s"){
if(_21==="compilation"){
this.db.add(_1f,ref,"s");
}else{
if(!this.find_in_db(_21,"s")){
this.create_new_section(_21);
}
this.db.add(_1f,ref,"s");
}
}
if(_22==="q"){
var _23;
_23=this.find_in_db(_21,"s");
if(!_23){
if(_21){
this.create_new_section(_21);
}else{
if(window.console){
console.error("Error in Compilation.add_to_db: creating new section for "+ref+", missing parent");
}
}
}
this.db.add(_1f,ref,"q");
this.publish("new_quote",{elem:_1f});
}
},update_q_section:function(id,_25,_26){
if(arguments.length!==3){
if(window.console){
console.log("missing arguments in udpate_q_section");
}
return;
}
if(Quote.need_section(_25)){
var _27,q,_29;
_27=new Object();
_27.section=_26.section;
q=this.find_in_db(id,"q");
function _2a(_2b){
var _2c;
_2c=["trans","purport","text"];
if(!q[_2b]){
$.each(_2c,function(i,sec){
if(sec===_2b){
return;
}
if(q[sec]){
_27[_2b]=q[sec];
_27[sec]=false;
}
});
}else{
$.each(_2c,function(i,sec){
if(sec===_2b){
return;
}
_27[sec]=false;
});
}
};
if(_26.section!=="Translation and Purport"){
if(_26.section.match(/trans/i)){
_2a("trans");
}else{
_2a("purport");
}
}else{
if(!q.trans&&!q.purport){
_2a("purport");
}
if(!q.trans){
_29="Translation";
_27.trans=" ";
}else{
_29="Purport";
_27.purport=" ";
}
this.publish("warning",{msg:"You have chosen \"Translation and Purport\" but you are missing the "+_29+" text."});
}
this.update_db(id,_27,"q");
}else{
this.publish("warning",{msg:"This quote does not require a section"});
}
},process_verse:function(_31){
var _32,_33,_34,_35,_36;
_32=this.find_in_db(_31.quote,"q");
_36={};
_36["verses"]=_32.verses;
function _37(all){
var a=all.split("\n");
for(i=0;i<a.length;i++){
a[i]=":"+$.trim(a[i]);
}
return a.join("\n");
};
if(_31.resp){
if(_32.text){
_34=_32.text;
_35="text";
}else{
if(_32.purport){
_34=_32.purport;
_35="purport";
}
}
_33=_32.verses[_31.verse];
_36[_35]=_34.replace(_33,_37);
}
_36.verses[_31.verse]="done";
this.update_db(_32.id,_36,"q");
},update_heading:function(_3a){
if(!_3a&&window.console){
console.log("Missing params in Compilation.update_heading");
}
var _3b,_3c;
_3c={};
if(_3a.action==="append"){
_3b=this.find_in_db(_3a.id,"q");
_3c.heading=_3b.heading?_3b.heading+" "+_3a.heading:_3a.heading;
}
if(_3a.action==="set"){
_3c.heading=_3a.heading;
_3c.heading=_3c.heading.replace(/^[a-z]/,_3d);
_3c.heading=_3c.heading.replace(/,$/,".");
_3c.heading=_3c.heading.replace(/[^.?!"]$/,_3e);
}
if(_3a.action==="new"){
_3c.heading=" ";
}
function _3d(_3f){
return _3f.toUpperCase();
};
function _3e(_40){
return _40+".";
};
this.update_db(_3a.id,_3c,"q");
},update_db:function(id,_42,_43){
if(!id||!_42||!_43){
if(window.console){
console.log("Missing parameters in udpate_db");
}
}
this.db.update(id,_42,_43);
var q=this.find_in_db(id,"q");
Quote.update_section(q);
this.publish("updated",{id:id,quote:q});
},del_from_db:function(id,_46){
this.db.del(id,_46);
if(_46==="q"){
this.publish("deleted",{id:id});
}
},find_in_db:function(ref,_48){
if(!ref||!_48){
if(window.console){
console.error("Compilation#find_in_db: Missing parameters! ref: "+ref+", type: "+_48);
}
return;
}
if(_48==="s"){
ref=ref.replace(/[.,\(\)]/g,"");
}
var _49;
_49=this.db.find(ref,_48);
return _49;
},check_sec_consistency:function(id){
var _4b,q,sec;
_4b=this;
q=this.find_in_db(id,"q");
if(!q.section){
return;
}
sec=q.section.match(/trans|purport/ig);
if(sec){
if(sec.length===2){
if(!q.trans||!q.purport){
_4e();
return;
}
}
if(sec.length===1){
sec=sec[0].toLowerCase();
if(!q[sec]){
_4e();
return;
}
}
_4b.publish("section_checked",{id:id,result:"good"});
}
function _4e(){
_4b.publish("section_checked",{id:id,result:"bad"});
_4b.publish("warning",{warning:"You have set \""+q.section+"\" as your section but this quote appears to be missing the corresponding text(s)!"});
};
},undo:function(id,_50){
this.db.undo(id,_50);
this.publish("undone",{id:id});
},db:{sections:new Object(),undo_sections:new Object(),sec_count:new Object(),quotes:new Object(),undo_quotes:new Object(),quote_count:new Object(),add:function(obj,id,_53){
var _54;
_54=this._where(_53);
if(_53==="q"){
if(this.quote_count[obj.parent]===undefined){
this.quote_count[obj.parent]=0;
}
this.quote_count[obj.parent]++;
}else{
this.sec_count++;
}
this[_54][id]=obj;
},find:function(id,_56){
var _57;
_57=this._where(_56);
for(var obj in this[_57]){
if(obj==id){
return this[_57][obj];
}
}
return false;
},update:function(id,_5a,_5b){
var _5c,_5d;
_5c=this._where(_5b);
this._backup(id,_5c);
from=_5a;
to=this[_5c][id];
this._clone(from,to);
if(_5b==="q"){
Quote.update_tips(this[_5c][id]);
}
},del:function(id,_5f){
var _60;
_60=this._where(_5f);
if(_5f==="q"){
this._backup(id,_60);
}
this[_60][id]=false;
},undo:function(id,_62){
var _63,_64,_65,to;
_63=this._where(_62);
_64="undo_"+_63;
if(this[_64][id]===undefined){
return;
}
if(this[_63][id]===false){
this[_63][id]=new Object();
}
_65=this[_64][id];
to=this[_63][id];
this._clone(_65,to);
return;
},_backup:function(id,_68){
var _69,_6a,to;
_69="undo_"+_68;
if(this[_69][id]===undefined){
this[_69][id]=new Object();
}
_6a=this[_68][id];
to=this[_69][id];
this._clone(this[_68][id],this[_69][id]);
},_clone:function(_6c,to){
for(var _6e in _6c){
if(typeof _6c[_6e]!=="function"&&to[_6e]!==_6c[_6e]){
to[_6e]=_6c[_6e];
}
}
},_where:function(_6f){
return _6f==="s"?"sections":_6f==="q"?"quotes":"undo_quotes";
}}},{});
;
include.set_path('models');
﻿;
Quote=MVC.Model.extend("quote",{attr:["id","parent","book","heading","link","link_text","text","trans","purport","index","type","tips","verses","bad_link","qod"],tips_db:{section:{title:"set Section",desc:"...this quote requires a section. Click here or press S",id:"set_section_tip"},edit_section:{title:"edit Section",desc:"...by clicking here or press S",id:"edit_section_tip"},heading:{title:"set heaDing",desc:"...by highlighting a part of the quote and click here or press D",id:"set_heading_tip"},edit_heading:{title:"edit heaDing",desc:"...by highlighting a part of the quote and click here or press D",id:"edit_heading_tip"},edit_quote:{title:"edit Quote",desc:"...by doubleClicking on it, clicking here or pressing Q",id:"edit_quote_tip"},insert_new:{title:"insErt!",desc:"...this quote to the compilation by clicking here or press E",id:"set_insert_tip"}},link_text_db:{"NOD":"Nectar of Devotion","ISO":"Sri Isopanisad","TLC":"Teachings of Lord Caitanya, Chapter","RTW":"Renunciation Through Wisdom","NOI":"Nectar of Instruction","KB":"Krsna Book","EJ":"Easy Journey to Other Planets","LOB":"Light of the Bhagavata","MOG":"Message of Godhead","NBS":"Narada Bhakti Sutra","MM":"Mukunda-mala-stotra mantra"},cache:{},find_reference:function(_1){
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
new_quote={link:_7.title,link_text:_7.title,parent:_7.parent.replace(/\s+/g,"_"),index:_7.index};
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
if(_21<89&&!(/[:,"\?]/).test(_1a[i])&&!(/^\s*$/).test(_1a[i])){
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
re1=/\[(.+?)\]/g;
re2=/\((.+?)\)/g;
_2d=/^\s*(\(\[\[(?:Vanisource:)?[^\[]+\]\]\))$/mg;
_2b=_2b.replace(re1,_2e);
_2b=_2b.replace(re2,_2e);
_2b=_2b.replace(_2d,":$1");
return _2b;
};
function _2e(all,l){
var f,_32;
if(/\[/.test(l)){
return all;
}
_32={"BG $1":/^Bg\. (\d+.\d+)$/i,"$1":/^(SB \d+.\d+.\d+)$/,"CC $1":/^(?:Cc. )?((?:Adi|Ādi|Madhya|Antya) \d+.\d+)$/,"NOI $1":/^NoI (\d+)$/i,"ISO $1":/^Īśo (?:mantra )?(\d+)$/i};
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
_36=_36.replace(/"([^"]+?)''/g,"\"$1\"");
_36=_36.replace(/‘([^‘“”’]+?)’/g,"\"$1\"");
_36=_36.replace(/“([^“”‘’]+?)”/g,"\"$1\"");
_36=_36.replace(/'{2,}/g,"\"");
_36=_36.replace(/(\w)’(\s)/g,"$1'$2");
_36=_36.replace(/(\w)’s/g,"$1's");
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
!(/^(?:text|trans|purport|heading)$/).test(a)?_38[a]=$(_37).attr(a)||false:_38[a]=$(_37).children("."+a).html()||false;
});
}else{
$.each(_38.Class.attr,function(i,a){
_38[a]=_37[a]||false;
});
}
if(!_40()){
if(window.console){
console.error("Quote.init#check_missing_attr:                     Error creating quote, missing link attribute which is vital to build a quote");
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
this.publish("progressbar_update",{val:0,status:"Building facts..."});
_2?this.build_with(_2):this.build_new();
this.publish("created",{facts:this.db});
},build_new:function(){
var _3,_4;
_3=this;
_4=1;
$.each(_3.db,function(_5,_6){
if(_5==="first"||_5==="last"){
_3.set(_5,_3.get_date());
}
if(_5==="compiler"){
var _7=_3.check_user();
if(_7){
_3.set(_5,new Array(_7));
}
}
_3.publish("progressbar_update",{val:_4});
});
},build_with:function(_8){
var _9,_a,_b,_c,_d,_e,_f;
_9=this;
_a=new Object();
_b=new Array();
_c=new Array();
_d=/\[\[Category:\s?(.+?)\s?\]\]/ig;
if(!_8){
if(window.console){
console.log("Missing facts data in Facts.build_manually!");
}
return;
}
_b=_8.split("{{");
_b.shift();
if(!_b.length){
if(window.console){
console.error("Error creating facts array");
}
}
$.each(_b,function(i,val){
var _12,_13;
val=_14(val);
if(val.indexOf("toc")===0){
_a["toc"]=$.trim(val.substr(val.indexOf(" ")+1));
return true;
}
if(val.indexOf("|")===-1||val.indexOf("false")>-1){
return true;
}
_12=$.trim(val.substring(0,val.indexOf("|")));
_13=$.trim(val.substr(val.indexOf("|")+1));
if(window.console){
console.log("Setting "+_12+" to "+_13);
}
_a[_12]=_13;
});
_f=1;
$.each(_9.db,function(_15,val){
if(window.console){
console.log(_15+" is "+typeof _a[_15]+" in current_facts");
}
if(typeof _a[_15]!=="undefined"){
_17(_15,_a[_15]);
}else{
if(window.console){
console.log("In Facts.build_with: "+_15+" was not found in extracted facts db");
}
}
_9.publish("progressbar_update",{val:_f});
});
function _17(_18,_19){
if(!_19){
return;
}
if((_18==="terms"&&!/^Copy /.test(_19))||_18==="compiler"||_18==="complete"){
_19=_1a(_19);
}
if(_18==="total"){
_19=Number(_19)||0;
}
if(_18==="last"||(_18==="first"&&_19==="")){
_19=_9.get_date();
}
if(_18==="totals_by_section"){
var _1b,re,_1d,val;
_1b={};
re=/(.+?)\s?=\s?(\d+)/;
_19=_1a(_19);
$.each(_19,function(i,sec){
_1d=sec.match(re)[1];
val=Number(sec.match(re)[2]);
_1b[_1d]=val;
});
_19=_1b;
}
_9.set(_18,_19);
};
function _14(str){
var now;
now=str.replace(/"/g,"\"");
now=now.replace(/<.+/,"");
now=now.replace(/\n+/g,"");
now=now.replace(/^(.+?)\}\}.*/,"$1");
now=$.trim(now);
return now;
};
function _1a(str){
var _24,_25;
_24=str;
_24=_24.replace(/"/g,"");
_24=_24.replace(/ +\||\| +/g,"|");
_24=_24.replace(/^ +| +$/g,"");
_25=_24.split("|")||_24;
return _25;
};
_c=_8.match(_d);
if(_c!==null){
_c=$.map(_c,function(val){
return val.replace(_d,"$1");
});
this.set("categories",_c);
}
this.add_user();
if(window.console){
console.log(this.db);
}
},update:function(_27,_28,_29){
_29=$.trim(_29);
if(this.db[_27]===undefined){
if(window.console){
console.log("Error updating Facts.db in "+_27+" with "+_29);
}
return false;
}
if(_29===""){
if(_27==="goal"){
this.publish("warning",{msg:"Wrong goal setting. You must calculate your goal based on the amount of matches for your expressions search in Vedabase"});
return 0;
}
if(_28!==null){
this.publish("deleted",{fact:_27,index:_28,old:this.db[_27][_28]});
}
}
if(_27==="goal"&&isNaN(_29)){
this.publish("warning",{msg:"Goal must be number"});
return 0;
}
_28===null?this.db[_27]=_29:this.db[_27][_28]=_29;
this.publish("updated");
if(_27==="terms"&&_29!==""){
this.publish("updated_term",{term:_29});
}
return _29;
},set:function(_2a,_2b){
var _2c;
_2c=this;
if(!_2a||!_2b){
if(window.console){
console.log("Parameters missing in Facts.set(). name: "+_2a+" value: "+_2b);
}
}
_2c.db[_2a]=_2b;
},add:function(_2d,_2e){
if(this.db[_2d]===undefined||_2e===""){
if(window.console){
console.log("Bad fact in Facts.add "+_2d+" val "+_2e);
}
return;
}
this.db[_2d].push($.trim(UniToASCII(BaltoUni(_2e))));
this.publish("added",{fact:_2d,index:this.db[_2d].length-1});
},get:function(_2f,_30){
return _30===undefined?this.db[_2f]:this.db[_2f][_30];
},get_all_terms:function(){
var _31;
_31=this.db.terms;
_31=$.map(_31,function(t){
if(t!==""){
return "\""+t+"\"";
}
});
return _31.sort().join("|");
},check_user:function(){
var _33,_34;
_33=this;
_34=wgUserName||false;
if(!_34){
this.publish("warning",{msg:"You are not logged in"});
return false;
}else{
return _34;
}
},add_user:function(){
var _35,_36,_37;
_35=this;
_36=this.check_user();
_37=_35.db.compiler;
if(_36&&$.inArray(_36,_37)===-1){
_35.add("compiler",_36);
}
},get_date:function(){
var _38=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
var d=new Date();
var day=d.getDate().toString();
var _3b=_38[d.getMonth()];
var _3c=d.getYear().toString().substring(1,3);
if(day.length==1){
day="0"+day;
}
var _3d=day+_3b+_3c;
return _3d;
},complete:function(_3e,_3f){
var _40;
_40=this.db.complete;
if(_3f==="add"){
if(_3e==="ALL"){
_40.splice(0);
_40.push(_3e);
}else{
if($.inArray("ALL",_40)>-1){
_40.splice($.inArray("ALL",_40),1);
}
_40.push(_3e);
}
}else{
_40.splice($.inArray(_3e,_40),1);
}
},update_totals:function(_41){
var q,_43;
q=Compilation.find_in_db(_41.id,"q");
if(q){
_43=q.book;
this.db.totals_by_section[_43]++;
this.db.total++;
}else{
_43=Compilation.find_in_db(_41.id,"u").book;
this.db.totals_by_section[_43]--;
this.db.total--;
}
this.publish("totals_updated");
},check_totals:function(){
var _44,_45,_46,_47;
_44=this;
_46=0;
_45={};
if(window.console){
console.info("In Facts#check_totals");
}
$.each(Compilation.db.quotes,function(_48,_49){
var _4a=Compilation.db.quotes[_48]["book"];
_45[_4a]?_45[_4a]++:_45[_4a]=1;
if(window.console){
console.log("Facts#check_totals: In quote: "+_48+" count for "+_4a+" is: "+_45[_4a]);
}
});
$.each(Facts.db.totals_by_section,function(_4b,val){
if(!_45[_4b]){
if(window.console){
console.warn("Facts#check_totals: No book_count for "+_4b+" => "+_45[_4b]);
}
_45[_4b]=0;
}
if(val!==_45[_4b]){
if(window.console){
console.warn("Facts#check_totals: Facts.db totals_by_section doesn't match totals in Compilation.quotes.db for "+_4b+" totals: "+val+" => "+_45[_4b]);
}
Facts.db.totals_by_section[_4b]=_45[_4b];
_47=true;
}
_46+=_45[_4b];
});
if(_47){
if(window.console){
console.info("Updating Facts.db with quotes total "+_46);
}
this.db.total=_46;
this.publish("totals_updated");
}
},save:function(){
var _4d,_4e,all;
_4d=this;
all=false;
_4e="";
$.each(_4d.db,function(f,_51){
if(f==="books"){
return true;
}
if(f==="terms"){
_4e+=_52(f,_53(_51));
}
if(f==="notes"||f==="goal"||f==="first"||f==="last"||f==="total"){
_4e+=_52(f,_51);
}
if(f==="compiler"||f==="complete"){
_4e+=_52(f,_51.join("|"));
}
if(f==="totals_by_section"){
_4e+=_52(f,_54(_51));
}
if(f==="toc"){
_4e+="\n{{toc right}}";
}
if(f==="categories"){
_4e+=_55(_51);
}
});
return _4e;
function _52(_56,val){
if(_56==="complete"&&val==="ALL"){
all=true;
}
if(_56==="goal"&&all){
return "";
}
return "\n{{"+_56+"|"+val+"}}";
};
function _53(_58){
var t;
t=$.map(_58,function(_5a){
if(_5a!==""){
return "\""+_5a+"\"";
}
}).sort();
return t.join("|");
};
function _54(_5b){
var t;
t=new Array();
$.each(_5b,function(_5d,_5e){
t.push(_5d+"="+_5e);
});
return t.join("|");
};
function _55(_5f){
var c,_61,_62;
_61=$("#categories_list").sortable("toArray");
_62=$.map(_61,function(val,i){
var n=/\d+/.exec(val);
return _5f[n];
});
c="";
$.each(_62,function(i,cat){
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
CompileController=MVC.Controller.extend("compilation",{progress_val:0,loading:false,saving:false,compile_tools:"",save_keyCodes:[],progressbar:{},get_current_progress:function(){
return CompileController.progressbar.progressbar("option","value");
},compile_tools_menu_hover_options:{sensitivity:2,interval:300,over:function(){
CompileController.show_tools_menu();
},timeout:500,out:function(){
CompileController.hide_tools_menu();
}},hide_tools_menu:function(){
$("div#bodyContent > div#compilation > div#compile_tools_menu").animate({right:"-72px"},"slow");
},show_tools_menu:function(){
$("div#bodyContent > div#compilation > div#compile_tools_menu").animate({right:"0px"},"fast");
},link_autocomplete:function(_1,_2){
$(_1).autocomplete("/php/get_vanisource_title.php",{extraParams:{type:"title",suggest:true},minChars:4,resultsClass:"link_suggest_results",fixed:_2});
},category_autocomplete:function function_name(_3,_4){
$(_3).autocomplete({source:function(_5,_6){
$.ajax({url:"/search/category",dataType:"json",data:{q:_5.term},success:function(_7){
var l=$.map(_7,function(_9){
return _9.category;
});
_6(l);
}});
}});
},enable_keybindings:function(){
CompileController.disable_keybindings();
$(document).bind("keydown",CompileController.keybindings);
},disable_keybindings:function(){
$(document).unbind("keydown",CompileController.keybindings);
},keybindings:function(e){
var _b,_c,_d,_e;
_b=70;
_c=67;
if(!e.altKey){
return;
}
if(e.keyCode!==_b&&e.keyCode!==_c){
return;
}
e.stopImmediatePropagation();
e.preventDefault();
CompileController.show_compile_tools();
_d=$("div#compilation > div#compile_tools");
_e=_d.tabs("option","selected");
if(e.keyCode===_c){
if(_e!==0){
_d.tabs("select",0);
}
}
if(e.keyCode===_b){
if(_e!==1){
_d.tabs("select",1);
}
}
},show_compile_tools:function(_f){
CompileController.fix_z_indexes(true);
CompileController.compile_tools.css("opacity",1).fadeIn("fast",function(){
if(_f){
window.scrollTo(0,_f);
}
});
$("div#compilation > div#compile_tools_menu > p#compile_tools_toggle span#compile_tools_toggle_text").text("Hide Tools");
$("div#compilation > div#transparent_background").show();
QuotesController.disable_keybindings();
FactsController.enable_keybindings();
$("textarea",CompileController.compile_tools).focus();
},hide_compile_tools:function(){
$("div#compilation > div#transparent_background").hide();
CompileController.fix_z_indexes(false);
CompileController.compile_tools.hide("fast");
$("div#compilation > div#compile_tools_menu > p#compile_tools_toggle > span#compile_tools_toggle_text").text("Show Tools");
setTimeout(CompileController.hide_tools_menu,5000);
FactsController.disable_keybindings();
CompileController.enable_keybindings();
},fix_z_indexes:function(fix){
$("#p-logo, #p-cactions").css("z-index",fix?1:"");
},},{load:function(_11){
this._loading("init");
var _12,_13;
_12=this;
_12.update_progressbar(5,"Fetching compilation...");
_13=$("div#bodyContent > form#editform > textarea#wpTextbox1").val();
if(_13!==""&&_13.indexOf("<div id=\"compilation\">")===-1){
if(window.console){
console.log("No compilation found in this page!");
}
this._loading("end_gracefully");
return;
}
_12.update_progressbar(5,"Building compilation...");
if(_13===""){
this.new_compilation_message();
_13="<div id=\"compilation\"></div>";
}
this.render({after:"wikiPreview",action:"compilation"});
Facts.build(_13);
Compilation.build(_13);
},"div#compile_tools span#compile_tools_hide click":function(_14){
CompileController.hide_compile_tools();
},"div#transparent_background click":function(){
CompileController.hide_compile_tools();
},"div#compile_tools_menu p#compile_tools_toggle click":function(_15){
var pos=_15.event.pageY-50;
this.toggle_compile_tools(pos);
},"div#compile_tools_menu p#compile_tools_save click":function(_17){
_17.event.kill();
this.save();
},"div#compile_tools div#compile_form .ui-state-default mouseover":function(_18){
$(_18.element).addClass("ui-state-hover");
},"div#compile_tools #compile_form .ui-state-default mouseout":function(_19){
$(_19.element).removeClass("ui-state-hover");
},_loading:function(now){
var _1b,_1c;
_1b=this;
this.Class.loading=true;
if(now==="init"){
if(wgUserName===null){
alert("You must Log-in to compile.");
return;
}
$("title, #firstHeading").each(function(){
$(this).text($(this).text().replace(/Editing/,"Compiling"));
});
$("<div id=\"background_overlay\" class=\"ui-corner-bl\"></div>").appendTo("body");
CompileController.progressbar=$("<div id=\"progressbar\"></div>");
CompileController.progressbar.appendTo("body");
_1b.publish("progressbar",{text:"Loading Compilation..."});
$("#editform, #toolbar").hide();
$("#mw-edit-longpagewarning").hide();
this.loading={};
$("body div#column-one > div#p-cactions").children().each(function(){
$("li#ca-edit",this).removeClass("selected");
$("li#ca-compile",this).addClass("selected");
});
}
if(now==="end_gracefully"){
if(window.console){
console.info("In CompilationController._loading ending gracefully...");
}
this.publish("progressbar_hide");
$("body div#bodyContent > form#editform, body div#bodyContent > #toolbar").show();
}
if(now==="end"){
$(document).ready(function(){
CompileController.compile_tools=$("div#bodyContent > div#compilation > div#compile_tools");
_1b.attach_events();
_1b.publish("progressbar_hide");
$("body div#bodyContent > div#compilation").fadeIn("slow").removeClass("hidden");
CompileController.show_compile_tools();
});
this.Class.loading=false;
}
return;
},attach_events:function(){
var _1d;
_1d=this;
CompileController.compile_tools.tabs().draggable({handle:"> ul"});
$("div#bodyContent > div#compilation > div#compile_tools_menu").hoverIntent(_1d.Class.compile_tools_menu_hover_options);
$("div#compilation > div#compile_tools > div#compile_help").accordion({autoHeight:false,collapsible:true,active:false});
$("div#compilation > div#compile_tools > #compile_help #theme_switcher > .jlthemeswitcher-opener").jlthemeswitcher({defaultTheme:"Vaniquotes",themePreview:false,closeOnClick:false,importThemes:false,autoOpen:true,width:"100%",themes:[["Vaniquotes","/js/compile-2.0/stylesheets/skins/vaniquotes/images/theme_30_ui_vaniquotes.png","/js/compile-2.0/stylesheets/skins/vaniquotes/jquery-ui.css"],["UI Lightness","http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_ui_light.png","http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/ui-lightness/jquery-ui.css"],["UI Darkness","http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_ui_dark.png","http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/ui-darkness/jquery-ui.css"],["Smoothness","http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_smoothness.png","http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/smoothness/jquery-ui.css"],["Start","http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_start_menu.png","http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/start/jquery-ui.css"],["Redmond","http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_windoze.png","http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/redmond/jquery-ui.css"],["Sunny","http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_sunny.png","http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/sunny/jquery-ui.css"],["Overcast","http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_overcast.png","http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/overcast/jquery-ui.css"],["Le Frog","http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_le_frog.png","http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/le-frog/jquery-ui.css"],["Flick","http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_flick.png","http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/flick/jquery-ui.css"],["Pepper Grinder","http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_pepper_grinder.png","http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/pepper-grinder/jquery-ui.css"],["Eggplant","http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_eggplant.png","http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/eggplant/jquery-ui.css"],["Dark Hive","http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_dark_hive.png","http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/dark-hive/jquery-ui.css"],["Cupertino","http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_cupertino.png","http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/cupertino/jquery-ui.css"],["South St","http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_south_street.png","http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/south-street/jquery-ui.css"],["Blitzer","http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_blitzer.png","http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/blitzer/jquery-ui.css"],["Humanity","http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_humanity.png","http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/humanity/jquery-ui.css"],["Hot Sneaks","http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_hot_sneaks.png","http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/hot-sneaks/jquery-ui.css"],["Excite Bike","http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_excite_bike.png","http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/excite-bike/jquery-ui.css"],["Vader","http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_black_matte.png","http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/vader/jquery-ui.css"],["Dot Luv","http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_dot_luv.png","http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/dot-luv/jquery-ui.css"],["Mint Choc","http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_mint_choco.png","http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/mint-choc/jquery-ui.css"],["Black Tie","http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_black_tie.png","http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/black-tie/jquery-ui.css"],["Trontastic","http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_trontastic.png","http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/trontastic/jquery-ui.css"],["Swanky Purse","http://static.jquery.com/ui/themeroller/images/themeGallery/theme_30_swanky_purse.png","http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/themes/swanky-purse/jquery-ui.css"]],});
setTimeout(_1d.Class.hide_tools_menu,5000);
$("div#bodyContent > div#compilation > div#compile_tools_menu > p").bind("mouseenter",function(){
$(this).addClass("ui-state-hover");
}).bind("mouseleave",function(){
$(this).removeClass("ui-state-hover");
});
CompileController.enable_keybindings();
this.enable_keybinding_save();
window.onbeforeunload=function(){
if(!_1d.Class.saving){
return "";
}
};
},_render_section:function(_1e){
var _1f;
this.section=_1e;
_1f=this.section.parent;
if(window.console){
console.assert(_1f);
}
if(_1f!=="compilation"&&$("#"+_1f).length!==1){
this._render_section(Compilation.find_in_db(_1f,"s"));
}
if(window.console){
console.info("CompileController#_render_section: rendering "+this.section.id+" to "+_1f);
}
this.render({bottom:_1f,action:"sections"});
this.sort_section(_1f);
},clean_up:function(){
this._sort_sections();
this._remove_empty_secs();
this._sort_quotes();
},sort_section:function(_20){
if($("div#compilation > div#"+_20).children().length>1){
$("div#compilation > div#"+_20).children("div.section, div.sub_section").tsort({attr:"sec_index"});
}
},_sort_sections:function(){
var _21=$("div#compilation > div.section");
var _22=$("div#compilation > div.section > div.sub_section");
$(_21).tsort({attr:"sec_index"});
$(_22).tsort({attr:"sec_index"});
},_remove_empty_secs:function(){
var _23,id;
_23=[];
_25($("div#compilation > div.section > div.sub_section"));
_25($("div#compilation > div.section"));
function _25(_26){
$(_26).each(function(){
id=$(this).attr("id");
$.inArray(id,_23)>-1?_27(this):_23.push(id);
if($(this).children("div").length===0){
_27(this);
}
});
};
function _27(_28){
if(window.console){
console.info("CompilationController#_remove_empty_secs: removing duplicate or empty section: "+$(_28).attr("id"));
}
$(_28).remove();
Compilation.del_from_db($(_28).attr("id"),"s");
};
},_sort_quotes:function(){
$("div#bodyContent > div#compilation div.quote").tsort({attr:"index"});
},toggle_compile_tools:function(pos){
CompileController.compile_tools.is(":hidden")?CompileController.show_compile_tools(pos):CompileController.hide_compile_tools(pos);
},relogin:function(){
var _2a,_2b;
_2a=this;
$("body > div#progressbar").progressbar("disable");
this.user=wgUserName;
this.render({to:"login_form",action:"login_form"});
if(window.console){
console.info(wgUserName+" needs to relogin");
}
_2c();
function _2d(_2e){
_2b=wgServer+wgScriptPath+"/api.php?action=login&format=json&"+_2e;
$.ajax({type:"POST",url:_2b,dataType:"json",success:function(_2f){
if(window.console){
console.dir(_2f);
}
$("body > div#progressbar").progressbar("enable");
_2a.save();
},error:function(_30,_31,_32){
if(window.console){
console.log("Error in AjaxLogin.js!");
}
return false;
}});
};
function _33(){
$("#login_form").dialog("close");
_2d($("#login_form form").serialize());
};
function _2c(){
if(!$("#login_form").hasClass("ui-dialog-content")){
$("#login_form").dialog({modal:true,title:"Log-in to save",modal:true,open:function(_34,ui){
$("#login_form #lgpassword").focus();
},buttons:{"Login":_33}}).keydown(function(e){
if(e.keyCode===13){
_33();
}
});
}else{
$("#login_form").dialog("open");
}
};
},save:function(){
var _37;
_37=this;
_37.publish("progressbar",{text:"Begin saving..."});
_37.check_user_loggedin();
},check_internet_connection:function(){
var _38,_39,_3a;
_38=this;
_39=false;
_3a=new XMLHttpRequest();
_3a.onreadystatechange=_3b;
_3a.open("HEAD","http://www.google.com",true);
_3a.send(null);
setTimeout(function(){
if(_3a.readyState==4&&!_39){
_3c();
}
},3000);
function _3b(){
if(window.console){
console.log(_3a.readyState);
}
if(_3a.readyState==4){
if(_3a.statusText&&_3a.statusText!=""){
if(window.console){
console.log("Connected");
}
_39=true;
_38.publish("progressbar_hide");
_38.publish("connection_error",{ajax:_3a,msg:"Vaniquotes server is unreachable, please wait a minute and try again."});
}
}
};
function _3c(){
_38.publish("progressbar_hide");
_38.publish("connection_error",{ajax:_3a,msg:"You appear to be offline! Check your internet connection and try again."});
};
},check_user_loggedin:function(){
var _3d,_3e;
_3d=this;
_3e=false;
sajax_do_call("isUserLoggedIn",[],_3f);
setTimeout(function(){
if(!_3e){
if(navigator.platform=="MacIntel"){
_3d.check_internet_connection();
}else{
_3d.publish("progressbar_hide");
_3d.publish("connection_error",{ajax:{},msg:"Vaniquotes server is unreachable, please wait a minute and try to save again."});
}
}
},3000);
function _3f(_40){
_3e=true;
if(_40.status!=200){
_3d.publish("connection_error",{ajax:_40,msg:"Vaniquotes server is unreachable, please wait a minute and try to save again."});
}else{
if(window.console){
console.log("Success: "+_40.responseText);
}
}
if(_40.responseText==="no"){
_3d.relogin();
}else{
_3d._check_before_save();
}
};
},_check_before_save:function(){
var _41;
_41=this;
_41.update_progressbar(0,"Checking compilation before save...");
function _42(){
_41.publish("progressbar_hide");
};
if($(".building_quote").not(".deleted_quote").length){
_42();
this.publish("warning",{msg:"You must insert all quotes before saving!"});
$.scrollTo(".building_quote","fast");
return;
}
if($(".bad_link").length){
_42();
this.publish("warning",{msg:"You must fix bad links in page before saving!"});
$.scrollTo(".bad_link","fast",{offset:-50});
return;
}
if(QuotesController.currently_editing){
$(".edit_quote #Cancel_quote").click();
}
_41._do_save();
},_do_save:function(){
var _43,_44,_45,_46,_47,_48,_49,_4a;
_43=this;
this.Class.saving=true;
_48=$("<div id=\"compilation\"></div>");
_43.update_progressbar(0,"Saving facts...");
_44=Facts.save();
_43.update_progressbar();
$("<div id=\"facts\">"+_44+"</div>").appendTo(_48);
_43.update_progressbar(0,"Saving quotes...");
_47=$(".quote").not(".deleted_quote").clone();
_4a=40/_47.length;
if(window.console){
console.log("q_count is "+_47.length+", cur_progress is "+CompileController.progress_val+", progress_unit is "+_4a);
}
_47.each(function(){
var q,p,l,lt,_4f;
q=$(this);
p=q.attr("parent");
l=q.attr("link").replace(/_/g," ");
lt=$(".link a",q).text();
if($("div.q_menu div.candidate_quote",q).hasClass("ui-state-error")){
q.addClass("qod_candidate");
}
$(".q_menu",q).remove();
$(".link",q).html("[[Vanisource:"+l+"|"+lt+"]]: ");
$(".cited_link",q).each(function(){
$(this).replaceWith("[[Vanisource:"+$(this).text()+"|"+$(this).text()+"]]");
});
$(".verse_in_q",q).each(function(){
$(this).replaceWith($(this).text().replace(/^([^\n])/mg,":$1"));
});
$("span.ui-state-highlight",q).each(function(){
var t=$(this).text();
$(this).replaceWith(t);
});
q.removeClass().addClass("quote");
q.removeAttr("style");
_43.update_progressbar(_4a);
});
_47.appendTo(_48);
_43.update_progressbar(0,"Saving sections and subsections...");
_46=$(".sub_section").clone();
_45=$(".section").clone();
_4a=10/_46.length;
if(window.console){
console.log("subs_count is "+_46.length+", cur_progress is "+CompileController.progress_val+", progress_unit is "+_4a);
}
_46.each(_51);
_4a=10/_45.length;
if(window.console){
console.log("sections_count is "+_45.length+", cur_progress is "+CompileController.progress_val+", progress_unit is "+_4a);
}
_45.each(_51);
function _51(){
var s,l,h,id,_56;
s=$(this);
l=s.hasClass("section")?2:3;
h="h"+l;
_56=s.attr("text");
id=_56.replace(/ /g,"_");
s.empty();
$("<"+h+">"+_56+"</"+h+"></div>").appendTo(s);
$("div[parent=\""+id+"\"]:first",_48).before(s);
_43.update_progressbar(_4a);
};
_49=_48.wrap("<div></div>").parent("div").html().replace(/^\s+/mg,"").replace(/<\/span>\n/g,"</span>").replace(/(<div[^>]+?(?:id="facts"|class="(?:quote|section|sub_section)"))/g,"\n$1").replace(/([^\n])<\/div>/g,"$1\n</div>");
_43.update_progressbar(0,"Finished processing compilation for save..");
$("#wpTextbox1").val(_49);
_43.update_progressbar();
if(window.console){
console.log(_44);
console.log(_47);
console.log(_48);
}
_43.update_progressbar(100,"Saving!");
$("#wpSave").click();
$("#editform, #toolbar").show();
_43.publish("progressbar_hide");
setTimeout(function(){
if(_43.Class.saving){
_43.check_internet_connection();
}
},15000);
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
var _59,_5a;
_59=this;
_5a=CompileController.compile_tools.is(":visible");
this.warning=msg;
CompileController.fix_z_indexes(true);
this.render({to:"warning",action:"warning"});
$("div#bodyContent > div#compilation > div#warning:hidden, div#bodyContent > div#compilation > div#warning_overlay:hidden").fadeIn();
$(window).click(_5b);
$(window).keydown(_5b);
function _5b(e){
if(e.type!=="click"&&e.keyCode!==27){
return;
}
$("div#bodyContent > div#compilation > div#warning, div#bodyContent > div#compilation > div#warning_overlay").fadeOut(function(){
if(!_5a){
CompileController.fix_z_indexes(false);
}
});
$(this).unbind("click",_5b);
$(this).unbind("keydown",_5b);
};
},report_error:function(msg){
$.post("/php/report_error.php",{error:msg});
},update_progressbar:function(val,_5f){
var _60;
_60=this;
_60.Class.progress_val=val===undefined||val==0?_60.Class.progress_val+2:_60.Class.progress_val+val;
if(_5f){
$("body > div#progressbar > div").text(_5f);
}
CompileController.progressbar.progressbar("value",_60.Class.progress_val);
},block_background:function(_61){
var _62;
_62=this;
if(window.console){
console.info("In Compilation_controller.block_background with action: "+_61);
}
if(_61){
CompileController.fix_z_indexes(true);
$("#background_overlay").show();
}else{
CompileController.fix_z_indexes(false);
$("#background_overlay").fadeOut();
}
},connection_error:function(_63){
var _64;
_64=this;
if(window.console){
console.log("Ajax error: "+_63.ajax.text+" : "+_63.ajax.error);
}
window.alert(_63.msg);
},enable_keybinding_save:function(){
var _65;
_65=this;
$(document).bind("keydown",function(e){
var _67,_68;
_67=83;
if(e.ctrlKey&&e.shiftKey&&e.keyCode===_67){
e.stopPropagation();
_65.save();
}
});
},"compilation.built subscribe":function(){
var _69;
_69=this;
this.clean_up();
this._loading("end");
},"quote.found_reference subscribe":function(_6a){
if($("#compile_form #ref_lookup").is(":visible")){
$("#compile_form #ref_lookup").each(function(){
$(this).hide();
$("#ref",this).html("");
$("#ref_lookup_input > #link",this).val("");
});
}
if(CompileController.compile_tools.is(":visible")){
CompileController.hide_compile_tools();
}
},"compilation.quote_inserted subscribe":function(_6b){
CompileController.show_compile_tools();
},"section.created subscribe":function(_6c){
Compilation.add_to_db(_6c,_6c.id,_6c.parent,"s");
this._render_section(_6c);
},"hide_compile_tools subscribe":function(){
CompileController.hide_compile_tools();
},"info subscribe":function(_6d){
if(window.console){
console.info("Info: "+_6d.msg);
}
this.info(_6d.msg);
},"warning subscribe":function(_6e){
if(window.console){
console.log("Warning: "+_6e.msg);
}
this.warning(_6e.msg);
},"quote.warning subscribe":function(_6f){
if(window.console){
console.log("Warning: "+_6f.msg);
}
this.warning(_6f.msg);
},"facts.warning subscribe":function(_70){
if(window.console){
console.log("Warning: "+_70.msg);
}
this.warning(_70.msg);
},"compilation.warning subscribe":function(_71){
if(window.console){
console.log("Warning: "+_71.msg);
}
this.warning(_71.msg);
},"section.warning subscribe":function(_72){
if(window.console){
console.log("Warning: "+_72.msg);
}
this.warning(_72.msg);
},"report_error subscribe":function(_73){
if(window.console){
console.log("Reporting error to developers/maintainers: "+_73.msg);
}
this.report_error(_73.msg);
},"connection_error subscribe":function(_74){
this.connection_error(_74);
},"quote.connection_error subscribe":function(_75){
this.connection_error(_75);
},"progressbar subscribe":function(_76){
var _77;
_77=this;
_77.block_background(true);
if(window.console){
console.info("Init progressbar");
}
if($("div#bodyContent > div#compilation > #compile_tools").is(":visible")){
CompileController.hide_compile_tools();
}
CompileController.progressbar.progressbar({value:0});
$("body > div#progressbar > div").text(_76.text);
},"progressbar_hide subscribe":function(_78){
if(!CompileController.progressbar.hasClass("ui-progressbar")){
return;
}
var _79;
_79=this;
if(window.console){
console.info("Closing progressbar");
}
CompileController.progressbar.progressbar("destroy");
_79.block_background(false);
_79.Class.progress_val=0;
},"progressbar_update subscribe":function(_7a){
if(window.console){
console.count("Progressbar_update subscribe");
}
var _7b;
_7b=_7a.status?_7a.status:false;
this.update_progressbar(_7a.val,_7b);
},"compilation.progressbar_update subscribe":function(_7c){
if(window.console){
console.count("Progressbar_update subscribe from Compilation");
}
status=_7c.status?_7c.status:false;
this.update_progressbar(_7c.val,status);
},"facts.progressbar_update subscribe":function(_7d){
if(window.console){
console.count("Progressbar_update subscribe from Facts");
}
status=_7d.status?_7d.status:false;
this.update_progressbar(_7d.val,status);
},"quote.check_internet_connection subscribe":function(_7e){
this.check_internet_connection(_7e);
}});
;
include.set_path('controllers');
QuotesController=MVC.Controller.extend("quotes",{currently_editing:false,focused_textarea:false,current_quote:"",key:{main:{heading:68,section:83,edit_quote:81,insert:69},section:{trans:84,purport:82,trans_purport:78},edit_heading:{heading_create:65,heading_edit:77},heading:{heading_set:69,heading_append:68,heading_new:78},heading_or_verse:{heading:68,verse_select:86},escape:27,update_quote:81,insert_prabhupada:65},enable_keybindings:function(_1){
$(document).bind("keydown",{quote:_1},QuotesController.keybindings_event);
},disable_keybindings:function(){
$(document).unbind("keydown",QuotesController.keybindings_event);
},keybindings_event:function(e){
var _3,q,_5,k,_7,_8;
_3=this;
if(e.type==="text"||e.altKey||e.ctrlKey||e.shiftKey||e.metaKey){
return;
}
e.stopImmediatePropagation();
e.preventDefault();
_5=e.data.quote;
q=QuotesController.current_quote;
$tips=$("div#alert_tip").is(":visible")?$("div.q_menu > div.q_tips > div#alert_tip",q):$("div.q_menu > div.q_tips",q);
k=e.keyCode;
if(QuotesController.key["escape"]===k){
if($(q).hasClass("edit_quote")){
$("> div#edit_buttons > input[id=\"Cancel_quote\"]",q).click();
}
if($("div#alert_tip",q).is(":visible")){
_5.cancel_tip(q);
}
return;
}
_7=$tips.hasClass("q_tips")?$tips.attr("context"):$tips.parent("div.q_tips").attr("context");
$.each(QuotesController.key[_7],function(_9,_a){
if(_a===k){
$("input[id*=\""+_9+"\"]",$tips).click();
return false;
}
});
},enable_edit_keybindings:function(_b){
QuotesController.disable_keybindings();
$(_b).bind("keydown",{q:_b},QuotesController.edit_view_keybindings_event);
},disable_edit_keybindings:function(_c){
$(_c).unbind("keydown",QuotesController.edit_view_keybindings_event);
QuotesController.enable_keybindings(_c);
},edit_view_keybindings_event:function(e){
if(typeof (e.keyCode)=="undefined"){
return;
}
var q=e.data.q;
if(e.keyCode===QuotesController.key["escape"]){
$("div#edit_buttons > input#Cancel_quote",q).click();
return false;
}
if(e.altKey&&e.keyCode===QuotesController.key["update_quote"]){
$("div#edit_buttons > input#Update_quote",q).click();
return false;
}
if(e.altKey&&e.keyCode===QuotesController.key["insert_prabhupada"]){
$("input#prabhupada_icon",q).click();
return false;
}
},insert_prabhupada_speaker:function(_f){
if(_f.selectionStart||_f.selectionStart=="0"){
var _10=_f.selectionStart;
var _11=_f.selectionEnd;
_f.value=_f.value.substring(0,_10)+"Prabhup&#257;da: "+_f.value.substring(_11,_f.value.length);
}
}},{mouseover:function(_12){
_12.event.kill();
QuotesController.current_quote=_12.element;
if(!$(_12.element).hasClass("edit_quote")){
QuotesController.enable_keybindings(this);
}
},mouseleave:function(_13){
_13.event.kill();
QuotesController.disable_keybindings();
this.cancel_tip(_13.element);
},dblclick:function(_14){
if(_14.element.has_class("edit_quote")!==undefined){
return;
}
_14.event.kill();
if(this.Class.currently_editing){
this.render_quote(this.Class.currently_editing);
}
this.render_quote({elem:_14.element,view:"edit"});
},"div#edit_buttons input#Update_quote click":function(_15){
var _16;
_16=$(_15.element).parents(".quote");
_15.event.kill();
this._event_resp({elem:_16,action:"update"});
},"div#edit_buttons input#Cancel_quote click":function(_17){
var _18;
_18=$(_17.element).parents(".quote");
_17.event.kill();
this._event_resp({elem:_18,action:"cancel"});
},"div#link_text click":function(_19){
_19.event.kill();
$(_19.element).parents("div.edit_quote").children("div#fix_link").toggle().children("input#fix_link_input").focus();
},"input#prabhupada_icon click":function(_1a){
var _1b;
_1a.event.kill();
_1b=$(_1a.element).parents(".quote").children("#text")[0];
if(_1b.value.length===_1b.selectionStart){
_1b.selectionStart=0;
_1b.selectionEnd=0;
}
QuotesController.insert_prabhupada_speaker(_1b);
},"div#diacritics span#diacritics_toggle click":function(_1c){
$(_1c.element).siblings("p").toggle();
},"div#diacritics p a click":function(_1d){
var _1e,_1f;
_1d.event.kill();
_1e=this.Class.focused_textarea;
if(!_1e){
this.publish("warning",{msg:"You must place the cursor in the text where you wish to insert the diacritic character"});
return;
}
diacritc=_1d.element.innerHTML;
this.insert_diacritic(_1e,diacritc);
},"textarea focus":function(_20){
this.Class.focused_textarea=_20.element;
},"div.undo_quote click":function(_21){
if(_21.element.has_class("edit_quote")!==undefined){
return;
}
var _22;
_21.event.kill();
_22=$(_21.element).parents("div.quote");
this.undo(_22);
},"div.del_quote click":function(_23){
var _24;
_23.event.kill();
_24=$(_23.element).parents("div.quote");
this.delete_quote(_24);
},"div.candidate_quote click":function(_25){
var _26;
_25.event.kill();
$(_25.element).hasClass("ui-state-error")?$(_25.element).removeClass("ui-state-error"):$(_25.element).addClass("ui-state-error");
},".deleted_quote_msg .undo_del_quote click":function(_27){
var _28;
_27.event.kill();
_28=$(_27.element).parents("div.quote");
this.undo(_28);
},"div.text mouseup":function(_29){
if(window.getSelection().toString()===""){
return;
}
if(_29.element.has_class("edit_quote")!==undefined){
return;
}
_29.event.kill();
var _2a;
_2a=_29.element;
this.check_selection(_2a);
},"div.q_menu div.q_tips input.tips click":function(_2b){
var _2c;
_2c=_2b.element;
_2b.event.kill();
this.tips_handler(_2c);
},"div.q_menu div.q_tips div#alert_tip input.alert_tip_heading_or_verse click":function(_2d){
var id,_2f;
_2d.event.kill();
id=_2d.element.id;
_2f=$(_2d.element).parents("div.quote");
if(id==="heading_select"){
if(_2f.children(".heading").length){
this.tip_alert({elem:_2f,type:"heading"});
}else{
this._do_heading(_2f,"heading_set");
}
}else{
this.process_verse($(_2f).attr("id"));
}
},"div.q_menu div.q_tips div#alert_tip input.alert_tip_heading_set click":function(_30){
var id,_32;
_30.event.kill();
id=_30.element.id;
_32=$(_30.element).parents("div.quote");
if(id==="heading_new"){
Compilation.update_heading({id:_32.attr("id"),heading:" ",action:"new"});
$("#heading",_32).focus();
}
if(id==="heading_edit"){
if(this.Class.currently_editing){
this.render_quote(this.Class.currently_editing);
}
if(_32.children(".heading").length===0){
Compilation.update_heading({id:_32.attr("id"),heading:" ",action:"new"});
}else{
this.render_quote({elem:_32,view:"edit"});
}
$("#heading",_32).focus().select();
}
if(id==="heading_create"){
this.tip_alert({elem:_32,type:"heading"});
}
if(id==="heading_set"||id==="heading_append"){
this._do_heading(_32,id);
}
},"div.q_menu div.q_tips div#alert_tip input click":function(_33){
var _34,_35;
_33.event.kill();
_35=_33.element;
_34=_35.id;
if(window.console){
console.log(_35+" with "+_34);
}
this._do_section(_35,_34);
},".ui-state-default mouseover":function(_36){
$(_36.element).addClass("ui-state-hover");
},".ui-state-default mouseout":function(_37){
$(_37.element).removeClass("ui-state-hover");
},".ui-state-default mousedown":function(_38){
$(_38.element).addClass("ui-state-active");
},".ui-state-default mouseup":function(_39){
$(_39.element).removeClass("ui-state-active");
},render_quote:function(_3a){
var id,_3c,_3d,_3e;
_3c=_3a["elem"];
_3c.id?id=_3c.id:id=$(_3c).attr("id");
if($("#"+id).length!==1){
this._append_quote(_3c);
}
if(_3a["view"]==="view"){
_3d="quote";
this.Class.currently_editing=false;
this.Class.focused_textarea=false;
if(!$("#"+id).hasClass("building_quote")){
$("#"+id).removeClass("edit_quote").removeClass("ui-state-highlight");
}
if(_3c.type==="new"){
$("#"+id).addClass("q_new building_quote").addClass("ui-state-highlight");
}
CompileController.enable_keybindings();
}else{
if(_3a["view"]==="edit"){
_3d="quote_edit";
this.Class.currently_editing={elem:_3c,view:"view"};
$("#"+id).addClass("edit_quote").addClass("ui-state-highlight");
$(document).unbind("click");
CompileController.disable_keybindings();
QuotesController.enable_edit_keybindings(_3c);
}else{
if(_3a["view"]==="delete"){
_3d="delete";
$("#"+id).addClass("deleted_quote");
}
}
}
_3d==="delete"?this.deleted=Compilation.db.find(id,"d"):this.quote=Compilation.db.find(id,"q");
if(_3d==="quote"&&this.quote.section==="Translation and Purport"&&(this.quote.trans===" "||this.quote.purport===" ")){
this.render_quote({elem:_3c,view:"edit"});
return;
}
if(_3d==="quote"&&this.quote.heading===" "){
this.render_quote({elem:_3c,view:"edit"});
return;
}
if(_3a["view"]==="edit"){
this.edit_class=this.quote.bad_link?"ui-state-error ui-corner-all":"ui-widget-content ui-corner-all";
}
if($("#"+id).length){
this.render({to:id,action:_3d});
}else{
if(window.console){
console.error("QuotesController#render_quote: Error rendering quote to non-existing id in dom => "+id);
}
return;
}
$("#"+id+".edit_quote").children("#heading, #trans, #purport, #text").autogrow();
$("#"+id+" .tips[id^=\"set_\"]").not("#set_heading_tip").toggleClass("ui-state-error");
if(_3a["view"]==="edit"){
CompileController.link_autocomplete($("#"+id+" #fix_link_input"),false);
if(this.quote.bad_link){
$("#"+id+" #fix_link").show().children("#fix_link_input").focus();
}
_3e=$("#"+id).children("textarea");
_3e.focus();
_3e[0].selectionStart=0;
_3e[0].selectionEnd=0;
}
this.publish("rendered",$("#"+id));
},edit_quote:function(_3f){
if(this.Class.currently_editing){
this.render_quote(this.Class.currently_editing);
}
this.render_quote({elem:_3f,view:"edit"});
$.scrollTo(_3f,"slow",{easing:"easeOutExpo",offset:-50});
},_event_resp:function(_40){
var _41,id,_43;
_43=this;
_41=$(_40.elem);
id=_41.attr("id");
action=_40.action;
if(_41.children("#trans, #purport").length===2&&action==="cancel"){
if(/^\s+$/.test(_41.children("#trans").val())||(/^\s+$/).test(_41.children("#purport").val())){
action="update";
}
}
if(_41.children("#heading").length===1&&action==="cancel"){
if(/^\s+$/.test(_41.children("#heading").val())){
action="update";
}
}
if(action==="update"){
this.update(_41);
}else{
_41.fadeOut("fast");
this.render_quote({elem:_41,view:"view"});
_41.fadeIn("slow");
if(!_41.hasClass("building_quote")){
this._transition_hilite(_41,"#FFFEC6",2);
}
}
QuotesController.disable_edit_keybindings(_40.elem);
},check_selection:function(_44){
var q=$(_44).parents(".quote");
if($("div#alert_tip",q).is(":visible")){
return;
}
var _46,_47,_48,_49;
_46=this;
_47=$.trim(window.getSelection().toString());
if(_47===""){
if($("div#alert_tip").is(":visible")){
this.cancel_tip(_48);
}
return;
}
_48=$(_44).parents("div.quote");
this.tip_alert({elem:_48,type:"heading_or_verse"});
},delete_quote:function(_4a){
var id,_4c;
_4c=this;
id=$(_4a).attr("id");
Compilation.del_from_db(id,"q");
},undo:function(_4d){
var _4e,id;
_4e=this;
id=$(_4d).attr("id");
$(_4d).slideUp("slow",function(){
Compilation.undo(id,"q");
$(this).removeClass("deleted_quote");
_4e.render_quote({elem:_4d,view:"view"});
$(this).show("slow");
});
},_do_heading:function(_50,_51){
var _52,id,_54;
id=$(_50).attr("id");
_52=$.trim(window.getSelection().toString());
if(_52===""){
this.publish("warning",{msg:"You did not select any text for setting the heading"});
return;
}
_54=_51.replace("heading_","");
Compilation.update_heading({id:id,heading:_52,action:_54});
},process_verse:function(_55){
var _56;
_56=$.trim(window.getSelection().toString()).split(/\r?\n/);
_56=$.map(_56,function(_57,i){
if(_57!==""){
return _57;
}
});
Quote.request_verse(_55,_56);
this.display_verses();
},_do_section:function(_59,_5a){
var _5b,id,_5d,_5e;
_5b=$(_59).parents("div.quote");
id=_5b.attr("id");
link=_5b.attr("link");
if(_5a=="trans"){
_5e="Translation";
}
if(_5a=="purport"){
_5e="Purport";
}
if(_5a=="trans_purport"){
_5e="Translation and Purport";
}
Compilation.update_q_section(id,link,{section:_5e});
},tips_handler:function(_5f){
var _60,_61;
_60=this;
_61=$(_5f).parents("div.quote");
if(/section/.test(_5f.id)){
this.tip_alert({elem:_61,type:"section"});
}
if(_5f.id==="set_insert_tip"){
this.insert_new_quote(_61);
}
if(_5f.id==="edit_quote_tip"){
this.edit_quote(_61);
}
if(_5f.id==="edit_heading_tip"||_5f.id==="set_heading_tip"){
this.tip_alert({elem:_61,type:"edit_heading"});
}
},tip_alert:function(_62){
var _63,_64;
_63=this;
_64=this._find_alert_tip_elem(_62.elem);
if(!_64){
return;
}
this._set_tip_context(_64,_62.type);
if(_62.type==="heading"){
this.message=$.trim(window.getSelection().toString())===""?"Highlight text and:":"Set heading:";
}
if(_62.type==="edit_heading"){
this.message="Set heading:";
}
this.render({to:_64,action:_62.type});
if($(_64).is(":hidden")){
$(_64).siblings(".tips").slideUp("fast");
$(_64).slideDown("fast");
}
},cancel_tip:function(_65){
if(!_65){
if(window.console){
console.log("Error in QuoteController.cancel_tip: missing elem argument");
}
}
if($(_65).hasClass("edit_quote")||$(_65).parents("div.edit_quote").length){
return;
}
var _66;
_66=this._find_alert_tip_elem(_65);
this._set_tip_context(_66,"main");
if($(_66).is(":visible")){
$(_66).slideUp("slow");
if($(_66).siblings(".tips")){
$(_66).siblings(".tips").slideDown("slow");
}
}
},insert_new_quote:function(_67){
Compilation.insert_new_quote($(_67).attr("id"),$(_67).attr("link"),{type:"quote"},"q");
},_find_alert_tip_elem:function(_68){
var p,tip;
if($(_68).hasClass("quote")){
p=_68;
}else{
p=$(_68).parents("div.quote");
}
tip=$("div#alert_tip",p).get(0);
return tip;
},_set_tip_context:function(_6b,_6c){
$(_6b).parent(".q_tips").attr("context",_6c);
},bind_escape:function(_6d){
$(document).keydown(function(e){
if(e.keyCode===27){
_6d();
$(this).unbind("keydown");
}
});
},_append_quote:function(_6f){
var _70;
this.quote=_6f;
_70=this.quote.parent?this.quote.parent.replace(/[.,()]/g,""):"compilation";
if(window.console){
console.info("QuotesController#_append_quote: appending "+_6f.id+" to "+_70);
}
if($("#"+_70).length){
this.render({bottom:_70,action:"new_quote"});
}else{
if(window.console){
console.error("QuotesController#_append_quote: error rendering "+_6f.id+" to "+_70);
}
this.publish("report_error",{msg:"Error rendering "+_6f.id+" to "+_70});
return;
}
},hi_terms:function(_71){
var _72;
_72=Facts.db.terms;
if(!_72){
if(window.console){
console.log("No terminologies to highlight in hi_terms!");
return;
}
}
$.each(_72,function(i,_74){
if(_74===""){
return true;
}
$(_71).highlight_sanskrit(_74);
});
},update:function(_75){
var id,_77,_78;
id=$(_75).attr("id");
_77={};
$.each(["heading","trans","purport"],function(i,_7a){
_77[_7a]=_7b(_7a);
});
function _7b(_7c){
if($(_75).children("#"+_7c).length){
var val=$.trim($(_75).children("#"+_7c).val());
return val!==""?val:false;
}else{
return false;
}
};
if($(_75).children("#text").length){
_77["text"]=$(_75).children("#text").val();
}
_78=$("#fix_link_input",_75);
if($(_78).is(":visible")&&$(_78).val()!==""){
var _7e;
_7e=$("#fix_link_input",_75).val();
$(_75).attr("link",_7e).removeAttr("link_text").removeAttr("parent").removeAttr("book");
if(window.console){
console.info("QuotesController#update: fixing link to: "+_7e);
}
this.publish("changed_link",{elem:_75});
return;
}
Compilation.update_db(id,_77,"q");
return;
},insert_diacritic:function(_7f,_80){
if(_7f.selectionStart||_7f.selectionStart=="0"){
var _81=_7f.selectionStart;
var _82=_7f.selectionEnd;
_7f.value=_7f.value.substring(0,_81)+_80+_7f.value.substring(_82,_7f.value.length);
_7f.setSelectionRange(_82+1,_82+1);
_7f.focus();
}
},_transition_hilite:function(_83,_84,_85){
var w,q,_88,off;
$(_83).removeClass("ui-widget-content").addClass("ui-state-highlight");
setTimeout(function(){
$(_83).removeClass("ui-state-highlight").addClass("ui-widget-content");
},_85+"000");
w=window.innerHeight;
q=$(_83).height();
_88=w-q;
off=_88<=0?-50:-_88/2;
$.scrollTo($(_83),"fast",{easing:"easeOutElastic",offset:off});
},display_verses:function(){
var _8a=this;
if($(".verse").length){
function _8b(){
Compilation.process_verse({quote:$(this).attr("quote"),verse:$(this).attr("verse"),resp:true});
$(this).dialog("destroy").remove();
};
function _8c(){
$(this).dialog("destroy").remove();
};
$(".verse").dialog({dialogClass:"verse_dialog",buttons:{"Yes":_8b,"No":_8c}});
}
},"rendered subscribe":function(_8d){
var _8e;
_8e=this;
if($(_8d).hasClass("deleted_quote")||$(_8d).hasClass("edit_quote")){
return;
}
_8f(_8d);
_90(_8d);
_91(_8d);
_92(_8d);
this.hi_terms($(_8d).children(".text"));
function _8f(_93){
$(".text",_93).each(function(){
var _94,_95;
_94=$(this).html();
_94=_94.replace(/^:(.+?)$/mg,"<dd>$1</dd>");
_95=_94.match(/(<dd>.+?<\/dd>\n?)+/g);
if(_95){
$.each(_95,function(i,_97){
var re=new RegExp("(.+?\\n+)"+RegExp.escape(_97),"g");
_94=_94.replace(re,function(all,_9a){
return _9a.indexOf("<dl class=\"verse_in_q\">")>-1?all:_9a+"<dl class=\"verse_in_q\">\n"+_97+"</dl>\n";
});
});
}
$(this).html(_94);
});
};
function _90(_9b){
$(".text",_9b).each(function(){
if($(this).html().indexOf("[[")>-1){
var t;
t=$(this).html();
t=t.replace(/\[\[(?:Vanisource:)?(.+?)\|(.+?)\]\]/g,"<a class=\"cited_link\" href=\"http://vanisource.org/wiki/$1\"><b>$2</b></a>");
$(this).html(t);
}
});
};
function _91(_9d){
$(".text",_9d).each(function(){
var _9e;
_9e=$(this).html();
_9e=_9e.replace(/^.+$/mg,_9f);
function _9f(all){
if(/<\/?d(d|l)/.test(all)){
return all;
}else{
return "<p>"+all+"</p>";
}
};
$(this).html(_9e);
});
};
function _92(_a1){
var _a2,_a3,t,a,b,c;
_a3=false;
$(_a1).each(function(){
_a2=$(this).attr("book");
if(_a2!=="Con"&&_a2!=="Lec"){
_a3=true;
}else{
_a3=true;
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
_a3=false;
}
}
if(_a3){
$(this).children("div.text:first").css({display:"inline"});
}
_a3=false;
$(this).children("div.text").children(":first").each(function(){
if($(this).is("p")){
$(this).css("display","inline");
}
});
});
};
},"compilation.updated subscribe":function(_a8){
var _a9,id,_ab;
_a9=this;
id=_a8.id;
_ab=$("#"+id);
_a9.render_quote({elem:_ab,view:"view"});
if(!_ab.hasClass("building_quote")){
_ab.addClass("q_updated ui-state-highlight").removeClass("q_new");
_a9._transition_hilite($("#"+id),"#DCBFF1",5);
}
},"compilation.deleted subscribe":function(_ac){
var _ad,_ae;
_ad=this;
_ae="#"+_ac.id;
$(_ae).slideUp("slow",function(){
_ad.render_quote({elem:_ae,view:"delete"});
$(this).fadeIn("slow");
});
},"compilation.quote_inserted subscribe":function(_af){
var _b0,_b1;
_b0=this;
_b1=$("#"+_af.id);
_b1.fadeOut("fast",function(){
_b0.render_quote({elem:_b1,view:"view"});
$(this).removeClass("building_quote").fadeIn("medium");
});
this._transition_hilite(_b1,"#EEF7D9",5);
},"compilation.new_quote subscribe":function(_b2){
var _b3=this;
this.render_quote({elem:_b2.elem,id:_b2.elem.id,view:"view"});
if(!CompileController.loading){
$("#"+_b2.elem.id).parents(".sub_section").children(".quote").tsort({attr:"index"});
$.scrollTo("#"+_b2.elem.id+".q_new","slow",{easing:"easeOutExpo",offset:-50,onAfter:_b3.display_verses});
}
},"compilation.section_checked subscribe":function(_b4){
var id,_b6;
id=_b4.id;
_b6=_b4.result;
if(_b6==="bad"){
$("#"+id).addClass("q_bad_section");
}else{
if($("#"+id).hasClass("q_bad_section")){
$("#"+id).removeClass("q_bad_section");
}
}
},"quote.created subscribe":function(_b7){
Compilation.add_to_db(_b7,_b7.id,_b7.parent,"q");
},"quote.verse_request subscribe":function(_b8){
this.verse=_b8.verse;
this.id=_b8.id;
this.quote=_b8.quote;
this.render({bottom:"verses",action:"verse"});
},"quote.found_reference subscribe":function(_b9){
_b9.text=CompileFormController.temp_quote;
q=new Quote(_b9);
},"changed_link subscribe":function(_ba){
if(window.console){
console.info("In QuotesController.changed_link observer");
}
var _bb=_ba.elem;
this.render_quote({elem:_bb,view:"view"});
Compilation.del_from_db($(_bb).attr("id"),"q");
q=new Quote(_bb);
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
if(!this.extract_veda_ref(_1.element.value)){
return;
}
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
},"div#form_buttons span#prabhupada_icon click":function(_7){
var _8;
_7.event.kill();
compile_form_textarea=$("div#compilation > div#compile_tools > div#compile_form > textarea");
QuotesController.insert_prabhupada_speaker(compile_form_textarea[0]);
$(compile_form_textarea).focus();
},process_new_quote:function(){
var _9,_a,rl,_c;
_9=this;
_a=$("#compile_tools > #compile_form > textarea")[0];
rl=$("#ref_lookup");
_c={};
if(rl.not(":hidden")){
if(window.console){
console.log("CompileformController In process_new_quote!");
}
_c["ref"]=$("input#link",rl).val();
$("#clear_form").click();
}
_c["text"]=_a.value;
if(this.action_name!=="#submit_quote click"&&!_c["ref"]&&!this.check_text(_a.value)){
return;
}
this.submit_quote(_c);
},check_text:function(_d){
_d=$.trim(_d);
if(_d===""||_d===this.Class.last_quote_value||!this.check_uninserted_quotes()){
return false;
}
this.Class.last_quote_value=_d;
return true;
},check_uninserted_quotes:function(){
if($("div.building_quote").not(".deleted_quote").length!==0){
this.publish("hide_compile_tools");
this.publish("warning",{msg:"You must Insert the new quote to continue compiling!"});
$.scrollTo(".building_quote","slow",{easing:"easeOutExpo",offset:-50});
return false;
}
return true;
},submit_quote:function(_e){
var _f,re,_11,_12,_13,_14,_15;
_f=this;
_11=_e["text"];
_13=_f.extract_veda_ref(_11);
if(_13){
_15={};
_14=$.trim(_13.text);
this.Class.temp_quote=_14;
_15["ref"]=_e["ref"]?_e["ref"]:_13.ref;
_15["ref"]=_15["ref"].replace(/\s+/g," ");
_e["ref"]?_15["type"]="title":"";
Quote.find_reference(_15);
}else{
this.publish("warning",{msg:"No Vedabase Reference in pasted quote!\nPerhaps you forgot to use the \"Copy with Reference\" button in Vedabase"});
return;
}
function _16(_17){
return _17.toUpperCase();
};
},extract_veda_ref:function(t){
var re,ref,_1b;
re=new RegExp(">>> Ref. VedaBase => (.+)");
ref=re.exec(t);
_1b={};
if(ref){
_1b.ref=$.trim(ref[1]);
_1b.text=$.trim(t.replace(re,""));
}else{
_1b=false;
}
return _1b;
},"quote.found_reference subscribe":function(){
if($("#compile_form textarea").length){
$("#compile_form textarea").val("");
}
},"quote.not_found_reference subscribe":function(_1c){
if($("#compile_tools #ref_lookup").is(":hidden")){
$("#compile_tools #ref_lookup #ref").html("Search for link for this quote and click submit.<br/>Orig ref. was: <b>"+_1c.ref+"</b>");
$("#compile_tools #ref_lookup").show();
}
},"quote.title_req_failed subscribe":function(_1d){
this.publish("warning",{msg:_1d.msg});
},"quote.ajax subscribe":function(_1e){
if(_1e.type==="start"){
$("#ajax").show();
}
if(_1e.type==="end"){
$("#ajax").hide();
}
}});
;
include.set_path('controllers');
FactsController=MVC.Controller.extend("facts",{key:{expressions:69,categories:67,goal:71,completed_sections:83,notes:78,compiler:80,first:70,last:76,totals_by_section:66,total:84,escape:27},enable_keybindings:function(){
$(document).bind("keyup",FactsController.keybindings);
},disable_keybindings:function(){
var _1=this;
$(document).unbind("keyup",FactsController.keybindings);
},keybindings:function(e){
var _3;
if(e.target.type==="text"||e.altKey||e.ctrlKey){
return;
}
if(e.keyCode===FactsController.key["escape"]){
CompileController.hide_compile_tools();
return;
}
_3=0;
$.each(FactsController.key,function(_4,k){
if(e.keyCode===k){
$("div#compilation > div#compile_tools > div#facts").accordion("activate",_3);
return;
}
_3++;
});
}},{load:function(){
CompileController.category_autocomplete($("#facts > #categories #add_categories > input"),true);
},"div.facts_tools input.add keyup":function(_6){
var _7=this;
_6.event.kill();
if(_6.event.keyCode===13){
_7.add(_6);
}
},"div.facts_tools input.add blur":function(_8){
if($(".cat_suggest_results").is(":hidden")){
this.reset_input(_8.element);
}
},"div.facts_tools input.add focus":function(_9){
if(_9.element.value.indexOf("Add new")===0){
$(_9.element).css({color:"black","font-size":"1.2em","font-weight":"normal"});
_9.element.value="";
}
},"div#copy_terms span.copy click":function(_a){
var _b,_c;
_b=this;
_a.event.kill();
_c=Facts.get_all_terms();
if(_c===""){
this.publish("warning",{msg:"You have no expressions to copy"});
return;
}
if(window.console){
console.log(_c);
}
$("#copy_terms_man").val(_c).show().select();
},add:function(_d){
var _e,_f;
_e=$(_d.element).parents(".fact").attr("id");
_f=$(_d.element).parent().children("input").val().replace(/"/g,"");
$(_d.element).parent().children("input").val("");
_e==="terms"&&/\|/.test(_f)?_10(_f):Facts.add(_e,_f);
function _10(_11){
var _12;
_12=_11.split("|");
$.each(_12,function(i,t){
Facts.add("terms",t);
});
};
},update:function(_15,_16){
var _17,_18;
_17=$(_15).hasClass("fact")?_15.id:$(_15).parents(".fact").attr("id");
_18=_15.id.match(/\d+/);
return Facts.update(_17,_18,_16);
},append:function(_19){
var _1a;
_1a=_19.fact+"_list";
this.id=_19.fact+"_"+_19.index;
this.f_class=_19.fact;
this.value=Facts.get(_19.fact,_19.index);
if($("#"+_1a).length===0){
if(window.console){
console.error("Error in FactsController.append: "+_1a+" does not exist in dom");
}
return;
}
this.render({bottom:_1a,action:"append"});
this.editable(this.id);
if(_19.fact==="terms"){
this.hilite(this.value);
}
},hilite:function(_1b){
if(_1b===""){
return;
}
$(".quote .text").highlight_sanskrit(_1b);
},un_hilite:function(_1c){
if(!_1c){
if(window.console){
console.log("term missing in FactsController.un_hilite "+_1c);
}
return;
}
var v,re;
re=new RegExp("<span class=\"ui-state-highlight\">"+_1c+"</span>","g");
$(".quote .text").each(function(){
v=$(this).html().replace(re,_1c);
$(this).html(v);
});
},editable:function(id){
var _20,_21;
_21=this;
_20=id?"#"+id:".term, #goal, .categories, #notes";
$(_20).editable(function(_22,_23){
return _21.update(this,_22);
},{event:"dblclick",type:"text",style:"border: solid 0px indigo;"});
},_render_facts:function(_24){
var _25,_26;
_25=this;
this.facts=_24;
$("#facts").length?_26={to:"facts",action:"facts"}:_26={bottom:"compile_tools",action:"facts"};
this.render(_26);
$(document).ready(function(){
_25.attach_events();
});
},"compilation.built subscribe":function(){
this.run_checks();
},run_checks:function(){
Facts.check_totals();
},attach_events:function(){
var _27;
_27=this;
$("div#compilation > div#compile_tools > div#facts").accordion({autoHeight:false,collapsible:true,active:false});
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
_27.checkbox(this);
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
},reset_input:function(_28){
var _29;
$(_28).css({color:"#D2C1F2","font-size":"","font-weight":""});
_29=$(_28.parentNode).attr("fact")==="terms"?"expressions":$(_28.parentNode).attr("fact");
_28.value="Add new "+_29+"...";
},checkbox:function(_2a){
var _2b,_2c;
_2b=_2a.id.replace(/complete_/,"");
_2c=_2a.checked?"add":"del";
Facts.complete(_2b,_2c);
},update_t_b_sections_view:function(){
this.totals=Facts.db.totals_by_section;
this.render({to:"totals_by_section",action:"totals"});
},update_totals_view:function(){
this.total=Facts.db.total;
this.render({to:"total",action:"total"});
},"facts.created subscribe":function(_2d){
var _2e;
_2e=this;
this._render_facts(_2d.facts);
$("#categories_list").sortable({placeholder:"facts_sortable_placeholder",axis:"y",cursor:"move",forcePlaceholderSize:true,items:"li",opacity:0.7,});
},"facts.added subscribe":function(_2f){
this.append(_2f);
},"facts.deleted subscribe":function(_30){
var _31;
_31="#"+_30.fact+"_"+_30.index;
if(_30.fact==="terms"){
this.un_hilite(_30.old);
}
$(_31).remove();
},"facts.totals_updated subscribe":function(_32){
this.update_t_b_sections_view();
this.update_totals_view();
},"facts.updated_term subscribe":function(_33){
this.hilite(_33.term);
},"quote.created subscribe":function(_34){
Facts.update_totals(_34);
},"compilation.deleted subscribe":function(_35){
Facts.update_totals(_35);
},"compilation.undone subscribe":function(_36){
Facts.update_totals(_36);
}});
;
include.end_of_production();