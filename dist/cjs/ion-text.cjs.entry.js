'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7507eec5.js');
const ionicGlobal = require('./ionic-global-90520103.js');
const theme = require('./theme-91d9538d.js');

const textCss = ":host(.ion-color){color:var(--ion-color-base)}";

const Text = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        const mode = ionicGlobal.getIonMode(this);
        return (index.h(index.Host, { class: Object.assign(Object.assign({}, theme.createColorClasses(this.color)), { [mode]: true }) }, index.h("slot", null)));
    }
};
Text.style = textCss;

exports.ion_text = Text;
