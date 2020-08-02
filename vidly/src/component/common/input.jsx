import React, { Component } from "react";
class Input extends Component {
  render() {
    const {
      name,
      label,
      value,
      onChange,
      autoFocus,
      error,
      type = "text",
    } = this.props;
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
          name={name}
          onChange={onChange}
          value={value}
          id={name}
          type={type}
          autoFocus={autoFocus}
          className="form-control"
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    );
  }
}

export default Input;
