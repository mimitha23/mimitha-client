import SwitchProcessField from "./SwitchProcessField";

export default function AuthActionsBox({
  children,
  onSubmit,
  submitBtnCaption,
  onSwitchProcess,
  showSwitch = false,
  showForgotPassword = false,
}) {
  return (
    <div className="login__register__box">
      {children}

      <button className="login-btn" onClick={onSubmit}>
        {submitBtnCaption}
      </button>

      {showSwitch && (
        <SwitchProcessField
          onSwitchProcess={onSwitchProcess}
          showForgotPassword={showForgotPassword}
        />
      )}
    </div>
  );
}
