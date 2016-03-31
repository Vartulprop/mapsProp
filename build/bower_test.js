

window.google = window.google || {};
google.maps = google.maps || {};
(function() {
  
  function getScript(src) {
    document.write('<' + 'script src="' + src + '"><' + '/script>');
  }
  
  var modules = google.maps.modules = {};
  google.maps.__gjsload__ = function(name, text) {
    modules[name] = text;
  };
  
  google.maps.Load = function(apiLoad) {
    delete google.maps.Load;
    apiLoad([0.009999999776482582,[[["https://mts0.googleapis.com/maps/vt?lyrs=m@344000000\u0026src=api\u0026hl=en-US\u0026","https://mts1.googleapis.com/maps/vt?lyrs=m@344000000\u0026src=api\u0026hl=en-US\u0026"],null,null,null,null,"m@344000000",["https://mts0.google.com/maps/vt?lyrs=m@344000000\u0026src=api\u0026hl=en-US\u0026","https://mts1.google.com/maps/vt?lyrs=m@344000000\u0026src=api\u0026hl=en-US\u0026"]],[["https://khms0.googleapis.com/kh?v=198\u0026hl=en-US\u0026","https://khms1.googleapis.com/kh?v=198\u0026hl=en-US\u0026"],null,null,null,1,"198",["https://khms0.google.com/kh?v=198\u0026hl=en-US\u0026","https://khms1.google.com/kh?v=198\u0026hl=en-US\u0026"]],null,[["https://mts0.googleapis.com/maps/vt?lyrs=t@132,r@344000000\u0026src=api\u0026hl=en-US\u0026","https://mts1.googleapis.com/maps/vt?lyrs=t@132,r@344000000\u0026src=api\u0026hl=en-US\u0026"],null,null,null,null,"t@132,r@344000000",["https://mts0.google.com/maps/vt?lyrs=t@132,r@344000000\u0026src=api\u0026hl=en-US\u0026","https://mts1.google.com/maps/vt?lyrs=t@132,r@344000000\u0026src=api\u0026hl=en-US\u0026"]],null,null,[["https://cbks0.googleapis.com/cbk?","https://cbks1.googleapis.com/cbk?"]],[["https://khms0.googleapis.com/kh?v=96\u0026hl=en-US\u0026","https://khms1.googleapis.com/kh?v=96\u0026hl=en-US\u0026"],null,null,null,null,"96",["https://khms0.google.com/kh?v=96\u0026hl=en-US\u0026","https://khms1.google.com/kh?v=96\u0026hl=en-US\u0026"]],[["https://mts0.googleapis.com/mapslt?hl=en-US\u0026","https://mts1.googleapis.com/mapslt?hl=en-US\u0026"]],[["https://mts0.googleapis.com/mapslt/ft?hl=en-US\u0026","https://mts1.googleapis.com/mapslt/ft?hl=en-US\u0026"]],[["https://mts0.googleapis.com/maps/vt?hl=en-US\u0026","https://mts1.googleapis.com/maps/vt?hl=en-US\u0026"]],[["https://mts0.googleapis.com/mapslt/loom?hl=en-US\u0026","https://mts1.googleapis.com/mapslt/loom?hl=en-US\u0026"]],[["https://mts0.googleapis.com/mapslt?hl=en-US\u0026","https://mts1.googleapis.com/mapslt?hl=en-US\u0026"]],[["https://mts0.googleapis.com/mapslt/ft?hl=en-US\u0026","https://mts1.googleapis.com/mapslt/ft?hl=en-US\u0026"]],[["https://mts0.googleapis.com/mapslt/loom?hl=en-US\u0026","https://mts1.googleapis.com/mapslt/loom?hl=en-US\u0026"]]],["en-US","US",null,0,null,null,"https://maps.gstatic.com/mapfiles/","https://csi.gstatic.com","https://maps.googleapis.com","https://maps.googleapis.com",null,"https://maps.google.com","https://gg.google.com","https://maps.gstatic.com/maps-api-v3/api/images/","https://www.google.com/maps",0,"https://www.google.com"],["https://maps.googleapis.com/maps-api-v3/api/js/24/5","3.24.5"],[2813798241],1,null,null,null,null,null,"",null,null,1,"https://khms.googleapis.com/mz?v=198\u0026",null,"https://earthbuilder.googleapis.com","https://earthbuilder.googleapis.com",null,"https://mts.googleapis.com/maps/vt/icon",[["https://maps.googleapis.com/maps/vt"],["https://maps.googleapis.com/maps/vt"],null,null,null,null,null,null,null,null,null,null,["https://www.google.com/maps/vt"],"/maps/vt",344000000,132],2,500,[null,"https://g0.gstatic.com/landmark/tour","https://g0.gstatic.com/landmark/config",null,"https://www.google.com/maps/preview/log204","","https://static.panoramio.com.storage.googleapis.com/photos/",["https://geo0.ggpht.com/cbk","https://geo1.ggpht.com/cbk","https://geo2.ggpht.com/cbk","https://geo3.ggpht.com/cbk"],"https://maps.googleapis.com/maps/api/js/GeoPhotoService.GetMetadata","https://maps.googleapis.com/maps/api/js/GeoPhotoService.SingleImageSearch",["https://lh3.ggpht.com/","https://lh4.ggpht.com/","https://lh5.ggpht.com/","https://lh6.ggpht.com/"]],["https://www.google.com/maps/api/js/master?pb=!1m2!1u24!2s5!2sen-US!3sUS!4s24/5","https://www.google.com/maps/api/js/widget?pb=!1m2!1u24!2s5!2sen-US"],null,0,null,"/maps/api/js/ApplicationService.GetEntityDetails",0,null,null,[null,null,null,null,null,null,null,null,null,[0,0],[null,null,null,null,null,null,null,null,0,0,null,null,null,"U"],null,null],null,[],["24.5"]], loadScriptTime);
  };
  var loadScriptTime = (new Date).getTime();
})();
// inlined
(function(_){'use strict';var Ea,Fa,Ra,ab,gb,hb,ib,jb,nb,ob,sb,vb,qb,xb,yb,Cb,Jb,Nb,Rb,Yb,ac,dc,ec,ic,kc,mc,fc,jc,oc,sc,tc,wc,Mc,Oc,Pc,Qc,Rc,Sc,Uc,Yc,ad,bd,gd,id,kd,md,ld,od,vd,wd,Bd,Id,Kd,Ld,$d,ae,ce,fe,he,ge,ie,ne,oe,re,ue,xe,ye,ze,Ae,Oe,Pe,Re,Ze,$e,af,cf,ef,ff,gf,kf,mf,nf,of,pf,qf,rf,sf,vf,Bf,Cf,Df,Ef,Ff,Mf,Nf,Of,Rf,Uf,tf,$f,bg,eg,gg,og,pg,qg,rg,sg,tg,vg,wg,xg,Fg,Hg,Lg,Jg,Mg,Ng,Rg,Ug,Vg,Zg,$g,ch,dh,eh,fh,gh,Ba,Ca;_.ba="ERROR";_.ca="INVALID_REQUEST";_.da="MAX_DIMENSIONS_EXCEEDED";_.ea="MAX_ELEMENTS_EXCEEDED";
_.fa="MAX_WAYPOINTS_EXCEEDED";_.ga="NOT_FOUND";_.ha="OK";_.ia="OVER_QUERY_LIMIT";_.ja="REQUEST_DENIED";_.ka="UNKNOWN_ERROR";_.la="ZERO_RESULTS";_.ma=function(){return function(a){return a}};_.k=function(){return function(){}};_.oa=function(a){return function(b){this[a]=b}};_.m=function(a){return function(){return this[a]}};_.pa=function(a){return function(){return a}};_.ra=function(a){return function(){return _.qa[a].apply(this,arguments)}};_.sa=function(a){return void 0!==a};_.ta=_.k();
_.ua=function(a){a.Nc=function(){return a.Pb?a.Pb:a.Pb=new a}};
_.va=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};_.wa=function(a){var b=_.va(a);return"array"==b||"object"==b&&"number"==typeof a.length};_.xa=function(a){return"string"==typeof a};_.ya=function(a){return"number"==typeof a};_.za=function(a){return"function"==_.va(a)};_.Aa=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};_.Da=function(a){return a[Ba]||(a[Ba]=++Ca)};Ea=function(a,b,c){return a.call.apply(a.bind,arguments)};
Fa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};_.u=function(a,b,c){_.u=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ea:Fa;return _.u.apply(null,arguments)};_.Ga=function(){return+new Date};
_.v=function(a,b){function c(){}c.prototype=b.prototype;a.ud=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Hr=function(a,c,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[c].apply(a,g)}};_.x=function(a){return a?a.length:0};_.Ha=function(a,b){return function(c){return b(a(c))}};_.Ja=function(a,b){_.Ia(b,function(c){a[c]=b[c]})};_.Ka=function(a){for(var b in a)return!1;return!0};
_.La=function(a,b,c){null!=b&&(a=Math.max(a,b));null!=c&&(a=Math.min(a,c));return a};_.Ma=function(a,b,c){c=c-b;return((a-b)%c+c)%c+b};_.Na=function(a,b,c){return Math.abs(a-b)<=(c||1E-9)};_.Oa=function(a,b){for(var c=[],d=_.x(a),e=0;e<d;++e)c.push(b(a[e],e));return c};_.Qa=function(a,b){for(var c=_.Pa(void 0,_.x(b)),d=_.Pa(void 0,0);d<c;++d)a.push(b[d])};Ra=function(a){return null==a};_.D=function(a){return"undefined"!=typeof a};_.E=function(a){return"number"==typeof a};
_.Sa=function(a){return"object"==typeof a};_.Pa=function(a,b){return null==a?b:a};_.Ta=function(a){return"string"==typeof a};_.Ua=function(a){return a===!!a};_.G=function(a,b){for(var c=0,d=_.x(a);c<d;++c)b(a[c],c)};_.Ia=function(a,b){for(var c in a)b(c,a[c])};_.Xa=function(a,b,c){var d=_.Va(arguments,2);return function(){return b.apply(a,d)}};_.Va=function(a,b,c){return Function.prototype.call.apply(Array.prototype.slice,arguments)};
_.Ya=function(a){return null!=a&&"object"==typeof a&&"number"==typeof a.length};_.$a=function(a){return function(){var b=this,c=arguments;_.Za(function(){a.apply(b,c)})}};_.Za=function(a){return window.setTimeout(a,0)};_.I=function(a){return Math.round(a)+"px"};ab=function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]};_.bb=function(a){window.console&&window.console.error&&window.console.error(a)};_.eb=function(a){a=a||window.event;_.cb(a);_.db(a)};
_.cb=function(a){a.cancelBubble=!0;a.stopPropagation&&a.stopPropagation()};_.db=function(a){a.preventDefault&&_.D(a.defaultPrevented)?a.preventDefault():a.returnValue=!1};_.fb=function(a){a.handled=!0;_.D(a.bubbles)||(a.returnValue="handled")};gb=function(a,b){a.__e3_||(a.__e3_={});var c=a.__e3_;c[b]||(c[b]={});return c[b]};hb=function(a,b){var c,d=a.__e3_||{};if(b)c=d[b]||{};else{c={};for(var e in d)_.Ja(c,d[e])}return c};ib=function(a,b){return function(c){return b.call(a,c,this)}};
jb=function(a,b,c){return function(d){var e=[b,a];_.Qa(e,arguments);_.J.trigger.apply(this,e);c&&_.fb.apply(null,arguments)}};nb=function(a,b,c,d){this.Pb=a;this.R=b;this.j=c;this.T=null;this.U=d;this.id=++kb;gb(a,b)[this.id]=this;lb&&"tagName"in a&&(mb[this.id]=this)};
ob=function(a){return a.T=function(b){b||(b=window.event);if(b&&!b.target)try{b.target=b.srcElement}catch(d){}var c;c=a.j.apply(a.Pb,[b]);return b&&"click"==b.type&&(b=b.srcElement)&&"A"==b.tagName&&"javascript:void(0)"==b.href?!1:c}};_.pb=function(a){return""+(_.Aa(a)?_.Da(a):a)};_.K=_.k();sb=function(a,b){var c=b+"_changed";if(a[c])a[c]();else a.changed(b);var c=qb(a,b),d;for(d in c){var e=c[d];sb(e.Rd,e.lc)}_.J.trigger(a,b.toLowerCase()+"_changed")};
_.ub=function(a){return tb[a]||(tb[a]=a.substr(0,1).toUpperCase()+a.substr(1))};vb=function(a){a.gm_accessors_||(a.gm_accessors_={});return a.gm_accessors_};qb=function(a,b){a.gm_bindings_||(a.gm_bindings_={});a.gm_bindings_.hasOwnProperty(b)||(a.gm_bindings_[b]={});return a.gm_bindings_[b]};xb=_.k();yb=function(a){this.message=a;this.name="InvalidValueError";this.stack=Error().stack};_.zb=function(a,b){var c="";if(null!=b){if(!(b instanceof yb))return b;c=": "+b.message}return new yb(a+c)};
_.Ab=function(a){if(!(a instanceof yb))throw a;_.bb(a.name+": "+a.message)};_.Bb=function(a,b){return function(c){if(!c||!_.Sa(c))throw _.zb("not an Object");var d={},e;for(e in c)if(d[e]=c[e],!b&&!a[e])throw _.zb("unknown property "+e);for(e in a)try{var f=a[e](d[e]);if(_.D(f)||Object.prototype.hasOwnProperty.call(c,e))d[e]=a[e](d[e])}catch(g){throw _.zb("in property "+e,g);}return d}};Cb=function(a){try{return!!a.cloneNode}catch(b){return!1}};
_.Db=function(a,b,c){return c?function(c){if(c instanceof a)return c;try{return new a(c)}catch(e){throw _.zb("when calling new "+b,e);}}:function(c){if(c instanceof a)return c;throw _.zb("not an instance of "+b);}};_.Eb=function(a){return function(b){for(var c in a)if(a[c]==b)return b;throw _.zb(b);}};_.Fb=function(a){return function(b){if(!_.Ya(b))throw _.zb("not an Array");return _.Oa(b,function(b,d){try{return a(b)}catch(e){throw _.zb("at index "+d,e);}})}};
_.Gb=function(a,b){return function(c){if(a(c))return c;throw _.zb(b||""+c);}};_.Hb=function(a){var b=arguments;return function(a){for(var d=[],e=0,f=b.length;e<f;++e){var g=b[e];try{(g.Yh||g)(a)}catch(h){if(!(h instanceof yb))throw h;d.push(h.message);continue}return(g.then||g)(a)}throw _.zb(d.join("; and "));}};_.Ib=function(a){return function(b){return null==b?b:a(b)}};Jb=function(a){return function(b){if(b&&null!=b[a])return b;throw _.zb("no "+a+" property");}};
_.Kb=function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};_.Mb=function(){return-1!=_.Lb.toLowerCase().indexOf("webkit")};
_.Ob=function(a,b){for(var c=0,d=_.Kb(String(a)).split("."),e=_.Kb(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",l=e[g]||"",n=/(\d*)(\D*)/g,p=/(\d*)(\D*)/g;do{var q=n.exec(h)||["","",""],r=p.exec(l)||["","",""];if(0==q[0].length&&0==r[0].length)break;c=Nb(0==q[1].length?0:(0,window.parseInt)(q[1],10),0==r[1].length?0:(0,window.parseInt)(r[1],10))||Nb(0==q[2].length,0==r[2].length)||Nb(q[2],r[2])}while(0==c)}return c};Nb=function(a,b){return a<b?-1:a>b?1:0};
_.Pb=function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(_.xa(a))return _.xa(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};_.Qb=function(a,b,c){for(var d=a.length,e=_.xa(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};Rb=function(a,b){for(var c=a.length,d=_.xa(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return e;return-1};_.Tb=function(a,b){var c=_.Pb(a,b),d;(d=0<=c)&&_.Sb(a,c);return d};
_.Sb=function(a,b){Array.prototype.splice.call(a,b,1)};_.L=function(a){return a*Math.PI/180};_.Ub=function(a){return 180*a/Math.PI};_.M=function(a,b,c){if(a&&(void 0!==a.lat||void 0!==a.lng))try{Vb(a),b=a.lng,a=a.lat,c=!1}catch(d){_.Ab(d)}a-=0;b-=0;c||(a=_.La(a,-90,90),180!=b&&(b=_.Ma(b,-180,180)));this.lat=function(){return a};this.lng=function(){return b}};_.Wb=function(a){return _.L(a.lat())};_.Xb=function(a){return _.L(a.lng())};Yb=function(a,b){var c=Math.pow(10,b);return Math.round(a*c)/c};
_.Zb=function(a){try{if(a instanceof _.M)return a;a=Vb(a);return new _.M(a.lat,a.lng)}catch(b){throw _.zb("not a LatLng or LatLngLiteral",b);}};_.$b=function(a){this.j=_.Zb(a)};ac=function(a){if(a instanceof xb)return a;try{return new _.$b(_.Zb(a))}catch(b){}throw _.zb("not a Geometry or LatLng or LatLngLiteral object");};_.bc=function(a,b){if(a)return function(){--a||b()};b();return _.ta};
_.cc=function(a,b,c){var d=a.getElementsByTagName("head")[0];a=a.createElement("script");a.type="text/javascript";a.charset="UTF-8";a.src=b;c&&(a.onerror=c);d.appendChild(a);return a};dc=function(a){for(var b="",c=0,d=arguments.length;c<d;++c){var e=arguments[c];e.length&&"/"==e[0]?b=e:(b&&"/"!=b[b.length-1]&&(b+="/"),b+=e)}return b};ec=function(a){this.T=window.document;this.j={};this.R=a};ic=function(){this.U={};this.R={};this.V={};this.j={};this.T=new fc};
kc=function(a,b){a.U[b]||(a.U[b]=!0,jc(a.T,function(c){for(var d=c.zj[b],e=d?d.length:0,f=0;f<e;++f){var g=d[f];a.j[g]||kc(a,g)}c=c.Jo;c.j[b]||_.cc(c.T,dc(c.R,b)+".js")}))};mc=function(a,b){var c=lc;this.Jo=a;this.zj=c;var d={},e;for(e in c)for(var f=c[e],g=0,h=f.length;g<h;++g){var l=f[g];d[l]||(d[l]=[]);d[l].push(e)}this.aq=d;this.Ym=b};fc=function(){this.j=[]};jc=function(a,b){a.R?b(a.R):a.j.push(b)};
_.N=function(a,b,c){var d=ic.Nc();a=""+a;d.j[a]?b(d.j[a]):((d.R[a]=d.R[a]||[]).push(b),c||kc(d,a))};_.nc=function(a,b){ic.Nc().j[""+a]=b};oc=function(a,b,c){var d=[],e=_.bc(a.length,function(){b.apply(null,d)});_.Qb(a,function(a,b){_.N(a,function(a){d[b]=a;e()},c)})};_.qc=function(a){a=a||{};this.T=a.id;this.j=null;try{this.j=a.geometry?ac(a.geometry):null}catch(b){_.Ab(b)}this.R=a.properties||{}};_.O=function(a,b){this.x=a;this.y=b};
sc=function(a){if(a instanceof _.O)return a;try{_.Bb({x:_.rc,y:_.rc},!0)(a)}catch(b){throw _.zb("not a Point",b);}return new _.O(a.x,a.y)};_.P=function(a,b,c,d){this.width=a;this.height=b;this.T=c||"px";this.R=d||"px"};tc=function(a){if(a instanceof _.P)return a;try{_.Bb({height:_.rc,width:_.rc},!0)(a)}catch(b){throw _.zb("not a Size",b);}return new _.P(a.width,a.height)};_.Q=function(a){return function(){return this.get(a)}};
_.uc=function(a,b){return b?function(c){try{this.set(a,b(c))}catch(d){_.Ab(_.zb("set"+_.ub(a),d))}}:function(b){this.set(a,b)}};_.vc=function(a,b){_.Ia(b,function(b,d){var e=_.Q(b);a["get"+_.ub(b)]=e;d&&(e=_.uc(b,d),a["set"+_.ub(b)]=e)})};_.xc=function(a){this.j=a||[];wc(this)};wc=function(a){a.set("length",a.j.length)};_.yc=function(a){this.T=a||_.pb;this.R={}};_.zc=function(a,b){var c=a.R,d=a.T(b);c[d]||(c[d]=b,_.J.trigger(a,"insert",b),a.j&&a.j(b))};_.Ac=_.oa("j");
_.Bc=function(a,b,c){this.heading=a;this.pitch=_.La(b,-90,90);this.zoom=Math.max(0,c)};_.Cc=function(){this.__gm=new _.K;this.U=null};_.Gc=_.ma();_.Hc=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};_.Ic=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)};_.Jc=function(a){return-1!=_.Lb.indexOf(a)};_.Kc=function(){return _.Jc("Opera")||_.Jc("OPR")};_.Lc=function(){return _.Jc("Trident")||_.Jc("MSIE")};Mc=function(){return(_.Jc("Chrome")||_.Jc("CriOS"))&&!_.Kc()&&!_.Jc("Edge")};
Oc=function(a){_.Nc.setTimeout(function(){throw a;},0)};
Pc=function(){var a=_.Nc.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!_.Jc("Presto")&&(a=function(){var a=window.document.createElement("IFRAME");a.style.display="none";a.src="";window.document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=(0,_.u)(function(a){if(("*"==
d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!_.Lc()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(_.sa(c.next)){c=c.next;var a=c.cb;c.cb=null;a()}};return function(a){d.next={cb:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof window.document&&"onreadystatechange"in window.document.createElement("SCRIPT")?function(a){var b=window.document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};window.document.documentElement.appendChild(b)}:function(a){_.Nc.setTimeout(a,0)}};Qc=function(a,b,c){this.U=c;this.T=a;this.V=b;this.R=0;this.j=null};Rc=function(){this.R=this.j=null};Sc=function(){this.next=this.j=this.Md=null};_.Xc=function(a){Tc||Uc();Vc||(Tc(),Vc=!0);Wc.add(a,void 0)};
Uc=function(){if(_.Nc.Promise&&_.Nc.Promise.resolve){var a=_.Nc.Promise.resolve(void 0);Tc=function(){a.then(Yc)}}else Tc=function(){var a=Yc;!_.za(_.Nc.setImmediate)||_.Nc.Window&&_.Nc.Window.prototype&&!_.Jc("Edge")&&_.Nc.Window.prototype.setImmediate==_.Nc.setImmediate?(Zc||(Zc=Pc()),Zc(a)):_.Nc.setImmediate(a)}};Yc=function(){for(var a=null;a=Wc.remove();){try{a.Md.call(a.j)}catch(c){Oc(c)}var b=$c;b.V(a);b.R<b.U&&(b.R++,a.next=b.j,b.j=a)}Vc=!1};
ad=function(a,b){return function(c){return c.Md==a&&c.context==(b||null)}};bd=function(a){this.Ha=[];this.j=a&&a.Je||_.ta;this.R=a&&a.Le||_.ta};_.cd=function(a,b,c,d){function e(){_.Qb(f,function(a){b.call(c||null,function(b){if(a.Me){if(a.Me.Ki)return;a.Me.Ki=!0;_.Tb(g.Ha,a);g.Ha.length||g.j()}a.Md.call(a.context,b)})})}var f=a.Ha.slice(0),g=a;d&&d.xq?e():_.Xc(e)};_.dd=function(){this.Ha=new bd({Je:(0,_.u)(this.Je,this),Le:(0,_.u)(this.Le,this)})};_.ed=function(){_.dd.call(this)};
_.fd=function(a){_.dd.call(this);this.j=a};gd=_.k();id=function(a){var b=a;if(a instanceof Array)b=Array(a.length),_.hd(b,a);else if(a instanceof Object){var c=b={},d;for(d in a)a.hasOwnProperty(d)&&(c[d]=id(a[d]))}return b};_.hd=function(a,b){for(var c=0;c<b.length;++c)b.hasOwnProperty(c)&&(a[c]=id(b[c]))};_.R=function(a,b){a[b]||(a[b]=[]);return a[b]};_.jd=function(a,b){return a[b]?a[b].length:0};kd=_.k();
md=function(a,b,c){for(var d=1;d<b.ra.length;++d){var e=b.ra[d],f=a[d+b.qa];if(null!=f&&e)if(3==e.label)for(var g=0;g<f.length;++g)ld(f[g],d,e,c);else ld(f,d,e,c)}};ld=function(a,b,c,d){if("m"==c.type){var e=d.length;md(a,c.ma,d);d.splice(e,0,[b,"m",d.length-e].join(""))}else"b"==c.type&&(a=a?"1":"0"),d.push([b,c.type,(0,window.encodeURIComponent)(a)].join(""))};_.nd=function(){return _.Jc("iPhone")&&!_.Jc("iPod")&&!_.Jc("iPad")};od=function(){var a=_.Nc.document;return a?a.documentMode:void 0};
_.td=function(a){return pd[a]||(pd[a]=0<=_.Ob(_.qd,a))};_.ud=function(a,b){this.j=a||0;this.R=b||0};vd=_.k();wd=function(a,b){-180==a&&180!=b&&(a=180);-180==b&&180!=a&&(b=180);this.j=a;this.R=b};_.xd=function(a){return a.j>a.R};_.zd=function(a,b){return 1E-9>=Math.abs(b.j-a.j)%360+Math.abs(_.yd(b)-_.yd(a))};_.Ad=function(a,b){var c=b-a;return 0<=c?c:b+180-(a-180)};_.yd=function(a){return a.isEmpty()?0:_.xd(a)?360-(a.j-a.R):a.R-a.j};Bd=function(a,b){this.R=a;this.j=b};
_.Cd=function(a){return a.isEmpty()?0:a.j-a.R};_.Dd=function(a,b){a=a&&_.Zb(a);b=b&&_.Zb(b);if(a){b=b||a;var c=_.La(a.lat(),-90,90),d=_.La(b.lat(),-90,90);this.R=new Bd(c,d);c=a.lng();d=b.lng();360<=d-c?this.j=new wd(-180,180):(c=_.Ma(c,-180,180),d=_.Ma(d,-180,180),this.j=new wd(c,d))}else this.R=new Bd(1,-1),this.j=new wd(180,-180)};_.Ed=function(a,b,c,d){return new _.Dd(new _.M(a,b,!0),new _.M(c,d,!0))};
_.Gd=function(a){if(a instanceof _.Dd)return a;try{return a=Fd(a),_.Ed(a.south,a.west,a.north,a.east)}catch(b){throw _.zb("not a LatLngBounds or LatLngBoundsLiteral",b);}};_.Hd=_.oa("__gm");Id=function(){this.j={};this.T={};this.R={}};Kd=function(){this.j={}};Ld=function(a){this.j=new Kd;var b=this;_.J.addListenerOnce(a,"addfeature",function(){_.N("data",function(c){c.j(b,a,b.j)})})};_.Nd=function(a){this.j=[];try{this.j=Md(a)}catch(b){_.Ab(b)}};_.Pd=function(a){this.j=(0,_.Od)(a)};
_.Td=function(a){this.j=Qd(a)};_.Ud=function(a){this.j=(0,_.Od)(a)};_.Vd=function(a){this.j=(0,_.Od)(a)};_.Xd=function(a){this.j=Wd(a)};_.Zd=function(a){this.j=Yd(a)};$d=function(a){a=a||{};a.clickable=_.Pa(a.clickable,!0);a.visible=_.Pa(a.visible,!0);this.setValues(a);_.N("marker",_.ta)};ae=function(a){var b=_,c=ic.Nc().T;a=c.R=new mc(new ec(a),b);for(var b=0,d=c.j.length;b<d;++b)c.j[b](a);c.j.length=0};_.be=function(a){this.__gm={set:null,Jf:null};$d.call(this,a)};
ce=function(a){a=a||{};a.visible=_.Pa(a.visible,!0);return a};_.de=function(a){return a&&a.radius||6378137};fe=function(a){return a instanceof _.xc?ee(a):new _.xc((0,_.Od)(a))};he=function(a){var b;_.Ya(a)?0==_.x(a)?b=!0:(b=a instanceof _.xc?a.getAt(0):a[0],b=_.Ya(b)):b=!1;return b?a instanceof _.xc?ge(ee)(a):new _.xc(_.Fb(fe)(a)):new _.xc([fe(a)])};
ge=function(a){return function(b){if(!(b instanceof _.xc))throw _.zb("not an MVCArray");b.forEach(function(b,d){try{a(b)}catch(e){throw _.zb("at index "+d,e);}});return b}};ie=function(a){this.set("latLngs",new _.xc([new _.xc]));this.setValues(ce(a));_.N("poly",_.ta)};_.je=function(a){ie.call(this,a)};_.ke=function(a){ie.call(this,a)};
_.le=function(a,b,c){function d(a){if(!a)throw _.zb("not a Feature");if("Feature"!=a.type)throw _.zb('type != "Feature"');var b=a.geometry;try{b=null==b?null:e(b)}catch(d){throw _.zb('in property "geometry"',d);}var f=a.properties||{};if(!_.Sa(f))throw _.zb("properties is not an Object");var g=c.idPropertyName;a=g?f[g]:a.id;if(null!=a&&!_.E(a)&&!_.Ta(a))throw _.zb((g||"id")+" is not a string or number");return{id:a,geometry:b,properties:f}}function e(a){if(null==a)throw _.zb("is null");var b=(a.type+
"").toLowerCase(),c=a.coordinates;try{switch(b){case "point":return new _.$b(h(c));case "multipoint":return new _.Ud(n(c));case "linestring":return g(c);case "multilinestring":return new _.Td(p(c));case "polygon":return f(c);case "multipolygon":return new _.Zd(r(c))}}catch(d){throw _.zb('in property "coordinates"',d);}if("geometrycollection"==b)try{return new _.Nd(z(a.geometries))}catch(d){throw _.zb('in property "geometries"',d);}throw _.zb("invalid type");}function f(a){return new _.Xd(q(a))}function g(a){return new _.Pd(n(a))}
function h(a){a=l(a);return _.Zb({lat:a[1],lng:a[0]})}if(!b)return[];c=c||{};var l=_.Fb(_.rc),n=_.Fb(h),p=_.Fb(g),q=_.Fb(function(a){a=n(a);if(!a.length)throw _.zb("contains no elements");if(!a[0].j(a[a.length-1]))throw _.zb("first and last positions are not equal");return new _.Vd(a.slice(0,-1))}),r=_.Fb(f),z=_.Fb(e),y=_.Fb(d);if("FeatureCollection"==b.type){b=b.features;try{return _.Oa(y(b),function(b){return a.add(b)})}catch(w){throw _.zb('in property "features"',w);}}if("Feature"==b.type)return[a.add(d(b))];
throw _.zb("not a Feature or FeatureCollection");};ne=function(a){var b=this;this.setValues(a||{});this.j=new Id;_.J.forward(this.j,"addfeature",this);_.J.forward(this.j,"removefeature",this);_.J.forward(this.j,"setgeometry",this);_.J.forward(this.j,"setproperty",this);_.J.forward(this.j,"removeproperty",this);this.R=new Ld(this.j);this.R.bindTo("map",this);this.R.bindTo("style",this);_.G(_.me,function(a){_.J.forward(b.R,a,b)});this.T=!1};oe=function(a){a.T||(a.T=!0,_.N("drawing_impl",function(b){b.$n(a)}))};
_.pe=function(a){this.j=a||[]};_.qe=function(a){this.j=a||[]};re=function(a){this.j=a||[]};_.se=function(a){this.j=a||[]};_.te=function(a){this.j=a||[]};ue=function(a,b){this.j=a;this.R=b||0};
xe=function(){var a=window.navigator.userAgent;this.V=a;this.j=this.type=0;this.version=new ue(0);this.U=new ue(0);for(var a=a.toLowerCase(),b=1;8>b;++b){var c=ve[b];if(-1!=a.indexOf(c)){this.type=b;var d=(new RegExp(c+"[ /]?([0-9]+).?([0-9]+)?")).exec(a);d&&(this.version=new ue((0,window.parseInt)(d[1],10),(0,window.parseInt)(d[2]||"0",10)));break}}7==this.type&&(b=/^Mozilla\/.*Gecko\/.*[Minefield|Shiretoko][ /]?([0-9]+).?([0-9]+)?/,d=b.exec(this.V))&&(this.type=5,this.version=new ue((0,window.parseInt)(d[1],
10),(0,window.parseInt)(d[2]||"0",10)));6==this.type&&(b=/rv:([0-9]{2,}.?[0-9]+)/,b=b.exec(this.V))&&(this.type=1,this.version=new ue((0,window.parseInt)(b[1],10)));for(b=1;7>b;++b)if(c=we[b],-1!=a.indexOf(c)){this.j=b;break}if(5==this.j||6==this.j||2==this.j)if(b=/OS (?:X )?(\d+)[_.]?(\d+)/.exec(this.V))this.U=new ue((0,window.parseInt)(b[1],10),(0,window.parseInt)(b[2]||"0",10));4==this.j&&(b=/Android (\d+)\.?(\d+)?/.exec(this.V))&&(this.U=new ue((0,window.parseInt)(b[1],10),(0,window.parseInt)(b[2]||
"0",10)));this.T=5==this.type||7==this.type;this.R=4==this.type||3==this.type;this.ta=0;this.T&&(d=/\brv:\s*(\d+\.\d+)/.exec(a))&&(this.ta=(0,window.parseFloat)(d[1]));this.ka=window.document.compatMode||"";this.$=1==this.j||2==this.j||3==this.j&&-1==a.toLowerCase().indexOf("mobile")};ye=_.oa("j");
_.Be=function(a,b){this.T=a;this.j=ze(b,["transform","WebkitTransform","MozTransform","msTransform"]);this.ua=ze(b,["WebkitUserSelect","MozUserSelect","msUserSelect"]);this.ka=ze(b,["transition","WebkitTransition","MozTransition","OTransition","msTransition"]);var c;a:{for(var d=["-webkit-linear-gradient","-moz-linear-gradient","-o-linear-gradient","-ms-linear-gradient"],e=b.createElement("div"),f=0,g;g=d[f];++f)try{if(e.style.background=g+"(left, #000, #fff)",-1!=e.style.background.indexOf(g)){c=
g;break a}}catch(h){}c=null}this.ta=c;this.$=Ae(b,"opacity");this.U=Ae(b,"borderRadius");c=window.document.getElementsByTagName("script")[0];d=c.style.color;c.style.color="";try{c.style.color="rgba(0, 0, 0, 0.5)"}catch(h){}e=c.style.color!=d;c.style.color=d;this.V=e};ze=function(a,b){for(var c=0,d;d=b[c];++c)if(Ae(a,d))return d;return null};Ae=function(a,b){return"string"==typeof a.documentElement.style[b]};_.Ce=_.k();_.De=function(){this.j=""};_.Ie=function(a){var b=new _.De;b.j=a;return b};
_.Ke=function(){this.eh="";this.Pl=_.Je;this.j=null};_.Le=function(a,b){var c=new _.Ke;c.eh=a;c.j=b;return c};_.Me=function(a,b){b.parentNode&&b.parentNode.insertBefore(a,b.nextSibling)};_.Ne=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};Oe=function(a,b,c,d,e){this.j=!!b;this.node=null;this.R=0;this.T=!1;this.U=!c;a&&this.setPosition(a,d);this.depth=void 0!=e?e:this.R||0;this.j&&(this.depth*=-1)};Pe=function(a,b,c,d){Oe.call(this,a,b,c,null,d)};
Re=function(a){for(var b;b=a.firstChild;)_.Qe(b),a.removeChild(b)};_.Se=function(a,b){a.innerHTML!=b&&(Re(a),a.innerHTML=b)};_.Qe=function(a){a=new Pe(a);try{for(;;)_.J.clearInstanceListeners(a.next())}catch(b){if(b!==_.Te)throw b;}};_.Ue=function(a,b){var c=a.style;c.width=b.width+b.T;c.height=b.height+b.R};_.Ve=function(a){return new _.P(a.offsetWidth,a.offsetHeight)};
_.V=function(a,b,c,d,e,f){var g;f=f||{};1==_.U.type&&9>window.document.documentMode&&("name"in f||"type"in f)&&(a="<"+a,"name"in f&&(a+=' name="'+f.name+'"',delete f.name),"type"in f&&(a+=' type="'+f.type+'"',delete f.type),a+=">");a=_.We(b).createElement(a);for(g in f)a.setAttribute(g,f[g]);c&&_.Xe(a,c);d&&_.Ue(a,d);b&&!e&&b.appendChild(a);return a};_.We=function(a){return a?9==a.nodeType?a:a.ownerDocument||window.document:window.document};
_.Xe=function(a,b,c,d){d||_.Ye(a);a=a.style;c=c?"right":"left";d=_.I(b.x);a[c]!=d&&(a[c]=d);b=_.I(b.y);a.top!=b&&(a.top=b)};_.Ye=function(a){a=a.style;"absolute"!=a.position&&(a.position="absolute")};Ze=function(a){if(!a)return null;var b;_.Ta(a)?(b=_.V("div"),b.style.overflow="auto",_.Se(b,a)):3==a.nodeType?(b=_.V("div"),b.appendChild(a)):b=a;return b};
$e=function(a,b){this.j=a;this.Be=b;a.addListener("map_changed",(0,_.u)(this.fp,this));this.bindTo("map",a);this.bindTo("disableAutoPan",a);this.bindTo("maxWidth",a);this.bindTo("position",a);this.bindTo("zIndex",a);this.bindTo("internalAnchor",a,"anchor");this.bindTo("internalContent",a,"content");this.bindTo("internalPixelOffset",a,"pixelOffset")};af=function(a,b,c,d){c?a.bindTo(b,c,d):(a.unbind(b),a.set(b,void 0))};
_.bf=function(a){function b(){e||(e=!0,_.N("infowindow",function(a){a.Em(d)}))}window.setTimeout(function(){_.N("infowindow",_.ta)},100);a=a||{};var c=!!a.Be;delete a.Be;var d=new $e(this,c),e=!1;_.J.addListenerOnce(this,"anchor_changed",b);_.J.addListenerOnce(this,"map_changed",b);this.setValues(a)};cf=function(a){this.setValues(a)};_.df=_.k();ef=_.k();ff=_.k();gf=_.k();_.hf=function(){_.N("geocoder",_.ta)};_.jf=function(a,b,c){this.wa=null;this.set("url",a);this.set("bounds",_.Ib(_.Gd)(b));this.setValues(c)};
kf=function(a,b){_.Ta(a)?(this.set("url",a),this.setValues(b)):this.setValues(a)};_.lf=function(){this.wa=null;_.N("layers",_.ta)};mf=function(a){this.wa=null;_.N("layers",_.ta);this.setValues(a)};nf=function(){this.wa=null;_.N("layers",_.ta)};of=function(a){this.j=a||[]};pf=function(a){this.j=a||[]};qf=function(a){this.j=a||[]};rf=function(a){this.j=a||[]};sf=function(a){this.j=a||[]};vf=function(){var a=tf().j[10],a=(a?new rf(a):uf).j[8];return null!=a?a:0};_.wf=function(a){this.j=a||[]};
_.xf=function(a){this.j=a||[]};_.yf=function(a){this.j=a||[]};_.Af=function(a){this.j=a||[]};Bf=function(a){this.j=a||[]};Cf=function(a){this.j=a||[]};Df=function(a){this.j=a||[]};Ef=function(a){this.j=a||[]};Ff=function(a){this.j=a||[]};_.Gf=function(a){this.j=a||[]};_.Hf=function(a){this.j=a||[]};_.If=function(a){a=a.j[0];return null!=a?a:""};_.Jf=function(a){a=a.j[1];return null!=a?a:""};_.Lf=function(){var a=_.Kf(_.W).j[9];return null!=a?a:""};
Mf=function(){var a=_.Kf(_.W).j[7];return null!=a?a:""};Nf=function(){var a=_.Kf(_.W).j[12];return null!=a?a:""};Of=function(a){a=a.j[0];return null!=a?a:""};_.Pf=function(a){a=a.j[1];return null!=a?a:""};Rf=function(){var a=_.W.j[4],a=(a?new Df(a):Qf).j[0];return null!=a?a:0};_.Sf=function(){var a=_.W.j[0];return null!=a?a:1};_.Tf=function(a){a=a.j[6];return null!=a?a:""};Uf=function(){var a=_.W.j[11];return null!=a?a:""};_.Vf=function(){var a=_.W.j[16];return null!=a?a:""};
_.Kf=function(a){return(a=a.j[2])?new Bf(a):Wf};_.Yf=function(){var a=_.W.j[3];return a?new Cf(a):Xf};tf=function(){var a=_.W.j[33];return a?new of(a):Zf};$f=function(a){return _.R(_.W.j,8)[a]};bg=function(){var a=_.W.j[36],a=(a?new Ff(a):ag).j[0];return null!=a?a:""};
eg=function(a,b){_.Cc.call(this);this.__gm=new _.K;this.T=null;b&&b.client&&(this.T=_.cg[b.client]||null);var c=this.controls=[];_.Ia(_.dg,function(a,b){c[b]=new _.xc});this.V=!0;this.R=a;this.setPov(new _.Bc(0,0,1));b&&b.Fc&&!_.E(b.Fc.zoom)&&(b.Fc.zoom=_.E(b.zoom)?b.zoom:1);this.setValues(b);void 0==this.getVisible()&&this.setVisible(!0);this.__gm.Qd=b&&b.Qd||new _.yc;_.J.addListenerOnce(this,"pano_changed",_.$a(function(){_.N("marker",(0,_.u)(function(a){a.j(this.__gm.Qd,this)},this))}))};
_.fg=function(){this.U=[];this.R=this.j=this.T=null};gg=function(a,b,c){this.Ja=b;this.j=new _.fd(new _.Ac([]));this.$=new _.yc;this.ya=new _.xc;this.ta=new _.yc;this.ua=new _.yc;this.U=new _.yc;var d=this.Qd=new _.yc;d.j=function(){delete d.j;_.N("marker",_.$a(function(b){b.j(d,a)}))};this.T=new eg(b,{visible:!1,enableCloseButton:!0,Qd:d});this.T.bindTo("reportErrorControl",a);this.T.V=!1;this.R=new _.fg;this.La=c};_.hg=function(){this.Ha=new bd};
_.ig=function(){this.j=new _.O(128,128);this.T=256/360;this.U=256/(2*Math.PI);this.R=!0};_.jg=function(a){this.Aa=this.Ba=window.Infinity;this.Fa=this.Da=-window.Infinity;_.G(a,(0,_.u)(this.extend,this))};_.kg=function(a,b,c,d){var e=new _.jg;e.Ba=a;e.Aa=b;e.Da=c;e.Fa=d;return e};_.lg=function(a,b,c){if(a=a.fromLatLngToPoint(b))c=Math.pow(2,c),a.x*=c,a.y*=c;return a};
_.mg=function(a,b){var c=a.lat()+_.Ub(b);90<c&&(c=90);var d=a.lat()-_.Ub(b);-90>d&&(d=-90);var e=Math.sin(b),f=Math.cos(_.L(a.lat()));if(90==c||-90==d||1E-6>f)return new _.Dd(new _.M(d,-180),new _.M(c,180));e=_.Ub(Math.asin(e/f));return new _.Dd(new _.M(d,a.lng()-e),new _.M(c,a.lng()+e))};_.ng=function(a){this.Nl=a||0;_.J.bind(this,"forceredraw",this,this.$)};og=function(a){this.j=a||[]};pg=function(a){this.j=a||[]};qg=function(a){this.j=a||[]};rg=function(a){this.j=a||[]};
sg=function(a){this.j=a||[]};tg=function(a,b,c,d){_.ng.call(this);this.V=b;this.U=new _.ig;this.ka=c+"/maps/api/js/StaticMapService.GetMapImage";this.R=this.j=null;this.T=d;this.set("div",a);this.set("loading",!0)};vg=function(a){var b=a.get("tilt")||a.get("mapMaker")||_.x(a.get("styles"));a=a.get("mapTypeId");return b?null:ug[a]};wg=function(a){a.parentNode&&a.parentNode.removeChild(a)};
xg=function(a,b,c,d,e){var f=_.X[15]?Nf():Mf();this.j=a;this.R=d;this.T=_.sa(e)?e:_.Ga();var g=f+"/csi?v=2&s=mapsapi3&v3v="+bg()+"&action="+a;_.Ic(c,function(a,b){g+="&"+(0,window.encodeURIComponent)(b)+"="+(0,window.encodeURIComponent)(a)});b&&(g+="&e="+b);this.U=g};_.zg=function(a,b){var c={};c[b]=void 0;_.yg(a,c)};
_.yg=function(a,b){var c="";_.Ic(b,function(a,b){var d=(null!=a?a:_.Ga())-this.T;c&&(c+=",");c+=b+"."+Math.round(d);null==a&&window.performance&&window.performance.mark&&window.performance.mark("mapsapi:"+this.j+":"+b)},a);var d=a.U+"&rt="+c;a.R.createElement("img").src=d;var e=_.Nc.__gm_captureCSI;e&&e(d)};
_.Ag=function(a,b){var c=b||{},d=c.Fp||{},e=_.R(_.W.j,12).join(",");e&&(d.libraries=e);var e=_.Tf(_.W),f=tf(),g=[];e&&g.push(e);_.Qb(f.W(),function(a,b){a&&_.Qb(a,function(a,c){null!=a&&g.push(b+1+"_"+(c+1)+"_"+a)})});c.vn&&(g=g.concat(c.vn));return new xg(a,g.join(","),d,c.document||window.document,c.startTime)};Fg=function(){this.R=_.Ag("apiboot2",{startTime:_.Bg});_.zg(this.R,"main");this.j=!1};Hg=function(){var a=Gg;a.j||(a.j=!0,_.zg(a.R,"firstmap"))};
Lg=function(a,b){var c=_.Ga();Gg&&Hg();var d=new _.hg;_.Hd.call(this,new gg(this,a,d));var e=b||{};_.D(e.mapTypeId)||(e.mapTypeId="roadmap");this.setValues(e);this.j=_.X[15]&&e.noControlsOrLogging;this.mapTypes=new vd;this.features=new _.K;_.Ig.push(a);this.notify("streetView");var f=_.Ve(a);e.noClear||Re(a);var g=null,h=!!_.W&&Jg(e.useStaticMap,f);_.W&&+vf()&&(h=!1);h&&(g=new tg(a,_.Kg,_.Lf(),new _.fd(null)),_.J.forward(g,"staticmaploaded",this),g.set("size",f),g.bindTo("center",this),g.bindTo("zoom",
this),g.bindTo("mapTypeId",this),g.bindTo("styles",this),g.bindTo("mapMaker",this));this.overlayMapTypes=new _.xc;var l=this.controls=[];_.Ia(_.dg,function(a,b){l[b]=new _.xc});var n=this,p=!0;_.N("map",function(a){a.R(n,e,g,p,c,d)});p=!1;this.data=new ne({map:this})};Jg=function(a,b){if(_.D(a))return!!a;var c=b.width,d=b.height;return 384E3>=c*d&&800>=c&&800>=d};Mg=function(){_.N("maxzoom",_.ta)};Ng=function(a,b){!a||_.Ta(a)||_.E(a)?(this.set("tableId",a),this.setValues(b)):this.setValues(a)};
_.Og=_.k();_.Pg=function(a){this.setValues(ce(a));_.N("poly",_.ta)};_.Qg=function(a){this.setValues(ce(a));_.N("poly",_.ta)};Rg=function(){this.j=null};_.Sg=function(){this.j=null};
_.Tg=function(a){this.tileSize=a.tileSize||new _.P(256,256);this.name=a.name;this.alt=a.alt;this.minZoom=a.minZoom;this.maxZoom=a.maxZoom;this.T=(0,_.u)(a.getTileUrl,a);this.j=new _.yc;this.R=null;this.set("opacity",a.opacity);_.Nc.window&&_.J.addDomListener(window,"online",(0,_.u)(this.Bp,this));var b=this;_.N("map",function(a){var d=b.R=a.j,e=b.tileSize||new _.P(256,256);b.j.forEach(function(a){var c=a.__gmimt,h=c.Na,l=c.zoom,n=b.T(h,l);c.Gc=d(h,l,e,a,n,function(){_.J.trigger(a,"load")})})})};
Ug=function(a,b){null!=a.style.opacity?a.style.opacity=b:a.style.filter=b&&"alpha(opacity="+Math.round(100*b)+")"};Vg=function(a){a=a.get("opacity");return"number"==typeof a?a:1};_.Wg=_.k();_.Xg=function(a,b){this.set("styles",a);var c=b||{};this.j=c.baseMapTypeId||"roadmap";this.minZoom=c.minZoom;this.maxZoom=c.maxZoom||20;this.name=c.name;this.alt=c.alt;this.projection=null;this.tileSize=new _.P(256,256)};
_.Yg=function(a,b){_.Gb(Cb,"container is not a Node")(a);this.setValues(b);_.N("controls",(0,_.u)(function(b){b.Um(this,a)},this))};Zg=_.oa("j");$g=function(a,b,c){for(var d=Array(b.length),e=0,f=b.length;e<f;++e)d[e]=b.charCodeAt(e);d.unshift(c);a=a.j;c=b=0;for(e=d.length;c<e;++c)b*=1729,b+=d[c],b%=a;return b};
ch=function(){var a=Rf(),b=new Zg(131071),c=(0,window.unescape)("%26%74%6F%6B%65%6E%3D");return function(d){d=d.replace(ah,"%27");var e=d+c;bh||(bh=/(?:https?:\/\/[^/]+)?(.*)/);d=bh.exec(d);return e+$g(b,d&&d[1],a)}};dh=function(){var a=new Zg(2147483647);return function(b){return $g(a,b,0)}};eh=function(a){for(var b=a.split("."),c=window,d=window,e=0;e<b.length;e++)if(d=c,c=c[b[e]],!c)throw _.zb(a+" is not a function");return function(){c.apply(d)}};
fh=function(){for(var a in Object.prototype)window.console&&window.console.error("This site adds property <"+a+"> to Object.prototype. Extending Object.prototype breaks JavaScript for..in loops, which are used heavily in Google Maps API v3.")};gh=function(a){(a="version"in a)&&window.console&&window.console.error("You have included the Google Maps API multiple times on this page. This may cause unexpected errors.");return a};_.qa=[];_.Nc=this;Ba="closure_uid_"+(1E9*Math.random()>>>0);Ca=0;var lb,mb;_.J={};lb="undefined"!=typeof window.navigator&&-1!=window.navigator.userAgent.toLowerCase().indexOf("msie");mb={};_.J.addListener=function(a,b,c){return new nb(a,b,c,0)};_.J.hasListeners=function(a,b){var c=a.__e3_,c=c&&c[b];return!!c&&!_.Ka(c)};_.J.removeListener=function(a){a&&a.remove()};_.J.clearListeners=function(a,b){_.Ia(hb(a,b),function(a,b){b&&b.remove()})};_.J.clearInstanceListeners=function(a){_.Ia(hb(a),function(a,c){c&&c.remove()})};
_.J.trigger=function(a,b,c){if(_.J.hasListeners(a,b)){var d=_.Va(arguments,2),e=hb(a,b),f;for(f in e){var g=e[f];g&&g.j.apply(g.Pb,d)}}};_.J.addDomListener=function(a,b,c,d){if(a.addEventListener){var e=d?4:1;a.addEventListener(b,c,d);c=new nb(a,b,c,e)}else a.attachEvent?(c=new nb(a,b,c,2),a.attachEvent("on"+b,ob(c))):(a["on"+b]=c,c=new nb(a,b,c,3));return c};_.J.addDomListenerOnce=function(a,b,c,d){var e=_.J.addDomListener(a,b,function(){e.remove();return c.apply(this,arguments)},d);return e};
_.J.Ka=function(a,b,c,d){return _.J.addDomListener(a,b,ib(c,d))};_.J.bind=function(a,b,c,d){return _.J.addListener(a,b,(0,_.u)(d,c))};_.J.addListenerOnce=function(a,b,c){var d=_.J.addListener(a,b,function(){d.remove();return c.apply(this,arguments)});return d};_.J.forward=function(a,b,c){return _.J.addListener(a,b,jb(b,c))};_.J.Gb=function(a,b,c,d){return _.J.addDomListener(a,b,jb(b,c,!d))};_.J.tk=function(){var a=mb,b;for(b in a)a[b].remove();mb={};(a=_.Nc.CollectGarbage)&&a()};
_.J.Tp=function(){lb&&_.J.addDomListener(window,"unload",_.J.tk)};var kb=0;nb.prototype.remove=function(){if(this.Pb){switch(this.U){case 1:this.Pb.removeEventListener(this.R,this.j,!1);break;case 4:this.Pb.removeEventListener(this.R,this.j,!0);break;case 2:this.Pb.detachEvent("on"+this.R,this.T);break;case 3:this.Pb["on"+this.R]=null}delete gb(this.Pb,this.R)[this.id];this.T=this.j=this.Pb=null;delete mb[this.id]}};_.t=_.K.prototype;_.t.get=function(a){var b=vb(this);a=a+"";b=ab(b,a);if(_.D(b)){if(b){a=b.lc;var b=b.Rd,c="get"+_.ub(a);return b[c]?b[c]():b.get(a)}return this[a]}};_.t.set=function(a,b){var c=vb(this);a=a+"";var d=ab(c,a);if(d){var c=d.lc,d=d.Rd,e="set"+_.ub(c);if(d[e])d[e](b);else d.set(c,b)}else this[a]=b,c[a]=null,sb(this,a)};_.t.notify=function(a){var b=vb(this);a=a+"";(b=ab(b,a))?b.Rd.notify(b.lc):sb(this,a)};
_.t.setValues=function(a){for(var b in a){var c=a[b],d="set"+_.ub(b);if(this[d])this[d](c);else this.set(b,c)}};_.t.setOptions=_.K.prototype.setValues;_.t.changed=_.k();var tb={};_.K.prototype.bindTo=function(a,b,c,d){a=a+"";c=(c||a)+"";this.unbind(a);var e={Rd:this,lc:a},f={Rd:b,lc:c,Hi:e};vb(this)[a]=f;qb(b,c)[_.pb(e)]=e;d||sb(this,a)};_.K.prototype.unbind=function(a){var b=vb(this),c=b[a];c&&(c.Hi&&delete qb(c.Rd,c.lc)[_.pb(c.Hi)],this[a]=this.get(a),b[a]=null)};
_.K.prototype.unbindAll=function(){var a=(0,_.u)(this.unbind,this),b=vb(this),c;for(c in b)a(c)};_.K.prototype.addListener=function(a,b){return _.J.addListener(this,a,b)};_.hh={ROADMAP:"roadmap",SATELLITE:"satellite",HYBRID:"hybrid",TERRAIN:"terrain"};_.dg={TOP_LEFT:1,TOP_CENTER:2,TOP:2,TOP_RIGHT:3,LEFT_CENTER:4,LEFT_TOP:5,LEFT:5,LEFT_BOTTOM:6,RIGHT_TOP:7,RIGHT:7,RIGHT_CENTER:8,RIGHT_BOTTOM:9,BOTTOM_LEFT:10,BOTTOM_CENTER:11,BOTTOM:11,BOTTOM_RIGHT:12,CENTER:13};var ih={mr:"Point",kr:"LineString",POLYGON:"Polygon"};_.v(yb,Error);_.rc=_.Gb(_.E,"not a number");_.jh=_.Gb(_.Ta,"not a string");_.kh=_.Ib(_.rc);_.lh=_.Ib(_.jh);_.mh=_.Ib(_.Gb(_.Ua,"not a boolean"));var Vb=_.Bb({lat:_.rc,lng:_.rc},!0);_.M.prototype.toString=function(){return"("+this.lat()+", "+this.lng()+")"};_.M.prototype.toJSON=function(){return{lat:this.lat(),lng:this.lng()}};_.M.prototype.j=function(a){return a?_.Na(this.lat(),a.lat())&&_.Na(this.lng(),a.lng()):!1};_.M.prototype.equals=_.M.prototype.j;_.M.prototype.toUrlValue=function(a){a=_.D(a)?a:6;return Yb(this.lat(),a)+","+Yb(this.lng(),a)};_.Od=_.Fb(_.Zb);_.v(_.$b,xb);_.$b.prototype.getType=_.pa("Point");_.$b.prototype.get=_.m("j");var Md=_.Fb(ac);_.ua(ic);ic.prototype.Tc=function(a,b){var c=this,d=c.V;jc(c.T,function(e){for(var f=e.zj[a]||[],g=e.aq[a]||[],h=d[a]=_.bc(f.length,function(){delete d[a];b(e.Ym);for(var f=c.R[a],h=f?f.length:0,l=0;l<h;++l)f[l](c.j[a]);delete c.R[a];l=0;for(f=g.length;l<f;++l)h=g[l],d[h]&&d[h]()}),l=0,n=f.length;l<n;++l)c.j[f[l]]&&h()})};_.t=_.qc.prototype;_.t.getId=_.m("T");_.t.getGeometry=_.m("j");_.t.setGeometry=function(a){var b=this.j;try{this.j=a?ac(a):null}catch(c){_.Ab(c);return}_.J.trigger(this,"setgeometry",{feature:this,newGeometry:this.j,oldGeometry:b})};_.t.getProperty=function(a){return ab(this.R,a)};_.t.setProperty=function(a,b){if(void 0===b)this.removeProperty(a);else{var c=this.getProperty(a);this.R[a]=b;_.J.trigger(this,"setproperty",{feature:this,name:a,newValue:b,oldValue:c})}};
_.t.removeProperty=function(a){var b=this.getProperty(a);delete this.R[a];_.J.trigger(this,"removeproperty",{feature:this,name:a,oldValue:b})};_.t.forEachProperty=function(a){for(var b in this.R)a(this.getProperty(b),b)};_.t.toGeoJson=function(a){var b=this;_.N("data",function(c){c.R(b,a)})};_.nh=new _.O(0,0);_.O.prototype.toString=function(){return"("+this.x+", "+this.y+")"};_.O.prototype.j=function(a){return a?a.x==this.x&&a.y==this.y:!1};_.O.prototype.equals=_.O.prototype.j;_.O.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y)};_.O.prototype.Qf=_.ra(0);_.oh=new _.P(0,0);_.P.prototype.toString=function(){return"("+this.width+", "+this.height+")"};_.P.prototype.j=function(a){return a?a.width==this.width&&a.height==this.height:!1};_.P.prototype.equals=_.P.prototype.j;var ph={CIRCLE:0,FORWARD_CLOSED_ARROW:1,FORWARD_OPEN_ARROW:2,BACKWARD_CLOSED_ARROW:3,BACKWARD_OPEN_ARROW:4};_.v(_.xc,_.K);_.t=_.xc.prototype;_.t.getAt=function(a){return this.j[a]};_.t.indexOf=function(a){for(var b=0,c=this.j.length;b<c;++b)if(a===this.j[b])return b;return-1};_.t.forEach=function(a){for(var b=0,c=this.j.length;b<c;++b)a(this.j[b],b)};_.t.setAt=function(a,b){var c=this.j[a],d=this.j.length;if(a<d)this.j[a]=b,_.J.trigger(this,"set_at",a,c),this.U&&this.U(a,c);else{for(c=d;c<a;++c)this.insertAt(c,void 0);this.insertAt(a,b)}};
_.t.insertAt=function(a,b){this.j.splice(a,0,b);wc(this);_.J.trigger(this,"insert_at",a);this.R&&this.R(a)};_.t.removeAt=function(a){var b=this.j[a];this.j.splice(a,1);wc(this);_.J.trigger(this,"remove_at",a,b);this.T&&this.T(a,b);return b};_.t.push=function(a){this.insertAt(this.j.length,a);return this.j.length};_.t.pop=function(){return this.removeAt(this.j.length-1)};_.t.getArray=_.m("j");_.t.clear=function(){for(;this.get("length");)this.pop()};_.vc(_.xc.prototype,{length:null});_.yc.prototype.remove=function(a){var b=this.R,c=this.T(a);b[c]&&(delete b[c],_.J.trigger(this,"remove",a),this.onRemove&&this.onRemove(a))};_.yc.prototype.contains=function(a){return!!this.R[this.T(a)]};_.yc.prototype.forEach=function(a){var b=this.R,c;for(c in b)a.call(this,b[c])};_.Ac.prototype.mc=_.ra(1);_.Ac.prototype.forEach=function(a,b){_.Qb(this.j,function(c,d){a.call(b,c,d)})};var qh=_.Bb({zoom:_.kh,heading:_.rc,pitch:_.rc});_.v(_.Cc,_.K);var rh=function(a){return function(){return a}}(null);a:{var sh=_.Nc.navigator;if(sh){var th=sh.userAgent;if(th){_.Lb=th;break a}}_.Lb=""};var Zc;Qc.prototype.get=function(){var a;0<this.R?(this.R--,a=this.j,this.j=a.next,a.next=null):a=this.T();return a};var $c=new Qc(function(){return new Sc},function(a){a.reset()},100);Rc.prototype.add=function(a,b){var c=$c.get();c.set(a,b);this.R?this.R.next=c:this.j=c;this.R=c};Rc.prototype.remove=function(){var a=null;this.j&&(a=this.j,this.j=this.j.next,this.j||(this.R=null),a.next=null);return a};Sc.prototype.set=function(a,b){this.Md=a;this.j=b;this.next=null};Sc.prototype.reset=function(){this.next=this.j=this.Md=null};var Tc,Vc=!1,Wc=new Rc;bd.prototype.addListener=function(a,b,c){c=c?{Ki:!1}:null;var d=!this.Ha.length,e;e=this.Ha;var f=Rb(e,ad(a,b));(e=0>f?null:_.xa(e)?e.charAt(f):e[f])?e.Me=e.Me&&c:this.Ha.push({Md:a,context:b||null,Me:c});d&&this.R();return a};bd.prototype.addListenerOnce=function(a,b){this.addListener(a,b,!0);return a};bd.prototype.removeListener=function(a,b){if(this.Ha.length){var c=this.Ha,d=Rb(c,ad(a,b));0<=d&&_.Sb(c,d);this.Ha.length||this.j()}};_.t=_.dd.prototype;_.t.Le=_.k();_.t.Je=_.k();_.t.addListener=function(a,b){return this.Ha.addListener(a,b)};_.t.addListenerOnce=function(a,b){return this.Ha.addListenerOnce(a,b)};_.t.removeListener=function(a,b){return this.Ha.removeListener(a,b)};_.t.Tf=function(){_.cd(this.Ha,function(a){a(this.get())},this,{xq:!0})};_.v(_.ed,_.dd);_.ed.prototype.set=function(a){this.ek(a);this.notify()};_.ed.prototype.notify=function(){this.Tf()};_.v(_.fd,_.ed);_.fd.prototype.get=_.m("j");_.fd.prototype.ek=_.oa("j");_.v(gd,_.K);var vh;_.uh=new kd;vh=/'/g;kd.prototype.j=function(a,b){var c=[];md(a,b,c);return c.join("&").replace(vh,"%27")};var Hh,pd,Lh;_.wh=_.Kc();_.xh=_.Lc();_.yh=_.Jc("Edge");_.zh=_.Jc("Gecko")&&!(_.Mb()&&!_.Jc("Edge"))&&!(_.Jc("Trident")||_.Jc("MSIE"))&&!_.Jc("Edge");_.Ah=_.Mb()&&!_.Jc("Edge");_.Bh=_.Jc("Macintosh");_.Ch=_.Jc("Windows");_.Dh=_.Jc("Linux")||_.Jc("CrOS");_.Eh=_.Jc("Android");_.Fh=_.nd();_.Gh=_.Jc("iPad");
a:{var Ih="",Jh=function(){var a=_.Lb;if(_.zh)return/rv\:([^\);]+)(\)|;)/.exec(a);if(_.yh)return/Edge\/([\d\.]+)/.exec(a);if(_.xh)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(_.Ah)return/WebKit\/(\S+)/.exec(a);if(_.wh)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Jh&&(Ih=Jh?Jh[1]:"");if(_.xh){var Kh=od();if(null!=Kh&&Kh>(0,window.parseFloat)(Ih)){Hh=String(Kh);break a}}Hh=Ih}_.qd=Hh;pd={};Lh=_.Nc.document;_.Mh=Lh&&_.xh?od()||("CSS1Compat"==Lh.compatMode?(0,window.parseInt)(_.qd,10):5):void 0;_.Nh=_.Jc("Firefox");_.Oh=_.nd()||_.Jc("iPod");_.Ph=_.Jc("iPad");_.Qh=_.Jc("Android")&&!(Mc()||_.Jc("Firefox")||_.Kc()||_.Jc("Silk"));_.Rh=Mc();_.Sh=_.Jc("Safari")&&!(Mc()||_.Jc("Coast")||_.Kc()||_.Jc("Edge")||_.Jc("Silk")||_.Jc("Android"))&&!(_.nd()||_.Jc("iPad")||_.Jc("iPod"));_.ud.prototype.heading=_.m("j");_.ud.prototype.Ib=_.ra(2);_.ud.prototype.toString=function(){return this.j+","+this.R};_.Th=new _.ud;_.v(vd,_.K);vd.prototype.set=function(a,b){if(null!=b&&!(b&&_.E(b.maxZoom)&&b.tileSize&&b.tileSize.width&&b.tileSize.height&&b.getTile&&b.getTile.apply))throw Error("Expected value implementing google.maps.MapType");return _.K.prototype.set.apply(this,arguments)};_.t=wd.prototype;_.t.isEmpty=function(){return 360==this.j-this.R};_.t.intersects=function(a){var b=this.j,c=this.R;return this.isEmpty()||a.isEmpty()?!1:_.xd(this)?_.xd(a)||a.j<=this.R||a.R>=b:_.xd(a)?a.j<=c||a.R>=b:a.j<=c&&a.R>=b};_.t.contains=function(a){-180==a&&(a=180);var b=this.j,c=this.R;return _.xd(this)?(a>=b||a<=c)&&!this.isEmpty():a>=b&&a<=c};_.t.extend=function(a){this.contains(a)||(this.isEmpty()?this.j=this.R=a:_.Ad(a,this.j)<_.Ad(this.R,a)?this.j=a:this.R=a)};
_.t.Lc=function(){var a=(this.j+this.R)/2;_.xd(this)&&(a=_.Ma(a+180,-180,180));return a};_.t=Bd.prototype;_.t.isEmpty=function(){return this.R>this.j};_.t.intersects=function(a){var b=this.R,c=this.j;return b<=a.R?a.R<=c&&a.R<=a.j:b<=a.j&&b<=c};_.t.contains=function(a){return a>=this.R&&a<=this.j};_.t.extend=function(a){this.isEmpty()?this.j=this.R=a:a<this.R?this.R=a:a>this.j&&(this.j=a)};_.t.Lc=function(){return(this.j+this.R)/2};_.t=_.Dd.prototype;_.t.getCenter=function(){return new _.M(this.R.Lc(),this.j.Lc())};_.t.toString=function(){return"("+this.getSouthWest()+", "+this.getNorthEast()+")"};_.t.toJSON=function(){return{south:this.R.R,west:this.j.j,north:this.R.j,east:this.j.R}};_.t.toUrlValue=function(a){var b=this.getSouthWest(),c=this.getNorthEast();return[b.toUrlValue(a),c.toUrlValue(a)].join()};
_.t.$k=function(a){if(!a)return!1;a=_.Gd(a);var b=this.R,c=a.R;return(b.isEmpty()?c.isEmpty():1E-9>=Math.abs(c.R-b.R)+Math.abs(b.j-c.j))&&_.zd(this.j,a.j)};_.Dd.prototype.equals=_.Dd.prototype.$k;_.t=_.Dd.prototype;_.t.contains=function(a){return this.R.contains(a.lat())&&this.j.contains(a.lng())};_.t.intersects=function(a){a=_.Gd(a);return this.R.intersects(a.R)&&this.j.intersects(a.j)};_.t.extend=function(a){this.R.extend(a.lat());this.j.extend(a.lng());return this};
_.t.union=function(a){a=_.Gd(a);if(!a||a.isEmpty())return this;this.extend(a.getSouthWest());this.extend(a.getNorthEast());return this};_.t.getSouthWest=function(){return new _.M(this.R.R,this.j.j,!0)};_.t.getNorthEast=function(){return new _.M(this.R.j,this.j.R,!0)};_.t.toSpan=function(){return new _.M(_.Cd(this.R),_.yd(this.j),!0)};_.t.isEmpty=function(){return this.R.isEmpty()||this.j.isEmpty()};var Fd=_.Bb({south:_.rc,west:_.rc,north:_.rc,east:_.rc},!1);_.v(_.Hd,_.K);_.Ig=[];_.t=Id.prototype;_.t.contains=function(a){return this.j.hasOwnProperty(_.pb(a))};_.t.getFeatureById=function(a){return ab(this.R,a)};
_.t.add=function(a){a=a||{};a=a instanceof _.qc?a:new _.qc(a);if(!this.contains(a)){var b=a.getId();if(b){var c=this.getFeatureById(b);c&&this.remove(c)}c=_.pb(a);this.j[c]=a;b&&(this.R[b]=a);var d=_.J.forward(a,"setgeometry",this),e=_.J.forward(a,"setproperty",this),f=_.J.forward(a,"removeproperty",this);this.T[c]=function(){_.J.removeListener(d);_.J.removeListener(e);_.J.removeListener(f)};_.J.trigger(this,"addfeature",{feature:a})}return a};
_.t.remove=function(a){var b=_.pb(a),c=a.getId();if(this.j[b]){delete this.j[b];c&&delete this.R[c];if(c=this.T[b])delete this.T[b],c();_.J.trigger(this,"removefeature",{feature:a})}};_.t.forEach=function(a){for(var b in this.j)a(this.j[b])};Kd.prototype.get=function(a){return this.j[a]};Kd.prototype.set=function(a,b){var c=this.j;c[a]||(c[a]={});_.Ja(c[a],b);_.J.trigger(this,"changed",a)};Kd.prototype.reset=function(a){delete this.j[a];_.J.trigger(this,"changed",a)};Kd.prototype.forEach=function(a){_.Ia(this.j,a)};_.v(Ld,_.K);Ld.prototype.overrideStyle=function(a,b){this.j.set(_.pb(a),b)};Ld.prototype.revertStyle=function(a){a?this.j.reset(_.pb(a)):this.j.forEach((0,_.u)(this.j.reset,this.j))};_.v(_.Nd,xb);_.Nd.prototype.getType=_.pa("GeometryCollection");_.Nd.prototype.getLength=function(){return this.j.length};_.Nd.prototype.getAt=function(a){return this.j[a]};_.Nd.prototype.getArray=function(){return this.j.slice()};_.v(_.Pd,xb);_.Pd.prototype.getType=_.pa("LineString");_.Pd.prototype.getLength=function(){return this.j.length};_.Pd.prototype.getAt=function(a){return this.j[a]};_.Pd.prototype.getArray=function(){return this.j.slice()};var Qd=_.Fb(_.Db(_.Pd,"google.maps.Data.LineString",!0));_.v(_.Td,xb);_.Td.prototype.getType=_.pa("MultiLineString");_.Td.prototype.getLength=function(){return this.j.length};_.Td.prototype.getAt=function(a){return this.j[a]};_.Td.prototype.getArray=function(){return this.j.slice()};_.v(_.Ud,xb);_.Ud.prototype.getType=_.pa("MultiPoint");_.Ud.prototype.getLength=function(){return this.j.length};_.Ud.prototype.getAt=function(a){return this.j[a]};_.Ud.prototype.getArray=function(){return this.j.slice()};_.v(_.Vd,xb);_.Vd.prototype.getType=_.pa("LinearRing");_.Vd.prototype.getLength=function(){return this.j.length};_.Vd.prototype.getAt=function(a){return this.j[a]};_.Vd.prototype.getArray=function(){return this.j.slice()};var Wd=_.Fb(_.Db(_.Vd,"google.maps.Data.LinearRing",!0));_.v(_.Xd,xb);_.Xd.prototype.getType=_.pa("Polygon");_.Xd.prototype.getLength=function(){return this.j.length};_.Xd.prototype.getAt=function(a){return this.j[a]};_.Xd.prototype.getArray=function(){return this.j.slice()};var Yd=_.Fb(_.Db(_.Xd,"google.maps.Data.Polygon",!0));_.v(_.Zd,xb);_.Zd.prototype.getType=_.pa("MultiPolygon");_.Zd.prototype.getLength=function(){return this.j.length};_.Zd.prototype.getAt=function(a){return this.j[a]};_.Zd.prototype.getArray=function(){return this.j.slice()};var Uh=_.Bb({source:_.jh,webUrl:_.lh,iosDeepLinkId:_.lh});var Vh=_.Ha(_.Bb({placeId:_.lh,query:_.lh,location:_.Zb}),function(a){if(a.placeId&&a.query)throw _.zb("cannot set both placeId and query");if(!a.placeId&&!a.query)throw _.zb("must set one of placeId or query");return a});_.v($d,_.K);
_.vc($d.prototype,{position:_.Ib(_.Zb),title:_.lh,icon:_.Ib(_.Hb(_.jh,{Yh:Jb("url"),then:_.Bb({url:_.jh,scaledSize:_.Ib(tc),size:_.Ib(tc),origin:_.Ib(sc),anchor:_.Ib(sc),labelOrigin:_.Ib(sc),path:_.Gb(Ra)},!0)},{Yh:Jb("path"),then:_.Bb({path:_.Hb(_.jh,_.Eb(ph)),anchor:_.Ib(sc),labelOrigin:_.Ib(sc),fillColor:_.lh,fillOpacity:_.kh,rotation:_.kh,scale:_.kh,strokeColor:_.lh,strokeOpacity:_.kh,strokeWeight:_.kh,url:_.Gb(Ra)},!0)})),label:_.Ib(_.Hb(_.jh,{Yh:Jb("text"),then:_.Bb({text:_.jh,fontSize:_.lh,fontWeight:_.lh,
fontFamily:_.lh},!0)})),shadow:_.Gc,shape:_.Gc,cursor:_.lh,clickable:_.mh,animation:_.Gc,draggable:_.mh,visible:_.mh,flat:_.Gc,zIndex:_.kh,opacity:_.kh,place:_.Ib(Vh),attribution:_.Ib(Uh)});var lc={main:[],common:["main"],util:["common"],adsense:["main"],controls:["util"],data:["util"],directions:["util","geometry"],distance_matrix:["util"],drawing:["main"],drawing_impl:["controls"],elevation:["util","geometry"],geocoder:["util"],geojson:["main"],imagery_viewer:["main"],geometry:["main"],infowindow:["util"],kml:["onion","util","map"],layers:["map"],map:["common"],marker:["util"],maxzoom:["util"],onion:["util","map"],overlay:["common"],panoramio:["main"],places:["main"],places_impl:["controls"],
poly:["util","map","geometry"],search:["main"],search_impl:["onion"],stats:["util"],streetview:["util","geometry"],usage:["util"],visualization:["main"],visualization_impl:["onion"],weather:["main"],zombie:["main"]};var Wh=_.Nc.google.maps,Xh=ic.Nc(),Yh=(0,_.u)(Xh.Tc,Xh);Wh.__gjsload__=Yh;_.Ia(Wh.modules,Yh);delete Wh.modules;_.Zh=_.Ib(_.Db(_.Hd,"Map"));var $h=_.Ib(_.Db(_.Cc,"StreetViewPanorama"));_.v(_.be,$d);_.be.prototype.map_changed=function(){this.__gm.set&&this.__gm.set.remove(this);var a=this.get("map");this.__gm.set=a&&a.__gm.Qd;this.__gm.set&&_.zc(this.__gm.set,this)};_.be.MAX_ZINDEX=1E6;_.vc(_.be.prototype,{map:_.Hb(_.Zh,$h)});var ee=ge(_.Db(_.M,"LatLng"));_.v(ie,_.K);ie.prototype.map_changed=ie.prototype.visible_changed=function(){var a=this;_.N("poly",function(b){b.R(a)})};ie.prototype.getPath=function(){return this.get("latLngs").getAt(0)};ie.prototype.setPath=function(a){try{this.get("latLngs").setAt(0,fe(a))}catch(b){_.Ab(b)}};_.vc(ie.prototype,{draggable:_.mh,editable:_.mh,map:_.Zh,visible:_.mh});_.v(_.je,ie);_.je.prototype.Bb=!0;_.je.prototype.getPaths=function(){return this.get("latLngs")};_.je.prototype.setPaths=function(a){this.set("latLngs",he(a))};_.v(_.ke,ie);_.ke.prototype.Bb=!1;_.me="click dblclick mousedown mousemove mouseout mouseover mouseup rightclick".split(" ");_.v(ne,_.K);_.t=ne.prototype;_.t.contains=function(a){return this.j.contains(a)};_.t.getFeatureById=function(a){return this.j.getFeatureById(a)};_.t.add=function(a){return this.j.add(a)};_.t.remove=function(a){this.j.remove(a)};_.t.forEach=function(a){this.j.forEach(a)};_.t.addGeoJson=function(a,b){return _.le(this.j,a,b)};_.t.loadGeoJson=function(a,b,c){var d=this.j;_.N("data",function(e){e.xn(d,a,b,c)})};_.t.toGeoJson=function(a){var b=this.j;_.N("data",function(c){c.un(b,a)})};
_.t.overrideStyle=function(a,b){this.R.overrideStyle(a,b)};_.t.revertStyle=function(a){this.R.revertStyle(a)};_.t.controls_changed=function(){this.get("controls")&&oe(this)};_.t.drawingMode_changed=function(){this.get("drawingMode")&&oe(this)};_.vc(ne.prototype,{map:_.Zh,style:_.Gc,controls:_.Ib(_.Fb(_.Eb(ih))),controlPosition:_.Ib(_.Eb(_.dg)),drawingMode:_.Ib(_.Eb(ih))});_.pe.prototype.W=_.m("j");_.qe.prototype.W=_.m("j");_.ai=new _.pe;_.bi=new _.pe;re.prototype.W=_.m("j");_.ci=new _.se;_.se.prototype.W=_.m("j");_.di=new _.pe;_.ei=new re;_.te.prototype.W=_.m("j");_.fi=new _.qe;_.gi=new _.te;_.hi={METRIC:0,IMPERIAL:1};_.ii={DRIVING:"DRIVING",WALKING:"WALKING",BICYCLING:"BICYCLING",TRANSIT:"TRANSIT"};_.ji={BEST_GUESS:"bestguess",OPTIMISTIC:"optimistic",PESSIMISTIC:"pessimistic"};_.ki={BUS:"BUS",RAIL:"RAIL",SUBWAY:"SUBWAY",TRAIN:"TRAIN",TRAM:"TRAM"};_.li={LESS_WALKING:"LESS_WALKING",FEWER_TRANSFERS:"FEWER_TRANSFERS"};var mi=_.Bb({routes:_.Fb(_.Gb(_.Sa))},!0);var ve,we;ve={0:"",1:"msie",3:"chrome",4:"applewebkit",5:"firefox",6:"trident",7:"mozilla",2:"edge"};we={0:"",1:"x11",2:"macintosh",3:"windows",4:"android",5:"iphone",6:"ipad"};_.U=null;"undefined"!=typeof window.navigator&&(_.U=new xe);_.t=ye.prototype;_.t.vq=_.Hc(function(){var a=new window.Image;return _.sa(a.crossOrigin)});_.t.wq=_.Hc(function(){return _.sa(window.document.createElement("span").draggable)});_.t.eo=_.Hc(function(){try{var a=window.document.createElement("canvas").getContext("2d"),b=a.getImageData(0,0,1,1);b.data[0]=b.data[1]=b.data[2]=100;b.data[3]=64;a.putImageData(b,0,0);b=a.getImageData(0,0,1,1);return 95>b.data[0]||105<b.data[0]}catch(c){return!1}});_.t.Sn=_.Hc(function(){try{return!!window.document.createEvent("WheelEvent").initWheelEvent}catch(a){return!1}});
_.t.Tn=_.Hc(function(){try{return new window.WheelEvent("wheel"),!0}catch(a){return!1}});_.ni=_.U?new ye(_.U):null;_.Be.prototype.R=_.ra(3);_.oi=_.U?new _.Be(_.U,window.document):null;_.Te="StopIteration"in _.Nc?_.Nc.StopIteration:{message:"StopIteration",stack:""};_.Ce.prototype.next=function(){throw _.Te;};_.Ce.prototype.Eg=function(){return this};_.De.prototype.hh=!0;_.De.prototype.Oc=_.ra(5);_.De.prototype.pj=!0;_.De.prototype.Ff=_.ra(7);_.Ie("about:blank");_.Ke.prototype.pj=!0;_.Ke.prototype.Ff=_.ra(6);_.Ke.prototype.hh=!0;_.Ke.prototype.Oc=_.ra(4);_.Je={};_.Le("<!DOCTYPE html>",0);_.Le("",0);_.Le("<br>",0);!_.zh&&!_.xh||_.xh&&9<=Number(_.Mh)||_.zh&&_.td("1.9.1");_.xh&&_.td("9");_.v(Oe,_.Ce);Oe.prototype.setPosition=function(a,b,c){if(this.node=a)this.R=_.ya(b)?b:1!=this.node.nodeType?0:this.j?-1:1;_.ya(c)&&(this.depth=c)};
Oe.prototype.next=function(){var a;if(this.T){if(!this.node||this.U&&0==this.depth)throw _.Te;a=this.node;var b=this.j?-1:1;if(this.R==b){var c=this.j?a.lastChild:a.firstChild;c?this.setPosition(c):this.setPosition(a,-1*b)}else(c=this.j?a.previousSibling:a.nextSibling)?this.setPosition(c):this.setPosition(a.parentNode,-1*b);this.depth+=this.R*(this.j?-1:1)}else this.T=!0;a=this.node;if(!this.node)throw _.Te;return a};
Oe.prototype.splice=function(a){var b=this.node,c=this.j?1:-1;this.R==c&&(this.R=-1*c,this.depth+=this.R*(this.j?-1:1));this.j=!this.j;Oe.prototype.next.call(this);this.j=!this.j;for(var c=_.wa(arguments[0])?arguments[0]:arguments,d=c.length-1;0<=d;d--)_.Me(c[d],b);_.Ne(b)};_.v(Pe,Oe);Pe.prototype.next=function(){do Pe.ud.next.call(this);while(-1==this.R);return this.node};_.pi=_.Nc.document&&_.Nc.document.createElement("div");_.v($e,_.K);_.t=$e.prototype;_.t.internalAnchor_changed=function(){var a=this.get("internalAnchor");af(this,"attribution",a);af(this,"place",a);af(this,"internalAnchorMap",a,"map");af(this,"internalAnchorPoint",a,"anchorPoint");a instanceof _.be?af(this,"internalAnchorPosition",a,"internalPosition"):af(this,"internalAnchorPosition",a,"position")};
_.t.internalAnchorPoint_changed=$e.prototype.internalPixelOffset_changed=function(){var a=this.get("internalAnchorPoint")||_.nh,b=this.get("internalPixelOffset")||_.oh;this.set("pixelOffset",new _.P(b.width+Math.round(a.x),b.height+Math.round(a.y)))};_.t.internalAnchorPosition_changed=function(){var a=this.get("internalAnchorPosition");a&&this.set("position",a)};_.t.internalAnchorMap_changed=function(){this.get("internalAnchor")&&this.j.set("map",this.get("internalAnchorMap"))};
_.t.fp=function(){var a=this.get("internalAnchor");!this.j.get("map")&&a&&a.get("map")&&this.set("internalAnchor",null)};_.t.internalContent_changed=function(){this.set("content",Ze(this.get("internalContent")))};_.t.trigger=function(a){_.J.trigger(this.j,a)};_.t.close=function(){this.j.set("map",null)};_.v(_.bf,_.K);_.vc(_.bf.prototype,{content:_.Hb(_.lh,_.Gb(Cb)),position:_.Ib(_.Zb),size:_.Ib(tc),map:_.Hb(_.Zh,$h),anchor:_.Ib(_.Db(_.K,"MVCObject")),zIndex:_.kh});_.bf.prototype.open=function(a,b){this.set("anchor",b);this.get("map")!=a&&this.set("map",a)};_.bf.prototype.close=function(){this.set("map",null)};_.v(cf,_.K);cf.prototype.changed=function(a){if("map"==a||"panel"==a){var b=this;_.N("directions",function(c){c.R(b,a)})}};_.vc(cf.prototype,{directions:mi,map:_.Zh,panel:_.Ib(_.Gb(Cb)),routeIndex:_.kh});_.qi=new _.df;ef.prototype.route=function(a,b){_.N("directions",function(c){c.j(a,b,!0)})};ff.prototype.getDistanceMatrix=function(a,b){_.N("distance_matrix",function(c){c.j(a,b)})};gf.prototype.getElevationAlongPath=function(a,b){_.N("elevation",function(c){c.j(a,b)})};gf.prototype.getElevationForLocations=function(a,b){_.N("elevation",function(c){c.R(a,b)})};_.ri=_.Db(_.Dd,"LatLngBounds");_.hf.prototype.geocode=function(a,b){_.N("geocoder",function(c){c.geocode(a,b)})};_.v(_.jf,_.K);_.jf.prototype.map_changed=function(){var a=this;_.N("kml",function(b){b.j(a)})};_.vc(_.jf.prototype,{map:_.Zh,url:null,bounds:null,opacity:_.kh});_.ti={UNKNOWN:"UNKNOWN",OK:_.ha,INVALID_REQUEST:_.ca,DOCUMENT_NOT_FOUND:"DOCUMENT_NOT_FOUND",FETCH_ERROR:"FETCH_ERROR",INVALID_DOCUMENT:"INVALID_DOCUMENT",DOCUMENT_TOO_LARGE:"DOCUMENT_TOO_LARGE",LIMITS_EXCEEDED:"LIMITS_EXECEEDED",TIMED_OUT:"TIMED_OUT"};_.v(kf,_.K);_.t=kf.prototype;_.t.df=function(){var a=this;_.N("kml",function(b){b.R(a)})};_.t.url_changed=kf.prototype.df;_.t.driveFileId_changed=kf.prototype.df;_.t.map_changed=kf.prototype.df;_.t.zIndex_changed=kf.prototype.df;_.vc(kf.prototype,{map:_.Zh,defaultViewport:null,metadata:null,status:null,url:_.lh,screenOverlays:_.mh,zIndex:_.kh});_.v(_.lf,_.K);_.lf.prototype.map_changed=function(){var a=this;_.N("layers",function(b){b.j(a)})};_.vc(_.lf.prototype,{map:_.Zh});_.v(mf,_.K);mf.prototype.map_changed=function(){var a=this;_.N("layers",function(b){b.R(a)})};_.vc(mf.prototype,{map:_.Zh});_.v(nf,_.K);nf.prototype.map_changed=function(){var a=this;_.N("layers",function(b){b.T(a)})};_.vc(nf.prototype,{map:_.Zh});_.cg={japan_prequake:20,japan_postquake2010:24};_.ui={NEAREST:"nearest",BEST:"best"};_.vi={DEFAULT:"default",OUTDOOR:"outdoor"};var wi,xi,yi,zi,Ai;of.prototype.W=_.m("j");var Bi=new pf,Ci=new qf,uf=new rf,Di=new sf;pf.prototype.W=_.m("j");qf.prototype.W=_.m("j");rf.prototype.W=_.m("j");sf.prototype.W=_.m("j");_.wf.prototype.W=_.m("j");_.Ei=new _.wf;_.Fi=new _.wf;var Wf,Xf,Qf,Zf,ag;_.xf.prototype.W=_.m("j");_.xf.prototype.getUrl=function(a){return _.R(this.j,0)[a]};_.xf.prototype.setUrl=function(a,b){_.R(this.j,0)[a]=b};_.yf.prototype.W=_.m("j");_.Af.prototype.W=_.m("j");_.Li=new _.xf;_.Mi=new _.xf;_.Ni=new _.xf;_.Oi=new _.xf;_.Pi=new _.xf;Bf.prototype.W=_.m("j");Cf.prototype.W=_.m("j");Df.prototype.W=_.m("j");Ef.prototype.W=_.m("j");_.Qi=new _.Af;_.Ri=new _.yf;Wf=new Bf;Xf=new Cf;Qf=new Df;_.Si=new _.Gf;_.Ti=new _.Hf;Zf=new of;ag=new Ff;Ff.prototype.W=_.m("j");
_.Gf.prototype.W=_.m("j");_.Hf.prototype.W=_.m("j");_.v(eg,_.Cc);eg.prototype.visible_changed=function(){var a=this;!a.$&&a.getVisible()&&(a.$=!0,_.N("streetview",function(b){var c;a.T&&(c=a.T);b.Cp(a,c)}))};_.vc(eg.prototype,{visible:_.mh,pano:_.lh,position:_.Ib(_.Zb),pov:_.Ib(qh),photographerPov:null,location:null,links:_.Fb(_.Gb(_.Sa)),status:null,zoom:_.kh,enableCloseButton:_.mh});eg.prototype.registerPanoProvider=_.uc("panoProvider");_.t=_.fg.prototype;_.t.pf=_.ra(8);_.t.xc=_.ra(9);_.t.Ve=_.ra(10);_.t.Ue=_.ra(11);_.t.Te=_.ra(12);_.v(gg,gd);_.hg.prototype.addListener=function(a,b){this.Ha.addListener(a,b)};_.hg.prototype.addListenerOnce=function(a,b){this.Ha.addListenerOnce(a,b)};_.hg.prototype.removeListener=function(a,b){this.Ha.removeListener(a,b)};_.hg.prototype.j=_.ra(13);_.X={};_.ig.prototype.fromLatLngToPoint=function(a,b){var c=b||new _.O(0,0),d=this.j;c.x=d.x+a.lng()*this.T;var e=_.La(Math.sin(_.L(a.lat())),-(1-1E-15),1-1E-15);c.y=d.y+.5*Math.log((1+e)/(1-e))*-this.U;return c};_.ig.prototype.fromPointToLatLng=function(a,b){var c=this.j;return new _.M(_.Ub(2*Math.atan(Math.exp((a.y-c.y)/-this.U))-Math.PI/2),(a.x-c.x)/this.T,b)};_.jg.prototype.isEmpty=function(){return!(this.Ba<this.Da&&this.Aa<this.Fa)};_.jg.prototype.extend=function(a){a&&(this.Ba=Math.min(this.Ba,a.x),this.Da=Math.max(this.Da,a.x),this.Aa=Math.min(this.Aa,a.y),this.Fa=Math.max(this.Fa,a.y))};_.jg.prototype.getCenter=function(){return new _.O((this.Ba+this.Da)/2,(this.Aa+this.Fa)/2)};_.Ui=_.kg(-window.Infinity,-window.Infinity,window.Infinity,window.Infinity);_.Vi=_.kg(0,0,0,0);_.v(_.ng,_.K);_.ng.prototype.Ca=function(){var a=this;a.ta||(a.ta=window.setTimeout(function(){a.ta=void 0;a.Ma()},a.Nl))};_.ng.prototype.$=function(){this.ta&&window.clearTimeout(this.ta);this.ta=void 0;this.Ma()};var Wi,Xi;og.prototype.W=_.m("j");pg.prototype.W=_.m("j");var Yi=new og;var Zi,$i;qg.prototype.W=_.m("j");rg.prototype.W=_.m("j");var aj;sg.prototype.W=_.m("j");sg.prototype.getZoom=function(){var a=this.j[2];return null!=a?a:0};sg.prototype.setZoom=function(a){this.j[2]=a};var bj=new qg,cj=new rg,dj=new pg,ej=new of;_.v(tg,_.ng);var ug={roadmap:0,satellite:2,hybrid:3,terrain:4},fj={0:1,2:2,3:2,4:2};_.t=tg.prototype;_.t.cj=_.Q("center");_.t.ri=_.Q("zoom");_.t.changed=function(){var a=this.cj(),b=this.ri(),c=vg(this);if(a&&!a.j(this.va)||this.ua!=b||this.ya!=c)wg(this.R),this.Ca(),this.ua=b,this.ya=c;this.va=a};
_.t.Ma=function(){var a="",b=this.cj(),c=this.ri(),d=vg(this),e=this.get("size");if(b&&(0,window.isFinite)(b.lat())&&(0,window.isFinite)(b.lng())&&1<c&&null!=d&&e&&e.width&&e.height&&this.j){_.Ue(this.j,e);var f;(b=_.lg(this.U,b,c))?(f=new _.jg,f.Ba=Math.round(b.x-e.width/2),f.Da=f.Ba+e.width,f.Aa=Math.round(b.y-e.height/2),f.Fa=f.Aa+e.height):f=null;b=fj[d];if(f){var a=new sg,g;a.j[0]=a.j[0]||[];g=new qg(a.j[0]);g.j[0]=f.Ba;g.j[1]=f.Aa;a.j[1]=b;a.setZoom(c);a.j[3]=a.j[3]||[];c=new rg(a.j[3]);c.j[0]=
f.Da-f.Ba;c.j[1]=f.Fa-f.Aa;a.j[4]=a.j[4]||[];c=new pg(a.j[4]);c.j[0]=d;c.j[4]=_.If(_.Kf(_.W));c.j[5]=_.Jf(_.Kf(_.W)).toLowerCase();c.j[9]=!0;c.j[11]=!0;d=this.ka+(0,window.unescape)("%3F");aj||(c=[],aj={qa:-1,ra:c},Zi||(b=[],Zi={qa:-1,ra:b},b[1]={type:"i",label:1,S:0},b[2]={type:"i",label:1,S:0}),c[1]={type:"m",label:1,S:bj,ma:Zi},c[2]={type:"e",label:1,S:0},c[3]={type:"u",label:1,S:0},$i||(b=[],$i={qa:-1,ra:b},b[1]={type:"u",label:1,S:0},b[2]={type:"u",label:1,S:0},b[3]={type:"e",label:1,S:1}),c[4]=
{type:"m",label:1,S:cj,ma:$i},Xi||(b=[],Xi={qa:-1,ra:b},b[1]={type:"e",label:1,S:0},b[2]={type:"b",label:1,S:!1},b[3]={type:"b",label:1,S:!1},b[5]={type:"s",label:1,S:""},b[6]={type:"s",label:1,S:""},Wi||(f=[],Wi={qa:-1,ra:f},f[1]={type:"e",label:3},f[2]={type:"b",label:1,S:!1}),b[9]={type:"m",label:1,S:Yi,ma:Wi},b[10]={type:"b",label:1,S:!1},b[11]={type:"b",label:1,S:!1},b[12]={type:"b",label:1,S:!1},b[100]={type:"b",label:1,S:!1}),c[5]={type:"m",label:1,S:dj,ma:Xi},wi||(b=[],wi={qa:-1,ra:b},xi||
(f=[],xi={qa:-1,ra:f},f[1]={type:"b",label:1,S:!1}),b[1]={type:"m",label:1,S:Bi,ma:xi},yi||(f=[],yi={qa:-1,ra:f},f[1]={type:"b",label:1,S:!1}),b[12]={type:"m",label:1,S:Ci,ma:yi},zi||(f=[],zi={qa:-1,ra:f},f[9]={type:"j",label:1,S:0},f[10]={type:"j",label:1,S:0},f[14]={type:"s",label:1,S:""}),b[11]={type:"m",label:1,S:uf,ma:zi},Ai||(f=[],Ai={qa:-1,ra:f},f[1]={type:"b",label:1,S:!1},f[2]={type:"b",label:1,S:!1}),b[10]={type:"m",label:1,S:Di,ma:Ai}),c[6]={type:"m",label:1,S:ej,ma:wi});a=_.uh.j(a.j,aj);
a=this.V(d+a)}}this.R&&e&&(_.Ue(this.R,e),e=a,a=this.R,e!=a.src?(wg(a),a.onload=_.Xa(this,this.ti,!0),a.onerror=_.Xa(this,this.ti,!1),a.src=e):!a.parentNode&&e&&this.j.appendChild(a))};_.t.ti=function(a){var b=this.R;b.onload=null;b.onerror=null;a&&(b.parentNode||this.j.appendChild(b),_.Ue(b,this.get("size")),_.J.trigger(this,"staticmaploaded"),this.T.set(_.Ga()));this.set("loading",!1)};
_.t.div_changed=function(){var a=this.get("div"),b=this.j;if(a)if(b)a.appendChild(b);else{b=this.j=window.document.createElement("div");b.style.overflow="hidden";var c=this.R=window.document.createElement("img");_.J.addDomListener(b,"contextmenu",function(a){_.db(a);_.fb(a)});c.ontouchstart=c.ontouchmove=c.ontouchend=c.ontouchcancel=function(a){_.eb(a);_.fb(a)};_.Ue(c,_.oh);a.appendChild(b);this.Ma()}else b&&(wg(b),this.j=null)};var Gg;_.v(Lg,_.Hd);_.t=Lg.prototype;_.t.streetView_changed=function(){this.get("streetView")||this.set("streetView",this.__gm.T)};_.t.getDiv=function(){return this.__gm.Ja};_.t.panBy=function(a,b){var c=this.__gm;_.N("map",function(){_.J.trigger(c,"panby",a,b)})};_.t.panTo=function(a){var b=this.__gm;a=_.Zb(a);_.N("map",function(){_.J.trigger(b,"panto",a)})};_.t.panToBounds=function(a){var b=this.__gm,c=_.Gd(a);_.N("map",function(){_.J.trigger(b,"pantolatlngbounds",c)})};
_.t.fitBounds=function(a){var b=this;a=_.Gd(a);_.N("map",function(c){c.fitBounds(b,a)})};_.vc(Lg.prototype,{bounds:null,streetView:$h,center:_.Ib(_.Zb),zoom:_.kh,mapTypeId:_.lh,projection:null,heading:_.kh,tilt:_.kh});Mg.prototype.getMaxZoomAtLatLng=function(a,b){_.N("maxzoom",function(c){c.getMaxZoomAtLatLng(a,b)})};_.v(Ng,_.K);Ng.prototype.changed=function(a){if("suppressInfoWindows"!=a&&"clickable"!=a){var b=this;_.N("onion",function(a){a.j(b)})}};_.vc(Ng.prototype,{map:_.Zh,tableId:_.kh,query:_.Ib(_.Hb(_.jh,_.Gb(_.Sa,"not an Object")))});_.v(_.Og,_.K);_.Og.prototype.map_changed=function(){var a=this;_.N("overlay",function(b){b.j(a)})};_.vc(_.Og.prototype,{panes:null,projection:null,map:_.Hb(_.Zh,$h)});_.v(_.Pg,_.K);_.Pg.prototype.map_changed=_.Pg.prototype.visible_changed=function(){var a=this;_.N("poly",function(b){b.j(a)})};_.Pg.prototype.center_changed=function(){_.J.trigger(this,"bounds_changed")};_.Pg.prototype.radius_changed=_.Pg.prototype.center_changed;_.Pg.prototype.getBounds=function(){var a=this.get("radius"),b=this.get("center");if(b&&_.E(a)){var c=this.get("map"),c=c&&c.__gm.get("mapType");return _.mg(b,a/_.de(c))}return null};
_.vc(_.Pg.prototype,{center:_.Ib(_.Zb),draggable:_.mh,editable:_.mh,map:_.Zh,radius:_.kh,visible:_.mh});_.v(_.Qg,_.K);_.Qg.prototype.map_changed=_.Qg.prototype.visible_changed=function(){var a=this;_.N("poly",function(b){b.T(a)})};_.vc(_.Qg.prototype,{draggable:_.mh,editable:_.mh,bounds:_.Ib(_.Gd),map:_.Zh,visible:_.mh});_.v(Rg,_.K);Rg.prototype.map_changed=function(){var a=this;_.N("streetview",function(b){b.Fm(a)})};_.vc(Rg.prototype,{map:_.Zh});_.Sg.prototype.getPanorama=function(a,b){var c=this.j||void 0;_.N("streetview",function(d){_.N("geometry",function(e){d.En(a,b,e.computeHeading,e.computeOffset,c)})})};_.Sg.prototype.getPanoramaByLocation=function(a,b,c){this.getPanorama({location:a,radius:b,preference:50>(b||0)?"best":"nearest"},c)};_.Sg.prototype.getPanoramaById=function(a,b){this.getPanorama({pano:a},b)};_.v(_.Tg,_.K);_.t=_.Tg.prototype;_.t.getTile=function(a,b,c){if(!a||!c)return null;var d=c.createElement("div");c={Na:a,zoom:b,Gc:null};d.__gmimt=c;_.zc(this.j,d);var e=Vg(this);1!=e&&Ug(d,e);if(this.R){var e=this.tileSize||new _.P(256,256),f=this.T(a,b);c.Gc=this.R(a,b,e,d,f,function(){_.J.trigger(d,"load")})}return d};_.t.releaseTile=function(a){a&&this.j.contains(a)&&(this.j.remove(a),(a=a.__gmimt.Gc)&&a.release())};_.t.Wg=_.ra(14);_.t.Bp=function(){this.R&&this.j.forEach(function(a){a.__gmimt.Gc.kc()})};
_.t.opacity_changed=function(){var a=Vg(this);this.j.forEach(function(b){Ug(b,a)})};_.t.$d=!0;_.vc(_.Tg.prototype,{opacity:_.kh});_.v(_.Wg,_.K);_.Wg.prototype.getTile=rh;_.Wg.prototype.tileSize=new _.P(256,256);_.Wg.prototype.$d=!0;_.v(_.Xg,_.Wg);_.v(_.Yg,_.K);_.vc(_.Yg.prototype,{attribution:_.Ib(Uh),place:_.Ib(Vh)});var hj={Animation:{BOUNCE:1,DROP:2,nr:3,lr:4},Circle:_.Pg,ControlPosition:_.dg,Data:ne,GroundOverlay:_.jf,ImageMapType:_.Tg,InfoWindow:_.bf,LatLng:_.M,LatLngBounds:_.Dd,MVCArray:_.xc,MVCObject:_.K,Map:Lg,MapTypeControlStyle:{DEFAULT:0,HORIZONTAL_BAR:1,DROPDOWN_MENU:2,INSET:3,INSET_LARGE:4},MapTypeId:_.hh,MapTypeRegistry:vd,Marker:_.be,MarkerImage:function(a,b,c,d,e){this.url=a;this.size=b||e;this.origin=c;this.anchor=d;this.scaledSize=e;this.labelOrigin=null},NavigationControlStyle:{DEFAULT:0,SMALL:1,
ANDROID:2,ZOOM_PAN:3,or:4,mm:5},OverlayView:_.Og,Point:_.O,Polygon:_.je,Polyline:_.ke,Rectangle:_.Qg,ScaleControlStyle:{DEFAULT:0},Size:_.P,StreetViewPreference:_.ui,StreetViewSource:_.vi,StrokePosition:{CENTER:0,INSIDE:1,OUTSIDE:2},SymbolPath:ph,ZoomControlStyle:{DEFAULT:0,SMALL:1,LARGE:2,mm:3},event:_.J};
_.Ja(hj,{BicyclingLayer:_.lf,DirectionsRenderer:cf,DirectionsService:ef,DirectionsStatus:{OK:_.ha,UNKNOWN_ERROR:_.ka,OVER_QUERY_LIMIT:_.ia,REQUEST_DENIED:_.ja,INVALID_REQUEST:_.ca,ZERO_RESULTS:_.la,MAX_WAYPOINTS_EXCEEDED:_.fa,NOT_FOUND:_.ga},DirectionsTravelMode:_.ii,DirectionsUnitSystem:_.hi,DistanceMatrixService:ff,DistanceMatrixStatus:{OK:_.ha,INVALID_REQUEST:_.ca,OVER_QUERY_LIMIT:_.ia,REQUEST_DENIED:_.ja,UNKNOWN_ERROR:_.ka,MAX_ELEMENTS_EXCEEDED:_.ea,MAX_DIMENSIONS_EXCEEDED:_.da},DistanceMatrixElementStatus:{OK:_.ha,
NOT_FOUND:_.ga,ZERO_RESULTS:_.la},ElevationService:gf,ElevationStatus:{OK:_.ha,UNKNOWN_ERROR:_.ka,OVER_QUERY_LIMIT:_.ia,REQUEST_DENIED:_.ja,INVALID_REQUEST:_.ca,ir:"DATA_NOT_AVAILABLE"},FusionTablesLayer:Ng,Geocoder:_.hf,GeocoderLocationType:{ROOFTOP:"ROOFTOP",RANGE_INTERPOLATED:"RANGE_INTERPOLATED",GEOMETRIC_CENTER:"GEOMETRIC_CENTER",APPROXIMATE:"APPROXIMATE"},GeocoderStatus:{OK:_.ha,UNKNOWN_ERROR:_.ka,OVER_QUERY_LIMIT:_.ia,REQUEST_DENIED:_.ja,INVALID_REQUEST:_.ca,ZERO_RESULTS:_.la,ERROR:_.ba},KmlLayer:kf,
KmlLayerStatus:_.ti,MaxZoomService:Mg,MaxZoomStatus:{OK:_.ha,ERROR:_.ba},SaveWidget:_.Yg,StreetViewCoverageLayer:Rg,StreetViewPanorama:eg,StreetViewService:_.Sg,StreetViewStatus:{OK:_.ha,UNKNOWN_ERROR:_.ka,ZERO_RESULTS:_.la},StyledMapType:_.Xg,TrafficLayer:mf,TrafficModel:_.ji,TransitLayer:nf,TransitMode:_.ki,TransitRoutePreference:_.li,TravelMode:_.ii,UnitSystem:_.hi});_.Ja(ne,{Feature:_.qc,Geometry:xb,GeometryCollection:_.Nd,LineString:_.Pd,LinearRing:_.Vd,MultiLineString:_.Td,MultiPoint:_.Ud,MultiPolygon:_.Zd,Point:_.$b,Polygon:_.Xd});var ah=/'/g,bh;_.nc("main",{});window.google.maps.Load(function(a,b){var c=window.google.maps;fh();var d=gh(c);_.W=new Ef(a);_.ij=Math.random()<_.Sf();_.jj=Math.round(1E15*Math.random()).toString(36);_.Kg=ch();_.si=dh();_.gj=new _.xc;_.Bg=b;for(var e=0;e<_.jd(_.W.j,8);++e)_.X[$f(e)]=!0;e=_.Yf();ae(Of(e));_.Ia(hj,function(a,b){c[a]=b});c.version=_.Pf(e);window.setTimeout(function(){oc(["util","stats"],function(a,b){a.R.j();a.T();d&&b.j.j({ev:"api_alreadyloaded",client:_.Tf(_.W),key:_.Vf()})})},5E3);_.J.Tp();Gg=new Fg;(e=Uf())&&
oc(_.R(_.W.j,12),eh(e),!0)});}).call(this,{});


var app = angular.module('mapsApp', ["ui.bootstrap", "ngAnimate"]);
var module = angular.module("mapsApp");
module.factory("mapsProp", ['$http', function ($http)
    {
        var message, deferredObj, arrayTimeLayer = {};
        var getProjects = function (lat, lon, minDistance, maxDistance) {
            var res = {
                "filters": {
                    "and": [
                        {
                            "geoDistance": {
                                "geo": {
                                    "distance": parseFloat(maxDistance),
                                    "lat": lat,
                                    "lon": lon,
                                    "minDistance": parseFloat(minDistance)
                                }
                            }
                    }]
                },
                "paging": {
                    "start": 0,
                    "rows": 200
                },
                "fields": []
            };
            res = JSON.stringify(res);
            var propLink = "https://www.proptiger.com/app/v2/project-listing?selector=";
            return $http.get(propLink + res).then(function (response) {
                return response.data;
            });
        };
        var getTypeDownData = function (string) {
            var city = localStorage.getItem('city');
            return $http.get("https://www.proptiger.com/columbus/app/v4/typeahead?query=" + string + "&typeAheadType=LOCALITY,SUBURB&rows=25&city=" + city).then(function (response) {
                return response.data;
            });
        };
        var getDistTime = function (coordsOrigin, coordsDestination, ref, scope, infoWindow, source) {
            var ans = {};
            var origin = new google.maps.LatLng(coordsOrigin.latitude, coordsOrigin.longitude);
            var destination = new google.maps.LatLng(coordsDestination.latitude, coordsDestination.longitude);

            var service = new google.maps.DistanceMatrixService();
            service.getDistanceMatrix({
                origins: [origin],
                destinations: [destination],
                travelMode: google.maps.TravelMode.DRIVING,
            }, callback);

            function callback(response, status) {
                if (status == google.maps.DistanceMatrixStatus.OK) {
                    ans = {
                        distance: response.rows[0].elements[0].distance,
                        duration: response.rows[0].elements[0].duration
                    };

                    var destName = source || coordsDestination.name;
                    if (destName == source) {
                        destName += " (Source)"
                        infoWindow.setContent('<div><strong>' + destName + '</strong></div>');
                        infoWindow.open(scope.map, ref);
                    } else {
                        infoWindow.setContent('<div><strong>' + destName + '</strong><br>' +
                            'Distance :' + ans.distance.text + '  Time :' + ans.duration.text + '</div>');
                        infoWindow.open(scope.map, ref);
                    }
                }
            };
        };
        var setTimeLayer = function (array) {
            arrayTimeLayer = array;
        };
        var getTimeLayer = function () {
            var k = arrayTimeLayer;
            arrayTimeLayer = [];
            return k;
        };
        var setMessage = function (msg) {
            message = msg;
        };
        var getMessage = function () {
            return message;
        };
        var setDeferredObject = function (obj) {
            deferredObj = obj;
        };
        var getDeferredObject = function () {
            return deferredObj;
        };
        return {
            setTimeLayer: setTimeLayer,
            getTimeLayer: getTimeLayer,
            setDeferredObject: setDeferredObject,
            getDeferredObject: getDeferredObject,
            getProjects: getProjects,
            getTypeDownData: getTypeDownData,
            getDistTime: getDistTime,
            setMessage: setMessage,
            getMessage: getMessage
        };
}]);
var app = angular.module('mapsApp');
app.controller('searchCtrl', ['$scope', 'mapsProp', '$rootScope', 'PtMapsConfig',
function ($scope, mapsProp, $rootScope, PtMapsConfig) {
        $scope.cities = [
        "Gurgaon",
        "Bangalore",
        "Mumbai",
        "Pune"
        ];
        $scope.message = '';
        var city;
        $scope.time = [];
        for (var i = 0; i < PtMapsConfig.travelHeatMapConfig.timeSequence.length; i++)
            $scope.time.push(PtMapsConfig.travelHeatMapConfig.timeSequence[i]);

        $scope.setCity = function (k) {
            $scope.searchResults = [];
            localStorage.setItem('city', k);
        }

        $scope.message = mapsProp.getMessage();
        var type, distance, time, project;

        $scope.setProject = function (val) {
            $scope.string = val.coreText;
            project = val;
            $scope.searchResults = [];
            $scope.tab = 2;

        };
        $rootScope.$on('showMessage', function (event, args) {
            $scope.message = args.messageContent;
        })
        $scope.setValTime = function (val) {
            console.log(val.add[0].range);
            time = val.add[0].range;
            $scope.updateCompletion = '';

        };

        $scope.updateCompletion = '';
        $rootScope.$on('showUpdateProgress', function (event, args) {
            $scope.updateCompletion = (args.val.angle * 100) / (2 * Math.PI);;
        });
        $scope.search = function (string) {
            $scope.searchResults = [];
            mapsProp.getTypeDownData(string).then(function (result) {
                $scope.searchResults = result.data;
                console.log($scope.searchResults.length);
                if ($scope.searchResults.length == 0 && string) {
                    $scope.message = 'No results returned';
                } else {
                    $scope.message = '';
                }
            });
        };
        $scope.find = function () {
            $scope.message = '';
            $scope.searchResults = [];
            $scope.searchResults.push(project);
            var res = {
                time: time,
            };
            localStorage.setItem('timetype', JSON.stringify(res));
            localStorage.setItem('project', JSON.stringify(project));
            $rootScope.$broadcast("positionSuccess", {});

        };
}]);
app.directive('search', function () {
    return {
        templateUrl: 'templates/search.html',
        controller: "searchCtrl",
    };
});
var app = angular.module('mapsApp');
app.controller('showMapCtrl', ['$scope', "mapsProp", "$rootScope", 'timeSenseService', '$q', 'PtMapsConfig',
                               function ($scope, mapsProp, $rootScope, timeSenseService, $q, PtMapsConfig) {
        $scope.n = "";
        var project, distance, timetype;
        var results = [];
        var markers = [];
        var infoWindow, map;
        var lt = 28.443;
        var ln = 77.0500;
        infoWindow = new google.maps.InfoWindow();
        var options = {
            center: {
                lat: lt,
                lng: ln
            },
            zoom: 8,
        }

        var getMaxDistance = function (source, arr) {
            var maxDist = -1;
            for (var i = 0; i < arr.length; i++) {
                var dist = PtMapsConfig.distanceBetweenPoints(source, arr[i]);
                if (dist > maxDist) {
                    maxDist = dist;
                }
            }
            return maxDist;
        }

        $scope.map = new google.maps.Map(document.getElementById('map'), options);
        map = $scope.map;


        var getTime = function (obj) {
            var minDistance, maxDistance;
            var arr = obj.time.split('-');
            var time = arr[1];
            return time;
        };

        var polygon, d;

        var positionSuccess = function () {
            bounds = new google.maps.LatLngBounds();
            $scope.map = new google.maps.Map(document.getElementById('map'), options);
            map = $scope.map;

            project = localStorage.getItem('project');
            project = JSON.parse(project);
            var minDistance;
            var maxDistance;
            timetype = localStorage.getItem('timetype');
            timetype = JSON.parse(timetype);
            window.localStorage.clear();

            var latLng = new google.maps.LatLng(project.latitude, project.longitude);
            if (timetype) {
                var pol;
                d = getTime(timetype);
                d = parseInt(d, 10);
                var deferred = $q.defer();
                mapsProp.setDeferredObject(deferred);
                deferred.promise.then(resolve, fail);

                function resolve(result) {
                    pol = mapsProp.getTimeLayer();
                    var arr = [];
                    for (var i = 0; i < pol[d].length; i++) {
                        arr[i] = {
                            lat: pol[d][i].latitude,
                            lng: pol[d][i].longitude,
                        }
                    }

                    makePolygon(arr);
                    var projectLatLng = {
                        lat: project.latitude,
                        lng: project.longitude,
                    }
                    maxDistance = getMaxDistance(projectLatLng, arr);
                    minDistance = 0;
                    results = mapsProp.getProjects(project.latitude, project.longitude, minDistance, maxDistance);
                    results.then(function (result) {
                        results = result.data;
                        results = results.items
                        manage(results, arr);
                    });
                }

                function fail(reason) {
                    console.log(pol);
                }
                timeSenseService.drawTimeSense(d, project);
            }

            createMarker(project, 'red');
        };

        var makePolygon = function (pol) {
            console.log("polygon printed");
            polygon = new google.maps.Polygon({
                paths: pol,
                strokeColor: '#FF0000',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#FF0000',
                fillOpacity: 0.35
            });
            polygon.setMap(map);

        }

        var bounds = new google.maps.LatLngBounds();

        var manage = function (results, arr) {
            for (var i = 0; i < markers.length; i++) {
                markers[i].setMap(null);
            }
            markers = [];

            createMarker(project, 'red');
            console.log(project);
            var flag = 0;
            for (i = 0; i < results.length; i++) {
                var coordinate = new google.maps.LatLng(results[i].latitude, results[i].longitude);
                if (results[i].latitude != project.latitude && polygon.containsLatLng(coordinate)) {
                    createMarker(results[i], 'blue');
                    flag = 1;
                }
            }
            var markerCluster = new MarkerClusterer(map, markers);

            if (!flag) {
                $rootScope.$broadcast('showMessage', {
                    messageContent: 'no markers reachable within ' + d + ' minutes'
                });
            } else {
                map.fitBounds(bounds);

            }
            markers.push(projectMarker);
        }

        var applyEvent = function (project, info, marker, source) {
            google.maps.event.addListener(marker, 'mouseover', function () {
                mapsProp.getDistTime(project, info, this, $scope, infoWindow, source);
            });
            google.maps.event.addListener(marker, 'mouseout', function () {
                infoWindow.close($scope.map, infoWindow);
            });
        }

        var createMarker = function (info, type) {
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(info.latitude, info.longitude),
                icon: "http://maps.google.com/mapfiles/ms/icons/" + type + "-dot.png"
            });
            var source;
            if (type == 'red') {
                marker.setMap(map);
                projectMarker = marker;
                source = info.entityName;
            }
            if (type != 'red')
                markers.push(marker);

            bounds.extend(marker.getPosition());
            applyEvent(project, info, marker, source);
        };
        $rootScope.$on('positionSuccess', function () {
            positionSuccess();
        })
}]);
app.directive('maps', function () {
    return {
        templateUrl: 'templates/showMap.html',
        controller: 'showMapCtrl'
    };
});
var app = angular.module('mapsApp');
app.factory('PtMapsConfig', [function () {
    var accuracy = {
        V_HIGH: Math.PI / 24,
        HIGH: Math.PI / 12,
        MEDIUM: Math.PI / 6,
        LOW: Math.PI / 4
    };
    var travelHeatMapConfig = {
        directions: [
            {
                direction: 'EAST',
                lat: +0.5,
                lng: 0
              }, {
                direction: 'WEST',
                lat: -0.5,
                lng: 0
              }, {
                direction: 'NORTH',
                lat: 0,
                lng: +0.5
              }, {
                direction: 'SOUTH',
                lat: 0,
                lng: -0.5
              }
          ],
        delta: 0.5,
        timeLimit: 30,
        repeatThreshHold: 4,
        stepOutThreshold: 4,
        fitBoundTimeKey: 30,
        fitBoundRange: '20-30',
        timeSequence: [
            {
                time: 10,
                degree: accuracy.MEDIUM,
                add: [{
                        range: '0-10',
                        limits: [10],
                        fillColor: '#86b927',
                        strokeColor: '#86b927',
                        fillOpacity: 0.35,
                        strokeOpacity: 0.5,
                        strokeWeight: 0.1
                    }
                  ]
              }, {
                time: 20,
                degree: accuracy.HIGH,
                add: [{
                        range: '0-20',
                        limits: [0, 20],
                        fillColor: '#bfb51d',
                        strokeColor: '#bfb51d',
                        fillOpacity: 0.35,
                        strokeOpacity: 0.5,
                        strokeWeight: 0.1
                    }
                  ]
              }, {
                time: 30,
                degree: accuracy.HIGH,
                add: [{
                        range: '0-30',
                        limits: [0, 30],
                        fillColor: '#b25317',
                        strokeColor: '#b25317',
                        fillOpacity: 0.35,
                        strokeOpacity: 0.5,
                        strokeWeight: 0.1
                    }
                  ]
              }
          ]
    };
    var distanceBetweenPoints = function (pointA, pointB) {
        if (!pointA || !pointB) {
            return 0;
        }
        var R = 6371; // Radius of the Earth in km
        var dLat = (pointB.lat - pointA.lat) * Math.PI / 180;
        var dLon = (pointB.lng - pointA.lng) * Math.PI / 180;
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(pointA.lat * Math.PI / 180) * Math.cos(pointB.lat * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d;
    };
    return {
        distanceBetweenPoints: distanceBetweenPoints,
        travelHeatMapConfig: travelHeatMapConfig,
    };

  }]);
var app = angular.module('mapsApp');
app.factory('mapDistanceMatrix', ['$q', function ($q) {
    var factory = {},
        service;

    factory.fetch = function (origin, destination) {
        service = new google.maps.DistanceMatrixService();
        var originLatLng = new google.maps.LatLng(origin.latitude, origin.longitude);
        var destLatLng = new google.maps.LatLng(destination.latitude, destination.longitude);
        var request = {
            origins: [originLatLng],
            destinations: [destLatLng],
            travelMode: google.maps.TravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.METRIC,
            avoidHighways: false,
            avoidTolls: false
        };
        var response;
        var deferred = $q.defer();
        service.getDistanceMatrix(request, function (results, status) {
            if (status === google.maps.DistanceMatrixStatus.OK) {
                response = {
                    status: 'OK',
                    results: results
                };
            } else {
                response = {
                    status: 'ERROR',
                    msg: 'Error fetching results'
                }
            }
            deferred.resolve(response);
        });
        return deferred.promise;
    };
    return factory;
}]);
'use strict'

var app = angular.module('mapsApp');
app.factory('timeSenseService', ['$q',
                                 'PtMapsConfig',
                                 '$rootScope',
                                 'mapDistanceMatrix',
                                 'mapsProp',
    function ($q, PtMapsConfig, $rootScope, mapDistanceMatrix, mapsProp) {
        var timeLimits;
        var travelTimePolygons;
        var travelTimeFlag;
        var travelTimeDefer;
        var map;
        var reachability = {};
        var ploygonOverlapFlag;
        var start, end;

        Math.log2 = Math.log2 || function (num) {
            return (Math.log(num) / Math.log(2));
        }
        var drawTimeSense = function (timeArg, data) {
            var mPromises = [];
            var heatMapConfig = PtMapsConfig.travelHeatMapConfig;
            var directions = heatMapConfig.directions;
            var destination;
            var i;
            var j;
            var len;
            var source = {
                latitude: data.latitude,
                longitude: data.longitude
            };
            for (i = 0, len = directions.length; i < len; i++) {
                destination = {
                    latitude: source.latitude + directions[i].lat,
                    longitude: source.longitude + directions[i].lng
                }
                mPromises.push(mapDistanceMatrix.fetch(source, destination));
            }

            start = new Date().getTime();

            $q.all(mPromises).then(function (responses) {
                var m = 0;
                var inverseSum = 0;
                var result;
                var time;
                var responsesCount = 0;
                travelTimeDefer = $q.defer();
                travelTimeFlag = true;
                timeLimits = {};
                travelTimePolygons = {};
                reachability = {};
                ploygonOverlapFlag = false;

                //Stop the process using promises on successful completion or failure
                travelTimeDefer.promise.then(function (result) { //success
                    var obj = mapsProp.getDeferredObject();
                    mapsProp.setTimeLayer(timeLimits);
                    obj.resolve();
                    return timeLimits;

                }, function (reason) { //failure
                    travelTimeFlag = false;
                    timeLimits = undefined;
                    console.log(reason);

                });
                for (j = 0, len = responses.length; j < len; j++) {
                    if (responses[j].status === 'OK') {
                        //Take all the times values and add their inverse time 
                        //to get the distance covered in one time minunte.
                        if (responses[j].results.rows[0].elements[0].duration) {
                            result = responses[j].results.rows[0].elements[0].duration.text.split(" ");
                            if (result.length === 4) {
                                time = parseInt(result[0]) * 60 + parseInt(result[2]);
                            } else {
                                time = parseInt(result[0]);
                            }

                            if (time) {
                                inverseSum = inverseSum + 1 / time;
                            }
                            responsesCount = responsesCount + 1;
                        }
                    }
                }

                if (!responsesCount) {
                    travelTimeDefer.reject('Count :' + responsesCount);
                    return;
                }

                m = heatMapConfig.delta * inverseSum / responsesCount;

                var index;
                timeArg = parseInt(timeArg, 10);
                switch (timeArg) {
                case 10:
                    index = 0;
                    break;
                case 20:
                    index = 1;
                    break;
                case 30:
                    index = 2;
                    break;
                default:
                    index = 0;
                }
                processTimeHeatMapTime(index, source, m); //Initial index is 0
            });
        }

        function processTimeHeatMapTime(configIndex, source, m) {
            var angInc;
            var timeLimit;
            var heatMapConfig = PtMapsConfig.travelHeatMapConfig;
            var currentConfig;

            if (configIndex < heatMapConfig.timeSequence.length) {
                currentConfig = heatMapConfig.timeSequence[configIndex];
                angInc = currentConfig.degree;
                timeLimit = currentConfig.time;
                initPts(source, timeLimit, 0, angInc, m, configIndex); //Intial angle is 0 radians.
            } else {
                travelTimeDefer.resolve();
            }
        }

        function initPts(source, timeLimit, ang, angInc, m, configIndex) {
            var l;
            var i, j, k;
            var len, lenj, lenk;
            var destination;
            var currentConfig = PtMapsConfig.travelHeatMapConfig.timeSequence[configIndex];
            var coordArr;
            var coord;
            var timeLimitValue;

            if (ang < 2 * Math.PI) {
                l = timeLimit * m * 0.8;
                destination = {
                    latitude: source.latitude + l * Math.cos(ang),
                    longitude: source.longitude + l * Math.sin(ang)
                };
                calculateDistanceDrive(source, destination, timeLimit, ang, angInc, m, configIndex, 0);
            } else {
                travelTimeDefer.resolve();
            }
        }

        function calculateDistanceDrive(source, destination, timeLimit, ang, angInc, m, configIndex, repeatCount) {
            mapDistanceMatrix.fetch(source, destination).then(function (response) {
                if (response.status === 'ERROR') {
                    travelTimeDefer.reject(response);
                    return;
                } else if (!response.results.rows[0].elements[0].duration) {
                    var nearestTimeLimitsArr;
                    var timeLimitKeys = Object.keys(timeLimits);
                    var maxKey;
                    var minDiff;
                    var w;
                    var minDistance = Infinity;
                    var distance;
                    var minDistanceIndex;
                    var destLatLng = new google.maps.LatLng(destination.latitude, destination.longitude);
                    var closeLatLng;
                    var i;
                    var len;

                    if (timeLimitKeys.length > 1) {
                        minDiff = 100;
                        for (i in timeLimitKeys) {
                            w = timeLimit - timeLimitKeys[i];
                            if (w > 0 && w < minDiff) {
                                minDiff = w;
                                maxKey = timeLimitKeys[i];
                            }
                        }

                        nearestTimeLimitsArr = timeLimits[maxKey];

                        for (i = 0, len = nearestTimeLimitsArr.length; i < len; i++) {
                            closeLatLng = new google.maps.LatLng(nearestTimeLimitsArr[i].latitude, nearestTimeLimitsArr[i].longitude);
                            distance = google.maps.geometry.spherical.computeDistanceBetween(destLatLng, closeLatLng);
                            if (distance < minDistance) {
                                minDistance = distance;
                                minDistanceIndex = i;
                            }
                        }

                        if (isPointInOtherPolygons(destination)) {
                            destination = {
                                latitude: nearestTimeLimitsArr[minDistanceIndex].latitude + m * Math.cos(ang),
                                longitude: nearestTimeLimitsArr[minDistanceIndex].longitude + m * Math.sin(ang)
                            }
                        } else {
                            destination = {
                                latitude: (destination.latitude + nearestTimeLimitsArr[minDistanceIndex].latitude) / 2,
                                longitude: (destination.longitude + nearestTimeLimitsArr[minDistanceIndex].longitude) / 2
                            }
                        }


                        calculateEndPoints(timeLimit, timeLimit, source, destination, ang, angInc, m, configIndex, 0);
                    } else {
                        travelTimeDefer.reject(response);
                        return;
                    }


                } else {
                    var result;
                    var time;
                    result = response.results.rows[0].elements[0].duration.text.split(" ");
                    if (result.length === 4) {
                        time = parseInt(result[0]) * 60 + parseInt(result[2]);
                    } else {
                        time = parseInt(result[0]);
                    }

                    calculateEndPoints(time, timeLimit, source, destination, ang, angInc, m, configIndex, repeatCount);
                }
            });
        }

        function isPointInOtherPolygons(destination) {
            var destLatLng = new google.maps.LatLng(destination.latitude, destination.longitude);
            var flag = false;
            for (var i in travelTimePolygons) {
                if (google.maps.geometry.poly.containsLocation(destLatLng, travelTimePolygons[i].mapPolygon)) {
                    flag = true;
                    break;
                }
            }
            return flag;
        }

        function calculateEndPoints(time, timeLimit, source, destination, ang, angInc, m, configIndex, repeatCount) {
            var factor = 1;
            var l;
            var timeDiff = time - timeLimit;
            var absTimeDiff = Math.abs(timeDiff);

            if (travelTimeFlag) {

                if (timeDiff > 2) {

                    if (timeLimit <= 15) {
                        factor = 1;
                    } else {
                        factor = Math.log2(time - timeLimit);
                    }
                    l = m * factor;
                    destination.latitude = destination.latitude - l * Math.cos(ang);
                    destination.longitude = destination.longitude - l * Math.sin(ang);

                    setTimeout(function () {
                        calculateDistanceDrive(source, destination, timeLimit, ang, angInc, m, configIndex, repeatCount);
                    }, 100);
                } else {

                    if (absTimeDiff > 2) {
                        if (timeLimit === PtMapsConfig.travelHeatMapConfig.timeLimit && repeatCount <= PtMapsConfig.travelHeatMapConfig.repeatThreshHold) {
                            factor = Math.log2(absTimeDiff);
                            l = m * factor;
                            destination.latitude = destination.latitude + l * Math.cos(ang);
                            destination.longitude = destination.longitude + l * Math.sin(ang);

                            setTimeout(function () {
                                calculateDistanceDrive(source, destination, timeLimit, ang, angInc, m, configIndex, repeatCount + 1);
                            }, 100);
                            return;
                        } else {
                            if (isPointInOtherPolygons(destination)) {
                                for (var j = 0; j < PtMapsConfig.travelHeatMapConfig.stepOutThreshold; j++) {
                                    destination.latitude = destination.latitude + 2 * m * Math.cos(ang);
                                    destination.longitude = destination.longitude + 2 * m * Math.sin(ang);
                                    if (!isPointInOtherPolygons(destination)) {
                                        break;
                                    }
                                }
                            } else {
                                destination.latitude = destination.latitude + 2 * m * Math.cos(ang);
                                destination.longitude = destination.longitude + 2 * m * Math.sin(ang);

                            }
                        }
                    }
                    if (isPointInOtherPolygons(destination)) {
                        ploygonOverlapFlag = true;
                    }
                    timeLimits[timeLimit] = timeLimits[timeLimit] || [];
                    timeLimits[timeLimit].push(destination);
                    ang += angInc;

                    $rootScope.$broadcast("showUpdateProgress", {
                        val: {
                            angle: ang
                        }
                    });
                    initPts(source, timeLimit, ang, angInc, m, configIndex);
                }
            }
        }

        return {
            drawTimeSense: drawTimeSense,
        };
}]);
function MarkerClusterer(map, opt_markers, opt_options) {
    this.extend(MarkerClusterer, google.maps.OverlayView);
    this.map_ = map;

    this.markers_ = [];

    this.clusters_ = [];

    this.sizes = [53, 56, 66, 78, 90];

    this.styles_ = [];

    /**
     * @type {boolean}
     * @private
     */
    this.ready_ = false;

    var options = opt_options || {};

    /**
     * @type {number}
     * @private
     */
    this.gridSize_ = options['gridSize'] || 60;

    /**
     * @private
     */
    this.minClusterSize_ = options['minimumClusterSize'] || 2;


    /**
     * @type {?number}
     * @private
     */
    this.maxZoom_ = options['maxZoom'] || null;

    this.styles_ = options['styles'] || [];

    /**
     * @type {string}
     * @private
     */
    this.imagePath_ = options['imagePath'] ||
        this.MARKER_CLUSTER_IMAGE_PATH_;

    /**
     * @type {string}
     * @private
     */
    this.imageExtension_ = options['imageExtension'] ||
        this.MARKER_CLUSTER_IMAGE_EXTENSION_;

    /**
     * @type {boolean}
     * @private
     */
    this.zoomOnClick_ = true;

    if (options['zoomOnClick'] != undefined) {
        this.zoomOnClick_ = options['zoomOnClick'];
    }

    /**
     * @type {boolean}
     * @private
     */
    this.averageCenter_ = false;

    if (options['averageCenter'] != undefined) {
        this.averageCenter_ = options['averageCenter'];
    }

    this.setupStyles_();

    this.setMap(map);

    /**
     * @type {number}
     * @private
     */
    this.prevZoom_ = this.map_.getZoom();

    // Add the map event listeners
    var that = this;
    google.maps.event.addListener(this.map_, 'zoom_changed', function () {
        var zoom = that.map_.getZoom();

        if (that.prevZoom_ != zoom) {
            that.prevZoom_ = zoom;
            that.resetViewport();
        }
    });

    google.maps.event.addListener(this.map_, 'idle', function () {
        that.redraw();
    });

    // Finally, add the markers
    if (opt_markers && opt_markers.length) {
        this.addMarkers(opt_markers, false);
    }
}


/**
 * The marker cluster image path.
 *
 * @type {string}
 * @private
 */
MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_PATH_ =
    'https://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/' +
    'images/m';


/**
 * The marker cluster image path.
 *
 * @type {string}
 * @private
 */
MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_EXTENSION_ = 'png';


/**
 * Extends a objects prototype by anothers.
 *
 * @param {Object} obj1 The object to be extended.
 * @param {Object} obj2 The object to extend with.
 * @return {Object} The new extended object.
 * @ignore
 */
MarkerClusterer.prototype.extend = function (obj1, obj2) {
    return (function (object) {
        for (var property in object.prototype) {
            this.prototype[property] = object.prototype[property];
        }
        return this;
    }).apply(obj1, [obj2]);
};


/**
 * Implementaion of the interface method.
 * @ignore
 */
MarkerClusterer.prototype.onAdd = function () {
    this.setReady_(true);
};

/**
 * Implementaion of the interface method.
 * @ignore
 */
MarkerClusterer.prototype.draw = function () {};

/**
 * Sets up the styles object.
 *
 * @private
 */
MarkerClusterer.prototype.setupStyles_ = function () {
    if (this.styles_.length) {
        return;
    }

    for (var i = 0, size; size = this.sizes[i]; i++) {
        this.styles_.push({
            url: this.imagePath_ + 1 + '.' + this.imageExtension_,
            height: size,
            width: size
        });
    }
};

/**
 *  Fit the map to the bounds of the markers in the clusterer.
 */
MarkerClusterer.prototype.fitMapToMarkers = function () {
    var markers = this.getMarkers();
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0, marker; marker = markers[i]; i++) {
        bounds.extend(marker.getPosition());
    }
    //bounds.extend(projectMarker.getPosition());


    this.map_.fitBounds(bounds);
};


