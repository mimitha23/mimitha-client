import * as Styled from "./styles/SearchBar.styled";
import { ProductCard } from "components/Layouts/index";

function SearchBarResults({ onSearchClose }) {
  return (
    <Styled.SearchBarResults className="search-bar__result-box active-modal">
      <div className="search-bar__result-box__content" onClick={onSearchClose}>
        <div
          className="search-bar__result-box__content-head"
          onClick={(e) => e.stopPropagation()}
        >
          <span>2 search results</span>
        </div>

        <div
          className="search-bar__result-box__content-list"
          onClick={(e) => e.stopPropagation()}
        >
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </Styled.SearchBarResults>
  );
}

export default SearchBarResults;
