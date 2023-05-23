import { useState } from "react";

import CartBody from "./components/CartBody";
import CartFooter from "./components/CartFooter";
import CartHeader from "./components/CartHeader";
import { ModalWindow } from "components/Layouts/index";
import * as Styled from "./Cart.styled";

function Cart() {
  const [activeBankinModal, setActiveBankinModal] = useState(false);
  return (
    <Styled.CartContainer>
      <div className="cart">
        <CartHeader />
        <CartBody />
        <CartFooter onBuy={() => setActiveBankinModal(true)} />
      </div>
      <ModalWindow
        activeModal={activeBankinModal}
        closeModal={() => setActiveBankinModal(false)}
      >
        <div className="cart__banking-modal">enter banking info and etc.</div>
      </ModalWindow>
    </Styled.CartContainer>
  );
}

export default Cart;
