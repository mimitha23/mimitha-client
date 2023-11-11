import { RootStateT } from "store/store";
import { createSelector } from "@reduxjs/toolkit";

// MEMORISED SELECTORS
const selectedUserFavoritesStatus = ({ userFavorites }: RootStateT) => ({
  status: userFavorites.status.status,
  loading: userFavorites.status.loading,
  error: userFavorites.status.error,
  message: userFavorites.status.message,
});

// SELECTORS
const selectAllUserFavoritesIds = ({ userFavorites }: RootStateT) =>
  userFavorites.favoritesIds;

const selectAllUserFavorites = ({ userFavorites }: RootStateT) =>
  userFavorites.favorites;

const selectUserFavoritesStatus = createSelector(
  selectedUserFavoritesStatus,
  (status) => status
);

export {
  selectUserFavoritesStatus,
  selectAllUserFavorites,
  selectAllUserFavoritesIds,
};
