import i18next from "service/i18next";

// Get main nav translation key from translation files dinamicly
const MAIN_NAV_TRANSLATIONS = i18next
  ? i18next.options.resources[i18next.language].translation.navigation.main
  : [];

const MAIN_NAV_ROUTES = Object.keys(MAIN_NAV_TRANSLATIONS).filter(
  (key) => !["combo", "my_style"].includes(key)
);

const MAIN_NAV_DROPDOWN_ROUTES = ["men", "women", "adult", "family"];

const JWT_MIMITHA_KEY = "mimitha_client_passport";

const MIMITHA_THEME_KEY = "mimitha_client_theme";

const MAX_CART_ITEM_QUANTITY_PER_PRODUCT = 10;

export {
  JWT_MIMITHA_KEY,
  MAIN_NAV_ROUTES,
  MAIN_NAV_DROPDOWN_ROUTES,
  MAX_CART_ITEM_QUANTITY_PER_PRODUCT,
  MIMITHA_THEME_KEY,
};
