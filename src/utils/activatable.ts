const ACTIVATED = 'med-activated';
const ACTIVATABLE = 'med-activatable';

const ADD_ACTIVATED_TIMEOUT = 150;
const CLEAR_ACTIVATED_TIMEOUT = 150;
const MOUSE_WAIT = 2500;

export const now = (event: Event): number => {
  return event.timeStamp || Date.now();
};

export const onActivatable = () => {
  let activatableElement: HTMLElement;
  let activeTimeout: ReturnType<typeof setTimeout>;
  let lastActivated = 0;
  let lastTouch = -MOUSE_WAIT * 10;

  const clearTimeouts = new WeakMap<HTMLElement, ReturnType<typeof setTimeout>>();

  const getActivatableElement = (event: MouseEvent | TouchEvent): HTMLElement => {
    if (event.composedPath) {
      const path = event.composedPath() as HTMLElement[];

      // remove Window e #document do retorno do composedPath.
      for (let i = 0; i < path.length - 2; i += 1) {
        const element = path[i];

        if (element.classList && element.classList.contains(ACTIVATABLE)) {
          return element;
        }
      }
    } else {
      return (event.target as HTMLElement).closest(`${ACTIVATABLE}`);
    }
  };

  const removeActivated = (smooth: boolean): void => {
    const active = activatableElement;
    const time = CLEAR_ACTIVATED_TIMEOUT - Date.now() + lastActivated;

    if (!active) {
      return;
    }

    if (smooth && time > 0) {
      const timeId = setTimeout(() => {
        active.classList.remove(ACTIVATED);
        clearTimeouts.delete(active);
      }, CLEAR_ACTIVATED_TIMEOUT);

      clearTimeouts.set(active, timeId);
    } else {
      active.classList.remove(ACTIVATED);
    }
  };

  const addActivated = (element: HTMLElement): void => {
    lastActivated = Date.now();
    element.classList.add(ACTIVATED);
  };

  const setActivatedElement = (element: HTMLElement): void => {
    if (element && element === activatableElement) {
      return;
    }

    clearTimeout(activeTimeout);
    activeTimeout = undefined;

    // desativa selecionado.
    if (activatableElement) {
      if (clearTimeouts.has(activatableElement)) {
        throw new Error('internal error');
      }

      if (!activatableElement.classList.contains(ACTIVATED)) {
        addActivated(activatableElement);
      }

      removeActivated(true);
    }

    // ativa selecionado.
    if (element) {
      const timeId = clearTimeouts.get(element);

      if (timeId) {
        clearTimeout(timeId);
        clearTimeouts.delete(element);
      }

      element.classList.remove(ACTIVATED);

      activeTimeout = setTimeout(() => {
        addActivated(element);
        activeTimeout = undefined;
      }, ADD_ACTIVATED_TIMEOUT);
    }

    activatableElement = element;
  };

  const down = (event: MouseEvent | TouchEvent): void => {
    setActivatedElement(getActivatableElement(event));
  };

  const up = (): void => {
    setActivatedElement(undefined);
  };

  const onTouchStart = (event: TouchEvent): void => {
    lastTouch = now(event);
    down(event);
  };

  const onTouchEnd = (event: TouchEvent): void => {
    lastTouch = now(event);
    up();
  };

  const onMouseDown = (event: MouseEvent): void => {
    event.preventDefault();
    const time = now(event) - MOUSE_WAIT;

    if (lastTouch < time) {
      down(event);
    }
  };

  const onMouseUp = (event: MouseEvent): void => {
    event.preventDefault();
    const time = now(event) - MOUSE_WAIT;

    if (lastTouch < time) {
      up();
    }
  };

  document.addEventListener('touchstart', onTouchStart, true);
  document.addEventListener('touchcancel', onTouchEnd, true);
  document.addEventListener('touchend', onTouchEnd, true);
  document.addEventListener('mousedown', onMouseDown, true);
  document.addEventListener('mouseup', onMouseUp, true);
};
