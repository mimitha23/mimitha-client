import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthForm } from "store/selectors/authSelectors";
import { ValidateRegistration } from "utils/validators/Auth";
import { authActions } from "store/reducers/authReducer";

export default function useRegistrationQuery() {
  const dispatch = useDispatch();

  const form = useSelector(selectAuthForm);

  const registrationValidation = new ValidateRegistration();
  const [error, setError] = useState(registrationValidation.error);

  function registration(e) {
    e.preventDefault();

    const { error: validation } = registrationValidation
      .validate(form)
      .validateConfirmPassword();

    setError((prev) => ({ ...prev, ...validation }));

    if (validation.hasError) return;

    dispatch(authActions.registration(form));
  }

  return { registration, error };
}
