import { useTranslation } from "react-i18next";

import CartItem from "./CartItem";
import * as Styled from "./styles/CartBody.styled";

export default function CartBody({ products }) {
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
          <br />
          <blockquote className="message__secondary">
            ({t("cart.cart_persistance_message")})
          </blockquote>
        </div>
      )}
    </Styled.CartBodyContainer>
  );
}
