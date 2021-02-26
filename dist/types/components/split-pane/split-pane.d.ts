import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export declare class SplitPane implements ComponentInterface {
    private rmL;
    el: HTMLElement;
    visible: boolean;
    /**
     * The content `id` of the split-pane's main content.
     */
    contentId?: string;
    /**
     * If `true`, the split pane will be hidden.
     */
    disabled: boolean;
    /**
     * When the split-pane should be shown.
     * Can be a CSS media query expression, or a shortcut expression.
     * Can also be a boolean expression.
     */
    when: string | boolean;
    /**
     * Expression to be called when the split-pane visibility has changed
     */
    ionSplitPaneVisible: EventEmitter<{
        visible: boolean;
    }>;
    visibleChanged(visible: boolean): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected updateState(): void;
    private isPane;
    private styleChildren;
    render(): any;
}
