import React, { Component } from "react";
import CommentItem from "./comment-item";
import "./list.css";

class List extends Component {
  render() {
    const { comment, onDelete } = this.props;
    const display = comment.length === 0 ? "block" : "none";
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{ display }}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {comment.map((item, index) => (
            <CommentItem
              comment={item}
              key={index}
              index={index}
              onDelete={onDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
