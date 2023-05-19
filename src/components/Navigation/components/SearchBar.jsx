import { useState } from "react";
import { SearchIcon } from "components/Layouts/Icons";
import * as Styled from "./styles/SearchBar.styled";

export default function SearchBar(props) {
  const [search, setSearch] = useState("");

  return (
    <Styled.SearchBar className="searchBar">
      <span className="search-icon">
        <SearchIcon />
      </span>
      <input
        type="text"
        placeholder="თუ ეძებ, იპოვი..."
        className="search--input"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </Styled.SearchBar>
  );
}
