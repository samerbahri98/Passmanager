import React, { Component, Fragment } from "react";
import axios from "axios";
import Checkbox from "./Form/Checkbox";
import FieldForm from "./Form/FieldForm";
import { Field } from "formik"
class Upload extends Component {
  state = {
    enabled: false,
    uploadTab: true,
    uploadTabClassName: "is-active",
    UrlTabClassName: "",
    filename: "file...",
    file: null,
    url: ""
  };

  toggleEnable = () => {
    this.setState({ enabled: !this.state.enabled });
    this.props.actions.toggle();
  };

  tabs = {
    upload: () => {
      if (!this.state.uploadTab) {
        this.setState({
          uploadTab: true,
          uploadTabClassName: "is-active",
          UrlTabClassName: ""
        });
      }
    },
    url: () => {
      if (this.state.uploadTab) {
        this.setState({
          uploadTab: false,
          uploadTabClassName: "",
          UrlTabClassName: "is-active"
        });
      }
    }
  };

  load = {
    file: e => {
      this.setState({
        file: e.target.files[0],
        filename: e.target.files[0].name
      });
      this.props.values.logoFile=e.target.files[0];
      this.props.values.filename=e.target.files[0].name
    },
    url: e => {
      this.setState({ url: e.target.value });
      this.props.actions.loadUrl(e.target.value);
    }
  };
  render() {
    return (
      <Fragment>
        <div className="field">
          <label className="label" style={{ textAlign: "left" }}>
            Website Logo
          </label>
          <Checkbox name="logoTabEnabled" label="Add website logo" />
          {this.props.values.logoTabEnabled ? (
            <Fragment>
              <div className="tabs">
                <ul>
                  <li
                    className={this.state.uploadTabClassName}
                    onClick={this.tabs.upload}
                  >
                    <a>Upload</a>
                  </li>
                  <li
                    className={this.state.UrlTabClassName}
                    onClick={this.tabs.url}
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
                        onChange={this.load.file}
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
                <FieldForm
                label="Logo URL"
                className="input"
                type="input"
                name="logoUrl"
                placeholder="acme.com/logo.ong"
              />
                // <p className="control">
                //   <input
                //     className="input"
                //     type="text"
                //     placeholder="acme.com/logo.ong"
                //     value={this.state.url}
                //     onChange={this.load.url}
                //   />
                // </p>
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
