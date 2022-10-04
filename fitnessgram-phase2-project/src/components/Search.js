import React, { useState } from "react";

function Search({ search, setSearch }) {
  return (
    <div>
      <input
        type="search"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
    </div>
  );
}

export default Search;
