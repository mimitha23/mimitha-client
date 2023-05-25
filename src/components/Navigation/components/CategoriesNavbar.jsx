import { Link } from "react-router-dom";
import * as Styled from "./styles/CategoriesNavbar.styled";

export default function CategoriesNavbar(props) {
  return (
    <Styled.CategoriesNavbar>
      <ul className="categories-nav__list">
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
