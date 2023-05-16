import React from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage, ActiveProductPage, EditorPage } from "pages";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products/:productId" element={<ActiveProductPage />} />
      <Route path="/products/:productId/edit" element={<EditorPage />} />
    </Routes>
  );
}
