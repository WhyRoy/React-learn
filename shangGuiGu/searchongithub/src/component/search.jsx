import React, { Component } from "react";
import { toast } from "react-toastify";

import PropTypes from "prop-types";

class Search extends Component {
  static propTypes = {
    refreshName: PropTypes.func.isRequired,
  };

  search = () => {
    //toast(this.nameInput.value);
    this.props.refreshName(this.nameInput.value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="enter the name you search"
          ref={(input) => (this.nameInput = input)}
        />

        <button onClick={this.search}>Search</button>
      </div>
    );
  }
}

export default Search;
