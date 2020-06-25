import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Dropdown = () => {
  const [user, setUsername] = useState("");
  useEffect( () => {
    axios({
      url: "http://localhost:5000/api/auth/",
      method: "get",
      headers: {
        "x-auth-token": window.sessionStorage.getItem("token"),
      },
    }).then(data => setUsername(data.data.user.name))
  });
  return (
    <div id="navbarBasicExample" className="navbar-end">
      <div className="navbar-start">
        <div className="navbar-item">
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">
              <div className="avatar navbar-item">
                <figure className="image is-24x24">
                  <img src="https://i.imgur.com/I4Z1a03.png" alt="" className="is-rounded" />
                </figure>
              </div>
              {user}
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
              {/* <Link to="/logout"> */}
              <a
                className="navbar-item"
                onClick={() => {
                  window.sessionStorage.clear();
                  window.location.reload(false);
                }}
              >
                <span className="icon">
                  <i className="fa fa-sign-out"></i>
                </span>
                Log out
              </a>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