/**
 *  Sets the styles.
 *
 *  @param {Object} styles The style to set.
 */
MarkerClusterer.prototype.setStyles = function (styles) {
    this.styles_ = styles;
};


/**
 *  Gets the styles.
 *
 *  @return {Object} The styles object.
 */
MarkerClusterer.prototype.getStyles = function () {
    return this.styles_;
};


/**
 * Whether zoom on click is set.
 *
 * @return {boolean} True if zoomOnClick_ is set.
 */
MarkerClusterer.prototype.isZoomOnClick = function () {
    return this.zoomOnClick_;
};

/**
 * Whether average center is set.
 *
 * @return {boolean} True if averageCenter_ is set.
 */
MarkerClusterer.prototype.isAverageCenter = function () {
    return this.averageCenter_;
};


/**
 *  Returns the array of markers in the clusterer.
 *
 *  @return {Array.<google.maps.Marker>} The markers.
 */
MarkerClusterer.prototype.getMarkers = function () {
    return this.markers_;
};


/**
 *  Returns the number of markers in the clusterer
 *
 *  @return {Number} The number of markers.
 */
MarkerClusterer.prototype.getTotalMarkers = function () {
    return this.markers_.length;
};


/**
 *  Sets the max zoom for the clusterer.
 *
 *  @param {number} maxZoom The max zoom level.
 */
