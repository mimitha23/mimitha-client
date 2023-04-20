import { StyledLandingPage, StyledDownPanel } from "./LandingPage.Styled";

import { LandingCTAPhoto, FullNavbar } from "../../components/index";

export default function LandingPage(props) {
  return (
    <StyledLandingPage>
      <FullNavbar themeChanger={props.themeChanger} />
      <StyledDownPanel>
        <LandingCTAPhoto />
      </StyledDownPanel>
    </StyledLandingPage>
  );
}
