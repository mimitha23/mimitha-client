import LanguageSwitch from "./LanguageSwitch";
import ThemeSwitch from "./ThemeSwitch";
import SocialNetworks from "./SocialNetworks";
import UserAvatar from "../UserAvatar/UserAvatar";
import CurrencySwitch from "./CurrencySwitch";

import * as Styled from "./styles/SupportNav.styled";

export default function SupportNav({ partialNav }) {
  return (
    <Styled.SupportNav partialNav={partialNav}>
      <ThemeSwitch />
      <CurrencySwitch />
      <LanguageSwitch />
      <SocialNetworks />
      <UserAvatar />
    </Styled.SupportNav>
  );
}
