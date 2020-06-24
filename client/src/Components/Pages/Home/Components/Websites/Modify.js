import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  fetchWebsites,
  modifyWebsite,
} from "../../../../../Actions/websiteActions";
import { Formik, Form } from "formik";
import Modal from "./Modal";
import Edit from "./Edit";
class Modify extends Component {
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
        Authorization: "Client-ID 9f2a00b121ede0e",
      },
      data: formData,
    });
    this.setState({ logoUrl: feedback.data.data.link });
    console.log(feedback);
    console.log(this.state.logoUrl);
  };

  //submittion
  submit = async (data) => {
    console.log(this.props.id);
    this.setState({ logoUrl: data.logoUrl });
    if (data.logoisthere && !data.logoisurl) await this.upload(data.logoFile);
    const postData = {
      WebsiteName: data.websiteName,
      WebsiteUrl: data.websiteUrl,
      Username: data.Username,
      Email: data.Email,
      Password: data.Password,
      Notes: data.Notes,
      logoUrl: this.state.logoUrl,
    };

    await this.props.modifyWebsite(this.props.id,postData);
    await this.props.fetchWebsites();
    this.props.notify(
      `${data.websiteName} is saved`,
      "notification is-primary is-light"
    );
    this.cancel();
  };

  cancel = () => this.props.cancel();

  componentDidMount(){
    console.log(this.props.obj)
  }
  render() {
    return (
      <Formik
        initialValues={{
          websiteName: this.props.obj.WebsiteName,
          websiteUrl: this.props.obj.WebsiteUrl,
          Username: this.props.obj.Username,
          Email: this.props.obj.Email,
          Password: this.props.obj.Password,
          randomPassword: false,
          passwordLength: 10,
          allowed: [],
          Notes: this.props.obj.Notes,
          logoisthere: false,
          logoTabEnabled: false,
          uploadTab: true,
          uploadTabClassName: "is-active",
          UrlTabClassName: "",
          filename: "file...",
          url: "",
          logoisurl: false,
          logoFile: null,
          logoUrl: this.props.obj.logoUrl,
        }}
        onSubmit={(data) => this.submit(data)}
      >
        {({ values }) => (
          <Form>
            <Modal cancel={this.cancel} header="Modify Website">
              <Edit values={values} />
            </Modal>
          </Form>
        )}
      </Formik>
    );
  }
}

Modify.propTypes = {
  modifyWebsite: PropTypes.func.isRequired,
  fetchWebsites: PropTypes.func.isRequired,
};

export default connect(null, { fetchWebsites, modifyWebsite })(Modify);
