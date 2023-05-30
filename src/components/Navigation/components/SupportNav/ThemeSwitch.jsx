import { useThemeContext } from "Theme";

import { MoonIcon, SunIcon } from "components/Layouts/Icons/index";
import * as Styled from "./styles/ThemeSwitch.styled";

export default function ThemeSwitch() {
  const { setTheme, mode } = useThemeContext();

  return (
    <Styled.ThemeSwitch>
      <button onClick={() => setTheme(!mode)}>
        {mode ? <MoonIcon /> : <SunIcon />}
      </button>
    </Styled.ThemeSwitch>
  );
}
