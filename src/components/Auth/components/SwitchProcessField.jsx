import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { authActions, AUTH_PROCESSES } from "store/reducers/authReducer";
import { selectAuthOnGoingProcess } from "store/selectors/authSelectors";

export default function SwitchProcessField({
  onSwitchProcess,
  showForgotPassword,
}) {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onGoingProcess = useSelector(selectAuthOnGoingProcess);

  function onSwitch(e) {
    e.preventDefault();
    dispatch(
      authActions.changeAuthOnGoingProcess(
        onGoingProcess === AUTH_PROCESSES.authorization
          ? AUTH_PROCESSES.registration
          : AUTH_PROCESSES.authorization
      )
    );

    dispatch(authActions.resetForms());
    onSwitchProcess();
  }

  return (
    <>
      <div className="registration-suggestion">
        <div>
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

        {showForgotPassword && (
          <button
            onClick={() =>
              dispatch(authActions.changeAuthOnGoingProcess("forgot_password"))
            }
          >
            {t("auth.forgot_password")}
          </button>
        )}
      </div>
    </>
  );
}
