import { useScrollToTop } from "hooks/domBase";

import { Footer } from "components/index";
import Landing from "components/Landing/Landing";
import { Navigation } from "components";

export default function LandingPage() {
  useScrollToTop();

  return (
    <>
      <Navigation />
      <Landing />
      <Footer />
    </>
  );
}
