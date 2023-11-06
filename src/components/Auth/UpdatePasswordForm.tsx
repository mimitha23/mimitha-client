/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "store/hooks";

import { Controller } from "react-hook-form";
import { useUpdatePasswordQuery } from "hooks/api/Auth";
import { selectAuthStatus } from "store/selectors/auth.selectors";

import * as UI from "./components";
import { Spinner } from "components/Layouts";

interface UpdatePasswordFormT {
  onClosePopup: (e: React.MouseEvent) => void;
}

const UpdatePasswordForm: React.FC<UpdatePasswordFormT> = ({
  onClosePopup,
}) => {
  const { t } = useTranslation();

  const status = useAppSelector(selectAuthStatus);

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
        submitBtnCaption={t("auth.update_password") as string}
      />

      {status.loading && <Spinner />}
    </UI.FormContainer>
  );
};

export default UpdatePasswordForm;
