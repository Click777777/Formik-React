import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import "../App.css";
import FormikControl from "./FormikControl";

const contactArray = [
  { key: "Email", value: "contactEmail" },
  { key: "Phone", value: "contactPhone" },
];

const initialValue = {
  email: "",
  password: "",
  comfirmPassword: "",
  contact: "",
  phoneNo: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid Email").required("Required Email"),
  password: Yup.string().required("Required Password"),
  comfirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Must be same Password")
    .required("Need to comfirm"),
  contact: Yup.string().required("Choose One"),
  phoneNo: Yup.string().when("contact", {
    is: "contactPhone",
    then: Yup.string().required("Required"),
  }),
});

const onSubmit = (value) => {
  console.log("Submit", value);
};

const Registration = () => {
  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        console.log("Formik is", formik);
        return (
          <Form className="container">
            <div className="sec-Container">
              <h3>Login Form</h3>

              <FormikControl
                control="input"
                type="email"
                label="Email"
                name="email"
              />

              <FormikControl
                control="input"
                type="password"
                label="Password"
                name="password"
              />

              <FormikControl
                control="input"
                type="password"
                label="Comfirm Password"
                name="comfirmPassword"
              />

              <FormikControl
                control="radio"
                label="Contact"
                name="contact"
                option={contactArray}
              />

              <FormikControl
                control="input"
                type="number"
                label="Phone"
                name="phoneNo"
              />

              <button type="submit">Submit</button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Registration;
