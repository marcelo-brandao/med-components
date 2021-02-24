import { CONSTANTS } from '../utils/constants';

export const onFocusable = () => {
  let currentFocus: Element[] = [];
  let keyboardMode = true;

  const setFocus = (elements: Element[]) => {
    currentFocus.forEach(element => element.classList.remove(CONSTANTS.FOCUSED));

    elements.forEach(el => el.classList.add(CONSTANTS.FOCUSED));

    currentFocus = elements;
  };

  const pointerDown = () => {
    keyboardMode = false;
    setFocus([]);
  };

  document.addEventListener('keydown', (event: KeyboardEvent) => {
    keyboardMode = CONSTANTS.FOCUS_KEYS.includes(event.key);

    if (!keyboardMode) {
      setFocus([]);
    }
  });

  document.addEventListener('focusin', (event: FocusEvent) => {
    if (keyboardMode && event.composedPath) {
      const toFocus = event.composedPath().filter((element: HTMLElement) => {
        if (element.classList) {
          return element.classList.contains(CONSTANTS.FOCUSABLE);
        }
        return false;
      }) as Element[];

      setFocus(toFocus);
    }
  });

  document.addEventListener('focusout', () => {
    if (document.activeElement === document.body) {
      setFocus([]);
    }
  });

  document.addEventListener('touchstart', pointerDown);
  document.addEventListener('mousedown', pointerDown);
};
