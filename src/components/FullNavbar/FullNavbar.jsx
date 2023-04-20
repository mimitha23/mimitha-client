import { StyledFullNavbar } from "./FullNavbar.Styled";
import {
  CategoriesNavbar,
  SearchBar,
  ProfileIcon,
  SupportNavbar,
} from "../index";

export default function FullNavbar(props) {
  return (
    <StyledFullNavbar>
      <CategoriesNavbar />
      <SearchBar />
      <ProfileIcon themeChanger={props.themeChanger} />
      <SupportNavbar />
    </StyledFullNavbar>
  );
}
