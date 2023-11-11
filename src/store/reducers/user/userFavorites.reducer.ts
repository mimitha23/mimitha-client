import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setStatus, controlStatus as status } from "store/reducers/helpers";

import {
  AddToFavoritesArgsT,
  RemoveFromFavoritesArgsT,
  GetAllFavoritesIdsResponseT,
  GetAllFavoritesResponseT,
} from "interface/DB/userFavorites.types";
import { UserFavoritesStateT } from "interface/store/userFavorites.reducer.types";
import { SetStatusArgsT } from "interface/store/store.common";

const initialState: UserFavoritesStateT = {
  status: status.default(),

  favorites: [],

  favoritesIds: [],
};

const userFavoritesSlice = createSlice({
  name: "mimita-user-favorites",
  initialState,
  reducers: {
    addToFavorites: {
      prepare(payload: AddToFavoritesArgsT) {
        return { payload };
      },

      reducer(state) {},
    },

    setAddToFavorites(state, { payload }: PayloadAction<AddToFavoritesArgsT>) {
      state.favoritesIds.push({ _id: payload.productId });
    },

    removeFromFavorites: {
      prepare(payload: RemoveFromFavoritesArgsT) {
        return { payload };
      },

      reducer(state) {},
    },

    setRemoveFromFavorites(
      state,
      { payload }: PayloadAction<RemoveFromFavoritesArgsT>
    ) {
      state.favoritesIds = state.favoritesIds.filter(
        (fav) => fav._id !== payload.productId
      );

      if (state.favorites[0])
        state.favorites = state.favorites.filter(
          (fav) => fav._id !== payload.productId
        );
    },

    getAllFavoritesIds: {
      prepare() {
        return {
          payload: { query: "?select=short" },
        };
      },

      reducer(state) {},
    },

    setAllFavoritesIds(
      state,
      { payload }: PayloadAction<GetAllFavoritesIdsResponseT>
    ) {
      state.favoritesIds = payload;
    },

    getAllFavorites(state) {
      state.status = status.loading();
    },

    setAllFavorites(
      state,
      { payload }: PayloadAction<GetAllFavoritesResponseT>
    ) {
      state.favorites = payload;
      state.status = status.default();
    },

    // REQUEST STATUS SETTERS
    setFavoritesStatus(state, { payload }: PayloadAction<SetStatusArgsT>) {
      state.status = setStatus(payload);
    },

    // cleaners
    cleanUpUserFavorites(state) {
      state.favorites = initialState.favorites;
      state.favoritesIds = initialState.favoritesIds;
      state.status = status.default();
    },

    cleanUpUserFavoritesList(state) {
      state.favorites = initialState.favorites;
    },
  },
});

export default userFavoritesSlice.reducer;
export const userFavoritesActions = userFavoritesSlice.actions;
