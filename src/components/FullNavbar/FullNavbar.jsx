import { StyledFullNavbar, StyledNavbarLogo } from "./FullNavbar.Styled";
import {
  CategoriesNavbar,
  SearchBar,
  ProfileIcon,
  SupportNavbar,
} from "../index";

export default function FullNavbar(props) {
  return (
    <StyledFullNavbar>
      <StyledNavbarLogo src="./images/image-not-uploaded.png" alt="" />
      <CategoriesNavbar />
      <SearchBar />
      <ProfileIcon themeChanger={props.themeChanger} />
      <SupportNavbar />
    </StyledFullNavbar>
  );
}
