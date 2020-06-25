import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Selected from "../select";
class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const option = {
      abortEarly: false,
    };
    const { error } = Joi.validate(this.state.data, this.schema, option);
    const errors = {};
    if (!error) return null;
    error.details.map((arr) => (errors[arr.path[0]] = arr.message));
    return errors;
  };

  validateProperty = ({ name, value }) => {
    // const { error } = Joi.validate({ [name]: value }, Joi.required());
    // return error ? error.details[0].message : null;
    const obj = { [name]: value }; //ES6定义对象属性的一种方法，将表达式放进中括号表示属性名
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };
  handleChange = ({ target: input }) => {
    const { errors } = { ...this.state };
    // const errors = {};
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };
  renderButton(label) {
    return (
      <button className="btn btn-primary" disabled={this.validate()}>
        {label}
      </button>
    );
  }
  renderSelect(name, label) {
    const { errors, genres, data } = this.state;
    return (
      <Selected
        name={name}
        label={label}
        error={errors[name]}
        genres={genres}
        value={data[name]}
        onChange={this.handleChange}
      />
    );
  }
  renderInput(name, label, autoFocus, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        autoFocus={autoFocus}
        error={errors[name]}
        type={type}
      />
    );
  }
}

export default Form;
