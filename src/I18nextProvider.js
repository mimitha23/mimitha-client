import { createContext, useContext, useEffect, useState } from "react";
import i18next from "service/i18next";

const i18nextContext = createContext({
  changeLocale: (locale) => {},
  currentLocale: "",
});

export default function I18nextProvier({ children }) {
  const [currentLocale, setCurrentLocale] = useState(i18next.language);

  function changeLocale(locale) {
    i18next.changeLanguage(locale);
    localStorage.setItem("mimitha_locale", JSON.stringify(locale));
    setCurrentLocale(i18next.language);
  }

  useEffect(() => {
    const mimitha_locale = localStorage.getItem("mimitha_locale")
      ? JSON.parse(localStorage.getItem("mimitha_locale"))
      : null;

    if (mimitha_locale && mimitha_locale !== i18next.language) {
      i18next.changeLanguage(mimitha_locale);
      setCurrentLocale(i18next.language);
    }
  }, []);
  return (
    <i18nextContext.Provider value={{ changeLocale, currentLocale }}>
      {children}
    </i18nextContext.Provider>
  );
}

export const useTranslationContext = () => useContext(i18nextContext);
