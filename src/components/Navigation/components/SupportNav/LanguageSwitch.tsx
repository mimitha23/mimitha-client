import { Fragment } from "react";
import { v4 as uuid } from "uuid";

import { MIMITHA_LOCALES } from "config/consts";

import { useTranslationContext } from "providers/I18nextProvider";
import * as Styled from "./styles/LanguageSwitch.styled";

const LanguageSwitch: React.FC = () => {
  const { changeLocale, currentLocale } = useTranslationContext();

  return (
    <Styled.LanguageSwitch>
      {MIMITHA_LOCALES.map((lang, index) => (
        <Fragment key={uuid()}>
          <Styled.LanguageSwitchButton
            className={currentLocale === lang ? "active_locale" : ""}
            onClick={() => changeLocale(lang)}
          >
            {lang.toUpperCase()}
          </Styled.LanguageSwitchButton>

          {index === 0 && <hr className="language-switch__devider" />}
        </Fragment>
      ))}
    </Styled.LanguageSwitch>
  );
};

export default LanguageSwitch;
