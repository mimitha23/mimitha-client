import * as Styled from "./Navigation.styled";
import {
  CategoriesNavbar,
  SearchBar,
  ProfileIcon,
  SupportNavbar,
} from "./components";

export default function Navigation() {
  return (
    <Styled.Navigation>
      <img
        className="navbarLogo"
        src="/assets/images/image-not-uploaded.png"
        alt=""
      />
      <CategoriesNavbar />
      <SearchBar />
      <ProfileIcon />
      <SupportNavbar />
    </Styled.Navigation>
  );
}
