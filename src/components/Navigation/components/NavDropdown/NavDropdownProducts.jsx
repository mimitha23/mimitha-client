import { v4 as uuid } from "uuid";

export default function NavDropdownProducts({ products }) {
  return (
    <div className="dropdown-nav__products-container">
      {products.map((item) => (
        <figure key={uuid()} className="dropdown-nav__products-container--fig">
          <img src={item.media} alt="" />
        </figure>
      ))}
    </div>
  );
}