MarkerClusterer.prototype.setMaxZoom = function (maxZoom) {
    this.maxZoom_ = maxZoom;
};


/**
 *  Gets the max zoom for the clusterer.
 *
 *  @return {number} The max zoom level.
 */
MarkerClusterer.prototype.getMaxZoom = function () {
    return this.maxZoom_;
};


/**
 *  The function for calculating the cluster icon image.
 *
 *  @param {Array.<google.maps.Marker>} markers The markers in the clusterer.
 *  @param {number} numStyles The number of styles available.
 *  @return {Object} A object properties: 'text' (string) and 'index' (number).
 *  @private
 */
MarkerClusterer.prototype.calculator_ = function (markers, numStyles) {
    var index = 0;
    var count = markers.length;
    var dv = count;
    while (dv !== 0) {
        dv = parseInt(dv / 10, 10);
        index++;
    }

    index = Math.min(index, numStyles);
    return {
        text: count,
        index: index
    };
};


/**
 * Set the calculator function.
 *
 * @param {function(Array, number)} calculator The function to set as the
 *     calculator. The function should return a object properties:
 *     'text' (string) and 'index' (number).
 *
 */
MarkerClusterer.prototype.setCalculator = function (calculator) {
    this.calculator_ = calculator;
};


/**
 * Get the calculator function.
 *
 * @return {function(Array, number)} the calculator function.
 */
