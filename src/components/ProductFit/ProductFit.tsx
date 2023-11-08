import { ContainerFull } from "components/Layouts";
import { FitList, FitCombinationBox } from "./components";
import * as Styled from "./ProductFit.styled";

const ProductFit: React.FC = () => {
  return (
    <Styled.ProductFit>
      <ContainerFull>
        <FitCombinationBox />

        <FitList />
      </ContainerFull>
    </Styled.ProductFit>
  );
};

export default ProductFit;
