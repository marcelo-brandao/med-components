import { r as registerInstance, h, H as Host } from './index-3ccd7557.js';

const medBalbinoCss = ":host{display:block}";

const MedBalbino = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("h1", null, "BALBINO"), h("slot", null)));
  }
};
MedBalbino.style = medBalbinoCss;

export { MedBalbino as med_balbino };
