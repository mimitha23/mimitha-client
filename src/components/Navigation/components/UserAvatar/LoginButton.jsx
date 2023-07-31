import { useDispatch } from "react-redux";

import { authActions } from "store/reducers/authReducer";

import { LoginIcon } from "components/Layouts/Icons";

export default function LoginButton() {
  const dispatch = useDispatch();

  const startAuth = () => dispatch(authActions.setOpenPopup(true));

  return (
    <button onClick={startAuth} className="nav__login-btn" title="log in">
      <LoginIcon />
    </button>
  );
}
