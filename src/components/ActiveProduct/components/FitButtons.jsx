import { useSelector } from "react-redux";

import { useFitProduct } from "hooks/layoutBase";
import { selectProductMannequinAndModel } from "store/selectors/activeProduct.selectors";

import { FitButtons as FitButtonsBox } from "components/Layouts";
import * as Styled from "./styles/FitButtons.styled";

export default function FitButtons() {
  const { handleFitMannequin, handleFitModel, activeFit } = useFitProduct();

  const { mannequin, modelVideo } = useSelector(selectProductMannequinAndModel);

  return (
    <Styled.FitButtons>
      <FitButtonsBox
        activeFit={activeFit}
        onModel={() => handleFitModel({ src: modelVideo })}
        onMannequin={() => handleFitMannequin({ src: mannequin })}
      />
    </Styled.FitButtons>
  );
}
