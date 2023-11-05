import { useDispatch } from "react-redux";
import { authActions } from "store/reducers/auth.reducer";

export default function useLogoutQuery() {
  const dispatch = useDispatch();

  function logout(e: React.MouseEvent) {
    e.preventDefault();
    dispatch(authActions.logout());
  }

  return { logout };
}
