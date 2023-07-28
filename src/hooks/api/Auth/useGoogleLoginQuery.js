import { useDispatch } from "react-redux";
import { authActions } from "store/reducers/authReducer";

export default function useGoogleLoginQuery() {
  const dispatch = useDispatch();

  function googleLogin(e) {
    e.preventDefault();
  }

  return { googleLogin };
}
