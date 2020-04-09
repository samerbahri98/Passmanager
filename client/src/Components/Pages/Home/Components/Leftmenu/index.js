import React from "react";

const LeftMenu =() => {
  return (
    <div className="column is-one-quarter">
      <nav className="panel is-primary">
        <p className="panel-heading">Lists</p>
        <div className="panel-block is-active">
          <span className="panel-icon">
            <i className="fa fa-book"></i>
          </span>
          All items
        </div>
        <div className="panel-block"></div>
        <a className="panel-block is-hoverable">
          <span className="panel-icon">
            <i className="fa fa-book"></i>
          </span>
          Personal
        </a>
        <a className="panel-block">
          <span className="panel-icon">
            <i className="fa fa-book"></i>
          </span>
          Business
        </a>
        <a className="panel-block">
          <span className="panel-icon">
            <i className="fa fa-code-fork"></i>
          </span>
          daniellowtw/infBoard
        </a>
        <a className="panel-block">
          <span className="panel-icon">
            <i className="fa fa-code-fork"></i>
          </span>
          mojs
        </a>
      </nav>
    </div>
  );
}

export default LeftMenu;
