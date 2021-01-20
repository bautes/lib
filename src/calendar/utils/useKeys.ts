// @ts-nocheck
import { MutableRefObject, ReactEventHandler, useEffect } from "react";

export const useKeyPress = (
  targetKey: string,
  handlerFn: (ev: ReactEventHandler<KeyboardEvent>) => void,
  ref?: MutableRefObject
) => {
  const target = ref?.current || window;
  useEffect(() => {
    const downHandler = ({ key, ...ev }: ReactEventHandler<KeyboardEvent>) => {
      if (key === targetKey) {
        handlerFn(ev);
      }
    };
    target.addEventListener("keydown", downHandler);
    return () => {
      target.removeEventListener("keydown", downHandler);
    };
  }, [targetKey, handlerFn, target]); // Empty array ensures that effect is only run on mount and unmount
};

export const useKeyUp = (handlerFn) => useKeyPress("ArrowUp", handlerFn);
export const useKeyDown = (handlerFn) => useKeyPress("ArrowDown", handlerFn);
export const useKeyLeft = (handlerFn) => useKeyPress("ArrowLeft", handlerFn);
export const useKeyRigth = (handlerFn) => useKeyPress("ArrowRight", handlerFn);
export const usePageUp = (handlerFn) => useKeyPress("PageUp", handlerFn);
export const usePageDown = (handlerFn) => useKeyPress("PageDown", handlerFn);
export const useEnter = (handlerFn, target?: MutableRefObject) => useKeyPress("Enter", handlerFn, target);
