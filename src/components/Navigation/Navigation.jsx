import { useState, useEffect } from "react";
import { useHideNavOnScroll, useWindowDimention } from "hooks/domBase/index";

import * as Styled from "./Navigation.styled";
import {
  CategoriesNavbar,
  SearchBar,
  SupportNavbar,
  Logo,
  ShoppingCard,
  BurgerButton,
} from "./components";

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
        <SupportNavbar partialNav={partialNav} />

        <div className="main-nav">
          <CategoriesNavbar
            activeBurgerNav={activeBurgerNav}
            onBurgerClose={() => setActiveBurgerNav(false)}
          />
          <SearchBar />
          <ShoppingCard />
          <BurgerButton setActiveBurgerNav={setActiveBurgerNav} />
        </div>
      </div>
    </Styled.Navigation>
  );
}