MarkerClusterer.prototype.getCalculator = function () {
    return this.calculator_;
};


/**
 * Add an array of markers to the clusterer.
 *
 * @param {Array.<google.maps.Marker>} markers The markers to add.
 * @param {boolean=} opt_nodraw Whether to redraw the clusters.
 */
MarkerClusterer.prototype.addMarkers = function (markers, opt_nodraw) {
    for (var i = 0, marker; marker = markers[i]; i++) {
        this.pushMarkerTo_(marker);
    }
    if (!opt_nodraw) {
        this.redraw();
    }
};


/**
 * Pushes a marker to the clusterer.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @private
 */
MarkerClusterer.prototype.pushMarkerTo_ = function (marker) {
    marker.isAdded = false;
    if (marker['draggable']) {
        // If the marker is draggable add a listener so we update the clusters on
        // the drag end.
        var that = this;
        google.maps.event.addListener(marker, 'dragend', function () {
            marker.isAdded = false;
            that.repaint();
        });
    }
    this.markers_.push(marker);
};


/**
 * Adds a marker to the clusterer and redraws if needed.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @param {boolean=} opt_nodraw Whether to redraw the clusters.
 */
MarkerClusterer.prototype.addMarker = function (marker, opt_nodraw) {
    this.pushMarkerTo_(marker);
    if (!opt_nodraw) {
        this.redraw();
    }
};


