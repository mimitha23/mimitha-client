import {
  LandingCTAPhoto,
  MimithaPackages,
  PopularProducts,
} from "components/Landing";
import { Navigation } from "components";

export default function LandingPage() {
  return (
    <>
      <Navigation />
      <LandingCTAPhoto />
      <MimithaPackages />
      <PopularProducts />
    </>
  );
}
