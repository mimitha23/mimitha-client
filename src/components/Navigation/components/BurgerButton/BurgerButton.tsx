import { BurgerIcon } from "components/Layouts/Icons/index";
import * as Styled from "./BurgerButton.styled";

interface BurgerButtonT {
  setActiveBurgerNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const BurgerButton: React.FC<BurgerButtonT> = ({ setActiveBurgerNav }) => {
  return (
    <Styled.BurgerButton
      className="burger-btn"
      onClick={() => setActiveBurgerNav((prev) => !prev)}
    >
      <BurgerIcon />
    </Styled.BurgerButton>
  );
};

export default BurgerButton;
