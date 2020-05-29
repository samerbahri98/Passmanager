import React from "react";
import { Field } from "formik";

const Checkbox = props => {
  let i = 0;
  return (
    <div className="field" style={{ textAlign: "left" }}>
      <Field
        name={props.name}
        className="is-checkradio"
        id={`${props.name}${props.label}`}
        type="checkbox"
        value={props.value}
      />
      {/* <Field name={props.name}>
        {({
          field, // { name, value, onChange, onBlur }
          form: { touched, errors, handleChange, values }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
          meta
        }) => {
          let foo = func => {
            values = { ...values, websiteUrl: `${i}` };
            i++;
            console.log(values);
            return func;
          };
          field = {
            ...field,
            onChange: foo(handleChange)
          };
          return (
            <input
              className="is-checkradio"
              id={`${props.name}${props.label}`}
              type="checkbox"
              {...field}
            />
          );
        }}
      </Field> */}
      <label htmlFor={`${props.name}${props.label}`}>{props.label}</label>
    </div>
  );
};

export default Checkbox;
