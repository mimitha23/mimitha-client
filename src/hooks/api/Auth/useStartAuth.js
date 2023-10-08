import { useDispatch } from "react-redux";
import { authActions } from "store/reducers/auth.reducer";

export default function useStartAuth() {
  const dispatch = useDispatch();

  const startAuth = (e) => {
    e && e.preventDefault();
    dispatch(authActions.setOpenPopup(true));
  };

  const delayAuth = (e) => {
    e && e.preventDefault();
    dispatch(authActions.setOpenPopup(false));
    dispatch(authActions.changeAuthOnGoingProcess("authorization"));
  };

  return { startAuth, delayAuth };
}
