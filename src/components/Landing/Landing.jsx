import { Container } from "components/Layouts/index";
import LandingCTAPhoto from "./components/LandingCTAPhoto";
import MimithaPackages from "./components/MimithaPackages";
import PopularProducts from "./components/PopularProducts";
import * as Styled from "./Landing.styled";

export default function Landing() {
  return (
    <Styled.LandingContainer>
      <LandingCTAPhoto />
      <Container>
        <MimithaPackages />
        <PopularProducts />
      </Container>
    </Styled.LandingContainer>
  );
}
