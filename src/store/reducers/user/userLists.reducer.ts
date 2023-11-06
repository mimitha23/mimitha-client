import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { controlStatus as status } from "store/reducers/helpers";

import { PATHS } from "config/paths";
import { RouterHistory } from "config/router";

import {
  UserListT,
  UserListShortT,
  CreateListArgsT,
  DeleteListArgsT,
  AddToListArgsT,
  GetAllFromListArgsT,
} from "interface/DB/userLists.types";
import { UserListsStateT } from "interface/store/userLists.reducer.types";

const initialState: UserListsStateT = {
  status: status.default(),

  allLists: [],

  list: {
    _id: "",
    title: "",
    user: "",
    products: [],
  },

  productToAddToListId: "",
  isCreatingList: false,
  creatingListTitle: "",
};

const userListsSlice = createSlice({
  name: "mimita-user-lists",
  initialState,
  reducers: {
    setProductToAddToListId(state, { payload }: PayloadAction<string>) {
      state.productToAddToListId = payload;
    },

    setStartListCreation(state, { payload }: PayloadAction<boolean>) {
      state.isCreatingList = payload;
    },

    setCancelListCreation(state) {
      state.isCreatingList = false;
      state.creatingListTitle = "";
    },

    setListTitle(state, { payload }: PayloadAction<string>) {
      state.creatingListTitle = payload;
    },

    // API
    createList: {
      prepare(payload: CreateListArgsT) {
        return { payload };
      },

      reducer(state) {
        state.status = status.loading();
      },
    },

    setNewList(state, { payload }: PayloadAction<UserListShortT>) {
      state.allLists.push(payload);
    },

    deleteList: {
      prepare(payload: DeleteListArgsT) {
        return { payload };
      },

      reducer(state) {
        state.status = status.loading();
      },
    },

    setDeletedList(
      state,
      { payload: { listId } }: PayloadAction<DeleteListArgsT>
    ) {
      state.list = initialState.list;
      state.allLists = state.allLists.filter((list) => list._id !== listId);
      RouterHistory.navigate(PATHS.home_page);
    },

    addToList: {
      prepare(payload: AddToListArgsT) {
        return { payload };
      },

      reducer(state) {},
    },

    setAddToList(
      state,
      { payload: { productId, listId } }: PayloadAction<AddToListArgsT>
    ) {
      const listIndex = state.allLists.findIndex((list) => list._id === listId);

      if (listIndex < 0) return;

      state.allLists[listIndex].products.push(productId);
    },

    removeFromList: {
      prepare(payload: AddToListArgsT) {
        return { payload };
      },

      reducer(state) {},
    },

    setRemoveFromList(
      state,
      { payload: { listId, productId } }: PayloadAction<AddToListArgsT>
    ) {
      const listIndex = state.allLists.findIndex((list) => list._id === listId);

      if (listIndex < 0) return;

      state.allLists[listIndex].products = state.allLists[
        listIndex
      ].products.filter((product) => product !== productId);

      if (state.list.products[0])
        state.list.products = state.list.products.filter(
          (product) => product._id !== productId
        );
    },

    getAllFromList: {
      prepare(payload: GetAllFromListArgsT) {
        return { payload };
      },

      reducer(state) {
        state.status = status.loading();
      },
    },

    setAllFromList(state, { payload }: PayloadAction<UserListT>) {
      state.list = payload;
    },

    getAllList() {},

    setAllList(state, { payload }: PayloadAction<Array<UserListShortT>>) {
      state.allLists = payload;
    },

    // REQUEST STATUS SETTERS
    setSuccess(state) {
      state.status = status.default();
    },

    setError(state, { payload }: PayloadAction<{ message: string }>) {
      state.status = status.error(payload.message);
    },

    // Cleaners
    cleanUpUserLists(state) {
      state.allLists = initialState.allLists;
      state.creatingListTitle = initialState.creatingListTitle;
      state.isCreatingList = initialState.isCreatingList;
      state.list = initialState.list;
      state.productToAddToListId = initialState.productToAddToListId;
      state.status = initialState.status;
    },

    cleanUpUserActiveList(state) {
      state.list = initialState.list;
    },
  },
});

export default userListsSlice.reducer;
export const userListsActions = userListsSlice.actions;
