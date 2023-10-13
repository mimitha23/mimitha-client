import { forwardRef } from "react";
import OtpInput from "react-otp-input";

import * as UI from "./";
import * as Styled from "./styles/OTPField.styled";

const OTPField = forwardRef(({ fieldProps, onChange, error }, ref) => {
  return (
    <Styled.OTPField>
      <OtpInput
        numInputs={6}
        {...fieldProps}
        onChange={(value) => onChange(+value)}
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

      {error && <UI.FormError message={error?.message} />}
    </Styled.OTPField>
  );
});

export default OTPField;
