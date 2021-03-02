import { Component, Host, h } from '@stencil/core';
export class Button {
  render() {
    return (h(Host, null,
      h("h1", null, "MED-BUTTON")));
  }
  static get is() { return "med-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "ios": ["./med-button.scss"],
    "md": ["./med-button.scss"]
  }; }
  static get styleUrls() { return {
    "ios": ["med-button.css"],
    "md": ["med-button.css"]
  }; }
}
