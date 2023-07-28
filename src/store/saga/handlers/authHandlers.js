import { call, put } from "redux-saga/effects";
import { authAPI } from "store/saga/api";
import { authActions } from "store/reducers/authReducer";
import { userActions } from "store/reducers/userReducer";
import { errorController } from "store/saga/handlers/helpers";

export function* login({ payload }) {
  try {
    console.log(payload);
    // const { data } = yield call(authAPI.login, payload);
    // yield put(userActions.setUser(data));
    yield put(authActions.setSuccess());
  } catch (error) {
    yield errorController({
      error,
      location: "loginHandler",
      errorSetter: authActions.setError,
    });
  }
}

export function* logout() {
  try {
    // yield call(authAPI.logout);
    // yield put(userActions.resetUser());
    yield put(authActions.setSuccess());
  } catch (error) {
    yield errorController({
      error,
      location: "logoutHandler",
      errorSetter: authActions.setError,
    });
  }
}

export function* googleLogin({ payload }) {
  try {
    console.log(payload);
    // const { data } = yield call(authAPI.googleLogin, payload);
    // yield put(userActions.setUser(data));
    yield put(authActions.setSuccess());
  } catch (error) {
    yield errorController({
      error,
      location: "googleLoginHandler",
      errorSetter: authActions.setError,
    });
  }
}

export function* registration({ payload }) {
  try {
    console.log(payload);
    // const { data } = yield call(authAPI.registration, payload);
    // yield put(userActions.setUser(data));
    yield put(authActions.setSuccess());
  } catch (error) {
    yield errorController({
      error,
      location: "registrationHandler",
      errorSetter: authActions.setError,
    });
  }
}
