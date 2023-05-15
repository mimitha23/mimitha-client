import * as Styled from "./Navigation.styled";
import {
  CategoriesNavbar,
  SearchBar,
  ProfileIcon,
  SupportNavbar,
  Logo,
} from "./components";

export default function Navigation() {
  return (
    <Styled.Navigation>
      <Logo />
      <div className="nav-actions">
        <SupportNavbar />
        <div className="main-nav">
          <CategoriesNavbar />
          <SearchBar />
          <ProfileIcon />
        </div>
      </div>
    </Styled.Navigation>
  );
}
