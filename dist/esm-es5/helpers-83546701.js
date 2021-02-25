import{__spreadArrays}from"tslib";var componentOnReady=function(e,t){if(e.componentOnReady){e.componentOnReady().then(t)}else{t()}};var inheritAttributes=function(e,t){if(t===void 0){t=[]}var n={};t.forEach((function(t){if(e.hasAttribute(t)){var r=e.getAttribute(t);if(r!==null){n[t]=e.getAttribute(t)}e.removeAttribute(t)}}));return n};var addEventListener=function(e,t,n,r){if(typeof window!=="undefined"){var i=window;var a=i&&i.Ionic&&i.Ionic.config;if(a){var o=a.get("_ael");if(o){return o(e,t,n,r)}else if(a._ael){return a._ael(e,t,n,r)}}}return e.addEventListener(t,n,r)};var removeEventListener=function(e,t,n,r){if(typeof window!=="undefined"){var i=window;var a=i&&i.Ionic&&i.Ionic.config;if(a){var o=a.get("_rel");if(o){return o(e,t,n,r)}else if(a._rel){return a._rel(e,t,n,r)}}}return e.removeEventListener(t,n,r)};var getElementRoot=function(e,t){if(t===void 0){t=e}return e.shadowRoot||t};var raf=function(e){if(typeof __zone_symbol__requestAnimationFrame==="function"){return __zone_symbol__requestAnimationFrame(e)}if(typeof requestAnimationFrame==="function"){return requestAnimationFrame(e)}return setTimeout(e)};var hasShadowDom=function(e){return!!e.shadowRoot&&!!e.attachShadow};var findItemLabel=function(e){var t=e.closest("ion-item");if(t){return t.querySelector("ion-label")}return null};var getAriaLabel=function(e,t){var n;var r=e.getAttribute("aria-labelledby");var i=e.id;var a=r!==null&&r.trim()!==""?r:t+"-lbl";var o=r!==null&&r.trim()!==""?document.getElementById(r):findItemLabel(e);if(o){if(r===null){o.id=a}n=o.textContent;o.setAttribute("aria-hidden","true")}else if(i.trim()!==""){o=document.querySelector('label[for="'+i+'"]');if(o){if(o.id!==""){a=o.id}else{o.id=a=i+"-lbl"}n=o.textContent}}return{label:o,labelId:a,labelText:n}};var renderHiddenInput=function(e,t,n,r,i){if(e||hasShadowDom(t)){var a=t.querySelector("input.aux-input");if(!a){a=t.ownerDocument.createElement("input");a.type="hidden";a.classList.add("aux-input");t.appendChild(a)}a.disabled=i;a.name=n;a.value=r||""}};var clamp=function(e,t,n){return Math.max(e,Math.min(t,n))};var assert=function(e,t){if(!e){var n="ASSERT: "+t;console.error(n);debugger;throw new Error(n)}};var now=function(e){return e.timeStamp||Date.now()};var pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}if(e.pageX!==undefined){return{x:e.pageX,y:e.pageY}}}return{x:0,y:0}};var isEndSide=function(e){var t=document.dir==="rtl";switch(e){case"start":return t;case"end":return!t;default:throw new Error('"'+e+'" is not a valid value for [side]. Use "start" or "end" instead.')}};var debounceEvent=function(e,t){var n=e._original||e;return{_original:e,emit:debounce(n.emit.bind(n),t)}};var debounce=function(e,t){if(t===void 0){t=0}var n;return function(){var r=[];for(var i=0;i<arguments.length;i++){r[i]=arguments[i]}clearTimeout(n);n=setTimeout.apply(void 0,__spreadArrays([e,t],r))}};export{addEventListener as a,removeEventListener as b,componentOnReady as c,getAriaLabel as d,renderHiddenInput as e,debounceEvent as f,getElementRoot as g,findItemLabel as h,inheritAttributes as i,clamp as j,hasShadowDom as k,assert as l,isEndSide as m,debounce as n,now as o,pointerCoord as p,raf as r};