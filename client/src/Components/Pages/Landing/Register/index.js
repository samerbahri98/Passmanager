import React, { Component, Fragment } from "react";
import { Formik, Form } from "formik";
import FieldForm from "../../Home/Components/Websites/Form/FieldForm";
import axios from "axios";

class Login extends Component {
  submit = async (data) => {
    if (data.password === data.confirmPassword) {
      const user = {
        name: data.username,
        email: data.email,
        password: data.password,
      };
      axios({
        method: "post",
        url: "http://localhost:5000/api/users/",
        headers: { "Content-Type": "application/json" },
        data: user,
      })
        .then((jeton) => {
          console.log(jeton);
          if (jeton.data.msg !== "") {
            localStorage.setItem("token", jeton.data.token);
            window.location.reload(false);
          } else {
            this.props.invalid(jeton.data.msg);
          }
        })
        .catch((error) => {
          console.log(error.response);
          this.props.invalid(error.response.data.msg || error.response.data.errors[0].msg)
        });
    } else {
      this.props.invalid("Password does not match");
    }
  };
  render() {
    return (
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(data) => this.submit(data)}
      >
        {({ values }) => (
          <Form>
            <FieldForm
              label="Username"
              className="input"
              type="input"
              name="username"
              placeholder="johndoe2"
              value={values.username}
            />
            <FieldForm
              label="Email"
              className="input"
              type="input"
              name="email"
              placeholder="johndoe2@acme.com"
              value={values.email}
            />
            <FieldForm
              label="Password"
              className="input"
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
            />
            <FieldForm
              label="Password again"
              className="input"
              type="password"
              name="confirmPassword"
              placeholder="Password"
              value={values.confirmPassword}
            />
            <div className="field is-grouped">
              <p className="control">
                <button
                  className="button is-primary"
                  type="submit"
                  onClick={this.handleSubmit}
                >
                  Submit
                </button>
              </p>
              <p className="control">
                <button
                  className="button is-link"
                  onClick={this.props.enable}
                  type="button"
                >
                  login
                </button>
              </p>
              <p className="control">
                <button className="button is-link">demo</button>
              </p>
            </div>
          </Form>
        )}
      </Formik>
    );
  }
}

export default Login;
