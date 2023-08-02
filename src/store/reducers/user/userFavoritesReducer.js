import { createSlice } from "@reduxjs/toolkit";
import { controlStatus as status } from "store/reducers/helpers";

const initialState = {
  favorites: [],

  favoritesIds: [],

  status: {
    loading: false,
    error: false,
    message: "",
  },
};

const userFavoritesSlice = createSlice({
  name: "mimita-user-favorites",
  initialState,
  reducers: {
    addToFavorites: {
      prepare(payload) {
        return {
          payload: {
            productId: payload.productId,
          },
        };
      },

      reducer(state) {},
    },

    setAddToFavorites(state, { payload }) {
      state.favoritesIds.push({ _id: payload.productId });
    },

    removeFromFavorites: {
      prepare(payload) {
        return {
          payload: {
            productId: payload.productId,
          },
        };
      },

      reducer(state) {},
    },

    setRemoveFromFavorites(state, { payload }) {
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
          payload: "?select=short",
        };
      },

      reducer(state) {},
    },

    setAllFavoritesIds(state, { payload }) {
      state.favoritesIds = payload;
    },

    getAllFavorites: {
      reducer(state) {},
    },

    setAllFavorites(state, { payload }) {
      state.favorites = payload;
    },

    // REQUEST STATUS SETTERS
    setSuccess(state) {
      state.status = status.success();
    },

    setError(state, { payload }) {
      state.status = status.error(payload.message);
    },

    // cleaners
    resetUserFavorites(state) {
      Object.keys(initialState).forEach(
        (key) => (state[key] = initialState[key])
      );
    },
  },
});

export default userFavoritesSlice.reducer;
export const userFavoritesActions = userFavoritesSlice.actions;
