import React from "react";

// Assets
import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";

const SearchInput = () => {
  return (
    <div className="border rounded px-2 h-8 flex items-center gap-x-2">
      <SearchIcon />
      <input
        title="search"
        type="text"
        className="input h-full w-full"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchInput;
