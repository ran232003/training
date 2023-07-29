import { Formik } from "formik";
import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Auth.css";
import * as Yup from "yup";
import { apiCall } from "./apiCall";
import { authSignUp } from "../weather/urls";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authAction } from "../../store/authUserSlice";

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues = { email: "", password: "" };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email Requierd")
      .min(4, "min number is 4")
      .max(20, "Max number of chars is 20")
      .email("Not Valid Email"),
    password: Yup.string()
      .required("Password Requierd")
      .min(6, "min number is 6")
      .max(20, "Max number of chars is 20"),
  });
  const handleSubmit = async (values, errors) => {
    const data = await apiCall("POST", authSignUp, values);
    console.log(data);
    if (data.status === "ok") {
      console.log("nav");
      dispatch(authAction.setUser(data.user));
      navigate("/authHomePage");
    } else {
      console.log("error");
    }
  };
  return (
    <div className="main">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form className="myForm">
            <Form.Group className="mb-3 myInput" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                /* Set onChange to handleChange */
                onChange={handleChange}
                /* Set onBlur to handleBlur */
                onBlur={handleBlur}
                /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
                value={values.name}
                error={!!touched.email && !!errors.email}
                type="email"
                placeholder="Enter email"
                className={touched.email && errors.email ? "error" : null}
                style={{ marginTop: "10px", marginBottom: "20px" }}
              />
              {touched.email && errors.email ? (
                <div className="error-message">
                  {errors.email}
                  {touched.email}
                </div>
              ) : (
                <div>
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </div>
              )}
              {/*  */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                /* Set onChange to handleChange */
                onChange={handleChange}
                /* Set onBlur to handleBlur */
                onBlur={handleBlur}
                /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
                value={values.name}
                type="password"
                placeholder="Password"
                className={touched.password && errors.password ? "error" : null}
                style={{ marginTop: "10px", marginBottom: "20px" }}
              />
              {touched.password && errors.password ? (
                <div className="error-message">{errors.password}</div>
              ) : (
                <div>{errors.password}</div>
              )}
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Auth;
