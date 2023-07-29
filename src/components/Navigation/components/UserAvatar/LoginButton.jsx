import { useDispatch } from "react-redux";
import { authActions } from "store/reducers/authReducer";
import { LoginIcon, LogoutIcon } from "components/Layouts/Icons";

export default function LoginButton({ isAuthenticated }) {
  const dispatch = useDispatch();

  const startAuth = () => dispatch(authActions.setOpenPopup(true));

  return (
    <>
      {!isAuthenticated && (
        <button onClick={startAuth} className="nav__login-btn">
          <LoginIcon />
        </button>
      )}
      {isAuthenticated && (
        <button onClick={() => {}} className="nav__login-btn">
          <LogoutIcon />
        </button>
      )}
    </>
  );
}
