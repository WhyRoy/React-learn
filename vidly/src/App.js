import React from "react";
//import logo from './logo.svg';
import "./App.css";
import Movies from "./component/movies";
import Navbar from "./component/navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import Customers from "./component/customers";
import Rentals from "./component/rentals";
import NotFound from "./component/not-found";
import MoviesDetails from "./component/movieForm";
import LoginForm from "./component/loginForm";
import Register from "./component/registerForm";
import Newmovie from "./component/newmovie";

function App() {
  return (
    <main className="container">
      <Navbar />
      <div>
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={Register} />
          <Route path="/movies/new" component={Newmovie} />
          <Route path="/movies/:id" component={MoviesDetails} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </main>
  );
}

export default App;
