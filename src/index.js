import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import AppThemeProvider from "./Theme";
import store from "store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <AppThemeProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </AppThemeProvider>
);
