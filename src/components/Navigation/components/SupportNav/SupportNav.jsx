import LanguageSwitch from "./LanguageSwitch";
import ThemeSwitch from "./ThemeSwitch";
import SocialNetworks from "./SocialNetworks";
import UserAvatar from "../UserAvatar/UserAvatar";

import * as Styled from "./styles/SupportNav.styled";

export default function SupportNav({ partialNav }) {
  return (
    <Styled.SupportNav partialNav={partialNav}>
      <ThemeSwitch />
      <LanguageSwitch />
      <SocialNetworks />
      <UserAvatar />
    </Styled.SupportNav>
  );
}
