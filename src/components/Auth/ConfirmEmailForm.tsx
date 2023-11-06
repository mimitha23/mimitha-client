/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useAppSelector } from "store/hooks";
import { useTranslation } from "react-i18next";

import { Controller } from "react-hook-form";
import { useConfirmEmailQuery } from "hooks/api/Auth";
import { selectAuthStatus } from "store/selectors/auth.selectors";

import * as UI from "./components";
import { Spinner } from "components/Layouts";

interface ConfirmEmailFormT {
  onClosePopup: (e: React.MouseEvent) => void;
}

const ConfirmEmailForm: React.FC<ConfirmEmailFormT> = ({ onClosePopup }) => {
  const { t } = useTranslation();

  const status = useAppSelector(selectAuthStatus);
  const { form, confirmEmailQuery } = useConfirmEmailQuery();

  useEffect(() => {
    return () => {
      form.reset();
    };
  }, []);

  return (
    <UI.FormContainer onClosePopup={onClosePopup} onSubmit={confirmEmailQuery}>
      <Controller
        name="pin"
        control={form.control}
        render={({ field: { ref, onChange, ...field }, fieldState }) => (
          <UI.OTPField
            ref={ref}
            fieldProps={field}
            fieldStateProps={fieldState}
            onChange={(value: string) => onChange(value)}
          />
        )}
      />

      {status.error && <UI.FormError message={status.message} />}

      <UI.AuthActionsBox submitBtnCaption={t("auth.confirm") as string}>
        <UI.ConfirmEmailWarning />
      </UI.AuthActionsBox>

      {status.loading && <Spinner />}
    </UI.FormContainer>
  );
};

export default ConfirmEmailForm;
