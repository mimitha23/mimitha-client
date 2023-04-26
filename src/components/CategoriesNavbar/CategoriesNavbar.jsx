import { Link } from "react-router-dom";
import {
  StyledCategoriesNavbar,
  CategoriesNavbarList,
} from "./CategoriesNavbar.Styled";

export default function CategoriesNavbar(props) {
  return (
    <StyledCategoriesNavbar className="categoriesNavbar--container">
      <CategoriesNavbarList className="categoriesNavbar--list">
        <li className="list--item">
          <Link to={"/"}>მამაკაცი</Link>
        </li>
        <li className="list--item">ქალბატონი</li>
        <li className="list--item">მოზარდი</li>
        <li className="list--item">საოჯახო</li>
        <li className="list--item">კომბინაცია</li>
        <li className="list--item">ჩემი სტილი</li>
        <li className="list--item">ფასდაკლება</li>
      </CategoriesNavbarList>
    </StyledCategoriesNavbar>
  );
}
