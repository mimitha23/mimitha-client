import { createSlice } from "@reduxjs/toolkit";
import { controlStatus as status } from "./helpers";

export const AUTH_PROCESSES = {
  authorization: "authorization",
  registration: "registration",
  forgot_password: "forgot_password",
  confirm_email: "confirm_email",
  update_password: "update_password",
};

const initialState = {
  openPopup: false,
  authOnGoingProcess: AUTH_PROCESSES.authorization,

  status: {
    loading: false,
    error: false,
    message: "",
  },
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
      prepare(payload) {
        return {
          payload: prepareCredentialsForAuth(payload),
        };
      },

      reducer(state) {
        state.status = status.loading();
      },
    },

    googleLogin: {
      prepare(payload) {
        return {
          payload: {
            email: payload.email,
            username: payload.username.split(" ").join("."),
            fullname: payload.username,
            profilePicture: payload.profilePicture,
          },
        };
      },

      reducer(state) {
        state.status = status.loading();
      },
    },

    registration: {
      prepare(payload) {
        return {
          payload: prepareCredentialsForAuth(payload),
        };
      },

      reducer(state) {
        state.status = status.loading();
      },
    },

    logout(state) {},

    forgotPassword: {
      prepare(payload) {
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
      state.authOnGoingProcess = AUTH_PROCESSES.confirm_email;
    },

    confirmEmail: {
      prepare(payload) {
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
      state.authOnGoingProcess = AUTH_PROCESSES.update_password;
    },

    updatePassword: {
      prepare(payload) {
        return {
          payload: {
            password: payload.password,
          },
        };
      },

      reducer(state) {
        state.status = status.loading();
      },
    },

    setUpdatePassword(state) {
      state.authOnGoingProcess = AUTH_PROCESSES.authorization;
    },

    // REQUEST STATUS SETTERS
    setSuccess(state) {
      state.status = status.success();
    },

    setError(state, { payload }) {
      state.status = status.error(payload.message);
    },

    // RESET
    cleanUpAuth(state) {
      state.openPopup = false;
      state.authOnGoingProcess = AUTH_PROCESSES.authorization;
      state.status = status.success();
    },
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;

function prepareCredentialsForAuth(payload) {
  const credentials = {
    email: payload.email,
    password: payload.password,
  };

  if (payload.confirm_password)
    credentials.confirm_password = payload.confirm_password;
  if (payload.username) credentials.username = payload.username;

  return credentials;
}
