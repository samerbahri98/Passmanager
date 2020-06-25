import React, { Component, Fragment } from "react";
import Cell from "./Cell";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchWebsites } from "../../../../../../Actions/websiteActions";

class Matrix extends Component {
  modify = (obj) => this.props.modify(obj);
  delete = (obj) => this.props.delete(obj);
  notify = (text) =>
    this.props.notify(text, "notification is-primary is-light");

  componentDidMount() {
    this.props.fetchWebsites();
  }

  render() {
    return (
      <Fragment>
        <div className="panel-block">
          <div className="matrix container is-hoverable">
            {typeof this.props.list === "undefined" ? (
              <Fragment />
            ) : (
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
                  <Cell
                    key={index}
                    elem={elem}
                    notify={this.notify}
                    modify={this.modify}
                    delete={this.delete}
                  />
                ))
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}

Matrix.propTypes = {
  fetchWebsites: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  list: state.websites.websitesList,
});

export default connect(mapStateToProps, { fetchWebsites })(Matrix);
