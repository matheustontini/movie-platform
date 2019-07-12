import React from "react";
import ReactDOM from "react-dom";
import Section from "./components/Section/Section.jsx";
import Description from "./components/Description/Description.jsx";
import "./index.scss";
import "./index.html";

class App extends React.Component {
  state = {
    movies: [],
    series: [],
    family: [],
    documentary: [],
    key: "4b913b0b00e4cfdbd1de24b4bb793642",
    page: "list",
    movieDetails: []
  };

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        this.state.key
      }&language=en-US&page=1`
    )
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          movies: json.results
        });
      });
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${
        this.state.key
      }&language=en-US&page=1`
    )
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          series: json.results
        });
      });
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${
        this.state.key
      }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=10751`
    )
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          family: json.results
        });
      });
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${
        this.state.key
      }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=99`
    )
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          documentary: json.results
        });
      });
  }

  showDescription = (id, type) => {
    fetch(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=${this.state.key}`
    )
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          movieDetails: json,
          page: "description"
        });
      });
  };

  showList = () => {
    this.setState({
      page: "list"
    });
  };

  render() {
    if (this.state.page === "list") {
      return (
        <>
          <div className="row">
            <h1>Movie Platform</h1>
          </div>
          <Section
            title="Popular movies"
            data={this.state.movies}
            showDescription={this.showDescription}
            type="movie"
          />
          <Section
            title="Popular TV series"
            data={this.state.series}
            showDescription={this.showDescription}
            type="tv"
          />
          <Section
            title="Family"
            data={this.state.family}
            showDescription={this.showDescription}
            type="movie"
          />
          <Section
            title="Documentary"
            data={this.state.documentary}
            showDescription={this.showDescription}
            type="movie"
          />
        </>
      );
    } else {
      return (
        <>
          <div className="row">
            <h1>Movie Platform</h1>
          </div>
          <Description
            data={this.state.movieDetails}
            showList={this.showList}
          />
        </>
      );
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
