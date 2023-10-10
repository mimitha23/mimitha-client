import { useSelector } from "react-redux";
import { selectProductsSearchStatus } from "store/selectors/product.selectors";

import { ProductCard, Spinner } from "components/Layouts";
import * as Styled from "./styles/SearchBarResultsList.styled";

export default function SearchBarResultsList({ result }) {
  const status = useSelector(selectProductsSearchStatus);

  return (
    <Styled.SearchBarResultsList
      className="search-bar__result-box__content-list"
      onClick={(e) => e.stopPropagation()}
    >
      {!status.loading &&
        result.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            showAddToList={false}
          />
        ))}

      {status.loading && <Spinner />}
    </Styled.SearchBarResultsList>
  );
}
