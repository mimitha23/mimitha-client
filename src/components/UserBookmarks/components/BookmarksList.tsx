import { ProductCard } from "components/Layouts";
import * as Styled from "./styles/BookmarksList.styled";

import { ProductShortInfoT } from "interface/DB/product.types";

interface BookmarksListT {
  list: Array<ProductShortInfoT>;
}

const BookmarksList: React.FC<BookmarksListT> = ({ list }) => {
  return (
    <Styled.BookmarksList>
      {list.map((product) => (
        <li key={product._id}>
          <ProductCard product={product} />
        </li>
      ))}
    </Styled.BookmarksList>
  );
};

export default BookmarksList;
