import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  fetchWebsites,
  deleteWebsite,
} from "../../../../../Actions/websiteActions";

class Delete extends Component {
  confirm = async () => {
    await this.props.deleteWebsite(this.props.id);
    await this.props.fetchWebsites();
    this.cancel();
  };
  cancel = () => this.props.cancel();
  render() {
    return (
      <div className="modal is-active">
        <div className="modal-background" onClick={this.cancel}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Add Website</p>
            <button
              className="delete"
              aria-label="close"
              onClick={this.cancel}
            ></button>
          </header>
          <section className="modal-card-body">
            <body>
              <section className="section">
                <div className="container">
                  <div className="heading">
                    <h1 className="title">Warning</h1>
                    <h2 className="subtitle">
                      Are you sure that you want to delete these credentials?
                      note that this action is not reversible.
                    </h2>
                  </div>
                </div>
              </section>
            </body>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-danger" onClick={this.confirm}>
              Confirm
            </button>
            <button className="button" onClick={this.cancel}>
              Cancel
            </button>
          </footer>
        </div>
      </div>
    );
  }
}

Delete.propTypes = {
  deleteWebsite: PropTypes.func.isRequired,
  fetchWebsites: PropTypes.func.isRequired,
};

export default connect(null, { fetchWebsites, deleteWebsite })(Delete);
