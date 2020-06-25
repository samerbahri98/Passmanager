import React from "react";

const SearchBar = (props) => {
  return (
    <div className="panel-block">
      <p className="control has-icon">
        <input
          className="input is-small"
          type="text"
          placeholder="Search"
          value={props.searchValue}
          onChange={e => props.searchChange(e.target.value)}
        />
      </p>
    </div>
  );
};

export default SearchBar;
