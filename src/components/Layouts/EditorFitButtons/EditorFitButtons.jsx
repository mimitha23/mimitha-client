import { useState } from "react";
import { useTranslation } from "react-i18next";

import * as UI from "./components/index";
import * as Styled from "./EditorFitButtons.styled";

export default function EditorFitButtons({ onModel, onMannequin, activeFit }) {
  const { t } = useTranslation();

  const [activeFitModal, setActiveFitModal] = useState({
    name: "",
    isOpen: false,
  });

  return (
    <Styled.EditorFitButtonsContainer data-editor-fit-buttons>
      <button
        className="fit-btn"
        onClick={() => {
          onMannequin();
          setActiveFitModal({
            name: "mannequin",
            isOpen: true,
          });
        }}
      >
        {t("crossover.fit_mannequin")}
      </button>

      <button
        className="fit-btn"
        onClick={() => {
          onModel();
          setActiveFitModal({
            name: "model",
            isOpen: true,
          });
        }}
      >
        {t("crossover.fit_model")}
      </button>

      <UI.FitModal
        activeFit={activeFit}
        onModel={onModel}
        onMannequin={onMannequin}
        activeFitModal={activeFitModal}
        setActiveFitModal={setActiveFitModal}
      />
    </Styled.EditorFitButtonsContainer>
  );
}
