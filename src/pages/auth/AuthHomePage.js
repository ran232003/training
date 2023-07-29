import React from "react";
import { Button } from "react-bootstrap";
import { apiCall } from "./apiCall";
import { authGetUserURL } from "../weather/urls";

const AuthHomePage = (props) => {
  const handleSubmit = async () => {
    let data = await apiCall("GET", authGetUserURL);
    console.log(data);
  };
  return (
    <div>
      AuthHomePage
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default AuthHomePage;
