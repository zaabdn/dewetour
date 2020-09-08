import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRouteAdmin = (props) => {
  if (localStorage.token) {
    if (localStorage.role === "1") {
      return <Route path={props.path} component={props.component} />;
    } else {
      return <Redirect to="/" />;
    }
  }
  return <Redirect to="/" />;
};

export default PrivateRouteAdmin;
