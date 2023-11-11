import { call, put } from "redux-saga/effects";
import { errorController } from "store/saga/handlers/helpers";

import { userListAPI } from "store/saga/api/user";
import { userListsActions } from "store/reducers/user/userLists.reducer";

import {
  CreateListArgsT,
  DeleteListArgsT,
  AddToListArgsT,
  GetAllFromListArgsT,
  UserListShortT,
  UserListT,
} from "interface/DB/userLists.types";
import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

export function* createList({ payload }: PayloadAction<CreateListArgsT>) {
  try {
    const { data }: AxiosResponse<UserListShortT> = yield call(
      userListAPI.createListQuery,
      {
        title: payload.title,
      }
    );
    yield put(userListsActions.setNewList(data));

    yield call(userListAPI.addToListQuery, {
      listId: data._id,
      productId: payload.productId,
    });

    yield put(
      userListsActions.setAddToList({
        listId: data._id,
        productId: payload.productId,
      })
    );

    yield put(userListsActions.setCancelListCreation());
  } catch (error: any) {
    yield errorController({
      error,
      location: "createListHandler",
      errorSetter: userListsActions.setListStatus,
      errorSetterArgs: { stage: "error" },
    });
  }
}

export function* deleteList({ payload }: PayloadAction<DeleteListArgsT>) {
  try {
    yield call(userListAPI.deleteListQuery, payload);

    yield put(userListsActions.setDeletedList(payload));
  } catch (error: any) {
    yield errorController({
      error,
      location: "deleteListHandler",
      errorSetter: userListsActions.setListStatus,
      errorSetterArgs: { stage: "error" },
    });
  }
}

export function* addToList({ payload }: PayloadAction<AddToListArgsT>) {
  try {
    yield call(userListAPI.addToListQuery, payload);

    yield put(userListsActions.setAddToList(payload));
  } catch (error: any) {
    yield errorController({
      error,
      location: "addToListHandler",
      errorSetter: userListsActions.setListStatus,
      errorSetterArgs: { stage: "error" },
    });
  }
}

export function* removeFromList({ payload }: PayloadAction<AddToListArgsT>) {
  try {
    yield call(userListAPI.removeFromListQuery, payload);

    yield put(userListsActions.setRemoveFromList(payload));
  } catch (error: any) {
    yield errorController({
      error,
      location: "removeFromListHandler",
      errorSetter: userListsActions.setListStatus,
      errorSetterArgs: { stage: "error" },
    });
  }
}

export function* getAllList() {
  try {
    const { data }: AxiosResponse<Array<UserListShortT>> = yield call(
      userListAPI.getAllListQuery
    );

    yield put(userListsActions.setAllList(data));
  } catch (error: any) {
    yield errorController({
      error,
      location: "getAllListHandler",
      errorSetter: userListsActions.setListStatus,
      errorSetterArgs: { stage: "error" },
    });
  }
}

export function* getAllFromList({
  payload,
}: PayloadAction<GetAllFromListArgsT>) {
  try {
    const { data }: AxiosResponse<UserListT> = yield call(
      userListAPI.getAllFromListQuery,
      payload
    );

    yield put(userListsActions.setAllFromList(data));
  } catch (error: any) {
    yield errorController({
      error,
      location: "getAllFromListHandler",
      errorSetter: userListsActions.setListStatus,
      errorSetterArgs: { stage: "error" },
    });
  }
}
