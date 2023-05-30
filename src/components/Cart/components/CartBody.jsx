import CartItem from "./CartItem";
import * as Styled from "./styles/CartBody.styled";

export default function CartBody() {
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