/**
 * Removes a marker and returns true if removed, false if not
 *
 * @param {google.maps.Marker} marker The marker to remove
 * @return {boolean} Whether the marker was removed or not
 * @private
 */
MarkerClusterer.prototype.removeMarker_ = function (marker) {
    var index = -1;
    if (this.markers_.indexOf) {
        index = this.markers_.indexOf(marker);
    } else {
        for (var i = 0, m; m = this.markers_[i]; i++) {
            if (m == marker) {
                index = i;
                break;
            }
        }
    }

    if (index == -1) {
        // Marker is not in our list of markers.
        return false;
    }

    marker.setMap(null);

    this.markers_.splice(index, 1);

    return true;
};


/**
 * Remove a marker from the cluster.
 *
 * @param {google.maps.Marker} marker The marker to remove.
 * @param {boolean=} opt_nodraw Optional boolean to force no redraw.
 * @return {boolean} True if the marker was removed.
 */
MarkerClusterer.prototype.removeMarker = function (marker, opt_nodraw) {
    var removed = this.removeMarker_(marker);

    if (!opt_nodraw && removed) {
        this.resetViewport();
        this.redraw();
        return true;
    } else {
        return false;
    }
};


/**
 * Removes an array of markers from the cluster.
 *
 * @param {Array.<google.maps.Marker>} markers The markers to remove.
 * @param {boolean=} opt_nodraw Optional boolean to force no redraw.
 */
