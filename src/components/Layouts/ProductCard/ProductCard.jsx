import { Link } from "react-router-dom";

import {
  CardContentWithActions,
  CardContentDescriptive,
} from "./components/index";
import * as Styled from "./ProductCard.styled";

export default function ProductCard({ cardType = "withActions" }) {
  return (
    <Styled.ProductCard data-product-card cardType={cardType}>
      <figure className="product-fig">
        <Link to="/products/:productId">
          <img src="/assets/images/womans-dress-black.jpg" alt="" />
        </Link>
      </figure>

      <div className="product-content">
        {cardType === "withActions" && <CardContentWithActions />}
        {cardType === "descriptive" && <CardContentDescriptive />}
      </div>
    </Styled.ProductCard>
  );
}
