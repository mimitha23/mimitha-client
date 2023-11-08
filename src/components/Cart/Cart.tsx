/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { useAppSelector } from "store/hooks";

import { selectShoppingCart } from "store/selectors/cart.selectors";

import CartBody from "./components/CartBody";
import CartFooter from "./components/CartFooter";
import CartHeader from "./components/CartHeader";
import { ModalWindow } from "components/Layouts/index";
import * as Styled from "./Cart.styled";

const Cart: React.FC = () => {
  const [activeBankingModal, setActiveBankingModal] = useState(false);

  const cart = useAppSelector(selectShoppingCart);

  const onBuy = () => setActiveBankingModal(true);

  const onCloseModal = () => setActiveBankingModal(false);

  return (
    <Styled.CartContainer>
      <div className="cart">
        <CartHeader />

        <CartBody products={cart} />

        <CartFooter isEmpty={cart[0] ? false : true} onBuy={onBuy} />
      </div>

      <ModalWindow activeModal={activeBankingModal} closeModal={onCloseModal}>
        <div className="cart__banking-modal">enter banking info and etc.</div>
      </ModalWindow>
    </Styled.CartContainer>
  );
};

export default Cart;
