import { RootStateT } from "store/store";
import { createSelector } from "@reduxjs/toolkit";

const selectedUserListsTitlesAndIds = ({ userLists }: RootStateT) =>
  userLists.allLists.map((list) => ({
    _id: list._id,
    title: list.title,
  }));

const selectedUserListStatus = ({ userLists }: RootStateT) => ({
  loading: userLists.status.loading,
  error: userLists.status.error,
  message: userLists.status.message,
});

export const selectAllUserLists = ({ userLists }: RootStateT) =>
  userLists.allLists;

export const selectProductToAddToListId = ({ userLists }: RootStateT) =>
  userLists.productToAddToListId;

export const selectCreatingListTitle = ({ userLists }: RootStateT) =>
  userLists.creatingListTitle;

export const selectIsCreatingList = ({ userLists }: RootStateT) =>
  userLists.isCreatingList;

export const selectUserListsTitlesAndIds = createSelector(
  selectedUserListsTitlesAndIds,
  (list) => list
);

export const selectUserList = ({ userLists }: RootStateT) => userLists.list;

export const selectUserListStatus = createSelector(
  selectedUserListStatus,
  (status) => status
);
