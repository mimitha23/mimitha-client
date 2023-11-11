import { call, put } from "redux-saga/effects";
import { errorController } from "store/saga/handlers/helpers";

import { userActions } from "store/reducers/user/user.reducer";
import * as userProfileImageAPI from "store/saga/api/user/userProfileImage.api";
import { userProfileImageActions } from "store/reducers/user/userProfileImage.reducer";

import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

export function* changeProfileImage({ payload }: PayloadAction<any>) {
  try {
    const { data }: AxiosResponse<any> = yield call(
      userProfileImageAPI.changeProfileImageQuery
    );

    yield put(userActions.setProfilePicture(data));
  } catch (error: any) {
    yield errorController({
      error,
      location: "changeProfileImageHandler",
      errorSetter: userProfileImageActions.setProfileImageStatus,
      errorSetterArgs: { stage: "error" },
    });
  }
}
