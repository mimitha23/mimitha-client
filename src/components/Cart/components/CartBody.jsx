import * as Styled from "./styles/CartBody.styled";

import CartItem from "./CartItem";

function CartBody(props) {
  return (
    <Styled.CartBodyContainer>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </Styled.CartBodyContainer>
  );
}

export default CartBody;
