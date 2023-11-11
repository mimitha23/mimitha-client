import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import {
  AppProvider,
  I18nextProvider,
  CurrencyProvider,
  AppPortalsProvider,
  Theme as AppThemeProvider,
} from "providers/globals";
import { store, persistore } from "./store/store";

import App from "./App";

createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistore}>
      <BrowserRouter>
        <AppThemeProvider>
          <I18nextProvider>
            <CurrencyProvider>
              <AppProvider>
                <AppPortalsProvider>
                  <App />
                </AppPortalsProvider>
              </AppProvider>
            </CurrencyProvider>
          </I18nextProvider>
        </AppThemeProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);