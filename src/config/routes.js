export const PATHS = {
  home: {
    fullPath: "/",
  },
  gallery: {
    fullPath: "gallery",
  },
  goes_on: {
    fullPath: "goes-on",
  },
  goes_on_tutorial: {
    fullPath: "goes-on/tutorial",
  },
  cart: {
    fullPath: "cart",
  },
  products: {
    fullPath: "products",
  },
  active_product: {
    fullPath: ({ productId }) =>
      `/products/${productId ? productId : ":productId"}`,
  },
  edit_product: {
    fullPath: ({ productId }) =>
      `/products/${productId ? productId : ":productId"}/edit`,
  },
  fit_products: {
    fullPath: ({ productId }) =>
      `/products/${productId ? productId : ":productId"}/fit`,
  },
};
