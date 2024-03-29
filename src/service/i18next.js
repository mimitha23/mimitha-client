import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import {
  navigation_en,
  crossover_en,
  landing_en,
  footer_en,
  auth_en,
  cart_en,
  favorites_en,
  userList_en,
} from "locales/en/index";

import {
  navigation_ka,
  crossover_ka,
  landing_ka,
  footer_ka,
  auth_ka,
  cart_ka,
  favorites_ka,
  userList_ka,
} from "locales/ka/index";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    lng: "ka",
    fallbackLng: "ka",
    interpolation: { escapeValue: false },
    resources: {
      en: {
        translation: {
          navigation: navigation_en,
          landing: landing_en,
          crossover: crossover_en,
          footer: footer_en,
          auth: auth_en,
          cart: cart_en,
          favorites: favorites_en,
          user_list: userList_en,
        },
      },
      ka: {
        translation: {
          navigation: navigation_ka,
          landing: landing_ka,
          crossover: crossover_ka,
          footer: footer_ka,
          auth: auth_ka,
          cart: cart_ka,
          favorites: favorites_ka,
          user_list: userList_ka,
        },
      },
    },
  });

export default i18n;
