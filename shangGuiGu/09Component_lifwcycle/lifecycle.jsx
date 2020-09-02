class App extends React.Component {
  state = {
    opacity: 1,
  };
  componentDidMount() {
    setInterval(() => {
      let { opacity } = this.state;
      opacity -= 0.1;
      if (opacity <= 0) opacity = 1;
      this.setState({ opacity });
    }, 200);
  }
  handleClick = () => {
    React.unmountComponentAtNode(document.getElementById("example1"));
  };
  render() {
    const { msg } = this.props;
    return (
      <React.Fragment>
        <h1 style={{ opacity: this.state.opacity }}>{msg}</h1>
        <button onClick={this.handleClick}>gkd</button>
      </React.Fragment>
    );
  }
}
