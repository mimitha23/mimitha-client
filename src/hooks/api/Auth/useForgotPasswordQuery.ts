import { useAppDispatch } from "store/hooks";

import { authActions } from "store/reducers/auth.reducer";
import useForgotPasswordForm from "utils/zod/forgotPasswordValidation";

export default function useForgotPasswordQuery() {
  const dispatch = useAppDispatch();

  const form = useForgotPasswordForm();

  const forgotPasswordQuery = form.handleSubmit((values) =>
    dispatch(authActions.forgotPassword(values))
  );

  return { forgotPasswordQuery, form };
}
