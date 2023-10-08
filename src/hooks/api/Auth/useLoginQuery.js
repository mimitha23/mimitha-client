import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoginForm } from "store/selectors/auth.selectors";
import { ValidateLogin } from "utils/validators/Auth";
import { authActions } from "store/reducers/auth.reducer";

export default function useLoginQuery() {
  const dispatch = useDispatch();

  const form = useSelector(selectLoginForm);

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
