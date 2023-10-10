import MainNavList from "./MainNavList";
import * as Styled from "./styles/MainNav.styled";

export default function MainNav({ onBurgerClose, activeBurgerNav }) {
  return (
    <Styled.MainNavContainer
      onClick={onBurgerClose}
      className={activeBurgerNav ? "active-burger--nav active-modal" : ""}
    >
      <MainNavList activeBurgerNav={activeBurgerNav} />
    </Styled.MainNavContainer>
  );
}
