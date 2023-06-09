import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "components/Layouts/Icons";
import * as Styled from "./styles/ShoppingCard.styed";

export default function ShoppingCardButton() {
  return (
    <Styled.ShoppingCardContainer>
      <Link to="/cart" className="cart-link">
        <span className="cart-icon">
          <ShoppingCartIcon />
        </span>
        <span className="cart-count__badge">
          <span className="cart-count">2</span>
        </span>
        <span className="total-price">299 $</span>
      </Link>
    </Styled.ShoppingCardContainer>
  );
}
