import { useState, memo } from "react";
import { useTranslation } from "react-i18next";
import { EyeShowIcon, EyeHideIcon } from "components/Layouts/Icons";

export default memo(function FormInputField({
  type,
  id,
  name,
  label,
  value,
  error,
  onChange,
  placeholder,
}) {
  const { t } = useTranslation();

  const [passwordInputType, setPasswordInputType] = useState("password");

  return (
    <div className="auth-popup__form-field">
      <label htmlFor={id} className="auth-popup__form-field--label">
        {label}
      </label>

      <div className="auth-popup__form-field--input---box">
        <input
          id={id}
          className="auth-popup__form-field--input"
          type={type === "password" ? passwordInputType : type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder || ""}
        />

        {type === "password" && (
          <button
            title={
              type === "password" && passwordInputType === "password"
                ? t("auth.show_password")
                : type === "password" && passwordInputType === "text"
                ? t("auth.hide_password")
                : ""
            }
            onClick={(e) => {
              e.preventDefault();
              setPasswordInputType((prev) =>
                prev === "password" ? "text" : "password"
              );
            }}
          >
            {passwordInputType === "password" ? (
              <EyeShowIcon />
            ) : (
              <EyeHideIcon />
            )}
          </button>
        )}
      </div>

      {error.hasError && (
        <blockquote className="auth-popup__form-field--message">
          {error.message}
        </blockquote>
      )}
    </div>
  );
});
