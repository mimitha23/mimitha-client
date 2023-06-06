import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  LandingPage,
  ActiveProductPage,
  EditorPage,
  ProductFitPage,
  AllProductsPage,
  CartPage,
  GalleryPage,
} from "pages/index";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/products" element={<AllProductsPage />} />
      <Route path="/products/:productId" element={<ActiveProductPage />} />
      <Route path="/products/:productId/edit" element={<EditorPage />} />
      <Route path="/products/:productId/fit" element={<ProductFitPage />} />
    </Routes>
  );
}
