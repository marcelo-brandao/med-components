declare type RefresherAnimationType = 'scale' | 'translate';
export declare const getRefresherAnimationType: (contentEl: HTMLIonContentElement) => RefresherAnimationType;
export declare const createPullingAnimation: (type: RefresherAnimationType, pullingSpinner: HTMLElement) => import("../../interface").Animation;
export declare const createSnapBackAnimation: (pullingRefresherIcon: HTMLElement) => import("../../interface").Animation;
export declare const setSpinnerOpacity: (spinner: HTMLElement, opacity: number) => void;
export declare const handleScrollWhilePulling: (spinner: HTMLElement, ticks: NodeListOf<SVGElement>, opacity: number, currentTickToShow: number) => void;
export declare const handleScrollWhileRefreshing: (spinner: HTMLElement, lastVelocityY: number) => void;
export declare const translateElement: (el?: HTMLElement | undefined, value?: string | undefined) => Promise<unknown>;
export declare const shouldUseNativeRefresher: (referenceEl: HTMLIonRefresherElement, mode: string) => Promise<boolean>;
export declare const transitionEndAsync: (el: HTMLElement | null, expectedDuration?: number) => Promise<unknown>;
export {};
