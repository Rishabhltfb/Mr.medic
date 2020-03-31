import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="md-form active-cyan active-cyan-2 mb-3 mt-0">
      <input
        className="form-control"
        type="search"
        placeholder="SEARCH"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
