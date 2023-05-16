import * as Styled from "./styles/ProductFooter.styled";
import { BsFillHandbagFill } from "react-icons/bs";

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
          <BsFillHandbagFill />
        </span>
      </button>
    </Styled.ProductFooterContainer>
  );
}

export default ProductFooter;
