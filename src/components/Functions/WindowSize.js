import { useState, useEffect } from "react";

export const WindowSize = () => {
  const getSize = () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };

  const [windowSize, setwindowSize] = useState(getSize);

  useEffect(() => {
    const handleResize = () => {
      setwindowSize(getSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};
