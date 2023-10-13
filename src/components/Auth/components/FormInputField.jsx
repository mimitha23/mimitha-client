import { useState, memo } from "react";

import * as UI from "./";
import * as Styled from "./styles/FormInputField.styled";

export default memo(function FormInputField({
  type,
  id,
  label,
  fieldProps,
  error,
  placeholder,
}) {
  const [passwordInputType, setPasswordInputType] = useState("password");

  return (
    <Styled.FormInputField>
      <label htmlFor={id} className="form-field__label">
        {label}
      </label>

      <div className="form-field__input-box">
        <input
          id={id}
          className="form-field__input"
          type={type === "password" ? passwordInputType : type}
          placeholder={placeholder || ""}
          {...fieldProps}
        />

        {type === "password" && (
          <UI.ShowPasswordButton
            type={type}
            passwordInputType={passwordInputType}
            setPasswordInputType={setPasswordInputType}
          />
        )}
      </div>

      {error && <UI.FormError message={error?.message} />}
    </Styled.FormInputField>
  );
});
