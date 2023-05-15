import { useContext } from "react";
import { ThemeContext } from "Theme";

import * as Styled from "./styles/ProfileIcon.styled";

export default function ProfileIcon() {
  const { mode, setTheme } = useContext(ThemeContext);

  return (
    <Styled.ProfileIcon className="profileIcon">
      <img
        src="/assets/images/aleks_vasadze.jpg"
        alt="ICO"
        className="profileIcon--icon"
      />
      <div className="profileIcon--text">
        <span>ჩემი პროფილი</span>
        <div className="darkMode--switch">
          <span onClick={() => setTheme(!mode)}>Dark Mode</span>
        </div>
      </div>
    </Styled.ProfileIcon>
  );
}
