'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2a75be79.js');

const medBalbinoCss = ":host{display:block}";

const MedBalbino = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("h1", null, "BALBINO"), index.h("slot", null)));
  }
};
MedBalbino.style = medBalbinoCss;

exports.med_balbino = MedBalbino;
