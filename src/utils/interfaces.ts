export interface AnchorInterface {
  href: string | undefined;
  target: string | undefined;
  rel: string | undefined;
  download: string | undefined;
}

export interface ButtonInterface {
  type: 'submit' | 'reset' | 'button';
  disabled: boolean;
}

export type CssClassMap = { [className: string]: boolean };
export type ComponentRef = Function | HTMLElement | string | null;
export type ComponentProps<T = null> = { [key: string]: any };
export type Mode = "ios";


//Todo: Achamos que não há necessidade dessa implementação, conforme cenario foi relatado em Notes.md
export interface FrameworkDelegate {
  attachViewToDom(container: any, component: any, propsOrDataObj?: any, cssClasses?: string[]): Promise<HTMLElement>;
  removeViewFromDom(container: any, component: any): Promise<void>;
}

