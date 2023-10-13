/* eslint-disable react-hooks/exhaustive-deps */
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { Controller } from "react-hook-form";
import { useForgotPasswordQuery } from "hooks/api/Auth";
import { selectAuthStatus } from "store/selectors/auth.selectors";
import { authActions, AUTH_PROCESSES } from "store/reducers/auth.reducer";

import * as UI from "./components";
import { Spinner } from "components/Layouts";
import { ArrowLeftIcon } from "components/Layouts/Icons";

export default function ForgotPasswordForm({ onClosePopup }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const status = useSelector(selectAuthStatus);

  const { form, forgotPasswordQuery } = useForgotPasswordQuery();

  const onBack = () => {
    form.reset();
    dispatch(
      authActions.changeAuthOnGoingProcess(AUTH_PROCESSES.authorization)
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
        render={({ field, fieldState: { error } }) => (
          <UI.FormInputField
            id="email"
            label={t("auth.email")}
            type="email"
            placeholder="user@io.com"
            fieldProps={{ ...field }}
            error={error}
          />
        )}
      />

      {status.error && <UI.FormError message={status.message} />}

      <UI.AuthActionsBox submitBtnCaption={t("auth.send")} />

      {status.loading && <Spinner />}
    </UI.FormContainer>
  );
}
