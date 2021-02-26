import { r as registerInstance, l as h, m as Host } from './index-38e63555.js';
import { b as getIonMode } from './ionic-global-e09279b2.js';
import { c as createColorClasses } from './theme-0269729a.js';

const textCss = ":host(.ion-color){color:var(--ion-color-base)}";

const Text = class {
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
Text.style = textCss;

export { Text as ion_text };
