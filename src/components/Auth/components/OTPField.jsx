import OtpInput from "react-otp-input";

import * as UI from "./";
import * as Styled from "./styles/OTPField.styled";

export default function OTPField({ pin, setPin, error }) {
  return (
    <Styled.OTPField>
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

      {error.hasError && <UI.FormError message={error.pin.message} />}
    </Styled.OTPField>
  );
}
