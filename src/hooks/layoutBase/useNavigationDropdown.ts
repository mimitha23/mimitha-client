/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useAppDispatch } from "store/hooks";

import { navActions } from "store/reducers/nav.reducer";
import { useWindowDimension } from "hooks/domBase/index";
import { MAIN_NAV_DROPDOWN_ROUTES } from "config/consts";

export default function useNavigationDropdown({
  activeBurgerNav,
}: {
  activeBurgerNav: boolean;
}) {
  const dispatch = useAppDispatch();

  const { width } = useWindowDimension();
  const [activeDropDown, setActiveDropDown] = useState("");

  ///////////////////////////////////////////////
  // 1.0) Control Desktop Menu On Mouse Over //
  /////////////////////////////////////////////
  let timeoutId: ReturnType<typeof setTimeout> | undefined = undefined;
  let lastMainNavRouteSnapshot: string | undefined = undefined;

  function clearDropDownState() {
    timeoutId && clearTimeout(timeoutId);
    activeDropDown && setActiveDropDown("");
    dispatch(navActions.resetNavDropdown());
    lastMainNavRouteSnapshot = undefined;
  }

  const handleNavDropdownOnMouseOver = (e: React.MouseEvent) => {
    const eventTarget = e.target as HTMLElement;

    if (!eventTarget || eventTarget.closest(".nav-dropdown--backdrop"))
      return clearDropDownState();

    if (eventTarget.closest(".categories-nav__list-item"))
      lastMainNavRouteSnapshot = (
        eventTarget.closest(".categories-nav__list-item") as HTMLElement
      ).dataset?.route;

    if (
      !lastMainNavRouteSnapshot ||
      (lastMainNavRouteSnapshot &&
        !MAIN_NAV_DROPDOWN_ROUTES.includes(
          lastMainNavRouteSnapshot as (typeof MAIN_NAV_DROPDOWN_ROUTES)[number]
        ))
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

  const handleNavDropdownOnMouseLeave = (e: React.MouseEvent) =>
    clearDropDownState();

  //////////////////////////////////////////
  // 2.0 Control Nav Dropdown On Mobile //
  ////////////////////////////////////////
  const handleNavDropdownOnClick = (e: React.MouseEvent, route: string) => {
    setActiveDropDown((prev) => (prev === route ? "" : route));

    const listEl = document.querySelector(
      ".categories-nav__list"
    ) as HTMLElement;

    listEl.scrollTop = 0;
  };

  useEffect(() => {
    if (width < 1280 && !activeBurgerNav && activeDropDown)
      setActiveDropDown("");
  }, [width, activeDropDown, activeBurgerNav]);

  ///////////////////////////
  // 3.0 Fetch Navigation //
  /////////////////////////
  useEffect(() => {
    if (!activeDropDown) return;

    dispatch(navActions.getNav({ category: activeDropDown }));
  }, [activeDropDown]);

  return {
    width,
    handleNavDropdownOnMouseOver,
    handleNavDropdownOnMouseLeave,
    handleNavDropdownOnClick,
    activeDropDown,
  };
}
