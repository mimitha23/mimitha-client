/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import OtpInput from "react-otp-input";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { selectAuthStatus } from "store/selectors/authSelectors";
import { useConfirmEmailQuery } from "hooks/api/Auth";

import { Spinner } from "components/Layouts";
import { CloseXIcon } from "components/Layouts/Icons";

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
    <form
      className="auth-popup__form auth"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <button className="auth-popup__close-btn" onClick={onClosePopup}>
        <CloseXIcon />
      </button>

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

        {error.hasError && (
          <blockquote className="auth-popup__form-field--message">
            {error.pin.message}
          </blockquote>
        )}
      </div>

      {status.error && (
        <blockquote className="auth-popup__form-field--message">
          {status.message}
        </blockquote>
      )}

      <div className="login__register__box">
        <div className="registration-suggestion confirm-email">
          <span>{t("auth.confirm_email_message_primary")}</span>
          <span>{t("auth.confirm_email_message_secondary")}</span>
        </div>

        <button
          className="login-btn"
          onClick={(e) => {
            e.preventDefault();
            confirmEmail(pin);
          }}
        >
          {t("auth.confirm")}
        </button>
      </div>

      {status.loading && <Spinner />}
    </form>
  );
}
