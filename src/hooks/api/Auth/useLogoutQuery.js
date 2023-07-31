import { useDispatch } from "react-redux";
import { authActions } from "store/reducers/authReducer";

export default function useLogoutQuery() {
  const dispatch = useDispatch();

  function logout(e) {
    e.preventDefault();
    dispatch(authActions.logout());
  }

  return { logout };
}
