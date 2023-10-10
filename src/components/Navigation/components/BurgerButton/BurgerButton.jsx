import { BurgerIcon } from "components/Layouts/Icons/index";
import * as Styled from "./BurgerButton.styled";

export default function BurgerButton({ setActiveBurgerNav }) {
  return (
    <Styled.BurgerButton
      className="burger-btn"
      onClick={() =>
        setActiveBurgerNav((prev) =>
          prev === false || prev === null ? true : false
        )
      }
    >
      <BurgerIcon />
    </Styled.BurgerButton>
  );
}
