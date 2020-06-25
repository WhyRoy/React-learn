import React, { Component } from "react";
class Input extends Component {
  render() {
    const { name, label, value, onChange, autoFocus, error, type } = this.props;
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
          autoFocus={autoFocus}
          onChange={onChange}
          value={value}
          name={name}
          id={name}
          type={type}
          className="form-control"
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    );
  }
}

export default Input;
