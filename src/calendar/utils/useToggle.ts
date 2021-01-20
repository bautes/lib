import { useState } from "react";

const useToggle = (initial: boolean = false) => {
  const [value, setValue] = useState<boolean>(initial);
  const toggleFn = () => setValue(!value);
  return [value, toggleFn];
};

export default useToggle;
