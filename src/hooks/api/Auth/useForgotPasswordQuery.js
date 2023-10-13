import { useDispatch } from "react-redux";

import { authActions } from "store/reducers/auth.reducer";
import useForgotPasswordForm from "utils/zod/forgotPasswordValidation";

export default function useForgotPasswordQuery() {
  const dispatch = useDispatch();

  const form = useForgotPasswordForm();

  const forgotPasswordQuery = form.handleSubmit((values) =>
    dispatch(authActions.forgotPassword(values))
  );

  return { forgotPasswordQuery, form };
}
