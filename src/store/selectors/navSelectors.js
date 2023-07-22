import { createSelector } from "@reduxjs/toolkit";

const selectedNavStatus = ({ nav }) => ({
  loading: nav.status.loading,
  error: nav.status.error,
  message: nav.status.message,
});

export const selectNavDropdown = ({ nav }) => nav.navDropdown;

export const selectNavStatus = createSelector(
  selectedNavStatus,
  (status) => status
);
