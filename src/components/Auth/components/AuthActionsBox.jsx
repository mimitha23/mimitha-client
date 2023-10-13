import * as UI from "./";
import * as Styled from "./styles/AuthActionsBox.styled";

export default function AuthActionsBox({
  children,
  submitBtnCaption,
  onSwitchProcess,
  showSwitch = false,
  showForgotPassword = false,
}) {
  return (
    <Styled.AuthActionsBox>
      {children}

      <UI.LoginButton submitBtnCaption={submitBtnCaption} />

      {showSwitch && (
        <UI.SwitchProcessField
          onSwitchProcess={onSwitchProcess}
          showForgotPassword={showForgotPassword}
        />
      )}
    </Styled.AuthActionsBox>
  );
}
