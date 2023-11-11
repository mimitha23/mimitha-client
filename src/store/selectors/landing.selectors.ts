import { RootStateT } from "store/store";
import { createSelector } from "@reduxjs/toolkit";

// MEMORISED SELECTORS
const selectedLandingStatus = ({ landing }: RootStateT) => ({
  status: landing.status.status,
  loading: landing.status.loading,
  error: landing.status.error,
  message: landing.status.message,
});

// SELECTORS
const selectLandingPopularProducts = ({ landing }: RootStateT) =>
  landing.popularProducts;

const selectLandingStatus = createSelector(
  selectedLandingStatus,
  (memorised) => memorised
);

export { selectLandingPopularProducts, selectLandingStatus };
