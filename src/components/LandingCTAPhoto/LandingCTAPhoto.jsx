import { Link } from "react-router-dom";
import * as Styled from "./LandingCTAPhoto.Styled";

export default function LandingCTAPhoto(props) {
  return (
    <Styled.LandingCTAPhoto>
      <Link to={"/editor"}>
        <div className="landingCTAContainer">
          <div className="landingCTA">
            <span>შექმენი</span>
            <span>შენი</span>
            <span>სტილი</span>
          </div>
        </div>
      </Link>
    </Styled.LandingCTAPhoto>
  );
}
