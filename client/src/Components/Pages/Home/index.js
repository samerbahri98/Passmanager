import React from "react";
import LeftMenu from "./Components/Leftmenu";
import Websites from "./Components/Websites";

const Home = () => {
  return (
    <div className="columns">
      <LeftMenu />
      <Websites />
    </div>
  );
};

export default Home;
