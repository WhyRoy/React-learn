import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { toast } from "react-toastify";

import http from "../services/httpServices";
class UserList extends Component {
  static propTypes = {
    searchName: PropTypes.string.isRequired,
  };

  state = {
    firstView: true,
    loading: false,
    users: null,
    error: null,
  };

  async componentWillReceiveProps(nextProps) {
    let { searchName } = nextProps;
    console.log("发送ajax请求", searchName);
    // const url = `https://api.github.com/search/users?q=${searchName}`;
    const url = `https://api.github.com/search/users?q=${searchName}`;
    this.setState({ firstView: false, loading: true });

    // 使用axios库
    // try {
    //   const { data } = http.get(url);
    //   toast(data);
    // } catch (error) {}
    // http
    //   .get(url)
    //   .then((response) => {
    //     console.log(response);
    //     this.setState({ loading: false, users: response.data.items });
    //   })
    // .catch((error) => {
    //   // debugger
    //   console.log("error", error.response.data.message, error.message);
    //   this.setState({ loading: false, error: error.message });
    // });

    try {
      const { data } = await http.get(url);

      this.setState({ loading: false, users: data.items });
    } catch (err) {
      // debugger
      toast.error(err.message);
      console.log("----", err.message);
    }
  }

  render() {
    if (this.state.firstView) {
      return <h2>Enter name to search</h2>;
    } else if (this.state.loading) {
      return <h2>Loading result...</h2>;
    } else if (this.state.error) {
      return <h2>{this.state.error}</h2>;
    } else {
      return (
        <div className="row">
          {this.state.users.map((user) => (
            <div className="card" key={user.html_url}>
              <a href={user.html_url} target="_blank">
                <img
                  src={user.avatar_url}
                  style={{ width: "100px" }}
                  alt="user"
                />
              </a>
              <p className="card-text">{user.login}</p>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default UserList;
