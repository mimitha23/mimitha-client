import { useState } from "react";
import "./searchBar.css";

export default function SearchBar(props) {
  const [search, setSearch] = useState({
    search: "",
  });

  return (
    <div className="searchBar">
      <img src="#" alt="ICO" />
      <input type="text" name="search" />
    </div>
  );
}
