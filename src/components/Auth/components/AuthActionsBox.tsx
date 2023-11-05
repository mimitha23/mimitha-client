import * as UI from ".";
import * as Styled from "./styles/AuthActionsBox.styled";

interface AuthActionsBoxT {
  children?: React.ReactNode;
  submitBtnCaption: string;
  onSwitchProcess?: () => void;
  showSwitch?: boolean;
  showForgotPassword?: boolean;
}

const AuthActionsBox: React.FC<AuthActionsBoxT> = ({
  children,
  submitBtnCaption,
  onSwitchProcess,
  showSwitch = false,
  showForgotPassword = false,
}) => {
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
};

export default AuthActionsBox;
