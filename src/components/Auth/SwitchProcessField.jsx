import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { authActions } from "store/reducers/authReducer";

export default function SwitchProcessField({
  onGoingProcess,
  onSwitchProcess,
}) {
  const dispatch = useDispatch();

  const { t } = useTranslation();

  function onSwitch(e) {
    e.preventDefault();
    dispatch(authActions.changeAuthOnGoingProcess());
    dispatch(authActions.resetForms());
    onSwitchProcess();
  }

  return (
    <div className="registration-suggestion">
      <span>
        {onGoingProcess === "authorization"
          ? t("auth.not_have_an_account")
          : onGoingProcess === "registration"
          ? t("auth.have_an_account")
          : ""}
      </span>
      &nbsp;
      <button onClick={onSwitch}>
        {onGoingProcess === "authorization"
          ? t("auth.registration")
          : onGoingProcess === "registration"
          ? t("auth.login")
          : ""}
      </button>
    </div>
  );
}
