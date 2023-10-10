import { useSelector } from "react-redux";

import { useFitProduct } from "hooks/layoutBase";
import { selectProductMannequinAndModel } from "store/selectors/activeProduct.selectors";

import { EditorFitButtons as FitButtons } from "components/Layouts";
import * as Styled from "./styles/EditorFitButtons.styled";

export default function EditorFitButtons() {
  const { handleFitMannequin, handleFitModel, activeFit } = useFitProduct();

  const { mannequin, modelVideo } = useSelector(selectProductMannequinAndModel);

  return (
    <Styled.EditorFitButtons>
      <FitButtons
        activeFit={activeFit}
        onModel={() => handleFitModel({ src: modelVideo })}
        onMannequin={() => handleFitMannequin({ src: mannequin })}
      />
    </Styled.EditorFitButtons>
  );
}
