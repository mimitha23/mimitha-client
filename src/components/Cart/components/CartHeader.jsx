import * as Styled from "./styles/CartHeader.styled";
import { useNavigate } from "react-router-dom";
import { ShoppingCartIcon } from "components/Layouts/Icons/index";

function CartHeader(props) {
  const navigate = useNavigate();

  return (
    <Styled.CartHeaderContainer>
      <span className="cart-header__title">
        <span className="cart-header__title-icon">
          <ShoppingCartIcon />
        </span>
        <span>კალათა</span>
      </span>

      <button onClick={() => navigate(-1)} className="cart-header__back-btn">
        უკან დაბრუნება
      </button>
    </Styled.CartHeaderContainer>
  );
}

export default CartHeader;
