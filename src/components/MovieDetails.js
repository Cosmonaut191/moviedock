import React, { Component } from "react";
import { Button } from "antd";
import { Spinner } from "react-bootstrap";

export default class RecipeDetails extends Component {
  state = {
    movie: [],
    yt: "",
    img: "",
    loading: true
  };

  hideSpinner = () => {
    this.setState({ loading: false });
  };
  async componentDidMount() {
    const id = this.props.id;
    const url = `
    https://api.themoviedb.org/3/movie/${id}?api_key=d4a045af8aa117cfcd54c91117217672&append_to_response=videos,images
    `;
    window.scrollTo(0, 0);
    try {
      const data = await fetch(url);
      const jsonData = await data.json();
      var yt = jsonData.videos.results[0].key;
      var img = jsonData.images.posters;
      this.setState(() => {
        return { movie: jsonData, yt: yt, img: img };
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { title, overview, tagline } = this.state.movie;

    return (
      <>
        <div className="container">
          <div className="row ">
            <Button
              className="ml-4"
              style={{
                background: "#3046aa ",
                color: "white",
                marginBottom: "5%",
                marginTop: "10%",
                paddingRight: 10,
                borderRadius: 25
              }}
              shape="round"
              onClick={() => {
                this.props.handleIndex(true);
              }}
            >
              Back to home
            </Button>
          </div>
          <div className="row ">
            <div className="col-12 mx-auto col-md-6 my-3  text-center  ">
              {this.state.loading ? (
                <Spinner animation="border" variant="light" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              ) : null}
              <iframe
                title={title}
                width="100%"
                height="371"
                src={`https://www.youtube.com/embed/${this.state.yt}`}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                oallowfullscreen="true"
                onLoad={this.hideSpinner}
                msallowfullscreen="true"
              />
            </div>

            <div className="col-10 mx-auto col-md-6 my-3">
              <h2 className="text-uppercase text-light">{title}</h2>
              <h6 className="text-light text-capitalize text-slanted">
                {tagline}
              </h6>
              <p className=" mt-4 text-light ">{overview}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
