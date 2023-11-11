import i18next from "service/i18next";
import { createContext, useContext, useEffect, useState } from "react";

import { MIMITHA_LOCALES_KEY } from "config/consts";

import { MimithaLocaleT } from "interface/common.types";

import {
  I18nextProviderT,
  I18nextProviderContextT,
} from "./types/i18nextProvider.types";

const i18nextContext = createContext<I18nextProviderContextT>({
  changeLocale: () => {},
  currentLocale: "ka",
});

const I18nextProvider: React.FC<I18nextProviderT> = ({ children }) => {
  const [currentLocale, setCurrentLocale] = useState<MimithaLocaleT>(
    i18next.language as MimithaLocaleT
  );

  function changeLocale(locale: MimithaLocaleT) {
    i18next.changeLanguage(locale);
    localStorage.setItem(MIMITHA_LOCALES_KEY, JSON.stringify(locale));
    setCurrentLocale(i18next.language as MimithaLocaleT);
  }

  useEffect(() => {
    const mimitha_locale = localStorage.getItem(MIMITHA_LOCALES_KEY)
      ? JSON.parse(localStorage.getItem(MIMITHA_LOCALES_KEY) || "")
      : null;

    if (mimitha_locale && mimitha_locale !== i18next.language) {
      i18next.changeLanguage(mimitha_locale);
      setCurrentLocale(i18next.language as MimithaLocaleT);
    }
  }, []);

  return (
    <i18nextContext.Provider value={{ changeLocale, currentLocale }}>
      {children}
    </i18nextContext.Provider>
  );
};

export default I18nextProvider;
export const useTranslationContext = () => useContext(i18nextContext);
