import { useAppDispatch } from "store/hooks";

import { authActions } from "store/reducers/auth.reducer";
import useConfirmEmailForm from "utils/zod/confirmEmailValidation";

export default function useConfirmEmailQuery() {
  const dispatch = useAppDispatch();

  const form = useConfirmEmailForm();

  const confirmEmailQuery = form.handleSubmit((values) =>
    dispatch(authActions.confirmEmail(values))
  );

  return { confirmEmailQuery, form };
}
