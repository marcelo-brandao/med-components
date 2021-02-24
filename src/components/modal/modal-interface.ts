import { ComponentProps, ComponentRef } from '../../utils/interfaces';

export interface ModalOptions<T extends ComponentRef = ComponentRef> {
  component: T;
  componentProps?: ComponentProps<T>;
  presentingElement?: HTMLElement;
  cssClass?: string | string[];
}
