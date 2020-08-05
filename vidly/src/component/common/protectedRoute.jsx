import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../../services/authService";

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  return (
    <Route
      //path={path}
      {...rest}
      render={(props) => {
        console.log(props);
        return auth.getCurrentUser() === null ? (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        ) : Component ? (
          <Component {...props} />
        ) : (
          render(props)
        );
      }}
    />
  );
};

export default ProtectedRoute;
