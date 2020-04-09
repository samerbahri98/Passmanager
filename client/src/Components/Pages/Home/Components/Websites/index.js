import React from "react";
//import googlelogo from "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
// import { connect } from "react-redux";
// import Proptypes from "prop-types";
// import { fetchWebsites } from "../../../../../actions/websitesActions";
import SettingsBar from "./SettingsBar";
import SearchBar from './SearchBar'
import Matrix from './Matrix'
import Table from "./Table";


const Website = () => {
  return (
    <div className="column">
      <nav className="panel">
        <p className="panel-heading">All items</p>
        <SettingsBar />
        <SearchBar />
        <Table />
        <Matrix />
       </nav>
    </div>
  );
};

export default Website;
