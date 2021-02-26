import { r as registerInstance, h, H as Host } from './index-44bf8136.js';
import { b as getIonMode } from './ionic-global-2b52b731.js';
import { c as createColorClasses } from './theme-206ba98b.js';
var textCss = ":host(.ion-color){color:var(--ion-color-base)}";
var Text = /** @class */ (function () {
    function Text(hostRef) {
        registerInstance(this, hostRef);
    }
    Text.prototype.render = function () {
        var _a;
        var mode = getIonMode(this);
        return (h(Host, { class: Object.assign(Object.assign({}, createColorClasses(this.color)), (_a = {}, _a[mode] = true, _a)) }, h("slot", null)));
    };
    return Text;
}());
Text.style = textCss;
export { Text as ion_text };
