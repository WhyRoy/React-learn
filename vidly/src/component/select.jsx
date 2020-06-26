import React, { Component } from "react";
class Selected extends Component {
  render() {
    const { name, label, error, genres, onChange, value } = this.props;
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>

        <select
          name={name}
          className="custom-select"
          id={name}
          value={value}
          onChange={onChange}
        >
          {genres.map((opt) => (
            <option value={opt._id} key={opt.name}>
              {opt.name}
            </option>
          ))}
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    );
  }
}

export default Selected;
