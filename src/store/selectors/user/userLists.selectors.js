import { createSelector } from "@reduxjs/toolkit";

const selectedUserListsTitlesAndIds = ({ userLists }) =>
  userLists.allList.map((list) => ({
    _id: list._id,
    title: list.title,
  }));

const selectedUserListStatus = ({ userLists }) => ({
  loading: userLists.status.loading,
  error: userLists.status.error,
  message: userLists.status.message,
});

export const selectAllUserLists = ({ userLists }) => userLists.allList;

export const selectProductToAddToListId = ({ userLists }) =>
  userLists.productToAddToListId;

export const selectCreatingListTitle = ({ userLists }) =>
  userLists.creatingListTitle;

export const selectIsCreatingList = ({ userLists }) => userLists.isCreatingList;

export const selectUserListsTitlesAndIds = createSelector(
  selectedUserListsTitlesAndIds,
  (list) => list
);

export const selectUserList = ({ userLists }) => userLists.list;

export const selectUserListStatus = createSelector(
  selectedUserListStatus,
  (status) => status
);
