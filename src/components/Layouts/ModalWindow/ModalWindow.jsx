import * as Styled from "./ModalWindow.styled";
import { AiOutlineClose } from "react-icons/ai";

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
            <AiOutlineClose />
          </button>
          {children}
        </div>
      </Styled.ModalWindowContainer>
    )
  );
}

export default ModalWindow;
