import { Link } from "react-router-dom";
import {
  StyledLandingCTAPhoto,
  LandingCTAContainer,
  LandingCTA,
} from "./LandingCTAPhoto.Styled";

export default function LandingCTAPhoto(props) {
  return (
    <StyledLandingCTAPhoto>
      <Link to={"/editor"}>
        <LandingCTAContainer>
          <LandingCTA>
            <span>შექმენი</span>
            <span>შენი</span>
            <span>სტილი</span>
          </LandingCTA>
        </LandingCTAContainer>
      </Link>
    </StyledLandingCTAPhoto>
  );
}
