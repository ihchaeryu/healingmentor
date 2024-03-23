import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../contexts/userContext";

const PrivateRoute = ({ children }) => {
  // authentication logic
  // just user context username for now
  const { user } = useContext(UserContext);

  if (user.username === '') {
    return <Navigate to="/login" />;
  }
  console.log('username: ' + user.username);
  return children;
};

export default PrivateRoute;