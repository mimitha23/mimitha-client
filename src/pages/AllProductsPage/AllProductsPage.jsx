import { useScrollToTop } from "hooks/domBase";

import { Navigation } from "components";
import AllProducts from "components/AllProducts/AllProducts";

function AllProductsPage() {
  useScrollToTop();

  return (
    <>
      <Navigation />
      <AllProducts />
    </>
  );
}

export default AllProductsPage;
