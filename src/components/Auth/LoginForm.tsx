/* eslint-disable react-hooks/exhaustive-deps */
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { useLoginQuery } from "hooks/api/Auth";
import { Controller } from "react-hook-form";
import { selectAuthStatus } from "store/selectors/auth.selectors";

import * as UI from "./components";
import { Spinner } from "components/Layouts";

interface LoginFormT {
  onClosePopup: (e: React.MouseEvent) => void;
}

const LoginForm: React.FC<LoginFormT> = ({ onClosePopup }) => {
  const { t } = useTranslation();

  const status = useSelector(selectAuthStatus);

  const { form, loginQuery } = useLoginQuery();
  const onSwitchProcess = () => form.reset();

  return (
    <UI.FormContainer onClosePopup={onClosePopup} onSubmit={loginQuery}>
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

      {status.error && <UI.FormError message={status.message} />}

      <UI.AuthActionsBox
        showSwitch={true}
        showForgotPassword={true}
        onSwitchProcess={onSwitchProcess}
        submitBtnCaption={t("auth.login") as string}
      />

      <UI.FormDevider />

      <UI.GoogleButton />

      {status.loading && <Spinner />}
    </UI.FormContainer>
  );
};

export default LoginForm;
