import React, { Component, Fragment } from "react";
import { Formik, Form } from "formik";
import FieldForm from "../../Home/Components/Websites/Form/FieldForm";
import axios from "axios";

class Login extends Component {
  submit = async (data) => {
    axios({
      method: "post",
      url: "http://localhost:5000/api/auth/",
      headers: { "Content-Type": "application/json" },
      data: data,
    }).then((jeton) => {
      console.log(jeton);
      localStorage.setItem("token", jeton.data.token);
      window.location.reload(false)
    }).catch(error =>{
        if(error.response.status===400)this.props.invalid();
    })
  };
  render() {
    return (
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(data) => this.submit(data)}
      >
        {({ values }) => (
          <Form>
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
                <button className="button is-link">register</button>
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
