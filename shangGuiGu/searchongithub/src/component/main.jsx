import React, { Component } from "react";
import Search from "./search";
import UserList from "./user";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Main extends Component {
  state = {
    searchName: "",
    value: "",
  };

  refreshName = (searchName) => {
    this.setState({ searchName });
  };

  render() {
    return (
      <div className="container">
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <Search
            refreshName={this.refreshName}
            searchName={this.state.searchName}
          />
        </section>
        <UserList searchName={this.state.searchName} />
        <ToastContainer />
      </div>
    );
  }
}

export default Main;
