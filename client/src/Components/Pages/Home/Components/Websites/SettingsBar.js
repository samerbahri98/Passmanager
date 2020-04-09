import React, { Component } from "react";

class SettingsBar extends Component {
  render() {
    return (
      <div className="panel-block">
        <div className="button is-primary is-small">Add item</div>
        <p className="control navbar-item">
          <span>
            <div className="navbar-item has-dropdown is-hoverable">
              <span className="select sort is-small">
                <select>
                  <option>Sort by:</option>
                  <option>Name (A-Z)</option>
                  <option>Name (Z-A)</option>
                  <option>E-mail (A-Z)</option>
                  <option>E-mail (Z-A)</option>
                  <option>Date (Oldest)</option>
                  <option>Date (Newest)</option>
                </select>
              </span>
            </div>
          </span>
        </p>
        <span className="navbar-item">
          <div className="button is-primary is-small">
            <span className="icon">
              <i className="fa fa-list"></i>
            </span>
          </div>
          <div className="button is-small">
            <span className="icon">
              <i className="fa fa-th"></i>
            </span>
          </div>
        </span>
      </div>
    );
  }
}

export default SettingsBar;
