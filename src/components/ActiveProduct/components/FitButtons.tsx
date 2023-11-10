import { useAppSelector } from "store/hooks";

import { useFitProduct } from "hooks/layoutBase";
import { selectProductMannequinAndModel } from "store/selectors/activeProduct.selectors";

import { FitButtons as FitButtonsBox } from "components/Layouts";
import * as Styled from "./styles/FitButtons.styled";

const FitButtons: React.FC = () => {
  const { handleFitMannequin, handleFitModel, activeFit } = useFitProduct();

  const { mannequin, modelVideo } = useAppSelector(
    selectProductMannequinAndModel
  );

  const onModel = () => handleFitModel({ src: modelVideo });

  const onMannequin = () => handleFitMannequin({ src: mannequin });

  return (
    <Styled.FitButtons>
      <FitButtonsBox
        onModel={onModel}
        activeFit={activeFit}
        onMannequin={onMannequin}
      />
    </Styled.FitButtons>
  );
};

export default FitButtons;
