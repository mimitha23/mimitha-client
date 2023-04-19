import {
  StyledLandingPage,
  StyledUpperPanel,
  StyledDownPanel,
} from "./LandingPage.Styled";

import {
  CategoriesNavbar,
  SearchBar,
  ProfileIcon,
  SupportNavbar,
  LandingCTAPhoto,
} from "../../components/index";

export default function LandingPage(props) {
  return (
    <StyledLandingPage>
      <StyledUpperPanel>
        <SupportNavbar />
        <CategoriesNavbar />
        <SearchBar />
        <ProfileIcon themeChanger={props.themeChanger} />
      </StyledUpperPanel>
      <StyledDownPanel>
        <LandingCTAPhoto />
      </StyledDownPanel>
    </StyledLandingPage>
  );
}
