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
      state.authOnGoingProcess = payload
        ? payload
        : state.authOnGoingProcess === "authorization"
        ? "registration"
        : "authorization";
    },

    setForm(state, { payload: { key, value } }) {
      const formKey =
        state.authOnGoingProcess === "authorization"
          ? "loginForm"
          : "registerForm";

      state[formKey][key] = value;
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
      state.status = status.error();
    },

    // RESET
    resetForms(state) {
      state.loginForm = initialState.loginForm;
      state.registerForm = initialState.registerForm;
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

  return credentials;
}
