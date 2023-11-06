import { useAppDispatch } from "store/hooks";

import { signInWithGooglePopUp } from "service/firebase";
import { authActions } from "store/reducers/auth.reducer";

export default function useGoogleLoginQuery() {
  const dispatch = useAppDispatch();

  async function googleLogin(e: React.MouseEvent) {
    try {
      e.preventDefault();

      const userCredentials = await signInWithGooglePopUp();

      if (!userCredentials) return;

      dispatch(authActions.googleLogin(userCredentials));
    } catch (error) {
      console.log(error);
    }
  }

  return { googleLogin };
}
