import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { checkValidationForm1 } from "./checkValidations";
//build registation form:
//name (mandatory, min = 2, max = 20), email(mandatory,must be email,mandatory, min = 3, max = 50)
// password(mandatory ,must not show, min = 6 max = 20)
const FormQuestions = (props) => {
  const [inputs, setInputs] = useState(props.inputs);
  const [errors, setErrors] = useState(props.formValidation);
  const [touches, setTouches] = useState(props.formValidation);
  const handleSubmit = () => {
    const allValuesFalse = Object.values(errors).every(
      (value) => value === false
    );
    if (allValuesFalse) {
      console.log("submit OK");
    } else {
      console.log("dont submit");
    }
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    console.log("handleChange", value);
    if (touches[name]) {
      const check = !checkValidationForm1(name, value);
      setErrors(() => {
        return { ...errors, [name]: check };
      });
    }

    setInputs(() => {
      return { ...inputs, [name]: value };
    });
  };
  const handleBlur = (e) => {
    const { value, name } = e.target;
    const check = !checkValidationForm1(name, value);
    console.log(check);
    setErrors(() => {
      return { ...errors, [name]: check };
    });
    setTouches(() => {
      return { ...touches, [name]: true };
    });
  };
  if (inputs) {
    return (
      <Form>
        {Object.keys(inputs).map((key, value) => {
          return (
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>{key}</Form.Label>
              <Form.Control
                name={key}
                onBlur={handleBlur}
                className={errors[key] ? "is-invalid" : ""}
                type={key}
                onChange={handleChange}
                placeholder={`Enter ${key}`}
              />
              <Form.Control.Feedback type="invalid">
                {/* {emailError} */}
              </Form.Control.Feedback>
            </Form.Group>
          );
        })}
        <Button onClick={handleSubmit} variant="primary" type="button">
          Submit
        </Button>
      </Form>
    );
  }
};

export default FormQuestions;
