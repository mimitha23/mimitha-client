import { createPortal } from "react-dom";
import { useAuthContext } from "providers/AuthProvider";

import Form from "./Form";
import * as Styled from "./AuthPopup.styled";

export default function AuthPopUp() {
  const { openPopup } = useAuthContext();

  return (
    openPopup &&
    createPortal(
      <Styled.AuthPopup className="portal-container active-modal">
        <Form />
      </Styled.AuthPopup>,
      document.getElementById("portal")
    )
  );
}
