import { r as registerInstance, l as h, m as Host } from './index-38e63555.js';
import { b as getIonMode } from './ionic-global-e09279b2.js';
import { c as createColorClasses } from './theme-0269729a.js';

const noteIosCss = ":host{color:var(--color);font-family:var(--ion-font-family, inherit);-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-350, #a6a6a6)}";

const noteMdCss = ":host{color:var(--color);font-family:var(--ion-font-family, inherit);-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-600, #666666);font-size:14px}";

const Note = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const mode = getIonMode(this);
    return (h(Host, { class: createColorClasses(this.color, {
        [mode]: true,
      }) }, h("slot", null)));
  }
};
Note.style = {
  ios: noteIosCss,
  md: noteMdCss
};

export { Note as ion_note };
