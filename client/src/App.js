import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


//bulma
import "./App.css";
import "bulma/bulma.sass"
import "bulma-extensions/dist/css/bulma-extensions.min.css"


// import "bulma-extensions/bulma-checkradio/dist/css/bulma-checkradio.sass"
// import "bulma-extensions/bulma-slider/dist/css/bulma-slider.sass"
// import "bulma-extensions/bulma-slider/dist/js/bulma-slider.min.js"

//components
import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Help from "./Components/Pages/Help";

//redux
import { Provider } from "react-redux";
import store from "./store"

const App = () => {
  const username = "Samer Bahri";
  return (
    <Provider store ={store}>
      <Router>
        <div className="App">
          <Navbar username={username} />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/help" component={Help} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
