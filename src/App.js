import React, { Component } from "react";
import "./App.css";

// import { Row, Col, Card, Icon } from "antd";

// import { recipes } from "./tempList";
import MovieDetails from "./components/MovieDetails";
import MovieList from "./components/MovieList";

class App extends Component {
  state = {
    movies: [],
    url:
      "https://api.themoviedb.org/3/movie/popular?api_key=d4a045af8aa117cfcd54c91117217672&language=en-US&page=1",

    id: 35384,
    screen: true,
    search: "",
    error: ""
  };

  async getMovies() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      // if (jsonData.results.length === 0) {
      //   this.setState(() => {
      //     return { error: "Sorry, No results found" };
      //   });
      // } else {
      // console.log(jsonData);
      this.setState(() => {
        return { movies: jsonData.results };
      });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getMovies();
  }

  handleIndex = index => {
    this.setState({
      screen: index
    });
  };

  handleDetails = (index, id) => {
    this.setState({
      screen: index,
      id: id
    });
  };

  handleChange = e => {
    this.setState(
      { search: e.target.value }
      // , () =>
      // console.log(this.state.search)
    );
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState(
      () => {
        return {
          url: `https://api.themoviedb.org/3/search/movie?api_key=d4a045af8aa117cfcd54c91117217672&language=en-US&query=${
            this.state.search
          }&page=1&include_adult=false`,
          search: ""
        };
      },
      () => {
        this.getMovies();
      }
    );
  };

  render() {
    // console.log(this.state.movies);

    return (
      <div className="App">
        {this.state.screen ? (
          <>
            <MovieList
              movies={this.state.movies}
              handleDetails={this.handleDetails}
              value={this.state.search}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              error={this.state.error}
              handleIndex={this.handleIndex}
            />
          </>
        ) : (
          <MovieDetails handleIndex={this.handleIndex} id={this.state.id} />
        )}
      </div>
    );
  }
}
export default App;
