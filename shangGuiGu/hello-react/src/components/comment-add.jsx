import React, { Component } from "react";
class Add extends Component {
  render() {
    const { data, onChange, onSubmit } = this.props;
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input
              type="text"
              className="form-control"
              placeholder="用户名"
              name="username"
              value={data.username}
              onChange={onChange}
            ></input>
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea
              type="text"
              className="form-control"
              placeholder="评论内容"
              name="content"
              value={data.content}
              onChange={onChange}
            ></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button
                type="button"
                className="btn btn-default pull-right"
                onClick={onSubmit}
              >
                提交
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Add;
