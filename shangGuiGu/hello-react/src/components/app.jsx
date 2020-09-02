import React, { Component } from "react";
import Add from "./comment-add";
import List from "./comment-list";
class App extends Component {
  state = {
    comment: [
      { username: "Tom", content: "React挺好的" },
      { username: "Tom", content: "React太难了" },
    ],
    data: {
      username: "",
      content: "",
    },
  };

  handleChange = ({ target: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value.trim();
    this.setState({ data });
  };

  verify = (data) => {
    if (data.username === "" || data.content === "") {
      console.log("请写完");
      return null;
    } else {
      return true;
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { data, comment } = { ...this.state };
    if (this.verify(data)) {
      comment.unshift(data);
      console.log(this.state);
      this.setState({ comment });
    }
  };

  handleDelete = (index) => {
    let { comment } = this.state;
    comment.splice(index, 1);
    this.setState({ comment });
    console.log(index);
  };

  render() {
    const { comment, data } = this.state;
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <div className="row">
            <div className="col">
              <Add
                data={data}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
              />
            </div>
            <div className="col">
              <List comment={comment} onDelete={this.handleDelete} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