MarkerClusterer.prototype.removeMarkers = function (markers, opt_nodraw) {
    var removed = false;

    for (var i = 0, marker; marker = markers[i]; i++) {
        var r = this.removeMarker_(marker);
        removed = removed || r;
    }

    if (!opt_nodraw && removed) {
        this.resetViewport();
        this.redraw();
        return true;
    }
};


/**
 * Sets the clusterer's ready state.
 *
 * @param {boolean} ready The state.
 * @private
 */
MarkerClusterer.prototype.setReady_ = function (ready) {
    if (!this.ready_) {
        this.ready_ = ready;
        this.createClusters_();
    }
};


/**
 * Returns the number of clusters in the clusterer.
 *
 * @return {number} The number of clusters.
 */
MarkerClusterer.prototype.getTotalClusters = function () {
    return this.clusters_.length;
};


/**
 * Returns the google map that the clusterer is associated with.
 *
 * @return {google.maps.Map} The map.
 */
MarkerClusterer.prototype.getMap = function () {
    return this.map_;
};


/**
 * Sets the google map that the clusterer is associated with.
 *
 * @param {google.maps.Map} map The map.
 */
MarkerClusterer.prototype.setMap = function (map) {
    this.map_ = map;
};


/**
 * Returns the size of the grid.
 *
 * @return {number} The grid size.
 */
MarkerClusterer.prototype.getGridSize = function () {
    return this.gridSize_;
};


/**
 * Sets the size of the grid.
 *
 * @param {number} size The grid size.
 */
MarkerClusterer.prototype.setGridSize = function (size) {
    this.gridSize_ = size;
};


/**
 * Returns the min cluster size.
 *
 * @return {number} The grid size.
 */
MarkerClusterer.prototype.getMinClusterSize = function () {
    return this.minClusterSize_;
};

/**
 * Sets the min cluster size.
 *
 * @param {number} size The grid size.
 */
MarkerClusterer.prototype.setMinClusterSize = function (size) {
    this.minClusterSize_ = size;
};


/**
 * Extends a bounds object by the grid size.
 *
 * @param {google.maps.LatLngBounds} bounds The bounds to extend.
 * @return {google.maps.LatLngBounds} The extended bounds.
 */
MarkerClusterer.prototype.getExtendedBounds = function (bounds) {
    var projection = this.getProjection();

    // Turn the bounds into latlng.
    var tr = new google.maps.LatLng(bounds.getNorthEast().lat(),
        bounds.getNorthEast().lng());
    var bl = new google.maps.LatLng(bounds.getSouthWest().lat(),
        bounds.getSouthWest().lng());

    // Convert the points to pixels and the extend out by the grid size.
    var trPix = projection.fromLatLngToDivPixel(tr);
    trPix.x += this.gridSize_;
    trPix.y -= this.gridSize_;

    var blPix = projection.fromLatLngToDivPixel(bl);
    blPix.x -= this.gridSize_;
    blPix.y += this.gridSize_;

    // Convert the pixel points back to LatLng
    var ne = projection.fromDivPixelToLatLng(trPix);
    var sw = projection.fromDivPixelToLatLng(blPix);

    // Extend the bounds to contain the new bounds.
    bounds.extend(ne);
    bounds.extend(sw);

    return bounds;
};


/**
 * Determins if a marker is contained in a bounds.
 *
 * @param {google.maps.Marker} marker The marker to check.
 * @param {google.maps.LatLngBounds} bounds The bounds to check against.
 * @return {boolean} True if the marker is in the bounds.
 * @private
 */
MarkerClusterer.prototype.isMarkerInBounds_ = function (marker, bounds) {
    return bounds.contains(marker.getPosition());
};


/**
 * Clears all clusters and markers from the clusterer.
 */
MarkerClusterer.prototype.clearMarkers = function () {
    this.resetViewport(true);

    // Set the markers a empty array.
    this.markers_ = [];
};


/**
 * Clears all existing clusters and recreates them.
 * @param {boolean} opt_hide To also hide the marker.
 */
MarkerClusterer.prototype.resetViewport = function (opt_hide) {
    // Remove all the clusters
    for (var i = 0, cluster; cluster = this.clusters_[i]; i++) {
        cluster.remove();
    }

    // Reset the markers to not be added and to be invisible.
    for (var i = 0, marker; marker = this.markers_[i]; i++) {
        marker.isAdded = false;
        if (opt_hide) {
            marker.setMap(null);
        }
    }

    this.clusters_ = [];
};

/**
 *
 */
MarkerClusterer.prototype.repaint = function () {
    var oldClusters = this.clusters_.slice();
    this.clusters_.length = 0;
    this.resetViewport();
    this.redraw();

    // Remove the old clusters.
    // Do it in a timeout so the other clusters have been drawn first.
    window.setTimeout(function () {
        for (var i = 0, cluster; cluster = oldClusters[i]; i++) {
            cluster.remove();
        }
    }, 0);
};


/**
 * Redraws the clusters.
 */
MarkerClusterer.prototype.redraw = function () {
    this.createClusters_();
};


/**
 * Calculates the distance between two latlng locations in km.
 * @see http://www.movable-type.co.uk/scripts/latlong.html
 *
 * @param {google.maps.LatLng} p1 The first lat lng point.
 * @param {google.maps.LatLng} p2 The second lat lng point.
 * @return {number} The distance between the two points in km.
 * @private
 */
