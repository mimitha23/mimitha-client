import { useState } from "react";
import {
  SupportNavbarContainer,
  SupportNavbarList,
  SupportNavbarListItem,
  LanguageSwitch,
  LanguageSwitchItem,
  SupportNavbarSocialNetworks,
} from "./SupportNavbar.Styled";

import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function SupportNavbar(props) {
  const [languageSwitch, setLanguageSwitch] = useState(false);

  return (
    <SupportNavbarContainer>
      <SupportNavbarList>
        <SupportNavbarListItem>ჩვენს შესახებ</SupportNavbarListItem>
        <SupportNavbarListItem>კონტაქტი</SupportNavbarListItem>
        <SupportNavbarListItem>დახმარება</SupportNavbarListItem>
      </SupportNavbarList>
      <LanguageSwitch onClick={() => setLanguageSwitch((prev) => !prev)}>
        <LanguageSwitchItem>GE</LanguageSwitchItem>
        <LanguageSwitchItem>EN</LanguageSwitchItem>
      </LanguageSwitch>
      <SupportNavbarSocialNetworks className="supportNavbarSocialNetworks">
        <FaFacebook />
        <FaInstagram />
      </SupportNavbarSocialNetworks>
    </SupportNavbarContainer>
  );
}
