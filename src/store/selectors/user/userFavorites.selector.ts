import { RootStateT } from "store/store";
import { createSelector } from "@reduxjs/toolkit";

const selectedUserFavoritesStatus = ({ userFavorites }: RootStateT) => ({
  loading: userFavorites.status.loading,
  error: userFavorites.status.error,
  message: userFavorites.status.message,
});

const selectAllUserFavoritesIds = ({ userFavorites }: RootStateT) =>
  userFavorites.favoritesIds;

const selectAllUserFavorites = ({ userFavorites }: RootStateT) =>
  userFavorites.favorites;

const selectUserFavoritesStatus = createSelector(
  selectedUserFavoritesStatus,
  (status) => status
);

export {
  selectAllUserFavoritesIds,
  selectAllUserFavorites,
  selectUserFavoritesStatus,
};
