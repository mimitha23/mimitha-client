import { useContext } from "react";
import { ThemeContext } from "Theme";

import * as Styled from "./styles/ProfileIcon.styled";

export default function ProfileIcon() {
  const { mode, setTheme } = useContext(ThemeContext);

  return (
    <Styled.ProfileIcon className="profileIcon">
      <figure className="user-fig">
        <img src="/assets/images/aleks_vasadze.jpg" alt="ICO" />
      </figure>
      <div className="profileIcon--text">
        <span>ჩემი პროფილი</span>
        <div className="darkMode--switch">
          <button onClick={() => setTheme(!mode)}>
            {mode ? "ღამის რეჟიმი" : "დღის რეჟიმი"}
          </button>
        </div>
      </div>
    </Styled.ProfileIcon>
  );
}
