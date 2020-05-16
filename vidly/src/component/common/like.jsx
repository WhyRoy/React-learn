import React, { Component } from "react";
//要告诉一个电影是否点赞，那就创建一个like的布尔属性，那这个组件向外输出什么呢？
//input: liked :boolean
//Output: onClick
class Like extends Component {
  render() {
    let classes = "fa fa-heart";
    if (!this.props.liked) classes += "-o";
    return (
      <i
        className={classes}
        aria-hidden="true"
        onClick={this.props.onHandleLike}
        style={{ cursor: "pointer" }}
      ></i>
    );
  }
}

export default Like;
