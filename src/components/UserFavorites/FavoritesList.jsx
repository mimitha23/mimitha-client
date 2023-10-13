import { ProductCard } from "components/Layouts";

export default function FavoritesList({ products }) {
  return (
    <ul className="user-favorites__list">
      {products.map((product) => (
        <li key={product._id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
