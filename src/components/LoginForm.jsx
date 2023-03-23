import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import "../App.css";
import FormikControl from "./FormikControl";

const initialValue = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid Email").required("Required Email"),
  password: Yup.string().required("Required Password"),
});

const onSubmit = (value) => {
  console.log("Submit", value);
};

const LoginForm = () => {
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
                control="email"
                label="Email"
                name="email"
                type="email"
              />
              <FormikControl
                control="email"
                label="Password"
                name="password"
                type="password"
              />

              <button type="submit">Submit</button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
