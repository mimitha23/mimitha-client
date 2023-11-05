import { Link } from "react-router-dom";

import { PATHS } from "config/paths";
import { useLocationState } from "hooks/utils";

import * as Styled from "./styles/SearchBarResultsHeader.styled";

interface SearchBarResultsHeaderT {
  search: string;
  showResults: boolean;
  searchAmount: number;
  onSearchClose: () => void;
}

const SearchBarResultsHeader: React.FC<SearchBarResultsHeaderT> = ({
  search,
  showResults,
  searchAmount,
  onSearchClose,
}) => {
  const { setLocationState, locationStateDefaults } = useLocationState();

  return (
    <Styled.SearchBarResultsHeader onClick={(e) => e.stopPropagation()}>
      {showResults && (
        <>
          <span>{searchAmount} search results</span>

          <Link
            onClick={onSearchClose}
            to={PATHS.products_page}
            className="search-results__header"
            state={setLocationState({
              search,
              title: locationStateDefaults.title,
              category: locationStateDefaults.category,
              productType: locationStateDefaults.productType,
            })}
          >
            view all
          </Link>
        </>
      )}
    </Styled.SearchBarResultsHeader>
  );
};

export default SearchBarResultsHeader;
