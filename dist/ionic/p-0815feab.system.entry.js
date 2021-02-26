var __awaiter=this&&this.__awaiter||function(t,e,i,r){function n(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,o){function s(t){try{l(r.next(t))}catch(e){o(e)}}function a(t){try{l(r["throw"](t))}catch(e){o(e)}}function l(t){t.done?i(t.value):n(t.value).then(s,a)}l((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,n,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(t){return function(e){return l([t,e])}}function l(s){if(r)throw new TypeError("Generator is already executing.");while(i)try{if(r=1,n&&(o=s[0]&2?n["return"]:s[0]?n["throw"]||((o=n["return"])&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;if(n=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:i.label++;return{value:s[1],done:false};case 5:i.label++;n=s[1];s=[0];continue;case 7:s=i.ops.pop();i.trys.pop();continue;default:if(!(o=i.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){i=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(s[0]===6&&i.label<o[1]){i.label=o[1];o=s;break}if(o&&i.label<o[2]){i.label=o[2];i.ops.push(s);break}if(o[2])i.ops.pop();i.trys.pop();continue}s=e.call(t,i)}catch(a){s=[6,a];n=0}finally{r=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-c5c08743.system.js"],(function(t){"use strict";var e,i,r,n,o,s,a;return{setters:[function(t){e=t.r;i=t.f;r=t.c;n=t.j;o=t.h;s=t.H;a=t.i}],execute:function(){var l="item";var h="header";var u="footer";var c=0;var f=1;var d=2;var p=2;var v=function(t,e,i,r){for(var n=0,o=t;n<o.length;n++){var s=o[n];s.change=c;s.d=true}var a=[];var l=r.offset+r.length;var h=function(r){var n=i[r];var o=t.find((function(t){return t.d&&t.cell===n}));if(o){var s=e[r];if(s!==o.top){o.top=s;o.change=f}o.d=false}else{a.push(n)}};for(var u=r.offset;u<l;u++){h(u)}var p=t.filter((function(t){return t.d}));var v=function(i){var r=p.find((function(t){return t.d&&t.cell.type===i.type}));var n=i.i;if(r){r.d=false;r.change=d;r.cell=i;r.top=e[n]}else{t.push({d:false,cell:i,visible:true,change:d,top:e[n]})}};for(var g=0,m=a;g<m.length;g++){var y=m[g];v(y)}t.filter((function(t){return t.d&&t.top!==-9999})).forEach((function(t){t.change=f;t.top=-9999}))};var g=function(t,e,i,r){var n=Array.from(t.children).filter((function(t){return t.tagName!=="TEMPLATE"}));var o=n.length;var s;for(var a=0;a<i.length;a++){var l=i[a];var h=l.cell;if(l.change===d){if(a<o){s=n[a];e(s,h,a)}else{var u=m(t,h.type);s=e(u,h,a)||u;s.classList.add("virtual-item");t.appendChild(s)}s["$ionCell"]=h}else{s=n[a]}if(l.change!==c){s.style.transform="translate3d(0,"+l.top+"px,0)"}var f=h.visible;if(l.visible!==f){if(f){s.classList.remove("virtual-loading")}else{s.classList.add("virtual-loading")}l.visible=f}if(h.reads>0){r(h,s);h.reads--}}};var m=function(t,e){var i=y(t,e);if(i&&t.ownerDocument){return t.ownerDocument.importNode(i.content,true).children[0]}return null};var y=function(t,e){switch(e){case l:return t.querySelector("template:not([name])");case h:return t.querySelector("template[name=header]");case u:return t.querySelector("template[name=footer]")}};var b=function(t,e,i){return{top:Math.max(t-i,0),bottom:t+e+i}};var x=function(t,e,i){var r=e.top;var n=e.bottom;var o=0;for(;o<t.length;o++){if(t[o]>r){break}}var s=Math.max(o-i-1,0);for(;o<t.length;o++){if(t[o]>=n){break}}var a=Math.min(o+i,t.length);var l=a-s;return{offset:s,length:l}};var H=function(t,e,i){var r=i.offset+i.length;return t<=r||e.offset!==i.offset||e.length!==i.length};var w=function(t,e){var i=t.length>0?t[t.length-1].index:0;if(e===0){return 0}else if(e===i+1){return t.length}else{return t.findIndex((function(t){return t.index===e}))}};var S=function(t,e,i){if(i===0&&e.length>=t.length){return e}for(var r=0;r<e.length;r++){t[r+i]=e[r]}return t};var E=function(t,e,i,r,n,o,s,a,c,f,d,v){var g=[];var m=v+d;for(var y=d;y<m;y++){var b=t[y];if(n){var x=n(b,y,t);if(x!=null){g.push({i:f++,type:h,value:x,index:y,height:i?i(x,y):s,reads:i?0:p,visible:!!i})}}g.push({i:f++,type:l,value:b,index:y,height:e?e(b,y):c,reads:e?0:p,visible:!!e});if(o){var x=o(b,y,t);if(x!=null){g.push({i:f++,type:u,value:x,index:y,height:r?r(x,y):a,reads:r?0:p,visible:!!r})}}}return g};var I=function(t,e,i){var r=t[i];for(var n=i;n<t.length;n++){t[n]=r;r+=e[n].height}return r};var _=function(t,e){if(!t){return new Uint32Array(e)}if(t.length===e){return t}else if(e>t.length){var i=new Uint32Array(e);i.set(t);return i}else{return t.subarray(0,e)}};var C=function(t,e,i){var r=e.find((function(e){return e.type===l&&e.index===t}));if(r){return i[r.i]}return-1};var D="ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-virtual-scroll>.virtual-loading{opacity:0}ion-virtual-scroll>.virtual-item{position:absolute !important;top:0 !important;right:0 !important;left:0 !important;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}";var k=t("ion_virtual_scroll",function(){function t(t){var i=this;e(this,t);this.range={offset:0,length:0};this.viewportHeight=0;this.cells=[];this.virtualDom=[];this.isEnabled=false;this.viewportOffset=0;this.currentScrollTop=0;this.indexDirty=0;this.lastItemLen=0;this.totalHeight=0;this.approxItemHeight=45;this.approxHeaderHeight=30;this.approxFooterHeight=30;this.onScroll=function(){i.updateVirtualScroll()}}t.prototype.itemsChanged=function(){this.calcCells();this.updateVirtualScroll()};t.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){var t,e;return __generator(this,(function(i){switch(i.label){case 0:t=this.el.closest("ion-content");if(!t){console.error("<ion-virtual-scroll> must be used inside an <ion-content>");return[2]}e=this;return[4,t.getScrollElement()];case 1:e.scrollEl=i.sent();this.contentEl=t;this.calcCells();this.updateState();return[2]}}))}))};t.prototype.componentDidUpdate=function(){this.updateState()};t.prototype.disconnectedCallback=function(){this.scrollEl=undefined};t.prototype.onResize=function(){this.calcCells();this.updateVirtualScroll()};t.prototype.positionForItem=function(t){return Promise.resolve(C(t,this.cells,this.getHeightIndex()))};t.prototype.checkRange=function(t,e){if(e===void 0){e=-1}return __awaiter(this,void 0,void 0,(function(){var i,r,n;return __generator(this,(function(o){if(!this.items){return[2]}i=e===-1?this.items.length-t:e;r=w(this.cells,t);n=E(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,r,t,i);this.cells=S(this.cells,n,r);this.lastItemLen=this.items.length;this.indexDirty=Math.max(t-1,0);this.scheduleUpdate();return[2]}))}))};t.prototype.checkEnd=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){if(this.items){this.checkRange(this.lastItemLen)}return[2]}))}))};t.prototype.updateVirtualScroll=function(){if(!this.isEnabled||!this.scrollEl){return}if(this.timerUpdate){clearTimeout(this.timerUpdate);this.timerUpdate=undefined}i(this.readVS.bind(this));r(this.writeVS.bind(this))};t.prototype.readVS=function(){var t=this,e=t.contentEl,i=t.scrollEl,r=t.el;var n=0;var o=r;while(o&&o!==e){n+=o.offsetTop;o=o.offsetParent}this.viewportOffset=n;if(i){this.viewportHeight=i.offsetHeight;this.currentScrollTop=i.scrollTop}};t.prototype.writeVS=function(){var t=this.indexDirty;var e=this.currentScrollTop-this.viewportOffset;var i=b(e,this.viewportHeight,100);var r=this.getHeightIndex();var o=x(r,i,2);var s=H(t,this.range,o);if(!s){return}this.range=o;v(this.virtualDom,r,this.cells,o);if(this.nodeRender){g(this.el,this.nodeRender,this.virtualDom,this.updateCellHeight.bind(this))}else if(this.domRender){this.domRender(this.virtualDom)}else if(this.renderItem){n(this)}};t.prototype.updateCellHeight=function(t,e){var i=this;var r=function(){if(e["$ionCell"]===t){var r=window.getComputedStyle(e);var n=e.offsetHeight+parseFloat(r.getPropertyValue("margin-bottom"));i.setCellHeight(t,n)}};if(e&&e.componentOnReady){e.componentOnReady().then(r)}else{r()}};t.prototype.setCellHeight=function(t,e){var i=t.i;if(t!==this.cells[i]){return}if(t.height!==e||t.visible!==true){t.visible=true;t.height=e;this.indexDirty=Math.min(this.indexDirty,i);this.scheduleUpdate()}};t.prototype.scheduleUpdate=function(){var t=this;clearTimeout(this.timerUpdate);this.timerUpdate=setTimeout((function(){return t.updateVirtualScroll()}),100)};t.prototype.updateState=function(){var t=!!(this.scrollEl&&this.cells);if(t!==this.isEnabled){this.enableScrollEvents(t);if(t){this.updateVirtualScroll()}}};t.prototype.calcCells=function(){if(!this.items){return}this.lastItemLen=this.items.length;this.cells=E(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,0,0,this.lastItemLen);this.indexDirty=0};t.prototype.getHeightIndex=function(){if(this.indexDirty!==Infinity){this.calcHeightIndex(this.indexDirty)}return this.heightIndex};t.prototype.calcHeightIndex=function(t){if(t===void 0){t=0}this.heightIndex=_(this.heightIndex,this.cells.length);this.totalHeight=I(this.heightIndex,this.cells,t);this.indexDirty=Infinity};t.prototype.enableScrollEvents=function(t){var e=this;if(this.rmEvent){this.rmEvent();this.rmEvent=undefined}var i=this.scrollEl;if(i){this.isEnabled=t;i.addEventListener("scroll",this.onScroll);this.rmEvent=function(){i.removeEventListener("scroll",e.onScroll)}}};t.prototype.renderVirtualNode=function(t){var e=t.cell,i=e.type,r=e.value,n=e.index;switch(i){case l:return this.renderItem(r,n);case h:return this.renderHeader(r,n);case u:return this.renderFooter(r,n)}};t.prototype.render=function(){var t=this;return o(s,{style:{height:this.totalHeight+"px"}},this.renderItem&&o(O,{dom:this.virtualDom},this.virtualDom.map((function(e){return t.renderVirtualNode(e)}))))};Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{itemHeight:["itemsChanged"],headerHeight:["itemsChanged"],footerHeight:["itemsChanged"],items:["itemsChanged"]}},enumerable:false,configurable:true});return t}());var O=function(t,e,i){var r=t.dom;return i.map(e,(function(t,e){var i=r[e];var n=t.vattrs||{};var o=n.class||"";o+="virtual-item ";if(!i.visible){o+="virtual-loading"}return Object.assign(Object.assign({},t),{vattrs:Object.assign(Object.assign({},n),{class:o,style:Object.assign(Object.assign({},n.style),{transform:"translate3d(0,"+i.top+"px,0)"})})})}))};k.style=D}}}));