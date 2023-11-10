import { useEffect, useState } from "react";

function getWindowDimension(): { width: number; height: number } {
  const { innerHeight, innerWidth } = window;
  return { width: innerWidth, height: innerHeight };
}

function useWindowDimension() {
  const [windowDimension, setWindowDimension] = useState(getWindowDimension());

  const handleResize = () => setWindowDimension(getWindowDimension());

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { width: windowDimension.width, height: windowDimension.height };
}

export default useWindowDimension;
