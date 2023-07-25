import { useScrollToTop } from "hooks/domBase";
import { Footer, Navigation } from "components";
import Landing from "components/Landing/Landing";

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
