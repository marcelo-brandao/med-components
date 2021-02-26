import './index-38e63555.js';
export { g as getPlatforms, i as initialize, a as isPlatform } from './ionic-global-e09279b2.js';
import './utils-29df60a1.js';
export { c as componentOnReady } from './helpers-55c15871.js';
export { c as createAnimation } from './animation-d600bc90.js';
export { a as LIFECYCLE_DID_ENTER, c as LIFECYCLE_DID_LEAVE, L as LIFECYCLE_WILL_ENTER, b as LIFECYCLE_WILL_LEAVE, d as LIFECYCLE_WILL_UNLOAD } from './index-1d37641e.js';
export { iosTransitionAnimation } from './ios.transition-f2923e04.js';
export { mdTransitionAnimation } from './md.transition-88ba2b99.js';
export { g as getTimeGivenProgression } from './cubic-bezier-c3ea3c34.js';
export { createGesture } from './index-576440e2.js';
export { I as IonicSafeString } from './index-504c5ae5.js';
import './hardware-back-button-3fda9f12.js';
export { m as menuController } from './index-a6d377ce.js';
export { b as actionSheetController, a as alertController, l as loadingController, m as modalController, p as pickerController, c as popoverController, t as toastController } from './overlays-1f75f30c.js';

const setupConfig = (config) => {
  const win = window;
  const Ionic = win.Ionic;
  if (Ionic && Ionic.config && Ionic.config.constructor.name !== 'Object') {
    console.error('ionic config was already initialized');
    return;
  }
  win.Ionic = win.Ionic || {};
  win.Ionic.config = Object.assign(Object.assign({}, win.Ionic.config), config);
  return win.Ionic.config;
};
const getMode = () => {
  const win = window;
  const config = win && win.Ionic && win.Ionic.config;
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
