import { useScrollToTop } from "hooks/domBase";
import { Footer, Navigation } from "components";
import Landing from "components/Landing/Landing";

const LandingPage: React.FC = () => {
  useScrollToTop();

  return (
    <>
      <Navigation />
      <Landing />
      <Footer />
    </>
  );
};

export default LandingPage;
