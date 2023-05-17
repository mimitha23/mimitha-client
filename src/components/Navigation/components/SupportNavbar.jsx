import * as Styled from "./styles/SupportNavbar.styled";
import { FacebookIcon, InstagramIcon } from "components/Layouts/Icons";
export default function SupportNavbar(props) {
  return (
    <Styled.SupportNavbarContainer>
      <ul className="support-nav__list">
        <li>ჩვენს შესახებ</li>
        <li>კონტაქტი</li>
        <li>დახმარება</li>
      </ul>

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
