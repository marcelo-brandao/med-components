import { Build, Component, Element, Host, Method, Prop, Watch, h } from '@stencil/core';
import { attachComponent } from '../../utils/framework-delegate';
export class Tab {
    constructor() {
        this.loaded = false;
        /** @internal */
        this.active = false;
    }
    async componentWillLoad() {
        if (Build.isDev) {
            if (this.component !== undefined && this.el.childElementCount > 0) {
                console.error('You can not use a lazy-loaded component in a tab and inlined content at the same time.' +
                    `- Remove the component attribute in: <ion-tab component="${this.component}">` +
                    ` or` +
                    `- Remove the embedded content inside the ion-tab: <ion-tab></ion-tab>`);
            }
        }
        if (this.active) {
            await this.setActive();
        }
    }
    /** Set the active component for the tab */
    async setActive() {
        await this.prepareLazyLoaded();
        this.active = true;
    }
    changeActive(isActive) {
        if (isActive) {
            this.prepareLazyLoaded();
        }
    }
    prepareLazyLoaded() {
        if (!this.loaded && this.component != null) {
            this.loaded = true;
            try {
                return attachComponent(this.delegate, this.el, this.component, ['ion-page']);
            }
            catch (e) {
                console.error(e);
            }
        }
        return Promise.resolve(undefined);
    }
    render() {
        const { tab, active, component } = this;
        return (h(Host, { role: "tabpanel", "aria-hidden": !active ? 'true' : null, "aria-labelledby": `tab-button-${tab}`, class: {
                'ion-page': component === undefined,
                'tab-hidden': !active
            } },
            h("slot", null)));
    }
    static get is() { return "ion-tab"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["tab.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["tab.css"]
    }; }
    static get properties() { return {
        "active": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [{
                        "text": undefined,
                        "name": "internal"
                    }],
                "text": ""
            },
            "attribute": "active",
            "reflect": false,
            "defaultValue": "false"
        },
        "delegate": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "FrameworkDelegate",
                "resolved": "FrameworkDelegate | undefined",
                "references": {
                    "FrameworkDelegate": {
                        "location": "import",
                        "path": "../../interface"
                    }
                }
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [{
                        "text": undefined,
                        "name": "internal"
                    }],
                "text": ""
            }
        },
        "tab": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": true,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "A tab id must be provided for each `ion-tab`. It's used internally to reference\r\nthe selected tab or by the router to switch between them."
            },
            "attribute": "tab",
            "reflect": false
        },
        "component": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "ComponentRef",
                "resolved": "Function | HTMLElement | null | string | undefined",
                "references": {
                    "ComponentRef": {
                        "location": "import",
                        "path": "../../interface"
                    }
                }
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "The component to display inside of the tab."
            },
            "attribute": "component",
            "reflect": false
        }
    }; }
    static get methods() { return {
        "setActive": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "Set the active component for the tab",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "active",
            "methodName": "changeActive"
        }]; }
}
