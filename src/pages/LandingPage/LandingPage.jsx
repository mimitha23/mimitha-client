import { useScrollToTop } from "hooks/domBase";

import {
  LandingCTAPhoto,
  MimithaPackages,
  PopularProducts,
} from "components/Landing";
import { ContainerFull } from "components/Layouts";
import { Navigation } from "components";

export default function LandingPage() {
  useScrollToTop();

  return (
    <>
      <Navigation />
      <LandingCTAPhoto />
      <ContainerFull>
        <MimithaPackages />
        <PopularProducts />
      </ContainerFull>
    </>
  );
}
