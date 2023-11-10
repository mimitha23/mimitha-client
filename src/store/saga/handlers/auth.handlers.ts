import { call, put } from "redux-saga/effects";
import { errorController } from "store/saga/handlers/helpers";

import * as authAPI from "store/saga/api/auth.api";
import { authActions } from "store/reducers/auth.reducer";
import { userActions } from "store/reducers/user/user.reducer";

import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

import { LoginFormT } from "utils/zod/loginValidation";
import { RegisterFormT } from "utils/zod/registerValidation";
import { ForgotPasswordFormT } from "utils/zod/forgotPasswordValidation";
import { ConfirmEmailFormT } from "utils/zod/confirmEmailValidation";
import { UpdatePasswordFormT } from "utils/zod/updatePasswordValidation";
import { GoogleLoginArgsT, AuthResponseT } from "interface/DB/auth.types";

export function* registration({ payload }: PayloadAction<RegisterFormT>) {
  try {
    const { data }: AxiosResponse<AuthResponseT> = yield call(
      authAPI.registrationQuery,
      payload
    );

    yield put(userActions.setUser(data.user));

    yield put(
      authActions.setAuthenticatedUser({ accessToken: data.accessToken })
    );

    yield put(authActions.cleanUpAuth());
  } catch (error: any) {
    yield errorController({
      error,
      location: "registrationHandler",
      errorSetter: authActions.setError,
    });
  }
}

export function* login({ payload }: PayloadAction<LoginFormT>) {
  try {
    const { data }: AxiosResponse<AuthResponseT> = yield call(
      authAPI.loginQuery,
      payload
    );

    yield put(userActions.setUser(data.user));

    yield put(
      authActions.setAuthenticatedUser({ accessToken: data.accessToken })
    );

    yield put(authActions.cleanUpAuth());
  } catch (error: any) {
    yield errorController({
      error,
      location: "loginHandler",
      errorSetter: authActions.setError,
    });
  }
}

export function* googleLogin({ payload }: PayloadAction<GoogleLoginArgsT>) {
  try {
    const { data }: AxiosResponse<AuthResponseT> = yield call(
      authAPI.googleLoginQuery,
      payload
    );

    yield put(userActions.setUser(data.user));

    yield put(
      authActions.setAuthenticatedUser({ accessToken: data.accessToken })
    );

    yield put(authActions.cleanUpAuth());
  } catch (error: any) {
    yield errorController({
      error,
      location: "googleLoginHandler",
      errorSetter: authActions.setError,
    });
  }
}

export function* logout() {
  try {
    yield call(authAPI.logoutQuery);

    yield put(userActions.cleanUpUser());
    yield put(authActions.setLogout());
    yield put(authActions.setSuccess());
  } catch (error: any) {
    yield errorController({
      error,
      location: "logoutHandler",
      errorSetter: authActions.setError,
    });
  }
}

export function* forgotPassword({
  payload,
}: PayloadAction<ForgotPasswordFormT>) {
  try {
    yield call(authAPI.forgotPasswordQuery, payload);

    yield put(authActions.setForgotPassword());
    yield put(authActions.setSuccess());
  } catch (error: any) {
    yield errorController({
      error,
      location: "forgotPasswordHandler",
      errorSetter: authActions.setError,
    });
  }
}

export function* confirmEmail({ payload }: PayloadAction<ConfirmEmailFormT>) {
  try {
    yield call(authAPI.confirmEmailQuery, payload);

    yield put(authActions.setConfirmEmail());
    yield put(authActions.setSuccess());
  } catch (error: any) {
    yield errorController({
      error,
      location: "confirmEmailHandler",
      errorSetter: authActions.setError,
    });
  }
}

export function* updatePassword({
  payload,
}: PayloadAction<UpdatePasswordFormT>) {
  try {
    yield call(authAPI.updatePasswordQuery, payload);

    yield put(authActions.setUpdatePassword());
    yield put(authActions.setSuccess());
  } catch (error: any) {
    yield errorController({
      error,
      location: "updatePasswordHandler",
      errorSetter: authActions.setError,
    });
  }
}
