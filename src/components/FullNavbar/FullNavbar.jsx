import { StyledFullNavbar, StyledNavbarLogo } from "./FullNavbar.Styled";
import {
  CategoriesNavbar,
  SearchBar,
  ProfileIcon,
  SupportNavbar,
} from "components";

export default function FullNavbar() {
  return (
    <StyledFullNavbar>
      <StyledNavbarLogo src="/assets/images/image-not-uploaded.png" alt="" />
      <CategoriesNavbar />
      <SearchBar />
      <ProfileIcon/>
      <SupportNavbar />
    </StyledFullNavbar>
  );
}
