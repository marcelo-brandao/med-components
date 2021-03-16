import{r as t,e,h as i,H as n,i as o}from"./p-aea38759.js";var r=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var i=-1;return t.some((function(t,n){return t[0]===e&&(i=n,!0)})),i}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var i=t(this.__entries__,e),n=this.__entries__[i];return n&&n[1]},e.prototype.set=function(e,i){var n=t(this.__entries__,e);~n?this.__entries__[n][1]=i:this.__entries__.push([e,i])},e.prototype.delete=function(e){var i=this.__entries__,n=t(i,e);~n&&i.splice(n,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var i=0,n=this.__entries__;i<n.length;i++){var o=n[i];t.call(e,o[1],o[0])}},e}()}(),a="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,s="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),l="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(s):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)},f=["top","right","bottom","left","width","height","size","weight"],c="undefined"!=typeof MutationObserver,h=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t){var e=!1,i=!1,n=0;function o(){e&&(e=!1,t()),i&&a()}function r(){l(o)}function a(){var t=Date.now();if(e){if(t-n<2)return;i=!0}else e=!0,i=!1,setTimeout(r,20);n=t}return a}(this.refresh.bind(this))}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,i=e.indexOf(t);~i&&e.splice(i,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){a&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),c?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){a&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,i=void 0===e?"":e;f.some((function(t){return!!~i.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),u=function(t,e){for(var i=0,n=Object.keys(e);i<n.length;i++){var o=n[i];Object.defineProperty(t,o,{value:e[o],enumerable:!1,writable:!1,configurable:!0})}return t},d=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||s},g=x(0,0,0,0);function b(t){return parseFloat(t)||0}function p(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];return e.reduce((function(e,i){return e+b(t["border-"+i+"-width"])}),0)}var m="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof d(t).SVGGraphicsElement}:function(t){return t instanceof d(t).SVGElement&&"function"==typeof t.getBBox};function v(t){return a?m(t)?function(t){var e=t.getBBox();return x(0,0,e.width,e.height)}(t):function(t){var e=t.clientWidth,i=t.clientHeight;if(!e&&!i)return g;var n=d(t).getComputedStyle(t),o=function(t){for(var e={},i=0,n=["top","right","bottom","left"];i<n.length;i++){var o=n[i];e[o]=b(t["padding-"+o])}return e}(n),r=o.left+o.right,a=o.top+o.bottom,s=b(n.width),l=b(n.height);if("border-box"===n.boxSizing&&(Math.round(s+r)!==e&&(s-=p(n,"left","right")+r),Math.round(l+a)!==i&&(l-=p(n,"top","bottom")+a)),!function(t){return t===d(t).document.documentElement}(t)){var f=Math.round(s+r)-e,c=Math.round(l+a)-i;1!==Math.abs(f)&&(s-=f),1!==Math.abs(c)&&(l-=c)}return x(o.left,o.top,s,l)}(t):g}function x(t,e,i,n){return{x:t,y:e,width:i,height:n}}var w=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=x(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=v(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),y=function(t,e){var i,n,o,r,a,s,l,f=(n=(i=e).x,o=i.y,r=i.width,a=i.height,s="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,l=Object.create(s.prototype),u(l,{x:n,y:o,width:r,height:a,top:o,right:n+r,bottom:a+o,left:n}),l);u(this,{target:t,contentRect:f})},k=function(){function t(t,e,i){if(this.activeObservations_=[],this.observations_=new r,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=i}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof d(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new w(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof d(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new y(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),M="undefined"!=typeof WeakMap?new WeakMap:new r,j=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var i=h.getInstance(),n=new k(e,i,this);M.set(this,n)};["observe","unobserve","disconnect"].forEach((function(t){j.prototype[t]=function(){var e;return(e=M.get(this))[t].apply(e,arguments)}}));var O=void 0!==s.ResizeObserver?s.ResizeObserver:j;const z=class{constructor(i){t(this,i),this.medResize=e(this,"medResize",7),this.hostHeight=0}componentDidLoad(){this.setSize()}disconnectedCallback(){this.sidesResizeObserver.disconnect(),this.hostResizeObserver.disconnect()}setSize(){this.sidesResizeObserver=new O((t=>{for(let e of t){const t=Number(this.rightEl.getBoundingClientRect().width),i=Number(this.leftEl.getBoundingClientRect().width),n=e.contentRect.width-t,o=e.contentRect.width-i;let r=0,a=0;t!==i&&("left"===e.target.id?n>0?a=n:(r=o-n,r<0&&(r*=-1)):"right"===e.target.id&&(o>0?r=o:(a=o-n,a<0&&(a*=-1)))),this.centerEl.style.setProperty("--padding-left",`${r}px`),this.centerEl.style.setProperty("--padding-right",`${a}px`)}})),this.hostResizeObserver=new O((()=>{let t=Number(this.el.getBoundingClientRect().height);t!==this.hostHeight&&(this.medResize.emit({height:t}),this.hostHeight=t)})),this.sidesResizeObserver.observe(this.leftEl),this.sidesResizeObserver.observe(this.rightEl),this.hostResizeObserver.observe(this.el)}render(){return i(n,{"from-stencil":!0},i("header",{class:"header"},i("slot",{name:"top"}),i("div",{class:"header__container"},i("div",{id:"left",class:"left",ref:t=>this.leftEl=t},i("slot",{name:"left"})),i("div",{class:"center",ref:t=>this.centerEl=t},i("slot",{name:"center"}),i("slot",{name:"title"}),i("slot",{name:"subtitle"})),i("div",{id:"right",class:"right",ref:t=>this.rightEl=t},i("slot",{name:"right"})))))}get el(){return o(this)}};z.style=":host{--padding:8px 16px;--background:var(--med-global-background, #141414);--title-color:var(--med-global-color, #fafafa);--title-font-size:16px;--title-line-height:100%;--title-font-weight:600;--subtitle-color:var(--global-color, #fafafa);--subtitle-font-size:12px;--subtitle-line-height:16px;--subtitle-font-weight:600;--center-padding:8px;--slotted-color:var(--med-global-color, #fafafa);--slotted-spacing:16px}:host .header{background:var(--background)}:host .header__container{padding:var(--padding);position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-sizing:border-box;box-sizing:border-box;min-height:48px}:host .left,:host .right{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .left{-ms-flex-pack:start;justify-content:flex-start}:host .right{-ms-flex-pack:end;justify-content:flex-end}:host .center{padding-left:var(--padding-left);padding-right:var(--padding-right);padding-top:var(--center-padding);padding-bottom:var(--center-padding);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-ms-flex-direction:column;flex-direction:column;text-transform:uppercase;text-align:center;width:100%}:host([text-initial]) .center{text-transform:initial}:host([transparent=light]){--background:transparent;--title-color:var(--med-global-color, #fafafa);--subtitle-color:var(--global-color, #fafafa);--slotted-color:var(--med-global-color, #fafafa)}:host([transparent=dark]){--background:transparent;--title-color:var(--med-global-color, #141414);--subtitle-color:var(--global-color, #141414);--slotted-color:var(--med-global-color, #141414)}::slotted(*){margin:0 !important;padding:0 !important}::slotted([slot=left]){color:var(--slotted-color);margin-right:var(--slotted-spacing) !important;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start}::slotted([slot=title]){color:var(--title-color);font-size:var(--title-font-size);font-weight:var(--title-font-weight);line-height:var(--title-line-height);display:block}::slotted([slot=subtitle]){color:var(--subtitle-color);font-size:var(--subtitle-font-size);font-weight:var(--subtitle-font-weight);line-height:var(--subtitle-line-height);display:block}::slotted([slot=right]){color:var(--slotted-color);margin-left:var(--slotted-spacing) !important;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end}:host-context(body.dark),:host-context(data-theme[dark]){--background:var(--med-global-background, #141414);--title-color:var(--med-global-color, #fafafa);--subtitle-color:var(--global-color, #fafafa);--slotted-color:var(--med-global-color, #fafafa)}:host-context(body.light),:host-context(data-theme[light]){--background:var(--med-global-background, #fafafa);--title-color:var(--med-global-color, #141414);--subtitle-color:var(--global-color, #141414);--slotted-color:var(--med-global-color, #141414)}:host-context(body.dark),:host-context(data-theme[dark]){--background:var(--med-global-background, #141414);--title-color:var(--med-global-color, #fafafa);--subtitle-color:var(--global-color, #fafafa);--slotted-color:var(--med-global-color, #fafafa)}";export{z as med_navbar}