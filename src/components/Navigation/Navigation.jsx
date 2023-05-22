import { useHideNavOnScroll } from "hooks/domBase";

import * as Styled from "./Navigation.styled";
import { CategoriesNavbar, SearchBar, SupportNavbar, Logo } from "./components";

export default function Navigation() {
  const { partialNav } = useHideNavOnScroll();

  return (
    <Styled.Navigation partialNav={partialNav}>
      <Logo partialNav={partialNav} />
      <div className="nav-actions">
        <SupportNavbar partialNav={partialNav} />
        <div className="main-nav">
          <CategoriesNavbar />
          <SearchBar />
        </div>
      </div>
    </Styled.Navigation>
  );
}
