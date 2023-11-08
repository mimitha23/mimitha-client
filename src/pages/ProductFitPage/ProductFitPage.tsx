import { useScrollToTop } from "hooks/domBase";
import { Navigation, Footer } from "components";
import ProductFit from "components/ProductFit/ProductFit";

const ProductFitPage: React.FC = () => {
  useScrollToTop();

  return (
    <>
      <Navigation />
      <ProductFit />
      <Footer />
    </>
  );
};

export default ProductFitPage;
