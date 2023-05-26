import { useState } from "react";

import SearchBarField from "./SearchBarField";
import SearchBarResults from "./SearchBarResults";
import * as Styled from "./styles/SearchBar.styled";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [activeResults, setActiveResults] = useState(false);

  function onSearchClose() {
    setSearch("");
    setActiveResults(false);
  }

  return (
    <Styled.SearchBar className={activeResults ? "active_bar" : "toto"}>
      <SearchBarField
        search={search}
        setSearch={setSearch}
        setActiveResults={setActiveResults}
        onSearchClose={onSearchClose}
      />

      {activeResults && <SearchBarResults />}
    </Styled.SearchBar>
  );
}
