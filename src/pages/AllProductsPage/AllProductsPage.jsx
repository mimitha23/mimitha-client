import { useScrollToTop } from "hooks/domBase";

import { Navigation, Footer } from "components/index";
import AllProducts from "components/AllProducts/AllProducts";

export default function AllProductsPage() {
  useScrollToTop();

  return (
    <>
      <Navigation />
      <AllProducts />
      <Footer />
    </>
  );
}
