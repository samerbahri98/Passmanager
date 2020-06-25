import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//bulma
import "./App.css";
import "bulma/bulma.sass";
import "bulma-extensions/dist/css/bulma-extensions.min.css";

//components
import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Help from "./Components/Pages/Help";
import Landing from "./Components/Pages/Landing";
import Logout from "./Components/Pages/Logout"

//redux
import { Provider } from "react-redux";
import store from "./store";


const App = () => {
  const username = "Samer Bahri";
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          {window.sessionStorage.getItem("token") === null ? (
            <Landing />
          ) : (
            <Fragment>
              <Navbar username={username} />
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/help" component={Help} />
                  {/* <Route exact path="/logout" component={Logout} /> */}
                </Switch>
              </div>
              <Footer />
            </Fragment>
          )}
        </div>
      </Router>
    </Provider>
  );
};

export default App;
