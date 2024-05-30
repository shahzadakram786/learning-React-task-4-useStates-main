import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Box,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";

// Define the validation schema
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});

const InputPass = () => {
  const [show, setShow] = useState(false);

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.setSubmitting(false);
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <Box>
            <FormControl isInvalid={errors.email && touched.email} mb={4}>
              <Field name="email">
                {({ field }) => (
                  <Input
                    {...field}
                    type="email"
                    placeholder="Email or Number"
                    color="white"
                    _placeholder={{ color: "#A0AEC0" }}
                    size="md"
                  />
                )}
              </Field>
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.password && touched.password} mb={4}>
              <InputGroup>
                <Field name="password">
                  {({ field }) => (
                    <Input
                      {...field}
                      type={show ? "text" : "password"}
                      placeholder="Enter Password"
                      color="white"
                      _placeholder={{ color: "#A0AEC0" }}
                      size="md"
                    />
                  )}
                </Field>
                <InputRightElement w="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>

            <Button
              type="submit"
              size="sm"
              isLoading={isSubmitting}
              _hover={{ color: "blue.300" }}
            >
              Sign In
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default InputPass;
