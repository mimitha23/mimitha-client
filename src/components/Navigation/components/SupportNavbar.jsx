import { useThemeContext } from "Theme";
import { useTranslationContext } from "I18nextProvider";

import {
  FacebookIcon,
  InstagramIcon,
  SunIcon,
  MoonIcon,
} from "components/Layouts/Icons";
import * as Styled from "./styles/SupportNavbar.styled";

export default function SupportNavbar({ partialNav }) {
  const { setTheme, mode } = useThemeContext();
  const { changeLocale } = useTranslationContext();

  return (
    <Styled.SupportNavbarContainer partialNav={partialNav}>
      <div className="darkMode--switch">
        <button onClick={() => setTheme(!mode)}>
          {mode ? <MoonIcon /> : <SunIcon />}
        </button>
      </div>

      <div className="language-switch">
        <button
          className="language-switch__btn"
          onClick={() => changeLocale("ka")}
        >
          GE
        </button>
        <button
          className="language-switch__btn"
          onClick={() => changeLocale("en")}
        >
          EN
        </button>
      </div>

      <div className="support-nav__social-networks">
        <FacebookIcon />
        <InstagramIcon />
      </div>
    </Styled.SupportNavbarContainer>
  );
}
