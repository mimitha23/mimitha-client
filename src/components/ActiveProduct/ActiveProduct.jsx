import { useActiveProductQuery } from "hooks/api";

import * as UI from "./components";
import * as Styled from "./ActiveProductContainer.styled";
import { ContainerFull, Path, Spinner } from "components/Layouts";

export default function ActiveProduct() {
  const { status, productId } = useActiveProductQuery();

  return (
    <Styled.ActiveProductContainer>
      <Path />

      {!status.loading && (
        <ContainerFull>
          <UI.EditorFitButtons />

          <div className="product-main">
            <UI.ProductView productId={productId} />

            <UI.ProductInfo productId={productId} />
          </div>

          {/* <RelatedProducts /> */}
        </ContainerFull>
      )}

      {status.loading && <Spinner />}
    </Styled.ActiveProductContainer>
  );
}
