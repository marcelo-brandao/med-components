import { Component, Element, Host, Prop, h } from '@stencil/core';
import { navLink } from './nav-link-utils';
export class NavLink {
    constructor() {
        /**
         * The transition direction when navigating to another page.
         */
        this.routerDirection = 'forward';
        this.onClick = () => {
            return navLink(this.el, this.routerDirection, this.component, this.componentProps, this.routerAnimation);
        };
    }
    render() {
        return (h(Host, { onClick: this.onClick }));
    }
    static get is() { return "ion-nav-link"; }
    static get properties() { return {
        "component": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "NavComponent",
                "resolved": "Function | HTMLElement | ViewController | null | string | undefined",
                "references": {
                    "NavComponent": {
                        "location": "import",
                        "path": "../../interface"
                    }
                }
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Component to navigate to. Only used if the `routerDirection` is `\"forward\"` or `\"root\"`."
            },
            "attribute": "component",
            "reflect": false
        },
        "componentProps": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "ComponentProps",
                "resolved": "undefined | { [key: string]: any; }",
                "references": {
                    "ComponentProps": {
                        "location": "import",
                        "path": "../../interface"
                    }
                }
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "Data you want to pass to the component as props. Only used if the `\"routerDirection\"` is `\"forward\"` or `\"root\"`."
            }
        },
        "routerDirection": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "RouterDirection",
                "resolved": "\"back\" | \"forward\" | \"root\"",
                "references": {
                    "RouterDirection": {
                        "location": "import",
                        "path": "../../interface"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "The transition direction when navigating to another page."
            },
            "attribute": "router-direction",
            "reflect": false,
            "defaultValue": "'forward'"
        },
        "routerAnimation": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "AnimationBuilder",
                "resolved": "((baseEl: any, opts?: any) => Animation) | undefined",
                "references": {
                    "AnimationBuilder": {
                        "location": "import",
                        "path": "../../interface"
                    }
                }
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": "The transition animation when navigating to another page."
            }
        }
    }; }
    static get elementRef() { return "el"; }
}
