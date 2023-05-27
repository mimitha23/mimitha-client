import { Link } from "react-router-dom";
import * as Styled from "./styles/LandingCTAPhoto.styled";

export default function LandingCTAPhoto(props) {
  return (
    <Styled.LandingCTAPhoto>
      <Link to={"/products/:productId"} className="cta-link">
        <div className="landingCTA">
          <span>შექმენი</span>
          <span>შენი</span>
          <span>სტილი</span>
        </div>
      </Link>
    </Styled.LandingCTAPhoto>
  );
}
