import { useState, memo } from "react";

import ShowPasswordButton from "./ShowPasswordButton";
import FormError from "./FormError";

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
          <ShowPasswordButton
            type={type}
            passwordInputType={passwordInputType}
            setPasswordInputType={setPasswordInputType}
          />
        )}
      </div>

      {error.hasError && <FormError message={error.message} />}
    </div>
  );
});
