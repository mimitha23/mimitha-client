import {
  StyledLandingCTAPhoto,
  LandingCTAContainer,
  LandingCTA,
} from "./LandingCTAPhoto.Styled";

export default function LandingCTAPhoto(props) {
  return (
    <StyledLandingCTAPhoto>
      <LandingCTAContainer>
        <LandingCTA>
          <span>შექმენი</span>
          <span>შენი</span>
          <span>სტილი</span>
        </LandingCTA>
      </LandingCTAContainer>
    </StyledLandingCTAPhoto>
  );
}
