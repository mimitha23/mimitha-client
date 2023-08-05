import { createSelector } from "@reduxjs/toolkit";

const selectedForgotPasswordForm = ({ auth }) => ({
  email: auth.forgotPasswordForm.email,
});

const selectedLoginForm = ({ auth }) => ({
  email: auth.loginForm.email,
  password: auth.loginForm.password,
});

const selectedRegisterForm = ({ auth }) => ({
  email: auth.registerForm.email,
  username: auth.registerForm.username,
  password: auth.registerForm.password,
  confirm_password: auth.registerForm.confirm_password,
});

const selectedAuthStatus = ({ auth }) => ({
  loading: auth.status.loading,
  error: auth.status.error,
  message: auth.status.message,
});

export const selectIsOpenPopup = ({ auth }) => auth.openPopup;

export const selectAuthOnGoingProcess = ({ auth }) => auth.authOnGoingProcess;

export const selectForgotPasswordForm = createSelector(
  selectedForgotPasswordForm,
  (form) => form
);

export const selectLoginForm = createSelector(
  selectedLoginForm,
  (form) => form
);

export const selectRegisterForm = createSelector(
  selectedRegisterForm,
  (form) => form
);

export const selectAuthStatus = createSelector(
  selectedAuthStatus,
  (status) => status
);
