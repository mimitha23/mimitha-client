/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { PATHS } from "config/paths";
import { useCurrencyContext } from "providers/CurrencyProvider";
import { selectCartSum } from "store/selectors/cart.selectors";

import { ShoppingCartIcon } from "components/Layouts/Icons";
import * as Styled from "./ShoppingCardButton.styled";

const ShoppingCardButton: React.FC = () => {
  const sum = useSelector(selectCartSum);

  const { currencySymbol, convertPrice } = useCurrencyContext();

  return (
    <Styled.ShoppingCardContainer>
      <Link to={PATHS.cart_page} className="cart-link">
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
};

export default ShoppingCardButton;
