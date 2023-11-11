import { createSelector } from "@reduxjs/toolkit";
import { RootStateT } from "store/store";

// MEMORISED SELECTORS
const selectedNavStatus = ({ nav }: RootStateT) => ({
  status: nav.status.status,
  loading: nav.status.loading,
  error: nav.status.error,
  message: nav.status.message,
});

// SELECTORS
const selectNavDropdown = ({ nav }: RootStateT) => nav.navDropdown;

const selectNavStatus = createSelector(selectedNavStatus, (status) => status);

export { selectNavDropdown, selectNavStatus };
