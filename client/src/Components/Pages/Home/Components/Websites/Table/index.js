import React, { Component, Fragment } from "react";
import Thead from "./Thead";
import Row from "./Row";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchWebsites } from "../../../../../../Actions/websiteActions";

class Table extends Component {
  modify = (obj) => this.props.modify(obj);
  delete = (id) => this.props.delete(id);

  notify = (text) =>
    this.props.notify(text, "notification is-primary is-light");

  componentDidMount() {
    this.props.fetchWebsites();
  }

  sorting = (a, b) => {
    let result;
    switch (this.props.select) {
      case "ON":
        result = Date.parse(a.date) - Date.parse(b.date);
        break;
      case "NO":
        result = Date.parse(b.date) - Date.parse(a.date);
        break;
      case "AZ":
        result = a.WebsiteName.localeCompare(b.WebsiteName);
        break;
      case "ZA":
        result = b.WebsiteName.localeCompare(a.WebsiteName);
        break;
    }
    return result;
  };
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.website);
    if (nextProps.website) this.props.fetchWebsites();
  }

  render() {
    return (
      <Fragment>
        <div className="panel-block table-container">
          <table className="table is-hoverable is-fullwidth">
            <Thead />
            <tbody>
              {this.props.list ? (
                this.props.list
                  .filter(
                    (elem) =>
                      elem.WebsiteName.indexOf(this.props.searchValue) >= 0 ||
                      elem.WebsiteUrl.indexOf(this.props.searchValue) >= 0 ||
                      elem.Username.indexOf(this.props.searchValue) >= 0 ||
                      elem.Email.indexOf(this.props.searchValue) >= 0 ||
                      elem.Notes.indexOf(this.props.searchValue) >= 0
                  )

                  .sort((a, b) => this.sorting(a, b))
                  .map((elem, index) => (
                    <Row
                      key={index}
                      item={elem}
                      notify={this.notify}
                      modify={this.modify}
                      delete={this.delete}
                    />
                  ))
              ) : (
                <Fragment />
              )}
            </tbody>
          </table>
        </div>
      </Fragment>
    );
  }
}

Table.propTypes = {
  fetchWebsites: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  list: state.websites.websitesList,
  added: state.website,
});

export default connect(mapStateToProps, { fetchWebsites })(Table);
