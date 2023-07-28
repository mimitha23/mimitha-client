import { createSelector } from "@reduxjs/toolkit";

const selectedAuthForm = ({ auth }) => {
  const formKey =
    auth.authOnGoingProcess === "authorization" ? "loginForm" : "registerForm";

  return auth[formKey];
};

export const selectIsOpenPopup = ({ auth }) => auth.openPopup;

export const selectAuthOnGoingProcess = ({ auth }) => auth.authOnGoingProcess;

export const selectAuthForm = createSelector(selectedAuthForm, (form) => form);
