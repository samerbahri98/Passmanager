import React, { Component } from "react";

class SettingsBar extends Component {
  state = {
    listBtn: "button is-small is-primary",
    matrixBtn: "button is-small",
  };

  add = () => this.props.add();

  setList = () => {
    this.props.toggleView("list");
    this.setState({
      listBtn: "button is-small is-primary",
      matrixBtn: "button is-small",
    });
  };

  setMatrix = () => {
    this.props.toggleView("matrix");
    this.setState({
      listBtn: "button is-small",
      matrixBtn: "button is-small is-primary",
    });
  };

  render() {
    return (
      <div className="panel-block">
        <div className="button is-primary is-small" onClick={this.add}>
          Add item
        </div>
        <p className="control navbar-item">
          <span>
            <div className="navbar-item has-dropdown is-hoverable">
              <span className="select sort is-small">
                <select
                  onChange={(e) => {
                    this.props.select(e.target.value);
                  }}
                >
                  <option value="NO">Date (Newest)</option>
                  <option value="ON">Date (Oldest)</option>
                  <option value="AZ">Name (A-Z)</option>
                  <option value="ZA">Name (Z-A)</option>
                </select>
              </span>
            </div>
          </span>
        </p>
        <span className="navbar-item">
          <div className={this.state.listBtn} onClick={this.setList}>
            <span className="icon">
              <i className="fa fa-list"></i>
            </span>
          </div>
          <div className={this.state.matrixBtn} onClick={this.setMatrix}>
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
