const FOCUSED = 'med-focused';
const FOCUSABLE = 'med-focusable';
const FOCUS_KEYS = ['Tab', 'Space', 'Escape', 'Shift', 'Enter', 'ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft', ' '];

export const onFocusable = () => {
  let currentFocus: Element[] = [];
  let keyboardMode = true;

  const setFocus = (elements: Element[]) => {
    currentFocus.forEach(element => element.classList.remove(FOCUSED));

    elements.forEach(el => el.classList.add(FOCUSED));

    currentFocus = elements;
  };

  const down = () => {
    keyboardMode = false;
    setFocus([]);
  };

  document.addEventListener('keydown', (event: KeyboardEvent) => {
    keyboardMode = FOCUS_KEYS.includes(event.key);

    if (!keyboardMode) {
      setFocus([]);
    }
  });

  document.addEventListener('focusin', (event: FocusEvent) => {
    if (keyboardMode && event.composedPath) {
      const toFocus = event.composedPath().filter((element: HTMLElement) => {
        if (element.classList) {
          return element.classList.contains(FOCUSABLE);
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

  document.addEventListener('touchstart', down);

  document.addEventListener('mousedown', down);
};
