import { CONSTANTS } from '../utils/constants';
import { now } from '../utils/helpers';

export const onActivatable = () => {
  let activatableElement: HTMLElement;
  let activeDefer: ReturnType<typeof setTimeout>;
  let lastActivated = 0;
  let lastTouch = -CONSTANTS.MOUSE_WAIT * 10;

  const clearDefers = new WeakMap<HTMLElement, ReturnType<typeof setTimeout>>();

  const getActivatableElement = (event: MouseEvent | TouchEvent): HTMLElement => {
    if (event.composedPath) {
      const path = event.composedPath() as HTMLElement[];

      // remove Window e #document do retorno do composedPath.
      for (let i = 0; i < path.length - 2; i++) {
        const element = path[i];

        if (element.classList && element.classList.contains(CONSTANTS.ACTIVATABLE)) {
          return element;
        }
      }
    } else {
      return (event.target as HTMLElement).closest(`${CONSTANTS.ACTIVATABLE}`);
    }
  };

  const removeActivated = (smooth: boolean): void => {
    const active = activatableElement;
    const time = CONSTANTS.CLEAR_ACTIVATED_DEFERS - Date.now() + lastActivated;

    if (!active) {
      return;
    }

    if (smooth && time > 0) {
      const deferId = setTimeout(() => {
        active.classList.remove(CONSTANTS.ACTIVATED);
        clearDefers.delete(active);
      }, CONSTANTS.CLEAR_ACTIVATED_DEFERS);

      clearDefers.set(active, deferId);
    } else {
      active.classList.remove(CONSTANTS.ACTIVATED);
    }
  };

  const addActivated = (element: HTMLElement): void => {
    lastActivated = Date.now();
    element.classList.add(CONSTANTS.ACTIVATED);
  };

  const setActivatedElement = (element: HTMLElement): void => {
    if (element && element === activatableElement) {
      return;
    }

    clearTimeout(activeDefer);
    activeDefer = undefined;

    // desativa selecionado.
    if (activatableElement) {
      if (clearDefers.has(activatableElement)) {
        throw new Error('Internal error');
      }

      if (!activatableElement.classList.contains(CONSTANTS.ACTIVATED)) {
        addActivated(activatableElement);
      }

      removeActivated(true);
    }

    // ativa selecionado.
    if (element) {
      const deferId = clearDefers.get(element);

      if (deferId) {
        clearTimeout(deferId);
        clearDefers.delete(element);
      }

      element.classList.remove(CONSTANTS.ACTIVATED);

      activeDefer = setTimeout(() => {
        addActivated(element);
        activeDefer = undefined;
      }, CONSTANTS.ADD_ACTIVATED_DEFERS);
    }

    activatableElement = element;
  };

  const pointerDown = (event: MouseEvent | TouchEvent): void => {
    setActivatedElement(getActivatableElement(event));
  };

  const pointerUp = (): void => {
    setActivatedElement(undefined);
  };

  const onTouchStart = (event: TouchEvent): void => {
    lastTouch = now(event);
    pointerDown(event);
  };

  const onTouchEnd = (event: TouchEvent): void => {
    lastTouch = now(event);
    pointerUp();
  };

  const onMouseDown = (event: MouseEvent): void => {
    const time = now(event) - CONSTANTS.MOUSE_WAIT;

    if (lastTouch < time) {
      pointerDown(event);
    }
  };

  const onMouseUp = (event: MouseEvent): void => {
    event.preventDefault();
    const time = now(event) - CONSTANTS.MOUSE_WAIT;

    if (lastTouch < time) {
      pointerUp();
    }
  };

  document.addEventListener('touchstart', onTouchStart, true);
  document.addEventListener('touchcancel', onTouchEnd, true);
  document.addEventListener('touchend', onTouchEnd, true);
  document.addEventListener('mousedown', onMouseDown, true);
  document.addEventListener('mouseup', onMouseUp, true);
};
