/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useAppDispatch } from "store/hooks";
import { useTranslation } from "react-i18next";

import { productsActions } from "store/reducers/products.reducer";
import { isLatinLettersRegex, isGeorgiaLettersRegex } from "utils/regex";

import SearchBarField from "./SearchBarField";
import SearchBarResults from "./SearchBarResults";
import * as Styled from "./styles/SearchBar.styled";

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const [search, setSearch] = useState("");
  const [isBilingualSearch, setIsBilingualSearch] = useState(false);
  const [activeResults, setActiveResults] = useState(false);

  function onSearchClose() {
    setSearch("");
    setActiveResults(false);
  }

  useEffect(() => {
    if (!search) {
      dispatch(productsActions.cleanUpSearchResult());
      isBilingualSearch && setIsBilingualSearch(false);
      return;
    }

    const timeoutId = setTimeout(() => {
      const isEn = isLatinLettersRegex.test(search);
      const isKa = isGeorgiaLettersRegex.test(search);

      if (!isKa && !isEn) return setIsBilingualSearch(true);

      dispatch(
        productsActions.search({
          search,
          locale: isKa ? "ka" : isEn ? "en" : "",
        })
      );
    }, 600);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [search]);

  const activeClass = activeResults ? "active_bar" : "";

  return (
    <Styled.SearchBar className={activeClass}>
      <div className="search-bar__wrapper">
        <SearchBarField
          search={search}
          setSearch={setSearch}
          activeClass={activeClass}
          onSearchClose={onSearchClose}
          setActiveResults={setActiveResults}
        />

        {isBilingualSearch && (
          <Styled.SearchWarning>
            {t("navigation.searchbar.search_warning")}
          </Styled.SearchWarning>
        )}
      </div>

      {activeResults && (
        <SearchBarResults
          search={search}
          activeClass={activeClass}
          onSearchClose={onSearchClose}
        />
      )}
    </Styled.SearchBar>
  );
};

export default SearchBar;
