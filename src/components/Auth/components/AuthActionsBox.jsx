import * as UI from "./";
import * as Styled from "./styles/AuthActionsBox.styled";

export default function AuthActionsBox({
  children,
  onSubmit,
  submitBtnCaption,
  onSwitchProcess,
  showSwitch = false,
  showForgotPassword = false,
}) {
  return (
    <Styled.AuthActionsBox>
      {children}

      <UI.LoginButton onSubmit={onSubmit} submitBtnCaption={submitBtnCaption} />

      {showSwitch && (
        <UI.SwitchProcessField
          onSwitchProcess={onSwitchProcess}
          showForgotPassword={showForgotPassword}
        />
      )}
    </Styled.AuthActionsBox>
  );
}
