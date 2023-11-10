import { ProductCard } from "components/Layouts";

import { ProductShortInfoT } from "interface/DB/product.types";

interface FavoritesListT {
  products: Array<ProductShortInfoT>;
}

const FavoritesList: React.FC<FavoritesListT> = ({ products }) => {
  return (
    <ul className="user-favorites__list">
      {products.map((product) => (
        <li key={product._id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
};

export default FavoritesList;
