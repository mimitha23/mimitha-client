/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { useSelector } from "react-redux";

import { selectShoppingCart } from "store/selectors/cart.selectors";

import CartBody from "./components/CartBody";
import CartFooter from "./components/CartFooter";
import CartHeader from "./components/CartHeader";
import { ModalWindow } from "components/Layouts/index";
import * as Styled from "./Cart.styled";

export default function Cart() {
  const [activeBankingModal, setActiveBankingModal] = useState(false);
  const cart = useSelector(selectShoppingCart);

  return (
    <Styled.CartContainer>
      <div className="cart">
        <CartHeader />
        <CartBody products={cart} />
        <CartFooter
          onBuy={() => setActiveBankingModal(true)}
          isEmpty={cart[0] ? false : true}
        />
      </div>
      <ModalWindow
        activeModal={activeBankingModal}
        closeModal={() => setActiveBankingModal(false)}
      >
        <div className="cart__banking-modal">enter banking info and etc.</div>
      </ModalWindow>
    </Styled.CartContainer>
  );
}
