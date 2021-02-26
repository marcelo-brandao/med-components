import { AnimationBuilder, MenuI } from '../../interface';
export declare const menuController: {
  registerAnimation: (name: string, animation: AnimationBuilder) => void;
  get: (menu?: string | null | undefined) => Promise<HTMLIonMenuElement | undefined>;
  getMenus: () => Promise<HTMLIonMenuElement[]>;
  getOpen: () => Promise<HTMLIonMenuElement | undefined>;
  isEnabled: (menu?: string | null | undefined) => Promise<boolean>;
  swipeGesture: (shouldEnable: boolean, menu?: string | null | undefined) => Promise<HTMLIonMenuElement | undefined>;
  isAnimating: () => Promise<boolean>;
  isOpen: (menu?: string | null | undefined) => Promise<boolean>;
  enable: (shouldEnable: boolean, menu?: string | null | undefined) => Promise<HTMLIonMenuElement | undefined>;
  toggle: (menu?: string | null | undefined) => Promise<boolean>;
  close: (menu?: string | null | undefined) => Promise<boolean>;
  open: (menu?: string | null | undefined) => Promise<boolean>;
  _getOpenSync: () => HTMLIonMenuElement | undefined;
  _createAnimation: (type: string, menuCmp: MenuI) => any;
  _register: (menu: MenuI) => void;
  _unregister: (menu: MenuI) => void;
  _setOpen: (menu: MenuI, shouldOpen: boolean, animated: boolean) => Promise<boolean>;
  _setActiveMenu: (menu: MenuI) => void;
};
