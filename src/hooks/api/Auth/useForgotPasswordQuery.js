import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectForgotPasswordForm } from "store/selectors/authSelectors";
import { ValidateForgotPassword } from "utils/validators/Auth";
import { authActions } from "store/reducers/authReducer";

export default function useForgotPasswordQuery() {
  const dispatch = useDispatch();

  const form = useSelector(selectForgotPasswordForm);

  const forgotPasswordValidation = new ValidateForgotPassword();
  const [error, setError] = useState(forgotPasswordValidation.error);
  const defaultError = { ...forgotPasswordValidation.error };

  function resetError() {
    forgotPasswordValidation.error = { ...defaultError };
    setError(defaultError);
  }

  function forgotPassword(e) {
    e.preventDefault();

    const { error: validation } = forgotPasswordValidation.validate(form);
    setError((prev) => ({ ...prev, ...validation }));

    if (validation.hasError) return;

    dispatch(authActions.forgotPassword(form));
  }

  return { forgotPassword, error, resetError };
}
