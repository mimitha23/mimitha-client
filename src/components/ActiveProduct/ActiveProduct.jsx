import { useActiveProductQuery } from "hooks/api";
// import { useFitProduct } from "hooks/layoutBase";

import {
  // EditorFitButtons,s
  ContainerFull,
  // Path,
  Spinner,
} from "components/Layouts";
import {
  ProductHeading,
  ProductDescription,
  ProductStyler,
  ProductShippingInfo,
  ProductView,
  // ProductFooter,
  // RelatedProducts,
} from "./components";
import * as Styled from "./ActiveProductContainer.styled";

export default function ActiveProduct() {
  const { status, productId } = useActiveProductQuery();

  // const { handleFitMannequin, handleFitModel, activeFit } = useFitProduct();

  return (
    <Styled.ActiveProductContainer>
      {/* <Path /> */}
      {!status.loading && (
        <ContainerFull>
          {/* <div className="active-product__fit-buttons--box">
            <EditorFitButtons
              activeFit={activeFit}
              onModel={handleFitModel}
              onMannequin={handleFitMannequin}
            />
          </div> */}

          <div className="product-main">
            <div className="product-main__product-view">
              <ProductView productId={productId} />
            </div>

            <div className="product-main__product-info">
              <ProductHeading productId={productId} />
              <ProductDescription />
              <ProductStyler productId={productId} />
              <ProductShippingInfo />
              {/* <ProductFooter /> */}
            </div>
          </div>

          {/* <RelatedProducts /> */}
        </ContainerFull>
      )}

      {status.loading && <Spinner />}
    </Styled.ActiveProductContainer>
  );
}
