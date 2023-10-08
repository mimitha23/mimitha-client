import { useSelector } from "react-redux";

import { useFitProduct } from "hooks/layoutBase";
import { useActiveProductQuery } from "hooks/api";
import { selectProductMannequinAndModel } from "store/selectors/activeProduct.selectors";

import {
  EditorFitButtons,
  ContainerFull,
  Path,
  Spinner,
} from "components/Layouts";
import * as UI from "./components";
import * as Styled from "./ActiveProductContainer.styled";

export default function ActiveProduct() {
  const { status, productId } = useActiveProductQuery();

  const { handleFitMannequin, handleFitModel, activeFit } = useFitProduct();

  const { mannequin, modelVideo } = useSelector(selectProductMannequinAndModel);

  return (
    <Styled.ActiveProductContainer>
      <Path />
      {!status.loading && (
        <ContainerFull>
          <div className="active-product__fit-buttons--box">
            <EditorFitButtons
              activeFit={activeFit}
              onModel={() => handleFitModel({ src: modelVideo })}
              onMannequin={() => handleFitMannequin({ src: mannequin })}
            />
          </div>

          <div className="product-main">
            <div className="product-main__product-view">
              <UI.ProductView productId={productId} />
            </div>

            <div className="product-main__product-info">
              <UI.ProductHeading productId={productId} />
              <UI.ProductDescription />
              <UI.ProductStyler productId={productId} />
              {/* <ProductShippingInfo /> */}
              <UI.ProductFooter />
            </div>
          </div>

          {/* <RelatedProducts /> */}
        </ContainerFull>
      )}

      {status.loading && <Spinner />}
    </Styled.ActiveProductContainer>
  );
}
