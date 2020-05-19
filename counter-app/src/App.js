import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";
//必须复习，不太会。
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 1 },
      { id: 3, value: 5 },
      { id: 4, value: 2 },
    ],
  };
  constructor(props) {
    super(props);
    console.log("App - Constructor");
  }
  componentDidMount() {
    console.log("App - Mounted");
  }
  handleIncrement = (counter) => {
    //console.log(counter);
    const counters = [...this.state.counters]; //复制一份counters，但是要注意，数组是引用数据类型
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
    //console.log(counters[0]);
    //console.log(this.state.counters[0]);
  };
  handleDecrement = (counter) => {
    //console.log(counter);
    const counters = [...this.state.counters]; //复制一份counters，但是要注意，数组是引用数据类型
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
    //console.log(counters[0]);
    //console.log(this.state.counters[0]);
  };
  handleDelete = (counter) => {
    //console.log("Event Handler Called");
    const counters = this.state.counters.filter((c) => c.id !== counter.id);
    this.setState({
      counters,
    });
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
