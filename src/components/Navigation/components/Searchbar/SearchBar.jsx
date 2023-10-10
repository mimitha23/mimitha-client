/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { productsActions } from "store/reducers/produts.reducer";

import SearchBarField from "./SearchBarField";
import SearchBarResults from "./SearchBarResults";
import * as Styled from "./styles/SearchBar.styled";

export default function SearchBar() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [search, setSearch] = useState("");
  const [isBilingualSearch, setIsBilingualSearch] = useState("");
  const [activeResults, setActiveResults] = useState(false);

  function onSearchClose() {
    setSearch("");
    setActiveResults(false);
  }

  useEffect(() => {
    if (!search) {
      dispatch(productsActions.resetSearchResult());
      isBilingualSearch && setIsBilingualSearch(false);
      return;
    }

    const timeoutId = setTimeout(() => {
      const isEn = /^[a-zA-Z]*$/.test(search);
      const isKa = /^[ა-ჰ]*$/g.test(search);

      if (!isKa && !isEn) return setIsBilingualSearch(true);
      else if ((isEn || isKa) && isBilingualSearch) setIsBilingualSearch(true);

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
          setActiveResults={setActiveResults}
          onSearchClose={onSearchClose}
        />

        {isBilingualSearch && (
          <Styled.SearchWarning>
            {t("navigation.searchbar.search_warning")}
          </Styled.SearchWarning>
        )}
      </div>

      {activeResults && (
        <SearchBarResults
          onSearchClose={onSearchClose}
          search={search}
          activeClass={activeClass}
        />
      )}
    </Styled.SearchBar>
  );
}
