import { useTranslation } from "react-i18next";
import { useAppSelector, useAppDispatch } from "store/hooks";

import { selectCartSum } from "store/selectors/cart.selectors";
import { useCurrencyContext } from "providers/globals/CurrencyProvider";
import { shoppingCartActions } from "store/reducers/shoppingCart.reducer";

import * as Styled from "./styles/CartFooter.styled";

interface CartFooterT {
  onBuy: () => void;
  isEmpty: boolean;
}

const CartFooter: React.FC<CartFooterT> = ({ onBuy, isEmpty }) => {
  const dispatch = useAppDispatch();

  const { t } = useTranslation();
  const { currencySymbol, convertPrice } = useCurrencyContext();

  const sum = useAppSelector(selectCartSum);

  const onCleanBasket = () => dispatch(shoppingCartActions.cleanUpCart());

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
};

export default CartFooter;
