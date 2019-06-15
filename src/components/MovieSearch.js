import React, { Component } from "react";
// import { Icon } from "antd";
import styles1 from "./carousel.module.css";

export default class h1 extends Component {
  render() {
    const { value, handleSubmit, handleChange } = this.props;
    return (
      <div>
        <nav
          className="navbar navbar-primary sticky-top"
          style={{
            background: "#FFFFFF"
          }}
        >
          <div className="navbar-brand text-primary text-slanted">
            <div
              className={styles1.textslanted}
              style={{
                color: "016FB9",
                textShadow: "3px 2px black",
                fontSize: 30,
                fontWeight: "bold",
                text: "italics",
                wordSpacing: -5,
                fontStyle: "italic"
              }}
            >
              MOVIEdock
              <div>
                {" "}
                <i class="fas fa-film" />
              </div>
              {/* <Icon
                type="picture"
                theme="filled"
                style={{
                  color: "#00ace6",
                  textShadow: "3px 2px white",
                  fontSize: 50,
                  fontWeight: "bold",
                  paddingLeft: 20,
                  paddingBottom: 20
                }}
              /> */}
            </div>
          </div>
          <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
            <input
              className="form-control mr-sm-1"
              type="search"
              placeholder="Enter movie name"
              aria-label="Search"
              value={value}
              style={{ borderRadius: 25 }}
              onChange={handleChange}
            />
            <button
              class="btn btn-outline-danger my-2 my-sm-0"
              style={{ borderRadius: 25 }}
              type="submit"
            >
              Search
            </button>
          </form>
        </nav>
      </div>
    );
  }
}
