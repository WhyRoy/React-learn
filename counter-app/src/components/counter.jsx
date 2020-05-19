import React, { Component } from "react"; //imrc
class Counter extends Component {
  //cc
  componentDidUpdate(prevProps) {
    console.log("prevProps", prevProps);
  }
  componentWillUnmount() {
    console.log("Counter - Unmount");
  }
  render() {
    //console.log("props", this.props);
    console.log("Counter - Rendered");
    return (
      <div className="row">
        <div className="col">
          <div className="row">
            {this.props.children}
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          </div>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onHandleIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            +
          </button>
          <button
            onClick={() => this.props.onHandleDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            className="btn btn-danger btm-sm m-2"
            onClick={this.props.onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
  formatCount() {
    //const count = this.state.value;
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    return (classes += this.props.counter.value === 0 ? "warning" : "primary");
  }
}

export default Counter;
