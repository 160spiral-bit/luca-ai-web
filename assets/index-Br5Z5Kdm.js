(function(){const W=document.createElement("link").relList;if(W&&W.supports&&W.supports("modulepreload"))return;for(const k of document.querySelectorAll('link[rel="modulepreload"]'))O(k);new MutationObserver(k=>{for(const p of k)if(p.type==="childList")for(const m of p.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&O(m)}).observe(document,{childList:!0,subtree:!0});function o(k){const p={};return k.integrity&&(p.integrity=k.integrity),k.referrerPolicy&&(p.referrerPolicy=k.referrerPolicy),k.crossOrigin==="use-credentials"?p.credentials="include":k.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function O(k){if(k.ep)return;k.ep=!0;const p=o(k);fetch(k.href,p)}})();var ua=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function gc(E){return E&&E.__esModule&&Object.prototype.hasOwnProperty.call(E,"default")?E.default:E}var eo={exports:{}},qr={},to={exports:{}},Le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ju;function xf(){if(Ju)return Le;Ju=1;var E=Symbol.for("react.element"),W=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),m=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),j=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),C=Symbol.iterator;function v(w){return w===null||typeof w!="object"?null:(w=C&&w[C]||w["@@iterator"],typeof w=="function"?w:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,f={};function y(w,R,pe){this.props=w,this.context=R,this.refs=f,this.updater=pe||g}y.prototype.isReactComponent={},y.prototype.setState=function(w,R){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,R,"setState")},y.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function x(){}x.prototype=y.prototype;function S(w,R,pe){this.props=w,this.context=R,this.refs=f,this.updater=pe||g}var A=S.prototype=new x;A.constructor=S,_(A,y.prototype),A.isPureReactComponent=!0;var U=Array.isArray,D=Object.prototype.hasOwnProperty,Y={current:null},G={key:!0,ref:!0,__self:!0,__source:!0};function te(w,R,pe){var ie,ae={},Te=null,ce=null;if(R!=null)for(ie in R.ref!==void 0&&(ce=R.ref),R.key!==void 0&&(Te=""+R.key),R)D.call(R,ie)&&!G.hasOwnProperty(ie)&&(ae[ie]=R[ie]);var le=arguments.length-2;if(le===1)ae.children=pe;else if(1<le){for(var me=Array(le),ke=0;ke<le;ke++)me[ke]=arguments[ke+2];ae.children=me}if(w&&w.defaultProps)for(ie in le=w.defaultProps,le)ae[ie]===void 0&&(ae[ie]=le[ie]);return{$$typeof:E,type:w,key:Te,ref:ce,props:ae,_owner:Y.current}}function F(w,R){return{$$typeof:E,type:w.type,key:R,ref:w.ref,props:w.props,_owner:w._owner}}function J(w){return typeof w=="object"&&w!==null&&w.$$typeof===E}function ye(w){var R={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(pe){return R[pe]})}var b=/\/+/g;function B(w,R){return typeof w=="object"&&w!==null&&w.key!=null?ye(""+w.key):R.toString(36)}function l(w,R,pe,ie,ae){var Te=typeof w;(Te==="undefined"||Te==="boolean")&&(w=null);var ce=!1;if(w===null)ce=!0;else switch(Te){case"string":case"number":ce=!0;break;case"object":switch(w.$$typeof){case E:case W:ce=!0}}if(ce)return ce=w,ae=ae(ce),w=ie===""?"."+B(ce,0):ie,U(ae)?(pe="",w!=null&&(pe=w.replace(b,"$&/")+"/"),l(ae,R,pe,"",function(ke){return ke})):ae!=null&&(J(ae)&&(ae=F(ae,pe+(!ae.key||ce&&ce.key===ae.key?"":(""+ae.key).replace(b,"$&/")+"/")+w)),R.push(ae)),1;if(ce=0,ie=ie===""?".":ie+":",U(w))for(var le=0;le<w.length;le++){Te=w[le];var me=ie+B(Te,le);ce+=l(Te,R,pe,me,ae)}else if(me=v(w),typeof me=="function")for(w=me.call(w),le=0;!(Te=w.next()).done;)Te=Te.value,me=ie+B(Te,le++),ce+=l(Te,R,pe,me,ae);else if(Te==="object")throw R=String(w),Error("Objects are not valid as a React child (found: "+(R==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.");return ce}function q(w,R,pe){if(w==null)return w;var ie=[],ae=0;return l(w,ie,"","",function(Te){return R.call(pe,Te,ae++)}),ie}function we(w){if(w._status===-1){var R=w._result;R=R(),R.then(function(pe){(w._status===0||w._status===-1)&&(w._status=1,w._result=pe)},function(pe){(w._status===0||w._status===-1)&&(w._status=2,w._result=pe)}),w._status===-1&&(w._status=0,w._result=R)}if(w._status===1)return w._result.default;throw w._result}var ee={current:null},re={transition:null},Q={ReactCurrentDispatcher:ee,ReactCurrentBatchConfig:re,ReactCurrentOwner:Y};function se(){throw Error("act(...) is not supported in production builds of React.")}return Le.Children={map:q,forEach:function(w,R,pe){q(w,function(){R.apply(this,arguments)},pe)},count:function(w){var R=0;return q(w,function(){R++}),R},toArray:function(w){return q(w,function(R){return R})||[]},only:function(w){if(!J(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},Le.Component=y,Le.Fragment=o,Le.Profiler=k,Le.PureComponent=S,Le.StrictMode=O,Le.Suspense=h,Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,Le.act=se,Le.cloneElement=function(w,R,pe){if(w==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+w+".");var ie=_({},w.props),ae=w.key,Te=w.ref,ce=w._owner;if(R!=null){if(R.ref!==void 0&&(Te=R.ref,ce=Y.current),R.key!==void 0&&(ae=""+R.key),w.type&&w.type.defaultProps)var le=w.type.defaultProps;for(me in R)D.call(R,me)&&!G.hasOwnProperty(me)&&(ie[me]=R[me]===void 0&&le!==void 0?le[me]:R[me])}var me=arguments.length-2;if(me===1)ie.children=pe;else if(1<me){le=Array(me);for(var ke=0;ke<me;ke++)le[ke]=arguments[ke+2];ie.children=le}return{$$typeof:E,type:w.type,key:ae,ref:Te,props:ie,_owner:ce}},Le.createContext=function(w){return w={$$typeof:m,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},w.Provider={$$typeof:p,_context:w},w.Consumer=w},Le.createElement=te,Le.createFactory=function(w){var R=te.bind(null,w);return R.type=w,R},Le.createRef=function(){return{current:null}},Le.forwardRef=function(w){return{$$typeof:c,render:w}},Le.isValidElement=J,Le.lazy=function(w){return{$$typeof:I,_payload:{_status:-1,_result:w},_init:we}},Le.memo=function(w,R){return{$$typeof:j,type:w,compare:R===void 0?null:R}},Le.startTransition=function(w){var R=re.transition;re.transition={};try{w()}finally{re.transition=R}},Le.unstable_act=se,Le.useCallback=function(w,R){return ee.current.useCallback(w,R)},Le.useContext=function(w){return ee.current.useContext(w)},Le.useDebugValue=function(){},Le.useDeferredValue=function(w){return ee.current.useDeferredValue(w)},Le.useEffect=function(w,R){return ee.current.useEffect(w,R)},Le.useId=function(){return ee.current.useId()},Le.useImperativeHandle=function(w,R,pe){return ee.current.useImperativeHandle(w,R,pe)},Le.useInsertionEffect=function(w,R){return ee.current.useInsertionEffect(w,R)},Le.useLayoutEffect=function(w,R){return ee.current.useLayoutEffect(w,R)},Le.useMemo=function(w,R){return ee.current.useMemo(w,R)},Le.useReducer=function(w,R,pe){return ee.current.useReducer(w,R,pe)},Le.useRef=function(w){return ee.current.useRef(w)},Le.useState=function(w){return ee.current.useState(w)},Le.useSyncExternalStore=function(w,R,pe){return ee.current.useSyncExternalStore(w,R,pe)},Le.useTransition=function(){return ee.current.useTransition()},Le.version="18.3.1",Le}var ec;function fo(){return ec||(ec=1,to.exports=xf()),to.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tc;function yf(){if(tc)return qr;tc=1;var E=fo(),W=Symbol.for("react.element"),o=Symbol.for("react.fragment"),O=Object.prototype.hasOwnProperty,k=E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function m(c,h,j){var I,C={},v=null,g=null;j!==void 0&&(v=""+j),h.key!==void 0&&(v=""+h.key),h.ref!==void 0&&(g=h.ref);for(I in h)O.call(h,I)&&!p.hasOwnProperty(I)&&(C[I]=h[I]);if(c&&c.defaultProps)for(I in h=c.defaultProps,h)C[I]===void 0&&(C[I]=h[I]);return{$$typeof:W,type:c,key:v,ref:g,props:C,_owner:k.current}}return qr.Fragment=o,qr.jsx=m,qr.jsxs=m,qr}var nc;function wf(){return nc||(nc=1,eo.exports=yf()),eo.exports}var u=wf(),ca={},no={exports:{}},wt={},ro={exports:{}},so={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rc;function kf(){return rc||(rc=1,(function(E){function W(re,Q){var se=re.length;re.push(Q);e:for(;0<se;){var w=se-1>>>1,R=re[w];if(0<k(R,Q))re[w]=Q,re[se]=R,se=w;else break e}}function o(re){return re.length===0?null:re[0]}function O(re){if(re.length===0)return null;var Q=re[0],se=re.pop();if(se!==Q){re[0]=se;e:for(var w=0,R=re.length,pe=R>>>1;w<pe;){var ie=2*(w+1)-1,ae=re[ie],Te=ie+1,ce=re[Te];if(0>k(ae,se))Te<R&&0>k(ce,ae)?(re[w]=ce,re[Te]=se,w=Te):(re[w]=ae,re[ie]=se,w=ie);else if(Te<R&&0>k(ce,se))re[w]=ce,re[Te]=se,w=Te;else break e}}return Q}function k(re,Q){var se=re.sortIndex-Q.sortIndex;return se!==0?se:re.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;E.unstable_now=function(){return p.now()}}else{var m=Date,c=m.now();E.unstable_now=function(){return m.now()-c}}var h=[],j=[],I=1,C=null,v=3,g=!1,_=!1,f=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,S=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(re){for(var Q=o(j);Q!==null;){if(Q.callback===null)O(j);else if(Q.startTime<=re)O(j),Q.sortIndex=Q.expirationTime,W(h,Q);else break;Q=o(j)}}function U(re){if(f=!1,A(re),!_)if(o(h)!==null)_=!0,we(D);else{var Q=o(j);Q!==null&&ee(U,Q.startTime-re)}}function D(re,Q){_=!1,f&&(f=!1,x(te),te=-1),g=!0;var se=v;try{for(A(Q),C=o(h);C!==null&&(!(C.expirationTime>Q)||re&&!ye());){var w=C.callback;if(typeof w=="function"){C.callback=null,v=C.priorityLevel;var R=w(C.expirationTime<=Q);Q=E.unstable_now(),typeof R=="function"?C.callback=R:C===o(h)&&O(h),A(Q)}else O(h);C=o(h)}if(C!==null)var pe=!0;else{var ie=o(j);ie!==null&&ee(U,ie.startTime-Q),pe=!1}return pe}finally{C=null,v=se,g=!1}}var Y=!1,G=null,te=-1,F=5,J=-1;function ye(){return!(E.unstable_now()-J<F)}function b(){if(G!==null){var re=E.unstable_now();J=re;var Q=!0;try{Q=G(!0,re)}finally{Q?B():(Y=!1,G=null)}}else Y=!1}var B;if(typeof S=="function")B=function(){S(b)};else if(typeof MessageChannel<"u"){var l=new MessageChannel,q=l.port2;l.port1.onmessage=b,B=function(){q.postMessage(null)}}else B=function(){y(b,0)};function we(re){G=re,Y||(Y=!0,B())}function ee(re,Q){te=y(function(){re(E.unstable_now())},Q)}E.unstable_IdlePriority=5,E.unstable_ImmediatePriority=1,E.unstable_LowPriority=4,E.unstable_NormalPriority=3,E.unstable_Profiling=null,E.unstable_UserBlockingPriority=2,E.unstable_cancelCallback=function(re){re.callback=null},E.unstable_continueExecution=function(){_||g||(_=!0,we(D))},E.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<re?Math.floor(1e3/re):5},E.unstable_getCurrentPriorityLevel=function(){return v},E.unstable_getFirstCallbackNode=function(){return o(h)},E.unstable_next=function(re){switch(v){case 1:case 2:case 3:var Q=3;break;default:Q=v}var se=v;v=Q;try{return re()}finally{v=se}},E.unstable_pauseExecution=function(){},E.unstable_requestPaint=function(){},E.unstable_runWithPriority=function(re,Q){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var se=v;v=re;try{return Q()}finally{v=se}},E.unstable_scheduleCallback=function(re,Q,se){var w=E.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?w+se:w):se=w,re){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=se+R,re={id:I++,callback:Q,priorityLevel:re,startTime:se,expirationTime:R,sortIndex:-1},se>w?(re.sortIndex=se,W(j,re),o(h)===null&&re===o(j)&&(f?(x(te),te=-1):f=!0,ee(U,se-w))):(re.sortIndex=R,W(h,re),_||g||(_=!0,we(D))),re},E.unstable_shouldYield=ye,E.unstable_wrapCallback=function(re){var Q=v;return function(){var se=v;v=Q;try{return re.apply(this,arguments)}finally{v=se}}}})(so)),so}var sc;function bf(){return sc||(sc=1,ro.exports=kf()),ro.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ac;function Sf(){if(ac)return wt;ac=1;var E=fo(),W=bf();function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var O=new Set,k={};function p(e,t){m(e,t),m(e+"Capture",t)}function m(e,t){for(k[e]=t,e=0;e<t.length;e++)O.add(t[e])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,j=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,I={},C={};function v(e){return h.call(C,e)?!0:h.call(I,e)?!1:j.test(e)?C[e]=!0:(I[e]=!0,!1)}function g(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _(e,t,n,r){if(t===null||typeof t>"u"||g(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function f(e,t,n,r,s,a,d){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=d}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){y[e]=new f(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];y[t]=new f(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){y[e]=new f(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){y[e]=new f(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){y[e]=new f(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){y[e]=new f(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){y[e]=new f(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){y[e]=new f(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){y[e]=new f(e,5,!1,e.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function S(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(x,S);y[t]=new f(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(x,S);y[t]=new f(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(x,S);y[t]=new f(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){y[e]=new f(e,1,!1,e.toLowerCase(),null,!1,!1)}),y.xlinkHref=new f("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){y[e]=new f(e,1,!1,e.toLowerCase(),null,!0,!0)});function A(e,t,n,r){var s=y.hasOwnProperty(t)?y[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_(t,n,s,r)&&(n=null),r||s===null?v(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var U=E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,D=Symbol.for("react.element"),Y=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),te=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),J=Symbol.for("react.provider"),ye=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),l=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),we=Symbol.for("react.lazy"),ee=Symbol.for("react.offscreen"),re=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=re&&e[re]||e["@@iterator"],typeof e=="function"?e:null)}var se=Object.assign,w;function R(e){if(w===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);w=t&&t[1]||""}return`
`+w+e}var pe=!1;function ie(e,t){if(!e||pe)return"";pe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(Z){var r=Z}Reflect.construct(e,[],t)}else{try{t.call()}catch(Z){r=Z}e.call(t.prototype)}else{try{throw Error()}catch(Z){r=Z}e()}}catch(Z){if(Z&&r&&typeof Z.stack=="string"){for(var s=Z.stack.split(`
`),a=r.stack.split(`
`),d=s.length-1,z=a.length-1;1<=d&&0<=z&&s[d]!==a[z];)z--;for(;1<=d&&0<=z;d--,z--)if(s[d]!==a[z]){if(d!==1||z!==1)do if(d--,z--,0>z||s[d]!==a[z]){var L=`
`+s[d].replace(" at new "," at ");return e.displayName&&L.includes("<anonymous>")&&(L=L.replace("<anonymous>",e.displayName)),L}while(1<=d&&0<=z);break}}}finally{pe=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?R(e):""}function ae(e){switch(e.tag){case 5:return R(e.type);case 16:return R("Lazy");case 13:return R("Suspense");case 19:return R("SuspenseList");case 0:case 2:case 15:return e=ie(e.type,!1),e;case 11:return e=ie(e.type.render,!1),e;case 1:return e=ie(e.type,!0),e;default:return""}}function Te(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case Y:return"Portal";case F:return"Profiler";case te:return"StrictMode";case B:return"Suspense";case l:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ye:return(e.displayName||"Context")+".Consumer";case J:return(e._context.displayName||"Context")+".Provider";case b:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case q:return t=e.displayName||null,t!==null?t:Te(e.type)||"Memo";case we:t=e._payload,e=e._init;try{return Te(e(t))}catch{}}return null}function ce(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Te(t);case 8:return t===te?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function le(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function me(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ke(e){var t=me(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(d){r=""+d,a.call(this,d)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(d){r=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ze(e){e._valueTracker||(e._valueTracker=ke(e))}function Me(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=me(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ue(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function i(e,t){var n=t.checked;return se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function X(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=le(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function H(e,t){t=t.checked,t!=null&&A(e,"checked",t,!1)}function T(e,t){H(e,t);var n=le(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?M(e,t.type,n):t.hasOwnProperty("defaultValue")&&M(e,t.type,le(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function N(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function M(e,t,n){(t!=="number"||Ue(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ne=Array.isArray;function oe(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+le(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function K(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(o(91));return se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function he(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(o(92));if(ne(n)){if(1<n.length)throw Error(o(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:le(n)}}function Se(e,t){var n=le(t.value),r=le(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function xe(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function je(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Be(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?je(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Oe,ft=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Oe=Oe||document.createElement("div"),Oe.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Oe.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function At(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ot={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sn=["Webkit","ms","Moz","O"];Object.keys(ot).forEach(function(e){Sn.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ot[t]=ot[e]})});function Ke(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ot.hasOwnProperty(e)&&ot[e]?(""+t).trim():t+"px"}function _n(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Ke(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var dr=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kt(e,t){if(t){if(dr[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(o(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(t.style!=null&&typeof t.style!="object")throw Error(o(62))}}function Bn(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fr=null;function pr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var mr=null,Gt=null,Ct=null;function Nn(e){if(e=Dr(e)){if(typeof mr!="function")throw Error(o(280));var t=e.stateNode;t&&(t=_s(t),mr(e.stateNode,e.type,t))}}function vo(e){Gt?Ct?Ct.push(e):Ct=[e]:Gt=e}function xo(){if(Gt){var e=Gt,t=Ct;if(Ct=Gt=null,Nn(e),t)for(e=0;e<t.length;e++)Nn(t[e])}}function yo(e,t){return e(t)}function wo(){}var va=!1;function ko(e,t,n){if(va)return e(t,n);va=!0;try{return yo(e,t,n)}finally{va=!1,(Gt!==null||Ct!==null)&&(wo(),xo())}}function hr(e,t){var n=e.stateNode;if(n===null)return null;var r=_s(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var xa=!1;if(c)try{var gr={};Object.defineProperty(gr,"passive",{get:function(){xa=!0}}),window.addEventListener("test",gr,gr),window.removeEventListener("test",gr,gr)}catch{xa=!1}function Sc(e,t,n,r,s,a,d,z,L){var Z=Array.prototype.slice.call(arguments,3);try{t.apply(n,Z)}catch(de){this.onError(de)}}var vr=!1,ns=null,rs=!1,ya=null,_c={onError:function(e){vr=!0,ns=e}};function Nc(e,t,n,r,s,a,d,z,L){vr=!1,ns=null,Sc.apply(_c,arguments)}function Cc(e,t,n,r,s,a,d,z,L){if(Nc.apply(this,arguments),vr){if(vr){var Z=ns;vr=!1,ns=null}else throw Error(o(198));rs||(rs=!0,ya=Z)}}function Cn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function bo(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function So(e){if(Cn(e)!==e)throw Error(o(188))}function Ec(e){var t=e.alternate;if(!t){if(t=Cn(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return So(s),e;if(a===r)return So(s),t;a=a.sibling}throw Error(o(188))}if(n.return!==r.return)n=s,r=a;else{for(var d=!1,z=s.child;z;){if(z===n){d=!0,n=s,r=a;break}if(z===r){d=!0,r=s,n=a;break}z=z.sibling}if(!d){for(z=a.child;z;){if(z===n){d=!0,n=a,r=s;break}if(z===r){d=!0,r=a,n=s;break}z=z.sibling}if(!d)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function _o(e){return e=Ec(e),e!==null?No(e):null}function No(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=No(e);if(t!==null)return t;e=e.sibling}return null}var Co=W.unstable_scheduleCallback,Eo=W.unstable_cancelCallback,Tc=W.unstable_shouldYield,jc=W.unstable_requestPaint,qe=W.unstable_now,zc=W.unstable_getCurrentPriorityLevel,wa=W.unstable_ImmediatePriority,To=W.unstable_UserBlockingPriority,ss=W.unstable_NormalPriority,Rc=W.unstable_LowPriority,jo=W.unstable_IdlePriority,as=null,Wt=null;function Ic(e){if(Wt&&typeof Wt.onCommitFiberRoot=="function")try{Wt.onCommitFiberRoot(as,e,void 0,(e.current.flags&128)===128)}catch{}}var Ot=Math.clz32?Math.clz32:Lc,Ac=Math.log,Oc=Math.LN2;function Lc(e){return e>>>=0,e===0?32:31-(Ac(e)/Oc|0)|0}var is=64,os=4194304;function xr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ls(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,a=e.pingedLanes,d=n&268435455;if(d!==0){var z=d&~s;z!==0?r=xr(z):(a&=d,a!==0&&(r=xr(a)))}else d=n&~s,d!==0?r=xr(d):a!==0&&(r=xr(a));if(r===0)return 0;if(t!==0&&t!==r&&(t&s)===0&&(s=r&-r,a=t&-t,s>=a||s===16&&(a&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ot(t),s=1<<n,r|=e[n],t&=~s;return r}function Dc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes;0<a;){var d=31-Ot(a),z=1<<d,L=s[d];L===-1?((z&n)===0||(z&r)!==0)&&(s[d]=Dc(z,t)):L<=t&&(e.expiredLanes|=z),a&=~z}}function ka(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zo(){var e=is;return is<<=1,(is&4194240)===0&&(is=64),e}function ba(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function yr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ot(t),e[t]=n}function Pc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-Ot(n),a=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~a}}function Sa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ot(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var We=0;function Ro(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Io,_a,Ao,Oo,Lo,Na=!1,us=[],rn=null,sn=null,an=null,wr=new Map,kr=new Map,on=[],Fc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Do(e,t){switch(e){case"focusin":case"focusout":rn=null;break;case"dragenter":case"dragleave":sn=null;break;case"mouseover":case"mouseout":an=null;break;case"pointerover":case"pointerout":wr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":kr.delete(t.pointerId)}}function br(e,t,n,r,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[s]},t!==null&&(t=Dr(t),t!==null&&_a(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Uc(e,t,n,r,s){switch(t){case"focusin":return rn=br(rn,e,t,n,r,s),!0;case"dragenter":return sn=br(sn,e,t,n,r,s),!0;case"mouseover":return an=br(an,e,t,n,r,s),!0;case"pointerover":var a=s.pointerId;return wr.set(a,br(wr.get(a)||null,e,t,n,r,s)),!0;case"gotpointercapture":return a=s.pointerId,kr.set(a,br(kr.get(a)||null,e,t,n,r,s)),!0}return!1}function Mo(e){var t=En(e.target);if(t!==null){var n=Cn(t);if(n!==null){if(t=n.tag,t===13){if(t=bo(n),t!==null){e.blockedOn=t,Lo(e.priority,function(){Ao(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function cs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ea(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);fr=r,n.target.dispatchEvent(r),fr=null}else return t=Dr(n),t!==null&&_a(t),e.blockedOn=n,!1;t.shift()}return!0}function Po(e,t,n){cs(e)&&n.delete(t)}function Bc(){Na=!1,rn!==null&&cs(rn)&&(rn=null),sn!==null&&cs(sn)&&(sn=null),an!==null&&cs(an)&&(an=null),wr.forEach(Po),kr.forEach(Po)}function Sr(e,t){e.blockedOn===t&&(e.blockedOn=null,Na||(Na=!0,W.unstable_scheduleCallback(W.unstable_NormalPriority,Bc)))}function _r(e){function t(s){return Sr(s,e)}if(0<us.length){Sr(us[0],e);for(var n=1;n<us.length;n++){var r=us[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rn!==null&&Sr(rn,e),sn!==null&&Sr(sn,e),an!==null&&Sr(an,e),wr.forEach(t),kr.forEach(t),n=0;n<on.length;n++)r=on[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<on.length&&(n=on[0],n.blockedOn===null);)Mo(n),n.blockedOn===null&&on.shift()}var Wn=U.ReactCurrentBatchConfig,ds=!0;function Wc(e,t,n,r){var s=We,a=Wn.transition;Wn.transition=null;try{We=1,Ca(e,t,n,r)}finally{We=s,Wn.transition=a}}function $c(e,t,n,r){var s=We,a=Wn.transition;Wn.transition=null;try{We=4,Ca(e,t,n,r)}finally{We=s,Wn.transition=a}}function Ca(e,t,n,r){if(ds){var s=Ea(e,t,n,r);if(s===null)Ha(e,t,r,fs,n),Do(e,r);else if(Uc(s,e,t,n,r))r.stopPropagation();else if(Do(e,r),t&4&&-1<Fc.indexOf(e)){for(;s!==null;){var a=Dr(s);if(a!==null&&Io(a),a=Ea(e,t,n,r),a===null&&Ha(e,t,r,fs,n),a===s)break;s=a}s!==null&&r.stopPropagation()}else Ha(e,t,r,null,n)}}var fs=null;function Ea(e,t,n,r){if(fs=null,e=pr(r),e=En(e),e!==null)if(t=Cn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=bo(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return fs=e,null}function Fo(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zc()){case wa:return 1;case To:return 4;case ss:case Rc:return 16;case jo:return 536870912;default:return 16}default:return 16}}var ln=null,Ta=null,ps=null;function Uo(){if(ps)return ps;var e,t=Ta,n=t.length,r,s="value"in ln?ln.value:ln.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var d=n-e;for(r=1;r<=d&&t[n-r]===s[a-r];r++);return ps=s.slice(e,1<r?1-r:void 0)}function ms(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hs(){return!0}function Bo(){return!1}function bt(e){function t(n,r,s,a,d){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=a,this.target=d,this.currentTarget=null;for(var z in e)e.hasOwnProperty(z)&&(n=e[z],this[z]=n?n(a):a[z]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?hs:Bo,this.isPropagationStopped=Bo,this}return se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hs)},persist:function(){},isPersistent:hs}),t}var $n={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ja=bt($n),Nr=se({},$n,{view:0,detail:0}),Hc=bt(Nr),za,Ra,Cr,gs=se({},Nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Aa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Cr&&(Cr&&e.type==="mousemove"?(za=e.screenX-Cr.screenX,Ra=e.screenY-Cr.screenY):Ra=za=0,Cr=e),za)},movementY:function(e){return"movementY"in e?e.movementY:Ra}}),Wo=bt(gs),Vc=se({},gs,{dataTransfer:0}),Kc=bt(Vc),Gc=se({},Nr,{relatedTarget:0}),Ia=bt(Gc),Zc=se({},$n,{animationName:0,elapsedTime:0,pseudoElement:0}),Yc=bt(Zc),Qc=se({},$n,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qc=bt(Qc),Xc=se({},$n,{data:0}),$o=bt(Xc),Jc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ed={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},td={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=td[e])?!!t[e]:!1}function Aa(){return nd}var rd=se({},Nr,{key:function(e){if(e.key){var t=Jc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ms(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ed[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Aa,charCode:function(e){return e.type==="keypress"?ms(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ms(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sd=bt(rd),ad=se({},gs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ho=bt(ad),id=se({},Nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Aa}),od=bt(id),ld=se({},$n,{propertyName:0,elapsedTime:0,pseudoElement:0}),ud=bt(ld),cd=se({},gs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dd=bt(cd),fd=[9,13,27,32],Oa=c&&"CompositionEvent"in window,Er=null;c&&"documentMode"in document&&(Er=document.documentMode);var pd=c&&"TextEvent"in window&&!Er,Vo=c&&(!Oa||Er&&8<Er&&11>=Er),Ko=" ",Go=!1;function Zo(e,t){switch(e){case"keyup":return fd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hn=!1;function md(e,t){switch(e){case"compositionend":return Yo(t);case"keypress":return t.which!==32?null:(Go=!0,Ko);case"textInput":return e=t.data,e===Ko&&Go?null:e;default:return null}}function hd(e,t){if(Hn)return e==="compositionend"||!Oa&&Zo(e,t)?(e=Uo(),ps=Ta=ln=null,Hn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Vo&&t.locale!=="ko"?null:t.data;default:return null}}var gd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gd[e.type]:t==="textarea"}function qo(e,t,n,r){vo(r),t=ks(t,"onChange"),0<t.length&&(n=new ja("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Tr=null,jr=null;function vd(e){hl(e,0)}function vs(e){var t=Yn(e);if(Me(t))return e}function xd(e,t){if(e==="change")return t}var Xo=!1;if(c){var La;if(c){var Da="oninput"in document;if(!Da){var Jo=document.createElement("div");Jo.setAttribute("oninput","return;"),Da=typeof Jo.oninput=="function"}La=Da}else La=!1;Xo=La&&(!document.documentMode||9<document.documentMode)}function el(){Tr&&(Tr.detachEvent("onpropertychange",tl),jr=Tr=null)}function tl(e){if(e.propertyName==="value"&&vs(jr)){var t=[];qo(t,jr,e,pr(e)),ko(vd,t)}}function yd(e,t,n){e==="focusin"?(el(),Tr=t,jr=n,Tr.attachEvent("onpropertychange",tl)):e==="focusout"&&el()}function wd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vs(jr)}function kd(e,t){if(e==="click")return vs(t)}function bd(e,t){if(e==="input"||e==="change")return vs(t)}function Sd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Lt=typeof Object.is=="function"?Object.is:Sd;function zr(e,t){if(Lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!h.call(t,s)||!Lt(e[s],t[s]))return!1}return!0}function nl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rl(e,t){var n=nl(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nl(n)}}function sl(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?sl(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function al(){for(var e=window,t=Ue();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ue(e.document)}return t}function Ma(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function _d(e){var t=al(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&sl(n.ownerDocument.documentElement,n)){if(r!==null&&Ma(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,a=Math.min(r.start,s);r=r.end===void 0?a:Math.min(r.end,s),!e.extend&&a>r&&(s=r,r=a,a=s),s=rl(n,a);var d=rl(n,r);s&&d&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(d.node,d.offset)):(t.setEnd(d.node,d.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Nd=c&&"documentMode"in document&&11>=document.documentMode,Vn=null,Pa=null,Rr=null,Fa=!1;function il(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fa||Vn==null||Vn!==Ue(r)||(r=Vn,"selectionStart"in r&&Ma(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rr&&zr(Rr,r)||(Rr=r,r=ks(Pa,"onSelect"),0<r.length&&(t=new ja("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vn)))}function xs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kn={animationend:xs("Animation","AnimationEnd"),animationiteration:xs("Animation","AnimationIteration"),animationstart:xs("Animation","AnimationStart"),transitionend:xs("Transition","TransitionEnd")},Ua={},ol={};c&&(ol=document.createElement("div").style,"AnimationEvent"in window||(delete Kn.animationend.animation,delete Kn.animationiteration.animation,delete Kn.animationstart.animation),"TransitionEvent"in window||delete Kn.transitionend.transition);function ys(e){if(Ua[e])return Ua[e];if(!Kn[e])return e;var t=Kn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ol)return Ua[e]=t[n];return e}var ll=ys("animationend"),ul=ys("animationiteration"),cl=ys("animationstart"),dl=ys("transitionend"),fl=new Map,pl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function un(e,t){fl.set(e,t),p(t,[e])}for(var Ba=0;Ba<pl.length;Ba++){var Wa=pl[Ba],Cd=Wa.toLowerCase(),Ed=Wa[0].toUpperCase()+Wa.slice(1);un(Cd,"on"+Ed)}un(ll,"onAnimationEnd"),un(ul,"onAnimationIteration"),un(cl,"onAnimationStart"),un("dblclick","onDoubleClick"),un("focusin","onFocus"),un("focusout","onBlur"),un(dl,"onTransitionEnd"),m("onMouseEnter",["mouseout","mouseover"]),m("onMouseLeave",["mouseout","mouseover"]),m("onPointerEnter",["pointerout","pointerover"]),m("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ir="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Td=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ir));function ml(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Cc(r,t,void 0,e),e.currentTarget=null}function hl(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var d=r.length-1;0<=d;d--){var z=r[d],L=z.instance,Z=z.currentTarget;if(z=z.listener,L!==a&&s.isPropagationStopped())break e;ml(s,z,Z),a=L}else for(d=0;d<r.length;d++){if(z=r[d],L=z.instance,Z=z.currentTarget,z=z.listener,L!==a&&s.isPropagationStopped())break e;ml(s,z,Z),a=L}}}if(rs)throw e=ya,rs=!1,ya=null,e}function He(e,t){var n=t[Qa];n===void 0&&(n=t[Qa]=new Set);var r=e+"__bubble";n.has(r)||(gl(t,e,2,!1),n.add(r))}function $a(e,t,n){var r=0;t&&(r|=4),gl(n,e,r,t)}var ws="_reactListening"+Math.random().toString(36).slice(2);function Ar(e){if(!e[ws]){e[ws]=!0,O.forEach(function(n){n!=="selectionchange"&&(Td.has(n)||$a(n,!1,e),$a(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ws]||(t[ws]=!0,$a("selectionchange",!1,t))}}function gl(e,t,n,r){switch(Fo(t)){case 1:var s=Wc;break;case 4:s=$c;break;default:s=Ca}n=s.bind(null,t,n,e),s=void 0,!xa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Ha(e,t,n,r,s){var a=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var d=r.tag;if(d===3||d===4){var z=r.stateNode.containerInfo;if(z===s||z.nodeType===8&&z.parentNode===s)break;if(d===4)for(d=r.return;d!==null;){var L=d.tag;if((L===3||L===4)&&(L=d.stateNode.containerInfo,L===s||L.nodeType===8&&L.parentNode===s))return;d=d.return}for(;z!==null;){if(d=En(z),d===null)return;if(L=d.tag,L===5||L===6){r=a=d;continue e}z=z.parentNode}}r=r.return}ko(function(){var Z=a,de=pr(n),fe=[];e:{var ue=fl.get(e);if(ue!==void 0){var be=ja,Ne=e;switch(e){case"keypress":if(ms(n)===0)break e;case"keydown":case"keyup":be=sd;break;case"focusin":Ne="focus",be=Ia;break;case"focusout":Ne="blur",be=Ia;break;case"beforeblur":case"afterblur":be=Ia;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":be=Wo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":be=Kc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":be=od;break;case ll:case ul:case cl:be=Yc;break;case dl:be=ud;break;case"scroll":be=Hc;break;case"wheel":be=dd;break;case"copy":case"cut":case"paste":be=qc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":be=Ho}var Ce=(t&4)!==0,Xe=!Ce&&e==="scroll",$=Ce?ue!==null?ue+"Capture":null:ue;Ce=[];for(var P=Z,V;P!==null;){V=P;var ge=V.stateNode;if(V.tag===5&&ge!==null&&(V=ge,$!==null&&(ge=hr(P,$),ge!=null&&Ce.push(Or(P,ge,V)))),Xe)break;P=P.return}0<Ce.length&&(ue=new be(ue,Ne,null,n,de),fe.push({event:ue,listeners:Ce}))}}if((t&7)===0){e:{if(ue=e==="mouseover"||e==="pointerover",be=e==="mouseout"||e==="pointerout",ue&&n!==fr&&(Ne=n.relatedTarget||n.fromElement)&&(En(Ne)||Ne[Zt]))break e;if((be||ue)&&(ue=de.window===de?de:(ue=de.ownerDocument)?ue.defaultView||ue.parentWindow:window,be?(Ne=n.relatedTarget||n.toElement,be=Z,Ne=Ne?En(Ne):null,Ne!==null&&(Xe=Cn(Ne),Ne!==Xe||Ne.tag!==5&&Ne.tag!==6)&&(Ne=null)):(be=null,Ne=Z),be!==Ne)){if(Ce=Wo,ge="onMouseLeave",$="onMouseEnter",P="mouse",(e==="pointerout"||e==="pointerover")&&(Ce=Ho,ge="onPointerLeave",$="onPointerEnter",P="pointer"),Xe=be==null?ue:Yn(be),V=Ne==null?ue:Yn(Ne),ue=new Ce(ge,P+"leave",be,n,de),ue.target=Xe,ue.relatedTarget=V,ge=null,En(de)===Z&&(Ce=new Ce($,P+"enter",Ne,n,de),Ce.target=V,Ce.relatedTarget=Xe,ge=Ce),Xe=ge,be&&Ne)t:{for(Ce=be,$=Ne,P=0,V=Ce;V;V=Gn(V))P++;for(V=0,ge=$;ge;ge=Gn(ge))V++;for(;0<P-V;)Ce=Gn(Ce),P--;for(;0<V-P;)$=Gn($),V--;for(;P--;){if(Ce===$||$!==null&&Ce===$.alternate)break t;Ce=Gn(Ce),$=Gn($)}Ce=null}else Ce=null;be!==null&&vl(fe,ue,be,Ce,!1),Ne!==null&&Xe!==null&&vl(fe,Xe,Ne,Ce,!0)}}e:{if(ue=Z?Yn(Z):window,be=ue.nodeName&&ue.nodeName.toLowerCase(),be==="select"||be==="input"&&ue.type==="file")var Ee=xd;else if(Qo(ue))if(Xo)Ee=bd;else{Ee=wd;var Re=yd}else(be=ue.nodeName)&&be.toLowerCase()==="input"&&(ue.type==="checkbox"||ue.type==="radio")&&(Ee=kd);if(Ee&&(Ee=Ee(e,Z))){qo(fe,Ee,n,de);break e}Re&&Re(e,ue,Z),e==="focusout"&&(Re=ue._wrapperState)&&Re.controlled&&ue.type==="number"&&M(ue,"number",ue.value)}switch(Re=Z?Yn(Z):window,e){case"focusin":(Qo(Re)||Re.contentEditable==="true")&&(Vn=Re,Pa=Z,Rr=null);break;case"focusout":Rr=Pa=Vn=null;break;case"mousedown":Fa=!0;break;case"contextmenu":case"mouseup":case"dragend":Fa=!1,il(fe,n,de);break;case"selectionchange":if(Nd)break;case"keydown":case"keyup":il(fe,n,de)}var Ie;if(Oa)e:{switch(e){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else Hn?Zo(e,n)&&(Ae="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Ae="onCompositionStart");Ae&&(Vo&&n.locale!=="ko"&&(Hn||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&Hn&&(Ie=Uo()):(ln=de,Ta="value"in ln?ln.value:ln.textContent,Hn=!0)),Re=ks(Z,Ae),0<Re.length&&(Ae=new $o(Ae,e,null,n,de),fe.push({event:Ae,listeners:Re}),Ie?Ae.data=Ie:(Ie=Yo(n),Ie!==null&&(Ae.data=Ie)))),(Ie=pd?md(e,n):hd(e,n))&&(Z=ks(Z,"onBeforeInput"),0<Z.length&&(de=new $o("onBeforeInput","beforeinput",null,n,de),fe.push({event:de,listeners:Z}),de.data=Ie))}hl(fe,t)})}function Or(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ks(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,a=s.stateNode;s.tag===5&&a!==null&&(s=a,a=hr(e,n),a!=null&&r.unshift(Or(e,a,s)),a=hr(e,t),a!=null&&r.push(Or(e,a,s))),e=e.return}return r}function Gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vl(e,t,n,r,s){for(var a=t._reactName,d=[];n!==null&&n!==r;){var z=n,L=z.alternate,Z=z.stateNode;if(L!==null&&L===r)break;z.tag===5&&Z!==null&&(z=Z,s?(L=hr(n,a),L!=null&&d.unshift(Or(n,L,z))):s||(L=hr(n,a),L!=null&&d.push(Or(n,L,z)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var jd=/\r\n?/g,zd=/\u0000|\uFFFD/g;function xl(e){return(typeof e=="string"?e:""+e).replace(jd,`
`).replace(zd,"")}function bs(e,t,n){if(t=xl(t),xl(e)!==t&&n)throw Error(o(425))}function Ss(){}var Va=null,Ka=null;function Ga(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Za=typeof setTimeout=="function"?setTimeout:void 0,Rd=typeof clearTimeout=="function"?clearTimeout:void 0,yl=typeof Promise=="function"?Promise:void 0,Id=typeof queueMicrotask=="function"?queueMicrotask:typeof yl<"u"?function(e){return yl.resolve(null).then(e).catch(Ad)}:Za;function Ad(e){setTimeout(function(){throw e})}function Ya(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),_r(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);_r(t)}function cn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function wl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Zn=Math.random().toString(36).slice(2),$t="__reactFiber$"+Zn,Lr="__reactProps$"+Zn,Zt="__reactContainer$"+Zn,Qa="__reactEvents$"+Zn,Od="__reactListeners$"+Zn,Ld="__reactHandles$"+Zn;function En(e){var t=e[$t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Zt]||n[$t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=wl(e);e!==null;){if(n=e[$t])return n;e=wl(e)}return t}e=n,n=e.parentNode}return null}function Dr(e){return e=e[$t]||e[Zt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Yn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function _s(e){return e[Lr]||null}var qa=[],Qn=-1;function dn(e){return{current:e}}function Ve(e){0>Qn||(e.current=qa[Qn],qa[Qn]=null,Qn--)}function $e(e,t){Qn++,qa[Qn]=e.current,e.current=t}var fn={},lt=dn(fn),ht=dn(!1),Tn=fn;function qn(e,t){var n=e.type.contextTypes;if(!n)return fn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},a;for(a in n)s[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function gt(e){return e=e.childContextTypes,e!=null}function Ns(){Ve(ht),Ve(lt)}function kl(e,t,n){if(lt.current!==fn)throw Error(o(168));$e(lt,t),$e(ht,n)}function bl(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(o(108,ce(e)||"Unknown",s));return se({},n,r)}function Cs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fn,Tn=lt.current,$e(lt,e),$e(ht,ht.current),!0}function Sl(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=bl(e,t,Tn),r.__reactInternalMemoizedMergedChildContext=e,Ve(ht),Ve(lt),$e(lt,e)):Ve(ht),$e(ht,n)}var Yt=null,Es=!1,Xa=!1;function _l(e){Yt===null?Yt=[e]:Yt.push(e)}function Dd(e){Es=!0,_l(e)}function pn(){if(!Xa&&Yt!==null){Xa=!0;var e=0,t=We;try{var n=Yt;for(We=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Yt=null,Es=!1}catch(s){throw Yt!==null&&(Yt=Yt.slice(e+1)),Co(wa,pn),s}finally{We=t,Xa=!1}}return null}var Xn=[],Jn=0,Ts=null,js=0,Et=[],Tt=0,jn=null,Qt=1,qt="";function zn(e,t){Xn[Jn++]=js,Xn[Jn++]=Ts,Ts=e,js=t}function Nl(e,t,n){Et[Tt++]=Qt,Et[Tt++]=qt,Et[Tt++]=jn,jn=e;var r=Qt;e=qt;var s=32-Ot(r)-1;r&=~(1<<s),n+=1;var a=32-Ot(t)+s;if(30<a){var d=s-s%5;a=(r&(1<<d)-1).toString(32),r>>=d,s-=d,Qt=1<<32-Ot(t)+s|n<<s|r,qt=a+e}else Qt=1<<a|n<<s|r,qt=e}function Ja(e){e.return!==null&&(zn(e,1),Nl(e,1,0))}function ei(e){for(;e===Ts;)Ts=Xn[--Jn],Xn[Jn]=null,js=Xn[--Jn],Xn[Jn]=null;for(;e===jn;)jn=Et[--Tt],Et[Tt]=null,qt=Et[--Tt],Et[Tt]=null,Qt=Et[--Tt],Et[Tt]=null}var St=null,_t=null,Ge=!1,Dt=null;function Cl(e,t){var n=It(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function El(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,St=e,_t=cn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,St=e,_t=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=jn!==null?{id:Qt,overflow:qt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=It(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,St=e,_t=null,!0):!1;default:return!1}}function ti(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ni(e){if(Ge){var t=_t;if(t){var n=t;if(!El(e,t)){if(ti(e))throw Error(o(418));t=cn(n.nextSibling);var r=St;t&&El(e,t)?Cl(r,n):(e.flags=e.flags&-4097|2,Ge=!1,St=e)}}else{if(ti(e))throw Error(o(418));e.flags=e.flags&-4097|2,Ge=!1,St=e}}}function Tl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;St=e}function zs(e){if(e!==St)return!1;if(!Ge)return Tl(e),Ge=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ga(e.type,e.memoizedProps)),t&&(t=_t)){if(ti(e))throw jl(),Error(o(418));for(;t;)Cl(e,t),t=cn(t.nextSibling)}if(Tl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){_t=cn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}_t=null}}else _t=St?cn(e.stateNode.nextSibling):null;return!0}function jl(){for(var e=_t;e;)e=cn(e.nextSibling)}function er(){_t=St=null,Ge=!1}function ri(e){Dt===null?Dt=[e]:Dt.push(e)}var Md=U.ReactCurrentBatchConfig;function Mr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var s=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(d){var z=s.refs;d===null?delete z[a]:z[a]=d},t._stringRef=a,t)}if(typeof e!="string")throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function Rs(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function zl(e){var t=e._init;return t(e._payload)}function Rl(e){function t($,P){if(e){var V=$.deletions;V===null?($.deletions=[P],$.flags|=16):V.push(P)}}function n($,P){if(!e)return null;for(;P!==null;)t($,P),P=P.sibling;return null}function r($,P){for($=new Map;P!==null;)P.key!==null?$.set(P.key,P):$.set(P.index,P),P=P.sibling;return $}function s($,P){return $=kn($,P),$.index=0,$.sibling=null,$}function a($,P,V){return $.index=V,e?(V=$.alternate,V!==null?(V=V.index,V<P?($.flags|=2,P):V):($.flags|=2,P)):($.flags|=1048576,P)}function d($){return e&&$.alternate===null&&($.flags|=2),$}function z($,P,V,ge){return P===null||P.tag!==6?(P=Zi(V,$.mode,ge),P.return=$,P):(P=s(P,V),P.return=$,P)}function L($,P,V,ge){var Ee=V.type;return Ee===G?de($,P,V.props.children,ge,V.key):P!==null&&(P.elementType===Ee||typeof Ee=="object"&&Ee!==null&&Ee.$$typeof===we&&zl(Ee)===P.type)?(ge=s(P,V.props),ge.ref=Mr($,P,V),ge.return=$,ge):(ge=ta(V.type,V.key,V.props,null,$.mode,ge),ge.ref=Mr($,P,V),ge.return=$,ge)}function Z($,P,V,ge){return P===null||P.tag!==4||P.stateNode.containerInfo!==V.containerInfo||P.stateNode.implementation!==V.implementation?(P=Yi(V,$.mode,ge),P.return=$,P):(P=s(P,V.children||[]),P.return=$,P)}function de($,P,V,ge,Ee){return P===null||P.tag!==7?(P=Pn(V,$.mode,ge,Ee),P.return=$,P):(P=s(P,V),P.return=$,P)}function fe($,P,V){if(typeof P=="string"&&P!==""||typeof P=="number")return P=Zi(""+P,$.mode,V),P.return=$,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case D:return V=ta(P.type,P.key,P.props,null,$.mode,V),V.ref=Mr($,null,P),V.return=$,V;case Y:return P=Yi(P,$.mode,V),P.return=$,P;case we:var ge=P._init;return fe($,ge(P._payload),V)}if(ne(P)||Q(P))return P=Pn(P,$.mode,V,null),P.return=$,P;Rs($,P)}return null}function ue($,P,V,ge){var Ee=P!==null?P.key:null;if(typeof V=="string"&&V!==""||typeof V=="number")return Ee!==null?null:z($,P,""+V,ge);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case D:return V.key===Ee?L($,P,V,ge):null;case Y:return V.key===Ee?Z($,P,V,ge):null;case we:return Ee=V._init,ue($,P,Ee(V._payload),ge)}if(ne(V)||Q(V))return Ee!==null?null:de($,P,V,ge,null);Rs($,V)}return null}function be($,P,V,ge,Ee){if(typeof ge=="string"&&ge!==""||typeof ge=="number")return $=$.get(V)||null,z(P,$,""+ge,Ee);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case D:return $=$.get(ge.key===null?V:ge.key)||null,L(P,$,ge,Ee);case Y:return $=$.get(ge.key===null?V:ge.key)||null,Z(P,$,ge,Ee);case we:var Re=ge._init;return be($,P,V,Re(ge._payload),Ee)}if(ne(ge)||Q(ge))return $=$.get(V)||null,de(P,$,ge,Ee,null);Rs(P,ge)}return null}function Ne($,P,V,ge){for(var Ee=null,Re=null,Ie=P,Ae=P=0,st=null;Ie!==null&&Ae<V.length;Ae++){Ie.index>Ae?(st=Ie,Ie=null):st=Ie.sibling;var Fe=ue($,Ie,V[Ae],ge);if(Fe===null){Ie===null&&(Ie=st);break}e&&Ie&&Fe.alternate===null&&t($,Ie),P=a(Fe,P,Ae),Re===null?Ee=Fe:Re.sibling=Fe,Re=Fe,Ie=st}if(Ae===V.length)return n($,Ie),Ge&&zn($,Ae),Ee;if(Ie===null){for(;Ae<V.length;Ae++)Ie=fe($,V[Ae],ge),Ie!==null&&(P=a(Ie,P,Ae),Re===null?Ee=Ie:Re.sibling=Ie,Re=Ie);return Ge&&zn($,Ae),Ee}for(Ie=r($,Ie);Ae<V.length;Ae++)st=be(Ie,$,Ae,V[Ae],ge),st!==null&&(e&&st.alternate!==null&&Ie.delete(st.key===null?Ae:st.key),P=a(st,P,Ae),Re===null?Ee=st:Re.sibling=st,Re=st);return e&&Ie.forEach(function(bn){return t($,bn)}),Ge&&zn($,Ae),Ee}function Ce($,P,V,ge){var Ee=Q(V);if(typeof Ee!="function")throw Error(o(150));if(V=Ee.call(V),V==null)throw Error(o(151));for(var Re=Ee=null,Ie=P,Ae=P=0,st=null,Fe=V.next();Ie!==null&&!Fe.done;Ae++,Fe=V.next()){Ie.index>Ae?(st=Ie,Ie=null):st=Ie.sibling;var bn=ue($,Ie,Fe.value,ge);if(bn===null){Ie===null&&(Ie=st);break}e&&Ie&&bn.alternate===null&&t($,Ie),P=a(bn,P,Ae),Re===null?Ee=bn:Re.sibling=bn,Re=bn,Ie=st}if(Fe.done)return n($,Ie),Ge&&zn($,Ae),Ee;if(Ie===null){for(;!Fe.done;Ae++,Fe=V.next())Fe=fe($,Fe.value,ge),Fe!==null&&(P=a(Fe,P,Ae),Re===null?Ee=Fe:Re.sibling=Fe,Re=Fe);return Ge&&zn($,Ae),Ee}for(Ie=r($,Ie);!Fe.done;Ae++,Fe=V.next())Fe=be(Ie,$,Ae,Fe.value,ge),Fe!==null&&(e&&Fe.alternate!==null&&Ie.delete(Fe.key===null?Ae:Fe.key),P=a(Fe,P,Ae),Re===null?Ee=Fe:Re.sibling=Fe,Re=Fe);return e&&Ie.forEach(function(vf){return t($,vf)}),Ge&&zn($,Ae),Ee}function Xe($,P,V,ge){if(typeof V=="object"&&V!==null&&V.type===G&&V.key===null&&(V=V.props.children),typeof V=="object"&&V!==null){switch(V.$$typeof){case D:e:{for(var Ee=V.key,Re=P;Re!==null;){if(Re.key===Ee){if(Ee=V.type,Ee===G){if(Re.tag===7){n($,Re.sibling),P=s(Re,V.props.children),P.return=$,$=P;break e}}else if(Re.elementType===Ee||typeof Ee=="object"&&Ee!==null&&Ee.$$typeof===we&&zl(Ee)===Re.type){n($,Re.sibling),P=s(Re,V.props),P.ref=Mr($,Re,V),P.return=$,$=P;break e}n($,Re);break}else t($,Re);Re=Re.sibling}V.type===G?(P=Pn(V.props.children,$.mode,ge,V.key),P.return=$,$=P):(ge=ta(V.type,V.key,V.props,null,$.mode,ge),ge.ref=Mr($,P,V),ge.return=$,$=ge)}return d($);case Y:e:{for(Re=V.key;P!==null;){if(P.key===Re)if(P.tag===4&&P.stateNode.containerInfo===V.containerInfo&&P.stateNode.implementation===V.implementation){n($,P.sibling),P=s(P,V.children||[]),P.return=$,$=P;break e}else{n($,P);break}else t($,P);P=P.sibling}P=Yi(V,$.mode,ge),P.return=$,$=P}return d($);case we:return Re=V._init,Xe($,P,Re(V._payload),ge)}if(ne(V))return Ne($,P,V,ge);if(Q(V))return Ce($,P,V,ge);Rs($,V)}return typeof V=="string"&&V!==""||typeof V=="number"?(V=""+V,P!==null&&P.tag===6?(n($,P.sibling),P=s(P,V),P.return=$,$=P):(n($,P),P=Zi(V,$.mode,ge),P.return=$,$=P),d($)):n($,P)}return Xe}var tr=Rl(!0),Il=Rl(!1),Is=dn(null),As=null,nr=null,si=null;function ai(){si=nr=As=null}function ii(e){var t=Is.current;Ve(Is),e._currentValue=t}function oi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function rr(e,t){As=e,si=nr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(vt=!0),e.firstContext=null)}function jt(e){var t=e._currentValue;if(si!==e)if(e={context:e,memoizedValue:t,next:null},nr===null){if(As===null)throw Error(o(308));nr=e,As.dependencies={lanes:0,firstContext:e}}else nr=nr.next=e;return t}var Rn=null;function li(e){Rn===null?Rn=[e]:Rn.push(e)}function Al(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,li(t)):(n.next=s.next,s.next=n),t.interleaved=n,Xt(e,r)}function Xt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var mn=!1;function ui(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ol(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Jt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function hn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Pe&2)!==0){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,Xt(e,n)}return s=r.interleaved,s===null?(t.next=t,li(r)):(t.next=s.next,s.next=t),r.interleaved=t,Xt(e,n)}function Os(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Sa(e,n)}}function Ll(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var d={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?s=a=d:a=a.next=d,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ls(e,t,n,r){var s=e.updateQueue;mn=!1;var a=s.firstBaseUpdate,d=s.lastBaseUpdate,z=s.shared.pending;if(z!==null){s.shared.pending=null;var L=z,Z=L.next;L.next=null,d===null?a=Z:d.next=Z,d=L;var de=e.alternate;de!==null&&(de=de.updateQueue,z=de.lastBaseUpdate,z!==d&&(z===null?de.firstBaseUpdate=Z:z.next=Z,de.lastBaseUpdate=L))}if(a!==null){var fe=s.baseState;d=0,de=Z=L=null,z=a;do{var ue=z.lane,be=z.eventTime;if((r&ue)===ue){de!==null&&(de=de.next={eventTime:be,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var Ne=e,Ce=z;switch(ue=t,be=n,Ce.tag){case 1:if(Ne=Ce.payload,typeof Ne=="function"){fe=Ne.call(be,fe,ue);break e}fe=Ne;break e;case 3:Ne.flags=Ne.flags&-65537|128;case 0:if(Ne=Ce.payload,ue=typeof Ne=="function"?Ne.call(be,fe,ue):Ne,ue==null)break e;fe=se({},fe,ue);break e;case 2:mn=!0}}z.callback!==null&&z.lane!==0&&(e.flags|=64,ue=s.effects,ue===null?s.effects=[z]:ue.push(z))}else be={eventTime:be,lane:ue,tag:z.tag,payload:z.payload,callback:z.callback,next:null},de===null?(Z=de=be,L=fe):de=de.next=be,d|=ue;if(z=z.next,z===null){if(z=s.shared.pending,z===null)break;ue=z,z=ue.next,ue.next=null,s.lastBaseUpdate=ue,s.shared.pending=null}}while(!0);if(de===null&&(L=fe),s.baseState=L,s.firstBaseUpdate=Z,s.lastBaseUpdate=de,t=s.shared.interleaved,t!==null){s=t;do d|=s.lane,s=s.next;while(s!==t)}else a===null&&(s.shared.lanes=0);On|=d,e.lanes=d,e.memoizedState=fe}}function Dl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(o(191,s));s.call(r)}}}var Pr={},Ht=dn(Pr),Fr=dn(Pr),Ur=dn(Pr);function In(e){if(e===Pr)throw Error(o(174));return e}function ci(e,t){switch($e(Ur,t),$e(Fr,e),$e(Ht,Pr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Be(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Be(t,e)}Ve(Ht),$e(Ht,t)}function sr(){Ve(Ht),Ve(Fr),Ve(Ur)}function Ml(e){In(Ur.current);var t=In(Ht.current),n=Be(t,e.type);t!==n&&($e(Fr,e),$e(Ht,n))}function di(e){Fr.current===e&&(Ve(Ht),Ve(Fr))}var Ze=dn(0);function Ds(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var fi=[];function pi(){for(var e=0;e<fi.length;e++)fi[e]._workInProgressVersionPrimary=null;fi.length=0}var Ms=U.ReactCurrentDispatcher,mi=U.ReactCurrentBatchConfig,An=0,Ye=null,et=null,nt=null,Ps=!1,Br=!1,Wr=0,Pd=0;function ut(){throw Error(o(321))}function hi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Lt(e[n],t[n]))return!1;return!0}function gi(e,t,n,r,s,a){if(An=a,Ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ms.current=e===null||e.memoizedState===null?Wd:$d,e=n(r,s),Br){a=0;do{if(Br=!1,Wr=0,25<=a)throw Error(o(301));a+=1,nt=et=null,t.updateQueue=null,Ms.current=Hd,e=n(r,s)}while(Br)}if(Ms.current=Bs,t=et!==null&&et.next!==null,An=0,nt=et=Ye=null,Ps=!1,t)throw Error(o(300));return e}function vi(){var e=Wr!==0;return Wr=0,e}function Vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nt===null?Ye.memoizedState=nt=e:nt=nt.next=e,nt}function zt(){if(et===null){var e=Ye.alternate;e=e!==null?e.memoizedState:null}else e=et.next;var t=nt===null?Ye.memoizedState:nt.next;if(t!==null)nt=t,et=e;else{if(e===null)throw Error(o(310));et=e,e={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},nt===null?Ye.memoizedState=nt=e:nt=nt.next=e}return nt}function $r(e,t){return typeof t=="function"?t(e):t}function xi(e){var t=zt(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var r=et,s=r.baseQueue,a=n.pending;if(a!==null){if(s!==null){var d=s.next;s.next=a.next,a.next=d}r.baseQueue=s=a,n.pending=null}if(s!==null){a=s.next,r=r.baseState;var z=d=null,L=null,Z=a;do{var de=Z.lane;if((An&de)===de)L!==null&&(L=L.next={lane:0,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),r=Z.hasEagerState?Z.eagerState:e(r,Z.action);else{var fe={lane:de,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null};L===null?(z=L=fe,d=r):L=L.next=fe,Ye.lanes|=de,On|=de}Z=Z.next}while(Z!==null&&Z!==a);L===null?d=r:L.next=z,Lt(r,t.memoizedState)||(vt=!0),t.memoizedState=r,t.baseState=d,t.baseQueue=L,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do a=s.lane,Ye.lanes|=a,On|=a,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function yi(e){var t=zt(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var d=s=s.next;do a=e(a,d.action),d=d.next;while(d!==s);Lt(a,t.memoizedState)||(vt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Pl(){}function Fl(e,t){var n=Ye,r=zt(),s=t(),a=!Lt(r.memoizedState,s);if(a&&(r.memoizedState=s,vt=!0),r=r.queue,wi(Wl.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||nt!==null&&nt.memoizedState.tag&1){if(n.flags|=2048,Hr(9,Bl.bind(null,n,r,s,t),void 0,null),rt===null)throw Error(o(349));(An&30)!==0||Ul(n,t,s)}return s}function Ul(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ye.updateQueue,t===null?(t={lastEffect:null,stores:null},Ye.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Bl(e,t,n,r){t.value=n,t.getSnapshot=r,$l(t)&&Hl(e)}function Wl(e,t,n){return n(function(){$l(t)&&Hl(e)})}function $l(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Lt(e,n)}catch{return!0}}function Hl(e){var t=Xt(e,1);t!==null&&Ut(t,e,1,-1)}function Vl(e){var t=Vt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$r,lastRenderedState:e},t.queue=e,e=e.dispatch=Bd.bind(null,Ye,e),[t.memoizedState,e]}function Hr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ye.updateQueue,t===null?(t={lastEffect:null,stores:null},Ye.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Kl(){return zt().memoizedState}function Fs(e,t,n,r){var s=Vt();Ye.flags|=e,s.memoizedState=Hr(1|t,n,void 0,r===void 0?null:r)}function Us(e,t,n,r){var s=zt();r=r===void 0?null:r;var a=void 0;if(et!==null){var d=et.memoizedState;if(a=d.destroy,r!==null&&hi(r,d.deps)){s.memoizedState=Hr(t,n,a,r);return}}Ye.flags|=e,s.memoizedState=Hr(1|t,n,a,r)}function Gl(e,t){return Fs(8390656,8,e,t)}function wi(e,t){return Us(2048,8,e,t)}function Zl(e,t){return Us(4,2,e,t)}function Yl(e,t){return Us(4,4,e,t)}function Ql(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ql(e,t,n){return n=n!=null?n.concat([e]):null,Us(4,4,Ql.bind(null,t,e),n)}function ki(){}function Xl(e,t){var n=zt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&hi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Jl(e,t){var n=zt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&hi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function eu(e,t,n){return(An&21)===0?(e.baseState&&(e.baseState=!1,vt=!0),e.memoizedState=n):(Lt(n,t)||(n=zo(),Ye.lanes|=n,On|=n,e.baseState=!0),t)}function Fd(e,t){var n=We;We=n!==0&&4>n?n:4,e(!0);var r=mi.transition;mi.transition={};try{e(!1),t()}finally{We=n,mi.transition=r}}function tu(){return zt().memoizedState}function Ud(e,t,n){var r=yn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},nu(e))ru(t,n);else if(n=Al(e,t,n,r),n!==null){var s=mt();Ut(n,e,r,s),su(n,t,r)}}function Bd(e,t,n){var r=yn(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(nu(e))ru(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var d=t.lastRenderedState,z=a(d,n);if(s.hasEagerState=!0,s.eagerState=z,Lt(z,d)){var L=t.interleaved;L===null?(s.next=s,li(t)):(s.next=L.next,L.next=s),t.interleaved=s;return}}catch{}finally{}n=Al(e,t,s,r),n!==null&&(s=mt(),Ut(n,e,r,s),su(n,t,r))}}function nu(e){var t=e.alternate;return e===Ye||t!==null&&t===Ye}function ru(e,t){Br=Ps=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function su(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Sa(e,n)}}var Bs={readContext:jt,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useInsertionEffect:ut,useLayoutEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useMutableSource:ut,useSyncExternalStore:ut,useId:ut,unstable_isNewReconciler:!1},Wd={readContext:jt,useCallback:function(e,t){return Vt().memoizedState=[e,t===void 0?null:t],e},useContext:jt,useEffect:Gl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Fs(4194308,4,Ql.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Fs(4194308,4,e,t)},useInsertionEffect:function(e,t){return Fs(4,2,e,t)},useMemo:function(e,t){var n=Vt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Vt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ud.bind(null,Ye,e),[r.memoizedState,e]},useRef:function(e){var t=Vt();return e={current:e},t.memoizedState=e},useState:Vl,useDebugValue:ki,useDeferredValue:function(e){return Vt().memoizedState=e},useTransition:function(){var e=Vl(!1),t=e[0];return e=Fd.bind(null,e[1]),Vt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ye,s=Vt();if(Ge){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),rt===null)throw Error(o(349));(An&30)!==0||Ul(r,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,Gl(Wl.bind(null,r,a,e),[e]),r.flags|=2048,Hr(9,Bl.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Vt(),t=rt.identifierPrefix;if(Ge){var n=qt,r=Qt;n=(r&~(1<<32-Ot(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Wr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Pd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},$d={readContext:jt,useCallback:Xl,useContext:jt,useEffect:wi,useImperativeHandle:ql,useInsertionEffect:Zl,useLayoutEffect:Yl,useMemo:Jl,useReducer:xi,useRef:Kl,useState:function(){return xi($r)},useDebugValue:ki,useDeferredValue:function(e){var t=zt();return eu(t,et.memoizedState,e)},useTransition:function(){var e=xi($r)[0],t=zt().memoizedState;return[e,t]},useMutableSource:Pl,useSyncExternalStore:Fl,useId:tu,unstable_isNewReconciler:!1},Hd={readContext:jt,useCallback:Xl,useContext:jt,useEffect:wi,useImperativeHandle:ql,useInsertionEffect:Zl,useLayoutEffect:Yl,useMemo:Jl,useReducer:yi,useRef:Kl,useState:function(){return yi($r)},useDebugValue:ki,useDeferredValue:function(e){var t=zt();return et===null?t.memoizedState=e:eu(t,et.memoizedState,e)},useTransition:function(){var e=yi($r)[0],t=zt().memoizedState;return[e,t]},useMutableSource:Pl,useSyncExternalStore:Fl,useId:tu,unstable_isNewReconciler:!1};function Mt(e,t){if(e&&e.defaultProps){t=se({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function bi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:se({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ws={isMounted:function(e){return(e=e._reactInternals)?Cn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=mt(),s=yn(e),a=Jt(r,s);a.payload=t,n!=null&&(a.callback=n),t=hn(e,a,s),t!==null&&(Ut(t,e,s,r),Os(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=mt(),s=yn(e),a=Jt(r,s);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=hn(e,a,s),t!==null&&(Ut(t,e,s,r),Os(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=mt(),r=yn(e),s=Jt(n,r);s.tag=2,t!=null&&(s.callback=t),t=hn(e,s,r),t!==null&&(Ut(t,e,r,n),Os(t,e,r))}};function au(e,t,n,r,s,a,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,d):t.prototype&&t.prototype.isPureReactComponent?!zr(n,r)||!zr(s,a):!0}function iu(e,t,n){var r=!1,s=fn,a=t.contextType;return typeof a=="object"&&a!==null?a=jt(a):(s=gt(t)?Tn:lt.current,r=t.contextTypes,a=(r=r!=null)?qn(e,s):fn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ws,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=a),t}function ou(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ws.enqueueReplaceState(t,t.state,null)}function Si(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},ui(e);var a=t.contextType;typeof a=="object"&&a!==null?s.context=jt(a):(a=gt(t)?Tn:lt.current,s.context=qn(e,a)),s.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(bi(e,t,a,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Ws.enqueueReplaceState(s,s.state,null),Ls(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function ar(e,t){try{var n="",r=t;do n+=ae(r),r=r.return;while(r);var s=n}catch(a){s=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:s,digest:null}}function _i(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ni(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Vd=typeof WeakMap=="function"?WeakMap:Map;function lu(e,t,n){n=Jt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ys||(Ys=!0,Ui=r),Ni(e,t)},n}function uu(e,t,n){n=Jt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){Ni(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Ni(e,t),typeof r!="function"&&(vn===null?vn=new Set([this]):vn.add(this));var d=t.stack;this.componentDidCatch(t.value,{componentStack:d!==null?d:""})}),n}function cu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Vd;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=af.bind(null,e,t,n),t.then(e,e))}function du(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function fu(e,t,n,r,s){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Jt(-1,1),t.tag=2,hn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=s,e)}var Kd=U.ReactCurrentOwner,vt=!1;function pt(e,t,n,r){t.child=e===null?Il(t,null,n,r):tr(t,e.child,n,r)}function pu(e,t,n,r,s){n=n.render;var a=t.ref;return rr(t,s),r=gi(e,t,n,r,a,s),n=vi(),e!==null&&!vt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,en(e,t,s)):(Ge&&n&&Ja(t),t.flags|=1,pt(e,t,r,s),t.child)}function mu(e,t,n,r,s){if(e===null){var a=n.type;return typeof a=="function"&&!Gi(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,hu(e,t,a,r,s)):(e=ta(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&s)===0){var d=a.memoizedProps;if(n=n.compare,n=n!==null?n:zr,n(d,r)&&e.ref===t.ref)return en(e,t,s)}return t.flags|=1,e=kn(a,r),e.ref=t.ref,e.return=t,t.child=e}function hu(e,t,n,r,s){if(e!==null){var a=e.memoizedProps;if(zr(a,r)&&e.ref===t.ref)if(vt=!1,t.pendingProps=r=a,(e.lanes&s)!==0)(e.flags&131072)!==0&&(vt=!0);else return t.lanes=e.lanes,en(e,t,s)}return Ci(e,t,n,r,s)}function gu(e,t,n){var r=t.pendingProps,s=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},$e(or,Nt),Nt|=n;else{if((n&1073741824)===0)return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,$e(or,Nt),Nt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,$e(or,Nt),Nt|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,$e(or,Nt),Nt|=r;return pt(e,t,s,n),t.child}function vu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ci(e,t,n,r,s){var a=gt(n)?Tn:lt.current;return a=qn(t,a),rr(t,s),n=gi(e,t,n,r,a,s),r=vi(),e!==null&&!vt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,en(e,t,s)):(Ge&&r&&Ja(t),t.flags|=1,pt(e,t,n,s),t.child)}function xu(e,t,n,r,s){if(gt(n)){var a=!0;Cs(t)}else a=!1;if(rr(t,s),t.stateNode===null)Hs(e,t),iu(t,n,r),Si(t,n,r,s),r=!0;else if(e===null){var d=t.stateNode,z=t.memoizedProps;d.props=z;var L=d.context,Z=n.contextType;typeof Z=="object"&&Z!==null?Z=jt(Z):(Z=gt(n)?Tn:lt.current,Z=qn(t,Z));var de=n.getDerivedStateFromProps,fe=typeof de=="function"||typeof d.getSnapshotBeforeUpdate=="function";fe||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(z!==r||L!==Z)&&ou(t,d,r,Z),mn=!1;var ue=t.memoizedState;d.state=ue,Ls(t,r,d,s),L=t.memoizedState,z!==r||ue!==L||ht.current||mn?(typeof de=="function"&&(bi(t,n,de,r),L=t.memoizedState),(z=mn||au(t,n,z,r,ue,L,Z))?(fe||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=L),d.props=r,d.state=L,d.context=Z,r=z):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{d=t.stateNode,Ol(e,t),z=t.memoizedProps,Z=t.type===t.elementType?z:Mt(t.type,z),d.props=Z,fe=t.pendingProps,ue=d.context,L=n.contextType,typeof L=="object"&&L!==null?L=jt(L):(L=gt(n)?Tn:lt.current,L=qn(t,L));var be=n.getDerivedStateFromProps;(de=typeof be=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(z!==fe||ue!==L)&&ou(t,d,r,L),mn=!1,ue=t.memoizedState,d.state=ue,Ls(t,r,d,s);var Ne=t.memoizedState;z!==fe||ue!==Ne||ht.current||mn?(typeof be=="function"&&(bi(t,n,be,r),Ne=t.memoizedState),(Z=mn||au(t,n,Z,r,ue,Ne,L)||!1)?(de||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(r,Ne,L),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(r,Ne,L)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||z===e.memoizedProps&&ue===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||z===e.memoizedProps&&ue===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=Ne),d.props=r,d.state=Ne,d.context=L,r=Z):(typeof d.componentDidUpdate!="function"||z===e.memoizedProps&&ue===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||z===e.memoizedProps&&ue===e.memoizedState||(t.flags|=1024),r=!1)}return Ei(e,t,n,r,a,s)}function Ei(e,t,n,r,s,a){vu(e,t);var d=(t.flags&128)!==0;if(!r&&!d)return s&&Sl(t,n,!1),en(e,t,a);r=t.stateNode,Kd.current=t;var z=d&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&d?(t.child=tr(t,e.child,null,a),t.child=tr(t,null,z,a)):pt(e,t,z,a),t.memoizedState=r.state,s&&Sl(t,n,!0),t.child}function yu(e){var t=e.stateNode;t.pendingContext?kl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&kl(e,t.context,!1),ci(e,t.containerInfo)}function wu(e,t,n,r,s){return er(),ri(s),t.flags|=256,pt(e,t,n,r),t.child}var Ti={dehydrated:null,treeContext:null,retryLane:0};function ji(e){return{baseLanes:e,cachePool:null,transitions:null}}function ku(e,t,n){var r=t.pendingProps,s=Ze.current,a=!1,d=(t.flags&128)!==0,z;if((z=d)||(z=e!==null&&e.memoizedState===null?!1:(s&2)!==0),z?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),$e(Ze,s&1),e===null)return ni(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(d=r.children,e=r.fallback,a?(r=t.mode,a=t.child,d={mode:"hidden",children:d},(r&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=d):a=na(d,r,0,null),e=Pn(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=ji(n),t.memoizedState=Ti,e):zi(t,d));if(s=e.memoizedState,s!==null&&(z=s.dehydrated,z!==null))return Gd(e,t,d,r,z,s,n);if(a){a=r.fallback,d=t.mode,s=e.child,z=s.sibling;var L={mode:"hidden",children:r.children};return(d&1)===0&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=L,t.deletions=null):(r=kn(s,L),r.subtreeFlags=s.subtreeFlags&14680064),z!==null?a=kn(z,a):(a=Pn(a,d,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,d=e.child.memoizedState,d=d===null?ji(n):{baseLanes:d.baseLanes|n,cachePool:null,transitions:d.transitions},a.memoizedState=d,a.childLanes=e.childLanes&~n,t.memoizedState=Ti,r}return a=e.child,e=a.sibling,r=kn(a,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function zi(e,t){return t=na({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function $s(e,t,n,r){return r!==null&&ri(r),tr(t,e.child,null,n),e=zi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Gd(e,t,n,r,s,a,d){if(n)return t.flags&256?(t.flags&=-257,r=_i(Error(o(422))),$s(e,t,d,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,s=t.mode,r=na({mode:"visible",children:r.children},s,0,null),a=Pn(a,s,d,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,(t.mode&1)!==0&&tr(t,e.child,null,d),t.child.memoizedState=ji(d),t.memoizedState=Ti,a);if((t.mode&1)===0)return $s(e,t,d,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var z=r.dgst;return r=z,a=Error(o(419)),r=_i(a,r,void 0),$s(e,t,d,r)}if(z=(d&e.childLanes)!==0,vt||z){if(r=rt,r!==null){switch(d&-d){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=(s&(r.suspendedLanes|d))!==0?0:s,s!==0&&s!==a.retryLane&&(a.retryLane=s,Xt(e,s),Ut(r,e,s,-1))}return Ki(),r=_i(Error(o(421))),$s(e,t,d,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=of.bind(null,e),s._reactRetry=t,null):(e=a.treeContext,_t=cn(s.nextSibling),St=t,Ge=!0,Dt=null,e!==null&&(Et[Tt++]=Qt,Et[Tt++]=qt,Et[Tt++]=jn,Qt=e.id,qt=e.overflow,jn=t),t=zi(t,r.children),t.flags|=4096,t)}function bu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),oi(e.return,t,n)}function Ri(e,t,n,r,s){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=s)}function Su(e,t,n){var r=t.pendingProps,s=r.revealOrder,a=r.tail;if(pt(e,t,r.children,n),r=Ze.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bu(e,n,t);else if(e.tag===19)bu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if($e(Ze,r),(t.mode&1)===0)t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&Ds(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Ri(t,!1,s,n,a);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Ds(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Ri(t,!0,n,null,a);break;case"together":Ri(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hs(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function en(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),On|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=kn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=kn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Zd(e,t,n){switch(t.tag){case 3:yu(t),er();break;case 5:Ml(t);break;case 1:gt(t.type)&&Cs(t);break;case 4:ci(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;$e(Is,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?($e(Ze,Ze.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?ku(e,t,n):($e(Ze,Ze.current&1),e=en(e,t,n),e!==null?e.sibling:null);$e(Ze,Ze.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Su(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),$e(Ze,Ze.current),r)break;return null;case 22:case 23:return t.lanes=0,gu(e,t,n)}return en(e,t,n)}var _u,Ii,Nu,Cu;_u=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ii=function(){},Nu=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,In(Ht.current);var a=null;switch(n){case"input":s=i(e,s),r=i(e,r),a=[];break;case"select":s=se({},s,{value:void 0}),r=se({},r,{value:void 0}),a=[];break;case"textarea":s=K(e,s),r=K(e,r),a=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ss)}kt(n,r);var d;n=null;for(Z in s)if(!r.hasOwnProperty(Z)&&s.hasOwnProperty(Z)&&s[Z]!=null)if(Z==="style"){var z=s[Z];for(d in z)z.hasOwnProperty(d)&&(n||(n={}),n[d]="")}else Z!=="dangerouslySetInnerHTML"&&Z!=="children"&&Z!=="suppressContentEditableWarning"&&Z!=="suppressHydrationWarning"&&Z!=="autoFocus"&&(k.hasOwnProperty(Z)?a||(a=[]):(a=a||[]).push(Z,null));for(Z in r){var L=r[Z];if(z=s!=null?s[Z]:void 0,r.hasOwnProperty(Z)&&L!==z&&(L!=null||z!=null))if(Z==="style")if(z){for(d in z)!z.hasOwnProperty(d)||L&&L.hasOwnProperty(d)||(n||(n={}),n[d]="");for(d in L)L.hasOwnProperty(d)&&z[d]!==L[d]&&(n||(n={}),n[d]=L[d])}else n||(a||(a=[]),a.push(Z,n)),n=L;else Z==="dangerouslySetInnerHTML"?(L=L?L.__html:void 0,z=z?z.__html:void 0,L!=null&&z!==L&&(a=a||[]).push(Z,L)):Z==="children"?typeof L!="string"&&typeof L!="number"||(a=a||[]).push(Z,""+L):Z!=="suppressContentEditableWarning"&&Z!=="suppressHydrationWarning"&&(k.hasOwnProperty(Z)?(L!=null&&Z==="onScroll"&&He("scroll",e),a||z===L||(a=[])):(a=a||[]).push(Z,L))}n&&(a=a||[]).push("style",n);var Z=a;(t.updateQueue=Z)&&(t.flags|=4)}},Cu=function(e,t,n,r){n!==r&&(t.flags|=4)};function Vr(e,t){if(!Ge)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ct(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Yd(e,t,n){var r=t.pendingProps;switch(ei(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(t),null;case 1:return gt(t.type)&&Ns(),ct(t),null;case 3:return r=t.stateNode,sr(),Ve(ht),Ve(lt),pi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(zs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Dt!==null&&($i(Dt),Dt=null))),Ii(e,t),ct(t),null;case 5:di(t);var s=In(Ur.current);if(n=t.type,e!==null&&t.stateNode!=null)Nu(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(o(166));return ct(t),null}if(e=In(Ht.current),zs(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[$t]=t,r[Lr]=a,e=(t.mode&1)!==0,n){case"dialog":He("cancel",r),He("close",r);break;case"iframe":case"object":case"embed":He("load",r);break;case"video":case"audio":for(s=0;s<Ir.length;s++)He(Ir[s],r);break;case"source":He("error",r);break;case"img":case"image":case"link":He("error",r),He("load",r);break;case"details":He("toggle",r);break;case"input":X(r,a),He("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},He("invalid",r);break;case"textarea":he(r,a),He("invalid",r)}kt(n,a),s=null;for(var d in a)if(a.hasOwnProperty(d)){var z=a[d];d==="children"?typeof z=="string"?r.textContent!==z&&(a.suppressHydrationWarning!==!0&&bs(r.textContent,z,e),s=["children",z]):typeof z=="number"&&r.textContent!==""+z&&(a.suppressHydrationWarning!==!0&&bs(r.textContent,z,e),s=["children",""+z]):k.hasOwnProperty(d)&&z!=null&&d==="onScroll"&&He("scroll",r)}switch(n){case"input":ze(r),N(r,a,!0);break;case"textarea":ze(r),xe(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Ss)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{d=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=je(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=d.createElement(n,{is:r.is}):(e=d.createElement(n),n==="select"&&(d=e,r.multiple?d.multiple=!0:r.size&&(d.size=r.size))):e=d.createElementNS(e,n),e[$t]=t,e[Lr]=r,_u(e,t,!1,!1),t.stateNode=e;e:{switch(d=Bn(n,r),n){case"dialog":He("cancel",e),He("close",e),s=r;break;case"iframe":case"object":case"embed":He("load",e),s=r;break;case"video":case"audio":for(s=0;s<Ir.length;s++)He(Ir[s],e);s=r;break;case"source":He("error",e),s=r;break;case"img":case"image":case"link":He("error",e),He("load",e),s=r;break;case"details":He("toggle",e),s=r;break;case"input":X(e,r),s=i(e,r),He("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=se({},r,{value:void 0}),He("invalid",e);break;case"textarea":he(e,r),s=K(e,r),He("invalid",e);break;default:s=r}kt(n,s),z=s;for(a in z)if(z.hasOwnProperty(a)){var L=z[a];a==="style"?_n(e,L):a==="dangerouslySetInnerHTML"?(L=L?L.__html:void 0,L!=null&&ft(e,L)):a==="children"?typeof L=="string"?(n!=="textarea"||L!=="")&&At(e,L):typeof L=="number"&&At(e,""+L):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(k.hasOwnProperty(a)?L!=null&&a==="onScroll"&&He("scroll",e):L!=null&&A(e,a,L,d))}switch(n){case"input":ze(e),N(e,r,!1);break;case"textarea":ze(e),xe(e);break;case"option":r.value!=null&&e.setAttribute("value",""+le(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?oe(e,!!r.multiple,a,!1):r.defaultValue!=null&&oe(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Ss)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ct(t),null;case 6:if(e&&t.stateNode!=null)Cu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(o(166));if(n=In(Ur.current),In(Ht.current),zs(t)){if(r=t.stateNode,n=t.memoizedProps,r[$t]=t,(a=r.nodeValue!==n)&&(e=St,e!==null))switch(e.tag){case 3:bs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&bs(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$t]=t,t.stateNode=r}return ct(t),null;case 13:if(Ve(Ze),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ge&&_t!==null&&(t.mode&1)!==0&&(t.flags&128)===0)jl(),er(),t.flags|=98560,a=!1;else if(a=zs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(o(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(o(317));a[$t]=t}else er(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ct(t),a=!1}else Dt!==null&&($i(Dt),Dt=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ze.current&1)!==0?tt===0&&(tt=3):Ki())),t.updateQueue!==null&&(t.flags|=4),ct(t),null);case 4:return sr(),Ii(e,t),e===null&&Ar(t.stateNode.containerInfo),ct(t),null;case 10:return ii(t.type._context),ct(t),null;case 17:return gt(t.type)&&Ns(),ct(t),null;case 19:if(Ve(Ze),a=t.memoizedState,a===null)return ct(t),null;if(r=(t.flags&128)!==0,d=a.rendering,d===null)if(r)Vr(a,!1);else{if(tt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(d=Ds(e),d!==null){for(t.flags|=128,Vr(a,!1),r=d.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,d=a.alternate,d===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=d.childLanes,a.lanes=d.lanes,a.child=d.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=d.memoizedProps,a.memoizedState=d.memoizedState,a.updateQueue=d.updateQueue,a.type=d.type,e=d.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return $e(Ze,Ze.current&1|2),t.child}e=e.sibling}a.tail!==null&&qe()>lr&&(t.flags|=128,r=!0,Vr(a,!1),t.lanes=4194304)}else{if(!r)if(e=Ds(d),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Vr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!d.alternate&&!Ge)return ct(t),null}else 2*qe()-a.renderingStartTime>lr&&n!==1073741824&&(t.flags|=128,r=!0,Vr(a,!1),t.lanes=4194304);a.isBackwards?(d.sibling=t.child,t.child=d):(n=a.last,n!==null?n.sibling=d:t.child=d,a.last=d)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=qe(),t.sibling=null,n=Ze.current,$e(Ze,r?n&1|2:n&1),t):(ct(t),null);case 22:case 23:return Vi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Nt&1073741824)!==0&&(ct(t),t.subtreeFlags&6&&(t.flags|=8192)):ct(t),null;case 24:return null;case 25:return null}throw Error(o(156,t.tag))}function Qd(e,t){switch(ei(t),t.tag){case 1:return gt(t.type)&&Ns(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return sr(),Ve(ht),Ve(lt),pi(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return di(t),null;case 13:if(Ve(Ze),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));er()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ve(Ze),null;case 4:return sr(),null;case 10:return ii(t.type._context),null;case 22:case 23:return Vi(),null;case 24:return null;default:return null}}var Vs=!1,dt=!1,qd=typeof WeakSet=="function"?WeakSet:Set,_e=null;function ir(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Qe(e,t,r)}else n.current=null}function Ai(e,t,n){try{n()}catch(r){Qe(e,t,r)}}var Eu=!1;function Xd(e,t){if(Va=ds,e=al(),Ma(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var d=0,z=-1,L=-1,Z=0,de=0,fe=e,ue=null;t:for(;;){for(var be;fe!==n||s!==0&&fe.nodeType!==3||(z=d+s),fe!==a||r!==0&&fe.nodeType!==3||(L=d+r),fe.nodeType===3&&(d+=fe.nodeValue.length),(be=fe.firstChild)!==null;)ue=fe,fe=be;for(;;){if(fe===e)break t;if(ue===n&&++Z===s&&(z=d),ue===a&&++de===r&&(L=d),(be=fe.nextSibling)!==null)break;fe=ue,ue=fe.parentNode}fe=be}n=z===-1||L===-1?null:{start:z,end:L}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ka={focusedElem:e,selectionRange:n},ds=!1,_e=t;_e!==null;)if(t=_e,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_e=e;else for(;_e!==null;){t=_e;try{var Ne=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(Ne!==null){var Ce=Ne.memoizedProps,Xe=Ne.memoizedState,$=t.stateNode,P=$.getSnapshotBeforeUpdate(t.elementType===t.type?Ce:Mt(t.type,Ce),Xe);$.__reactInternalSnapshotBeforeUpdate=P}break;case 3:var V=t.stateNode.containerInfo;V.nodeType===1?V.textContent="":V.nodeType===9&&V.documentElement&&V.removeChild(V.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(ge){Qe(t,t.return,ge)}if(e=t.sibling,e!==null){e.return=t.return,_e=e;break}_e=t.return}return Ne=Eu,Eu=!1,Ne}function Kr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var a=s.destroy;s.destroy=void 0,a!==void 0&&Ai(t,n,a)}s=s.next}while(s!==r)}}function Ks(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Oi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Tu(e){var t=e.alternate;t!==null&&(e.alternate=null,Tu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[$t],delete t[Lr],delete t[Qa],delete t[Od],delete t[Ld])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ju(e){return e.tag===5||e.tag===3||e.tag===4}function zu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ju(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Li(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ss));else if(r!==4&&(e=e.child,e!==null))for(Li(e,t,n),e=e.sibling;e!==null;)Li(e,t,n),e=e.sibling}function Di(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Di(e,t,n),e=e.sibling;e!==null;)Di(e,t,n),e=e.sibling}var at=null,Pt=!1;function gn(e,t,n){for(n=n.child;n!==null;)Ru(e,t,n),n=n.sibling}function Ru(e,t,n){if(Wt&&typeof Wt.onCommitFiberUnmount=="function")try{Wt.onCommitFiberUnmount(as,n)}catch{}switch(n.tag){case 5:dt||ir(n,t);case 6:var r=at,s=Pt;at=null,gn(e,t,n),at=r,Pt=s,at!==null&&(Pt?(e=at,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):at.removeChild(n.stateNode));break;case 18:at!==null&&(Pt?(e=at,n=n.stateNode,e.nodeType===8?Ya(e.parentNode,n):e.nodeType===1&&Ya(e,n),_r(e)):Ya(at,n.stateNode));break;case 4:r=at,s=Pt,at=n.stateNode.containerInfo,Pt=!0,gn(e,t,n),at=r,Pt=s;break;case 0:case 11:case 14:case 15:if(!dt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var a=s,d=a.destroy;a=a.tag,d!==void 0&&((a&2)!==0||(a&4)!==0)&&Ai(n,t,d),s=s.next}while(s!==r)}gn(e,t,n);break;case 1:if(!dt&&(ir(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(z){Qe(n,t,z)}gn(e,t,n);break;case 21:gn(e,t,n);break;case 22:n.mode&1?(dt=(r=dt)||n.memoizedState!==null,gn(e,t,n),dt=r):gn(e,t,n);break;default:gn(e,t,n)}}function Iu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new qd),t.forEach(function(r){var s=lf.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Ft(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var a=e,d=t,z=d;e:for(;z!==null;){switch(z.tag){case 5:at=z.stateNode,Pt=!1;break e;case 3:at=z.stateNode.containerInfo,Pt=!0;break e;case 4:at=z.stateNode.containerInfo,Pt=!0;break e}z=z.return}if(at===null)throw Error(o(160));Ru(a,d,s),at=null,Pt=!1;var L=s.alternate;L!==null&&(L.return=null),s.return=null}catch(Z){Qe(s,t,Z)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Au(t,e),t=t.sibling}function Au(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ft(t,e),Kt(e),r&4){try{Kr(3,e,e.return),Ks(3,e)}catch(Ce){Qe(e,e.return,Ce)}try{Kr(5,e,e.return)}catch(Ce){Qe(e,e.return,Ce)}}break;case 1:Ft(t,e),Kt(e),r&512&&n!==null&&ir(n,n.return);break;case 5:if(Ft(t,e),Kt(e),r&512&&n!==null&&ir(n,n.return),e.flags&32){var s=e.stateNode;try{At(s,"")}catch(Ce){Qe(e,e.return,Ce)}}if(r&4&&(s=e.stateNode,s!=null)){var a=e.memoizedProps,d=n!==null?n.memoizedProps:a,z=e.type,L=e.updateQueue;if(e.updateQueue=null,L!==null)try{z==="input"&&a.type==="radio"&&a.name!=null&&H(s,a),Bn(z,d);var Z=Bn(z,a);for(d=0;d<L.length;d+=2){var de=L[d],fe=L[d+1];de==="style"?_n(s,fe):de==="dangerouslySetInnerHTML"?ft(s,fe):de==="children"?At(s,fe):A(s,de,fe,Z)}switch(z){case"input":T(s,a);break;case"textarea":Se(s,a);break;case"select":var ue=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!a.multiple;var be=a.value;be!=null?oe(s,!!a.multiple,be,!1):ue!==!!a.multiple&&(a.defaultValue!=null?oe(s,!!a.multiple,a.defaultValue,!0):oe(s,!!a.multiple,a.multiple?[]:"",!1))}s[Lr]=a}catch(Ce){Qe(e,e.return,Ce)}}break;case 6:if(Ft(t,e),Kt(e),r&4){if(e.stateNode===null)throw Error(o(162));s=e.stateNode,a=e.memoizedProps;try{s.nodeValue=a}catch(Ce){Qe(e,e.return,Ce)}}break;case 3:if(Ft(t,e),Kt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{_r(t.containerInfo)}catch(Ce){Qe(e,e.return,Ce)}break;case 4:Ft(t,e),Kt(e);break;case 13:Ft(t,e),Kt(e),s=e.child,s.flags&8192&&(a=s.memoizedState!==null,s.stateNode.isHidden=a,!a||s.alternate!==null&&s.alternate.memoizedState!==null||(Fi=qe())),r&4&&Iu(e);break;case 22:if(de=n!==null&&n.memoizedState!==null,e.mode&1?(dt=(Z=dt)||de,Ft(t,e),dt=Z):Ft(t,e),Kt(e),r&8192){if(Z=e.memoizedState!==null,(e.stateNode.isHidden=Z)&&!de&&(e.mode&1)!==0)for(_e=e,de=e.child;de!==null;){for(fe=_e=de;_e!==null;){switch(ue=_e,be=ue.child,ue.tag){case 0:case 11:case 14:case 15:Kr(4,ue,ue.return);break;case 1:ir(ue,ue.return);var Ne=ue.stateNode;if(typeof Ne.componentWillUnmount=="function"){r=ue,n=ue.return;try{t=r,Ne.props=t.memoizedProps,Ne.state=t.memoizedState,Ne.componentWillUnmount()}catch(Ce){Qe(r,n,Ce)}}break;case 5:ir(ue,ue.return);break;case 22:if(ue.memoizedState!==null){Du(fe);continue}}be!==null?(be.return=ue,_e=be):Du(fe)}de=de.sibling}e:for(de=null,fe=e;;){if(fe.tag===5){if(de===null){de=fe;try{s=fe.stateNode,Z?(a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(z=fe.stateNode,L=fe.memoizedProps.style,d=L!=null&&L.hasOwnProperty("display")?L.display:null,z.style.display=Ke("display",d))}catch(Ce){Qe(e,e.return,Ce)}}}else if(fe.tag===6){if(de===null)try{fe.stateNode.nodeValue=Z?"":fe.memoizedProps}catch(Ce){Qe(e,e.return,Ce)}}else if((fe.tag!==22&&fe.tag!==23||fe.memoizedState===null||fe===e)&&fe.child!==null){fe.child.return=fe,fe=fe.child;continue}if(fe===e)break e;for(;fe.sibling===null;){if(fe.return===null||fe.return===e)break e;de===fe&&(de=null),fe=fe.return}de===fe&&(de=null),fe.sibling.return=fe.return,fe=fe.sibling}}break;case 19:Ft(t,e),Kt(e),r&4&&Iu(e);break;case 21:break;default:Ft(t,e),Kt(e)}}function Kt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ju(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(At(s,""),r.flags&=-33);var a=zu(e);Di(e,a,s);break;case 3:case 4:var d=r.stateNode.containerInfo,z=zu(e);Li(e,z,d);break;default:throw Error(o(161))}}catch(L){Qe(e,e.return,L)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Jd(e,t,n){_e=e,Ou(e)}function Ou(e,t,n){for(var r=(e.mode&1)!==0;_e!==null;){var s=_e,a=s.child;if(s.tag===22&&r){var d=s.memoizedState!==null||Vs;if(!d){var z=s.alternate,L=z!==null&&z.memoizedState!==null||dt;z=Vs;var Z=dt;if(Vs=d,(dt=L)&&!Z)for(_e=s;_e!==null;)d=_e,L=d.child,d.tag===22&&d.memoizedState!==null?Mu(s):L!==null?(L.return=d,_e=L):Mu(s);for(;a!==null;)_e=a,Ou(a),a=a.sibling;_e=s,Vs=z,dt=Z}Lu(e)}else(s.subtreeFlags&8772)!==0&&a!==null?(a.return=s,_e=a):Lu(e)}}function Lu(e){for(;_e!==null;){var t=_e;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:dt||Ks(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!dt)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:Mt(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Dl(t,a,r);break;case 3:var d=t.updateQueue;if(d!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Dl(t,d,n)}break;case 5:var z=t.stateNode;if(n===null&&t.flags&4){n=z;var L=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":L.autoFocus&&n.focus();break;case"img":L.src&&(n.src=L.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var Z=t.alternate;if(Z!==null){var de=Z.memoizedState;if(de!==null){var fe=de.dehydrated;fe!==null&&_r(fe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}dt||t.flags&512&&Oi(t)}catch(ue){Qe(t,t.return,ue)}}if(t===e){_e=null;break}if(n=t.sibling,n!==null){n.return=t.return,_e=n;break}_e=t.return}}function Du(e){for(;_e!==null;){var t=_e;if(t===e){_e=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_e=n;break}_e=t.return}}function Mu(e){for(;_e!==null;){var t=_e;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ks(4,t)}catch(L){Qe(t,n,L)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(L){Qe(t,s,L)}}var a=t.return;try{Oi(t)}catch(L){Qe(t,a,L)}break;case 5:var d=t.return;try{Oi(t)}catch(L){Qe(t,d,L)}}}catch(L){Qe(t,t.return,L)}if(t===e){_e=null;break}var z=t.sibling;if(z!==null){z.return=t.return,_e=z;break}_e=t.return}}var ef=Math.ceil,Gs=U.ReactCurrentDispatcher,Mi=U.ReactCurrentOwner,Rt=U.ReactCurrentBatchConfig,Pe=0,rt=null,Je=null,it=0,Nt=0,or=dn(0),tt=0,Gr=null,On=0,Zs=0,Pi=0,Zr=null,xt=null,Fi=0,lr=1/0,tn=null,Ys=!1,Ui=null,vn=null,Qs=!1,xn=null,qs=0,Yr=0,Bi=null,Xs=-1,Js=0;function mt(){return(Pe&6)!==0?qe():Xs!==-1?Xs:Xs=qe()}function yn(e){return(e.mode&1)===0?1:(Pe&2)!==0&&it!==0?it&-it:Md.transition!==null?(Js===0&&(Js=zo()),Js):(e=We,e!==0||(e=window.event,e=e===void 0?16:Fo(e.type)),e)}function Ut(e,t,n,r){if(50<Yr)throw Yr=0,Bi=null,Error(o(185));yr(e,n,r),((Pe&2)===0||e!==rt)&&(e===rt&&((Pe&2)===0&&(Zs|=n),tt===4&&wn(e,it)),yt(e,r),n===1&&Pe===0&&(t.mode&1)===0&&(lr=qe()+500,Es&&pn()))}function yt(e,t){var n=e.callbackNode;Mc(e,t);var r=ls(e,e===rt?it:0);if(r===0)n!==null&&Eo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Eo(n),t===1)e.tag===0?Dd(Fu.bind(null,e)):_l(Fu.bind(null,e)),Id(function(){(Pe&6)===0&&pn()}),n=null;else{switch(Ro(r)){case 1:n=wa;break;case 4:n=To;break;case 16:n=ss;break;case 536870912:n=jo;break;default:n=ss}n=Gu(n,Pu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Pu(e,t){if(Xs=-1,Js=0,(Pe&6)!==0)throw Error(o(327));var n=e.callbackNode;if(ur()&&e.callbackNode!==n)return null;var r=ls(e,e===rt?it:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=ea(e,r);else{t=r;var s=Pe;Pe|=2;var a=Bu();(rt!==e||it!==t)&&(tn=null,lr=qe()+500,Dn(e,t));do try{rf();break}catch(z){Uu(e,z)}while(!0);ai(),Gs.current=a,Pe=s,Je!==null?t=0:(rt=null,it=0,t=tt)}if(t!==0){if(t===2&&(s=ka(e),s!==0&&(r=s,t=Wi(e,s))),t===1)throw n=Gr,Dn(e,0),wn(e,r),yt(e,qe()),n;if(t===6)wn(e,r);else{if(s=e.current.alternate,(r&30)===0&&!tf(s)&&(t=ea(e,r),t===2&&(a=ka(e),a!==0&&(r=a,t=Wi(e,a))),t===1))throw n=Gr,Dn(e,0),wn(e,r),yt(e,qe()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(o(345));case 2:Mn(e,xt,tn);break;case 3:if(wn(e,r),(r&130023424)===r&&(t=Fi+500-qe(),10<t)){if(ls(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){mt(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Za(Mn.bind(null,e,xt,tn),t);break}Mn(e,xt,tn);break;case 4:if(wn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var d=31-Ot(r);a=1<<d,d=t[d],d>s&&(s=d),r&=~a}if(r=s,r=qe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ef(r/1960))-r,10<r){e.timeoutHandle=Za(Mn.bind(null,e,xt,tn),r);break}Mn(e,xt,tn);break;case 5:Mn(e,xt,tn);break;default:throw Error(o(329))}}}return yt(e,qe()),e.callbackNode===n?Pu.bind(null,e):null}function Wi(e,t){var n=Zr;return e.current.memoizedState.isDehydrated&&(Dn(e,t).flags|=256),e=ea(e,t),e!==2&&(t=xt,xt=n,t!==null&&$i(t)),e}function $i(e){xt===null?xt=e:xt.push.apply(xt,e)}function tf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],a=s.getSnapshot;s=s.value;try{if(!Lt(a(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wn(e,t){for(t&=~Pi,t&=~Zs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ot(t),r=1<<n;e[n]=-1,t&=~r}}function Fu(e){if((Pe&6)!==0)throw Error(o(327));ur();var t=ls(e,0);if((t&1)===0)return yt(e,qe()),null;var n=ea(e,t);if(e.tag!==0&&n===2){var r=ka(e);r!==0&&(t=r,n=Wi(e,r))}if(n===1)throw n=Gr,Dn(e,0),wn(e,t),yt(e,qe()),n;if(n===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mn(e,xt,tn),yt(e,qe()),null}function Hi(e,t){var n=Pe;Pe|=1;try{return e(t)}finally{Pe=n,Pe===0&&(lr=qe()+500,Es&&pn())}}function Ln(e){xn!==null&&xn.tag===0&&(Pe&6)===0&&ur();var t=Pe;Pe|=1;var n=Rt.transition,r=We;try{if(Rt.transition=null,We=1,e)return e()}finally{We=r,Rt.transition=n,Pe=t,(Pe&6)===0&&pn()}}function Vi(){Nt=or.current,Ve(or)}function Dn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Rd(n)),Je!==null)for(n=Je.return;n!==null;){var r=n;switch(ei(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ns();break;case 3:sr(),Ve(ht),Ve(lt),pi();break;case 5:di(r);break;case 4:sr();break;case 13:Ve(Ze);break;case 19:Ve(Ze);break;case 10:ii(r.type._context);break;case 22:case 23:Vi()}n=n.return}if(rt=e,Je=e=kn(e.current,null),it=Nt=t,tt=0,Gr=null,Pi=Zs=On=0,xt=Zr=null,Rn!==null){for(t=0;t<Rn.length;t++)if(n=Rn[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,a=n.pending;if(a!==null){var d=a.next;a.next=s,r.next=d}n.pending=r}Rn=null}return e}function Uu(e,t){do{var n=Je;try{if(ai(),Ms.current=Bs,Ps){for(var r=Ye.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Ps=!1}if(An=0,nt=et=Ye=null,Br=!1,Wr=0,Mi.current=null,n===null||n.return===null){tt=1,Gr=t,Je=null;break}e:{var a=e,d=n.return,z=n,L=t;if(t=it,z.flags|=32768,L!==null&&typeof L=="object"&&typeof L.then=="function"){var Z=L,de=z,fe=de.tag;if((de.mode&1)===0&&(fe===0||fe===11||fe===15)){var ue=de.alternate;ue?(de.updateQueue=ue.updateQueue,de.memoizedState=ue.memoizedState,de.lanes=ue.lanes):(de.updateQueue=null,de.memoizedState=null)}var be=du(d);if(be!==null){be.flags&=-257,fu(be,d,z,a,t),be.mode&1&&cu(a,Z,t),t=be,L=Z;var Ne=t.updateQueue;if(Ne===null){var Ce=new Set;Ce.add(L),t.updateQueue=Ce}else Ne.add(L);break e}else{if((t&1)===0){cu(a,Z,t),Ki();break e}L=Error(o(426))}}else if(Ge&&z.mode&1){var Xe=du(d);if(Xe!==null){(Xe.flags&65536)===0&&(Xe.flags|=256),fu(Xe,d,z,a,t),ri(ar(L,z));break e}}a=L=ar(L,z),tt!==4&&(tt=2),Zr===null?Zr=[a]:Zr.push(a),a=d;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var $=lu(a,L,t);Ll(a,$);break e;case 1:z=L;var P=a.type,V=a.stateNode;if((a.flags&128)===0&&(typeof P.getDerivedStateFromError=="function"||V!==null&&typeof V.componentDidCatch=="function"&&(vn===null||!vn.has(V)))){a.flags|=65536,t&=-t,a.lanes|=t;var ge=uu(a,z,t);Ll(a,ge);break e}}a=a.return}while(a!==null)}$u(n)}catch(Ee){t=Ee,Je===n&&n!==null&&(Je=n=n.return);continue}break}while(!0)}function Bu(){var e=Gs.current;return Gs.current=Bs,e===null?Bs:e}function Ki(){(tt===0||tt===3||tt===2)&&(tt=4),rt===null||(On&268435455)===0&&(Zs&268435455)===0||wn(rt,it)}function ea(e,t){var n=Pe;Pe|=2;var r=Bu();(rt!==e||it!==t)&&(tn=null,Dn(e,t));do try{nf();break}catch(s){Uu(e,s)}while(!0);if(ai(),Pe=n,Gs.current=r,Je!==null)throw Error(o(261));return rt=null,it=0,tt}function nf(){for(;Je!==null;)Wu(Je)}function rf(){for(;Je!==null&&!Tc();)Wu(Je)}function Wu(e){var t=Ku(e.alternate,e,Nt);e.memoizedProps=e.pendingProps,t===null?$u(e):Je=t,Mi.current=null}function $u(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Yd(n,t,Nt),n!==null){Je=n;return}}else{if(n=Qd(n,t),n!==null){n.flags&=32767,Je=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{tt=6,Je=null;return}}if(t=t.sibling,t!==null){Je=t;return}Je=t=e}while(t!==null);tt===0&&(tt=5)}function Mn(e,t,n){var r=We,s=Rt.transition;try{Rt.transition=null,We=1,sf(e,t,n,r)}finally{Rt.transition=s,We=r}return null}function sf(e,t,n,r){do ur();while(xn!==null);if((Pe&6)!==0)throw Error(o(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Pc(e,a),e===rt&&(Je=rt=null,it=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Qs||(Qs=!0,Gu(ss,function(){return ur(),null})),a=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||a){a=Rt.transition,Rt.transition=null;var d=We;We=1;var z=Pe;Pe|=4,Mi.current=null,Xd(e,n),Au(n,e),_d(Ka),ds=!!Va,Ka=Va=null,e.current=n,Jd(n),jc(),Pe=z,We=d,Rt.transition=a}else e.current=n;if(Qs&&(Qs=!1,xn=e,qs=s),a=e.pendingLanes,a===0&&(vn=null),Ic(n.stateNode),yt(e,qe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Ys)throw Ys=!1,e=Ui,Ui=null,e;return(qs&1)!==0&&e.tag!==0&&ur(),a=e.pendingLanes,(a&1)!==0?e===Bi?Yr++:(Yr=0,Bi=e):Yr=0,pn(),null}function ur(){if(xn!==null){var e=Ro(qs),t=Rt.transition,n=We;try{if(Rt.transition=null,We=16>e?16:e,xn===null)var r=!1;else{if(e=xn,xn=null,qs=0,(Pe&6)!==0)throw Error(o(331));var s=Pe;for(Pe|=4,_e=e.current;_e!==null;){var a=_e,d=a.child;if((_e.flags&16)!==0){var z=a.deletions;if(z!==null){for(var L=0;L<z.length;L++){var Z=z[L];for(_e=Z;_e!==null;){var de=_e;switch(de.tag){case 0:case 11:case 15:Kr(8,de,a)}var fe=de.child;if(fe!==null)fe.return=de,_e=fe;else for(;_e!==null;){de=_e;var ue=de.sibling,be=de.return;if(Tu(de),de===Z){_e=null;break}if(ue!==null){ue.return=be,_e=ue;break}_e=be}}}var Ne=a.alternate;if(Ne!==null){var Ce=Ne.child;if(Ce!==null){Ne.child=null;do{var Xe=Ce.sibling;Ce.sibling=null,Ce=Xe}while(Ce!==null)}}_e=a}}if((a.subtreeFlags&2064)!==0&&d!==null)d.return=a,_e=d;else e:for(;_e!==null;){if(a=_e,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:Kr(9,a,a.return)}var $=a.sibling;if($!==null){$.return=a.return,_e=$;break e}_e=a.return}}var P=e.current;for(_e=P;_e!==null;){d=_e;var V=d.child;if((d.subtreeFlags&2064)!==0&&V!==null)V.return=d,_e=V;else e:for(d=P;_e!==null;){if(z=_e,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:Ks(9,z)}}catch(Ee){Qe(z,z.return,Ee)}if(z===d){_e=null;break e}var ge=z.sibling;if(ge!==null){ge.return=z.return,_e=ge;break e}_e=z.return}}if(Pe=s,pn(),Wt&&typeof Wt.onPostCommitFiberRoot=="function")try{Wt.onPostCommitFiberRoot(as,e)}catch{}r=!0}return r}finally{We=n,Rt.transition=t}}return!1}function Hu(e,t,n){t=ar(n,t),t=lu(e,t,1),e=hn(e,t,1),t=mt(),e!==null&&(yr(e,1,t),yt(e,t))}function Qe(e,t,n){if(e.tag===3)Hu(e,e,n);else for(;t!==null;){if(t.tag===3){Hu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vn===null||!vn.has(r))){e=ar(n,e),e=uu(t,e,1),t=hn(t,e,1),e=mt(),t!==null&&(yr(t,1,e),yt(t,e));break}}t=t.return}}function af(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=mt(),e.pingedLanes|=e.suspendedLanes&n,rt===e&&(it&n)===n&&(tt===4||tt===3&&(it&130023424)===it&&500>qe()-Fi?Dn(e,0):Pi|=n),yt(e,t)}function Vu(e,t){t===0&&((e.mode&1)===0?t=1:(t=os,os<<=1,(os&130023424)===0&&(os=4194304)));var n=mt();e=Xt(e,t),e!==null&&(yr(e,t,n),yt(e,n))}function of(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Vu(e,n)}function lf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}r!==null&&r.delete(t),Vu(e,n)}var Ku;Ku=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ht.current)vt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return vt=!1,Zd(e,t,n);vt=(e.flags&131072)!==0}else vt=!1,Ge&&(t.flags&1048576)!==0&&Nl(t,js,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Hs(e,t),e=t.pendingProps;var s=qn(t,lt.current);rr(t,n),s=gi(null,t,r,e,s,n);var a=vi();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,gt(r)?(a=!0,Cs(t)):a=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,ui(t),s.updater=Ws,t.stateNode=s,s._reactInternals=t,Si(t,r,e,n),t=Ei(null,t,r,!0,a,n)):(t.tag=0,Ge&&a&&Ja(t),pt(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Hs(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=cf(r),e=Mt(r,e),s){case 0:t=Ci(null,t,r,e,n);break e;case 1:t=xu(null,t,r,e,n);break e;case 11:t=pu(null,t,r,e,n);break e;case 14:t=mu(null,t,r,Mt(r.type,e),n);break e}throw Error(o(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Mt(r,s),Ci(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Mt(r,s),xu(e,t,r,s,n);case 3:e:{if(yu(t),e===null)throw Error(o(387));r=t.pendingProps,a=t.memoizedState,s=a.element,Ol(e,t),Ls(t,r,null,n);var d=t.memoizedState;if(r=d.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){s=ar(Error(o(423)),t),t=wu(e,t,r,n,s);break e}else if(r!==s){s=ar(Error(o(424)),t),t=wu(e,t,r,n,s);break e}else for(_t=cn(t.stateNode.containerInfo.firstChild),St=t,Ge=!0,Dt=null,n=Il(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(er(),r===s){t=en(e,t,n);break e}pt(e,t,r,n)}t=t.child}return t;case 5:return Ml(t),e===null&&ni(t),r=t.type,s=t.pendingProps,a=e!==null?e.memoizedProps:null,d=s.children,Ga(r,s)?d=null:a!==null&&Ga(r,a)&&(t.flags|=32),vu(e,t),pt(e,t,d,n),t.child;case 6:return e===null&&ni(t),null;case 13:return ku(e,t,n);case 4:return ci(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=tr(t,null,r,n):pt(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Mt(r,s),pu(e,t,r,s,n);case 7:return pt(e,t,t.pendingProps,n),t.child;case 8:return pt(e,t,t.pendingProps.children,n),t.child;case 12:return pt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,a=t.memoizedProps,d=s.value,$e(Is,r._currentValue),r._currentValue=d,a!==null)if(Lt(a.value,d)){if(a.children===s.children&&!ht.current){t=en(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var z=a.dependencies;if(z!==null){d=a.child;for(var L=z.firstContext;L!==null;){if(L.context===r){if(a.tag===1){L=Jt(-1,n&-n),L.tag=2;var Z=a.updateQueue;if(Z!==null){Z=Z.shared;var de=Z.pending;de===null?L.next=L:(L.next=de.next,de.next=L),Z.pending=L}}a.lanes|=n,L=a.alternate,L!==null&&(L.lanes|=n),oi(a.return,n,t),z.lanes|=n;break}L=L.next}}else if(a.tag===10)d=a.type===t.type?null:a.child;else if(a.tag===18){if(d=a.return,d===null)throw Error(o(341));d.lanes|=n,z=d.alternate,z!==null&&(z.lanes|=n),oi(d,n,t),d=a.sibling}else d=a.child;if(d!==null)d.return=a;else for(d=a;d!==null;){if(d===t){d=null;break}if(a=d.sibling,a!==null){a.return=d.return,d=a;break}d=d.return}a=d}pt(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,rr(t,n),s=jt(s),r=r(s),t.flags|=1,pt(e,t,r,n),t.child;case 14:return r=t.type,s=Mt(r,t.pendingProps),s=Mt(r.type,s),mu(e,t,r,s,n);case 15:return hu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Mt(r,s),Hs(e,t),t.tag=1,gt(r)?(e=!0,Cs(t)):e=!1,rr(t,n),iu(t,r,s),Si(t,r,s,n),Ei(null,t,r,!0,e,n);case 19:return Su(e,t,n);case 22:return gu(e,t,n)}throw Error(o(156,t.tag))};function Gu(e,t){return Co(e,t)}function uf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function It(e,t,n,r){return new uf(e,t,n,r)}function Gi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function cf(e){if(typeof e=="function")return Gi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===b)return 11;if(e===q)return 14}return 2}function kn(e,t){var n=e.alternate;return n===null?(n=It(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ta(e,t,n,r,s,a){var d=2;if(r=e,typeof e=="function")Gi(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case G:return Pn(n.children,s,a,t);case te:d=8,s|=8;break;case F:return e=It(12,n,t,s|2),e.elementType=F,e.lanes=a,e;case B:return e=It(13,n,t,s),e.elementType=B,e.lanes=a,e;case l:return e=It(19,n,t,s),e.elementType=l,e.lanes=a,e;case ee:return na(n,s,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case J:d=10;break e;case ye:d=9;break e;case b:d=11;break e;case q:d=14;break e;case we:d=16,r=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return t=It(d,n,t,s),t.elementType=e,t.type=r,t.lanes=a,t}function Pn(e,t,n,r){return e=It(7,e,r,t),e.lanes=n,e}function na(e,t,n,r){return e=It(22,e,r,t),e.elementType=ee,e.lanes=n,e.stateNode={isHidden:!1},e}function Zi(e,t,n){return e=It(6,e,null,t),e.lanes=n,e}function Yi(e,t,n){return t=It(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function df(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ba(0),this.expirationTimes=ba(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ba(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Qi(e,t,n,r,s,a,d,z,L){return e=new df(e,t,n,z,L),t===1?(t=1,a===!0&&(t|=8)):t=0,a=It(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ui(a),e}function ff(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Y,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Zu(e){if(!e)return fn;e=e._reactInternals;e:{if(Cn(e)!==e||e.tag!==1)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(gt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(o(171))}if(e.tag===1){var n=e.type;if(gt(n))return bl(e,n,t)}return t}function Yu(e,t,n,r,s,a,d,z,L){return e=Qi(n,r,!0,e,s,a,d,z,L),e.context=Zu(null),n=e.current,r=mt(),s=yn(n),a=Jt(r,s),a.callback=t??null,hn(n,a,s),e.current.lanes=s,yr(e,s,r),yt(e,r),e}function ra(e,t,n,r){var s=t.current,a=mt(),d=yn(s);return n=Zu(n),t.context===null?t.context=n:t.pendingContext=n,t=Jt(a,d),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=hn(s,t,d),e!==null&&(Ut(e,s,d,a),Os(e,s,d)),d}function sa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Qu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function qi(e,t){Qu(e,t),(e=e.alternate)&&Qu(e,t)}function pf(){return null}var qu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xi(e){this._internalRoot=e}aa.prototype.render=Xi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));ra(e,t,null,null)},aa.prototype.unmount=Xi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ln(function(){ra(null,e,null,null)}),t[Zt]=null}};function aa(e){this._internalRoot=e}aa.prototype.unstable_scheduleHydration=function(e){if(e){var t=Oo();e={blockedOn:null,target:e,priority:t};for(var n=0;n<on.length&&t!==0&&t<on[n].priority;n++);on.splice(n,0,e),n===0&&Mo(e)}};function Ji(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ia(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Xu(){}function mf(e,t,n,r,s){if(s){if(typeof r=="function"){var a=r;r=function(){var Z=sa(d);a.call(Z)}}var d=Yu(t,r,e,0,null,!1,!1,"",Xu);return e._reactRootContainer=d,e[Zt]=d.current,Ar(e.nodeType===8?e.parentNode:e),Ln(),d}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var z=r;r=function(){var Z=sa(L);z.call(Z)}}var L=Qi(e,0,!1,null,null,!1,!1,"",Xu);return e._reactRootContainer=L,e[Zt]=L.current,Ar(e.nodeType===8?e.parentNode:e),Ln(function(){ra(t,L,n,r)}),L}function oa(e,t,n,r,s){var a=n._reactRootContainer;if(a){var d=a;if(typeof s=="function"){var z=s;s=function(){var L=sa(d);z.call(L)}}ra(t,d,e,s)}else d=mf(n,t,e,s,r);return sa(d)}Io=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=xr(t.pendingLanes);n!==0&&(Sa(t,n|1),yt(t,qe()),(Pe&6)===0&&(lr=qe()+500,pn()))}break;case 13:Ln(function(){var r=Xt(e,1);if(r!==null){var s=mt();Ut(r,e,1,s)}}),qi(e,1)}},_a=function(e){if(e.tag===13){var t=Xt(e,134217728);if(t!==null){var n=mt();Ut(t,e,134217728,n)}qi(e,134217728)}},Ao=function(e){if(e.tag===13){var t=yn(e),n=Xt(e,t);if(n!==null){var r=mt();Ut(n,e,t,r)}qi(e,t)}},Oo=function(){return We},Lo=function(e,t){var n=We;try{return We=e,t()}finally{We=n}},mr=function(e,t,n){switch(t){case"input":if(T(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=_s(r);if(!s)throw Error(o(90));Me(r),T(r,s)}}}break;case"textarea":Se(e,n);break;case"select":t=n.value,t!=null&&oe(e,!!n.multiple,t,!1)}},yo=Hi,wo=Ln;var hf={usingClientEntryPoint:!1,Events:[Dr,Yn,_s,vo,xo,Hi]},Qr={findFiberByHostInstance:En,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gf={bundleType:Qr.bundleType,version:Qr.version,rendererPackageName:Qr.rendererPackageName,rendererConfig:Qr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:U.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=_o(e),e===null?null:e.stateNode},findFiberByHostInstance:Qr.findFiberByHostInstance||pf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var la=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!la.isDisabled&&la.supportsFiber)try{as=la.inject(gf),Wt=la}catch{}}return wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hf,wt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ji(t))throw Error(o(200));return ff(e,t,null,n)},wt.createRoot=function(e,t){if(!Ji(e))throw Error(o(299));var n=!1,r="",s=qu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Qi(e,1,!1,null,null,n,!1,r,s),e[Zt]=t.current,Ar(e.nodeType===8?e.parentNode:e),new Xi(t)},wt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=_o(t),e=e===null?null:e.stateNode,e},wt.flushSync=function(e){return Ln(e)},wt.hydrate=function(e,t,n){if(!ia(t))throw Error(o(200));return oa(null,e,t,!0,n)},wt.hydrateRoot=function(e,t,n){if(!Ji(e))throw Error(o(405));var r=n!=null&&n.hydratedSources||null,s=!1,a="",d=qu;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),t=Yu(t,null,e,1,n??null,s,!1,a,d),e[Zt]=t.current,Ar(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new aa(t)},wt.render=function(e,t,n){if(!ia(t))throw Error(o(200));return oa(null,e,t,!1,n)},wt.unmountComponentAtNode=function(e){if(!ia(e))throw Error(o(40));return e._reactRootContainer?(Ln(function(){oa(null,null,e,!1,function(){e._reactRootContainer=null,e[Zt]=null})}),!0):!1},wt.unstable_batchedUpdates=Hi,wt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ia(n))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return oa(e,t,n,!1,r)},wt.version="18.3.1-next-f1338f8080-20240426",wt}var ic;function _f(){if(ic)return no.exports;ic=1;function E(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E)}catch(W){console.error(W)}}return E(),no.exports=Sf(),no.exports}var oc;function Nf(){if(oc)return ca;oc=1;var E=_f();return ca.createRoot=E.createRoot,ca.hydrateRoot=E.hydrateRoot,ca}var Cf=Nf();const Ef=gc(Cf);var ve=fo();/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Tf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=E=>E.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),De=(E,W)=>{const o=ve.forwardRef(({color:O="currentColor",size:k=24,strokeWidth:p=2,absoluteStrokeWidth:m,className:c="",children:h,...j},I)=>ve.createElement("svg",{ref:I,...Tf,width:k,height:k,stroke:O,strokeWidth:m?Number(p)*24/Number(k):p,className:["lucide",`lucide-${jf(E)}`,c].join(" "),...j},[...W.map(([C,v])=>ve.createElement(C,v)),...Array.isArray(h)?h:[h]]));return o.displayName=`${E}`,o};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc=De("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=De("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=De("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=De("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=De("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Of=De("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=De("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf=De("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vc=De("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=De("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pa=De("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cr=De("",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=De("Feather",[["path",{d:"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z",key:"u4sw5n"}],["line",{x1:"16",x2:"2",y1:"8",y2:"22",key:"1c47m2"}],["line",{x1:"17.5",x2:"9",y1:"15",y2:"15",key:"2fj3pr"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=De("FileCode2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4",key:"702lig"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}],["path",{d:"m5 12-3 3 3 3",key:"oke12k"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=De("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",x2:"8",y1:"13",y2:"13",key:"14keom"}],["line",{x1:"16",x2:"8",y1:"17",y2:"17",key:"17nazh"}],["line",{x1:"10",x2:"8",y1:"9",y2:"9",key:"1a5vjj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=De("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=De("GraduationCap",[["path",{d:"M22 10v6M2 10l10-5 10 5-10 5z",key:"1ef52a"}],["path",{d:"M6 12v5c3 3 9 3 12 0v-5",key:"1f75yj"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=De("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=De("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=De("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=De("Microscope",[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=De("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=De("Paperclip",[["path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",key:"1u3ebp"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=De("PenTool",[["path",{d:"m12 19 7-7 3 3-7 7-3-3z",key:"rklqx2"}],["path",{d:"m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z",key:"1et58u"}],["path",{d:"m2 2 7.586 7.586",key:"etlp93"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=De("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=De("PinOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["line",{x1:"12",x2:"12",y1:"17",y2:"22",key:"1jrz49"}],["path",{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h12",key:"13x2n8"}],["path",{d:"M15 9.34V6h1a2 2 0 0 0 0-4H7.89",key:"reo3ki"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ao=De("Pin",[["line",{x1:"12",x2:"12",y1:"17",y2:"22",key:"1jrz49"}],["path",{d:"M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z",key:"13yl11"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=De("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=De("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wc=De("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=De("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kc=De("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=De("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=De("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=De("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const co=De("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=De("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function es({size:E=16,className:W}){return u.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:E,height:E,viewBox:"0 0 50 50",fill:"currentColor",className:W,"aria-hidden":"true",children:u.jsx("path",{d:"M41.883,9.38c-1.092-1.179-2.582-1.855-4.194-1.904c-1.629-0.046-3.171,0.542-4.346,1.667l-0.252,0.241 c-2.551,2.441-2.594,6.42-0.098,9.059C34.932,20.493,36,23.177,36,26c0,3.018-1.197,5.832-3.372,7.926 c-2.173,2.092-5.034,3.175-8.058,3.066c-5.611-0.213-10.35-4.951-10.566-10.618c-0.001-0.019-0.161-1.836,0.338-4.429 c1.164-6.057,5.081-11.229,10.745-14.193l6.002-3.141c0.365-0.191,0.576-0.588,0.53-0.998c-0.047-0.41-0.34-0.749-0.739-0.854 c-2.741-0.724-5.588-0.928-8.461-0.618C11.728,3.307,3.19,11.925,2.118,22.633C1.425,29.57,3.835,36.358,8.731,41.258 c4.347,4.35,10.183,6.741,16.291,6.74c0.772,0,1.551-0.038,2.329-0.115c10.785-1.071,19.416-9.673,20.523-20.451 C48.556,20.809,46.371,14.229,41.883,9.38z"})})}const io=[{id:"luca-flash",label:"Flash",tier:"flash",desc:"Fast tier â€” quick, efficient, low-latency"},{id:"luca-pro",label:"Pro",tier:"pro",desc:"Deeper reasoning for complex tasks"}],tp=500,da=2e5,ga="luca-settings",po="luca-sessions",ma="luca-active-session",mo="luca_tier",ts="luca-onboarding";function nn(){return Math.random().toString(36).slice(2,10)+Date.now().toString(36)}function ho(){try{const E=localStorage.getItem(ga);if(E){const W=JSON.parse(E);if(W&&W.backendUrl)return String(W.backendUrl).replace(/\/+$/,"")}}catch{}return"https://project-private-1.onrender.com"}const oo={theme:"dark",enterToSend:!0,showTimestamps:!0,backendUrl:"",customPrompt:"",role:"",personality:{creativity:50,formality:50,verbosity:50}};function np(){try{const E=localStorage.getItem(ga);if(E){const W=JSON.parse(E);return{...oo,...W,personality:{...oo.personality,...W.personality||{}}}}}catch{}return{...oo}}function rp(E){try{localStorage.setItem(ga,JSON.stringify(E))}catch{}}function sp(){try{const E=localStorage.getItem(mo);if(E==="flash"||E==="pro")return E}catch{}return"pro"}function ap(E){try{localStorage.setItem(mo,E)}catch{}}function uc(){try{const E=localStorage.getItem(po);if(E){const W=JSON.parse(E);if(Array.isArray(W))return W}}catch{}return[]}function ip(E){try{localStorage.setItem(po,JSON.stringify(E.slice(0,tp)))}catch{}}function op(){try{return localStorage.getItem(ma)}catch{return null}}function lp(E){try{E?localStorage.setItem(ma,E):localStorage.removeItem(ma)}catch{}}function up(){try{const E=localStorage.getItem(ts);if(E){const W=JSON.parse(E);if(W&&W.complete===!0)return W}}catch{}return null}function cp(){try{const E=localStorage.getItem(ts);if(E){const W=JSON.parse(E);if(W&&W.complete===!1)return W}}catch{}return null}function dp(){try{localStorage.removeItem(ga),localStorage.removeItem(po),localStorage.removeItem(ma),localStorage.removeItem(mo),localStorage.removeItem(ts)}catch{}}function fp(E){try{localStorage.setItem(ts,JSON.stringify({...E,complete:!1}))}catch{}}function pp(E){try{localStorage.setItem(ts,JSON.stringify({...E,complete:!0}))}catch{}}function mp(E){const W=new Date,o=new Date(W.getFullYear(),W.getMonth(),W.getDate()).getTime(),O=o-864e5,k=o-6*864e5;return E>=o?"Today":E>=O?"Yesterday":E>=k?"Previous 7 days":"Older"}function hp(){const E=new Date().getHours();return E<5?"Good night":E<12?"Good morning":E<18?"Good afternoon":"Good evening"}function bc(E){const W=new Date(E),o=new Date,O=W.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"});return W.toDateString()===o.toDateString()?O:`${W.toLocaleDateString(void 0,{month:"short",day:"numeric"})} Â· ${O}`}function gp(E){const W=E.replace(/\s+/g," ").trim();return W.length<=44?W||"New chat":W.slice(0,44).replace(/\s+\S*$/,"")+"â€¦"}function vp(E,W){return new Promise(o=>{const O=new Image;O.onload=()=>{const k=Math.min(1,W/Math.max(O.width,O.height)),p=Math.max(1,Math.round(O.width*k)),m=Math.max(1,Math.round(O.height*k)),c=document.createElement("canvas");c.width=p,c.height=m;const h=c.getContext("2d");if(!h)return o(E);h.drawImage(O,0,0,p,m);try{o(c.toDataURL("image/jpeg",.88))}catch{o(E)}},O.onerror=()=>o(E),O.src=E})}async function Jr(E){try{return await navigator.clipboard.writeText(E),!0}catch{try{const W=document.createElement("textarea");return W.value=E,W.style.position="fixed",W.style.opacity="0",document.body.appendChild(W),W.select(),document.execCommand("copy"),W.remove(),!0}catch{return!1}}}const cc=["Pinned","Today","Yesterday","Previous 7 days","Older"];function xp({sessions:E,activeId:W,generatingId:o,search:O,onSearch:k,onSelect:p,onNew:m,onRename:c,onTogglePin:h,onDelete:j,onOpenSettings:I,mobileOpen:v,onCloseMobile:g}){const[_,f]=ve.useState(null),[y,x]=ve.useState(null),[S,A]=ve.useState(""),[U,D]=ve.useState(null),Y=ve.useRef(null),G=ve.useRef(null);ve.useEffect(()=>{if(!_)return;const B=q=>{Y.current&&!Y.current.contains(q.target)&&f(null)},l=q=>{q.key==="Escape"&&f(null)};return document.addEventListener("mousedown",B),document.addEventListener("keydown",l),()=>{document.removeEventListener("mousedown",B),document.removeEventListener("keydown",l)}},[_]),ve.useEffect(()=>{var B,l;y&&((B=G.current)==null||B.focus(),(l=G.current)==null||l.select())},[y]);const te=O.trim().toLowerCase(),F=te?E.filter(B=>B.title.toLowerCase().includes(te)||B.messages.some(l=>l.content&&l.content.toLowerCase().includes(te))):E,J={};for(const B of cc)J[B]=[];for(const B of[...F].sort((l,q)=>(q.updatedAt||0)-(l.updatedAt||0))){const l=B.pinned&&!te?"Pinned":mp(B.updatedAt||B.createdAt);J[l].push(B)}const ye=()=>{if(y){const B=S.trim();B&&c(y,B)}x(null)},b="?";return u.jsxs(u.Fragment,{children:[v&&u.jsx("div",{className:"fixed inset-0 z-30 bg-black/55 md:hidden",onClick:g,"aria-hidden":"true"}),u.jsxs("aside",{className:`fixed inset-y-0 left-0 z-40 flex w-[272px] flex-col border-r border-line bg-canvas transition-transform duration-200 ease-out md:static md:z-auto md:translate-x-0 ${v?"translate-x-0":"-translate-x-full"}`,children:[u.jsxs("div",{className:"flex items-center justify-between px-3 pb-2.5 pt-3.5",children:[u.jsxs("div",{className:"flex items-center gap-2.5 pl-1",children:[u.jsx("span",{className:"grid place-items-center text-accent",children:u.jsx(es,{size:22})}),u.jsx("span",{className:"font-display text-[17px] font-semibold tracking-tight",children:"Luca"})]}),u.jsx("button",{className:"grid h-8 w-8 place-items-center rounded-lg text-mute transition-colors hover:bg-surface1 hover:text-ink md:hidden",onClick:g,"aria-label":"Close sidebar",children:u.jsx(Un,{size:17})})]}),u.jsxs("div",{className:"grid gap-2 px-3",children:[u.jsxs("button",{onClick:()=>{m(),g()},className:"flex w-full items-center gap-2.5 rounded-xl border border-transparent bg-surface2 px-3 py-[9px] text-left text-sm font-medium transition-all hover:border-line hover:bg-[#262626] active:scale-[0.985]",children:[u.jsx(Yf,{size:16,className:"text-mute"}),"New chat"]}),u.jsxs("div",{className:"relative flex items-center",children:[u.jsx(qf,{size:15,className:"pointer-events-none absolute left-3 text-mute"}),u.jsx("input",{value:O,onChange:B=>k(B.target.value),placeholder:"Search chats",className:"w-full rounded-xl border border-transparent bg-surface1 py-2.5 pl-9 pr-8 text-[16px] text-ink outline-none transition-colors placeholder:text-mute focus:border-linestrong focus:bg-surface2 md:py-2 md:text-[13.5px]"}),O&&u.jsx("button",{onClick:()=>k(""),className:"absolute right-1.5 grid h-[22px] w-[22px] place-items-center rounded-md text-mute hover:bg-surface3 hover:text-ink","aria-label":"Clear search",children:u.jsx(Un,{size:13})})]})]}),u.jsxs("nav",{className:"min-h-0 flex-1 overflow-y-auto px-3 pb-2 pt-3.5","aria-label":"Recent chats",children:[u.jsx("div",{className:"px-2 pb-1.5 text-[11px] font-semibold uppercase tracking-[0.09em] text-mute",children:"Recents"}),E.length===0&&u.jsx("div",{className:"px-3 py-6 text-center text-[13.5px] leading-relaxed text-mute",children:"No chats yet â€” start one and it'll show up here."}),E.length>0&&F.length===0&&u.jsxs("div",{className:"px-3 py-6 text-center text-[13.5px] text-mute",children:["No chats match â€œ",O.trim(),"â€"]}),cc.map(B=>J[B].length?u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center gap-1.5 px-2 pb-1 pt-3 text-xs font-semibold text-mute",children:[B==="Pinned"&&u.jsx(ao,{size:12}),B]}),J[B].map(l=>{const q=o!==null&&l.messages.some(we=>we.streaming);return u.jsxs("div",{className:"relative",children:[y===l.id?u.jsxs("div",{className:"flex items-center gap-1 rounded-lg bg-surface2 px-1.5 py-1",children:[u.jsx("input",{ref:G,value:S,onChange:we=>A(we.target.value),onKeyDown:we=>{we.key==="Enter"&&(we.preventDefault(),ye()),we.key==="Escape"&&x(null)},onBlur:ye,"aria-label":"Rename chat",className:"min-w-0 flex-1 rounded-md border border-linestrong bg-surface3 px-2 py-1 text-sm text-ink outline-none"}),u.jsx("button",{className:"grid h-7 w-7 place-items-center rounded-md text-ok hover:bg-surface3",onMouseDown:we=>{we.preventDefault(),ye()},"aria-label":"Save name",children:u.jsx(Bt,{size:15})})]}):u.jsxs("button",{onClick:()=>{p(l.id),g()},className:`group flex w-full items-center gap-2 rounded-lg py-2 pl-2.5 pr-9 text-left text-sm transition-colors ${l.id===W?"bg-surface2":"hover:bg-surface1"}`,children:[u.jsx("span",{className:"min-w-0 flex-1 truncate",children:l.title}),l.pinned&&u.jsx(ao,{size:12,className:"shrink-0 text-mute"}),q&&u.jsx("span",{className:"pulse-dot shrink-0","aria-hidden":"true"}),u.jsx("span",{role:"button",tabIndex:0,onClick:we=>{we.stopPropagation(),f(_===l.id?null:l.id),D(null)},onKeyDown:we=>{(we.key==="Enter"||we.key===" ")&&(we.preventDefault(),we.stopPropagation(),f(_===l.id?null:l.id))},"aria-label":"Chat options",className:`absolute right-1 grid h-[26px] w-[26px] place-items-center rounded-md text-mute transition-all hover:bg-surface3 hover:text-ink ${_===l.id?"bg-surface3 text-ink opacity-100":"opacity-0 group-hover:opacity-100"}`,children:u.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"currentColor",stroke:"none",children:[u.jsx("circle",{cx:"5",cy:"12",r:"1.6"}),u.jsx("circle",{cx:"12",cy:"12",r:"1.6"}),u.jsx("circle",{cx:"19",cy:"12",r:"1.6"})]})})]}),_===l.id&&u.jsx("div",{ref:Y,className:"anim-pop absolute right-0 top-9 z-50 w-[178px] rounded-xl border border-linestrong bg-surface2 p-1 shadow-[0_14px_38px_rgba(0,0,0,0.55)]",role:"menu",children:U===l.id?u.jsxs("div",{className:"p-1.5",children:[u.jsx("div",{className:"px-1 pb-2 text-[12.5px] text-mute",children:"Delete this chat?"}),u.jsxs("div",{className:"flex gap-1.5",children:[u.jsx("button",{className:"flex-1 rounded-md bg-danger/15 px-2 py-1.5 text-xs font-semibold text-danger hover:bg-danger/25",onClick:()=>{j(l.id),f(null),D(null)},children:"Delete"}),u.jsx("button",{className:"flex-1 rounded-md bg-surface3 px-2 py-1.5 text-xs text-ink hover:bg-surface4",onClick:()=>D(null),children:"Keep"})]})]}):u.jsxs(u.Fragment,{children:[u.jsxs("button",{className:"flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-[13.5px] hover:bg-surface3",role:"menuitem",onClick:()=>{h(l.id),f(null)},children:[l.pinned?u.jsx(Zf,{size:15,className:"text-mute"}):u.jsx(ao,{size:15,className:"text-mute"}),l.pinned?"Unpin":"Pin"]}),u.jsxs("button",{className:"flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-[13.5px] hover:bg-surface3",role:"menuitem",onClick:()=>{var _t=l.title.replace(/[^\w-]+/g,"_").slice(0,40);var _c=l.messages.map(m=>(m.role==="user"?"**You:** ":"**Luca:** ")+(typeof m.content==="string"?m.content:"")).join("\n\n");var _b=new Blob([_c],{type:"text/markdown"});var _u=URL.createObjectURL(_b);var _a=document.createElement("a");_a.href=_u;_a.download=_t+".md";_a.click();setTimeout(()=>URL.revokeObjectURL(_u),2000);f(null)},children:[u.jsx(Yf,{size:15,className:"text-mute"}),"Export chat"]}),u.jsxs("button",{className:"flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-[13.5px] hover:bg-surface3",role:"menuitem",onClick:()=>{x(l.id),A(l.title),f(null)},children:[u.jsx(yc,{size:15,className:"text-mute"}),"Rename"]}),u.jsxs("button",{className:"flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-[13.5px] text-danger hover:bg-danger/10",role:"menuitem",onClick:()=>D(l.id),children:[u.jsx(co,{size:15}),"Delete"]})]})})]},l.id)})]},B):null)]}),u.jsxs("div",{className:"flex items-center gap-2.5 border-t border-line px-3 py-2.5 pb-[max(10px,env(safe-area-inset-bottom))]",children:[u.jsx("button",{onClick:I,className:"grid h-9 w-9 place-items-center rounded-lg text-mute transition-colors hover:bg-surface1 hover:text-ink mx-auto","aria-label":"Open settings",children:u.jsx(kc,{size:18})})]})]})]})}function yp(E){return E.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Xr(E){let W=yp(E);return W=W.replace(/`([^`]+)`/g,'<code class="font-mono text-[13px] px-1.5 py-px rounded-md bg-surface3 border border-linestrong/70 text-ink whitespace-nowrap">$1</code>'),W=W.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),W=W.replace(/(^|[^*])\*([^*\n]+)\*/g,"$1<em>$2</em>"),W=W.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,'<a href="$2" target="_blank" rel="noreferrer" class="text-accent hover:underline underline-offset-2">$1</a>'),W}function wp({lang:E,code:W}){const[o,O]=ve.useState(!1),k=()=>{const p=new Blob([W],{type:"text/plain;charset=utf-8"}),m=URL.createObjectURL(p),c=document.createElement("a");c.href=m,c.download="luca-snippet."+(E||"txt"),c.click(),setTimeout(()=>URL.revokeObjectURL(m),1e3)};return u.jsxs("div",{className:"my-3 overflow-hidden rounded-xl border border-line bg-[#151515]",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-line bg-surface2/70 px-3.5 py-1.5",children:[u.jsx("span",{className:"font-mono text-[11px] tracking-wide text-mute",children:E||"text"}),u.jsxs("div",{className:"flex gap-0.5",children:[u.jsxs("button",{className:"flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-mute transition-colors hover:bg-surface3 hover:text-ink",onClick:async()=>{await Jr(W)&&(O(!0),setTimeout(()=>O(!1),1400))},"aria-label":"Copy code",children:[o?u.jsx(Bt,{size:13,className:"text-ok"}):u.jsx("span",{className:"inline-flex",children:u.jsx(kp,{})}),o?"Copied":"Copy"]}),u.jsx("button",{onClick:k,className:"flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-mute transition-colors hover:bg-surface3 hover:text-ink","aria-label":"Download code",children:"Download"})]})]}),u.jsx("pre",{className:"overflow-x-auto px-4 py-3 font-mono text-[13px] leading-relaxed text-[#e2e2e2]",children:u.jsx("code",{children:W})})]})}function kp(){return u.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"9",y:"9",width:"12",height:"12",rx:"2"}),u.jsx("path",{d:"M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"})]})}function bp(E){const W=[],o=E.split("```");for(let O=0;O<o.length;O++){const k=o[O];if(O%2===1){const p=k.indexOf(`
`),m=p===-1?"":k.slice(0,p).trim(),c=p===-1?k:k.slice(p+1);W.push({type:"code",lang:m,content:c.replace(/\n$/,"")})}else k.trim()&&W.push({type:"html",content:Sp(k.trim())})}return W}function Sp(E){const W=E.split(`
`),o=[];let O=[],k=[],p=[],m=[];const c=()=>{O.length&&(o.push('<ul class="grid gap-1.5 pl-5 list-disc mb-3 marker:text-mute">'+O.map(v=>`<li>${Xr(v)}</li>`).join("")+"</ul>"),O=[])},h=()=>{k.length&&(o.push('<ol class="grid gap-1.5 pl-5 list-decimal mb-3 marker:text-mute">'+k.map(v=>`<li>${Xr(v)}</li>`).join("")+"</ol>"),k=[])},j=()=>{p.length&&(o.push('<blockquote class="border-l-2 border-linestrong pl-4 my-3 text-[15px] text-ink/90">'+p.map(v=>Xr(v)).join("<br/>")+"</blockquote>"),p=[])},I=()=>{m.length&&(o.push('<p class="mb-3 last:mb-0">'+m.map(v=>Xr(v)).join("<br/>")+"</p>"),m=[])},C=()=>{c(),h(),j(),I()};for(const v of W){const _=v.trimEnd().trim();if(/^```/.test(_))continue;if(!_){C();continue}if(/^---/.test(_)&&_.replace(/-/g,'').length===0){C();o.push('<hr class="border-t border-line my-4"/>');continue}if(_.startsWith('|')){if(m.length||O.length||k.length||p.length){C()}var _cells=_.split('|').slice(1,-1).map(function(x){return x.trim()});var _isSep=_cells.every(function(x){return /^[-:\s]+$/.test(x)});if(_isSep){continue}var _last=o.length-1;if(_last>=0&&o[_last].indexOf&&o[_last].indexOf('<table')>=0){var _tr='<tr style="border-bottom:1px solid var(--color-line)">'+_cells.map(function(x){return '<td style="padding:6px 12px">'+Xr(x)+'</td>'}).join('')+'</tr>';o[_last]=o[_last].replace('</table>','')+_tr+'</table></div>'}else{o.push('<div class="overflow-x-auto my-3 rounded-xl border border-line"><table class="w-full text-[13px] border-collapse"><tbody></table></div>');var _tr2='<tr style="border-bottom:1px solid var(--color-line)">'+_cells.map(function(x){return '<td style="padding:6px 12px;font-weight:600">'+Xr(x)+'</td>'}).join('')+'</tr>';o[o.length-1]=o[o.length-1].replace('</table>','')+_tr2+'</table></div>'}continue}
var _imgMatch=_.match(/^!\[([^\]]*)\]\((https?:\/\/[^\s)]+)\)/);
if(_imgMatch){C();o.push('<div class="my-3"><img src="'+_imgMatch[2]+'" alt="'+_imgMatch[1]+'" class="rounded-xl border border-line max-w-full" loading="lazy" /></div>');continue}

var _urlMatch=_.match(/^(https?:\/\/[^\s]+\.(?:png|jpg|jpeg|gif|webp|bmp|svg))(?:\s|$)/i);
if(_urlMatch){C();o.push('<div class="my-3"><img src="'+_urlMatch[1]+'" alt="image" class="rounded-xl border border-line max-w-full" loading="lazy" /></div>');continue}
const f=_.match(/^(#{1,3})\s+(.*)/);if(f){C();const S=f[1].length,A=S===1?"font-display font-semibold text-xl mt-4 mb-2":S===2?"font-display font-semibold text-lg mt-4 mb-2":"font-semibold text-[15px] mt-3 mb-1.5";o.push(`<div class="${A}">${Xr(f[2])}</div>`);continue}const y=_.match(/^[-*]\s+(.*)/);if(y){h(),j(),I(),O.push(y[1]);continue}const x=_.match(/^\d+\.\s+(.*)/);if(x){c(),j(),I(),k.push(x[1]);continue}if(_.startsWith("> ")){c(),h(),I(),p.push(_.slice(2));continue}c(),h(),j(),m.push(_)}return C(),o.join("")}function _p({text:E}){const W=bp(E);return u.jsx("div",{className:"text-[16px] leading-[1.68] md:text-[15px]",children:W.map((o,O)=>o.type==="code"?u.jsx(wp,{lang:o.lang||"",code:o.content},O):u.jsx("div",{dangerouslySetInnerHTML:{__html:o.content}},O))})}const Np=["Explain how mixture-of-experts routing works","Write a debounced search hook in React","Draft a friendly follow-up email to a client","Plan a focused 3-day trip to Kyoto","Debug this SQL join that returns duplicates","Compare Luca Flash vs Pro for my use case","Brainstorm ten names for a coffee app","Summarize the trade-offs of server components","What is the latest version of Node.js?","Who won the 2026 World Cup?","Help me debug a React useEffect infinite loop","Write a Python script to rename files in bulk","Explain CAP theorem in simple terms","Design a REST API for a todo app","What are quantum gates and how do they work?","Write a haiku about the ocean","How do I optimize my website for Core Web Vitals?","Explain the difference between SQL and NoSQL","Create a workout plan for beginners","What is the current inflation rate in the US?"];function Cp(E){return ve.useMemo(()=>{const W=[...Np];for(let o=W.length-1;o>0;o--){const O=Math.floor(Math.random()*(o+1));[W[o],W[O]]=[W[O],W[o]]}return W.slice(0,E)},[E])}function Ep({msg:E}){const[W,o]=ve.useState(!!E.streaming);ve.useEffect(()=>{E.streaming&&o(!0)},[E.streaming]);ve.useEffect(()=>{if(!E.streaming&&W){var _t=setTimeout(function(){o(!1)},800);return function(){clearTimeout(_t)}}},[E.streaming]);const O=E.thinkingMs?Math.max(1,Math.round(E.thinkingMs/1e3)):0,k=E.streaming&&!E.content?"Thinking":`Thought for ${O}s`;return u.jsxs("div",{className:"mb-3",children:[u.jsxs("button",{onClick:()=>o(p=>!p),"aria-expanded":W,className:"inline-flex items-center gap-1.5 rounded-md py-0.5 text-[13.5px] font-medium text-accent transition-colors hover:text-accent2",children:[u.jsx(vc,{size:13,className:`transition-transform duration-200 ${W?"rotate-90":""}`}),E.streaming&&!E.content?u.jsxs("span",{className:"flex items-center gap-1.5",children:[k,u.jsxs("span",{className:"flex items-center gap-[3px]",children:[u.jsx("span",{className:"typing-dot"}),u.jsx("span",{className:"typing-dot"}),u.jsx("span",{className:"typing-dot"})]})]}):k]}),W&&E.reasoning&&u.jsx("div",{className:"anim-fade-in mt-1.5 whitespace-pre-wrap border-l-2 border-accent/30 pl-3.5 text-[13.5px] leading-relaxed text-mute",children:E.reasoning})]})}function Tp({round:E}){const[W,o]=ve.useState(!1),O=E.name==="search_images"?"Searched images":E.name==="read_file"?"Read a file":"Searched the web";return u.jsxs("div",{className:"mb-3.5 rounded-xl border border-line bg-surface1/60 px-3.5 py-2.5",children:[u.jsxs("div",{className:"flex items-center gap-2 text-[13.5px] font-medium",children:[u.jsx(Uf,{size:14,className:"text-accent"}),O,E.query&&u.jsxs("span",{className:"truncate font-normal text-mute",children:["Â· â€œ",E.query,"â€"]}),E.status==="done"&&E.ms!==void 0&&u.jsxs("span",{className:"shrink-0 font-normal text-mute",children:["Â· ",(E.ms/1e3).toFixed(1),"s"]}),E.status==="running"?u.jsxs("span",{className:"ml-1 flex items-center gap-[3px]",children:[u.jsx("span",{className:"typing-dot"}),u.jsx("span",{className:"typing-dot"}),u.jsx("span",{className:"typing-dot"})]}):E.sources.length>0&&u.jsx("button",{onClick:()=>o(k=>!k),className:"ml-auto grid h-6 w-6 place-items-center rounded-md text-mute hover:bg-surface3 hover:text-ink","aria-label":"Toggle sources",children:u.jsx(vc,{size:14,className:`transition-transform duration-150 ${W?"rotate-90":""}`})})]}),W&&E.sources.length>0&&u.jsx("div",{className:"anim-fade-in mt-2.5 flex flex-wrap gap-2",children:E.sources.map((k,p)=>u.jsxs("a",{href:k.url,target:"_blank",rel:"noreferrer",className:"flex items-center gap-2 rounded-full border border-line bg-surface2 py-1 pl-1.5 pr-3 text-[12.5px] transition-colors hover:border-linestrong hover:bg-[#262626]",children:[u.jsx("span",{className:"grid h-[19px] w-[19px] place-items-center rounded-[5px] bg-surface4 text-[10px] font-bold text-mute",children:k.host.charAt(0).toUpperCase()}),k.host]},p))})]})}function jp({msg:E,session:W,settings:o,onRegenerate:O,onToast:k}){var j,I;const[p,m]=ve.useState(!1),c=!!(E.reasoning||E.streaming&&!E.content),h=((j=[...W.messages].reverse().find(C=>C.role==="assistant"))==null?void 0:j.uid)===E.uid;return u.jsxs("div",{className:"anim-msg group flex gap-3.5",children:[u.jsx("span",{className:"mt-0.5 grid h-8 w-8 shrink-0 place-items-center text-accent",children:u.jsx(es,{size:16})}),u.jsxs("div",{className:"min-w-0 flex-1",children:[c&&u.jsx(Ep,{msg:E}),(I=E.toolRounds)==null?void 0:I.map(C=>u.jsx(Tp,{round:C},C.id)),E.content?u.jsxs("div",{className:"min-w-0",children:[u.jsx(_p,{text:E.content}),E.streaming&&u.jsx("span",{className:"stream-cursor","aria-hidden":"true"})]}):!c&&E.streaming&&u.jsxs("span",{className:"flex items-center gap-[4px] py-1",children:[u.jsx("span",{className:"typing-dot"}),u.jsx("span",{className:"typing-dot"}),u.jsx("span",{className:"typing-dot"})]}),!E.streaming&&!E.content&&!E.error&&!c&&u.jsx("div",{className:"rounded-lg border border-line bg-surface1 px-3 py-2 text-[13px] text-mute",children:"No response generated. Try regenerating."}),E.error&&u.jsxs("div",{className:"mt-2.5 flex items-start gap-2 rounded-lg border border-danger/30 bg-danger/10 px-3 py-2 text-[13px] text-danger",children:[u.jsx(lc,{size:15,className:"mt-0.5 shrink-0"}),u.jsx("span",{children:E.error})]}),E.interrupted&&!E.streaming&&u.jsxs("div",{className:"mt-2.5 flex items-center gap-1.5 text-xs text-warn",children:[u.jsx(lc,{size:12})," Generation was stopped early"]}),!E.streaming&&(E.content||E.error)&&u.jsxs("div",{className:"mt-2 flex min-h-[26px] items-center gap-2",children:[o.showTimestamps&&u.jsx("span",{className:"text-[11.5px] text-mute",children:bc(E.ts)}),E.tier&&u.jsxs("span",{className:"rounded-full border border-line bg-surface1 px-2 py-px text-[11px] font-semibold tracking-wide text-mute",children:["Luca ",E.tier==="flash"?"Flash":"Pro"]}),u.jsxs("div",{className:"ml-auto flex gap-0.5 opacity-0 transition-opacity duration-150 focus-within:opacity-100 group-hover:opacity-100",children:[u.jsx("button",{onClick:async()=>{await Jr(E.content)&&(m(!0),k("Copied to clipboard"),setTimeout(()=>m(!1),1400))},className:"grid h-[27px] w-[27px] place-items-center rounded-md text-mute transition-colors hover:bg-surface2 hover:text-ink","aria-label":"Copy message",children:p?u.jsx(Bt,{size:15,className:"text-ok"}):u.jsx(pa,{size:15})}),!E.error&&!E.streaming&&u.jsx("button",{onClick:()=>O(W.id,E.uid),className:"grid h-[27px] w-[27px] place-items-center rounded-md text-mute transition-colors hover:bg-surface2 hover:text-ink","aria-label":"Regenerate response",children:u.jsx(wc,{size:14})}),u.jsx("button",{onClick:function(){var _e=new CustomEvent("luca-delete-message",{detail:{sessionId:W.id,msgUid:E.uid}});window.dispatchEvent(_e)},className:"grid h-[27px] w-[27px] place-items-center rounded-md text-mute transition-colors hover:bg-danger/10 hover:text-danger","aria-label":"Delete message",children:u.jsx(co,{size:14})})]})]})]})]})}function zp({msg:E,session:W,settings:o,onEditResend:O,onToast:k,streamingSomewhere:p}){const[m,c]=ve.useState(!1),[h,j]=ve.useState(E.content),[I,C]=ve.useState(!1);return u.jsx("div",{className:"anim-msg group flex justify-end",children:u.jsx("div",{className:"max-w-[86%] sm:max-w-[72%]",children:m?u.jsxs("div",{className:"rounded-2xl border border-accent/50 bg-surface2 p-2 shadow-[0_0_0_4px_color-mix(in_srgb,var(--color-accent)_9%,transparent)]",children:[u.jsx("textarea",{value:h,onChange:v=>j(v.target.value),rows:Math.min(6,Math.max(2,h.split(`
`).length)),autoFocus:!0,onKeyDown:v=>{v.key==="Enter"&&!v.shiftKey&&(v.preventDefault(),h.trim()&&(O(W.id,E.uid,h.trim()),c(!1))),v.key==="Escape"&&c(!1)},className:"block w-full resize-none rounded-lg bg-transparent px-2 py-1.5 text-[16px] leading-relaxed text-ink outline-none md:text-[15px]"}),u.jsxs("div",{className:"flex justify-end gap-1.5 px-1 pb-0.5",children:[u.jsxs("button",{onClick:()=>c(!1),className:"flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-mute hover:bg-surface3 hover:text-ink",children:[u.jsx(Un,{size:13})," Cancel"]}),u.jsxs("button",{onClick:()=>{h.trim()&&(O(W.id,E.uid,h.trim()),c(!1))},disabled:!h.trim()||p,className:"flex items-center gap-1.5 rounded-lg bg-ink px-3 py-1.5 text-xs font-semibold text-canvas transition-opacity hover:bg-ink/85 disabled:opacity-40",children:[u.jsx(Bt,{size:13})," Save & send"]})]})]}):u.jsxs(u.Fragment,{children:[E.attachments&&E.attachments.length>0&&u.jsx("div",{className:"mb-1.5 flex flex-wrap justify-end gap-2",children:E.attachments.map(v=>v.type.startsWith("image/")?u.jsx("img",{src:v.dataUrl,alt:v.name,className:"h-20 max-w-[180px] rounded-xl border border-line object-cover"},v.id):u.jsxs("span",{className:"flex items-center gap-1.5 rounded-lg border border-line bg-surface2 px-2.5 py-1.5 text-xs text-mute",children:[u.jsx(xc,{size:13})," ",v.name]},v.id))}),u.jsx("div",{className:"whitespace-pre-wrap rounded-[18px] rounded-br-md border border-line bg-surface2 px-4 py-3 text-[16px] leading-relaxed transition-colors hover:border-linestrong md:py-2.5 md:text-[15px]",children:E.content}),u.jsxs("div",{className:"mt-1.5 flex items-center justify-end gap-2",children:[o.showTimestamps&&u.jsx("span",{className:"text-[11.5px] text-mute opacity-0 transition-opacity group-hover:opacity-100",children:bc(E.ts)}),u.jsxs("div",{className:"flex gap-0.5 transition-opacity duration-150",children:[u.jsx("button",{onClick:async()=>{await Jr(E.content)&&(C(!0),k("Copied to clipboard"),setTimeout(()=>C(!1),1400))},className:"grid h-[27px] w-[27px] place-items-center rounded-md text-mute transition-colors hover:bg-surface2 hover:text-ink","aria-label":"Copy message",children:I?u.jsx(Bt,{size:15,className:"text-ok"}):u.jsx(pa,{size:15})}),u.jsx("button",{onClick:()=>{j(E.content),c(!0)},className:"grid h-[27px] w-[27px] place-items-center rounded-md text-mute transition-colors hover:bg-surface2 hover:text-ink","aria-label":"Edit message",children:u.jsx(yc,{size:14})}),u.jsx("button",{onClick:function(){var _e=new CustomEvent("luca-delete-message",{detail:{sessionId:W.id,msgUid:E.uid}});window.dispatchEvent(_e)},className:"grid h-[27px] w-[27px] place-items-center rounded-md text-mute transition-colors hover:bg-danger/10 hover:text-danger","aria-label":"Delete message",children:u.jsx(co,{size:14})})]})]})]})})})}function Rp({session:E,profile:W,settings:o,onSuggestion:O,onRegenerate:k,onEditResend:p,onToast:m}){const c=ve.useRef(null),[h,j]=ve.useState(!1),I=ve.useRef(!0),C=Cp(4),v=(E==null?void 0:E.messages)||[],g=v.some(S=>S.streaming),_=v.length===0;ve.useEffect(()=>{var S=c.current;if(!S)return;requestAnimationFrame(()=>{if(!S)return;if(_){S.scrollTop=0}else if(I.current){S.scrollTop=S.scrollHeight}})},[v,E==null?void 0:E.id,_]);const f=()=>{const S=c.current;if(!S)return;const A=S.scrollHeight-S.scrollTop-S.clientHeight<130;I.current=A,j(!A)},y=hp(),x=W!=null&&W.name&&W.name!=="User"?W.name.split(" ")[0]:null;return u.jsxs("div",{className:"relative z-10 min-h-0 flex-1",children:[u.jsx("div",{ref:c,onScroll:f,className:"h-full overflow-y-auto",children:_?u.jsxs("div",{className:"mx-auto max-w-[780px] px-5 pt-[10vh]",children:[u.jsxs("h2",{className:"anim-fade-up font-display text-[clamp(24px,3.4vw,32px)] font-semibold leading-tight tracking-tight",children:[y,x?`, ${x}`:""]}),u.jsx("p",{className:"anim-fade-up mt-2 text-[15px] text-mute",style:{"--d":"70ms"},children:"Where should we start?"}),u.jsx("div",{className:"mt-7 grid gap-2.5 sm:grid-cols-2",children:C.map((S,A)=>u.jsx("button",{onClick:()=>O(S),className:"anim-fade-up rounded-xl border border-line bg-surface1 px-4 py-3 text-left text-[13.5px] leading-snug transition-all duration-200 hover:-translate-y-0.5 hover:border-linestrong hover:bg-surface2 active:scale-[0.98]",style:{"--d":`${140+A*60}ms`},children:S},S))})]}):u.jsx("div",{className:"mx-auto flex max-w-[780px] flex-col gap-6 px-4 pb-4 pt-6 sm:px-5",children:v.map(S=>S.role==="user"?u.jsx(zp,{msg:S,session:E,settings:o,onEditResend:p,onToast:m,streamingSomewhere:g},S.uid):u.jsx(jp,{msg:S,session:E,settings:o,onRegenerate:k,onToast:m},S.uid))})}),h&&!_&&u.jsx("button",{onClick:()=>{const S=c.current;S&&(I.current=!0,S.scrollTo({top:S.scrollHeight,behavior:"smooth"}))},"aria-label":"Scroll to bottom",className:"anim-pop absolute bottom-4 right-5 z-10 grid h-8 w-8 place-items-center rounded-full border border-linestrong bg-surface2 text-mute shadow-[0_6px_18px_rgba(0,0,0,0.45)] transition-all hover:-translate-y-0.5 hover:text-ink",children:u.jsx(zf,{size:16})})]})}function Ip({streaming:E,onSend:W,onStop:o,tier:O,onTierChange:k,settings:p,onToast:m}){const[c,h]=ve.useState(""),[j,I]=ve.useState([]),[C,v]=ve.useState(!1),[g,_]=ve.useState(!1),[f,y]=ve.useState(!1),x=ve.useRef(null),S=ve.useRef(null),A=ve.useRef(null),U=ve.useRef(null);ve.useEffect(()=>{if(!g)return;const b=l=>{A.current&&!A.current.contains(l.target)&&_(!1)},B=l=>l.key==="Escape"&&_(!1);return document.addEventListener("mousedown",b),document.addEventListener("keydown",B),()=>{document.removeEventListener("mousedown",b),document.removeEventListener("keydown",B)}},[g]);const D=()=>{const b=x.current;b&&(b.style.height="auto",b.style.height=Math.min(b.scrollHeight,200)+"px")};ve.useEffect(D,[c]);const Y=(c.trim().length>0||j.length>0)&&!E,G=()=>{if(Y){if(c.length>da){m("Message is over the "+da.toLocaleString()+" character limit");return}W(c.trim(),j),h(""),I([]),requestAnimationFrame(()=>{var b;return(b=x.current)==null?void 0:b.focus()})}},te=b=>{const B=Array.from(b);for(const l of B){if(l.size>4*1024*1024){m(`â€œ${l.name}â€ is over 4 MB â€” skipped`);continue}const q=new FileReader;q.onload=()=>{I(we=>[...we,{id:nn(),name:l.name,type:l.type,size:l.size,dataUrl:String(q.result)}])},q.readAsDataURL(l)}},F=()=>{var l;const b=window.webkitSpeechRecognition;if(!b){m("Voice input isn't supported in this browser");return}if(f){(l=U.current)==null||l.stop(),y(!1);return}const B=new b;B.lang="en-US",B.continuous=!1,B.interimResults=!1,B.onresult=q=>{var ee,re;const we=((re=(ee=q.results[0])==null?void 0:ee[0])==null?void 0:re.transcript)||"";we&&h(Q=>(Q?Q+" ":"")+we)},B.onend=()=>y(!1),B.onerror=()=>{y(!1),m("Couldn't hear anything â€” try again")},B.start(),U.current=B,y(!0)},J=io.find(b=>b.tier===O)||io[1],ye=c.length>da-2e4;return u.jsxs("div",{className:"relative z-10 mx-auto w-full max-w-[820px] px-3 pb-[max(14px,env(safe-area-inset-bottom))] pt-1.5 sm:px-5",onDragOver:b=>{b.preventDefault(),v(!0)},onDragLeave:()=>v(!1),onDrop:b=>{b.preventDefault(),v(!1),b.dataTransfer.files.length&&te(b.dataTransfer.files)},children:[u.jsxs("div",{className:`rounded-3xl border bg-surface4 p-1.5 pb-2 transition-colors duration-200 ${C?"border-accent":"border-line"}`,children:[j.length>0&&u.jsx("div",{className:"flex flex-wrap gap-2 px-2.5 pb-2 pt-1.5",children:j.map(b=>u.jsxs("div",{className:"anim-pop flex items-center gap-2 rounded-lg border border-linestrong bg-surface3 py-1.5 pl-1.5 pr-2 text-[12.5px]",children:[b.type.startsWith("image/")?u.jsx("img",{src:b.dataUrl,alt:"",className:"h-7 w-7 rounded-md object-cover"}):u.jsx("span",{className:"grid h-7 w-7 place-items-center rounded-md bg-surface4 text-mute",children:b.type.startsWith("image")?u.jsx(xc,{size:14}):u.jsx(Ff,{size:14})}),u.jsx("span",{className:"max-w-[140px] truncate",children:b.name}),u.jsx("button",{onClick:()=>I(B=>B.filter(l=>l.id!==b.id)),className:"grid h-5 w-5 place-items-center rounded text-mute hover:bg-surface4 hover:text-ink","aria-label":`Remove ${b.name}`,children:u.jsx(Un,{size:12})})]},b.id))}),u.jsx("textarea",{ref:x,value:c,onChange:b=>h(b.target.value),onKeyDown:b=>{b.key==="Enter"&&(p.enterToSend&&!b.shiftKey||!p.enterToSend&&(b.metaKey||b.ctrlKey))&&(b.preventDefault(),G())},rows:1,placeholder:"Ask anything","aria-label":"Message Luca",className:"block w-full resize-none border-none bg-transparent px-3 pb-1 pt-2 text-[16px] leading-relaxed text-ink outline-none placeholder:text-mute md:text-[15px]"}),u.jsxs("div",{className:"flex items-center gap-1.5 px-1 pt-0.5",children:[u.jsx("button",{onClick:()=>{var b;return(b=S.current)==null?void 0:b.click()},className:"grid h-9 w-9 place-items-center rounded-full text-mute transition-all hover:bg-surface3 hover:text-ink active:scale-90","aria-label":"Attach files",children:u.jsx(Kf,{size:17})}),u.jsx("input",{ref:S,type:"file",multiple:!0,className:"hidden",onChange:b=>{var B;(B=b.target.files)!=null&&B.length&&te(b.target.files),b.target.value=""}}),u.jsxs("div",{className:"relative",ref:A,children:[u.jsxs("button",{onClick:()=>_(b=>!b),"aria-haspopup":"menu","aria-expanded":g,className:"flex h-8 items-center gap-1.5 rounded-full px-3 text-[13px] font-medium text-mute transition-colors hover:bg-surface3 hover:text-ink",children:[u.jsxs("span",{id:"modelMenuLabel",children:["Luca ",J.label]}),u.jsx(Lf,{size:13,className:`transition-transform duration-150 ${g?"rotate-180":""}`})]}),g&&u.jsxs("div",{className:"anim-pop-up absolute bottom-11 left-0 z-50 w-[148px] rounded-xl border border-linestrong bg-surface2 p-1 shadow-[0_14px_38px_rgba(0,0,0,0.55)]",role:"menu",children:[u.jsx("div",{className:"px-2.5 pb-1 pt-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-mute/80",children:"Model"}),io.map(b=>u.jsxs("button",{role:"menuitemradio","aria-checked":b.tier===O,onClick:()=>{k(b.tier),_(!1)},className:`flex w-full items-center justify-between gap-2 rounded-lg px-2.5 py-[7px] text-left text-[13px] font-medium transition-all duration-150 hover:bg-surface3 active:scale-[0.98] ${b.tier===O?"text-ink":"text-mute"}`,children:["Luca ",b.label,b.tier===O&&u.jsx(Bt,{size:13,className:"anim-scale-in text-accent"})]},b.id))]})]}),u.jsx("div",{className:"flex-1"}),ye&&u.jsxs("span",{className:"text-[11.5px] text-danger",children:[c.length.toLocaleString()," / ",da.toLocaleString()]}),u.jsx("button",{onClick:F,"aria-pressed":f,className:`grid h-9 w-9 place-items-center rounded-full transition-all active:scale-90 ${f?"bg-danger/15 text-danger":"text-mute hover:bg-surface3 hover:text-ink"}`,"aria-label":"Voice input",children:u.jsx($f,{size:16,className:f?"animate-pulse":""})}),E?u.jsx("button",{onClick:o,"aria-label":"Stop generating",className:"grid h-9 w-9 place-items-center rounded-full bg-surface3 text-ink transition-all hover:bg-linestrong active:scale-90",children:u.jsx(Xf,{size:13,fill:"currentColor",strokeWidth:0})}):u.jsx("button",{onClick:G,disabled:!Y,"aria-label":"Send message",className:`grid h-9 w-9 place-items-center rounded-full transition-all duration-200 ${Y?"bg-ink text-canvas shadow-[0_3px_14px_rgba(0,0,0,0.4)] hover:bg-ink/85 active:scale-90":"bg-surface3 text-mute"}`,children:u.jsx(Af,{size:17,strokeWidth:2.5})})]})]}),u.jsxs("div",{className:"hidden pt-2 text-center text-[11.5px] text-mute/85 sm:block",children:[p.enterToSend?"Enter to send Â· Shift+Enter for a new line":"Ctrl/âŒ˜+Enter to send"," Â· ","Luca can make mistakes"]})]})}const dc=[{id:"developer",label:"Developer",icon:Df},{id:"student",label:"Student",icon:Bf},{id:"designer",label:"Designer",icon:Gf},{id:"writer",label:"Writer",icon:Mf},{id:"researcher",label:"Researcher",icon:Hf},{id:"founder",label:"Founder",icon:Qf},{id:"analyst",label:"Analyst",icon:Hf},{id:"marketer",label:"Marketer",icon:Qf},{id:"product",label:"Product Manager",icon:Df},{id:"teacher",label:"Teacher",icon:Bf}],fc=[{n:"01",label:"You"},{n:"02",label:"Work"},{n:"03",label:"Canvas"},{n:"04",label:"Style"},{n:"05",label:"Ready"}];function Ap({onComplete:E}){var U,D,Y,G,te;const W=ve.useRef(cp()),[o,O]=ve.useState(()=>{var F;return Math.min(5,Math.max(1,((F=W.current)==null?void 0:F.step)||1))}),[k,p]=ve.useState("fwd"),[m,c]=ve.useState(((U=W.current)==null?void 0:U.name)||""),[h,j]=ve.useState(((D=W.current)==null?void 0:D.persona)||null),[I,C]=ve.useState(((Y=W.current)==null?void 0:Y.theme)||"dark"),[v,g]=ve.useState(((G=W.current)==null?void 0:G.avatar)||null),_=ve.useRef(null);ve.useEffect(()=>{document.documentElement.setAttribute("data-theme",I)},[I]),ve.useEffect(()=>{fp({name:m,persona:h,theme:I,avatar:v,step:o,complete:!1})},[m,h,I,v,o]);const f=F=>{p(F>o?"fwd":"back"),O(F)},y=()=>{const F={name:m.trim()||"User",persona:h,theme:I,avatar:v,complete:!0,completedAt:Date.now()};pp(F),E(F)},x=()=>{o===1&&!m.trim()||(o<5?f(o+1):y())},S=async F=>{if(!F||!F.type.startsWith("image/"))return;const J=new FileReader;J.onload=async()=>{const ye=await vp(String(J.result),256);g(ye)},J.readAsDataURL(F)},A=((te=dc.find(F=>F.id===h))==null?void 0:te.label)||null;return u.jsxs("div",{className:"relative flex h-dvh flex-col overflow-hidden bg-canvas",children:[u.jsx("div",{className:"pointer-events-none absolute inset-0",style:{background:"radial-gradient(900px 480px at 18% -12%, color-mix(in srgb, var(--color-accent) 8%, transparent), transparent 70%),radial-gradient(760px 520px at 92% 112%, color-mix(in srgb, var(--color-avatar) 7%, transparent), transparent 70%),radial-gradient(1200px 700px at 50% 120%, rgba(0,0,0,0.5), transparent 75%)"},"aria-hidden":"true"}),u.jsxs("div",{className:"relative mx-auto flex h-full w-full max-w-[640px] flex-col px-6 sm:px-8",children:[u.jsxs("header",{className:"anim-fade-in flex items-center justify-between pt-6 sm:pt-8",children:[u.jsxs("div",{className:"flex items-center gap-2.5",children:[u.jsx("span",{className:"grid place-items-center text-accent",children:u.jsx(es,{size:24})}),u.jsx("span",{className:"font-display text-lg font-semibold tracking-tight",children:"Luca"})]}),u.jsxs("span",{className:"font-mono text-[11.5px] tracking-[0.14em] text-mute",children:[fc[o-1].n," ",u.jsx("span",{className:"text-linestrong",children:"/"})," 05"]})]}),u.jsx("div",{className:"anim-fade-up mt-7",style:{"--d":"60ms"},children:u.jsxs("div",{className:"flex items-center gap-2",children:[fc.map((F,J)=>{const ye=J+1<o?"done":J+1===o?"active":"todo";return u.jsxs("button",{onClick:()=>J+1<o&&f(J+1),disabled:J+1>=o,className:`flex items-center gap-1.5 rounded-full border px-3 py-[5px] text-[12px] font-semibold transition-all duration-300 ${ye==="active"?"border-accent/60 bg-accent/10 text-accent":ye==="done"?"border-line text-mute hover:border-linestrong hover:text-ink":"border-line/60 text-mute/60"}`,children:[ye==="done"?u.jsx(Bt,{size:12,className:"text-accent"}):u.jsx("span",{className:"font-mono text-[10px]",children:F.n}),F.label]},F.n)}),u.jsx("div",{className:"relative ml-1 h-[3px] flex-1 overflow-hidden rounded-full bg-surface3",children:u.jsx("div",{className:"h-full rounded-full transition-all duration-500",style:{width:`${o/5*100}%`,background:"linear-gradient(90deg, var(--color-accent), var(--color-accent2))",transitionTimingFunction:"var(--ease-spring)"}})})]})}),u.jsx("main",{className:"grid min-h-0 flex-1 content-center overflow-y-auto py-7",children:u.jsxs("div",{className:k==="fwd"?"anim-step-fwd":"anim-step-back",children:[o===1&&u.jsxs(u.Fragment,{children:[u.jsxs("h1",{className:"font-display text-[clamp(30px,6vw,42px)] font-semibold leading-[1.08] tracking-tight",children:["Hey â€” I'm Luca.",u.jsx("br",{}),u.jsx("span",{className:"text-mute",children:"Let's get acquainted."})]}),u.jsx("p",{className:"mt-3.5 max-w-[46ch] text-[15px] leading-relaxed text-mute",children:"First things first: what should I call you? This is how I'll greet you from now on."}),u.jsxs("div",{className:"mt-9 flex items-center gap-5",children:[u.jsxs("button",{onClick:()=>{var F;return v?g(null):(F=_.current)==null?void 0:F.click()},className:"group relative grid h-[72px] w-[72px] shrink-0 place-items-center overflow-hidden rounded-full transition-transform duration-300 hover:scale-[1.04] active:scale-95",style:{background:v?void 0:"color-mix(in srgb, var(--color-avatar) 14%, transparent)",border:v?"2px solid var(--color-linestrong)":"1.5px dashed color-mix(in srgb, var(--color-avatar) 60%, transparent)"},"aria-label":v?"Remove photo":"Add a profile photo",children:[v?u.jsx("img",{src:v,alt:"",className:"h-full w-full object-cover"}):u.jsx(Of,{size:24,className:"text-avatar transition-transform duration-300 group-hover:scale-110"}),v&&u.jsx("span",{className:"absolute inset-0 grid place-items-center bg-black/55 opacity-0 transition-opacity duration-200 group-hover:opacity-100",children:u.jsx(Un,{size:20,className:"text-white"})})]}),u.jsx("input",{type:"file",ref:_,accept:"image/*",className:"hidden",onChange:F=>{var J;return S((J=F.target.files)==null?void 0:J[0])}}),u.jsxs("div",{className:"min-w-0 flex-1",children:[u.jsx("label",{htmlFor:"ob-name",className:"mb-1.5 block text-[11.5px] font-semibold uppercase tracking-[0.08em] text-mute",children:"Your name"}),u.jsx("input",{id:"ob-name",value:m,onChange:F=>c(F.target.value),onKeyDown:F=>F.key==="Enter"&&x(),placeholder:"e.g. Harper",maxLength:40,autoFocus:!0,autoComplete:"off",className:"w-full rounded-xl border border-linestrong bg-surface2 px-4 py-3 text-[16px] text-ink transition-colors duration-200 placeholder:text-mute/60 hover:border-[#484848] focus:border-linestrong focus:bg-surface3 md:text-[15px]"})]})]})]}),o===2&&u.jsxs(u.Fragment,{children:[u.jsxs("h1",{className:"font-display text-[clamp(30px,6vw,42px)] font-semibold leading-[1.08] tracking-tight",children:["What kind of work",u.jsx("br",{}),u.jsx("span",{className:"text-mute",children:"do you do?"})]}),u.jsx("p",{className:"mt-3.5 max-w-[48ch] text-[15px] leading-relaxed text-mute",children:"I'll tune my tone and defaults to match â€” code-heavy, study-friendly, or something else. Nothing locks you in."}),u.jsx("div",{className:"mt-9 grid grid-cols-2 gap-2.5 sm:grid-cols-3",children:dc.map((F,J)=>{const ye=F.icon,b=h===F.id;return u.jsxs("button",{onClick:()=>j(F.id),className:`anim-fade-up group relative flex flex-col items-center gap-2.5 rounded-2xl border px-3 py-5 transition-all duration-200 ${b?"border-accent/70 bg-accent/[0.09] shadow-[0_0_0_3px_color-mix(in_srgb,var(--color-accent)_14%,transparent)]":"border-line bg-surface1/60 hover:-translate-y-1 hover:border-linestrong hover:bg-surface2"}`,style:{"--d":`${90+J*45}ms`},"aria-pressed":b,children:[u.jsx(ye,{size:20,className:`transition-colors duration-200 ${b?"text-accent":"text-mute group-hover:text-ink"}`}),u.jsx("span",{className:`text-[13.5px] font-semibold ${b?"text-ink":"text-mute group-hover:text-ink"}`,children:F.label}),b&&u.jsx("span",{className:"anim-scale-in absolute right-2 top-2 grid h-[18px] w-[18px] place-items-center rounded-full bg-accent text-accent-ink",children:u.jsx(Bt,{size:11,strokeWidth:3.2})})]},F.id)})})]}),o===3&&u.jsxs(u.Fragment,{children:[u.jsx("h1",{className:"font-display text-[clamp(30px,6vw,42px)] font-semibold leading-[1.08] tracking-tight",children:"Pick your canvas."}),u.jsx("p",{className:"mt-3.5 max-w-[48ch] text-[15px] leading-relaxed text-mute",children:"The theme applies everywhere, instantly â€” and you can flip it later in settings."}),u.jsx("div",{className:"mt-9 grid grid-cols-2 gap-3",children:["dark","light"].map((F,J)=>{const ye=I===F;return u.jsxs("button",{onClick:()=>C(F),className:`anim-fade-up rounded-2xl border p-2.5 text-left transition-all duration-200 ${ye?"border-accent/70 shadow-[0_0_0_3px_color-mix(in_srgb,var(--color-accent)_14%,transparent)]":"border-line hover:-translate-y-1 hover:border-linestrong"}`,style:{"--d":`${90+J*70}ms`},"aria-pressed":ye,children:[u.jsx("span",{className:"block overflow-hidden rounded-xl border",style:{background:F==="dark"?"#131313":"#f1efe9",borderColor:F==="dark"?"#2a2a2a":"#ddd8d0"},children:u.jsxs("span",{className:"flex gap-2 p-3",children:[u.jsxs("span",{className:"hidden w-9 shrink-0 flex-col gap-1.5 sm:flex",children:[u.jsx("span",{className:"h-1.5 w-full rounded-full",style:{background:F==="dark"?"#2f2f2f":"#ddd8d0"}}),u.jsx("span",{className:"h-1.5 w-3/4 rounded-full",style:{background:F==="dark"?"#262626":"#e4e0d8"}}),u.jsx("span",{className:"h-1.5 w-full rounded-full",style:{background:F==="dark"?"#262626":"#e4e0d8"}})]}),u.jsxs("span",{className:"flex flex-1 flex-col gap-1.5",children:[u.jsx("span",{className:"h-1.5 w-2/3 rounded-full",style:{background:F==="dark"?"#3a3a3a":"#d4cfc6"}}),u.jsx("span",{className:"h-1.5 w-full rounded-full",style:{background:F==="dark"?"#2a2a2a":"#e0dcd4"}}),u.jsx("span",{className:"h-1.5 w-1/2 rounded-full",style:{background:F==="dark"?"#6ba2ff":"#2f6fdd"}}),u.jsx("span",{className:"h-1.5 w-5/6 rounded-full",style:{background:F==="dark"?"#2a2a2a":"#e0dcd4"}})]})]})}),u.jsxs("span",{className:"mt-2.5 flex items-center justify-between px-1 pb-0.5",children:[u.jsx("span",{className:`text-[13.5px] font-semibold ${ye?"text-ink":"text-mute"}`,children:F==="dark"?"Dark":"Light"}),u.jsx("span",{className:`grid h-[17px] w-[17px] place-items-center rounded-full border transition-all duration-200 ${ye?"border-accent bg-accent text-accent-ink":"border-linestrong"}`,children:ye&&u.jsx(Bt,{size:10,strokeWidth:3.5})})]})]},F)})}),u.jsxs("div",{className:"anim-fade-up mt-7 flex items-center gap-3 rounded-2xl border border-line bg-surface1/70 px-4 py-3.5",style:{"--d":"220ms"},children:[u.jsx("span",{className:"grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-full bg-avatar text-[12px] font-bold text-white",style:v?{backgroundImage:`url(${v})`,backgroundSize:"cover"}:void 0,children:!v&&(m.trim()?m.trim().charAt(0).toUpperCase():"?")}),u.jsxs("span",{className:"min-w-0 text-[13.5px] text-mute",children:["Ready as ",u.jsx("span",{className:"font-semibold text-ink",children:m.trim()||"you"}),A&&u.jsxs(u.Fragment,{children:[" Â· ",u.jsx("span",{className:"font-semibold text-ink",children:A})]})," Â· ",u.jsxs("span",{className:"font-semibold text-accent",children:[I==="dark"?"Dark":"Light"," theme"]})]})]})]})]},o)}),o===4&&u.jsxs(u.Fragment,{children:[u.jsx("h1",{className:"font-display text-[clamp(30px,6vw,42px)] font-semibold leading-[1.08] tracking-tight",children:"How should I talk?"}),u.jsx("p",{className:"mt-3.5 max-w-[48ch] text-[15px] leading-relaxed text-mute",children:"Pick your preferred response style. You can change this later."}),u.jsx("div",{className:"mt-9 grid gap-2.5",children:[{id:"concise",label:"Concise",desc:"Short, direct answers."},{id:"balanced",label:"Balanced",desc:"Moderate detail."},{id:"detailed",label:"Detailed",desc:"Thorough with examples."}].map((F,J)=>{const ye=h==="style-"+F.id;return u.jsxs("button",{onClick:()=>{j("style-"+F.id)},className:`anim-fade-up group relative flex items-center gap-2.5 rounded-2xl border px-4 py-4 text-left transition-all duration-200 ${ye?"border-accent/70 bg-accent/[0.09] shadow-[0_0_0_3px_color-mix(in_srgb,var(--color-accent)_14%,transparent)]":"border-line bg-surface1/60 hover:-translate-y-1 hover:border-linestrong hover:bg-surface2"}`,style:{"--d":`${90+J*45}ms`},"aria-pressed":ye,children:[u.jsx("span",{className:`text-[14px] font-semibold ${ye?"text-ink":"text-mute group-hover:text-ink"}`,children:F.label}),u.jsx("span",{className:"text-[12px] text-mute",children:F.desc})]},F.id)})})]}),o===5&&u.jsxs(u.Fragment,{children:[u.jsx("h1",{className:"font-display text-[clamp(30px,6vw,42px)] font-semibold leading-[1.08] tracking-tight",children:"You are all set."}),u.jsx("p",{className:"mt-3.5 max-w-[48ch] text-[15px] leading-relaxed text-mute",children:"Your preferences are saved. Let us start chatting."})]}),u.jsxs("footer",{className:"flex items-center gap-2 pb-[max(20px,env(safe-area-inset-bottom))] pt-2",children:[o>1?u.jsxs("button",{onClick:()=>f(o-1),className:"flex items-center gap-1.5 rounded-xl px-3.5 py-2.5 text-[13.5px] font-medium text-mute transition-all duration-200 hover:bg-surface2 hover:text-ink active:scale-95",children:[u.jsx(Rf,{size:15}),"Back"]}):u.jsx("span",{}),o<3&&u.jsx("button",{onClick:y,className:"ml-auto rounded-xl px-3 py-2.5 text-[13px] text-mute transition-colors duration-200 hover:text-ink hover:underline hover:underline-offset-4",children:"Skip for now"}),u.jsxs("button",{onClick:x,disabled:o===1&&!m.trim(),className:`group flex items-center gap-2 rounded-xl px-5 py-2.5 text-[14px] font-semibold transition-all duration-200 active:scale-95 ${o===1&&!m.trim()?"cursor-not-allowed bg-surface3 text-mute/60":"bg-ink text-canvas shadow-[0_6px_22px_rgba(0,0,0,0.4)] hover:bg-ink/85"} ${o===3&&o>1?"":o<=1?"ml-auto":""}`,children:[o===5?"Enter Luca":"Continue",u.jsx(If,{size:15,className:"transition-transform duration-200 group-hover:translate-x-0.5"})]})]})]})]})}function pc({checked:E,onToggle:W,label:o,hint:O}){return u.jsxs("button",{onClick:W,role:"switch","aria-checked":E,className:"flex w-full items-center gap-3 py-2.5 text-left",children:[u.jsxs("span",{className:"min-w-0 flex-1",children:[u.jsx("span",{className:"block text-sm font-medium",children:o}),u.jsx("span",{className:"block text-xs text-mute",children:O})]}),u.jsx("span",{className:`relative h-[22px] w-[38px] shrink-0 rounded-full transition-colors duration-200 ${E?"bg-accent":"bg-surface3"}`,children:u.jsx("span",{className:`absolute top-[3px] h-4 w-4 rounded-full bg-white shadow transition-all duration-200 ${E?"left-[17px]":"left-[3px]"}`,style:{transitionTimingFunction:"var(--ease-spring)"}})})]})}function lo({value:E,onChange:W,label:o}){return u.jsxs("div",{className:"py-1.5",children:[u.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[u.jsx("span",{className:"text-[13px] font-medium",children:o}),u.jsx("span",{className:"font-mono text-[11.5px] text-mute",children:E})]}),u.jsx("input",{type:"range",min:0,max:100,value:E,onChange:O=>W(Number(O.target.value)),className:"w-full cursor-pointer",style:{"--fill":`${E}%`},"aria-label":o})]})}function Op({open:E,settings:W,onChange:o,onClose:O,onReset:k}){const[p,m]=ve.useState(!1);return ve.useEffect(()=>{if(!E)return;const c=h=>h.key==="Escape"&&O();return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[E,O]),ve.useEffect(()=>{E&&m(!1)},[E]),E?u.jsx("div",{className:"anim-fade-in fixed inset-0 z-50 grid place-items-center bg-black/60 p-4 backdrop-blur-[3px]",style:{animationDuration:"0.25s"},onMouseDown:O,children:u.jsxs("div",{className:"anim-scale-in max-h-[86vh] w-full max-w-[520px] overflow-y-auto rounded-2xl border border-linestrong bg-surface1 shadow-[0_24px_60px_rgba(0,0,0,0.6)]",onMouseDown:c=>c.stopPropagation(),role:"dialog","aria-label":"Settings",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-line px-5 py-4",children:[u.jsx("h2",{className:"font-display text-[17px] font-semibold",children:"Settings"}),u.jsx("button",{onClick:O,className:"grid h-8 w-8 place-items-center rounded-lg text-mute transition-all duration-150 hover:bg-surface3 hover:text-ink active:scale-90","aria-label":"Close settings",children:u.jsx(Un,{size:17})})]}),u.jsxs("div",{className:"px-5 py-4",children:[u.jsxs("div",{className:"mb-4",children:[u.jsx("div",{className:"mb-1.5 text-xs font-semibold uppercase tracking-[0.05em] text-mute",children:"Theme"}),u.jsx("div",{className:"flex gap-2",children:["dark","light"].map(c=>u.jsxs("button",{onClick:()=>o({theme:c}),className:`flex flex-1 items-center justify-center gap-2 rounded-lg border px-3 py-2.5 text-[13px] font-medium transition-all duration-200 active:scale-[0.97] ${W.theme===c?"border-accent/70 bg-accent/10 text-ink":"border-line bg-surface2 text-mute hover:border-linestrong hover:text-ink"}`,children:[c==="dark"?u.jsx(Vf,{size:14,className:W.theme===c?"text-accent":""}):u.jsx(Jf,{size:14,className:W.theme===c?"text-accent":""}),c==="dark"?"Dark":"Light"]},c))})]}),u.jsxs("div",{className:"divide-y divide-line/70",children:[u.jsx(pc,{checked:W.enterToSend,onToggle:()=>o({enterToSend:!W.enterToSend}),label:"Enter to send",hint:"Off = Enter makes a new line, Ctrl/âŒ˜+Enter sends"}),u.jsx(pc,{checked:W.showTimestamps,onToggle:()=>o({showTimestamps:!W.showTimestamps}),label:"Show timestamps",hint:"Display the time under each message"})]}),u.jsxs("div",{className:"mb-4",children:[u.jsx("div",{className:"mb-1.5 text-xs font-semibold uppercase tracking-[0.05em] text-mute",children:"Role"}),u.jsx("div",{className:"flex flex-wrap gap-1.5",children:["developer","designer","writer","student","researcher","founder","analyst","marketer","product","teacher"].map(function(r){return u.jsx("button",{onClick:()=>o({role:r}),className:`rounded-lg border px-3 py-1.5 text-[12px] font-medium capitalize transition-all active:scale-[0.97] ${(W.role||"")===r?"border-accent/70 bg-accent/10 text-ink":"border-line bg-surface2 text-mute hover:border-linestrong hover:text-ink"}`,children:r},r)})})]}),u.jsxs("div",{className:"mb-4 mt-4 rounded-xl border border-line bg-surface2/60 px-4 py-2.5",children:[u.jsx("div",{className:"mb-1 text-xs font-semibold uppercase tracking-[0.05em] text-mute",children:"Personality"}),u.jsx(lo,{value:W.personality.creativity,onChange:c=>o({personality:{...W.personality,creativity:c}}),label:"Creativity"}),u.jsx(lo,{value:W.personality.formality,onChange:c=>o({personality:{...W.personality,formality:c}}),label:"Formality"}),u.jsx(lo,{value:W.personality.verbosity,onChange:c=>o({personality:{...W.personality,verbosity:c}}),label:"Verbosity"})]}),u.jsxs("div",{children:[u.jsx("label",{htmlFor:"custom-prompt",className:"mb-1.5 block text-xs font-semibold uppercase tracking-[0.05em] text-mute",children:"Custom instructions"}),u.jsx("textarea",{id:"custom-prompt",value:W.customPrompt,onChange:c=>o({customPrompt:c.target.value}),rows:3,placeholder:"Always answer concisely. Prefer TypeScript examplesâ€¦",className:"w-full resize-none rounded-lg border border-linestrong bg-surface2 px-3 py-2.5 text-[16px] text-ink transition-colors duration-200 placeholder:text-mute/60 hover:border-[#484848] focus:border-linestrong focus:bg-surface3 md:text-[13.5px]"})]})]}),u.jsx("div",{className:"border-t border-line px-5 py-4",children:p?u.jsxs("div",{className:"anim-scale-in rounded-xl border border-danger/40 bg-danger/[0.07] p-4",children:[u.jsxs("div",{className:"flex items-start gap-2.5",children:[u.jsx(co,{size:16,className:"mt-0.5 shrink-0 text-danger"}),u.jsxs("div",{children:[u.jsx("div",{className:"text-sm font-semibold text-ink",children:"Reset everything?"}),u.jsx("p",{className:"mt-0.5 text-xs leading-relaxed text-mute",children:"This deletes all your chats, your profile, and every setting â€” then takes you back to onboarding. It can't be undone."})]})]}),u.jsxs("div",{className:"mt-3 flex gap-2",children:[u.jsx("button",{onClick:k,className:"flex items-center gap-1.5 rounded-lg bg-danger px-3.5 py-2 text-xs font-semibold text-white transition-all duration-150 hover:brightness-110 active:scale-95",children:[u.jsx(wc,{size:13}),"Yes, reset everything"]}),u.jsx("button",{onClick:()=>m(!1),className:"rounded-lg bg-surface3 px-3.5 py-2 text-xs font-medium text-ink transition-all duration-150 hover:bg-surface4 active:scale-95",children:"Cancel"})]})]}):u.jsxs("button",{onClick:()=>m(!0),className:"flex w-full items-center gap-2.5 rounded-xl border border-line px-4 py-3 text-left transition-all duration-200 hover:border-danger/50 hover:bg-danger/[0.05] active:scale-[0.99]",children:[u.jsx(wc,{size:15,className:"text-danger"}),u.jsxs("span",{className:"flex-1",children:[u.jsx("span",{className:"block text-sm font-medium text-danger",children:"Reset everything"}),u.jsx("span",{className:"block text-xs text-mute",children:"Clear chats, profile & settings â€” restart from onboarding"})]})]})})]})}):null}function fa(E){throw new Error('Could not dynamically require "'+E+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var uo={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var mc;function Lp(){return mc||(mc=1,(function(E,W){(function(o){E.exports=o()})(function(){return(function o(O,k,p){function m(j,I){if(!k[j]){if(!O[j]){var C=typeof fa=="function"&&fa;if(!I&&C)return C(j,!0);if(c)return c(j,!0);var v=new Error("Cannot find module '"+j+"'");throw v.code="MODULE_NOT_FOUND",v}var g=k[j]={exports:{}};O[j][0].call(g.exports,function(_){var f=O[j][1][_];return m(f||_)},g,g.exports,o,O,k,p)}return k[j].exports}for(var c=typeof fa=="function"&&fa,h=0;h<p.length;h++)m(p[h]);return m})({1:[function(o,O,k){var p=o("./utils"),m=o("./support"),c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";k.encode=function(h){for(var j,I,C,v,g,_,f,y=[],x=0,S=h.length,A=S,U=p.getTypeOf(h)!=="string";x<h.length;)A=S-x,C=U?(j=h[x++],I=x<S?h[x++]:0,x<S?h[x++]:0):(j=h.charCodeAt(x++),I=x<S?h.charCodeAt(x++):0,x<S?h.charCodeAt(x++):0),v=j>>2,g=(3&j)<<4|I>>4,_=1<A?(15&I)<<2|C>>6:64,f=2<A?63&C:64,y.push(c.charAt(v)+c.charAt(g)+c.charAt(_)+c.charAt(f));return y.join("")},k.decode=function(h){var j,I,C,v,g,_,f=0,y=0,x="data:";if(h.substr(0,x.length)===x)throw new Error("Invalid base64 input, it looks like a data url.");var S,A=3*(h=h.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(h.charAt(h.length-1)===c.charAt(64)&&A--,h.charAt(h.length-2)===c.charAt(64)&&A--,A%1!=0)throw new Error("Invalid base64 input, bad content length.");for(S=m.uint8array?new Uint8Array(0|A):new Array(0|A);f<h.length;)j=c.indexOf(h.charAt(f++))<<2|(v=c.indexOf(h.charAt(f++)))>>4,I=(15&v)<<4|(g=c.indexOf(h.charAt(f++)))>>2,C=(3&g)<<6|(_=c.indexOf(h.charAt(f++))),S[y++]=j,g!==64&&(S[y++]=I),_!==64&&(S[y++]=C);return S}},{"./support":30,"./utils":32}],2:[function(o,O,k){var p=o("./external"),m=o("./stream/DataWorker"),c=o("./stream/Crc32Probe"),h=o("./stream/DataLengthProbe");function j(I,C,v,g,_){this.compressedSize=I,this.uncompressedSize=C,this.crc32=v,this.compression=g,this.compressedContent=_}j.prototype={getContentWorker:function(){var I=new m(p.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new h("data_length")),C=this;return I.on("end",function(){if(this.streamInfo.data_length!==C.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),I},getCompressedWorker:function(){return new m(p.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},j.createWorkerFrom=function(I,C,v){return I.pipe(new c).pipe(new h("uncompressedSize")).pipe(C.compressWorker(v)).pipe(new h("compressedSize")).withStreamInfo("compression",C)},O.exports=j},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(o,O,k){var p=o("./stream/GenericWorker");k.STORE={magic:"\0\0",compressWorker:function(){return new p("STORE compression")},uncompressWorker:function(){return new p("STORE decompression")}},k.DEFLATE=o("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(o,O,k){var p=o("./utils"),m=(function(){for(var c,h=[],j=0;j<256;j++){c=j;for(var I=0;I<8;I++)c=1&c?3988292384^c>>>1:c>>>1;h[j]=c}return h})();O.exports=function(c,h){return c!==void 0&&c.length?p.getTypeOf(c)!=="string"?(function(j,I,C,v){var g=m,_=v+C;j^=-1;for(var f=v;f<_;f++)j=j>>>8^g[255&(j^I[f])];return-1^j})(0|h,c,c.length,0):(function(j,I,C,v){var g=m,_=v+C;j^=-1;for(var f=v;f<_;f++)j=j>>>8^g[255&(j^I.charCodeAt(f))];return-1^j})(0|h,c,c.length,0):0}},{"./utils":32}],5:[function(o,O,k){k.base64=!1,k.binary=!1,k.dir=!1,k.createFolders=!0,k.date=null,k.compression=null,k.compressionOptions=null,k.comment=null,k.unixPermissions=null,k.dosPermissions=null},{}],6:[function(o,O,k){var p=null;p=typeof Promise<"u"?Promise:o("lie"),O.exports={Promise:p}},{lie:37}],7:[function(o,O,k){var p=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",m=o("pako"),c=o("./utils"),h=o("./stream/GenericWorker"),j=p?"uint8array":"array";function I(C,v){h.call(this,"FlateWorker/"+C),this._pako=null,this._pakoAction=C,this._pakoOptions=v,this.meta={}}k.magic="\b\0",c.inherits(I,h),I.prototype.processChunk=function(C){this.meta=C.meta,this._pako===null&&this._createPako(),this._pako.push(c.transformTo(j,C.data),!1)},I.prototype.flush=function(){h.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},I.prototype.cleanUp=function(){h.prototype.cleanUp.call(this),this._pako=null},I.prototype._createPako=function(){this._pako=new m[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var C=this;this._pako.onData=function(v){C.push({data:v,meta:C.meta})}},k.compressWorker=function(C){return new I("Deflate",C)},k.uncompressWorker=function(){return new I("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(o,O,k){function p(g,_){var f,y="";for(f=0;f<_;f++)y+=String.fromCharCode(255&g),g>>>=8;return y}function m(g,_,f,y,x,S){var A,U,D=g.file,Y=g.compression,G=S!==j.utf8encode,te=c.transformTo("string",S(D.name)),F=c.transformTo("string",j.utf8encode(D.name)),J=D.comment,ye=c.transformTo("string",S(J)),b=c.transformTo("string",j.utf8encode(J)),B=F.length!==D.name.length,l=b.length!==J.length,q="",we="",ee="",re=D.dir,Q=D.date,se={crc32:0,compressedSize:0,uncompressedSize:0};_&&!f||(se.crc32=g.crc32,se.compressedSize=g.compressedSize,se.uncompressedSize=g.uncompressedSize);var w=0;_&&(w|=8),G||!B&&!l||(w|=2048);var R=0,pe=0;re&&(R|=16),x==="UNIX"?(pe=798,R|=(function(ae,Te){var ce=ae;return ae||(ce=Te?16893:33204),(65535&ce)<<16})(D.unixPermissions,re)):(pe=20,R|=(function(ae){return 63&(ae||0)})(D.dosPermissions)),A=Q.getUTCHours(),A<<=6,A|=Q.getUTCMinutes(),A<<=5,A|=Q.getUTCSeconds()/2,U=Q.getUTCFullYear()-1980,U<<=4,U|=Q.getUTCMonth()+1,U<<=5,U|=Q.getUTCDate(),B&&(we=p(1,1)+p(I(te),4)+F,q+="up"+p(we.length,2)+we),l&&(ee=p(1,1)+p(I(ye),4)+b,q+="uc"+p(ee.length,2)+ee);var ie="";return ie+=`
\0`,ie+=p(w,2),ie+=Y.magic,ie+=p(A,2),ie+=p(U,2),ie+=p(se.crc32,4),ie+=p(se.compressedSize,4),ie+=p(se.uncompressedSize,4),ie+=p(te.length,2),ie+=p(q.length,2),{fileRecord:C.LOCAL_FILE_HEADER+ie+te+q,dirRecord:C.CENTRAL_FILE_HEADER+p(pe,2)+ie+p(ye.length,2)+"\0\0\0\0"+p(R,4)+p(y,4)+te+q+ye}}var c=o("../utils"),h=o("../stream/GenericWorker"),j=o("../utf8"),I=o("../crc32"),C=o("../signature");function v(g,_,f,y){h.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=_,this.zipPlatform=f,this.encodeFileName=y,this.streamFiles=g,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}c.inherits(v,h),v.prototype.push=function(g){var _=g.meta.percent||0,f=this.entriesCount,y=this._sources.length;this.accumulate?this.contentBuffer.push(g):(this.bytesWritten+=g.data.length,h.prototype.push.call(this,{data:g.data,meta:{currentFile:this.currentFile,percent:f?(_+100*(f-y-1))/f:100}}))},v.prototype.openedSource=function(g){this.currentSourceOffset=this.bytesWritten,this.currentFile=g.file.name;var _=this.streamFiles&&!g.file.dir;if(_){var f=m(g,_,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:f.fileRecord,meta:{percent:0}})}else this.accumulate=!0},v.prototype.closedSource=function(g){this.accumulate=!1;var _=this.streamFiles&&!g.file.dir,f=m(g,_,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(f.dirRecord),_)this.push({data:(function(y){return C.DATA_DESCRIPTOR+p(y.crc32,4)+p(y.compressedSize,4)+p(y.uncompressedSize,4)})(g),meta:{percent:100}});else for(this.push({data:f.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},v.prototype.flush=function(){for(var g=this.bytesWritten,_=0;_<this.dirRecords.length;_++)this.push({data:this.dirRecords[_],meta:{percent:100}});var f=this.bytesWritten-g,y=(function(x,S,A,U,D){var Y=c.transformTo("string",D(U));return C.CENTRAL_DIRECTORY_END+"\0\0\0\0"+p(x,2)+p(x,2)+p(S,4)+p(A,4)+p(Y.length,2)+Y})(this.dirRecords.length,f,g,this.zipComment,this.encodeFileName);this.push({data:y,meta:{percent:100}})},v.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},v.prototype.registerPrevious=function(g){this._sources.push(g);var _=this;return g.on("data",function(f){_.processChunk(f)}),g.on("end",function(){_.closedSource(_.previous.streamInfo),_._sources.length?_.prepareNextSource():_.end()}),g.on("error",function(f){_.error(f)}),this},v.prototype.resume=function(){return!!h.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},v.prototype.error=function(g){var _=this._sources;if(!h.prototype.error.call(this,g))return!1;for(var f=0;f<_.length;f++)try{_[f].error(g)}catch{}return!0},v.prototype.lock=function(){h.prototype.lock.call(this);for(var g=this._sources,_=0;_<g.length;_++)g[_].lock()},O.exports=v},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(o,O,k){var p=o("../compressions"),m=o("./ZipFileWorker");k.generateWorker=function(c,h,j){var I=new m(h.streamFiles,j,h.platform,h.encodeFileName),C=0;try{c.forEach(function(v,g){C++;var _=(function(S,A){var U=S||A,D=p[U];if(!D)throw new Error(U+" is not a valid compression method !");return D})(g.options.compression,h.compression),f=g.options.compressionOptions||h.compressionOptions||{},y=g.dir,x=g.date;g._compressWorker(_,f).withStreamInfo("file",{name:v,dir:y,date:x,comment:g.comment||"",unixPermissions:g.unixPermissions,dosPermissions:g.dosPermissions}).pipe(I)}),I.entriesCount=C}catch(v){I.error(v)}return I}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(o,O,k){function p(){if(!(this instanceof p))return new p;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var m=new p;for(var c in this)typeof this[c]!="function"&&(m[c]=this[c]);return m}}(p.prototype=o("./object")).loadAsync=o("./load"),p.support=o("./support"),p.defaults=o("./defaults"),p.version="3.10.1",p.loadAsync=function(m,c){return new p().loadAsync(m,c)},p.external=o("./external"),O.exports=p},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(o,O,k){var p=o("./utils"),m=o("./external"),c=o("./utf8"),h=o("./zipEntries"),j=o("./stream/Crc32Probe"),I=o("./nodejsUtils");function C(v){return new m.Promise(function(g,_){var f=v.decompressed.getContentWorker().pipe(new j);f.on("error",function(y){_(y)}).on("end",function(){f.streamInfo.crc32!==v.decompressed.crc32?_(new Error("Corrupted zip : CRC32 mismatch")):g()}).resume()})}O.exports=function(v,g){var _=this;return g=p.extend(g||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:c.utf8decode}),I.isNode&&I.isStream(v)?m.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):p.prepareContent("the loaded zip file",v,!0,g.optimizedBinaryString,g.base64).then(function(f){var y=new h(g);return y.load(f),y}).then(function(f){var y=[m.Promise.resolve(f)],x=f.files;if(g.checkCRC32)for(var S=0;S<x.length;S++)y.push(C(x[S]));return m.Promise.all(y)}).then(function(f){for(var y=f.shift(),x=y.files,S=0;S<x.length;S++){var A=x[S],U=A.fileNameStr,D=p.resolve(A.fileNameStr);_.file(D,A.decompressed,{binary:!0,optimizedBinaryString:!0,date:A.date,dir:A.dir,comment:A.fileCommentStr.length?A.fileCommentStr:null,unixPermissions:A.unixPermissions,dosPermissions:A.dosPermissions,createFolders:g.createFolders}),A.dir||(_.file(D).unsafeOriginalName=U)}return y.zipComment.length&&(_.comment=y.zipComment),_})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(o,O,k){var p=o("../utils"),m=o("../stream/GenericWorker");function c(h,j){m.call(this,"Nodejs stream input adapter for "+h),this._upstreamEnded=!1,this._bindStream(j)}p.inherits(c,m),c.prototype._bindStream=function(h){var j=this;(this._stream=h).pause(),h.on("data",function(I){j.push({data:I,meta:{percent:0}})}).on("error",function(I){j.isPaused?this.generatedError=I:j.error(I)}).on("end",function(){j.isPaused?j._upstreamEnded=!0:j.end()})},c.prototype.pause=function(){return!!m.prototype.pause.call(this)&&(this._stream.pause(),!0)},c.prototype.resume=function(){return!!m.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},O.exports=c},{"../stream/GenericWorker":28,"../utils":32}],13:[function(o,O,k){var p=o("readable-stream").Readable;function m(c,h,j){p.call(this,h),this._helper=c;var I=this;c.on("data",function(C,v){I.push(C)||I._helper.pause(),j&&j(v)}).on("error",function(C){I.emit("error",C)}).on("end",function(){I.push(null)})}o("../utils").inherits(m,p),m.prototype._read=function(){this._helper.resume()},O.exports=m},{"../utils":32,"readable-stream":16}],14:[function(o,O,k){O.exports={isNode:typeof Buffer<"u",newBufferFrom:function(p,m){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(p,m);if(typeof p=="number")throw new Error('The "data" argument must not be a number');return new Buffer(p,m)},allocBuffer:function(p){if(Buffer.alloc)return Buffer.alloc(p);var m=new Buffer(p);return m.fill(0),m},isBuffer:function(p){return Buffer.isBuffer(p)},isStream:function(p){return p&&typeof p.on=="function"&&typeof p.pause=="function"&&typeof p.resume=="function"}}},{}],15:[function(o,O,k){function p(D,Y,G){var te,F=c.getTypeOf(Y),J=c.extend(G||{},I);J.date=J.date||new Date,J.compression!==null&&(J.compression=J.compression.toUpperCase()),typeof J.unixPermissions=="string"&&(J.unixPermissions=parseInt(J.unixPermissions,8)),J.unixPermissions&&16384&J.unixPermissions&&(J.dir=!0),J.dosPermissions&&16&J.dosPermissions&&(J.dir=!0),J.dir&&(D=x(D)),J.createFolders&&(te=y(D))&&S.call(this,te,!0);var ye=F==="string"&&J.binary===!1&&J.base64===!1;G&&G.binary!==void 0||(J.binary=!ye),(Y instanceof C&&Y.uncompressedSize===0||J.dir||!Y||Y.length===0)&&(J.base64=!1,J.binary=!0,Y="",J.compression="STORE",F="string");var b=null;b=Y instanceof C||Y instanceof h?Y:_.isNode&&_.isStream(Y)?new f(D,Y):c.prepareContent(D,Y,J.binary,J.optimizedBinaryString,J.base64);var B=new v(D,b,J);this.files[D]=B}var m=o("./utf8"),c=o("./utils"),h=o("./stream/GenericWorker"),j=o("./stream/StreamHelper"),I=o("./defaults"),C=o("./compressedObject"),v=o("./zipObject"),g=o("./generate"),_=o("./nodejsUtils"),f=o("./nodejs/NodejsStreamInputAdapter"),y=function(D){D.slice(-1)==="/"&&(D=D.substring(0,D.length-1));var Y=D.lastIndexOf("/");return 0<Y?D.substring(0,Y):""},x=function(D){return D.slice(-1)!=="/"&&(D+="/"),D},S=function(D,Y){return Y=Y!==void 0?Y:I.createFolders,D=x(D),this.files[D]||p.call(this,D,null,{dir:!0,createFolders:Y}),this.files[D]};function A(D){return Object.prototype.toString.call(D)==="[object RegExp]"}var U={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(D){var Y,G,te;for(Y in this.files)te=this.files[Y],(G=Y.slice(this.root.length,Y.length))&&Y.slice(0,this.root.length)===this.root&&D(G,te)},filter:function(D){var Y=[];return this.forEach(function(G,te){D(G,te)&&Y.push(te)}),Y},file:function(D,Y,G){if(arguments.length!==1)return D=this.root+D,p.call(this,D,Y,G),this;if(A(D)){var te=D;return this.filter(function(J,ye){return!ye.dir&&te.test(J)})}var F=this.files[this.root+D];return F&&!F.dir?F:null},folder:function(D){if(!D)return this;if(A(D))return this.filter(function(F,J){return J.dir&&D.test(F)});var Y=this.root+D,G=S.call(this,Y),te=this.clone();return te.root=G.name,te},remove:function(D){D=this.root+D;var Y=this.files[D];if(Y||(D.slice(-1)!=="/"&&(D+="/"),Y=this.files[D]),Y&&!Y.dir)delete this.files[D];else for(var G=this.filter(function(F,J){return J.name.slice(0,D.length)===D}),te=0;te<G.length;te++)delete this.files[G[te].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(D){var Y,G={};try{if((G=c.extend(D||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:m.utf8encode})).type=G.type.toLowerCase(),G.compression=G.compression.toUpperCase(),G.type==="binarystring"&&(G.type="string"),!G.type)throw new Error("No output type specified.");c.checkSupport(G.type),G.platform!=="darwin"&&G.platform!=="freebsd"&&G.platform!=="linux"&&G.platform!=="sunos"||(G.platform="UNIX"),G.platform==="win32"&&(G.platform="DOS");var te=G.comment||this.comment||"";Y=g.generateWorker(this,G,te)}catch(F){(Y=new h("error")).error(F)}return new j(Y,G.type||"string",G.mimeType)},generateAsync:function(D,Y){return this.generateInternalStream(D).accumulate(Y)},generateNodeStream:function(D,Y){return(D=D||{}).type||(D.type="nodebuffer"),this.generateInternalStream(D).toNodejsStream(Y)}};O.exports=U},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(o,O,k){O.exports=o("stream")},{stream:void 0}],17:[function(o,O,k){var p=o("./DataReader");function m(c){p.call(this,c);for(var h=0;h<this.data.length;h++)c[h]=255&c[h]}o("../utils").inherits(m,p),m.prototype.byteAt=function(c){return this.data[this.zero+c]},m.prototype.lastIndexOfSignature=function(c){for(var h=c.charCodeAt(0),j=c.charCodeAt(1),I=c.charCodeAt(2),C=c.charCodeAt(3),v=this.length-4;0<=v;--v)if(this.data[v]===h&&this.data[v+1]===j&&this.data[v+2]===I&&this.data[v+3]===C)return v-this.zero;return-1},m.prototype.readAndCheckSignature=function(c){var h=c.charCodeAt(0),j=c.charCodeAt(1),I=c.charCodeAt(2),C=c.charCodeAt(3),v=this.readData(4);return h===v[0]&&j===v[1]&&I===v[2]&&C===v[3]},m.prototype.readData=function(c){if(this.checkOffset(c),c===0)return[];var h=this.data.slice(this.zero+this.index,this.zero+this.index+c);return this.index+=c,h},O.exports=m},{"../utils":32,"./DataReader":18}],18:[function(o,O,k){var p=o("../utils");function m(c){this.data=c,this.length=c.length,this.index=0,this.zero=0}m.prototype={checkOffset:function(c){this.checkIndex(this.index+c)},checkIndex:function(c){if(this.length<this.zero+c||c<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+c+"). Corrupted zip ?")},setIndex:function(c){this.checkIndex(c),this.index=c},skip:function(c){this.setIndex(this.index+c)},byteAt:function(){},readInt:function(c){var h,j=0;for(this.checkOffset(c),h=this.index+c-1;h>=this.index;h--)j=(j<<8)+this.byteAt(h);return this.index+=c,j},readString:function(c){return p.transformTo("string",this.readData(c))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var c=this.readInt(4);return new Date(Date.UTC(1980+(c>>25&127),(c>>21&15)-1,c>>16&31,c>>11&31,c>>5&63,(31&c)<<1))}},O.exports=m},{"../utils":32}],19:[function(o,O,k){var p=o("./Uint8ArrayReader");function m(c){p.call(this,c)}o("../utils").inherits(m,p),m.prototype.readData=function(c){this.checkOffset(c);var h=this.data.slice(this.zero+this.index,this.zero+this.index+c);return this.index+=c,h},O.exports=m},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(o,O,k){var p=o("./DataReader");function m(c){p.call(this,c)}o("../utils").inherits(m,p),m.prototype.byteAt=function(c){return this.data.charCodeAt(this.zero+c)},m.prototype.lastIndexOfSignature=function(c){return this.data.lastIndexOf(c)-this.zero},m.prototype.readAndCheckSignature=function(c){return c===this.readData(4)},m.prototype.readData=function(c){this.checkOffset(c);var h=this.data.slice(this.zero+this.index,this.zero+this.index+c);return this.index+=c,h},O.exports=m},{"../utils":32,"./DataReader":18}],21:[function(o,O,k){var p=o("./ArrayReader");function m(c){p.call(this,c)}o("../utils").inherits(m,p),m.prototype.readData=function(c){if(this.checkOffset(c),c===0)return new Uint8Array(0);var h=this.data.subarray(this.zero+this.index,this.zero+this.index+c);return this.index+=c,h},O.exports=m},{"../utils":32,"./ArrayReader":17}],22:[function(o,O,k){var p=o("../utils"),m=o("../support"),c=o("./ArrayReader"),h=o("./StringReader"),j=o("./NodeBufferReader"),I=o("./Uint8ArrayReader");O.exports=function(C){var v=p.getTypeOf(C);return p.checkSupport(v),v!=="string"||m.uint8array?v==="nodebuffer"?new j(C):m.uint8array?new I(p.transformTo("uint8array",C)):new c(p.transformTo("array",C)):new h(C)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(o,O,k){k.LOCAL_FILE_HEADER="PK",k.CENTRAL_FILE_HEADER="PK",k.CENTRAL_DIRECTORY_END="PK",k.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",k.ZIP64_CENTRAL_DIRECTORY_END="PK",k.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(o,O,k){var p=o("./GenericWorker"),m=o("../utils");function c(h){p.call(this,"ConvertWorker to "+h),this.destType=h}m.inherits(c,p),c.prototype.processChunk=function(h){this.push({data:m.transformTo(this.destType,h.data),meta:h.meta})},O.exports=c},{"../utils":32,"./GenericWorker":28}],25:[function(o,O,k){var p=o("./GenericWorker"),m=o("../crc32");function c(){p.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}o("../utils").inherits(c,p),c.prototype.processChunk=function(h){this.streamInfo.crc32=m(h.data,this.streamInfo.crc32||0),this.push(h)},O.exports=c},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(o,O,k){var p=o("../utils"),m=o("./GenericWorker");function c(h){m.call(this,"DataLengthProbe for "+h),this.propName=h,this.withStreamInfo(h,0)}p.inherits(c,m),c.prototype.processChunk=function(h){if(h){var j=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=j+h.data.length}m.prototype.processChunk.call(this,h)},O.exports=c},{"../utils":32,"./GenericWorker":28}],27:[function(o,O,k){var p=o("../utils"),m=o("./GenericWorker");function c(h){m.call(this,"DataWorker");var j=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,h.then(function(I){j.dataIsReady=!0,j.data=I,j.max=I&&I.length||0,j.type=p.getTypeOf(I),j.isPaused||j._tickAndRepeat()},function(I){j.error(I)})}p.inherits(c,m),c.prototype.cleanUp=function(){m.prototype.cleanUp.call(this),this.data=null},c.prototype.resume=function(){return!!m.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,p.delay(this._tickAndRepeat,[],this)),!0)},c.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(p.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},c.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var h=null,j=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":h=this.data.substring(this.index,j);break;case"uint8array":h=this.data.subarray(this.index,j);break;case"array":case"nodebuffer":h=this.data.slice(this.index,j)}return this.index=j,this.push({data:h,meta:{percent:this.max?this.index/this.max*100:0}})},O.exports=c},{"../utils":32,"./GenericWorker":28}],28:[function(o,O,k){function p(m){this.name=m||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}p.prototype={push:function(m){this.emit("data",m)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(m){this.emit("error",m)}return!0},error:function(m){return!this.isFinished&&(this.isPaused?this.generatedError=m:(this.isFinished=!0,this.emit("error",m),this.previous&&this.previous.error(m),this.cleanUp()),!0)},on:function(m,c){return this._listeners[m].push(c),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(m,c){if(this._listeners[m])for(var h=0;h<this._listeners[m].length;h++)this._listeners[m][h].call(this,c)},pipe:function(m){return m.registerPrevious(this)},registerPrevious:function(m){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=m.streamInfo,this.mergeStreamInfo(),this.previous=m;var c=this;return m.on("data",function(h){c.processChunk(h)}),m.on("end",function(){c.end()}),m.on("error",function(h){c.error(h)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var m=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),m=!0),this.previous&&this.previous.resume(),!m},flush:function(){},processChunk:function(m){this.push(m)},withStreamInfo:function(m,c){return this.extraStreamInfo[m]=c,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var m in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,m)&&(this.streamInfo[m]=this.extraStreamInfo[m])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var m="Worker "+this.name;return this.previous?this.previous+" -> "+m:m}},O.exports=p},{}],29:[function(o,O,k){var p=o("../utils"),m=o("./ConvertWorker"),c=o("./GenericWorker"),h=o("../base64"),j=o("../support"),I=o("../external"),C=null;if(j.nodestream)try{C=o("../nodejs/NodejsStreamOutputAdapter")}catch{}function v(_,f){return new I.Promise(function(y,x){var S=[],A=_._internalType,U=_._outputType,D=_._mimeType;_.on("data",function(Y,G){S.push(Y),f&&f(G)}).on("error",function(Y){S=[],x(Y)}).on("end",function(){try{var Y=(function(G,te,F){switch(G){case"blob":return p.newBlob(p.transformTo("arraybuffer",te),F);case"base64":return h.encode(te);default:return p.transformTo(G,te)}})(U,(function(G,te){var F,J=0,ye=null,b=0;for(F=0;F<te.length;F++)b+=te[F].length;switch(G){case"string":return te.join("");case"array":return Array.prototype.concat.apply([],te);case"uint8array":for(ye=new Uint8Array(b),F=0;F<te.length;F++)ye.set(te[F],J),J+=te[F].length;return ye;case"nodebuffer":return Buffer.concat(te);default:throw new Error("concat : unsupported type '"+G+"'")}})(A,S),D);y(Y)}catch(G){x(G)}S=[]}).resume()})}function g(_,f,y){var x=f;switch(f){case"blob":case"arraybuffer":x="uint8array";break;case"base64":x="string"}try{this._internalType=x,this._outputType=f,this._mimeType=y,p.checkSupport(x),this._worker=_.pipe(new m(x)),_.lock()}catch(S){this._worker=new c("error"),this._worker.error(S)}}g.prototype={accumulate:function(_){return v(this,_)},on:function(_,f){var y=this;return _==="data"?this._worker.on(_,function(x){f.call(y,x.data,x.meta)}):this._worker.on(_,function(){p.delay(f,arguments,y)}),this},resume:function(){return p.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(_){if(p.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new C(this,{objectMode:this._outputType!=="nodebuffer"},_)}},O.exports=g},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(o,O,k){if(k.base64=!0,k.array=!0,k.string=!0,k.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",k.nodebuffer=typeof Buffer<"u",k.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")k.blob=!1;else{var p=new ArrayBuffer(0);try{k.blob=new Blob([p],{type:"application/zip"}).size===0}catch{try{var m=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);m.append(p),k.blob=m.getBlob("application/zip").size===0}catch{k.blob=!1}}}try{k.nodestream=!!o("readable-stream").Readable}catch{k.nodestream=!1}},{"readable-stream":16}],31:[function(o,O,k){for(var p=o("./utils"),m=o("./support"),c=o("./nodejsUtils"),h=o("./stream/GenericWorker"),j=new Array(256),I=0;I<256;I++)j[I]=252<=I?6:248<=I?5:240<=I?4:224<=I?3:192<=I?2:1;j[254]=j[254]=1;function C(){h.call(this,"utf-8 decode"),this.leftOver=null}function v(){h.call(this,"utf-8 encode")}k.utf8encode=function(g){return m.nodebuffer?c.newBufferFrom(g,"utf-8"):(function(_){var f,y,x,S,A,U=_.length,D=0;for(S=0;S<U;S++)(64512&(y=_.charCodeAt(S)))==55296&&S+1<U&&(64512&(x=_.charCodeAt(S+1)))==56320&&(y=65536+(y-55296<<10)+(x-56320),S++),D+=y<128?1:y<2048?2:y<65536?3:4;for(f=m.uint8array?new Uint8Array(D):new Array(D),S=A=0;A<D;S++)(64512&(y=_.charCodeAt(S)))==55296&&S+1<U&&(64512&(x=_.charCodeAt(S+1)))==56320&&(y=65536+(y-55296<<10)+(x-56320),S++),y<128?f[A++]=y:(y<2048?f[A++]=192|y>>>6:(y<65536?f[A++]=224|y>>>12:(f[A++]=240|y>>>18,f[A++]=128|y>>>12&63),f[A++]=128|y>>>6&63),f[A++]=128|63&y);return f})(g)},k.utf8decode=function(g){return m.nodebuffer?p.transformTo("nodebuffer",g).toString("utf-8"):(function(_){var f,y,x,S,A=_.length,U=new Array(2*A);for(f=y=0;f<A;)if((x=_[f++])<128)U[y++]=x;else if(4<(S=j[x]))U[y++]=65533,f+=S-1;else{for(x&=S===2?31:S===3?15:7;1<S&&f<A;)x=x<<6|63&_[f++],S--;1<S?U[y++]=65533:x<65536?U[y++]=x:(x-=65536,U[y++]=55296|x>>10&1023,U[y++]=56320|1023&x)}return U.length!==y&&(U.subarray?U=U.subarray(0,y):U.length=y),p.applyFromCharCode(U)})(g=p.transformTo(m.uint8array?"uint8array":"array",g))},p.inherits(C,h),C.prototype.processChunk=function(g){var _=p.transformTo(m.uint8array?"uint8array":"array",g.data);if(this.leftOver&&this.leftOver.length){if(m.uint8array){var f=_;(_=new Uint8Array(f.length+this.leftOver.length)).set(this.leftOver,0),_.set(f,this.leftOver.length)}else _=this.leftOver.concat(_);this.leftOver=null}var y=(function(S,A){var U;for((A=A||S.length)>S.length&&(A=S.length),U=A-1;0<=U&&(192&S[U])==128;)U--;return U<0||U===0?A:U+j[S[U]]>A?U:A})(_),x=_;y!==_.length&&(m.uint8array?(x=_.subarray(0,y),this.leftOver=_.subarray(y,_.length)):(x=_.slice(0,y),this.leftOver=_.slice(y,_.length))),this.push({data:k.utf8decode(x),meta:g.meta})},C.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:k.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},k.Utf8DecodeWorker=C,p.inherits(v,h),v.prototype.processChunk=function(g){this.push({data:k.utf8encode(g.data),meta:g.meta})},k.Utf8EncodeWorker=v},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(o,O,k){var p=o("./support"),m=o("./base64"),c=o("./nodejsUtils"),h=o("./external");function j(f){return f}function I(f,y){for(var x=0;x<f.length;++x)y[x]=255&f.charCodeAt(x);return y}o("setimmediate"),k.newBlob=function(f,y){k.checkSupport("blob");try{return new Blob([f],{type:y})}catch{try{var x=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return x.append(f),x.getBlob(y)}catch{throw new Error("Bug : can't construct the Blob.")}}};var C={stringifyByChunk:function(f,y,x){var S=[],A=0,U=f.length;if(U<=x)return String.fromCharCode.apply(null,f);for(;A<U;)y==="array"||y==="nodebuffer"?S.push(String.fromCharCode.apply(null,f.slice(A,Math.min(A+x,U)))):S.push(String.fromCharCode.apply(null,f.subarray(A,Math.min(A+x,U)))),A+=x;return S.join("")},stringifyByChar:function(f){for(var y="",x=0;x<f.length;x++)y+=String.fromCharCode(f[x]);return y},applyCanBeUsed:{uint8array:(function(){try{return p.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return p.nodebuffer&&String.fromCharCode.apply(null,c.allocBuffer(1)).length===1}catch{return!1}})()}};function v(f){var y=65536,x=k.getTypeOf(f),S=!0;if(x==="uint8array"?S=C.applyCanBeUsed.uint8array:x==="nodebuffer"&&(S=C.applyCanBeUsed.nodebuffer),S)for(;1<y;)try{return C.stringifyByChunk(f,x,y)}catch{y=Math.floor(y/2)}return C.stringifyByChar(f)}function g(f,y){for(var x=0;x<f.length;x++)y[x]=f[x];return y}k.applyFromCharCode=v;var _={};_.string={string:j,array:function(f){return I(f,new Array(f.length))},arraybuffer:function(f){return _.string.uint8array(f).buffer},uint8array:function(f){return I(f,new Uint8Array(f.length))},nodebuffer:function(f){return I(f,c.allocBuffer(f.length))}},_.array={string:v,array:j,arraybuffer:function(f){return new Uint8Array(f).buffer},uint8array:function(f){return new Uint8Array(f)},nodebuffer:function(f){return c.newBufferFrom(f)}},_.arraybuffer={string:function(f){return v(new Uint8Array(f))},array:function(f){return g(new Uint8Array(f),new Array(f.byteLength))},arraybuffer:j,uint8array:function(f){return new Uint8Array(f)},nodebuffer:function(f){return c.newBufferFrom(new Uint8Array(f))}},_.uint8array={string:v,array:function(f){return g(f,new Array(f.length))},arraybuffer:function(f){return f.buffer},uint8array:j,nodebuffer:function(f){return c.newBufferFrom(f)}},_.nodebuffer={string:v,array:function(f){return g(f,new Array(f.length))},arraybuffer:function(f){return _.nodebuffer.uint8array(f).buffer},uint8array:function(f){return g(f,new Uint8Array(f.length))},nodebuffer:j},k.transformTo=function(f,y){if(y=y||"",!f)return y;k.checkSupport(f);var x=k.getTypeOf(y);return _[x][f](y)},k.resolve=function(f){for(var y=f.split("/"),x=[],S=0;S<y.length;S++){var A=y[S];A==="."||A===""&&S!==0&&S!==y.length-1||(A===".."?x.pop():x.push(A))}return x.join("/")},k.getTypeOf=function(f){return typeof f=="string"?"string":Object.prototype.toString.call(f)==="[object Array]"?"array":p.nodebuffer&&c.isBuffer(f)?"nodebuffer":p.uint8array&&f instanceof Uint8Array?"uint8array":p.arraybuffer&&f instanceof ArrayBuffer?"arraybuffer":void 0},k.checkSupport=function(f){if(!p[f.toLowerCase()])throw new Error(f+" is not supported by this platform")},k.MAX_VALUE_16BITS=65535,k.MAX_VALUE_32BITS=-1,k.pretty=function(f){var y,x,S="";for(x=0;x<(f||"").length;x++)S+="\\x"+((y=f.charCodeAt(x))<16?"0":"")+y.toString(16).toUpperCase();return S},k.delay=function(f,y,x){setImmediate(function(){f.apply(x||null,y||[])})},k.inherits=function(f,y){function x(){}x.prototype=y.prototype,f.prototype=new x},k.extend=function(){var f,y,x={};for(f=0;f<arguments.length;f++)for(y in arguments[f])Object.prototype.hasOwnProperty.call(arguments[f],y)&&x[y]===void 0&&(x[y]=arguments[f][y]);return x},k.prepareContent=function(f,y,x,S,A){return h.Promise.resolve(y).then(function(U){return p.blob&&(U instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(U))!==-1)&&typeof FileReader<"u"?new h.Promise(function(D,Y){var G=new FileReader;G.onload=function(te){D(te.target.result)},G.onerror=function(te){Y(te.target.error)},G.readAsArrayBuffer(U)}):U}).then(function(U){var D=k.getTypeOf(U);return D?(D==="arraybuffer"?U=k.transformTo("uint8array",U):D==="string"&&(A?U=m.decode(U):x&&S!==!0&&(U=(function(Y){return I(Y,p.uint8array?new Uint8Array(Y.length):new Array(Y.length))})(U))),U):h.Promise.reject(new Error("Can't read the data of '"+f+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(o,O,k){var p=o("./reader/readerFor"),m=o("./utils"),c=o("./signature"),h=o("./zipEntry"),j=o("./support");function I(C){this.files=[],this.loadOptions=C}I.prototype={checkSignature:function(C){if(!this.reader.readAndCheckSignature(C)){this.reader.index-=4;var v=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+m.pretty(v)+", expected "+m.pretty(C)+")")}},isSignature:function(C,v){var g=this.reader.index;this.reader.setIndex(C);var _=this.reader.readString(4)===v;return this.reader.setIndex(g),_},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var C=this.reader.readData(this.zipCommentLength),v=j.uint8array?"uint8array":"array",g=m.transformTo(v,C);this.zipComment=this.loadOptions.decodeFileName(g)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var C,v,g,_=this.zip64EndOfCentralSize-44;0<_;)C=this.reader.readInt(2),v=this.reader.readInt(4),g=this.reader.readData(v),this.zip64ExtensibleData[C]={id:C,length:v,value:g}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var C,v;for(C=0;C<this.files.length;C++)v=this.files[C],this.reader.setIndex(v.localHeaderOffset),this.checkSignature(c.LOCAL_FILE_HEADER),v.readLocalPart(this.reader),v.handleUTF8(),v.processAttributes()},readCentralDir:function(){var C;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(c.CENTRAL_FILE_HEADER);)(C=new h({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(C);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var C=this.reader.lastIndexOfSignature(c.CENTRAL_DIRECTORY_END);if(C<0)throw this.isSignature(0,c.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(C);var v=C;if(this.checkSignature(c.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===m.MAX_VALUE_16BITS||this.diskWithCentralDirStart===m.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===m.MAX_VALUE_16BITS||this.centralDirRecords===m.MAX_VALUE_16BITS||this.centralDirSize===m.MAX_VALUE_32BITS||this.centralDirOffset===m.MAX_VALUE_32BITS){if(this.zip64=!0,(C=this.reader.lastIndexOfSignature(c.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(C),this.checkSignature(c.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,c.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(c.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(c.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var g=this.centralDirOffset+this.centralDirSize;this.zip64&&(g+=20,g+=12+this.zip64EndOfCentralSize);var _=v-g;if(0<_)this.isSignature(v,c.CENTRAL_FILE_HEADER)||(this.reader.zero=_);else if(_<0)throw new Error("Corrupted zip: missing "+Math.abs(_)+" bytes.")},prepareReader:function(C){this.reader=p(C)},load:function(C){this.prepareReader(C),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},O.exports=I},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(o,O,k){var p=o("./reader/readerFor"),m=o("./utils"),c=o("./compressedObject"),h=o("./crc32"),j=o("./utf8"),I=o("./compressions"),C=o("./support");function v(g,_){this.options=g,this.loadOptions=_}v.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(g){var _,f;if(g.skip(22),this.fileNameLength=g.readInt(2),f=g.readInt(2),this.fileName=g.readData(this.fileNameLength),g.skip(f),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((_=(function(y){for(var x in I)if(Object.prototype.hasOwnProperty.call(I,x)&&I[x].magic===y)return I[x];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+m.pretty(this.compressionMethod)+" unknown (inner file : "+m.transformTo("string",this.fileName)+")");this.decompressed=new c(this.compressedSize,this.uncompressedSize,this.crc32,_,g.readData(this.compressedSize))},readCentralPart:function(g){this.versionMadeBy=g.readInt(2),g.skip(2),this.bitFlag=g.readInt(2),this.compressionMethod=g.readString(2),this.date=g.readDate(),this.crc32=g.readInt(4),this.compressedSize=g.readInt(4),this.uncompressedSize=g.readInt(4);var _=g.readInt(2);if(this.extraFieldsLength=g.readInt(2),this.fileCommentLength=g.readInt(2),this.diskNumberStart=g.readInt(2),this.internalFileAttributes=g.readInt(2),this.externalFileAttributes=g.readInt(4),this.localHeaderOffset=g.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");g.skip(_),this.readExtraFields(g),this.parseZIP64ExtraField(g),this.fileComment=g.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var g=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),g==0&&(this.dosPermissions=63&this.externalFileAttributes),g==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var g=p(this.extraFields[1].value);this.uncompressedSize===m.MAX_VALUE_32BITS&&(this.uncompressedSize=g.readInt(8)),this.compressedSize===m.MAX_VALUE_32BITS&&(this.compressedSize=g.readInt(8)),this.localHeaderOffset===m.MAX_VALUE_32BITS&&(this.localHeaderOffset=g.readInt(8)),this.diskNumberStart===m.MAX_VALUE_32BITS&&(this.diskNumberStart=g.readInt(4))}},readExtraFields:function(g){var _,f,y,x=g.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});g.index+4<x;)_=g.readInt(2),f=g.readInt(2),y=g.readData(f),this.extraFields[_]={id:_,length:f,value:y};g.setIndex(x)},handleUTF8:function(){var g=C.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=j.utf8decode(this.fileName),this.fileCommentStr=j.utf8decode(this.fileComment);else{var _=this.findExtraFieldUnicodePath();if(_!==null)this.fileNameStr=_;else{var f=m.transformTo(g,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(f)}var y=this.findExtraFieldUnicodeComment();if(y!==null)this.fileCommentStr=y;else{var x=m.transformTo(g,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(x)}}},findExtraFieldUnicodePath:function(){var g=this.extraFields[28789];if(g){var _=p(g.value);return _.readInt(1)!==1||h(this.fileName)!==_.readInt(4)?null:j.utf8decode(_.readData(g.length-5))}return null},findExtraFieldUnicodeComment:function(){var g=this.extraFields[25461];if(g){var _=p(g.value);return _.readInt(1)!==1||h(this.fileComment)!==_.readInt(4)?null:j.utf8decode(_.readData(g.length-5))}return null}},O.exports=v},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(o,O,k){function p(_,f,y){this.name=_,this.dir=y.dir,this.date=y.date,this.comment=y.comment,this.unixPermissions=y.unixPermissions,this.dosPermissions=y.dosPermissions,this._data=f,this._dataBinary=y.binary,this.options={compression:y.compression,compressionOptions:y.compressionOptions}}var m=o("./stream/StreamHelper"),c=o("./stream/DataWorker"),h=o("./utf8"),j=o("./compressedObject"),I=o("./stream/GenericWorker");p.prototype={internalStream:function(_){var f=null,y="string";try{if(!_)throw new Error("No output type specified.");var x=(y=_.toLowerCase())==="string"||y==="text";y!=="binarystring"&&y!=="text"||(y="string"),f=this._decompressWorker();var S=!this._dataBinary;S&&!x&&(f=f.pipe(new h.Utf8EncodeWorker)),!S&&x&&(f=f.pipe(new h.Utf8DecodeWorker))}catch(A){(f=new I("error")).error(A)}return new m(f,y,"")},async:function(_,f){return this.internalStream(_).accumulate(f)},nodeStream:function(_,f){return this.internalStream(_||"nodebuffer").toNodejsStream(f)},_compressWorker:function(_,f){if(this._data instanceof j&&this._data.compression.magic===_.magic)return this._data.getCompressedWorker();var y=this._decompressWorker();return this._dataBinary||(y=y.pipe(new h.Utf8EncodeWorker)),j.createWorkerFrom(y,_,f)},_decompressWorker:function(){return this._data instanceof j?this._data.getContentWorker():this._data instanceof I?this._data:new c(this._data)}};for(var C=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],v=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},g=0;g<C.length;g++)p.prototype[C[g]]=v;O.exports=p},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(o,O,k){(function(p){var m,c,h=p.MutationObserver||p.WebKitMutationObserver;if(h){var j=0,I=new h(_),C=p.document.createTextNode("");I.observe(C,{characterData:!0}),m=function(){C.data=j=++j%2}}else if(p.setImmediate||p.MessageChannel===void 0)m="document"in p&&"onreadystatechange"in p.document.createElement("script")?function(){var f=p.document.createElement("script");f.onreadystatechange=function(){_(),f.onreadystatechange=null,f.parentNode.removeChild(f),f=null},p.document.documentElement.appendChild(f)}:function(){setTimeout(_,0)};else{var v=new p.MessageChannel;v.port1.onmessage=_,m=function(){v.port2.postMessage(0)}}var g=[];function _(){var f,y;c=!0;for(var x=g.length;x;){for(y=g,g=[],f=-1;++f<x;)y[f]();x=g.length}c=!1}O.exports=function(f){g.push(f)!==1||c||m()}}).call(this,typeof ua<"u"?ua:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(o,O,k){var p=o("immediate");function m(){}var c={},h=["REJECTED"],j=["FULFILLED"],I=["PENDING"];function C(x){if(typeof x!="function")throw new TypeError("resolver must be a function");this.state=I,this.queue=[],this.outcome=void 0,x!==m&&f(this,x)}function v(x,S,A){this.promise=x,typeof S=="function"&&(this.onFulfilled=S,this.callFulfilled=this.otherCallFulfilled),typeof A=="function"&&(this.onRejected=A,this.callRejected=this.otherCallRejected)}function g(x,S,A){p(function(){var U;try{U=S(A)}catch(D){return c.reject(x,D)}U===x?c.reject(x,new TypeError("Cannot resolve promise with itself")):c.resolve(x,U)})}function _(x){var S=x&&x.then;if(x&&(typeof x=="object"||typeof x=="function")&&typeof S=="function")return function(){S.apply(x,arguments)}}function f(x,S){var A=!1;function U(G){A||(A=!0,c.reject(x,G))}function D(G){A||(A=!0,c.resolve(x,G))}var Y=y(function(){S(D,U)});Y.status==="error"&&U(Y.value)}function y(x,S){var A={};try{A.value=x(S),A.status="success"}catch(U){A.status="error",A.value=U}return A}(O.exports=C).prototype.finally=function(x){if(typeof x!="function")return this;var S=this.constructor;return this.then(function(A){return S.resolve(x()).then(function(){return A})},function(A){return S.resolve(x()).then(function(){throw A})})},C.prototype.catch=function(x){return this.then(null,x)},C.prototype.then=function(x,S){if(typeof x!="function"&&this.state===j||typeof S!="function"&&this.state===h)return this;var A=new this.constructor(m);return this.state!==I?g(A,this.state===j?x:S,this.outcome):this.queue.push(new v(A,x,S)),A},v.prototype.callFulfilled=function(x){c.resolve(this.promise,x)},v.prototype.otherCallFulfilled=function(x){g(this.promise,this.onFulfilled,x)},v.prototype.callRejected=function(x){c.reject(this.promise,x)},v.prototype.otherCallRejected=function(x){g(this.promise,this.onRejected,x)},c.resolve=function(x,S){var A=y(_,S);if(A.status==="error")return c.reject(x,A.value);var U=A.value;if(U)f(x,U);else{x.state=j,x.outcome=S;for(var D=-1,Y=x.queue.length;++D<Y;)x.queue[D].callFulfilled(S)}return x},c.reject=function(x,S){x.state=h,x.outcome=S;for(var A=-1,U=x.queue.length;++A<U;)x.queue[A].callRejected(S);return x},C.resolve=function(x){return x instanceof this?x:c.resolve(new this(m),x)},C.reject=function(x){var S=new this(m);return c.reject(S,x)},C.all=function(x){var S=this;if(Object.prototype.toString.call(x)!=="[object Array]")return this.reject(new TypeError("must be an array"));var A=x.length,U=!1;if(!A)return this.resolve([]);for(var D=new Array(A),Y=0,G=-1,te=new this(m);++G<A;)F(x[G],G);return te;function F(J,ye){S.resolve(J).then(function(b){D[ye]=b,++Y!==A||U||(U=!0,c.resolve(te,D))},function(b){U||(U=!0,c.reject(te,b))})}},C.race=function(x){var S=this;if(Object.prototype.toString.call(x)!=="[object Array]")return this.reject(new TypeError("must be an array"));var A=x.length,U=!1;if(!A)return this.resolve([]);for(var D=-1,Y=new this(m);++D<A;)G=x[D],S.resolve(G).then(function(te){U||(U=!0,c.resolve(Y,te))},function(te){U||(U=!0,c.reject(Y,te))});var G;return Y}},{immediate:36}],38:[function(o,O,k){var p={};(0,o("./lib/utils/common").assign)(p,o("./lib/deflate"),o("./lib/inflate"),o("./lib/zlib/constants")),O.exports=p},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(o,O,k){var p=o("./zlib/deflate"),m=o("./utils/common"),c=o("./utils/strings"),h=o("./zlib/messages"),j=o("./zlib/zstream"),I=Object.prototype.toString,C=0,v=-1,g=0,_=8;function f(x){if(!(this instanceof f))return new f(x);this.options=m.assign({level:v,method:_,chunkSize:16384,windowBits:15,memLevel:8,strategy:g,to:""},x||{});var S=this.options;S.raw&&0<S.windowBits?S.windowBits=-S.windowBits:S.gzip&&0<S.windowBits&&S.windowBits<16&&(S.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new j,this.strm.avail_out=0;var A=p.deflateInit2(this.strm,S.level,S.method,S.windowBits,S.memLevel,S.strategy);if(A!==C)throw new Error(h[A]);if(S.header&&p.deflateSetHeader(this.strm,S.header),S.dictionary){var U;if(U=typeof S.dictionary=="string"?c.string2buf(S.dictionary):I.call(S.dictionary)==="[object ArrayBuffer]"?new Uint8Array(S.dictionary):S.dictionary,(A=p.deflateSetDictionary(this.strm,U))!==C)throw new Error(h[A]);this._dict_set=!0}}function y(x,S){var A=new f(S);if(A.push(x,!0),A.err)throw A.msg||h[A.err];return A.result}f.prototype.push=function(x,S){var A,U,D=this.strm,Y=this.options.chunkSize;if(this.ended)return!1;U=S===~~S?S:S===!0?4:0,typeof x=="string"?D.input=c.string2buf(x):I.call(x)==="[object ArrayBuffer]"?D.input=new Uint8Array(x):D.input=x,D.next_in=0,D.avail_in=D.input.length;do{if(D.avail_out===0&&(D.output=new m.Buf8(Y),D.next_out=0,D.avail_out=Y),(A=p.deflate(D,U))!==1&&A!==C)return this.onEnd(A),!(this.ended=!0);D.avail_out!==0&&(D.avail_in!==0||U!==4&&U!==2)||(this.options.to==="string"?this.onData(c.buf2binstring(m.shrinkBuf(D.output,D.next_out))):this.onData(m.shrinkBuf(D.output,D.next_out)))}while((0<D.avail_in||D.avail_out===0)&&A!==1);return U===4?(A=p.deflateEnd(this.strm),this.onEnd(A),this.ended=!0,A===C):U!==2||(this.onEnd(C),!(D.avail_out=0))},f.prototype.onData=function(x){this.chunks.push(x)},f.prototype.onEnd=function(x){x===C&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=m.flattenChunks(this.chunks)),this.chunks=[],this.err=x,this.msg=this.strm.msg},k.Deflate=f,k.deflate=y,k.deflateRaw=function(x,S){return(S=S||{}).raw=!0,y(x,S)},k.gzip=function(x,S){return(S=S||{}).gzip=!0,y(x,S)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(o,O,k){var p=o("./zlib/inflate"),m=o("./utils/common"),c=o("./utils/strings"),h=o("./zlib/constants"),j=o("./zlib/messages"),I=o("./zlib/zstream"),C=o("./zlib/gzheader"),v=Object.prototype.toString;function g(f){if(!(this instanceof g))return new g(f);this.options=m.assign({chunkSize:16384,windowBits:0,to:""},f||{});var y=this.options;y.raw&&0<=y.windowBits&&y.windowBits<16&&(y.windowBits=-y.windowBits,y.windowBits===0&&(y.windowBits=-15)),!(0<=y.windowBits&&y.windowBits<16)||f&&f.windowBits||(y.windowBits+=32),15<y.windowBits&&y.windowBits<48&&(15&y.windowBits)==0&&(y.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new I,this.strm.avail_out=0;var x=p.inflateInit2(this.strm,y.windowBits);if(x!==h.Z_OK)throw new Error(j[x]);this.header=new C,p.inflateGetHeader(this.strm,this.header)}function _(f,y){var x=new g(y);if(x.push(f,!0),x.err)throw x.msg||j[x.err];return x.result}g.prototype.push=function(f,y){var x,S,A,U,D,Y,G=this.strm,te=this.options.chunkSize,F=this.options.dictionary,J=!1;if(this.ended)return!1;S=y===~~y?y:y===!0?h.Z_FINISH:h.Z_NO_FLUSH,typeof f=="string"?G.input=c.binstring2buf(f):v.call(f)==="[object ArrayBuffer]"?G.input=new Uint8Array(f):G.input=f,G.next_in=0,G.avail_in=G.input.length;do{if(G.avail_out===0&&(G.output=new m.Buf8(te),G.next_out=0,G.avail_out=te),(x=p.inflate(G,h.Z_NO_FLUSH))===h.Z_NEED_DICT&&F&&(Y=typeof F=="string"?c.string2buf(F):v.call(F)==="[object ArrayBuffer]"?new Uint8Array(F):F,x=p.inflateSetDictionary(this.strm,Y)),x===h.Z_BUF_ERROR&&J===!0&&(x=h.Z_OK,J=!1),x!==h.Z_STREAM_END&&x!==h.Z_OK)return this.onEnd(x),!(this.ended=!0);G.next_out&&(G.avail_out!==0&&x!==h.Z_STREAM_END&&(G.avail_in!==0||S!==h.Z_FINISH&&S!==h.Z_SYNC_FLUSH)||(this.options.to==="string"?(A=c.utf8border(G.output,G.next_out),U=G.next_out-A,D=c.buf2string(G.output,A),G.next_out=U,G.avail_out=te-U,U&&m.arraySet(G.output,G.output,A,U,0),this.onData(D)):this.onData(m.shrinkBuf(G.output,G.next_out)))),G.avail_in===0&&G.avail_out===0&&(J=!0)}while((0<G.avail_in||G.avail_out===0)&&x!==h.Z_STREAM_END);return x===h.Z_STREAM_END&&(S=h.Z_FINISH),S===h.Z_FINISH?(x=p.inflateEnd(this.strm),this.onEnd(x),this.ended=!0,x===h.Z_OK):S!==h.Z_SYNC_FLUSH||(this.onEnd(h.Z_OK),!(G.avail_out=0))},g.prototype.onData=function(f){this.chunks.push(f)},g.prototype.onEnd=function(f){f===h.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=m.flattenChunks(this.chunks)),this.chunks=[],this.err=f,this.msg=this.strm.msg},k.Inflate=g,k.inflate=_,k.inflateRaw=function(f,y){return(y=y||{}).raw=!0,_(f,y)},k.ungzip=_},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(o,O,k){var p=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";k.assign=function(h){for(var j=Array.prototype.slice.call(arguments,1);j.length;){var I=j.shift();if(I){if(typeof I!="object")throw new TypeError(I+"must be non-object");for(var C in I)I.hasOwnProperty(C)&&(h[C]=I[C])}}return h},k.shrinkBuf=function(h,j){return h.length===j?h:h.subarray?h.subarray(0,j):(h.length=j,h)};var m={arraySet:function(h,j,I,C,v){if(j.subarray&&h.subarray)h.set(j.subarray(I,I+C),v);else for(var g=0;g<C;g++)h[v+g]=j[I+g]},flattenChunks:function(h){var j,I,C,v,g,_;for(j=C=0,I=h.length;j<I;j++)C+=h[j].length;for(_=new Uint8Array(C),j=v=0,I=h.length;j<I;j++)g=h[j],_.set(g,v),v+=g.length;return _}},c={arraySet:function(h,j,I,C,v){for(var g=0;g<C;g++)h[v+g]=j[I+g]},flattenChunks:function(h){return[].concat.apply([],h)}};k.setTyped=function(h){h?(k.Buf8=Uint8Array,k.Buf16=Uint16Array,k.Buf32=Int32Array,k.assign(k,m)):(k.Buf8=Array,k.Buf16=Array,k.Buf32=Array,k.assign(k,c))},k.setTyped(p)},{}],42:[function(o,O,k){var p=o("./common"),m=!0,c=!0;try{String.fromCharCode.apply(null,[0])}catch{m=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{c=!1}for(var h=new p.Buf8(256),j=0;j<256;j++)h[j]=252<=j?6:248<=j?5:240<=j?4:224<=j?3:192<=j?2:1;function I(C,v){if(v<65537&&(C.subarray&&c||!C.subarray&&m))return String.fromCharCode.apply(null,p.shrinkBuf(C,v));for(var g="",_=0;_<v;_++)g+=String.fromCharCode(C[_]);return g}h[254]=h[254]=1,k.string2buf=function(C){var v,g,_,f,y,x=C.length,S=0;for(f=0;f<x;f++)(64512&(g=C.charCodeAt(f)))==55296&&f+1<x&&(64512&(_=C.charCodeAt(f+1)))==56320&&(g=65536+(g-55296<<10)+(_-56320),f++),S+=g<128?1:g<2048?2:g<65536?3:4;for(v=new p.Buf8(S),f=y=0;y<S;f++)(64512&(g=C.charCodeAt(f)))==55296&&f+1<x&&(64512&(_=C.charCodeAt(f+1)))==56320&&(g=65536+(g-55296<<10)+(_-56320),f++),g<128?v[y++]=g:(g<2048?v[y++]=192|g>>>6:(g<65536?v[y++]=224|g>>>12:(v[y++]=240|g>>>18,v[y++]=128|g>>>12&63),v[y++]=128|g>>>6&63),v[y++]=128|63&g);return v},k.buf2binstring=function(C){return I(C,C.length)},k.binstring2buf=function(C){for(var v=new p.Buf8(C.length),g=0,_=v.length;g<_;g++)v[g]=C.charCodeAt(g);return v},k.buf2string=function(C,v){var g,_,f,y,x=v||C.length,S=new Array(2*x);for(g=_=0;g<x;)if((f=C[g++])<128)S[_++]=f;else if(4<(y=h[f]))S[_++]=65533,g+=y-1;else{for(f&=y===2?31:y===3?15:7;1<y&&g<x;)f=f<<6|63&C[g++],y--;1<y?S[_++]=65533:f<65536?S[_++]=f:(f-=65536,S[_++]=55296|f>>10&1023,S[_++]=56320|1023&f)}return I(S,_)},k.utf8border=function(C,v){var g;for((v=v||C.length)>C.length&&(v=C.length),g=v-1;0<=g&&(192&C[g])==128;)g--;return g<0||g===0?v:g+h[C[g]]>v?g:v}},{"./common":41}],43:[function(o,O,k){O.exports=function(p,m,c,h){for(var j=65535&p|0,I=p>>>16&65535|0,C=0;c!==0;){for(c-=C=2e3<c?2e3:c;I=I+(j=j+m[h++]|0)|0,--C;);j%=65521,I%=65521}return j|I<<16|0}},{}],44:[function(o,O,k){O.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(o,O,k){var p=(function(){for(var m,c=[],h=0;h<256;h++){m=h;for(var j=0;j<8;j++)m=1&m?3988292384^m>>>1:m>>>1;c[h]=m}return c})();O.exports=function(m,c,h,j){var I=p,C=j+h;m^=-1;for(var v=j;v<C;v++)m=m>>>8^I[255&(m^c[v])];return-1^m}},{}],46:[function(o,O,k){var p,m=o("../utils/common"),c=o("./trees"),h=o("./adler32"),j=o("./crc32"),I=o("./messages"),C=0,v=4,g=0,_=-2,f=-1,y=4,x=2,S=8,A=9,U=286,D=30,Y=19,G=2*U+1,te=15,F=3,J=258,ye=J+F+1,b=42,B=113,l=1,q=2,we=3,ee=4;function re(i,X){return i.msg=I[X],X}function Q(i){return(i<<1)-(4<i?9:0)}function se(i){for(var X=i.length;0<=--X;)i[X]=0}function w(i){var X=i.state,H=X.pending;H>i.avail_out&&(H=i.avail_out),H!==0&&(m.arraySet(i.output,X.pending_buf,X.pending_out,H,i.next_out),i.next_out+=H,X.pending_out+=H,i.total_out+=H,i.avail_out-=H,X.pending-=H,X.pending===0&&(X.pending_out=0))}function R(i,X){c._tr_flush_block(i,0<=i.block_start?i.block_start:-1,i.strstart-i.block_start,X),i.block_start=i.strstart,w(i.strm)}function pe(i,X){i.pending_buf[i.pending++]=X}function ie(i,X){i.pending_buf[i.pending++]=X>>>8&255,i.pending_buf[i.pending++]=255&X}function ae(i,X){var H,T,N=i.max_chain_length,M=i.strstart,ne=i.prev_length,oe=i.nice_match,K=i.strstart>i.w_size-ye?i.strstart-(i.w_size-ye):0,he=i.window,Se=i.w_mask,xe=i.prev,je=i.strstart+J,Be=he[M+ne-1],Oe=he[M+ne];i.prev_length>=i.good_match&&(N>>=2),oe>i.lookahead&&(oe=i.lookahead);do if(he[(H=X)+ne]===Oe&&he[H+ne-1]===Be&&he[H]===he[M]&&he[++H]===he[M+1]){M+=2,H++;do;while(he[++M]===he[++H]&&he[++M]===he[++H]&&he[++M]===he[++H]&&he[++M]===he[++H]&&he[++M]===he[++H]&&he[++M]===he[++H]&&he[++M]===he[++H]&&he[++M]===he[++H]&&M<je);if(T=J-(je-M),M=je-J,ne<T){if(i.match_start=X,oe<=(ne=T))break;Be=he[M+ne-1],Oe=he[M+ne]}}while((X=xe[X&Se])>K&&--N!=0);return ne<=i.lookahead?ne:i.lookahead}function Te(i){var X,H,T,N,M,ne,oe,K,he,Se,xe=i.w_size;do{if(N=i.window_size-i.lookahead-i.strstart,i.strstart>=xe+(xe-ye)){for(m.arraySet(i.window,i.window,xe,xe,0),i.match_start-=xe,i.strstart-=xe,i.block_start-=xe,X=H=i.hash_size;T=i.head[--X],i.head[X]=xe<=T?T-xe:0,--H;);for(X=H=xe;T=i.prev[--X],i.prev[X]=xe<=T?T-xe:0,--H;);N+=xe}if(i.strm.avail_in===0)break;if(ne=i.strm,oe=i.window,K=i.strstart+i.lookahead,he=N,Se=void 0,Se=ne.avail_in,he<Se&&(Se=he),H=Se===0?0:(ne.avail_in-=Se,m.arraySet(oe,ne.input,ne.next_in,Se,K),ne.state.wrap===1?ne.adler=h(ne.adler,oe,Se,K):ne.state.wrap===2&&(ne.adler=j(ne.adler,oe,Se,K)),ne.next_in+=Se,ne.total_in+=Se,Se),i.lookahead+=H,i.lookahead+i.insert>=F)for(M=i.strstart-i.insert,i.ins_h=i.window[M],i.ins_h=(i.ins_h<<i.hash_shift^i.window[M+1])&i.hash_mask;i.insert&&(i.ins_h=(i.ins_h<<i.hash_shift^i.window[M+F-1])&i.hash_mask,i.prev[M&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=M,M++,i.insert--,!(i.lookahead+i.insert<F)););}while(i.lookahead<ye&&i.strm.avail_in!==0)}function ce(i,X){for(var H,T;;){if(i.lookahead<ye){if(Te(i),i.lookahead<ye&&X===C)return l;if(i.lookahead===0)break}if(H=0,i.lookahead>=F&&(i.ins_h=(i.ins_h<<i.hash_shift^i.window[i.strstart+F-1])&i.hash_mask,H=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart),H!==0&&i.strstart-H<=i.w_size-ye&&(i.match_length=ae(i,H)),i.match_length>=F)if(T=c._tr_tally(i,i.strstart-i.match_start,i.match_length-F),i.lookahead-=i.match_length,i.match_length<=i.max_lazy_match&&i.lookahead>=F){for(i.match_length--;i.strstart++,i.ins_h=(i.ins_h<<i.hash_shift^i.window[i.strstart+F-1])&i.hash_mask,H=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart,--i.match_length!=0;);i.strstart++}else i.strstart+=i.match_length,i.match_length=0,i.ins_h=i.window[i.strstart],i.ins_h=(i.ins_h<<i.hash_shift^i.window[i.strstart+1])&i.hash_mask;else T=c._tr_tally(i,0,i.window[i.strstart]),i.lookahead--,i.strstart++;if(T&&(R(i,!1),i.strm.avail_out===0))return l}return i.insert=i.strstart<F-1?i.strstart:F-1,X===v?(R(i,!0),i.strm.avail_out===0?we:ee):i.last_lit&&(R(i,!1),i.strm.avail_out===0)?l:q}function le(i,X){for(var H,T,N;;){if(i.lookahead<ye){if(Te(i),i.lookahead<ye&&X===C)return l;if(i.lookahead===0)break}if(H=0,i.lookahead>=F&&(i.ins_h=(i.ins_h<<i.hash_shift^i.window[i.strstart+F-1])&i.hash_mask,H=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart),i.prev_length=i.match_length,i.prev_match=i.match_start,i.match_length=F-1,H!==0&&i.prev_length<i.max_lazy_match&&i.strstart-H<=i.w_size-ye&&(i.match_length=ae(i,H),i.match_length<=5&&(i.strategy===1||i.match_length===F&&4096<i.strstart-i.match_start)&&(i.match_length=F-1)),i.prev_length>=F&&i.match_length<=i.prev_length){for(N=i.strstart+i.lookahead-F,T=c._tr_tally(i,i.strstart-1-i.prev_match,i.prev_length-F),i.lookahead-=i.prev_length-1,i.prev_length-=2;++i.strstart<=N&&(i.ins_h=(i.ins_h<<i.hash_shift^i.window[i.strstart+F-1])&i.hash_mask,H=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart),--i.prev_length!=0;);if(i.match_available=0,i.match_length=F-1,i.strstart++,T&&(R(i,!1),i.strm.avail_out===0))return l}else if(i.match_available){if((T=c._tr_tally(i,0,i.window[i.strstart-1]))&&R(i,!1),i.strstart++,i.lookahead--,i.strm.avail_out===0)return l}else i.match_available=1,i.strstart++,i.lookahead--}return i.match_available&&(T=c._tr_tally(i,0,i.window[i.strstart-1]),i.match_available=0),i.insert=i.strstart<F-1?i.strstart:F-1,X===v?(R(i,!0),i.strm.avail_out===0?we:ee):i.last_lit&&(R(i,!1),i.strm.avail_out===0)?l:q}function me(i,X,H,T,N){this.good_length=i,this.max_lazy=X,this.nice_length=H,this.max_chain=T,this.func=N}function ke(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=S,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new m.Buf16(2*G),this.dyn_dtree=new m.Buf16(2*(2*D+1)),this.bl_tree=new m.Buf16(2*(2*Y+1)),se(this.dyn_ltree),se(this.dyn_dtree),se(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new m.Buf16(te+1),this.heap=new m.Buf16(2*U+1),se(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new m.Buf16(2*U+1),se(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function ze(i){var X;return i&&i.state?(i.total_in=i.total_out=0,i.data_type=x,(X=i.state).pending=0,X.pending_out=0,X.wrap<0&&(X.wrap=-X.wrap),X.status=X.wrap?b:B,i.adler=X.wrap===2?0:1,X.last_flush=C,c._tr_init(X),g):re(i,_)}function Me(i){var X=ze(i);return X===g&&(function(H){H.window_size=2*H.w_size,se(H.head),H.max_lazy_match=p[H.level].max_lazy,H.good_match=p[H.level].good_length,H.nice_match=p[H.level].nice_length,H.max_chain_length=p[H.level].max_chain,H.strstart=0,H.block_start=0,H.lookahead=0,H.insert=0,H.match_length=H.prev_length=F-1,H.match_available=0,H.ins_h=0})(i.state),X}function Ue(i,X,H,T,N,M){if(!i)return _;var ne=1;if(X===f&&(X=6),T<0?(ne=0,T=-T):15<T&&(ne=2,T-=16),N<1||A<N||H!==S||T<8||15<T||X<0||9<X||M<0||y<M)return re(i,_);T===8&&(T=9);var oe=new ke;return(i.state=oe).strm=i,oe.wrap=ne,oe.gzhead=null,oe.w_bits=T,oe.w_size=1<<oe.w_bits,oe.w_mask=oe.w_size-1,oe.hash_bits=N+7,oe.hash_size=1<<oe.hash_bits,oe.hash_mask=oe.hash_size-1,oe.hash_shift=~~((oe.hash_bits+F-1)/F),oe.window=new m.Buf8(2*oe.w_size),oe.head=new m.Buf16(oe.hash_size),oe.prev=new m.Buf16(oe.w_size),oe.lit_bufsize=1<<N+6,oe.pending_buf_size=4*oe.lit_bufsize,oe.pending_buf=new m.Buf8(oe.pending_buf_size),oe.d_buf=1*oe.lit_bufsize,oe.l_buf=3*oe.lit_bufsize,oe.level=X,oe.strategy=M,oe.method=H,Me(i)}p=[new me(0,0,0,0,function(i,X){var H=65535;for(H>i.pending_buf_size-5&&(H=i.pending_buf_size-5);;){if(i.lookahead<=1){if(Te(i),i.lookahead===0&&X===C)return l;if(i.lookahead===0)break}i.strstart+=i.lookahead,i.lookahead=0;var T=i.block_start+H;if((i.strstart===0||i.strstart>=T)&&(i.lookahead=i.strstart-T,i.strstart=T,R(i,!1),i.strm.avail_out===0)||i.strstart-i.block_start>=i.w_size-ye&&(R(i,!1),i.strm.avail_out===0))return l}return i.insert=0,X===v?(R(i,!0),i.strm.avail_out===0?we:ee):(i.strstart>i.block_start&&(R(i,!1),i.strm.avail_out),l)}),new me(4,4,8,4,ce),new me(4,5,16,8,ce),new me(4,6,32,32,ce),new me(4,4,16,16,le),new me(8,16,32,32,le),new me(8,16,128,128,le),new me(8,32,128,256,le),new me(32,128,258,1024,le),new me(32,258,258,4096,le)],k.deflateInit=function(i,X){return Ue(i,X,S,15,8,0)},k.deflateInit2=Ue,k.deflateReset=Me,k.deflateResetKeep=ze,k.deflateSetHeader=function(i,X){return i&&i.state?i.state.wrap!==2?_:(i.state.gzhead=X,g):_},k.deflate=function(i,X){var H,T,N,M;if(!i||!i.state||5<X||X<0)return i?re(i,_):_;if(T=i.state,!i.output||!i.input&&i.avail_in!==0||T.status===666&&X!==v)return re(i,i.avail_out===0?-5:_);if(T.strm=i,H=T.last_flush,T.last_flush=X,T.status===b)if(T.wrap===2)i.adler=0,pe(T,31),pe(T,139),pe(T,8),T.gzhead?(pe(T,(T.gzhead.text?1:0)+(T.gzhead.hcrc?2:0)+(T.gzhead.extra?4:0)+(T.gzhead.name?8:0)+(T.gzhead.comment?16:0)),pe(T,255&T.gzhead.time),pe(T,T.gzhead.time>>8&255),pe(T,T.gzhead.time>>16&255),pe(T,T.gzhead.time>>24&255),pe(T,T.level===9?2:2<=T.strategy||T.level<2?4:0),pe(T,255&T.gzhead.os),T.gzhead.extra&&T.gzhead.extra.length&&(pe(T,255&T.gzhead.extra.length),pe(T,T.gzhead.extra.length>>8&255)),T.gzhead.hcrc&&(i.adler=j(i.adler,T.pending_buf,T.pending,0)),T.gzindex=0,T.status=69):(pe(T,0),pe(T,0),pe(T,0),pe(T,0),pe(T,0),pe(T,T.level===9?2:2<=T.strategy||T.level<2?4:0),pe(T,3),T.status=B);else{var ne=S+(T.w_bits-8<<4)<<8;ne|=(2<=T.strategy||T.level<2?0:T.level<6?1:T.level===6?2:3)<<6,T.strstart!==0&&(ne|=32),ne+=31-ne%31,T.status=B,ie(T,ne),T.strstart!==0&&(ie(T,i.adler>>>16),ie(T,65535&i.adler)),i.adler=1}if(T.status===69)if(T.gzhead.extra){for(N=T.pending;T.gzindex<(65535&T.gzhead.extra.length)&&(T.pending!==T.pending_buf_size||(T.gzhead.hcrc&&T.pending>N&&(i.adler=j(i.adler,T.pending_buf,T.pending-N,N)),w(i),N=T.pending,T.pending!==T.pending_buf_size));)pe(T,255&T.gzhead.extra[T.gzindex]),T.gzindex++;T.gzhead.hcrc&&T.pending>N&&(i.adler=j(i.adler,T.pending_buf,T.pending-N,N)),T.gzindex===T.gzhead.extra.length&&(T.gzindex=0,T.status=73)}else T.status=73;if(T.status===73)if(T.gzhead.name){N=T.pending;do{if(T.pending===T.pending_buf_size&&(T.gzhead.hcrc&&T.pending>N&&(i.adler=j(i.adler,T.pending_buf,T.pending-N,N)),w(i),N=T.pending,T.pending===T.pending_buf_size)){M=1;break}M=T.gzindex<T.gzhead.name.length?255&T.gzhead.name.charCodeAt(T.gzindex++):0,pe(T,M)}while(M!==0);T.gzhead.hcrc&&T.pending>N&&(i.adler=j(i.adler,T.pending_buf,T.pending-N,N)),M===0&&(T.gzindex=0,T.status=91)}else T.status=91;if(T.status===91)if(T.gzhead.comment){N=T.pending;do{if(T.pending===T.pending_buf_size&&(T.gzhead.hcrc&&T.pending>N&&(i.adler=j(i.adler,T.pending_buf,T.pending-N,N)),w(i),N=T.pending,T.pending===T.pending_buf_size)){M=1;break}M=T.gzindex<T.gzhead.comment.length?255&T.gzhead.comment.charCodeAt(T.gzindex++):0,pe(T,M)}while(M!==0);T.gzhead.hcrc&&T.pending>N&&(i.adler=j(i.adler,T.pending_buf,T.pending-N,N)),M===0&&(T.status=103)}else T.status=103;if(T.status===103&&(T.gzhead.hcrc?(T.pending+2>T.pending_buf_size&&w(i),T.pending+2<=T.pending_buf_size&&(pe(T,255&i.adler),pe(T,i.adler>>8&255),i.adler=0,T.status=B)):T.status=B),T.pending!==0){if(w(i),i.avail_out===0)return T.last_flush=-1,g}else if(i.avail_in===0&&Q(X)<=Q(H)&&X!==v)return re(i,-5);if(T.status===666&&i.avail_in!==0)return re(i,-5);if(i.avail_in!==0||T.lookahead!==0||X!==C&&T.status!==666){var oe=T.strategy===2?(function(K,he){for(var Se;;){if(K.lookahead===0&&(Te(K),K.lookahead===0)){if(he===C)return l;break}if(K.match_length=0,Se=c._tr_tally(K,0,K.window[K.strstart]),K.lookahead--,K.strstart++,Se&&(R(K,!1),K.strm.avail_out===0))return l}return K.insert=0,he===v?(R(K,!0),K.strm.avail_out===0?we:ee):K.last_lit&&(R(K,!1),K.strm.avail_out===0)?l:q})(T,X):T.strategy===3?(function(K,he){for(var Se,xe,je,Be,Oe=K.window;;){if(K.lookahead<=J){if(Te(K),K.lookahead<=J&&he===C)return l;if(K.lookahead===0)break}if(K.match_length=0,K.lookahead>=F&&0<K.strstart&&(xe=Oe[je=K.strstart-1])===Oe[++je]&&xe===Oe[++je]&&xe===Oe[++je]){Be=K.strstart+J;do;while(xe===Oe[++je]&&xe===Oe[++je]&&xe===Oe[++je]&&xe===Oe[++je]&&xe===Oe[++je]&&xe===Oe[++je]&&xe===Oe[++je]&&xe===Oe[++je]&&je<Be);K.match_length=J-(Be-je),K.match_length>K.lookahead&&(K.match_length=K.lookahead)}if(K.match_length>=F?(Se=c._tr_tally(K,1,K.match_length-F),K.lookahead-=K.match_length,K.strstart+=K.match_length,K.match_length=0):(Se=c._tr_tally(K,0,K.window[K.strstart]),K.lookahead--,K.strstart++),Se&&(R(K,!1),K.strm.avail_out===0))return l}return K.insert=0,he===v?(R(K,!0),K.strm.avail_out===0?we:ee):K.last_lit&&(R(K,!1),K.strm.avail_out===0)?l:q})(T,X):p[T.level].func(T,X);if(oe!==we&&oe!==ee||(T.status=666),oe===l||oe===we)return i.avail_out===0&&(T.last_flush=-1),g;if(oe===q&&(X===1?c._tr_align(T):X!==5&&(c._tr_stored_block(T,0,0,!1),X===3&&(se(T.head),T.lookahead===0&&(T.strstart=0,T.block_start=0,T.insert=0))),w(i),i.avail_out===0))return T.last_flush=-1,g}return X!==v?g:T.wrap<=0?1:(T.wrap===2?(pe(T,255&i.adler),pe(T,i.adler>>8&255),pe(T,i.adler>>16&255),pe(T,i.adler>>24&255),pe(T,255&i.total_in),pe(T,i.total_in>>8&255),pe(T,i.total_in>>16&255),pe(T,i.total_in>>24&255)):(ie(T,i.adler>>>16),ie(T,65535&i.adler)),w(i),0<T.wrap&&(T.wrap=-T.wrap),T.pending!==0?g:1)},k.deflateEnd=function(i){var X;return i&&i.state?(X=i.state.status)!==b&&X!==69&&X!==73&&X!==91&&X!==103&&X!==B&&X!==666?re(i,_):(i.state=null,X===B?re(i,-3):g):_},k.deflateSetDictionary=function(i,X){var H,T,N,M,ne,oe,K,he,Se=X.length;if(!i||!i.state||(M=(H=i.state).wrap)===2||M===1&&H.status!==b||H.lookahead)return _;for(M===1&&(i.adler=h(i.adler,X,Se,0)),H.wrap=0,Se>=H.w_size&&(M===0&&(se(H.head),H.strstart=0,H.block_start=0,H.insert=0),he=new m.Buf8(H.w_size),m.arraySet(he,X,Se-H.w_size,H.w_size,0),X=he,Se=H.w_size),ne=i.avail_in,oe=i.next_in,K=i.input,i.avail_in=Se,i.next_in=0,i.input=X,Te(H);H.lookahead>=F;){for(T=H.strstart,N=H.lookahead-(F-1);H.ins_h=(H.ins_h<<H.hash_shift^H.window[T+F-1])&H.hash_mask,H.prev[T&H.w_mask]=H.head[H.ins_h],H.head[H.ins_h]=T,T++,--N;);H.strstart=T,H.lookahead=F-1,Te(H)}return H.strstart+=H.lookahead,H.block_start=H.strstart,H.insert=H.lookahead,H.lookahead=0,H.match_length=H.prev_length=F-1,H.match_available=0,i.next_in=oe,i.input=K,i.avail_in=ne,H.wrap=M,g},k.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(o,O,k){O.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(o,O,k){O.exports=function(p,m){var c,h,j,I,C,v,g,_,f,y,x,S,A,U,D,Y,G,te,F,J,ye,b,B,l,q;c=p.state,h=p.next_in,l=p.input,j=h+(p.avail_in-5),I=p.next_out,q=p.output,C=I-(m-p.avail_out),v=I+(p.avail_out-257),g=c.dmax,_=c.wsize,f=c.whave,y=c.wnext,x=c.window,S=c.hold,A=c.bits,U=c.lencode,D=c.distcode,Y=(1<<c.lenbits)-1,G=(1<<c.distbits)-1;e:do{A<15&&(S+=l[h++]<<A,A+=8,S+=l[h++]<<A,A+=8),te=U[S&Y];t:for(;;){if(S>>>=F=te>>>24,A-=F,(F=te>>>16&255)===0)q[I++]=65535&te;else{if(!(16&F)){if((64&F)==0){te=U[(65535&te)+(S&(1<<F)-1)];continue t}if(32&F){c.mode=12;break e}p.msg="invalid literal/length code",c.mode=30;break e}J=65535&te,(F&=15)&&(A<F&&(S+=l[h++]<<A,A+=8),J+=S&(1<<F)-1,S>>>=F,A-=F),A<15&&(S+=l[h++]<<A,A+=8,S+=l[h++]<<A,A+=8),te=D[S&G];n:for(;;){if(S>>>=F=te>>>24,A-=F,!(16&(F=te>>>16&255))){if((64&F)==0){te=D[(65535&te)+(S&(1<<F)-1)];continue n}p.msg="invalid distance code",c.mode=30;break e}if(ye=65535&te,A<(F&=15)&&(S+=l[h++]<<A,(A+=8)<F&&(S+=l[h++]<<A,A+=8)),g<(ye+=S&(1<<F)-1)){p.msg="invalid distance too far back",c.mode=30;break e}if(S>>>=F,A-=F,(F=I-C)<ye){if(f<(F=ye-F)&&c.sane){p.msg="invalid distance too far back",c.mode=30;break e}if(B=x,(b=0)===y){if(b+=_-F,F<J){for(J-=F;q[I++]=x[b++],--F;);b=I-ye,B=q}}else if(y<F){if(b+=_+y-F,(F-=y)<J){for(J-=F;q[I++]=x[b++],--F;);if(b=0,y<J){for(J-=F=y;q[I++]=x[b++],--F;);b=I-ye,B=q}}}else if(b+=y-F,F<J){for(J-=F;q[I++]=x[b++],--F;);b=I-ye,B=q}for(;2<J;)q[I++]=B[b++],q[I++]=B[b++],q[I++]=B[b++],J-=3;J&&(q[I++]=B[b++],1<J&&(q[I++]=B[b++]))}else{for(b=I-ye;q[I++]=q[b++],q[I++]=q[b++],q[I++]=q[b++],2<(J-=3););J&&(q[I++]=q[b++],1<J&&(q[I++]=q[b++]))}break}}break}}while(h<j&&I<v);h-=J=A>>3,S&=(1<<(A-=J<<3))-1,p.next_in=h,p.next_out=I,p.avail_in=h<j?j-h+5:5-(h-j),p.avail_out=I<v?v-I+257:257-(I-v),c.hold=S,c.bits=A}},{}],49:[function(o,O,k){var p=o("../utils/common"),m=o("./adler32"),c=o("./crc32"),h=o("./inffast"),j=o("./inftrees"),I=1,C=2,v=0,g=-2,_=1,f=852,y=592;function x(b){return(b>>>24&255)+(b>>>8&65280)+((65280&b)<<8)+((255&b)<<24)}function S(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new p.Buf16(320),this.work=new p.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function A(b){var B;return b&&b.state?(B=b.state,b.total_in=b.total_out=B.total=0,b.msg="",B.wrap&&(b.adler=1&B.wrap),B.mode=_,B.last=0,B.havedict=0,B.dmax=32768,B.head=null,B.hold=0,B.bits=0,B.lencode=B.lendyn=new p.Buf32(f),B.distcode=B.distdyn=new p.Buf32(y),B.sane=1,B.back=-1,v):g}function U(b){var B;return b&&b.state?((B=b.state).wsize=0,B.whave=0,B.wnext=0,A(b)):g}function D(b,B){var l,q;return b&&b.state?(q=b.state,B<0?(l=0,B=-B):(l=1+(B>>4),B<48&&(B&=15)),B&&(B<8||15<B)?g:(q.window!==null&&q.wbits!==B&&(q.window=null),q.wrap=l,q.wbits=B,U(b))):g}function Y(b,B){var l,q;return b?(q=new S,(b.state=q).window=null,(l=D(b,B))!==v&&(b.state=null),l):g}var G,te,F=!0;function J(b){if(F){var B;for(G=new p.Buf32(512),te=new p.Buf32(32),B=0;B<144;)b.lens[B++]=8;for(;B<256;)b.lens[B++]=9;for(;B<280;)b.lens[B++]=7;for(;B<288;)b.lens[B++]=8;for(j(I,b.lens,0,288,G,0,b.work,{bits:9}),B=0;B<32;)b.lens[B++]=5;j(C,b.lens,0,32,te,0,b.work,{bits:5}),F=!1}b.lencode=G,b.lenbits=9,b.distcode=te,b.distbits=5}function ye(b,B,l,q){var we,ee=b.state;return ee.window===null&&(ee.wsize=1<<ee.wbits,ee.wnext=0,ee.whave=0,ee.window=new p.Buf8(ee.wsize)),q>=ee.wsize?(p.arraySet(ee.window,B,l-ee.wsize,ee.wsize,0),ee.wnext=0,ee.whave=ee.wsize):(q<(we=ee.wsize-ee.wnext)&&(we=q),p.arraySet(ee.window,B,l-q,we,ee.wnext),(q-=we)?(p.arraySet(ee.window,B,l-q,q,0),ee.wnext=q,ee.whave=ee.wsize):(ee.wnext+=we,ee.wnext===ee.wsize&&(ee.wnext=0),ee.whave<ee.wsize&&(ee.whave+=we))),0}k.inflateReset=U,k.inflateReset2=D,k.inflateResetKeep=A,k.inflateInit=function(b){return Y(b,15)},k.inflateInit2=Y,k.inflate=function(b,B){var l,q,we,ee,re,Q,se,w,R,pe,ie,ae,Te,ce,le,me,ke,ze,Me,Ue,i,X,H,T,N=0,M=new p.Buf8(4),ne=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!b||!b.state||!b.output||!b.input&&b.avail_in!==0)return g;(l=b.state).mode===12&&(l.mode=13),re=b.next_out,we=b.output,se=b.avail_out,ee=b.next_in,q=b.input,Q=b.avail_in,w=l.hold,R=l.bits,pe=Q,ie=se,X=v;e:for(;;)switch(l.mode){case _:if(l.wrap===0){l.mode=13;break}for(;R<16;){if(Q===0)break e;Q--,w+=q[ee++]<<R,R+=8}if(2&l.wrap&&w===35615){M[l.check=0]=255&w,M[1]=w>>>8&255,l.check=c(l.check,M,2,0),R=w=0,l.mode=2;break}if(l.flags=0,l.head&&(l.head.done=!1),!(1&l.wrap)||(((255&w)<<8)+(w>>8))%31){b.msg="incorrect header check",l.mode=30;break}if((15&w)!=8){b.msg="unknown compression method",l.mode=30;break}if(R-=4,i=8+(15&(w>>>=4)),l.wbits===0)l.wbits=i;else if(i>l.wbits){b.msg="invalid window size",l.mode=30;break}l.dmax=1<<i,b.adler=l.check=1,l.mode=512&w?10:12,R=w=0;break;case 2:for(;R<16;){if(Q===0)break e;Q--,w+=q[ee++]<<R,R+=8}if(l.flags=w,(255&l.flags)!=8){b.msg="unknown compression method",l.mode=30;break}if(57344&l.flags){b.msg="unknown header flags set",l.mode=30;break}l.head&&(l.head.text=w>>8&1),512&l.flags&&(M[0]=255&w,M[1]=w>>>8&255,l.check=c(l.check,M,2,0)),R=w=0,l.mode=3;case 3:for(;R<32;){if(Q===0)break e;Q--,w+=q[ee++]<<R,R+=8}l.head&&(l.head.time=w),512&l.flags&&(M[0]=255&w,M[1]=w>>>8&255,M[2]=w>>>16&255,M[3]=w>>>24&255,l.check=c(l.check,M,4,0)),R=w=0,l.mode=4;case 4:for(;R<16;){if(Q===0)break e;Q--,w+=q[ee++]<<R,R+=8}l.head&&(l.head.xflags=255&w,l.head.os=w>>8),512&l.flags&&(M[0]=255&w,M[1]=w>>>8&255,l.check=c(l.check,M,2,0)),R=w=0,l.mode=5;case 5:if(1024&l.flags){for(;R<16;){if(Q===0)break e;Q--,w+=q[ee++]<<R,R+=8}l.length=w,l.head&&(l.head.extra_len=w),512&l.flags&&(M[0]=255&w,M[1]=w>>>8&255,l.check=c(l.check,M,2,0)),R=w=0}else l.head&&(l.head.extra=null);l.mode=6;case 6:if(1024&l.flags&&(Q<(ae=l.length)&&(ae=Q),ae&&(l.head&&(i=l.head.extra_len-l.length,l.head.extra||(l.head.extra=new Array(l.head.extra_len)),p.arraySet(l.head.extra,q,ee,ae,i)),512&l.flags&&(l.check=c(l.check,q,ae,ee)),Q-=ae,ee+=ae,l.length-=ae),l.length))break e;l.length=0,l.mode=7;case 7:if(2048&l.flags){if(Q===0)break e;for(ae=0;i=q[ee+ae++],l.head&&i&&l.length<65536&&(l.head.name+=String.fromCharCode(i)),i&&ae<Q;);if(512&l.flags&&(l.check=c(l.check,q,ae,ee)),Q-=ae,ee+=ae,i)break e}else l.head&&(l.head.name=null);l.length=0,l.mode=8;case 8:if(4096&l.flags){if(Q===0)break e;for(ae=0;i=q[ee+ae++],l.head&&i&&l.length<65536&&(l.head.comment+=String.fromCharCode(i)),i&&ae<Q;);if(512&l.flags&&(l.check=c(l.check,q,ae,ee)),Q-=ae,ee+=ae,i)break e}else l.head&&(l.head.comment=null);l.mode=9;case 9:if(512&l.flags){for(;R<16;){if(Q===0)break e;Q--,w+=q[ee++]<<R,R+=8}if(w!==(65535&l.check)){b.msg="header crc mismatch",l.mode=30;break}R=w=0}l.head&&(l.head.hcrc=l.flags>>9&1,l.head.done=!0),b.adler=l.check=0,l.mode=12;break;case 10:for(;R<32;){if(Q===0)break e;Q--,w+=q[ee++]<<R,R+=8}b.adler=l.check=x(w),R=w=0,l.mode=11;case 11:if(l.havedict===0)return b.next_out=re,b.avail_out=se,b.next_in=ee,b.avail_in=Q,l.hold=w,l.bits=R,2;b.adler=l.check=1,l.mode=12;case 12:if(B===5||B===6)break e;case 13:if(l.last){w>>>=7&R,R-=7&R,l.mode=27;break}for(;R<3;){if(Q===0)break e;Q--,w+=q[ee++]<<R,R+=8}switch(l.last=1&w,R-=1,3&(w>>>=1)){case 0:l.mode=14;break;case 1:if(J(l),l.mode=20,B!==6)break;w>>>=2,R-=2;break e;case 2:l.mode=17;break;case 3:b.msg="invalid block type",l.mode=30}w>>>=2,R-=2;break;case 14:for(w>>>=7&R,R-=7&R;R<32;){if(Q===0)break e;Q--,w+=q[ee++]<<R,R+=8}if((65535&w)!=(w>>>16^65535)){b.msg="invalid stored block lengths",l.mode=30;break}if(l.length=65535&w,R=w=0,l.mode=15,B===6)break e;case 15:l.mode=16;case 16:if(ae=l.length){if(Q<ae&&(ae=Q),se<ae&&(ae=se),ae===0)break e;p.arraySet(we,q,ee,ae,re),Q-=ae,ee+=ae,se-=ae,re+=ae,l.length-=ae;break}l.mode=12;break;case 17:for(;R<14;){if(Q===0)break e;Q--,w+=q[ee++]<<R,R+=8}if(l.nlen=257+(31&w),w>>>=5,R-=5,l.ndist=1+(31&w),w>>>=5,R-=5,l.ncode=4+(15&w),w>>>=4,R-=4,286<l.nlen||30<l.ndist){b.msg="too many length or distance symbols",l.mode=30;break}l.have=0,l.mode=18;case 18:for(;l.have<l.ncode;){for(;R<3;){if(Q===0)break e;Q--,w+=q[ee++]<<R,R+=8}l.lens[ne[l.have++]]=7&w,w>>>=3,R-=3}for(;l.have<19;)l.lens[ne[l.have++]]=0;if(l.lencode=l.lendyn,l.lenbits=7,H={bits:l.lenbits},X=j(0,l.lens,0,19,l.lencode,0,l.work,H),l.lenbits=H.bits,X){b.msg="invalid code lengths set",l.mode=30;break}l.have=0,l.mode=19;case 19:for(;l.have<l.nlen+l.ndist;){for(;me=(N=l.lencode[w&(1<<l.lenbits)-1])>>>16&255,ke=65535&N,!((le=N>>>24)<=R);){if(Q===0)break e;Q--,w+=q[ee++]<<R,R+=8}if(ke<16)w>>>=le,R-=le,l.lens[l.have++]=ke;else{if(ke===16){for(T=le+2;R<T;){if(Q===0)break e;Q--,w+=q[ee++]<<R,R+=8}if(w>>>=le,R-=le,l.have===0){b.msg="invalid bit length repeat",l.mode=30;break}i=l.lens[l.have-1],ae=3+(3&w),w>>>=2,R-=2}else if(ke===17){for(T=le+3;R<T;){if(Q===0)break e;Q--,w+=q[ee++]<<R,R+=8}R-=le,i=0,ae=3+(7&(w>>>=le)),w>>>=3,R-=3}else{for(T=le+7;R<T;){if(Q===0)break e;Q--,w+=q[ee++]<<R,R+=8}R-=le,i=0,ae=11+(127&(w>>>=le)),w>>>=7,R-=7}if(l.have+ae>l.nlen+l.ndist){b.msg="invalid bit length repeat",l.mode=30;break}for(;ae--;)l.lens[l.have++]=i}}if(l.mode===30)break;if(l.lens[256]===0){b.msg="invalid code -- missing end-of-block",l.mode=30;break}if(l.lenbits=9,H={bits:l.lenbits},X=j(I,l.lens,0,l.nlen,l.lencode,0,l.work,H),l.lenbits=H.bits,X){b.msg="invalid literal/lengths set",l.mode=30;break}if(l.distbits=6,l.distcode=l.distdyn,H={bits:l.distbits},X=j(C,l.lens,l.nlen,l.ndist,l.distcode,0,l.work,H),l.distbits=H.bits,X){b.msg="invalid distances set",l.mode=30;break}if(l.mode=20,B===6)break e;case 20:l.mode=21;case 21:if(6<=Q&&258<=se){b.next_out=re,b.avail_out=se,b.next_in=ee,b.avail_in=Q,l.hold=w,l.bits=R,h(b,ie),re=b.next_out,we=b.output,se=b.avail_out,ee=b.next_in,q=b.input,Q=b.avail_in,w=l.hold,R=l.bits,l.mode===12&&(l.back=-1);break}for(l.back=0;me=(N=l.lencode[w&(1<<l.lenbits)-1])>>>16&255,ke=65535&N,!((le=N>>>24)<=R);){if(Q===0)break e;Q--,w+=q[ee++]<<R,R+=8}if(me&&(240&me)==0){for(ze=le,Me=me,Ue=ke;me=(N=l.lencode[Ue+((w&(1<<ze+Me)-1)>>ze)])>>>16&255,ke=65535&N,!(ze+(le=N>>>24)<=R);){if(Q===0)break e;Q--,w+=q[ee++]<<R,R+=8}w>>>=ze,R-=ze,l.back+=ze}if(w>>>=le,R-=le,l.back+=le,l.length=ke,me===0){l.mode=26;break}if(32&me){l.back=-1,l.mode=12;break}if(64&me){b.msg="invalid literal/length code",l.mode=30;break}l.extra=15&me,l.mode=22;case 22:if(l.extra){for(T=l.extra;R<T;){if(Q===0)break e;Q--,w+=q[ee++]<<R,R+=8}l.length+=w&(1<<l.extra)-1,w>>>=l.extra,R-=l.extra,l.back+=l.extra}l.was=l.length,l.mode=23;case 23:for(;me=(N=l.distcode[w&(1<<l.distbits)-1])>>>16&255,ke=65535&N,!((le=N>>>24)<=R);){if(Q===0)break e;Q--,w+=q[ee++]<<R,R+=8}if((240&me)==0){for(ze=le,Me=me,Ue=ke;me=(N=l.distcode[Ue+((w&(1<<ze+Me)-1)>>ze)])>>>16&255,ke=65535&N,!(ze+(le=N>>>24)<=R);){if(Q===0)break e;Q--,w+=q[ee++]<<R,R+=8}w>>>=ze,R-=ze,l.back+=ze}if(w>>>=le,R-=le,l.back+=le,64&me){b.msg="invalid distance code",l.mode=30;break}l.offset=ke,l.extra=15&me,l.mode=24;case 24:if(l.extra){for(T=l.extra;R<T;){if(Q===0)break e;Q--,w+=q[ee++]<<R,R+=8}l.offset+=w&(1<<l.extra)-1,w>>>=l.extra,R-=l.extra,l.back+=l.extra}if(l.offset>l.dmax){b.msg="invalid distance too far back",l.mode=30;break}l.mode=25;case 25:if(se===0)break e;if(ae=ie-se,l.offset>ae){if((ae=l.offset-ae)>l.whave&&l.sane){b.msg="invalid distance too far back",l.mode=30;break}Te=ae>l.wnext?(ae-=l.wnext,l.wsize-ae):l.wnext-ae,ae>l.length&&(ae=l.length),ce=l.window}else ce=we,Te=re-l.offset,ae=l.length;for(se<ae&&(ae=se),se-=ae,l.length-=ae;we[re++]=ce[Te++],--ae;);l.length===0&&(l.mode=21);break;case 26:if(se===0)break e;we[re++]=l.length,se--,l.mode=21;break;case 27:if(l.wrap){for(;R<32;){if(Q===0)break e;Q--,w|=q[ee++]<<R,R+=8}if(ie-=se,b.total_out+=ie,l.total+=ie,ie&&(b.adler=l.check=l.flags?c(l.check,we,ie,re-ie):m(l.check,we,ie,re-ie)),ie=se,(l.flags?w:x(w))!==l.check){b.msg="incorrect data check",l.mode=30;break}R=w=0}l.mode=28;case 28:if(l.wrap&&l.flags){for(;R<32;){if(Q===0)break e;Q--,w+=q[ee++]<<R,R+=8}if(w!==(4294967295&l.total)){b.msg="incorrect length check",l.mode=30;break}R=w=0}l.mode=29;case 29:X=1;break e;case 30:X=-3;break e;case 31:return-4;case 32:default:return g}return b.next_out=re,b.avail_out=se,b.next_in=ee,b.avail_in=Q,l.hold=w,l.bits=R,(l.wsize||ie!==b.avail_out&&l.mode<30&&(l.mode<27||B!==4))&&ye(b,b.output,b.next_out,ie-b.avail_out)?(l.mode=31,-4):(pe-=b.avail_in,ie-=b.avail_out,b.total_in+=pe,b.total_out+=ie,l.total+=ie,l.wrap&&ie&&(b.adler=l.check=l.flags?c(l.check,we,ie,b.next_out-ie):m(l.check,we,ie,b.next_out-ie)),b.data_type=l.bits+(l.last?64:0)+(l.mode===12?128:0)+(l.mode===20||l.mode===15?256:0),(pe==0&&ie===0||B===4)&&X===v&&(X=-5),X)},k.inflateEnd=function(b){if(!b||!b.state)return g;var B=b.state;return B.window&&(B.window=null),b.state=null,v},k.inflateGetHeader=function(b,B){var l;return b&&b.state?(2&(l=b.state).wrap)==0?g:((l.head=B).done=!1,v):g},k.inflateSetDictionary=function(b,B){var l,q=B.length;return b&&b.state?(l=b.state).wrap!==0&&l.mode!==11?g:l.mode===11&&m(1,B,q,0)!==l.check?-3:ye(b,B,q,q)?(l.mode=31,-4):(l.havedict=1,v):g},k.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(o,O,k){var p=o("../utils/common"),m=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],c=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],h=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],j=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];O.exports=function(I,C,v,g,_,f,y,x){var S,A,U,D,Y,G,te,F,J,ye=x.bits,b=0,B=0,l=0,q=0,we=0,ee=0,re=0,Q=0,se=0,w=0,R=null,pe=0,ie=new p.Buf16(16),ae=new p.Buf16(16),Te=null,ce=0;for(b=0;b<=15;b++)ie[b]=0;for(B=0;B<g;B++)ie[C[v+B]]++;for(we=ye,q=15;1<=q&&ie[q]===0;q--);if(q<we&&(we=q),q===0)return _[f++]=20971520,_[f++]=20971520,x.bits=1,0;for(l=1;l<q&&ie[l]===0;l++);for(we<l&&(we=l),b=Q=1;b<=15;b++)if(Q<<=1,(Q-=ie[b])<0)return-1;if(0<Q&&(I===0||q!==1))return-1;for(ae[1]=0,b=1;b<15;b++)ae[b+1]=ae[b]+ie[b];for(B=0;B<g;B++)C[v+B]!==0&&(y[ae[C[v+B]]++]=B);if(G=I===0?(R=Te=y,19):I===1?(R=m,pe-=257,Te=c,ce-=257,256):(R=h,Te=j,-1),b=l,Y=f,re=B=w=0,U=-1,D=(se=1<<(ee=we))-1,I===1&&852<se||I===2&&592<se)return 1;for(;;){for(te=b-re,J=y[B]<G?(F=0,y[B]):y[B]>G?(F=Te[ce+y[B]],R[pe+y[B]]):(F=96,0),S=1<<b-re,l=A=1<<ee;_[Y+(w>>re)+(A-=S)]=te<<24|F<<16|J|0,A!==0;);for(S=1<<b-1;w&S;)S>>=1;if(S!==0?(w&=S-1,w+=S):w=0,B++,--ie[b]==0){if(b===q)break;b=C[v+y[B]]}if(we<b&&(w&D)!==U){for(re===0&&(re=we),Y+=l,Q=1<<(ee=b-re);ee+re<q&&!((Q-=ie[ee+re])<=0);)ee++,Q<<=1;if(se+=1<<ee,I===1&&852<se||I===2&&592<se)return 1;_[U=w&D]=we<<24|ee<<16|Y-f|0}}return w!==0&&(_[Y+w]=b-re<<24|64<<16|0),x.bits=we,0}},{"../utils/common":41}],51:[function(o,O,k){O.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(o,O,k){var p=o("../utils/common"),m=0,c=1;function h(N){for(var M=N.length;0<=--M;)N[M]=0}var j=0,I=29,C=256,v=C+1+I,g=30,_=19,f=2*v+1,y=15,x=16,S=7,A=256,U=16,D=17,Y=18,G=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],te=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],F=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],J=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ye=new Array(2*(v+2));h(ye);var b=new Array(2*g);h(b);var B=new Array(512);h(B);var l=new Array(256);h(l);var q=new Array(I);h(q);var we,ee,re,Q=new Array(g);function se(N,M,ne,oe,K){this.static_tree=N,this.extra_bits=M,this.extra_base=ne,this.elems=oe,this.max_length=K,this.has_stree=N&&N.length}function w(N,M){this.dyn_tree=N,this.max_code=0,this.stat_desc=M}function R(N){return N<256?B[N]:B[256+(N>>>7)]}function pe(N,M){N.pending_buf[N.pending++]=255&M,N.pending_buf[N.pending++]=M>>>8&255}function ie(N,M,ne){N.bi_valid>x-ne?(N.bi_buf|=M<<N.bi_valid&65535,pe(N,N.bi_buf),N.bi_buf=M>>x-N.bi_valid,N.bi_valid+=ne-x):(N.bi_buf|=M<<N.bi_valid&65535,N.bi_valid+=ne)}function ae(N,M,ne){ie(N,ne[2*M],ne[2*M+1])}function Te(N,M){for(var ne=0;ne|=1&N,N>>>=1,ne<<=1,0<--M;);return ne>>>1}function ce(N,M,ne){var oe,K,he=new Array(y+1),Se=0;for(oe=1;oe<=y;oe++)he[oe]=Se=Se+ne[oe-1]<<1;for(K=0;K<=M;K++){var xe=N[2*K+1];xe!==0&&(N[2*K]=Te(he[xe]++,xe))}}function le(N){var M;for(M=0;M<v;M++)N.dyn_ltree[2*M]=0;for(M=0;M<g;M++)N.dyn_dtree[2*M]=0;for(M=0;M<_;M++)N.bl_tree[2*M]=0;N.dyn_ltree[2*A]=1,N.opt_len=N.static_len=0,N.last_lit=N.matches=0}function me(N){8<N.bi_valid?pe(N,N.bi_buf):0<N.bi_valid&&(N.pending_buf[N.pending++]=N.bi_buf),N.bi_buf=0,N.bi_valid=0}function ke(N,M,ne,oe){var K=2*M,he=2*ne;return N[K]<N[he]||N[K]===N[he]&&oe[M]<=oe[ne]}function ze(N,M,ne){for(var oe=N.heap[ne],K=ne<<1;K<=N.heap_len&&(K<N.heap_len&&ke(M,N.heap[K+1],N.heap[K],N.depth)&&K++,!ke(M,oe,N.heap[K],N.depth));)N.heap[ne]=N.heap[K],ne=K,K<<=1;N.heap[ne]=oe}function Me(N,M,ne){var oe,K,he,Se,xe=0;if(N.last_lit!==0)for(;oe=N.pending_buf[N.d_buf+2*xe]<<8|N.pending_buf[N.d_buf+2*xe+1],K=N.pending_buf[N.l_buf+xe],xe++,oe===0?ae(N,K,M):(ae(N,(he=l[K])+C+1,M),(Se=G[he])!==0&&ie(N,K-=q[he],Se),ae(N,he=R(--oe),ne),(Se=te[he])!==0&&ie(N,oe-=Q[he],Se)),xe<N.last_lit;);ae(N,A,M)}function Ue(N,M){var ne,oe,K,he=M.dyn_tree,Se=M.stat_desc.static_tree,xe=M.stat_desc.has_stree,je=M.stat_desc.elems,Be=-1;for(N.heap_len=0,N.heap_max=f,ne=0;ne<je;ne++)he[2*ne]!==0?(N.heap[++N.heap_len]=Be=ne,N.depth[ne]=0):he[2*ne+1]=0;for(;N.heap_len<2;)he[2*(K=N.heap[++N.heap_len]=Be<2?++Be:0)]=1,N.depth[K]=0,N.opt_len--,xe&&(N.static_len-=Se[2*K+1]);for(M.max_code=Be,ne=N.heap_len>>1;1<=ne;ne--)ze(N,he,ne);for(K=je;ne=N.heap[1],N.heap[1]=N.heap[N.heap_len--],ze(N,he,1),oe=N.heap[1],N.heap[--N.heap_max]=ne,N.heap[--N.heap_max]=oe,he[2*K]=he[2*ne]+he[2*oe],N.depth[K]=(N.depth[ne]>=N.depth[oe]?N.depth[ne]:N.depth[oe])+1,he[2*ne+1]=he[2*oe+1]=K,N.heap[1]=K++,ze(N,he,1),2<=N.heap_len;);N.heap[--N.heap_max]=N.heap[1],(function(Oe,ft){var At,ot,Sn,Ke,_n,dr,kt=ft.dyn_tree,Bn=ft.max_code,fr=ft.stat_desc.static_tree,pr=ft.stat_desc.has_stree,mr=ft.stat_desc.extra_bits,Gt=ft.stat_desc.extra_base,Ct=ft.stat_desc.max_length,Nn=0;for(Ke=0;Ke<=y;Ke++)Oe.bl_count[Ke]=0;for(kt[2*Oe.heap[Oe.heap_max]+1]=0,At=Oe.heap_max+1;At<f;At++)Ct<(Ke=kt[2*kt[2*(ot=Oe.heap[At])+1]+1]+1)&&(Ke=Ct,Nn++),kt[2*ot+1]=Ke,Bn<ot||(Oe.bl_count[Ke]++,_n=0,Gt<=ot&&(_n=mr[ot-Gt]),dr=kt[2*ot],Oe.opt_len+=dr*(Ke+_n),pr&&(Oe.static_len+=dr*(fr[2*ot+1]+_n)));if(Nn!==0){do{for(Ke=Ct-1;Oe.bl_count[Ke]===0;)Ke--;Oe.bl_count[Ke]--,Oe.bl_count[Ke+1]+=2,Oe.bl_count[Ct]--,Nn-=2}while(0<Nn);for(Ke=Ct;Ke!==0;Ke--)for(ot=Oe.bl_count[Ke];ot!==0;)Bn<(Sn=Oe.heap[--At])||(kt[2*Sn+1]!==Ke&&(Oe.opt_len+=(Ke-kt[2*Sn+1])*kt[2*Sn],kt[2*Sn+1]=Ke),ot--)}})(N,M),ce(he,Be,N.bl_count)}function i(N,M,ne){var oe,K,he=-1,Se=M[1],xe=0,je=7,Be=4;for(Se===0&&(je=138,Be=3),M[2*(ne+1)+1]=65535,oe=0;oe<=ne;oe++)K=Se,Se=M[2*(oe+1)+1],++xe<je&&K===Se||(xe<Be?N.bl_tree[2*K]+=xe:K!==0?(K!==he&&N.bl_tree[2*K]++,N.bl_tree[2*U]++):xe<=10?N.bl_tree[2*D]++:N.bl_tree[2*Y]++,he=K,Be=(xe=0)===Se?(je=138,3):K===Se?(je=6,3):(je=7,4))}function X(N,M,ne){var oe,K,he=-1,Se=M[1],xe=0,je=7,Be=4;for(Se===0&&(je=138,Be=3),oe=0;oe<=ne;oe++)if(K=Se,Se=M[2*(oe+1)+1],!(++xe<je&&K===Se)){if(xe<Be)for(;ae(N,K,N.bl_tree),--xe!=0;);else K!==0?(K!==he&&(ae(N,K,N.bl_tree),xe--),ae(N,U,N.bl_tree),ie(N,xe-3,2)):xe<=10?(ae(N,D,N.bl_tree),ie(N,xe-3,3)):(ae(N,Y,N.bl_tree),ie(N,xe-11,7));he=K,Be=(xe=0)===Se?(je=138,3):K===Se?(je=6,3):(je=7,4)}}h(Q);var H=!1;function T(N,M,ne,oe){ie(N,(j<<1)+(oe?1:0),3),(function(K,he,Se,xe){me(K),pe(K,Se),pe(K,~Se),p.arraySet(K.pending_buf,K.window,he,Se,K.pending),K.pending+=Se})(N,M,ne)}k._tr_init=function(N){H||((function(){var M,ne,oe,K,he,Se=new Array(y+1);for(K=oe=0;K<I-1;K++)for(q[K]=oe,M=0;M<1<<G[K];M++)l[oe++]=K;for(l[oe-1]=K,K=he=0;K<16;K++)for(Q[K]=he,M=0;M<1<<te[K];M++)B[he++]=K;for(he>>=7;K<g;K++)for(Q[K]=he<<7,M=0;M<1<<te[K]-7;M++)B[256+he++]=K;for(ne=0;ne<=y;ne++)Se[ne]=0;for(M=0;M<=143;)ye[2*M+1]=8,M++,Se[8]++;for(;M<=255;)ye[2*M+1]=9,M++,Se[9]++;for(;M<=279;)ye[2*M+1]=7,M++,Se[7]++;for(;M<=287;)ye[2*M+1]=8,M++,Se[8]++;for(ce(ye,v+1,Se),M=0;M<g;M++)b[2*M+1]=5,b[2*M]=Te(M,5);we=new se(ye,G,C+1,v,y),ee=new se(b,te,0,g,y),re=new se(new Array(0),F,0,_,S)})(),H=!0),N.l_desc=new w(N.dyn_ltree,we),N.d_desc=new w(N.dyn_dtree,ee),N.bl_desc=new w(N.bl_tree,re),N.bi_buf=0,N.bi_valid=0,le(N)},k._tr_stored_block=T,k._tr_flush_block=function(N,M,ne,oe){var K,he,Se=0;0<N.level?(N.strm.data_type===2&&(N.strm.data_type=(function(xe){var je,Be=4093624447;for(je=0;je<=31;je++,Be>>>=1)if(1&Be&&xe.dyn_ltree[2*je]!==0)return m;if(xe.dyn_ltree[18]!==0||xe.dyn_ltree[20]!==0||xe.dyn_ltree[26]!==0)return c;for(je=32;je<C;je++)if(xe.dyn_ltree[2*je]!==0)return c;return m})(N)),Ue(N,N.l_desc),Ue(N,N.d_desc),Se=(function(xe){var je;for(i(xe,xe.dyn_ltree,xe.l_desc.max_code),i(xe,xe.dyn_dtree,xe.d_desc.max_code),Ue(xe,xe.bl_desc),je=_-1;3<=je&&xe.bl_tree[2*J[je]+1]===0;je--);return xe.opt_len+=3*(je+1)+5+5+4,je})(N),K=N.opt_len+3+7>>>3,(he=N.static_len+3+7>>>3)<=K&&(K=he)):K=he=ne+5,ne+4<=K&&M!==-1?T(N,M,ne,oe):N.strategy===4||he===K?(ie(N,2+(oe?1:0),3),Me(N,ye,b)):(ie(N,4+(oe?1:0),3),(function(xe,je,Be,Oe){var ft;for(ie(xe,je-257,5),ie(xe,Be-1,5),ie(xe,Oe-4,4),ft=0;ft<Oe;ft++)ie(xe,xe.bl_tree[2*J[ft]+1],3);X(xe,xe.dyn_ltree,je-1),X(xe,xe.dyn_dtree,Be-1)})(N,N.l_desc.max_code+1,N.d_desc.max_code+1,Se+1),Me(N,N.dyn_ltree,N.dyn_dtree)),le(N),oe&&me(N)},k._tr_tally=function(N,M,ne){return N.pending_buf[N.d_buf+2*N.last_lit]=M>>>8&255,N.pending_buf[N.d_buf+2*N.last_lit+1]=255&M,N.pending_buf[N.l_buf+N.last_lit]=255&ne,N.last_lit++,M===0?N.dyn_ltree[2*ne]++:(N.matches++,M--,N.dyn_ltree[2*(l[ne]+C+1)]++,N.dyn_dtree[2*R(M)]++),N.last_lit===N.lit_bufsize-1},k._tr_align=function(N){ie(N,2,3),ae(N,A,ye),(function(M){M.bi_valid===16?(pe(M,M.bi_buf),M.bi_buf=0,M.bi_valid=0):8<=M.bi_valid&&(M.pending_buf[M.pending++]=255&M.bi_buf,M.bi_buf>>=8,M.bi_valid-=8)})(N)}},{"../utils/common":41}],53:[function(o,O,k){O.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(o,O,k){(function(p){(function(m,c){if(!m.setImmediate){var h,j,I,C,v=1,g={},_=!1,f=m.document,y=Object.getPrototypeOf&&Object.getPrototypeOf(m);y=y&&y.setTimeout?y:m,h={}.toString.call(m.process)==="[object process]"?function(U){process.nextTick(function(){S(U)})}:(function(){if(m.postMessage&&!m.importScripts){var U=!0,D=m.onmessage;return m.onmessage=function(){U=!1},m.postMessage("","*"),m.onmessage=D,U}})()?(C="setImmediate$"+Math.random()+"$",m.addEventListener?m.addEventListener("message",A,!1):m.attachEvent("onmessage",A),function(U){m.postMessage(C+U,"*")}):m.MessageChannel?((I=new MessageChannel).port1.onmessage=function(U){S(U.data)},function(U){I.port2.postMessage(U)}):f&&"onreadystatechange"in f.createElement("script")?(j=f.documentElement,function(U){var D=f.createElement("script");D.onreadystatechange=function(){S(U),D.onreadystatechange=null,j.removeChild(D),D=null},j.appendChild(D)}):function(U){setTimeout(S,0,U)},y.setImmediate=function(U){typeof U!="function"&&(U=new Function(""+U));for(var D=new Array(arguments.length-1),Y=0;Y<D.length;Y++)D[Y]=arguments[Y+1];var G={callback:U,args:D};return g[v]=G,h(v),v++},y.clearImmediate=x}function x(U){delete g[U]}function S(U){if(_)setTimeout(S,0,U);else{var D=g[U];if(D){_=!0;try{(function(Y){var G=Y.callback,te=Y.args;switch(te.length){case 0:G();break;case 1:G(te[0]);break;case 2:G(te[0],te[1]);break;case 3:G(te[0],te[1],te[2]);break;default:G.apply(c,te)}})(D)}finally{x(U),_=!1}}}}function A(U){U.source===m&&typeof U.data=="string"&&U.data.indexOf(C)===0&&S(+U.data.slice(C.length))}})(typeof self>"u"?p===void 0?this:p:self)}).call(this,typeof ua<"u"?ua:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(uo)),uo.exports}var Dp=Lp();const Mp=gc(Dp),Pp=`<!doctype html>
<html lang="en" data-theme="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <title>Luca AI</title>
    <link
      rel="icon"
      href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'%3E%3Cpath fill='%236ba2ff' d='M41.883,9.38c-1.092-1.179-2.582-1.855-4.194-1.904c-1.629-0.046-3.171,0.542-4.346,1.667l-0.252,0.241%20c-2.551,2.441-2.594,6.42-0.098,9.059C34.932,20.493,36,23.177,36,26c0,3.018-1.197,5.832-3.372,7.926%20c-2.173,2.092-5.034,3.175-8.058,3.066c-5.611-0.213-10.35-4.951-10.566-10.618c-0.001-0.019-0.161-1.836,0.338-4.429%20c1.164-6.057,5.081-11.229,10.745-14.193l6.002-3.141c0.365-0.191,0.576-0.588,0.53-0.998c-0.047-0.41-0.34-0.749-0.739-0.854%20c-2.741-0.724-5.588-0.928-8.461-0.618C11.728,3.307,3.19,11.925,2.118,22.633C1.425,29.57,3.835,36.358,8.731,41.258%20c4.347,4.35,10.183,6.741,16.291,6.74c0.772,0,1.551-0.038,2.329-0.115c10.785-1.071,19.416-9.673,20.523-20.451%20C48.556,20.809,46.371,14.229,41.883,9.38z'/%3E%3C/svg%3E"
    />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Instrument+Sans:ital,wght@0,400;0,500;0,600;1,400&family=JetBrains+Mono:wght@400;500&display=swap"
      rel="stylesheet"
    />
    <script>
      /* apply saved theme before first paint (same contract as the onboarding bridge:
         'luca-onboarding' profile.theme, fallback to OS preference) */
      (function () {
        var theme = null;
        try {
          var raw = localStorage.getItem("luca-onboarding");
          if (raw) {
            var p = JSON.parse(raw);
            if (p && p.complete === true && p.theme) theme = p.theme;
          }
          if (!theme) {
            var s = localStorage.getItem("luca-settings");
            if (s) {
              var sp = JSON.parse(s);
              if (sp && sp.theme) theme = sp.theme;
            }
          }
        } catch (e) {}
        if (!theme) {
          theme =
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: light)").matches
              ? "light"
              : "dark";
        }
        document.documentElement.setAttribute("data-theme", theme);
      })();
    <\/script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"><\/script>
  </body>
</html>
`,Fp=`{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "jsx": "react-jsx",
    "moduleResolution": "bundler",
    "strict": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "noEmit": true,
    "allowImportingTsExtensions": true
  },
  "include": ["src"]
}
`,Up=`import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
`,Bp=`@import "tailwindcss";

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   LUCA AI â€” monochrome design system
   Black Â· white Â· grey â€” with a restrained steel-blue
   accent reserved for cursor, active states and links.
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

:root {
  color-scheme: dark;
  --color-canvas: #0d0d0f;
  --color-surface1: #17171a;
  --color-surface2: #202024;
  --color-surface3: #2c2c31;
  --color-surface4: #242429;
  --color-line: #26262b;
  --color-linestrong: #3d3d44;
  --color-ink: #f1f1f3;
  --color-mute: #a0a0ac;
  --color-accent: #6ba2ff;
  --color-accent2: #8ab5ff;
  --color-accent-ink: #08131f;
  --color-avatar: #5a5a64;
  --color-danger: #e5655e;
  --color-ok: #6cbf8f;
  --color-warn: #c9a45c;

  --font-display: "Space Grotesk", "Instrument Sans", sans-serif;
  --font-body: "Instrument Sans", "Segoe UI", sans-serif;
  --font-mono: "JetBrains Mono", "SFMono-Regular", Consolas, monospace;

  /* motion */
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-smooth: cubic-bezier(0.65, 0, 0.35, 1);
}

[data-theme="light"] {
  color-scheme: light;
  --color-canvas: #f2f2f2;
  --color-surface1: #e9e9e9;
  --color-surface2: #e0e0e0;
  --color-surface3: #d4d4d4;
  --color-surface4: #dadada;
  --color-line: #d9d9d9;
  --color-linestrong: #c2c2c2;
  --color-ink: #161616;
  --color-mute: #6e6e6e;
  --color-accent: #2f6fdd;
  --color-accent2: #245cc0;
  --color-accent-ink: #f4f8ff;
  --color-avatar: #9c9c9c;
  --color-danger: #cf4444;
  --color-ok: #2f8f5b;
  --color-warn: #a07d1e;
}

@theme inline {
  --color-canvas: var(--color-canvas);
  --color-surface1: var(--color-surface1);
  --color-surface2: var(--color-surface2);
  --color-surface3: var(--color-surface3);
  --color-surface4: var(--color-surface4);
  --color-line: var(--color-line);
  --color-linestrong: var(--color-linestrong);
  --color-ink: var(--color-ink);
  --color-mute: var(--color-mute);
  --color-accent: var(--color-accent);
  --color-accent2: var(--color-accent2);
  --color-accent-ink: var(--color-accent-ink);
  --color-avatar: var(--color-avatar);
  --color-danger: var(--color-danger);
  --color-ok: var(--color-ok);
  --color-warn: var(--color-warn);
  --font-display: var(--font-display);
  --font-body: var(--font-body);
  --font-mono: var(--font-mono);
}

html,
body,
#root {
  height: 100%;
}

body {
  background: var(--color-canvas);
  color: var(--color-ink);
  font-family: var(--font-body);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

::selection {
  background: color-mix(in srgb, var(--color-accent) 32%, transparent);
}

/* no browser focus halos â€” hover/active states carry the feedback */
:focus {
  outline: none;
}
:focus-visible {
  outline: none;
}

* {
  scrollbar-width: thin;
  scrollbar-color: var(--color-surface3) transparent;
}
*::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
*::-webkit-scrollbar-thumb {
  background: var(--color-surface3);
  border-radius: 8px;
}
*::-webkit-scrollbar-thumb:hover {
  background: var(--color-linestrong);
}
*::-webkit-scrollbar-track {
  background: transparent;
}

/* range inputs (settings sliders) */
input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  height: 5px;
  border-radius: 99px;
  background: linear-gradient(
    to right,
    var(--color-accent) 0%,
    var(--color-accent) var(--fill, 50%),
    var(--color-surface3) var(--fill, 50%),
    var(--color-surface3) 100%
  );
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: var(--color-ink);
  border: 2.5px solid var(--color-accent);
  cursor: pointer;
  transition: transform 0.15s var(--ease-spring);
}
input[type="range"]::-webkit-slider-thumb:hover {
  transform: scale(1.2);
}
input[type="range"]::-moz-range-thumb {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: var(--color-ink);
  border: 2.5px solid var(--color-accent);
  cursor: pointer;
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   MOTION LIBRARY
   --d = per-element delay for staggers
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

@keyframes luca-fade-up {
  from {
    opacity: 0;
    transform: translateY(16px);
    filter: blur(5px);
  }
  to {
    opacity: 1;
    transform: none;
    filter: blur(0);
  }
}
@keyframes luca-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes luca-scale-in {
  from {
    opacity: 0;
    transform: scale(0.93) translateY(8px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes luca-pop {
  from {
    opacity: 0;
    transform: scale(0.88) translateY(-6px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes luca-pop-up {
  from {
    opacity: 0;
    transform: scale(0.9) translateY(8px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes luca-step-fwd {
  from {
    opacity: 0;
    transform: translateX(42px);
    filter: blur(4px);
  }
  to {
    opacity: 1;
    transform: none;
    filter: blur(0);
  }
}
@keyframes luca-step-back {
  from {
    opacity: 0;
    transform: translateX(-42px);
    filter: blur(4px);
  }
  to {
    opacity: 1;
    transform: none;
    filter: blur(0);
  }
}
@keyframes luca-msg-in {
  from {
    opacity: 0;
    transform: translateY(14px) scale(0.985);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes luca-toast-in {
  from {
    opacity: 0;
    transform: translateY(16px) scale(0.94);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes luca-breathe {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.07); }
}
@keyframes luca-glow {
  0%, 100% { opacity: 0.5; transform: scale(0.92); }
  50% { opacity: 1; transform: scale(1.08); }
}
@keyframes luca-dot {
  0%, 60%, 100% { transform: translateY(0); opacity: 0.45; }
  30% { transform: translateY(-4px); opacity: 1; }
}
@keyframes luca-cursor {
  0%, 45% { opacity: 1; }
  50%, 95% { opacity: 0; }
}
@keyframes luca-shimmer {
  from { background-position: -200% 0; }
  to { background-position: 200% 0; }
}
@keyframes luca-spin {
  to { transform: rotate(360deg); }
}
@keyframes luca-pulse-dot {
  0%, 100% { opacity: 0.35; transform: scale(0.75); }
  50% { opacity: 1; transform: scale(1.15); }
}
@keyframes luca-drawer-in {
  from { transform: translateX(-102%); }
  to { transform: none; }
}

.anim-fade-up { animation: luca-fade-up 0.6s var(--ease-out) both; animation-delay: var(--d, 0ms); }
.anim-fade-in { animation: luca-fade-in 0.45s var(--ease-out) both; animation-delay: var(--d, 0ms); }
.anim-scale-in { animation: luca-scale-in 0.42s var(--ease-spring) both; animation-delay: var(--d, 0ms); }
.anim-pop { transform-origin: top center; animation: luca-pop 0.22s var(--ease-spring) both; }
.anim-pop-up { transform-origin: bottom center; animation: luca-pop-up 0.22s var(--ease-spring) both; }
.anim-step-fwd { animation: luca-step-fwd 0.5s var(--ease-out) both; }
.anim-step-back { animation: luca-step-back 0.5s var(--ease-out) both; }
.anim-msg { animation: luca-msg-in 0.45s var(--ease-out) both; }
.anim-toast { animation: luca-toast-in 0.4s var(--ease-spring) both; }
.anim-breathe { animation: luca-breathe 2.6s var(--ease-smooth) infinite; }
.anim-glow { animation: luca-glow 2.6s var(--ease-smooth) infinite; }
.anim-spin { animation: luca-spin 0.9s linear infinite; }

.typing-dot {
  width: 5px;
  height: 5px;
  border-radius: 99px;
  background: var(--color-accent);
  animation: luca-dot 1.15s var(--ease-smooth) infinite;
}
.typing-dot:nth-child(2) { animation-delay: 0.15s; }
.typing-dot:nth-child(3) { animation-delay: 0.3s; }

.stream-cursor {
  display: inline-block;
  width: 8px;
  height: 15px;
  margin-left: 3px;
  vertical-align: -2px;
  border-radius: 2.5px;
  background: var(--color-accent);
  animation: luca-cursor 1.05s steps(1) infinite;
}

.shimmer {
  background: linear-gradient(
    100deg,
    var(--color-surface2) 40%,
    var(--color-surface3) 50%,
    var(--color-surface2) 60%
  );
  background-size: 200% 100%;
  animation: luca-shimmer 1.6s linear infinite;
}

.pulse-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-accent);
  animation: luca-pulse-dot 1.5s var(--ease-smooth) infinite;
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
   AMBIENT LAYERS â€” depth for the dark canvas
   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

/* slow-drifting sheen behind the chat column */
@keyframes luca-drift-a {
  from { transform: translate3d(-6%, -4%, 0) scale(1); }
  to   { transform: translate3d(5%, 6%, 0) scale(1.15); }
}
@keyframes luca-drift-b {
  from { transform: translate3d(4%, 5%, 0) scale(1.1); }
  to   { transform: translate3d(-5%, -6%, 0) scale(1); }
}

.chat-ambient {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
  /* translucents only â€” never an opaque fill, or it buries the composer */
  background:
    radial-gradient(120% 90% at 50% 118%, rgba(0, 0, 0, 0.5), transparent 55%),
    radial-gradient(90% 60% at 50% -18%, rgba(255, 255, 255, 0.05), transparent 60%);
}
.chat-ambient::before,
.chat-ambient::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  filter: blur(70px);
  will-change: transform;
}
.chat-ambient::before {
  width: 620px;
  height: 420px;
  left: -140px;
  top: -160px;
  background: color-mix(in srgb, var(--color-accent) 7%, transparent);
  animation: luca-drift-a 22s var(--ease-smooth) infinite alternate;
}
.chat-ambient::after {
  width: 560px;
  height: 460px;
  right: -160px;
  bottom: -180px;
  background: rgba(255, 255, 255, 0.035);
  animation: luca-drift-b 26s var(--ease-smooth) infinite alternate;
}
[data-theme="light"] .chat-ambient {
  background:
    radial-gradient(120% 90% at 50% 118%, rgba(0, 0, 0, 0.06), transparent 55%),
    radial-gradient(90% 60% at 50% -18%, rgba(255, 255, 255, 0.65), transparent 60%);
}
[data-theme="light"] .chat-ambient::before {
  background: color-mix(in srgb, var(--color-accent) 6%, transparent);
}
[data-theme="light"] .chat-ambient::after {
  background: rgba(255, 255, 255, 0.5);
}

/* film grain over everything â€” keeps flat greys feeling tactile */
body::after {
  content: "";
  position: fixed;
  inset: 0;
  z-index: 120;
  pointer-events: none;
  opacity: 0.05;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E");
}
[data-theme="light"] body::after,
body[data-theme="light"]::after {
  opacity: 0.03;
}
:root[data-theme="light"] body::after {
  opacity: 0.03;
}

/* press feedback everywhere it matters */
button {
  -webkit-tap-highlight-color: transparent;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
`,Wp=`import { useCallback, useEffect, useRef, useState } from "react";
import { Download, Menu, Settings as SettingsIcon } from "lucide-react";
import Sidebar from "./components/Sidebar";
import ChatArea from "./components/ChatArea";
import Composer from "./components/Composer";
import Onboarding from "./components/Onboarding";
import SettingsModal from "./components/SettingsModal";
import SourceModal from "./components/SourceModal";
import LoadingScreen from "./components/LoadingScreen";
import { isAbortError, nameChat, streamChat } from "./lib/engine";
import type { EngineEvent, HistoryMsg } from "./lib/engine";
import {
  loadActiveId,
  loadProfile,
  loadSessions,
  loadSettings,
  loadTier,
  resetAll,
  saveActiveId,
  saveSessions,
  saveSettings,
  saveTier,
  titleFromMessage,
  uid,
} from "./lib/luca";
import type { Attachment, LucaMessage, Profile, Session, Settings, Tier, ToolRound } from "./lib/luca";

interface Toast {
  id: string;
  text: string;
}

export default function App() {
  const [profile, setProfile] = useState<Profile | null>(() => loadProfile());
  const [sessions, setSessions] = useState<Session[]>(() => loadSessions());
  const [activeId, setActiveId] = useState<string | null>(() => {
    const id = loadActiveId();
    return id && loadSessions().some((s) => s.id === id) ? id : null;
  });
  const [tier, setTier] = useState<Tier>(() => loadTier());
  const [settings, setSettings] = useState<Settings>(() => loadSettings());
  const [ready, setReady] = useState(true);
  const [streaming, setStreaming] = useState<{ sessionId: string; msgUid: string } | null>(null);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [sourceOpen, setSourceOpen] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [search, setSearch] = useState("");

  const abortRef = useRef<AbortController | null>(null);
  const saveTimer = useRef<number | undefined>(undefined);

  const activeSession = sessions.find((s) => s.id === activeId) || null;
  const isStreaming = streaming !== null;

  const toast = useCallback((text: string) => {
    const id = uid();
    setToasts((prev) => [...prev.slice(-2), { id, text }]);
    window.setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 2400);
  }, []);

  /* ---------- persistence (debounced â€” streams update state often) ---------- */
  useEffect(() => {
    window.clearTimeout(saveTimer.current);
    saveTimer.current = window.setTimeout(() => saveSessions(sessions), 350);
    return () => window.clearTimeout(saveTimer.current);
  }, [sessions]);

  useEffect(() => saveActiveId(activeId), [activeId]);
  useEffect(() => saveTier(tier), [tier]);
  useEffect(() => {
    saveSettings(settings);
    document.documentElement.setAttribute("data-theme", settings.theme);
  }, [settings]);

  /* ---------- message patching ---------- */
  const patchMsg = useCallback((sessionId: string, msgUid: string, patch: Partial<LucaMessage>) => {
    setSessions((prev) =>
      prev.map((s) =>
        s.id === sessionId
          ? { ...s, updatedAt: Date.now(), messages: s.messages.map((m) => (m.uid === msgUid ? { ...m, ...patch } : m)) }
          : s,
      ),
    );
  }, []);

  const patchRound = useCallback(
    (sessionId: string, msgUid: string, roundId: string, patch: Partial<ToolRound>) => {
      setSessions((prev) =>
        prev.map((s) =>
          s.id === sessionId
            ? {
                ...s,
                updatedAt: Date.now(),
                messages: s.messages.map((m) => {
                  if (m.uid !== msgUid) return m;
                  const rounds = m.toolRounds || [];
                  const exists = rounds.some((r) => r.id === roundId);
                  return {
                    ...m,
                    toolRounds: exists
                      ? rounds.map((r) => (r.id === roundId ? { ...r, ...patch } : r))
                      : [...rounds, { id: roundId, name: "web_search", query: "", sources: [], status: "running" as const, ...patch }],
                  };
                }),
              }
            : s,
        ),
      );
    },
    [],
  );

  /* ---------- the streaming runner ---------- */
  const runStream = useCallback(
    async (
      sessionId: string,
      assistantUid: string,
      history: HistoryMsg[],
      userText: string,
      currentTier: Tier,
      firstExchange: boolean,
    ) => {
      const controller = new AbortController();
      abortRef.current = controller;
      setStreaming({ sessionId, msgUid: assistantUid });

      let acc = "";
      let reasoning = "";
      const startedAt = Date.now();
      let firstContentAt: number | null = null;

      try {
        const gen = streamChat({ tier: currentTier, history, settings, signal: controller.signal });
        for await (const ev of gen as AsyncGenerator<EngineEvent>) {
          switch (ev.kind) {
            case "reasoning":
              reasoning += ev.text;
              patchMsg(sessionId, assistantUid, { reasoning });
              break;
            case "content":
              if (!firstContentAt) firstContentAt = Date.now();
              acc += ev.text;
              patchMsg(sessionId, assistantUid, { content: acc });
              break;
            case "tool-start":
              patchRound(sessionId, assistantUid, ev.roundId, { name: ev.name, query: ev.query, status: "running" });
              break;
            case "tool-end":
              patchRound(sessionId, assistantUid, ev.roundId, { sources: ev.sources, status: "done", ms: ev.ms });
              break;
            case "done":
              break;
          }
        }
        patchMsg(sessionId, assistantUid, {
          streaming: false,
          thinkingMs: reasoning ? (firstContentAt || Date.now()) - startedAt : undefined,
        });
      } catch (e) {
        if (isAbortError(e)) {
          patchMsg(sessionId, assistantUid, { streaming: false, interrupted: true });
        } else {
          const raw = e instanceof Error && e.message ? e.message : "Something went wrong while generating.";
          const friendly = /failed to fetch|networkerror|load failed|typeerror/i.test(raw)
            ? "Backend not reachable â€” start server.js (node server.js) and try again."
            : raw;
          patchMsg(sessionId, assistantUid, { streaming: false, error: friendly });
        }
      } finally {
        setStreaming(null);
        abortRef.current = null;
      }

      /* name the chat after its first exchange â€” real endpoint, local fallback */
      if (firstExchange) {
        const title = (await nameChat(userText, acc)) || titleFromMessage(userText);
        setSessions((cur) => cur.map((x) => (x.id === sessionId && x.title === "New chat" ? { ...x, title } : x)));
      }
    },
    [settings, patchMsg, patchRound],
  );

  /* ---------- actions ---------- */
  const buildHistory = (msgs: LucaMessage[], withAttachments?: Attachment[]): HistoryMsg[] => {
    const hist: HistoryMsg[] = msgs
      .filter((m) => (m.role === "user" ? m.content : m.content || m.toolRounds?.length))
      .map((m) => ({
        role: m.role,
        content:
          m.role === "user" && m.attachments?.length
            ? [
                { type: "text", text: m.content },
                ...m.attachments.filter(a => a.dataUrl && a.type.startsWith("image/")).map(a => ({ type: "image_url", image_url: { url: a.dataUrl } }))
              ].length > 1
                ? [
                    { type: "text", text: m.content },
                    ...m.attachments.filter(a => a.dataUrl && a.type.startsWith("image/")).map(a => ({ type: "image_url", image_url: { url: a.dataUrl } }))
                  ]
                : m.content + (m.attachments?.length ? "\n[Attached: " + m.attachments.map((a) => a.name).join(", ") + "]" : "")
            : m.content,
      }));
    void withAttachments;
    return hist;
  };

  const sendMessage = useCallback(
    (text: string, attachments: Attachment[]) => {
      if (isStreaming) return;

      let sessionId = activeId;
      let baseMessages: LucaMessage[] = [];
      if (!sessionId || activeSession?.messages.length) {
        sessionId = uid();
        const session: Session = { id: sessionId, title: "New chat", createdAt: Date.now(), updatedAt: Date.now(), messages: [] };
        setSessions((prev) => [session, ...prev].slice(0, 500));
        setActiveId(sessionId);
      } else {
        baseMessages = activeSession?.messages || [];
      }

      const userMsg: LucaMessage = {
        uid: uid(),
        role: "user",
        content: text,
        ts: Date.now(),
        attachments: attachments.length ? attachments : undefined,
      };
      const assistantMsg: LucaMessage = {
        uid: uid(),
        role: "assistant",
        content: "",
        ts: Date.now(),
        tier,
        streaming: true,
        toolRounds: [],
      };

      const sid = sessionId;
      setSessions((prev) =>
        prev.map((s) => (s.id === sid ? { ...s, updatedAt: Date.now(), messages: [...s.messages, userMsg, assistantMsg] } : s)),
      );

      const history = [...buildHistory(baseMessages), { role: "user" as const, content: userMsg.content }];
      void runStream(sid, assistantMsg.uid, history, text, tier, baseMessages.length === 0);
    },
    [activeId, activeSession, isStreaming, tier, runStream],
  );

  const stopGeneration = useCallback(() => {
    abortRef.current?.abort();
  }, []);

  const regenerate = useCallback(
    (sessionId: string, msgUid: string) => {
      if (isStreaming) return;
      const session = sessions.find((s) => s.id === sessionId);
      if (!session) return;
      const idx = session.messages.findIndex((m) => m.uid === msgUid);
      if (idx < 0) return;
      const before = session.messages.slice(0, idx);
      const lastUser = [...before].reverse().find((m) => m.role === "user");
      if (!lastUser) return;

      const history = buildHistory(before);
      const assistantMsg: LucaMessage = {
        uid: msgUid,
        role: "assistant",
        content: "",
        ts: Date.now(),
        tier,
        streaming: true,
        toolRounds: [],
      };
      setSessions((prev) =>
        prev.map((s) =>
          s.id === sessionId ? { ...s, updatedAt: Date.now(), messages: [...before, assistantMsg] } : s,
        ),
      );
      void runStream(sessionId, msgUid, history, lastUser.content, tier, false);
    },
    [sessions, isStreaming, tier, runStream],
  );

  const editAndResend = useCallback(
    (sessionId: string, msgUid: string, text: string) => {
      if (isStreaming) return;
      const session = sessions.find((s) => s.id === sessionId);
      if (!session) return;
      const idx = session.messages.findIndex((m) => m.uid === msgUid);
      if (idx < 0) return;
      const before = session.messages.slice(0, idx);
      const userMsg: LucaMessage = { ...session.messages[idx], content: text, ts: Date.now() };
      const assistantMsg: LucaMessage = {
        uid: uid(),
        role: "assistant",
        content: "",
        ts: Date.now(),
        tier,
        streaming: true,
        toolRounds: [],
      };
      setSessions((prev) =>
        prev.map((s) =>
          s.id === sessionId ? { ...s, updatedAt: Date.now(), messages: [...before, userMsg, assistantMsg] } : s,
        ),
      );
      const history = [...buildHistory(before), { role: "user" as const, content: text }];
      void runStream(sessionId, assistantMsg.uid, history, text, tier, false);
    },
    [sessions, isStreaming, tier, runStream],
  );

  const newChat = useCallback(() => {
    setActiveId(null);
    setSearch("");
  }, []);

  /* full reset: abort anything running, wipe storage, drop back to onboarding */
  const resetEverything = useCallback(() => {
    abortRef.current?.abort();
    resetAll();
    setSessions([]);
    setActiveId(null);
    setSettingsOpen(false);
    setMobileNav(false);
    setSearch("");
    setTier("pro");
    document.documentElement.setAttribute("data-theme", "dark");
    setProfile(null);
  }, []);

  const deleteSession = useCallback(
    (id: string) => {
      if (streaming?.sessionId === id) abortRef.current?.abort();
      setSessions((prev) => prev.filter((s) => s.id !== id));
      if (activeId === id) setActiveId(null);
      toast("Chat deleted");
    },
    [activeId, streaming, toast],
  );

  const togglePin = useCallback((id: string) => {
    setSessions((prev) => prev.map((s) => (s.id === id ? { ...s, pinned: !s.pinned } : s)));
  }, []);

  const renameSession = useCallback((id: string, title: string) => {
    setSessions((prev) => prev.map((s) => (s.id === id ? { ...s, title } : s)));
  }, []);

  const onBoarded = useCallback((p: Profile) => {
    setProfile(p);
    setSettings((s) => ({ ...s, theme: p.theme }));
    setReady(false); /* show the interstitial, then reveal the app */
  }, []);

  /* ---------- onboarding ---------- */
  if (!profile) {
    return <Onboarding onComplete={onBoarded} />;
  }

  return (
    <div className="flex h-dvh overflow-hidden bg-canvas text-ink">
      <Sidebar
        sessions={sessions}
        activeId={activeId}
        generatingId={streaming?.sessionId || null}
        search={search}
        onSearch={setSearch}
        onSelect={setActiveId}
        onNew={newChat}
        onRename={renameSession}
        onTogglePin={togglePin}
        onDelete={deleteSession}
        onOpenSettings={() => setSettingsOpen(true)}
        profile={profile}
        mobileOpen={mobileNav}
        onCloseMobile={() => setMobileNav(false)}
      />

      <div className="relative flex min-w-0 flex-1 flex-col">
        <div className="chat-ambient" aria-hidden="true" />

        <header className="relative z-20 flex h-[52px] shrink-0 items-center gap-1.5 border-b border-line bg-canvas/70 px-3.5 backdrop-blur-md">
          <button
            onClick={() => setMobileNav(true)}
            className="grid h-9 w-9 place-items-center rounded-lg text-mute transition-all duration-200 hover:bg-surface1 hover:text-ink active:scale-90 md:hidden"
            aria-label="Open sidebar"
          >
            <Menu size={17} />
          </button>

          <h1 className="max-w-[46ch] truncate text-sm font-semibold">
            {activeSession ? activeSession.title : "New chat"}
          </h1>

          <div className="flex-1" />

          {/* "Source" / "Download source code" button removed â€” was a leftover
              dev/demo feature that bundled the UI source into a downloadable
              luca-ai-ui.zip via the SourceModal below. There's no reason for
              end users of Luca AI to be able to download the front-end code. */}

          <button
            onClick={() => setSettingsOpen(true)}
            className="grid h-9 w-9 place-items-center rounded-lg text-mute transition-all duration-200 hover:bg-surface1 hover:text-ink active:scale-90"
            aria-label="Open settings"
          >
            <SettingsIcon size={16} />
          </button>
        </header>

        <ChatArea
          session={activeSession}
          profile={profile}
          settings={settings}
          onSuggestion={(t) => sendMessage(t, [])}
          onRegenerate={regenerate}
          onEditResend={editAndResend}
          onToast={toast}
        />

        <Composer
          streaming={isStreaming}
          onSend={sendMessage}
          onStop={stopGeneration}
          tier={tier}
          onTierChange={setTier}
          settings={settings}
          onToast={toast}
        />
      </div>

      <SettingsModal
        open={settingsOpen}
        settings={settings}
        onChange={(patch) => setSettings((s) => ({ ...s, ...patch }))}
        onClose={() => setSettingsOpen(false)}
        onReset={resetEverything}
      />

      {/* SourceModal removed â€” was the modal that let users download the
          full UI source as luca-ai-ui.zip. The trigger button above was also
          removed, so sourceOpen is always false; this line is left as a
          no-op for safety (the SourceModal import is still used as a
          ?raw source-string elsewhere in the bundle). */}

      {/* interstitial between onboarding and the app */}
      {!ready && <LoadingScreen onDone={() => setReady(true)} />}

      {/* toasts */}
      <div className="pointer-events-none fixed bottom-5 left-5 z-[70] flex flex-col gap-2">
        {toasts.map((t) => (
          <div
            key={t.id}
            className="anim-toast pointer-events-auto flex items-center gap-2.5 rounded-xl border border-linestrong bg-surface2 px-4 py-2.5 text-[13px] shadow-[0_12px_32px_rgba(0,0,0,0.5)]"
            role="status"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {t.text}
          </div>
        ))}
      </div>
    </div>
  );
}
`,$p=`/// <reference types="vite/client" />
`,Hp=`import { useEffect, useMemo, useRef, useState } from "react";
import { AlertTriangle, ArrowDown, Check, ChevronRight, Copy, Globe, Image as ImageIcon, Pencil, RotateCcw, X } from "lucide-react";
import Logo from "./Logo";
import Markdown from "./Markdown";
import { copyText, formatTime, timeOfDayGreeting } from "../lib/luca";
import type { LucaMessage, Profile, Session, Settings, ToolRound } from "../lib/luca";

interface Props {
  session: Session | null;
  profile: Profile | null;
  settings: Settings;
  onSuggestion: (text: string) => void;
  onRegenerate: (sessionId: string, msgUid: string) => void;
  onEditResend: (sessionId: string, msgUid: string, text: string) => void;
  onToast: (msg: string) => void;
}

const SUGGESTION_POOL = [
  "Explain how mixture-of-experts routing works",
  "Write a debounced search hook in React",
  "Draft a friendly follow-up email to a client",
  "Plan a focused 3-day trip to Kyoto",
  "Debug this SQL join that returns duplicates",
  "Compare Luca Flash vs Pro for my use case",
  "Brainstorm ten names for a coffee app",
  "Summarize the trade-offs of server components",
];

function useSampled(count: number): string[] {
  return useMemo(() => {
    const pool = [...SUGGESTION_POOL];
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool.slice(0, count);
  }, [count]);
}

function ThinkingBlock({ msg }: { msg: LucaMessage }) {
  const [open, setOpen] = useState(!!msg.streaming);
  useEffect(() => {
    if (msg.streaming) setOpen(true);
  }, [msg.streaming]);

  const seconds = msg.thinkingMs ? Math.max(1, Math.round(msg.thinkingMs / 1000)) : 0;
  const label = msg.streaming && !msg.content ? "Thinking" : \`Thought for \${seconds}s\`;

  return (
    <div className="mb-3">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 rounded-md py-0.5 text-[13.5px] font-medium text-accent transition-colors hover:text-accent2"
      >
        <ChevronRight size={13} className={\`transition-transform duration-200 \${open ? "rotate-90" : ""}\`} />
        {msg.streaming && !msg.content ? (
          <span className="flex items-center gap-1.5">
            {label}
            <span className="flex items-center gap-[3px]">
              <span className="typing-dot" />
              <span className="typing-dot" />
              <span className="typing-dot" />
            </span>
          </span>
        ) : (
          label
        )}
      </button>
      {open && msg.reasoning && (
        <div className="anim-fade-in mt-1.5 whitespace-pre-wrap border-l-2 border-accent/30 pl-3.5 text-[13.5px] leading-relaxed text-mute">
          {msg.reasoning}
        </div>
      )}
    </div>
  );
}

function ToolRoundView({ round }: { round: ToolRound }) {
  const [open, setOpen] = useState(false);
  const label =
    round.name === "search_images" ? "Searched images" : round.name === "read_file" ? "Read a file" : "Searched the web";
  return (
    <div className="mb-3.5 rounded-xl border border-line bg-surface1/60 px-3.5 py-2.5">
      <div className="flex items-center gap-2 text-[13.5px] font-medium">
        <Globe size={14} className="text-accent" />
        {label}
        {round.query && <span className="truncate font-normal text-mute">Â· â€œ{round.query}â€</span>}
        {round.status === "done" && round.ms !== undefined && (
          <span className="shrink-0 font-normal text-mute">Â· {(round.ms / 1000).toFixed(1)}s</span>
        )}
        {round.status === "running" ? (
          <span className="ml-1 flex items-center gap-[3px]">
            <span className="typing-dot" />
            <span className="typing-dot" />
            <span className="typing-dot" />
          </span>
        ) : (
          round.sources.length > 0 && (
            <button
              onClick={() => setOpen((v) => !v)}
              className="ml-auto grid h-6 w-6 place-items-center rounded-md text-mute hover:bg-surface3 hover:text-ink"
              aria-label="Toggle sources"
            >
              <ChevronRight size={14} className={\`transition-transform duration-150 \${open ? "rotate-90" : ""}\`} />
            </button>
          )
        )}
      </div>
      {open && round.sources.length > 0 && (
        <div className="anim-fade-in mt-2.5 flex flex-wrap gap-2">
          {round.sources.map((s, i) => (
            <a
              key={i}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-line bg-surface2 py-1 pl-1.5 pr-3 text-[12.5px] transition-colors hover:border-linestrong hover:bg-[#262626]"
            >
              <span className="grid h-[19px] w-[19px] place-items-center rounded-[5px] bg-surface4 text-[10px] font-bold text-mute">
                {s.host.charAt(0).toUpperCase()}
              </span>
              {s.host}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function AssistantRow({
  msg,
  session,
  settings,
  onRegenerate,
  onToast,
}: {
  msg: LucaMessage;
  session: Session;
  settings: Settings;
  onRegenerate: (sessionId: string, msgUid: string) => void;
  onToast: (m: string) => void;
}) {
  const [copied, setCopied] = useState(false);
  const showThinking = !!(msg.reasoning || (msg.streaming && !msg.content));
  const isLastAssistant = [...session.messages].reverse().find((m) => m.role === "assistant")?.uid === msg.uid;

  return (
    <div className="anim-msg group flex gap-3.5">
      <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center text-accent">
        <Logo size={16} />
      </span>

      <div className="min-w-0 flex-1">
        {showThinking && <ThinkingBlock msg={msg} />}
        {msg.toolRounds?.map((r) => <ToolRoundView key={r.id} round={r} />)}

        {msg.content ? (
          <div className="min-w-0">
            <Markdown text={msg.content} />
            {msg.streaming && <span className="stream-cursor" aria-hidden="true" />}
          </div>
        ) : (
          !showThinking && msg.streaming && (
            <span className="flex items-center gap-[4px] py-1">
              <span className="typing-dot" />
              <span className="typing-dot" />
              <span className="typing-dot" />
            </span>
          )
        )}

        {msg.error && (
          <div className="mt-2.5 flex items-start gap-2 rounded-lg border border-danger/30 bg-danger/10 px-3 py-2 text-[13px] text-danger">
            <AlertTriangle size={15} className="mt-0.5 shrink-0" />
            <span>{msg.error}</span>
          </div>
        )}
        {msg.interrupted && !msg.streaming && (
          <div className="mt-2.5 flex items-center gap-1.5 text-xs text-warn">
            <AlertTriangle size={12} /> Generation was stopped early
          </div>
        )}

        {!msg.streaming && (msg.content || msg.error) && (
          <div className="mt-2 flex min-h-[26px] items-center gap-2">
            {settings.showTimestamps && <span className="text-[11.5px] text-mute">{formatTime(msg.ts)}</span>}
            {msg.tier && (
              <span className="rounded-full border border-line bg-surface1 px-2 py-px text-[11px] font-semibold tracking-wide text-mute">
                Luca {msg.tier === "flash" ? "Flash" : "Pro"}
              </span>
            )}
            <div className="ml-auto flex gap-0.5 opacity-0 transition-opacity duration-150 focus-within:opacity-100 group-hover:opacity-100">
              <button
                onClick={async () => {
                  if (await copyText(msg.content)) {
                    setCopied(true);
                    onToast("Copied to clipboard");
                    setTimeout(() => setCopied(false), 1400);
                  }
                }}
                className="grid h-[27px] w-[27px] place-items-center rounded-md text-mute transition-colors hover:bg-surface2 hover:text-ink"
                aria-label="Copy message"
              >
                {copied ? <Check size={15} className="text-ok" /> : <Copy size={15} />}
              </button>
              {isLastAssistant && !msg.error && (
                <button
                  onClick={() => onRegenerate(session.id, msg.uid)}
                  className="grid h-[27px] w-[27px] place-items-center rounded-md text-mute transition-colors hover:bg-surface2 hover:text-ink"
                  aria-label="Regenerate response"
                >
                  <RotateCcw size={14} />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function UserRow({
  msg,
  session,
  settings,
  onEditResend,
  onToast,
  streamingSomewhere,
}: {
  msg: LucaMessage;
  session: Session;
  settings: Settings;
  onEditResend: (sessionId: string, msgUid: string, text: string) => void;
  onToast: (m: string) => void;
  streamingSomewhere: boolean;
}) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(msg.content);
  const [copied, setCopied] = useState(false);

  return (
    <div className="anim-msg group flex justify-end">
      <div className="max-w-[86%] sm:max-w-[72%]">
        {editing ? (
          <div className="rounded-2xl border border-accent/50 bg-surface2 p-2 shadow-[0_0_0_4px_color-mix(in_srgb,var(--color-accent)_9%,transparent)]">
            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              rows={Math.min(6, Math.max(2, draft.split("\\n").length))}
              autoFocus
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  if (draft.trim()) {
                    onEditResend(session.id, msg.uid, draft.trim());
                    setEditing(false);
                  }
                }
                if (e.key === "Escape") setEditing(false);
              }}
              className="block w-full resize-none rounded-lg bg-transparent px-2 py-1.5 text-[16px] leading-relaxed text-ink outline-none md:text-[15px]"
            />
            <div className="flex justify-end gap-1.5 px-1 pb-0.5">
              <button
                onClick={() => setEditing(false)}
                className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-mute hover:bg-surface3 hover:text-ink"
              >
                <X size={13} /> Cancel
              </button>
              <button
                onClick={() => {
                  if (draft.trim()) {
                    onEditResend(session.id, msg.uid, draft.trim());
                    setEditing(false);
                  }
                }}
                disabled={!draft.trim() || streamingSomewhere}
                className="flex items-center gap-1.5 rounded-lg bg-ink px-3 py-1.5 text-xs font-semibold text-canvas transition-opacity hover:bg-ink/85 disabled:opacity-40"
              >
                <Check size={13} /> Save & send
              </button>
            </div>
          </div>
        ) : (
          <>
            {msg.attachments && msg.attachments.length > 0 && (
              <div className="mb-1.5 flex flex-wrap justify-end gap-2">
                {msg.attachments.map((a) =>
                  a.type.startsWith("image/") ? (
                    <img
                      key={a.id}
                      src={a.dataUrl}
                      alt={a.name}
                      className="h-20 max-w-[180px] rounded-xl border border-line object-cover"
                    />
                  ) : (
                    <span key={a.id} className="flex items-center gap-1.5 rounded-lg border border-line bg-surface2 px-2.5 py-1.5 text-xs text-mute">
                      <ImageIcon size={13} /> {a.name}
                    </span>
                  ),
                )}
              </div>
            )}
            <div className="whitespace-pre-wrap rounded-[18px] rounded-br-md border border-line bg-surface2 px-4 py-3 text-[16px] leading-relaxed transition-colors hover:border-linestrong md:py-2.5 md:text-[15px]">
              {msg.content}
            </div>
            <div className="mt-1.5 flex items-center justify-end gap-2">
              {settings.showTimestamps && <span className="text-[11.5px] text-mute opacity-0 transition-opacity group-hover:opacity-100">{formatTime(msg.ts)}</span>}
              <div className="flex gap-0.5 transition-opacity duration-150">
                <button
                  onClick={async () => {
                    if (await copyText(msg.content)) {
                      setCopied(true);
                      onToast("Copied to clipboard");
                      setTimeout(() => setCopied(false), 1400);
                    }
                  }}
                  className="grid h-[27px] w-[27px] place-items-center rounded-md text-mute transition-colors hover:bg-surface2 hover:text-ink"
                  aria-label="Copy message"
                >
                  {copied ? <Check size={15} className="text-ok" /> : <Copy size={15} />}
                </button>
                <button
                  onClick={() => {
                    setDraft(msg.content);
                    setEditing(true);
                  }}
                  className="grid h-[27px] w-[27px] place-items-center rounded-md text-mute transition-colors hover:bg-surface2 hover:text-ink"
                  aria-label="Edit message"
                >
                  <Pencil size={14} />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function ChatArea({ session, profile, settings, onSuggestion, onRegenerate, onEditResend, onToast }: Props) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [showJump, setShowJump] = useState(false);
  const nearBottomRef = useRef(true);
  const suggestions = useSampled(4);

  const messages = session?.messages || [];
  const streaming = messages.some((m) => m.streaming);
  const isEmpty = messages.length === 0;

  useEffect(() => {
    const el = scrollRef.current;
    if (el && nearBottomRef.current) el.scrollTop = el.scrollHeight;
  }, [messages, session?.id]);

  const onScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const near = el.scrollHeight - el.scrollTop - el.clientHeight < 130;
    nearBottomRef.current = near;
    setShowJump(!near);
  };

  const greeting = timeOfDayGreeting();
  const firstName = profile?.name && profile.name !== "User" ? profile.name.split(" ")[0] : null;

  return (
    <div className="relative z-10 min-h-0 flex-1">
      <div ref={scrollRef} onScroll={onScroll} className="h-full overflow-y-auto">
        {isEmpty ? (
          <div className="mx-auto max-w-[780px] px-5 pt-[10vh]">
            <h2 className="anim-fade-up font-display text-[clamp(24px,3.4vw,32px)] font-semibold leading-tight tracking-tight">
              {greeting}
              {firstName ? \`, \${firstName}\` : ""}
            </h2>
            <p className="anim-fade-up mt-2 text-[15px] text-mute" style={{ ["--d" as string]: "70ms" }}>
              Where should we start?
            </p>
            <div className="mt-7 grid gap-2.5 sm:grid-cols-2">
              {suggestions.map((s, i) => (
                <button
                  key={s}
                  onClick={() => onSuggestion(s)}
                  className="anim-fade-up rounded-xl border border-line bg-surface1 px-4 py-3 text-left text-[13.5px] leading-snug transition-all duration-200 hover:-translate-y-0.5 hover:border-linestrong hover:bg-surface2 active:scale-[0.98]"
                  style={{ ["--d" as string]: \`\${140 + i * 60}ms\` }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="mx-auto flex max-w-[780px] flex-col gap-6 px-4 pb-4 pt-6 sm:px-5">
            {messages.map((m) =>
              m.role === "user" ? (
                <UserRow
                  key={m.uid}
                  msg={m}
                  session={session!}
                  settings={settings}
                  onEditResend={onEditResend}
                  onToast={onToast}
                  streamingSomewhere={streaming}
                />
              ) : (
                <AssistantRow key={m.uid} msg={m} session={session!} settings={settings} onRegenerate={onRegenerate} onToast={onToast} />
              ),
            )}
          </div>
        )}
      </div>

      {showJump && !isEmpty && (
        <button
          onClick={() => {
            const el = scrollRef.current;
            if (el) {
              nearBottomRef.current = true;
              el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
            }
          }}
          aria-label="Scroll to bottom"
          className="anim-pop absolute bottom-4 right-5 z-10 grid h-8 w-8 place-items-center rounded-full border border-linestrong bg-surface2 text-mute shadow-[0_6px_18px_rgba(0,0,0,0.45)] transition-all hover:-translate-y-0.5 hover:text-ink"
        >
          <ArrowDown size={16} />
        </button>
      )}

    </div>
  );
}
`,Vp=`import { useEffect, useRef, useState } from "react";
import { ArrowUp, Check, ChevronDown, FileText, Image as ImageIcon, Mic, Paperclip, Square, X } from "lucide-react";
import { COMPOSER_MAX_LEN, MODELS, uid } from "../lib/luca";
import type { Attachment, Settings, Tier } from "../lib/luca";

interface Props {
  streaming: boolean;
  onSend: (text: string, attachments: Attachment[]) => void;
  onStop: () => void;
  tier: Tier;
  onTierChange: (t: Tier) => void;
  settings: Settings;
  onToast: (msg: string) => void;
}

export default function Composer({
  streaming,
  onSend,
  onStop,
  tier,
  onTierChange,
  settings,
  onToast,
}: Props) {
  const [text, setText] = useState("");
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const [modelMenu, setModelMenu] = useState(false);
  const [listening, setListening] = useState(false);
  const taRef = useRef<HTMLTextAreaElement | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const recogRef = useRef<{ stop: () => void } | null>(null);

  useEffect(() => {
    if (!modelMenu) return;
    const onDoc = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setModelMenu(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setModelMenu(false);
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [modelMenu]);

  const autosize = () => {
    const ta = taRef.current;
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = Math.min(ta.scrollHeight, 200) + "px";
  };

  useEffect(autosize, [text]);

  const canSend = (text.trim().length > 0 || attachments.length > 0) && !streaming;

  const doSend = () => {
    if (!canSend) return;
    if (text.length > COMPOSER_MAX_LEN) {
      onToast("Message is over the " + COMPOSER_MAX_LEN.toLocaleString() + " character limit");
      return;
    }
    onSend(text.trim(), attachments);
    setText("");
    setAttachments([]);
    requestAnimationFrame(() => taRef.current?.focus());
  };

  const addFiles = (files: FileList | File[]) => {
    const list = Array.from(files);
    for (const f of list) {
      if (f.size > 4 * 1024 * 1024) {
        onToast(\`â€œ\${f.name}â€ is over 4 MB â€” skipped\`);
        continue;
      }
      const reader = new FileReader();
      reader.onload = () => {
        setAttachments((prev) => [
          ...prev,
          { id: uid(), name: f.name, type: f.type, size: f.size, dataUrl: String(reader.result) },
        ]);
      };
      reader.readAsDataURL(f);
    }
  };

  const toggleMic = () => {
    const SR = (window as unknown as { webkitSpeechRecognition?: new () => {
      lang: string;
      continuous: boolean;
      interimResults: boolean;
      onresult: ((e: { results: { [i: number]: { [j: number]: { transcript: string } } } }) => void) | null;
      onend: (() => void) | null;
      onerror: (() => void) | null;
      start: () => void;
      stop: () => void;
    } }).webkitSpeechRecognition;

    if (!SR) {
      onToast("Voice input isn't supported in this browser");
      return;
    }
    if (listening) {
      recogRef.current?.stop();
      setListening(false);
      return;
    }
    const r = new SR();
    r.lang = "en-US";
    r.continuous = false;
    r.interimResults = false;
    r.onresult = (e) => {
      const transcript = e.results[0]?.[0]?.transcript || "";
      if (transcript) setText((t) => (t ? t + " " : "") + transcript);
    };
    r.onend = () => setListening(false);
    r.onerror = () => {
      setListening(false);
      onToast("Couldn't hear anything â€” try again");
    };
    r.start();
    recogRef.current = r;
    setListening(true);
  };

  const activeModel = MODELS.find((m) => m.tier === tier) || MODELS[1];
  const nearLimit = text.length > COMPOSER_MAX_LEN - 20000;

  return (
    <div
      className="relative z-10 mx-auto w-full max-w-[820px] px-3 pb-[max(14px,env(safe-area-inset-bottom))] pt-1.5 sm:px-5"
      onDragOver={(e) => {
        e.preventDefault();
        setDragOver(true);
      }}
      onDragLeave={() => setDragOver(false)}
      onDrop={(e) => {
        e.preventDefault();
        setDragOver(false);
        if (e.dataTransfer.files.length) addFiles(e.dataTransfer.files);
      }}
    >
      <div
        className={\`rounded-3xl border bg-surface4 p-1.5 pb-2 transition-colors duration-200 \${
          dragOver ? "border-accent" : "border-line"
        }\`}
      >
        {attachments.length > 0 && (
          <div className="flex flex-wrap gap-2 px-2.5 pb-2 pt-1.5">
            {attachments.map((a) => (
              <div
                key={a.id}
                className="anim-pop flex items-center gap-2 rounded-lg border border-linestrong bg-surface3 py-1.5 pl-1.5 pr-2 text-[12.5px]"
              >
                {a.type.startsWith("image/") ? (
                  <img src={a.dataUrl} alt="" className="h-7 w-7 rounded-md object-cover" />
                ) : (
                  <span className="grid h-7 w-7 place-items-center rounded-md bg-surface4 text-mute">
                    {a.type.startsWith("image") ? <ImageIcon size={14} /> : <FileText size={14} />}
                  </span>
                )}
                <span className="max-w-[140px] truncate">{a.name}</span>
                <button
                  onClick={() => setAttachments((prev) => prev.filter((x) => x.id !== a.id))}
                  className="grid h-5 w-5 place-items-center rounded text-mute hover:bg-surface4 hover:text-ink"
                  aria-label={\`Remove \${a.name}\`}
                >
                  <X size={12} />
                </button>
              </div>
            ))}
          </div>
        )}

        <textarea
          ref={taRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (settings.enterToSend && !e.shiftKey) {
                e.preventDefault();
                doSend();
              } else if (!settings.enterToSend && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                doSend();
              }
            }
          }}
          rows={1}
          placeholder="Ask anything"
          aria-label="Message Luca"
          className="block w-full resize-none border-none bg-transparent px-3 pb-1 pt-2 text-[16px] leading-relaxed text-ink outline-none placeholder:text-mute md:text-[15px]"
        />

        <div className="flex items-center gap-1.5 px-1 pt-0.5">
          <button
            onClick={() => fileRef.current?.click()}
            className="grid h-9 w-9 place-items-center rounded-full text-mute transition-all hover:bg-surface3 hover:text-ink active:scale-90"
            aria-label="Attach files"
          >
            <Paperclip size={17} />
          </button>
          <input
            ref={fileRef}
            type="file"
            multiple
            className="hidden"
            onChange={(e) => {
              if (e.target.files?.length) addFiles(e.target.files);
              e.target.value = "";
            }}
          />

          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setModelMenu((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={modelMenu}
              className="flex h-8 items-center gap-1.5 rounded-full px-3 text-[13px] font-medium text-mute transition-colors hover:bg-surface3 hover:text-ink"
            >
              <span id="modelMenuLabel">Luca {activeModel.label}</span>
              <ChevronDown size={13} className={\`transition-transform duration-150 \${modelMenu ? "rotate-180" : ""}\`} />
            </button>

            {modelMenu && (
              <div
                className="anim-pop-up absolute bottom-11 left-0 z-50 w-[148px] rounded-xl border border-linestrong bg-surface2 p-1 shadow-[0_14px_38px_rgba(0,0,0,0.55)]"
                role="menu"
              >
                <div className="px-2.5 pb-1 pt-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-mute/80">
                  Model
                </div>
                {MODELS.map((m) => (
                  <button
                    key={m.id}
                    role="menuitemradio"
                    aria-checked={m.tier === tier}
                    onClick={() => {
                      onTierChange(m.tier);
                      setModelMenu(false);
                    }}
                    className={\`flex w-full items-center justify-between gap-2 rounded-lg px-2.5 py-[7px] text-left text-[13px] font-medium transition-all duration-150 hover:bg-surface3 active:scale-[0.98] \${
                      m.tier === tier ? "text-ink" : "text-mute"
                    }\`}
                  >
                    Luca {m.label}
                    {m.tier === tier && <Check size={13} className="anim-scale-in text-accent" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex-1" />

          {nearLimit && (
            <span className="text-[11.5px] text-danger">{text.length.toLocaleString()} / {COMPOSER_MAX_LEN.toLocaleString()}</span>
          )}

          <button
            onClick={toggleMic}
            aria-pressed={listening}
            className={\`grid h-9 w-9 place-items-center rounded-full transition-all active:scale-90 \${
              listening ? "bg-danger/15 text-danger" : "text-mute hover:bg-surface3 hover:text-ink"
            }\`}
            aria-label="Voice input"
          >
            <Mic size={16} className={listening ? "animate-pulse" : ""} />
          </button>

          {streaming ? (
            <button
              onClick={onStop}
              aria-label="Stop generating"
              className="grid h-9 w-9 place-items-center rounded-full bg-surface3 text-ink transition-all hover:bg-linestrong active:scale-90"
            >
              <Square size={13} fill="currentColor" strokeWidth={0} />
            </button>
          ) : (
            <button
              onClick={doSend}
              disabled={!canSend}
              aria-label="Send message"
              className={\`grid h-9 w-9 place-items-center rounded-full transition-all duration-200 \${
                canSend
                  ? "bg-ink text-canvas shadow-[0_3px_14px_rgba(0,0,0,0.4)] hover:bg-ink/85 active:scale-90"
                  : "bg-surface3 text-mute"
              }\`}
            >
              <ArrowUp size={17} strokeWidth={2.5} />
            </button>
          )}
        </div>
      </div>

      <div className="pt-2 text-center text-[11.5px] text-mute/85">
        {settings.enterToSend ? "Enter to send Â· Shift+Enter for a new line" : "Ctrl/âŒ˜+Enter to send"}
        {" Â· "}Luca can make mistakes
      </div>
    </div>
  );
}
`,Kp=`import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const started = performance.now();
    const duration = 1250;
    let raf = 0;
    let t1 = 0;
    let t2 = 0;

    const tick = (t: number) => {
      const k = Math.min(1, (t - started) / duration);
      /* ease-out curve so it feels like it snaps into place */
      setProgress(1 - Math.pow(1 - k, 3));
      if (k < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        t1 = window.setTimeout(() => setLeaving(true), 180);
        t2 = window.setTimeout(onDone, 680);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [onDone]);

  return (
    <div
      className={\`fixed inset-0 z-[80] grid place-items-center bg-canvas transition-all duration-500 \${
        leaving ? "pointer-events-none scale-[1.03] opacity-0" : "opacity-100"
      }\`}
      aria-label="Getting Luca ready"
      role="status"
    >
      {/* ambient ember glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(620px 380px at 50% 38%, color-mix(in srgb, var(--color-accent) 9%, transparent), transparent 70%)",
        }}
      />

      <div className="relative flex flex-col items-center px-6">
        <div className="relative mb-7 grid place-items-center">
          <span
            className="anim-glow absolute inset-[-26px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, color-mix(in srgb, var(--color-accent) 26%, transparent), transparent 68%)",
            }}
            aria-hidden="true"
          />
          <span className="anim-breathe relative grid h-[64px] w-[64px] place-items-center text-accent">
            <Logo size={38} />
          </span>
        </div>

        <div className="anim-fade-up font-display text-[19px] font-semibold tracking-tight">
          Getting Luca ready
          <span className="ml-2 inline-flex items-end gap-[3px] pb-[3px]">
            <span className="typing-dot" />
            <span className="typing-dot" />
            <span className="typing-dot" />
          </span>
        </div>

        <div className="anim-fade-up mt-6 h-[3px] w-44 overflow-hidden rounded-full bg-surface3" style={{ ["--d" as string]: "120ms" }}>
          <div
            className="h-full rounded-full"
            style={{
              width: \`\${progress * 100}%\`,
              background: "linear-gradient(90deg, var(--color-accent), var(--color-accent2))",
              boxShadow: "0 0 12px color-mix(in srgb, var(--color-accent) 55%, transparent)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
`,Gp=`/* Brand mark â€” the single approved logo (allsvgicons.com swirl path).
   Every previous "spark" glyph in the app routes through this component. */
export default function Logo({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M41.883,9.38c-1.092-1.179-2.582-1.855-4.194-1.904c-1.629-0.046-3.171,0.542-4.346,1.667l-0.252,0.241 c-2.551,2.441-2.594,6.42-0.098,9.059C34.932,20.493,36,23.177,36,26c0,3.018-1.197,5.832-3.372,7.926 c-2.173,2.092-5.034,3.175-8.058,3.066c-5.611-0.213-10.35-4.951-10.566-10.618c-0.001-0.019-0.161-1.836,0.338-4.429 c1.164-6.057,5.081-11.229,10.745-14.193l6.002-3.141c0.365-0.191,0.576-0.588,0.53-0.998c-0.047-0.41-0.34-0.749-0.739-0.854 c-2.741-0.724-5.588-0.928-8.461-0.618C11.728,3.307,3.19,11.925,2.118,22.633C1.425,29.57,3.835,36.358,8.731,41.258 c4.347,4.35,10.183,6.741,16.291,6.74c0.772,0,1.551-0.038,2.329-0.115c10.785-1.071,19.416-9.673,20.523-20.451 C48.556,20.809,46.371,14.229,41.883,9.38z" />
    </svg>
  );
}
`,Zp=`import { useState } from "react";
import { Check, Download } from "lucide-react";
import { copyText } from "../lib/luca";

/* Small, safe markdown subset renderer: paragraphs, headings, **bold**,
   *italic*, \`inline code\`, [links](url), > quotes, - / 1. lists, \`\`\`fences\`\`\`. */

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function inline(text: string): string {
  let s = escapeHtml(text);
  s = s.replace(/\`([^\`]+)\`/g, '<code class="font-mono text-[13px] px-1.5 py-px rounded-md bg-surface3 border border-linestrong/70 text-ink whitespace-nowrap">$1</code>');
  s = s.replace(/\\*\\*([^*]+)\\*\\*/g, "<strong>$1</strong>");
  s = s.replace(/(^|[^*])\\*([^*\\n]+)\\*/g, "$1<em>$2</em>");
  s = s.replace(/\\[([^\\]]+)\\]\\((https?:\\/\\/[^\\s)]+)\\)/g, '<a href="$2" target="_blank" rel="noreferrer" class="text-accent hover:underline underline-offset-2">$1</a>');
  return s;
}

function CodeBlock({ lang, code }: { lang: string; code: string }) {
  const [copied, setCopied] = useState(false);

  const download = () => {
    const blob = new Blob([code], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "luca-snippet." + (lang || "txt");
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  return (
    <div className="my-3 overflow-hidden rounded-xl border border-line bg-[#151515]">
      <div className="flex items-center justify-between border-b border-line bg-surface2/70 px-3.5 py-1.5">
        <span className="font-mono text-[11px] tracking-wide text-mute">{lang || "text"}</span>
        <div className="flex gap-0.5">
          <button
            className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-mute transition-colors hover:bg-surface3 hover:text-ink"
            onClick={async () => {
              if (await copyText(code)) {
                setCopied(true);
                setTimeout(() => setCopied(false), 1400);
              }
            }}
            aria-label="Copy code"
          >
            {copied ? <Check size={13} className="text-ok" /> : <span className="inline-flex"><CopyGlyph /></span>}
            {copied ? "Copied" : "Copy"}
          </button>
          <button
            className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-mute transition-colors hover:bg-surface3 hover:text-ink"
            onClick={download}
            aria-label="Copy"
          >
            <Download size={13} /> Download
          </button>
        </div>
      </div>
      <pre className="overflow-x-auto px-4 py-3 font-mono text-[13px] leading-relaxed text-[#e2e2e2]">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function CopyGlyph() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="12" height="12" rx="2" />
      <path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" />
    </svg>
  );
}

interface Block {
  type: "code" | "html";
  lang?: string;
  content: string;
}

function parseBlocks(md: string): Block[] {
  const blocks: Block[] = [];
  const parts = md.split("\`\`\`");
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (i % 2 === 1) {
      const nl = part.indexOf("\\n");
      const lang = nl === -1 ? "" : part.slice(0, nl).trim();
      const code = nl === -1 ? part : part.slice(nl + 1);
      blocks.push({ type: "code", lang, content: code.replace(/\\n$/, "") });
    } else if (part.trim()) {
      blocks.push({ type: "html", content: renderLines(part.trim()) });
    }
  }
  return blocks;
}

function renderLines(text: string): string {
  const lines = text.split("\\n");
  const out: string[] = [];
  let list: string[] = [];
  let olist: string[] = [];
  let quote: string[] = [];
  let para: string[] = [];

  const flushList = () => {
    if (list.length) {
      out.push('<ul class="grid gap-1.5 pl-5 list-disc mb-3 marker:text-mute">' + list.map((l) => \`<li>\${inline(l)}</li>\`).join("") + "</ul>");
      list = [];
    }
  };
  const flushOlist = () => {
    if (olist.length) {
      out.push('<ol class="grid gap-1.5 pl-5 list-decimal mb-3 marker:text-mute">' + olist.map((l) => \`<li>\${inline(l)}</li>\`).join("") + "</ol>");
      olist = [];
    }
  };
  const flushQuote = () => {
    if (quote.length) {
      out.push('<blockquote class="border-l-2 border-linestrong pl-4 my-3 text-[15px] text-ink/90">' + quote.map((l) => inline(l)).join("<br/>") + "</blockquote>");
      quote = [];
    }
  };
  const flushPara = () => {
    if (para.length) {
      out.push('<p class="mb-3 last:mb-0">' + para.map((l) => inline(l)).join("<br/>") + "</p>");
      para = [];
    }
  };
  const flushAll = () => {
    flushList();
    flushOlist();
    flushQuote();
    flushPara();
  };

  for (const raw of lines) {
    const line = raw.trimEnd();
    const t = line.trim();
    if (/^\`\`\`/.test(t)) continue;
    if (!t) {
      flushAll();
      continue;
    }
    const h = t.match(/^(#{1,3})\\s+(.*)/);
    if (h) {
      flushAll();
      const lvl = h[1].length;
      const cls =
        lvl === 1
          ? "font-display font-semibold text-xl mt-4 mb-2"
          : lvl === 2
            ? "font-display font-semibold text-lg mt-4 mb-2"
            : "font-semibold text-[15px] mt-3 mb-1.5";
      out.push(\`<div class="\${cls}">\${inline(h[2])}</div>\`);
      continue;
    }
    const ul = t.match(/^[-*]\\s+(.*)/);
    if (ul) {
      flushOlist();
      flushQuote();
      flushPara();
      list.push(ul[1]);
      continue;
    }
    const ol = t.match(/^\\d+\\.\\s+(.*)/);
    if (ol) {
      flushList();
      flushQuote();
      flushPara();
      olist.push(ol[1]);
      continue;
    }
    if (t.startsWith("> ")) {
      flushList();
      flushOlist();
      flushPara();
      quote.push(t.slice(2));
      continue;
    }
    flushList();
    flushOlist();
    flushQuote();
    para.push(t);
  }
  flushAll();
  return out.join("");
}

export default function Markdown({ text }: { text: string }) {
  const blocks = parseBlocks(text);
  return (
    <div className="text-[16px] leading-[1.68] md:text-[15px]">
      {blocks.map((b, i) =>
        b.type === "code" ? (
          <CodeBlock key={i} lang={b.lang || ""} code={b.content} />
        ) : (
          <div key={i} dangerouslySetInnerHTML={{ __html: b.content }} />
        ),
      )}
    </div>
  );
}
`,Yp=`import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  Check,
  Code,
  Feather,
  GraduationCap,
  Microscope,
  PenTool,
  Rocket,
  Upload,
  X,
} from "lucide-react";
import Logo from "./Logo";
import { downscaleImage, loadOnboardDraft, saveOnboardDraft, saveProfile } from "../lib/luca";
import type { Profile } from "../lib/luca";

const PERSONAS = [
  { id: "developer", label: "Developer", icon: Code },
  { id: "student", label: "Student", icon: GraduationCap },
  { id: "designer", label: "Designer", icon: PenTool },
  { id: "writer", label: "Writer", icon: Feather },
  { id: "researcher", label: "Researcher", icon: Microscope },
  { id: "founder", label: "Founder", icon: Rocket },
] as const;

const STEP_META = [
  { n: "01", label: "You" },
  { n: "02", label: "Work" },
  { n: "03", label: "Canvas" },
];

export default function Onboarding({ onComplete }: { onComplete: (p: Profile) => void }) {
  const draft = useRef(loadOnboardDraft());
  const [step, setStep] = useState(() => Math.min(3, Math.max(1, draft.current?.step || 1)));
  const [dir, setDir] = useState<"fwd" | "back">("fwd");
  const [name, setName] = useState(draft.current?.name || "");
  const [persona, setPersona] = useState<string | null>(draft.current?.persona || null);
  const [theme, setTheme] = useState<"dark" | "light">(draft.current?.theme || "dark");
  const [avatar, setAvatar] = useState<string | null>(draft.current?.avatar || null);
  const fileRef = useRef<HTMLInputElement | null>(null);

  /* live theme preview + draft persistence */
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    saveOnboardDraft({ name, persona, theme, avatar, step, complete: false });
  }, [name, persona, theme, avatar, step]);

  const go = (next: number) => {
    setDir(next > step ? "fwd" : "back");
    setStep(next);
  };

  const finish = () => {
    const profile: Profile = {
      name: name.trim() || "User",
      persona,
      theme,
      avatar,
      complete: true,
      completedAt: Date.now(),
    };
    saveProfile(profile);
    onComplete(profile);
  };

  const next = () => {
    if (step === 1 && !name.trim()) return;
    if (step < 3) go(step + 1);
    else finish();
  };

  const onFile = async (file: File | undefined) => {
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = async () => {
      const scaled = await downscaleImage(String(reader.result), 256);
      setAvatar(scaled);
    };
    reader.readAsDataURL(file);
  };

  const personaLabel = PERSONAS.find((p) => p.id === persona)?.label || null;

  return (
    <div className="relative flex h-dvh flex-col overflow-hidden bg-canvas">
      {/* layered ember ambience */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 480px at 18% -12%, color-mix(in srgb, var(--color-accent) 8%, transparent), transparent 70%)," +
            "radial-gradient(760px 520px at 92% 112%, color-mix(in srgb, var(--color-avatar) 7%, transparent), transparent 70%)," +
            "radial-gradient(1200px 700px at 50% 120%, rgba(0,0,0,0.5), transparent 75%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex h-full w-full max-w-[640px] flex-col px-6 sm:px-8">
        {/* header */}
        <header className="anim-fade-in flex items-center justify-between pt-6 sm:pt-8">
          <div className="flex items-center gap-2.5">
            <span className="grid h-[30px] w-[30px] place-items-center rounded-[10px] border border-linestrong bg-gradient-to-b from-surface2 to-surface1 text-accent shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <Logo size={17} />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">Luca</span>
          </div>
          <span className="font-mono text-[11.5px] tracking-[0.14em] text-mute">
            {STEP_META[step - 1].n} <span className="text-linestrong">/</span> 03
          </span>
        </header>

        {/* stepper */}
        <div className="anim-fade-up mt-7" style={{ ["--d" as string]: "60ms" }}>
          <div className="flex items-center gap-2">
            {STEP_META.map((s, i) => {
              const state = i + 1 < step ? "done" : i + 1 === step ? "active" : "todo";
              return (
                <button
                  key={s.n}
                  onClick={() => i + 1 < step && go(i + 1)}
                  disabled={i + 1 >= step}
                  className={\`flex items-center gap-1.5 rounded-full border px-3 py-[5px] text-[12px] font-semibold transition-all duration-300 \${
                    state === "active"
                      ? "border-accent/60 bg-accent/10 text-accent"
                      : state === "done"
                        ? "border-line text-mute hover:border-linestrong hover:text-ink"
                        : "border-line/60 text-mute/60"
                  }\`}
                >
                  {state === "done" ? <Check size={12} className="text-accent" /> : <span className="font-mono text-[10px]">{s.n}</span>}
                  {s.label}
                </button>
              );
            })}
            <div className="relative ml-1 h-[3px] flex-1 overflow-hidden rounded-full bg-surface3">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: \`\${(step / 3) * 100}%\`,
                  background: "linear-gradient(90deg, var(--color-accent), var(--color-accent2))",
                  transitionTimingFunction: "var(--ease-spring)",
                }}
              />
            </div>
          </div>
        </div>

        {/* step body */}
        <main className="grid min-h-0 flex-1 content-center overflow-y-auto py-7">
          <div key={step} className={dir === "fwd" ? "anim-step-fwd" : "anim-step-back"}>
            {step === 1 && (
              <>
                <h1 className="font-display text-[clamp(30px,6vw,42px)] font-semibold leading-[1.08] tracking-tight">
                  Hey â€” I'm Luca.
                  <br />
                  <span className="text-mute">Let's get acquainted.</span>
                </h1>
                <p className="mt-3.5 max-w-[46ch] text-[15px] leading-relaxed text-mute">
                  First things first: what should I call you? This is how I'll greet you from now on.
                </p>

                <div className="mt-9 flex items-center gap-5">
                  <button
                    onClick={() => (avatar ? setAvatar(null) : fileRef.current?.click())}
                    className="group relative grid h-[72px] w-[72px] shrink-0 place-items-center overflow-hidden rounded-full transition-transform duration-300 hover:scale-[1.04] active:scale-95"
                    style={{
                      background: avatar ? undefined : "color-mix(in srgb, var(--color-avatar) 14%, transparent)",
                      border: avatar ? "2px solid var(--color-linestrong)" : "1.5px dashed color-mix(in srgb, var(--color-avatar) 60%, transparent)",
                    }}
                    aria-label={avatar ? "Remove photo" : "Add a profile photo"}
                  >
                    {avatar ? (
                      <img src={avatar} alt="" className="h-full w-full object-cover" />
                    ) : (
                      <Camera size={24} className="text-avatar transition-transform duration-300 group-hover:scale-110" />
                    )}
                    {avatar && (
                      <span className="absolute inset-0 grid place-items-center bg-black/55 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        <X size={20} className="text-white" />
                      </span>
                    )}
                  </button>
                  <input type="file" ref={fileRef} accept="image/*" className="hidden" onChange={(e) => onFile(e.target.files?.[0])} />

                  <div className="min-w-0 flex-1">
                    <label htmlFor="ob-name" className="mb-1.5 block text-[11.5px] font-semibold uppercase tracking-[0.08em] text-mute">
                      Your name
                    </label>
                    <input
                      id="ob-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && next()}
                      placeholder="e.g. Harper"
                      maxLength={40}
                      autoFocus
                      autoComplete="off"
                      className="w-full rounded-xl border border-linestrong bg-surface2 px-4 py-3 text-[16px] text-ink transition-colors duration-200 placeholder:text-mute/60 hover:border-[#484848] focus:border-linestrong focus:bg-surface3 md:text-[15px]"
                    />
                  </div>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <h1 className="font-display text-[clamp(30px,6vw,42px)] font-semibold leading-[1.08] tracking-tight">
                  What kind of work
                  <br />
                  <span className="text-mute">do you do?</span>
                </h1>
                <p className="mt-3.5 max-w-[48ch] text-[15px] leading-relaxed text-mute">
                  I'll tune my tone and defaults to match â€” code-heavy, study-friendly, or something else. Nothing locks you in.
                </p>

                <div className="mt-9 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                  {PERSONAS.map((p, i) => {
                    const Icon = p.icon;
                    const selected = persona === p.id;
                    return (
                      <button
                        key={p.id}
                        onClick={() => setPersona(p.id)}
                        className={\`anim-fade-up group relative flex flex-col items-center gap-2.5 rounded-2xl border px-3 py-5 transition-all duration-200 \${
                          selected
                            ? "border-accent/70 bg-accent/[0.09] shadow-[0_0_0_3px_color-mix(in_srgb,var(--color-accent)_14%,transparent)]"
                            : "border-line bg-surface1/60 hover:-translate-y-1 hover:border-linestrong hover:bg-surface2"
                        }\`}
                        style={{ ["--d" as string]: \`\${90 + i * 45}ms\` }}
                        aria-pressed={selected}
                      >
                        <Icon
                          size={20}
                          className={\`transition-colors duration-200 \${selected ? "text-accent" : "text-mute group-hover:text-ink"}\`}
                        />
                        <span className={\`text-[13.5px] font-semibold \${selected ? "text-ink" : "text-mute group-hover:text-ink"}\`}>
                          {p.label}
                        </span>
                        {selected && (
                          <span className="anim-scale-in absolute right-2 top-2 grid h-[18px] w-[18px] place-items-center rounded-full bg-accent text-accent-ink">
                            <Check size={11} strokeWidth={3.2} />
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <h1 className="font-display text-[clamp(30px,6vw,42px)] font-semibold leading-[1.08] tracking-tight">
                  Pick your canvas.
                </h1>
                <p className="mt-3.5 max-w-[48ch] text-[15px] leading-relaxed text-mute">
                  The theme applies everywhere, instantly â€” and you can flip it later in settings.
                </p>

                <div className="mt-9 grid grid-cols-2 gap-3">
                  {(["dark", "light"] as const).map((t, i) => {
                    const selected = theme === t;
                    return (
                      <button
                        key={t}
                        onClick={() => setTheme(t)}
                        className={\`anim-fade-up rounded-2xl border p-2.5 text-left transition-all duration-200 \${
                          selected
                            ? "border-accent/70 shadow-[0_0_0_3px_color-mix(in_srgb,var(--color-accent)_14%,transparent)]"
                            : "border-line hover:-translate-y-1 hover:border-linestrong"
                        }\`}
                        style={{ ["--d" as string]: \`\${90 + i * 70}ms\` }}
                        aria-pressed={selected}
                      >
                        {/* miniature app preview */}
                        <span
                          className="block overflow-hidden rounded-xl border"
                          style={{
                            background: t === "dark" ? "#131313" : "#f1efe9",
                            borderColor: t === "dark" ? "#2a2a2a" : "#ddd8d0",
                          }}
                        >
                          <span className="flex gap-2 p-3">
                            <span className="hidden w-9 shrink-0 flex-col gap-1.5 sm:flex">
                              <span className="h-1.5 w-full rounded-full" style={{ background: t === "dark" ? "#2f2f2f" : "#ddd8d0" }} />
                              <span className="h-1.5 w-3/4 rounded-full" style={{ background: t === "dark" ? "#262626" : "#e4e0d8" }} />
                              <span className="h-1.5 w-full rounded-full" style={{ background: t === "dark" ? "#262626" : "#e4e0d8" }} />
                            </span>
                            <span className="flex flex-1 flex-col gap-1.5">
                              <span className="h-1.5 w-2/3 rounded-full" style={{ background: t === "dark" ? "#3a3a3a" : "#d4cfc6" }} />
                              <span className="h-1.5 w-full rounded-full" style={{ background: t === "dark" ? "#2a2a2a" : "#e0dcd4" }} />
                              <span className="h-1.5 w-1/2 rounded-full" style={{ background: t === "dark" ? "#6ba2ff" : "#2f6fdd" }} />
                              <span className="h-1.5 w-5/6 rounded-full" style={{ background: t === "dark" ? "#2a2a2a" : "#e0dcd4" }} />
                            </span>
                          </span>
                        </span>
                        <span className="mt-2.5 flex items-center justify-between px-1 pb-0.5">
                          <span className={\`text-[13.5px] font-semibold \${selected ? "text-ink" : "text-mute"}\`}>
                            {t === "dark" ? "Dark" : "Light"}
                          </span>
                          <span
                            className={\`grid h-[17px] w-[17px] place-items-center rounded-full border transition-all duration-200 \${
                              selected ? "border-accent bg-accent text-accent-ink" : "border-linestrong"
                            }\`}
                          >
                            {selected && <Check size={10} strokeWidth={3.5} />}
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* ready summary */}
                <div className="anim-fade-up mt-7 flex items-center gap-3 rounded-2xl border border-line bg-surface1/70 px-4 py-3.5" style={{ ["--d" as string]: "220ms" }}>
                  <span
                    className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-full bg-avatar text-[12px] font-bold text-white"
                    style={avatar ? { backgroundImage: \`url(\${avatar})\`, backgroundSize: "cover" } : undefined}
                  >
                    {!avatar && (name.trim() ? name.trim().charAt(0).toUpperCase() : "?")}
                  </span>
                  <span className="min-w-0 text-[13.5px] text-mute">
                    Ready as <span className="font-semibold text-ink">{name.trim() || "you"}</span>
                    {personaLabel && (
                      <>
                        {" Â· "}
                        <span className="font-semibold text-ink">{personaLabel}</span>
                      </>
                    )}
                    {" Â· "}
                    <span className="font-semibold text-accent">{theme === "dark" ? "Dark" : "Light"} theme</span>
                  </span>
                </div>
              </>
            )}
          </div>
        </main>

        {/* footer nav */}
        <footer className="flex items-center gap-2 pb-[max(20px,env(safe-area-inset-bottom))] pt-2">
          {step > 1 ? (
            <button
              onClick={() => go(step - 1)}
              className="flex items-center gap-1.5 rounded-xl px-3.5 py-2.5 text-[13.5px] font-medium text-mute transition-all duration-200 hover:bg-surface2 hover:text-ink active:scale-95"
            >
              <ArrowLeft size={15} />
              Back
            </button>
          ) : (
            <span />
          )}

          {step < 3 && (
            <button
              onClick={finish}
              className="ml-auto rounded-xl px-3 py-2.5 text-[13px] text-mute transition-colors duration-200 hover:text-ink hover:underline hover:underline-offset-4"
            >
              Skip for now
            </button>
          )}

          <button
            onClick={next}
            disabled={step === 1 && !name.trim()}
            className={\`group flex items-center gap-2 rounded-xl px-5 py-2.5 text-[14px] font-semibold transition-all duration-200 active:scale-95 \${
              step === 1 && !name.trim()
                ? "cursor-not-allowed bg-surface3 text-mute/60"
                : "bg-ink text-canvas shadow-[0_6px_22px_rgba(0,0,0,0.4)] hover:bg-ink/85"
            } \${step === 3 && step > 1 ? "" : step <= 1 ? "ml-auto" : ""}\`}
          >
            {step === 3 ? "Enter Luca" : "Continue"}
            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </footer>
      </div>
    </div>
  );
}
`,Qp=`import { useEffect, useState } from "react";
import { Moon, RotateCcw, Sun, Trash2, X } from "lucide-react";
import type { Settings } from "../lib/luca";

interface Props {
  open: boolean;
  settings: Settings;
  onChange: (patch: Partial<Settings>) => void;
  onClose: () => void;
  onReset: () => void;
}

function Toggle({ checked, onToggle, label, hint }: { checked: boolean; onToggle: () => void; label: string; hint: string }) {
  return (
    <button onClick={onToggle} role="switch" aria-checked={checked} className="flex w-full items-center gap-3 py-2.5 text-left">
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-medium">{label}</span>
        <span className="block text-xs text-mute">{hint}</span>
      </span>
      <span
        className={\`relative h-[22px] w-[38px] shrink-0 rounded-full transition-colors duration-200 \${checked ? "bg-accent" : "bg-surface3"}\`}
      >
        <span
          className={\`absolute top-[3px] h-4 w-4 rounded-full bg-white shadow transition-all duration-200 \${
            checked ? "left-[17px]" : "left-[3px]"
          }\`}
          style={{ transitionTimingFunction: "var(--ease-spring)" }}
        />
      </span>
    </button>
  );
}

function Slider({ value, onChange, label }: { value: number; onChange: (v: number) => void; label: string }) {
  return (
    <div className="py-1.5">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[13px] font-medium">{label}</span>
        <span className="font-mono text-[11.5px] text-mute">{value}</span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full cursor-pointer"
        style={{ ["--fill" as string]: \`\${value}%\` }}
        aria-label={label}
      />
    </div>
  );
}

export default function SettingsModal({ open, settings, onChange, onClose, onReset }: Props) {
  const [confirmReset, setConfirmReset] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  /* reset the two-step confirmation whenever the modal reopens */
  useEffect(() => {
    if (open) setConfirmReset(false);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="anim-fade-in fixed inset-0 z-50 grid place-items-center bg-black/60 p-4 backdrop-blur-[3px]"
      style={{ animationDuration: "0.25s" }}
      onMouseDown={onClose}
    >
      <div
        className="anim-scale-in max-h-[86vh] w-full max-w-[520px] overflow-y-auto rounded-2xl border border-linestrong bg-surface1 shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
        onMouseDown={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Settings"
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <h2 className="font-display text-[17px] font-semibold">Settings</h2>
          <button
            onClick={onClose}
            className="grid h-8 w-8 place-items-center rounded-lg text-mute transition-all duration-150 hover:bg-surface3 hover:text-ink active:scale-90"
            aria-label="Close settings"
          >
            <X size={17} />
          </button>
        </div>

        <div className="px-5 py-4">
          <div className="mb-4">
            <div className="mb-1.5 text-xs font-semibold uppercase tracking-[0.05em] text-mute">Theme</div>
            <div className="flex gap-2">
              {(["dark", "light"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => onChange({ theme: t })}
                  className={\`flex flex-1 items-center justify-center gap-2 rounded-lg border px-3 py-2.5 text-[13px] font-medium transition-all duration-200 active:scale-[0.97] \${
                    settings.theme === t
                      ? "border-accent/70 bg-accent/10 text-ink"
                      : "border-line bg-surface2 text-mute hover:border-linestrong hover:text-ink"
                  }\`}
                >
                  {t === "dark" ? (
                    <Moon size={14} className={settings.theme === t ? "text-accent" : ""} />
                  ) : (
                    <Sun size={14} className={settings.theme === t ? "text-accent" : ""} />
                  )}
                  {t === "dark" ? "Dark" : "Light"}
                </button>
              ))}
            </div>
          </div>

          <div className="divide-y divide-line/70">
            <Toggle
              checked={settings.enterToSend}
              onToggle={() => onChange({ enterToSend: !settings.enterToSend })}
              label="Enter to send"
              hint="Off = Enter makes a new line, Ctrl/âŒ˜+Enter sends"
            />
            <Toggle
              checked={settings.showTimestamps}
              onToggle={() => onChange({ showTimestamps: !settings.showTimestamps })}
              label="Show timestamps"
              hint="Display the time under each message"
            />
          </div>

          <div className="mb-4 mt-4 rounded-xl border border-line bg-surface2/60 px-4 py-2.5">
            <div className="mb-1 text-xs font-semibold uppercase tracking-[0.05em] text-mute">Personality</div>
            <Slider
              value={settings.personality.creativity}
              onChange={(v) => onChange({ personality: { ...settings.personality, creativity: v } })}
              label="Creativity"
            />
            <Slider
              value={settings.personality.formality}
              onChange={(v) => onChange({ personality: { ...settings.personality, formality: v } })}
              label="Formality"
            />
            <Slider
              value={settings.personality.verbosity}
              onChange={(v) => onChange({ personality: { ...settings.personality, verbosity: v } })}
              label="Verbosity"
            />
          </div>

          <div>
            <label htmlFor="custom-prompt" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.05em] text-mute">
              Custom instructions
            </label>
            <textarea
              id="custom-prompt"
              value={settings.customPrompt}
              onChange={(e) => onChange({ customPrompt: e.target.value })}
              rows={3}
              placeholder="Always answer concisely. Prefer TypeScript examplesâ€¦"
              className="w-full resize-none rounded-lg border border-linestrong bg-surface2 px-3 py-2.5 text-[16px] text-ink transition-colors duration-200 placeholder:text-mute/60 hover:border-[#484848] focus:border-linestrong focus:bg-surface3 md:text-[13.5px]"
            />
            </div>
        </div>

        {/* â”€â”€ danger zone: full reset back to onboarding â”€â”€ */}
        <div className="border-t border-line px-5 py-4">
          {confirmReset ? (
            <div className="anim-scale-in rounded-xl border border-danger/40 bg-danger/[0.07] p-4">
              <div className="flex items-start gap-2.5">
                <Trash2 size={16} className="mt-0.5 shrink-0 text-danger" />
                <div>
                  <div className="text-sm font-semibold text-ink">Reset everything?</div>
                  <p className="mt-0.5 text-xs leading-relaxed text-mute">
                    This deletes all your chats, your profile, and every setting â€” then takes you back to onboarding. It can't be undone.
                  </p>
                </div>
              </div>
              <div className="mt-3 flex gap-2">
                <button
                  onClick={onReset}
                  className="flex items-center gap-1.5 rounded-lg bg-danger px-3.5 py-2 text-xs font-semibold text-white transition-all duration-150 hover:brightness-110 active:scale-95"
                >
                  <Trash2 size={13} />
                  Yes, reset everything
                </button>
                <button
                  onClick={() => setConfirmReset(false)}
                  className="rounded-lg bg-surface3 px-3.5 py-2 text-xs font-medium text-ink transition-all duration-150 hover:bg-surface4 active:scale-95"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setConfirmReset(true)}
              className="flex w-full items-center gap-2.5 rounded-xl border border-line px-4 py-3 text-left transition-all duration-200 hover:border-danger/50 hover:bg-danger/[0.05] active:scale-[0.99]"
            >
              <RotateCcw size={15} className="text-danger" />
              <span className="flex-1">
                <span className="block text-sm font-medium text-danger">Reset everything</span>
                <span className="block text-xs text-mute">Clear chats, profile & settings â€” restart from onboarding</span>
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
`,qp=`import { useEffect, useRef, useState } from "react";
import { Check, Pencil, Pin, PinOff, Plus, Search, Settings as SettingsIcon, Trash2, X } from "lucide-react";
import Logo from "./Logo";
import { dayBucket } from "../lib/luca";
import type { Profile, Session } from "../lib/luca";

interface Props {
  sessions: Session[];
  activeId: string | null;
  generatingId: string | null;
  search: string;
  onSearch: (q: string) => void;
  onSelect: (id: string) => void;
  onNew: () => void;
  onRename: (id: string, title: string) => void;
  onTogglePin: (id: string) => void;
  onDelete: (id: string) => void;
  onOpenSettings: () => void;
  profile: Profile | null;
  mobileOpen: boolean;
  onCloseMobile: () => void;
}

const GROUPS = ["Pinned", "Today", "Yesterday", "Previous 7 days", "Older"] as const;

export default function Sidebar({
  sessions,
  activeId,
  generatingId,
  search,
  onSearch,
  onSelect,
  onNew,
  onRename,
  onTogglePin,
  onDelete,
  onOpenSettings,
  profile,
  mobileOpen,
  onCloseMobile,
}: Props) {
  const [menuFor, setMenuFor] = useState<string | null>(null);
  const [renamingId, setRenamingId] = useState<string | null>(null);
  const [renameValue, setRenameValue] = useState("");
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const renameRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!menuFor) return;
    const onDoc = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuFor(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuFor(null);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [menuFor]);

  useEffect(() => {
    if (renamingId) {
      renameRef.current?.focus();
      renameRef.current?.select();
    }
  }, [renamingId]);

  const q = search.trim().toLowerCase();
  const filtered = q
    ? sessions.filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.messages.some((m) => m.content && m.content.toLowerCase().includes(q)),
      )
    : sessions;

  const groups: Record<string, Session[]> = {};
  for (const g of GROUPS) groups[g] = [];
  for (const s of [...filtered].sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0))) {
    const key = s.pinned && !q ? "Pinned" : dayBucket(s.updatedAt || s.createdAt);
    groups[key].push(s);
  }

  const commitRename = () => {
    if (renamingId) {
      const t = renameValue.trim();
      if (t) onRename(renamingId, t);
    }
    setRenamingId(null);
  };

  const initials = profile?.name ? profile.name.trim().charAt(0).toUpperCase() : "?";

  return (
    <>
      {mobileOpen && (
        <div className="fixed inset-0 z-30 bg-black/55 md:hidden" onClick={onCloseMobile} aria-hidden="true" />
      )}

      <aside
        className={\`fixed inset-y-0 left-0 z-40 flex w-[272px] flex-col border-r border-line bg-canvas transition-transform duration-200 ease-out md:static md:z-auto md:translate-x-0 \${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }\`}
      >
        <div className="flex items-center justify-between px-3 pb-2.5 pt-3.5">
          <div className="flex items-center gap-2.5 pl-1">
            <span className="grid h-[26px] w-[26px] place-items-center rounded-lg border border-linestrong bg-gradient-to-b from-surface2 to-surface1 text-accent shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <Logo size={15} />
            </span>
            <span className="font-display text-[17px] font-semibold tracking-tight">Luca</span>
          </div>
          <button
            className="grid h-8 w-8 place-items-center rounded-lg text-mute transition-colors hover:bg-surface1 hover:text-ink md:hidden"
            onClick={onCloseMobile}
            aria-label="Close sidebar"
          >
            <X size={17} />
          </button>
        </div>

        <div className="grid gap-2 px-3">
          <button
            onClick={() => {
              onNew();
              onCloseMobile();
            }}
            className="flex w-full items-center gap-2.5 rounded-xl border border-transparent bg-surface2 px-3 py-[9px] text-left text-sm font-medium transition-all hover:border-line hover:bg-[#262626] active:scale-[0.985]"
          >
            <Plus size={16} className="text-mute" />
            New chat
          </button>

          <div className="relative flex items-center">
            <Search size={15} className="pointer-events-none absolute left-3 text-mute" />
            <input
              value={search}
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Search chats"
              className="w-full rounded-xl border border-transparent bg-surface1 py-2.5 pl-9 pr-8 text-[16px] text-ink outline-none transition-colors placeholder:text-mute focus:border-linestrong focus:bg-surface2 md:py-2 md:text-[13.5px]"
            />
            {search && (
              <button
                onClick={() => onSearch("")}
                className="absolute right-1.5 grid h-[22px] w-[22px] place-items-center rounded-md text-mute hover:bg-surface3 hover:text-ink"
                aria-label="Clear search"
              >
                <X size={13} />
              </button>
            )}
          </div>
        </div>

        <nav className="min-h-0 flex-1 overflow-y-auto px-3 pb-2 pt-3.5" aria-label="Recent chats">
          <div className="px-2 pb-1.5 text-[11px] font-semibold uppercase tracking-[0.09em] text-mute">
            Recents
          </div>

          {sessions.length === 0 && (
            <div className="px-3 py-6 text-center text-[13.5px] leading-relaxed text-mute">
              No chats yet â€” start one and it'll show up here.
            </div>
          )}
          {sessions.length > 0 && filtered.length === 0 && (
            <div className="px-3 py-6 text-center text-[13.5px] text-mute">
              No chats match â€œ{search.trim()}â€
            </div>
          )}

          {GROUPS.map((g) =>
            groups[g].length ? (
              <div key={g}>
                <div className="flex items-center gap-1.5 px-2 pb-1 pt-3 text-xs font-semibold text-mute">
                  {g === "Pinned" && <Pin size={12} />}
                  {g}
                </div>
                {groups[g].map((s) => {
                  const isGen = generatingId !== null && s.messages.some((m) => m.streaming);
                  return (
                    <div key={s.id} className="relative">
                      {renamingId === s.id ? (
                        <div className="flex items-center gap-1 rounded-lg bg-surface2 px-1.5 py-1">
                          <input
                            ref={renameRef}
                            value={renameValue}
                            onChange={(e) => setRenameValue(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                commitRename();
                              }
                              if (e.key === "Escape") setRenamingId(null);
                            }}
                            onBlur={commitRename}
                            aria-label="Rename chat"
                            className="min-w-0 flex-1 rounded-md border border-linestrong bg-surface3 px-2 py-1 text-sm text-ink outline-none"
                          />
                          <button
                            className="grid h-7 w-7 place-items-center rounded-md text-ok hover:bg-surface3"
                            onMouseDown={(e) => {
                              e.preventDefault();
                              commitRename();
                            }}
                            aria-label="Save name"
                          >
                            <Check size={15} />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => {
                            onSelect(s.id);
                            onCloseMobile();
                          }}
                          className={\`group flex w-full items-center gap-2 rounded-lg py-2 pl-2.5 pr-9 text-left text-sm transition-colors \${
                            s.id === activeId ? "bg-surface2" : "hover:bg-surface1"
                          }\`}
                        >
                          <span className="min-w-0 flex-1 truncate">{s.title}</span>
                          {s.pinned && <Pin size={12} className="shrink-0 text-mute" />}
                          {isGen && <span className="pulse-dot shrink-0" aria-hidden="true" />}
                          <span
                            role="button"
                            tabIndex={0}
                            onClick={(e) => {
                              e.stopPropagation();
                              setMenuFor(menuFor === s.id ? null : s.id);
                              setConfirmDelete(null);
                            }}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                e.stopPropagation();
                                setMenuFor(menuFor === s.id ? null : s.id);
                              }
                            }}
                            aria-label="Chat options"
                            className={\`absolute right-1 grid h-[26px] w-[26px] place-items-center rounded-md text-mute transition-all hover:bg-surface3 hover:text-ink \${
                              menuFor === s.id ? "bg-surface3 text-ink opacity-100" : "opacity-0 group-hover:opacity-100"
                            }\`}
                          >
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                              <circle cx="5" cy="12" r="1.6" />
                              <circle cx="12" cy="12" r="1.6" />
                              <circle cx="19" cy="12" r="1.6" />
                            </svg>
                          </span>
                        </button>
                      )}

                      {menuFor === s.id && (
                        <div
                          ref={menuRef}
                          className="anim-pop absolute right-0 top-9 z-50 w-[178px] rounded-xl border border-linestrong bg-surface2 p-1 shadow-[0_14px_38px_rgba(0,0,0,0.55)]"
                          role="menu"
                        >
                          {confirmDelete === s.id ? (
                            <div className="p-1.5">
                              <div className="px-1 pb-2 text-[12.5px] text-mute">Delete this chat?</div>
                              <div className="flex gap-1.5">
                                <button
                                  className="flex-1 rounded-md bg-danger/15 px-2 py-1.5 text-xs font-semibold text-danger hover:bg-danger/25"
                                  onClick={() => {
                                    onDelete(s.id);
                                    setMenuFor(null);
                                    setConfirmDelete(null);
                                  }}
                                >
                                  Delete
                                </button>
                                <button
                                  className="flex-1 rounded-md bg-surface3 px-2 py-1.5 text-xs text-ink hover:bg-surface4"
                                  onClick={() => setConfirmDelete(null)}
                                >
                                  Keep
                                </button>
                              </div>
                            </div>
                          ) : (
                            <>
                              <button
                                className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-[13.5px] hover:bg-surface3"
                                role="menuitem"
                                onClick={() => {
                                  onTogglePin(s.id);
                                  setMenuFor(null);
                                }}
                              >
                                {s.pinned ? <PinOff size={15} className="text-mute" /> : <Pin size={15} className="text-mute" />}
                                {s.pinned ? "Unpin" : "Pin"}
                              </button>
                              <button
                                className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-[13.5px] hover:bg-surface3"
                                role="menuitem"
                                onClick={() => {
                                  setRenamingId(s.id);
                                  setRenameValue(s.title);
                                  setMenuFor(null);
                                }}
                              >
                                <Pencil size={15} className="text-mute" />
                                Rename
                              </button>
                              <button
                                className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-[13.5px] text-danger hover:bg-danger/10"
                                role="menuitem"
                                onClick={() => setConfirmDelete(s.id)}
                              >
                                <Trash2 size={15} />
                                Delete
                              </button>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : null,
          )}
        </nav>

        <div className="flex items-center gap-2.5 border-t border-line px-3 py-2.5 pb-[max(10px,env(safe-area-inset-bottom))]">
          <span
            className="grid h-[30px] w-[30px] shrink-0 place-items-center overflow-hidden rounded-full bg-avatar text-[11px] font-bold text-white shadow-[0_0_0_2px_rgba(255,255,255,0.10)]"
            style={profile?.avatar ? { backgroundImage: \`url(\${profile.avatar})\`, backgroundSize: "cover" } : undefined}
            aria-hidden="true"
          >
            {!profile?.avatar && initials}
          </span>
          <div className="min-w-0 flex-1">
            <div className="truncate text-[13.5px] font-semibold leading-tight">{profile?.name || "Guest"}</div>
            <div className="text-[11.5px] leading-tight text-mute">Free plan</div>
          </div>
          <button
            onClick={onOpenSettings}
            className="ml-auto grid h-9 w-9 place-items-center rounded-lg text-mute transition-colors hover:bg-surface1 hover:text-ink"
            aria-label="Open settings"
          >
            <SettingsIcon size={16} />
          </button>
        </div>
      </aside>
    </>
  );
}
`,Xp=`import { useEffect, useMemo, useState } from "react";
import { Check, Copy, Download, FileCode2, Terminal, X } from "lucide-react";
import JSZip from "jszip";
import Logo from "./Logo";
import { copyText } from "../lib/luca";
import { SOURCE_FILES, downloadTextFile, sourceStats } from "../lib/sources";

const QUICK_START = ["npm install", "npm run dev", "node server.js   # your existing backend"];

export default function SourceModal({ open, onClose, onToast }: { open: boolean; onClose: () => void; onToast: (m: string) => void }) {
  const [zipping, setZipping] = useState(false);
  const [copiedPath, setCopiedPath] = useState<string | null>(null);
  const [copiedCmd, setCopiedCmd] = useState<number | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const stats = useMemo(() => sourceStats(), []);

  if (!open) return null;

  const downloadZip = async () => {
    setZipping(true);
    try {
      const zip = new JSZip();
      for (const f of SOURCE_FILES) zip.file(f.path, f.content);
      const blob = await zip.generateAsync({ type: "blob", compression: "DEFLATE" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "luca-ai-ui.zip";
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 2000);
      onToast("luca-ai-ui.zip downloaded");
    } catch {
      onToast("Couldn't build the zip");
    } finally {
      setZipping(false);
    }
  };

  const copyFile = async (path: string, content: string) => {
    if (await copyText(content)) {
      setCopiedPath(path);
      setTimeout(() => setCopiedPath(null), 1400);
    }
  };

  return (
    <div
      className="anim-fade-in fixed inset-0 z-50 grid place-items-center bg-black/60 p-3 backdrop-blur-[3px] sm:p-5"
      style={{ animationDuration: "0.25s" }}
      onMouseDown={onClose}
    >
      <div
        className="anim-scale-in flex max-h-[88vh] w-full max-w-[600px] flex-col overflow-hidden rounded-2xl border border-linestrong bg-surface1 shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
        onMouseDown={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="About"
      >
        {/* header */}
        <div className="flex items-center gap-3 border-b border-line px-5 py-4">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-linestrong bg-gradient-to-b from-surface2 to-surface1 text-accent">
            <Logo size={17} />
          </span>
          <div className="min-w-0 flex-1">
            <h2 className="font-display text-[16px] font-semibold leading-tight">Source code</h2>
            <p className="text-xs text-mute">
              {stats.files} files Â· {(stats.bytes / 1024).toFixed(0)} KB â€” exactly what's running right now
            </p>
          </div>
          <button
            onClick={onClose}
            className="grid h-8 w-8 place-items-center rounded-lg text-mute transition-all duration-150 hover:bg-surface3 hover:text-ink active:scale-90"
            aria-label="Close"
          >
            <X size={17} />
          </button>
        </div>

        {/* zip action */}
        <div className="border-b border-line px-5 py-4">
          <button
            onClick={downloadZip}
            disabled={zipping}
            className="group flex w-full items-center gap-3 rounded-xl bg-ink px-4 py-3 text-left text-canvas transition-all duration-200 hover:bg-ink/85 active:scale-[0.99] disabled:opacity-60"
          >
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-canvas/10 transition-transform duration-200 group-hover:scale-105">
              {zipping ? <span className="anim-spin inline-block"><Download size={17} /></span> : <Download size={17} />}
            </span>
            <span className="flex-1">
              <span className="block text-sm font-semibold">{zipping ? "Building archiveâ€¦" : "Download luca-ai-ui.zip"}</span>
              <span className="block text-xs opacity-70">Full project â€” unzip, npm install, npm run dev</span>
            </span>
            <Download size={16} className="opacity-70 transition-transform duration-200 group-hover:translate-y-0.5" />
          </button>

          {/* quick start */}
          <div className="mt-3.5">
            <div className="mb-1.5 flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-[0.1em] text-mute">
              <Terminal size={11} />
              Quick start
            </div>
            <div className="overflow-hidden rounded-xl border border-line bg-[#131316]">
              {QUICK_START.map((cmd, i) => (
                <div key={cmd} className={\`flex items-center gap-2 px-3.5 \${i > 0 ? "border-t border-line/60" : ""}\`}>
                  <span className="select-none font-mono text-[12px] text-mute/70">$</span>
                  <code className="flex-1 py-[7px] font-mono text-[12.5px] text-ink/90">{cmd}</code>
                  <button
                    onClick={async () => {
                      if (await copyText(cmd.split("#")[0].trim())) {
                        setCopiedCmd(i);
                        setTimeout(() => setCopiedCmd(null), 1200);
                      }
                    }}
                    className="grid h-7 w-7 place-items-center rounded-md text-mute transition-colors hover:bg-surface3 hover:text-ink"
                    aria-label={\`Copy \${cmd}\`}
                  >
                    {copiedCmd === i ? <Check size={13} className="text-ok" /> : <Copy size={13} />}
                  </button>
                </div>
              ))}
            </div>
            <p className="mt-2 text-[11.5px] leading-relaxed text-mute">
              The UI runs on <span className="font-mono text-ink/80">:5173</span> and finds your{" "}
              <span className="font-mono text-ink/80">server.js</span> on{" "}
              <span className="font-mono text-ink/80">:3000</span> automatically. Without it, responses are simulated so you can
              preview the rendering.
            </p>
          </div>
        </div>

        {/* file list */}
        <div className="min-h-0 flex-1 overflow-y-auto px-3 py-2.5">
          <div className="px-2 pb-1.5 text-[10.5px] font-semibold uppercase tracking-[0.1em] text-mute">Files</div>
          {SOURCE_FILES.map((f, i) => (
            <div
              key={f.path}
              className="anim-fade-up group flex items-center gap-2.5 rounded-lg px-2 py-[7px] transition-colors hover:bg-surface2"
              style={{ ["--d" as string]: \`\${Math.min(i * 22, 300)}ms\` }}
            >
              <FileCode2 size={14} className="shrink-0 text-mute/70" />
              <span className="min-w-0 flex-1 truncate font-mono text-[12.5px] text-ink/90">{f.path}</span>
              <span className="shrink-0 font-mono text-[10.5px] text-mute/70">{(f.content.length / 1024).toFixed(1)} KB</span>
              <button
                onClick={() => copyFile(f.path, f.content)}
                className="grid h-7 w-7 place-items-center rounded-md text-mute opacity-0 transition-all duration-150 hover:bg-surface3 hover:text-ink focus-visible:opacity-100 group-hover:opacity-100"
                aria-label={\`Copy \${f.path}\`}
              >
                {copiedPath === f.path ? <Check size={13} className="text-ok" /> : <Copy size={13} />}
              </button>
              <button
                onClick={() => {
                  downloadTextFile(f.path, f.content);
                  onToast(f.path.split("/").pop() + " downloaded");
                }}
                className="grid h-7 w-7 place-items-center rounded-md text-mute opacity-0 transition-all duration-150 hover:bg-surface3 hover:text-ink focus-visible:opacity-100 group-hover:opacity-100"
                aria-label={\`Download \${f.path}\`}
              >
                <Download size={13} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
`,Jp=`/* Luca AI â€” response engine.
   Primary path: POST {getBackendUrl()}/api/chat as SSE
     lines: \` {"reasoning"|"content"|"reply"|"tool_calls"}\` â€¦ \` [DONE]\`
   Tool calls execute client-side against /api/tools/search and
   /api/tools/images, results fed back as role:"tool" (max 6 iterations).
   If the backend can't be reached (or errors), a built-in simulation
   streams a representative reply through the exact same event pipeline,
   so the full UI â€” thinking, tool rounds, markdown, code â€” is visible. */

import { getBackendUrl, uid } from "./luca";
import type { Settings, Tier, ToolSource } from "./luca";

export type EngineEvent =
  | { kind: "reasoning"; text: string }
  | { kind: "content"; text: string }
  | { kind: "tool-start"; roundId: string; name: string; query: string }
  | { kind: "tool-end"; roundId: string; sources: ToolSource[]; ms: number }
  | { kind: "done" };

export interface HistoryMsg {
  role: "user" | "assistant" | "tool";
  content: string;
  tool_call_id?: string;
  tool_calls?: { id: string; type: "function"; function: { name: string; arguments: string } }[];
}

interface StreamOpts {
  tier: Tier;
  history: HistoryMsg[];
  settings: Settings;
  signal: AbortSignal;
}

const AGENT_MAX_ITERATIONS = 6;

export function isAbortError(e: unknown): boolean {
  return e instanceof DOMException && e.name === "AbortError";
}

function sleep(ms: number, signal: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    if (signal.aborted) return reject(new DOMException("Aborted", "AbortError"));
    const t = setTimeout(resolve, ms);
    const onAbort = () => {
      clearTimeout(t);
      reject(new DOMException("Aborted", "AbortError"));
    };
    signal.addEventListener("abort", onAbort, { once: true });
  });
}

export async function nameChat(userMessage: string, assistantReply: string): Promise<string | null> {
  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 4000);
    const res = await fetch(getBackendUrl() + "/api/name-chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userMessage, assistantReply }),
      signal: ctrl.signal,
    });
    clearTimeout(t);
    if (!res.ok) return null;
    const j = await res.json();
    return typeof j.title === "string" && j.title.trim() ? j.title.trim() : null;
  } catch {
    return null;
  }
}

async function fetchToolSources(name: string, query: string, signal: AbortSignal): Promise<ToolSource[]> {
  const path = name === "search_images" ? "/api/tools/images" : "/api/tools/search";
  const res = await fetch(getBackendUrl() + path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
    signal,
  });
  if (!res.ok) throw new Error("Tool request failed (" + res.status + ")");
  const j = await res.json();
  const list: ToolSource[] = [];
  for (const r of j.results || []) {
    const url = r.url || r.source || "";
    let host = "";
    try {
      host = new URL(url).hostname.replace(/^www\\./, "");
    } catch {
      host = url;
    }
    list.push({ title: r.title || host, url, host: host || "source" });
  }
  return list.slice(0, 4);
}

export async function* streamChat(opts: StreamOpts): AsyncGenerator<EngineEvent> {
  /* ---- try the real backend first ---- */
  let backendFailed = false;
  try {
    yield* realStream(opts);
    return;
  } catch (e) {
    if (isAbortError(e)) throw e;
    backendFailed = true;
  }

  if (!backendFailed) return;

  /* ---- backend unavailable: stream a simulated reply ---- */
  const lastUser = [...opts.history].reverse().find((m) => m.role === "user");
  const prompt = lastUser ? lastUser.content : "";
  const plan = composeReply(prompt, opts.tier);

  if (plan.reasoning) {
    await sleep(620, opts.signal);
    for (const chunk of chunkWords(plan.reasoning, 4)) {
      await sleep(14 + Math.random() * 14, opts.signal);
      yield { kind: "reasoning", text: chunk };
    }
    await sleep(380, opts.signal);
  }

  if (plan.toolQuery) {
    const roundId = uid();
    const started = Date.now();
    await sleep(480, opts.signal);
    yield { kind: "tool-start", roundId, name: "web_search", query: plan.toolQuery };
    await sleep(900 + Math.random() * 500, opts.signal);
    yield { kind: "tool-end", roundId, sources: plan.toolSources || [], ms: Date.now() - started };
    await sleep(420, opts.signal);
  }

  for (const chunk of chunkWords(plan.text, 3)) {
    await sleep(11 + Math.random() * 17, opts.signal);
    yield { kind: "content", text: chunk };
  }

  yield { kind: "done" };
}

async function* realStream(opts: StreamOpts): AsyncGenerator<EngineEvent> {
  const base = getBackendUrl();
  const userSettings = {
    personality: opts.settings.personality,
    customPrompt: opts.settings.customPrompt,
  };

  const ctrl = new AbortController();
  const onAbort = () => ctrl.abort();
  opts.signal.addEventListener("abort", onAbort, { once: true });

  let messages: HistoryMsg[] = [...opts.history];
  let guard = 0;

  while (guard++ < AGENT_MAX_ITERATIONS) {
    const res = await fetch(base + "/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        modelTier: opts.tier,
        messages,
        stream: true,
        tools: true,
        userSettings,
      }),
      signal: ctrl.signal,
    });

    if (!res.ok || !res.body) throw new Error("Backend error " + res.status);

    const reader = res.body.getReader();
    const dec = new TextDecoder();
    let buf = "";
    let accContent = "";
    let pendingToolCalls: NonNullable<HistoryMsg["tool_calls"]> = [];
    let sawDone = false;
    const yieldQueue: EngineEvent[] = [];

    const handleLine = (line: string) => {
      const t = line.trim();
      if (!t.startsWith("")) return;
      const payload = t.slice(5).trim();
      if (payload === "[DONE]") {
        sawDone = true;
        return;
      }
      try {
        const j = JSON.parse(payload);
        if (typeof j.reasoning === "string" && j.reasoning) {
          yieldQueue.push({ kind: "reasoning", text: j.reasoning });
        }
        const c = typeof j.content === "string" ? j.content : typeof j.reply === "string" ? j.reply : "";
        if (c) {
          accContent += c;
          yieldQueue.push({ kind: "content", text: c });
        }
        if (Array.isArray(j.tool_calls) && j.tool_calls.length) {
          for (const tc of j.tool_calls) {
            if (tc && tc.function) {
              const idx = pendingToolCalls.findIndex((p) => p.id === tc.id);
              if (idx >= 0) {
                pendingToolCalls[idx].function.arguments += tc.function.arguments || "";
              } else {
                pendingToolCalls.push({
                  id: tc.id || "call_" + uid(),
                  type: "function",
                  function: { name: tc.function.name || "", arguments: tc.function.arguments || "" },
                });
              }
            }
          }
        }
      } catch {
        /* partial JSON line â€” ignore */
      }
    };

    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      buf += dec.decode(value, { stream: true });
      const lines = buf.split("\\n");
      buf = lines.pop() || "";
      for (const line of lines) handleLine(line);
      while (yieldQueue.length) yield yieldQueue.shift()!;
      if (sawDone) break;
    }
    while (yieldQueue.length) yield yieldQueue.shift()!;

    if (pendingToolCalls.length) {
      messages = [...messages, { role: "assistant", content: accContent || "", tool_calls: pendingToolCalls }];
      for (const tc of pendingToolCalls) {
        let args: { query?: string } = {};
        try {
          args = JSON.parse(tc.function.arguments || "{}");
        } catch {
          /* keep empty */
        }
        const query = args.query || "";
        const roundId = uid();
        const started = Date.now();
        yield { kind: "tool-start", roundId, name: tc.function.name, query };
        let sources: ToolSource[] = [];
        try {
          sources = await fetchToolSources(tc.function.name, query, ctrl.signal);
        } catch (e) {
          if (isAbortError(e)) throw e;
        }
        yield { kind: "tool-end", roundId, sources, ms: Date.now() - started };
        messages.push({
          role: "tool",
          tool_call_id: tc.id,
          content: JSON.stringify({ results: sources.map((s) => ({ title: s.title, url: s.url, host: s.host })) }),
        });
      }
      pendingToolCalls = [];
      continue;
    }
    break;
  }

  yield { kind: "done" };
}

/* ---------- simulation helpers ---------- */

function chunkWords(text: string, size: number): string[] {
  const out: string[] = [];
  const parts = text.split(/(?<=\\s)/);
  let cur = "";
  for (const p of parts) {
    cur += p;
    if (cur.length >= size) {
      out.push(cur);
      cur = "";
    }
  }
  if (cur) out.push(cur);
  return out;
}

interface ReplyPlan {
  reasoning?: string;
  text: string;
  toolQuery?: string;
  toolSources?: ToolSource[];
}

function composeReply(prompt: string, tier: Tier): ReplyPlan {
  const p = prompt.toLowerCase();
  const wantsSearch = /(search|look up|check the docs|latest|news|current|weather|find (me )?(a )?source|cite)/.test(p);

  const reasoning = [
    "Parsing the request â€” figuring out what a complete answer actually needs here.",
    "Breaking it into sub-parts so nothing gets skipped or hand-waved.",
    tier === "pro"
      ? "Weighing two or three approaches and picking the one that will age best."
      : "Keeping it lean â€” favoring the most direct path to the answer.",
    "Drafting the response, then tightening the wording before streaming it out.",
  ].join("\\n");

  if (wantsSearch) {
    const query = prompt.replace(/\\s+/g, " ").trim().slice(0, 90);
    return {
      reasoning,
      toolQuery: query,
      toolSources: [
        { title: "MDN Web Docs â€” reference", url: "https://developer.mozilla.org", host: "developer.mozilla.org" },
        { title: "Official documentation", url: "https://docs.github.com", host: "docs.github.com" },
        { title: "Discussion thread", url: "https://stackoverflow.com", host: "stackoverflow.com" },
      ],
      text: \`I pulled a few sources on that â€” the chips above link out to them.\\n\\nThe short version:\\n\\n- **Start with the primary docs.** They settle most questions without any guesswork.\\n- **Check the dates.** Anything older than ~12 months on a fast-moving tool deserves a second source.\\n- **When two sources disagree**, the one with a reproducible example usually wins.\\n\\nWant me to go deeper on any specific point?\`,
    };
  }

  if (/(hook|component|function|code|react|typescript|python|javascript|sql|regex|css|api|debug|script)/.test(p)) {
    return {
      reasoning,
      text: [
        "Here's a compact implementation you can drop straight in:",
        "",
        "\`\`\`tsx",
        'import { useEffect, useState } from "react";',
        "",
        "export function useDebouncedValue<T>(value: T, delay = 300): T {",
        "  const [settled, setSettled] = useState(value);",
        "",
        "  useEffect(() => {",
        "    const id = setTimeout(() => setSettled(value), delay);",
        "    return () => clearTimeout(id); // cancel-on-unmount + on re-run",
        "  }, [value, delay]);",
        "",
        "  return settled;",
        "}",
        "\`\`\`",
        "",
        "Notes:",
        "",
        "- One timer, **zero dependencies** â€” every keystroke resets the window.",
        "- Cleanup runs on unmount *and* whenever \`value\` or \`delay\` changes.",
        "- Read the returned value in your fetch effect; the raw input stays instant for the UI.",
        "",
        "Tell me which part you'd like adapted and I'll rework it for your exact case.",
      ].join("\\n"),
    };
  }

  if (/(plan|steps|how (do|to)|explain|difference|compare|why)/.test(p)) {
    return {
      reasoning,
      text: [
        "Good question â€” here's the shape of it:",
        "",
        "1. **Start from the outcome.** Write one sentence describing what \\"done\\" looks like before touching any details.",
        "2. **List the constraints.** Time, tools, people â€” most plans fail on a constraint nobody wrote down.",
        "3. **Cut the first version in half.** Whatever step 1 is, there's a smaller step 0 that de-risks it.",
        "4. **Set a checkpoint, not a deadline.** A date you *review progress* beats a date you *owe the result*.",
        "",
        "The pattern behind all four: make the next action obvious, so starting costs nothing.",
        "",
        "Give me the specifics and I'll turn this from a template into a concrete plan.",
      ].join("\\n"),
    };
  }

  if (/(write|draft|email|message|letter|caption|story|poem)/.test(p)) {
    return {
      reasoning,
      text: [
        "Here's a first pass you can edit from:",
        "",
        "> Hi â€” wanted to circle back on this while it's still warm. I've got a clear picture of what's needed and a couple of options for how to get there. If you've got fifteen minutes this week, I'll bring a short summary and we can decide the next step together. If not, I'll send it by email and you can react async â€” either works for me.",
        "",
        "A few things I assumed, so flag me if any are wrong:",
        "",
        "- Tone is **warm but brief** â€” no filler, no over-apologizing.",
        "- The ask is a *decision*, not a meeting for its own sake.",
        "- There's an async fallback, so it never blocks on calendars.",
        "",
        "Say the word and I'll tune it â€” more formal, more casual, shorter, punchier.",
      ].join("\\n"),
    };
  }

  return {
    text: [
      "Here's how I'd think about it:",
      "",
      "The core idea is simpler than it looks. Strip away the surrounding noise and you're left with **one decision** and a few mechanics that follow from it. Get the decision right and the mechanics mostly sort themselves out â€” get it wrong and no amount of polish helps.",
      "",
      "Two things worth checking before you commit:",
      "",
      "- *What would change your mind?* If nothing would, you're not deciding â€” you're confirming.",
      "- *What's the smallest test?* Most questions like this have a cheap experiment that beats a long debate.",
      "",
      "Give me a bit more context â€” what you're optimizing for, what's already been tried â€” and I'll get specific instead of general.",
    ].join("\\n"),
  };
}
`,em=`/* Luca AI â€” types, storage contract & helpers.
   Storage keys mirror the original project exactly:
   'luca-settings' Â· 'luca_tier' Â· 'luca-sessions' Â· 'luca-active-session' Â· 'luca-onboarding' */

export type Tier = "flash" | "pro";

export interface Attachment {
  id: string;
  name: string;
  type: string;
  size: number;
  dataUrl: string;
}

export interface ToolSource {
  title: string;
  url: string;
  host: string;
}

export interface ToolRound {
  id: string;
  name: string;
  query: string;
  sources: ToolSource[];
  status: "running" | "done" | "error";
  ms?: number;
}

export interface LucaMessage {
  uid: string;
  role: "user" | "assistant";
  content: string;
  ts: number;
  tier?: Tier;
  reasoning?: string;
  thinkingMs?: number;
  toolRounds?: ToolRound[];
  attachments?: Attachment[];
  error?: string;
  interrupted?: boolean;
  streaming?: boolean;
}

export interface Session {
  id: string;
  title: string;
  createdAt: number;
  updatedAt: number;
  pinned?: boolean;
  messages: LucaMessage[];
}

export interface Settings {
  theme: "dark" | "light";
  enterToSend: boolean;
  showTimestamps: boolean;
  backendUrl: string;
  customPrompt: string;
  personality: { creativity: number; formality: number; verbosity: number };
}

export interface Profile {
  name: string;
  persona: string | null;
  theme: "dark" | "light";
  avatar: string | null;
  completedAt?: number;
  complete?: boolean;
  step?: number;
}

export const MODELS: { id: string; label: string; tier: Tier; desc: string }[] = [
  { id: "luca-flash", label: "Flash", tier: "flash", desc: "Fast tier â€” quick, efficient, low-latency" },
  { id: "luca-pro", label: "Pro", tier: "pro", desc: "Deeper reasoning for complex tasks" },
];

export const MAX_SESSIONS = 500;
export const COMPOSER_MAX_LEN = 200000;

const SETTINGS_KEY = "luca-settings";
const SESSIONS_KEY = "luca-sessions";
const ACTIVE_KEY = "luca-active-session";
const TIER_KEY = "luca_tier";
const ONBOARD_KEY = "luca-onboarding";

export function uid(): string {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}

/* Same semantics as the original getBackendUrl(): read 'luca-settings',
   strip trailing slashes, fall back to http://localhost:3000. */
export function getBackendUrl(): string {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.backendUrl) {
        return String(parsed.backendUrl).replace(/\\/+$/, "");
      }
    }
  } catch {
    /* storage unavailable */
  }
  return "https://luca-ai.onrender.com";
}

const DEFAULT_SETTINGS: Settings = {
  theme: "dark",
  enterToSend: true,
  showTimestamps: true,
  backendUrl: "",
  customPrompt: "",
  personality: { creativity: 50, formality: 50, verbosity: 50 },
};

export function loadSettings(): Settings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (raw) {
      const p = JSON.parse(raw);
      return {
        ...DEFAULT_SETTINGS,
        ...p,
        personality: { ...DEFAULT_SETTINGS.personality, ...(p.personality || {}) },
      };
    }
  } catch {
    /* fall through */
  }
  return { ...DEFAULT_SETTINGS };
}

export function saveSettings(s: Settings): void {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(s));
  } catch {
    /* ignore */
  }
}

export function loadTier(): Tier {
  try {
    const v = localStorage.getItem(TIER_KEY);
    if (v === "flash" || v === "pro") return v;
  } catch {
    /* ignore */
  }
  return "pro";
}

export function saveTier(t: Tier): void {
  try {
    localStorage.setItem(TIER_KEY, t);
  } catch {
    /* ignore */
  }
}

export function loadSessions(): Session[] {
  try {
    const raw = localStorage.getItem(SESSIONS_KEY);
    if (raw) {
      const list = JSON.parse(raw);
      if (Array.isArray(list)) return list as Session[];
    }
  } catch {
    /* ignore */
  }
  return [];
}

export function saveSessions(list: Session[]): void {
  try {
    localStorage.setItem(SESSIONS_KEY, JSON.stringify(list.slice(0, MAX_SESSIONS)));
  } catch {
    /* quota / private mode */
  }
}

export function loadActiveId(): string | null {
  try {
    return localStorage.getItem(ACTIVE_KEY);
  } catch {
    return null;
  }
}

export function saveActiveId(id: string | null): void {
  try {
    if (id) localStorage.setItem(ACTIVE_KEY, id);
    else localStorage.removeItem(ACTIVE_KEY);
  } catch {
    /* ignore */
  }
}

export function loadProfile(): Profile | null {
  try {
    const raw = localStorage.getItem(ONBOARD_KEY);
    if (raw) {
      const p = JSON.parse(raw);
      if (p && p.complete === true) return p as Profile;
    }
  } catch {
    /* ignore */
  }
  return null;
}

/* In-progress wizard draft (complete:false), same key as the finished profile. */
export function loadOnboardDraft(): Profile | null {
  try {
    const raw = localStorage.getItem(ONBOARD_KEY);
    if (raw) {
      const p = JSON.parse(raw);
      if (p && p.complete === false) return p as Profile;
    }
  } catch {
    /* ignore */
  }
  return null;
}

/* Wipe every persisted key â€” returns the app to first-run onboarding. */
export function resetAll(): void {
  try {
    localStorage.removeItem(SETTINGS_KEY);
    localStorage.removeItem(SESSIONS_KEY);
    localStorage.removeItem(ACTIVE_KEY);
    localStorage.removeItem(TIER_KEY);
    localStorage.removeItem(ONBOARD_KEY);
  } catch {
    /* storage unavailable â€” nothing to clear */
  }
}

export function saveOnboardDraft(d: Profile): void {
  try {
    localStorage.setItem(ONBOARD_KEY, JSON.stringify({ ...d, complete: false }));
  } catch {
    /* ignore */
  }
}

export function saveProfile(p: Profile): void {
  try {
    localStorage.setItem(ONBOARD_KEY, JSON.stringify({ ...p, complete: true }));
  } catch {
    /* ignore */
  }
}

export function dayBucket(ts: number): "Pinned" | "Today" | "Yesterday" | "Previous 7 days" | "Older" {
  const now = new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const startOfYesterday = startOfToday - 86400000;
  const startOfWeek = startOfToday - 6 * 86400000;
  if (ts >= startOfToday) return "Today";
  if (ts >= startOfYesterday) return "Yesterday";
  if (ts >= startOfWeek) return "Previous 7 days";
  return "Older";
}

export function timeOfDayGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 5) return "Good night";
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

export function formatTime(ts: number): string {
  const d = new Date(ts);
  const now = new Date();
  const time = d.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
  if (d.toDateString() === now.toDateString()) return time;
  return \`\${d.toLocaleDateString(undefined, { month: "short", day: "numeric" })} Â· \${time}\`;
}

export function titleFromMessage(text: string): string {
  const clean = text.replace(/\\s+/g, " ").trim();
  if (clean.length <= 44) return clean || "New chat";
  return clean.slice(0, 44).replace(/\\s+\\S*$/, "") + "â€¦";
}

/* Downscale to a small JPEG â€” same approach as the original avatar picker. */
export function downscaleImage(dataUrl: string, maxSize: number): Promise<string> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const scale = Math.min(1, maxSize / Math.max(img.width, img.height));
      const w = Math.max(1, Math.round(img.width * scale));
      const h = Math.max(1, Math.round(img.height * scale));
      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      if (!ctx) return resolve(dataUrl);
      ctx.drawImage(img, 0, 0, w, h);
      try {
        resolve(canvas.toDataURL("image/jpeg", 0.88));
      } catch {
        resolve(dataUrl);
      }
    };
    img.onerror = () => resolve(dataUrl);
    img.src = dataUrl;
  });
}

export async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
      return true;
    } catch {
      return false;
    }
  }
}
`,tm=`/* Bundles the exact source of this project via Vite's ?raw imports, so the
   "Download source" zip always matches what is actually running. */

import readmeIndexHtml from "../../index.html?raw";
import tsconfig from "../../tsconfig.json?raw";

import mainTsx from "../main.tsx?raw";
import indexCss from "../index.css?raw";
import appTsx from "../App.tsx?raw";
import viteEnv from "../vite-env.d.ts?raw";

import chatArea from "../components/ChatArea.tsx?raw";
import composer from "../components/Composer.tsx?raw";
import loadingScreen from "../components/LoadingScreen.tsx?raw";
import logo from "../components/Logo.tsx?raw";
import markdown from "../components/Markdown.tsx?raw";
import onboarding from "../components/Onboarding.tsx?raw";
import settingsModal from "../components/SettingsModal.tsx?raw";
import sidebar from "../components/Sidebar.tsx?raw";
import sourceModal from "../components/SourceModal.tsx?raw";

import engineTs from "./engine.ts?raw";
import lucaTs from "./luca.ts?raw";
import sourcesTs from "./sources.ts?raw";

const CLEAN_PACKAGE_JSON = \`{
  "name": "luca-ai-ui",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "jszip": "^3.10.1",
    "lucide-react": "^0.294.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.1.7",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.3.4",
    "tailwindcss": "^4.1.7",
    "typescript": "^5.7.0",
    "vite": "^6.3.5"
  }
}
\`;

/* Port 5173 on purpose â€” your existing server.js owns :3000. */
const CLEAN_VITE_CONFIG = \`import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: { port: 5173 },
});
\`;

const README = \`# Luca AI â€” chat UI

React + Vite + Tailwind v4 front-end for the Luca AI backend (your existing
\\\`server.js\\\`). Monochrome design system with a restrained steel-blue accent,
onboarding flow, sessions, streaming chat with tool-call rounds, and a
built-in simulation that shows exactly how responses render when the
backend is not reachable.

## Quick start

\\\`\\\`\\\`bash
npm install
npm run dev        # UI at http://localhost:5173
node server.js     # your backend at http://localhost:3000
\\\`\\\`\\\`

Open http://localhost:5173 â€” the UI finds the backend automatically.

## Backend wiring

- \\\`src/lib/luca.ts â†’ getBackendUrl()\\\` reads \\\`luca-settings.backendUrl\\\`
  from localStorage (same contract as the original project), strips
  trailing slashes, defaults to \\\`http://localhost:3000\\\`.
- \\\`src/lib/engine.ts â†’ streamChat()\\\` POSTs \\\`{ modelTier, messages,
  stream: true, tools: true, userSettings }\\\` to \\\`/api/chat\\\` and parses
  the SSE stream (\\\`data: {"reasoning"|"content"|"tool_calls"}\\\` â€¦
  \\\`data: [DONE]\\\`). Tool calls are executed against \\\`/api/tools/search\\\`
  and \\\`/api/tools/images\\\`, results fed back as \\\`role: "tool"\\\` (max 6
  iterations). Chat titles come from \\\`POST /api/name-chat\\\`.
- If the backend is unreachable, a local simulation streams sample
  replies through the identical pipeline so you can see exactly how real
  responses will look.

## Storage keys (unchanged from the original)

\\\`luca-settings\\\` Â· \\\`luca_tier\\\` Â· \\\`luca-sessions\\\` Â·
\\\`luca-active-session\\\` Â· \\\`luca-onboarding\\\`

## Structure

\\\`\\\`\\\`
index.html            entry + pre-paint theme script
src/index.css         design tokens + motion library (Tailwind v4)
src/App.tsx           orchestration: sessions, streaming, reset
src/lib/luca.ts       types + storage contract + helpers
src/lib/engine.ts     SSE client + agent loop + simulation
src/components/       Sidebar Â· ChatArea Â· Composer Â· Markdown Â·
                      Onboarding Â· LoadingScreen Â· SettingsModal Â·
                      SourceModal Â· Logo
\\\`\\\`\\\`
\`;

export interface SourceFile {
  path: string;
  content: string;
}

export const SOURCE_FILES: SourceFile[] = [
  { path: "README.md", content: README },
  { path: "package.json", content: CLEAN_PACKAGE_JSON },
  { path: "vite.config.js", content: CLEAN_VITE_CONFIG },
  { path: "tsconfig.json", content: tsconfig },
  { path: "index.html", content: readmeIndexHtml },
  { path: "src/main.tsx", content: mainTsx },
  { path: "src/index.css", content: indexCss },
  { path: "src/vite-env.d.ts", content: viteEnv },
  { path: "src/App.tsx", content: appTsx },
  { path: "src/lib/luca.ts", content: lucaTs },
  { path: "src/lib/engine.ts", content: engineTs },
  { path: "src/lib/sources.ts", content: sourcesTs },
  { path: "src/components/Sidebar.tsx", content: sidebar },
  { path: "src/components/ChatArea.tsx", content: chatArea },
  { path: "src/components/Composer.tsx", content: composer },
  { path: "src/components/Markdown.tsx", content: markdown },
  { path: "src/components/Onboarding.tsx", content: onboarding },
  { path: "src/components/LoadingScreen.tsx", content: loadingScreen },
  { path: "src/components/SettingsModal.tsx", content: settingsModal },
  { path: "src/components/SourceModal.tsx", content: sourceModal },
  { path: "src/components/Logo.tsx", content: logo },
];

export function sourceStats(): { files: number; bytes: number } {
  return {
    files: SOURCE_FILES.length,
    bytes: SOURCE_FILES.reduce((n, f) => n + f.content.length, 0),
  };
}

export function downloadTextFile(path: string, content: string): void {
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = path.split("/").pop() || "file.txt";
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}
`,nm=`{
  "name": "luca-ai-ui",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "jszip": "^3.10.1",
    "lucide-react": "^0.294.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.1.7",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.3.4",
    "tailwindcss": "^4.1.7",
    "typescript": "^5.7.0",
    "vite": "^6.3.5"
  }
}
`,rm=`import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: { port: 5173 },
});
`,sm=`# Luca AI â€” chat UI

React + Vite + Tailwind v4 front-end for the Luca AI backend (your existing
\`server.js\`). Monochrome design system with a restrained steel-blue accent,
onboarding flow, sessions, streaming chat with tool-call rounds, and a
built-in simulation that shows exactly how responses render when the
backend is not reachable.

## Quick start

\`\`\`bash
npm install
npm run dev        # UI at http://localhost:5173
node server.js     # your backend at http://localhost:3000
\`\`\`

Open http://localhost:5173 â€” the UI finds the backend automatically.

## Backend wiring

- \`src/lib/luca.ts â†’ getBackendUrl()\` reads \`luca-settings.backendUrl\`
  from localStorage (same contract as the original project), strips
  trailing slashes, defaults to \`http://localhost:3000\`.
- \`src/lib/engine.ts â†’ streamChat()\` POSTs \`{ modelTier, messages,
  stream: true, tools: true, userSettings }\` to \`/api/chat\` and parses
  the SSE stream (\`data: {"reasoning"|"content"|"tool_calls"}\` â€¦
  \`data: [DONE]\`). Tool calls are executed against \`/api/tools/search\`
  and \`/api/tools/images\`, results fed back as \`role: "tool"\` (max 6
  iterations). Chat titles come from \`POST /api/name-chat\`.
- If the backend is unreachable, a local simulation streams sample
  replies through the identical pipeline so you can see exactly how real
  responses will look.

## Storage keys (unchanged from the original)

\`luca-settings\` Â· \`luca_tier\` Â· \`luca-sessions\` Â·
\`luca-active-session\` Â· \`luca-onboarding\`

## Structure

\`\`\`
index.html            entry + pre-paint theme script
src/index.css         design tokens + motion library (Tailwind v4)
src/App.tsx           orchestration: sessions, streaming, reset
src/lib/luca.ts       types + storage contract + helpers
src/lib/engine.ts     SSE client + agent loop + simulation
src/components/       Sidebar Â· ChatArea Â· Composer Â· Markdown Â·
                      Onboarding Â· LoadingScreen Â· SettingsModal Â·
                      SourceModal Â· Logo
\`\`\`
`,ha=[{path:"README.md",content:sm},{path:"package.json",content:nm},{path:"vite.config.js",content:rm},{path:"tsconfig.json",content:Fp},{path:"index.html",content:Pp},{path:"src/main.tsx",content:Up},{path:"src/index.css",content:Bp},{path:"src/vite-env.d.ts",content:$p},{path:"src/App.tsx",content:Wp},{path:"src/lib/luca.ts",content:em},{path:"src/lib/engine.ts",content:Jp},{path:"src/lib/sources.ts",content:tm},{path:"src/components/Sidebar.tsx",content:qp},{path:"src/components/ChatArea.tsx",content:Hp},{path:"src/components/Composer.tsx",content:Vp},{path:"src/components/Markdown.tsx",content:Zp},{path:"src/components/Onboarding.tsx",content:Yp},{path:"src/components/LoadingScreen.tsx",content:Kp},{path:"src/components/SettingsModal.tsx",content:Qp},{path:"src/components/SourceModal.tsx",content:Xp},{path:"src/components/Logo.tsx",content:Gp}];function am(){return{files:ha.length,bytes:ha.reduce((E,W)=>E+W.content.length,0)}}function im(E,W){const o=new Blob([W],{type:"text/plain;charset=utf-8"}),O=URL.createObjectURL(o),k=document.createElement("a");k.href=O,k.download=E.split("/").pop()||"file.txt",k.click(),setTimeout(()=>URL.revokeObjectURL(O),1500)}const om=["npm install","npm run dev","node server.js   # your existing backend"];function lm({open:E,onClose:W,onToast:o}){const[O,k]=ve.useState(!1),[p,m]=ve.useState(null),[c,h]=ve.useState(null);ve.useEffect(()=>{if(!E)return;const v=g=>g.key==="Escape"&&W();return document.addEventListener("keydown",v),()=>document.removeEventListener("keydown",v)},[E,W]);const j=ve.useMemo(()=>am(),[]);if(!E)return null;const I=async()=>{k(!0);try{const v=new Mp;for(const y of ha)v.file(y.path,y.content);const g=await v.generateAsync({type:"blob",compression:"DEFLATE"}),_=URL.createObjectURL(g),f=document.createElement("a");f.href=_,f.download="luca-ai-ui.zip",f.click(),setTimeout(()=>URL.revokeObjectURL(_),2e3),o("luca-ai-ui.zip downloaded")}catch{o("Couldn't build the zip")}finally{k(!1)}},C=async(v,g)=>{await Jr(g)&&(m(v),setTimeout(()=>m(null),1400))};return u.jsx("div",{className:"anim-fade-in fixed inset-0 z-50 grid place-items-center bg-black/60 p-3 backdrop-blur-[3px] sm:p-5",style:{animationDuration:"0.25s"},onMouseDown:W,children:u.jsxs("div",{className:"anim-scale-in flex max-h-[88vh] w-full max-w-[600px] flex-col overflow-hidden rounded-2xl border border-linestrong bg-surface1 shadow-[0_24px_60px_rgba(0,0,0,0.6)]",onMouseDown:v=>v.stopPropagation(),role:"dialog","aria-label":"About",children:[u.jsxs("div",{className:"flex items-center gap-3 border-b border-line px-5 py-4",children:[u.jsx("span",{className:"grid h-9 w-9 place-items-center rounded-xl border border-linestrong bg-gradient-to-b from-surface2 to-surface1 text-accent",children:u.jsx(es,{size:17})}),u.jsxs("div",{className:"min-w-0 flex-1",children:[u.jsx("h2",{className:"font-display text-[16px] font-semibold leading-tight",children:"Source code"}),u.jsxs("p",{className:"text-xs text-mute",children:[j.files," files Â· ",(j.bytes/1024).toFixed(0)," KB â€” exactly what's running right now"]})]}),u.jsx("button",{onClick:W,className:"grid h-8 w-8 place-items-center rounded-lg text-mute transition-all duration-150 hover:bg-surface3 hover:text-ink active:scale-90","aria-label":"Close",children:u.jsx(Un,{size:17})})]}),u.jsxs("div",{className:"border-b border-line px-5 py-4",children:[u.jsxs("button",{onClick:I,disabled:O,className:"group flex w-full items-center gap-3 rounded-xl bg-ink px-4 py-3 text-left text-canvas transition-all duration-200 hover:bg-ink/85 active:scale-[0.99] disabled:opacity-60",children:[u.jsx("span",{className:"grid h-9 w-9 place-items-center rounded-lg bg-canvas/10 transition-transform duration-200 group-hover:scale-105",children:O?u.jsx("span",{className:"anim-spin inline-block",children:u.jsx(cr,{size:17})}):u.jsx(cr,{size:17})}),u.jsxs("span",{className:"flex-1",children:[u.jsx("span",{className:"block text-sm font-semibold",children:O?"Building archiveâ€¦":"Download luca-ai-ui.zip"}),u.jsx("span",{className:"block text-xs opacity-70",children:"Full project â€” unzip, npm install, npm run dev"})]}),u.jsx(cr,{size:16,className:"opacity-70 transition-transform duration-200 group-hover:translate-y-0.5"})]}),u.jsxs("div",{className:"mt-3.5",children:[u.jsxs("div",{className:"mb-1.5 flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-[0.1em] text-mute",children:[u.jsx(ep,{size:11}),"Quick start"]}),u.jsx("div",{className:"overflow-hidden rounded-xl border border-line bg-[#131316]",children:om.map((v,g)=>u.jsxs("div",{className:`flex items-center gap-2 px-3.5 ${g>0?"border-t border-line/60":""}`,children:[u.jsx("span",{className:"select-none font-mono text-[12px] text-mute/70",children:"$"}),u.jsx("code",{className:"flex-1 py-[7px] font-mono text-[12.5px] text-ink/90",children:v}),u.jsx("button",{onClick:async()=>{await Jr(v.split("#")[0].trim())&&(h(g),setTimeout(()=>h(null),1200))},className:"grid h-7 w-7 place-items-center rounded-md text-mute transition-colors hover:bg-surface3 hover:text-ink","aria-label":`Copy ${v}`,children:c===g?u.jsx(Bt,{size:13,className:"text-ok"}):u.jsx(pa,{size:13})})]},v))}),u.jsxs("p",{className:"mt-2 text-[11.5px] leading-relaxed text-mute",children:["The UI runs on ",u.jsx("span",{className:"font-mono text-ink/80",children:":5173"})," and finds your"," ",u.jsx("span",{className:"font-mono text-ink/80",children:"server.js"})," on"," ",u.jsx("span",{className:"font-mono text-ink/80",children:":3000"})," automatically. Without it, responses are simulated so you can preview the rendering."]})]})]}),u.jsxs("div",{className:"min-h-0 flex-1 overflow-y-auto px-3 py-2.5",children:[u.jsx("div",{className:"px-2 pb-1.5 text-[10.5px] font-semibold uppercase tracking-[0.1em] text-mute",children:"Files"}),ha.map((v,g)=>u.jsxs("div",{className:"anim-fade-up group flex items-center gap-2.5 rounded-lg px-2 py-[7px] transition-colors hover:bg-surface2",style:{"--d":`${Math.min(g*22,300)}ms`},children:[u.jsx(Pf,{size:14,className:"shrink-0 text-mute/70"}),u.jsx("span",{className:"min-w-0 flex-1 truncate font-mono text-[12.5px] text-ink/90",children:v.path}),u.jsxs("span",{className:"shrink-0 font-mono text-[10.5px] text-mute/70",children:[(v.content.length/1024).toFixed(1)," KB"]}),u.jsx("button",{onClick:()=>C(v.path,v.content),className:"grid h-7 w-7 place-items-center rounded-md text-mute opacity-0 transition-all duration-150 hover:bg-surface3 hover:text-ink focus-visible:opacity-100 group-hover:opacity-100","aria-label":`Copy ${v.path}`,children:p===v.path?u.jsx(Bt,{size:13,className:"text-ok"}):u.jsx(pa,{size:13})}),u.jsx("button",{onClick:()=>{im(v.path,v.content),o(v.path.split("/").pop()+" downloaded")},className:"grid h-7 w-7 place-items-center rounded-md text-mute opacity-0 transition-all duration-150 hover:bg-surface3 hover:text-ink focus-visible:opacity-100 group-hover:opacity-100","aria-label":`Download ${v.path}`,children:u.jsx(cr,{size:13})})]},v.path))]})]})})}function um({onDone:E}){const[W,o]=ve.useState(0),[O,k]=ve.useState(!1);return ve.useEffect(()=>{const p=performance.now(),m=1250;let c=0,h=0,j=0;const I=C=>{const v=Math.min(1,(C-p)/m);o(1-Math.pow(1-v,3)),v<1?c=requestAnimationFrame(I):(h=window.setTimeout(()=>k(!0),180),j=window.setTimeout(E,680))};return c=requestAnimationFrame(I),()=>{cancelAnimationFrame(c),window.clearTimeout(h),window.clearTimeout(j)}},[E]),u.jsxs("div",{className:`fixed inset-0 z-[80] grid place-items-center bg-canvas transition-all duration-500 ${O?"pointer-events-none scale-[1.03] opacity-0":"opacity-100"}`,"aria-label":"Getting Luca ready",role:"status",children:[u.jsx("div",{className:"pointer-events-none absolute inset-0",style:{background:"radial-gradient(620px 380px at 50% 38%, color-mix(in srgb, var(--color-accent) 9%, transparent), transparent 70%)"}}),u.jsxs("div",{className:"relative flex flex-col items-center px-6",children:[u.jsxs("div",{className:"relative mb-7 grid place-items-center",children:[u.jsx("span",{className:"anim-glow absolute inset-[-26px] rounded-full",style:{background:"radial-gradient(circle, color-mix(in srgb, var(--color-accent) 26%, transparent), transparent 68%)"},"aria-hidden":"true"}),u.jsx("span",{className:"anim-breathe relative grid h-[64px] w-[64px] place-items-center text-accent",children:u.jsx(es,{size:38})})]}),u.jsxs("div",{className:"anim-fade-up font-display text-[19px] font-semibold tracking-tight",children:["Getting Luca ready",u.jsxs("span",{className:"ml-2 inline-flex items-end gap-[3px] pb-[3px]",children:[u.jsx("span",{className:"typing-dot"}),u.jsx("span",{className:"typing-dot"}),u.jsx("span",{className:"typing-dot"})]})]}),u.jsx("div",{className:"anim-fade-up mt-6 h-[3px] w-44 overflow-hidden rounded-full bg-surface3",style:{"--d":"120ms"},children:u.jsx("div",{className:"h-full rounded-full",style:{width:`${W*100}%`,background:"linear-gradient(90deg, var(--color-accent), var(--color-accent2))",boxShadow:"0 0 12px color-mix(in srgb, var(--color-accent) 55%, transparent)"}})})]})]})}const cm=6;function go(E){return E instanceof DOMException&&E.name==="AbortError"}function Fn(E,W){return new Promise((o,O)=>{if(W.aborted)return O(new DOMException("Aborted","AbortError"));const k=setTimeout(o,E),p=()=>{clearTimeout(k),O(new DOMException("Aborted","AbortError"))};W.addEventListener("abort",p,{once:!0})})}async function dm(E,W){try{const o=new AbortController,O=setTimeout(()=>o.abort(),6e3),k=await fetch(ho()+"/api/name-chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({messages:E}),signal:o.signal});if(clearTimeout(O),!k.ok)return null;const p=await k.json();return typeof p.title=="string"&&p.title.trim()?p.title.trim():null}catch{return null}}async function fm(E,W,o){const O=E==="search_images"?"/api/tools/images":"/api/tools/search",k=await fetch(ho()+O,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:W}),signal:o});if(!k.ok)throw new Error("Tool request failed ("+k.status+")");const p=await k.json(),m=[];for(const c of p.results||[]){const h=c.url||c.source||"";let j="";try{j=new URL(h).hostname.replace(/^www\./,"")}catch{j=h}m.push({title:c.title||j,url:h,host:j||"source"})}return m.slice(0,4)}async function*pm(E){try{yield*mm(E);return}catch(p){if(go(p))throw p;throw p}}async function*mm(E){const W=ho(),o={personality:E.settings.personality,customPrompt:E.settings.customPrompt},O=new AbortController,k=()=>O.abort();E.signal.addEventListener("abort",k,{once:!0});let p=[...E.history],m=0;for(;m++<cm;){const c=await fetch(W+"/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({modelTier:E.tier,messages:p,stream:!0,tools:!1,userSettings:o}),signal:O.signal});if(!c.ok||!c.body)throw new Error("Backend error "+c.status);const h=c.body.getReader(),j=new TextDecoder;let I="",C="",v=[],g=!1;const _=[],f=y=>{const x=y.trim();if(!x.startsWith(""))return;const S=x.slice(5).trim();if(S==="[DONE]"){g=!0;return}try{const A=JSON.parse(S);typeof A.reasoning=="string"&&A.reasoning&&_.push({kind:"reasoning",text:A.reasoning});const U=typeof A.content=="string"?A.content:typeof A.reply=="string"?A.reply:"";if(U&&(C+=U,_.push({kind:"content",text:U})),Array.isArray(A.tool_calls)&&A.tool_calls.length){for(const D of A.tool_calls)if(D&&D.function){const Y=v.findIndex(G=>G.id===D.id);Y>=0?v[Y].function.arguments+=D.function.arguments||"":v.push({id:D.id||"call_"+nn(),type:"function",function:{name:D.function.name||"",arguments:D.function.arguments||""}})}}}catch{}};for(;;){const{done:y,value:x}=await h.read();if(y)break;I+=j.decode(x,{stream:!0});const S=I.split(`
`);I=S.pop()||"";for(const A of S)f(A);for(;_.length;)yield _.shift();if(g)break}for(;_.length;)yield _.shift();if(v.length){p=[...p,{role:"assistant",content:C||"",tool_calls:v}];for(const y of v){let x={};try{x=JSON.parse(y.function.arguments||"{}")}catch{}const S=x.query||"",A=nn(),U=Date.now();yield{kind:"tool-start",roundId:A,name:y.function.name,query:S};let D=[];try{D=await fm(y.function.name,S,O.signal)}catch(Y){if(go(Y))throw Y}yield{kind:"tool-end",roundId:A,sources:D,ms:Date.now()-U},p.push({role:"tool",tool_call_id:y.id,content:JSON.stringify({results:D.map(Y=>({title:Y.title,url:Y.url,host:Y.host}))})})}v=[];continue}break}yield{kind:"done"}}function hc(E,W){const o=[],O=E.split(new RegExp("(?<=\\s)"));let k="";for(const p of O)k+=p,k.length>=W&&(o.push(k),k="");return k&&o.push(k),o}function hm(E,W){const o=E.toLowerCase(),O=/(search|look up|check the docs|latest|news|current|weather|find (me )?(a )?source|cite)/.test(o),k=["Parsing the request â€” figuring out what a complete answer actually needs here.","Breaking it into sub-parts so nothing gets skipped or hand-waved.",W==="pro"?"Weighing two or three approaches and picking the one that will age best.":"Keeping it lean â€” favoring the most direct path to the answer.","Drafting the response, then tightening the wording before streaming it out."].join(`
`);if(O){const p=E.replace(/\s+/g," ").trim().slice(0,90);return{reasoning:k,toolQuery:p,toolSources:[{title:"MDN Web Docs â€” reference",url:"https://developer.mozilla.org",host:"developer.mozilla.org"},{title:"Official documentation",url:"https://docs.github.com",host:"docs.github.com"},{title:"Discussion thread",url:"https://stackoverflow.com",host:"stackoverflow.com"}],text:`I pulled a few sources on that â€” the chips above link out to them.

The short version:

- **Start with the primary docs.** They settle most questions without any guesswork.
- **Check the dates.** Anything older than ~12 months on a fast-moving tool deserves a second source.
- **When two sources disagree**, the one with a reproducible example usually wins.

Want me to go deeper on any specific point?`}}return/(hook|component|function|code|react|typescript|python|javascript|sql|regex|css|api|debug|script)/.test(o)?{reasoning:k,text:["Here's a compact implementation you can drop straight in:","","```tsx",'import { useEffect, useState } from "react";',"","export function useDebouncedValue<T>(value: T, delay = 300): T {","  const [settled, setSettled] = useState(value);","","  useEffect(() => {","    const id = setTimeout(() => setSettled(value), delay);","    return () => clearTimeout(id); // cancel-on-unmount + on re-run","  }, [value, delay]);","","  return settled;","}","```","","Notes:","","- One timer, **zero dependencies** â€” every keystroke resets the window.","- Cleanup runs on unmount *and* whenever `value` or `delay` changes.","- Read the returned value in your fetch effect; the raw input stays instant for the UI.","","Tell me which part you'd like adapted and I'll rework it for your exact case."].join(`
`)}:/(plan|steps|how (do|to)|explain|difference|compare|why)/.test(o)?{reasoning:k,text:["Good question â€” here's the shape of it:","",'1. **Start from the outcome.** Write one sentence describing what "done" looks like before touching any details.',"2. **List the constraints.** Time, tools, people â€” most plans fail on a constraint nobody wrote down.","3. **Cut the first version in half.** Whatever step 1 is, there's a smaller step 0 that de-risks it.","4. **Set a checkpoint, not a deadline.** A date you *review progress* beats a date you *owe the result*.","","The pattern behind all four: make the next action obvious, so starting costs nothing.","","Give me the specifics and I'll turn this from a template into a concrete plan."].join(`
`)}:/(write|draft|email|message|letter|caption|story|poem)/.test(o)?{reasoning:k,text:["Here's a first pass you can edit from:","","> Hi â€” wanted to circle back on this while it's still warm. I've got a clear picture of what's needed and a couple of options for how to get there. If you've got fifteen minutes this week, I'll bring a short summary and we can decide the next step together. If not, I'll send it by email and you can react async â€” either works for me.","","A few things I assumed, so flag me if any are wrong:","","- Tone is **warm but brief** â€” no filler, no over-apologizing.","- The ask is a *decision*, not a meeting for its own sake.","- There's an async fallback, so it never blocks on calendars.","","Say the word and I'll tune it â€” more formal, more casual, shorter, punchier."].join(`
`)}:{text:["Here's how I'd think about it:","","The core idea is simpler than it looks. Strip away the surrounding noise and you're left with **one decision** and a few mechanics that follow from it. Get the decision right and the mechanics mostly sort themselves out â€” get it wrong and no amount of polish helps.","","Two things worth checking before you commit:","","- *What would change your mind?* If nothing would, you're not deciding â€” you're confirming.","- *What's the smallest test?* Most questions like this have a cheap experiment that beats a long debate.","","Give me a bit more context â€” what you're optimizing for, what's already been tried â€” and I'll get specific instead of general."].join(`
`)}}function gm(){
var _at=localStorage.getItem("luca-auth-token");
var _au=null;try{_au=JSON.parse(localStorage.getItem("luca-auth-user")||"null")}catch(e){}
var _qp=new URLSearchParams(location.search);
if(_qp.get("auth_token")){_at=_qp.get("auth_token");_au={name:_qp.get("auth_name")||"User",username:_qp.get("auth_username")||""};localStorage.setItem("luca-auth-token",_at);localStorage.setItem("luca-auth-user",JSON.stringify(_au));history.replaceState({},document.title,location.pathname)}
const[E,W]=ve.useState(()=>up()),[o,O]=ve.useState(()=>uc()),[k,p]=ve.useState(()=>{const ce=op();return ce&&uc().some(le=>le.id===ce)?ce:null}),[m,c]=ve.useState(()=>sp()),[h,j]=ve.useState(()=>np()),[I,C]=ve.useState(!0),[v,g]=ve.useState(null),[_,f]=ve.useState([]),[y,x]=ve.useState(!1),[S,A]=ve.useState(!1),[U,D]=ve.useState(!1),[Y,G]=ve.useState(""),te=ve.useRef(null),F=ve.useRef(void 0),J=o.find(ce=>ce.id===k)||null,ye=v!==null,b=ve.useCallback(ce=>{const le=nn();f(me=>[...me.slice(-2),{id:le,text:ce}]),window.setTimeout(()=>f(me=>me.filter(ke=>ke.id!==le)),2400)},[]);ve.useEffect(()=>(window.clearTimeout(F.current),F.current=window.setTimeout(()=>ip(o),350),()=>window.clearTimeout(F.current)),[o]),ve.useEffect(()=>lp(k),[k]),ve.useEffect(()=>ap(m),[m]),ve.useEffect(()=>{rp(h),document.documentElement.setAttribute("data-theme",h.theme)},[h]);const B=ve.useCallback((ce,le,me)=>{O(ke=>ke.map(ze=>ze.id===ce?{...ze,updatedAt:Date.now(),messages:ze.messages.map(Me=>Me.uid===le?{...Me,...me}:Me)}:ze))},[]),l=ve.useCallback((ce,le,me,ke)=>{O(ze=>ze.map(Me=>Me.id===ce?{...Me,updatedAt:Date.now(),messages:Me.messages.map(Ue=>{if(Ue.uid!==le)return Ue;const i=Ue.toolRounds||[],X=i.some(H=>H.id===me);return{...Ue,toolRounds:X?i.map(H=>H.id===me?{...H,...ke}:H):[...i,{id:me,name:"web_search",query:"",sources:[],status:"running",...ke}]}})}:Me))},[]),q=ve.useCallback(async(ce,le,me,ke,ze,Me)=>{const Ue=new AbortController;te.current=Ue,g({sessionId:ce,msgUid:le});let i="",X="";const H=Date.now();let T=null;try{const N=pm({tier:ze,history:me,settings:h,signal:Ue.signal});for await(const M of N)switch(M.kind){case"reasoning":X+=M.text,B(ce,le,{reasoning:X});break;case"content":T||(T=Date.now()),i+=M.text,B(ce,le,{content:i});break;case"tool-start":l(ce,le,M.roundId,{name:M.name,query:M.query,status:"running"});break;case"tool-end":l(ce,le,M.roundId,{sources:M.sources,status:"done",ms:M.ms});break;case"done":break}B(ce,le,{streaming:!1,thinkingMs:X?(T||Date.now())-H:void 0})}catch(N){if(go(N))B(ce,le,{streaming:!1,interrupted:!0});else{const M=N instanceof Error&&N.message?N.message:"Something went wrong while generating.",ne=/failed to fetch|networkerror|load failed|typeerror/i.test(M)?"Backend not reachable â€” start server.js (node server.js) and try again.":M;B(ce,le,{streaming:!1,error:ne})}}finally{g(null),te.current=null}if(Me){const N=await dm([...me,{role:"user",content:ke},{role:"assistant",content:i}])||gp(ke);O(M=>M.map(ne=>ne.id===ce&&ne.title==="New chat"?{...ne,title:N}:ne))}},[h,B,l]),we=(ce,le)=>ce.filter(ke=>{var ze;return ke.role==="user"?ke.content:ke.content||((ze=ke.toolRounds)==null?void 0:ze.length)}).map(ke=>{var ze;if(ke.role==="user"&&ke.attachments&&ke.attachments.length){const Me=ke.attachments.filter(a=>a.dataUrl&&a.type.startsWith("image/"));if(Me.length>0){return{role:"user",content:[{type:"text",text:ke.content},...Me.map(a=>({type:"image_url",image_url:{url:a.dataUrl}}))]}}}return{role:ke.role,content:ke.content+((ze=ke.attachments)!=null&&ze.length?"\n[Attached: "+ke.attachments.map(Me=>Me.name).join(", ")+"]":"")}}),ee=ve.useCallback((ce,le)=>{if(ye)return;let me=k,ke=[];if(!me){me=nn();const X={id:me,title:"New chat",createdAt:Date.now(),updatedAt:Date.now(),messages:[]};O(H=>[X,...H].slice(0,500)),p(me)}else ke=(J==null?void 0:J.messages)||[];const ze={uid:nn(),role:"user",content:ce,ts:Date.now(),attachments:le.length?le:void 0},Me={uid:nn(),role:"assistant",content:"",ts:Date.now(),tier:m,streaming:!0,toolRounds:[]},Ue=me;O(X=>X.map(H=>H.id===Ue?{...H,updatedAt:Date.now(),messages:[...H.messages,ze,Me]}:H));const i=[...we(ke),...we([ze])];q(Ue,Me.uid,i,ce,m,ke.length===2)},[k,J,ye,m,q]),re=ve.useCallback(()=>{var ce;(ce=te.current)==null||ce.abort()},[]),Q=ve.useCallback((ce,le)=>{if(ye)return;const me=o.find(X=>X.id===ce);if(!me)return;const ke=me.messages.findIndex(X=>X.uid===le);if(ke<0)return;const ze=me.messages.slice(0,ke),Me=[...ze].reverse().find(X=>X.role==="user");if(!Me)return;const Ue=we(ze),i={uid:le,role:"assistant",content:"",ts:Date.now(),tier:m,streaming:!0,toolRounds:[]};O(X=>X.map(H=>H.id===ce?{...H,updatedAt:Date.now(),messages:[...ze,i]}:H)),q(ce,le,Ue,Me.content,m,!1)},[o,ye,m,q]),se=ve.useCallback((ce,le,me)=>{if(ye)return;const ke=o.find(H=>H.id===ce);if(!ke)return;const ze=ke.messages.findIndex(H=>H.uid===le);if(ze<0)return;const Me=ke.messages.slice(0,ze),Ue={...ke.messages[ze],content:me,ts:Date.now()},i={uid:nn(),role:"assistant",content:"",ts:Date.now(),tier:m,streaming:!0,toolRounds:[]};O(H=>H.map(T=>T.id===ce?{...T,updatedAt:Date.now(),messages:[...Me,Ue,i]}:T));const X=[...we(Me),...we([{uid:nn(),role:"user",content:me,ts:Date.now(),attachments:ke.messages[ze].attachments}])];q(ce,i.uid,X,me,m,!1)},[o,ye,m,q]),w=ve.useCallback(()=>{p(null),G("")},[]),R=ve.useCallback(()=>{var ce;(ce=te.current)==null||ce.abort(),dp(),O([]),p(null),x(!1),D(!1),G(""),c("pro"),document.documentElement.setAttribute("data-theme","dark"),W(null)},[]),pe=ve.useCallback(ce=>{var le;(v==null?void 0:v.sessionId)===ce&&((le=te.current)==null||le.abort()),O(me=>me.filter(ke=>ke.id!==ce)),k===ce&&p(null),b("Chat deleted")},[k,v,b]),ie=ve.useCallback(ce=>{O(le=>le.map(me=>me.id===ce?{...me,pinned:!me.pinned}:me))},[]),ae=ve.useCallback((ce,le)=>{O(me=>me.map(ke=>ke.id===ce?{...ke,title:le}:ke))},[])
ve.useEffect(()=>{const _h=(e)=>{const {sessionId:d,msgUid:u}=e.detail||{};if(!d||!u)return;O(le=>le.map(me=>{if(me.id!==d)return me;const msgs=me.messages;const idx=msgs.findIndex(ke=>ke.uid===u);if(idx===-1)return me;const target=msgs[idx];let toRemove=new Set([u]);if(target.role==="assistant"&&idx>0&&msgs[idx-1].role==="user"){toRemove.add(msgs[idx-1].uid)}else if(target.role==="user"&&idx<msgs.length-1&&msgs[idx+1].role==="assistant"){toRemove.add(msgs[idx+1].uid)}return{...me,messages:msgs.filter(ke=>!toRemove.has(ke.uid))}}))};window.addEventListener("luca-delete-message",_h);return()=>window.removeEventListener("luca-delete-message",_h)},[])
const Te=ve.useCallback(ce=>{W(ce),j(le=>({...le,theme:ce.theme})),C(!1)},[]);return E?u.jsxs("div",{className:"flex h-dvh overflow-hidden bg-canvas text-ink",children:[u.jsx(xp,{sessions:o,activeId:k,generatingId:(v==null?void 0:v.sessionId)||null,search:Y,onSearch:G,onSelect:p,onNew:w,onRename:ae,onTogglePin:ie,onDelete:pe,onOpenSettings:()=>x(!0),mobileOpen:U,onCloseMobile:()=>D(!1)}),u.jsxs("div",{className:"relative flex min-w-0 flex-1 flex-col",children:[u.jsx("div",{className:"chat-ambient","aria-hidden":"true"}),u.jsxs("header",{className:"relative z-20 flex h-[52px] shrink-0 items-center gap-1.5 border-b border-line bg-canvas/70 px-3.5 backdrop-blur-md",children:[u.jsx("button",{onClick:()=>D(!0),className:"grid h-9 w-9 place-items-center rounded-lg text-mute transition-all duration-200 hover:bg-surface1 hover:text-ink active:scale-90 md:hidden","aria-label":"Open sidebar",children:u.jsx(Wf,{size:17})}),u.jsx("h1",{className:"max-w-[46ch] truncate text-sm font-semibold",children:J?J.title:"New chat"}),u.jsx("div",{className:"flex-1"}),u.jsx("button",{onClick:function(){if(!J)return;var _t=J.title.replace(/[^\w-]+/g,"_").slice(0,40);var _c=J.messages.map(function(m){return(m.role==="user"?"**You:** ":"**Luca:** ")+(typeof m.content==="string"?m.content:"")}).join("\n\n");var _b=new Blob([_c],{type:"text/markdown"});var _u=URL.createObjectURL(_b);var _a=document.createElement("a");_a.href=_u;_a.download=_t+".md";_a.click();setTimeout(function(){URL.revokeObjectURL(_u)},2000);b("Chat exported")},className:"grid h-9 w-9 place-items-center rounded-lg text-mute transition-all duration-200 hover:bg-surface1 hover:text-ink active:scale-90","aria-label":"Export chat",children:u.jsx(cr,{size:16})}),u.jsx("button",{onClick:()=>x(!0),className:"grid h-9 w-9 place-items-center rounded-lg text-mute transition-all duration-200 hover:bg-surface1 hover:text-ink active:scale-90","aria-label":"Open settings",children:u.jsx(kc,{size:16})})]}),u.jsx(Rp,{session:J,profile:E,settings:h,onSuggestion:ce=>ee(ce,[]),onRegenerate:Q,onEditResend:se,onToast:b}),u.jsx(Ip,{streaming:ye,onSend:ee,onStop:re,tier:m,onTierChange:c,settings:h,onToast:b})]}),u.jsx(Op,{open:y,settings:h,onChange:ce=>j(le=>({...le,...ce})),onClose:()=>x(!1),onReset:R}),u.jsx(lm,{open:!1,onClose:()=>{},onToast:b}),u.jsx("div",{className:"pointer-events-none fixed bottom-5 left-5 z-[70] flex flex-col gap-2",children:_.map(ce=>u.jsxs("div",{className:"anim-toast pointer-events-auto flex items-center gap-2.5 rounded-xl border border-linestrong bg-surface2 px-4 py-2.5 text-[13px] shadow-[0_12px_32px_rgba(0,0,0,0.5)]",role:"status",children:[u.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-accent"}),ce.text]},ce.id))})]}):u.jsx(Ap,{onComplete:Te})}
Ef.createRoot(document.getElementById("root")).render(u.jsx(gm,{}));
