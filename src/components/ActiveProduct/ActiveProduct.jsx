import {
  ProductHeading,
  ProductDescription,
  ProductStyler,
  ProductShippingInfo,
  ProductView,
} from "./components";
import * as Styled from "./ActiveProduct.styled";

export default function ActiveProduct() {
  return (
    <Styled.ActiveProductContainer>
      <div className="product-main">
        <ProductView />
        <div className="product-info">
          <ProductHeading />
          <ProductDescription />
          <ProductStyler />
          <ProductShippingInfo />
        </div>
      </div>
    </Styled.ActiveProductContainer>
  );
}
