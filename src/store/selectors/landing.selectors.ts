import { RootStateT } from "store/store";
import { createSelector } from "@reduxjs/toolkit";

const selectedLandingStatus = ({ landing }: RootStateT) => ({
  loading: landing.status.loading,
  error: landing.status.error,
  message: landing.status.message,
});

export const selectLandingPopularProducts = ({ landing }: RootStateT) =>
  landing.popularProducts;

export const selectLandingStatus = createSelector(
  selectedLandingStatus,
  (memorised) => memorised
);
