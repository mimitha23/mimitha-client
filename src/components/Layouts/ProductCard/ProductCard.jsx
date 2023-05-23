import { Link } from "react-router-dom";
import * as Styled from "./ProductCard.styled";
import {
  CardContentWithActions,
  CardContentDescriptive,
} from "./components/index";

export default function ProductCard({ cardType = "withActions" }) {
  return (
    <Styled.ProductCard>
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
