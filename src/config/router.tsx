import * as Pages from "pages";
import { PATHS } from "./paths";
import { RouterT } from "interface/router.types";

export const RouterHistory = {
  location: null,
  navigate: null,
  redirectIfUnauthorized: null,
};

export const Router: Array<RouterT> = [
  {
    path: PATHS.home_page,
    name: "home-page",
    element: <Pages.LandingPage />,
    children: [],
  },
  // {
  //   path: PATHS.gallery.fullPath,
  //   name: "gallery-page",
  //   element: <Pages.GalleryPage />,
  // },
  // {
  //   path: PATHS.goes_on.fullPath,
  //   name: "goes-on-page",
  //   element: <Pages.GoesOnPage />,
  // },
  // {
  //   path: PATHS.goes_on_tutorial.fullPath,
  //   name: "goes-on-tutorial-page",
  //   element: <Pages.GoesOnTutorialPage />,
  // },
  // {
  //   path: PATHS.cart.fullPath,
  //   name: "cart-page",
  //   element: <Pages.CartPage />,
  // },
  // {
  //   path: PATHS.order_history.fullPath,
  //   name: "order-history",
  //   element: <Pages.OrderHistoryPage />,
  // },
  {
    path: PATHS.products_page,
    name: "all-products-page",
    element: <Pages.AllProductsPage />,
    children: [],
  },
  {
    path: PATHS.active_product_page,
    name: "active-product-page",
    element: <Pages.ActiveProductPage />,
    children: [],
  },
  {
    path: PATHS.favorites_page,
    name: "user-favorites--page",
    element: <Pages.UserFavoritesPage />,
    children: [],
  },
  {
    path: PATHS.bookmarks_page,
    name: "user-bookmarks-page",
    element: <Pages.UserBookmarksPage />,
    children: [],
  },
  {
    path: PATHS.edit_product_page,
    name: "editor-page",
    element: <Pages.EditorPage />,
    children: [],
  },
  // {
  //   path: PATHS.fit_products.fullPath({}),
  //   name: "fit-product-page",
  //   element: <Pages.ProductFitPage />,
  // },
];
