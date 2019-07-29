import React, { Component } from "react";
import MovieSearch from "./MovieSearch";
import PosterCarousel from "./PosterCarousel";
import Movie from "./Movie";

export default class MovieList extends Component {
  render() {
    const { movies, value, handleSubmit, handleChange, error } = this.props;
    return (
      <>
        <MovieSearch
          value={value}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <PosterCarousel
          movies={movies}
          className="carausel"
          handleDetails={this.props.handleDetails}
        />

        <div className="container my-5">
          <div className="row">
            <div className="col-10 col-md-6 mx-auto text-center text-uppercase mb-3" />
          </div>
          <div className="row">
            {error ? (
              <div>
                <h3 className="text-light ml-10 text-center">{error}</h3>
              </div>
            ) : (
              movies.map(movie => {
                return (
                  <Movie
                    key={movie.id}
                    movie={movie}
                    handleDetails={() => {
                      this.props.handleDetails(false, movie.id);
                    }}
                  />
                );
              })
            )}
          </div>
        </div>
      </>
    );
  }
}
