import React, { Fragment } from "react";
import FieldForm from "./Form/FieldForm";

import PasswordInput from "./PasswordInput";
import Upload from "./Upload";
const Edit = (props) => {
  return (
    <Fragment>
      <FieldForm
        label="URL"
        className="input"
        type="input"
        name="websiteUrl"
        placeholder="www.acme.com"
        value={props.values.websiteUrl}
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

      <PasswordInput values={props.values} />
      <FieldForm
        label="Notes"
        className="textarea"
        type="input"
        name="Notes"
        placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae doloribus quo impedit, assumenda laboriosam ipsum?"
        as="textarea"
      />

      <Upload values={props.values} />
    </Fragment>
  );
};

export default Edit;
