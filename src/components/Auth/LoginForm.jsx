/* eslint-disable react-hooks/exhaustive-deps */
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { useLoginQuery } from "hooks/api/Auth";
import { Controller } from "react-hook-form";
import { selectAuthStatus } from "store/selectors/auth.selectors";

import * as UI from "./components";
import { Spinner } from "components/Layouts";

export default function LoginForm({ onClosePopup }) {
  const { t } = useTranslation();

  const status = useSelector(selectAuthStatus);

  const { form, loginQuery } = useLoginQuery();
  const onSwitchProcess = () => form.reset();

  return (
    <UI.FormContainer onClosePopup={onClosePopup} onSubmit={loginQuery}>
      <Controller
        name="email"
        control={form.control}
        render={({ field, fieldState: { error } }) => (
          <UI.FormInputField
            id="email"
            type="email"
            label={t("auth.email")}
            placeholder="user@io.com"
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

      {status.error && <UI.FormError message={status.message} />}

      <UI.AuthActionsBox
        submitBtnCaption={t("auth.login")}
        showSwitch={true}
        showForgotPassword={true}
        onSwitchProcess={onSwitchProcess}
      />

      <UI.FormDevider />

      <UI.GoogleButton />

      {status.loading && <Spinner />}
    </UI.FormContainer>
  );
}
