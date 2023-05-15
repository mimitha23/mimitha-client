import { Link } from "react-router-dom";
import * as Styled from "./styles/CategoriesNavbar.styled";

export default function CategoriesNavbar(props) {
  return (
    <Styled.CategoriesNavbar>
      <ul className="categoriesNavbar--list">
        <li>
          <Link to={"/"}>მამაკაცი</Link>
        </li>
        <li>ქალბატონი</li>
        <li>მოზარდი</li>
        <li>საოჯახო</li>
        <li>კომბინაცია</li>
        <li>ჩემი სტილი</li>
        <li>ფასდაკლება</li>
      </ul>
    </Styled.CategoriesNavbar>
  );
}
