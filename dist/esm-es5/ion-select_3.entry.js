import{__awaiter,__generator}from"tslib";import{r as registerInstance,e as createEvent,h,H as Host,i as getElement}from"./index-3ccd7557.js";import{b as getIonMode}from"./ionic-global-cc7644a8.js";import{h as findItemLabel,d as getAriaLabel,e as renderHiddenInput}from"./helpers-83546701.js";import"./hardware-back-button-3fda9f12.js";import{c as popoverController,b as actionSheetController,a as alertController,s as safeCall}from"./overlays-23b0f56c.js";import{h as hostContext,g as getClassMap}from"./theme-0269729a.js";var watchForOptions=function(e,t,n){if(typeof MutationObserver==="undefined"){return}var i=new MutationObserver((function(e){n(getSelectedOption(e,t))}));i.observe(e,{childList:true,subtree:true});return i};var getSelectedOption=function(e,t){var n;e.forEach((function(e){for(var i=0;i<e.addedNodes.length;i++){n=findCheckedOption(e.addedNodes[i],t)||n}}));return n};var findCheckedOption=function(e,t){if(e.nodeType!==1){return undefined}var n=e.tagName===t.toUpperCase()?[e]:Array.from(e.querySelectorAll(t));return n.find((function(t){return t.value===e.value}))};var selectIosCss=":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{position:relative;opacity:0.33}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:20px}.select-icon{width:12px;height:18px}";var selectMdCss=":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{position:relative;opacity:0.33}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:0;--padding-bottom:10px;--padding-start:16px}.select-icon{width:19px;height:19px}:host-context(.item-label-floating) .select-icon{-webkit-transform:translate3d(0,  -9px,  0);transform:translate3d(0,  -9px,  0)}";var Select=function(){function e(e){var t=this;registerInstance(this,e);this.ionChange=createEvent(this,"ionChange",7);this.ionCancel=createEvent(this,"ionCancel",7);this.ionFocus=createEvent(this,"ionFocus",7);this.ionBlur=createEvent(this,"ionBlur",7);this.ionStyle=createEvent(this,"ionStyle",7);this.inputId="ion-sel-"+selectIds++;this.didInit=false;this.isExpanded=false;this.disabled=false;this.cancelText="Cancel";this.okText="OK";this.name=this.inputId;this.multiple=false;this.interface="alert";this.interfaceOptions={};this.onClick=function(e){t.setFocus();t.open(e)};this.onFocus=function(){t.ionFocus.emit()};this.onBlur=function(){t.ionBlur.emit()}}e.prototype.disabledChanged=function(){this.emitStyle()};e.prototype.valueChanged=function(){this.emitStyle();if(this.didInit){this.ionChange.emit({value:this.value})}};e.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){var e=this;return __generator(this,(function(t){this.updateOverlayOptions();this.emitStyle();this.mutationO=watchForOptions(this.el,"ion-select-option",(function(){return __awaiter(e,void 0,void 0,(function(){return __generator(this,(function(e){this.updateOverlayOptions();return[2]}))}))}));return[2]}))}))};e.prototype.disconnectedCallback=function(){if(this.mutationO){this.mutationO.disconnect();this.mutationO=undefined}};e.prototype.componentDidLoad=function(){this.didInit=true};e.prototype.open=function(e){return __awaiter(this,void 0,void 0,(function(){var t,n;var i=this;return __generator(this,(function(r){switch(r.label){case 0:if(this.disabled||this.isExpanded){return[2,undefined]}n=this;return[4,this.createOverlay(e)];case 1:t=n.overlay=r.sent();this.isExpanded=true;t.onDidDismiss().then((function(){i.overlay=undefined;i.isExpanded=false;i.setFocus()}));return[4,t.present()];case 2:r.sent();return[2,t]}}))}))};e.prototype.createOverlay=function(e){var t=this.interface;if((t==="action-sheet"||t==="popover")&&this.multiple){console.warn('Select interface cannot be "'+t+'" with a multi-value select. Using the "alert" interface instead.');t="alert"}if(t==="popover"&&!e){console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.');t="alert"}if(t==="popover"){return this.openPopover(e)}if(t==="action-sheet"){return this.openActionSheet()}return this.openAlert()};e.prototype.updateOverlayOptions=function(){var e=this.overlay;if(!e){return}var t=this.childOpts;var n=this.value;switch(this.interface){case"action-sheet":e.buttons=this.createActionSheetButtons(t,n);break;case"popover":var i=e.querySelector("ion-select-popover");if(i){i.options=this.createPopoverOptions(t,n)}break;case"alert":var r=this.multiple?"checkbox":"radio";e.inputs=this.createAlertInputs(t,r,n);break}};e.prototype.createActionSheetButtons=function(e,t){var n=this;var i=e.map((function(e){var i=getOptionValue(e);var r=Array.from(e.classList).filter((function(e){return e!=="hydrated"})).join(" ");var o=OPTION_CLASS+" "+r;return{role:isOptionSelected(i,t,n.compareWith)?"selected":"",text:e.textContent,cssClass:o,handler:function(){n.value=i}}}));i.push({text:this.cancelText,role:"cancel",handler:function(){n.ionCancel.emit()}});return i};e.prototype.createAlertInputs=function(e,t,n){var i=this;var r=e.map((function(e){var r=getOptionValue(e);var o=Array.from(e.classList).filter((function(e){return e!=="hydrated"})).join(" ");var a=OPTION_CLASS+" "+o;return{type:t,cssClass:a,label:e.textContent||"",value:r,checked:isOptionSelected(r,n,i.compareWith),disabled:e.disabled}}));return r};e.prototype.createPopoverOptions=function(e,t){var n=this;var i=e.map((function(e){var i=getOptionValue(e);var r=Array.from(e.classList).filter((function(e){return e!=="hydrated"})).join(" ");var o=OPTION_CLASS+" "+r;return{text:e.textContent||"",cssClass:o,value:i,checked:isOptionSelected(i,t,n.compareWith),disabled:e.disabled,handler:function(){n.value=i;n.close()}}}));return i};e.prototype.openPopover=function(e){return __awaiter(this,void 0,void 0,(function(){var t,n,i,r;return __generator(this,(function(o){t=this.interfaceOptions;n=getIonMode(this);i=this.value;r=Object.assign(Object.assign({mode:n},t),{component:"ion-select-popover",cssClass:["select-popover",t.cssClass],event:e,componentProps:{header:t.header,subHeader:t.subHeader,message:t.message,value:i,options:this.createPopoverOptions(this.childOpts,i)}});return[2,popoverController.create(r)]}))}))};e.prototype.openActionSheet=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,n;return __generator(this,(function(i){e=getIonMode(this);t=this.interfaceOptions;n=Object.assign(Object.assign({mode:e},t),{buttons:this.createActionSheetButtons(this.childOpts,this.value),cssClass:["select-action-sheet",t.cssClass]});return[2,actionSheetController.create(n)]}))}))};e.prototype.openAlert=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,n,i,r,o;var a=this;return __generator(this,(function(s){e=this.getLabel();t=e?e.textContent:null;n=this.interfaceOptions;i=this.multiple?"checkbox":"radio";r=getIonMode(this);o=Object.assign(Object.assign({mode:r},n),{header:n.header?n.header:t,inputs:this.createAlertInputs(this.childOpts,i,this.value),buttons:[{text:this.cancelText,role:"cancel",handler:function(){a.ionCancel.emit()}},{text:this.okText,handler:function(e){a.value=e}}],cssClass:["select-alert",n.cssClass,this.multiple?"multiple-select-alert":"single-select-alert"]});return[2,alertController.create(o)]}))}))};e.prototype.close=function(){if(!this.overlay){return Promise.resolve(false)}return this.overlay.dismiss()};e.prototype.getLabel=function(){return findItemLabel(this.el)};e.prototype.hasValue=function(){return this.getText()!==""};Object.defineProperty(e.prototype,"childOpts",{get:function(){return Array.from(this.el.querySelectorAll("ion-select-option"))},enumerable:false,configurable:true});e.prototype.getText=function(){var e=this.selectedText;if(e!=null&&e!==""){return e}return generateText(this.childOpts,this.value,this.compareWith)};e.prototype.setFocus=function(){if(this.focusEl){this.focusEl.focus()}};e.prototype.emitStyle=function(){this.ionStyle.emit({interactive:true,select:true,"has-placeholder":this.placeholder!=null,"has-value":this.hasValue(),"interactive-disabled":this.disabled,"select-disabled":this.disabled})};e.prototype.render=function(){var e;var t=this;var n=this,i=n.disabled,r=n.el,o=n.inputId,a=n.isExpanded,s=n.name,l=n.placeholder,c=n.value;var d=getIonMode(this);var p=getAriaLabel(r,o),u=p.labelText,f=p.labelId;renderHiddenInput(true,r,s,parseValue(c),i);var v=this.getText();var g=false;var m=v;if(m===""&&l!=null){m=l;g=true}var b={"select-text":true,"select-placeholder":g};var x=g?"placeholder":"text";var y=u!==undefined?m!==""?m+", "+u:u:m;return h(Host,{onClick:this.onClick,role:"button","aria-haspopup":"listbox","aria-disabled":i?"true":null,"aria-label":y,class:(e={},e[d]=true,e["in-item"]=hostContext("ion-item",r),e["select-disabled"]=i,e["select-expanded"]=a,e)},h("div",{"aria-hidden":"true",class:b,part:x},m),h("div",{class:"select-icon",role:"presentation",part:"icon"},h("div",{class:"select-icon-inner"})),h("label",{id:f},y),h("button",{type:"button",disabled:i,id:o,"aria-labelledby":f,"aria-haspopup":"listbox","aria-expanded":""+a,onFocus:this.onFocus,onBlur:this.onBlur,ref:function(e){return t.focusEl=e}}))};Object.defineProperty(e.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{disabled:["disabledChanged"],placeholder:["disabledChanged"],value:["valueChanged"]}},enumerable:false,configurable:true});return e}();var isOptionSelected=function(e,t,n){if(e===undefined){return false}if(Array.isArray(e)){return e.some((function(e){return compareOptions(e,t,n)}))}else{return compareOptions(e,t,n)}};var getOptionValue=function(e){var t=e.value;return t===undefined?e.textContent||"":t};var parseValue=function(e){if(e==null){return undefined}if(Array.isArray(e)){return e.join(",")}return e.toString()};var compareOptions=function(e,t,n){if(typeof n==="function"){return n(e,t)}else if(typeof n==="string"){return e[n]===t[n]}else{return Array.isArray(t)?t.includes(e):e===t}};var generateText=function(e,t,n){if(t===undefined){return""}if(Array.isArray(t)){return t.map((function(t){return textForValue(e,t,n)})).filter((function(e){return e!==null})).join(", ")}else{return textForValue(e,t,n)||""}};var textForValue=function(e,t,n){var i=e.find((function(e){return compareOptions(getOptionValue(e),t,n)}));return i?i.textContent:null};var selectIds=0;var OPTION_CLASS="select-interface-option";Select.style={ios:selectIosCss,md:selectMdCss};var selectOptionCss=":host{display:none}";var SelectOption=function(){function e(e){registerInstance(this,e);this.inputId="ion-selopt-"+selectOptionIds++;this.disabled=false}e.prototype.render=function(){return h(Host,{role:"option",id:this.inputId,class:getIonMode(this)})};Object.defineProperty(e.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});return e}();var selectOptionIds=0;SelectOption.style=selectOptionCss;var selectPopoverCss=".sc-ion-select-popover-h ion-list.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:-1px;margin-bottom:-1px}.sc-ion-select-popover-h ion-list-header.sc-ion-select-popover,.sc-ion-select-popover-h ion-label.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}";var SelectPopover=function(){function e(e){registerInstance(this,e);this.options=[]}e.prototype.onSelect=function(e){var t=this.options.find((function(t){return t.value===e.target.value}));if(t){safeCall(t.handler)}};e.prototype.render=function(){var e=this.options.find((function(e){return e.checked}));var t=e?e.value:undefined;return h(Host,{class:getIonMode(this)},h("ion-list",null,this.header!==undefined&&h("ion-list-header",null,this.header),(this.subHeader!==undefined||this.message!==undefined)&&h("ion-item",null,h("ion-label",{class:"ion-text-wrap"},this.subHeader!==undefined&&h("h3",null,this.subHeader),this.message!==undefined&&h("p",null,this.message))),h("ion-radio-group",{value:t},this.options.map((function(e){return h("ion-item",{class:getClassMap(e.cssClass)},h("ion-label",null,e.text),h("ion-radio",{value:e.value,disabled:e.disabled}))})))))};return e}();SelectPopover.style=selectPopoverCss;export{Select as ion_select,SelectOption as ion_select_option,SelectPopover as ion_select_popover};