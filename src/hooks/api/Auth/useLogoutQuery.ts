import { useAppDispatch } from "store/hooks";

import { authActions } from "store/reducers/auth.reducer";

export default function useLogoutQuery() {
  const dispatch = useAppDispatch();

  function logout(e: React.MouseEvent) {
    e.preventDefault();
    dispatch(authActions.logout());
  }

  return { logout };
}
