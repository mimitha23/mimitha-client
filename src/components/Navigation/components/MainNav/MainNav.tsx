import MainNavList from "./MainNavList";
import * as Styled from "./styles/MainNav.styled";

interface MainNavT {
  onBurgerClose: () => void;
  activeBurgerNav: boolean;
}

const MainNav: React.FC<MainNavT> = ({ onBurgerClose, activeBurgerNav }) => {
  return (
    <Styled.MainNavContainer
      onClick={onBurgerClose}
      className={activeBurgerNav ? "active-burger--nav active-modal" : ""}
    >
      <MainNavList activeBurgerNav={activeBurgerNav} />
    </Styled.MainNavContainer>
  );
};

export default MainNav;
