import { useDispatch } from "react-redux";
import { authActions } from "store/reducers/authReducer";

export default function useStartAuth() {
  const dispatch = useDispatch();

  const startAuth = (e) => {
    e && e.preventDefault();
    dispatch(authActions.setOpenPopup(true));
  };

  const delayAuth = (e) => {
    e && e.preventDefault();
    dispatch(authActions.setOpenPopup(false));
  };

  return { startAuth, delayAuth };
}
