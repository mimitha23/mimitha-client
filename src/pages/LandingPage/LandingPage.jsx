import { useScrollToTop } from "hooks/domBase";

import { Footer } from "components/index";
import {
  LandingCTAPhoto,
  MimithaPackages,
  PopularProducts,
} from "components/Landing";
import { Container } from "components/Layouts";
import { Navigation } from "components";

export default function LandingPage() {
  useScrollToTop();

  return (
    <>
      <Navigation />
      <LandingCTAPhoto />
      <Container>
        <MimithaPackages />
        <PopularProducts />
      </Container>
      <Footer />
    </>
  );
}
