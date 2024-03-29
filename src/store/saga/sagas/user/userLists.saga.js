import { takeLatest } from "redux-saga/effects";
import { userListsActions } from "store/reducers/user/userLists.reducer";
import { userListsHandlers } from "store/saga/handlers/user";

export default function* userListsSaga() {
  yield takeLatest(userListsActions.createList, userListsHandlers.createList);
  yield takeLatest(userListsActions.deleteList, userListsHandlers.deleteList);
  yield takeLatest(userListsActions.addToList, userListsHandlers.addToList);
  yield takeLatest(
    userListsActions.removeFromList,
    userListsHandlers.removeFromList
  );
  yield takeLatest(
    userListsActions.getAllFromList,
    userListsHandlers.getAllFromList
  );
  yield takeLatest(userListsActions.getAllList, userListsHandlers.getAllList);
}
