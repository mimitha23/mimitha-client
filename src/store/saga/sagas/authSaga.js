import { takeLatest } from "redux-saga/effects";
import { authActions } from "store/reducers/authReducer";
import { authHandlers } from "store/saga/handlers";

export default function* authSaga() {
  yield takeLatest(authActions.login, authHandlers.login);
  yield takeLatest(authActions.googleLogin, authHandlers.googleLogin);
  yield takeLatest(authActions.logout, authHandlers.logout);
  yield takeLatest(authActions.registration, authHandlers.registration);
  yield takeLatest(authActions.forgotPassword, authHandlers.forgotPassword);
}
