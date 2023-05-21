import { ContainerFull } from "components/Layouts";
import { FitList, FitCombinationBox } from "./components";
import * as Styled from "./ProductFit.styled";

function ProductFit() {
  return (
    <ContainerFull>
      <Styled.ProductFitContainer>
        <FitCombinationBox />
        <FitList />
      </Styled.ProductFitContainer>
    </ContainerFull>
  );
}

export default ProductFit;
