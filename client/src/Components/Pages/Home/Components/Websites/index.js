import React, { Component, Fragment } from "react";
import SettingsBar from "./SettingsBar";
import SearchBar from "./SearchBar";
import Matrix from "./Matrix";
import Table from "./Table";
import Add from "./Add";
import Modify from "./Modify";
import Delete from "./Delete";
import Notification from "./Notification";

class Website extends Component {
  state = {
    display: "list",
    list: [],
    add: false,
    modify: false,
    delete: false,
    obj: {},
    id: "",
    notification: false,
    notificationText: "",
    notificationClass: "",
    searchValue: "",
    select: "NO",
  };

  select = async (text) => {
    await this.setState({ select: text });
  };
  searchChange = (text) => this.setState({ searchValue: text });
  notify = async (notificationText, notificationClass) => {
    this.setState({
      notification: true,
      notificationText: notificationText,
      notificationClass: notificationClass,
    });

    setTimeout(() => this.closeNotification(), 2000);
  };
  closeNotification = () =>
    this.setState({
      notification: false,
      notificationClass: "",
      notificationText: "",
    });
  add = () => this.setState({ add: true });
  modify = (obj) => this.setState({ modify: true, obj: obj, id: obj._id });
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
        {this.state.add ? (
          <Add cancel={this.cancel} notify={this.notify} />
        ) : (
          <Fragment />
        )}
        {this.state.modify ? (
          <Modify
            cancel={this.cancel}
            obj={this.state.obj}
            id={this.state.id}
            notify={this.notify}
          />
        ) : (
          <Fragment />
        )}
        {this.state.delete ? (
          <Delete
            cancel={this.cancel}
            id={this.state.id}
            notify={this.notify}
          />
        ) : (
          <Fragment />
        )}
        <nav className="panel">
          <p className="panel-heading">All items</p>
          <SettingsBar
            toggleView={this.toggleView}
            add={this.add}
            select={this.select}
          />
          <SearchBar
            searchValue={this.state.searchValue}
            searchChange={this.searchChange}
          />
          {this.state.notification ? (
            <Notification
              class={this.state.notificationClass}
              text={this.state.notificationText}
              closeNotif={this.closeNotification}
            />
          ) : (
            <Fragment />
          )}
          {this.state.display === "list" ? (
            <Table
              modify={this.modify}
              delete={this.delete}
              notify={this.notify}
              searchValue={this.state.searchValue}
              select={this.state.select}
            />
          ) : (
            <Matrix
              modify={this.modify}
              delete={this.delete}
              notify={this.notify}
              searchValue={this.state.searchValue}
              select={this.state.select}
            />
          )}
        </nav>
      </div>
    );
  }
}

export default Website;
