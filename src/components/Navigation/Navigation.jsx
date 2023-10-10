import { memo } from "react";

import {
  useBurgerNavigation,
  useHideNavOnScroll,
} from "hooks/layoutBase/index";

import * as UI from "./components";
import * as Styled from "./Navigation.styled";

export default memo(function Navigation() {
  const { partialNav } = useHideNavOnScroll();
  const { activeBurgerNav, setActiveBurgerNav } = useBurgerNavigation();

  return (
    <Styled.Navigation partialNav={partialNav}>
      <UI.Logo partialNav={partialNav} />

      <Styled.NavActionsBox>
        <UI.SupportNav partialNav={partialNav} />

        <Styled.MainNavBox>
          <UI.MainNav
            activeBurgerNav={activeBurgerNav}
            onBurgerClose={() => setActiveBurgerNav(false)}
          />

          <Styled.MainNavBoxActions>
            <UI.SearchBar />

            {/* <UI.ShoppingCardButton /> */}

            <UI.BurgerButton setActiveBurgerNav={setActiveBurgerNav} />
          </Styled.MainNavBoxActions>
        </Styled.MainNavBox>
      </Styled.NavActionsBox>
    </Styled.Navigation>
  );
});
