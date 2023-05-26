import { useState } from "react";
import { useHideNavOnScroll } from "hooks/domBase";

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
  const [activeBurgerNav, setActiveBurgerNav] = useState(false);

  return (
    <Styled.Navigation partialNav={partialNav}>
      <Logo partialNav={partialNav} />
      <div className="nav-actions">
        <SupportNavbar partialNav={partialNav} />

        <div className="main-nav">
          <CategoriesNavbar activeBurgerNav={activeBurgerNav} />
          <SearchBar />
          <ShoppingCard />
          <BurgerButton setActiveBurgerNav={setActiveBurgerNav} />
        </div>
      </div>
    </Styled.Navigation>
  );
}
