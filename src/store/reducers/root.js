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

const persistedEditorReducer = persistReducer(
  { key: "mimitha_client_editor", storage },
  editorReducer
);

const persistedFilterReducer = persistReducer(
  { key: "mimitha_client_filter", storage },
  filterReducer
);

const persistedCartReducer = persistReducer(
  { key: "mimitha_client_cart", storage },
  shoppingCartReducer
);

const persistedUserReducer = persistReducer(
  { key: "mimitha_client_user", storage },
  userReducer
);

const rootReducer = combineReducers({
  editor: persistedEditorReducer,
  filter: persistedFilterReducer,
  gallery: galleryReducer,
  activeProduct: activeProductReducer,
  products: produtsReducer,
  landing: landingReducer,
  nav: navReducer,
  shoppingCart: persistedCartReducer,
  auth: authReducer,
  // user
  user: persistedUserReducer,
  userFavorites: userFavoritesReducer,
  userLists: userListsReducer,
});

export default rootReducer;
