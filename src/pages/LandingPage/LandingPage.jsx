import * as Styled from "./LandingPage.Styled";

import {
  LandingCTAPhoto,
  Navigation,
  StyledLandingPageSection2,
} from "components";

export default function LandingPage() {
  return (
    <>
      <Navigation />
      <Styled.LandingPage>
        <LandingCTAPhoto />
        <StyledLandingPageSection2 />
      </Styled.LandingPage>
    </>
  );
}
