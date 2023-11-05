import { v4 as uuid } from "uuid";

interface NavDropdownProductsT {
  products: any;
}

const NavDropdownProducts: React.FC<NavDropdownProductsT> = ({ products }) => {
  return (
    <div className="dropdown-nav__products-container">
      {products.map((item: any) => (
        <figure key={uuid()} className="dropdown-nav__products-container--fig">
          <img src={item.media} alt="" />
        </figure>
      ))}
    </div>
  );
};

export default NavDropdownProducts;
