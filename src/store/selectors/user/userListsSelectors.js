import { createSelector } from "@reduxjs/toolkit";

const selectedUserListsTitlesAndIds = ({ userLists }) =>
  userLists.allList.map((list) => ({
    _id: list._id,
    title: list.title,
  }));

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
