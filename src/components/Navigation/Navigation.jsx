import { memo } from "react";

import { useHideNavOnScroll } from "hooks/domBase/index";
import { useBurgerNavigation } from "hooks/layoutBase/index";

import {
  Logo,
  SupportNav,
  MainNav,
  SearchBar,
  ShoppingCardButton,
  BurgerButton,
} from "./components";
import * as Styled from "./Navigation.styled";

export default memo(function Navigation() {
  const { partialNav } = useHideNavOnScroll();
  const { activeBurgerNav, setActiveBurgerNav } = useBurgerNavigation();

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
          <div className="main_nav--right">
            <SearchBar />
            <ShoppingCardButton />
            <BurgerButton setActiveBurgerNav={setActiveBurgerNav} />
          </div>
        </div>
      </div>
    </Styled.Navigation>
  );
});
