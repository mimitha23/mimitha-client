/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useAppSelector, useAppDispatch } from "store/hooks";

import { useStartAuth } from "hooks/api/Auth";
import { useIsAuthenticated } from "hooks/auth";
import { authActions } from "store/reducers/auth.reducer";
import { AUTH_PROCESSES } from "interface/store/auth.reducer.types";
import { selectAuthOnGoingProcess } from "store/selectors/auth.selectors";

import * as UI from "./components";
import * as FormType from ".";
import * as Styled from "./AuthPopup.styled";

const AuthPopUp: React.FC = () => {
  const dispatch = useAppDispatch();

  const onGoingProcess = useAppSelector(selectAuthOnGoingProcess);

  const isAuthenticationProcess =
    onGoingProcess === AUTH_PROCESSES.AUTHORIZATION;
  const isForgotPasswordProcess =
    onGoingProcess === AUTH_PROCESSES.FORGOT_PASSWORD;
  const isRegistrationProcess = onGoingProcess === AUTH_PROCESSES.REGISTRATION;
  const isConfirmEmailProcess = onGoingProcess === AUTH_PROCESSES.CONFIRM_EMAIl;
  const isUpdatePasswordProcess =
    onGoingProcess === AUTH_PROCESSES.UPDATE_PASSWORD;

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
