import { takeLatest } from "redux-saga/effects";
import { userProfileImageActions } from "store/reducers/user/userProfileImage.reducer";
import { userProfileImageHandlers } from "store/saga/handlers/user";

export default function* userProfileImageSaga() {
  yield takeLatest(
    userProfileImageActions.changeProfileImage,
    userProfileImageHandlers.changeProfileImage
  );
}
