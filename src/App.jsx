import React from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage, Editor } from "pages";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/editor" element={<Editor />} />
    </Routes>
  );
}
