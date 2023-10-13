/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { Controller } from "react-hook-form";
import { useConfirmEmailQuery } from "hooks/api/Auth";
import { selectAuthStatus } from "store/selectors/auth.selectors";

import * as UI from "./components";
import { Spinner } from "components/Layouts";

export default function ConfirmEmailForm({ onClosePopup }) {
  const { t } = useTranslation();

  const status = useSelector(selectAuthStatus);
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
        render={({
          field: { onChange, ref, ...field },
          fieldState: { error },
        }) => (
          <UI.OTPField
            fieldProps={{ ...field }}
            ref={ref}
            onChange={onChange}
            error={error}
          />
        )}
      />

      {status.error && <UI.FormError message={status.message} />}

      <UI.AuthActionsBox submitBtnCaption={t("auth.confirm")}>
        <UI.ConfirmEmailWarning />
      </UI.AuthActionsBox>

      {status.loading && <Spinner />}
    </UI.FormContainer>
  );
}
