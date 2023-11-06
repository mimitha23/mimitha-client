import { useAppDispatch } from "store/hooks";

import useLoginForm from "utils/zod/loginValidation";
import { authActions } from "store/reducers/auth.reducer";

export default function useLoginQuery() {
  const dispatch = useAppDispatch();

  const form = useLoginForm();

  const loginQuery = form.handleSubmit((values) =>
    dispatch(authActions.login(values))
  );

  return { loginQuery, form };
}
