import { CloseXIcon } from "components/Layouts/Icons";
import * as Styled from "./styles/FormContainer.styled";

import { ReactHookFormSubmitEventT } from "interface/form.types";

interface FormContainerT {
  children: React.ReactNode;
  onSubmit: ReactHookFormSubmitEventT;
  onClosePopup: (e: React.MouseEvent) => void;
}

const FormContainer: React.FC<FormContainerT> = ({
  children,
  onSubmit,
  onClosePopup,
}) => {
  return (
    <Styled.FormContainer
      onSubmit={onSubmit}
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
};

export default FormContainer;
