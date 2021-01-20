import { useState, useEffect } from "react";

const useOnResize = () => {
  const getDimensions = () => {
    if (typeof window !== "undefined") {
      return {
        width: window.innerWidth || 0,
        height: window.innerHeight || 0,
      };
    }
    return {
      width: 0,
      height: 0,
    };
  };
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  }>(getDimensions());
  useEffect(() => {
    function handleResize() {
      setDimensions(getDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return dimensions;
};

export const useSmallViewPort = ({ sm }: { sm: number } = { sm: 768 }) => {
  const { width } = useOnResize();
  return width <= sm;
};

export default useOnResize;
