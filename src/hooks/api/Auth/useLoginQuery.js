import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthForm } from "store/selectors/authSelectors";
import { ValidateLogin } from "utils/validators/Auth";
import { authActions } from "store/reducers/authReducer";

export default function useLoginQuery() {
  const dispatch = useDispatch();

  const form = useSelector(selectAuthForm);

  const loginValidation = new ValidateLogin();
  const [error, setError] = useState(loginValidation.error);
  const defaultError = { ...loginValidation.error };

  function resetError() {
    loginValidation.error = { ...defaultError };
    setError(defaultError);
  }

  function login(e) {
    e.preventDefault();

    const { error: validation } = loginValidation.validate(form);
    setError((prev) => ({ ...prev, ...validation }));

    if (validation.hasError) return;

    dispatch(authActions.login(form));
  }

  return { login, error, resetError };
}
