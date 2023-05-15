import { useState } from "react";
import * as Styled from "./styles/SupportNavbar.styled";

import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function SupportNavbar(props) {
  const [languageSwitch, setLanguageSwitch] = useState(false);

  return (
    <Styled.SupportNavbarContainer>
      <ul>
        <li>ჩვენს შესახებ</li>
        <li>კონტაქტი</li>
        <li>დახმარება</li>
      </ul>
      <div
        onClick={() => setLanguageSwitch((prev) => !prev)}
        className="language-switch"
      >
        <span className="language-switch--item">GE</span>
        <span className="language-switch--item">EN</span>
      </div>
      <div className="supportNavbarSocialNetworks">
        <FaFacebook />
        <FaInstagram />
      </div>
    </Styled.SupportNavbarContainer>
  );
}
