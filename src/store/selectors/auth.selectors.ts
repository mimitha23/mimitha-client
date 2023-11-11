import { RootStateT } from "store/store";
import { createSelector } from "@reduxjs/toolkit";

// MEMORISED SELECTORS
const selectedAuthStatus = ({ auth }: RootStateT) => ({
  status: auth.status.status,
  loading: auth.status.loading,
  error: auth.status.error,
  message: auth.status.message,
});

// SELECTORS
const selectIsOpenPopup = ({ auth }: RootStateT) => auth.openPopup;

const selectAuthOnGoingProcess = ({ auth }: RootStateT) =>
  auth.authOnGoingProcess;

const selectAuthStatus = createSelector(selectedAuthStatus, (status) => status);

export { selectIsOpenPopup, selectAuthOnGoingProcess, selectAuthStatus };
