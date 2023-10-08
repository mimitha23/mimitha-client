import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";

import { selectCartSum } from "store/selectors/cart.selectors";
import { useCurrencyContext } from "providers/CurrencyProvider";
import { shoppingCartActions } from "store/reducers/shoppingCart.reducer";

import * as Styled from "./styles/CartFooter.styled";

export default function CartFooter({ onBuy, isEmpty }) {
  const dispatch = useDispatch();

  const { t } = useTranslation();
  const { currencySymbol, convertPrice } = useCurrencyContext();

  const sum = useSelector(selectCartSum);

  function onCleanBasket() {
    dispatch(shoppingCartActions.resetCart());
  }

  return (
    <Styled.CartFooterContainer>
      <div className="footer__summary-box">
        <span className="delivery-price">
          {t("cart.products_total_quantity")} &mdash; {sum.productsAmount}
        </span>
        <span className="delivery-price">
          {t("cart.products_total_amount")} &mdash;{" "}
          {convertPrice(sum.productsTotalPrice)} {currencySymbol}
        </span>
        <span className="delivery-price">
          {t("crossover.delivery_price")} &mdash; {convertPrice(5)}
          {currencySymbol}
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
