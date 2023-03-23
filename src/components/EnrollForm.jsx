import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import "../App.css";
import FormikControl from "./FormikControl";

const courseArray = [
  { key: "Choose A Course", value: "" },
  { key: "React (Beginner to Advance)", value: "react" },
  { key: "Nodejs Complete Course", value: "node" },
  { key: "Full Stack Development (React + Node)", value: "fullStack" },
];

const skillArray = [
  { key: "HTML", value: "html" },
  { key: "CSS", value: "css" },
  { key: "JS", value: "js" },
];

const initialValue = {
  email: "",
  bio: "",
  course: "",
  skill: [],
  date: null,
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid Email").required("Required Email"),
  bio: Yup.string().required("Required Bio"),
  course: Yup.string().required("Choose One "),
  skill: Yup.array().required("Select a Skill"),
  date: Yup.date().required("Need Date").nullable(),
});

const onSubmit = (value) => {
  console.log("Submit", value);
  console.log("Data", JSON.parse(JSON.stringify(value)));
};

const EnrollForm = () => {
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
              <h3>Enrollment Form</h3>

              <FormikControl
                control="input"
                type="email"
                label="Email"
                name="email"
              />

              <FormikControl
                control="input"
                type="text"
                label="Bio"
                name="bio"
              />

              <FormikControl
                control="select"
                label="Course"
                name="course"
                option={courseArray}
              />

              <FormikControl
                control="checkbox"
                label="Skillset"
                name="skill"
                option={skillArray}
              />

              <FormikControl control="date" label="Course Date" name="date" />

              <button type="submit">Submit</button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default EnrollForm;
