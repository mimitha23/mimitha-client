import * as Styled from "./ProductCard.styled";
import { FaShoppingCart } from "react-icons/fa";
import { CgDollar, CgEuro } from "react-icons/cg";

export default function ProductCard(props) {
  return (
    <Styled.ProductCard>
      <div className="imageContainer">
        <img src="/assets/images/womans-dress-black.jpg" alt="" />
      </div>
      <div className="productDescription">
        <h2>ჰუდი</h2>
        <div>
          <p>
            ფასი: <span>100</span> ლარი
          </p>
          <div className="add-to-cart">
            დაამატე კალათაში <FaShoppingCart className="cart-ico" />
          </div>
        </div>
      </div>
      <div className="last-line">
        <div className="currency-switch">
          <CgEuro className="currency" />
          <CgDollar className="currency" />
        </div>
        <div className="edit-btn">გარდაქმნა</div>
      </div>
    </Styled.ProductCard>
  );
}
