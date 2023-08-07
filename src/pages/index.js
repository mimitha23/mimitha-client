import { lazy } from "react";

export const LandingPage = lazy(() => import("./LandingPage/LandingPage"));
export const ActiveProductPage = lazy(() =>
  import("./ActiveProductPage/ActiveProductPage")
);
export const EditorPage = lazy(() => import("./EditorPage/EditorPage"));
// export const ProductFitPage = lazy(() =>
//   import("./ProductFitPage/ProductFitPage")
// );
export const AllProductsPage = lazy(() =>
  import("./AllProductsPage/AllProductsPage")
);
export const CartPage = lazy(() => import("./Cart/CartPage"));
// export const GalleryPage = lazy(() => import("./GalleryPage/GalleryPage"));
// export const GoesOnPage = lazy(() => import("./GoesOnPage/GoesOnPage"));
// export const GoesOnTutorialPage = lazy(() =>
//   import("./GoesOnTutorialPage/GoesOnTutorialPage")
// );
export const UserFavoritesPage = lazy(() =>
  import("./UserFavoritesPage/UserFavoritesPage")
);
export const OrderHistoryPage = lazy(() =>
  import("./OrderHistoryPage/OrderHistoryPage")
);
export const UserBookmarksPage = lazy(() =>
  import("./UserBookmarksPage/UserBookmarksPage")
);
