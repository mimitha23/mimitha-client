import { useAppSelector } from "store/hooks";
import { selectProductsSearchResult } from "store/selectors/product.selectors";

import SearchBarResultsList from "./SearchBarResultsList";
import SearchBarResultsHeader from "./SearchBarResultsHeader";
import * as Styled from "./styles/SearchBarResults.styled";

interface SearchBarResultsT {
  search: string;
  activeClass: string;
  onSearchClose: () => void;
}

const SearchBarResults: React.FC<SearchBarResultsT> = ({
  search,
  activeClass,
  onSearchClose,
}) => {
  const result = useAppSelector(selectProductsSearchResult);

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
};

export default SearchBarResults;
