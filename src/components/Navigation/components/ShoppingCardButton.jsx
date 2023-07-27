/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { PATHS } from "config/routes";
import { shoppingCartActions } from "store/reducers/shoppingCartReducer";
import { selectCartSum } from "store/selectors/cartSelectors";

import { ShoppingCartIcon } from "components/Layouts/Icons";
import * as Styled from "./styles/ShoppingCard.styed";

export default function ShoppingCardButton() {
  const dispatch = useDispatch();
  const sum = useSelector(selectCartSum);

  useEffect(() => {
    dispatch(shoppingCartActions.checkCartProductsExpiration());
  }, []);

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
          <span className="total-price">{sum.productsTotalPrice} ₾</span>
        )}
      </Link>
    </Styled.ShoppingCardContainer>
  );
}
