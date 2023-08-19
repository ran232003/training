import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Auth.css";
import * as Yup from "yup";
import { apiCall } from "./apiCall";
import { authSignUp, forgotPasswordURL } from "../weather/urls";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authAction } from "../../store/authUserSlice";
import { loadingAction } from "../../store/loadingData";
import "./Auth.css";
const ForgotPassword = () => {
  const [email, setEmail] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues = { email: "" };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email Requierd")
      .min(4, "min number is 4")
      .max(20, "Max number of chars is 20")
      .email("Not Valid Email"),
  });
  const handleSubmit = async (values, errors) => {
    dispatch(loadingAction.toggleLoading(true));

    const data = await apiCall("POST", forgotPasswordURL, values);
    console.log(data);
    if (data.status === "ok") {
      console.log("nav");
      dispatch(authAction.setUser(data.user));
    } else {
      console.log("error");
    }
    dispatch(loadingAction.toggleLoading(false));
    setEmail(values.email);
  };
  if (email) {
    return (
      <div>
        <div className="forgot-password-email-sent">
          <h2>Email Sent</h2>
          <p>An email with the password reset link has been sent to {email}.</p>
          {/* You can provide a link here for the user to navigate to set a new password */}
          {/* Example: <Link to="/reset-password">Set New Password</Link> */}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="main">
          <div>
            <h1>Forgot Password</h1>
          </div>
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

                <Button variant="primary" type="submit" onClick={handleSubmit}>
                  Send
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
};

export default ForgotPassword;
