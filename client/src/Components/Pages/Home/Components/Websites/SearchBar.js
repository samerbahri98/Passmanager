import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div className="panel-block">
        <p className="control has-icon">
          <input className="input is-small" type="text" placeholder="Search" />
        </p>
      </div>
    );
  }
}

export default SearchBar;
