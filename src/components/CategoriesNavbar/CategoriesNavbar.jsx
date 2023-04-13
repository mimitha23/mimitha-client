import "./categoriesNavbar.css";

export default function CategoriesNavbar(props) {
  return (
    <div className="categoriesNavbar--container">
      <ul className="categoriesNavbar--list">
        <li className="list--item">მამაკაცი</li>
        <li className="list--item">ქალბატონი</li>
        <li className="list--item">მოზარდი</li>
        <li className="list--item">საოჯახო</li>
        <li className="list--item">კომბინაცია</li>
        <li className="list--item">ჩემი სტილი</li>
        <li className="list--item">ფასდაკლება</li>
      </ul>
    </div>
  );
}
