import { useAppDispatch } from "store/hooks";

import { authActions } from "store/reducers/auth.reducer";
import useUpdatePasswordForm from "utils/zod/updatePasswordValidation";

export default function useUpdatePasswordQuery() {
  const dispatch = useAppDispatch();

  const form = useUpdatePasswordForm();

  const updatePasswordQuery = form.handleSubmit((values) =>
    dispatch(authActions.updatePassword(values))
  );

  return { updatePasswordQuery, form };
}
