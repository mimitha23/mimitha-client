/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";

import { useStartAuth } from "hooks/api/Auth";
import { useIsAuthenticated } from "hooks/auth";
import { authActions, AUTH_PROCESSES } from "store/reducers/auth.reducer";
import { selectAuthOnGoingProcess } from "store/selectors/auth.selectors";

import * as UI from "./components";
import * as FormType from ".";
import * as Styled from "./AuthPopup.styled";

const AuthPopUp: React.FC = () => {
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

  const { isAuthenticated, loading } = useIsAuthenticated();

  useEffect(() => {
    if (isAuthenticated) dispatch(authActions.cleanUpAuth());
  }, [isAuthenticated, loading]);

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
      <UI.AnimateLayover />

      {isAuthenticationProcess && (
        <FormType.LoginForm onClosePopup={delayAuth} />
      )}

      {isRegistrationProcess && (
        <FormType.RegisterForm onClosePopup={delayAuth} />
      )}

      {isForgotPasswordProcess && (
        <FormType.ForgotPasswordForm onClosePopup={delayAuth} />
      )}

      {isConfirmEmailProcess && (
        <FormType.ConfirmEmailForm onClosePopup={delayAuth} />
      )}

      {isUpdatePasswordProcess && (
        <FormType.UpdatePasswordForm onClosePopup={delayAuth} />
      )}
    </Styled.AuthPopup>,
    document.getElementById("portal") as HTMLElement
  );
};

export default AuthPopUp;
