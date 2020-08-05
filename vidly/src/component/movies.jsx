import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/movieServices";
import { getGenres } from "../services/genreServices";
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import { paganate } from "../utils/paganate";
import ListGroup from "./common/listGroup";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: null,
    genres: [],
    value: "",
    sortColumn: { path: "title", order: "asc" }, //这个参数是个对象，既包含了按什么排序，又包含了排序的方向，这就是用对象的好处，否则岂不是要用两个参数？
  };
  async componentDidMount() {
    const { data } = await getGenres();
    const { data: movies } = await getMovies();
    const genres = [{ name: "All Genres", _id: "" }, ...data];
    this.setState({ movies, genres });
  }

  handleDelete = async (movieId) => {
    const originalState = this.state.movies;
    const movies = this.state.movies.filter((m) => m._id !== movieId);
    this.setState({ movies });
    try {
      await deleteMovie(movieId);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        toast.error("This movie has already been deleted");
      }
      this.setState({ movies: originalState });
    }
  };

  handleLike = (movie) => {
    //console.log(movie, "Like Button Clicked");
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
    this.setState({ selectedGenre: genre, currentPage: 1, value: "" });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPageData = () => {
    let {
      currentPage,
      pageSize,
      movies: Allmovies,
      selectedGenre,
      sortColumn,
      value,
    } = this.state;
    const result = Allmovies.filter((movie) =>
      movie.title.toLowerCase().includes(value.toLowerCase())
    );
    if (result) Allmovies = result;
    const filtered =
      selectedGenre && selectedGenre._id !== ""
        ? Allmovies.filter((m) => m.genre._id === selectedGenre._id)
        : Allmovies;

    const orderd = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paganate(orderd, currentPage, pageSize);
    return { totalCount: filtered.length, data: movies };
  };

  handleClick = () => {
    this.props.history.push("/movies/new");
  };

  handleSearch = (query) => {
    this.setState({ selectedGenre: null, currentPage: 1, value: query });
  };

  render() {
    const { length: count } = this.state.movies;
    const { currentPage, pageSize, genres, sortColumn } = this.state;
    const { totalCount, data: movies } = this.getPageData();
    const { user } = this.props;

    if (count === 0) return <p>There is no movie in the database</p>;

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
          {user && (
            <Link className="btn btn-primary" to="/movies/new">
              New Movie
            </Link>
          )}
          <p>Showing {totalCount} movies in the database.</p>
          <input
            name="query"
            value={this.state.value}
            onChange={(e) => this.handleSearch(e.target.value)}
            className="form-control my-3"
            autoFocus
            placeholder="Search..."
          />
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
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
