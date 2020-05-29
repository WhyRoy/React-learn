import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
//import { deleteMovie } from "../services/fakeMovieService";
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import { paganate } from "../utils/paganate";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";
class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: [],
  };
  componentDidMount() {
    const genres = [{ name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }
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

  handleGenreSelect = (genre) => {
    //console.log("list clicked");
    //console.log(genre);
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };
  render() {
    const { length: count } = this.state.movies;
    const {
      currentPage,
      pageSize,
      movies: Allmovies,
      genres,
      selectedGenre,
    } = this.state;
    if (count === 0) return <p>There is no movie in the database</p>;

    const filtered =
      selectedGenre && selectedGenre._id
        ? Allmovies.filter((m) => m.genre._id === selectedGenre._id)
        : Allmovies;

    let movies = paganate(filtered, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={genres}
            onItemSelect={this.handleGenreSelect}
            selectedItem={this.state.selectedGenre}
          />
        </div>
        <div className="col">
          <p>Showing {filtered.length} movies in the database.</p>
          <MoviesTable
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
          />
          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
