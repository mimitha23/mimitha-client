import { CloseXIcon } from "components/Layouts/Icons";
import * as Styled from "./styles/FormContainer.styled";

export default function FormContainer({ children, onClosePopup }) {
  return (
    <Styled.FormContainer
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <button className="auth-popup__close-btn" onClick={onClosePopup}>
        <CloseXIcon />
      </button>
      {children}
    </Styled.FormContainer>
  );
}
