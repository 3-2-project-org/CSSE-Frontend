import { useEffect, useState } from "react";
import { IconSize } from "../common/IconTypes";

const useIconSize = () => {
  const [screenSize, setScreenSize] = useState(0);
  useEffect(() => {
    setScreenSize(window.innerWidth);
    window.addEventListener("resize", () => setScreenSize(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () =>
        setScreenSize(window.innerWidth)
      );
    };
  }, []);

  let size;

  if (screenSize < 376) {
    size = IconSize.SMALL;
  } else if (screenSize >= 376 && screenSize < 3840) {
    size = IconSize.MEDIUM;
  } else {
    size = IconSize.LARGE;
  }
  return size;
};

export default useIconSize;
