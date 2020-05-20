import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
//import { deleteMovie } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paganate } from "../utils/paganate";
class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1,
  };
  // handleDelete = (movie) => {
  //   deleteMovie(movie._id);
  //   console.log("执行了");
  //   console.log(this.state.movies.length);
  //   this.setState({ movies: getMovies() });
  // };
  handleDelete = (movieId) => {
    const movies = this.state.movies.filter((m) => m._id !== movieId);
    this.setState({ movies });
  };
  handleLike = (movie) => {
    console.log(movie, "Like Button Clicked");
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handlePageChange = (pageNum) => {
    //console.log("点击了第" + pageNum + "页");
    this.setState({ currentPage: pageNum });
  };

  render() {
    const { length: count } = this.state.movies;
    const { currentPage, pageSize, movies: Allmovies } = this.state;
    if (count === 0) return <p>There is no movie in the database</p>;
    const movies = paganate(Allmovies, currentPage, pageSize);
    console.log(Allmovies);
    console.log(movies);
    return (
      <div>
        <p>Showing {this.state.movies.length} movies in the database.</p>
        <table className="table">
          <thead>
            <tr>
              <td>TITLE</td>
              <td>GENRE</td>
              <td>STOCK</td>
              <td>RATE</td>
              <td></td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    movie={movie}
                    onHandleLike={() => this.handleLike(movie)}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(movie._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Movies;
