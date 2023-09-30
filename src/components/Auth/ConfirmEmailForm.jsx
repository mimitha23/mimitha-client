/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import OtpInput from "react-otp-input";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { selectAuthStatus } from "store/selectors/authSelectors";
import { useConfirmEmailQuery } from "hooks/api/Auth";

import FormContainer from "./components/FormContainer";
import { Spinner } from "components/Layouts";
import FormError from "./components/FormError";
import AuthActionsBox from "./components/AuthActionsBox";

export default function ConfirmEmailForm({ onClosePopup }) {
  const { t } = useTranslation();

  const status = useSelector(selectAuthStatus);
  const { confirmEmail, error, resetError } = useConfirmEmailQuery();

  const [pin, setPin] = useState("");

  useEffect(() => {
    return () => {
      resetError();
    };
  }, []);

  return (
    <FormContainer className="auth" onClosePopup={onClosePopup}>
      <div className="otp-box">
        <OtpInput
          value={pin}
          onChange={setPin}
          numInputs={6}
          renderSeparator={<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>}
          renderInput={(props) => (
            <input
              {...{
                ...props,
                className: "otp-inp",
                placeholder: "*",
              }}
            />
          )}
        />

        {error.hasError && <FormError message={error.pin.message} />}
      </div>

      {status.error && <FormError message={status.message} />}

      <AuthActionsBox
        submitBtnCaption={t("auth.confirm")}
        onSubmit={(e) => {
          e.preventDefault();
          confirmEmail(pin);
        }}
      >
        <div className="registration-suggestion confirm-email">
          <span>{t("auth.confirm_email_message_primary")}</span>
          <span>{t("auth.confirm_email_message_secondary")}</span>
        </div>
      </AuthActionsBox>

      {status.loading && <Spinner />}
    </FormContainer>
  );
}
