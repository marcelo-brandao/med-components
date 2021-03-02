import { Component, h, Host } from "@stencil/core";
export class MedBalbino {
  render() {
    return (h(Host, null,
      h("h1", null, "BALBINO"),
      h("slot", null)));
  }
  static get is() { return "med-balbino"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-balbino.css"]
  }; }
  static get styleUrls() { return {
    "$": ["med-balbino.css"]
  }; }
}
