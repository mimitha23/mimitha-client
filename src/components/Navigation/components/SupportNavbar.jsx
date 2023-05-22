import { useContext } from "react";
import { ThemeContext } from "Theme";

import * as Styled from "./styles/SupportNavbar.styled";
import {
  FacebookIcon,
  InstagramIcon,
  SunIcon,
  MoonIcon,
} from "components/Layouts/Icons";

export default function SupportNavbar({ partialNav }) {
  const { setTheme, mode } = useContext(ThemeContext);

  return (
    <Styled.SupportNavbarContainer partialNav={partialNav}>
      <div className="darkMode--switch">
        <button onClick={() => setTheme(!mode)}>
          {mode ? <MoonIcon /> : <SunIcon />}
        </button>
      </div>

      <div className="language-switch">
        <button className="language-switch__btn">GE</button>
        <button className="language-switch__btn">EN</button>
      </div>

      <div className="support-nav__social-networks">
        <FacebookIcon />
        <InstagramIcon />
      </div>
    </Styled.SupportNavbarContainer>
  );
}
