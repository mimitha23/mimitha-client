/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { PATHS } from "config/routes";
import { useCurrencyContext } from "providers/CurrencyProvider";
import { selectCartSum } from "store/selectors/cartSelectors";

import { ShoppingCartIcon } from "components/Layouts/Icons";
import * as Styled from "./styles/ShoppingCard.styed";

export default function ShoppingCardButton() {
  const sum = useSelector(selectCartSum);

  const { currencySymbol, convertPrice } = useCurrencyContext();

  return (
    <Styled.ShoppingCardContainer>
      <Link to={PATHS.cart.fullPath} className="cart-link">
        <span className="cart-icon">
          <ShoppingCartIcon />
        </span>

        {sum.productsAmount > 0 && (
          <span className="cart-count__badge">
            <span className="cart-count">{sum.productsAmount}</span>
          </span>
        )}

        {sum.productsTotalPrice > 0 && (
          <span className="total-price">
            {convertPrice(sum.productsTotalPrice)} {currencySymbol}
          </span>
        )}
      </Link>
    </Styled.ShoppingCardContainer>
  );
}
