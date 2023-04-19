import { useState } from "react";
import {
  StyledProfileIcon,
  ProfileIconText,
  DarkModeSwitch,
} from "./ProfileIcon.Styled";

export default function ProfileIcon(props) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <StyledProfileIcon className="profileIcon">
      <img src="#" alt="ICO" className="profileIcon--icon" />
      <ProfileIconText className="profileIcon--text">
        <span>ჩემი პროფილი</span>
        <DarkModeSwitch className="darkMode--switch">
          <span onClick={() => setDarkMode((prev) => !prev)}>Dark Mode</span>
        </DarkModeSwitch>
      </ProfileIconText>
    </StyledProfileIcon>
  );
}
