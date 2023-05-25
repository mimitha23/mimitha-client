import { useScrollToTop } from "hooks/domBase";

import { Navigation, Footer } from "components/index";
import AllProducts from "components/AllProducts/AllProducts";

function AllProductsPage() {
  useScrollToTop();

  return (
    <>
      <Navigation />
      <AllProducts />
      <Footer />
    </>
  );
}

export default AllProductsPage;
