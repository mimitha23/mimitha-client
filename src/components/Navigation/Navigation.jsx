import { useState, useEffect } from "react";

import { useHideNavOnScroll, useWindowDimention } from "hooks/domBase/index";

import {
  Logo,
  SupportNav,
  MainNav,
  SearchBar,
  ShoppingCardButton,
  BurgerButton,
} from "./components";
import * as Styled from "./Navigation.styled";

export default function Navigation() {
  const { partialNav } = useHideNavOnScroll();

  const { width } = useWindowDimention();

  // 1.0) Controll Desktop Menu On Mouse Over
  const [activeDropDown, setActiveDropDown] = useState("");

  const handleNavDropdownOnMouseOver = (e) => {
    if (
      !e.target ||
      !e.target.closest(".main-nav--list") ||
      e.target.closest(".nav-dropdown--backdrop")
    ) {
      activeDropDown && setActiveDropDown("");
      return;
    }

    const navListItem = e.target.closest(".categories-nav__list-item");

    if (!navListItem) return;

    const routeForDropDown = navListItem.dataset.route;

    routeForDropDown &&
      routeForDropDown !== activeDropDown &&
      setActiveDropDown(routeForDropDown);
  };

  // 2.0) Controll BurgerMenu Based On Window Width And Active Dropdown
  const [activeBurgerNav, setActiveBurgerNav] = useState(null);

  useEffect(() => {
    if (width > 1280 && typeof activeBurgerNav === "boolean")
      setActiveBurgerNav(null);
    if (width < 1280 && !activeBurgerNav && activeDropDown)
      setActiveDropDown("");
  }, [width, activeBurgerNav, activeDropDown]);

  return (
    <Styled.Navigation partialNav={partialNav}>
      <Logo partialNav={partialNav} />
      <div
        className="nav-actions"
        {...(width > 1280 && {
          onMouseOver: handleNavDropdownOnMouseOver,
        })}
      >
        <SupportNav partialNav={partialNav} />

        <div className="main-nav">
          <MainNav
            activeBurgerNav={activeBurgerNav}
            onBurgerClose={() => setActiveBurgerNav(false)}
            activeDropDown={activeDropDown}
            setActiveDropDown={setActiveDropDown}
          />
          <SearchBar />
          <ShoppingCardButton />
          <BurgerButton setActiveBurgerNav={setActiveBurgerNav} />
        </div>
      </div>
    </Styled.Navigation>
  );
}
