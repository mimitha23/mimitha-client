import { useScrollToTop } from "hooks/domBase";
import { Navigation, Footer } from "components";
import ProductFit from "components/ProductFit/ProductFit";

function ProductFitPage() {
  useScrollToTop();

  return (
    <>
      <Navigation />
      <ProductFit />
      <Footer />
    </>
  );
}

export default ProductFitPage;
