import { useState, useEffect } from "react";
import { useWindowDimention } from "hooks/domBase/index";

export default function useBurgerNavigation() {
  const { width } = useWindowDimention();

  const [activeBurgerNav, setActiveBurgerNav] = useState(null);

  /////////////////////////////////////////////////////////////////////////
  // 1.0) Controll BurgerMenu Based On Window Width And Active Dropdown //
  ///////////////////////////////////////////////////////////////////////

  useEffect(() => {
    if (width > 1280 && typeof activeBurgerNav === "boolean")
      setActiveBurgerNav(null);
  }, [width, activeBurgerNav]);

  return {
    setActiveBurgerNav,
    activeBurgerNav,
  };
}
