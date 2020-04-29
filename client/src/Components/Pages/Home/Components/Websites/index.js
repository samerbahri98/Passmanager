import React, { Component, Fragment } from "react";
import SettingsBar from "./SettingsBar";
import SearchBar from "./SearchBar";
import Matrix from "./Matrix";
import Table from "./Table";
import Add from "./Add";
import Modify from "./Modify";
import Delete from "./Delete";

class Website extends Component {
  state = {
    display: "list",
    list: [],
    add: false,
    modify: false,
    delete: false,
    obj: {},
    id: "",
  };

  add = () => this.setState({ add: true });
  modify = (obj) => this.setState({ modify: true, obj: obj });
  delete = (id) => {
    console.log(id);
    this.setState({ delete: true, id: id });
  };
  cancel = () => this.setState({ add: false, modify: false, delete: false });

  toggleView = (value) => {
    this.setState({ display: value });
  };

  render() {
    return (
      <div className="column">
        {this.state.add ? <Add cancel={this.cancel} /> : <Fragment />}
        {this.state.modify ? (
          <Modify cancel={this.cancel} obj={this.state.obj} />
        ) : (
          <Fragment />
        )}
        {this.state.delete ? (
          <Delete cancel={this.cancel} id={this.state.id} />
        ) : (
          <Fragment />
        )}
        <nav className="panel">
          <p className="panel-heading">All items</p>
          <SettingsBar toggleView={this.toggleView} add={this.add} />
          <SearchBar />
          {this.state.display === "list" ? (
            <Table
              list={this.state.list}
              modify={this.modify}
              delete={this.delete}
            />
          ) : (
            <Matrix modify={this.modify} delete={this.delete} />
          )}
        </nav>
      </div>
    );
  }
}

export default Website;
