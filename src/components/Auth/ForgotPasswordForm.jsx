/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";

import {
  selectAuthStatus,
  selectForgotPasswordForm,
} from "store/selectors/authSelectors";
import { useForgotPasswordQuery } from "hooks/api/Auth";
import { authActions, AUTH_PROCESSES } from "store/reducers/authReducer";

import { Spinner } from "components/Layouts";
import FormInputField from "./components/FormInputField";
import FormContainer from "./components/FormContainer";
import { ArrowLeftIcon } from "components/Layouts/Icons";
import FormError from "./components/FormError";
import AuthActionsBox from "./components/AuthActionsBox";

export default function ForgotPasswordForm({ onClosePopup }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const form = useSelector(selectForgotPasswordForm);
  const status = useSelector(selectAuthStatus);

  const { forgotPassword, error, resetError } = useForgotPasswordQuery();

  const onBack = () => {
    error.hasError && resetError();
    dispatch(
      authActions.changeAuthOnGoingProcess(AUTH_PROCESSES.authorization)
    );
  };

  const handleForm = useCallback((e) => {
    dispatch(
      authActions.setForgotPasswordForm({
        key: e.target.name,
        value: e.target.value,
      })
    );
  }, []);

  return (
    <FormContainer className="auth" onClosePopup={onClosePopup}>
      <button className="auth-popup__back-btn" onClick={onBack}>
        <ArrowLeftIcon />
        <span>{t("auth.login")}</span>
      </button>

      <FormInputField
        id="email"
        label={t("auth.email")}
        type="email"
        name="email"
        placeholder="user@io.com"
        value={form.email}
        error={error.email}
        onChange={handleForm}
      />

      {status.error && <FormError message={status.message} />}

      <AuthActionsBox
        submitBtnCaption={t("auth.send")}
        onSubmit={forgotPassword}
      />

      {status.loading && <Spinner />}
    </FormContainer>
  );
}
