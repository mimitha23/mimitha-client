import * as UI from "./index";
import * as Styled from "./styles/ProductInfo.styled";

interface ProductInfoT {
  productId: string;
}

const ProductInfo: React.FC<ProductInfoT> = ({ productId }) => {
  return (
    <Styled.ProductInfo>
      <UI.ProductHeading productId={productId} />

      <UI.ProductDescription />

      <UI.ProductStyler productId={productId} />

      {/* <ProductShippingInfo /> */}

      <UI.ProductFooter />
    </Styled.ProductInfo>
  );
};

export default ProductInfo;
