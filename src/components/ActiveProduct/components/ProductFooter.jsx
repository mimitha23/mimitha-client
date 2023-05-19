import { BagIcon } from "components/Layouts/Icons";
import * as Styled from "./styles/ProductFooter.styled";

function ProductFooter(props) {
  return (
    <Styled.ProductFooterContainer>
      <button className="product-footer__btn">
        <span className="product-footer__btn-caption">შეინახეთ დიზაინი</span>
        <span className="polygonal-btn"></span>
      </button>
      <button className="product-footer__btn">
        <span className="product-footer__btn-caption">დაამატეთ კალათაში</span>
        <span className="bag-icon">
          <BagIcon />
        </span>
      </button>
    </Styled.ProductFooterContainer>
  );
}

export default ProductFooter;
