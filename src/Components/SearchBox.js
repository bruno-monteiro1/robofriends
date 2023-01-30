import React from "react";
import "tachyons";

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa2 bg-lightest-blue"
        type="search"
        placeholder="Search Robots"
        value={searchField}
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
