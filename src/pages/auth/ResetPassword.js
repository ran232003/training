import { Formik } from "formik";
import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "./Auth.css";
import * as Yup from "yup";
import { apiCall } from "./apiCall";
import { authSignUp, getTimeURL, resetPasswordURL } from "../weather/urls";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authAction } from "../../store/authUserSlice";
import { loadingAction } from "../../store/loadingData";
const ResetPassword = () => {
  let { userToken } = useParams();
  console.log(userToken);
  console.log(new Date());
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues = { password: "" };
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required("password Requierd")
      .min(6, "min number is 6")
      .max(20, "Max number of chars is 20"),
  });
  const handleSubmit = async (values, errors) => {
    dispatch(loadingAction.toggleLoading(true));
    const currentTime = new Date();

    const obj = {
      password: values.password,
      userToken: userToken,
      currentTime: currentTime.toISOString(),
    };
    const data = await apiCall("POST", resetPasswordURL, obj);
    console.log(data);
    if (data.status === "ok") {
      console.log("nav");
      //dispatch(authAction.setUser(data.user));
      navigate("/auth/login");
    } else {
      console.log("error");
    }
    dispatch(loadingAction.toggleLoading(false));
  };

  return (
    <div>
      <div className="main">
        <div>
          <h1>Reset Password</h1>
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
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  /* Set onChange to handleChange */
                  onChange={handleChange}
                  /* Set onBlur to handleBlur */
                  onBlur={handleBlur}
                  /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
                  value={values.password}
                  error={!!touched.password && !!errors.password}
                  type="password"
                  placeholder="Enter password"
                  className={
                    touched.password && errors.password ? "error" : null
                  }
                  style={{ marginTop: "10px", marginBottom: "20px" }}
                />
                {touched.password && errors.password ? (
                  <div className="error-message">
                    {errors.password}
                    {touched.password}
                  </div>
                ) : null}
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
};

export default ResetPassword;
