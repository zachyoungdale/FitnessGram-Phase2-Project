import React from "react";

function Search({ search, setSearch }) {
  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="search"
        placeholder="Search Exercise Here..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
    </div>
  );
}

export default Search;
