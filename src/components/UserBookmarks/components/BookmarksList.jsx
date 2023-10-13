import { ProductCard } from "components/Layouts";
import * as Styled from "./styles/BookmarksList.styled";

export default function BookmarksList({ list }) {
  return (
    <Styled.BookmarksList>
      {list.products.map((product) => (
        <li key={product._id}>
          <ProductCard product={product} />
        </li>
      ))}
    </Styled.BookmarksList>
  );
}
