import { RootStateT } from "store/store";
import { createSelector } from "@reduxjs/toolkit";

const selectedAuthStatus = ({ auth }: RootStateT) => ({
  status: auth.status.status,
  loading: auth.status.loading,
  error: auth.status.error,
  message: auth.status.message,
});

export const selectIsOpenPopup = ({ auth }: RootStateT) => auth.openPopup;

export const selectAuthOnGoingProcess = ({ auth }: RootStateT) =>
  auth.authOnGoingProcess;

export const selectAuthStatus = createSelector(
  selectedAuthStatus,
  (status) => status
);
