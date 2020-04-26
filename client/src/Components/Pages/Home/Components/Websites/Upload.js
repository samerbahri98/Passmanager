import React, { Component, Fragment } from "react";
import axios from "axios";

class Upload extends Component {
  state = {
    enabled: false,
    uploadTab: true,
    uploadTabClassName: "is-active",
    UrlTabClassName: "",
    filename: "file...",
    file: null,
    url: "",
  };

  toggleEnable = () => {
    this.setState({ enabled: !this.state.enabled });
    this.props.toggleEnable();
  };
  uploadTab = () => {
    if (!this.statae.uploadTab) {
      this.setState({
        uploadTab: true,
        uploadTabClassName: "is-active",
        UrlTabClassName: "",
      });
      this.props.toggleIsUrl();
    }
  };
  urlTab = () => {
    if (this.state.uploadTab) {
      this.setState({
        uploadTab: false,
        uploadTabClassName: "",
        UrlTabClassName: "is-active",
      });
      this.props.toggleIsUrl();
    }
  };

  loadFile = (e) => {
    this.setState({
      file: e.target.files[0],
      filename: e.target.files[0].name,
    });
    this.props.loadLogo(e.target.files[0]);
  };

  loadUrl = (e) => {
    this.setState({ url: e.target.value });
    this.props.loadLogoUrl(e.target.value);
  };
  render() {
    return (
      <Fragment>
        <div className="field">
          <label className="label" style={{ textAlign: "left" }}>
            Website Logo
          </label>
          <p className="control">
            <label className="checkbox">
              <input type="checkbox" onChange={this.toggleEnable} />
              Add website logo
            </label>
          </p>
          {this.state.enabled ? (
            <Fragment>
              <div className="tabs">
                <ul>
                  <li
                    className={this.state.uploadTabClassName}
                    onClick={this.uploadTab}
                  >
                    <a>Upload</a>
                  </li>
                  <li
                    className={this.state.UrlTabClassName}
                    onClick={this.urlTab}
                  >
                    <a>URL</a>
                  </li>
                </ul>
              </div>
              {this.state.uploadTab ? (
                <p className="control">
                  <div className="file has-name is-boxed">
                    <label className="file-label">
                      <input
                        className="file-input"
                        type="file"
                        name="resume"
                        onChange={this.loadFile}
                      />
                      <span className="file-cta">
                        <span className="file-icon">
                          <i className="fa fa-upload"></i>
                        </span>
                        <span className="file-label">Choose a file…</span>
                      </span>
                      <span className="file-name">{this.state.filename}</span>
                    </label>
                  </div>
                </p>
              ) : (
                <p className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="acme.com/logo.ong"
                    value={this.state.url}
                    onChange={this.loadUrl}
                  />
                </p>
              )}
            </Fragment>
          ) : (
            <Fragment />
          )}
        </div>
      </Fragment>
    );
  }
}

export default Upload;
