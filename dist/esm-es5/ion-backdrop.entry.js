import{r as registerInstance,e as createEvent,h,H as Host}from"./index-3ccd7557.js";import{b as getIonMode}from"./ionic-global-cc7644a8.js";import{G as GESTURE_CONTROLLER}from"./gesture-controller-cb973372.js";var backdropIosCss=":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}";var backdropMdCss=":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}";var Backdrop=function(){function o(o){registerInstance(this,o);this.ionBackdropTap=createEvent(this,"ionBackdropTap",7);this.blocker=GESTURE_CONTROLLER.createBlocker({disableScroll:true});this.visible=true;this.tappable=true;this.stopPropagation=true}o.prototype.connectedCallback=function(){if(this.stopPropagation){this.blocker.block()}};o.prototype.disconnectedCallback=function(){this.blocker.unblock()};o.prototype.onMouseDown=function(o){this.emitTap(o)};o.prototype.emitTap=function(o){if(this.stopPropagation){o.preventDefault();o.stopPropagation()}if(this.tappable){this.ionBackdropTap.emit()}};o.prototype.render=function(){var o;var t=getIonMode(this);return h(Host,{tabindex:"-1","aria-hidden":"true",class:(o={},o[t]=true,o["backdrop-hide"]=!this.visible,o["backdrop-no-tappable"]=!this.tappable,o)})};return o}();Backdrop.style={ios:backdropIosCss,md:backdropMdCss};export{Backdrop as ion_backdrop};