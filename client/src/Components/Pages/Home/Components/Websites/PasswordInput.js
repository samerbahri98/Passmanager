import React, { Component, Fragment } from "react";
import FieldForm from "./Form/FieldForm";
import { Field } from "formik";
import Checkbox from "./Form/Checkbox";

class PasswordInput extends Component {
  state = {
    password: ""
  };
  generate = () => {
    let allowed = this.props.values.allowed.reduce((a, b) => `${a}${b}`, "");
    let generated = "";
    if (allowed.length !== 0)
      for (let i = 0; i < this.props.values.passwordLength; i++)
        generated += allowed.charAt(Math.floor(Math.random() * allowed.length));
    this.props.values.Password = generated;
    this.setState({ password: generated });
  };

  render() {
    return (
      <Fragment>
        {this.props.values.randomPassword ? (
          <Fragment>
            <FieldForm
              label="Password"
              className="input"
              type="input"
              name="Password"
              placeholder="UR#S^yZaW3&aA"
              value={this.state.password}
            />
            <Checkbox
              name="randomPassword"
              label="Generate a random password"
              change={this.generate}
            />
            <FieldForm
              label="Password length"
              className="slider is-fullwidth"
              type="range"
              name="passwordLength"
              value={this.props.values.passwordLength}
              change={this.generate}
            />
            <div className="field">
              <Field
                className="input"
                name="passwordLength"
                type="number"
                value={this.props.values.passwordLength}
                step="1"
                min="4"
                max="100"
              />
            </div>
            <Checkbox
              name="allowed"
              label="A-Z"
              value="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
              change={this.generate}
            />
            <Checkbox
              name="allowed"
              label="a-z"
              value="abcdefghijklmnopqrstuvwxyz"
              change={this.generate}
            />
            <Checkbox
              name="allowed"
              label="0-9"
              value="0123456789"
              change={this.generate}
            />
            <Checkbox
              name="allowed"
              label="!@#$%^&*_+~>?<"
              value="!@#$%^&*_+~>?<"
              change={this.generate}
            />
            <button type="button" className="button" onClick={this.generate}>
              Generate
            </button>
          </Fragment>
        ) : (
          <Fragment>
            <FieldForm
              label="Password"
              className="input"
              type="input"
              name="Password"
              placeholder="UR#S^yZaW3&aA"
            />

            <Checkbox
              name="randomPassword"
              label="Generate a random password"
              change={() => console.log("object")}
            />
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default PasswordInput;
