import { useState } from "react";
import {
  StyledSearchBar,
  StyledSearchInput,
  SearchIcon,
} from "./SearchBar.Styled";

export default function SearchBar(props) {
  const [search, setSearch] = useState("");

  return (
    <StyledSearchBar className="searchBar">
      <SearchIcon src="#" alt="ICO" className="search--icon" />
      <StyledSearchInput
        type="text"
        placeholder="თუ ეძებ, იპოვი..."
        className="search--input"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </StyledSearchBar>
  );
}
