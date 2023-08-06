/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";

import { useStartAuth } from "hooks/api/Auth";
import { authActions, AUTH_PROCESSES } from "store/reducers/authReducer";
import { selectAuthOnGoingProcess } from "store/selectors/authSelectors";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ForgotPasswordForm from "./ForgotPasswordForm";
import ConfirmEmailForm from "./ConfirmEmailForm";
import UpdatePasswordForm from "./UpdatePasswordForm";
import * as Styled from "./AuthPopup.styled";

export default function AuthPopUp() {
  const dispatch = useDispatch();

  const onGoingProcess = useSelector(selectAuthOnGoingProcess);

  const isAuthenticationProcess =
    onGoingProcess === AUTH_PROCESSES.authorization;
  const isForgotPasswordProcess =
    onGoingProcess === AUTH_PROCESSES.forgot_password;
  const isRegistrationProcess = onGoingProcess === AUTH_PROCESSES.registration;
  const isConfirmEmailProcess = onGoingProcess === AUTH_PROCESSES.confirm_email;
  const isUpdatePasswordProcess =
    onGoingProcess === AUTH_PROCESSES.update_password;

  const { delayAuth } = useStartAuth();

  useEffect(() => {
    return () => {
      dispatch(authActions.cleanUpAuth());
    };
  }, []);

  return createPortal(
    <Styled.AuthPopup
      className="portal-container active-modal"
      onClick={delayAuth}
    >
      <div className="animate-layover"></div>
      {isAuthenticationProcess && <LoginForm onClosePopup={delayAuth} />}
      {isRegistrationProcess && <RegisterForm onClosePopup={delayAuth} />}
      {isForgotPasswordProcess && (
        <ForgotPasswordForm onClosePopup={delayAuth} />
      )}
      {isConfirmEmailProcess && <ConfirmEmailForm onClosePopup={delayAuth} />}
      {isUpdatePasswordProcess && (
        <UpdatePasswordForm onClosePopup={delayAuth} />
      )}
    </Styled.AuthPopup>,
    document.getElementById("portal")
  );
}
