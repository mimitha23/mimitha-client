import * as UI from "./index";
import * as Styled from "./styles/ProductInfo.styled";

export default function ProductInfo({ productId }) {
  return (
    <Styled.ProductInfo>
      <UI.ProductHeading productId={productId} />
      <UI.ProductDescription />
      <UI.ProductStyler productId={productId} />
      {/* <ProductShippingInfo /> */}
      <UI.ProductFooter />
    </Styled.ProductInfo>
  );
}
