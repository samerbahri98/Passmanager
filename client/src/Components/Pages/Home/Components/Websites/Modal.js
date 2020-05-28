import React, { Component } from "react";

class Modal extends Component {
  render() {
    return (
      <div className="modal is-active">
        <div className="modal-background" onClick={this.props.cancel}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title" style={{ textAlign: "left" }}>
              Add Website
            </p>
            <button
              className="delete"
              aria-label="close"
              onClick={this.props.cancel}
            ></button>
          </header>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Modal;
