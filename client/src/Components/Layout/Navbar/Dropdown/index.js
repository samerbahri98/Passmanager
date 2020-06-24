import React from "react";
import { Link } from "react-router-dom";

const Dropdown = (props) => {
  return (
    <div id="navbarBasicExample" className="navbar-end">
      <div className="navbar-start">
        <div className="navbar-item">
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              <div className="avatar navbar-item">
                <figure className="image is-24x24">
                  <img src="./avatar.jpg" alt="" className="is-rounded" />
                </figure>
              </div>
              {props.username}
              <br />
            </a>
            <div className="navbar-dropdown">
              <Link to="/settings">
                <a className="navbar-item">
                  <span className="icon">
                    <i className="fa fa-cog"></i>
                  </span>
                  Account settings
                </a>
              </Link>
              <Link to="/help">
                <a className="navbar-item">
                  <span className="icon">
                    <i className="fa fa-question-circle"></i>
                  </span>
                  Help
                </a>
              </Link>
              <Link to="/about">
                <a className="navbar-item">
                  <span className="icon">
                    <i className="fa fa-question-circle"></i>
                  </span>
                  About
                </a>
              </Link>
              <hr className="navbar-divider" />
              <Link to="/logout">
                <a className="navbar-item">
                  <span className="icon">
                    <i className="fa fa-sign-out"></i>
                  </span>
                  Log out
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
