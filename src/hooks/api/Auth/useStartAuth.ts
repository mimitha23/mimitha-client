import { useDispatch } from "react-redux";
import { authActions } from "store/reducers/auth.reducer";

type UseStartAuthReturnT = {
  startAuth: (e: React.MouseEvent) => void;
  delayAuth: (e: React.MouseEvent) => void;
};

export default function useStartAuth(): UseStartAuthReturnT {
  const dispatch = useDispatch();

  const startAuth = (e: React.MouseEvent) => {
    e && e.preventDefault();
    dispatch(authActions.setOpenPopup(true));
  };

  const delayAuth = (e: React.MouseEvent) => {
    e && e.preventDefault();
    dispatch(authActions.setOpenPopup(false));
    dispatch(authActions.changeAuthOnGoingProcess("authorization"));
  };

  return { startAuth, delayAuth };
}
