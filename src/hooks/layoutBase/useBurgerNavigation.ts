import { useState, useEffect } from "react";
import { useWindowDimension } from "hooks/domBase/index";

interface UseBurgerNavigationReturnT {
  activeBurgerNav: boolean;
  setActiveBurgerNav: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function useBurgerNavigation(): UseBurgerNavigationReturnT {
  const { width } = useWindowDimension();

  const [activeBurgerNav, setActiveBurgerNav] = useState(false);

  /////////////////////////////////////////////////////////////////////////
  // 1.0) Control BurgerMenu Based On Window Width And Active Dropdown //
  ///////////////////////////////////////////////////////////////////////

  useEffect(() => {
    if (width > 1280) setActiveBurgerNav(false);
  }, [width, activeBurgerNav]);

  return {
    activeBurgerNav,
    setActiveBurgerNav,
  };
}
