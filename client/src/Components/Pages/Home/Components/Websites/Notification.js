import React, { Component } from "react";

class Notification extends Component {
  CloseNotif = () => this.props.closeNotif();
  render() {
    return (
      <div className={this.props.class}>
        <button className="delete" onClick={this.CloseNotif}></button>
        {this.props.text}
      </div>
    );
  }
}

export default Notification;
