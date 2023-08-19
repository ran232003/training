import React from "react";
import { Button } from "react-bootstrap";
import { apiCall } from "./apiCall";
import { authGetUserURL } from "../weather/urls";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authAction } from "../../store/authUserSlice";

const AuthHomePage = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async () => {
    let data = await apiCall("GET", authGetUserURL);
    if (data.status === "fail") {
      if (data.msg === "Token Expired") {
        dispatch(authAction.setUser(null));
        navigate("/auth");
        return;
      }
    }
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
