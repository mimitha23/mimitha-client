import { Link } from "react-router-dom";
import * as Styled from "./styles/CategoriesNavbar.styled";

export default function CategoriesNavbar({ activeBurgerNav, onBurgerClose }) {
  return (
    <Styled.CategoriesNavbar
      onClick={onBurgerClose}
      className={`${typeof activeBurgerNav === "boolean" ? "burger-nav" : ""} ${
        activeBurgerNav ? "active-burger--nav active-modal" : ""
      }`}
    >
      <ul className="categories-nav__list" onClick={(e) => e.stopPropagation()}>
        <li>
          <Link to={"/"}>მამაკაცი</Link>
        </li>
        <li>
          <Link to="/">ქალბატონი</Link>
        </li>
        <li>
          <Link to="/">მოზარდი</Link>
        </li>
        <li>
          <Link to="/">საოჯახო</Link>
        </li>
        <li>
          <Link to="/">კომბინაცია</Link>
        </li>
        <li>
          <Link to="/">ჩემი სტილი</Link>
        </li>
        <li>
          <Link to="/">ფასდაკლება</Link>
        </li>
      </ul>
    </Styled.CategoriesNavbar>
  );
}
