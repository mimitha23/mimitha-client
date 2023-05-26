import * as Styled from "./styles/SearchBar.styled";
import { ProductCard } from "components/Layouts/index";

function SearchBarResults() {
  return (
    <Styled.SearchBarResults className="search-bar__result-box active-modal">
      <div className="search-bar__result-box__content">
        <div className="search-bar__result-box__content-head">
          <span>6 search results</span>
        </div>

        <div className="search-bar__result-box__content-list">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </Styled.SearchBarResults>
  );
}

export default SearchBarResults;
