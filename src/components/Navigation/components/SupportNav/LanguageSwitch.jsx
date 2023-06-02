import { useTranslationContext } from "Providers/I18nextProvider.js";

import * as Styled from "./styles/LanguageSwitch";

export default function LanguageSwitch() {
  const { changeLocale, currentLocale } = useTranslationContext();

  return (
    <Styled.LanguageSwitch>
      <button
        className={`language-switch__btn ${
          currentLocale === "ka" ? "active_locale" : ""
        }`}
        onClick={() => changeLocale("ka")}
      >
        GE
      </button>
      <hr className="language-switch__devider" />
      <button
        className={`language-switch__btn ${
          currentLocale === "en" ? "active_locale" : ""
        }`}
        onClick={() => changeLocale("en")}
      >
        EN
      </button>
    </Styled.LanguageSwitch>
  );
}
