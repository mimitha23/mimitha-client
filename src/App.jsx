import React from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage, ActiveProductPage } from "pages";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/editor" element={<ActiveProductPage />} />
    </Routes>
  );
}
