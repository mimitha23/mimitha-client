import { useTranslation } from "react-i18next";

import CartItem from "./CartItem";
import * as Styled from "./styles/CartBody.styled";

import { CartProductT } from "interface/store/cart.reducer.types";

interface CartBodyT {
  products: Array<CartProductT>;
}

const CartBody: React.FC<CartBodyT> = ({ products }) => {
  const { t } = useTranslation();

  return (
    <Styled.CartBodyContainer>
      {products[0] &&
        products.map((product) => (
          <CartItem key={product._id} product={product} />
        ))}

      {!products[0] && (
        <div className="no-products__message">
          <span className="message_main">
            {t("cart.no_products_in_basket")}
          </span>
        </div>
      )}
    </Styled.CartBodyContainer>
  );
};

export default CartBody;
