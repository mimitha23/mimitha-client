import { ContainerFull } from "components/Layouts";
import { FitList, FitCombinationBox } from "./components";
import * as Styled from "./ProductFit.styled";

export default function ProductFit() {
  return (
    <Styled.ProductFit>
      <ContainerFull>
        <FitCombinationBox />
        <FitList />
      </ContainerFull>
    </Styled.ProductFit>
  );
}
