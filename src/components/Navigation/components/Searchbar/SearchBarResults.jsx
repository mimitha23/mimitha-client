import { Link } from "react-router-dom";
import { PATHS } from "config/routes";

import { ProductCard } from "components/Layouts/index";
import * as Styled from "./styles/SearchBarResults.styled";
import { developedProducts } from "lib";

export default function SearchBarResults({ onSearchClose }) {
  return (
    <Styled.SearchBarResults className="search-bar__result-box active-modal">
      <div className="search-bar__result-box__content" onClick={onSearchClose}>
        <div
          className="search-bar__result-box__content-head"
          onClick={(e) => e.stopPropagation()}
        >
          <span>2 search results</span>
          <Link to={PATHS.products.fullPath}>view all</Link>
        </div>

        <div
          className="search-bar__result-box__content-list"
          onClick={(e) => e.stopPropagation()}
        >
          {developedProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </Styled.SearchBarResults>
  );
}
