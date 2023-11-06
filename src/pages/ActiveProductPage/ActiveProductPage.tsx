import { useScrollToTop } from "hooks/domBase";

import { Navigation, Footer } from "components/index";
import ActiveProduct from "components/ActiveProduct/ActiveProduct";

const ActiveProductPage: React.FC = () => {
  useScrollToTop();

  return (
    <>
      <Navigation />
      <ActiveProduct />
      <Footer />
    </>
  );
};

export default ActiveProductPage;
