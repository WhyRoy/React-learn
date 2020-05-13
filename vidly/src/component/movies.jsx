import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { deleteMovie } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };
  handleDelete = (movie) => {
    deleteMovie(movie._id);
    console.log("执行了");
    console.log(this.state.movies.length);
    this.setState({ movies: getMovies() });
  };
  render() {
    return (
      <div>
        <p>Showing {this.state.movies.length} movies in the database. </p>
        <table className="table">
          <thead>
            <tr>
              <td>TITLE</td>
              <td>GENRE</td>
              <td>STOCK</td>
              <td>RATE</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(movie)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
