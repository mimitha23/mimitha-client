import { createContext, useContext, useEffect } from "react";
import i18next from "service/i18next";

const i18nextContext = createContext({
  changeLocale: (locale) => {},
  currentLocale: "",
});

export default function I18nextProvier({ children }) {
  function changeLocale(locale) {
    i18next.changeLanguage(locale);
    localStorage.setItem("mimitha_locale", JSON.stringify(locale));
  }

  useEffect(() => {
    const mimitha_locale = localStorage.getItem("mimitha_locale")
      ? JSON.parse(localStorage.getItem("mimitha_locale"))
      : null;

    if (mimitha_locale && mimitha_locale !== i18next.language)
      i18next.changeLanguage(mimitha_locale);
  }, []);

  return (
    <i18nextContext.Provider
      value={{ changeLocale, currentLocale: i18next.language }}
    >
      {children}
    </i18nextContext.Provider>
  );
}

export const useTranslationContext = () => useContext(i18nextContext);
