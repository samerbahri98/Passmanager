import React, { Component } from "react";
import PasswordInput from "./PasswordInput";
import Upload from "./Upload";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  fetchWebsites,
  addWebsite,
} from "../../../../../Actions/websiteActions";

class Modify extends Component {
  state = {
    websiteName: "",
    websiteUrl: "",
    Username: "",
    Email: "",
    Password: "",
    notes: "",
    logoisthere: false,
    logoisurl: false,
    logoFile: null,
    logoUrl: "https://i.imgur.com/ocmhMXA.png",
  };

  //inputs actions
  change = {
    Url: (e) => this.setState({ websiteUrl: e.target.value }),
    Name: (e) => this.setState({ websiteName: e.target.value }),
    Username: (e) => this.setState({ Username: e.target.value }),
    Email: (e) => this.setState({ Email: e.target.value }),
    Notes: (e) => this.setState({ Notes: e.target.value }),
    Password: (e) => this.setState({ Password: e }),
  };

  //logo actions
  logo = {
    toggle: () => this.setState({ logoisthere: !this.state.logoisthere }),
    isUrl: () => this.setState({ logoisurl: !this.state.logoisurl }),
    loadFile: (file) => this.setState({ logoFile: file }),
    loadUrl: (url) => this.setState({ logoUrl: url }),
  };

  upload = async () => {
    const formData = new FormData();
    formData.append("image", this.state.logoFile);
    const feedback = await axios({
      method: "post",
      url: "https://api.imgur.com/3/image",
      headers: {
        Authorization: "Client-ID 0eddb24a01cdcc1",
      },
      data: formData,
    });
    this.setState({ logoUrl: feedback.data.data.link });
  };

  //submittion
  submit = async () => {
    if (this.state.logoisthere && !this.state.logoisurl) await this.upload();
    const postData = {
      WebsiteName: this.state.websiteName,
      WebsiteUrl: this.state.websiteUrl,
      Username: this.state.Username,
      Email: this.state.Email,
      Password: this.state.Password,
      Notes: this.state.Notes,
      logoUrl: this.state.logoUrl,
    };

    await this.props.addWebsite(postData);
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
            <p className="modal-card-title" style={{ textAlign: "left" }}>
              Add Website
            </p>
            <button
              className="delete"
              aria-label="close"
              onClick={this.cancel}
            ></button>
          </header>
          <section className="modal-card-body">
            <div className="field">
              <label className="label" style={{ textAlign: "left" }}>
                URL
              </label>
              <p className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="www.acme.com"
                  value={this.state.websiteUrl}
                  onChange={this.change.Url}
                />
              </p>
            </div>
            <div className="field">
              <label className="label" style={{ textAlign: "left" }}>
                Website Name
              </label>
              <p className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="acme"
                  value={this.state.WebsiteName}
                  onChange={this.change.Name}
                />
              </p>
            </div>

            <div className="field">
              <label className="label" style={{ textAlign: "left" }}>
                Username
              </label>
              <p className="control has-icon has-icon-right">
                <input
                  className="input"
                  type="text"
                  placeholder="JohnDoe02"
                  value={this.state.Username}
                  onChange={this.change.Username}
                />
              </p>
            </div>

            <div className="field">
              <label className="label" style={{ textAlign: "left" }}>
                Email
              </label>
              <p className="control has-icon has-icon-right">
                <input
                  className="input"
                  type="text"
                  placeholder="johndoe@gmail.com"
                  value={this.state.Email}
                  onChange={this.change.Email}
                />
              </p>
            </div>

            <PasswordInput changeInput={this.change.Password} />

            <div className="field">
              <label className="label" style={{ textAlign: "left" }}>
                Notes
              </label>
              <p className="control">
                <textarea
                  className="textarea"
                  placeholder="Textarea"
                  value={this.state.Notes}
                  onChange={this.change.Notes}
                ></textarea>
              </p>
            </div>
            <Upload actions={this.logo} />
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success" onClick={this.submit}>
              Save
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

Modify.propTypes = {
  addWebsite: PropTypes.func.isRequired,
  fetchWebsites: PropTypes.func.isRequired,
};

export default connect(null, { fetchWebsites, addWebsite })(Modify);
