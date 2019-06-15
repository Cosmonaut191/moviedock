import React, { Component } from "react";
// import { Button, Card } from "antd";
// const { Meta } = Card;
import "../App.css";

export default class Movie extends Component {
  render() {
    const { poster_path, release_date, title } = this.props.movie;
    const image_url = `https://image.tmdb.org/t/p/w1280/${poster_path}`;
    return (
      <>
        <div className="col-11 mx-auto col-md-6 col-lg-4 my-1">
          <div
            className="card bg-light border-0 shadow-lg point"
            onClick={this.props.handleDetails}
            style={{ cursor: "pointer" }}
          >
            <img
              src={image_url}
              style={{ height: "22rem" }}
              alt="movie"
              className="img-card-top"
            />
            <div
              className="card-body text-capitalize text-light"
              style={{ backgroundColor: "black" }}
            >
              <h5>
                <strong>{title}</strong>
              </h5>
              <div className="text-dark text-slanted text-muted">
                <h6>Release Date: {release_date}</h6>
              </div>
            </div>
           
          </div>
        </div>
      </>
    );
  }
}
