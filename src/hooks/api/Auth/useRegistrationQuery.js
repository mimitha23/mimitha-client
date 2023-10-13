import { useDispatch } from "react-redux";

import { authActions } from "store/reducers/auth.reducer";
import useRegistrationForm from "utils/zod/registerValidation";

export default function useRegistrationQuery() {
  const dispatch = useDispatch();

  const form = useRegistrationForm();

  const registrationQuery = form.handleSubmit((values) =>
    dispatch(authActions.registration(values))
  );

  return { registrationQuery, form };
}
