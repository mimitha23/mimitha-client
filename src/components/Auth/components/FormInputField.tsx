import { useState } from "react";

import * as UI from ".";
import * as Styled from "./styles/FormInputField.styled";

import { ControllerFieldState } from "react-hook-form";
import { ReactHookFormFieldPropsT } from "interface/form.types";

interface FormInputFieldT {
  id: string;
  type: string;
  label: string;
  placeholder?: string;
  fieldStateProps: ControllerFieldState;
  fieldProps: ReactHookFormFieldPropsT;
}

const FormInputField: React.FC<FormInputFieldT> = ({
  type,
  id,
  label,
  fieldProps,
  placeholder,
  fieldStateProps,
}) => {
  const [passwordInputType, setPasswordInputType] = useState<
    "password" | "text"
  >("password");

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

      {fieldStateProps.error && (
        <UI.FormError message={fieldStateProps.error?.message || ""} />
      )}
    </Styled.FormInputField>
  );
};

export default FormInputField;
