/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { productsActions } from "store/reducers/produtsReducer";

import SearchBarField from "./SearchBarField";
import SearchBarResults from "./SearchBarResults";
import * as Styled from "./styles/SearchBar.styled";

export default function SearchBar() {
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [isBillingualSearch, setIsBillingualSearch] = useState("");
  const [activeResults, setActiveResults] = useState(false);

  function onSearchClose() {
    setSearch("");
    setActiveResults(false);
  }

  useEffect(() => {
    if (!search) {
      dispatch(productsActions.resetSearchResult());
      isBillingualSearch && setIsBillingualSearch(false);
      return;
    }

    const timeoutId = setTimeout(() => {
      const isEn = /^[a-zA-Z]*$/.test(search);
      const isKa = /^[ა-ჰ]*$/g.test(search);

      if (!isKa && !isEn) return setIsBillingualSearch(true);
      else if ((isEn || isKa) && isBillingualSearch)
        setIsBillingualSearch(true);

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

  return (
    <Styled.SearchBar className={activeResults ? "active_bar" : "toto"}>
      <div className="search-bar__wraper">
        <SearchBarField
          search={search}
          setSearch={setSearch}
          setActiveResults={setActiveResults}
          onSearchClose={onSearchClose}
        />

        {isBillingualSearch && (
          <div className="search-warning">
            გთხოვთ საძიებო ველში შეიყვანოთ მხოლოდ ქართული ან მხოლოდ ლათინური
            ასოები.
          </div>
        )}
      </div>

      {activeResults && <SearchBarResults onSearchClose={onSearchClose} />}
    </Styled.SearchBar>
  );
}
