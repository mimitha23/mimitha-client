import { ModalWindow } from "components/Layouts";
import * as Styled from "./styles/FitModal.styled";

export default function FitModal({
  activeFit,
  onModel,
  onMannequin,
  activeFitModal,
  setActiveFitModal,
}) {
  function onModalClose() {
    setActiveFitModal({
      name: "",
      isOpen: false,
    });

    if (activeFitModal.name === "mannequin") onMannequin({ reset: true });
    else if (activeFitModal.name === "model") onModel({ reset: true });
  }

  return (
    <ModalWindow activeModal={activeFitModal.isOpen} closeModal={onModalClose}>
      <Styled.FitModal>
        <figure className="modal-box--fig">
          {activeFitModal.name === "mannequin" ? (
            <img src={activeFit} alt="product media" />
          ) : (
            <video
              src={activeFit}
              alt="product media"
              controls={true}
              autoPlay={true}
            />
          )}
        </figure>
      </Styled.FitModal>
    </ModalWindow>
  );
}
