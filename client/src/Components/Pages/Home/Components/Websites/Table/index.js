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
