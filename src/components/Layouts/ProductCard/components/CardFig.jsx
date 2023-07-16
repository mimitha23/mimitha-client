import { Link } from "react-router-dom";
import { PATHS } from "config/routes";

import * as Styled from "./styles/CardFig.styled";

export default function CardFig({ productId, img, title }) {
  return (
    <Styled.CardFig className="product-fig">
      <Link
        to={PATHS.active_product.fullPath({})}
        state={{}}
        className="card-fig__link"
      >
        <img src={img} alt={title} />
      </Link>
    </Styled.CardFig>
  );
}