MarkerClusterer.prototype.distanceBetweenPoints_ = function (p1, p2) {
    if (!p1 || !p2) {
        return 0;
    }

    var R = 6371; // Radius of the Earth in km
    var dLat = (p2.lat() - p1.lat()) * Math.PI / 180;
    var dLon = (p2.lng() - p1.lng()) * Math.PI / 180;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(p1.lat() * Math.PI / 180) * Math.cos(p2.lat() * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d;
};


/**
 * Add a marker to a cluster, or creates a new cluster.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @private
 */
MarkerClusterer.prototype.addToClosestCluster_ = function (marker) {
    var distance = 40000; // Some large number
    var clusterToAddTo = null;
    var pos = marker.getPosition();
    for (var i = 0, cluster; cluster = this.clusters_[i]; i++) {
        var center = cluster.getCenter();
        if (center) {
            var d = this.distanceBetweenPoints_(center, marker.getPosition());
            if (d < distance) {
                distance = d;
                clusterToAddTo = cluster;
            }
        }
    }

    if (clusterToAddTo && clusterToAddTo.isMarkerInClusterBounds(marker)) {
        clusterToAddTo.addMarker(marker);
    } else {
        var cluster = new Cluster(this);
        cluster.addMarker(marker);
        this.clusters_.push(cluster);
    }
};


/**
 * Creates the clusters.
 *
 * @private
 */
MarkerClusterer.prototype.createClusters_ = function () {
    if (!this.ready_) {
        return;
    }

    // Get our current map view bounds.
    // Create a new bounds object so we don't affect the map.
    var mapBounds = new google.maps.LatLngBounds(this.map_.getBounds().getSouthWest(),
        this.map_.getBounds().getNorthEast());
    var bounds = this.getExtendedBounds(mapBounds);

    for (var i = 0, marker; marker = this.markers_[i]; i++) {
        if (!marker.isAdded && this.isMarkerInBounds_(marker, bounds)) {
            this.addToClosestCluster_(marker);
        }
    }
};


/**
 * A cluster that contains markers.
 *
 * @param {MarkerClusterer} markerClusterer The markerclusterer that this
 *     cluster is associated with.
 * @constructor
 * @ignore
 */
function Cluster(markerClusterer) {
    this.markerClusterer_ = markerClusterer;
    this.map_ = markerClusterer.getMap();
    this.gridSize_ = markerClusterer.getGridSize();
    this.minClusterSize_ = markerClusterer.getMinClusterSize();
    this.averageCenter_ = markerClusterer.isAverageCenter();
    this.center_ = null;
    this.markers_ = [];
    this.bounds_ = null;
    this.clusterIcon_ = new ClusterIcon(this, markerClusterer.getStyles(),
        markerClusterer.getGridSize());
}

/**
 * Determins if a marker is already added to the cluster.
 *
 * @param {google.maps.Marker} marker The marker to check.
 * @return {boolean} True if the marker is already added.
 */
Cluster.prototype.isMarkerAlreadyAdded = function (marker) {
    if (this.markers_.indexOf) {
        return this.markers_.indexOf(marker) != -1;
    } else {
        for (var i = 0, m; m = this.markers_[i]; i++) {
            if (m == marker) {
                return true;
            }
        }
    }
    return false;
};


/**
 * Add a marker the cluster.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @return {boolean} True if the marker was added.
 */
Cluster.prototype.addMarker = function (marker) {
    if (this.isMarkerAlreadyAdded(marker)) {
        return false;
    }

    if (!this.center_) {
        this.center_ = marker.getPosition();
        this.calculateBounds_();
    } else {
        if (this.averageCenter_) {
            var l = this.markers_.length + 1;
            var lat = (this.center_.lat() * (l - 1) + marker.getPosition().lat()) / l;
            var lng = (this.center_.lng() * (l - 1) + marker.getPosition().lng()) / l;
            this.center_ = new google.maps.LatLng(lat, lng);
            this.calculateBounds_();
        }
    }

    marker.isAdded = true;
    this.markers_.push(marker);

    var len = this.markers_.length;
    if (len < this.minClusterSize_ && marker.getMap() != this.map_) {
        // Min cluster size not reached so show the marker.
        marker.setMap(this.map_);
    }

    if (len == this.minClusterSize_) {
        // Hide the markers that were showing.
        for (var i = 0; i < len; i++) {
            this.markers_[i].setMap(null);
        }
    }

    if (len >= this.minClusterSize_) {
        marker.setMap(null);
    }

    this.updateIcon();
    return true;
};


/**
 * Returns the marker clusterer that the cluster is associated with.
 *
 * @return {MarkerClusterer} The associated marker clusterer.
 */
Cluster.prototype.getMarkerClusterer = function () {
    return this.markerClusterer_;
};


/**
 * Returns the bounds of the cluster.
 *
 * @return {google.maps.LatLngBounds} the cluster bounds.
 */
Cluster.prototype.getBounds = function () {
    var bounds = new google.maps.LatLngBounds(this.center_, this.center_);
    var markers = this.getMarkers();
    for (var i = 0, marker; marker = markers[i]; i++) {
        bounds.extend(marker.getPosition());
    }
    return bounds;
};


/**
 * Removes the cluster
 */
Cluster.prototype.remove = function () {
    this.clusterIcon_.remove();
    this.markers_.length = 0;
    delete this.markers_;
};


/**
 * Returns the center of the cluster.
 *
 * @return {number} The cluster center.
 */
Cluster.prototype.getSize = function () {
    return this.markers_.length;
};


/**
 * Returns the center of the cluster.
 *
 * @return {Array.<google.maps.Marker>} The cluster center.
 */
Cluster.prototype.getMarkers = function () {
    return this.markers_;
};


/**
 * Returns the center of the cluster.
 *
 * @return {google.maps.LatLng} The cluster center.
 */
Cluster.prototype.getCenter = function () {
    return this.center_;
};


/**
 * Calculated the extended bounds of the cluster with the grid.
 *
 * @private
 */
Cluster.prototype.calculateBounds_ = function () {
    var bounds = new google.maps.LatLngBounds(this.center_, this.center_);
    this.bounds_ = this.markerClusterer_.getExtendedBounds(bounds);
};


/**
 * Determines if a marker lies in the clusters bounds.
 *
 * @param {google.maps.Marker} marker The marker to check.
 * @return {boolean} True if the marker lies in the bounds.
 */
Cluster.prototype.isMarkerInClusterBounds = function (marker) {
    return this.bounds_.contains(marker.getPosition());
};


/**
 * Returns the map that the cluster is associated with.
 *
 * @return {google.maps.Map} The map.
 */
Cluster.prototype.getMap = function () {
    return this.map_;
};


/**
 * Updates the cluster icon
 */
Cluster.prototype.updateIcon = function () {
    var zoom = this.map_.getZoom();
    var mz = this.markerClusterer_.getMaxZoom();

    if (mz && zoom > mz) {
        // The zoom is greater than our max zoom so show all the markers in cluster.
        for (var i = 0, marker; marker = this.markers_[i]; i++) {
            marker.setMap(this.map_);
        }
        return;
    }

    if (this.markers_.length < this.minClusterSize_) {
        // Min cluster size not yet reached.
        this.clusterIcon_.hide();
        return;
    }

    var numStyles = this.markerClusterer_.getStyles().length;
    var sums = this.markerClusterer_.getCalculator()(this.markers_, numStyles);
    this.clusterIcon_.setCenter(this.center_);
    this.clusterIcon_.setSums(sums);
    this.clusterIcon_.show();
};


/**
 * A cluster icon
 *
 * @param {Cluster} cluster The cluster to be associated with.
 * @param {Object} styles An object that has style properties:
 *     'url': (string) The image url.
 *     'height': (number) The image height.
 *     'width': (number) The image width.
 *     'anchor': (Array) The anchor position of the label text.
 *     'textColor': (string) The text color.
 *     'textSize': (number) The text size.
 *     'backgroundPosition: (string) The background postition x, y.
 * @param {number=} opt_padding Optional padding to apply to the cluster icon.
 * @constructor
 * @extends google.maps.OverlayView
 * @ignore
 */
function ClusterIcon(cluster, styles, opt_padding) {
    cluster.getMarkerClusterer().extend(ClusterIcon, google.maps.OverlayView);

    this.styles_ = styles;
    this.padding_ = opt_padding || 0;
    this.cluster_ = cluster;
    this.center_ = null;
    this.map_ = cluster.getMap();
    this.div_ = null;
    this.sums_ = null;
    this.visible_ = false;

    this.setMap(this.map_);
}


/**
 * Triggers the clusterclick event and zoom's if the option is set.
 *
 * @param {google.maps.MouseEvent} event The event to propagate
 */
ClusterIcon.prototype.triggerClusterClick = function (event) {
    var markerClusterer = this.cluster_.getMarkerClusterer();

    // Trigger the clusterclick event.
    google.maps.event.trigger(markerClusterer, 'clusterclick', this.cluster_, event);

    if (markerClusterer.isZoomOnClick()) {
        // Zoom into the cluster.
        this.map_.fitBounds(this.cluster_.getBounds());
    }
};


/**
 * Adding the cluster icon to the dom.
 * @ignore
 */
ClusterIcon.prototype.onAdd = function () {
    this.div_ = document.createElement('DIV');
    if (this.visible_) {
        var pos = this.getPosFromLatLng_(this.center_);
        this.div_.style.cssText = this.createCss(pos);
        this.div_.innerHTML = this.sums_.text;
    }

    var panes = this.getPanes();
    panes.overlayMouseTarget.appendChild(this.div_);

    var that = this;
    google.maps.event.addDomListener(this.div_, 'click', function (event) {
        that.triggerClusterClick(event);
    });
};


/**
 * Returns the position to place the div dending on the latlng.
 *
 * @param {google.maps.LatLng} latlng The position in latlng.
 * @return {google.maps.Point} The position in pixels.
 * @private
 */
ClusterIcon.prototype.getPosFromLatLng_ = function (latlng) {
    var pos = this.getProjection().fromLatLngToDivPixel(latlng);

    if (typeof this.iconAnchor_ === 'object' && this.iconAnchor_.length === 2) {
        pos.x -= this.iconAnchor_[0];
        pos.y -= this.iconAnchor_[1];
    } else {
        pos.x -= parseInt(this.width_ / 2, 10);
        pos.y -= parseInt(this.height_ / 2, 10);
    }
    return pos;
};


/**
 * Draw the icon.
 * @ignore
 */
ClusterIcon.prototype.draw = function () {
    if (this.visible_) {
        var pos = this.getPosFromLatLng_(this.center_);
        this.div_.style.top = pos.y + 'px';
        this.div_.style.left = pos.x + 'px';
    }
};


/**
 * Hide the icon.
 */
ClusterIcon.prototype.hide = function () {
    if (this.div_) {
        this.div_.style.display = 'none';
    }
    this.visible_ = false;
};


/**
 * Position and show the icon.
 */
ClusterIcon.prototype.show = function () {
    if (this.div_) {
        var pos = this.getPosFromLatLng_(this.center_);
        this.div_.style.cssText = this.createCss(pos);
        this.div_.style.display = '';
    }
    this.visible_ = true;
};


/**
 * Remove the icon from the map
 */
ClusterIcon.prototype.remove = function () {
    this.setMap(null);
};


/**
 * Implementation of the onRemove interface.
 * @ignore
 */
ClusterIcon.prototype.onRemove = function () {
    if (this.div_ && this.div_.parentNode) {
        this.hide();
        this.div_.parentNode.removeChild(this.div_);
        this.div_ = null;
    }
};


/**
 * Set the sums of the icon.
 *
 * @param {Object} sums The sums containing:
 *   'text': (string) The text to display in the icon.
 *   'index': (number) The style index of the icon.
 */
ClusterIcon.prototype.setSums = function (sums) {
    this.sums_ = sums;
    this.text_ = sums.text;
    this.index_ = sums.index;
    if (this.div_) {
        this.div_.innerHTML = sums.text;
    }

    this.useStyle();
};


/**
 * Sets the icon to the the styles.
 */
ClusterIcon.prototype.useStyle = function () {
    var index = Math.max(0, this.sums_.index - 1);
    index = Math.min(this.styles_.length - 1, index);
    var style = this.styles_[index];
    this.url_ = style['url'];
    this.height_ = style['height'];
    this.width_ = style['width'];
    this.textColor_ = style['textColor'];
    this.anchor_ = style['anchor'];
    this.textSize_ = style['textSize'];
    this.backgroundPosition_ = style['backgroundPosition'];
    this.iconAnchor_ = style['iconAnchor'];
};


/**
 * Sets the center of the icon.
 *
 * @param {google.maps.LatLng} center The latlng to set as the center.
 */
ClusterIcon.prototype.setCenter = function (center) {
    this.center_ = center;
};


/**
 * Create the css text based on the position of the icon.
 *
 * @param {google.maps.Point} pos The position.
 * @return {string} The css style text.
 */
ClusterIcon.prototype.createCss = function (pos) {
    var style = [];
    style.push('background-image:url(' + this.url_ + ');');
    var backgroundPosition = this.backgroundPosition_ ? this.backgroundPosition_ : '0 0';
    style.push('background-position:' + backgroundPosition + ';');

    if (typeof this.anchor_ === 'object') {
        if (typeof this.anchor_[0] === 'number' && this.anchor_[0] > 0 &&
            this.anchor_[0] < this.height_) {
            style.push('height:' + (this.height_ - this.anchor_[0]) +
                'px; padding-top:' + this.anchor_[0] + 'px;');
        } else if (typeof this.anchor_[0] === 'number' && this.anchor_[0] < 0 &&
            -this.anchor_[0] < this.height_) {
            style.push('height:' + this.height_ + 'px; line-height:' + (this.height_ + this.anchor_[0]) +
                'px;');
        } else {
            style.push('height:' + this.height_ + 'px; line-height:' + this.height_ +
                'px;');
        }
        if (typeof this.anchor_[1] === 'number' && this.anchor_[1] > 0 &&
            this.anchor_[1] < this.width_) {
            style.push('width:' + (this.width_ - this.anchor_[1]) +
                'px; padding-left:' + this.anchor_[1] + 'px;');
        } else {
            style.push('width:' + this.width_ + 'px; text-align:center;');
        }
    } else {
        style.push('height:' + this.height_ + 'px; line-height:' +
            this.height_ + 'px; width:' + this.width_ + 'px; text-align:center;');
    }

    var txtColor = this.textColor_ ? this.textColor_ : 'black';
    var txtSize = this.textSize_ ? this.textSize_ : 11;

    style.push('cursor:pointer; top:' + pos.y + 'px; left:' +
        pos.x + 'px; color:' + 'red' + '; position:absolute; font-size:' +
        txtSize + 'px; font-family:Arial,sans-serif; font-weight:bold');
    return style.join('');
};


// Export Symbols for Closure
// If you are not going to compile with closure then you can remove the
// code below.
window['MarkerClusterer'] = MarkerClusterer;
MarkerClusterer.prototype['addMarker'] = MarkerClusterer.prototype.addMarker;
MarkerClusterer.prototype['addMarkers'] = MarkerClusterer.prototype.addMarkers;
MarkerClusterer.prototype['clearMarkers'] =
    MarkerClusterer.prototype.clearMarkers;
MarkerClusterer.prototype['fitMapToMarkers'] =
    MarkerClusterer.prototype.fitMapToMarkers;
MarkerClusterer.prototype['getCalculator'] =
    MarkerClusterer.prototype.getCalculator;
MarkerClusterer.prototype['getGridSize'] =
    MarkerClusterer.prototype.getGridSize;
MarkerClusterer.prototype['getExtendedBounds'] =
    MarkerClusterer.prototype.getExtendedBounds;
MarkerClusterer.prototype['getMap'] = MarkerClusterer.prototype.getMap;
MarkerClusterer.prototype['getMarkers'] = MarkerClusterer.prototype.getMarkers;
MarkerClusterer.prototype['getMaxZoom'] = MarkerClusterer.prototype.getMaxZoom;
MarkerClusterer.prototype['getStyles'] = MarkerClusterer.prototype.getStyles;
MarkerClusterer.prototype['getTotalClusters'] =
    MarkerClusterer.prototype.getTotalClusters;
MarkerClusterer.prototype['getTotalMarkers'] =
    MarkerClusterer.prototype.getTotalMarkers;
MarkerClusterer.prototype['redraw'] = MarkerClusterer.prototype.redraw;
MarkerClusterer.prototype['removeMarker'] =
    MarkerClusterer.prototype.removeMarker;
MarkerClusterer.prototype['removeMarkers'] =
    MarkerClusterer.prototype.removeMarkers;
MarkerClusterer.prototype['resetViewport'] =
    MarkerClusterer.prototype.resetViewport;
MarkerClusterer.prototype['repaint'] =
    MarkerClusterer.prototype.repaint;
MarkerClusterer.prototype['setCalculator'] =
    MarkerClusterer.prototype.setCalculator;
MarkerClusterer.prototype['setGridSize'] =
    MarkerClusterer.prototype.setGridSize;
MarkerClusterer.prototype['setMaxZoom'] =
    MarkerClusterer.prototype.setMaxZoom;
MarkerClusterer.prototype['onAdd'] = MarkerClusterer.prototype.onAdd;
MarkerClusterer.prototype['draw'] = MarkerClusterer.prototype.draw;

Cluster.prototype['getCenter'] = Cluster.prototype.getCenter;
Cluster.prototype['getSize'] = Cluster.prototype.getSize;
Cluster.prototype['getMarkers'] = Cluster.prototype.getMarkers;

ClusterIcon.prototype['onAdd'] = ClusterIcon.prototype.onAdd;
ClusterIcon.prototype['draw'] = ClusterIcon.prototype.draw;
ClusterIcon.prototype['onRemove'] = ClusterIcon.prototype.onRemove;
// ==ClosureCompiler==
// @compilation_level ADVANCED_OPTIMIZATIONS
// @externs_url http://closure-compiler.googlecode.com/svn/trunk/contrib/externs/maps/google_maps_api_v3_3.js
// ==/ClosureCompiler==

/**
 * @name MarkerClusterer for Google Maps v3
 * @version version 1.0
 * @author Luke Mahe
 * @fileoverview
 * The library creates and manages per-zoom-level clusters for large amounts of
 * markers.
 * <br/>
 * This is a v3 implementation of the
 * <a href="http://gmaps-utility-library-dev.googlecode.com/svn/tags/markerclusterer/"
 * >v2 MarkerClusterer</a>.
 */

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * A Marker Clusterer that clusters markers.
 *
 * @param {google.maps.Map} map The Google map to attach to.
 * @param {Array.<google.maps.Marker>=} opt_markers Optional markers to add to
 *   the cluster.
 * @param {Object=} opt_options support the following options:
 *     'gridSize': (number) The grid size of a cluster in pixels.
 *     'maxZoom': (number) The maximum zoom level that a marker can be part of a
 *                cluster.
 *     'zoomOnClick': (boolean) Whether the default behaviour of clicking on a
 *                    cluster is to zoom into it.
 *     'averageCenter': (boolean) Wether the center of each cluster should be
 *                      the average of all markers in the cluster.
 *     'minimumClusterSize': (number) The minimum number of markers to be in a
 *                           cluster before the markers are hidden and a count
 *                           is shown.
 *     'styles': (object) An object that has style properties:
 *       'url': (string) The image url.
 *       'height': (number) The image height.
 *       'width': (number) The image width.
 *       'anchor': (Array) The anchor position of the label text.
 *       'textColor': (string) The text color.
 *       'textSize': (number) The text size.
 *       'backgroundPosition': (string) The position of the backgound x, y.
 *       'iconAnchor': (Array) The anchor position of the icon x, y.
 * @constructor
 * @extends google.maps.OverlayView
 */
function MarkerClusterer(map, opt_markers, opt_options) {
    // MarkerClusterer implements google.maps.OverlayView interface. We use the
    // extend function to extend MarkerClusterer with google.maps.OverlayView
    // because it might not always be available when the code is defined so we
    // look for it at the last possible moment. If it doesn't exist now then
    // there is no point going ahead :)
    this.extend(MarkerClusterer, google.maps.OverlayView);
    this.map_ = map;

    /**
     * @type {Array.<google.maps.Marker>}
     * @private
     */
    this.markers_ = [];

    /**
     *  @type {Array.<Cluster>}
     */
    this.clusters_ = [];

    this.sizes = [53, 56, 66, 78, 90];

    /**
     * @private
     */
    this.styles_ = [];

    /**
     * @type {boolean}
     * @private
     */
    this.ready_ = false;

    var options = opt_options || {};

    /**
     * @type {number}
     * @private
     */
    this.gridSize_ = options['gridSize'] || 60;

    /**
     * @private
     */
    this.minClusterSize_ = options['minimumClusterSize'] || 2;


    /**
     * @type {?number}
     * @private
     */
    this.maxZoom_ = options['maxZoom'] || null;

    this.styles_ = options['styles'] || [];

    /**
     * @type {string}
     * @private
     */
    this.imagePath_ = options['imagePath'] ||
        this.MARKER_CLUSTER_IMAGE_PATH_;

    /**
     * @type {string}
     * @private
     */
    this.imageExtension_ = options['imageExtension'] ||
        this.MARKER_CLUSTER_IMAGE_EXTENSION_;

    /**
     * @type {boolean}
     * @private
     */
    this.zoomOnClick_ = true;

    if (options['zoomOnClick'] != undefined) {
        this.zoomOnClick_ = options['zoomOnClick'];
    }

    /**
     * @type {boolean}
     * @private
     */
    this.averageCenter_ = false;

    if (options['averageCenter'] != undefined) {
        this.averageCenter_ = options['averageCenter'];
    }

    this.setupStyles_();

    this.setMap(map);

    /**
     * @type {number}
     * @private
     */
    this.prevZoom_ = this.map_.getZoom();

    // Add the map event listeners
    var that = this;
    google.maps.event.addListener(this.map_, 'zoom_changed', function () {
        var zoom = that.map_.getZoom();

        if (that.prevZoom_ != zoom) {
            that.prevZoom_ = zoom;
            that.resetViewport();
        }
    });

    google.maps.event.addListener(this.map_, 'idle', function () {
        that.redraw();
    });

    // Finally, add the markers
    if (opt_markers && opt_markers.length) {
        this.addMarkers(opt_markers, false);
    }
}


/**
 * The marker cluster image path.
 *
 * @type {string}
 * @private
 */
MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_PATH_ =
    'https://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/' +
    'images/m';


/**
 * The marker cluster image path.
 *
 * @type {string}
 * @private
 */
MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_EXTENSION_ = 'png';


/**
 * Extends a objects prototype by anothers.
 *
 * @param {Object} obj1 The object to be extended.
 * @param {Object} obj2 The object to extend with.
 * @return {Object} The new extended object.
 * @ignore
 */
MarkerClusterer.prototype.extend = function (obj1, obj2) {
    return (function (object) {
        for (var property in object.prototype) {
            this.prototype[property] = object.prototype[property];
        }
        return this;
    }).apply(obj1, [obj2]);
};


/**
 * Implementaion of the interface method.
 * @ignore
 */
MarkerClusterer.prototype.onAdd = function () {
    this.setReady_(true);
};

/**
 * Implementaion of the interface method.
 * @ignore
 */
MarkerClusterer.prototype.draw = function () {};

/**
 * Sets up the styles object.
 *
 * @private
 */
MarkerClusterer.prototype.setupStyles_ = function () {
    if (this.styles_.length) {
        return;
    }

    for (var i = 0, size; size = this.sizes[i]; i++) {
        this.styles_.push({
            url: this.imagePath_ + 1 + '.' + this.imageExtension_,
            height: size,
            width: size
        });
    }
};

/**
 *  Fit the map to the bounds of the markers in the clusterer.
 */
MarkerClusterer.prototype.fitMapToMarkers = function () {
    var markers = this.getMarkers();
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0, marker; marker = markers[i]; i++) {
        bounds.extend(marker.getPosition());
    }

    this.map_.fitBounds(bounds);
};


/**
 *  Sets the styles.
 *
 *  @param {Object} styles The style to set.
 */
MarkerClusterer.prototype.setStyles = function (styles) {
    this.styles_ = styles;
};


/**
 *  Gets the styles.
 *
 *  @return {Object} The styles object.
 */
MarkerClusterer.prototype.getStyles = function () {
    return this.styles_;
};


/**
 * Whether zoom on click is set.
 *
 * @return {boolean} True if zoomOnClick_ is set.
 */
MarkerClusterer.prototype.isZoomOnClick = function () {
    return this.zoomOnClick_;
};

/**
 * Whether average center is set.
 *
 * @return {boolean} True if averageCenter_ is set.
 */
MarkerClusterer.prototype.isAverageCenter = function () {
    return this.averageCenter_;
};


/**
 *  Returns the array of markers in the clusterer.
 *
 *  @return {Array.<google.maps.Marker>} The markers.
 */
MarkerClusterer.prototype.getMarkers = function () {
    return this.markers_;
};


/**
 *  Returns the number of markers in the clusterer
 *
 *  @return {Number} The number of markers.
 */
MarkerClusterer.prototype.getTotalMarkers = function () {
    return this.markers_.length;
};


/**
 *  Sets the max zoom for the clusterer.
 *
 *  @param {number} maxZoom The max zoom level.
 */
MarkerClusterer.prototype.setMaxZoom = function (maxZoom) {
    this.maxZoom_ = maxZoom;
};


/**
 *  Gets the max zoom for the clusterer.
 *
 *  @return {number} The max zoom level.
 */
MarkerClusterer.prototype.getMaxZoom = function () {
    return this.maxZoom_;
};


/**
 *  The function for calculating the cluster icon image.
 *
 *  @param {Array.<google.maps.Marker>} markers The markers in the clusterer.
 *  @param {number} numStyles The number of styles available.
 *  @return {Object} A object properties: 'text' (string) and 'index' (number).
 *  @private
 */
MarkerClusterer.prototype.calculator_ = function (markers, numStyles) {
    var index = 0;
    var count = markers.length;
    var dv = count;
    while (dv !== 0) {
        dv = parseInt(dv / 10, 10);
        index++;
    }

    index = Math.min(index, numStyles);
    return {
        text: count,
        index: index
    };
};


/**
 * Set the calculator function.
 *
 * @param {function(Array, number)} calculator The function to set as the
 *     calculator. The function should return a object properties:
 *     'text' (string) and 'index' (number).
 *
 */
MarkerClusterer.prototype.setCalculator = function (calculator) {
    this.calculator_ = calculator;
};


/**
 * Get the calculator function.
 *
 * @return {function(Array, number)} the calculator function.
 */
MarkerClusterer.prototype.getCalculator = function () {
    return this.calculator_;
};


/**
 * Add an array of markers to the clusterer.
 *
 * @param {Array.<google.maps.Marker>} markers The markers to add.
 * @param {boolean=} opt_nodraw Whether to redraw the clusters.
 */
MarkerClusterer.prototype.addMarkers = function (markers, opt_nodraw) {
    for (var i = 0, marker; marker = markers[i]; i++) {
        this.pushMarkerTo_(marker);
    }
    if (!opt_nodraw) {
        this.redraw();
    }
};


/**
 * Pushes a marker to the clusterer.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @private
 */
MarkerClusterer.prototype.pushMarkerTo_ = function (marker) {
    marker.isAdded = false;
    if (marker['draggable']) {
        // If the marker is draggable add a listener so we update the clusters on
        // the drag end.
        var that = this;
        google.maps.event.addListener(marker, 'dragend', function () {
            marker.isAdded = false;
            that.repaint();
        });
    }
    this.markers_.push(marker);
};


/**
 * Adds a marker to the clusterer and redraws if needed.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @param {boolean=} opt_nodraw Whether to redraw the clusters.
 */
MarkerClusterer.prototype.addMarker = function (marker, opt_nodraw) {
    this.pushMarkerTo_(marker);
    if (!opt_nodraw) {
        this.redraw();
    }
};


/**
 * Removes a marker and returns true if removed, false if not
 *
 * @param {google.maps.Marker} marker The marker to remove
 * @return {boolean} Whether the marker was removed or not
 * @private
 */
MarkerClusterer.prototype.removeMarker_ = function (marker) {
    var index = -1;
    if (this.markers_.indexOf) {
        index = this.markers_.indexOf(marker);
    } else {
        for (var i = 0, m; m = this.markers_[i]; i++) {
            if (m == marker) {
                index = i;
                break;
            }
        }
    }

    if (index == -1) {
        // Marker is not in our list of markers.
        return false;
    }

    marker.setMap(null);

    this.markers_.splice(index, 1);

    return true;
};


/**
 * Remove a marker from the cluster.
 *
 * @param {google.maps.Marker} marker The marker to remove.
 * @param {boolean=} opt_nodraw Optional boolean to force no redraw.
 * @return {boolean} True if the marker was removed.
 */
MarkerClusterer.prototype.removeMarker = function (marker, opt_nodraw) {
    var removed = this.removeMarker_(marker);

    if (!opt_nodraw && removed) {
        this.resetViewport();
        this.redraw();
        return true;
    } else {
        return false;
    }
};


/**
 * Removes an array of markers from the cluster.
 *
 * @param {Array.<google.maps.Marker>} markers The markers to remove.
 * @param {boolean=} opt_nodraw Optional boolean to force no redraw.
 */
