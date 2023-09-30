import { call, put } from "redux-saga/effects";
import { userProfileImageAPI } from "store/saga/api/user";
import { userActions } from "store/reducers/user/userReducer";
import { userProfileImageActions } from "store/reducers/user/userProfileImageReducer";
import { errorController } from "store/saga/handlers/helpers";

export function* changeProfileImage({ payload }) {
  try {
    const { data } = yield call(
      userProfileImageAPI.changeProfileImageQuery,
      payload
    );
    yield put(userActions.setProfilePicture(data));
    yield put(userProfileImageActions.setSuccess());
  } catch (error) {
    yield errorController({
      error,
      location: "changeProfileImageHandler",
      errorSetter: userProfileImageActions.setError,
    });
  }
}
