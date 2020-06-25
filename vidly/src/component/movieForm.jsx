import React, { Component } from "react";
class MoviesDetails extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>Movies From {this.props.match.params.id}</h2>

        <button
          className="btn btn-primary"
          onClick={() => this.props.history.push("/movies")}
        >
          Save
        </button>
      </React.Fragment>
    );
  }
}

export default MoviesDetails;
