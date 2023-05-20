import { Link } from "react-router-dom";
import { DollarIcon, BagIcon, EuroIcon } from "../Icons";
import * as Styled from "./ProductCard.styled";

export default function ProductCard() {
  return (
    <Styled.ProductCard>
      <figure className="product-fig">
        <Link to="/products/:productId">
          <img src="/assets/images/womans-dress-black.jpg" alt="" />
        </Link>
      </figure>

      <div className="product-content">
        <h2 className="product-title">
          <Link to="/products/:productId">ჰუდი</Link>
        </h2>

        <p className="product-price">
          ფასი: <span>100</span> ლარი
        </p>

        <button className="add-to-cart__btn">
          <span>დაამატე კალათაში</span>
          <span>
            <BagIcon />
          </span>
        </button>

        <hr className="product-content__devider" />

        <div className="valute-switch__box">
          <button>
            <EuroIcon />
          </button>
          <button>
            <DollarIcon />
          </button>
        </div>

        <div className="product__edit-and--fit__box">
          <button className="edit-btn">
            <Link to="/products/:productId/fit">რას უხდება ?</Link>
          </button>
          <button className="edit-btn">
            <Link to="/products/:productId/edit">გარდაქმნა</Link>{" "}
          </button>
        </div>
      </div>
    </Styled.ProductCard>
  );
}
