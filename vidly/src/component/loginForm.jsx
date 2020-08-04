import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import auth from "../services/authService";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    //call server
    try {
      const { data } = this.state;
      const { data: jwt } = auth.login(data.username, data.password);
      console.log(jwt);
      window.location = "/";
      //this.props.history.push("/"); 单页面应用，只是页面重定向。不会使componentDidMount再运行，
      //我们需要完全重载，所以我们用Window.location='/'
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = {};
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username", true)}
          {this.renderInput("password", "Password", false, "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
