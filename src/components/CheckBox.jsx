import { ErrorMessage, Field } from "formik";
import React from "react";
import Error from "./Error";

const CheckBox = (props) => {
  //   console.log("Radio is ", props);
  const { name, option, ...rest } = props;
  return (
    <div className="middle">
      <Field name={name} {...rest}>
        {({ field }) => {
          // console.log("Field is ", field);
          return option.map((i) => (
            <React.Fragment key={i.key}>
              <div className="radio">
                <input
                  type="checkbox"
                  id={i.value}
                  {...field}
                  {...rest}
                  value={i.value}
                  checked={field.value.includes(i.value)}
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

export default CheckBox;
