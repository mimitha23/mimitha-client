import { call, put } from "redux-saga/effects";
import { authAPI } from "store/saga/api";
import { authActions } from "store/reducers/auth.reducer";
import { userActions } from "store/reducers/user/user.reducer";
import { errorController } from "store/saga/handlers/helpers";

export function* login({ payload }) {
  try {
    const { data } = yield call(authAPI.loginQuery, payload);
    yield put(userActions.setUser(data));
    yield put(authActions.cleanUpAuth());
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
    yield call(authAPI.logoutQuery);
    yield put(userActions.resetUser());
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
    const { data } = yield call(authAPI.googleLoginQuery, payload);
    yield put(userActions.setUser(data));
    yield put(authActions.cleanUpAuth());
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
    const { data } = yield call(authAPI.registrationQuery, payload);
    yield put(userActions.setUser(data));
    yield put(authActions.cleanUpAuth());
  } catch (error) {
    yield errorController({
      error,
      location: "registrationHandler",
      errorSetter: authActions.setError,
    });
  }
}

export function* forgotPassword({ payload }) {
  try {
    yield call(authAPI.forgotPasswordQuery, payload);
    yield put(authActions.setForgotPassword());
    yield put(authActions.setSuccess());
  } catch (error) {
    yield errorController({
      error,
      location: "forgotPasswordHandler",
      errorSetter: authActions.setError,
    });
  }
}

export function* confirmEmail({ payload }) {
  try {
    yield call(authAPI.confirmEmailQuery, payload);
    yield put(authActions.setConfirmEmail());
    yield put(authActions.setSuccess());
  } catch (error) {
    yield errorController({
      error,
      location: "confirmEmailHandler",
      errorSetter: authActions.setError,
    });
  }
}

export function* updatePassword({ payload }) {
  try {
    yield call(authAPI.updatePasswordQuery, payload);
    yield put(authActions.setUpdatePassword());
    yield put(authActions.setSuccess());
  } catch (error) {
    yield errorController({
      error,
      location: "updatePasswordHandler",
      errorSetter: authActions.setError,
    });
  }
}
