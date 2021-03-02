import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { AnchorInterface, ButtonInterface } from '../../utils/element-interface';
export declare class MedButton implements ComponentInterface, AnchorInterface, ButtonInterface {
  el: HTMLElement;
  href: string | undefined;
  type: 'submit' | 'reset' | 'button';
  disabled: boolean;
  target: string | undefined;
  download: string | undefined;
  rel: string | undefined;
  medFocus: EventEmitter<void>;
  medBlur: EventEmitter<void>;
  private onFocus;
  private onBlur;
  private onClick;
  render(): any;
}
