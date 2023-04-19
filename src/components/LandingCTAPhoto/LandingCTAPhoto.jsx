import {
  StyledLandingCTAPhoto,
  LandingCTAContainer,
  LandingCTA,
} from "./LandingCTAPhoto.Styled";

export default function LandingCTAPhoto(props) {
  return (
    <StyledLandingCTAPhoto className="landingCTAPhoto">
      <img src="#" alt="" className="landingCTA--backgroundIMG" />
      <LandingCTAContainer className="landingCTA--button-container">
        <LandingCTA className="landingCTA--button">
          <span className="landingCTA--item">შექმენი</span>
          <span className="landingCTA--item">შენი</span>
          <span className="landingCTA--item">სტილი</span>
        </LandingCTA>
      </LandingCTAContainer>
    </StyledLandingCTAPhoto>
  );
}
