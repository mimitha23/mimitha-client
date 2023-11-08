import * as Pages from "pages";
import { PATHS } from "./paths";
import { RouterT } from "interface/router.types";

import { Location, NavigateFunction } from "react-router-dom";

interface RouterHistoryT {
  location: Location | null;
  navigate: NavigateFunction;
  redirectIfUnauthorized: () => Promise<void>;
}

export const RouterHistory: RouterHistoryT = {
  location: null,
  navigate: () => {},
  redirectIfUnauthorized: async () => {},
};

export const Router: Array<RouterT> = [
  {
    path: PATHS.home_page,
    name: "home-page",
    element: <Pages.LandingPage />,
    children: [],
  },
  // {
  //   path: PATHS.gallery_page,
  //   name: "gallery-page",
  //   element: <Pages.GalleryPage />,
  //   children: [],
  // },
  // {
  //   path: PATHS.goes_on_page,
  //   name: "goes-on-page",
  //   element: <Pages.GoesOnPage />,
  //   children: [],
  // },
  // {
  //   path: PATHS.goes_on_tutorial_page,
  //   name: "goes-on-tutorial-page",
  //   element: <Pages.GoesOnTutorialPage />,
  //   children: [],
  // },
  // {
  //   path: PATHS.cart_page,
  //   name: "cart-page",
  //   element: <Pages.CartPage />,
  //   children: [],
  // },
  // {
  //   path: PATHS.order_history_page,
  //   name: "order-history",
  //   element: <Pages.OrderHistoryPage />,
  //   children: [],
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
  //   path: PATHS.fit_product_page,
  //   name: "fit-product-page",
  //   element: <Pages.ProductFitPage />,
  //   children: [],
  // },
  {
    path: "*",
    name: "not-found-page",
    element: <Pages.NotFoundPage />,
    children: [],
  },
];
