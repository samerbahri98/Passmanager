import React, { Component, Frqgment, Fragment } from "react";
import Login from "./Login";
import Register from "./Register";
import art from "./art.svg";
import Brand from "../../Layout/Navbar/Brand";
import Footer from "../../Layout/Footer";

class Landing extends Component {
  state = { error: false, register: false, messageError: "" };
  invalid = (text) => this.setState({ error: true, messageError: text });
  clsoeInvalid = () => this.setState({ error: false, messageError: "" });
  toggleRegister = () => this.setState({ register: !this.state.register });
  render() {
    return (
      <Fragment>
        <section className="hero is-primary is-small">
          <div className="hero-body">
            <div className="container">
              <Brand />
            </div>
          </div>
        </section>
        <div className="container is-centered">
          <br />
          <div className="columns">
            <div className="column">
              <img src={art} />
            </div>
            <div className="column">
              <div className="container is-fluid">
                <div className="notification">
                  {this.state.error ? (
                    <div className="notification is-danger is-light">
                      <button
                        className="delete"
                        onClick={this.clsoeInvalid}
                      ></button>
                      {this.state.messageError}
                    </div>
                  ) : (
                    <Fragment />
                  )}
                  {this.state.register ? (
                    <Register
                      invalid={this.invalid}
                      enable={this.toggleRegister}
                    />
                  ) : (
                    <Login
                      invalid={this.invalid}
                      enable={this.toggleRegister}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default Landing;
