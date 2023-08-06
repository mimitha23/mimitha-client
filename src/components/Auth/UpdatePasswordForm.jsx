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

import { CloseXIcon } from "components/Layouts/Icons";
import { Spinner } from "components/Layouts";
import FormInputField from "./components/FormInputField";

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
    <form
      className="auth-popup__form reg"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <button className="auth-popup__close-btn" onClick={onClosePopup}>
        <CloseXIcon />
      </button>

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

      {status.error && (
        <blockquote className="auth-popup__form-field--message">
          {status.message}
        </blockquote>
      )}

      <div className="login__register__box">
        <button className="login-btn" onClick={updatePassword}>
          {t("auth.update_password")}
        </button>
      </div>

      {status.loading && <Spinner />}
    </form>
  );
}
