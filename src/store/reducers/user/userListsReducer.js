import { createSlice } from "@reduxjs/toolkit";
import { controlStatus as status } from "store/reducers/helpers";

const initialState = {
  allList: [],

  list: {
    _id: "",
    title: "",
    user: "",
    products: [],
  },

  productToAddToListId: "",
  isCreatingList: false,
  creatingListTitle: "",

  status: {
    loading: false,
    error: false,
    message: "",
  },
};

const userListsSlice = createSlice({
  name: "mimita-user-lists",
  initialState,
  reducers: {
    setProductToAddToListId(state, { payload }) {
      state.productToAddToListId = payload;
    },

    setStartListCreation(state, { payload }) {
      state.isCreatingList = payload;
    },

    setCancelListCreation(state) {
      state.isCreatingList = false;
      state.creatingListTitle = "";
    },

    setListTitle(state, { payload }) {
      state.creatingListTitle = payload;
    },

    // API
    createList: {
      prepare(payload) {
        return {
          payload: {
            title: payload.title,
            productId: payload.productId,
          },
        };
      },

      reducer(state) {
        state.status = status.loading();
      },
    },

    setNewList(state, { payload }) {
      state.allList.push(payload);
    },

    addToList: {
      prepare(payload) {
        return {
          payload: {
            listId: payload.listId,
            productId: payload.productId,
          },
        };
      },

      reducer(state) {},
    },

    setAddToList(state, { payload: { productId, listId } }) {
      const listIndex = state.allList.findIndex((list) => list._id === listId);
      if (listIndex < 0) return;
      state.allList[listIndex].products.push(productId);
    },

    removeFromList: {
      prepare(payload) {
        return {
          payload: {
            listId: payload.listId,
            productId: payload.productId,
          },
        };
      },

      reducer(state) {},
    },

    setRemoveFromList(state, { payload: { listId, productId } }) {
      const listIndex = state.allList.findIndex((list) => list._id === listId);

      if (listIndex < 0) return;

      state.allList[listIndex].products = state.allList[
        listIndex
      ].products.filter((product) => product !== productId);
    },

    getAllFromList: {
      prepare(payload) {
        return {
          payload: {
            listId: payload.listId,
          },
        };
      },

      reducer(state) {
        state.status = status.loading();
      },
    },

    setAllFromList(state, { payload }) {
      state.list = payload;
    },

    getAllList(state) {},

    setAllList(state, { payload }) {
      state.allList = payload;
    },

    // REQUEST STATUS SETTERS
    setSuccess(state) {
      state.status = status.success();
    },

    setError(state, { payload }) {
      state.status = status.error(payload.message);
    },

    // Cleaners
    resetUserLists(state) {
      Object.keys(initialState).forEach(
        (key) => (state[key] = initialState[key])
      );
    },
  },
});

export default userListsSlice.reducer;
export const userListsActions = userListsSlice.actions;
