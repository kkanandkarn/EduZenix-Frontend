import { useEffect, useState } from "react";

const getDeviceType = (width) => {
  if (width < 768) return "mobile";
  if (width <= 1024) return "tablet";
  return "desktop";
};
//1250 X 850 mac air
const useScreenType = () => {
  const [screenType, setScreenType] = useState(
    getDeviceType(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenType(getDeviceType(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenType;
};

export default useScreenType;
