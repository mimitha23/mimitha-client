import { createSelector } from "@reduxjs/toolkit";

const selectedUserFavoritesStatus = ({ userFavorites }) => ({
  loading: userFavorites.status.loading,
  error: userFavorites.status.error,
  message: userFavorites.status.message,
});

export const selectAllUserFavoritesIds = ({ userFavorites }) =>
  userFavorites.favoritesIds;

export const selectAllUserFavorites = ({ userFavorites }) =>
  userFavorites.favorites;

export const selectUserFavoritesStatus = createSelector(
  selectedUserFavoritesStatus,
  (status) => status
);
