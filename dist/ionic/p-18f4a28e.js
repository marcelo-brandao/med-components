import{b as t}from"./p-8ef968c3.js";import{c as n}from"./p-b62826b5.js";import{MENU_BACK_BUTTON_PRIORITY as a}from"./p-5ca454a8.js";const r=t=>n().duration(t?400:300),e=a=>{let e,s;const o=a.width+8,i=n(),c=n();a.isEndSide?(e=o+"px",s="0px"):(e=-o+"px",s="0px"),i.addElement(a.menuInnerEl).fromTo("transform",`translateX(${e})`,`translateX(${s})`);const u="ios"===t(a),p=u?.2:.25;return c.addElement(a.backdropEl).fromTo("opacity",.01,p),r(u).addAnimation([i,c])},s=a=>{let e,s;const o=t(a),i=a.width;a.isEndSide?(e=-i+"px",s=i+"px"):(e=i+"px",s=-i+"px");const c=n().addElement(a.menuInnerEl).fromTo("transform",`translateX(${s})`,"translateX(0px)"),u=n().addElement(a.contentEl).fromTo("transform","translateX(0px)",`translateX(${e})`),p=n().addElement(a.backdropEl).fromTo("opacity",.01,.32);return r("ios"===o).addAnimation([c,u,p])},o=a=>{const e=t(a),s=a.width*(a.isEndSide?-1:1)+"px",o=n().addElement(a.contentEl).fromTo("transform","translateX(0px)",`translateX(${s})`);return r("ios"===e).addAnimation(o)},i=(()=>{const t=new Map,n=[],r=async t=>{if(await w(),"start"===t||"end"===t){return m(n=>n.side===t&&!n.disabled)||m(n=>n.side===t)}if(null!=t)return m(n=>n.menuId===t);return m(t=>!t.disabled)||(n.length>0?n[0].el:void 0)},i=async()=>(await w(),p()),c=(n,a)=>{t.set(n,a)},u=t=>{const a=t.side;n.filter(n=>n.side===a&&n!==t).forEach(t=>t.disabled=!0)},p=()=>m(t=>t._isOpen),l=()=>n.some(t=>t.isAnimating),m=t=>{const a=n.find(t);if(void 0!==a)return a.el},w=()=>Promise.all(Array.from(document.querySelectorAll("ion-menu")).map(t=>t.componentOnReady()));return c("reveal",o),c("push",s),c("overlay",e),"undefined"!=typeof document&&document.addEventListener("ionBackButton",t=>{const n=p();n&&t.detail.register(a,()=>n.close())}),{registerAnimation:c,get:r,getMenus:async()=>(await w(),n.map(t=>t.el)),getOpen:i,isEnabled:async t=>{const n=await r(t);return!!n&&!n.disabled},swipeGesture:async(t,n)=>{const a=await r(n);return a&&(a.swipeGesture=t),a},isAnimating:async()=>(await w(),l()),isOpen:async t=>{if(null!=t){const n=await r(t);return void 0!==n&&n.isOpen()}return void 0!==await i()},enable:async(t,n)=>{const a=await r(n);return a&&(a.disabled=!t),a},toggle:async t=>{const n=await r(t);return!!n&&n.toggle()},close:async t=>{const n=await(void 0!==t?r(t):i());return void 0!==n&&n.close()},open:async t=>{const n=await r(t);return!!n&&n.open()},_getOpenSync:p,_createAnimation:(n,a)=>{const r=t.get(n);if(!r)throw new Error("animation not registered");return r(a)},_register:t=>{n.indexOf(t)<0&&(t.disabled||u(t),n.push(t))},_unregister:t=>{const a=n.indexOf(t);a>-1&&n.splice(a,1)},_setOpen:async(t,n,a)=>{if(l())return!1;if(n){const n=await i();n&&t.el!==n&&await n.setOpen(!1,!1)}return t._setOpen(n,a)},_setActiveMenu:u}})();export{i as m}