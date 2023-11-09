import { useState } from "react";
import { useTranslation } from "react-i18next";

import * as UI from "./components/index";
import * as Styled from "./FitButtons.styled";

interface FitButtonsT {
  activeFit: string;
  onModel: () => void;
  onMannequin: () => void;
}

const FitButtons: React.FC<FitButtonsT> = (props) => {
  const { t } = useTranslation();

  const [activeFitModal, setActiveFitModal] = useState({
    name: "",
    isOpen: false,
  });

  const onHandleMannequin = () => {
    props.onMannequin();
    setActiveFitModal({ name: "mannequin", isOpen: true });
  };

  const onHandleModel = () => {
    props.onModel();
    setActiveFitModal({ name: "model", isOpen: true });
  };

  return (
    <Styled.FitButtonsContainer data-editor-fit-buttons>
      <button className="fit-btn" onClick={onHandleMannequin}>
        {t("crossover.fit_mannequin")}
      </button>

      <button className="fit-btn" onClick={onHandleModel}>
        {t("crossover.fit_model")}
      </button>

      <UI.FitModal
        onModel={props.onModel}
        activeFit={props.activeFit}
        onMannequin={props.onMannequin}
        activeFitModal={activeFitModal}
        setActiveFitModal={setActiveFitModal}
      />
    </Styled.FitButtonsContainer>
  );
};

export default FitButtons;
