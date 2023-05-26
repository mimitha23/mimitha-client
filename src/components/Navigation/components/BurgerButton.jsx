import { BurgerIcon } from "components/Layouts/Icons/index";

function BurgerButton({ setActiveBurgerNav }) {
  return (
    <button
      className="burger-btn"
      onClick={() => setActiveBurgerNav((prev) => !prev)}
    >
      <BurgerIcon />
    </button>
  );
}

export default BurgerButton;
