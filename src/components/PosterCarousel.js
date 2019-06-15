import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import styles from "./carousel.module.css";

export default class PosterCarousel extends Component {
  render() {
    const { movies } = this.props;

    let backdrop = movies.filter(x => x.vote_average > 6);

    return (
      <div className="col-12">
        <Carousel>
          {backdrop.map(movie => {
            return (
              <Carousel.Item
                className={styles.carImage}
                style={{ cursor: "pointer" }}
                key={movie.id}
                onClick={() => {
                  this.props.handleDetails(false, movie.id);
                }}
              >
                <img
                  className="d-block w-90 "
                  style={{ height: "60vh", width: "100%" }}
                  src={`https://image.tmdb.org/t/p/w1280/${
                    movie.backdrop_path
                  } `}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h1 style={{ fontSize: "3vh" }}>{movie.title}</h1>
                  <h4 style={{ fontSize: "2vh" }}>{`Rating:${
                    movie.vote_average
                  }\\10`}</h4>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    );
  }
}
