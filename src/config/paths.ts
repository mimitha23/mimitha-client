const PATHS = {
  home_page: "/",
  gallery_page: "/gallery",
  goes_on_page: "/goes-on",
  goes_on_tutorial_page: "/goes-on/tutorial",
  cart_page: "/cart",
  products_page: "/products",
  favorites_page: "/favorites",
  order_history_page: "/orders",
  active_product_page: "/products/:productId",
  bookmarks_page: "/bookmarks/:listId",
  edit_product_page: "/products/:productId/edit",
  fit_product_page: "/products/:productId/fit",
};

const DYNAMIC_PATHS = {
  active_product_page: (productId: string) =>
    PATHS.active_product_page.replace(":productId", productId),
  bookmarks_page: (listId: string) =>
    PATHS.bookmarks_page.replace(":listId", listId),
  edit_product_page: (productId: string) =>
    PATHS.edit_product_page.replace(":productId", productId),
  fit_product_page: (productId: string) =>
    PATHS.fit_product_page.replace(":productId", productId),
};

const PUBLIC_ROUTES: Array<string> = [];

export { PATHS, DYNAMIC_PATHS, PUBLIC_ROUTES };
