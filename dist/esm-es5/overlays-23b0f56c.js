import{__awaiter,__generator,__spreadArrays}from"tslib";import{b as getIonMode,c as config}from"./ionic-global-cc7644a8.js";import{c as componentOnReady,a as addEventListener,b as removeEventListener,g as getElementRoot}from"./helpers-83546701.js";import{OVERLAY_BACK_BUTTON_PRIORITY}from"./hardware-back-button-3fda9f12.js";var lastId=0;var activeAnimations=new WeakMap;var createController=function(e){return{create:function(t){return createOverlay(e,t)},dismiss:function(t,r,n){return dismissOverlay(document,t,r,e,n)},getTop:function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,getOverlay(document,e)]}))}))}}};var alertController=createController("ion-alert");var actionSheetController=createController("ion-action-sheet");var loadingController=createController("ion-loading");var modalController=createController("ion-modal");var pickerController=createController("ion-picker");var popoverController=createController("ion-popover");var toastController=createController("ion-toast");var prepareOverlay=function(e){if(typeof document!=="undefined"){connectListeners(document)}var t=lastId++;e.overlayIndex=t;if(!e.hasAttribute("id")){e.id="ion-overlay-"+t}};var createOverlay=function(e,t){if(typeof customElements!=="undefined"){return customElements.whenDefined(e).then((function(){var r=document.createElement(e);r.classList.add("overlay-hidden");Object.assign(r,t);getAppRoot(document).appendChild(r);return new Promise((function(e){return componentOnReady(r,e)}))}))}return Promise.resolve()};var focusableQueryString='[tabindex]:not([tabindex^="-"]), input:not([type=hidden]):not([tabindex^="-"]), textarea:not([tabindex^="-"]), button:not([tabindex^="-"]), select:not([tabindex^="-"]), .ion-focusable:not([tabindex^="-"])';var innerFocusableQueryString="input:not([type=hidden]), textarea, button, select";var focusFirstDescendant=function(e,t){var r=e.querySelector(focusableQueryString);var n=r&&r.shadowRoot;if(n){r=n.querySelector(innerFocusableQueryString)||r}if(r){r.focus()}else{t.focus()}};var focusLastDescendant=function(e,t){var r=Array.from(e.querySelectorAll(focusableQueryString));var n=r.length>0?r[r.length-1]:null;var o=n&&n.shadowRoot;if(o){n=o.querySelector(innerFocusableQueryString)||n}if(n){n.focus()}else{t.focus()}};var trapKeyboardFocus=function(e,t){var r=getOverlay(t);var n=e.target;if(!r||!n){return}if(r===n){r.lastFocus=undefined}else{var o=getElementRoot(r);if(!o.contains(n)){return}var a=o.querySelector(".ion-overlay-wrapper");if(!a){return}if(a.contains(n)){r.lastFocus=n}else{var i=r.lastFocus;focusFirstDescendant(a,r);if(i===t.activeElement){focusLastDescendant(a,r)}r.lastFocus=t.activeElement}}};var connectListeners=function(e){if(lastId===0){lastId=1;e.addEventListener("focus",(function(t){return trapKeyboardFocus(t,e)}),true);e.addEventListener("ionBackButton",(function(t){var r=getOverlay(e);if(r&&r.backdropDismiss){t.detail.register(OVERLAY_BACK_BUTTON_PRIORITY,(function(){return r.dismiss(undefined,BACKDROP)}))}}));e.addEventListener("keyup",(function(t){if(t.key==="Escape"){var r=getOverlay(e);if(r&&r.backdropDismiss){r.dismiss(undefined,BACKDROP)}}}))}};var dismissOverlay=function(e,t,r,n,o){var a=getOverlay(e,n,o);if(!a){return Promise.reject("overlay does not exist")}return a.dismiss(t,r)};var getOverlays=function(e,t){if(t===undefined){t="ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast"}return Array.from(e.querySelectorAll(t)).filter((function(e){return e.overlayIndex>0}))};var getOverlay=function(e,t,r){var n=getOverlays(e,t);return r===undefined?n[n.length-1]:n.find((function(e){return e.id===r}))};var present=function(e,t,r,n,o){return __awaiter(void 0,void 0,void 0,(function(){var a,i,s;return __generator(this,(function(l){switch(l.label){case 0:if(e.presented){return[2]}e.presented=true;e.willPresent.emit();a=getIonMode(e);i=e.enterAnimation?e.enterAnimation:config.get(t,a==="ios"?r:n);return[4,overlayAnimation(e,i,e.el,o)];case 1:s=l.sent();if(s){e.didPresent.emit()}if(e.el.tagName!=="ION-TOAST"){focusPreviousElementOnDismiss(e.el)}if(e.keyboardClose){e.el.focus()}return[2]}}))}))};var focusPreviousElementOnDismiss=function(e){return __awaiter(void 0,void 0,void 0,(function(){var t,r;return __generator(this,(function(n){switch(n.label){case 0:t=document.activeElement;if(!t){return[2]}r=t&&t.shadowRoot;if(r){t=r.querySelector(innerFocusableQueryString)||t}return[4,e.onDidDismiss()];case 1:n.sent();t.focus();return[2]}}))}))};var dismiss=function(e,t,r,n,o,a,i){return __awaiter(void 0,void 0,void 0,(function(){var s,l,c;return __generator(this,(function(u){switch(u.label){case 0:if(!e.presented){return[2,false]}e.presented=false;u.label=1;case 1:u.trys.push([1,4,,5]);e.el.style.setProperty("pointer-events","none");e.willDismiss.emit({data:t,role:r});s=getIonMode(e);l=e.leaveAnimation?e.leaveAnimation:config.get(n,s==="ios"?o:a);if(!(r!=="gesture"))return[3,3];return[4,overlayAnimation(e,l,e.el,i)];case 2:u.sent();u.label=3;case 3:e.didDismiss.emit({data:t,role:r});activeAnimations.delete(e);return[3,5];case 4:c=u.sent();console.error(c);return[3,5];case 5:e.el.remove();return[2,true]}}))}))};var getAppRoot=function(e){return e.querySelector("ion-app")||e.body};var overlayAnimation=function(e,t,r,n){return __awaiter(void 0,void 0,void 0,(function(){var o,a,i;return __generator(this,(function(s){switch(s.label){case 0:r.classList.remove("overlay-hidden");o=r.shadowRoot||e.el;a=t(o,n);if(!e.animated||!config.getBoolean("animated",true)){a.duration(0)}if(e.keyboardClose){a.beforeAddWrite((function(){var e=r.ownerDocument.activeElement;if(e&&e.matches("input, ion-input, ion-textarea")){e.blur()}}))}i=activeAnimations.get(e)||[];activeAnimations.set(e,__spreadArrays(i,[a]));return[4,a.play()];case 1:s.sent();return[2,true]}}))}))};var eventMethod=function(e,t){var r;var n=new Promise((function(e){return r=e}));onceEvent(e,t,(function(e){r(e.detail)}));return n};var onceEvent=function(e,t,r){var n=function(o){removeEventListener(e,t,n);r(o)};addEventListener(e,t,n)};var isCancel=function(e){return e==="cancel"||e===BACKDROP};var defaultGate=function(e){return e()};var safeCall=function(e,t){if(typeof e==="function"){var r=config.get("_zoneGate",defaultGate);return r((function(){try{return e(t)}catch(r){console.error(r)}}))}return undefined};var BACKDROP="backdrop";export{BACKDROP as B,alertController as a,actionSheetController as b,popoverController as c,present as d,prepareOverlay as e,dismiss as f,eventMethod as g,activeAnimations as h,isCancel as i,loadingController as l,modalController as m,pickerController as p,safeCall as s,toastController as t};