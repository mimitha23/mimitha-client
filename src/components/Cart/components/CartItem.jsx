import { useState } from "react";

import CartItemDetailsBoxContainer from "./CartItemDetailsBoxContainer";
import CartItemDetailsControllProductAmount from "./CartItemDetailsControllProductAmount";
import { CloseXIcon } from "components/Layouts/Icons/index";
import * as Styled from "./styles/CartItem.styled";

function CartItem() {
  const [productAmount, setProductAmount] = useState(1);

  function handleProductAmount(val) {
    if (!val || +val < 1) return;
    setProductAmount(+val);
  }

  return (
    <Styled.CartItemContainer>
      <figure className="cart-item__fig">
        <img src="/assets/products/hood-belly-pocket-green.webp" alt="" />
      </figure>
      <div className="cart-item__details">
        <CartItemDetailsBoxContainer
          title="სათაური"
          className="cart-item__details-box__title-box"
        >
          <span>ჰუდი</span>
        </CartItemDetailsBoxContainer>

        <CartItemDetailsBoxContainer
          title="რაოდენობა"
          className="cart-item__details-box__amount-box"
        >
          <CartItemDetailsControllProductAmount
            productAmount={productAmount}
            handleProductAmount={handleProductAmount}
          />
        </CartItemDetailsBoxContainer>

        <CartItemDetailsBoxContainer title="ფასი ცალად">
          <span>
            <strong>20₾</strong>
          </span>
        </CartItemDetailsBoxContainer>

        <CartItemDetailsBoxContainer title="ფასი ჯამში">
          <span>
            <strong>40₾</strong>
          </span>
        </CartItemDetailsBoxContainer>

        <CartItemDetailsBoxContainer
          title="ზომა"
          className="cart-item__details-box__size-box"
        >
          <span className="cart-item__details-box--content__size">S</span>
        </CartItemDetailsBoxContainer>
      </div>
      <button className="cart-item__remove-btn">
        <CloseXIcon />
      </button>
    </Styled.CartItemContainer>
  );
}

export default CartItem;
