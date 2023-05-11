import {
  StyledLandingPageSection2,
  StyledLPSection2BoxesContainer,
} from "./LandingPageSection2.Styled";
import LPSection2Box from "components/LPSection2Box/LPSection2Box";

export default function LandingPageSection2(props) {
  return (
    <StyledLandingPageSection2>
      <StyledLPSection2BoxesContainer>
        <LPSection2Box />
      </StyledLPSection2BoxesContainer>
    </StyledLandingPageSection2>
  );
}
