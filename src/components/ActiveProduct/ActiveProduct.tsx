import { useActiveProductQuery } from "hooks/api";

import * as UI from "./components";
import * as Styled from "./ActiveProductContainer.styled";
import { ContainerFull, Path, Spinner } from "components/Layouts";

const ActiveProduct: React.FC = () => {
  const { status, productId } = useActiveProductQuery();

  return (
    <Styled.ActiveProductContainer>
      <Path showSearch={false} />

      {!status.loading && (
        <ContainerFull>
          <UI.FitButtons />

          <div className="product-main">
            <UI.ProductView productId={productId || ""} />

            <UI.ProductInfo productId={productId || ""} />
          </div>

          {/* <RelatedProducts /> */}
        </ContainerFull>
      )}

      {status.loading && <Spinner />}
    </Styled.ActiveProductContainer>
  );
};

export default ActiveProduct;
