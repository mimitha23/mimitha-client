import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { authActions, AUTH_PROCESSES } from "store/reducers/auth.reducer";
import { selectAuthOnGoingProcess } from "store/selectors/auth.selectors";

import * as Styled from "./styles/SwitchProcessField.styled";

interface SwitchProcessFieldT {
  onSwitchProcess?: () => void;
  showForgotPassword?: boolean;
}

const SwitchProcessField: React.FC<SwitchProcessFieldT> = ({
  onSwitchProcess = () => {},
  showForgotPassword,
}) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onGoingProcess = useSelector(selectAuthOnGoingProcess);

  function onSwitch(e: React.MouseEvent) {
    e.preventDefault();
    dispatch(
      authActions.changeAuthOnGoingProcess(
        onGoingProcess === AUTH_PROCESSES.authorization
          ? AUTH_PROCESSES.registration
          : AUTH_PROCESSES.authorization
      )
    );

    onSwitchProcess();
  }

  return (
    <Styled.SwitchProcessField>
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
    </Styled.SwitchProcessField>
  );
};

export default SwitchProcessField;
