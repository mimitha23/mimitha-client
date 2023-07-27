import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistore } from "./store";
import AppThemeProvider from "providers/Theme";
import I18nextProvier from "providers/I18nextProvider";
import AuthProvider from "providers/AuthProvider";

import App from "./App";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistore}>
      <BrowserRouter>
        <AppThemeProvider>
          <I18nextProvier>
            <AuthProvider>
              <App />
            </AuthProvider>
          </I18nextProvier>
        </AppThemeProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
