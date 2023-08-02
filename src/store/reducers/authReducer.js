import { createSlice } from "@reduxjs/toolkit";
import { controlStatus as status } from "./helpers";

const initialState = {
  openPopup: false,
  authOnGoingProcess: "authorization",

  loginForm: {
    email: "",
    password: "",
  },

  registerForm: {
    email: "",
    username: "",
    password: "",
    confirm_password: "",
  },

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

    setLoginForm(state, { payload: { key, value } }) {
      state.loginForm[key] = value;
    },

    setRegisterForm(state, { payload: { key, value } }) {
      state.registerForm[key] = value;
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
          payload: prepareCredentialsForAuth(payload),
        };
      },

      reducer(state) {
        state.status = status.loading();
      },
    },

    logout(state) {},

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

    // REQUEST STATUS SETTERS
    setSuccess(state) {
      state.status = status.success();
    },

    setError(state, { payload }) {
      state.status = status.error(payload.message);
    },

    // RESET
    resetForms(state) {
      state.loginForm = initialState.loginForm;
      state.registerForm = initialState.registerForm;
    },

    cleanUpAuth(state) {
      state.loginForm = initialState.loginForm;
      state.registerForm = initialState.registerForm;
      state.openPopup = false;
      state.authOnGoingProcess = "authorization";
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
