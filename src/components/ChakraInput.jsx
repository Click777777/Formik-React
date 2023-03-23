import { Field } from "formik";
import React from "react";
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";

const ChakraInput = (props) => {
  //   console.log("ChakraInput is ", props);
  const { label, name, type, ...rest } = props;
  return (
    <Field name={name}>
      {({ field, form }) => {
        // console.log(field, form);
        const { errors } = form;
        console.log(errors.email);

        return (
          <FormControl isInvalid={form.errors[name] && form.touched[name]}>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <Field type={type} id={name} name={name} {...field} {...rest} />
            <FormErrorMessage>{errors[name]}</FormErrorMessage>
          </FormControl>
        );
      }}
    </Field>
  );
};

export default ChakraInput;
