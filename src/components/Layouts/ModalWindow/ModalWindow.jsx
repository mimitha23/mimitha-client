import * as Styled from "./ModalWindow.styled";
import { CloseXIcon } from "../Icons/index";

function ModalWindow({ children, backdrop = true, activeModal, closeModal }) {
  return (
    activeModal && (
      <Styled.ModalWindowContainer
        className={activeModal ? "active-modal" : ""}
        backdrop={backdrop}
        onClick={closeModal}
      >
        <div className="content-box" onClick={(e) => e.stopPropagation()}>
          <button className="close-modal__btn" onClick={closeModal}>
            <CloseXIcon />
          </button>
          {children}
        </div>
      </Styled.ModalWindowContainer>
    )
  );
}

export default ModalWindow;
