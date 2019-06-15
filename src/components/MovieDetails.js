import React, { Component } from "react";
import { Button } from "antd";

export default class RecipeDetails extends Component {
  state = {
    movie: [],
    yt: "",
    img: ""
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
      console.log(img);
      this.setState(() => {
        return { movie: jsonData, yt: yt, img: img };
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { title, overview, tagline } = this.state.movie;

    console.log(this.state.img);
    console.log(this.state.yt);
    // let im = this.state.img;
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
          <div className="row">
            <div className="col-12 mx-auto col-md-6 my-3">
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
          {/* <div className="row">
            <div className="col-11 mx-auto col-md-6 col-lg-4 my-1">
              {im.map(image => {
                return (
                  <div>
                    <img
                      src={`https://image.tmdb.org/t/p/w1280/${
                        image.file_path
                      }`}
                      alt={title}
                    />
                  </div>
                );
              })}
            </div>
          </div> */}
        </div>
      </>
    );
  }
}
