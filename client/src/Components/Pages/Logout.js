import React, { Component, Fragment } from "react";

class Logout extends Component {
  componentDidMount() {
      localStorage.clear();
      window.location.reload(false);
    return <Fragment />;
  }
  render() {
    return <Fragment />;
  }
}

export default Logout;
