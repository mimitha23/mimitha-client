import OtpInput from "react-otp-input";

import * as UI from ".";
import * as Styled from "./styles/OTPField.styled";

import { ControllerFieldState } from "react-hook-form";
import { ReactHookFormFieldPropsT } from "interface/form.types";

interface OTPFieldT {
  ref: ReactHookFormFieldPropsT["ref"];
  onChange: (value: string) => void;
  fieldStateProps: ControllerFieldState;
  fieldProps: Omit<ReactHookFormFieldPropsT, "ref" | "onChange">;
}

const OTPField: React.FC<OTPFieldT> = ({
  onChange,
  fieldProps,
  fieldStateProps,
}) => {
  return (
    <Styled.OTPField>
      <OtpInput
        numInputs={6}
        {...fieldProps}
        onChange={(value) => onChange(value)}
        renderSeparator={<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>}
        renderInput={(props) => (
          <input
            {...{
              ...props,
              // ref,
              type: "number",
              className: "otp-inp",
              placeholder: "*",
            }}
          />
        )}
      />

      {fieldStateProps.error && (
        <UI.FormError message={fieldStateProps.error?.message || ""} />
      )}
    </Styled.OTPField>
  );
};

export default OTPField;
