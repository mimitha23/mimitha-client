/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  selectIsOpenPopup,
  selectAuthOnGoingProcess,
} from "store/selectors/authSelectors";
import { useStartAuth } from "hooks/api/Auth";
import { authActions } from "store/reducers/authReducer";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ForgotPasswordForm from "./ForgotPasswordForm";
import * as Styled from "./AuthPopup.styled";

export default function AuthPopUp() {
  const dispatch = useDispatch();

  const openPopup = useSelector(selectIsOpenPopup);
  const onGoingProcess = useSelector(selectAuthOnGoingProcess);

  const isRegistrationProcess = onGoingProcess === "registration";
  const isAuthenticationProcess = onGoingProcess === "authorization";
  const isForgotPasswordProcess = onGoingProcess === "forgot_password";

  const { delayAuth } = useStartAuth();

  useEffect(() => {
    return () => {
      dispatch(authActions.cleanUpAuth());
    };
  }, []);

  return (
    openPopup &&
    createPortal(
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
      </Styled.AuthPopup>,
      document.getElementById("portal")
    )
  );
}
