import { createSelector } from "@reduxjs/toolkit";
import { RootStateT } from "store/store";

const selectedNavStatus = ({ nav }: RootStateT) => ({
  status: nav.status.status,
  loading: nav.status.loading,
  error: nav.status.error,
  message: nav.status.message,
});

export const selectNavDropdown = ({ nav }: RootStateT) => nav.navDropdown;

export const selectNavStatus = createSelector(
  selectedNavStatus,
  (status) => status
);
