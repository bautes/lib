import { useState } from "react";

export const useRange = (
  min: number,
  max: number,
  onOutrange: (v: number) => void
) => {
  const [nmbr, setNmbr] = useState<number>(Math.abs(min));
  const exposeSetFn = (v: number) => {
    const newVal = nmbr + v;
    if (newVal < min) return onOutrange(-1);
    if (newVal > max) return onOutrange(1);
    setNmbr(newVal);
  };

  return { value: nmbr, setValue: exposeSetFn };
};
