/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";

import {
  selectAuthStatus,
  selectUpdatePasswordForm,
} from "store/selectors/authSelectors";
import { useUpdatePasswordQuery } from "hooks/api/Auth";
import { authActions } from "store/reducers/authReducer";

import { Spinner } from "components/Layouts";
import FormInputField from "./components/FormInputField";
import FormContainer from "./components/FormContainer";
import FormError from "./components/FormError";
import AuthActionsBox from "./components/AuthActionsBox";

export default function UpdatePasswordForm({ onClosePopup }) {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const form = useSelector(selectUpdatePasswordForm);
  const status = useSelector(selectAuthStatus);

  const { updatePassword, error, resetError } = useUpdatePasswordQuery();

  const handleForm = useCallback((e) => {
    dispatch(
      authActions.setUpdatePasswordForm({
        key: e.target.name,
        value: e.target.value,
      })
    );
  }, []);

  useEffect(() => {
    return () => {
      resetError();
    };
  }, []);

  return (
    <FormContainer className="reg" onClosePopup={onClosePopup}>
      <FormInputField
        id="password"
        label={t("auth.password")}
        type="password"
        name="password"
        placeholder="******"
        error={error.password}
        value={form.password}
        onChange={handleForm}
      />

      <FormInputField
        id="confirm-password"
        label={t("auth.confirm_password")}
        type="password"
        name="confirm_password"
        placeholder="******"
        error={error.confirm_password}
        value={form.confirm_password}
        onChange={handleForm}
      />

      {status.error && <FormError message={status.message} />}

      <AuthActionsBox
        onSubmit={updatePassword}
        submitBtnCaption={t("auth.update_password")}
      />

      {status.loading && <Spinner />}
    </FormContainer>
  );
}
