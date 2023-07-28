import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";

import { authActions } from "store/reducers/authReducer";
import { selectIsOpenPopup } from "store/selectors/authSelectors";

import Form from "./Form";
import * as Styled from "./AuthPopup.styled";

export default function AuthPopUp() {
  const dispatch = useDispatch();

  const openPopup = useSelector(selectIsOpenPopup);

  function onClosePopup(e) {
    e.preventDefault();
    dispatch(authActions.setOpenPopup(false));
  }

  return (
    openPopup &&
    createPortal(
      <Styled.AuthPopup
        className="portal-container active-modal"
        onClick={onClosePopup}
      >
        <div className="animate-layover"></div>
        <Form onClosePopup={onClosePopup} />
      </Styled.AuthPopup>,
      document.getElementById("portal")
    )
  );
}
