import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  selectProductsSearchResult,
  selectProductsSearchStatus,
} from "store/selectors/productSelectors";
import { PATHS } from "config/routes";

import { ProductCard, Spinner } from "components/Layouts";
import * as Styled from "./styles/SearchBarResults.styled";

export default function SearchBarResults({ onSearchClose }) {
  const result = useSelector(selectProductsSearchResult);
  const status = useSelector(selectProductsSearchStatus);

  return (
    <Styled.SearchBarResults className="search-bar__result-box active-modal">
      <div className="search-bar__result-box__content" onClick={onSearchClose}>
        <div
          className="search-bar__result-box__content-head"
          onClick={(e) => e.stopPropagation()}
        >
          {result[0] && (
            <>
              <span>2 search results</span>
              <Link to={PATHS.products.fullPath}>view all</Link>
            </>
          )}
        </div>

        <div
          className="search-bar__result-box__content-list"
          onClick={(e) => e.stopPropagation()}
        >
          {!status.loading &&
            result.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}

          {status.loading && <Spinner />}
        </div>
      </div>
    </Styled.SearchBarResults>
  );
}
