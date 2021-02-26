import { Component, Element, Host, Method, Prop, h } from '@stencil/core';
import { getIonMode } from '../../global/ionic-global';
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
export class List {
    constructor() {
        /**
         * If `true`, the list will have margin around it and rounded corners.
         */
        this.inset = false;
    }
    /**
     * If `ion-item-sliding` are used inside the list, this method closes
     * any open sliding item.
     *
     * Returns `true` if an actual `ion-item-sliding` is closed.
     */
    async closeSlidingItems() {
        const item = this.el.querySelector('ion-item-sliding');
        if (item && item.closeOpened) {
            return item.closeOpened();
        }
        return false;
    }
    render() {
        const mode = getIonMode(this);
        const { lines, inset } = this;
        return (h(Host, { class: {
                [mode]: true,
                // Used internally for styling
                [`list-${mode}`]: true,
                'list-inset': inset,
                [`list-lines-${lines}`]: lines !== undefined,
                [`list-${mode}-lines-${lines}`]: lines !== undefined
            } }));
    }
    static get is() { return "ion-list"; }
    static get originalStyleUrls() { return {
        "ios": ["list.ios.scss"],
        "md": ["list.md.scss"]
    }; }
    static get styleUrls() { return {
        "ios": ["list.ios.css"],
        "md": ["list.md.css"]
    }; }
    static get properties() { return {
        "lines": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "'full' | 'inset' | 'none'",
                "resolved": "\"full\" | \"inset\" | \"none\" | undefined",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "How the bottom border should be displayed on all items."
            },
            "attribute": "lines",
            "reflect": false
        },
        "inset": {
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
                "text": "If `true`, the list will have margin around it and rounded corners."
            },
            "attribute": "inset",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get methods() { return {
        "closeSlidingItems": {
            "complexType": {
                "signature": "() => Promise<boolean>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<boolean>"
            },
            "docs": {
                "text": "If `ion-item-sliding` are used inside the list, this method closes\r\nany open sliding item.\r\n\r\nReturns `true` if an actual `ion-item-sliding` is closed.",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "el"; }
}
