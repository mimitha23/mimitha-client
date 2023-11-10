import { RootStateT } from "store/store";
import { createSelector } from "@reduxjs/toolkit";

// MEMORISED SELECTORS
const selectedUserListStatus = ({ userLists }: RootStateT) => ({
  status: userLists.status.status,
  loading: userLists.status.loading,
  error: userLists.status.error,
  message: userLists.status.message,
});

const selectedUserListsTitlesAndIds = ({ userLists }: RootStateT) =>
  userLists.allLists.map((list) => ({
    _id: list._id,
    title: list.title,
  }));

const selectedUserListDetails = ({ userLists }: RootStateT) => ({
  _id: userLists.list._id,
  title: userLists.list.title,
});

// ACTIVE LIST
const selectUserListStatus = createSelector(
  selectedUserListStatus,
  (status) => status
);

const selectUserList = ({ userLists }: RootStateT) => userLists.list;

const selectUserListDetails = createSelector(
  selectedUserListDetails,
  (details) => details
);

// ALL LISTS
const selectAllUserLists = ({ userLists }: RootStateT) => userLists.allLists;

const selectUserListsTitlesAndIds = createSelector(
  selectedUserListsTitlesAndIds,
  (list) => list
);

// LIST CREATION
const selectProductToAddToListId = ({ userLists }: RootStateT) =>
  userLists.productToAddToListId;

const selectCreatingListTitle = ({ userLists }: RootStateT) =>
  userLists.creatingListTitle;

const selectIsCreatingList = ({ userLists }: RootStateT) =>
  userLists.isCreatingList;

export {
  // ACTIVE LIST
  selectUserListStatus,
  selectUserList,
  selectUserListDetails,
  // ALL LISTS
  selectAllUserLists,
  selectUserListsTitlesAndIds,
  // LIST CREATION
  selectProductToAddToListId,
  selectCreatingListTitle,
  selectIsCreatingList,
};
