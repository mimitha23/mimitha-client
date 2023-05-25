import * as Styled from "./Footer.styled";

import Copyright from "./Copyright";
import SocialIcons from "./SocialIcons";
import LearnMore from "./LearnMore";
import ExtraInformation from "./ExtraInformation";

export default function Footer(props) {
  return (
    <Styled.Footer>
      <div className="footer__content-wrapper">
        <LearnMore />
        <ExtraInformation />
        <SocialIcons />
      </div>

      <Copyright />
    </Styled.Footer>
  );
}
