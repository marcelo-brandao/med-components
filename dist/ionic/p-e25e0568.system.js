System.register(["./p-c5c08743.system.js","./p-6cf7587f.system.js","./p-c36eb0d2.system.js","./p-956c3635.system.js"],(function(e){"use strict";var t,r;return{setters:[function(){},function(){},function(e){t=e.c},function(e){r=e.g}],execute:function(){var a=540;var o=function(e){return document.querySelector(e+".ion-cloned-element")};var n=e("shadow",(function(e){return e.shadowRoot||e}));var l=function(e){var t=e.tagName==="ION-TABS"?e:e.querySelector("ion-tabs");var r="ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";if(t!=null){var a=t.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");return a!=null?a.querySelector(r):null}return e.querySelector(r)};var s=function(e,t){var r=e.tagName==="ION-TABS"?e:e.querySelector("ion-tabs");var a=[];if(r!=null){var o=r.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");if(o!=null){a=o.querySelectorAll("ion-buttons")}}else{a=e.querySelectorAll("ion-buttons")}for(var n=0,l=a;n<l.length;n++){var s=l[n];var i=s.closest("ion-header");var f=i&&!i.classList.contains("header-collapse-condense-inactive");var c=s.querySelector("ion-back-button");var d=s.classList.contains("buttons-collapse");var v=s.slot==="start"||s.slot==="";if(c!==null&&v&&(d&&f&&t||!d)){return c}}return null};var i=function(e,t,r,a,o){var n=s(a,r);var i=l(o);var d=l(a);var v=s(o,r);var m=n!==null&&i!==null&&!r;var p=d!==null&&v!==null&&r;if(m){var y=i.getBoundingClientRect();var u=n.getBoundingClientRect();c(e,t,r,i,y,u);f(e,t,r,n,y,u)}else if(p){var b=d.getBoundingClientRect();var S=v.getBoundingClientRect();c(e,t,r,d,b,S);f(e,t,r,v,b,S)}return{forward:m,backward:p}};var f=function(e,r,a,l,s,i){var f=r?"calc(100% - "+(i.right+4)+"px)":i.left-4+"px";var c=r?"7px":"-7px";var d=r?"-4px":"4px";var v=r?"-4px":"4px";var m=r?"right":"left";var p=r?"left":"right";var y=[{offset:0,opacity:0,transform:"translate3d("+c+", "+(s.top-40)+"px, 0) scale(2.1)"},{offset:1,opacity:1,transform:"translate3d("+d+", "+(i.top-46)+"px, 0) scale(1)"}];var u=[{offset:0,opacity:1,transform:"translate3d("+d+", "+(i.top-46)+"px, 0) scale(1)"},{offset:.6,opacity:0},{offset:1,opacity:0,transform:"translate3d("+c+", "+(s.top-40)+"px, 0) scale(2.1)"}];var b=a?u:y;var S=[{offset:0,opacity:0,transform:"translate3d("+v+", "+(i.top-41)+"px, 0) scale(0.6)"},{offset:1,opacity:1,transform:"translate3d("+v+", "+(i.top-46)+"px, 0) scale(1)"}];var g=[{offset:0,opacity:1,transform:"translate3d("+v+", "+(i.top-46)+"px, 0) scale(1)"},{offset:.2,opacity:0,transform:"translate3d("+v+", "+(i.top-41)+"px, 0) scale(0.6)"},{offset:1,opacity:0,transform:"translate3d("+v+", "+(i.top-41)+"px, 0) scale(0.6)"}];var T=a?g:S;var x=t();var h=t();var q=o("ion-back-button");var X=n(q).querySelector(".button-text");var A=n(q).querySelector("ion-icon");q.text=l.text;q.mode=l.mode;q.icon=l.icon;q.color=l.color;q.disabled=l.disabled;q.style.setProperty("display","block");q.style.setProperty("position","fixed");h.addElement(A);x.addElement(X);x.beforeStyles({"transform-origin":m+" center"}).beforeAddWrite((function(){l.style.setProperty("display","none");q.style.setProperty(m,f)})).afterAddWrite((function(){l.style.setProperty("display","");q.style.setProperty("display","none");q.style.removeProperty(m)})).keyframes(b);h.beforeStyles({"transform-origin":p+" center"}).keyframes(T);e.addAnimation([x,h])};var c=function(e,r,a,n,l,s){var i;var f=r?"calc(100% - "+l.right+"px)":l.left+"px";var c=r?"-18px":"18px";var d=r?"right":"left";var v=[{offset:0,opacity:0,transform:"translate3d("+c+", "+(s.top-4)+"px, 0) scale(0.49)"},{offset:.1,opacity:0},{offset:1,opacity:1,transform:"translate3d(0, "+(l.top-2)+"px, 0) scale(1)"}];var m=[{offset:0,opacity:.99,transform:"translate3d(0, "+(l.top-2)+"px, 0) scale(1)"},{offset:.6,opacity:0},{offset:1,opacity:0,transform:"translate3d("+c+", "+(s.top-4)+"px, 0) scale(0.5)"}];var p=a?v:m;var y=o("ion-title");var u=t();y.innerText=n.innerText;y.size=n.size;y.color=n.color;u.addElement(y);u.beforeStyles((i={"transform-origin":d+" center",height:"46px",display:"",position:"relative"},i[d]=f,i)).beforeAddWrite((function(){n.style.setProperty("display","none")})).afterAddWrite((function(){n.style.setProperty("display","");y.style.setProperty("display","none")})).keyframes(p);e.addAnimation(u)};var d=e("iosTransitionAnimation",(function(e,o){try{var l="cubic-bezier(0.32,0.72,0,1)";var s="opacity";var f="transform";var c="0%";var d=.8;var v=e.ownerDocument.dir==="rtl";var m=v?"-99.5%":"99.5%";var p=v?"33%":"-33%";var y=o.enteringEl;var u=o.leavingEl;var b=o.direction==="back";var S=y.querySelector(":scope > ion-content");var g=y.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");var T=y.querySelectorAll(":scope > ion-header > ion-toolbar");var x=t();var h=t();x.addElement(y).duration(o.duration||a).easing(o.easing||l).fill("both").beforeRemoveClass("ion-page-invisible");if(u&&e){var q=t();q.addElement(e);x.addAnimation(q)}if(!S&&T.length===0&&g.length===0){h.addElement(y.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs"))}else{h.addElement(S);h.addElement(g)}x.addAnimation(h);if(b){h.beforeClearStyles([s]).fromTo("transform","translateX("+p+")","translateX("+c+")").fromTo(s,d,1)}else{h.beforeClearStyles([s]).fromTo("transform","translateX("+m+")","translateX("+c+")")}if(S){var X=n(S).querySelector(".transition-effect");if(X){var A=X.querySelector(".transition-cover");var E=X.querySelector(".transition-shadow");var C=t();var k=t();var P=t();C.addElement(X).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""});k.addElement(A).beforeClearStyles([s]).fromTo(s,0,.1);P.addElement(E).beforeClearStyles([s]).fromTo(s,.03,.7);C.addAnimation([k,P]);h.addAnimation([C])}}var w=y.querySelector("ion-header.header-collapse-condense");var L=i(x,v,b,y,u),B=L.forward,R=L.backward;T.forEach((function(e){var r=t();r.addElement(e);x.addAnimation(r);var a=t();a.addElement(e.querySelector("ion-title"));var o=t();var l=Array.from(e.querySelectorAll("ion-buttons,[menuToggle]"));var i=e.closest("ion-header");var f=i&&i.classList.contains("header-collapse-condense-inactive");var d;if(b){d=l.filter((function(e){var t=e.classList.contains("buttons-collapse");return t&&!f||!t}))}else{d=l.filter((function(e){return!e.classList.contains("buttons-collapse")}))}o.addElement(d);var y=t();y.addElement(e.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));var u=t();u.addElement(n(e).querySelector(".toolbar-background"));var S=t();var g=e.querySelector("ion-back-button");if(g){S.addElement(g)}r.addAnimation([a,o,y,u,S]);o.fromTo(s,.01,1);y.fromTo(s,.01,1);if(b){if(!f){a.fromTo("transform","translateX("+p+")","translateX("+c+")").fromTo(s,.01,1)}y.fromTo("transform","translateX("+p+")","translateX("+c+")");S.fromTo(s,.01,1)}else{if(!w){a.fromTo("transform","translateX("+m+")","translateX("+c+")").fromTo(s,.01,1)}y.fromTo("transform","translateX("+m+")","translateX("+c+")");u.beforeClearStyles([s,"transform"]);var T=i===null||i===void 0?void 0:i.translucent;if(!T){u.fromTo(s,.01,"var(--opacity)")}else{u.fromTo("transform",v?"translateX(-100%)":"translateX(100%)","translateX(0px)")}if(!B){S.fromTo(s,.01,1)}if(g&&!B){var h=t();h.addElement(n(g).querySelector(".button-text")).fromTo("transform",v?"translateX(-100px)":"translateX(100px)","translateX(0px)");r.addAnimation(h)}}}));if(u){var W=t();var j=u.querySelector(":scope > ion-content");var N=u.querySelectorAll(":scope > ion-header > ion-toolbar");var z=u.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");if(!j&&N.length===0&&z.length===0){W.addElement(u.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs"))}else{W.addElement(j);W.addElement(z)}x.addAnimation(W);if(b){W.beforeClearStyles([s]).fromTo("transform","translateX("+c+")",v?"translateX(-100%)":"translateX(100%)");var D=r(u);x.afterAddWrite((function(){if(x.getDirection()==="normal"){D.style.setProperty("display","none")}}))}else{W.fromTo("transform","translateX("+c+")","translateX("+p+")").fromTo(s,1,d)}if(j){var I=n(j).querySelector(".transition-effect");if(I){var O=I.querySelector(".transition-cover");var F=I.querySelector(".transition-shadow");var G=t();var H=t();var J=t();G.addElement(I).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""});H.addElement(O).beforeClearStyles([s]).fromTo(s,.1,0);J.addElement(F).beforeClearStyles([s]).fromTo(s,.7,.03);G.addAnimation([H,J]);W.addAnimation([G])}}N.forEach((function(e){var r=t();r.addElement(e);var a=t();a.addElement(e.querySelector("ion-title"));var o=t();var l=e.querySelectorAll("ion-buttons,[menuToggle]");var i=e.closest("ion-header");var d=i&&i.classList.contains("header-collapse-condense-inactive");var m=Array.from(l).filter((function(e){var t=e.classList.contains("buttons-collapse");return t&&!d||!t}));o.addElement(m);var y=t();var u=e.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");if(u.length>0){y.addElement(u)}var S=t();S.addElement(n(e).querySelector(".toolbar-background"));var g=t();var T=e.querySelector("ion-back-button");if(T){g.addElement(T)}r.addAnimation([a,o,y,g,S]);x.addAnimation(r);g.fromTo(s,.99,0);o.fromTo(s,.99,0);y.fromTo(s,.99,0);if(b){if(!d){a.fromTo("transform","translateX("+c+")",v?"translateX(-100%)":"translateX(100%)").fromTo(s,.99,0)}y.fromTo("transform","translateX("+c+")",v?"translateX(-100%)":"translateX(100%)");S.beforeClearStyles([s,"transform"]);var h=i===null||i===void 0?void 0:i.translucent;if(!h){S.fromTo(s,"var(--opacity)",0)}else{S.fromTo("transform","translateX(0px)",v?"translateX(-100%)":"translateX(100%)")}if(T&&!R){var q=t();q.addElement(n(T).querySelector(".button-text")).fromTo("transform","translateX("+c+")","translateX("+((v?-124:124)+"px")+")");r.addAnimation(q)}}else{if(!d){a.fromTo("transform","translateX("+c+")","translateX("+p+")").fromTo(s,.99,0).afterClearStyles([f,s])}y.fromTo("transform","translateX("+c+")","translateX("+p+")").afterClearStyles([f,s]);g.afterClearStyles([s]);a.afterClearStyles([s]);o.afterClearStyles([s])}}))}return x}catch(K){throw K}}))}}}));