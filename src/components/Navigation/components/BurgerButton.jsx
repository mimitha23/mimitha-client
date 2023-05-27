import { BurgerIcon } from "components/Layouts/Icons/index";

function BurgerButton({ setActiveBurgerNav }) {
  return (
    <button
      className="burger-btn"
      onClick={() =>
        setActiveBurgerNav((prev) =>
          prev === false || prev === null ? true : false
        )
      }
    >
      <BurgerIcon />
    </button>
  );
}

export default BurgerButton;
