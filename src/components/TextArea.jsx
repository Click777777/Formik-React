import { ErrorMessage, Field } from "formik";
import React from "react";
import Error from "./Error";

const TextArea = (props) => {
  //   console.log("TextArea is ", props);
  const { label, name, ...rest } = props;
  return (
    <div className="middle">
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={Error} />
    </div>
  );
};

export default TextArea;
