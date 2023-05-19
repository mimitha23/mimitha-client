import { FitList, FitView } from "./components";
import * as Styled from "./ProductFit.styled";

function ProductFit() {
  return (
    <Styled.ProductFitContainer>
      <FitView />
      <FitList />
    </Styled.ProductFitContainer>
  );
}

export default ProductFit;
