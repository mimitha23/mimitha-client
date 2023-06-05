import { useState, useEffect } from "react";
import { useWindowDimention } from "hooks/domBase/index";

export default function useNavigationDropdown({ activeBurgerNav }) {
  const { width } = useWindowDimention();
  const [activeDropDown, setActiveDropDown] = useState("");

  ///////////////////////////////////////////////
  // 1.0) Controll Desktop Menu On Mouse Over //
  /////////////////////////////////////////////
  let timeoutId = undefined;
  let lastMainNavRouteSnapshot = undefined;

  function clearDropDownState() {
    timeoutId && clearTimeout(timeoutId);
    activeDropDown && setActiveDropDown("");
    lastMainNavRouteSnapshot = undefined;
  }

  const handleNavDropdownOnMouseOver = (e) => {
    if (!e.target || e.target.closest(".nav-dropdown--backdrop"))
      return clearDropDownState();

    if (e.target.closest(".categories-nav__list-item"))
      lastMainNavRouteSnapshot = e.target.closest(".categories-nav__list-item")
        .dataset?.route;

    if (!lastMainNavRouteSnapshot) return clearDropDownState();

    timeoutId = setTimeout(() => {
      lastMainNavRouteSnapshot !== activeDropDown &&
        setActiveDropDown(lastMainNavRouteSnapshot);
    }, 300);
  };

  const handleNavDropdownOnMouseLeave = (e) => clearDropDownState();

  //////////////////////////////////////////
  // 2.0 Controll Nav Dropdown On Mobile //
  ////////////////////////////////////////

  const handleNavDropdownOnClick = (e, route) => {
    setActiveDropDown((prev) => (prev === route ? "" : route));

    const listEl = document.querySelector(".categories-nav__list");
    listEl.scrollTop = 0;
  };

  useEffect(() => {
    if (width < 1280 && !activeBurgerNav && activeDropDown)
      setActiveDropDown("");
  }, [width, activeDropDown, activeBurgerNav]);

  return {
    width,
    handleNavDropdownOnMouseOver,
    handleNavDropdownOnMouseLeave,
    handleNavDropdownOnClick,
    activeDropDown,
  };
}
