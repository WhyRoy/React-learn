class App extends React.Component {
  state = {
    toDo: [],
    value: null,
  };

  handleAdd = (e) => {
    const { toDo, value } = this.state;
    //this.setState({ toDo: this.state.toDo.push() });
    e.preventDefault();
    toDo.push(value);
    this.setState({ toDo });
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { toDo, value } = this.state;
    return (
      <React.Fragment>
        <h1>Simple TODO List</h1>
        <Add
          handleAdd={this.handleAdd}
          value={value}
          handleChange={this.handleChange}
          toDo={toDo}
        />
        <List toDo={this.state.toDo} />
      </React.Fragment>
    );
  }
}
class Add extends React.Component {
  render() {
    const { handleAdd, value, handleChange, toDo } = this.props;
    return (
      <React.Fragment>
        <form onSubmit={handleAdd}>
          <input type="text" value={value} onChange={handleChange} />
          <button>add #{toDo.length}</button>
        </form>
      </React.Fragment>
    );
  }
}
class List extends React.Component {
  render() {
    const { toDo } = this.props;
    return (
      <ul>
        {toDo.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    );
  }
}
