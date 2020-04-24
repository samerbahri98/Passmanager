import React, { Component } from "react";
import axios from "axios";
//import googlelogo from "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
// import { connect } from "react-redux";
// import Proptypes from "prop-types";
// import { fetchWebsites } from "../../../../../actions/websitesActions";
import SettingsBar from "./SettingsBar";
import SearchBar from "./SearchBar";
import Matrix from "./Matrix";
import Table from "./Table";

class Website extends Component {
  state = {
    display: "list",
    list: [],
  };

  componentDidMount() {

    fetch("http://localhost:5000/api/websites/",{
    method:"GET",
    headers:{

          "x-auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWVhMjY0MjFkZDQ4OWUxOTcyM2MwNDZjIn0sImlhdCI6MTU4NzcwNDUzOCwiZXhwIjoxNTg4MDY0NTM4fQ.AIz5t9mExp1z735KionvcwdFs-CnrSES98A0s52fBI0",
          "Content-Type":"application/json"
    }}).then(data => data.json())
      .then((res) => {
        this.setState({ list: res.websites });
      })
  }

  toggleView = (value) => {
    this.setState({ display: value });
  };

  render() {
    return (
      <div className="column">
        <nav className="panel">
          <p className="panel-heading">All items</p>
          <SettingsBar toggleView={this.toggleView} />
          <SearchBar />
          {this.state.display === "list" ? (
            <Table list={this.state.list} />
          ) : (
            <Matrix list={this.state.list} />
          )}
        </nav>
      </div>
    );
  }
}

export default Website;
