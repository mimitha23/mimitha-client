import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";

import { selectCartSum } from "store/selectors/cartSelectors";
import { shoppingCartActions } from "store/reducers/shoppingCartReducer";

import * as Styled from "./styles/CartFooter.styled";

export default function CartFooter({ onBuy, isEmpty }) {
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const sum = useSelector(selectCartSum);

  function onCleanBasket() {
    dispatch(shoppingCartActions.resetCart());
  }

  return (
    <Styled.CartFooterContainer>
      {!isEmpty && (
        <blockquote className="cart_persistance-message">
          ({t("cart.cart_persistance_message")})
        </blockquote>
      )}

      <div className="footer__summary-box">
        <span className="delivery-price">
          {t("cart.products_total_quantity")} &mdash; {sum.productsAmount}
        </span>
        <span className="delivery-price">
          {t("cart.products_total_amount")} &mdash; {sum.productsTotalPrice} ₾
        </span>
        <span className="delivery-price">
          {t("crossover.delivery_price")} &mdash; 5₾
        </span>
      </div>

      {!isEmpty && (
        <div className="footer__actions-box">
          <button className="cart-footer__btn" onClick={onCleanBasket}>
            {t("cart.clean_basket")}
          </button>
          <button className="cart-footer__btn" onClick={onBuy}>
            {t("crossover.buy")}
          </button>
        </div>
      )}
    </Styled.CartFooterContainer>
  );
}
