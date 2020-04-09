import React from "react";
import Brand from "./Brand"
import Dropdown from "./Dropdown";


const Navbar = (props) => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <Brand />
      <Dropdown username = {props.username}/>
    </nav>
  );
};

export default Navbar;
