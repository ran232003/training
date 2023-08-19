import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useParams } from "react-router-dom";

const PrivateAuth = () => {
  let { status } = useParams();
  console.log(status, "status");

  return status === "login" || status === "signup" ? (
    <Outlet />
  ) : (
    <Navigate to="*" />
  );
};

export default PrivateAuth;
