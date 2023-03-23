import { ErrorMessage, Field } from "formik";
import React from "react";
import Error from "./Error";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Date = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div className="middle">
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }) => {
          //   console.log(form, field);
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DatePicker
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage component={Error} name={name} />
    </div>
  );
};

export default Date;
