import { ErrorMessage, Field } from "formik";
import React from "react";
import Error from "./Error";

const InputFrom = (props) => {
  //   console.log("InputFrom is ", props);
  const { label, name, type, ...rest } = props;
  return (
    <div className="middle">
      <label htmlFor={name}>{label}</label>
      <Field type={type} id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={Error} />
    </div>
  );
};

export default InputFrom;
