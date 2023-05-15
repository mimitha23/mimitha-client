import { useState } from "react";
import * as Styled from "./styles/SearchBar.styled";

export default function SearchBar(props) {
  const [search, setSearch] = useState("");

  return (
    <Styled.SearchBar className="searchBar">
      <img src="#" alt="ICO" className="search--icon" />
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
