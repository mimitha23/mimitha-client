import { createSelector } from "@reduxjs/toolkit";

const selectedAuthForm = ({ auth }) => {
  const formKey =
    auth.authOnGoingProcess === "authorization" ? "loginForm" : "registerForm";

  return auth[formKey];
};

const selectedAuthStatus = ({ auth }) => ({
  loading: auth.status.loading,
  error: auth.status.error,
  message: auth.status.message,
});

export const selectIsOpenPopup = ({ auth }) => auth.openPopup;

export const selectAuthOnGoingProcess = ({ auth }) => auth.authOnGoingProcess;

export const selectAuthForm = createSelector(selectedAuthForm, (form) => form);

export const selectAuthStatus = createSelector(
  selectedAuthStatus,
  (status) => status
);
