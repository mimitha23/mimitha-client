import useScrollToTop from "hooks/domBase/useScrollToTop";

import Cart from "components/Cart/Cart";
import { Navigation, Footer } from "components/index";

const CartPage: React.FC = () => {
  useScrollToTop();

  return (
    <>
      <Navigation />
      <Cart />
      <Footer />
    </>
  );
};

export default CartPage;
