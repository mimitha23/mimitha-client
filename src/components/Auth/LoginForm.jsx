/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";

import {
  selectLoginForm,
  selectAuthStatus,
} from "store/selectors/auth.selectors";
import { useLoginQuery } from "hooks/api/Auth";
import { authActions } from "store/reducers/auth.reducer";

import { Spinner } from "components/Layouts";
import FormContainer from "./components/FormContainer";
import FormInputField from "./components/FormInputField";
import FormDevider from "./components/FormDevider";
import GoogleButton from "./components/GoogleButton";
import FormError from "./components/FormError";
import AuthActionsBox from "./components/AuthActionsBox";

export default function LoginForm({ onClosePopup }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const form = useSelector(selectLoginForm);
  const status = useSelector(selectAuthStatus);

  const { login, error, resetError } = useLoginQuery();

  const onSwitchProcess = () => error.hasError && resetError();

  const handleForm = useCallback((e) => {
    dispatch(
      authActions.setLoginForm({
        key: e.target.name,
        value: e.target.value,
      })
    );
  }, []);

  return (
    <FormContainer className="auth" onClosePopup={onClosePopup}>
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

      {status.error && <FormError message={status.message} />}

      <AuthActionsBox
        submitBtnCaption={t("auth.login")}
        onSubmit={login}
        showSwitch={true}
        showForgotPassword={true}
        onSwitchProcess={onSwitchProcess}
      />

      <FormDevider />

      <GoogleButton />

      {status.loading && <Spinner />}
    </FormContainer>
  );
}
