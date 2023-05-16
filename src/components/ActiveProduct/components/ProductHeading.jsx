import { Link } from "react-router-dom";
import * as Styled from "./styles/ProductHeading.styled";
import { FaDollarSign } from "react-icons/fa";

export default function ProductHeading(props) {
  return (
    <Styled.ProductHeadingContainer>
      <h1 className="product-title">
        მამაკაცის გრძელმკლავიანი ჰუდი - 100% ბამბა
      </h1>

      <div className="price-and-edit__container">
        <div className="product-price">
          <span>ფასი: 100 ლარი</span>
          <span>
            <FaDollarSign />
          </span>
        </div>

        <Link to="/products/:productId/edit" className="edit-link">
          რედაქტირება
        </Link>
      </div>
    </Styled.ProductHeadingContainer>
  );
}
