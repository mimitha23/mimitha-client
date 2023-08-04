import * as Pages from "pages";
import { PATHS } from "./routes";

export const Router = [
  {
    path: PATHS.home.fullPath,
    name: "home-page",
    element: <Pages.LandingPage />,
  },
  {
    path: PATHS.gallery.fullPath,
    name: "gallery-page",
    element: <Pages.GalleryPage />,
  },
  {
    path: PATHS.goes_on.fullPath,
    name: "goes-on-page",
    element: <Pages.GoesOnPage />,
  },
  {
    path: PATHS.goes_on_tutorial.fullPath,
    name: "goes-on-tutorial-page",
    element: <Pages.GoesOnTutorialPage />,
  },
  {
    path: PATHS.cart.fullPath,
    name: "cart-page",
    element: <Pages.CartPage />,
  },
  {
    path: PATHS.order_history.fullPath,
    name: "order-history",
    element: <Pages.OrderHistoryPage />,
  },
  {
    path: PATHS.products.fullPath,
    name: "all-products-page",
    element: <Pages.AllProductsPage />,
  },
  {
    path: PATHS.active_product.fullPath({}),
    name: "active-product-page",
    element: <Pages.ActiveProductPage />,
  },
  {
    path: PATHS.favorites.fullPath,
    name: "user-favorites--page",
    element: <Pages.UserFavoritesPage />,
  },
  {
    path: PATHS.bookmarks.fullPath({}),
    name: "user-bookmarks-page",
    element: <Pages.UserBookmarksPage />,
  },
  {
    path: PATHS.edit_product.fullPath({}),
    name: "editor-page",
    element: <Pages.EditorPage />,
  },
  {
    path: PATHS.fit_products.fullPath({}),
    name: "fit-product-page",
    element: <Pages.ProductFitPage />,
  },
];

export const RouterHistory = {
  location: null,
  navigate: null,
};
