import React, { Component } from "react";
import PasswordInput from "./PasswordInput";
import Upload from "./Upload";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  fetchWebsites,
  addWebsite,
} from "../../../../../Actions/websiteActions";
import { Formik, Form } from "formik";
import Modal from "./Modal";
import FieldForm from "./Form/FieldForm";

class Add extends Component {
  state = {
    logoUrl: "https://i.imgur.com/ocmhMXA.png",
  };

  //Client ID: 9f2a00b121ede0e
  //Client Secret: b23e91d2b8cccf8fb974bc65d892b7d5b9e27b9d
  upload = async (logoFile) => {
    const formData = new FormData();
    formData.append("image", logoFile);
    const feedback = await axios({
      method: "post",
      url: "https://api.imgur.com/3/image",
      headers: {
        Authorization: "Client-ID c924b8f7e105d79",
      },
      data: formData,
    });
    this.setState({ logoUrl: feedback.data.data.link });
  };

  //submittion
  submit = async (data) => {
    this.setState({ logoUrl: data.logoUrl });
    console.log(data);
    if (data.logoFile !== null && data.logoTabEnabled)
      await this.upload(data.logoFile);
    const postData = {
      WebsiteName: data.websiteName,
      WebsiteUrl: data.websiteUrl,
      Username: data.Username,
      Email: data.Email,
      Password: data.Password,
      Notes: data.Notes,
      logoUrl: this.state.logoUrl,
    };

    await this.props.addWebsite(postData);
    await this.props.fetchWebsites();

    this.cancel();
  };

  cancel = () => this.props.cancel();

  render() {
    return (
      <Formik
        initialValues={{
          websiteName: "",
          websiteUrl: "",
          Username: "",
          Email: "",
          Password: "",
          randomPassword: false,
          passwordLength: 10,
          allowed: [],
          notes: "",
          logoisthere: false,
          logoTabEnabled: false,
          uploadTab: true,
          uploadTabClassName: "is-active",
          UrlTabClassName: "",
          filename: "file...",
          file: null,
          url: "",
          logoisurl: false,
          logoFile: null,
          logoUrl: "https://i.imgur.com/ocmhMXA.png",
        }}
        onSubmit={(data) => this.submit(data)}
      >
        {({ values }) => (
          <Form>
            <Modal cancel={this.cancel} header="Add Website">
              <FieldForm
                label="URL"
                className="input"
                type="input"
                name="websiteUrl"
                placeholder="www.acme.com"
              />
              <FieldForm
                label="Website Name"
                className="input"
                type="input"
                name="websiteName"
                placeholder="acme"
              />
              <FieldForm
                label="Username"
                className="input"
                type="input"
                name="Username"
                placeholder="JohnDoe02"
              />
              <FieldForm
                label="Email"
                className="input"
                type="input"
                name="Email"
                placeholder="johndoe@gmail.com"
              />

              <PasswordInput values={values} />
              <FieldForm
                label="Notes"
                className="textarea"
                type="input"
                name="Notes"
                placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae doloribus quo impedit, assumenda laboriosam ipsum?"
                as="textarea"
              />

              <Upload values={values} />
            </Modal>
          </Form>
        )}
      </Formik>
    );
  }
}

Add.propTypes = {
  addWebsite: PropTypes.func.isRequired,
  fetchWebsites: PropTypes.func.isRequired,
};

export default connect(null, { fetchWebsites, addWebsite })(Add);
