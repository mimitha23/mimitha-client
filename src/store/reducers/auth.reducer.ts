import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { controlStatus as status } from "./helpers";

import {
  GoogleLoginArgsT,
  SetAuthenticatedUserT,
} from "interface/DB/auth.types";
import { LoginFormT } from "utils/zod/loginValidation";
import { RegisterFormT } from "utils/zod/registerValidation";
import { ForgotPasswordFormT } from "utils/zod/forgotPasswordValidation";
import { ConfirmEmailFormT } from "utils/zod/confirmEmailValidation";
import { UpdatePasswordFormT } from "utils/zod/updatePasswordValidation";
import { AuthStateT, AUTH_PROCESSES } from "interface/store/auth.reducer.types";

import { jwt } from "utils";

const initialState: AuthStateT = {
  openPopup: false,
  status: status.default(),
  authOnGoingProcess: AUTH_PROCESSES.AUTHORIZATION,
};

const authSlice = createSlice({
  name: "mimitha-auth",
  initialState,
  reducers: {
    setOpenPopup(state, { payload }) {
      state.openPopup = payload;
    },

    changeAuthOnGoingProcess(state, { payload }) {
      state.authOnGoingProcess = payload;
    },

    // API
    login: {
      prepare(payload: LoginFormT) {
        return {
          payload: {
            email: payload.email,
            password: payload.password,
          },
        };
      },

      reducer(state) {
        state.status = status.loading();
      },
    },

    googleLogin: {
      prepare(payload: GoogleLoginArgsT) {
        return {
          payload: {
            email: payload.email,
            fullname: payload.username,
            username: payload.username.split(" ").join("."),
            profilePicture: payload.profilePicture,
          },
        };
      },

      reducer(state) {
        state.status = status.loading();
      },
    },

    registration: {
      prepare(payload: RegisterFormT) {
        return {
          payload: {
            email: payload.email,
            username: payload.username,
            password: payload.password,
            confirmPassword: payload.confirmPassword,
          },
        };
      },

      reducer(state) {
        state.status = status.loading();
      },
    },

    setAuthenticatedUser(_, { payload }: PayloadAction<SetAuthenticatedUserT>) {
      jwt.setJWT(payload.accessToken);
    },

    logout() {},

    setLogout() {
      jwt.removeJWT();
    },

    forgotPassword: {
      prepare(payload: ForgotPasswordFormT) {
        return {
          payload: {
            email: payload.email,
          },
        };
      },

      reducer(state) {
        state.status = status.loading();
      },
    },

    setForgotPassword(state) {
      state.authOnGoingProcess = AUTH_PROCESSES.CONFIRM_EMAIl;
    },

    confirmEmail: {
      prepare(payload: ConfirmEmailFormT) {
        return {
          payload: {
            pin: payload.pin,
          },
        };
      },

      reducer(state) {
        state.status = status.loading();
      },
    },

    setConfirmEmail(state) {
      state.authOnGoingProcess = AUTH_PROCESSES.UPDATE_PASSWORD;
    },

    updatePassword: {
      prepare(payload: UpdatePasswordFormT) {
        return {
          payload: {
            password: payload.password,
            confirmPassword: payload.confirmPassword,
          },
        };
      },

      reducer(state) {
        state.status = status.loading();
      },
    },

    setUpdatePassword(state) {
      state.authOnGoingProcess = AUTH_PROCESSES.AUTHORIZATION;
    },

    // REQUEST STATUS SETTERS
    setSuccess(state) {
      state.status = status.default();
    },

    setError(state, { payload }) {
      state.status = status.error(payload.message);
    },

    // RESET
    cleanUpAuth(state) {
      state.openPopup = false;
      state.authOnGoingProcess = AUTH_PROCESSES.AUTHORIZATION;
      state.status = status.default();
    },
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;
