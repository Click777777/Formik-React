import { ErrorMessage, Field } from "formik";
import React from "react";
import Error from "./Error";

const Radio = (props) => {
  //   console.log("Radio is ", props);
  const { label, name, option, ...rest } = props;
  return (
    <div className="middle">
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ field }) => {
          // console.log("Field is ", field);
          return option.map((i) => (
            <React.Fragment key={i.value}>
              <div className="radio">
                <input
                  type="radio"
                  id={i.value}
                  {...field}
                  {...rest}
                  value={i.value}
                  checked={field.value === i.value}
                />
                <label htmlFor={i.value}>{i.key}</label>
              </div>
            </React.Fragment>
          ));
        }}
      </Field>

      <ErrorMessage name={name} component={Error} />
    </div>
  );
};

export default Radio;
