import React, { Component, Frqgment, Fragment } from "react";
import Login from "./Login";
import art from "./art.svg";
import Brand from "../../Layout/Navbar/Brand";
import Footer from "../../Layout/Footer";

class Landing extends Component {
  state = { error: false };
  invalid = () => this.setState({ error: true });
  clsoeInvalid = () =>  this.setState({ error: false });
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
          <div className="columns">
            <div className="column">
              <img src={art} />
            </div>
            <div className="column">
              <br />
              <div className="container is-fluid">
                <div className="notification">
                  {this.state.error ? (
                    <div className="notification is-danger is-light">
                      <button
                        className="delete"
                        onClick={this.clsoeInvalid}
                      ></button>
                      Invalid data
                    </div>
                  ) : (
                    <Fragment />
                  )}

                  <Login invalid={this.invalid} />
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
