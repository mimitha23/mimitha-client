import { useScrollToTop } from "hooks/domBase";

import { Navigation } from "components";
import ProductFit from "components/ProductFit/ProductFit";

function ProductFitPage() {
  useScrollToTop();

  return (
    <>
      <Navigation />
      <ProductFit />
    </>
  );
}

export default ProductFitPage;
