import { useState } from "react";

import { ModalWindow } from "..";
import * as Styled from "./EditorFitButtons.styled";

function EditorFitButtons({ onModel, onMannequin, activeFit }) {
  const [activeFitModal, setActiveFitModal] = useState({
    name: "",
    isOpen: false,
  });

  function onModalClose() {
    setActiveFitModal({
      name: "",
      isOpen: false,
    });

    if (activeFitModal.name === "mannequin") onMannequin(true);
    else if (activeFitModal.name === "model") onModel(true);
  }

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
        მოარგეთ მანეკენს
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
        მოარგეთ მოდელს
      </button>

      <ModalWindow
        activeModal={activeFitModal.isOpen}
        closeModal={onModalClose}
      >
        <div className="fit-product__modal-box">
          <figure className="fit-product__modal-box--fig">
            <img src={activeFit} alt="" />
          </figure>
        </div>
      </ModalWindow>
    </Styled.EditorFitButtonsContainer>
  );
}

export default EditorFitButtons;
