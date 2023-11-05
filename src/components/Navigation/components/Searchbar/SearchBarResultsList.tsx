import { useAppSelector } from "store/hooks";
import { selectProductsSearchStatus } from "store/selectors/product.selectors";

import { ProductCard, Spinner } from "components/Layouts";
import * as Styled from "./styles/SearchBarResultsList.styled";

interface SearchBarResultsListT {
  result: Array<any>;
}

const SearchBarResultsList: React.FC<SearchBarResultsListT> = ({ result }) => {
  const status = useAppSelector(selectProductsSearchStatus);

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
};

export default SearchBarResultsList;
