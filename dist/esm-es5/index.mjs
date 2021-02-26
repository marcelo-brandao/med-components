import './index-44bf8136.js';
export { g as getPlatforms, i as isPlatform } from './ionic-global-2b52b731.js';
import './helpers-52552c9a.js';
export { c as createAnimation } from './animation-159fb279.js';
export { a as LIFECYCLE_DID_ENTER, c as LIFECYCLE_DID_LEAVE, L as LIFECYCLE_WILL_ENTER, b as LIFECYCLE_WILL_LEAVE, d as LIFECYCLE_WILL_UNLOAD } from './index-25df50e1.js';
export { iosTransitionAnimation } from './ios.transition-93440477.js';
export { mdTransitionAnimation } from './md.transition-05860038.js';
export { g as getTimeGivenProgression } from './cubic-bezier-868593f2.js';
import './gesture-controller-d1803579.js';
export { createGesture } from './index-5411b460.js';
export { I as IonicSafeString } from './index-9610fee6.js';
import './hardware-back-button-e680d15b.js';
export { m as menuController } from './index-2892f5fc.js';
export { b as actionSheetController, a as alertController, l as loadingController, m as modalController, p as pickerController, c as popoverController, t as toastController } from './overlays-9ba7d229.js';
var setupConfig = function (config) {
    var win = window;
    var Ionic = win.Ionic;
    if (Ionic && Ionic.config && Ionic.config.constructor.name !== 'Object') {
        console.error('ionic config was already initialized');
        return;
    }
    win.Ionic = win.Ionic || {};
    win.Ionic.config = Object.assign(Object.assign({}, win.Ionic.config), config);
    return win.Ionic.config;
};
var getMode = function () {
    var win = window;
    var config = win && win.Ionic && win.Ionic.config;
    if (config) {
        if (config.mode) {
            return config.mode;
        }
        else {
            return config.get('mode');
        }
    }
    return 'md';
};
export { getMode, setupConfig };
