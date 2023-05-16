import {
  ProductHeading,
  ProductDescription,
  ProductStyler,
  ProductShippingInfo,
  ProductView,
  ProductFooter,
} from "./components";
import { EditorFitButtons } from "components/Layouts";
import * as Styled from "./ActiveProduct.styled";

export default function ActiveProduct() {
  return (
    <Styled.ActiveProductContainer>
      <EditorFitButtons />

      <div className="product-main">
        <ProductView />

        <div className="product-info">
          <ProductHeading />
          <ProductDescription />
          <ProductStyler />
          <ProductShippingInfo />
          <ProductFooter />
        </div>
      </div>
    </Styled.ActiveProductContainer>
  );
}
