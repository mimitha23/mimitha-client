import * as Styled from "./ModalWindow.styled";
import { CloseXIcon } from "../Icons/index";

interface ModalWindowT {
  backdrop?: boolean;
  activeModal: boolean;
  children: React.ReactNode;
  closeModal: (e: React.MouseEvent) => void;
}

const ModalWindow: React.FC<ModalWindowT> = ({
  children,
  closeModal,
  activeModal,
  backdrop = true,
}) => {
  return activeModal ? (
    <Styled.ModalWindowContainer
      className={activeModal ? "active-modal" : ""}
      backdrop={backdrop}
      onClick={closeModal}
    >
      <div className="content-box" onClick={(e) => e.stopPropagation()}>
        <div className="close-modal__btn-box">
          <button className="close-modal__btn" onClick={closeModal}>
            <CloseXIcon />
          </button>
        </div>
        {children}
      </div>
    </Styled.ModalWindowContainer>
  ) : (
    <></>
  );
};

export default ModalWindow;
