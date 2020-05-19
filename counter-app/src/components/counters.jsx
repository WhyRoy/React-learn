import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    console.log("Counters - Rendered");
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.props.onReset}
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={() => this.props.onDelete(counter)}
            onHandleIncrement={() => this.props.onIncrement(counter)}
            onHandleDecrement={this.props.onDecrement}
          >
            <h4>Counter {counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
