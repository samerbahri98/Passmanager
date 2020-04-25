import React, { Component, Fragment } from "react";
import axios from "axios";
//import googlelogo from "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
// import { connect } from "react-redux";
// import Proptypes from "prop-types";
// import { fetchWebsites } from "../../../../../actions/websitesActions";
import SettingsBar from "./SettingsBar";
import SearchBar from "./SearchBar";
import Matrix from "./Matrix";
import Table from "./Table";
import Add from "./Add";
import Modify from "./Modify"
import Delete from "./Delete"

class Website extends Component {
  state = {
    display: "list",
    list: [],
    add: false,
    modify: false,
    delete: false,
  };

  add = () => this.setState({ add: true });
  modify = () => this.setState({ modify: true });
  delete = () => this.setState({delete:true})
  cancel = () => this.setState({ add: false, modify: false, delete: false });

  fetchData = () => {
    fetch("http://localhost:5000/api/websites/", {
      method: "GET",
      headers: {
        "x-auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWVhMjY0MjFkZDQ4OWUxOTcyM2MwNDZjIn0sImlhdCI6MTU4NzcwNDUzOCwiZXhwIjoxNTg4MDY0NTM4fQ.AIz5t9mExp1z735KionvcwdFs-CnrSES98A0s52fBI0",
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((res) => {
        this.setState({ list: res.websites });
      });
  };
  componentDidMount() {
    this.fetchData();
  }

  toggleView = (value) => {
    this.setState({ display: value });
  };

  render() {
    return (
      <div className="column">
        {this.state.add ? <Add cancel={this.cancel} /> : <Fragment />}
        {this.state.modify ? <Modify cancel={this.cancel} /> : <Fragment />}
        {this.state.delete ? <Delete cancel={this.cancel} /> : <Fragment />}
        <nav className="panel">
          <p className="panel-heading">All items</p>
          <SettingsBar toggleView={this.toggleView} add={this.add} />
          <SearchBar />
          {this.state.display === "list" ? (
            <Table list={this.state.list} modify={this.modify} delete={this.delete}/>
          ) : (
            <Matrix list={this.state.list} modify={this.modify} delete={this.delete} />
          )}
        </nav>
      </div>
    );
  }
}

export default Website;
