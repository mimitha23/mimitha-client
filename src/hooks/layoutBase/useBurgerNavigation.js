import { useState, useEffect } from "react";
import { useWindowDimension } from "hooks/domBase/index";

export default function useBurgerNavigation() {
  const { width } = useWindowDimension();

  const [activeBurgerNav, setActiveBurgerNav] = useState(null);

  /////////////////////////////////////////////////////////////////////////
  // 1.0) Control BurgerMenu Based On Window Width And Active Dropdown //
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
