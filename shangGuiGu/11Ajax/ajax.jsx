class App extends React.Component {
  state = {
    repoName: "",
    repoUrl: "",
  };

  async componentDidMount() {
    //发送异步请求
    const seachUrl =
      "https://api.github.com/search/repositories?q=react&sort=stars";
    const { data } = await axios.get(seachUrl);
    console.log(data);
    const { name, url } = data.items[0];
    this.setState({ repoName: name, repoUrl: url });
  }

  render() {
    const { repoName, repoUrl } = this.state;
    if (repoName === "") {
      return <h2>Loading</h2>;
    } else {
      return (
        <h1>
          Most popular repo is <a href={repoUrl}>{repoName}</a>
        </h1>
      );
    }
  }
}
