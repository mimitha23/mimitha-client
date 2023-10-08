import { useState } from "react";
import { useDispatch } from "react-redux";
import { ValidateConfirmEmail } from "utils/validators/Auth";
import { authActions } from "store/reducers/auth.reducer";

export default function useConfirmEmailQuery() {
  const dispatch = useDispatch();

  const confirmEmailValidation = new ValidateConfirmEmail();
  const [error, setError] = useState(confirmEmailValidation.error);
  const defaultError = { ...confirmEmailValidation.error };

  function resetError() {
    confirmEmailValidation.error = { ...defaultError };
    setError(defaultError);
  }

  function confirmEmail(value) {
    const { error: validation } = confirmEmailValidation
      .validate({
        pin: value,
      })
      .validateMinSixCharacter();

    setError((prev) => ({ ...prev, ...validation }));

    if (validation.hasError) return;

    dispatch(authActions.confirmEmail({ pin: value }));
  }

  return { confirmEmail, error, resetError };
}
