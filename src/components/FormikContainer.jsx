import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const ageArr = [
  { key: "Please choose your age", value: "" },
  { key: "18", value: "18" },
  { key: "19", value: "19" },
  { key: "20", value: "20" },
];
const agreement = [
  { key: "I agree the privacy and policy", value: "agreePolicy" },
  { key: "Access Storage", value: "storage" },
];
const genderArr = [
  { key: "Male", value: "male" },
  { key: "Female", value: "female" },
];
const initialValue = {
  email: "",
  description: "",
  age: "",
  gender: "",
  agree: [],
  birth: null,
};
const validationSchema = Yup.object({
  email: Yup.string().required("Required Email"),
  description: Yup.string().required("Required Description"),
  age: Yup.string().required("Choose Age"),
  gender: Yup.string().required("Choose Gender"),
  agree: Yup.array().required("You must agree privcay and policy"),
  birth: Yup.date().required("Required Date").nullable(),
});
const onSubmit = (values) => {
  console.log("Submit is ", values);
  console.log("Date is ", JSON.parse(JSON.stringify(values)));
};

const FormikContainer = () => {
  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        // console.log("Formik is ", formik);
        return (
          <Form className="container">
            <div className="sec-Container">
              <FormikControl
                label="Email"
                name="email"
                type="email"
                control="email"
              />

              <FormikControl
                control="textarea"
                label="Description"
                name="description"
              />

              <FormikControl
                control="select"
                option={ageArr}
                name="age"
                label="Age"
              />

              <FormikControl
                control="radio"
                option={genderArr}
                name="gender"
                label="Gender"
              />

              <FormikControl
                control="checkbox"
                option={agreement}
                name="agree"
                label="Agreement"
              />

              <FormikControl control="date" label="Birthday" name="birth" />

              <button type="submit">Submit</button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikContainer;
