/*! BlendUI 2014-06-26 16:35:05 */
!function(){var a,b,c;!function(d){function e(a,b){return u.call(a,b)}function f(a,b){var c,d,e,f,g,h,i,j,k,l,m,n=b&&b.split("/"),o=s.map,p=o&&o["*"]||{};if(a&&"."===a.charAt(0))if(b){for(n=n.slice(0,n.length-1),a=a.split("/"),g=a.length-1,s.nodeIdCompat&&w.test(a[g])&&(a[g]=a[g].replace(w,"")),a=n.concat(a),k=0;k<a.length;k+=1)if(m=a[k],"."===m)a.splice(k,1),k-=1;else if(".."===m){if(1===k&&(".."===a[2]||".."===a[0]))break;k>0&&(a.splice(k-1,2),k-=2)}a=a.join("/")}else 0===a.indexOf("./")&&(a=a.substring(2));if((n||p)&&o){for(c=a.split("/"),k=c.length;k>0;k-=1){if(d=c.slice(0,k).join("/"),n)for(l=n.length;l>0;l-=1)if(e=o[n.slice(0,l).join("/")],e&&(e=e[d])){f=e,h=k;break}if(f)break;!i&&p&&p[d]&&(i=p[d],j=k)}!f&&i&&(f=i,h=j),f&&(c.splice(0,h,f),a=c.join("/"))}return a}function g(a,b){return function(){return n.apply(d,v.call(arguments,0).concat([a,b]))}}function h(a){return function(b){return f(b,a)}}function i(a){return function(b){q[a]=b}}function j(a){if(e(r,a)){var b=r[a];delete r[a],t[a]=!0,m.apply(d,b)}if(!e(q,a)&&!e(t,a))throw new Error("No "+a);return q[a]}function k(a){var b,c=a?a.indexOf("!"):-1;return c>-1&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]}function l(a){return function(){return s&&s.config&&s.config[a]||{}}}var m,n,o,p,q={},r={},s={},t={},u=Object.prototype.hasOwnProperty,v=[].slice,w=/\.js$/;o=function(a,b){var c,d=k(a),e=d[0];return a=d[1],e&&(e=f(e,b),c=j(e)),e?a=c&&c.normalize?c.normalize(a,h(b)):f(a,b):(a=f(a,b),d=k(a),e=d[0],a=d[1],e&&(c=j(e))),{f:e?e+"!"+a:a,n:a,pr:e,p:c}},p={require:function(a){return g(a)},exports:function(a){var b=q[a];return"undefined"!=typeof b?b:q[a]={}},module:function(a){return{id:a,uri:"",exports:q[a],config:l(a)}}},m=function(a,b,c,f){var h,k,l,m,n,s,u=[],v=typeof c;if(f=f||a,"undefined"===v||"function"===v){for(b=!b.length&&c.length?["require","exports","module"]:b,n=0;n<b.length;n+=1)if(m=o(b[n],f),k=m.f,"require"===k)u[n]=p.require(a);else if("exports"===k)u[n]=p.exports(a),s=!0;else if("module"===k)h=u[n]=p.module(a);else if(e(q,k)||e(r,k)||e(t,k))u[n]=j(k);else{if(!m.p)throw new Error(a+" missing "+k);m.p.load(m.n,g(f,!0),i(k),{}),u[n]=q[k]}l=c?c.apply(q[a],u):void 0,a&&(h&&h.exports!==d&&h.exports!==q[a]?q[a]=h.exports:l===d&&s||(q[a]=l))}else a&&(q[a]=c)},a=b=n=function(a,b,c,e,f){if("string"==typeof a)return p[a]?p[a](b):j(o(a,b).f);if(!a.splice){if(s=a,s.deps&&n(s.deps,s.callback),!b)return;b.splice?(a=b,b=c,c=null):a=d}return b=b||function(){},"function"==typeof c&&(c=e,e=f),e?m(d,a,b,c):setTimeout(function(){m(d,a,b,c)},4),n},n.config=function(a){return n(a)},a._defined=q,c=function(a,b,c){b.splice||(c=b,b=[]),e(q,a)||e(r,a)||(r[a]=[a,b,c])},c.amd={jQuery:!0}}(),c("third_party/almond",function(){}),c("src/common/lib/lang",["require"],function(){var a={};return a.inherits=function(a,b){var c=function(){};c.prototype=b.prototype;var d=a.prototype,e=a.prototype=new c;for(var f in d)e[f]=d[f];return a.prototype.constructor=a,a.superClass=b.prototype,a},a.clone=function(a){if(!a||"object"!=typeof a)return a;var b=a;if(u.isArray(a))b=u.clone(a);else if("[object Object]"==={}.toString.call(a)&&"isPrototypeOf"in a){b={};for(var c in a)a.hasOwnProperty(c)&&(b[c]=lib.deepClone(a[c]))}return b},a.extend=function(a,b){for(var c in b)b.hasOwnProperty(c)&&"undefined"!=typeof b[c]&&(a[c]=b[c]);return a},a}),c("src/common/lib/string",["require"],function(){var a={};return a.toPascal=function(b){return b?b.charAt(0).toUpperCase()+a.toCamel(b.slice(1)):""},a.toCamel=function(a){return a?a.replace(/-([a-z])/g,function(a){return a.toUpperCase()}):""},a}),c("src/common/lib",["require","./lib/lang","./lib/string"],function(a){var b={},c=a("./lib/lang"),d=a("./lib/string"),e=8785925;return b.getUniqueID=function(a){return a=a||"BlendUI",a+e++},c.extend(b,c),c.extend(b,d),b}),c("src/hybrid/api/core",["require"],function(){var a={},b=function(a,b){try{var c=window.nuwa_core||window.nuwa_runtime;return c[a].apply(c,b)}catch(d){console.log("BlendUI_Api_Error:"+a+"======"),console.log(d)}};return a.removeSplashScreen=function(){b("removeSplashScreen",arguments)},a.exitApp=function(){b("exitApp",arguments)},a}),c("src/hybrid/api/config",["require"],function(){var a={ALIGN_PARENT_LEFT:9,ALIGN_PARENT_TOP:10,ALIGN_PARENT_RIGHT:11,ALIGN_PARENT_BOTTOM:12,CENTER_IN_PARENT:13,CENTER_HORIZONTAL:14,CENTER_VERTICAL:15,DEVICE_PR:/iP(ad|hone|od)/.test(navigator.userAgent)?1:window.devicePixelRatio||2};return a}),c("src/hybrid/api/event",["require"],function(){var a={},b=["layerCreateSuccess","layerLoadFinish","layerPullDown","layerPoped","tap","slide","menuPressed","layerGoBack","backPressedBeforeExit"],c={};return a.on=function(a,d,e,f,g){var h=this;if(e=e||this.getCurrentId&&this.getCurrentId()||"empty",f=f||this,c[a]){for(var i=0,j=c[a].listener,k=j.length;k>i&&(j[i].id!=e||j[i].callback!=d||j[i].context!=f);i++);i==k&&c[a].listener.push({id:e,context:f,callback:d}),c[a].listened||(document.addEventListener(a,c[a].callback,!1),c[a].listened=!0)}else c[a]={},c[a].listener=[],c[a].callback=b.indexOf(a)<0?function(b){var d=JSON.parse(decodeURIComponent(b.data)),e=c[a].listener;b.origin=b.sender||d.origin,b.data=d.data,b.reciever=b.target=d.target;for(var f=0,i=e.length;i>f;f++)d.callEvent&&(b.callback=function(a){h.fire(d.callEvent,b.origin,a)}),e[f].callback.call(e[f].context,b,e[f].id);g&&h.off(a)}:function(b){for(var d=c[a].listener,e=0,f=d.length;f>e;e++)d[e].id==b.origin&&d[e].callback.call(d[e].context,b,d[e].id);g&&h.off(a)},this.on(a,d,e,f)},a.off=function(a,b,d,e){if(d=d||this.getCurrentId&&this.getCurrentId()||"empty",e=e||this,c[a])if(b){for(var f=0,g=c[a].listener,h="all"==b,i=g.length;i>f;f++)if(g[f].id==d&&g[f].context==e&&(h||g[f].callback==b)){g.splice&&g.splice(f,1);break}0==g.length&&c[a].listened&&(document.removeEventListener(a,c[a].callback),c[a].listened=!1)}else document.removeEventListener(a,c[a].callback),c[a].listened=!1,c[a].listener=[];else console.log("无此事件绑定")},a.once=function(a,b,c,d){this.on(a,b,c,d,"isonce")},a}),c("src/hybrid/api/layer",["require","./config","./event"],function(a){var b=a("./config"),c=a("./event"),d={},e=(b.DEVICE_PR,"0"),f=function(a){var b=document.createElement("a");return b.href=a,b.href},g=function(a,b){try{var c=window.nuwa_frame||window.lc_bridge;return c[a].apply(c,b)}catch(d){console.log("BlendUI_Api_Error:"+a+"======"),console.log(d.stack)}};return d.prepare=function(a,b){var c={};return["url","pullToRefresh"].forEach(function(a){void 0!==b[a]&&(c[a]=b[a])}),c.url=f(c.url),g("prepareLayer",[a,JSON.stringify(c)]),a},d.resume=function(a,b){if(!d.isActive(a)){var c={fx:"slide",reverse:!1,duration:"normal"};b&&(b.fx&&(c.fx=b.fx),b.reverse&&(c.reverse=b.reverse),b.duration&&(c.duration=b.duration)),g("resumeLayer",[a,JSON.stringify(c)]),setTimeout(function(){d.canGoBack(a)&&d.clearHistory(a)},500),d.fire("in",!1,a)}},d.back=function(a){a=a||d.getCurrentId(),d.isActive(a)&&g("backToPreviousLayer",arguments)},d.reload=function(a,b){return(1==arguments.length||0==arguments.length)&&(b=a,a=d.getCurrentId()),b?(b=f(b),g("layerLoadUrl",[a,b])):(b=d.getCurrentUrl(),d.replaceUrl(a,b)),a},d.replaceUrl=function(a,b){return d.fire("replace",a,b),a},d.destroy=function(a){return a||(a=d.getCurrentId()),g("destroyLayer",[a]),a},d.stopPullRefresh=function(a){return a||(a=d.getCurrentId()),g("layerStopRefresh",[a]),a},d.isAvailable=function(){return g("isLayerAvailable",arguments)},d.getCurrentId=function(){return g("currentLayerId",arguments)},d.getCurrentUrl=function(){return g("currentLayerUrl",arguments)},d.stopLoading=function(a){return a=a||d.getCurrentId(),g("layerStopLoading",[a])},d.on=c.on,d.once=c.once,d.off=c.off,d.fire=function(a,b,c,f){b?"top"==b&&(b=e):b="";var h=d.getCurrentId(),i={};if(i.data=c||"",i.target=b,i.origin=h,f){i.callEvent="call_"+h+"_"+1*new Date;var j=function(a){f(a.data),d.off(i.callEvent)};d.on(i.callEvent,j)}g("layerPostMessage",[h,b,a,encodeURIComponent(JSON.stringify(i))])},d.postMessage=function(a,b,c){d.fire("message",b,a,c)},d.getOriginalUrl=function(a){return a||(a=d.getCurrentId()),g("layerGetOriginalUrl",[a])},d.getUrl=function(a){return a||(a=d.getCurrentId()),g("layerGetUrl",[a])},d.canGoBack=function(a){return a||(a=d.getCurrentId()),g("layerCanGoBack",[a])},d.canGoBackOrForward=function(a,b){return b||(b=d.getCurrentId()),g("layerCanGoBackOrForward",[b,a||1])},d.isActive=function(a){return a||(a=d.getCurrentId()),g("isLayerActive",[a])},d.clearHistory=function(a){return a||(a=d.getCurrentId()),g("layerClearHistory",[a])},d}),c("src/hybrid/api/layerGroup",["require","./config","./event"],function(a){var b=a("./config"),c=(a("./event"),{}),d=b.DEVICE_PR,e=function(a){var b=document.createElement("a");return b.href=a,b.href},f=function(a,b){try{var c=window.nuwa_frame||window.lc_bridge;return c[a].apply(c,b)}catch(d){console.log("BlendUI_Api_Error:"+a+"======"),console.log(d)}};return c.create=function(a,b,c){var g={id:a||uniqid(),infos:b};b.forEach(function(a){a.url=e(a.url)}),c.active&&(g.active=c.active);var h={};return["left","top","width","height"].forEach(function(a){void 0!==c[a]&&(h[a]=c[a]*d)}),f("addLayerGroup",[JSON.stringify(g),JSON.stringify(h)]),a},c.showLayer=function(a){return f("showLayerInGroup",arguments),a},c.addLayer=function(a){return f("addLayerInGroup",arguments),a},c.removeLayer=function(a){return f("removeLayerInGroup",arguments),a},c.updateLayer=function(a){return f("updateLayerInGroup",arguments),a},c.toggleScroll=function(a){c.setScroll(a,!c.isScroll(a))},c.isScroll=function(){return f("canLayerGroupScroll",arguments)},c.setScroll=function(){f("setCanLayerGroupScroll",arguments)},c}),c("src/hybrid/api/component/slider",["require","../config","../event"],function(a){var b=a("../config"),c=a("../event"),d={},e=b.DEVICE_PR,f=function(a,b){try{var c=window.nuwa_widget||window.lc_bridge;return c[a].apply(c,b)}catch(d){console.log("BlendUI_Api_Error:"+a+"======"),console.log(d)}};return d.add=function(a,b){var c={left:0,top:0,width:window.innerWidth*e,height:window.innerHeight*e,fixed:!1};return["left","top","width","height","fixed"].forEach(function(a){b&&void 0!=b[a]&&(c[a]=b[a]*e)}),c.top+=window.pageYOffset*e,f("addComponent",[a,"UIBase","com.baidu.lightui.component.slider.Slider",JSON.stringify(c)]),d},d.addItems=function(a,b){return f("componentExecuteNative",[a,"addItems",JSON.stringify(b)]),d},d.setConfig=function(a,b){return f("componentExecuteNative",[a,"setSliderConfig",JSON.stringify(b)]),d},d.setupIndicator=function(a,c){return c.layoutRules=[b.CENTER_HORIZONTAL,b.ALIGN_PARENT_BOTTOM],c.verticalMargin=Math.round((c.verticalMargin||5)*e),c.unitSize=Math.round((c.unitSize||10)*e),c.unitSpace=Math.round((c.unitSpace||5)*e),f("componentExecuteNative",[a,"setupIndicator",JSON.stringify(c)]),d},d.next=function(a){return f("componentExecuteNative",[a,"next"]),d},d.prev=function(a){return f("componentExecuteNative",[a,"prev"]),d},d.slideTo=function(a,b,c){return f("componentExecuteNative",[a,"slideTo",JSON.stringify({index:b,isAnim:!!c})]),d},d.on=c.on,d.off=c.off,d.remove=function(a){f("removeComponent",[a,"UIBase"])},d}),c("src/hybrid/api/component",["require","./component/slider"],function(a){var b={};return b.slider=a("./component/slider"),b}),c("src/hybrid/runtime",["require","./api/core","./api/layer","./api/layerGroup","./api/component"],function(a){var b={},c=a("./api/core"),d=a("./api/layer"),e=a("./api/layerGroup"),f=a("./api/component");return b.core=c,b.layer=d,b.layerGroup=e,b.component=f,b}),c("src/hybrid/blend",["require","../common/lib","./runtime"],function(a){var b=(a("../common/lib"),a("./runtime")),c={},d={},e=/iP(ad|hone|od)/.test(navigator.userAgent);return e||document.addEventListener("runtimeready",function(){c.readyState=!0},!1),c.version="alpha",c.api={},c.register=function(a){d[a.id]=a},c.cancel=function(a){delete d[a.id]},c.get=function(a){return d[a]},c.ready=function(a){var b=function(){d&&clearTimeout(d),a(c),document.removeEventListener("runtimeready",b)};if(c.readyState)b();else{var d=setTimeout(b,3e3);document.addEventListener("runtimeready",b,!1)}},c.api.layer=b.layer,c.api.layerGroup=b.layerGroup,c.api.core=b.core,c}),c("src/hybrid/Control",["require","../common/lib","./blend","./runtime"],function(a){function b(a){a=a||{},this.id||a.id||(this.id=c.getUniqueID()+1*new Date),this.main=a.main?a.main:this.initMain(a),this.initOptions(a),d.register(this)}var c=a("../common/lib"),d=a("./blend"),e=a("./runtime"),f=!0;return b.prototype={constructor:b,nativeObj:{},currentStates:{},_listener:{},getType:function(){return this.type||"control"},initOptions:function(a){a=a||{},this.setProperties(a)},initMain:function(){var a=document.createElement("div");return a.setAttribute("data-blend",this.getType()),a.setAttribute("data-blend-id",this.id),a},render:function(){return this.fire("beforerender"),this.main.id||(this.main.id=c.getUniqueID()),this.paint()?this.fire("afterrender"):this.fire("renderfailed"),this.main},paint:function(){},appendTo:function(a){this.main.appendChild(a)},insertBefore:function(a){this.main.parentNode.insertBefore(a,this.main)},dispose:function(){this.fire("beforedistory");try{f&&e[this.type].destroy(this.id)}catch(a){}this.fire("afterdistory")},clearDOMEvents:function(){},destroy:function(){this.dispose(),d.cancel(this)},get:function(a){var b=this["get"+c.toPascal(a)];return"function"==typeof b?b.call(this):this[a]},set:function(a,b){var d=this["set"+c.toPascal(a)];if("function"==typeof d)return d.call(this,b);var e={};e[a]=b,this.setProperties(e)},setProperties:function(a){c.extend(this,a)},disable:function(){this.addState("disabled")},enable:function(){this.removeState("disabled")},isDisabled:function(){return this.hasState("disabled")},"in":function(){this.removeState("hidden"),this.fire("show")},out:function(){this.addState("hidden"),this.fire("hide")},toggle:function(){this[this.isHidden()?"in":"out"]()},isHidden:function(){return this.hasState("hidden")},addState:function(a){this.hasState(a)||(this.currentStates[a]=!0)},removeState:function(a){this.hasState(a)&&(this.currentStates[a]=!1)},toggleState:function(a){var b=this.hasState(a)?"removeState":"addState";this[b](a)},hasState:function(a){return!!this.currentStates[a]},on:function(a,b){var c=this;c._listener[a]||(c._listener[a]=[]),c._listener[a].push(b)},off:function(a,b){var c=this._listener[a];if(c){if(!b)return delete this._listener[a],void 0;c.splice(types.indexOf(b),1),c.length||delete this._listener[a]}},fire:function(a,b,c){if(!a)throw new Error("未指定事件名");var d=this._listener[a];if(c=c||this,d)for(var e=0,f=d.length;f>e;e++)d[e].apply(c,b);return event}},b}),c("src/hybrid/Layer",["require","./blend","../common/lib","./runtime","./Control"],function(a){var b=a("./blend"),c=a("../common/lib"),d=a("./runtime"),e=a("./Control"),f=!0,g=d.layer,h=0;b.ready(function(){try{g.on("in",function(a){var c=b.get(a.data);c&&c.onshow&&c.onshow()}),g.on("replace",function(a){var b=a.data;location.replace(b)})}catch(a){console.log(a.message)}});var i=function(a){return e.call(this,a),console.info("Time createLayer:"+(h=+new Date)),this._init(a),this};return c.inherits(i,e),i.prototype.constructor=i,i.prototype._init=function(a){return a.url&&(this.originalUrl=a.url),this._initEvent(),this.render(),a.active&&this.in(),this},i.prototype.type="layer",i.prototype.maxLoadingTime=1500,i.prototype.autoStopLoading=!0,i.prototype._initEvent=function(){var a=this,b=null;return a.ptrFn&&g.on("layerPullDown",function(){a.ptrFn.apply(a,arguments)},a.id,a),g.on("layerCreateSuccess",function(){a.autoStopLoading&&a.stopLoading(),console.info("Time layerCreateSuccess:"+(new Date-h)),a.afterrender&&a.afterrender.apply(a,arguments)},a.id,a),g.on("layerLoadFinish",function(c){a.autoStopLoading||(b=setTimeout(function(){a.stopLoading()},a.maxLoadingTime)),a.autoStopLoading&&a.stopLoading(),c.url!==a.url&&(a.autoStopLoading&&a.stopLoading(),a.url=c.url,a.changeUrl&&a.changeUrl.call(a,c,a.url)),console.info("Time layerLoadFinish:"+(new Date-h)),a.onload&&a.onload.apply(a,arguments)},a.id,a),g.on("layerPoped",function(){a.onhide&&a.onhide.apply(a,arguments),g.fire("out",!1,a.id)},a.id,a),a.on("afterdistory",function(){clearTimeout(b),a.ptrFn&&g.off("layerPullDown","all",a.id,a),g.off("layerCreateSuccess","all",a.id,a),g.off("layerLoadFinish","all",a.id,a),g.off("layerPoped","all",a.id,a)}),a},i.prototype.paint=function(){var a=this;return f&&g.prepare(a.id,{url:a.url,top:a.top,left:a.left,bottom:a.bottom,right:a.right,pullToRefresh:a.pullToRefresh}),this},i.prototype.in=function(){var a=this;return g.isAvailable(this.id)||a.render(),e.prototype.in.apply(a,arguments),g.resume(a.id,{reverse:a.reverse,fx:a.fx,duration:a.duration,timingFn:a.timingFn}),this},i.prototype.out=function(){return e.prototype.out.apply(this,arguments),g.back(),this},i.prototype.reload=function(a){return a&&this.url!=a&&g.reload(this.id,a),this},i.prototype.replace=function(a){return a||(a=this.url),g.replaceUrl(this.id,a),this},i.prototype.stopPullRefresh=function(){return g.stopPullRefresh(this.id),this},i.prototype.destroy=function(){e.prototype.destroy.apply(this,arguments)},i.prototype.stopLoading=function(){g.stopLoading(this.id)},i.prototype.getUrl=function(){return g.getUrl(this.id)},i.prototype.canGoBack=function(){return g.canGoBack(this.id)},i.prototype.clearHistory=function(){g.clearHistory(this.id)},i.prototype.isActive=function(){return g.isActive(this.id)},i}),c("src/hybrid/LayerGroup",["require","./blend","../common/lib","./runtime","./Control"],function(a){var b=(a("./blend"),a("../common/lib")),c=a("./runtime"),d=a("./Control"),e=!0,f=c.layerGroup,g=function(a){d.call(this,a),this._init(a)};return b.inherits(g,d),g.prototype.constructor=g,g.prototype.type="layerGroup",g.prototype._init=function(){var a=this,c={},d=null;if(a.layers&&a.layers.length){for(var e=0,f=a.layers.length;f>e;e++)a.layers[e].id||(a.layers[e].id=b.getUniqueID()),a.layers[e].active&&(d=a.layers[e].id),c[a.layers[e].id]=a.layers[e];return a._layers=c,a.activeId=d||a.layers[0].id,a._initEvent(),a.render(),this}},g.prototype._initEvent=function(){var a=this,b=function(b){console.info("group selected:"+b.groupId),b.groupId==a.id&&(a.onselected&&a.onselected.call(a,b),a._layers[b.layerId].onshow&&a._layers[b.layerId].onshow.call(a),a.activeId!==b.layerId&&a._layers[a.activeId].onhide&&a._layers[a.activeId].onhide.call(a),a.activeId=b.layerId)},c=function(){var b=+new Date,c=0;return function(d){console.info("group scroll:"+d.groupId),console.info("group scroll:"+d.groupPixelOffset),console.info("group scroll:"+d.layerId),console.info("group scroll:"+d.groupPercentOffset);var e=+new Date,f=0==d.groupPercentOffset||1==d.groupPercentOffset;if(!(f||100>e-b)){b=e;var g=d.groupPixelOffset-c>0?"left":"right",h=d.layerId==a.activeId?"left":"right";c=d.groupPixelOffset,d.swipe=f?"stop":g,d.dir=f?"stop":h,d.groupId==a.id&&a.onscroll&&a.onscroll.call(a,d)}}};return document.addEventListener("groupSelected",b,!1),document.addEventListener("groupScrolled",c(),!1),null},g.prototype.paint=function(){var a=this;if(e){var b={left:a.left,top:a.top,width:a.width,height:a.height,active:a.activeId};f.create(a.id,a.layers,b)}return this},g.prototype.active=function(a){return f.showLayer(this.id,a),this},g.prototype.remove=function(a){return f.removeLayer(this.id,a),delete this._layers[a],this},g.prototype.add=function(a,c){return a.id||(a.id=b.getUniqueID()),f.addLayer(this.id,a,c),this._layers[a.id]=a,this},g.prototype.updata=function(a,c){return f.updateLayer(this.id,a,c),b.extend(this._layers[c.id],c),this},g.prototype.destroy=function(){d.prototype.destroy.apply(this,arguments)},g.prototype.isScroll=function(){return f.isScroll(this.id)},g.prototype.setScroll=function(a){f.setScroll(this.id,a)},g.prototype.toggleScroll=function(){f.toggleScroll(this.id)},g}),c("src/hybrid/Slider",["require","./blend","../common/lib","./runtime","./Control"],function(a){var b=(a("./blend"),a("../common/lib")),c=a("./runtime"),d=a("./Control"),e=!0,f=c.component.slider,g=function(a){return d.call(this,a),this._init(a),this};return b.inherits(g,d),g.prototype.constructor=g,g.prototype._init=function(){return this._initEvent(),this.render(),this},g.prototype.type="slider",g.prototype._initEvent=function(){var a=this;return f.on("tap",function(){a.tap&&a.tap.apply(a,arguments),a.fire("tap",arguments,a)},a.id,a),f.on("slide",function(){a.slide&&a.slide.apply(a,arguments),a.fire("slide",arguments,a)},a.id,a),a.on("afterdistory",function(){f.off("tap","all",a.id,a),f.off("slide","all",a.id,a)}),window.addEventListener("unload",function(){a.destroy()}),a},g.prototype.paint=function(){var a=this;return e&&(f.add(a.id,{top:a.top,left:a.left,width:a.width,height:a.height,fixed:a.fixed}),f.addItems(a.id,{images:a.images}),a.bgColor&&f.setConfig(a.id,{backgroundColor:a.bgColor}),a.hasIndicator&&f.setupIndicator(a.id,{activeColor:a.activeColor,inactiveColor:a.inactiveColor,unitSize:a.unitSize,unitSpace:a.unitSpace,verticalMargin:a.verticalMargin})),this},g.prototype.prev=function(){f.prev(me.id)},g.prototype.next=function(){f.next(me.id)},g.prototype.slideTo=function(a){f.slideTo(this.id,a,!0)},g.prototype.destroy=function(){f.remove(this.id),d.prototype.destroy.apply(this,arguments)},g}),b(["src/hybrid/blend","src/hybrid/Layer","src/hybrid/LayerGroup","src/hybrid/Slider"],function(a,b,c,d){window.Blend=a||{},window.Blend.Layer=b,window.Blend.LayerGroup=c,window.Blend.Slider=d},null,!0),c("src/hybrid/main",function(){})}();