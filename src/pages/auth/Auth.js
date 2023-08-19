import { Formik } from "formik";
import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Auth.css";
import * as Yup from "yup";
import { apiCall } from "./apiCall";
import { authSignUp, loginURL } from "../weather/urls";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authAction } from "../../store/authUserSlice";
import { loadingAction } from "../../store/loadingData";
import { toastAction } from "../../store/toastAction";

const Auth = () => {
  const statusMap = { login: "signup", signup: "login" };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { status } = useParams();
  console.log(status);
  let text =
    status === "login" ? "if you are not signUp  " : "if you are signUp  ";
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
    let url = status === "login" ? loginURL : authSignUp;

    dispatch(loadingAction.toggleLoading(true));
    const data = await apiCall("POST", url, values);
    console.log(data);
    if (data.status === "ok") {
      console.log("nav");
      dispatch(
        toastAction.setToast({ errorMessage: data.msg, type: "success" })
      );
      dispatch(authAction.setUser(data.user));
      navigate("/authHomePage");
    } else {
      console.log("error");
      dispatch(
        toastAction.setToast({
          errorMessage: data.msg,
          type: "error",
          show: true,
        })
      );
    }
    dispatch(loadingAction.toggleLoading(false));
  };
  return (
    <div>
      <div className="main">
        <div>
          <h1>{status}</h1>
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
                  className={
                    touched.password && errors.password ? "error" : null
                  }
                  style={{ marginTop: "10px", marginBottom: "20px" }}
                />
                {touched.password && errors.password ? (
                  <div className="error-message">{errors.password}</div>
                ) : null}
              </Form.Group>

              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
              </Button>
              <div style={{ marginTop: "10px" }}>
                {text}
                <Link to={`/auth/${statusMap[status]}`}>Click here</Link>
              </div>
              <div style={{ marginTop: "10px" }}>
                Forgot youre password? <Link to={`/forgot`}>Click here</Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Auth;
