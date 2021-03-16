import { Component, Host, Prop, h } from '@stencil/core';
import { getIonMode } from '../../global/ionic-global';
import { createColorClasses } from '../../utils/theme';
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
export class CardSubtitle {
  render() {
    const mode = getIonMode(this);
    return (h(Host, { role: "heading", "aria-level": "3", class: createColorClasses(this.color, {
        'ion-inherit-color': true,
        [mode]: true
      }) },
      h("slot", null)));
  }
  static get is() { return "ion-card-subtitle"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "ios": ["card-subtitle.ios.scss"],
    "md": ["card-subtitle.md.scss"]
  }; }
  static get styleUrls() { return {
    "ios": ["card-subtitle.ios.css"],
    "md": ["card-subtitle.md.css"]
  }; }
  static get properties() { return {
    "color": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Color",
        "resolved": "string | undefined",
        "references": {
          "Color": {
            "location": "import",
            "path": "../../interface"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The color to use from your application's color palette.\r\nDefault options are: `\"primary\"`, `\"secondary\"`, `\"tertiary\"`, `\"success\"`, `\"warning\"`, `\"danger\"`, `\"light\"`, `\"medium\"`, and `\"dark\"`.\r\nFor more information on colors, see [theming](/docs/theming/basics)."
      },
      "attribute": "color",
      "reflect": false
    }
  }; }
}
