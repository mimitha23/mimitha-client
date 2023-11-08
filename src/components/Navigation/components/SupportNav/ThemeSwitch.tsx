import { useThemeContext } from "providers/globals/Theme";

import { MoonIcon, SunIcon } from "components/Layouts/Icons/index";
import * as Styled from "./styles/ThemeSwitch.styled";

const ThemeSwitch: React.FC = () => {
  const { setTheme, mode } = useThemeContext();

  return (
    <Styled.ThemeSwitch>
      <button
        onClick={() => setTheme(mode === "light" ? "dark" : "light")}
        title="change theme"
      >
        {mode ? <MoonIcon /> : <SunIcon />}
      </button>
    </Styled.ThemeSwitch>
  );
};

export default ThemeSwitch;
