import { useDispatch } from "react-redux";

import { authActions } from "store/reducers/auth.reducer";
import useUpdatePasswordForm from "utils/zod/updatePasswordValidation";

export default function useUpdatePasswordQuery() {
  const dispatch = useDispatch();

  const form = useUpdatePasswordForm();

  const updatePasswordQuery = form.handleSubmit((values) =>
    dispatch(authActions.updatePassword(values))
  );

  return { updatePasswordQuery, form };
}
