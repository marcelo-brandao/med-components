import { r as registerInstance, h, H as Host } from './index-44bf8136.js';
import { b as getIonMode } from './ionic-global-2b52b731.js';
import { c as createColorClasses } from './theme-206ba98b.js';

const textCss = ":host(.ion-color){color:var(--ion-color-base)}";

const Text = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const mode = getIonMode(this);
        return (h(Host, { class: Object.assign(Object.assign({}, createColorClasses(this.color)), { [mode]: true }) }, h("slot", null)));
    }
};
Text.style = textCss;

export { Text as ion_text };
