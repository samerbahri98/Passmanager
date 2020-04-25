import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

class Row extends Component {
  copyPassword = () =>
    this.props.notify(
      `${this.props.item.WebsiteName} Password is copied to clipboard`
    );

  modify = () => this.props.modify();
  delete = () => this.props.delete();
  render() {
    return (
      <tr>
        <th>
          <div className="logo">
            <img
              src={`https://i.imgur.com/${this.props.item.imgurid}.png`}
              alt=""
            />
          </div>
        </th>
        <td> {this.props.item.WebsiteName}</td>
        <td>{this.props.item.Username}</td>
        <td></td>
        <td></td>
        <td>
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
        </td>
      </tr>
    );
  }
}

export default Row;
