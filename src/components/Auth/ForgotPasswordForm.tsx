/* eslint-disable react-hooks/exhaustive-deps */
import { useTranslation } from "react-i18next";
import { useAppSelector, useAppDispatch } from "store/hooks";

import { Controller } from "react-hook-form";
import { useForgotPasswordQuery } from "hooks/api/Auth";
import { authActions } from "store/reducers/auth.reducer";
import { selectAuthStatus } from "store/selectors/auth.selectors";
import { AUTH_PROCESSES } from "interface/store/auth.reducer.types";

import * as UI from "./components";
import { Spinner } from "components/Layouts";
import { ArrowLeftIcon } from "components/Layouts/Icons";

interface ForgotPasswordFormT {
  onClosePopup: (e: React.MouseEvent) => void;
}

const ForgotPasswordForm: React.FC<ForgotPasswordFormT> = ({
  onClosePopup,
}) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const status = useAppSelector(selectAuthStatus);

  const { form, forgotPasswordQuery } = useForgotPasswordQuery();

  const onBack = () => {
    form.reset();
    dispatch(
      authActions.changeAuthOnGoingProcess(AUTH_PROCESSES.AUTHORIZATION)
    );
  };

  return (
    <UI.FormContainer
      onClosePopup={onClosePopup}
      onSubmit={forgotPasswordQuery}
    >
      <button className="auth-popup__back-btn" onClick={onBack}>
        <ArrowLeftIcon />
        <span>{t("auth.login")}</span>
      </button>

      <Controller
        name="email"
        control={form.control}
        render={({ field, fieldState }) => (
          <UI.FormInputField
            id="email"
            type="email"
            placeholder="user@mail.com"
            fieldProps={field}
            fieldStateProps={fieldState}
            label={t("auth.email") as string}
          />
        )}
      />

      {status.error && <UI.FormError message={status.message} />}

      <UI.AuthActionsBox submitBtnCaption={t("auth.send") as string} />

      {status.loading && <Spinner />}
    </UI.FormContainer>
  );
};

export default ForgotPasswordForm;
