import { takeLatest } from "redux-saga/effects";
import { authActions } from "store/reducers/auth.reducer";
import { authHandlers } from "store/saga/handlers";

export default function* authSaga() {
  yield takeLatest(authActions.registration, authHandlers.registration);
  yield takeLatest(authActions.login, authHandlers.login);
  yield takeLatest(authActions.googleLogin, authHandlers.googleLogin);
  yield takeLatest(authActions.logout, authHandlers.logout);
  // forgot-password
  yield takeLatest(authActions.forgotPassword, authHandlers.forgotPassword);
  yield takeLatest(authActions.confirmEmail, authHandlers.confirmEmail);
  yield takeLatest(authActions.updatePassword, authHandlers.updatePassword);
}
