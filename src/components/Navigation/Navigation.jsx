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
  const [activeBurgerNav, setActiveBurgerNav] = useState(null);

  useEffect(() => {
    if (width > 1280 && typeof activeBurgerNav === "boolean")
      setActiveBurgerNav(null);
  }, [width, activeBurgerNav]);

  return (
    <Styled.Navigation partialNav={partialNav}>
      <Logo partialNav={partialNav} />
      <div className="nav-actions">
        <SupportNav partialNav={partialNav} />

        <div className="main-nav">
          <MainNav
            activeBurgerNav={activeBurgerNav}
            onBurgerClose={() => setActiveBurgerNav(false)}
          />
          <SearchBar />
          <ShoppingCardButton />
          <BurgerButton setActiveBurgerNav={setActiveBurgerNav} />
        </div>
      </div>
    </Styled.Navigation>
  );
}
