import { Component, Host, h, Element, Prop, Event } from '@stencil/core';
import { hasShadowDom } from '../../utils/helpers';
export class MedButton {
  constructor() {
    this.type = 'button';
    this.disabled = false;
  }
  onFocus() {
    this.medFocus.emit();
  }
  onBlur() {
    this.medBlur.emit();
  }
  onClick(event) {
    if (hasShadowDom(this.el)) {
      const form = this.el.closest('form');
      if (form) {
        event.preventDefault();
        const fakeButton = document.createElement('button');
        fakeButton.type = this.type;
        fakeButton.style.display = 'none';
        form.appendChild(fakeButton);
        fakeButton.click();
        fakeButton.remove();
      }
    }
  }
  render() {
    const { href, type, disabled, target, download, rel } = this;
    const TagType = href ? 'a' : 'button';
    const attrs = TagType === 'button'
      ? {
        type,
        disabled,
      }
      : {
        href,
        target,
        download,
        rel,
      };
    return (h(Host, { "from-stencil": true, class: {
        'med-focusable': true,
        'med-activatable': true,
        'med-disabled': disabled,
      }, "aria-disabled": disabled ? 'true' : null, onClick: this.onClick.bind(this) },
      h(TagType, Object.assign({ class: "native" }, attrs, { tabindex: TagType === 'a' && disabled ? '-1' : null, "aria-disabled": TagType === 'a' && disabled ? 'true' : null, role: TagType === 'a' ? 'button' : null, part: "native", onFocus: this.onFocus, onBlur: this.onBlur }),
        h("span", { class: "inner", part: "inner" },
          h("slot", null)))));
  }
  static get is() { return "med-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["med-button.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["med-button.css"]
  }; }
  static get properties() { return {
    "href": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | undefined",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "href",
      "reflect": false
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'submit' | 'reset' | 'button'",
        "resolved": "\"button\" | \"reset\" | \"submit\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "'button'"
    },
    "disabled": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
    },
    "target": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | undefined",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "target",
      "reflect": false
    },
    "download": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | undefined",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "download",
      "reflect": false
    },
    "rel": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | undefined",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "rel",
      "reflect": false
    }
  }; }
  static get events() { return [{
      "method": "medFocus",
      "name": "medFocus",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }, {
      "method": "medBlur",
      "name": "medBlur",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }]; }
  static get elementRef() { return "el"; }
}
