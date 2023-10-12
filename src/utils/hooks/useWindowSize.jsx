import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [width, setWidth] = useState(0);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);
  return width;
};

export default useWindowSize;
