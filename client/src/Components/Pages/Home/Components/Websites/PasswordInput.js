import React, { Component, Fragment } from "react";

class PasswordInput extends Component {
  state = {
    random: false,
    password: "",
    passwordLength: 10,
    lowcases: false,
    upcases: false,
    numbers: false,
    specials: false,
  };

  changeInput = (e) => {
    this.setState({ password: e.target.value });
    this.props.changeInput(this.state.password);
  };

  enableRandom = () => {
    let randomToggle = !this.state.random;
    this.setState({ random: randomToggle });
  };

  changeLength = async (e) => {
    await this.setState({ passwordLength: e.target.value });
    this.generate();
  };

  generate = () => {
    if (!this.state.random) this.enableRandom();
    let allowed = "";
    let generated = "";
    if (this.state.lowcases) allowed = `${allowed}abcdefghijklmnopqrstuvwxyz`;
    if (this.state.upcases) allowed = `${allowed}ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    if (this.state.numbers) allowed = `${allowed}0123456789`;
    if (this.state.specials) allowed = `${allowed}!@#$%^&*_+~>?<`;
    for (let i = 0; i < this.state.passwordLength; i++)
      generated += allowed.charAt(Math.floor(Math.random() * allowed.length));
    this.setState({ password: generated });

    this.props.changeInput(this.state.password);
  };

  toggle = {
    lowcases: async () => {
      let randomToggle = !this.state.lowcases;
      await this.setState({ lowcases: randomToggle });
      this.generate();
    },
    upcases: async () => {
      let randomToggle = !this.state.upcases;
      await this.setState({ upcases: randomToggle });
      this.generate();
    },
    numbers: async () => {
      let randomToggle = !this.state.numbers;
      await this.setState({ numbers: randomToggle });
      this.generate();
    },
    specials: async () => {
      let randomToggle = !this.state.specials;
      await this.setState({ specials: randomToggle });
      this.generate();
    },
  };
  render() {
    return (
      <Fragment>
        <div className="field">
          <label className="label" style={{ textAlign: "left" }}>
            Password
          </label>
          <p className="control has-icon has-icon-right">
            <div className="field has-addons">
              <p className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="UR#S^yZaW3&aA"
                  value={this.state.password}
                  onChange={this.changeInput}
                />
              </p>
              <p className="control">
                <button className="button is-info" onClick={this.generate}>
                  Generate
                </button>
              </p>
            </div>
          </p>
        </div>

        <div className="field">
          <p className="control"></p>
        </div>

        {this.state.random ? (
          <Fragment>
            <label className="label" style={{ textAlign: "left" }}>
              Password length
            </label>
            <input
              class="slider is-fullwidth"
              step="1"
              min="4"
              max="100"
              type="range"
              value={this.state.passwordLength}
              onChange={this.changeLength}
            />
            <input
              className="is-pulled-left"
              step="1"
              min="4"
              max="100"
              type="number"
              value={this.state.passwordLength}
              onChange={this.changeLength}
            />

            <div className="field">
              <p className="control">
                <label className="checkbox">
                  <input type="checkbox" onChange={this.toggle.upcases} />
                  A-Z
                </label>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <label className="checkbox">
                  <input type="checkbox" onChange={this.toggle.lowcases} />
                  a-z
                </label>
              </p>
            </div>

            <div className="field">
              <p className="control">
                <label className="checkbox">
                  <input type="checkbox" onChange={this.toggle.numbers} />
                  0-9
                </label>
              </p>
            </div>

            <div className="field">
              <p className="control">
                <label className="checkbox">
                  <input type="checkbox" onChange={this.toggle.specials} />
                  {`!@#$%^&*_+~>?<`}
                </label>
              </p>
            </div>
          </Fragment>
        ) : (
          <Fragment />
        )}
      </Fragment>
    );
  }
}

export default PasswordInput;
