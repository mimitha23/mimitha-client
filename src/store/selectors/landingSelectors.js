import { createSelector } from "@reduxjs/toolkit";

const selectedLandingStatus = ({ landing }) => ({
  loading: landing.status.loading,
  error: landing.status.error,
  message: landing.status.message,
});

export const selectLandingPopularProducts = ({ landing }) =>
  landing.popularProducts;

export const selectLandingStatus = createSelector(
  selectedLandingStatus,
  (memorised) => memorised
);
