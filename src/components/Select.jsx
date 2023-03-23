import { ErrorMessage, Field } from "formik";
import React from "react";
import Error from "./Error";

const Select = (props) => {
  //   console.log("Select is ", props);
  const { label, name, option, ...rest } = props;
  return (
    <div className="middle">
      <label htmlFor={name}>{label}</label>
      <Field as="select" id={name} name={name} {...rest}>
        {option.map((i) => (
          <option key={i.value} value={i.value}>
            {i.key}
          </option>
        ))}
      </Field>

      <ErrorMessage name={name} component={Error} />
    </div>
  );
};

export default Select;
