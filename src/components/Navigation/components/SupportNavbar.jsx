import * as Styled from "./styles/SupportNavbar.styled";
import { FaFacebook, FaInstagram } from "react-icons/fa";

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
        <FaFacebook />
        <FaInstagram />
      </div>
    </Styled.SupportNavbarContainer>
  );
}
