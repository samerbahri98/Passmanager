import React, { Component } from "react";

class Modal extends Component {
  render() {
    return (
      <div className="modal is-active">
        <div className="modal-background" onClick={this.props.cancel}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title" style={{ textAlign: "left" }}>
              {this.props.header}
            </p>
            <button
              className="delete"
              aria-label="close"
              onClick={this.props.cancel}
            ></button>
          </header>
          <section className="modal-card-body">{this.props.children}</section>
          <footer className="modal-card-foot">
            <button
              className="button is-success"
              onClick={this.handleSubmit}
              type="submit"
            >
              Save
            </button>
            <button className="button" onClick={this.props.cancel}>
              Cancel
            </button>
          </footer>
        </div>
      </div>
    );
  }
}

export default Modal;
