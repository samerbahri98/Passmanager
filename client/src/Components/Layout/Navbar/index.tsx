import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-brand">
          <a className="navbar-item">
            <span className="icon">
              <i className="fa fa-lock title"></i>
            </span>
            <h1 className="title">VAULT</h1>
          </a>
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
                Samer Bahri
                <br />
              </a>

              <div className="navbar-dropdown">
                <a className="navbar-item">
                  <span className="icon">
                    <i className="fa fa-cog"></i>
                  </span>
                  Account settings
                </a>
                <a className="navbar-item">
                  <span className="icon">
                    <i className="fa fa-question-circle"></i>
                  </span>
                  Help
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item">
                  <span className="icon">
                    <i className="fa fa-sign-out"></i>
                  </span>
                  Log out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
