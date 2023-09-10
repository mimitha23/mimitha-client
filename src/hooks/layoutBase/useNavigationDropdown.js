/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { navActions } from "store/reducers/navReducer";
import { useWindowDimention } from "hooks/domBase/index";
import { MAIN_NAV_DROPDOWN_ROUTES } from "config/consts";

export default function useNavigationDropdown({ activeBurgerNav }) {
  const dispatch = useDispatch();

  const { width } = useWindowDimention();
  const [activeDropDown, setActiveDropDown] = useState("");

  ///////////////////////////////////////////////
  // 1.0) Control Desktop Menu On Mouse Over //
  /////////////////////////////////////////////
  let timeoutId = undefined;
  let lastMainNavRouteSnapshot = undefined;

  function clearDropDownState() {
    timeoutId && clearTimeout(timeoutId);
    activeDropDown && setActiveDropDown("");
    dispatch(navActions.resetNavDropdown());
    lastMainNavRouteSnapshot = undefined;
  }

  const handleNavDropdownOnMouseOver = (e) => {
    if (!e.target || e.target.closest(".nav-dropdown--backdrop"))
      return clearDropDownState();

    if (e.target.closest(".categories-nav__list-item"))
      lastMainNavRouteSnapshot = e.target.closest(".categories-nav__list-item")
        .dataset?.route;

    if (
      !lastMainNavRouteSnapshot ||
      !MAIN_NAV_DROPDOWN_ROUTES.includes(lastMainNavRouteSnapshot)
    )
      return clearDropDownState();

    timeoutId = setTimeout(() => {
      if (
        lastMainNavRouteSnapshot &&
        lastMainNavRouteSnapshot !== activeDropDown
      ) {
        setActiveDropDown(lastMainNavRouteSnapshot);
      }
    }, 350);
  };

  const handleNavDropdownOnMouseLeave = (e) => clearDropDownState();

  //////////////////////////////////////////
  // 2.0 Control Nav Dropdown On Mobile //
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

  ///////////////////////////
  // 3.0 Fetch Navigation //
  /////////////////////////
  // useEffect(() => {
  //   if (!activeDropDown) return;
  //   dispatch(navActions.getNav(activeDropDown));
  // }, [activeDropDown]);

  return {
    width,
    handleNavDropdownOnMouseOver,
    handleNavDropdownOnMouseLeave,
    handleNavDropdownOnClick,
    activeDropDown,
  };
}
