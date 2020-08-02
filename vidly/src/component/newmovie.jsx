import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { getGenres } from "../services/genreServices";
import { getMovie, saveMovie } from "../services/movieServices";

class Newmovie extends Form {
  state = {
    data: { title: "", numberInStock: "", dailyRentalRate: "", genreId: "" },
    errors: {},
    genres: [],
  };

  async componentDidMount() {
    this.populateGenres();
    this.populateMovies();
  }

  async populateGenres() {
    const { data: genres } = await getGenres();
    this.setState({ genres });
  }

  async populateMovies() {
    try {
      const movieId = this.props.match.params.id;
      console.log(movieId);
      if (movieId === "new") return;
      const { data: movie } = await getMovie(movieId);
      this.setState({ data: this.mapToViewmodel(movie) });
      console.log(this.mapToViewmodel(movie));
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        return this.props.history.replace("/not-found");
    }
  }

  mapToViewmodel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }
  schema = {
    _id: Joi.string(),
    title: Joi.string().required().min(5).label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .required()
      .positive()
      .max(100)
      .label("Number In Stock"),
    dailyRentalRate: Joi.number().required().min(0).max(10).label("Rate"),
  };

  doSubmit = async () => {
    //call server
    await saveMovie(this.state.data);
    this.props.history.push("/movies");
    console.log("submitted");
  };
  render() {
    return (
      <div>
        <h1>Movie From</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title", true)}
          {this.renderSelect("genreId", "Genre")}
          {this.renderInput("numberInStock", "Number In Stock")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default Newmovie;
