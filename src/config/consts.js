import i18next from "service/i18next";

// Get main nav translation key from translation files dinamicly
const MAIN_NAV_TRANSLATIONS = i18next
  ? i18next.options.resources[i18next.language].translation.navigation.main
  : [];

export const MAIN_NAV_ROUTES = Object.keys(MAIN_NAV_TRANSLATIONS);
