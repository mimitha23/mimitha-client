import {
  StyledProfileIcon,
  ProfileIconText,
  DarkModeSwitch,
} from "./ProfileIcon.Styled";

export default function ProfileIcon(props) {
  return (
    <StyledProfileIcon className="profileIcon">
      <img
        src="/images/aleks_vasadze.jpg"
        alt="ICO"
        className="profileIcon--icon"
      />
      <ProfileIconText className="profileIcon--text">
        <span>ჩემი პროფილი</span>
        <DarkModeSwitch className="darkMode--switch">
          <span onClick={props.themeChanger}>Dark Mode</span>
        </DarkModeSwitch>
      </ProfileIconText>
    </StyledProfileIcon>
  );
}
