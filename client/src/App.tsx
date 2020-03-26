import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Layout/Navbar"
import Footer from "./Components/Layout/Footer"
import Websites from "./Components/Layout/Websites"
import LeftMenu from "./Components/Layout/Leftmenu"

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="columns">
            <LeftMenu />
            <Websites />
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
