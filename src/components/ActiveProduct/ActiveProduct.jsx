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
import { EditorFitButtons, ContainerFull } from "components/Layouts";
import * as Styled from "./ActiveProduct.styled";

export default function ActiveProduct() {
  const { handleFitMannequin, handleFitModel, activeFit } = useFitProduct();

  return (
    <ContainerFull>
      <Styled.ActiveProductContainer>
        <div className="active-product__fit-buttons--box">
          <EditorFitButtons
            activeFit={activeFit}
            onModel={handleFitModel}
            onMannequin={handleFitMannequin}
          />
        </div>

        <div className="product-main">
          <div className="product-main__product-view">
            <ProductView />
          </div>

          <div className="product-main__product-info">
            <ProductHeading />
            <ProductDescription />
            <ProductStyler />
            <ProductShippingInfo />
            <ProductFooter />
          </div>
        </div>

        <RelatedProducts />
      </Styled.ActiveProductContainer>
    </ContainerFull>
  );
}
