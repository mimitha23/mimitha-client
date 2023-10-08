import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUpdatePasswordForm } from "store/selectors/auth.selectors";
import { ValidateUpdatePassword } from "utils/validators/Auth";
import { authActions } from "store/reducers/auth.reducer";

export default function useUpdatePasswordQuery() {
  const dispatch = useDispatch();

  const form = useSelector(selectUpdatePasswordForm);

  const updatePasswordValidation = new ValidateUpdatePassword();
  const [error, setError] = useState(updatePasswordValidation.error);
  const defaultError = { ...updatePasswordValidation.error };

  function resetError() {
    updatePasswordValidation.error = { ...defaultError };
    setError(defaultError);
  }

  function updatePassword(e) {
    e.preventDefault();

    const { error: validation } = updatePasswordValidation
      .validate(form)
      .validateConfirmPassword();

    setError((prev) => ({ ...prev, ...validation }));

    if (validation.hasError) return;

    dispatch(authActions.updatePassword({ password: form.password }));
  }

  return { updatePassword, error, resetError };
}
