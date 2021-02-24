export const now = (event: Event): number => {
  return event.timeStamp || Date.now();
};

export const hasShadowDom = (el: HTMLElement) => {
  return !!el.shadowRoot && !!(el as any).attachShadow;
};

export const componentOnReady = (el: any, callback: any) => {
  if (el.componentOnReady) {
    el.componentOnReady().then(callback);
  } else {
    callback();
  }
}
