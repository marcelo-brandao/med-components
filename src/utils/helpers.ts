export const now = (event: Event): number => {
  return event.timeStamp || Date.now();
};

export const hasShadowDom = (el: HTMLElement) => {
  return !!el.shadowRoot && !!(el as any).attachShadow;
};
