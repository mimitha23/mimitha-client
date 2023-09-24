import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import editorReducer from "./editorReducer";
import filterReducer from "./filterReducer";
import galleryReducer from "./galleryReducer";
import activeProductReducer from "./activeProductReducer";
import produtsReducer from "./produtsReducer";
import landingReducer from "./landingReducer";
import navReducer from "./navReducer";
import shoppingCartReducer from "./shoppingCartReducer";
import authReducer from "./authReducer";

// user
import userReducer from "./user/userReducer";
import userFavoritesReducer from "./user/userFavoritesReducer";
import userListsReducer from "./user/userListsReducer";

const persistedEditorReducer = generatePersistedReducer({
  key: "mimitha_client_editor",
  reducer: editorReducer,
  whitelist: ["activeConfigId", "status", "editor_change_by_mode"],
});

const persistedFilterReducer = generatePersistedReducer({
  key: "mimitha_client_filter",
  reducer: filterReducer,
  whitelist: ["activeFilter"],
});

const persistedCartReducer = generatePersistedReducer({
  key: "mimitha_client_cart",
  reducer: shoppingCartReducer,
});

const persistedUserReducer = generatePersistedReducer({
  key: "mimitha_client_user",
  reducer: userReducer,
});

const persistedAuthReducer = generatePersistedReducer({
  key: "mimitha_client_auth",
  reducer: authReducer,
  // whitelist: ["openPopup", "authOnGoingProcess"],
});

const rootReducer = combineReducers({
  editor: persistedEditorReducer,
  filter: persistedFilterReducer,
  gallery: galleryReducer,
  activeProduct: activeProductReducer,
  products: produtsReducer,
  landing: landingReducer,
  nav: navReducer,
  shoppingCart: persistedCartReducer,
  auth: persistedAuthReducer,
  // user
  user: persistedUserReducer,
  userFavorites: userFavoritesReducer,
  userLists: userListsReducer,
});

export default rootReducer;

function generatePersistedReducer({ key, whitelist = [], reducer }) {
  const config = {
    key,
    storage,
    version: 1,
  };

  if (whitelist[0]) config.whitelist = whitelist;

  return persistReducer(config, reducer);
}
