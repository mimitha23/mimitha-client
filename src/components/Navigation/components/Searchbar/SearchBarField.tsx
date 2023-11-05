import { useTranslation } from "react-i18next";

import * as Styled from "./styles/SearchbarField.styled";
import { SearchIcon, CloseXIcon } from "components/Layouts/Icons";

interface SearchBarFieldT {
  search: string;
  activeClass: string;
  onSearchClose: () => void;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setActiveResults: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchBarField: React.FC<SearchBarFieldT> = ({
  search,
  setSearch,
  activeClass,
  setActiveResults,
  onSearchClose,
}) => {
  const { t } = useTranslation();

  return (
    <Styled.SearchBarField className={activeClass}>
      <label
        className="search-icon search-label"
        onClick={() => setActiveResults(true)}
      >
        <SearchIcon />
      </label>

      <input
        type="text"
        name="search"
        value={search}
        className="search--input"
        onFocus={() => setActiveResults(true)}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={t("navigation.searchbar.placeholder") as string}
      />

      <button className="search-icon search__close-btn" onClick={onSearchClose}>
        <CloseXIcon />
      </button>
    </Styled.SearchBarField>
  );
};

export default SearchBarField;
