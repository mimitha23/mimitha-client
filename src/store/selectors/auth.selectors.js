import { createSelector } from "@reduxjs/toolkit";

const selectedAuthStatus = ({ auth }) => ({
  loading: auth.status.loading,
  error: auth.status.error,
  message: auth.status.message,
});

export const selectIsOpenPopup = ({ auth }) => auth.openPopup;

export const selectAuthOnGoingProcess = ({ auth }) => auth.authOnGoingProcess;

export const selectAuthStatus = createSelector(
  selectedAuthStatus,
  (status) => status
);
