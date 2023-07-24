import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  selectProductsSearchResult,
  selectProductsSearchStatus,
} from "store/selectors/productSelectors";
import { PATHS } from "config/routes";
import { useLocationState } from "hooks/utils";

import { ProductCard, Spinner } from "components/Layouts";
import * as Styled from "./styles/SearchBarResults.styled";

export default function SearchBarResults({ onSearchClose, search }) {
  const result = useSelector(selectProductsSearchResult);
  const status = useSelector(selectProductsSearchStatus);

  const { setLocationState, getLocationStateDefaults } = useLocationState();
  const locationStateDefaults = getLocationStateDefaults();

  return (
    <Styled.SearchBarResults className="search-bar__result-box active-modal">
      <div className="search-bar__result-box__content" onClick={onSearchClose}>
        <div
          className="search-bar__result-box__content-head"
          onClick={(e) => e.stopPropagation()}
        >
          {result[0] && (
            <>
              <span>{result.length} search results</span>
              <Link
                to={PATHS.products.fullPath}
                state={setLocationState({
                  search,
                  title: locationStateDefaults.title,
                  category: locationStateDefaults.category,
                  productType: locationStateDefaults.productType,
                })}
                onClick={onSearchClose}
              >
                view all
              </Link>
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
