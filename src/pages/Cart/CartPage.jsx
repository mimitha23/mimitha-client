import useScrollToTop from "hooks/domBase/useScrollToTop";
import { Navigation, Footer } from "components/index";
import Cart from "components/Cart/Cart";

export default function CartPage() {
  useScrollToTop();

  return (
    <>
      <Navigation />
      <Cart />
      <Footer />
    </>
  );
}
