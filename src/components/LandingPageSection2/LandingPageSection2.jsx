import * as Styled from "./LandingPageSection2.Styled";
import LPSection2Box from "components/LPSection2Box/LPSection2Box";

export default function LandingPageSection2(props) {
  return (
    <Styled.LandingPageSection2>
      <div className="LPSection2BoxesContainer">
        <LPSection2Box />
      </div>
    </Styled.LandingPageSection2>
  );
}
