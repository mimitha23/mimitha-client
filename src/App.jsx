import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { Spinner } from "components/Layouts/index";
const LandingPage = lazy(() => import("pages/LandingPage/LandingPage"));
const ActiveProductPage = lazy(() =>
  import("pages/ActiveProductPage/ActiveProductPage")
);
const EditorPage = lazy(() => import("pages/EditorPage/EditorPage"));
const ProductFitPage = lazy(() =>
  import("pages/ProductFitPage/ProductFitPage")
);
const AllProductsPage = lazy(() =>
  import("pages/AllProductsPage/AllProductsPage")
);
const CartPage = lazy(() => import("pages/Cart/CartPage"));
const GalleryPage = lazy(() => import("pages/GalleryPage/GalleryPage"));
const GoesOnPage = lazy(() => import("pages/GoesOnPage/GoesOnPage"));
const GoesOnTutorialPage = lazy(() =>
  import("pages/GoesOnTutorialPage/GoesOnTutorialPage")
);

export default function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/goes-on" element={<GoesOnPage />} />
        <Route path="/goes-on/tutorial" element={<GoesOnTutorialPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products" element={<AllProductsPage />} />
        <Route path="/products/:productId" element={<ActiveProductPage />} />
        <Route path="/products/:productId/edit" element={<EditorPage />} />
        <Route path="/products/:productId/fit" element={<ProductFitPage />} />
      </Routes>
    </Suspense>
  );
}
