import { StyledLandingPage } from "./LandingPage.Styled";

import {
  LandingCTAPhoto,
  FullNavbar,
  StyledLandingPageSection2,
} from "../../components/index";

export default function LandingPage(props) {
  return (
    <>
      <FullNavbar themeChanger={props.themeChanger} />
      <StyledLandingPage>
        <LandingCTAPhoto />
        <StyledLandingPageSection2 />
      </StyledLandingPage>
    </>
  );
}
