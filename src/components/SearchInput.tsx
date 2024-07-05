import React from "react";

// Assets
import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";
import { ReactComponent as ClearIcon } from "../assets/icons/cancel.svg";

type SearchInputProps = {
  placeholder?: string;
  query?: string;
  onSearch?: (query: string) => void;
};

const SearchInput: React.FC<SearchInputProps> = ({
  query,
  placeholder,
  onSearch,
}) => {
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    onSearch && onSearch(query);
  };
  return (
    <div className="relative border rounded px-2 h-8 flex items-center gap-x-2">
      <SearchIcon />
      <input
        title="search"
        type="text"
        onChange={(e) => handleSearch(e.target.value)}
        value={searchQuery}
        className="input h-full w-full"
        placeholder={placeholder || "Search"}
      />
      {searchQuery && (
        <ClearIcon
          className="absolute top-0 right-0 w-6 h-6"
          onClick={() => {
            setSearchQuery("");
            onSearch && onSearch("");
          }}
        />
      )}
    </div>
  );
};

export default SearchInput;
