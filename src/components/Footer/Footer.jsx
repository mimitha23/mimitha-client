import Copyright from "./Copyright";
import SocialIcons from "./SocialIcons";
import LearnMore from "./LearnMore";
import ExtraInformation from "./ExtraInformation";
import * as Styled from "./Footer.styled";

export default function Footer() {
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
