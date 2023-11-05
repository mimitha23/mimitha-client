import i18n from "service/i18next";

const i18nCurrentLang = i18n.language;
const i18nData = i18n.getDataByLanguage(i18nCurrentLang);

interface ObjectT {
  [key: string]: string;
}

const isObject = (data: unknown): data is ObjectT =>
  data &&
  typeof data === "object" &&
  Object.values(data)[0] &&
  Object.keys(data)[0];

const MAIN_NAV_TRANSLATIONS: { [key: string]: string } | null =
  i18nData && isObject(i18nData.translation.navigation)
    ? (i18nData.translation.navigation.main as any as ObjectT)
    : null;

const MAIN_NAV_ROUTES: Array<string> = MAIN_NAV_TRANSLATIONS
  ? Object.keys(MAIN_NAV_TRANSLATIONS).filter(
      (key) => !["combo", "my_style"].includes(key)
    )
  : [];

const MAIN_NAV_DROPDOWN_ROUTES = ["men", "women", "adult", "family"] as const;

const JWT_MIMITHA_KEY = "mimitha_client_passport" as const;

const MIMITHA_THEME_KEY = "mimitha_client_theme" as const;

const MIMITHA_LOCALES_KEY = "mimitha_locale" as const;

const MIMITHA_LOCALES = ["ka", "en"] as const;

const MIMITHA_CURRENCIES = ["GEL", "USD"] as const;

const MIMITHA_CURRENCIES_SYMBOLS = ["₾", "$"] as const;

const MAX_CART_ITEM_QUANTITY_PER_PRODUCT = 10 as const;

export {
  JWT_MIMITHA_KEY,
  MAIN_NAV_ROUTES,
  MAIN_NAV_DROPDOWN_ROUTES,
  MAX_CART_ITEM_QUANTITY_PER_PRODUCT,
  MIMITHA_THEME_KEY,
  MIMITHA_LOCALES,
  MIMITHA_LOCALES_KEY,
  MIMITHA_CURRENCIES,
  MIMITHA_CURRENCIES_SYMBOLS,
};