MarkerClusterer.prototype.removeMarkers = function (markers, opt_nodraw) {
    var removed = false;

    for (var i = 0, marker; marker = markers[i]; i++) {
        var r = this.removeMarker_(marker);
        removed = removed || r;
    }

    if (!opt_nodraw && removed) {
        this.resetViewport();
        this.redraw();
        return true;
    }
};


/**
 * Sets the clusterer's ready state.
 *
 * @param {boolean} ready The state.
 * @private
 */
MarkerClusterer.prototype.setReady_ = function (ready) {
    if (!this.ready_) {
        this.ready_ = ready;
        this.createClusters_();
    }
};


/**
 * Returns the number of clusters in the clusterer.
 *
 * @return {number} The number of clusters.
 */
MarkerClusterer.prototype.getTotalClusters = function () {
    return this.clusters_.length;
};


/**
 * Returns the google map that the clusterer is associated with.
 *
 * @return {google.maps.Map} The map.
 */
MarkerClusterer.prototype.getMap = function () {
    return this.map_;
};


/**
 * Sets the google map that the clusterer is associated with.
 *
 * @param {google.maps.Map} map The map.
 */
MarkerClusterer.prototype.setMap = function (map) {
    this.map_ = map;
};


/**
 * Returns the size of the grid.
 *
 * @return {number} The grid size.
 */
MarkerClusterer.prototype.getGridSize = function () {
    return this.gridSize_;
};


/**
 * Sets the size of the grid.
 *
 * @param {number} size The grid size.
 */
MarkerClusterer.prototype.setGridSize = function (size) {
    this.gridSize_ = size;
};


/**
 * Returns the min cluster size.
 *
 * @return {number} The grid size.
 */
MarkerClusterer.prototype.getMinClusterSize = function () {
    return this.minClusterSize_;
};

/**
 * Sets the min cluster size.
 *
 * @param {number} size The grid size.
 */
MarkerClusterer.prototype.setMinClusterSize = function (size) {
    this.minClusterSize_ = size;
};


/**
 * Extends a bounds object by the grid size.
 *
 * @param {google.maps.LatLngBounds} bounds The bounds to extend.
 * @return {google.maps.LatLngBounds} The extended bounds.
 */
MarkerClusterer.prototype.getExtendedBounds = function (bounds) {
    var projection = this.getProjection();

    // Turn the bounds into latlng.
    var tr = new google.maps.LatLng(bounds.getNorthEast().lat(),
        bounds.getNorthEast().lng());
    var bl = new google.maps.LatLng(bounds.getSouthWest().lat(),
        bounds.getSouthWest().lng());

    // Convert the points to pixels and the extend out by the grid size.
    var trPix = projection.fromLatLngToDivPixel(tr);
    trPix.x += this.gridSize_;
    trPix.y -= this.gridSize_;

    var blPix = projection.fromLatLngToDivPixel(bl);
    blPix.x -= this.gridSize_;
    blPix.y += this.gridSize_;

    // Convert the pixel points back to LatLng
    var ne = projection.fromDivPixelToLatLng(trPix);
    var sw = projection.fromDivPixelToLatLng(blPix);

    // Extend the bounds to contain the new bounds.
    bounds.extend(ne);
    bounds.extend(sw);

    return bounds;
};


/**
 * Determins if a marker is contained in a bounds.
 *
 * @param {google.maps.Marker} marker The marker to check.
 * @param {google.maps.LatLngBounds} bounds The bounds to check against.
 * @return {boolean} True if the marker is in the bounds.
 * @private
 */
MarkerClusterer.prototype.isMarkerInBounds_ = function (marker, bounds) {
    return bounds.contains(marker.getPosition());
};


/**
 * Clears all clusters and markers from the clusterer.
 */
MarkerClusterer.prototype.clearMarkers = function () {
    this.resetViewport(true);

    // Set the markers a empty array.
    this.markers_ = [];
};


/**
 * Clears all existing clusters and recreates them.
 * @param {boolean} opt_hide To also hide the marker.
 */
MarkerClusterer.prototype.resetViewport = function (opt_hide) {
    // Remove all the clusters
    for (var i = 0, cluster; cluster = this.clusters_[i]; i++) {
        cluster.remove();
    }

    // Reset the markers to not be added and to be invisible.
    for (var i = 0, marker; marker = this.markers_[i]; i++) {
        marker.isAdded = false;
        if (opt_hide) {
            marker.setMap(null);
        }
    }

    this.clusters_ = [];
};

/**
 *
 */
MarkerClusterer.prototype.repaint = function () {
    var oldClusters = this.clusters_.slice();
    this.clusters_.length = 0;
    this.resetViewport();
    this.redraw();

    // Remove the old clusters.
    // Do it in a timeout so the other clusters have been drawn first.
    window.setTimeout(function () {
        for (var i = 0, cluster; cluster = oldClusters[i]; i++) {
            cluster.remove();
        }
    }, 0);
};


/**
 * Redraws the clusters.
 */
MarkerClusterer.prototype.redraw = function () {
    this.createClusters_();
};


/**
 * Calculates the distance between two latlng locations in km.
 * @see http://www.movable-type.co.uk/scripts/latlong.html
 *
 * @param {google.maps.LatLng} p1 The first lat lng point.
 * @param {google.maps.LatLng} p2 The second lat lng point.
 * @return {number} The distance between the two points in km.
 * @private
 */
MarkerClusterer.prototype.distanceBetweenPoints_ = function (p1, p2) {
    if (!p1 || !p2) {
        return 0;
    }

    var R = 6371; // Radius of the Earth in km
    var dLat = (p2.lat() - p1.lat()) * Math.PI / 180;
    var dLon = (p2.lng() - p1.lng()) * Math.PI / 180;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(p1.lat() * Math.PI / 180) * Math.cos(p2.lat() * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d;
};


/**
 * Add a marker to a cluster, or creates a new cluster.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @private
 */
MarkerClusterer.prototype.addToClosestCluster_ = function (marker) {
    var distance = 40000; // Some large number
    var clusterToAddTo = null;
    var pos = marker.getPosition();
    for (var i = 0, cluster; cluster = this.clusters_[i]; i++) {
        var center = cluster.getCenter();
        if (center) {
            var d = this.distanceBetweenPoints_(center, marker.getPosition());
            if (d < distance) {
                distance = d;
                clusterToAddTo = cluster;
            }
        }
    }

    if (clusterToAddTo && clusterToAddTo.isMarkerInClusterBounds(marker)) {
        clusterToAddTo.addMarker(marker);
    } else {
        var cluster = new Cluster(this);
        cluster.addMarker(marker);
        this.clusters_.push(cluster);
    }
};


/**
 * Creates the clusters.
 *
 * @private
 */
MarkerClusterer.prototype.createClusters_ = function () {
    if (!this.ready_) {
        return;
    }

    // Get our current map view bounds.
    // Create a new bounds object so we don't affect the map.
    var mapBounds = new google.maps.LatLngBounds(this.map_.getBounds().getSouthWest(),
        this.map_.getBounds().getNorthEast());
    var bounds = this.getExtendedBounds(mapBounds);

    for (var i = 0, marker; marker = this.markers_[i]; i++) {
        if (!marker.isAdded && this.isMarkerInBounds_(marker, bounds)) {
            this.addToClosestCluster_(marker);
        }
    }
};


/**
 * A cluster that contains markers.
 *
 * @param {MarkerClusterer} markerClusterer The markerclusterer that this
 *     cluster is associated with.
 * @constructor
 * @ignore
 */
function Cluster(markerClusterer) {
    this.markerClusterer_ = markerClusterer;
    this.map_ = markerClusterer.getMap();
    this.gridSize_ = markerClusterer.getGridSize();
    this.minClusterSize_ = markerClusterer.getMinClusterSize();
    this.averageCenter_ = markerClusterer.isAverageCenter();
    this.center_ = null;
    this.markers_ = [];
    this.bounds_ = null;
    this.clusterIcon_ = new ClusterIcon(this, markerClusterer.getStyles(),
        markerClusterer.getGridSize());
}

/**
 * Determins if a marker is already added to the cluster.
 *
 * @param {google.maps.Marker} marker The marker to check.
 * @return {boolean} True if the marker is already added.
 */
Cluster.prototype.isMarkerAlreadyAdded = function (marker) {
    if (this.markers_.indexOf) {
        return this.markers_.indexOf(marker) != -1;
    } else {
        for (var i = 0, m; m = this.markers_[i]; i++) {
            if (m == marker) {
                return true;
            }
        }
    }
    return false;
};


/**
 * Add a marker the cluster.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @return {boolean} True if the marker was added.
 */
Cluster.prototype.addMarker = function (marker) {
    if (this.isMarkerAlreadyAdded(marker)) {
        return false;
    }

    if (!this.center_) {
        this.center_ = marker.getPosition();
        this.calculateBounds_();
    } else {
        if (this.averageCenter_) {
            var l = this.markers_.length + 1;
            var lat = (this.center_.lat() * (l - 1) + marker.getPosition().lat()) / l;
            var lng = (this.center_.lng() * (l - 1) + marker.getPosition().lng()) / l;
            this.center_ = new google.maps.LatLng(lat, lng);
            this.calculateBounds_();
        }
    }

    marker.isAdded = true;
    this.markers_.push(marker);

    var len = this.markers_.length;
    if (len < this.minClusterSize_ && marker.getMap() != this.map_) {
        // Min cluster size not reached so show the marker.
        marker.setMap(this.map_);
    }

    if (len == this.minClusterSize_) {
        // Hide the markers that were showing.
        for (var i = 0; i < len; i++) {
            this.markers_[i].setMap(null);
        }
    }

    if (len >= this.minClusterSize_) {
        marker.setMap(null);
    }

    this.updateIcon();
    return true;
};


/**
 * Returns the marker clusterer that the cluster is associated with.
 *
 * @return {MarkerClusterer} The associated marker clusterer.
 */
Cluster.prototype.getMarkerClusterer = function () {
    return this.markerClusterer_;
};


/**
 * Returns the bounds of the cluster.
 *
 * @return {google.maps.LatLngBounds} the cluster bounds.
 */
Cluster.prototype.getBounds = function () {
    var bounds = new google.maps.LatLngBounds(this.center_, this.center_);
    var markers = this.getMarkers();
    for (var i = 0, marker; marker = markers[i]; i++) {
        bounds.extend(marker.getPosition());
    }
    return bounds;
};


/**
 * Removes the cluster
 */
Cluster.prototype.remove = function () {
    this.clusterIcon_.remove();
    this.markers_.length = 0;
    delete this.markers_;
};


/**
 * Returns the center of the cluster.
 *
 * @return {number} The cluster center.
 */
Cluster.prototype.getSize = function () {
    return this.markers_.length;
};


/**
 * Returns the center of the cluster.
 *
 * @return {Array.<google.maps.Marker>} The cluster center.
 */
Cluster.prototype.getMarkers = function () {
    return this.markers_;
};


/**
 * Returns the center of the cluster.
 *
 * @return {google.maps.LatLng} The cluster center.
 */
Cluster.prototype.getCenter = function () {
    return this.center_;
};


/**
 * Calculated the extended bounds of the cluster with the grid.
 *
 * @private
 */
Cluster.prototype.calculateBounds_ = function () {
    var bounds = new google.maps.LatLngBounds(this.center_, this.center_);
    this.bounds_ = this.markerClusterer_.getExtendedBounds(bounds);
};


/**
 * Determines if a marker lies in the clusters bounds.
 *
 * @param {google.maps.Marker} marker The marker to check.
 * @return {boolean} True if the marker lies in the bounds.
 */
Cluster.prototype.isMarkerInClusterBounds = function (marker) {
    return this.bounds_.contains(marker.getPosition());
};


/**
 * Returns the map that the cluster is associated with.
 *
 * @return {google.maps.Map} The map.
 */
Cluster.prototype.getMap = function () {
    return this.map_;
};


/**
 * Updates the cluster icon
 */
Cluster.prototype.updateIcon = function () {
    var zoom = this.map_.getZoom();
    var mz = this.markerClusterer_.getMaxZoom();

    if (mz && zoom > mz) {
        // The zoom is greater than our max zoom so show all the markers in cluster.
        for (var i = 0, marker; marker = this.markers_[i]; i++) {
            marker.setMap(this.map_);
        }
        return;
    }

    if (this.markers_.length < this.minClusterSize_) {
        // Min cluster size not yet reached.
        this.clusterIcon_.hide();
        return;
    }

    var numStyles = this.markerClusterer_.getStyles().length;
    var sums = this.markerClusterer_.getCalculator()(this.markers_, numStyles);
    this.clusterIcon_.setCenter(this.center_);
    this.clusterIcon_.setSums(sums);
    this.clusterIcon_.show();
};


/**
 * A cluster icon
 *
 * @param {Cluster} cluster The cluster to be associated with.
 * @param {Object} styles An object that has style properties:
 *     'url': (string) The image url.
 *     'height': (number) The image height.
 *     'width': (number) The image width.
 *     'anchor': (Array) The anchor position of the label text.
 *     'textColor': (string) The text color.
 *     'textSize': (number) The text size.
 *     'backgroundPosition: (string) The background postition x, y.
 * @param {number=} opt_padding Optional padding to apply to the cluster icon.
 * @constructor
 * @extends google.maps.OverlayView
 * @ignore
 */
function ClusterIcon(cluster, styles, opt_padding) {
    cluster.getMarkerClusterer().extend(ClusterIcon, google.maps.OverlayView);

    this.styles_ = styles;
    this.padding_ = opt_padding || 0;
    this.cluster_ = cluster;
    this.center_ = null;
    this.map_ = cluster.getMap();
    this.div_ = null;
    this.sums_ = null;
    this.visible_ = false;

    this.setMap(this.map_);
}


/**
 * Triggers the clusterclick event and zoom's if the option is set.
 *
 * @param {google.maps.MouseEvent} event The event to propagate
 */
ClusterIcon.prototype.triggerClusterClick = function (event) {
    var markerClusterer = this.cluster_.getMarkerClusterer();

    // Trigger the clusterclick event.
    google.maps.event.trigger(markerClusterer, 'clusterclick', this.cluster_, event);

    if (markerClusterer.isZoomOnClick()) {
        // Zoom into the cluster.
        this.map_.fitBounds(this.cluster_.getBounds());
    }
};


/**
 * Adding the cluster icon to the dom.
 * @ignore
 */
ClusterIcon.prototype.onAdd = function () {
    this.div_ = document.createElement('DIV');
    if (this.visible_) {
        var pos = this.getPosFromLatLng_(this.center_);
        this.div_.style.cssText = this.createCss(pos);
        this.div_.innerHTML = this.sums_.text;
    }

    var panes = this.getPanes();
    panes.overlayMouseTarget.appendChild(this.div_);

    var that = this;
    google.maps.event.addDomListener(this.div_, 'click', function (event) {
        that.triggerClusterClick(event);
    });
};


/**
 * Returns the position to place the div dending on the latlng.
 *
 * @param {google.maps.LatLng} latlng The position in latlng.
 * @return {google.maps.Point} The position in pixels.
 * @private
 */
ClusterIcon.prototype.getPosFromLatLng_ = function (latlng) {
    var pos = this.getProjection().fromLatLngToDivPixel(latlng);

    if (typeof this.iconAnchor_ === 'object' && this.iconAnchor_.length === 2) {
        pos.x -= this.iconAnchor_[0];
        pos.y -= this.iconAnchor_[1];
    } else {
        pos.x -= parseInt(this.width_ / 2, 10);
        pos.y -= parseInt(this.height_ / 2, 10);
    }
    return pos;
};


/**
 * Draw the icon.
 * @ignore
 */
ClusterIcon.prototype.draw = function () {
    if (this.visible_) {
        var pos = this.getPosFromLatLng_(this.center_);
        this.div_.style.top = pos.y + 'px';
        this.div_.style.left = pos.x + 'px';
    }
};


/**
 * Hide the icon.
 */
ClusterIcon.prototype.hide = function () {
    if (this.div_) {
        this.div_.style.display = 'none';
    }
    this.visible_ = false;
};


/**
 * Position and show the icon.
 */
ClusterIcon.prototype.show = function () {
    if (this.div_) {
        var pos = this.getPosFromLatLng_(this.center_);
        this.div_.style.cssText = this.createCss(pos);
        this.div_.style.display = '';
    }
    this.visible_ = true;
};


/**
 * Remove the icon from the map
 */
ClusterIcon.prototype.remove = function () {
    this.setMap(null);
};


/**
 * Implementation of the onRemove interface.
 * @ignore
 */
ClusterIcon.prototype.onRemove = function () {
    if (this.div_ && this.div_.parentNode) {
        this.hide();
        this.div_.parentNode.removeChild(this.div_);
        this.div_ = null;
    }
};


/**
 * Set the sums of the icon.
 *
 * @param {Object} sums The sums containing:
 *   'text': (string) The text to display in the icon.
 *   'index': (number) The style index of the icon.
 */
ClusterIcon.prototype.setSums = function (sums) {
    this.sums_ = sums;
    this.text_ = sums.text;
    this.index_ = sums.index;
    if (this.div_) {
        this.div_.innerHTML = sums.text;
    }

    this.useStyle();
};


/**
 * Sets the icon to the the styles.
 */
ClusterIcon.prototype.useStyle = function () {
    var index = Math.max(0, this.sums_.index - 1);
    index = Math.min(this.styles_.length - 1, index);
    var style = this.styles_[index];
    this.url_ = style['url'];
    this.height_ = style['height'];
    this.width_ = style['width'];
    this.textColor_ = style['textColor'];
    this.anchor_ = style['anchor'];
    this.textSize_ = style['textSize'];
    this.backgroundPosition_ = style['backgroundPosition'];
    this.iconAnchor_ = style['iconAnchor'];
};


/**
 * Sets the center of the icon.
 *
 * @param {google.maps.LatLng} center The latlng to set as the center.
 */
ClusterIcon.prototype.setCenter = function (center) {
    this.center_ = center;
};


/**
 * Create the css text based on the position of the icon.
 *
 * @param {google.maps.Point} pos The position.
 * @return {string} The css style text.
 */
ClusterIcon.prototype.createCss = function (pos) {
    var style = [];
    style.push('background-image:url(' + this.url_ + ');');
    var backgroundPosition = this.backgroundPosition_ ? this.backgroundPosition_ : '0 0';
    style.push('background-position:' + backgroundPosition + ';');

    if (typeof this.anchor_ === 'object') {
        if (typeof this.anchor_[0] === 'number' && this.anchor_[0] > 0 &&
            this.anchor_[0] < this.height_) {
            style.push('height:' + (this.height_ - this.anchor_[0]) +
                'px; padding-top:' + this.anchor_[0] + 'px;');
        } else if (typeof this.anchor_[0] === 'number' && this.anchor_[0] < 0 &&
            -this.anchor_[0] < this.height_) {
            style.push('height:' + this.height_ + 'px; line-height:' + (this.height_ + this.anchor_[0]) +
                'px;');
        } else {
            style.push('height:' + this.height_ + 'px; line-height:' + this.height_ +
                'px;');
        }
        if (typeof this.anchor_[1] === 'number' && this.anchor_[1] > 0 &&
            this.anchor_[1] < this.width_) {
            style.push('width:' + (this.width_ - this.anchor_[1]) +
                'px; padding-left:' + this.anchor_[1] + 'px;');
        } else {
            style.push('width:' + this.width_ + 'px; text-align:center;');
        }
    } else {
        style.push('height:' + this.height_ + 'px; line-height:' +
            this.height_ + 'px; width:' + this.width_ + 'px; text-align:center;');
    }

    var txtColor = this.textColor_ ? this.textColor_ : 'black';
    var txtSize = this.textSize_ ? this.textSize_ : 11;

    style.push('cursor:pointer; top:' + pos.y + 'px; left:' +
        pos.x + 'px; color:' + txtColor + '; position:absolute; font-size:' +
        txtSize + 'px; font-family:Arial,sans-serif; font-weight:bold');
    return style.join('');
};


// Export Symbols for Closure
// If you are not going to compile with closure then you can remove the
// code below.
window['MarkerClusterer'] = MarkerClusterer;
MarkerClusterer.prototype['addMarker'] = MarkerClusterer.prototype.addMarker;
MarkerClusterer.prototype['addMarkers'] = MarkerClusterer.prototype.addMarkers;
MarkerClusterer.prototype['clearMarkers'] =
    MarkerClusterer.prototype.clearMarkers;
MarkerClusterer.prototype['fitMapToMarkers'] =
    MarkerClusterer.prototype.fitMapToMarkers;
MarkerClusterer.prototype['getCalculator'] =
    MarkerClusterer.prototype.getCalculator;
MarkerClusterer.prototype['getGridSize'] =
    MarkerClusterer.prototype.getGridSize;
MarkerClusterer.prototype['getExtendedBounds'] =
    MarkerClusterer.prototype.getExtendedBounds;
MarkerClusterer.prototype['getMap'] = MarkerClusterer.prototype.getMap;
MarkerClusterer.prototype['getMarkers'] = MarkerClusterer.prototype.getMarkers;
MarkerClusterer.prototype['getMaxZoom'] = MarkerClusterer.prototype.getMaxZoom;
MarkerClusterer.prototype['getStyles'] = MarkerClusterer.prototype.getStyles;
MarkerClusterer.prototype['getTotalClusters'] =
    MarkerClusterer.prototype.getTotalClusters;
MarkerClusterer.prototype['getTotalMarkers'] =
    MarkerClusterer.prototype.getTotalMarkers;
MarkerClusterer.prototype['redraw'] = MarkerClusterer.prototype.redraw;
MarkerClusterer.prototype['removeMarker'] =
    MarkerClusterer.prototype.removeMarker;
MarkerClusterer.prototype['removeMarkers'] =
    MarkerClusterer.prototype.removeMarkers;
MarkerClusterer.prototype['resetViewport'] =
    MarkerClusterer.prototype.resetViewport;
MarkerClusterer.prototype['repaint'] =
    MarkerClusterer.prototype.repaint;
MarkerClusterer.prototype['setCalculator'] =
    MarkerClusterer.prototype.setCalculator;
MarkerClusterer.prototype['setGridSize'] =
    MarkerClusterer.prototype.setGridSize;
MarkerClusterer.prototype['setMaxZoom'] =
    MarkerClusterer.prototype.setMaxZoom;
MarkerClusterer.prototype['onAdd'] = MarkerClusterer.prototype.onAdd;
MarkerClusterer.prototype['draw'] = MarkerClusterer.prototype.draw;

Cluster.prototype['getCenter'] = Cluster.prototype.getCenter;
Cluster.prototype['getSize'] = Cluster.prototype.getSize;
Cluster.prototype['getMarkers'] = Cluster.prototype.getMarkers;

ClusterIcon.prototype['onAdd'] = ClusterIcon.prototype.onAdd;
ClusterIcon.prototype['draw'] = ClusterIcon.prototype.draw;
ClusterIcon.prototype['onRemove'] = ClusterIcon.prototype.onRemove;
if (!google.maps.Polygon.prototype.getBounds) {
    google.maps.Polygon.prototype.getBounds = function (latLng) {
        var bounds = new google.maps.LatLngBounds(),
            paths = this.getPaths(),
            path,
            p, i;

        for (p = 0; p < paths.getLength(); p++) {
            path = paths.getAt(p);
            for (i = 0; i < path.getLength(); i++) {
                bounds.extend(path.getAt(i));
            }
        }
        return bounds;
    };
}

// Polygon containsLatLng - method to determine if a latLng is within a polygon
google.maps.Polygon.prototype.containsLatLng = function (latLng) {
    // Exclude points outside of bounds as there is no way they are in the poly

    var inPoly = false,
        bounds, lat, lng,
        numPaths, p, path, numPoints,
        i, j, vertex1, vertex2;

    // Arguments are a pair of lat, lng variables
    if (arguments.length == 2) {
        if (
            typeof arguments[0] == "number" &&
            typeof arguments[1] == "number"
        ) {
            lat = arguments[0];
            lng = arguments[1];
        }
    } else if (arguments.length == 1) {
        bounds = this.getBounds();

        if (!bounds && !bounds.contains(latLng)) {
            return false;
        }
        lat = latLng.lat();
        lng = latLng.lng();
    } else {
        console.log("Wrong number of inputs in google.maps.Polygon.prototype.contains.LatLng");
    }

    // Raycast point in polygon method

    numPaths = this.getPaths().getLength();
    for (p = 0; p < numPaths; p++) {
        path = this.getPaths().getAt(p);
        numPoints = path.getLength();
        j = numPoints - 1;

        console.log(numPaths, numPoints);
        for (i = 0; i < numPoints; i++) {
            vertex1 = path.getAt(i);
            vertex2 = path.getAt(j);

            if (
                vertex1.lng() < lng &&
                vertex2.lng() >= lng ||
                vertex2.lng() < lng &&
                vertex1.lng() >= lng
            ) {
                if (
                    vertex1.lat() +
                    (lng - vertex1.lng()) /
                    (vertex2.lng() - vertex1.lng()) *
                    (vertex2.lat() - vertex1.lat()) <
                    lat
                ) {
                    inPoly = !inPoly;
                }
            }

            j = i;
        }
    }

    return inPoly;
};