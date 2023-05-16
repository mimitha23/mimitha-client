import {
  ProductHeading,
  ProductDescription,
  ProductStyler,
  ProductShippingInfo,
  ProductView,
} from "./components";
import * as Styled from "./ActiveProduct.styled";

export default function Editor() {
  return (
    <Styled.ActiveProductContainer>
      <ProductView />
      <div className="product-info">
        <ProductHeading />
        <ProductDescription />
        <ProductStyler />
        <ProductShippingInfo />
      </div>
    </Styled.ActiveProductContainer>
  );
}
