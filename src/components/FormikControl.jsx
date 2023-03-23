import React from "react";
import ChakraInput from "./ChakraInput";
import CheckBox from "./CheckBox";
import Date from "./Date";
import InputFrom from "./InputFrom";
import Radio from "./Radio";
import Select from "./Select";
import TextArea from "./TextArea";

const FormikControl = (props) => {
  // console.log("FormikControl is ", props);
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <InputFrom {...rest} />;

    case "textarea":
      return <TextArea {...rest} />;

    case "select":
      return <Select {...rest} />;

    case "radio":
      return <Radio {...rest} />;

    case "checkbox":
      return <CheckBox {...rest} />;

    case "date":
      return <Date {...rest} />;

    case "chakraInput":
      return <ChakraInput {...rest} />;

    default:
      return null;
  }
};

export default FormikControl;
