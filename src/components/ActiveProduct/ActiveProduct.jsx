import { useFitProduct } from "hooks/layoutBase";

import {
  ProductHeading,
  ProductDescription,
  ProductStyler,
  ProductShippingInfo,
  ProductView,
  ProductFooter,
  RelatedProducts,
} from "./components";
import { EditorFitButtons } from "components/Layouts";
import * as Styled from "./ActiveProduct.styled";

export default function ActiveProduct() {
  const { handleFitMannequin, handleFitModel, activeFit } = useFitProduct();

  return (
    <Styled.ActiveProductContainer>
      <EditorFitButtons
        activeFit={activeFit}
        onModel={handleFitModel}
        onMannequin={handleFitMannequin}
      />

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

      <RelatedProducts />
    </Styled.ActiveProductContainer>
  );
}
