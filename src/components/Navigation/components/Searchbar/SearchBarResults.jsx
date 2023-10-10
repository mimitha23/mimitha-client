import { useSelector } from "react-redux";
import { selectProductsSearchResult } from "store/selectors/product.selectors";

import SearchBarResultsList from "./SearchBarResultsList";
import SearchBarResultsHeader from "./SearchBarResultsHeader";
import * as Styled from "./styles/SearchBarResults.styled";

export default function SearchBarResults({
  search,
  activeClass,
  onSearchClose,
}) {
  const result = useSelector(selectProductsSearchResult);

  return (
    <Styled.SearchBarResults className={`${activeClass} active-modal`}>
      <div className="search-bar__result-box__content" onClick={onSearchClose}>
        <SearchBarResultsHeader
          search={search}
          searchAmount={result.length}
          onSearchClose={onSearchClose}
          showResults={result[0] ? true : false}
        />

        <SearchBarResultsList result={result} />
      </div>
    </Styled.SearchBarResults>
  );
}
