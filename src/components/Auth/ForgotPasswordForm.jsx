/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";

import {
  selectLoginForm,
  selectAuthStatus,
} from "store/selectors/authSelectors";
import { useLoginQuery } from "hooks/api/Auth";
import { authActions } from "store/reducers/authReducer";

import { Spinner } from "components/Layouts";
import { CloseXIcon, ArrowLeftIcon } from "components/Layouts/Icons";
import FormInputField from "./components/FormInputField";

export default function ForgotPasswordForm({ onClosePopup }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const form = useSelector(selectLoginForm);
  const status = useSelector(selectAuthStatus);

  const { login, error, resetError } = useLoginQuery();

  const onBack = () => {
    error.hasError && resetError();
    dispatch(authActions.changeAuthOnGoingProcess("authorization"));
  };

  const handleForm = useCallback((e) => {
    dispatch(
      authActions.setLoginForm({
        key: e.target.name,
        value: e.target.value,
      })
    );
  }, []);

  return (
    <form
      className="auth-popup__form auth"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <button className="auth-popup__close-btn" onClick={onClosePopup}>
        <CloseXIcon />
      </button>

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

      {status.error && (
        <blockquote className="auth-popup__form-field--message">
          {status.message}
        </blockquote>
      )}

      <div className="login__register__box">
        <button className="login-btn" onClick={login}>
          {t("auth.send")}
        </button>
      </div>

      {status.loading && <Spinner />}
    </form>
  );
}
