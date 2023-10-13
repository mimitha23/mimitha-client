/* eslint-disable react-hooks/exhaustive-deps */
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { Controller } from "react-hook-form";
import { useRegistrationQuery } from "hooks/api/Auth";
import { selectAuthStatus } from "store/selectors/auth.selectors";

import * as UI from "./components";
import { Spinner } from "components/Layouts";

export default function RegisterForm({ onClosePopup }) {
  const { t } = useTranslation();

  const status = useSelector(selectAuthStatus);

  const { form, registrationQuery } = useRegistrationQuery();

  const onSwitchProcess = () => form.reset();

  return (
    <UI.FormContainer onClosePopup={onClosePopup} onSubmit={registrationQuery}>
      <Controller
        name="email"
        control={form.control}
        render={({ field, fieldState: { error } }) => (
          <UI.FormInputField
            id="email"
            label={t("auth.email")}
            type="email"
            placeholder="user@io.com"
            fieldProps={{ ...field }}
            error={error}
          />
        )}
      />

      <Controller
        name="username"
        control={form.control}
        render={({ field, fieldState: { error } }) => (
          <UI.FormInputField
            id="username"
            label={t("auth.username")}
            type="text"
            placeholder="user.mimitha"
            fieldProps={{ ...field }}
            error={error}
          />
        )}
      />

      <Controller
        name="password"
        control={form.control}
        render={({ field, fieldState: { error } }) => (
          <UI.FormInputField
            id="password"
            label={t("auth.password")}
            type="password"
            placeholder="******"
            fieldProps={{ ...field }}
            error={error}
          />
        )}
      />

      <Controller
        name="confirmPassword"
        control={form.control}
        render={({ field, fieldState: { error } }) => (
          <UI.FormInputField
            id="confirm-password"
            label={t("auth.confirm_password")}
            type="password"
            placeholder="******"
            fieldProps={{ ...field }}
            error={error}
          />
        )}
      />

      {status.error && <UI.FormError message={status.message} />}

      <UI.AuthActionsBox
        submitBtnCaption={t("auth.registration")}
        onSwitchProcess={onSwitchProcess}
        showSwitch={true}
      />

      <UI.FormDevider />

      <UI.GoogleButton />

      {status.loading && <Spinner />}
    </UI.FormContainer>
  );
}
