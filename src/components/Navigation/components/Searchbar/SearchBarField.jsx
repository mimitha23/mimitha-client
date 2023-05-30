import { useTranslation } from "react-i18next";

import { SearchIcon, CloseXIcon } from "components/Layouts/Icons";
import * as Styled from "./styles/SearchbarField.styled";

export default function SearchBarField({
  search,
  setSearch,
  setActiveResults,
  onSearchClose,
}) {
  const { t } = useTranslation();

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
        placeholder={t("navigation.searchbar.placeholder")}
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
