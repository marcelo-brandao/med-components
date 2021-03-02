import { r as registerInstance, h, H as Host } from './index-3ccd7557.js';

const iosMedButtonCss = ":host h1{font-size:25px;color:#fff}";

const mdMedButtonCss = ":host h1{font-size:25px;color:#fff}";

const Button = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("h1", null, "MED-BUTTON")));
  }
};
Button.style = {
  ios: iosMedButtonCss,
  md: mdMedButtonCss
};

export { Button as med_button };
