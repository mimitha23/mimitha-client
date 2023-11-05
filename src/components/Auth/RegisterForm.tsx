/* eslint-disable react-hooks/exhaustive-deps */
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { Controller } from "react-hook-form";
import { useRegistrationQuery } from "hooks/api/Auth";
import { selectAuthStatus } from "store/selectors/auth.selectors";

import * as UI from "./components";
import { Spinner } from "components/Layouts";

interface RegisterFormT {
  onClosePopup: (e: React.MouseEvent) => void;
}

const RegisterForm: React.FC<RegisterFormT> = ({ onClosePopup }) => {
  const { t } = useTranslation();

  const status = useSelector(selectAuthStatus);

  const { form, registrationQuery } = useRegistrationQuery();

  const onSwitchProcess = () => form.reset();

  return (
    <UI.FormContainer onClosePopup={onClosePopup} onSubmit={registrationQuery}>
      <Controller
        name="email"
        control={form.control}
        render={({ field, fieldState }) => (
          <UI.FormInputField
            id="email"
            type="email"
            placeholder="user@mail.com"
            label={t("auth.email") as string}
            fieldProps={field}
            fieldStateProps={fieldState}
          />
        )}
      />

      <Controller
        name="username"
        control={form.control}
        render={({ field, fieldState }) => (
          <UI.FormInputField
            id="username"
            type="text"
            placeholder="user.mimitha"
            label={t("auth.username") as string}
            fieldProps={field}
            fieldStateProps={fieldState}
          />
        )}
      />

      <Controller
        name="password"
        control={form.control}
        render={({ field, fieldState }) => (
          <UI.FormInputField
            id="password"
            type="password"
            placeholder="******"
            label={t("auth.password") as string}
            fieldProps={field}
            fieldStateProps={fieldState}
          />
        )}
      />

      <Controller
        name="confirmPassword"
        control={form.control}
        render={({ field, fieldState }) => (
          <UI.FormInputField
            id="confirm-password"
            type="password"
            placeholder="******"
            label={t("auth.confirm_password") as string}
            fieldProps={field}
            fieldStateProps={fieldState}
          />
        )}
      />

      {status.error && <UI.FormError message={status.message} />}

      <UI.AuthActionsBox
        showSwitch={true}
        onSwitchProcess={onSwitchProcess}
        submitBtnCaption={t("auth.registration") as string}
      />

      <UI.FormDevider />

      <UI.GoogleButton />

      {status.loading && <Spinner />}
    </UI.FormContainer>
  );
};

export default RegisterForm;
