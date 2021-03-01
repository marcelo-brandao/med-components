var __awaiter=this&&this.__awaiter||function(t,e,n,i){function r(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function a(t){try{u(i.next(t))}catch(e){o(e)}}function s(t){try{u(i["throw"](t))}catch(e){o(e)}}function u(t){t.done?n(t.value):r(t.value).then(a,s)}u((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},i,r,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return u([t,e])}}function u(a){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,r&&(o=a[0]&2?r["return"]:a[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;if(r=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;r=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){n.label=a[1];break}if(a[0]===6&&n.label<o[1]){n.label=o[1];o=a;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(a);break}if(o[2])n.ops.pop();n.trys.pop();continue}a=e.call(t,n)}catch(s){a=[6,s];r=0}finally{i=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-059709b3.system.js","./p-4213ddfe.system.js","./p-d503bdd9.system.js"],(function(t){"use strict";var e,n,i,r,o,a;return{setters:[function(t){e=t.r;n=t.h;i=t.H;r=t.i;o=t.e},function(){},function(t){a=t.a}],execute:function(){var s=":host(.tab-hidden){display:none !important}";var u=t("ion_tab",function(){function t(t){e(this,t);this.loaded=false;this.active=false}t.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:if(!this.active)return[3,2];return[4,this.setActive()];case 1:t.sent();t.label=2;case 2:return[2]}}))}))};t.prototype.setActive=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.prepareLazyLoaded()];case 1:t.sent();this.active=true;return[2]}}))}))};t.prototype.changeActive=function(t){if(t){this.prepareLazyLoaded()}};t.prototype.prepareLazyLoaded=function(){if(!this.loaded&&this.component!=null){this.loaded=true;try{return a(this.delegate,this.el,this.component,["ion-page"])}catch(t){console.error(t)}}return Promise.resolve(undefined)};t.prototype.render=function(){var t=this,e=t.tab,r=t.active,o=t.component;return n(i,{role:"tabpanel","aria-hidden":!r?"true":null,"aria-labelledby":"tab-button-"+e,class:{"ion-page":o===undefined,"tab-hidden":!r}},n("slot",null))};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{active:["changeActive"]}},enumerable:false,configurable:true});return t}());u.style=s;var l=":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;-ms-flex:1;flex:1;contain:layout size style}";var c=t("ion_tabs",function(){function t(t){var n=this;e(this,t);this.ionNavWillLoad=o(this,"ionNavWillLoad",7);this.ionTabsWillChange=o(this,"ionTabsWillChange",3);this.ionTabsDidChange=o(this,"ionTabsDidChange",3);this.transitioning=false;this.useRouter=false;this.onTabClicked=function(t){var e=t.detail,i=e.href,r=e.tab;if(n.useRouter&&i!==undefined){var o=document.querySelector("ion-router");if(o){o.push(i)}}else{n.select(r)}}}t.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){switch(e.label){case 0:if(!this.useRouter){this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]")}if(!!this.useRouter)return[3,2];t=this.tabs;if(!(t.length>0))return[3,2];return[4,this.select(t[0])];case 1:e.sent();e.label=2;case 2:this.ionNavWillLoad.emit();return[2]}}))}))};t.prototype.componentWillRender=function(){var t=this.el.querySelector("ion-tab-bar");if(t){var e=this.selectedTab?this.selectedTab.tab:undefined;t.selectedTab=e}};t.prototype.select=function(t){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(n){switch(n.label){case 0:e=h(this.tabs,t);if(!this.shouldSwitch(e)){return[2,false]}return[4,this.setActive(e)];case 1:n.sent();return[4,this.notifyRouter()];case 2:n.sent();this.tabSwitch();return[2,true]}}))}))};t.prototype.getTab=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){return[2,h(this.tabs,t)]}))}))};t.prototype.getSelected=function(){return Promise.resolve(this.selectedTab?this.selectedTab.tab:undefined)};t.prototype.setRouteId=function(t){return __awaiter(this,void 0,void 0,(function(){var e;var n=this;return __generator(this,(function(i){switch(i.label){case 0:e=h(this.tabs,t);if(!this.shouldSwitch(e)){return[2,{changed:false,element:this.selectedTab}]}return[4,this.setActive(e)];case 1:i.sent();return[2,{changed:true,element:this.selectedTab,markVisible:function(){return n.tabSwitch()}}]}}))}))};t.prototype.getRouteId=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){t=this.selectedTab&&this.selectedTab.tab;return[2,t!==undefined?{id:t,element:this.selectedTab}:undefined]}))}))};t.prototype.setActive=function(t){if(this.transitioning){return Promise.reject("transitioning already happening")}this.transitioning=true;this.leavingTab=this.selectedTab;this.selectedTab=t;this.ionTabsWillChange.emit({tab:t.tab});t.active=true;return Promise.resolve()};t.prototype.tabSwitch=function(){var t=this.selectedTab;var e=this.leavingTab;this.leavingTab=undefined;this.transitioning=false;if(!t){return}if(e!==t){if(e){e.active=false}this.ionTabsDidChange.emit({tab:t.tab})}};t.prototype.notifyRouter=function(){if(this.useRouter){var t=document.querySelector("ion-router");if(t){return t.navChanged("forward")}}return Promise.resolve(false)};t.prototype.shouldSwitch=function(t){var e=this.selectedTab;return t!==undefined&&t!==e&&!this.transitioning};Object.defineProperty(t.prototype,"tabs",{get:function(){return Array.from(this.el.querySelectorAll("ion-tab"))},enumerable:false,configurable:true});t.prototype.render=function(){return n(i,{onIonTabButtonClick:this.onTabClicked},n("slot",{name:"top"}),n("div",{class:"tabs-inner"},n("slot",null)),n("slot",{name:"bottom"}))};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:false,configurable:true});return t}());var h=function(t,e){var n=typeof e==="string"?t.find((function(t){return t.tab===e})):e;if(!n){console.error('tab with id: "'+n+'" does not exist')}return n};c.style=l}}}));