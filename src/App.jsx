import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  LandingPage,
  ActiveProductPage,
  EditorPage,
  ProductFitPage,
} from "pages";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products/:productId" element={<ActiveProductPage />} />
      <Route path="/products/:productId/edit" element={<EditorPage />} />
      <Route path="/products/:productId/fit" element={<ProductFitPage />} />
    </Routes>
  );
}
