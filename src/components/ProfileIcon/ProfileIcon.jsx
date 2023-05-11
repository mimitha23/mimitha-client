import { useContext } from "react";
import { ThemeContext } from "Theme";

import {
  StyledProfileIcon,
  ProfileIconText,
  DarkModeSwitch,
} from "./ProfileIcon.Styled";

export default function ProfileIcon() {
  const { mode, setTheme } = useContext(ThemeContext);
  
  return (
    <StyledProfileIcon className="profileIcon">
      <img
        src="/assets/images/aleks_vasadze.jpg"
        alt="ICO"
        className="profileIcon--icon"
      />
      <ProfileIconText className="profileIcon--text">
        <span>ჩემი პროფილი</span>
        <DarkModeSwitch className="darkMode--switch">
          <span onClick={() => setTheme(!mode)}>Dark Mode</span>
        </DarkModeSwitch>
      </ProfileIconText>
    </StyledProfileIcon>
  );
}
