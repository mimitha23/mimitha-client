import { StyledLandingPage } from "./LandingPage.Styled";

import {
  LandingCTAPhoto,
  FullNavbar,
  StyledLandingPageSection2,
} from "components";

export default function LandingPage() {
  return (
    <>
      <FullNavbar />
      <StyledLandingPage>
        <LandingCTAPhoto />
        <StyledLandingPageSection2 />
      </StyledLandingPage>
    </>
  );
}
