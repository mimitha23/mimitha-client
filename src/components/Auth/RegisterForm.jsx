/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";

import {
  selectRegisterForm,
  selectAuthStatus,
} from "store/selectors/authSelectors";
import { useRegistrationQuery } from "hooks/api/Auth";
import { authActions } from "store/reducers/authReducer";

import { CloseXIcon } from "components/Layouts/Icons";
import { Spinner } from "components/Layouts";
import GoogleButton from "./components/GoogleButton";
import FormDevider from "./components/FormDevider";
import SwitchProcessField from "./components/SwitchProcessField";
import FormInputField from "./components/FormInputField";

export default function RegisterForm({ onClosePopup }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const form = useSelector(selectRegisterForm);
  const status = useSelector(selectAuthStatus);

  const { registration, error, resetError } = useRegistrationQuery();

  const onSwitchProcess = () => error.hasError && resetError();

  const handleForm = useCallback((e) => {
    dispatch(
      authActions.setRegisterForm({
        key: e.target.name,
        value: e.target.value,
      })
    );
  }, []);

  return (
    <form
      className="auth-popup__form reg"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <button className="auth-popup__close-btn" onClick={onClosePopup}>
        <CloseXIcon />
      </button>

      <FormInputField
        id="email"
        label={t("auth.email")}
        type="email"
        name="email"
        placeholder="user@io.com"
        value={form.email}
        onChange={handleForm}
        error={error.email}
      />

      <FormInputField
        id="username"
        label={t("auth.username")}
        type="text"
        name="username"
        placeholder="user.mimitha"
        error={error.username}
        value={form.username}
        onChange={handleForm}
      />

      <FormInputField
        id="password"
        label={t("auth.password")}
        type="password"
        name="password"
        placeholder="******"
        error={error.password}
        value={form.password}
        onChange={handleForm}
      />

      <FormInputField
        id="confirm-password"
        label={t("auth.confirm_password")}
        type="password"
        name="confirm_password"
        placeholder="******"
        error={error.confirm_password}
        value={form.confirm_password}
        onChange={handleForm}
      />

      {status.error && (
        <blockquote className="auth-popup__form-field--message">
          {status.message}
        </blockquote>
      )}

      <div className="login__register__box">
        <button className="login-btn" onClick={registration}>
          {t("auth.registration")}
        </button>

        <SwitchProcessField onSwitchProcess={onSwitchProcess} />
      </div>

      <FormDevider />

      <GoogleButton />

      {status.loading && <Spinner />}
    </form>
  );
}
