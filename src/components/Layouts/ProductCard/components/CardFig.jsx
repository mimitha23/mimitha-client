import { Link } from "react-router-dom";

import * as Styled from "./styles/CardFig.styled";

export default function CardFig() {
  return (
    <Styled.CardFig className="product-fig">
      <Link to="/products/:productId" state={{}} className="card-fig__link">
        <img src="/assets/images/womans-dress-black.jpg" alt="" />
      </Link>
    </Styled.CardFig>
  );
}
