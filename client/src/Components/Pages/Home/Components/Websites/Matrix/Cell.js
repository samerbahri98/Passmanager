import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

class Cell extends Component {
  copyPassword = () =>
    this.props.notify(
      `${this.props.item.WebsiteName} Password is copied to clipboard`
    );
  modify = () => this.props.modify();
  delete = () => this.props.delete();
  render() {
    return (
      <div className="card">
        <div className="card-image logo-card">
          <figure className="image is-64x64 is-centered logo-container">
            <img
              src={`https://i.imgur.com/${this.props.item.imgurid}.png`}
              className="is-centered"
              alt="Image"
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <div className="options">
                <span className="panel-icon" onClick={this.copyPassword}>
                  <CopyToClipboard text={this.props.item.Password}>
                    <a>
                      <i className="fa fa-copy"></i>
                    </a>
                  </CopyToClipboard>
                </span>
                <span className="panel-icon" onClick={this.modify}>
                  <a>
                    <i className="fa fa-edit"></i>
                  </a>
                </span>
                <span className="panel-icon">
                  <a>
                    <i className="fa fa-times" onClick={this.delete}></i>
                  </a>
                </span>
                <span className="panel-icon">
                  <a href={this.props.item.WebsiteUrl} target="_blank">
                    <i className="fa fa-globe"></i>
                  </a>
                </span>
              </div>
              <p className="title is-4">{this.props.item.WebsiteName}</p>
              <p className="subtitle is-6">{this.props.item.Username}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cell;
