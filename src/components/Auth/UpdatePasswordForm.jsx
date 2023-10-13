/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { Controller } from "react-hook-form";
import { useUpdatePasswordQuery } from "hooks/api/Auth";
import { selectAuthStatus } from "store/selectors/auth.selectors";

import * as UI from "./components";
import { Spinner } from "components/Layouts";

export default function UpdatePasswordForm({ onClosePopup }) {
  const { t } = useTranslation();

  const status = useSelector(selectAuthStatus);

  const { form, updatePasswordQuery } = useUpdatePasswordQuery();

  useEffect(() => {
    return () => {
      form.reset();
    };
  }, []);

  return (
    <UI.FormContainer
      onClosePopup={onClosePopup}
      onSubmit={updatePasswordQuery}
    >
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

      <UI.AuthActionsBox submitBtnCaption={t("auth.update_password")} />

      {status.loading && <Spinner />}
    </UI.FormContainer>
  );
}
