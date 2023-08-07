import { useDispatch } from "react-redux";

import { signInWithGooglePopUp } from "service/firebase";
import { authActions } from "store/reducers/authReducer";

export default function useGoogleLoginQuery() {
  const dispatch = useDispatch();

  async function googleLogin(e) {
    try {
      e.preventDefault();

      const userCredentials = await signInWithGooglePopUp();

      console.log(userCredentials);
    } catch (error) {
      console.log(error);
    }
  }

  return { googleLogin };
}
