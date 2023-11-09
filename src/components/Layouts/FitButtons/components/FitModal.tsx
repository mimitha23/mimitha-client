import { ModalWindow } from "components/Layouts";
import * as Styled from "./styles/FitModal.styled";
import React from "react";

type FitModalStateT = {
  name: string;
  isOpen: boolean;
};

interface FitModalT {
  activeFit: string;
  onModel: () => void;
  onMannequin: () => void;
  activeFitModal: FitModalStateT;
  setActiveFitModal: React.Dispatch<React.SetStateAction<FitModalStateT>>;
}

const FitModal: React.FC<FitModalT> = (props) => {
  function onModalClose() {
    props.setActiveFitModal({ name: "", isOpen: false });

    if (props.activeFitModal.name === "mannequin") props.onMannequin();
    else if (props.activeFitModal.name === "model") props.onModel();
  }

  return (
    <ModalWindow
      closeModal={onModalClose}
      activeModal={props.activeFitModal.isOpen}
    >
      <Styled.FitModal>
        <figure className="modal-box--fig">
          {props.activeFitModal.name === "mannequin" ? (
            <img src={props.activeFit} alt="product media" />
          ) : (
            <video src={props.activeFit} controls={true} autoPlay={true} />
          )}
        </figure>
      </Styled.FitModal>
    </ModalWindow>
  );
};

export default FitModal;
