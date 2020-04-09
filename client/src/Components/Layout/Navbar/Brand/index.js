import React from "react";
import { Link } from "react-router-dom";

const Brand = () => {
  return (
    <div className="navbar-brand">
      <div className="navbar-brand">
        <Link to="/">
          <a className="navbar-item">
            <span className="icon">
              <i className="fa fa-lock title"></i>
            </span>
            <h1 className="title">VAULT</h1>
          </a>
        </Link>
      </div>

      <a
        role="button"
        className="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  );
};

export default Brand;
