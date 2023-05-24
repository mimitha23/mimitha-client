import { ContainerFull } from "components/Layouts";
import { FitList, FitCombinationBox } from "./components";
import * as Styled from "./ProductFit.styled";

function ProductFit() {
  return (
    <Styled.ProductFitContainer>
      <ContainerFull>
        <FitCombinationBox />
        <FitList />
      </ContainerFull>
    </Styled.ProductFitContainer>
  );
}

export default ProductFit;
