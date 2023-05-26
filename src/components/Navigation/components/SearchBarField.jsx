import * as Styled from "./styles/SearchBar.styled";
import { SearchIcon, CloseXIcon } from "components/Layouts/Icons";

function SearchBarField({
  search,
  setSearch,
  setActiveResults,
  onSearchClose,
}) {
  return (
    <Styled.SearchBarField className="search-bar__inp-field">
      <label
        className="search-icon search-label"
        onClick={() => setActiveResults(true)}
      >
        <SearchIcon />
      </label>
      <input
        type="text"
        placeholder="თუ ეძებ, იპოვი..."
        className="search--input"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setActiveResults(true)}
      />
      <button className="search-icon search__close-btn" onClick={onSearchClose}>
        <CloseXIcon />
      </button>
    </Styled.SearchBarField>
  );
}

export default SearchBarField;
