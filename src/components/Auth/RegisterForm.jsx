/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";

import {
  selectRegisterForm,
  selectAuthStatus,
} from "store/selectors/auth.selectors";
import { useRegistrationQuery } from "hooks/api/Auth";
import { authActions } from "store/reducers/auth.reducer";

import { Spinner } from "components/Layouts";
import FormContainer from "./components/FormContainer";
import GoogleButton from "./components/GoogleButton";
import FormDevider from "./components/FormDevider";
import FormInputField from "./components/FormInputField";
import FormError from "./components/FormError";
import AuthActionsBox from "./components/AuthActionsBox";

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
    <FormContainer onClosePopup={onClosePopup}>
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

      {status.error && <FormError message={status.message} />}

      <AuthActionsBox
        submitBtnCaption={t("auth.registration")}
        onSubmit={registration}
        onSwitchProcess={onSwitchProcess}
        showSwitch={true}
      />

      <FormDevider />

      <GoogleButton />

      {status.loading && <Spinner />}
    </FormContainer>
  );
}
