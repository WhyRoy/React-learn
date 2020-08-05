import React, { Component } from "react";
import Like from "./common/like";
import Table from "./common/table";
import auth from "../services/authService";

class MoviesTable extends Component {
  columns = [
    { path: "title", name: "Title" },
    { path: "genre.name", name: "Genre" },
    { path: "numberInStock", name: "Stock" },
    { path: "dailyRentalRate", name: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like
          liked={movie.liked}
          movie={movie}
          onHandleLike={() => this.props.onLike(movie)}
        />
      ),
    },
  ];

  deleteColDueToAuth = {
    key: "delete",
    content: (movie) => (
      <button
        className="btn btn-danger"
        onClick={() => this.props.onDelete(movie._id)}
      >
        Delete
      </button>
    ),
  };
  constructor() {
    super();
    if (auth.getCurrentUser()) {
      this.columns.push(this.deleteColDueToAuth);
    }
  }

  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <Table
        data={movies}
        onSort={onSort}
        sortColumn={sortColumn}
        columns={this.columns}
      />
    );
  }
}

export default MoviesTable;
