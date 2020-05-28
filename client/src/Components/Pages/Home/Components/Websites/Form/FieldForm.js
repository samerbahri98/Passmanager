import React from "react";
import { Field } from "formik";

const FieldForm = props => {
  return (
    <div className="field">
      <label className="label" style={{ textAlign: "left" }}>
        {props.label}

      </label>
      <Field
          className={props.className}
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          as={props.as}
          value={props.value}
          step="1"
          min="4"
          max="100"
//          onChange={props.change}
        />
    </div>
  );
};

export default FieldForm;
