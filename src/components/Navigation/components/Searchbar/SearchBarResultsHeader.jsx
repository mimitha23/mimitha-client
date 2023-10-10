import { Link } from "react-router-dom";
import { PATHS } from "config/routes";
import { useLocationState } from "hooks/utils";
import * as Styled from "./styles/SearchBarResultsHeader.styled";

export default function SearchBarResultsHeader({
  search,
  showResults,
  searchAmount,
  onSearchClose,
}) {
  const { setLocationState, getLocationStateDefaults } = useLocationState();
  const locationStateDefaults = getLocationStateDefaults();

  return (
    <Styled.SearchBarResultsHeader onClick={(e) => e.stopPropagation()}>
      {showResults && (
        <>
          <span>{searchAmount} search results</span>

          <Link
            onClick={onSearchClose}
            to={PATHS.products.fullPath}
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
}
